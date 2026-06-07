# portfolio

My personal site. Static HTML/CSS/JS, no build step, no dependencies.

## Running it

Just open `index.html` in a browser. Or if you want it served over http:

```
npx serve .
```

## Structure

- `index.html` - markup
- `styles.css` - styling
- `data.js` - all the content (profile, projects, skills). This is the file to edit.
- `main.js` - renders the page from data.js

To add a project, copy one of the objects in the `PROJECTS` array in `data.js`.

## Deploy

Hosted on GitHub Pages off the `main` branch. Any static host works fine though.
