/* =========================================================
   The Egg Drop Challenge — site logic
   -----------------------------------------------------
   Everything on the page is drawn from the object below.
   Change it here, or open the editor on the page
   ("Edit site" button, or click the egg three times).
   ========================================================= */

const DEFAULT_CONTENT = {
  meta: {
    title: "The Egg Drop Challenge",
    authors: "by Aayush and Kunj",
    kicker: "A SPICE design report",
    lede: "One raw egg. Three sheets of cardstock. One arm's length of tape. A drop from the second floor.",
    footer: "Built for the SPICE design process — situation, problem, investigation, construction, evaluation."
  },

  theme: {
    paper: "#FBD79B",
    grid:  "#E0A24A",
    cream: "#FDF6E3",
    ink:   "#2A1A0C",
    yolk:  "#FFC220",
    shell: "#A9681B"
  },

  sections: [
    {
      letter: "S",
      name: "Situation",
      blurb: "What was the challenge?",
      subs: [
        {
          title: "The scenario",
          cols: 1,
          blocks: [
            { type: "text", text: "To design and create a package that will keep an egg safe from the impact of a drop from the second floor." },
            { type: "text", text: "The package also has to sell itself. An investor should look at it and want to back it, so it has to be tidy, original, and obvious to use." }
          ]
        }
      ]
    },

    {
      letter: "P",
      name: "Problem",
      blurb: "Criteria and limits",
      subs: [
        {
          title: "What the design has to do",
          cols: 2,
          blocks: [
            {
              type: "list",
              items: [
                "Creative and unique enough to appeal to an investor",
                "The egg survives the fall without cracking",
                "The product stays in one piece after landing",
                "A quarter of the egg stays visible at all times",
                "Anyone can load the egg without being told how"
              ]
            },
            {
              type: "list",
              items: [
                "Only 3 A4 sheets of cardstock",
                "Only one arm's length of tape (Ms. Navea's arm)",
                "A quarter of the egg visible in the package",
                "The client loads the egg themselves",
                "Finished by Monday, September 21, 2026"
              ]
            }
          ]
        }
      ]
    },

    {
      letter: "I",
      name: "Investigation",
      blurb: "Physics, research and sketches",
      subs: [
        {
          title: "The physics",
          cols: 2,
          blocks: [
            { type: "formula", big: "F = m × a", caption: "The force on an object equals its mass times its acceleration." },
            { type: "text", text: "Mass is fixed — an egg is an egg. So the only way to lower the force on the shell is to lower the acceleration, and the way to do that is to stretch out the stop. A slower fall and a squishier landing both buy time, and more time means less force." }
          ]
        },
        {
          title: "Past solutions",
          cols: 2,
          blocks: [
            { type: "image", src: "", alt: "Cone design with straw legs", caption: "Design 1 — paper cone with straw legs that fold on impact." },
            { type: "image", src: "", alt: "Straw cage design", caption: "Design 2 — straw cage that holds the egg away from every wall." },
            { type: "image", src: "", alt: "Parachute design", caption: "Design 3 — small parachute that slows the whole thing down." }
          ]
        },
        {
          title: "Our sketches",
          cols: 2,
          blocks: [
            { type: "image", src: "", alt: "Aayush's sketch", caption: "Aayush: parachute over a deep cardstock bucket." },
            { type: "image", src: "", alt: "Kunj's sketch", caption: "Kunj: 11 inch canopy over a narrow cone, 8.5 inches tall." },
            {
              type: "list",
              items: [
                "Both ideas slow the fall, which softens the landing speed",
                "Both are light, so there is less energy to get rid of",
                "Weakness in both: very little protection if the landing is still hard"
              ]
            }
          ]
        },
        {
          title: "Choosing our design",
          cols: 2,
          blocks: [
            {
              type: "table",
              head: ["Criteria", "Aayush", "Kunj", "Combined"],
              rows: [
                ["Cushions the impact", "5 / 5", "2 / 5", "5 / 5"],
                ["Slows the fall", "1 / 5", "5 / 5", "4 / 5"],
                ["Easy to build", "5 / 5", "3 / 5", "3 / 5"],
                ["Uses few materials", "4 / 5", "3 / 5", "3 / 5"]
              ]
            },
            { type: "text", text: "We combined both ideas: a padded capsule hanging under a small parachute. The parachute lowers the landing speed, and the padding protects the egg if the landing is still rough." }
          ]
        }
      ]
    },

    {
      letter: "C",
      name: "Construction",
      blurb: "How we built it",
      subs: [
        {
          title: "How the final design works",
          cols: 1,
          blocks: [
            {
              type: "cards",
              items: [
                { title: "Parachute", body: "Catches air and slows the fall." },
                { title: "Suspension lines", body: "Keep the capsule hanging level so it lands flat." },
                { title: "Outer shell", body: "Takes the first hit and keeps its shape." },
                { title: "Padded egg seat", body: "Holds the egg still and soaks up the shock." }
              ]
            }
          ]
        },
        {
          title: "Materials and tools",
          cols: 2,
          blocks: [
            {
              type: "list",
              items: [
                "Cardstock — the outer shell and the canopy",
                "Padding — soft cushioning around the egg",
                "String — suspension lines",
                "Tape — holds every seam together"
              ]
            },
            { type: "list", items: ["Scissors", "Ruler", "Marker", "Hole punch"] }
          ]
        },
        {
          title: "Step by step",
          cols: 1,
          blocks: [
            {
              type: "steps",
              items: [
                { title: "Build the shell", body: "Cut and fold the cardstock into a box with room around the egg." },
                { title: "Add padding", body: "Line every wall and the floor so the egg cannot rattle." },
                { title: "Make the parachute", body: "Cut the canopy, add four strings of equal length, tie them to the shell." },
                { title: "Seal and check", body: "Place the egg, close the lid, tape the seams, untangle the lines." }
              ]
            }
          ]
        },
        {
          title: "Problems and fixes",
          cols: 1,
          blocks: [
            {
              type: "pairs",
              leftLabel: "What went wrong",
              rightLabel: "What we did",
              items: [
                { left: "The egg rattled inside the shell.", right: "Added padding on every side until it sat snugly." },
                { left: "The parachute strings tangled.", right: "Cut the strings to equal lengths and folded the canopy neatly." },
                { left: "Tape peeled off the seams.", right: "Doubled the tape at the corners." }
              ]
            }
          ]
        }
      ]
    },

    {
      letter: "E",
      name: "Evaluation",
      blurb: "Testing, results and what we learned",
      subs: [
        {
          title: "Testing and results",
          cols: 2,
          blocks: [
            {
              type: "list",
              items: [
                "Dropped the device from the same height every time",
                "Checked the egg for cracks and leaks after every drop",
                "Wrote down what happened and what to change"
              ]
            },
            {
              type: "table",
              head: ["Trial", "Drop height", "Egg result", "What we saw"],
              rows: [
                ["1", "[height]", "[intact / cracked]", "[what happened]"],
                ["2", "[height]", "[intact / cracked]", "[what happened]"],
                ["3", "[height]", "[intact / cracked]", "[what happened]"],
                ["Final", "[height]", "[intact / cracked]", "[what happened]"]
              ]
            }
          ]
        },
        {
          title: "Did we meet the criteria?",
          cols: 1,
          blocks: [
            {
              type: "table",
              head: ["Criterion", "Met?", "Evidence"],
              rows: [
                ["The egg survives with no cracks or leaks", "[yes / no]", "Padding and parachute cut the impact on the shell"],
                ["The device stays in one piece", "[yes / no]", "Taped seams and a stiff cardstock shell"],
                ["Only the allowed materials were used", "[yes / no]", "3 sheets of cardstock and one arm's length of tape"],
                ["A quarter of the egg stays visible", "[yes / no]", "Open window cut into the front of the shell"]
              ]
            }
          ]
        },
        {
          title: "What worked well",
          cols: 1,
          blocks: [
            {
              type: "cards",
              items: [
                { title: "The parachute", body: "Slowed the fall and helped the shell land upright." },
                { title: "The padding", body: "Held the egg still and absorbed the shock of landing." },
                { title: "Testing early", body: "Trial drops showed us the problems before the real one." }
              ]
            },
            { type: "banner", text: "A longer stop means a smaller force on the egg" }
          ]
        },
        {
          title: "What we would improve",
          cols: 1,
          blocks: [
            {
              type: "pairs",
              leftLabel: "Weak spot",
              rightLabel: "Next version",
              items: [
                { left: "The parachute can drift or tangle.", right: "Use lighter, evenly spaced lines and pack the canopy carefully." },
                { left: "Extra padding adds weight.", right: "Test a few padding thicknesses to find the balance." },
                { left: "We only tested a few drops.", right: "Run more trials from different heights for steadier results." }
              ]
            }
          ]
        },
        {
          title: "What we learned",
          cols: 1,
          blocks: [
            {
              type: "list",
              items: [
                "Engineers protect fragile things by making impacts last longer and spreading the force out",
                "The SPICE process kept us planning, building, testing and improving in order",
                "Finding problems early made the final design stronger"
              ]
            }
          ]
        }
      ]
    }
  ]
};

