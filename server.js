const express = require('express');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const sharp = require('sharp');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

const STAFF_PASSWORD = process.env.STAFF_PASSWORD || null; // first-layer login — record sales only
const OWNER_PASSWORD = process.env.OWNER_PASSWORD || null; // second-layer login — unlocks Overview + Products
const SESSION_SECRET = process.env.SESSION_SECRET || crypto.randomBytes(32).toString('hex');
const SESSION_COOKIE = 'ss_admin';
const SESSION_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 4 * 1024 * 1024 } });

const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    })
  : null;

const stripe = process.env.STRIPE_SECRET_KEY ? require('stripe')(process.env.STRIPE_SECRET_KEY) : null;

const CATEGORY_IMAGE = {
  phones: '/assets/products/phone.svg',
  laptops: '/assets/products/laptop.svg',
  parts: '/assets/products/parts.svg',
};

const PRODUCT_COLUMNS = `
  id, category, name, specs, price_cents, condition, icon, image_url, stock,
  created_at, updated_at, (image_data IS NOT NULL) AS has_image
`;

const PRODUCT_PHOTO_SIZE = 800;

async function normalizeProductPhoto(buffer) {
  return sharp(buffer)
    .rotate() // auto-orient using EXIF before cropping
    .resize(PRODUCT_PHOTO_SIZE, PRODUCT_PHOTO_SIZE, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 85 })
    .toBuffer();
}

function withImageSrc(row) {
  const version = row.updated_at ? new Date(row.updated_at).getTime() : 0;
  return {
    ...row,
    image_src: row.has_image ? `/api/products/${row.id}/image?v=${version}` : (row.image_url || CATEGORY_IMAGE[row.category] || null),
  };
}

const SEED_PRODUCTS = [
  ['phones', 'Flagship 6.7" 5G Smartphone', '256GB storage · Triple camera system · All-day battery', 89900, 'New', '📱'],
  ['phones', 'Compact 6.1" 5G Smartphone', '128GB storage · Dual camera system · Compact frame', 64900, 'New', '📱'],
  ['phones', 'Flagship 6.7" 5G Smartphone', '256GB storage · Battery health tested · 90-day warranty', 54900, 'Certified Refurbished', '📱'],
  ['phones', 'Budget 5G Smartphone', '128GB storage · Single camera · 2-day battery life', 29900, 'New', '📱'],
  ['laptops', '14" Ultrabook', '16GB RAM · 512GB SSD · 18-hour battery', 119900, 'New', '💻'],
  ['laptops', '15" Performance Laptop', '32GB RAM · 1TB SSD · Dedicated GPU', 159900, 'New', '💻'],
  ['laptops', '13" Ultrabook', '8GB RAM · 256GB SSD · New battery installed', 64900, 'Certified Refurbished', '💻'],
  ['laptops', '16" Creator Laptop', '32GB RAM · 1TB SSD · Discrete GPU · Color-accurate display', 189900, 'New', '💻'],
  ['parts', 'Replacement OLED Screen Assembly', 'Fits most flagship phone models · Includes install', 12900, 'New', '🔧'],
  ['parts', 'High-Capacity Battery Pack', 'OEM-spec replacement · Includes install', 3900, 'New', '🔋'],
  ['parts', 'USB-C Fast Charger (65W)', 'Compact GaN design · Multi-device compatible', 2900, 'New', '🔌'],
  ['parts', 'Laptop RAM Upgrade Kit (16GB)', 'Includes install & diagnostics', 5900, 'New', '🛠️'],
  ['parts', 'Protective Case + Tempered Glass Bundle', 'Fits most current phone models', 2400, 'New', '🛡️'],
  ['parts', 'SSD Upgrade Kit (1TB NVMe)', 'Includes data migration & install', 8900, 'New', '💾'],
];

