# Salty — Portfolio

A static, dependency-free portfolio site. Content is generated from real git
history on a live FiveM roleplay server (`[scripting]` monorepo).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure |
| `styles.css` | All styling (dark, game-dev theme) |
| `data.js` | **Edit this** — profile, stats, projects, skills, timeline |
| `main.js` | Renders the page from `data.js` |

## Run locally

It's plain HTML/CSS/JS — just open `index.html` in a browser, or serve it:

```bash
npx serve .
# then open the printed http://localhost:xxxx
```

## Edit the content

Everything is in `data.js`. To add a project, copy an existing object in the
`PROJECTS` array. The `commits` array shows verbatim commit subjects under each
card — keep them real so the work stays credible.

## Deploy

Any static host works. Easiest options:

- **GitHub Pages** — push these files to a repo, enable Pages on the branch root.
- **Netlify / Vercel** — drag-and-drop the folder, or connect the repo. No build
  command needed; the publish directory is this folder.
- **Cloudflare Pages** — same, no build step.
