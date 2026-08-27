(() => {
  'use strict';

  const GRIDS = { phones: 'tp-grid-phones', laptops: 'tp-grid-laptops', parts: 'tp-grid-parts' };
  const SECTIONS = { phones: 'tp-section-phones', laptops: 'tp-section-laptops', parts: 'tp-section-parts' };

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
        <div class="tp-card-media${p.has_image ? ' tp-card-media-photo' : ''}">
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

  let allProducts = [];
  const searchInput = document.getElementById('tp-search');
  const searchEmpty = document.getElementById('tp-search-empty');

  function renderProducts(query) {
    const grids = Object.fromEntries(Object.entries(GRIDS).map(([k, id]) => [k, document.getElementById(id)]));
    const sections = Object.fromEntries(Object.entries(SECTIONS).map(([k, id]) => [k, document.getElementById(id)]));
    const q = query.trim().toLowerCase();

    const filtered = !q
      ? allProducts
      : allProducts.filter((p) => `${p.name} ${p.specs || ''}`.toLowerCase().includes(q));

    const byCategory = { phones: [], laptops: [], parts: [] };
    filtered.forEach((p) => { (byCategory[p.category] || byCategory.parts).push(p); });

    let anyVisible = false;
    Object.entries(byCategory).forEach(([cat, items]) => {
      const grid = grids[cat];
      const section = sections[cat];
      if (!grid) return;
      if (items.length) {
        grid.innerHTML = items.map(cardHtml).join('');
        if (section) section.hidden = false;
        anyVisible = true;
      } else {
        grid.innerHTML = '';
        if (section) section.hidden = !!q; // keep an empty category visible when not searching
        if (!q && grid) grid.innerHTML = '<p class="tp-specs">Nothing listed in this category yet.</p>';
      }
    });

    searchEmpty.hidden = !q || anyVisible;

    document.querySelectorAll('.tp-add-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = Number(btn.dataset.id);
        window.SSCart.addToCart(id, 1);
        const original = btn.textContent;
        btn.textContent = 'Added ✓';
        setTimeout(() => { btn.textContent = original; }, 1200);
      });
    });
  }

  searchInput.addEventListener('input', () => renderProducts(searchInput.value));

  async function loadProducts() {
    const grids = Object.fromEntries(Object.entries(GRIDS).map(([k, id]) => [k, document.getElementById(id)]));
    try {
      const res = await fetch('/api/products');
      if (!res.ok) throw new Error('unavailable');
      allProducts = await res.json();
      renderProducts(searchInput.value);
    } catch (_) {
      Object.values(grids).forEach((el) => {
        if (el) el.innerHTML = '<p class="tp-specs">Catalog is temporarily unavailable — check back soon.</p>';
      });
    }
  }

  loadProducts();
})();