/* =========================================================
   State
   ========================================================= */

const KEY = "eggdrop.content.v1";
const clone = (o) => JSON.parse(JSON.stringify(o));
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

let data = clone(DEFAULT_CONTENT);
let editing = false;

function get(path) {
  return path.split(".").reduce((o, k) => (o == null ? o : o[k]), data);
}
function set(path, value) {
  const keys = path.split(".");
  const last = keys.pop();
  const target = keys.reduce((o, k) => o[k], data);
  target[last] = value;
  save();
}

let saveTimer;
function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try { localStorage.setItem(KEY, JSON.stringify(data)); }
    catch (e) { console.warn("Could not save to this browser.", e); }
  }, 250);
}

function load() {
  let stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) { /* storage blocked */ }
  if (stored) {
    try { data = JSON.parse(stored); return Promise.resolve(); }
    catch (e) { console.warn("Saved content was unreadable, using the built-in copy."); }
  }
  // Optional: drop a content.json next to the site and it wins over the built-in copy.
  return fetch("content.json", { cache: "no-store" })
    .then((r) => (r.ok ? r.json() : null))
    .then((json) => { if (json && json.sections) data = json; })
    .catch(() => {});
}

/* =========================================================
   Rendering
   ========================================================= */

function sectionIds() {
  const used = new Set();
  return data.sections.map((s, i) => {
    let id = (s.letter || String(i)).toLowerCase().replace(/[^a-z0-9]/g, "") || "s" + i;
    while (used.has(id)) id += "x";
    used.add(id);
    return id;
  });
}

