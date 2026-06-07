// ---------------------------------------------------------------------------
// Renders the portfolio from data.js. Vanilla JS, no dependencies.
// ---------------------------------------------------------------------------
(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) =>
    String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Deterministic fake short-hash so commits feel like git output.
  function fauxHash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
    return (h >>> 0).toString(16).padStart(7, "0").slice(0, 7);
  }

  // --- Profile ---
  $("[data-handle]").textContent = PROFILE.eyebrow;
  $("[data-name]").textContent = PROFILE.name;
  $("[data-role]").textContent = PROFILE.role;
  $("[data-blurb]").textContent = PROFILE.blurb;
  document.querySelectorAll("[data-github]").forEach((a) => (a.href = PROFILE.github));
  $("[data-footer]").textContent = `© ${new Date().getFullYear()} ${PROFILE.name} · ${PROFILE.location}`;

  // --- Stats ---
  const statsEl = $("[data-stats]");
  STATS.forEach((s) => {
    statsEl.appendChild(el("li", "reveal", `<b>${esc(s.value)}</b><span>${esc(s.label)}</span>`));
  });

  // --- Projects ---
  const grid = $("[data-projects]");
  PROJECTS.forEach((p) => {
    const card = el("article", "card reveal");
    card.innerHTML = `
      <div class="card__top">
        <span class="card__tag">${esc(p.tag)}</span>
        <span class="card__year">${esc(p.year)}</span>
      </div>
      <h3 class="card__title">${esc(p.title)}</h3>
      <p class="card__scope mono">${esc(p.scope)}</p>
      <p class="card__summary">${esc(p.summary)}</p>
      <ul class="card__hl">${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
      <div class="card__stack">${p.stack.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
      <div class="commits">
        <div class="commits__label">From the commit log</div>
        <div class="commits__list">
          ${p.commits
            .map(
              (c) =>
                `<div class="commit"><span class="commit__hash">${fauxHash(c)}</span><span>${esc(c)}</span></div>`
            )
            .join("")}
        </div>
      </div>`;
    grid.appendChild(card);
  });

  // --- Skills ---
  const skillsEl = $("[data-skills]");
  SKILLS.forEach((g) => {
    skillsEl.appendChild(
      el(
        "div",
        "skillgroup reveal",
        `<h3>${esc(g.group)}</h3><ul>${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`
      )
    );
  });

  // --- Timeline ---
  const tl = $("[data-timeline]");
  TIMELINE.forEach((t) => {
    tl.appendChild(
      el(
        "li",
        "reveal",
        `<div class="timeline__period mono">${esc(t.period)}</div>
         <div class="timeline__title">${esc(t.title)}</div>
         <p class="timeline__text">${esc(t.text)}</p>`
      )
    );
  });

  // --- Scroll reveal ---
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((n) => io.observe(n));
})();
