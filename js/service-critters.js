/* Service critters: the component's 2D physics, driving DOM critter-cards.
   Each service drops in, bounces, settles, and is draggable / clickable. */
(function () {
  var stage = document.getElementById("scritter-stage");
  if (!stage) return;

  var SERVICES = [
    { name: "AI & Automation",        c1: "#a88cf0", c2: "#c9b8ff", href: null },
    { name: "Cloud & Infrastructure", c1: "#2e7ed6", c2: "#7db8ff", href: null },
    { name: "Custom Software",        c1: "#11b3a3", c2: "#6ee7db", href: null },
    { name: "Cybersecurity",          c1: "#fc3b2f", c2: "#ff8a7d", href: null },
    { name: "Data & Analytics",       c1: "#1fb866", c2: "#7ef0a8", href: null },
    { name: "Digital Strategy",       c1: "#f5a623", c2: "#ffd46b", href: null },
    { name: "Marketing",              c1: "#e26a9d", c2: "#ffb3d4", href: null },
    { name: "Repair",                 c1: "#2e7ed6", c2: "#8fd0ff", href: "repair.html" },
    { name: "Wedding Planning",       c1: "#ff5d8f", c2: "#ffb3c9", href: "https://weddings.smartsolutionssvg.com/" },
    { name: "Web Apps",               c1: "#7c5cff", c2: "#b9a3ff", href: null }
  ];
  var N = SERVICES.length;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // --- build the DOM critters ---
  var els = SERVICES.map(function (s) {
    var el = document.createElement(s.href ? "a" : "div");
    el.className = "scritter";
    if (s.href) { el.href = s.href; if (/^https?:/.test(s.href)) { el.target = "_blank"; el.rel = "noopener"; } }
    el.setAttribute("aria-label", s.name);
    el.innerHTML =
      '<div class="scritter-shadow"></div>' +
      '<div class="scritter-blob" style="background:linear-gradient(145deg,' + s.c1 + ',' + s.c2 + ')"></div>' +
      '<div class="scritter-eyes"><i></i><i></i></div>' +
      '<span class="scritter-label">' + s.name + '</span>';
    el.addEventListener("click", function (e) { e.preventDefault(); }); // nav handled on release
    stage.appendChild(el);
    return el;
  });

  // --- world + bodies ---
  var world = { w: 1, h: 1, floor: 0, gravity: reduce ? 0 : 2600, bounce: 0.32 };
  var unit = 56, size = 112;
  var bodies = SERVICES.map(function () {
    return { x: 0, y: -9999, vx: 0, vy: 0, a: 0, va: 0, r: 50, wall: 52, live: false, held: false, onFloor: false };
  });

  function unitFor(w) { return Math.max(40, Math.min(66, w < 640 ? w / 8.2 : w / 11.5)); }
  function measure() {
    world.w = Math.max(1, stage.clientWidth);
    world.h = Math.max(1, stage.clientHeight);
    unit = unitFor(world.w);
    size = Math.round(unit * 2);
    world.floor = 10 + unit * 0.14;
    bodies.forEach(function (b) { b.r = unit * 0.92; b.wall = unit; });
    els.forEach(function (el) {
      el.style.width = size + "px"; el.style.height = size + "px";
      el.style.marginLeft = (-size / 2) + "px"; el.style.marginTop = (-size / 2) + "px";
    });
  }

  // --- one physics substep (ported) ---
  function step(dt, hand) {
    var e = world.bounce, i, j;
    for (i = 0; i < N; i++) {
      var b = bodies[i]; if (!b.live) continue;
      if (b.held && hand) {
        var tx = Math.min(world.w - b.wall, Math.max(b.wall, hand.x));
        var ty = Math.min(world.h - b.r * 0.6, Math.max(world.floor + b.r, hand.y));
        b.vx = (tx - b.x) * 18; b.vy = (ty - b.y) * 18;
        b.va += (-b.vx * 0.00025 - b.va) * 4 * dt;
      } else b.vy -= world.gravity * dt;
      b.x += b.vx * dt; b.y += b.vy * dt; b.a += b.va * dt; b.onFloor = false;
      if (b.y - b.r < world.floor) {
        b.y = world.floor + b.r; b.vy = -b.vy * e; if (Math.abs(b.vy) < 60) b.vy = 0;
        b.onFloor = true; b.vx *= 1 - 3 * dt; b.va += (-b.vx / b.r - b.va) * Math.min(1, 3 * dt);
      }
      if (b.x - b.wall < 0) { b.x = b.wall; b.vx = Math.abs(b.vx) * e; }
      if (b.x + b.wall > world.w) { b.x = world.w - b.wall; b.vx = -Math.abs(b.vx) * e; }
      b.va *= 1 - 0.6 * dt;
      if (b.onFloor) { var tilt = Math.atan2(Math.sin(b.a), Math.cos(b.a)); b.va += -tilt * 38 * dt; b.va *= 1 - 4 * dt; }
    }
    for (i = 0; i < N; i++) for (j = i + 1; j < N; j++) {
      var p = bodies[i], q = bodies[j]; if (!p.live || !q.live) continue;
      var dx = q.x - p.x, dy = q.y - p.y, d = Math.hypot(dx, dy), min = (p.r + q.r) * 0.92;
      if (d <= 0 || d >= min) continue;
      var nx = dx / d, ny = dy / d, half = (min - d) / 2;
      p.x -= nx * half; p.y -= ny * half; q.x += nx * half; q.y += ny * half;
      var closing = (q.vx - p.vx) * nx + (q.vy - p.vy) * ny;
      if (closing < 0) { var jn = (-(1 + e) * closing) / 2; p.vx -= jn * nx; p.vy -= jn * ny; q.vx += jn * nx; q.vy += jn * ny; }
    }
    for (i = 0; i < N; i++) {
      var b2 = bodies[i]; if (!b2.live) continue;
      if (b2.x - b2.wall < 0) b2.x = b2.wall;
      if (b2.x + b2.wall > world.w) b2.x = world.w - b2.wall;
      if (b2.y - b2.r < world.floor) { b2.y = world.floor + b2.r; if (b2.vy < 0) b2.vy = 0; }
      if (b2.held && hand && b2.y > world.h - b2.r * 0.6) b2.y = world.h - b2.r * 0.6;
    }
  }

  function draw() {
    for (var i = 0; i < N; i++) {
      var b = bodies[i], el = els[i];
      if (!b.live) { el.style.opacity = "0"; continue; }
      el.style.opacity = "1";
      el.style.transform = "translate(" + b.x + "px," + (world.h - b.y) + "px) rotate(" + b.a + "rad)";
    }
  }

  // --- dropping in ---
  function dropStart(b, i) {
    b.live = true; b.held = false; b.onFloor = false;
    var lane = (i + 0.5 + (Math.random() - 0.5) * 0.6) / N;
    b.x = Math.min(world.w - b.wall, Math.max(b.wall, lane * world.w));
    b.y = world.h + b.r + 40 + Math.random() * 160;
    b.vx = (Math.random() - 0.5) * 140; b.vy = -60 - Math.random() * 120;
    b.a = (Math.random() - 0.5) * 1.2; b.va = (Math.random() - 0.5) * 3;
  }
  function restInRow() {
    var gap = world.w / (N + 1);
    bodies.forEach(function (b, i) { b.live = true; b.x = gap * (i + 1); b.y = world.floor + b.r; b.vx = b.vy = b.a = b.va = 0; b.onFloor = true; });
  }
  var dropped = false, timers = [];
  function drop() {
    if (reduce) { restInRow(); draw(); return; }
    bodies.forEach(function (b, i) { timers.push(setTimeout(function () { dropStart(b, i); }, i * 170 + Math.random() * 110)); });
  }

  // --- frame loop ---
  var raf = 0, last = performance.now();
  function frame(now) {
    raf = 0;
    var dt = Math.min(0.033, (now - last) / 1000); last = now;
    if (!reduce) { var hand = held >= 0 ? { x: hx, y: hy } : null; for (var s = 0; s < 3; s++) step(dt / 3, hand); }
    draw();
    raf = requestAnimationFrame(frame);
  }
  function startLoop() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); } }

  // --- pointer: grab / drag / throw / click ---
  var held = -1, hx = 0, hy = 0, lastMove = 0, grabX = 0, grabY = 0, moved = false;
  function localPt(e) { var r = stage.getBoundingClientRect(); return { x: e.clientX - r.left, y: world.h - (e.clientY - r.top) }; }
  function bodyAt(x, y) { for (var i = N - 1; i >= 0; i--) { var b = bodies[i]; if (b.live && Math.hypot(b.x - x, b.y - y) < b.r * 0.95) return i; } return -1; }
  function onMove(e) {
    var p = localPt(e); hx = p.x; hy = p.y; lastMove = performance.now();
    if (Math.hypot(hx - grabX, hy - grabY) > 6) moved = true;
  }
  function onUp() {
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", onUp);
    stage.classList.remove("grabbing");
    var i = held; held = -1; if (i < 0) return;
    var b = bodies[i]; b.held = false;
    if (!moved) {
      b.vy = 900 + Math.random() * 250; b.vx += (Math.random() - 0.5) * 260; b.va += (Math.random() - 0.5) * 8; b.onFloor = false;
      var s = SERVICES[i];
      if (s.href) { if (/^https?:/.test(s.href)) window.open(s.href, "_blank", "noopener"); else window.location.href = s.href; }
    } else { var v = Math.hypot(b.vx, b.vy), cap = 2600; if (v > cap) { b.vx *= cap / v; b.vy *= cap / v; } }
  }
  function onDown(e) {
    if (reduce) return;
    var p = localPt(e), i = bodyAt(p.x, p.y);
    if (i < 0) return;
    e.preventDefault();
    held = i; bodies[i].held = true; grabX = p.x; grabY = p.y; hx = p.x; hy = p.y; moved = false;
    stage.classList.add("grabbing");
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  }
  stage.addEventListener("pointerdown", onDown);

  // --- drop when the section scrolls into view ---
  function watch() {
    if (dropped) return;
    var r = stage.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.88 && r.bottom > 0) { dropped = true; measure(); drop(); }
  }
  if ("ResizeObserver" in window) new ResizeObserver(function () { measure(); }).observe(stage);
  window.addEventListener("resize", measure, { passive: true });
  window.addEventListener("scroll", watch, { passive: true });

  measure();
  startLoop();
  watch();
})();
