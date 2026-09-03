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
        <div class="tp-card-media${p.image_src ? ' tp-card-media-photo' : ''}">
          ${p.image_src ? `<img src="${escapeHtml(p.image_src)}" alt="${escapeHtml(p.name)}" loading="lazy">` : (p.icon || '📦')}
        </div>
        <span class="tp-card-condition${conditionClass}">${escapeHtml(p.condition)}</span>
        <h3>${escapeHtml(p.name)}</h3>
        <p class="tp-specs">${escapeHtml(p.specs || '')}</p>
        ${lowStock ? `<p class="tp-stock-low">Only ${p.stock} left</p>` : ''}
        ${outOfStock ? `<p class="tp-stock-out">Out of stock</p>` : ''}
        <div class="tp-card-footer">
          <span class="tp-price">EC$${(p.price_cents / 100).toFixed(2)}</span>
          <button type="button" class="btn btn-primary tp-add-btn" data-id="${p.id}" ${outOfStock ? 'disabled' : ''}>
            ${outOfStock ? 'Sold out' : 'Add to cart'}
          </button>
        </div>
      </article>`;
  }

  let allProducts = [];
  const searchInput = document.getElementById('tp-search');
  const searchEmpty = document.getElementById('tp-search-empty');

  /* ---------- Quick-view modal ---------- */
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'tp-modal-overlay';
  modalOverlay.id = 'tp-modal-overlay';
  modalOverlay.innerHTML = `
    <div class="tp-modal" role="dialog" aria-modal="true">
      <button type="button" class="tp-modal-close" aria-label="Close">✕</button>
      <div class="tp-modal-media" id="tp-modal-media"></div>
      <div class="tp-modal-body">
        <span class="tp-card-condition" id="tp-modal-condition"></span>
        <h2 id="tp-modal-name"></h2>
        <p class="tp-modal-specs" id="tp-modal-specs"></p>
        <p class="tp-stock-low" id="tp-modal-stock-low" hidden></p>
        <p class="tp-stock-out" id="tp-modal-stock-out" hidden></p>
        <div class="tp-card-footer">
          <span class="tp-price" id="tp-modal-price"></span>
          <button type="button" class="btn btn-primary tp-add-btn" id="tp-modal-add-btn">Add to cart</button>
        </div>
        <button type="button" class="tp-modal-ask-link" id="tp-modal-ask-btn">Ask us about this item →</button>
      </div>
    </div>`;
  document.body.appendChild(modalOverlay);

  function closeModal() { modalOverlay.classList.remove('open'); }
  modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
  modalOverlay.querySelector('.tp-modal-close').addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    closeModal();
    closeInquiry();
  });

  let currentModalProduct = null;

  document.getElementById('tp-modal-ask-btn').addEventListener('click', () => {
    closeModal();
    openInquiry(currentModalProduct ? currentModalProduct.name : null);
  });

  function openModal(p) {
    currentModalProduct = p;
    const media = document.getElementById('tp-modal-media');
    media.className = `tp-modal-media${p.image_src ? ' tp-card-media-photo' : ''}`;
    media.innerHTML = p.image_src ? `<img src="${escapeHtml(p.image_src)}" alt="${escapeHtml(p.name)}">` : (p.icon || '📦');

    document.getElementById('tp-modal-condition').textContent = p.condition;
    document.getElementById('tp-modal-name').textContent = p.name;
    document.getElementById('tp-modal-specs').textContent = p.specs || '';
    document.getElementById('tp-modal-price').textContent = `EC$${(p.price_cents / 100).toFixed(2)}`;

    const outOfStock = p.stock <= 0;
    const lowStock = !outOfStock && p.stock <= 3;
    const lowEl = document.getElementById('tp-modal-stock-low');
    const outEl = document.getElementById('tp-modal-stock-out');
    lowEl.hidden = !lowStock;
    lowEl.textContent = lowStock ? `Only ${p.stock} left` : '';
    outEl.hidden = !outOfStock;

    const addBtn = document.getElementById('tp-modal-add-btn');
    addBtn.disabled = outOfStock;
    addBtn.textContent = outOfStock ? 'Sold out' : 'Add to cart';
    addBtn.onclick = () => {
      window.SSCart.addToCart(p.id, 1);
      addBtn.textContent = 'Added ✓';
      setTimeout(() => { addBtn.textContent = 'Add to cart'; }, 1200);
    };

    modalOverlay.classList.add('open');
  }

  /* ---------- Inquiry modal ---------- */
  const inquiryOverlay = document.createElement('div');
  inquiryOverlay.className = 'tp-modal-overlay';
  inquiryOverlay.id = 'tp-inquiry-overlay';
  inquiryOverlay.innerHTML = `
    <div class="tp-modal tp-inquiry-modal" role="dialog" aria-modal="true">
      <button type="button" class="tp-modal-close" aria-label="Close">✕</button>
      <div class="tp-modal-body">
        <h2>Get in touch</h2>
        <p class="tp-modal-specs">Tell us what you're looking for and we'll confirm pricing and availability.</p>
        <form id="tp-inquiry-form">
          <div class="tp-inquiry-field">
            <label for="tp-inquiry-name">Name</label>
            <input type="text" id="tp-inquiry-name" required>
          </div>
          <div class="tp-inquiry-field">
            <label for="tp-inquiry-email">Email</label>
            <input type="email" id="tp-inquiry-email" required>
          </div>
          <div class="tp-inquiry-field">
            <label for="tp-inquiry-phone">Phone (optional)</label>
            <input type="tel" id="tp-inquiry-phone">
          </div>
          <div class="tp-inquiry-field">
            <label for="tp-inquiry-message">Message</label>
            <textarea id="tp-inquiry-message" rows="3" placeholder="e.g. Do you have the iPhone 15 Pro in stock?" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary" id="tp-inquiry-submit">Send</button>
          <p class="tp-inquiry-note" id="tp-inquiry-note"></p>
        </form>
      </div>
    </div>`;
  document.body.appendChild(inquiryOverlay);

  function closeInquiry() { inquiryOverlay.classList.remove('open'); }
  inquiryOverlay.addEventListener('click', (e) => { if (e.target === inquiryOverlay) closeInquiry(); });
  inquiryOverlay.querySelector('.tp-modal-close').addEventListener('click', closeInquiry);

  function openInquiry(productName) {
    const note = document.getElementById('tp-inquiry-note');
    note.textContent = '';
    note.className = 'tp-inquiry-note';
    document.getElementById('tp-inquiry-message').value = productName ? `Do you have the ${productName} in stock?` : '';
    inquiryOverlay.dataset.product = productName || '';
    inquiryOverlay.classList.add('open');
    document.getElementById('tp-inquiry-name').focus();
  }

  document.querySelectorAll('.tp-open-inquiry').forEach((btn) => {
    btn.addEventListener('click', () => openInquiry());
  });

  document.getElementById('tp-inquiry-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const note = document.getElementById('tp-inquiry-note');
    const submitBtn = document.getElementById('tp-inquiry-submit');
    note.textContent = '';
    note.className = 'tp-inquiry-note';

    const payload = {
      name: document.getElementById('tp-inquiry-name').value.trim(),
      email: document.getElementById('tp-inquiry-email').value.trim(),
      phone: document.getElementById('tp-inquiry-phone').value.trim(),
      message: document.getElementById('tp-inquiry-message').value.trim(),
      product_name: inquiryOverlay.dataset.product || null,
    };

    submitBtn.disabled = true;
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Could not send your message');
      note.textContent = "Thanks — we'll get back to you shortly.";
      note.classList.add('tp-inquiry-ok');
      document.getElementById('tp-inquiry-form').reset();
      setTimeout(closeInquiry, 1600);
    } catch (err) {
      note.textContent = err.message;
      note.classList.add('tp-inquiry-err');
    } finally {
      submitBtn.disabled = false;
    }
  });

  // Event delegation so clicks work after every re-render (search filtering, etc.)
  Object.values(GRIDS).forEach((gridId) => {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.addEventListener('click', (e) => {
      if (e.target.closest('.tp-add-btn')) return;
      const card = e.target.closest('.tp-card');
      if (!card) return;
      const product = allProducts.find((p) => p.id === Number(card.dataset.id));
      if (product) openModal(product);
    });
  });

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

  async function loadPromo() {
    try {
      const res = await fetch('/api/promo');
      const promo = await res.json();
      if (!promo.enabled || !promo.headline) return;

      document.getElementById('tp-promo-headline').innerHTML = promo.headline;
      document.getElementById('tp-promo-subtext').innerHTML = promo.subtext || '';
      const cta = document.getElementById('tp-promo-cta');
      cta.textContent = promo.cta_text || 'Shop now';
      cta.href = promo.cta_link || '#tp-search';

      const media = document.getElementById('tp-promo-media');
      if (promo.image_src) {
        media.innerHTML = `<img src="${escapeHtml(promo.image_src)}" alt="">`;
        media.hidden = false;
      }

      document.getElementById('tp-promo').hidden = false;
    } catch (_) {
      // no promo banner available — leave it hidden
    }
  }

  /* ---------- Parts catalog finder (iPhone/Samsung teardown search) ---------- */
  const partsSearchInput = document.getElementById('tp-parts-search');
  if (partsSearchInput) {
    const resultsEl = document.getElementById('tp-parts-results');
    let partsSearchDebounce = null;

    function formatPriceCents(cents) {
      return Number.isFinite(cents) ? `EC$${(cents / 100).toFixed(2)}` : 'Price on request';
    }

    async function runPartsSearch(q) {
      if (q.length < 2) { resultsEl.innerHTML = ''; return; }
      resultsEl.innerHTML = `<p class="tp-parts-results-empty">Searching…</p>`;
      try {
        const res = await fetch(`/api/parts-search?q=${encodeURIComponent(q)}`);
        const { hints, items } = await res.json();
        const hintHtml = hints && hints.length
          ? `<p class="tp-parts-results-hint">Also showing results for: ${[...new Set(hints.map((h) => h.matched))].map(escapeHtml).join(', ')}</p>`
          : '';
        if (!items.length) {
          resultsEl.innerHTML = `${hintHtml}<p class="tp-parts-results-empty">No matching parts. Try a different model or component name, or <button type="button" class="tp-inline-link" id="tp-parts-ask-anyway">ask us directly</button>.</p>`;
          const askBtn = document.getElementById('tp-parts-ask-anyway');
          if (askBtn) askBtn.addEventListener('click', () => openInquiry(q));
          return;
        }
        resultsEl.innerHTML = hintHtml + items.map((item) => {
          const name = `${item.brand} ${item.model} — ${item.part_name}`;
          return `
            <div class="tp-parts-result">
              <div class="tp-parts-result-media"><img src="${escapeHtml(item.image_src)}" alt="" loading="lazy"></div>
              <div class="tp-parts-result-info">
                <p class="tp-parts-result-name">${escapeHtml(name)}</p>
                <p class="tp-parts-result-meta">Item #${escapeHtml(item.item_number)} · ${escapeHtml(item.category)} · ${escapeHtml(formatPriceCents(item.price_cents))}</p>
              </div>
              <span class="tp-parts-result-status${item.in_stock ? '' : ' out-of-stock'}">${item.in_stock ? 'In stock' : 'Out of stock'}</span>
              <button type="button" class="btn btn-ghost tp-parts-ask-btn" data-name="${escapeHtml(name)}">Ask about this</button>
            </div>`;
        }).join('');
        resultsEl.querySelectorAll('.tp-parts-ask-btn').forEach((btn) => {
          btn.addEventListener('click', () => openInquiry(btn.dataset.name));
        });
      } catch (_) {
        resultsEl.innerHTML = `<p class="tp-parts-results-empty">Search is unavailable right now — please try again shortly.</p>`;
      }
    }

    partsSearchInput.addEventListener('input', () => {
      clearTimeout(partsSearchDebounce);
      const q = partsSearchInput.value.trim();
      partsSearchDebounce = setTimeout(() => runPartsSearch(q), 350);
    });
  }

  loadProducts();
  loadPromo();
})();
