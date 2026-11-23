/* ───────────────────────────────────────────────────────────────────────────
   Kora-style navigation for the Smart Solutions landing page.

   Four full-height scenes driven by four input methods, as in the Kora
   template: scroll, pointer drag, keyboard and dot navigation. Scroll
   position is translated into a continuous scene position (e.g. 1.37) and
   handed to the 3D orb via window.koraSetProgress().
   ─────────────────────────────────────────────────────────────────────────── */

(function () {
  const scenes = Array.from(document.querySelectorAll('.kscene'));
  if (!scenes.length) return;

  const dotsWrap = document.querySelector('.kora-dots');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = 0;

  /* ── dot navigation ────────────────────────────────────────────────────── */
  const dots = scenes.map((s, i) => {
    const b = document.createElement('button');
    b.className = 'kora-dot';
    b.type = 'button';
    b.setAttribute('aria-label', 'Go to ' + (s.dataset.label || 'section ' + (i + 1)));
    b.innerHTML = '<span class="kora-dot-label">' + (s.dataset.label || '') + '</span>';
    b.addEventListener('click', () => goTo(i));
    dotsWrap && dotsWrap.appendChild(b);
    return b;
  });

  function markDots(i) {
    dots.forEach((d, n) => {
      d.classList.toggle('is-active', n === i);
      d.setAttribute('aria-current', n === i ? 'true' : 'false');
    });
  }

  /* ── scene spans ────────────────────────────────────────────────────────
     A scene may span more than one viewport via data-span="2". A long
     section (e.g. "One team, end to end") then HOLDS the critter in place
     while you read, and only hands it to the next keyframe on the last
     viewport of its span. So scene index and scroll position are not 1:1. */
  const last = scenes.length - 1;

  /* Sections are MEASURED, not assumed to be exact viewport multiples: the
     hero runs ~115px over 100vh because its own content overflows, and any
     such drift would otherwise push every later handover out of step with
     the section it belongs to. Re-measured on resize. */
  let marks = [];
  function measure() {
    const y = window.scrollY;
    marks = scenes.map((s) => {
      const r = s.getBoundingClientRect();
      return { top: r.top + y, height: r.height };
    });
  }

  /** The critter holds for all of a section except its final viewport, which
   *  is the handover to the next keyframe. */
  function handoverOf(i) {
    return Math.max(marks[i].top, marks[i].top + marks[i].height - window.innerHeight);
  }

  /** continuous keyframe position (e.g. 1.37) for a scroll offset in px */
  function progressFor(y) {
    for (let i = last; i >= 0; i--) {
      if (y >= marks[i].top || i === 0) {
        const from = handoverOf(i);
        if (y <= from) return i;
        const to = marks[i].top + marks[i].height;
        return Math.min(last, i + Math.min(1, (y - from) / Math.max(1, to - from)));
      }
    }
    return 0;
  }

  /** which scene the viewport is actually in, for the dots. No lead-in: on a
   *  multi-viewport scene a lead-in would flag the NEXT scene while this
   *  one's content is still stuck to the viewport. */
  function sceneAt(y) {
    for (let i = last; i >= 0; i--) if (y >= marks[i].top) return i;
    return 0;
  }

  function nearestScene(y) {
    let best = 0, bd = Infinity;
    marks.forEach((m, i) => { const d = Math.abs(m.top - y); if (d < bd) { bd = d; best = i; } });
    return best;
  }

  /* ── scroll → continuous scene progress ────────────────────────────────── */
  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const y = window.scrollY;
      const h = window.innerHeight;
      const p = progressFor(y);
      window.koraProgress = p;
      // How far we have scrolled INTO the final scene beyond its first
      // viewport. The contact form is taller than one screen, so the critter
      // uses this to lift clear instead of letting fields scroll under it.
      window.koraTail = Math.max(0, (y - marks[last].top) / h - 0.15);
      if (window.koraSetProgress) window.koraSetProgress(p);

      const i = sceneAt(y);
      if (i !== current) {
        current = i;
        markDots(i);
      }
      // reveal a little ahead of the dots, so the kinetic type is already
      // running by the time the section settles (reveal() only fires once)
      reveal(scenes[sceneAt(y + h * 0.4)]);
      document.documentElement.style.setProperty('--kora-p', p.toFixed(3));
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { measure(); onScroll(); }, { passive: true });

  function goTo(i) {
    const n = Math.max(0, Math.min(last, i));
    window.scrollTo({ top: marks[n].top, behavior: reduced ? 'auto' : 'smooth' });
  }

  /* ── keyboard ──────────────────────────────────────────────────────────── */
  window.addEventListener('keydown', (e) => {
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
    switch (e.key) {
      case 'ArrowDown': case 'PageDown': e.preventDefault(); goTo(current + 1); break;
      case 'ArrowUp':   case 'PageUp':   e.preventDefault(); goTo(current - 1); break;
      case 'Home':                       e.preventDefault(); goTo(0); break;
      case 'End':                        e.preventDefault(); goTo(scenes.length - 1); break;
    }
  });

  /* ── pointer drag ──────────────────────────────────────────────────────── */
  let dragging = false, startY = 0, startScroll = 0, moved = 0;

  function down(e) {
    if (e.target.closest('a, button, input, textarea, select, form, .kora-dots')) return;
    dragging = true; moved = 0;
    startY = e.clientY;
    startScroll = window.scrollY;
    document.body.classList.add('is-dragging');
  }
  function move(e) {
    if (!dragging) return;
    const dy = startY - e.clientY;
    moved = Math.abs(dy);
    if (moved > 3) {
      window.scrollTo({ top: startScroll + dy * 1.25, behavior: 'auto' });
    }
  }
  function up() {
    if (!dragging) return;
    dragging = false;
    document.body.classList.remove('is-dragging');
    // snap to the nearest scene after a drag
    if (moved > 3) goTo(nearestScene(window.scrollY));
  }
  window.addEventListener('pointerdown', down);
  window.addEventListener('pointermove', move, { passive: true });
  window.addEventListener('pointerup', up);
  window.addEventListener('pointercancel', up);

  /* ── kinetic type: reveal a scene's lines on entry ─────────────────────── */
  const seen = new WeakSet();

  function reveal(section) {
    if (!section || seen.has(section)) return;
    seen.add(section);
    section.classList.add('is-revealed');

    if (reduced || typeof gsap === 'undefined') return;
    const lines = section.querySelectorAll('[data-kinetic]');
    if (!lines.length) return;

    if (typeof SplitText !== 'undefined') {
      lines.forEach((el, n) => {
        const split = new SplitText(el, { type: 'chars,words' });
        gsap.from(split.chars, {
          yPercent: 115,
          opacity: 0,
          duration: 0.85,
          ease: 'power4.out',
          stagger: 0.016,
          delay: n * 0.06,
          // clean up after itself so no inline opacity can strand the text
          clearProps: 'opacity,transform',
        });
      });
    } else {
      gsap.from(lines, {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.08,
        ease: 'power3.out', clearProps: 'opacity,transform',
      });
    }

    // Safety net: a killed or stalled tween must never leave a headline
    // permanently invisible. Force the end state if anything is still hidden.
    setTimeout(() => {
      lines.forEach((el) => {
        el.querySelectorAll('div, span').forEach((c) => {
          if (getComputedStyle(c).opacity === '0') {
            c.style.opacity = '';
            c.style.transform = '';
          }
        });
      });
    }, 2600);
  }

  /* ── init ──────────────────────────────────────────────────────────────── */
  measure();              // must precede the first onScroll — it reads `marks`
  markDots(0);
  onScroll();

  // A deep link such as /#contact is scrolled by the browser *after* this
  // script runs, and that jump fires no scroll event — so re-sync once the
  // page has loaded, or the orb stays parked on the first keyframe.
  function resync() {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      measure();          // fonts/images may have changed section heights
      onScroll();
      reveal(scenes[sceneAt(window.scrollY)] || scenes[0]);
    }));
  }
  window.addEventListener('load', resync);
  window.addEventListener('hashchange', resync);
  if (document.readyState === 'complete') resync();
})();