function renderAll() {
  applyTheme();
  document.querySelectorAll("[data-bind]").forEach((el) => {
    el.textContent = get(el.dataset.bind) || "";
    el.dataset.path = el.dataset.bind;
  });
  renderNav();
  renderSections();
  applyEditable(editing);
  observeSections();
}

function renderNav() {
  const ids = sectionIds();
  document.getElementById("spice").innerHTML = data.sections.map((s, i) => `
    <div class="spice-item" data-sec="${ids[i]}">
      <button class="spice-letter" aria-expanded="false" aria-controls="menu-${ids[i]}"
              title="${esc(s.name)}">${esc(s.letter || "?")}</button>
      <span class="spice-name">${esc(s.name)}</span>
      <ul class="spice-menu" id="menu-${ids[i]}">
        ${(s.subs || []).map((sub, j) => `<li><a href="#${ids[i]}-${j}">${esc(sub.title)}</a></li>`).join("")}
      </ul>
    </div>`).join("");
  wireNav();
}

function renderSections() {
  const ids = sectionIds();
  document.getElementById("content").innerHTML = data.sections.map((s, i) => `
    <section class="section" id="${ids[i]}">
      <div class="section-head">
        <span class="section-mark">${esc(s.letter || "?")}</span>
        <h2 data-path="sections.${i}.name">${esc(s.name)}</h2>
        <span class="tag" data-path="sections.${i}.blurb">${esc(s.blurb || "")}</span>
      </div>
      ${(s.subs || []).map((sub, j) => `
        <div class="sub" id="${ids[i]}-${j}">
          <div class="sub-title"><span class="tag" data-path="sections.${i}.subs.${j}.title">${esc(sub.title)}</span></div>
          <div class="blocks ${sub.cols === 2 ? "two" : ""}">
            ${(sub.blocks || []).map((b, k) => renderBlock(b, `sections.${i}.subs.${j}.blocks.${k}`)).join("")}
          </div>
        </div>`).join("")}
    </section>`).join("");
}

