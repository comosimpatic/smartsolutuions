const express = require('express');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const sharp = require('sharp');
const sanitizeHtml = require('sanitize-html');
const { Pool } = require('pg');
const zoho = require('./zoho');

const app = express();
const PORT = process.env.PORT || 3000;

// Express 4 doesn't auto-catch rejected promises from async route handlers,
// and Node terminates the whole process on an unhandled rejection by
// default — one bad DB call anywhere would take the entire site down.
// Log instead of crashing; individual routes below still handle their own
// errors properly, this is a last-resort net for the ones that don't.
process.on('unhandledRejection', (err) => {
  console.error('Unhandled promise rejection:', err);
});

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
const anthropic = process.env.ANTHROPIC_API_KEY
  ? new (require('@anthropic-ai/sdk'))({ apiKey: process.env.ANTHROPIC_API_KEY })
  : null;

const LOW_STOCK_THRESHOLD = 3;

const CATEGORY_IMAGE = {
  phones: '/assets/products/phone.svg',
  laptops: '/assets/products/laptop.svg',
  parts: '/assets/products/parts.svg',
};

const PRODUCT_COLUMNS = `
  id, category, name, specs, price_cents, condition, icon, image_url, stock, barcode,
  created_at, updated_at, (image_data IS NOT NULL) AS has_image
`;

const SERVICE_COLUMNS = `id, name, description, price_cents, icon, active, created_at, updated_at`;

const SEED_SERVICES = [
  ['Phone screen repair', 'Cracked or unresponsive screen replacement', 8900, '📱'],
  ['Battery replacement', 'New battery install for phone or laptop', 3900, '🔋'],
  ['Diagnostic', 'Full hardware & software diagnostic check', 1900, '🔍'],
  ['Data recovery', 'Recover data from a damaged or non-booting device', 6900, '💾'],
  ['Software / virus cleanup', 'Malware removal, OS repair, performance tune-up', 4900, '🛠️'],
  ['Laptop screen repair', 'Cracked or damaged laptop display replacement', 14900, '💻'],
];

const PRODUCT_PHOTO_SIZE = 800;

async function normalizeProductPhoto(buffer) {
  return sharp(buffer)
    .rotate() // auto-orient using EXIF before cropping
    .resize(PRODUCT_PHOTO_SIZE, PRODUCT_PHOTO_SIZE, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 85 })
    .toBuffer();
}

const RICH_TEXT_OPTIONS = {
  allowedTags: ['b', 'strong', 'i', 'em', 'a', 'br'],
  allowedAttributes: { a: ['href'] },
  allowedSchemes: ['http', 'https', 'mailto'],
};

function sanitizeRichText(html) {
  return sanitizeHtml(String(html || ''), RICH_TEXT_OPTIONS).trim();
}

