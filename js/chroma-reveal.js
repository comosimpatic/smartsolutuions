/* Text Chroma Reveal — GSAP + SplitText.
   Splits the target text into characters and reveals them with a springy
   staggered pop. The CSS paints each letter jet-black chrome with a sweeping
   highlight. Target: the site-name logo in the header. */
(function () {
  function run() {
    var el = document.querySelector(".logo span");
    if (!el) return;

    // graceful fallback if the CDN didn't load: just show the chrome text
    if (!window.gsap || !window.SplitText) {
      el.classList.add("chroma-live");
      return;
    }
    try { gsap.registerPlugin(SplitText); } catch (e) {}

    var split = new SplitText(el, { type: "chars", charsClass: "char" });
    var chars = split.chars;

    chars.forEach(function (c, i) { c.style.setProperty("--i", i); }); // staggers the chrome sweep

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
      delay: 0.2,
      clearProps: "transform,opacity"   // release inline transform so the CSS hover can lift the letters
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