function tools(path, buttons) {
  if (!editing) return "";
  return `<div class="addrow" style="margin-top:12px">` +
    buttons.map((b) => `<button class="mini-btn" data-act="${b[0]}" data-path="${path}">${b[1]}</button>`).join("") +
    `</div>`;
}

function renderBlock(b, p) {
  switch (b.type) {
    case "text":
      return `<div class="card b-text"><p data-path="${p}.text">${esc(b.text)}</p></div>`;

    case "list":
      return `<div class="card b-list">
        <ul>${(b.items || []).map((it, n) => `<li data-path="${p}.items.${n}">${esc(it)}</li>`).join("")}</ul>
        ${tools(p, [["add-item", "+ point"], ["del-item", "– last point"]])}
      </div>`;

    case "formula":
      return `<div class="card b-formula">
        <div class="big" data-path="${p}.big">${esc(b.big)}</div>
        <p class="cap" data-path="${p}.caption">${esc(b.caption)}</p>
      </div>`;

    case "cards":
      return `<div class="grid-cards">
        ${(b.items || []).map((it, n) => `<div class="card mini">
          <h4 data-path="${p}.items.${n}.title">${esc(it.title)}</h4>
          <p data-path="${p}.items.${n}.body">${esc(it.body)}</p>
        </div>`).join("")}
        ${tools(p, [["add-item", "+ card"], ["del-item", "– last card"]])}
      </div>`;

    case "steps":
      return `<div class="grid-cards steps">
        ${(b.items || []).map((it, n) => `<div class="card mini">
          <span class="step-no">${n + 1}</span>
          <h4 data-path="${p}.items.${n}.title">${esc(it.title)}</h4>
          <p data-path="${p}.items.${n}.body">${esc(it.body)}</p>
        </div>`).join("")}
        ${tools(p, [["add-item", "+ step"], ["del-item", "– last step"]])}
      </div>`;

    case "pairs":
      return `<div class="pairs">
        ${(b.items || []).map((it, n) => `<div class="pair">
          <div class="card" data-path="${p}.items.${n}.left">${esc(it.left)}</div>
          <div class="arrow" aria-hidden="true">➜</div>
          <div class="card" data-path="${p}.items.${n}.right">${esc(it.right)}</div>
        </div>`).join("")}
        ${tools(p, [["add-item", "+ row"], ["del-item", "– last row"]])}
      </div>`;

    case "table":
      return `<div>
        <div class="table-wrap"><table class="tbl">
          <thead><tr>${(b.head || []).map((h, c) => `<th data-path="${p}.head.${c}">${esc(h)}</th>`).join("")}</tr></thead>
          <tbody>${(b.rows || []).map((row, r) => `<tr>${row.map((cell, c) =>
            `<td data-path="${p}.rows.${r}.${c}">${esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table></div>
        ${tools(p, [["add-row", "+ row"], ["del-row", "– row"], ["add-col", "+ column"], ["del-col", "– column"]])}
      </div>`;

    case "image":
      return `<div class="card b-image"><figure>
        ${b.src
          ? `<img src="${esc(b.src)}" alt="${esc(b.alt || "")}" loading="lazy">`
          : `<div class="img-empty">Photo goes here${editing ? "" : " — add one in the editor"}</div>`}
        <figcaption data-path="${p}.caption">${esc(b.caption || "")}</figcaption>
      </figure>${tools(p, [["set-img", b.src ? "change photo" : "add a photo"]])}</div>`;

    case "banner":
      return `<div class="banner" data-path="${p}.text">${esc(b.text)}</div>`;

    default:
      return "";
  }
}

/* =========================================================
   Navigation behaviour
   ========================================================= */

let hoverTimer;
function wireNav() {
  const canHover = window.matchMedia("(hover:hover) and (min-width:721px)").matches;

  document.querySelectorAll(".spice-item").forEach((item) => {
    const btn = item.querySelector(".spice-letter");

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      closeMenus();
      if (!isOpen) openMenu(item);
      document.getElementById(item.dataset.sec)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    if (canHover) {
      item.addEventListener("mouseenter", () => { clearTimeout(hoverTimer); closeMenus(); openMenu(item); });
      item.addEventListener("mouseleave", () => { hoverTimer = setTimeout(closeMenus, 180); });
    }

    item.querySelectorAll(".spice-menu a").forEach((a) =>
      a.addEventListener("click", () => setTimeout(closeMenus, 120)));
  });
}

function openMenu(item) {
  item.classList.add("open");
  item.querySelector(".spice-letter").setAttribute("aria-expanded", "true");
}
function closeMenus() {
  document.querySelectorAll(".spice-item.open").forEach((i) => {
    i.classList.remove("open");
    i.querySelector(".spice-letter").setAttribute("aria-expanded", "false");
  });
}
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeMenus(); closeAdmin(); } });
document.addEventListener("click", (e) => { if (!e.target.closest(".spice")) closeMenus(); });

