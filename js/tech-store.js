(() => {
  'use strict';

  const GRIDS = { phones: 'tp-grid-phones', laptops: 'tp-grid-laptops', parts: 'tp-grid-parts' };

  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function cardHtml(p) {
    const conditionClass = p.condition && p.condition !== 'New' ? ' tp-card-condition-alt' : '';
    const outOfStock = p.stock <= 0;
    const lowStock = !outOfStock && p.stock <= 3;
    return `
      <article class="tp-card" data-id="${p.id}">
        <div class="tp-card-media">
          ${p.image_src ? `<img src="${escapeHtml(p.image_src)}" alt="${escapeHtml(p.name)}" loading="lazy">` : (p.icon || '📦')}
        </div>
        <span class="tp-card-condition${conditionClass}">${escapeHtml(p.condition)}</span>
        <h3>${escapeHtml(p.name)}</h3>
        <p class="tp-specs">${escapeHtml(p.specs || '')}</p>
        ${lowStock ? `<p class="tp-stock-low">Only ${p.stock} left</p>` : ''}
        ${outOfStock ? `<p class="tp-stock-out">Out of stock</p>` : ''}
        <div class="tp-card-footer">
          <span class="tp-price">$${(p.price_cents / 100).toFixed(2)}</span>
          <button type="button" class="btn btn-primary tp-add-btn" data-id="${p.id}" ${outOfStock ? 'disabled' : ''}>
            ${outOfStock ? 'Sold out' : 'Add to cart'}
          </button>
        </div>
      </article>`;
  }

  async function loadProducts() {
    const grids = Object.fromEntries(Object.entries(GRIDS).map(([k, id]) => [k, document.getElementById(id)]));
    try {
      const res = await fetch('/api/products');
      if (!res.ok) throw new Error('unavailable');
      const products = await res.json();

      Object.values(grids).forEach((el) => { if (el) el.innerHTML = ''; });
      const byCategory = { phones: [], laptops: [], parts: [] };
      products.forEach((p) => { (byCategory[p.category] || byCategory.parts).push(p); });

      Object.entries(byCategory).forEach(([cat, items]) => {
        const el = grids[cat];
        if (!el) return;
        el.innerHTML = items.length
          ? items.map(cardHtml).join('')
          : '<p class="tp-specs">Nothing listed in this category yet.</p>';
      });

      document.querySelectorAll('.tp-add-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = Number(btn.dataset.id);
          window.SSCart.addToCart(id, 1);
          const original = btn.textContent;
          btn.textContent = 'Added ✓';
          setTimeout(() => { btn.textContent = original; }, 1200);
        });
      });
    } catch (_) {
      Object.values(grids).forEach((el) => {
        if (el) el.innerHTML = '<p class="tp-specs">Catalog is temporarily unavailable — check back soon.</p>';
      });
    }
  }

  loadProducts();
})();
