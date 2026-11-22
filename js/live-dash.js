/* Live Dashboard — drives the animated "operations monitor" inside the
   Live Dashboards deck card: ticking KPI numbers + a scrolling line chart.
   The pulsing dot and bars are pure CSS. Pauses when the tab is hidden and
   stands still under prefers-reduced-motion. */
(function () {
  var root = document.querySelector(".live-dash");
  if (!root) return;

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // stagger the CSS bar animation so the bars don't march in lockstep
  Array.prototype.forEach.call(root.querySelectorAll(".ld-bars span"), function (b, i) {
    b.style.animationDelay = (-(i * 0.13)).toFixed(2) + "s";
    b.style.animationDuration = (1.25 + (i % 4) * 0.2).toFixed(2) + "s";
  });

  var line = root.querySelector(".ld-line");
  var area = root.querySelector(".ld-area");
  var N = 44, W = 300, H = 100, data = [];
  for (var i = 0; i < N; i++) data.push(42 + Math.random() * 22);

  function render() {
    var step = W / (N - 1), d = "";
    for (var i = 0; i < N; i++) {
      d += (i ? "L" : "M") + (i * step).toFixed(1) + " " + (H - data[i]).toFixed(1) + " ";
    }
    d = d.trim();
    line.setAttribute("d", d);
    area.setAttribute("d", d + " L" + W + " " + H + " L0 " + H + " Z");
  }

  var rpsEl = root.querySelector('[data-kpi="rps"]');
  var upEl  = root.querySelector('[data-kpi="uptime"]');
  var latEl = root.querySelector('[data-kpi="latency"]');
  var rps = 1240, lat = 38;

  function kpis() {
    rps = Math.max(900,  Math.min(2200, rps + (Math.random() - 0.5) * 180));
    lat = Math.max(18,   Math.min(72,   lat + (Math.random() - 0.5) * 10));
    if (rpsEl) rpsEl.innerHTML = Math.round(rps).toLocaleString() + '<small>/s</small>';
    if (latEl) latEl.innerHTML = Math.round(lat) + '<small>ms</small>';
    if (upEl)  upEl.innerHTML  = '99.9<small>%</small>';
  }

  render();
  kpis();
  if (reduce) return;

  setInterval(function () {
    if (document.hidden) return;
    data.push(28 + Math.random() * 46);
    data.shift();
    render();
    kpis();
  }, 900);
})();