let observer;
function observeSections() {
  observer?.disconnect();
  observer = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      document.querySelectorAll(".spice-item").forEach((i) =>
        i.classList.toggle("active", i.dataset.sec === en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main .section").forEach((s) => observer.observe(s));
}

/* =========================================================
   Inline editing
   ========================================================= */

function toggleEdit(on) {          // changes mode, so the page is drawn again
  editing = on;
  renderSections();
  applyEditable(on);
  observeSections();
}

function applyEditable(on) {       // just switches the fields on or off
  document.body.classList.toggle("editing", on);
  document.querySelectorAll("[data-path]").forEach((el) => {
    el.contentEditable = on ? "true" : "false";
    if (on) el.spellcheck = true;
  });
  const box = document.getElementById("liveEdit");
  if (box) box.checked = on;
}

document.addEventListener("input", (e) => {
  const el = e.target.closest("[data-path]");
  if (!el || !editing) return;
  set(el.dataset.path, el.innerText.trim());
  if (el.dataset.path === "meta.title") {
    document.querySelectorAll('[data-bind="meta.title"]').forEach((n) => { if (n !== el) n.textContent = el.innerText; });
  }
});

document.addEventListener("keydown", (e) => {
  if (editing && e.key === "Enter" && e.target.closest("[data-path]")) e.preventDefault();
});

// buttons rendered inside the page while editing
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-act]");
  if (!btn || !btn.dataset.path || btn.closest(".admin")) return;
  const p = btn.dataset.path;
  const block = get(p);
  const act = btn.dataset.act;

  if (act === "add-item") {
    const blank = { list: "New point", cards: { title: "Title", body: "Say what this is." },
      steps: { title: "Next step", body: "What you do." }, pairs: { left: "What happened", right: "What you changed" } }[block.type];
    block.items = block.items || [];
    block.items.push(typeof blank === "string" ? blank : clone(blank));
  }
  if (act === "del-item") block.items?.pop();
  if (act === "add-row") block.rows.push(block.head.map(() => "—"));
  if (act === "del-row") block.rows.pop();
  if (act === "add-col") { block.head.push("New column"); block.rows.forEach((r) => r.push("—")); }
  if (act === "del-col") { block.head.pop(); block.rows.forEach((r) => r.pop()); }
  if (act === "set-img") {
    const url = prompt("Paste an image link, or the file name of a photo you put in this folder:", block.src || "");
    if (url === null) return;
    block.src = url.trim();
  }
  save();
  renderSections();
  applyEditable(true);
});

/* =========================================================
   Theme
   ========================================================= */

const THEME_LABELS = { paper: "Paper", grid: "Grid lines", cream: "Cards", ink: "Text", yolk: "Yolk yellow", shell: "Shell brown" };

function applyTheme() {
  const t = data.theme || {};
  Object.entries(t).forEach(([k, v]) => document.documentElement.style.setProperty("--" + k, v));
}

function renderThemeFields() {
  document.getElementById("themeFields").innerHTML = Object.keys(THEME_LABELS).map((k) => `
    <label>${THEME_LABELS[k]}
      <input type="color" value="${esc(data.theme[k])}" data-theme="${k}">
    </label>`).join("");
  document.querySelectorAll("[data-theme]").forEach((inp) =>
    inp.addEventListener("input", () => { data.theme[inp.dataset.theme] = inp.value; applyTheme(); save(); }));
}

/* =========================================================
   Admin panel
   ========================================================= */

const admin = document.getElementById("admin");
const scrim = document.getElementById("adminScrim");

