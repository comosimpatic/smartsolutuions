/* Text Chroma Reveal — GSAP + SplitText.
   Splits the target text into characters, paints a rainbow across them (chroma),
   then reveals them with a springy staggered pop. The CSS adds the living
   hue-cycle + the shiny sweep. Target: the site-name logo in the header. */
(function () {
  function run() {
    var el = document.querySelector(".logo span");
    if (!el) return;

    // graceful fallback if the CDN didn't load: static chroma, no crash
    if (!window.gsap || !window.SplitText) {
      el.classList.add("chroma-live");
      return;
    }
    try { gsap.registerPlugin(SplitText); } catch (e) {}

    var split = new SplitText(el, { type: "chars" });
    var chars = split.chars, N = chars.length;

    chars.forEach(function (c, i) {
      var h = Math.round((i / Math.max(1, N - 1)) * 300); // red → magenta across the word
      c.style.setProperty("color", "hsl(" + h + ",92%,56%)", "important");
      c.style.setProperty("-webkit-text-fill-color", "hsl(" + h + ",92%,56%)", "important");
      c.style.setProperty("--i", i); // drives the staggered shine
    });

    el.classList.add("chroma-live");

    gsap.from(chars, {
      opacity: 0,
      yPercent: 130,
      rotationX: -90,
      scale: 0.4,
      transformOrigin: "50% 100%",
      transformPerspective: 500,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.05,
      delay: 0.2
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
