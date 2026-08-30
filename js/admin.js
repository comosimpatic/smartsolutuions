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
  const money = (cents) => `$${(cents / 100).toFixed(2)}`;

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
  };

  function activateTab(name) {
    Object.entries(TABS).forEach(([key, { btn, panel }]) => {
      document.getElementById(btn).classList.toggle('active', key === name);
      document.getElementById(panel).hidden = key !== name;
    });
    if (name === 'overview') { loadOverview(); loadOrders(); loadInsights(); }
    if (name === 'products') { loadProducts(); loadPromo(); }
    if (name === 'services') { loadServices(); }
    if (name === 'sale') { loadSaleProducts(); }
    if (name === 'inquiries') { loadInquiries(); }
  }

  document.getElementById('tab-sale').addEventListener('click', () => activateTab('sale'));
  document.getElementById('tab-overview').addEventListener('click', () => activateTab('overview'));
  document.getElementById('tab-products').addEventListener('click', () => activateTab('products'));
  document.getElementById('tab-services').addEventListener('click', () => activateTab('services'));
  document.getElementById('tab-inquiries').addEventListener('click', () => activateTab('inquiries'));
  document.getElementById('tab-settings').addEventListener('click', () => activateTab('settings'));

  function showDashboard(role) {
    loginView.hidden = true;
    dashboardView.hidden = false;
    roleBadge.textContent = role === 'owner' ? 'Owner' : 'Staff';
    ownerElevateLink.hidden = role === 'owner';
    document.querySelectorAll('[data-owner-only]').forEach((el) => { el.hidden = role !== 'owner'; });
    document.querySelectorAll('[data-staff-only]').forEach((el) => { el.hidden = role !== 'staff'; });
    activateTab(role === 'owner' ? 'overview' : 'sale');
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
      if (evt.type === 'sale' || evt.type === 'low_stock') { loadOverview(); }
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

  /* ============ AI insights (owner) ============ */
  async function loadInsights() {
    try {
      const data = await api('/api/admin/insights');
      renderInsights(data);
    } catch (err) {
      document.getElementById('insights-empty').textContent = err.message;
    }
  }

  function renderInsights(data) {
    const empty = document.getElementById('insights-empty');
    const textEl = document.getElementById('insights-text');
    const meta = document.getElementById('insights-meta');
    if (data && data.text) {
      empty.hidden = true;
      textEl.hidden = false;
      textEl.textContent = data.text;
      meta.textContent = `Generated ${new Date(data.generatedAt).toLocaleString()}`;
    } else {
      empty.hidden = false;
      textEl.hidden = true;
      meta.textContent = '';
    }
  }

  document.getElementById('insights-refresh-btn').addEventListener('click', async (e) => {
    const btn = e.currentTarget;
    btn.disabled = true;
    const original = btn.textContent;
    btn.textContent = 'Generating…';
    try {
      const data = await api('/api/admin/insights', { method: 'POST' });
      renderInsights(data);
    } catch (err) {
      document.getElementById('insights-empty').hidden = false;
      document.getElementById('insights-empty').textContent = err.message;
      document.getElementById('insights-text').hidden = true;
    } finally {
      btn.disabled = false;
      btn.textContent = original;
    }
  });

  /* ============ Overview (owner) ============ */
  async function loadOverview() {
    try {
      const data = await api('/api/admin/overview');
      const byCategory = Object.fromEntries(data.byCategory.map((c) => [c.category, c.count]));
      const lastUpdated = data.lastUpdated ? new Date(data.lastUpdated).toLocaleString() : '—';
      statsRow.innerHTML = `
        <div class="admin-stat"><div class="num">${money(data.revenueTodayCents)}</div><div class="label">Revenue (today)</div></div>
        <div class="admin-stat"><div class="num">${data.ordersToday}</div><div class="label">Orders (today)</div></div>
        <div class="admin-stat"><div class="num">${money(data.revenue30dCents)}</div><div class="label">Revenue (30 days)</div></div>
        <div class="admin-stat"><div class="num">${data.orders30d}</div><div class="label">Orders (30 days)</div></div>
        <div class="admin-stat"><div class="num">${data.totalProducts}</div><div class="label">Total products</div></div>
        <div class="admin-stat"><div class="num">${data.lowStock.length}</div><div class="label">Low stock items</div></div>
      `;
      const lowStockRows = document.getElementById('low-stock-rows');
      lowStockRows.innerHTML = data.lowStock.map((p) => `
        <tr><td>${escapeHtml(p.name)}</td><td>${p.stock}</td></tr>
      `).join('') || '<tr><td colspan="2">Nothing low on stock.</td></tr>';
    } catch (err) {
      statsRow.innerHTML = `<p class="admin-error">${err.message}</p>`;
    }
  }

  let allOrders = [];

  async function loadOrders() {
    try {
      allOrders = await api('/api/admin/orders');
      renderOrderRows();
    } catch (err) {
      orderRows.innerHTML = `<tr><td colspan="7" class="admin-error">${err.message}</td></tr>`;
    }
  }

  document.getElementById('order-search').addEventListener('input', renderOrderRows);

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
        <td>
          <div class="admin-row-actions">
            <button type="button" data-action="receipt">Receipt</button>
            <button type="button" data-action="toggle-fulfillment">${o.fulfillment_status === 'fulfilled' ? 'Mark unfulfilled' : 'Mark fulfilled'}</button>
          </div>
        </td>
      </tr>
    `).join('') || '<tr><td colspan="7">No orders yet.</td></tr>';

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
  }

  /* ============ Inquiries (owner + staff) ============ */
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
          <td><span class="order-status ${i.status === 'read' ? 'order-status-fulfilled' : ''}">${i.status}</span></td>
          <td>
            <button type="button" data-action="toggle-status">${i.status === 'read' ? 'Mark new' : 'Mark read'}</button>
          </td>
        </tr>
      `).join('') || '<tr><td colspan="7">No inquiries yet.</td></tr>';

      inquiryRows.querySelectorAll('[data-action="toggle-status"]').forEach((btn) => {
        btn.addEventListener('click', async () => {
          const id = Number(btn.closest('tr').dataset.id);
          const inquiry = inquiries.find((i) => i.id === id);
          const next = inquiry.status === 'read' ? 'new' : 'read';
          try {
            await api(`/api/admin/inquiries/${id}/status`, { method: 'PUT', body: JSON.stringify({ status: next }) });
            loadInquiries();
          } catch (err) {
            alert(err.message);
          }
        });
      });
    } catch (err) {
      inquiryRows.innerHTML = `<tr><td colspan="7" class="admin-error">${err.message}</td></tr>`;
    }
  }

  /* ============ Storefront promo banner (owner + staff) ============ */
  async function loadPromo() {
    try {
      const promo = await api('/api/admin/promo');
      document.getElementById('promo-headline').value = promo.headline || '';
      document.getElementById('promo-subtext').value = promo.subtext || '';
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
    fd.append('headline', document.getElementById('promo-headline').value.trim());
    fd.append('subtext', document.getElementById('promo-subtext').value.trim());
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

  /* ============ Products (owner + staff) ============ */
  async function loadProducts() {
    try {
      const products = await api('/api/admin/products');
      productRows.innerHTML = products.map((p) => `
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
      `).join('') || '<tr><td colspan="9">No products yet.</td></tr>';

      productRows.querySelectorAll('[data-action="edit"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = Number(btn.closest('tr').dataset.id);
          const p = products.find((x) => x.id === id);
          if (p) startEdit(p);
        });
      });
      productRows.querySelectorAll('[data-action="delete"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = Number(btn.closest('tr').dataset.id);
          deleteProduct(id);
        });
      });
    } catch (err) {
      productRows.innerHTML = `<tr><td colspan="9" class="admin-error">${err.message}</td></tr>`;
    }
  }

  function startEdit(p) {
    fieldId.value = p.id;
    fieldName.value = p.name;
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
    formHeading.textContent = 'Add a product';
    formSubmitBtn.textContent = 'Add product';
    formCancelBtn.hidden = true;
  }

  formCancelBtn.addEventListener('click', resetForm);

  productForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formToast.textContent = '';
    formToast.className = 'admin-toast';

    const fd = new FormData();
    fd.append('name', fieldName.value.trim());
    fd.append('category', fieldCategory.value);
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
      resetForm();
      loadProducts();
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
      loadProducts();
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

  function newLine() { return { product_id: '', service_id: '', name: '', price_cents: 0, quantity: 1 }; }

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
        <input type="text" class="sale-line-name" placeholder="Item name" value="${escapeHtml(line.name)}" ${line.product_id || line.service_id ? 'readonly' : ''}>
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
          saleLines[idx] = { ...saleLines[idx], product_id: p.id, service_id: '', name: p.name, price_cents: p.price_cents };
        } else if (val.startsWith('s-')) {
          const s = saleServices.find((x) => String(x.id) === val.slice(2));
          saleLines[idx] = { ...saleLines[idx], product_id: '', service_id: s.id, name: s.name, price_cents: s.price_cents };
        } else {
          saleLines[idx] = { ...saleLines[idx], product_id: '', service_id: '', name: '' };
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
      const blank = saleLines.find((l) => !l.product_id && !l.service_id && !l.name.trim());
      const line = { product_id: product.id, service_id: '', name: product.name, price_cents: product.price_cents, quantity: 1 };
      if (blank) Object.assign(blank, line);
      else saleLines.push(line);
    }
    renderSaleLines();
    updateSaleTotal();
    input.focus();
  });

  document.getElementById('sale-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const toast = document.getElementById('sale-toast');
    toast.textContent = '';
    toast.className = 'admin-toast';

    const items = saleLines
      .filter((l) => l.name.trim() && l.price_cents >= 0 && l.quantity > 0)
      .map((l) => ({ product_id: l.product_id || null, service_id: l.service_id || null, name: l.name.trim(), price_cents: l.price_cents, quantity: l.quantity }));

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
