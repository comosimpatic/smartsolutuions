(() => {
  'use strict';

  const money = (cents) => `$${(cents / 100).toFixed(2)}`;

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  const PAYMENT_LABELS = { cash: 'Cash', card: 'Card', other: 'Other', stripe: 'Card (online)' };
  const CHANNEL_LABELS = { in_store: 'In-store', online: 'Online' };

  async function load() {
    const sheet = document.getElementById('receipt-sheet');
    const id = new URLSearchParams(window.location.search).get('id');
    if (!id) {
      sheet.innerHTML = '<p class="receipt-error">No order specified.</p>';
      return;
    }

    try {
      const sessionRes = await fetch('/api/admin/session');
      const session = await sessionRes.json();
      if (!session.loggedIn) {
        window.location.href = '/admin';
        return;
      }

      const res = await fetch(`/api/admin/orders/${encodeURIComponent(id)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Could not load order');

      render(data.order, data.items);
    } catch (err) {
      sheet.innerHTML = `<p class="receipt-error">${escapeHtml(err.message)}</p>`;
    }
  }

  function render(order, items) {
    const sheet = document.getElementById('receipt-sheet');
    document.title = `Receipt #${order.id} — Smart Solutions`;

    const rows = items.map((i) => `
      <tr>
        <td>${escapeHtml(i.name)}</td>
        <td class="num">${i.quantity}</td>
        <td class="num">${money(i.price_cents)}</td>
        <td class="num">${money(i.price_cents * i.quantity)}</td>
      </tr>
    `).join('');

    sheet.innerHTML = `
      <div class="receipt-head">
        <img class="receipt-logo" src="assets/logo-mark.png" alt="">
        <div>
          <h1>Smart<em>Solutions</em></h1>
          <p>smartsolutionssvg@gmail.com</p>
        </div>
      </div>

      <div class="receipt-meta">
        <div><span>Receipt #</span><strong>${order.id}</strong></div>
        <div><span>Date</span><strong>${new Date(order.created_at).toLocaleString()}</strong></div>
        <div><span>Channel</span><strong>${CHANNEL_LABELS[order.channel] || order.channel}</strong></div>
        <div><span>Payment</span><strong>${PAYMENT_LABELS[order.payment_method] || order.payment_method || '—'}</strong></div>
      </div>

      ${(order.customer_name || order.customer_email || order.customer_phone) ? `
        <div class="receipt-customer">
          <span>Customer</span>
          <strong>${escapeHtml(order.customer_name || '—')}</strong>
          ${order.customer_email ? `<div>${escapeHtml(order.customer_email)}</div>` : ''}
          ${order.customer_phone ? `<div>${escapeHtml(order.customer_phone)}</div>` : ''}
        </div>
      ` : ''}

      <table class="receipt-table">
        <thead>
          <tr><th>Item</th><th class="num">Qty</th><th class="num">Price</th><th class="num">Total</th></tr>
        </thead>
        <tbody>${rows}</tbody>
        <tfoot>
          <tr><td colspan="3">Total</td><td class="num">${money(order.total_cents)}</td></tr>
        </tfoot>
      </table>

      <p class="receipt-thanks">Thank you for shopping with Smart Solutions.</p>
    `;
  }

  document.getElementById('print-btn').addEventListener('click', () => window.print());

  load();
})();