async function initDb() {
  if (!pool) {
    console.warn('DATABASE_URL not set — /api/products and /admin will be unavailable until it is configured.');
    return;
  }
  await pool.query(`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      category TEXT NOT NULL,
      name TEXT NOT NULL,
      specs TEXT NOT NULL DEFAULT '',
      price_cents INTEGER NOT NULL,
      condition TEXT NOT NULL DEFAULT 'New',
      icon TEXT NOT NULL DEFAULT '📦',
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
  await pool.query(`ALTER TABLE products ADD COLUMN IF NOT EXISTS image_url TEXT`);
  await pool.query(`ALTER TABLE products ADD COLUMN IF NOT EXISTS stock INTEGER NOT NULL DEFAULT 25`);
  await pool.query(`ALTER TABLE products ADD COLUMN IF NOT EXISTS image_data BYTEA`);
  await pool.query(`ALTER TABLE products ADD COLUMN IF NOT EXISTS image_mime TEXT`);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS orders (
      id SERIAL PRIMARY KEY,
      stripe_session_id TEXT UNIQUE NOT NULL,
      customer_email TEXT,
      customer_name TEXT,
      shipping_address JSONB,
      status TEXT NOT NULL DEFAULT 'paid',
      fulfillment_status TEXT NOT NULL DEFAULT 'unfulfilled',
      total_cents INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
  await pool.query(`ALTER TABLE orders ADD COLUMN IF NOT EXISTS channel TEXT NOT NULL DEFAULT 'online'`);
  await pool.query(`ALTER TABLE orders ADD COLUMN IF NOT EXISTS payment_method TEXT`);
  await pool.query(`ALTER TABLE orders ADD COLUMN IF NOT EXISTS customer_phone TEXT`);
  await pool.query(`UPDATE orders SET payment_method = 'stripe' WHERE payment_method IS NULL`);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS order_items (
      id SERIAL PRIMARY KEY,
      order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
      product_id INTEGER REFERENCES products(id) ON DELETE SET NULL,
      name TEXT NOT NULL,
      price_cents INTEGER NOT NULL,
      quantity INTEGER NOT NULL
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      product_name TEXT,
      message TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'new',
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);

  const { rows } = await pool.query('SELECT COUNT(*)::int AS count FROM products');
  if (rows[0].count === 0) {
    for (const [category, name, specs, price_cents, condition, icon] of SEED_PRODUCTS) {
      await pool.query(
        'INSERT INTO products (category, name, specs, price_cents, condition, icon, image_url) VALUES ($1,$2,$3,$4,$5,$6,$7)',
        [category, name, specs, price_cents, condition, icon, CATEGORY_IMAGE[category] || null]
      );
    }
    console.log(`Seeded ${SEED_PRODUCTS.length} products.`);
  }

  for (const [category, imageUrl] of Object.entries(CATEGORY_IMAGE)) {
    await pool.query('UPDATE products SET image_url = $1 WHERE category = $2 AND image_url IS NULL', [imageUrl, category]);
  }
}

app.use(express.json());
app.use(express.static(path.join(__dirname)));

/* ---------- Session helpers (stateless, HMAC-signed cookie) ---------- */
function parseCookies(req) {
  const header = req.headers.cookie;
  const out = {};
  if (!header) return out;
  header.split(';').forEach((part) => {
    const idx = part.indexOf('=');
    if (idx === -1) return;
    out[part.slice(0, idx).trim()] = decodeURIComponent(part.slice(idx + 1).trim());
  });
  return out;
}

function signSession(expiresAt, role) {
  const payload = `${expiresAt}:${role}`;
  const sig = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('hex');
  return `${payload}.${sig}`;
}

function verifySession(token) {
  if (!token) return null;
  const sepIdx = token.lastIndexOf('.');
  if (sepIdx === -1) return null;
  const payload = token.slice(0, sepIdx);
  const sig = token.slice(sepIdx + 1);
  const expected = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('hex');
  const sigBuf = Buffer.from(sig);
  const expBuf = Buffer.from(expected);
  if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) return null;
  const [expiresAtStr, role] = payload.split(':');
  if (!(Number(expiresAtStr) > Date.now())) return null;
  return { role: role === 'owner' ? 'owner' : 'staff' };
}

function requireAdmin(req, res, next) {
  const cookies = parseCookies(req);
  const session = verifySession(cookies[SESSION_COOKIE]);
  if (!session) return res.status(401).json({ error: 'Not authenticated' });
  req.role = session.role;
  next();
}

function requireOwner(req, res, next) {
  const cookies = parseCookies(req);
  const session = verifySession(cookies[SESSION_COOKIE]);
  if (!session) return res.status(401).json({ error: 'Not authenticated' });
  if (session.role !== 'owner') return res.status(403).json({ error: 'Owner access only' });
  req.role = session.role;
  next();
}

function requireDb(req, res, next) {
  if (!pool) return res.status(503).json({ error: 'Database is not configured yet.' });
  next();
}

function requireStripe(req, res, next) {
  if (!stripe) return res.status(503).json({ error: 'Payments are not configured yet.' });
  next();
}

/* ---------- Public API ---------- */
app.get('/api/products', requireDb, async (req, res) => {
  const { rows } = await pool.query(`SELECT ${PRODUCT_COLUMNS} FROM products ORDER BY category, id`);
  res.json(rows.map(withImageSrc));
});

app.get('/api/products/:id/image', requireDb, async (req, res) => {
  const { rows } = await pool.query('SELECT image_data, image_mime FROM products WHERE id = $1', [req.params.id]);
  const row = rows[0];
  if (!row || !row.image_data) return res.status(404).end();
  res.setHeader('Content-Type', row.image_mime || 'image/jpeg');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.end(row.image_data);
});

app.post('/api/inquiries', requireDb, async (req, res) => {
  const { name, email, phone, product_name, message } = req.body || {};
  if (!String(name || '').trim() || !String(email || '').trim() || !String(message || '').trim()) {
    return res.status(400).json({ error: 'Name, email and message are required' });
  }
  await pool.query(
    'INSERT INTO inquiries (name, email, phone, product_name, message) VALUES ($1,$2,$3,$4,$5)',
    [name.trim(), email.trim(), phone ? phone.trim() : null, product_name ? product_name.trim() : null, message.trim()]
  );
  res.status(201).json({ ok: true });
});

/* ---------- Checkout (Stripe) ---------- */
app.post('/api/checkout', requireDb, requireStripe, async (req, res) => {
  const items = Array.isArray(req.body?.items) ? req.body.items : [];
  if (!items.length) return res.status(400).json({ error: 'Cart is empty' });

  const ids = items.map((i) => Number(i.id)).filter(Number.isFinite);
  const { rows: products } = await pool.query('SELECT id, name, specs, price_cents, stock FROM products WHERE id = ANY($1)', [ids]);
  const byId = Object.fromEntries(products.map((p) => [p.id, p]));

  const lineItems = [];
  for (const item of items) {
    const product = byId[Number(item.id)];
    const quantity = Math.max(1, Math.min(20, Math.round(Number(item.quantity) || 1)));
    if (!product) return res.status(400).json({ error: `Product ${item.id} no longer exists` });
    if (product.stock < quantity) return res.status(400).json({ error: `Only ${product.stock} left of "${product.name}"` });
    lineItems.push({
      quantity,
      price_data: {
        currency: 'usd',
        unit_amount: product.price_cents,
        product_data: {
          name: product.name,
          description: product.specs || undefined,
          metadata: { product_id: String(product.id) },
        },
      },
    });
  }

  const origin = `${req.protocol}://${req.get('host')}`;
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: lineItems,
    shipping_address_collection: { allowed_countries: ['US'] },
    phone_number_collection: { enabled: true },
    success_url: `${origin}/work/tech-store.html?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/work/tech-store.html?checkout=cancel`,
  });

  res.json({ url: session.url });
});

