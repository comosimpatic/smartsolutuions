/* Scroll-stacking work deck — drives the 3D stacking transforms from scroll.
   Spring-smoothed (one value drives every card); respects reduced motion;
   plays only the active-ish videos to spare the GPU. */
(function () {
  const deck = document.querySelector(".work-deck");
  if (!deck) return;
  const cards = Array.prototype.slice.call(deck.querySelectorAll(".deck-card"));
  const count = cards.length;
  if (!count) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // one screen of scroll per card; the stage stays pinned while they are dealt
  deck.style.height = (count * 100) + "svh";

  const ENTER = 0.72; // share of each card's screen spent arriving
  const easeOut = function (t) { return 1 - Math.pow(1 - t, 3); };
  const clamp01 = function (v) { return Math.min(1, Math.max(0, v)); };
  const arrived = function (j, v) {
    if (j <= 0) return 1;
    const span = Math.max(1, count - 1);
    return easeOut(clamp01((v * span - (j - 1)) / ENTER));
  };

  let target = 0, cur = 0, raf = null;

  function measure() {
    const rect = deck.getBoundingClientRect();
    const total = deck.offsetHeight - window.innerHeight;
    const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(1, total));
    target = total > 0 ? scrolled / total : 0;
  }

  function frame() {
    cur += (target - cur) * 0.16; // light critically-damped smoothing
    if (Math.abs(target - cur) < 0.0002) cur = target;
    const v = cur;

    for (let i = 0; i < count; i++) {
      const a = arrived(i, v);
      let above = 0;
      for (let j = i + 1; j < count; j++) above += arrived(j, v);
      above = Math.min(3, above);

      const card = cards[i];
      if (reduce) {
        card.style.transform = a >= 0.5 ? "translateY(0)" : "translateY(110svh)";
      } else {
        const y = (1 - a) * 108 - above * 5;          // covered cards lift so edges show
        const rx = -(1 - a) * 30 + above * 5;
        const sc = 0.9 + 0.1 * a - above * 0.05;
        const blur = Math.pow(1 - a, 2) * 12 + above * 1.1;
        card.style.transform = "translateY(" + y + "svh) rotateX(" + rx + "deg) scale(" + sc + ")";
        card.style.filter = "blur(" + blur.toFixed(2) + "px)";
        const dim = card.querySelector(".deck-dim");
        if (dim) dim.style.opacity = (above * 0.15).toFixed(3);
      }

      // only play the active-ish card's video; pause the rest
      const vid = card.querySelector("video");
      if (vid) {
        const active = a > 0.08 && above < 1.2;
        if (active) { if (vid.paused) { const p = vid.play(); if (p && p.catch) p.catch(function () {}); } }
        else if (!vid.paused) { vid.pause(); }
      }
    }
    raf = (cur !== target) ? requestAnimationFrame(frame) : null;
  }

  function onScroll() { measure(); if (!raf) raf = requestAnimationFrame(frame); }

  measure();
  frame();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () { measure(); if (!raf) raf = requestAnimationFrame(frame); }, { passive: true });
})();
