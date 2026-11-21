/* Smart Solutions — Component Library catalog.
   Each entry: a preview, the code to copy, and an integration prompt (21st-style). */
window.LIBRARY = [
  {
    id: "scroll-stacking-deck",
    name: "Scroll-Stacking Deck",
    category: "Sections",
    tags: ["React", "Vanilla", "Scroll", "Motion"],
    blurb: "A scroll-dealt deck of cards — each a full-bleed screenshot that tilts in 3D and stacks as you scroll.",
    source: "21st.dev",
    author: "Aakash Mehra",
    authorUrl: "https://21st.dev",
    license: "MIT",
    preview: "library/previews/scroll-deck.html",
    stack: "React + Motion (also ships as a vanilla JS + CSS port)",
    code:
"// Vanilla port: drop css/work-deck.css + js/work-deck.js into your page,\n" +
"// then mark the section and let scroll drive the stack:\n" +
"<section class=\"work-deck\">\n" +
"  <div class=\"deck-stage\">\n" +
"    <article class=\"deck-card\" style=\"z-index:1\"> ...card... </article>\n" +
"    <!-- one .deck-card per screen of scroll -->\n" +
"  </div>\n" +
"</section>\n" +
"<link rel=\"stylesheet\" href=\"css/work-deck.css\">\n" +
"<script src=\"js/work-deck.js\"></script>",
    prompt:
"Integrate a scroll-stacking card deck: a tall section (one screen of scroll per card) " +
"with a sticky stage; each card tilts up from below in 3D, blurs, then flattens sharp as it " +
"lands, with the cards beneath sinking and dimming. Spring-smoothed from a single scroll value; " +
"a still, upright deck under prefers-reduced-motion."
  },
  {
    id: "colorful-shape-icons",
    name: "Colorful Shape Icons",
    category: "Icons",
    tags: ["SVG", "Vanilla", "Gradient"],
    blurb: "A set of soft gradient shape icons (blob, cloud, cube, hexagon, pill, flower) for feature cards.",
    source: "Smart Solutions",
    author: "Smart Solutions",
    authorUrl: "https://www.smartsolutionssvg.com",
    license: "MIT",
    preview: "library/previews/shape-icons.html",
    stack: "Inline SVG + CSS (framework-free)",
    code:
"<div class=\"card-icon\">\n" +
"  <svg viewBox=\"0 0 48 48\" aria-hidden=\"true\">\n" +
"    <defs>\n" +
"      <linearGradient id=\"g1\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n" +
"        <stop offset=\"0\" stop-color=\"#2e7ed6\"/>\n" +
"        <stop offset=\"1\" stop-color=\"#7db8ff\"/>\n" +
"      </linearGradient>\n" +
"    </defs>\n" +
"    <g fill=\"url(#g1)\">\n" +
"      <circle cx=\"18\" cy=\"29\" r=\"9\"/><circle cx=\"31\" cy=\"27\" r=\"11\"/>\n" +
"      <circle cx=\"24\" cy=\"19\" r=\"9\"/><rect x=\"12\" y=\"25\" width=\"25\" height=\"12\" rx=\"6\"/>\n" +
"    </g>\n" +
"  </svg>\n" +
"</div>",
    prompt:
"Give each feature card a soft, colorful gradient shape icon (blob, cloud, rounded cube, " +
"hexagon, pill, flower) with a subtle drop shadow, each a different brand-tinted two-stop gradient."
  },
  {
    id: "fuzzy-critter-footer",
    name: "Fuzzy Critter Footer",
    category: "Footers",
    tags: ["React", "three.js", "WebGL", "Playful"],
    blurb: "A footer with a giant wordmark and draggable 3D 'fuzzy' creatures that drop in and bounce.",
    source: "21st.dev",
    author: "Aakash Mehra",
    authorUrl: "https://21st.dev",
    license: "MIT",
    preview: null,
    previewAccent: "linear-gradient(135deg,#f0bc14,#e26a9d 45%,#a88cf0)",
    stack: "React + three.js",
    code:
"import FuzzyCritterFooter from \"@/components/ui/fuzzy-critter-footer\";\n\n" +
"<FuzzyCritterFooter\n" +
"  wordmark=\"Smart Solutions\"\n" +
"  columns={[/* your footer columns */]}\n" +
"/>\n\n" +
"// npm install three",
    prompt:
"Build a footer with a giant wordmark fitted to the footer width and six draggable 3D furry " +
"creatures that drop in, bounce, settle along the bottom, and hop when clicked — custom fur shaders, " +
"a small 2D physics engine, and a still, tidy row under prefers-reduced-motion."
  }
];
