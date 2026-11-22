# Smart Solutions — redesign WIP handoff

Pick-up notes for continuing on another machine. Updated 2026-11-22.

- **Repo:** github.com/comosimpatic/smartsolutuions · **Live:** https://www.smartsolutionssvg.com (Railway auto-deploys from **main**).
- **Live right now** (`main`, commit `85e416c`): scroll-stacking work deck, WebGL service critters, Component Library page (`library.html`).
- **This branch (`redesign`) — NOT live yet**, adds:
  - **Vercel theme** — black & white + Geist (`css/vercel-theme.css`, loaded last; remove the link to revert to the blue brand).
  - **Text Chroma Reveal** on the header logo — GSAP + SplitText, rainbow hue-cycle + shiny sweep (`css/chroma-reveal.css`, `js/chroma-reveal.js`, GSAP/SplitText via CDN).
  - Removed the "What we do" / "Full-spectrum technology capability" headings, the nav/footer border lines, and the moving `#bg-canvas` particle background.
  - **SERVICES** wordmark: full-width, raised, critters shrunk so the word towers over them (`css/critter-band.css`).

## Run the preview locally
It's a static front end (the real server is `server.js`, needs Postgres/Stripe env). For visual work, serve the folder statically:
```bash
cd smartsolutuions
node -e "const e=require('express');const a=e();a.use(e.static(process.cwd()));a.listen(4599,'0.0.0.0',()=>console.log('up'))"
# open http://localhost:4599   (npm install express first if needed)
```

## The WebGL critters
`js/critter-bundle.js` is a **prebuilt** self-contained bundle (React + three.js + the component, ~650 KB). Source is `js/critter-services.jsx`. To rebuild after editing the source:
```bash
# in a scratch dir: npm i react@18.3.1 react-dom@18.3.1 three@0.160.1
npx esbuild entry.jsx --bundle --format=iife --loader:.jsx=tsx --target=es2020 --minify --outfile=.../js/critter-bundle.js
```
Critter labels + sizing live in `critter-services.jsx` (DEFAULT_CRITTERS, `unitFor`). The label text drawn on each critter's body is in the rig loop (`spec.label`).

## The chroma-reveal skill
Packaged at `.claude/skills/text-chroma-reveal/` (travels with this repo) — full recipe + copy-ready `assets/chroma-reveal.css` / `.js`. Also installed user-global on the first machine (`~/.claude/skills/`). Invoke it to apply the effect to any heading/logo.

## To deploy
When the redesign is approved: merge `redesign` → `main` (or push main) — Railway auto-deploys to smartsolutionssvg.com.

## Open decisions
- Chroma reveal: **full-color** (current) vs mono/blue to sit quieter in the Vercel theme.
- Keep the Vercel black-&-white theme, or revert to the blue brand.
- Whether to also theme the other pages (repair, library).
