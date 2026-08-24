(() => {
  'use strict';

  const GRIDS = { phones: 'tp-grid-phones', laptops: 'tp-grid-laptops', parts: 'tp-grid-parts' };

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function cardHtml(p) {
    const conditionClass = p.condition && p.condition !== 'New' ? ' tp-card-condition-alt' : '';
    return `
      <article class="tp-card">
        <div class="tp-card-media" aria-hidden="true">${p.icon || '📦'}</div>
        <span class="tp-card-condition${conditionClass}">${escapeHtml(p.condition)}</span>
        <h3>${escapeHtml(p.name)}</h3>
        <p class="tp-specs">${escapeHtml(p.specs || '')}</p>
        <div class="tp-card-footer">
          <span class="tp-price">$${(p.price_cents / 100).toFixed(2)}</span>
          <a href="../index.html#contact">Check availability →</a>
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
    } catch (_) {
      Object.values(grids).forEach((el) => {
        if (el) el.innerHTML = '<p class="tp-specs">Catalog is temporarily unavailable — check back soon.</p>';
      });
    }
  }

  loadProducts();
})();