function openAdmin() {
  admin.hidden = false; scrim.hidden = false;
  renderTree(); renderThemeFields();
}
function closeAdmin() { admin.hidden = true; scrim.hidden = true; }

document.getElementById("adminToggle").addEventListener("click", openAdmin);
document.getElementById("adminClose").addEventListener("click", closeAdmin);
scrim.addEventListener("click", closeAdmin);

let eggClicks = 0, eggTimer;
document.getElementById("brand").addEventListener("click", () => {
  clearTimeout(eggTimer);
  eggTimer = setTimeout(() => (eggClicks = 0), 900);
  if (++eggClicks >= 3) { eggClicks = 0; openAdmin(); }
});

document.querySelectorAll(".tab").forEach((tab) =>
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("is-on", t === tab));
    document.querySelectorAll(".tabpane").forEach((p) => p.classList.toggle("is-on", p.dataset.pane === tab.dataset.tab));
  }));

document.getElementById("liveEdit").addEventListener("change", (e) => toggleEdit(e.target.checked));

document.getElementById("wobble").addEventListener("change", (e) =>
  document.body.classList.toggle("anim-on", e.target.checked));

document.getElementById("resetTheme").addEventListener("click", () => {
  data.theme = clone(DEFAULT_CONTENT.theme);
  applyTheme(); renderThemeFields(); save(); toast("Colours reset");
});

const BLOCK_KINDS = [
  ["text", "Paragraph"], ["list", "Bullet list"], ["cards", "Cards"], ["steps", "Numbered steps"],
  ["pairs", "Two column rows"], ["table", "Table"], ["formula", "Big formula"], ["image", "Photo"], ["banner", "Banner"]
];

function blankBlock(kind) {
  return {
    text: { type: "text", text: "Write something here." },
    list: { type: "list", items: ["First point", "Second point"] },
    cards: { type: "cards", items: [{ title: "Title", body: "Say what this is." }] },
    steps: { type: "steps", items: [{ title: "First step", body: "What you do." }] },
    pairs: { type: "pairs", items: [{ left: "What happened", right: "What you changed" }] },
    table: { type: "table", head: ["Column A", "Column B"], rows: [["—", "—"]] },
    formula: { type: "formula", big: "F = m × a", caption: "What it means." },
    image: { type: "image", src: "", alt: "", caption: "Caption for this photo." },
    banner: { type: "banner", text: "A line worth shouting" }
  }[kind];
}

