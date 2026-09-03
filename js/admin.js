(() => {
  'use strict';

  const loginView = document.getElementById('login-view');
  const dashboardView = document.getElementById('dashboard-view');
  const loginForm = document.getElementById('login-form');
  const loginError = document.getElementById('login-error');
  const logoutBtn = document.getElementById('logout-btn');
  const roleBadge = document.getElementById('role-badge');
  const statsRow = document.getElementById('stats-row');
  const productRows = document.getElementById('product-rows');
  const orderRows = document.getElementById('order-rows');
  const inquiryRows = document.getElementById('inquiry-rows');
  const productForm = document.getElementById('product-form');
  const formHeading = document.getElementById('form-heading');
  const formSubmitBtn = document.getElementById('form-submit-btn');
  const formCancelBtn = document.getElementById('form-cancel-btn');
  const formToast = document.getElementById('form-toast');

  const fieldId = document.getElementById('product-id');
  const fieldName = document.getElementById('field-name');
  const fieldCategory = document.getElementById('field-category');
  const fieldCondition = document.getElementById('field-condition');
  const fieldSpecs = document.getElementById('field-specs');
  const fieldPrice = document.getElementById('field-price');
  const fieldStock = document.getElementById('field-stock');
  const fieldIcon = document.getElementById('field-icon');
  const fieldBarcode = document.getElementById('field-barcode');
  const fieldImage = document.getElementById('field-image');
  const fieldImageFile = document.getElementById('field-image-file');
  const fieldImageRemove = document.getElementById('field-image-remove');
  const imagePreview = document.getElementById('field-image-preview');
  const imagePreviewImg = document.getElementById('field-image-preview-img');

  const CATEGORY_LABELS = { phones: 'Phones', laptops: 'Laptops', parts: 'Parts & accessories' };
  const money = (cents) => `EC$${(cents / 100).toFixed(2)}`;

  const GRADIENT_KEYS = ['grad-blue', 'grad-teal', 'grad-orange', 'grad-purple', 'grad-pink'];
  const GRADIENT_HEX = { 'grad-blue': '#2563eb', 'grad-teal': '#0d9488', 'grad-orange': '#c2660c', 'grad-purple': '#7c3aed', 'grad-pink': '#db2777' };

  function renderSparkline(points) {
    const vals = points && points.length ? points : [0];
    const max = Math.max(...vals, 1);
    const min = Math.min(...vals, 0);
    const range = max - min || 1;
    const w = 56, h = 22;
    const step = vals.length > 1 ? w / (vals.length - 1) : 0;
    const coords = vals.map((v, i) => `${(i * step).toFixed(1)},${(h - ((v - min) / range) * h).toFixed(1)}`).join(' ');
    return `<svg class="banner-card-sparkline" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><polyline points="${coords}" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }

  function renderBannerCard({ key, label, num, numUnit, sub, sparkline, gradient, active, clickable = true }) {
    return `
      <button type="button" class="banner-card${active ? ' active' : ''}${clickable ? '' : ' static'}" style="--card-grad: var(--${gradient})" data-key="${escapeHtml(key)}"${clickable ? '' : ' disabled'}>
        <div class="banner-card-top">
          <span class="banner-card-label">${escapeHtml(label)}</span>
          ${sparkline ? renderSparkline(sparkline) : ''}
        </div>
        <div class="banner-card-num">${num}${numUnit ? `<span class="banner-card-num-unit"> ${escapeHtml(numUnit)}</span>` : ''}</div>
        <div class="banner-card-sub">${escapeHtml(sub)}</div>
      </button>
    `;
  }

  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  async function api(path, options = {}) {
    const res = await fetch(path, {
      ...options,
      headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    });
    let data = null;
    try { data = await res.json(); } catch (_) { /* no body */ }
    if (!res.ok) throw new Error((data && data.error) || `Request failed (${res.status})`);
    return data;
  }

  function showLogin() {
    loginView.hidden = false;
    dashboardView.hidden = true;
  }

  /* ============ Tabs ============ */
  const TABS = {
    sale: { btn: 'tab-sale', panel: 'sale-panel' },
    overview: { btn: 'tab-overview', panel: 'overview-panel' },
    products: { btn: 'tab-products', panel: 'products-panel' },
    services: { btn: 'tab-services', panel: 'services-panel' },
    inquiries: { btn: 'tab-inquiries', panel: 'inquiries-panel' },
    settings: { btn: 'tab-settings', panel: 'settings-panel' },
    promo: { btn: 'tab-promo', panel: 'promo-panel' },
    content: { btn: 'tab-content', panel: 'content-panel' },
    parts: { btn: 'tab-parts', panel: 'parts-panel' },
  };

  function activateTab(name) {
    Object.entries(TABS).forEach(([key, { btn, panel }]) => {
      document.getElementById(btn).classList.toggle('active', key === name);
      document.getElementById(panel).hidden = key !== name;
    });
    if (name === 'overview') {
      ssdcOpenCard = null;
      document.getElementById('ssdc-detail').hidden = true;
      loadOverview();
      loadOrders();
      startZohoStatusPolling();
    } else {
      stopZohoStatusPolling();
    }
    if (name === 'products') {
      selectedCategory = null;
      document.getElementById('inventory-detail').hidden = true;
      loadInventory();
      loadProducts();
    }
    if (name === 'promo') { loadPromo(); }
    if (name === 'content') { loadSiteContent(); }
    if (name === 'parts') { loadPartsFacets(); loadPartsRows(); }
    if (name === 'services') { loadServices(); }
    if (name === 'sale') { loadSaleProducts(); document.getElementById('sale-scan-input').focus(); }
    if (name === 'inquiries') { loadInquiries(); }
  }

  document.getElementById('tab-sale').addEventListener('click', () => activateTab('sale'));
  document.getElementById('tab-overview').addEventListener('click', () => activateTab('overview'));
  document.getElementById('tab-products').addEventListener('click', () => activateTab('products'));
  document.getElementById('tab-services').addEventListener('click', () => activateTab('services'));
  document.getElementById('tab-inquiries').addEventListener('click', () => activateTab('inquiries'));
  document.getElementById('tab-settings').addEventListener('click', () => activateTab('settings'));
  document.getElementById('tab-promo').addEventListener('click', () => activateTab('promo'));
  document.getElementById('tab-content').addEventListener('click', () => activateTab('content'));
  document.getElementById('tab-parts').addEventListener('click', () => activateTab('parts'));

  function showDashboard(role) {
    loginView.hidden = true;
    dashboardView.hidden = false;
    roleBadge.textContent = role === 'owner' ? 'Owner' : 'Staff';
    document.getElementById('dashboard-title').textContent = role === 'owner' ? 'Tech Store Overview' : 'Tech Store';
    ownerElevateLink.hidden = role === 'owner';
    document.querySelectorAll('[data-owner-only]').forEach((el) => { el.hidden = role !== 'owner'; });
    document.querySelectorAll('[data-staff-only]').forEach((el) => { el.hidden = role !== 'staff'; });
    activateTab(role === 'owner' ? 'overview' : 'products');
    if (role === 'owner') connectLiveFeed();
  }

  /* ============ Owner sign-in (second layer) ============ */
  const ownerElevateLink = document.getElementById('owner-elevate-link');
  const ownerElevateOverlay = document.getElementById('owner-elevate-overlay');
  const ownerElevateForm = document.getElementById('owner-elevate-form');
  const ownerElevateError = document.getElementById('owner-elevate-error');
  const ownerElevatePassword = document.getElementById('owner-elevate-password');

  ownerElevateLink.addEventListener('click', () => {
    ownerElevateError.textContent = '';
    ownerElevateOverlay.hidden = false;
    ownerElevatePassword.focus();
  });
  document.getElementById('owner-elevate-cancel').addEventListener('click', () => {
    ownerElevateOverlay.hidden = true;
    ownerElevateForm.reset();
    ownerElevateError.textContent = '';
  });
  ownerElevateForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    ownerElevateError.textContent = '';
    try {
      const data = await api('/api/admin/elevate', { method: 'POST', body: JSON.stringify({ password: ownerElevatePassword.value }) });
      ownerElevateOverlay.hidden = true;
      ownerElevateForm.reset();
      showDashboard(data.role);
    } catch (err) {
      ownerElevateError.textContent = err.message;
    }
  });

  async function checkSession() {
    try {
      const { loggedIn, role } = await api('/api/admin/session');
      if (loggedIn) showDashboard(role);
      else showLogin();
    } catch (_) {
      showLogin();
    }
  }

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    loginError.textContent = '';
    const password = document.getElementById('login-password').value;
    try {
      const data = await api('/api/admin/login', { method: 'POST', body: JSON.stringify({ password }) });
      document.getElementById('login-password').value = '';
      showDashboard(data.role);
    } catch (err) {
      loginError.textContent = err.message;
    }
  });

  logoutBtn.addEventListener('click', async () => {
    try { await api('/api/admin/logout', { method: 'POST' }); } catch (_) { /* ignore */ }
    showLogin();
  });

  /* ============ Live feed (owner, Server-Sent Events) ============ */
  let liveEventSource = null;
  let liveFeedEvents = [];
  const LIVE_FEED_MAX = 25;

  function connectLiveFeed() {
    if (liveEventSource) return;
    liveEventSource = new EventSource('/api/admin/events');
    const dot = document.getElementById('live-dot');
    liveEventSource.addEventListener('open', () => { if (dot) dot.classList.remove('offline'); });
    liveEventSource.addEventListener('error', () => { if (dot) dot.classList.add('offline'); });
    liveEventSource.addEventListener('message', (e) => {
      let evt;
      try { evt = JSON.parse(e.data); } catch (_) { return; }
      liveFeedEvents.unshift(evt);
      if (liveFeedEvents.length > LIVE_FEED_MAX) liveFeedEvents.length = LIVE_FEED_MAX;
      renderLiveFeed();
      if (evt.type === 'sale' || evt.type === 'low_stock') { loadOverview(); loadInventory(); }
    });
  }

  function renderLiveFeed() {
    const feed = document.getElementById('live-feed');
    if (!feed) return;
    if (!liveFeedEvents.length) {
      feed.innerHTML = '<li class="live-feed-empty">Waiting for activity…</li>';
      return;
    }
    feed.innerHTML = liveFeedEvents.map((evt) => {
      const time = new Date(evt.at).toLocaleTimeString();
      if (evt.type === 'sale') {
        const summary = (evt.items || []).map((i) => `${i.quantity}× ${escapeHtml(i.name)}`).join(', ');
        const channelLabel = evt.channel === 'in_store' ? 'In-store sale' : 'Online sale';
        return `<li><span>${channelLabel}: ${summary} — ${money(evt.total_cents)}</span><span class="live-feed-time">${time}</span></li>`;
      }
      if (evt.type === 'low_stock') {
        return `<li class="low-stock"><span>Stock low: ${escapeHtml(evt.name)} (${evt.stock} left)</span><span class="live-feed-time">${time}</span></li>`;
      }
      return '';
    }).join('');
  }

  /* ============ Zoho sync activity (owner) — auto-refreshing, no AI, cheap DB read ============ */
  const ZOHO_FEED_STATUS_LABELS = { synced: 'Synced', pending: 'Pending', failed: 'Failed', unconfigured: 'Not connected' };
  let zohoStatusInterval = null;

  async function loadZohoStatus() {
    const feed = document.getElementById('zoho-status-feed');
    const dot = document.getElementById('zoho-status-dot');
    try {
      const orders = await api('/api/admin/zoho-status');
      if (dot) dot.classList.remove('offline');
      feed.innerHTML = orders.map((o) => {
        const label = ZOHO_FEED_STATUS_LABELS[o.zoho_sync_status] || o.zoho_sync_status;
        const cls = o.zoho_sync_status === 'failed' ? 'low-stock' : '';
        const time = new Date(o.created_at).toLocaleTimeString();
        return `<li class="${cls}" title="${escapeHtml(o.zoho_sync_error || '')}"><span>${escapeHtml(o.customer_name || 'Walk-in')} — ${money(o.total_cents)}: ${label}</span><span class="live-feed-time">${time}</span></li>`;
      }).join('') || '<li class="live-feed-empty">No orders yet.</li>';
    } catch (err) {
      if (dot) dot.classList.add('offline');
      feed.innerHTML = `<li class="live-feed-empty">${escapeHtml(err.message)}</li>`;
    }
  }

  function startZohoStatusPolling() {
    stopZohoStatusPolling();
    loadZohoStatus();
    zohoStatusInterval = setInterval(loadZohoStatus, 30000);
  }

  function stopZohoStatusPolling() {
    if (zohoStatusInterval) clearInterval(zohoStatusInterval);
    zohoStatusInterval = null;
  }

  /* ============ Overview (owner) ============ */
  let ssdcOpenCard = null;

  async function loadOverview() {
    try {
      const data = await api('/api/admin/overview');
      statsRow.innerHTML = [
        renderBannerCard({ key: 'revenue-today', label: 'Revenue (today) — click for a breakdown', num: money(data.revenueTodayCents), sub: `${data.ordersToday} orders today`, gradient: 'grad-blue', active: ssdcOpenCard === 'revenue-today' }),
        renderBannerCard({ key: 'revenue-30d', label: 'Revenue trend — click for weekly/monthly/quarterly', num: money(data.revenue30dCents), sub: `${data.orders30d} orders in 30 days`, gradient: 'grad-teal', active: ssdcOpenCard === 'revenue-30d' }),
        renderBannerCard({ key: 'total-products', label: 'Total products', num: data.totalProducts, numUnit: 'products', sub: `across ${data.byCategory.length} categories`, gradient: 'grad-orange', clickable: false }),
        renderBannerCard({ key: 'low-stock', label: 'Low stock items', num: data.lowStock.length, numUnit: 'items', sub: 'at or below threshold', gradient: 'grad-pink', clickable: false }),
      ].join('');
      statsRow.querySelectorAll('.banner-card:not(.static)').forEach((btn) => {
        btn.addEventListener('click', () => toggleSsdcDetail(btn.dataset.key));
      });
      const lowStockRows = document.getElementById('low-stock-rows');
      lowStockRows.innerHTML = data.lowStock.map((p) => `
        <tr><td>${escapeHtml(p.name)}</td><td>${p.stock}</td></tr>
      `).join('') || '<tr><td colspan="2">Nothing low on stock.</td></tr>';
    } catch (err) {
      statsRow.innerHTML = `<p class="admin-error">${err.message}</p>`;
    }
  }

  async function toggleSsdcDetail(key) {
    const detail = document.getElementById('ssdc-detail');
    if (ssdcOpenCard === key) {
      ssdcOpenCard = null;
      detail.hidden = true;
      loadOverview();
      return;
    }
    ssdcOpenCard = key;
    detail.hidden = false;
    detail.innerHTML = '<p style="color:var(--text-faint);">Loading…</p>';
    try {
      if (key === 'revenue-today') {
        const data = await api('/api/admin/revenue-today');
        renderRevenueToday(data);
      } else if (key === 'revenue-30d') {
        const data = await api('/api/admin/revenue-trend');
        renderRevenueTrend(data);
      }
      loadOverview();
    } catch (err) {
      detail.innerHTML = `<p class="admin-error">${err.message}</p>`;
    }
  }

  function renderRevenueToday(data) {
    const detail = document.getElementById('ssdc-detail');
    const channelRows = data.byChannel.map((c) => `
      <div class="ssdc-detail-row">
        <span class="label">${c.channel === 'in_store' ? 'In-store sales' : 'Online sales'}</span>
        <span class="value">${money(c.revenue_cents)} · ${c.orders} orders</span>
      </div>
    `).join('') || '<p style="color:var(--text-faint);">No sales yet today.</p>';
    detail.innerHTML = `
      <h3 style="font-family:'Space Grotesk',sans-serif; font-size:1.05rem; margin-bottom:12px;">Today's revenue, by type</h3>
      <div class="ssdc-detail-row"><span class="label">Products (sales)</span><span class="value">${money(data.productRevenueCents)} · ${data.productLineCount} line items</span></div>
      <div class="ssdc-detail-row"><span class="label">Services (repairs)</span><span class="value">${money(data.serviceRevenueCents)} · ${data.serviceLineCount} line items</span></div>
      ${data.otherRevenueCents ? `<div class="ssdc-detail-row"><span class="label">Other</span><span class="value">${money(data.otherRevenueCents)}</span></div>` : ''}
      <h3 style="font-family:'Space Grotesk',sans-serif; font-size:1.05rem; margin:20px 0 4px;">By channel</h3>
      ${channelRows}
    `;
  }

  function renderRevenueTrend(data) {
    const detail = document.getElementById('ssdc-detail');
    const values = data.weeklySeries.map((w) => w.revenueCents);
    const max = Math.max(...values, 1);
    const avg = values.reduce((s, v) => s + v, 0) / (values.length || 1);
    const bars = data.weeklySeries.map((w) => {
      const pct = Math.max((w.revenueCents / max) * 100, 2);
      const cls = w.revenueCents >= avg ? 'above-avg' : 'below-avg';
      const label = new Date(w.weekStart).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      return `<div class="ssdc-chart-bar ${cls}" style="height:${pct}%" title="Week of ${label}: ${money(w.revenueCents)}"></div>`;
    }).join('');
    detail.innerHTML = `
      <h3 style="font-family:'Space Grotesk',sans-serif; font-size:1.05rem; margin-bottom:12px;">Earnings over time</h3>
      <div class="ssdc-totals">
        <div><div class="num">${money(data.weekCents)}</div><div class="label">Last 7 days</div></div>
        <div><div class="num">${money(data.monthCents)}</div><div class="label">Last 30 days</div></div>
        <div><div class="num">${money(data.quarterCents)}</div><div class="label">Last 90 days</div></div>
      </div>
      <p style="font-size:0.78rem; color:var(--text-faint); margin-bottom:4px;">Weekly revenue, last 12 weeks (teal = above average, orange = below)</p>
      <div class="ssdc-chart">${bars}</div>
    `;
  }

  let allOrders = [];

  async function loadOrders() {
    try {
      allOrders = await api('/api/admin/orders');
      renderOrderRows();
    } catch (err) {
      orderRows.innerHTML = `<tr><td colspan="8" class="admin-error">${err.message}</td></tr>`;
    }
  }

  document.getElementById('order-search').addEventListener('input', renderOrderRows);

  const ZOHO_STATUS_LABELS = { synced: 'Synced', pending: 'Pending', failed: 'Failed', unconfigured: 'Not connected' };

  function renderOrderRows() {
    const q = document.getElementById('order-search').value.trim().toLowerCase();
    const filtered = !q ? allOrders : allOrders.filter((o) =>
      (o.customer_name || '').toLowerCase().includes(q) || (o.customer_email || '').toLowerCase().includes(q));

    orderRows.innerHTML = filtered.map((o) => `
      <tr data-id="${o.id}">
        <td>${new Date(o.created_at).toLocaleString()}</td>
        <td><span class="channel-badge channel-${o.channel}">${o.channel === 'in_store' ? 'In-store' : 'Online'}</span></td>
        <td>${escapeHtml(o.customer_name || '—')}<br><span style="color:var(--text-faint);font-size:0.8em;">${escapeHtml(o.customer_email || '')}</span></td>
        <td>${o.items.map((i) => `${i.quantity}× ${escapeHtml(i.name)}`).join('<br>')}</td>
        <td>${money(o.total_cents)}</td>
        <td><span class="order-status order-status-${o.fulfillment_status}">${o.fulfillment_status}</span></td>
        <td><span class="order-status ${o.zoho_sync_status === 'synced' ? 'order-status-fulfilled' : ''}" title="${escapeHtml(o.zoho_sync_error || '')}">${ZOHO_STATUS_LABELS[o.zoho_sync_status] || o.zoho_sync_status}</span></td>
        <td>
          <div class="admin-row-actions">
            <button type="button" data-action="receipt">Receipt</button>
            <button type="button" data-action="toggle-fulfillment">${o.fulfillment_status === 'fulfilled' ? 'Mark unfulfilled' : 'Mark fulfilled'}</button>
            ${o.zoho_sync_status === 'failed' ? '<button type="button" data-action="retry-zoho">Retry Zoho sync</button>' : ''}
          </div>
        </td>
      </tr>
    `).join('') || '<tr><td colspan="8">No orders yet.</td></tr>';

    orderRows.querySelectorAll('[data-action="receipt"]').forEach((btn) => {
      btn.addEventListener('click', () => {
        window.open(`/receipt.html?id=${btn.closest('tr').dataset.id}`, '_blank');
      });
    });
    orderRows.querySelectorAll('[data-action="toggle-fulfillment"]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = Number(btn.closest('tr').dataset.id);
        const order = allOrders.find((o) => o.id === id);
        const next = order.fulfillment_status === 'fulfilled' ? 'unfulfilled' : 'fulfilled';
        try {
          await api(`/api/admin/orders/${id}/fulfillment`, { method: 'PUT', body: JSON.stringify({ fulfillment_status: next }) });
          loadOrders();
        } catch (err) {
          alert(err.message);
        }
      });
    });
    orderRows.querySelectorAll('[data-action="retry-zoho"]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = Number(btn.closest('tr').dataset.id);
        btn.disabled = true;
        btn.textContent = 'Retrying…';
        try {
          await api(`/api/admin/orders/${id}/zoho-retry`, { method: 'POST' });
          loadOrders();
        } catch (err) {
          alert(err.message);
          btn.disabled = false;
          btn.textContent = 'Retry Zoho sync';
        }
      });
    });
  }

  /* ============ Inquiries (owner + staff) ============ */
  const INQUIRY_STATUS_LABELS = { new: 'Received', read: 'Read', responded: 'Responded' };

  async function loadInquiries() {
    try {
      const inquiries = await api('/api/admin/inquiries');
      inquiryRows.innerHTML = inquiries.map((i) => `
        <tr data-id="${i.id}">
          <td>${new Date(i.created_at).toLocaleString()}</td>
          <td>${escapeHtml(i.name)}</td>
          <td>${escapeHtml(i.email)}${i.phone ? `<br><span style="color:var(--text-faint);font-size:0.8em;">${escapeHtml(i.phone)}</span>` : ''}</td>
          <td>${escapeHtml(i.product_name || '—')}</td>
          <td class="specs-cell">${escapeHtml(i.message)}</td>
          <td>
            <select class="inquiry-status-select order-status-select" data-status="${i.status}">
              ${Object.entries(INQUIRY_STATUS_LABELS).map(([val, label]) => `<option value="${val}" ${i.status === val ? 'selected' : ''}>${label}</option>`).join('')}
            </select>
          </td>
        </tr>
      `).join('') || '<tr><td colspan="6">No inquiries yet.</td></tr>';

      inquiryRows.querySelectorAll('.inquiry-status-select').forEach((select) => {
        select.addEventListener('change', async () => {
          const id = Number(select.closest('tr').dataset.id);
          try {
            await api(`/api/admin/inquiries/${id}/status`, { method: 'PUT', body: JSON.stringify({ status: select.value }) });
          } catch (err) {
            alert(err.message);
            loadInquiries();
          }
        });
      });
    } catch (err) {
      inquiryRows.innerHTML = `<tr><td colspan="6" class="admin-error">${err.message}</td></tr>`;
    }
  }

  /* ============ Storefront promo banner (owner + staff) ============ */
  async function loadPromo() {
    try {
      const promo = await api('/api/admin/promo');
      document.getElementById('promo-headline').innerHTML = promo.headline || '';
      document.getElementById('promo-subtext').innerHTML = promo.subtext || '';
      document.getElementById('promo-cta-text').value = promo.cta_text || '';
      document.getElementById('promo-cta-link').value = promo.cta_link || '';
      document.getElementById('promo-enabled').checked = !!promo.enabled;
      document.getElementById('promo-image-file').value = '';
      document.getElementById('promo-image-remove').checked = false;
      const preview = document.getElementById('promo-image-preview');
      const previewImg = document.getElementById('promo-image-preview-img');
      if (promo.image_src) {
        previewImg.src = promo.image_src;
        preview.hidden = false;
      } else {
        preview.hidden = true;
      }
    } catch (err) {
      document.getElementById('promo-toast').textContent = err.message;
    }
  }

  document.getElementById('promo-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const toast = document.getElementById('promo-toast');
    toast.textContent = '';
    toast.className = 'admin-toast';

    const fd = new FormData();
    fd.append('headline', document.getElementById('promo-headline').innerHTML.trim());
    fd.append('subtext', document.getElementById('promo-subtext').innerHTML.trim());
    fd.append('cta_text', document.getElementById('promo-cta-text').value.trim());
    fd.append('cta_link', document.getElementById('promo-cta-link').value.trim());
    fd.append('enabled', document.getElementById('promo-enabled').checked ? 'true' : 'false');
    const fileInput = document.getElementById('promo-image-file');
    if (fileInput.files[0]) fd.append('image', fileInput.files[0]);
    if (document.getElementById('promo-image-remove').checked) fd.append('remove_image', 'true');

    try {
      const res = await fetch('/api/admin/promo', { method: 'PUT', body: fd });
      let data = null;
      try { data = await res.json(); } catch (_) { /* no body */ }
      if (!res.ok) throw new Error((data && data.error) || `Request failed (${res.status})`);
      toast.textContent = 'Banner saved.';
      toast.classList.add('ok');
      loadPromo();
    } catch (err) {
      toast.textContent = err.message;
      toast.classList.add('err');
    }
  });

  /* ============ Site content (owner only) ============ */
  async function loadSiteContent() {
    const toast = document.getElementById('content-toast');
    toast.textContent = '';
    toast.className = 'admin-toast';
    try {
      const blocks = await api('/api/admin/site-content');
      blocks.forEach((block) => {
        const el = document.getElementById(`content-${block.key}`);
        if (el) el.innerHTML = block.html || '';
      });
    } catch (err) {
      toast.textContent = err.message;
      toast.classList.add('err');
    }
  }

  document.getElementById('content-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const toast = document.getElementById('content-toast');
    toast.textContent = '';
    toast.className = 'admin-toast';
    try {
      const editors = document.querySelectorAll('#content-panel [data-content-key]');
      await Promise.all(Array.from(editors).map((el) => api(`/api/admin/site-content/${el.dataset.contentKey}`, {
        method: 'PUT',
        body: JSON.stringify({ html: el.innerHTML.trim() }),
      })));
      toast.textContent = 'Saved.';
      toast.classList.add('ok');
    } catch (err) {
      toast.textContent = err.message;
      toast.classList.add('err');
    }
  });

  /* ============ Parts catalog (owner + staff) ============ */
  let partsPage = 1;
  const PARTS_LIMIT = 50;
  let partsSearchDebounce = null;

  function partsQueryParams() {
    const params = new URLSearchParams();
    params.set('page', partsPage);
    params.set('limit', PARTS_LIMIT);
    const q = document.getElementById('parts-search').value.trim();
    const brand = document.getElementById('parts-filter-brand').value;
    const model = document.getElementById('parts-filter-model').value;
    const category = document.getElementById('parts-filter-category').value;
    if (q) params.set('q', q);
    if (brand) params.set('brand', brand);
    if (model) params.set('model', model);
    if (category) params.set('category', category);
    return params;
  }

  async function loadPartsFacets() {
    try {
      const facets = await api('/api/admin/parts-catalog/facets');
      const brandSelect = document.getElementById('parts-filter-brand');
      const currentBrand = brandSelect.value;
      brandSelect.innerHTML = '<option value="">All brands</option>' +
        facets.brands.map((b) => `<option value="${b}">${b}</option>`).join('');
      brandSelect.value = currentBrand;

      const importBrandSelect = document.getElementById('parts-import-brand');
      const currentImportBrand = importBrandSelect.value;
      const knownBrands = [...new Set(['iPhone', 'Samsung', ...facets.brands])];
      importBrandSelect.innerHTML = '<option value="">Select brand…</option>' +
        knownBrands.map((b) => `<option value="${escapeHtml(b)}">${escapeHtml(b)}</option>`).join('') +
        '<option value="__new__">+ New brand…</option>';
      if (currentImportBrand && currentImportBrand !== '__new__') importBrandSelect.value = currentImportBrand;

      const categorySelect = document.getElementById('parts-filter-category');
      const currentCategory = categorySelect.value;
      categorySelect.innerHTML = '<option value="">All part types</option>' +
        facets.categories.map((c) => `<option value="${c}">${c}</option>`).join('');
      categorySelect.value = currentCategory;

      window._partsModels = facets.models;
      renderModelOptions();
    } catch (err) {
      /* facets are non-critical — leave filters as-is */
    }
  }

  function renderModelOptions() {
    const brand = document.getElementById('parts-filter-brand').value;
    const modelSelect = document.getElementById('parts-filter-model');
    const current = modelSelect.value;
    const models = (window._partsModels || []).filter((m) => !brand || m.brand === brand);
    modelSelect.innerHTML = '<option value="">All models</option>' +
      models.map((m) => `<option value="${m.model}">${m.model}</option>`).join('');
    if (models.some((m) => m.model === current)) modelSelect.value = current;
  }

  function centsToInputValue(cents) {
    return Number.isFinite(cents) && cents !== null ? (cents / 100).toFixed(2) : '';
  }

  async function savePartRow(id, { price_cents, stock }) {
    return api(`/api/admin/parts-catalog/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ price_cents, stock }),
    });
  }

  function renderPartsRow(item) {
    const tr = document.createElement('tr');
    const inStock = item.stock > 0;
    tr.innerHTML = `
      <td>${item.item_number}</td>
      <td>${item.brand}</td>
      <td>${item.model}</td>
      <td>${item.category}</td>
      <td>${item.part_name}</td>
      <td><input type="number" min="0" step="0.01" class="parts-price-input" value="${centsToInputValue(item.price_cents)}" style="width:90px;"></td>
      <td><input type="number" min="0" step="1" class="parts-stock-input" value="${item.stock}" style="width:70px;"></td>
      <td><span class="order-status ${inStock ? 'order-status-fulfilled' : ''}">${inStock ? 'In stock' : 'Out of stock'}</span></td>
      <td style="display:flex; gap:6px; flex-wrap:wrap;">
        <button type="button" class="btn btn-ghost parts-save-btn">Save</button>
        <button type="button" class="btn btn-ghost parts-toggle-btn">${inStock ? 'Mark out of stock' : 'Mark in stock'}</button>
      </td>
    `;
    tr.querySelector('.parts-save-btn').addEventListener('click', async () => {
      const priceInput = tr.querySelector('.parts-price-input');
      const stockInput = tr.querySelector('.parts-stock-input');
      const priceValue = priceInput.value.trim();
      try {
        const updated = await savePartRow(item.id, {
          price_cents: priceValue === '' ? '' : Math.round(parseFloat(priceValue) * 100),
          stock: stockInput.value,
        });
        tr.replaceWith(renderPartsRow(updated));
      } catch (err) {
        alert(err.message);
      }
    });
    tr.querySelector('.parts-toggle-btn').addEventListener('click', async () => {
      const priceInput = tr.querySelector('.parts-price-input');
      const priceValue = priceInput.value.trim();
      try {
        const updated = await savePartRow(item.id, {
          price_cents: priceValue === '' ? '' : Math.round(parseFloat(priceValue) * 100),
          stock: inStock ? 0 : 1,
        });
        tr.replaceWith(renderPartsRow(updated));
      } catch (err) {
        alert(err.message);
      }
    });
    return tr;
  }

  async function loadPartsRows() {
    const tbody = document.getElementById('parts-rows');
    tbody.innerHTML = `<tr><td colspan="9">Loading…</td></tr>`;
    try {
      const data = await api(`/api/admin/parts-catalog?${partsQueryParams().toString()}`);
      const hintEl = document.getElementById('parts-search-hint');
      if (data.hints && data.hints.length) {
        const uniqueMatches = [...new Set(data.hints.map((h) => h.matched))];
        hintEl.textContent = `Also matching part type: ${uniqueMatches.join(', ')}`;
        hintEl.hidden = false;
      } else {
        hintEl.hidden = true;
      }
      tbody.innerHTML = '';
      if (!data.items.length) {
        tbody.innerHTML = `<tr><td colspan="9">No parts match.</td></tr>`;
      } else {
        data.items.forEach((item) => tbody.appendChild(renderPartsRow(item)));
      }
      const start = data.total === 0 ? 0 : (data.page - 1) * data.limit + 1;
      const end = Math.min(data.page * data.limit, data.total);
      document.getElementById('parts-page-info').textContent = `Showing ${start}-${end} of ${data.total}`;
      document.getElementById('parts-prev').disabled = data.page <= 1;
      document.getElementById('parts-next').disabled = end >= data.total;
    } catch (err) {
      tbody.innerHTML = `<tr><td colspan="9" class="admin-error">${err.message}</td></tr>`;
    }
  }

  document.getElementById('parts-search').addEventListener('input', () => {
    clearTimeout(partsSearchDebounce);
    partsSearchDebounce = setTimeout(() => { partsPage = 1; loadPartsRows(); }, 350);
  });
  document.getElementById('parts-filter-brand').addEventListener('change', () => {
    renderModelOptions();
    document.getElementById('parts-filter-model').value = '';
    partsPage = 1;
    loadPartsRows();
  });
  document.getElementById('parts-filter-model').addEventListener('change', () => { partsPage = 1; loadPartsRows(); });
  document.getElementById('parts-filter-category').addEventListener('change', () => { partsPage = 1; loadPartsRows(); });
  document.getElementById('parts-prev').addEventListener('click', () => { if (partsPage > 1) { partsPage--; loadPartsRows(); } });
  document.getElementById('parts-next').addEventListener('click', () => { partsPage++; loadPartsRows(); });

  document.getElementById('parts-import-brand').addEventListener('change', (e) => {
    document.getElementById('parts-import-brand-new-wrap').hidden = e.target.value !== '__new__';
  });

  document.getElementById('parts-import-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const toast = document.getElementById('parts-import-toast');
    toast.className = 'admin-toast';
    const brandSelectValue = document.getElementById('parts-import-brand').value;
    const brand = brandSelectValue === '__new__'
      ? document.getElementById('parts-import-brand-new').value.trim()
      : brandSelectValue;
    if (!brand) {
      toast.textContent = 'Select or enter a brand.';
      toast.classList.add('err');
      return;
    }
    toast.textContent = 'Importing… this can take a moment for large files.';
    const fd = new FormData();
    fd.append('brand', brand);
    fd.append('file', document.getElementById('parts-import-file').files[0]);
    try {
      const res = await fetch('/api/admin/parts-catalog/import', { method: 'POST', body: fd });
      let data = null;
      try { data = await res.json(); } catch (_) { /* no body */ }
      if (!res.ok) throw new Error((data && data.error) || `Request failed (${res.status})`);
      toast.textContent = `Imported: ${data.inserted} new, ${data.updated} updated, ${data.skipped} skipped (of ${data.total} rows).`;
      toast.classList.add('ok');
      document.getElementById('parts-import-form').reset();
      document.getElementById('parts-import-brand-new-wrap').hidden = true;
      await loadPartsFacets();
      partsPage = 1;
      loadPartsRows();
    } catch (err) {
      toast.textContent = err.message;
      toast.classList.add('err');
    }
  });

  document.querySelectorAll('.richtext-toolbar button').forEach((btn) => {
    btn.addEventListener('mousedown', (e) => e.preventDefault()); // keep the editor's text selection intact
    btn.addEventListener('click', () => {
      const cmd = btn.dataset.cmd;
      if (cmd === 'link') {
        const url = prompt('Link URL:');
        if (url) document.execCommand('createLink', false, url);
      } else {
        document.execCommand(cmd, false, null);
      }
    });
  });

  /* ============ Inventory (owner + staff) ============ */
  let allProducts = [];
  let selectedCategory = null;
  let inventoryData = { categories: [], services: { count: 0, sales7d: [] } };
  let partsCatalogSummary = null;

  async function loadInventory() {
    try {
      inventoryData = await api('/api/admin/inventory');
      try { partsCatalogSummary = await api('/api/admin/parts-catalog/facets'); } catch (_) { partsCatalogSummary = null; }
      renderInventoryCards();
      renderInventoryDonut();
    } catch (err) {
      document.getElementById('inventory-cards').innerHTML = `<p class="admin-error">${err.message}</p>`;
    }
  }

  function renderInventoryCards() {
    const container = document.getElementById('inventory-cards');
    const cards = inventoryData.categories.map((c, i) => renderBannerCard({
      key: c.category,
      label: CATEGORY_LABELS[c.category] || c.category,
      num: c.productCount,
      numUnit: c.productCount === 1 ? 'product listed' : 'products listed',
      sub: `${c.totalStock} units in stock · click to view`,
      sparkline: c.sales7d,
      gradient: GRADIENT_KEYS[i % GRADIENT_KEYS.length],
      active: selectedCategory === c.category,
    }));
    cards.push(renderBannerCard({
      key: '__services__',
      label: 'Services',
      num: inventoryData.services.count,
      numUnit: inventoryData.services.count === 1 ? 'service offered' : 'services offered',
      sub: 'click to manage services',
      sparkline: inventoryData.services.sales7d,
      gradient: GRADIENT_KEYS[inventoryData.categories.length % GRADIENT_KEYS.length],
    }));
    if (partsCatalogSummary) {
      const outOfStock = partsCatalogSummary.total - partsCatalogSummary.inStock;
      cards.push(renderBannerCard({
        key: '__parts_catalog__',
        label: 'Parts catalog (iPhone/Samsung)',
        num: partsCatalogSummary.total,
        numUnit: partsCatalogSummary.total === 1 ? 'part listed' : 'parts listed',
        sub: `${partsCatalogSummary.inStock} in stock · ${outOfStock} out of stock · click to manage`,
        gradient: GRADIENT_KEYS[(inventoryData.categories.length + 1) % GRADIENT_KEYS.length],
      }));
    }
    container.innerHTML = cards.join('');
    container.querySelectorAll('.banner-card').forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.key;
        if (key === '__services__') { activateTab('services'); return; }
        if (key === '__parts_catalog__') { activateTab('parts'); return; }
        selectCategory(key);
      });
    });
  }

  function renderInventoryDonut() {
    const total = inventoryData.categories.reduce((sum, c) => sum + c.totalStock, 0);
    document.getElementById('inventory-donut-total').textContent = total;
    const legend = document.getElementById('inventory-legend');
    const donut = document.getElementById('inventory-donut');
    if (!total) {
      donut.style.setProperty('--donut-stops', 'var(--border) 0 100%');
      legend.innerHTML = '<p style="color:var(--text-faint);">No stock yet.</p>';
      return;
    }
    let acc = 0;
    const stops = [];
    const legendRows = [];
    inventoryData.categories.forEach((c, i) => {
      const pct = (c.totalStock / total) * 100;
      const color = GRADIENT_HEX[GRADIENT_KEYS[i % GRADIENT_KEYS.length]];
      stops.push(`${color} ${acc.toFixed(2)}% ${(acc + pct).toFixed(2)}%`);
      legendRows.push(`<div class="donut-legend-row"><span class="donut-legend-dot" style="background:${color}"></span>${escapeHtml(CATEGORY_LABELS[c.category] || c.category)} — ${c.totalStock}</div>`);
      acc += pct;
    });
    donut.style.setProperty('--donut-stops', stops.join(', '));
    legend.innerHTML = legendRows.join('');
  }

  function selectCategory(category) {
    selectedCategory = category;
    document.getElementById('inventory-detail').hidden = false;
    document.getElementById('inventory-detail-heading').textContent = `${CATEGORY_LABELS[category] || category} — products`;
    renderInventoryCards();
    renderProductRows();
    resetForm();
  }

  document.getElementById('inventory-back').addEventListener('click', () => {
    selectedCategory = null;
    document.getElementById('inventory-detail').hidden = true;
    renderInventoryCards();
  });

  function populateCategoryOptions() {
    const categories = [...new Set(allProducts.map((p) => p.category))].sort();
    const current = fieldCategory.value;
    fieldCategory.innerHTML = categories.map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(CATEGORY_LABELS[c] || c)}</option>`).join('')
      + '<option value="__new__">+ New category…</option>';
    if (categories.includes(current)) fieldCategory.value = current;
    else if (selectedCategory && categories.includes(selectedCategory)) fieldCategory.value = selectedCategory;
  }

  fieldCategory.addEventListener('change', () => {
    document.getElementById('field-category-new-wrap').hidden = fieldCategory.value !== '__new__';
  });

  async function loadProducts() {
    try {
      allProducts = await api('/api/admin/products');
      populateCategoryOptions();
      if (selectedCategory) renderProductRows();
    } catch (err) {
      productRows.innerHTML = `<tr><td colspan="9" class="admin-error">${err.message}</td></tr>`;
    }
  }

  function renderProductRows() {
    const filtered = allProducts.filter((p) => p.category === selectedCategory);
    productRows.innerHTML = filtered.map((p) => `
      <tr data-id="${p.id}">
        <td><img class="admin-thumb" src="${escapeHtml(p.image_src || '')}" alt=""></td>
        <td>${escapeHtml(p.name)}</td>
        <td>${CATEGORY_LABELS[p.category] || p.category}</td>
        <td class="specs-cell">${escapeHtml(p.specs || '')}</td>
        <td>${escapeHtml(p.condition)}</td>
        <td>${money(p.price_cents)}</td>
        <td>${p.stock}</td>
        <td>${escapeHtml(p.barcode || '—')}</td>
        <td>
          <div class="admin-row-actions">
            <button type="button" data-action="edit">Edit</button>
            <button type="button" data-action="delete" class="danger">Delete</button>
          </div>
        </td>
      </tr>
    `).join('') || '<tr><td colspan="9">No products in this category yet.</td></tr>';

    productRows.querySelectorAll('[data-action="edit"]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = Number(btn.closest('tr').dataset.id);
        const p = allProducts.find((x) => x.id === id);
        if (p) startEdit(p);
      });
    });
    productRows.querySelectorAll('[data-action="delete"]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = Number(btn.closest('tr').dataset.id);
        deleteProduct(id);
      });
    });
  }

  function startEdit(p) {
    fieldId.value = p.id;
    fieldName.value = p.name;
    document.getElementById('field-category-new-wrap').hidden = true;
    fieldCategory.value = p.category;
    fieldCondition.value = p.condition;
    fieldSpecs.value = p.specs || '';
    fieldPrice.value = (p.price_cents / 100).toFixed(2);
    fieldStock.value = p.stock;
    fieldIcon.value = p.icon || '';
    fieldBarcode.value = p.barcode || '';
    fieldImage.value = p.image_url || '';
    fieldImageFile.value = '';
    fieldImageRemove.checked = false;
    if (p.image_src) {
      imagePreviewImg.src = p.image_src;
      imagePreview.hidden = false;
    } else {
      imagePreview.hidden = true;
    }
    formHeading.textContent = `Editing: ${p.name}`;
    formSubmitBtn.textContent = 'Save changes';
    formCancelBtn.hidden = false;
    productForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function resetForm() {
    productForm.reset();
    fieldId.value = '';
    fieldImageFile.value = '';
    fieldImageRemove.checked = false;
    imagePreview.hidden = true;
    document.getElementById('field-category-new-wrap').hidden = true;
    document.getElementById('field-category-new').value = '';
    if (selectedCategory) fieldCategory.value = selectedCategory;
    formHeading.textContent = 'Add a product';
    formSubmitBtn.textContent = 'Add product';
    formCancelBtn.hidden = true;
  }

  formCancelBtn.addEventListener('click', resetForm);

  productForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formToast.textContent = '';
    formToast.className = 'admin-toast';

    const categoryValue = fieldCategory.value === '__new__'
      ? document.getElementById('field-category-new').value.trim()
      : fieldCategory.value;
    if (!categoryValue) {
      formToast.textContent = 'Enter a category name.';
      formToast.classList.add('err');
      return;
    }

    const fd = new FormData();
    fd.append('name', fieldName.value.trim());
    fd.append('category', categoryValue);
    fd.append('condition', fieldCondition.value);
    fd.append('specs', fieldSpecs.value.trim());
    fd.append('price_cents', String(Math.round(parseFloat(fieldPrice.value) * 100)));
    fd.append('stock', fieldStock.value.trim() || '25');
    fd.append('icon', fieldIcon.value.trim() || '📦');
    fd.append('barcode', fieldBarcode.value.trim());
    fd.append('image_url', fieldImage.value.trim());
    if (fieldImageFile.files[0]) fd.append('image', fieldImageFile.files[0]);
    if (fieldImageRemove.checked) fd.append('remove_image', 'true');

    try {
      const url = fieldId.value ? `/api/admin/products/${fieldId.value}` : '/api/admin/products';
      const method = fieldId.value ? 'PUT' : 'POST';
      const res = await fetch(url, { method, body: fd });
      let data = null;
      try { data = await res.json(); } catch (_) { /* no body */ }
      if (!res.ok) throw new Error((data && data.error) || `Request failed (${res.status})`);
      formToast.textContent = fieldId.value ? 'Product updated.' : 'Product added.';
      formToast.classList.add('ok');
      selectedCategory = categoryValue;
      resetForm();
      await loadProducts();
      await loadInventory();
      document.getElementById('inventory-detail').hidden = false;
      document.getElementById('inventory-detail-heading').textContent = `${CATEGORY_LABELS[categoryValue] || categoryValue} — products`;
      renderProductRows();
    } catch (err) {
      formToast.textContent = err.message;
      formToast.classList.add('err');
    }
  });

  document.getElementById('field-barcode-generate').addEventListener('click', () => {
    fieldBarcode.value = `SS-${Date.now().toString(36).toUpperCase()}${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  });

  async function deleteProduct(id) {
    if (!confirm('Delete this product? This cannot be undone.')) return;
    try {
      await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
      await loadProducts();
      await loadInventory();
      renderProductRows();
    } catch (err) {
      alert(err.message);
    }
  }

  /* ============ Services (owner + staff) ============ */
  const serviceRows = document.getElementById('service-rows');
  const serviceForm = document.getElementById('service-form');
  const serviceFormHeading = document.getElementById('service-form-heading');
  const serviceFormSubmitBtn = document.getElementById('service-form-submit-btn');
  const serviceFormCancelBtn = document.getElementById('service-form-cancel-btn');
  const serviceFormToast = document.getElementById('service-form-toast');
  const serviceFieldId = document.getElementById('service-id');
  const serviceFieldName = document.getElementById('service-field-name');
  const serviceFieldDescription = document.getElementById('service-field-description');
  const serviceFieldPrice = document.getElementById('service-field-price');
  const serviceFieldIcon = document.getElementById('service-field-icon');
  const serviceFieldActive = document.getElementById('service-field-active');

  async function loadServices() {
    try {
      const services = await api('/api/admin/services');
      serviceRows.innerHTML = services.map((s) => `
        <tr data-id="${s.id}">
          <td>${s.icon ? `${escapeHtml(s.icon)} ` : ''}${escapeHtml(s.name)}</td>
          <td class="specs-cell">${escapeHtml(s.description || '')}</td>
          <td>${money(s.price_cents)}</td>
          <td>${s.active ? 'Yes' : 'No'}</td>
          <td>
            <div class="admin-row-actions">
              <button type="button" data-action="edit">Edit</button>
              <button type="button" data-action="delete" class="danger">Delete</button>
            </div>
          </td>
        </tr>
      `).join('') || '<tr><td colspan="5">No services yet.</td></tr>';

      serviceRows.querySelectorAll('[data-action="edit"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = Number(btn.closest('tr').dataset.id);
          const s = services.find((x) => x.id === id);
          if (s) startEditService(s);
        });
      });
      serviceRows.querySelectorAll('[data-action="delete"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = Number(btn.closest('tr').dataset.id);
          deleteService(id);
        });
      });
    } catch (err) {
      serviceRows.innerHTML = `<tr><td colspan="5" class="admin-error">${err.message}</td></tr>`;
    }
  }

  function startEditService(s) {
    serviceFieldId.value = s.id;
    serviceFieldName.value = s.name;
    serviceFieldDescription.value = s.description || '';
    serviceFieldPrice.value = (s.price_cents / 100).toFixed(2);
    serviceFieldIcon.value = s.icon || '';
    serviceFieldActive.checked = !!s.active;
    serviceFormHeading.textContent = `Editing: ${s.name}`;
    serviceFormSubmitBtn.textContent = 'Save changes';
    serviceFormCancelBtn.hidden = false;
    serviceForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function resetServiceForm() {
    serviceForm.reset();
    serviceFieldId.value = '';
    serviceFieldActive.checked = true;
    serviceFormHeading.textContent = 'Add a service';
    serviceFormSubmitBtn.textContent = 'Add service';
    serviceFormCancelBtn.hidden = true;
  }

  serviceFormCancelBtn.addEventListener('click', resetServiceForm);

  serviceForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    serviceFormToast.textContent = '';
    serviceFormToast.className = 'admin-toast';

    const payload = {
      name: serviceFieldName.value.trim(),
      description: serviceFieldDescription.value.trim(),
      price_cents: Math.round(parseFloat(serviceFieldPrice.value) * 100),
      icon: serviceFieldIcon.value.trim() || '🛠️',
      active: serviceFieldActive.checked,
    };

    try {
      const url = serviceFieldId.value ? `/api/admin/services/${serviceFieldId.value}` : '/api/admin/services';
      const method = serviceFieldId.value ? 'PUT' : 'POST';
      await api(url, { method, body: JSON.stringify(payload) });
      serviceFormToast.textContent = serviceFieldId.value ? 'Service updated.' : 'Service added.';
      serviceFormToast.classList.add('ok');
      resetServiceForm();
      loadServices();
    } catch (err) {
      serviceFormToast.textContent = err.message;
      serviceFormToast.classList.add('err');
    }
  });

  async function deleteService(id) {
    if (!confirm('Delete this service? This cannot be undone.')) return;
    try {
      await fetch(`/api/admin/services/${id}`, { method: 'DELETE' });
      loadServices();
    } catch (err) {
      alert(err.message);
    }
  }

  /* ============ Record a sale (owner + staff) ============ */
  let saleProducts = [];
  let saleServices = [];
  let saleLines = [];

  function newLine() { return { product_id: '', service_id: '', part_id: '', name: '', price_cents: 0, quantity: 1 }; }

  async function loadSaleProducts() {
    try {
      [saleProducts, saleServices] = await Promise.all([
        api('/api/admin/products'),
        api('/api/admin/services'),
      ]);
    } catch (_) {
      saleProducts = [];
      saleServices = [];
    }
    if (!saleLines.length) saleLines = [newLine()];
    renderSaleLines();
  }

  function selectValue(line) {
    if (line.product_id) return `p-${line.product_id}`;
    if (line.service_id) return `s-${line.service_id}`;
    return '';
  }

  function renderSaleLines() {
    const container = document.getElementById('sale-lines');
    container.innerHTML = saleLines.map((line, idx) => `
      <div class="sale-line" data-idx="${idx}">
        <select class="sale-line-product">
          <option value="">Custom item…</option>
          <optgroup label="Products">
            ${saleProducts.map((p) => `<option value="p-${p.id}" ${selectValue(line) === `p-${p.id}` ? 'selected' : ''}>${escapeHtml(p.name)} — ${money(p.price_cents)} (stock ${p.stock})</option>`).join('')}
          </optgroup>
          <optgroup label="Services">
            ${saleServices.filter((s) => s.active).map((s) => `<option value="s-${s.id}" ${selectValue(line) === `s-${s.id}` ? 'selected' : ''}>${escapeHtml(s.name)} — ${money(s.price_cents)}</option>`).join('')}
          </optgroup>
        </select>
        <input type="text" class="sale-line-name" placeholder="Item name" value="${escapeHtml(line.name)}" ${line.product_id || line.service_id || line.part_id ? 'readonly' : ''}>
        <input type="number" class="sale-line-qty" min="1" step="1" value="${line.quantity}">
        <input type="number" class="sale-line-price" min="0" step="0.01" value="${(line.price_cents / 100).toFixed(2)}">
        <button type="button" class="sale-line-remove" aria-label="Remove line">✕</button>
      </div>
    `).join('');

    container.querySelectorAll('.sale-line').forEach((row) => {
      const idx = Number(row.dataset.idx);
      row.querySelector('.sale-line-product').addEventListener('change', (e) => {
        const val = e.target.value;
        if (val.startsWith('p-')) {
          const p = saleProducts.find((x) => String(x.id) === val.slice(2));
          saleLines[idx] = { ...saleLines[idx], product_id: p.id, service_id: '', part_id: '', name: p.name, price_cents: p.price_cents };
        } else if (val.startsWith('s-')) {
          const s = saleServices.find((x) => String(x.id) === val.slice(2));
          saleLines[idx] = { ...saleLines[idx], product_id: '', service_id: s.id, part_id: '', name: s.name, price_cents: s.price_cents };
        } else {
          saleLines[idx] = { ...saleLines[idx], product_id: '', service_id: '', part_id: '', name: '' };
        }
        renderSaleLines();
        updateSaleTotal();
      });
      row.querySelector('.sale-line-name').addEventListener('input', (e) => { saleLines[idx].name = e.target.value; });
      row.querySelector('.sale-line-qty').addEventListener('input', (e) => {
        saleLines[idx].quantity = Math.max(1, Math.round(Number(e.target.value) || 1));
        updateSaleTotal();
      });
      row.querySelector('.sale-line-price').addEventListener('input', (e) => {
        saleLines[idx].price_cents = Math.round(parseFloat(e.target.value || 0) * 100);
        updateSaleTotal();
      });
      row.querySelector('.sale-line-remove').addEventListener('click', () => {
        saleLines.splice(idx, 1);
        if (!saleLines.length) saleLines.push(newLine());
        renderSaleLines();
        updateSaleTotal();
      });
    });

    updateSaleTotal();
  }

  function updateSaleTotal() {
    const total = saleLines.reduce((sum, l) => sum + (l.price_cents || 0) * (l.quantity || 0), 0);
    document.getElementById('sale-total').textContent = money(total);
  }

  document.getElementById('sale-add-line').addEventListener('click', () => {
    saleLines.push(newLine());
    renderSaleLines();
  });

  document.getElementById('sale-scan-input').addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    const input = e.target;
    const code = input.value.trim();
    input.value = '';
    if (!code) return;

    const product = saleProducts.find((p) => p.barcode && p.barcode === code);
    if (!product) {
      alert(`No product found with barcode "${code}".`);
      return;
    }

    const existing = saleLines.find((l) => String(l.product_id) === String(product.id));
    if (existing) {
      existing.quantity += 1;
    } else {
      const blank = saleLines.find((l) => !l.product_id && !l.service_id && !l.part_id && !l.name.trim());
      const line = { product_id: product.id, service_id: '', part_id: '', name: product.name, price_cents: product.price_cents, quantity: 1 };
      if (blank) Object.assign(blank, line);
      else saleLines.push(line);
    }
    renderSaleLines();
    updateSaleTotal();
    input.focus();
  });

  /* ---- Find-a-part lookup (parts catalog) ---- */
  let salePartSearchDebounce = null;
  const salePartSearchInput = document.getElementById('sale-part-search');
  const salePartResults = document.getElementById('sale-part-results');
  const salePartHint = document.getElementById('sale-part-hint');

  function addPartToSale(part) {
    const name = `${part.brand} ${part.model} — ${part.part_name}`;
    const existing = saleLines.find((l) => String(l.part_id) === String(part.id));
    if (existing) {
      existing.quantity += 1;
    } else {
      const blank = saleLines.find((l) => !l.product_id && !l.service_id && !l.part_id && !l.name.trim());
      const line = { product_id: '', service_id: '', part_id: part.id, name, price_cents: part.price_cents || 0, quantity: 1 };
      if (blank) Object.assign(blank, line);
      else saleLines.push(line);
    }
    renderSaleLines();
    updateSaleTotal();
    salePartSearchInput.value = '';
    salePartResults.hidden = true;
    salePartHint.hidden = true;
  }

  async function runSalePartSearch(q) {
    if (q.length < 2) { salePartResults.hidden = true; salePartHint.hidden = true; return; }
    try {
      const data = await api(`/api/admin/parts-catalog?q=${encodeURIComponent(q)}&limit=8`);
      if (data.hints && data.hints.length) {
        const uniqueMatches = [...new Set(data.hints.map((h) => h.matched))];
        salePartHint.textContent = `Also matching: ${uniqueMatches.join(', ')}`;
        salePartHint.hidden = false;
      } else {
        salePartHint.hidden = true;
      }
      if (!data.items.length) {
        salePartResults.innerHTML = `<div class="sale-part-result">No parts match.</div>`;
      } else {
        salePartResults.innerHTML = data.items.map((p) => `
          <div class="sale-part-result" data-id="${p.id}">
            <div>
              <div class="sale-part-result-name">${escapeHtml(p.brand)} ${escapeHtml(p.model)} — ${escapeHtml(p.part_name)}</div>
              <div class="sale-part-result-meta">${escapeHtml(p.item_number)} · ${escapeHtml(p.category)} · ${p.price_cents != null ? money(p.price_cents) : 'no price set'} · ${p.stock > 0 ? 'In stock' : 'Out of stock'}</div>
            </div>
          </div>
        `).join('');
        salePartResults.querySelectorAll('.sale-part-result[data-id]').forEach((row) => {
          const part = data.items.find((p) => String(p.id) === row.dataset.id);
          row.addEventListener('click', () => addPartToSale(part));
        });
      }
      salePartResults.hidden = false;
    } catch (_) {
      salePartResults.hidden = true;
    }
  }

  salePartSearchInput.addEventListener('input', () => {
    clearTimeout(salePartSearchDebounce);
    const q = salePartSearchInput.value.trim();
    salePartSearchDebounce = setTimeout(() => runSalePartSearch(q), 300);
  });
  document.addEventListener('click', (e) => {
    if (!salePartSearchInput.contains(e.target) && !salePartResults.contains(e.target)) salePartResults.hidden = true;
  });

  document.getElementById('sale-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const toast = document.getElementById('sale-toast');
    toast.textContent = '';
    toast.className = 'admin-toast';

    const items = saleLines
      .filter((l) => l.name.trim() && l.price_cents >= 0 && l.quantity > 0)
      .map((l) => ({ product_id: l.product_id || null, service_id: l.service_id || null, part_id: l.part_id || null, name: l.name.trim(), price_cents: l.price_cents, quantity: l.quantity }));

    if (!items.length) {
      toast.textContent = 'Add at least one line item.';
      toast.classList.add('err');
      return;
    }

    const payload = {
      customer_name: document.getElementById('sale-customer-name').value.trim() || null,
      customer_email: document.getElementById('sale-customer-email').value.trim() || null,
      customer_phone: document.getElementById('sale-customer-phone').value.trim() || null,
      payment_method: document.getElementById('sale-payment-method').value,
      items,
    };

    const btn = document.getElementById('sale-submit-btn');
    btn.disabled = true;
    try {
      const data = await api('/api/admin/orders', { method: 'POST', body: JSON.stringify(payload) });
      toast.textContent = 'Sale recorded.';
      toast.classList.add('ok');
      window.open(`/receipt.html?id=${data.order.id}`, '_blank');
      document.getElementById('sale-form').reset();
      saleLines = [newLine()];
      renderSaleLines();
    } catch (err) {
      toast.textContent = err.message;
      toast.classList.add('err');
    } finally {
      btn.disabled = false;
    }
  });

  /* ============ Settings — change password (owner only) ============ */
  function wirePasswordForm(formId, currentId, newId, toastId, role) {
    document.getElementById(formId).addEventListener('submit', async (e) => {
      e.preventDefault();
      const toast = document.getElementById(toastId);
      toast.textContent = '';
      toast.className = 'admin-toast';
      const current_password = document.getElementById(currentId).value;
      const new_password = document.getElementById(newId).value;
      try {
        await api('/api/admin/password', { method: 'PUT', body: JSON.stringify({ role, current_password, new_password }) });
        toast.textContent = 'Password updated.';
        toast.classList.add('ok');
        document.getElementById(formId).reset();
      } catch (err) {
        toast.textContent = err.message;
        toast.classList.add('err');
      }
    });
  }

  wirePasswordForm('staff-password-form', 'staff-pw-current', 'staff-pw-new', 'staff-pw-toast', 'staff');
  wirePasswordForm('owner-password-form', 'owner-pw-current', 'owner-pw-new', 'owner-pw-toast', 'owner');

  checkSession();
})();
