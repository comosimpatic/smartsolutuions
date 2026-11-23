/* Playground — renders the component catalogue, filters it, and opens an
   interactive full-size preview in a modal with a device toggle + accent
   swatches. Each component's `html` is the real rendered preview, shown both
   in the card and (larger) in the modal.
   Lite version: a public catalogue. Private client share-links + Supabase
   come later (see the "UI Playground: Database & Folder Structure" doc). */
(function () {
  var COMPONENTS = [
    {
      slug: "hero-banner", name: "Hero Banner", category: "Hero",
      desc: "Full-bleed hero with eyebrow pill, gradient headline and call-to-action buttons.",
      html: '<div class="pgp pgp-hero"><span class="pill">Now onboarding 2026</span><h2>Building the <span class="grad">intelligent systems</span> that run tomorrow</h2><div class="row"><span class="b1">Start a Project</span><span class="b2">Explore</span></div></div>'
    },
    {
      slug: "live-dashboard", name: "Live Dashboard", category: "Dashboard",
      desc: "Animated operations monitor — ticking KPIs, a live chart and pulsing bars.",
      html: '<div class="pgp pgp-dash"><div class="top"><b>Operations Monitor</b><span class="live"><i></i>LIVE</span></div><div class="kpis"><div class="kpi"><span>Requests</span><b data-tick="rps">1,284/s</b></div><div class="kpi"><span>Uptime</span><b>99.9%</b></div><div class="kpi"><span>Latency</span><b data-tick="lat">38ms</b></div></div><svg viewBox="0 0 300 60" preserveAspectRatio="none"><polyline fill="none" stroke="#5b8cff" stroke-width="3" points="0,45 40,30 80,38 120,18 160,28 200,12 240,24 300,8"/></svg><div class="bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>'
    },
    {
      slug: "pricing-table", name: "Pricing Table", category: "Pricing",
      desc: "Three-tier pricing with a Monthly / One-time toggle and a highlighted plan.",
      html: '<div class="pgp pgp-pricing"><div class="toggle"><b class="on" data-plan="mo">Monthly</b><b data-plan="ot">One-time</b></div><div class="cols"><div class="col"><span class="t">Starter</span><span class="p" data-mo="$40<small>/mo</small>" data-ot="$500">$40<small>/mo</small></span><ul class="feat"><li>1 page</li><li>Hosting</li></ul></div><div class="col hot"><span class="t">Growth</span><span class="p" data-mo="$80<small>/mo</small>" data-ot="$900">$80<small>/mo</small></span><ul class="feat"><li>Everything in Starter</li><li>Booking form</li></ul></div><div class="col"><span class="t">Premium</span><span class="p" data-mo="$150<small>/mo</small>" data-ot="$1,600">$150<small>/mo</small></span><ul class="feat"><li>AI features</li><li>Priority support</li></ul></div></div></div>'
    },
    {
      slug: "scroll-deck", name: "Scroll Deck", category: "Showcase",
      desc: "Scroll-stacking card deck that deals your featured work one card at a time.",
      html: '<div class="pgp pgp-deck"><div class="stack"><span>Logistics</span><span>Security</span><span>AI Platform</span></div></div>'
    },
    {
      slug: "chrome-text", name: "Chrome Text Reveal", category: "Effects",
      desc: "Reflective chrome sweep across a logo or headline, with a staggered reveal.",
      html: '<div class="pgp pgp-chrome"><b>Smart Solutions</b></div>'
    },
    {
      slug: "service-critters", name: "Service Critters", category: "Interactive",
      desc: "WebGL fuzzy critters carrying your services, lined up beneath a giant wordmark.",
      html: '<div class="pgp pgp-critters"><b>SERVICES</b><div class="crew"><i></i><i></i><i></i><i></i><i></i></div></div>'
    },
    {
      slug: "orbit-visual", name: "Orbit Visual", category: "Interactive",
      desc: "Animated orbit of rotating rings around a glowing brand core — a hero accent.",
      html: '<div class="pgp pgp-orbit"><span class="r r1"></span><span class="r r2"></span><span class="r r3"></span><span class="core">SS</span></div>'
    },
    {
      slug: "process-timeline", name: "Process Timeline", category: "Content",
      desc: "Numbered step timeline — Discover, Design, Build, Scale — on a connecting line.",
      html: '<div class="pgp pgp-timeline"><div class="line"><div class="step"><b>01</b><span>Discover<small>Scope</small></span></div><div class="step"><b>02</b><span>Design<small>Architect</small></span></div><div class="step"><b>03</b><span>Build<small>Ship weekly</small></span></div><div class="step"><b>04</b><span>Scale<small>Evolve</small></span></div></div></div>'
    },
    {
      slug: "stat-counters", name: "Stat Counters", category: "Content",
      desc: "Row of animated metrics that count up — projects, retention, uptime, reach.",
      html: '<div class="pgp pgp-stats"><div><b data-count="120">120</b><span>Projects</span></div><div><b data-count="98" data-suffix="%">98%</b><span>Retention</span></div><div><b data-count="24" data-suffix="/7">24/7</b><span>Monitored</span></div><div><b data-count="14">14</b><span>Countries</span></div></div>'
    },
    {
      slug: "feature-cards", name: "Feature Cards", category: "Content",
      desc: "Tidy grid of service/feature cards with an icon, title and one-line blurb.",
      html: '<div class="pgp pgp-cards"><div class="grid"><div class="c"><i>&#9671;</i><b>AI &amp; Automation</b><small>Models &amp; workflows</small></div><div class="c"><i>&#9634;</i><b>Cloud</b><small>Scalable infra</small></div><div class="c"><i>&#11041;</i><b>Security</b><small>Secure by design</small></div><div class="c"><i>&#9673;</i><b>Data</b><small>Live analytics</small></div></div></div>'
    },
    {
      slug: "testimonial", name: "Testimonial", category: "Social Proof",
      desc: "A quote card with an avatar and attribution to build trust fast.",
      html: '<div class="pgp pgp-quote"><p>They shipped a working system in weeks, not quarters &mdash; and still pick up the phone after launch.</p><div class="who"><span class="av">RB</span><div><b>Ravi B.</b><small>Founder, Antilles X</small></div></div></div>'
    },
    {
      slug: "cta-banner", name: "CTA Banner", category: "Conversion",
      desc: "Bold full-width call-to-action band to close the page with momentum.",
      html: '<div class="pgp pgp-cta"><h3>Let\'s build what\'s next.</h3><span class="b">Start a Project &rarr;</span></div>'
    },
    {
      slug: "bento-gallery", name: "Bento Gallery", category: "Showcase",
      desc: "A bento-style grid of tiles for features, work or a product tour.",
      html: '<div class="pgp pgp-bento"><div class="grid"><span class="s1">Featured</span><span class="s2">Fast</span><span class="s3">Secure</span><span class="s4">Scalable</span></div></div>'
    },
    {
      slug: "contact-form", name: "Contact Form", category: "Forms",
      desc: "Clean enquiry form — name, email, company, project details and a send button.",
      html: '<div class="pgp pgp-form"><div class="row"><span class="f">Name</span><span class="f">Email</span></div><span class="f">Company</span><span class="f lg">Tell us about your project&hellip;</span><span class="btn">Send Message &rarr;</span></div>'
    },
    {
      slug: "faq-accordion", name: "FAQ Accordion", category: "Content",
      desc: "Expandable question list — click a question to reveal its answer.",
      html: '<div class="pgp pgp-faq"><div class="q open"><div class="qh">How quickly can you start?<span>&minus;</span></div><div class="a">Most projects kick off within one to two weeks of signing.</div></div><div class="q"><div class="qh">Do you work with startups?<span>+</span></div><div class="a">Yes — we scope to the team and budget in front of us.</div></div><div class="q"><div class="qh">What does a fixed scope include?<span>+</span></div><div class="a">Defined deliverables, a timeline and weekly working demos.</div></div></div>'
    },
    {
      slug: "logo-marquee", name: "Logo Marquee", category: "Social Proof",
      desc: "Auto-scrolling strip of client or partner logos for instant social proof.",
      html: '<div class="pgp pgp-marquee"><div class="track"><b>NORTHWIND</b><b>VERTEX</b><b>ORBITAL</b><b>HELIX</b><b>QUANTA</b><b>ATLAS</b><b>NORTHWIND</b><b>VERTEX</b><b>ORBITAL</b><b>HELIX</b><b>QUANTA</b><b>ATLAS</b></div></div>'
    },
    {
      slug: "navbar", name: "Sticky Navbar", category: "Navigation",
      desc: "Sticky header with logo, nav links and a primary action button.",
      html: '<div class="pgp pgp-nav"><div class="bar"><span class="logo">Smart <em>Solutions</em></span><span class="links"><a>Services</a><a>Work</a><a>About</a></span><span class="cta">Start a Project</span></div><div class="body"><b>Your page header</b></div></div>'
    }
  ];

  var grid = document.getElementById("pg-grid");
  var chipsWrap = document.getElementById("pg-chips");
  var search = document.getElementById("pg-search");
  var empty = document.getElementById("pg-empty");
  if (!grid) return;

  var activeCat = "All", query = "";

  var cats = ["All"].concat(COMPONENTS.map(function (c) { return c.category; })
    .filter(function (v, i, a) { return a.indexOf(v) === i; }));
  chipsWrap.innerHTML = cats.map(function (c) {
    return '<button class="pg-chip' + (c === "All" ? " is-active" : "") + '" data-cat="' + c + '">' + c + "</button>";
  }).join("");

  function cardHTML(c) {
    return '<article class="pg-card" data-slug="' + c.slug + '" tabindex="0" role="button" aria-label="Preview ' + c.name + '">' +
      '<div class="pg-preview">' + c.html + '</div>' +
      '<div class="pg-meta">' +
        '<span class="pg-cat">' + c.category + '</span>' +
        '<h3>' + c.name + '</h3>' +
        '<p>' + c.desc + '</p>' +
        '<button class="pg-open" data-slug="' + c.slug + '">Preview <span aria-hidden="true">&rarr;</span></button>' +
      '</div>' +
    '</article>';
  }

  function render() {
    var q = query.trim().toLowerCase(), shown = 0;
    grid.innerHTML = COMPONENTS.map(function (c) {
      var okCat = activeCat === "All" || c.category === activeCat;
      var okQ = !q || (c.name + " " + c.category + " " + c.desc).toLowerCase().indexOf(q) !== -1;
      if (okCat && okQ) { shown++; return cardHTML(c); }
      return "";
    }).join("");
    if (empty) empty.hidden = shown !== 0;
  }

  chipsWrap.addEventListener("click", function (e) {
    var btn = e.target.closest(".pg-chip");
    if (!btn) return;
    activeCat = btn.getAttribute("data-cat");
    Array.prototype.forEach.call(chipsWrap.children, function (b) { b.classList.toggle("is-active", b === btn); });
    render();
  });
  if (search) search.addEventListener("input", function () { query = search.value; render(); });

  // ── modal ──
  var modal = document.getElementById("pg-modal");
  var mStage = document.getElementById("pg-modal-stage");
  var mTitle = document.getElementById("pg-modal-title");
  var mCat = document.getElementById("pg-modal-cat");
  var mReq = document.getElementById("pg-modal-request");
  var device = "desktop", accent = "#000";

  function buildStage(c) {
    mStage.innerHTML = '<div class="pg-device ' + (device === "desktop" ? "" : device) + '" style="--pgp-accent:' + accent + '">' + c.html + "</div>";
    countUp(mStage);
  }

  function openModal(slug) {
    var c = COMPONENTS.filter(function (x) { return x.slug === slug; })[0];
    if (!c || !modal) return;
    mTitle.textContent = c.name;
    mCat.textContent = c.category;
    if (mReq) mReq.href = "index.html#contact";
    modal.setAttribute("data-slug", slug);
    buildStage(c);
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function reStage() {
    var slug = modal.getAttribute("data-slug");
    var c = COMPONENTS.filter(function (x) { return x.slug === slug; })[0];
    if (c) buildStage(c);
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    mStage.innerHTML = "";
    document.body.style.overflow = "";
  }

  // open from the whole card or the Preview button
  grid.addEventListener("click", function (e) {
    var card = e.target.closest(".pg-card"); if (!card) return;
    openModal(card.getAttribute("data-slug"));
  });
  grid.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var card = e.target.closest(".pg-card"); if (!card) return;
    e.preventDefault(); openModal(card.getAttribute("data-slug"));
  });

  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.closest("[data-close]")) closeModal();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

    // device toggle
    var seg = document.getElementById("pg-seg");
    if (seg) seg.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      device = b.getAttribute("data-dev");
      Array.prototype.forEach.call(seg.children, function (x) { x.classList.toggle("is-active", x === b); });
      var dev = mStage.querySelector(".pg-device");
      if (dev) dev.className = "pg-device " + (device === "desktop" ? "" : device);
    });

    // accent swatches
    var sw = document.getElementById("pg-swatches");
    if (sw) sw.addEventListener("click", function (e) {
      var b = e.target.closest(".pg-swatch"); if (!b) return;
      accent = b.getAttribute("data-color");
      Array.prototype.forEach.call(sw.querySelectorAll(".pg-swatch"), function (x) { x.classList.toggle("is-active", x === b); });
      var dev = mStage.querySelector(".pg-device");
      if (dev) dev.style.setProperty("--pgp-accent", accent);
    });
  }

  // ── interactivity inside previews (works in card + modal, delegated) ──
  document.addEventListener("click", function (e) {
    // FAQ accordion
    var q = e.target.closest(".pgp-faq .q");
    if (q) {
      q.classList.toggle("open");
      var sym = q.querySelector(".qh span");
      if (sym) sym.innerHTML = q.classList.contains("open") ? "−" : "+";
    }
    // pricing toggle
    var pb = e.target.closest(".pgp-pricing .toggle b");
    if (pb) {
      var wrap = pb.closest(".pgp-pricing");
      Array.prototype.forEach.call(wrap.querySelectorAll(".toggle b"), function (x) { x.classList.toggle("on", x === pb); });
      var plan = pb.getAttribute("data-plan");
      Array.prototype.forEach.call(wrap.querySelectorAll(".col .p"), function (p) {
        p.innerHTML = plan === "mo" ? p.getAttribute("data-mo") : p.getAttribute("data-ot");
      });
    }
  });

  // count-up for stat counters when they appear in the modal
  function countUp(scope) {
    Array.prototype.forEach.call(scope.querySelectorAll("[data-count]"), function (el) {
      var to = parseFloat(el.getAttribute("data-count")) || 0;
      var suffix = el.getAttribute("data-suffix") || "";
      var start = null, dur = 1100;
      function step(ts) {
        if (!start) start = ts;
        var t = Math.min(1, (ts - start) / dur);
        var val = Math.round(to * (1 - Math.pow(1 - t, 3)));
        el.textContent = val + suffix;
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  render();
})();