app.get('/api/checkout/confirm', requireDb, requireStripe, async (req, res) => {
  const sessionId = req.query.session_id;
  if (!sessionId) return res.status(400).json({ error: 'Missing session_id' });

  const existing = await pool.query('SELECT * FROM orders WHERE stripe_session_id = $1', [sessionId]);
  if (existing.rows[0]) {
    const items = await pool.query('SELECT name, price_cents, quantity FROM order_items WHERE order_id = $1', [existing.rows[0].id]);
    return res.json({ order: existing.rows[0], items: items.rows });
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ['customer_details'] });
  if (session.payment_status !== 'paid') {
    return res.status(400).json({ error: 'Payment not completed', status: session.payment_status });
  }

  const lineItems = await stripe.checkout.sessions.listLineItems(sessionId, { expand: ['data.price.product'], limit: 100 });

  const orderRes = await pool.query(
    `INSERT INTO orders (stripe_session_id, customer_email, customer_name, customer_phone, shipping_address, status, total_cents, channel, payment_method)
     VALUES ($1,$2,$3,$4,$5,'paid',$6,'online','stripe')
     ON CONFLICT (stripe_session_id) DO NOTHING RETURNING *`,
    [
      sessionId,
      session.customer_details?.email || null,
      session.customer_details?.name || null,
      session.customer_details?.phone || null,
      JSON.stringify(session.shipping_details?.address || session.customer_details?.address || null),
      session.amount_total || 0,
    ]
  );

  if (!orderRes.rows[0]) {
    // Lost a race with a concurrent confirm call — read back what the other call inserted.
    const again = await pool.query('SELECT * FROM orders WHERE stripe_session_id = $1', [sessionId]);
    const items = await pool.query('SELECT name, price_cents, quantity FROM order_items WHERE order_id = $1', [again.rows[0].id]);
    return res.json({ order: again.rows[0], items: items.rows });
  }

  const order = orderRes.rows[0];
  const itemRows = [];
  for (const li of lineItems.data) {
    const productId = li.price?.product?.metadata?.product_id ? Number(li.price.product.metadata.product_id) : null;
    await pool.query(
      'INSERT INTO order_items (order_id, product_id, name, price_cents, quantity) VALUES ($1,$2,$3,$4,$5)',
      [order.id, productId, li.description, li.price.unit_amount, li.quantity]
    );
    itemRows.push({ name: li.description, price_cents: li.price.unit_amount, quantity: li.quantity });
    if (productId) {
      await pool.query('UPDATE products SET stock = GREATEST(stock - $1, 0) WHERE id = $2', [li.quantity, productId]);
    }
  }

  res.json({ order, items: itemRows });
});

