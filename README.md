# Smart Solutions

Marketing website for Smart Solutions, a technology consulting firm — built as a static HTML/CSS/JS site served through a tiny Express server for easy deployment on Railway.

## Local development

```bash
npm install
npm start
```

Then open http://localhost:3000

## Deploying on Railway

1. Push this repo to GitHub (already connected to `comosimpatic/smartsolutuions`).
2. In Railway, create a new project → **Deploy from GitHub repo** → select `smartsolutuions`.
3. Railway auto-detects Node via `package.json` and runs `npm start` (see `railway.json`).
4. No environment variables are required for the base site.

## Structure

```
index.html      Page markup
css/style.css   Styling (dark, futuristic theme)
js/main.js      Interactions: nav, scroll reveal, particle background, contact form
server.js       Express static server (used in production/Railway)
```

## Customizing content

- Replace placeholder email (`hello@smartsolutions.io`) and stats in `index.html`.
- Swap the "Selected work" case studies for real client work once available.
- The contact form currently only shows a confirmation message client-side — wire it to an email service (e.g. Resend, Formspree) or a backend route in `server.js` to actually receive submissions.
