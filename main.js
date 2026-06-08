// Builds the page from data.js
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

  // short hash for each commit row
  function shortHash(str) {
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
  const avatar = $("[data-avatar]");
  if (avatar) avatar.src = PROFILE.avatar;
  const ghLabel = $("[data-github-label]");
  if (ghLabel) ghLabel.textContent = PROFILE.githubLabel;
  $("[data-footer]").textContent = `© ${new Date().getFullYear()} ${PROFILE.name} · ${PROFILE.location}`;

  // --- Stats ---
  const statsEl = $("[data-stats]");
  STATS.forEach((s) => {
    statsEl.appendChild(el("li", "reveal", `<b>${esc(s.value)}</b><span>${esc(s.label)}</span>`));
  });

  // --- Projects, grouped by repo ---
  function projectCard(p) {
    const card = el("article", "card reveal");
    let shot = "";
    if (p.demo) {
      shot = `<button class="card__shot" data-demo="${esc(p.demo)}" title="Launch interactive demo">
          <img src="${esc(p.image)}" alt="${esc(p.title)} UI" loading="lazy" />
          <span class="card__shot-badge card__shot-badge--demo">▶ Live interactive demo</span>
        </button>`;
    } else if (p.image) {
      shot = `<button class="card__shot" data-shot="${esc(p.image)}" title="Click to enlarge">
          <img src="${esc(p.image)}" alt="${esc(p.title)} UI" loading="lazy" />
          <span class="card__shot-badge">UI</span>
        </button>`;
    }
    card.innerHTML = `
      <div class="card__body">
        <div class="card__top">
          <span class="card__tag">${esc(p.tag)}</span>
          <span class="card__year">${esc(p.year)}</span>
        </div>
        <h3 class="card__title">${esc(p.title)}</h3>
        <p class="card__scope mono">${esc(p.scope)}</p>
        ${shot}
        <p class="card__summary">${esc(p.summary)}</p>
        <ul class="card__hl">${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
        <div class="card__stack">${p.stack.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
      </div>
      <div class="commits">
        <div class="commits__label">From the commit log</div>
        <div class="commits__list">
          ${p.commits
            .map(
              (c) =>
                `<div class="commit"><span class="commit__hash">${shortHash(c)}</span><span>${esc(c)}</span></div>`
            )
            .join("")}
        </div>
      </div>`;
    return card;
  }

  const tabsEl = $("[data-repo-tabs]");
  const panelEl = $("[data-repo-panel]");

  function renderRepo(repo) {
    const header = el("div", "repo__head");
    header.innerHTML = `
      <div class="repo__title-row">
        <a class="repo__name mono" href="${esc(repo.url)}" target="_blank" rel="noopener">${esc(repo.name)} ↗</a>
        <span class="repo__period">${esc(repo.period)}</span>
      </div>
      <div class="repo__role">${esc(repo.role)} · <span class="repo__meta">${esc(repo.meta)}</span></div>
      <p class="repo__summary">${esc(repo.summary)}</p>
      <div class="repo__langs">${repo.languages.map((l) => `<span class="chip chip--lang">${esc(l)}</span>`).join("")}</div>`;

    const grid = el("div", "grid");
    repo.projects.forEach((p) => grid.appendChild(projectCard(p)));

    panelEl.innerHTML = "";
    panelEl.appendChild(header);
    panelEl.appendChild(grid);

    // fade the freshly-swapped content in
    panelEl.querySelectorAll(".reveal, .card").forEach((n) => n.classList.add("reveal"));
    requestAnimationFrame(() => panelEl.querySelectorAll(".reveal").forEach((n) => n.classList.add("in")));
  }

  REPOS.forEach((repo, i) => {
    const btn = el("button", "repo-tab");
    const count = repo.projects.length;
    btn.innerHTML = `
      <span class="repo-tab__name mono">${esc(repo.name)}</span>
      <span class="repo-tab__sub">${esc(repo.role)} · ${count} ${count === 1 ? "project" : "projects"}</span>`;
    btn.addEventListener("click", () => {
      [...tabsEl.children].forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      renderRepo(repo);
      $("#work").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    if (i === 0) btn.classList.add("active");
    tabsEl.appendChild(btn);
  });
  renderRepo(REPOS[0]);

  // --- Modal for UI screenshots and interactive demos ---
  const modal = el("div", "modal");
  modal.innerHTML = `
    <div class="modal__inner">
      <button class="modal__close" aria-label="Close">&times;</button>
      <div class="modal__body"></div>
    </div>`;
  document.body.appendChild(modal);
  const modalBody = modal.querySelector(".modal__body");
  function closeModal() {
    if (!modal.classList.contains("open")) return;
    modal.classList.remove("open");
    // clear content only after the exit transition (and only if still closed)
    setTimeout(() => {
      if (!modal.classList.contains("open")) {
        modal.classList.remove("modal--demo");
        modalBody.innerHTML = "";
      }
    }, 300);
  }
  document.addEventListener("click", (e) => {
    const demo = e.target.closest("[data-demo]");
    if (demo) {
      modal.classList.add("open", "modal--demo");
      modalBody.innerHTML =
        `<iframe class="modal__frame" src="${demo.getAttribute("data-demo")}" title="Interactive UI demo"></iframe>
         <p class="modal__note">Live UI running on sample data. Click around, search, open a vehicle.</p>`;
      return;
    }
    const shot = e.target.closest("[data-shot]");
    if (shot) {
      modal.classList.add("open");
      modalBody.innerHTML = `<img class="modal__img" src="${shot.getAttribute("data-shot")}" alt="UI screenshot" />`;
      return;
    }
    if (e.target === modal || e.target.closest(".modal__close")) closeModal();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
  // the embedded demo posts this when its own close button is used
  window.addEventListener("message", (e) => {
    if (e.data && e.data.fdgDemoClose) { closeModal(); window.focus(); }
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
