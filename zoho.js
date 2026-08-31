// One-way sync: push completed sales to Zoho Invoice as real invoices.
// Zoho Invoice has no stock/inventory concept — our own Postgres database
// stays the source of truth for products, services and stock. This module
// only ever creates contacts/invoices in Zoho; it never reads inventory
// back from Zoho and never blocks a sale if Zoho is slow or unreachable.
//
// NOTE: contact/invoice field names below follow Zoho Invoice API v3's
// documented shape (https://www.zoho.com/invoice/api/v3/) — worth a quick
// check against a real account on the first live sync, since Zoho's API
// details can shift between plans/regions.

const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;
const ZOHO_ORG_ID = process.env.ZOHO_ORG_ID;
const ZOHO_API_DOMAIN = process.env.ZOHO_API_DOMAIN || 'https://www.zohoapis.com';
const ZOHO_ACCOUNTS_DOMAIN = process.env.ZOHO_ACCOUNTS_DOMAIN || 'https://accounts.zoho.com';

const configured = !!(ZOHO_CLIENT_ID && ZOHO_CLIENT_SECRET && ZOHO_REFRESH_TOKEN && ZOHO_ORG_ID);

let cachedToken = null; // { accessToken, expiresAt }
let walkInContactId = null; // reused for sales with no customer email

async function getAccessToken() {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60000) {
    return cachedToken.accessToken;
  }
  const params = new URLSearchParams({
    refresh_token: ZOHO_REFRESH_TOKEN,
    client_id: ZOHO_CLIENT_ID,
    client_secret: ZOHO_CLIENT_SECRET,
    grant_type: 'refresh_token',
  });
  const res = await fetch(`${ZOHO_ACCOUNTS_DOMAIN}/oauth/v2/token?${params}`, { method: 'POST' });
  const data = await res.json();
  if (!res.ok || !data.access_token) {
    throw new Error(`Zoho token refresh failed: ${data.error || res.status}`);
  }
  cachedToken = { accessToken: data.access_token, expiresAt: Date.now() + (data.expires_in || 3600) * 1000 };
  return cachedToken.accessToken;
}

async function zohoFetch(path, options = {}) {
  const accessToken = await getAccessToken();
  const url = `${ZOHO_API_DOMAIN}/invoice/v3${path}${path.includes('?') ? '&' : '?'}organization_id=${ZOHO_ORG_ID}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  const data = await res.json().catch(() => null);
  if (!res.ok || (data && data.code != null && data.code !== 0)) {
    throw new Error(`Zoho API error (${path}): ${(data && data.message) || res.status}`);
  }
  return data;
}

async function findContactByEmail(email) {
  const data = await zohoFetch(`/contacts?email=${encodeURIComponent(email)}`);
  const match = (data.contacts || []).find((c) => (c.email || '').toLowerCase() === email.toLowerCase());
  return match ? match.contact_id : null;
}

async function createContact({ name, email }) {
  const data = await zohoFetch('/contacts', {
    method: 'POST',
    body: JSON.stringify({
      contact_name: name || email,
      contact_persons: email ? [{ email, is_primary_contact: true }] : [],
    }),
  });
  return data.contact.contact_id;
}

async function findOrCreateContact({ name, email }) {
  if (!email) {
    if (walkInContactId) return walkInContactId;
    const fallbackEmail = 'walkin-customer@smartsolutuions.local';
    const existing = await findContactByEmail(fallbackEmail).catch(() => null);
    walkInContactId = existing || (await createContact({ name: 'Walk-in Customer', email: fallbackEmail }));
    return walkInContactId;
  }
  const existing = await findContactByEmail(email);
  if (existing) return existing;
  return createContact({ name, email });
}

async function createInvoice({ contactId, lineItems, referenceNumber }) {
  const data = await zohoFetch('/invoices', {
    method: 'POST',
    body: JSON.stringify({
      customer_id: contactId,
      reference_number: referenceNumber,
      line_items: lineItems.map((li) => ({
        name: li.name,
        rate: li.price_cents / 100,
        quantity: li.quantity,
      })),
    }),
  });
  return data.invoice.invoice_id;
}

// Fire-and-forget from the caller's perspective: never throws, always
// resolves after writing a status back onto the order row.
async function syncOrderToZoho(pool, orderId) {
  try {
    if (!configured) {
      await pool.query(`UPDATE orders SET zoho_sync_status = 'unconfigured' WHERE id = $1`, [orderId]);
      return;
    }
    const { rows: orderRows } = await pool.query('SELECT * FROM orders WHERE id = $1', [orderId]);
    const order = orderRows[0];
    if (!order) return;
    const { rows: items } = await pool.query(
      'SELECT name, price_cents, quantity FROM order_items WHERE order_id = $1',
      [orderId]
    );
    if (!items.length) return;

    const contactId = await findOrCreateContact({ name: order.customer_name, email: order.customer_email });
    const invoiceId = await createInvoice({ contactId, lineItems: items, referenceNumber: `SS-${order.id}` });

    await pool.query(
      `UPDATE orders SET zoho_invoice_id = $1, zoho_sync_status = 'synced', zoho_sync_error = NULL WHERE id = $2`,
      [invoiceId, orderId]
    );
  } catch (err) {
    console.error(`Zoho sync failed for order ${orderId}:`, err.message);
    await pool
      .query(`UPDATE orders SET zoho_sync_status = 'failed', zoho_sync_error = $1 WHERE id = $2`, [
        err.message.slice(0, 500),
        orderId,
      ])
      .catch(() => {});
  }
}

module.exports = { syncOrderToZoho, isConfigured: () => configured };
