/* Smart Solutions — Component Library: render, search, filter, copy. */
(function () {
  var DATA = window.LIBRARY || [];
  var grid = document.getElementById("lib-grid");
  var filters = document.getElementById("lib-filters");
  var search = document.getElementById("lib-search-input");
  var modal = document.getElementById("lib-modal");
  var dialog = document.getElementById("lib-dialog");
  if (!grid) return;

  var state = { q: "", cat: "All" };

  var cats = ["All"].concat(DATA.map(function (c) { return c.category; })
    .filter(function (v, i, a) { return a.indexOf(v) === i; }));

  // filter chips
  filters.innerHTML = cats.map(function (c) {
    return '<button class="lib-chip' + (c === state.cat ? " active" : "") + '" data-cat="' + c + '">' + c + "</button>";
  }).join("");
  filters.addEventListener("click", function (e) {
    var b = e.target.closest(".lib-chip"); if (!b) return;
    state.cat = b.getAttribute("data-cat");
    filters.querySelectorAll(".lib-chip").forEach(function (x) { x.classList.toggle("active", x === b); });
    render();
  });
  search.addEventListener("input", function () { state.q = search.value.toLowerCase().trim(); render(); });

  function matches(c) {
    if (state.cat !== "All" && c.category !== state.cat) return false;
    if (!state.q) return true;
    var hay = [c.name, c.blurb, c.category, (c.tags || []).join(" "), c.source].join(" ").toLowerCase();
    return hay.indexOf(state.q) !== -1;
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (m) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]; }); }

  function cardHTML(c) {
    var prev = c.preview
      ? '<iframe loading="lazy" src="' + c.preview + '" title="' + esc(c.name) + ' preview"></iframe>'
      : '<div class="fallback" style="background:' + (c.previewAccent || "linear-gradient(135deg,#1d4ed8,#22d3ee)") + '">' + esc(c.name) + "</div>";
    var tags = (c.tags || []).map(function (t) { return '<span class="lib-tag">' + esc(t) + "</span>"; }).join("");
    return '<article class="lib-card" data-id="' + c.id + '">' +
      '<div class="lib-preview"><span class="lib-badge">' + esc(c.source) + "</span>" + prev + "</div>" +
      '<div class="lib-body"><span class="cat">' + esc(c.category) + "</span>" +
      "<h3>" + esc(c.name) + "</h3><p>" + esc(c.blurb) + "</p>" +
      '<div class="lib-tags">' + tags + "</div>" +
      '<div class="lib-actions">' +
        '<button class="lib-btn primary" data-open="' + c.id + '">View &amp; copy</button>' +
        '<button class="lib-btn" data-prompt="' + c.id + '">Copy prompt</button>' +
      "</div></div></article>";
  }

  function render() {
    var list = DATA.filter(matches);
    grid.innerHTML = list.length
      ? list.map(cardHTML).join("")
      : '<p style="grid-column:1/-1;text-align:center;color:var(--lib-dim);padding:40px">No components match.</p>';
  }

  function byId(id) { return DATA.filter(function (c) { return c.id === id; })[0]; }

  function copy(text, btn) {
    navigator.clipboard.writeText(text).then(function () {
      if (!btn) return; var old = btn.textContent; btn.textContent = "Copied ✓"; btn.classList.add("ok");
      setTimeout(function () { btn.textContent = old; btn.classList.remove("ok"); }, 1400);
    });
  }

  function openModal(c) {
    dialog.innerHTML =
      "<header><h3>" + esc(c.name) + '</h3><button class="lib-x" data-close aria-label="Close">✕</button></header>' +
      '<div class="meta">' + esc(c.category) + " · " + esc(c.stack || "") + " · " +
        esc(c.license) + " · by <a href=\"" + esc(c.authorUrl) + "\" target=\"_blank\" rel=\"noopener\">" + esc(c.author) + "</a> (" + esc(c.source) + ")</div>" +
      '<div class="lib-section"><div class="lab"><span>Code</span><button class="lib-copy" data-copy="code">Copy code</button></div><pre>' + esc(c.code) + "</pre></div>" +
      '<div class="lib-section"><div class="lab"><span>Integration prompt</span><button class="lib-copy" data-copy="prompt">Copy prompt</button></div><div class="lib-prompt">' + esc(c.prompt) + "</div></div>";
    modal.hidden = false;
    dialog.querySelector("[data-close]").addEventListener("click", closeModal);
    dialog.querySelectorAll("[data-copy]").forEach(function (b) {
      b.addEventListener("click", function () { copy(b.getAttribute("data-copy") === "code" ? c.code : c.prompt, b); });
    });
  }
  function closeModal() { modal.hidden = true; dialog.innerHTML = ""; }

  grid.addEventListener("click", function (e) {
    var open = e.target.closest("[data-open]"); var prompt = e.target.closest("[data-prompt]");
    if (open) openModal(byId(open.getAttribute("data-open")));
    else if (prompt) copy(byId(prompt.getAttribute("data-prompt")).prompt, prompt);
  });
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
  window.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

  render();
})();