/* ---------- Admin auth ---------- */
function matchesPassword(candidate, expected) {
  if (!expected) return false;
  const candBuf = Buffer.from(String(candidate || ''));
  const expBuf = Buffer.from(expected);
  return candBuf.length === expBuf.length && crypto.timingSafeEqual(candBuf, expBuf);
}

app.post('/api/admin/login', (req, res) => {
  if (!STAFF_PASSWORD) {
    return res.status(503).json({ error: 'Staff password is not configured yet.' });
  }
  const { password } = req.body || {};
  if (!matchesPassword(password, STAFF_PASSWORD)) {
    return res.status(401).json({ error: 'Incorrect password' });
  }

  const expiresAt = Date.now() + SESSION_MAX_AGE_MS;
  const token = signSession(expiresAt, 'staff');
  res.setHeader('Set-Cookie', `${SESSION_COOKIE}=${encodeURIComponent(token)}; HttpOnly; Path=/; Max-Age=${Math.floor(SESSION_MAX_AGE_MS / 1000)}; SameSite=Strict`);
  res.json({ ok: true, role: 'staff' });
});

// Second-layer login: escalates an already-logged-in session to owner.
app.post('/api/admin/elevate', requireAdmin, (req, res) => {
  if (!OWNER_PASSWORD) {
    return res.status(503).json({ error: 'Owner password is not configured yet.' });
  }
  const { password } = req.body || {};
  if (!matchesPassword(password, OWNER_PASSWORD)) {
    return res.status(401).json({ error: 'Incorrect password' });
  }

  const expiresAt = Date.now() + SESSION_MAX_AGE_MS;
  const token = signSession(expiresAt, 'owner');
  res.setHeader('Set-Cookie', `${SESSION_COOKIE}=${encodeURIComponent(token)}; HttpOnly; Path=/; Max-Age=${Math.floor(SESSION_MAX_AGE_MS / 1000)}; SameSite=Strict`);
  res.json({ ok: true, role: 'owner' });
});

app.post('/api/admin/logout', (req, res) => {
  res.setHeader('Set-Cookie', `${SESSION_COOKIE}=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict`);
  res.json({ ok: true });
});

app.get('/api/admin/session', (req, res) => {
  const cookies = parseCookies(req);
  const session = verifySession(cookies[SESSION_COOKIE]);
  res.json({ loggedIn: !!session, role: session?.role || null });
});