function move(arr, i, dir) {
  const j = i + dir;
  if (j < 0 || j >= arr.length) return;
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function renderTree() {
  const tree = document.getElementById("tree");
  tree.innerHTML = data.sections.map((s, i) => `
    <div class="node">
      <div class="node-row">
        <input type="text" class="letter-in" value="${esc(s.letter)}" data-field="sections.${i}.letter" maxlength="2">
        <input type="text" value="${esc(s.name)}" data-field="sections.${i}.name">
        <button class="mini-btn" data-t="sec-up" data-i="${i}" title="Move up">▲</button>
        <button class="mini-btn" data-t="sec-down" data-i="${i}" title="Move down">▼</button>
        <button class="mini-btn del" data-t="sec-del" data-i="${i}" title="Delete section">✕</button>
      </div>
      <div class="kids">
        ${(s.subs || []).map((sub, j) => `
          <div class="kid">
            <div class="node-row">
              <input type="text" value="${esc(sub.title)}" data-field="sections.${i}.subs.${j}.title">
              <button class="mini-btn" data-t="cols" data-i="${i}" data-j="${j}" title="One or two columns">${sub.cols === 2 ? "▦" : "▯"}</button>
              <button class="mini-btn" data-t="sub-up" data-i="${i}" data-j="${j}">▲</button>
              <button class="mini-btn" data-t="sub-down" data-i="${i}" data-j="${j}">▼</button>
              <button class="mini-btn del" data-t="sub-del" data-i="${i}" data-j="${j}">✕</button>
            </div>
            ${(sub.blocks || []).map((b, k) => `
              <div class="blockline">
                <span class="what">${(BLOCK_KINDS.find((x) => x[0] === b.type) || ["", b.type])[1]}</span>
                <button class="mini-btn" data-t="blk-up" data-i="${i}" data-j="${j}" data-k="${k}">▲</button>
                <button class="mini-btn" data-t="blk-down" data-i="${i}" data-j="${j}" data-k="${k}">▼</button>
                <button class="mini-btn del" data-t="blk-del" data-i="${i}" data-j="${j}" data-k="${k}">✕</button>
              </div>`).join("")}
            <div class="addrow">
              <select data-kind="${i}-${j}">${BLOCK_KINDS.map((b) => `<option value="${b[0]}">${b[1]}</option>`).join("")}</select>
              <button class="mini-btn" data-t="blk-add" data-i="${i}" data-j="${j}">+ add</button>
            </div>
          </div>`).join("")}
        <button class="mini-btn" data-t="sub-add" data-i="${i}">+ add a part</button>
      </div>
    </div>`).join("");

  tree.querySelectorAll("[data-field]").forEach((inp) =>
    inp.addEventListener("input", () => {
      set(inp.dataset.field, inp.value);
      renderNav(); renderSections(); applyEditable(editing); observeSections();
    }));

  tree.querySelectorAll("[data-t]").forEach((btn) => btn.addEventListener("click", () => {
    const i = +btn.dataset.i, j = +btn.dataset.j, k = +btn.dataset.k, t = btn.dataset.t;
    const S = data.sections, sub = S[i] && S[i].subs ? S[i].subs[j] : null;

    if (t === "sec-up") move(S, i, -1);
    if (t === "sec-down") move(S, i, 1);
    if (t === "sec-del" && confirm(`Delete the whole "${S[i].name}" section?`)) S.splice(i, 1);
    if (t === "sub-up") move(S[i].subs, j, -1);
    if (t === "sub-down") move(S[i].subs, j, 1);
    if (t === "sub-del") S[i].subs.splice(j, 1);
    if (t === "sub-add") (S[i].subs = S[i].subs || []).push({ title: "New part", cols: 1, blocks: [blankBlock("text")] });
    if (t === "cols") sub.cols = sub.cols === 2 ? 1 : 2;
    if (t === "blk-up") move(sub.blocks, k, -1);
    if (t === "blk-down") move(sub.blocks, k, 1);
    if (t === "blk-del") sub.blocks.splice(k, 1);
    if (t === "blk-add") {
      const kind = document.querySelector(`[data-kind="${i}-${j}"]`).value;
      sub.blocks.push(blankBlock(kind));
    }
    save(); renderAll(); renderTree();
  }));
}

document.getElementById("addSection").addEventListener("click", () => {
  data.sections.push({ letter: "N", name: "New section", blurb: "What this covers", subs: [{ title: "New part", cols: 1, blocks: [blankBlock("text")] }] });
  save(); renderAll(); renderTree(); toast("Section added");
});

/* ---- save & load ---- */

function download(name, text, type) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement("a");
  a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

document.getElementById("exportJson").addEventListener("click", () => {
  download("content.json", JSON.stringify(data, null, 2), "application/json");
  toast("content.json downloaded");
});

document.getElementById("copyJs").addEventListener("click", async () => {
  const text = "const DEFAULT_CONTENT = " + JSON.stringify(data, null, 2) + ";";
  try { await navigator.clipboard.writeText(text); toast("Copied — paste it over the DEFAULT_CONTENT block in script.js"); }
  catch (e) { download("DEFAULT_CONTENT.js", text, "text/javascript"); toast("Clipboard blocked, so it downloaded instead"); }
});

document.getElementById("importJson").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  file.text().then((t) => {
    try {
      const json = JSON.parse(t);
      if (!json.sections) throw new Error("no sections");
      data = json; save(); renderAll(); renderTree(); renderThemeFields(); toast("Content loaded");
    } catch (err) { toast("That file is not a site content file"); }
  });
  e.target.value = "";
});

document.getElementById("resetAll").addEventListener("click", () => {
  if (!confirm("This puts every section back the way it started. Continue?")) return;
  try { localStorage.removeItem(KEY); } catch (e) {}
  data = clone(DEFAULT_CONTENT);
  renderAll(); renderTree(); renderThemeFields(); toast("Back to the original");
});

let toastTimer;
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

/* =========================================================
   Go
   ========================================================= */

document.body.classList.add("anim-on");
load().then(() => {
  renderAll();
  if (location.hash === "#admin") openAdmin();
});