async function normalizePromoImage(buffer) {
  const img = sharp(buffer).rotate().resize(1000, 1000, { fit: 'inside', withoutEnlargement: true });
  const meta = await img.metadata();
  return meta.hasAlpha
    ? { buffer: await img.png().toBuffer(), mime: 'image/png' }
    : { buffer: await img.jpeg({ quality: 88 }).toBuffer(), mime: 'image/jpeg' };
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
  await pool.query(`ALTER TABLE products ADD COLUMN IF NOT EXISTS barcode TEXT`);
  await pool.query(`CREATE UNIQUE INDEX IF NOT EXISTS products_barcode_key ON products (barcode) WHERE barcode IS NOT NULL AND barcode <> ''`);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS services (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT NOT NULL DEFAULT '',
      price_cents INTEGER NOT NULL,
      icon TEXT NOT NULL DEFAULT '🛠️',
      active BOOLEAN NOT NULL DEFAULT true,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);

  const { rows: serviceCountRows } = await pool.query('SELECT COUNT(*)::int AS count FROM services');
  if (serviceCountRows[0].count === 0) {
    for (const [name, description, price_cents, icon] of SEED_SERVICES) {
      await pool.query(
        'INSERT INTO services (name, description, price_cents, icon) VALUES ($1,$2,$3,$4)',
        [name, description, price_cents, icon]
      );
    }
    console.log(`Seeded ${SEED_SERVICES.length} services.`);
  }

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
  await pool.query(`ALTER TABLE orders ADD COLUMN IF NOT EXISTS zoho_invoice_id TEXT`);
  await pool.query(`ALTER TABLE orders ADD COLUMN IF NOT EXISTS zoho_sync_status TEXT NOT NULL DEFAULT 'pending'`);
  await pool.query(`ALTER TABLE orders ADD COLUMN IF NOT EXISTS zoho_sync_error TEXT`);
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
  await pool.query(`ALTER TABLE order_items ADD COLUMN IF NOT EXISTS service_id INTEGER REFERENCES services(id) ON DELETE SET NULL`);

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

  await pool.query(`
    CREATE TABLE IF NOT EXISTS promo_banner (
      id INTEGER PRIMARY KEY DEFAULT 1,
      headline TEXT NOT NULL DEFAULT '',
      subtext TEXT NOT NULL DEFAULT '',
      cta_text TEXT NOT NULL DEFAULT 'Shop now',
      cta_link TEXT NOT NULL DEFAULT '#tp-search',
      image_data BYTEA,
      image_mime TEXT,
      enabled BOOLEAN NOT NULL DEFAULT false,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      CONSTRAINT promo_banner_single_row CHECK (id = 1)
    );
  `);
  await pool.query(`INSERT INTO promo_banner (id) VALUES (1) ON CONFLICT (id) DO NOTHING`);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS admin_credentials (
      id INTEGER PRIMARY KEY DEFAULT 1,
      staff_password_hash TEXT,
      owner_password_hash TEXT,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      CONSTRAINT admin_credentials_single_row CHECK (id = 1)
    );
  `);
  await pool.query(`INSERT INTO admin_credentials (id) VALUES (1) ON CONFLICT (id) DO NOTHING`);

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

function requireAnthropic(req, res, next) {
  if (!anthropic) return res.status(503).json({ error: 'AI insights are not configured yet.' });
  next();
}

/* ---------- Live dashboard feed (Server-Sent Events) ---------- */
let sseClients = [];

function broadcastEvent(type, data) {
  const payload = `data: ${JSON.stringify({ type, ...data, at: new Date().toISOString() })}\n\n`;
  sseClients.forEach((res) => res.write(payload));
}

setInterval(() => {
  sseClients.forEach((res) => res.write(':ping\n\n'));
}, 25000);

app.get('/api/admin/events', requireAdmin, (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();
  res.write(':connected\n\n');
  sseClients.push(res);
  req.on('close', () => {
    sseClients = sseClients.filter((c) => c !== res);
  });
});

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

/* ---------- Promo banner ---------- */
app.get('/api/promo', requireDb, async (req, res) => {
  const { rows } = await pool.query('SELECT headline, subtext, cta_text, cta_link, enabled, updated_at, (image_data IS NOT NULL) AS has_image FROM promo_banner WHERE id = 1');
  const row = rows[0];
  if (!row || !row.enabled) return res.json({ enabled: false });
  const version = row.updated_at ? new Date(row.updated_at).getTime() : 0;
  res.json({ ...row, image_src: row.has_image ? `/api/promo/image?v=${version}` : null });
});

app.get('/api/promo/image', requireDb, async (req, res) => {
  const { rows } = await pool.query('SELECT image_data, image_mime FROM promo_banner WHERE id = 1');
  const row = rows[0];
  if (!row || !row.image_data) return res.status(404).end();
  res.setHeader('Content-Type', row.image_mime || 'image/png');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.end(row.image_data);
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
      const { rows: stockRows } = await pool.query(
        'UPDATE products SET stock = GREATEST(stock - $1, 0) WHERE id = $2 RETURNING name, stock',
        [li.quantity, productId]
      );
      if (stockRows[0] && stockRows[0].stock <= LOW_STOCK_THRESHOLD) {
        broadcastEvent('low_stock', { name: stockRows[0].name, stock: stockRows[0].stock });
      }
    }
  }

  broadcastEvent('sale', { channel: 'online', total_cents: order.total_cents, items: itemRows });
  zoho.syncOrderToZoho(pool, order.id).catch((err) => console.error('Zoho sync (unexpected):', err.message)); // fire-and-forget — never blocks the checkout response
  res.json({ order, items: itemRows });
});

/* ---------- Admin auth ---------- */
function matchesPassword(candidate, expected) {
  if (!expected) return false;
  const candBuf = Buffer.from(String(candidate || ''));
  const expBuf = Buffer.from(expected);
  return candBuf.length === expBuf.length && crypto.timingSafeEqual(candBuf, expBuf);
}

function hashPassword(plain) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(plain, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function verifyHashedPassword(candidate, stored) {
  if (!stored) return false;
  const [salt, hash] = stored.split(':');
  if (!salt || !hash) return false;
  const candBuf = crypto.scryptSync(String(candidate || ''), salt, 64);
  const hashBuf = Buffer.from(hash, 'hex');
  return candBuf.length === hashBuf.length && crypto.timingSafeEqual(candBuf, hashBuf);
}

// A password changed in the admin UI is stored (hashed) in the DB and takes priority;
// falls back to the STAFF_PASSWORD/OWNER_PASSWORD env vars until it's changed once.
async function checkPassword(role, candidate) {
  if (pool) {
    const { rows } = await pool.query('SELECT staff_password_hash, owner_password_hash FROM admin_credentials WHERE id = 1');
    const stored = role === 'owner' ? rows[0]?.owner_password_hash : rows[0]?.staff_password_hash;
    if (stored) return verifyHashedPassword(candidate, stored);
  }
  return matchesPassword(candidate, role === 'owner' ? OWNER_PASSWORD : STAFF_PASSWORD);
}

app.post('/api/admin/login', async (req, res) => {
  const { password } = req.body || {};
  if (!(await checkPassword('staff', password))) {
    return res.status(401).json({ error: 'Incorrect password' });
  }

  const expiresAt = Date.now() + SESSION_MAX_AGE_MS;
  const token = signSession(expiresAt, 'staff');
  res.setHeader('Set-Cookie', `${SESSION_COOKIE}=${encodeURIComponent(token)}; HttpOnly; Path=/; Max-Age=${Math.floor(SESSION_MAX_AGE_MS / 1000)}; SameSite=Strict`);
  res.json({ ok: true, role: 'staff' });
});

// Second-layer login: escalates an already-logged-in session to owner.
app.post('/api/admin/elevate', requireAdmin, async (req, res) => {
  const { password } = req.body || {};
  if (!(await checkPassword('owner', password))) {
    return res.status(401).json({ error: 'Incorrect password' });
  }

  const expiresAt = Date.now() + SESSION_MAX_AGE_MS;
  const token = signSession(expiresAt, 'owner');
  res.setHeader('Set-Cookie', `${SESSION_COOKIE}=${encodeURIComponent(token)}; HttpOnly; Path=/; Max-Age=${Math.floor(SESSION_MAX_AGE_MS / 1000)}; SameSite=Strict`);
  res.json({ ok: true, role: 'owner' });
});

// Owner-only: change the staff or owner login password (hashed, stored in the DB, overrides the env var).
app.put('/api/admin/password', requireOwner, requireDb, async (req, res) => {
  const { role, current_password, new_password } = req.body || {};
  if (role !== 'staff' && role !== 'owner') {
    return res.status(400).json({ error: 'role must be "staff" or "owner"' });
  }
  if (!new_password || String(new_password).length < 6) {
    return res.status(400).json({ error: 'New password must be at least 6 characters' });
  }
  if (!(await checkPassword('owner', current_password))) {
    return res.status(401).json({ error: 'Current owner password is incorrect' });
  }

  const column = role === 'owner' ? 'owner_password_hash' : 'staff_password_hash';
  await pool.query(
    `INSERT INTO admin_credentials (id, ${column}) VALUES (1, $1)
     ON CONFLICT (id) DO UPDATE SET ${column} = $1, updated_at = now()`,
    [hashPassword(new_password)]
  );
  res.json({ ok: true });
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
  const todayRes = await pool.query(`
    SELECT COALESCE(SUM(total_cents),0)::int AS revenue_cents, COUNT(*)::int AS order_count
    FROM orders WHERE created_at >= date_trunc('day', now())
  `);
  const lowStockRes = await pool.query(
    'SELECT id, name, stock FROM products WHERE stock <= $1 ORDER BY stock ASC LIMIT 20',
    [LOW_STOCK_THRESHOLD]
  );
  res.json({
    totalProducts: totalRes.rows[0].count,
    byCategory: byCategoryRes.rows,
    lastUpdated: lastUpdatedRes.rows[0].updated_at,
    revenue30dCents: salesRes.rows[0].revenue_cents,
    orders30d: salesRes.rows[0].order_count,
    revenueTodayCents: todayRes.rows[0].revenue_cents,
    ordersToday: todayRes.rows[0].order_count,
    lowStock: lowStockRes.rows,
  });
});

app.get('/api/admin/revenue-today', requireOwner, requireDb, async (req, res) => {
  const [breakdownRes, channelRes] = await Promise.all([
    pool.query(`
      SELECT
        COALESCE(SUM(CASE WHEN oi.product_id IS NOT NULL THEN oi.price_cents*oi.quantity ELSE 0 END),0)::int AS product_revenue_cents,
        COUNT(DISTINCT CASE WHEN oi.product_id IS NOT NULL THEN oi.id END)::int AS product_line_count,
        COALESCE(SUM(CASE WHEN oi.service_id IS NOT NULL THEN oi.price_cents*oi.quantity ELSE 0 END),0)::int AS service_revenue_cents,
        COUNT(DISTINCT CASE WHEN oi.service_id IS NOT NULL THEN oi.id END)::int AS service_line_count,
        COALESCE(SUM(CASE WHEN oi.product_id IS NULL AND oi.service_id IS NULL THEN oi.price_cents*oi.quantity ELSE 0 END),0)::int AS other_revenue_cents
      FROM order_items oi JOIN orders o ON o.id = oi.order_id
      WHERE o.created_at >= date_trunc('day', now())
    `),
    pool.query(`
      SELECT channel, COALESCE(SUM(total_cents),0)::int AS revenue_cents, COUNT(*)::int AS orders
      FROM orders WHERE created_at >= date_trunc('day', now()) GROUP BY channel
    `),
  ]);
  const b = breakdownRes.rows[0];
  res.json({
    productRevenueCents: b.product_revenue_cents,
    productLineCount: b.product_line_count,
    serviceRevenueCents: b.service_revenue_cents,
    serviceLineCount: b.service_line_count,
    otherRevenueCents: b.other_revenue_cents,
    byChannel: channelRes.rows,
  });
});

app.get('/api/admin/revenue-trend', requireOwner, requireDb, async (req, res) => {
  const [totalsRes, weeklyRes] = await Promise.all([
    pool.query(`
      SELECT
        (SELECT COALESCE(SUM(total_cents),0)::int FROM orders WHERE created_at >= now() - interval '7 days') AS week_cents,
        (SELECT COALESCE(SUM(total_cents),0)::int FROM orders WHERE created_at >= now() - interval '30 days') AS month_cents,
        (SELECT COALESCE(SUM(total_cents),0)::int FROM orders WHERE created_at >= now() - interval '90 days') AS quarter_cents
    `),
    pool.query(`
      WITH weeks AS (
        SELECT generate_series(date_trunc('week', now()) - interval '11 weeks', date_trunc('week', now()), interval '1 week') AS week_start
      )
      SELECT w.week_start, COALESCE(SUM(o.total_cents),0)::int AS revenue_cents
      FROM weeks w
      LEFT JOIN orders o ON date_trunc('week', o.created_at) = w.week_start
      GROUP BY w.week_start ORDER BY w.week_start
    `),
  ]);
  res.json({
    weekCents: totalsRes.rows[0].week_cents,
    monthCents: totalsRes.rows[0].month_cents,
    quarterCents: totalsRes.rows[0].quarter_cents,
    weeklySeries: weeklyRes.rows.map((r) => ({ weekStart: r.week_start, revenueCents: r.revenue_cents })),
  });
});

app.get('/api/admin/inventory', requireAdmin, requireDb, async (req, res) => {
  const [categoryRes, salesRes, serviceCountRes, serviceSalesRes] = await Promise.all([
    pool.query(`
      SELECT category, COUNT(*)::int AS product_count, COALESCE(SUM(stock),0)::int AS total_stock
      FROM products GROUP BY category ORDER BY category
    `),
    pool.query(`
      WITH days AS (
        SELECT generate_series(current_date - interval '6 days', current_date, interval '1 day')::date AS day
      ),
      cat_sales AS (
        SELECT p.category, date_trunc('day', o.created_at)::date AS day, SUM(oi.quantity)::int AS qty
        FROM order_items oi
        JOIN orders o ON o.id = oi.order_id
        JOIN products p ON p.id = oi.product_id
        WHERE o.created_at >= current_date - interval '6 days'
        GROUP BY p.category, day
      )
      SELECT c.category, d.day, COALESCE(cs.qty,0)::int AS qty
      FROM (SELECT DISTINCT category FROM products) c
      CROSS JOIN days d
      LEFT JOIN cat_sales cs ON cs.category = c.category AND cs.day = d.day
      ORDER BY c.category, d.day
    `),
    pool.query(`SELECT COUNT(*)::int AS count FROM services WHERE active = true`),
    pool.query(`
      WITH days AS (
        SELECT generate_series(current_date - interval '6 days', current_date, interval '1 day')::date AS day
      ),
      svc_sales AS (
        SELECT date_trunc('day', o.created_at)::date AS day, SUM(oi.quantity)::int AS qty
        FROM order_items oi JOIN orders o ON o.id = oi.order_id
        WHERE oi.service_id IS NOT NULL AND o.created_at >= current_date - interval '6 days'
        GROUP BY day
      )
      SELECT d.day, COALESCE(s.qty,0)::int AS qty FROM days d LEFT JOIN svc_sales s ON s.day = d.day ORDER BY d.day
    `),
  ]);

  const salesByCategory = {};
  for (const row of salesRes.rows) {
    (salesByCategory[row.category] ||= []).push(row.qty);
  }

  const categories = categoryRes.rows.map((c) => ({
    category: c.category,
    productCount: c.product_count,
    totalStock: c.total_stock,
    sales7d: salesByCategory[c.category] || [],
  }));

  res.json({
    categories,
    services: {
      count: serviceCountRes.rows[0].count,
      sales7d: serviceSalesRes.rows.map((r) => r.qty),
    },
  });
});

app.get('/api/admin/products', requireAdmin, requireDb, async (req, res) => {
  const { rows } = await pool.query(`SELECT ${PRODUCT_COLUMNS} FROM products ORDER BY category, id`);
  res.json(rows.map(withImageSrc));
});

app.post('/api/admin/products', requireAdmin, requireDb, upload.single('image'), async (req, res) => {
  const { category, name, specs, condition, icon, image_url } = req.body || {};
  const barcode = req.body?.barcode ? req.body.barcode.trim() : null;
  const price_cents = Math.round(parseFloat(req.body?.price_cents));
  const stock = req.body?.stock ? Math.round(parseFloat(req.body.stock)) : 25;
  if (!category || !name || !Number.isFinite(price_cents)) {
    return res.status(400).json({ error: 'category, name and price_cents are required' });
  }
  const imageData = req.file ? await normalizeProductPhoto(req.file.buffer) : null;
  try {
    const { rows } = await pool.query(
      `INSERT INTO products (category, name, specs, price_cents, condition, icon, image_url, stock, barcode, image_data, image_mime)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING ${PRODUCT_COLUMNS}`,
      [
        category, name, specs || '', price_cents, condition || 'New', icon || '📦',
        image_url || CATEGORY_IMAGE[category] || null, stock, barcode || null,
        imageData, imageData ? 'image/jpeg' : null,
      ]
    );
    res.status(201).json(withImageSrc(rows[0]));
  } catch (err) {
    if (err.code === '23505') return res.status(400).json({ error: 'That barcode is already assigned to another product.' });
    throw err;
  }
});

app.put('/api/admin/products/:id', requireAdmin, requireDb, upload.single('image'), async (req, res) => {
  const { id } = req.params;
  const { category, name, specs, condition, icon, image_url } = req.body || {};
  const barcode = req.body?.barcode ? req.body.barcode.trim() : null;
  const price_cents = Math.round(parseFloat(req.body?.price_cents));
  const stock = req.body?.stock ? Math.round(parseFloat(req.body.stock)) : 25;
  if (!category || !name || !Number.isFinite(price_cents)) {
    return res.status(400).json({ error: 'category, name and price_cents are required' });
  }

  const params = [category, name, specs || '', price_cents, condition || 'New', icon || '📦', image_url || CATEGORY_IMAGE[category] || null, stock, barcode || null];
  let imageClause = '';
  if (req.file) {
    const imageData = await normalizeProductPhoto(req.file.buffer);
    imageClause = `, image_data = $${params.length + 1}, image_mime = $${params.length + 2}`;
    params.push(imageData, 'image/jpeg');
  } else if (req.body?.remove_image === 'true') {
    imageClause = ', image_data = NULL, image_mime = NULL';
  }
  params.push(id);

  try {
    const { rows } = await pool.query(
      `UPDATE products SET category=$1, name=$2, specs=$3, price_cents=$4, condition=$5, icon=$6, image_url=$7, stock=$8, barcode=$9, updated_at=now()${imageClause}
       WHERE id = $${params.length} RETURNING ${PRODUCT_COLUMNS}`,
      params
    );
    if (!rows[0]) return res.status(404).json({ error: 'Not found' });
    res.json(withImageSrc(rows[0]));
  } catch (err) {
    if (err.code === '23505') return res.status(400).json({ error: 'That barcode is already assigned to another product.' });
    throw err;
  }
});

app.delete('/api/admin/products/:id', requireAdmin, requireDb, async (req, res) => {
  const { id } = req.params;
  const { rowCount } = await pool.query('DELETE FROM products WHERE id=$1', [id]);
  if (!rowCount) return res.status(404).json({ error: 'Not found' });
  res.status(204).end();
});

/* ---------- Admin API — owner + staff: services catalog ---------- */
app.get('/api/admin/services', requireAdmin, requireDb, async (req, res) => {
  const { rows } = await pool.query(`SELECT ${SERVICE_COLUMNS} FROM services ORDER BY name`);
  res.json(rows);
});

app.post('/api/admin/services', requireAdmin, requireDb, async (req, res) => {
  const { name, description, icon } = req.body || {};
  const price_cents = Math.round(parseFloat(req.body?.price_cents));
  const active = req.body?.active !== false;
  if (!name || !Number.isFinite(price_cents)) {
    return res.status(400).json({ error: 'name and price_cents are required' });
  }
  const { rows } = await pool.query(
    `INSERT INTO services (name, description, price_cents, icon, active) VALUES ($1,$2,$3,$4,$5) RETURNING ${SERVICE_COLUMNS}`,
    [name, description || '', price_cents, icon || '🛠️', active]
  );
  res.status(201).json(rows[0]);
});

app.put('/api/admin/services/:id', requireAdmin, requireDb, async (req, res) => {
  const { id } = req.params;
  const { name, description, icon } = req.body || {};
  const price_cents = Math.round(parseFloat(req.body?.price_cents));
  const active = req.body?.active !== false;
  if (!name || !Number.isFinite(price_cents)) {
    return res.status(400).json({ error: 'name and price_cents are required' });
  }
  const { rows } = await pool.query(
    `UPDATE services SET name=$1, description=$2, price_cents=$3, icon=$4, active=$5, updated_at=now()
     WHERE id = $6 RETURNING ${SERVICE_COLUMNS}`,
    [name, description || '', price_cents, icon || '🛠️', active, id]
  );
  if (!rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(rows[0]);
});

app.delete('/api/admin/services/:id', requireAdmin, requireDb, async (req, res) => {
  const { id } = req.params;
  const { rowCount } = await pool.query('DELETE FROM services WHERE id=$1', [id]);
  if (!rowCount) return res.status(404).json({ error: 'Not found' });
  res.status(204).end();
});

app.get('/api/admin/promo', requireAdmin, requireDb, async (req, res) => {
  const { rows } = await pool.query('SELECT headline, subtext, cta_text, cta_link, enabled, updated_at, (image_data IS NOT NULL) AS has_image FROM promo_banner WHERE id = 1');
  const row = rows[0];
  const version = row.updated_at ? new Date(row.updated_at).getTime() : 0;
  res.json({ ...row, image_src: row.has_image ? `/api/promo/image?v=${version}` : null });
});

app.put('/api/admin/promo', requireAdmin, requireDb, upload.single('image'), async (req, res) => {
  const { headline, subtext, cta_text, cta_link } = req.body || {};
  const enabled = req.body?.enabled === 'true';

  const params = [
    sanitizeRichText(headline), sanitizeRichText(subtext), cta_text || 'Shop now', cta_link || '#tp-search', enabled,
  ];
  let imageClause = '';
  if (req.file) {
    const { buffer: imageData, mime } = await normalizePromoImage(req.file.buffer);
    imageClause = `, image_data = $${params.length + 1}, image_mime = $${params.length + 2}`;
    params.push(imageData, mime);
  } else if (req.body?.remove_image === 'true') {
    imageClause = ', image_data = NULL, image_mime = NULL';
  }

  const { rows } = await pool.query(
    `UPDATE promo_banner SET headline=$1, subtext=$2, cta_text=$3, cta_link=$4, enabled=$5, updated_at=now()${imageClause}
     WHERE id = 1 RETURNING headline, subtext, cta_text, cta_link, enabled, updated_at, (image_data IS NOT NULL) AS has_image`,
    params
  );
  const row = rows[0];
  const version = row.updated_at ? new Date(row.updated_at).getTime() : 0;
  res.json({ ...row, image_src: row.has_image ? `/api/promo/image?v=${version}` : null });
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

app.post('/api/admin/orders/:id/zoho-retry', requireOwner, requireDb, async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query('SELECT id FROM orders WHERE id = $1', [id]);
  if (!rows[0]) return res.status(404).json({ error: 'Not found' });
  await zoho.syncOrderToZoho(pool, Number(id));
  const { rows: updated } = await pool.query('SELECT * FROM orders WHERE id = $1', [id]);
  res.json(updated[0]);
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
    const serviceId = Number.isFinite(Number(item.service_id)) ? Number(item.service_id) : null;
    cleanItems.push({ productId, serviceId, name, price_cents, quantity });
  }

  try {
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
        'INSERT INTO order_items (order_id, product_id, service_id, name, price_cents, quantity) VALUES ($1,$2,$3,$4,$5,$6)',
        [order.id, it.productId, it.serviceId, it.name, it.price_cents, it.quantity]
      );
      itemRows.push({ name: it.name, price_cents: it.price_cents, quantity: it.quantity, is_service: !!it.serviceId });
      if (it.productId) {
        const { rows: stockRows } = await pool.query(
          'UPDATE products SET stock = GREATEST(stock - $1, 0) WHERE id = $2 RETURNING name, stock',
          [it.quantity, it.productId]
        );
        if (stockRows[0] && stockRows[0].stock <= LOW_STOCK_THRESHOLD) {
          broadcastEvent('low_stock', { name: stockRows[0].name, stock: stockRows[0].stock });
        }
      }
    }

    broadcastEvent('sale', { channel: 'in_store', total_cents: order.total_cents, items: itemRows });
    zoho.syncOrderToZoho(pool, order.id).catch((err) => console.error('Zoho sync (unexpected):', err.message)); // fire-and-forget — never blocks the sale response/receipt
    res.status(201).json({ order, items: itemRows });
  } catch (err) {
    console.error('Failed to record in-store sale:', err.message);
    res.status(500).json({ error: `Could not record the sale: ${err.message}` });
  }
});

/* ---------- Admin API — owner + staff: customer inquiries ---------- */
app.get('/api/admin/inquiries', requireAdmin, requireDb, async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 200');
  res.json(rows);
});

const INQUIRY_STATUSES = ['new', 'read', 'responded'];

app.put('/api/admin/inquiries/:id/status', requireAdmin, requireDb, async (req, res) => {
  const { id } = req.params;
  const status = INQUIRY_STATUSES.includes(req.body?.status) ? req.body.status : 'new';
  const { rows } = await pool.query('UPDATE inquiries SET status = $1 WHERE id = $2 RETURNING *', [status, id]);
  if (!rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(rows[0]);
});

/* ---------- Admin API — owner only: AI store insights ---------- */
let insightsCache = { text: null, generatedAt: null };

app.get('/api/admin/insights', requireOwner, requireDb, (req, res) => {
  res.json(insightsCache);
});

app.post('/api/admin/insights', requireOwner, requireDb, requireAnthropic, async (req, res) => {
  const [todayRes, weekRes, lastWeekRes, topItemsRes, lowStockRes, servicesRes] = await Promise.all([
    pool.query(`SELECT COALESCE(SUM(total_cents),0)::int AS revenue_cents, COUNT(*)::int AS orders FROM orders WHERE created_at >= date_trunc('day', now())`),
    pool.query(`SELECT COALESCE(SUM(total_cents),0)::int AS revenue_cents, COUNT(*)::int AS orders FROM orders WHERE created_at >= now() - interval '7 days'`),
    pool.query(`SELECT COALESCE(SUM(total_cents),0)::int AS revenue_cents, COUNT(*)::int AS orders FROM orders WHERE created_at >= now() - interval '14 days' AND created_at < now() - interval '7 days'`),
    pool.query(`
      SELECT oi.name, SUM(oi.quantity)::int AS quantity
      FROM order_items oi JOIN orders o ON o.id = oi.order_id
      WHERE o.created_at >= now() - interval '7 days'
      GROUP BY oi.name ORDER BY quantity DESC LIMIT 5
    `),
    pool.query('SELECT name, stock FROM products WHERE stock <= $1 ORDER BY stock ASC LIMIT 10', [LOW_STOCK_THRESHOLD]),
    pool.query(`
      SELECT oi.name, SUM(oi.quantity)::int AS quantity
      FROM order_items oi JOIN orders o ON o.id = oi.order_id
      WHERE o.created_at >= now() - interval '7 days' AND oi.service_id IS NOT NULL
      GROUP BY oi.name ORDER BY quantity DESC LIMIT 5
    `),
  ]);

  const snapshot = {
    today: todayRes.rows[0],
    last7Days: weekRes.rows[0],
    previous7Days: lastWeekRes.rows[0],
    topSellingItems7d: topItemsRes.rows,
    lowStockProducts: lowStockRes.rows,
    servicesLogged7d: servicesRes.rows,
  };

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-5',
    max_tokens: 400,
    system:
      'You are a store operations assistant for a phone/computer repair and resale shop. Given a JSON snapshot of ' +
      'today\'s and this week\'s sales, top-selling items, low-stock products and repair services logged, write a short, ' +
      'plain-English summary for the owner: 3-5 bullet points (use "-" not markdown headers), covering notable sales ' +
      'trends and anything worth restocking or watching. No preamble, no closing remarks, just the bullets.',
    messages: [{ role: 'user', content: JSON.stringify(snapshot) }],
  });

  const textBlock = message.content.find((b) => b.type === 'text');
  insightsCache = {
    text: textBlock && textBlock.type === 'text' ? textBlock.text.trim() : 'No insights available.',
    generatedAt: new Date().toISOString(),
  };
  res.json(insightsCache);
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
