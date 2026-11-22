---
name: text-chroma-reveal
description: Apply an eye-catching animated "chroma reveal" to a heading, logo, or brand name — a GSAP + SplitText staggered character reveal layered with a living rainbow hue-cycle and a shiny sweep (React-Bits "Gradient Text" + "Shiny Text" in spirit). Works on any vanilla HTML site via CDN; adaptable to React. Use whenever the user wants an animated text reveal, chroma/gradient text, shimmer/shine, or a fancy entrance on a title or site name.
---

# Text Chroma Reveal

A layered animated text effect for a title / logo / brand name:

1. **Reveal** — GSAP + **SplitText** split the text into characters; each pops up with a springy staggered entrance (`back.out`, rotateX, scale).
2. **Chroma** — each character is painted a different hue (a rainbow across the word), and the whole word's hue **cycles continuously** (`hue-rotate` loop) — a living gradient.
3. **Shine** — a brightness/glow **sweeps across the letters** every few seconds, staggered per character (the React-Bits "Shiny Text" feel).

It's robust because each letter is a **solid color** (not a gradient clipped to text), so transforms, hue-cycling and the shimmer all compose cleanly. Respects `prefers-reduced-motion`.

## How to apply

### 1. Load GSAP + SplitText (vanilla sites — GSAP is 100% free now)
Add before your own script, exact pinned version:
```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js"></script>
```

### 2. CSS (`chroma-reveal.css`)
```css
.chroma-live { animation: chroma-hue 8s linear infinite; }
@keyframes chroma-hue { to { filter: hue-rotate(360deg); } }
.chroma-live .char {
  display: inline-block;
  animation: char-shine 5s ease-in-out infinite;
  animation-delay: calc(var(--i, 0) * 0.07s);
}
@keyframes char-shine {
  0%, 84%, 100% { filter: brightness(1); }
  90%           { filter: brightness(1.95) drop-shadow(0 0 8px currentColor); }
}
@media (prefers-reduced-motion: reduce) {
  .chroma-live, .chroma-live .char { animation: none !important; }
}
```

### 3. JS (`chroma-reveal.js`) — set `SELECTOR` to the target text element
```js
(function () {
  var SELECTOR = ".logo span";          // ← the element holding the text
  function run() {
    var el = document.querySelector(SELECTOR);
    if (!el) return;
    if (!window.gsap || !window.SplitText) { el.classList.add("chroma-live"); return; }
    try { gsap.registerPlugin(SplitText); } catch (e) {}
    var split = new SplitText(el, { type: "chars" });
    var chars = split.chars, N = chars.length;
    chars.forEach(function (c, i) {
      var h = Math.round((i / Math.max(1, N - 1)) * 300);           // 0 → full-color; use a narrow range for mono
      c.style.setProperty("color", "hsl(" + h + ",92%,56%)", "important");
      c.style.setProperty("-webkit-text-fill-color", "hsl(" + h + ",92%,56%)", "important");
      c.style.setProperty("--i", i);
    });
    el.classList.add("chroma-live");
    gsap.from(chars, {
      opacity: 0, yPercent: 130, rotationX: -90, scale: 0.4,
      transformOrigin: "50% 100%", transformPerspective: 500,
      duration: 0.8, ease: "back.out(1.7)", stagger: 0.05, delay: 0.2
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
```

`assets/chroma-reveal.css` and `assets/chroma-reveal.js` in this skill folder are ready-to-copy versions.

## Options / tuning
- **Full-color vs mono**: the hue spread is `(i/(N-1))*300`. Keep `300` for a full rainbow. For a **monochrome/brand chroma**, pin the hue (e.g. `h = 215` for blue) and let `char-shine` + `chroma-hue` give subtle movement — or set a narrow range like `210 + (i/(N-1))*40`.
- **Speed**: `chroma-hue` duration (hue cycle), `char-shine` duration + `--i` multiplier (sweep cadence), `stagger`/`duration` (reveal pace).
- **Intensity**: `char-shine` `brightness()` + `drop-shadow` blur; reveal `yPercent`/`rotationX`/`scale`.
- **Nested markup** (e.g. `<span>Smart <em>Solutions</em></span>`) is fine — SplitText splits across child elements.

## React
On a React site, use React-Bits' **SplitText** (it's GSAP-based) + **GradientText**/**ShinyText**, or port this: run the same logic in a `useEffect` with a ref, and `revert()` the SplitText instance on cleanup. (React-Bits: https://github.com/DavidHDev/react-bits)

## Credits / lineage
GSAP + SplitText (GreenSock, now free under Webflow). Chroma/shine concept echoes React-Bits (David Haz) "Gradient Text" + "Shiny Text". First built on the Smart Solutions site, 2026-11.
