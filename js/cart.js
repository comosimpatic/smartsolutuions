(() => {
  'use strict';

  const CART_KEY = 'ss_cart_v1';
  const money = (cents) => `$${(cents / 100).toFixed(2)}`;

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch (_) { return {}; }
  }
  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    renderBadge();
  }
  function addToCart(id, qty = 1) {
    const cart = getCart();
    cart[id] = (cart[id] || 0) + qty;
    saveCart(cart);
  }
  function setQty(id, qty) {
    const cart = getCart();
    if (qty <= 0) delete cart[id];
    else cart[id] = qty;
    saveCart(cart);
  }
  function clearCart() {
    localStorage.removeItem(CART_KEY);
    renderBadge();
  }
  function cartCount() {
    return Object.values(getCart()).reduce((a, b) => a + b, 0);
  }

  let productsCache = null;
  async function getProducts() {
    if (productsCache) return productsCache;
    const res = await fetch('/api/products');
    productsCache = res.ok ? await res.json() : [];
    return productsCache;
  }

  /* ---------- DOM scaffold ---------- */
  const fab = document.createElement('button');
  fab.className = 'cart-fab';
  fab.setAttribute('aria-label', 'Open cart');
  fab.innerHTML = `🛒 <span class="cart-fab-count" id="cart-fab-count" hidden>0</span>`;
  document.body.appendChild(fab);

  const overlay = document.createElement('div');
  overlay.className = 'cart-overlay';
  overlay.id = 'cart-overlay';
  overlay.innerHTML = `
    <aside class="cart-drawer" role="dialog" aria-label="Shopping cart">
      <div class="cart-drawer-head">
        <h2>Your cart</h2>
        <button class="cart-close" id="cart-close" aria-label="Close cart">✕</button>
      </div>
      <div class="cart-drawer-body" id="cart-drawer-body"></div>
      <div class="cart-drawer-foot" id="cart-drawer-foot"></div>
    </aside>`;
  document.body.appendChild(overlay);

  const bannerHost = document.createElement('div');
  bannerHost.className = 'cart-banner-host';
  document.body.appendChild(bannerHost);

  function renderBadge() {
    const count = cartCount();
    const badge = document.getElementById('cart-fab-count');
    badge.hidden = count === 0;
    badge.textContent = count;
  }

  function openDrawer() {
    overlay.classList.add('open');
    renderDrawer();
  }
  function closeDrawer() {
    overlay.classList.remove('open');
  }

  fab.addEventListener('click', openDrawer);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeDrawer(); });
  overlay.querySelector('#cart-close').addEventListener('click', closeDrawer);

  async function renderDrawer() {
    const body = document.getElementById('cart-drawer-body');
    const foot = document.getElementById('cart-drawer-foot');
    const cart = getCart();
    const ids = Object.keys(cart).map(Number);
    if (!ids.length) {
      body.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
      foot.innerHTML = '';
      return;
    }
    body.innerHTML = '<p class="cart-empty">Loading…</p>';
    const products = await getProducts();
    const byId = Object.fromEntries(products.map((p) => [p.id, p]));

    let subtotal = 0;
    const rows = ids.map((id) => {
      const p = byId[id];
      const qty = cart[id];
      if (!p) return '';
      subtotal += p.price_cents * qty;
      return `
        <div class="cart-line" data-id="${id}">
          <img src="${escapeHtml(p.image_url || '')}" alt="" class="cart-line-img">
          <div class="cart-line-info">
            <p class="cart-line-name">${escapeHtml(p.name)}</p>
            <p class="cart-line-price">${money(p.price_cents)}</p>
          </div>
          <div class="cart-line-qty">
            <button type="button" data-action="dec" aria-label="Decrease quantity">−</button>
            <span>${qty}</span>
            <button type="button" data-action="inc" aria-label="Increase quantity">+</button>
          </div>
          <button type="button" class="cart-line-remove" data-action="remove" aria-label="Remove item">✕</button>
        </div>`;
    }).join('');

    body.innerHTML = rows || '<p class="cart-empty">Your cart is empty.</p>';
    foot.innerHTML = `
      <div class="cart-subtotal"><span>Subtotal</span><strong>${money(subtotal)}</strong></div>
      <button type="button" class="btn btn-primary cart-checkout-btn" id="cart-checkout-btn">Checkout →</button>
      <p class="cart-checkout-note" id="cart-checkout-note"></p>`;

    body.querySelectorAll('.cart-line').forEach((line) => {
      const id = Number(line.dataset.id);
      line.querySelector('[data-action="inc"]').addEventListener('click', () => { setQty(id, (cart[id] || 0) + 1); renderDrawer(); });
      line.querySelector('[data-action="dec"]').addEventListener('click', () => { setQty(id, (cart[id] || 0) - 1); renderDrawer(); });
      line.querySelector('[data-action="remove"]').addEventListener('click', () => { setQty(id, 0); renderDrawer(); });
    });

    document.getElementById('cart-checkout-btn').addEventListener('click', startCheckout);
  }

  async function startCheckout() {
    const btn = document.getElementById('cart-checkout-btn');
    const note = document.getElementById('cart-checkout-note');
    const cart = getCart();
    const items = Object.entries(cart).map(([id, quantity]) => ({ id: Number(id), quantity }));
    if (!items.length) return;
    btn.disabled = true;
    btn.textContent = 'Redirecting…';
    note.textContent = '';
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Checkout failed');
      window.location.href = data.url;
    } catch (err) {
      note.textContent = err.message;
      btn.disabled = false;
      btn.textContent = 'Checkout →';
    }
  }

  function showBanner(html, tone = 'info') {
    const el = document.createElement('div');
    el.className = `cart-banner cart-banner-${tone}`;
    el.innerHTML = `<div class="cart-banner-inner">${html}</div><button type="button" class="cart-banner-close" aria-label="Dismiss">✕</button>`;
    el.querySelector('.cart-banner-close').addEventListener('click', () => el.remove());
    bannerHost.appendChild(el);
  }

  async function handleReturnFromStripe() {
    const params = new URLSearchParams(window.location.search);
    const checkout = params.get('checkout');
    if (!checkout) return;

    if (checkout === 'cancel') {
      showBanner('Checkout was canceled — your cart is still saved.', 'info');
    } else if (checkout === 'success') {
      const sessionId = params.get('session_id');
      try {
        const res = await fetch(`/api/checkout/confirm?session_id=${encodeURIComponent(sessionId)}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Could not confirm order');
        clearCart();
        const itemLines = data.items.map((i) => `${i.quantity}× ${escapeHtml(i.name)}`).join(', ');
        showBanner(`<strong>Order confirmed — thank you!</strong><br>${itemLines} · Total ${money(data.order.total_cents)}. A confirmation was sent to ${escapeHtml(data.order.customer_email || 'your email')}.`, 'success');
      } catch (err) {
        showBanner(`We couldn't confirm your order automatically (${escapeHtml(err.message)}). If you were charged, contact us and we'll sort it out.`, 'error');
      }
    }

    params.delete('checkout');
    params.delete('session_id');
    const clean = window.location.pathname + (params.toString() ? `?${params}` : '');
    window.history.replaceState({}, '', clean);
  }

  window.SSCart = { addToCart, cartCount };

  renderBadge();
  handleReturnFromStripe();
})();