/* ---------- Admin API — owner only: sales overview & order management ---------- */
app.get('/api/admin/overview', requireOwner, requireDb, async (req, res) => {
  const totalRes = await pool.query('SELECT COUNT(*)::int AS count FROM products');
  const byCategoryRes = await pool.query('SELECT category, COUNT(*)::int AS count FROM products GROUP BY category ORDER BY category');
  const lastUpdatedRes = await pool.query('SELECT MAX(updated_at) AS updated_at FROM products');
  const salesRes = await pool.query(`
    SELECT COALESCE(SUM(total_cents),0)::int AS revenue_cents, COUNT(*)::int AS order_count
    FROM orders WHERE created_at >= now() - interval '30 days'
  `);
  res.json({
    totalProducts: totalRes.rows[0].count,
    byCategory: byCategoryRes.rows,
    lastUpdated: lastUpdatedRes.rows[0].updated_at,
    revenue30dCents: salesRes.rows[0].revenue_cents,
    orders30d: salesRes.rows[0].order_count,
  });
});

app.get('/api/admin/products', requireAdmin, requireDb, async (req, res) => {
  const { rows } = await pool.query(`SELECT ${PRODUCT_COLUMNS} FROM products ORDER BY category, id`);
  res.json(rows.map(withImageSrc));
});

app.post('/api/admin/products', requireAdmin, requireDb, upload.single('image'), async (req, res) => {
  const { category, name, specs, condition, icon, image_url } = req.body || {};
  const price_cents = Math.round(parseFloat(req.body?.price_cents));
  const stock = req.body?.stock ? Math.round(parseFloat(req.body.stock)) : 25;
  if (!category || !name || !Number.isFinite(price_cents)) {
    return res.status(400).json({ error: 'category, name and price_cents are required' });
  }
  const imageData = req.file ? await normalizeProductPhoto(req.file.buffer) : null;
  const { rows } = await pool.query(
    `INSERT INTO products (category, name, specs, price_cents, condition, icon, image_url, stock, image_data, image_mime)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING ${PRODUCT_COLUMNS}`,
    [
      category, name, specs || '', price_cents, condition || 'New', icon || '📦',
      image_url || CATEGORY_IMAGE[category] || null, stock,
      imageData, imageData ? 'image/jpeg' : null,
    ]
  );
  res.status(201).json(withImageSrc(rows[0]));
});

