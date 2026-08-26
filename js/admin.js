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
  };

  function activateTab(name) {
    Object.entries(TABS).forEach(([key, { btn, panel }]) => {
      document.getElementById(btn).classList.toggle('active', key === name);
      document.getElementById(panel).hidden = key !== name;
    });
    if (name === 'overview') { loadOverview(); loadOrders(); }
    if (name === 'products') { loadProducts(); }
    if (name === 'sale') { loadSaleProducts(); }
  }

  document.getElementById('tab-sale').addEventListener('click', () => activateTab('sale'));
  document.getElementById('tab-overview').addEventListener('click', () => activateTab('overview'));
  document.getElementById('tab-products').addEventListener('click', () => activateTab('products'));

  function showDashboard(role) {
    loginView.hidden = true;
    dashboardView.hidden = false;
    roleBadge.textContent = role === 'owner' ? 'Owner' : 'Staff';
    ownerElevateLink.hidden = role === 'owner';
    document.querySelectorAll('[data-owner-only]').forEach((el) => { el.hidden = role !== 'owner'; });
    activateTab(role === 'owner' ? 'overview' : 'sale');
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

  /* ============ Overview (owner) ============ */
  async function loadOverview() {
    try {
      const data = await api('/api/admin/overview');
      const byCategory = Object.fromEntries(data.byCategory.map((c) => [c.category, c.count]));
      const lastUpdated = data.lastUpdated ? new Date(data.lastUpdated).toLocaleString() : '—';
      statsRow.innerHTML = `
        <div class="admin-stat"><div class="num">${money(data.revenue30dCents)}</div><div class="label">Revenue (30 days)</div></div>
        <div class="admin-stat"><div class="num">${data.orders30d}</div><div class="label">Orders (30 days)</div></div>
        <div class="admin-stat"><div class="num">${data.totalProducts}</div><div class="label">Total products</div></div>
        <div class="admin-stat"><div class="num">${byCategory.phones || 0}</div><div class="label">Phones</div></div>
        <div class="admin-stat"><div class="num">${byCategory.laptops || 0}</div><div class="label">Laptops</div></div>
        <div class="admin-stat"><div class="num" style="font-size:1rem;">${lastUpdated}</div><div class="label">Catalog updated</div></div>
      `;
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

  /* ============ Products (owner) ============ */
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
          <td>
            <div class="admin-row-actions">
              <button type="button" data-action="edit">Edit</button>
              <button type="button" data-action="delete" class="danger">Delete</button>
            </div>
          </td>
        </tr>
      `).join('') || '<tr><td colspan="8">No products yet.</td></tr>';

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
      productRows.innerHTML = `<tr><td colspan="8" class="admin-error">${err.message}</td></tr>`;
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

  async function deleteProduct(id) {
    if (!confirm('Delete this product? This cannot be undone.')) return;
    try {
      await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
      loadProducts();
    } catch (err) {
      alert(err.message);
    }
  }

  /* ============ Record a sale (owner + staff) ============ */
  let saleProducts = [];
  let saleLines = [];

  function newLine() { return { product_id: '', name: '', price_cents: 0, quantity: 1 }; }

  async function loadSaleProducts() {
    try {
      saleProducts = await api('/api/admin/products');
    } catch (_) {
      saleProducts = [];
    }
    if (!saleLines.length) saleLines = [newLine()];
    renderSaleLines();
  }

  function renderSaleLines() {
    const container = document.getElementById('sale-lines');
    container.innerHTML = saleLines.map((line, idx) => `
      <div class="sale-line" data-idx="${idx}">
        <select class="sale-line-product">
          <option value="">Custom item…</option>
          ${saleProducts.map((p) => `<option value="${p.id}" ${String(p.id) === String(line.product_id) ? 'selected' : ''}>${escapeHtml(p.name)} — ${money(p.price_cents)} (stock ${p.stock})</option>`).join('')}
        </select>
        <input type="text" class="sale-line-name" placeholder="Item name" value="${escapeHtml(line.name)}" ${line.product_id ? 'readonly' : ''}>
        <input type="number" class="sale-line-qty" min="1" step="1" value="${line.quantity}">
        <input type="number" class="sale-line-price" min="0" step="0.01" value="${(line.price_cents / 100).toFixed(2)}">
        <button type="button" class="sale-line-remove" aria-label="Remove line">✕</button>
      </div>
    `).join('');

    container.querySelectorAll('.sale-line').forEach((row) => {
      const idx = Number(row.dataset.idx);
      row.querySelector('.sale-line-product').addEventListener('change', (e) => {
        const pid = e.target.value;
        if (pid) {
          const p = saleProducts.find((x) => String(x.id) === pid);
          saleLines[idx] = { ...saleLines[idx], product_id: pid, name: p.name, price_cents: p.price_cents };
        } else {
          saleLines[idx] = { ...saleLines[idx], product_id: '', name: '' };
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

  document.getElementById('sale-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const toast = document.getElementById('sale-toast');
    toast.textContent = '';
    toast.className = 'admin-toast';

    const items = saleLines
      .filter((l) => l.name.trim() && l.price_cents >= 0 && l.quantity > 0)
      .map((l) => ({ product_id: l.product_id || null, name: l.name.trim(), price_cents: l.price_cents, quantity: l.quantity }));

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

  checkSession();
})();
