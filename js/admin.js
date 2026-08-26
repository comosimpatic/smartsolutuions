(() => {
  'use strict';

  const loginView = document.getElementById('login-view');
  const dashboardView = document.getElementById('dashboard-view');
  const loginForm = document.getElementById('login-form');
  const loginError = document.getElementById('login-error');
  const logoutBtn = document.getElementById('logout-btn');
  const statsRow = document.getElementById('stats-row');
  const productRows = document.getElementById('product-rows');
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

  const tabProducts = document.getElementById('tab-products');
  const tabOrders = document.getElementById('tab-orders');
  const productsPanel = document.getElementById('products-panel');
  const ordersPanel = document.getElementById('orders-panel');
  const orderRows = document.getElementById('order-rows');

  const CATEGORY_LABELS = { phones: 'Phones', laptops: 'Laptops', parts: 'Parts & accessories' };
  const money = (cents) => `$${(cents / 100).toFixed(2)}`;

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

  function showDashboard() {
    loginView.hidden = true;
    dashboardView.hidden = false;
    loadOverview();
    loadProducts();
  }

  tabProducts.addEventListener('click', () => {
    tabProducts.classList.add('active');
    tabOrders.classList.remove('active');
    productsPanel.hidden = false;
    ordersPanel.hidden = true;
  });
  tabOrders.addEventListener('click', () => {
    tabOrders.classList.add('active');
    tabProducts.classList.remove('active');
    ordersPanel.hidden = false;
    productsPanel.hidden = true;
    loadOrders();
  });

  async function loadOrders() {
    try {
      const orders = await api('/api/admin/orders');
      orderRows.innerHTML = orders.map((o) => `
        <tr data-id="${o.id}">
          <td>${new Date(o.created_at).toLocaleString()}</td>
          <td>${escapeHtml(o.customer_name || '—')}<br><span style="color:var(--text-faint);font-size:0.8em;">${escapeHtml(o.customer_email || '')}</span></td>
          <td>${o.items.map((i) => `${i.quantity}× ${escapeHtml(i.name)}`).join('<br>')}</td>
          <td>${money(o.total_cents)}</td>
          <td>
            <span class="order-status order-status-${o.fulfillment_status}">${o.fulfillment_status}</span>
          </td>
          <td>
            <button type="button" data-action="toggle-fulfillment">
              ${o.fulfillment_status === 'fulfilled' ? 'Mark unfulfilled' : 'Mark fulfilled'}
            </button>
          </td>
        </tr>
      `).join('') || '<tr><td colspan="6">No orders yet.</td></tr>';

      orderRows.querySelectorAll('[data-action="toggle-fulfillment"]').forEach((btn) => {
        btn.addEventListener('click', async () => {
          const id = Number(btn.closest('tr').dataset.id);
          const order = orders.find((o) => o.id === id);
          const next = order.fulfillment_status === 'fulfilled' ? 'unfulfilled' : 'fulfilled';
          try {
            await api(`/api/admin/orders/${id}/fulfillment`, { method: 'PUT', body: JSON.stringify({ fulfillment_status: next }) });
            loadOrders();
          } catch (err) {
            alert(err.message);
          }
        });
      });
    } catch (err) {
      orderRows.innerHTML = `<tr><td colspan="6" class="admin-error">${err.message}</td></tr>`;
    }
  }

  async function checkSession() {
    try {
      const { loggedIn } = await api('/api/admin/session');
      if (loggedIn) showDashboard();
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
      await api('/api/admin/login', { method: 'POST', body: JSON.stringify({ password }) });
      document.getElementById('login-password').value = '';
      showDashboard();
    } catch (err) {
      loginError.textContent = err.message;
    }
  });

  logoutBtn.addEventListener('click', async () => {
    try { await api('/api/admin/logout', { method: 'POST' }); } catch (_) { /* ignore */ }
    showLogin();
  });

  async function loadOverview() {
    try {
      const data = await api('/api/admin/overview');
      const byCategory = Object.fromEntries(data.byCategory.map((c) => [c.category, c.count]));
      const lastUpdated = data.lastUpdated ? new Date(data.lastUpdated).toLocaleString() : '—';
      statsRow.innerHTML = `
        <div class="admin-stat"><div class="num">${data.totalProducts}</div><div class="label">Total products</div></div>
        <div class="admin-stat"><div class="num">${byCategory.phones || 0}</div><div class="label">Phones</div></div>
        <div class="admin-stat"><div class="num">${byCategory.laptops || 0}</div><div class="label">Laptops</div></div>
        <div class="admin-stat"><div class="num">${byCategory.parts || 0}</div><div class="label">Parts &amp; accessories</div></div>
        <div class="admin-stat"><div class="num" style="font-size:1rem;">${lastUpdated}</div><div class="label">Last updated</div></div>
      `;
    } catch (err) {
      statsRow.innerHTML = `<p class="admin-error">${err.message}</p>`;
    }
  }

  async function loadProducts() {
    try {
      const products = await api('/api/admin/products');
      productRows.innerHTML = products.map((p) => `
        <tr data-id="${p.id}">
          <td>${p.icon || ''}</td>
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

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
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
    formHeading.textContent = `Editing: ${p.name}`;
    formSubmitBtn.textContent = 'Save changes';
    formCancelBtn.hidden = false;
    productForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function resetForm() {
    productForm.reset();
    fieldId.value = '';
    formHeading.textContent = 'Add a product';
    formSubmitBtn.textContent = 'Add product';
    formCancelBtn.hidden = true;
  }

  formCancelBtn.addEventListener('click', resetForm);

  productForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formToast.textContent = '';
    formToast.className = 'admin-toast';

    const payload = {
      name: fieldName.value.trim(),
      category: fieldCategory.value,
      condition: fieldCondition.value,
      specs: fieldSpecs.value.trim(),
      price_cents: Math.round(parseFloat(fieldPrice.value) * 100),
      stock: fieldStock.value.trim() ? Math.round(parseFloat(fieldStock.value)) : 25,
      icon: fieldIcon.value.trim() || '📦',
      image_url: fieldImage.value.trim() || null,
    };

    try {
      if (fieldId.value) {
        await api(`/api/admin/products/${fieldId.value}`, { method: 'PUT', body: JSON.stringify(payload) });
        formToast.textContent = 'Product updated.';
      } else {
        await api('/api/admin/products', { method: 'POST', body: JSON.stringify(payload) });
        formToast.textContent = 'Product added.';
      }
      formToast.classList.add('ok');
      resetForm();
      loadOverview();
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
      loadOverview();
      loadProducts();
    } catch (err) {
      alert(err.message);
    }
  }

  checkSession();
})();