app.put('/api/admin/products/:id', requireAdmin, requireDb, upload.single('image'), async (req, res) => {
  const { id } = req.params;
  const { category, name, specs, condition, icon, image_url } = req.body || {};
  const price_cents = Math.round(parseFloat(req.body?.price_cents));
  const stock = req.body?.stock ? Math.round(parseFloat(req.body.stock)) : 25;
  if (!category || !name || !Number.isFinite(price_cents)) {
    return res.status(400).json({ error: 'category, name and price_cents are required' });
  }

  const params = [category, name, specs || '', price_cents, condition || 'New', icon || '📦', image_url || CATEGORY_IMAGE[category] || null, stock];
  let imageClause = '';
  if (req.file) {
    const imageData = await normalizeProductPhoto(req.file.buffer);
    imageClause = `, image_data = $${params.length + 1}, image_mime = $${params.length + 2}`;
    params.push(imageData, 'image/jpeg');
  } else if (req.body?.remove_image === 'true') {
    imageClause = ', image_data = NULL, image_mime = NULL';
  }
  params.push(id);

  const { rows } = await pool.query(
    `UPDATE products SET category=$1, name=$2, specs=$3, price_cents=$4, condition=$5, icon=$6, image_url=$7, stock=$8, updated_at=now()${imageClause}
     WHERE id = $${params.length} RETURNING ${PRODUCT_COLUMNS}`,
    params
  );
  if (!rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(withImageSrc(rows[0]));
});

app.delete('/api/admin/products/:id', requireAdmin, requireDb, async (req, res) => {
  const { id } = req.params;
  const { rowCount } = await pool.query('DELETE FROM products WHERE id=$1', [id]);
  if (!rowCount) return res.status(404).json({ error: 'Not found' });
  res.status(204).end();
});

app.get('/api/admin/orders', requireOwner, requireDb, async (req, res) => {
  const { rows: orders } = await pool.query('SELECT * FROM orders ORDER BY created_at DESC LIMIT 200');
  const { rows: items } = await pool.query(
    'SELECT * FROM order_items WHERE order_id = ANY($1)',
    [orders.map((o) => o.id)]
  );
  const itemsByOrder = {};
  for (const item of items) {
    (itemsByOrder[item.order_id] ||= []).push(item);
  }
  res.json(orders.map((o) => ({ ...o, items: itemsByOrder[o.id] || [] })));
});

app.put('/api/admin/orders/:id/fulfillment', requireOwner, requireDb, async (req, res) => {
  const { id } = req.params;
  const status = req.body?.fulfillment_status === 'fulfilled' ? 'fulfilled' : 'unfulfilled';
  const { rows } = await pool.query(
    'UPDATE orders SET fulfillment_status = $1 WHERE id = $2 RETURNING *',
    [status, id]
  );
  if (!rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(rows[0]);
});

/* ---------- Admin API — any logged-in staff: record in-store sales ---------- */
app.get('/api/admin/orders/:id', requireAdmin, requireDb, async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM orders WHERE id = $1', [req.params.id]);
  if (!rows[0]) return res.status(404).json({ error: 'Not found' });
  const items = await pool.query('SELECT name, price_cents, quantity FROM order_items WHERE order_id = $1', [req.params.id]);
  res.json({ order: rows[0], items: items.rows });
});

app.post('/api/admin/orders', requireAdmin, requireDb, async (req, res) => {
  const { customer_name, customer_email, customer_phone, payment_method, items } = req.body || {};
  if (!Array.isArray(items) || !items.length) {
    return res.status(400).json({ error: 'At least one line item is required' });
  }

  const cleanItems = [];
  let total = 0;
  for (const item of items) {
    const name = String(item.name || '').trim();
    const price_cents = Math.round(Number(item.price_cents));
    const quantity = Math.max(1, Math.round(Number(item.quantity) || 1));
    if (!name || !Number.isFinite(price_cents) || price_cents < 0) {
      return res.status(400).json({ error: 'Each line item needs a name and a valid price' });
    }
    total += price_cents * quantity;
    const productId = Number.isFinite(Number(item.product_id)) ? Number(item.product_id) : null;
    cleanItems.push({ productId, name, price_cents, quantity });
  }

  const syntheticSessionId = `instore-${crypto.randomUUID()}`;
  const orderRes = await pool.query(
    `INSERT INTO orders (stripe_session_id, customer_email, customer_name, customer_phone, status, fulfillment_status, total_cents, channel, payment_method)
     VALUES ($1,$2,$3,$4,'paid','fulfilled',$5,'in_store',$6) RETURNING *`,
    [syntheticSessionId, customer_email || null, customer_name || null, customer_phone || null, total, payment_method || 'cash']
  );
  const order = orderRes.rows[0];

  const itemRows = [];
  for (const it of cleanItems) {
    await pool.query(
      'INSERT INTO order_items (order_id, product_id, name, price_cents, quantity) VALUES ($1,$2,$3,$4,$5)',
      [order.id, it.productId, it.name, it.price_cents, it.quantity]
    );
    itemRows.push({ name: it.name, price_cents: it.price_cents, quantity: it.quantity });
    if (it.productId) {
      await pool.query('UPDATE products SET stock = GREATEST(stock - $1, 0) WHERE id = $2', [it.quantity, it.productId]);
    }
  }

  res.status(201).json({ order, items: itemRows });
});

/* ---------- Admin API — owner + staff: customer inquiries ---------- */
app.get('/api/admin/inquiries', requireAdmin, requireDb, async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 200');
  res.json(rows);
});

app.put('/api/admin/inquiries/:id/status', requireAdmin, requireDb, async (req, res) => {
  const { id } = req.params;
  const status = req.body?.status === 'read' ? 'read' : 'new';
  const { rows } = await pool.query('UPDATE inquiries SET status = $1 WHERE id = $2 RETURNING *', [status, id]);
  if (!rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(rows[0]);
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

initDb()
  .catch((err) => console.error('DB init failed:', err.message))
  .finally(() => {
    app.listen(PORT, () => {
      console.log(`Smart Solutions site running on port ${PORT}`);
    });
  });
