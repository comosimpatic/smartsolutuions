const express = require('express');
const path = require('path');
const crypto = require('crypto');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || null;
const SESSION_SECRET = process.env.SESSION_SECRET || crypto.randomBytes(32).toString('hex');
const SESSION_COOKIE = 'ss_admin';
const SESSION_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    })
  : null;

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
  const { rows } = await pool.query('SELECT COUNT(*)::int AS count FROM products');
  if (rows[0].count === 0) {
    for (const [category, name, specs, price_cents, condition, icon] of SEED_PRODUCTS) {
      await pool.query(
        'INSERT INTO products (category, name, specs, price_cents, condition, icon) VALUES ($1,$2,$3,$4,$5,$6)',
        [category, name, specs, price_cents, condition, icon]
      );
    }
    console.log(`Seeded ${SEED_PRODUCTS.length} products.`);
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

function signSession(expiresAt) {
  const payload = String(expiresAt);
  const sig = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('hex');
  return `${payload}.${sig}`;
}

function verifySession(token) {
  if (!token) return false;
  const [payload, sig] = token.split('.');
  if (!payload || !sig) return false;
  const expected = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('hex');
  const sigBuf = Buffer.from(sig);
  const expBuf = Buffer.from(expected);
  if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) return false;
  return Number(payload) > Date.now();
}

function requireAdmin(req, res, next) {
  const cookies = parseCookies(req);
  if (!verifySession(cookies[SESSION_COOKIE])) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  next();
}

function requireDb(req, res, next) {
  if (!pool) return res.status(503).json({ error: 'Database is not configured yet.' });
  next();
}

/* ---------- Public API ---------- */
app.get('/api/products', requireDb, async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM products ORDER BY category, id');
  res.json(rows);
});

/* ---------- Admin auth ---------- */
app.post('/api/admin/login', (req, res) => {
  if (!ADMIN_PASSWORD) {
    return res.status(503).json({ error: 'Admin password is not configured yet.' });
  }
  const { password } = req.body || {};
  const pwBuf = Buffer.from(String(password || ''));
  const expBuf = Buffer.from(ADMIN_PASSWORD);
  const match = pwBuf.length === expBuf.length && crypto.timingSafeEqual(pwBuf, expBuf);
  if (!match) return res.status(401).json({ error: 'Incorrect password' });

  const expiresAt = Date.now() + SESSION_MAX_AGE_MS;
  const token = signSession(expiresAt);
  res.setHeader('Set-Cookie', `${SESSION_COOKIE}=${encodeURIComponent(token)}; HttpOnly; Path=/; Max-Age=${Math.floor(SESSION_MAX_AGE_MS / 1000)}; SameSite=Strict`);
  res.json({ ok: true });
});

app.post('/api/admin/logout', (req, res) => {
  res.setHeader('Set-Cookie', `${SESSION_COOKIE}=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict`);
  res.json({ ok: true });
});

app.get('/api/admin/session', (req, res) => {
  const cookies = parseCookies(req);
  res.json({ loggedIn: verifySession(cookies[SESSION_COOKIE]) });
});

/* ---------- Admin API (protected) ---------- */
app.get('/api/admin/overview', requireAdmin, requireDb, async (req, res) => {
  const totalRes = await pool.query('SELECT COUNT(*)::int AS count FROM products');
  const byCategoryRes = await pool.query('SELECT category, COUNT(*)::int AS count FROM products GROUP BY category ORDER BY category');
  const lastUpdatedRes = await pool.query('SELECT MAX(updated_at) AS updated_at FROM products');
  res.json({
    totalProducts: totalRes.rows[0].count,
    byCategory: byCategoryRes.rows,
    lastUpdated: lastUpdatedRes.rows[0].updated_at,
  });
});

app.get('/api/admin/products', requireAdmin, requireDb, async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM products ORDER BY category, id');
  res.json(rows);
});

app.post('/api/admin/products', requireAdmin, requireDb, async (req, res) => {
  const { category, name, specs, price_cents, condition, icon } = req.body || {};
  if (!category || !name || !Number.isFinite(price_cents)) {
    return res.status(400).json({ error: 'category, name and price_cents are required' });
  }
  const { rows } = await pool.query(
    'INSERT INTO products (category, name, specs, price_cents, condition, icon) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
    [category, name, specs || '', Math.round(price_cents), condition || 'New', icon || '📦']
  );
  res.status(201).json(rows[0]);
});

app.put('/api/admin/products/:id', requireAdmin, requireDb, async (req, res) => {
  const { id } = req.params;
  const { category, name, specs, price_cents, condition, icon } = req.body || {};
  if (!category || !name || !Number.isFinite(price_cents)) {
    return res.status(400).json({ error: 'category, name and price_cents are required' });
  }
  const { rows } = await pool.query(
    `UPDATE products SET category=$1, name=$2, specs=$3, price_cents=$4, condition=$5, icon=$6, updated_at=now()
     WHERE id=$7 RETURNING *`,
    [category, name, specs || '', Math.round(price_cents), condition || 'New', icon || '📦', id]
  );
  if (!rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(rows[0]);
});

app.delete('/api/admin/products/:id', requireAdmin, requireDb, async (req, res) => {
  const { id } = req.params;
  const { rowCount } = await pool.query('DELETE FROM products WHERE id=$1', [id]);
  if (!rowCount) return res.status(404).json({ error: 'Not found' });
  res.status(204).end();
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
