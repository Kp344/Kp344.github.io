const DEFAULT_CONTENT = {
  "meta": {
    "title": "The Egg Drop Challenge",
    "authors": "by Aayush and Kunj",
    "kicker": "A SPICE design report",
    "lede": "One boiled egg. Three sheets of cardstock. One arm's length of tape. A drop from the second floor.",
    "footer": "Built for the SPICE design process — situation, problem, investigation, construction, evaluation."
  },
  "theme": {
    "paper": "#FBD79B",
    "grid": "#E0A24A",
    "cream": "#FDF6E3",
    "ink": "#2A1A0C",
    "yolk": "#FFC220",
    "shell": "#A9681B",
    "display": "Bungee",
    "gridSize": 28
  },
  "sections": [
    {
      "letter": "S",
      "name": "Situation",
      "blurb": "What was the challenge?",
      "subs": [
        {
          "title": "The Situation",
          "cols": 1,
          "blocks": [
            {
              "type": "text",
              "text": "To design and create a package that will keep an egg safe from the impact of a drop from the second floor."
            },
            {
              "type": "text",
              "text": "The package also has to sell itself. An investor should look at it and want to back it, so it has to be tidy, original, and obvious to use."
            }
          ]
        }
      ]
    },
    {
      "letter": "P",
      "name": "Problem",
      "blurb": "Criteria and limits",
      "subs": [
        {
          "title": "What the design has to do",
          "cols": 2,
          "blocks": [
            {
              "type": "list",
              "items": [
                "Creative and unique enough to appeal to an investor",
                "The egg survives the fall without cracking",
                "The product stays in one piece after landing",
                "A quarter of the egg stays visible at all times",
                "Anyone can load the egg without being told how"
              ]
            },
            {
              "type": "list",
              "items": [
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
      "letter": "I",
      "name": "Investigation",
      "blurb": "Physics, research and sketches",
      "subs": [
        {
          "title": "The physics",
          "cols": 2,
          "blocks": [
            {
              "type": "formula",
              "big": "F = m × a",
              "caption": "The force on an object equals its mass times its acceleration."
            },
            {
              "type": "text",
              "text": "Mass is fixed, an egg is an egg. So the only way to lower the force on the shell is to lower the acceleration, and the way to do that is to stretch out the stop. A slower fall and a squishier landing both buy time, and more time means less force."
            }
          ]
        },
        {
          "title": "HOW THE PHYSICS AFFECT THE DESIGN",
          "cols": 2,
          "blocks": [
            {
              "type": "text",
              "text": "To pull this off, most designs try to slow down the drop with air resistance, like using a parachute so it hits with less speed. Another main strategy is building crumple zones with parts that purposely bend or crush to soak up the crash energy before it even reaches the egg. It also really helps to spread out the impact over a bigger contact area so there is way less pressure on any single spot of the shell. Also, I have to make sure the egg itself doesn't fall out of the product and break, and making the product useless."
            }
          ]
        },
        {
          "title": "Past solutions",
          "cols": 2,
          "blocks": [
            {
              "type": "image",
              "src": "image.png",
              "alt": "Cone design with straw legs",
              "caption": "Design 1 — paper cone with straw legs that stop the leg from hitting the ground through the cardstock"
            },
            {
              "type": "image",
              "src": "Copy of The Egg Droppin' Challenge.png",
              "alt": "Straw cage design",
              "caption": "Design 2 — straw cage that holds the egg away surfaces."
            },
            {
              "type": "image",
              "src": "Copy of The Egg Droppin' Challenge (1).png",
              "alt": "Parachute design",
              "caption": "Design 3 — small parachute that slows the whole thing down."
            },
            {
              "type": "text",
              "text": "Each of these designs uses a specific method to reduce the force of impact. The first of these, shown in image 1, is a cone that will crumple slightly to take most of the impact, while its protruding arms catch it as it lands to stop the egg from falling out and cracking. The second, seen in image 2, uses a matrix of straws with protruding arms structured to take the force and distribute it. The design in image 3 uses a parachute to create drag and reduce the speed of the falling egg.",
              "span": "full"
            }
          ]
        },
        {
          "title": "Our sketches",
          "cols": 2,
          "blocks": [
            {
              "type": "image",
              "src": "be535359-381e-4a58-99b7-796492e6237e.jpg",
              "alt": "Kunj's sketch",
              "caption": "Kunj: 11 inch canopy over a narrow cone, 8.5 inches tall."
            },
            {
              "type": "image",
              "src": "20260922_102312.jpg",
              "alt": "Kunj's sketch",
              "caption": "Kunj: A triangular \"prism\" made of rolled up cardstock(Made with half of one cardstock page), each straw 8.5 inches long, protecting the egg from direct impact."
            },
            {
              "type": "image",
              "src": "20260922_102314.jpg",
              "alt": "Kunj's sketch",
              "caption": "Kunj: All 3 pages of cardstock wrapped around the egg to act as a cushion."
            },
            {
              "type": "image",
              "src": "20260922_102317.jpg",
              "alt": "Kunj's sketch",
              "caption": "Kunj: 2 inch cube made of cardstock with folded cardstock as padding inside."
            }
          ]
        }
      ]
    },
    {
      "letter": "C",
      "name": "Construction",
      "blurb": "How we built it",
      "subs": [
        {
          "title": "Prototype",
          "cols": 2,
          "blocks": [
            {
              "type": "image",
              "src": "Prototype pic.jpg",
              "alt": "",
              "caption": "Photo of the Prototype(also Aayush)",
              "span": "narrow"
            },
            {
              "type": "embed",
              "src": "https://youtube.com/shorts/YZT3ifzZXyg?feature=share",
              "shape": "page",
              "caption": "Prototype test",
              "span": "narrow"
            }
          ]
        },
        {
          "title": "Final Design",
          "cols": 2,
          "blocks": [
            {
              "type": "image",
              "src": "20260924_095454.jpg",
              "alt": "",
              "caption": "Photo of the Final Product",
              "span": "narrow"
            },
            {
              "type": "embed",
              "src": "https://youtube.com/shorts/aUqE639X2QQ?feature=share",
              "shape": "page",
              "caption": "Final Product test",
              "span": "narrow"
            }
          ]
        }
      ]
    },
    {
      "letter": "E",
      "name": "Evaluation",
      "blurb": "Testing, results and what we learned",
      "subs": [
        {
          "title": "Testing and results",
          "cols": 2,
          "blocks": [
            {
              "type": "list",
              "items": [
                "Dropped the device from the same height every time",
                "Checked the egg for cracks and leaks after every drop",
                "Recorded what happened digitally"
              ]
            },
            {
              "type": "table",
              "head": [
                "TESTS",
                "Drop height",
                "Egg result",
                "WHAT HAPPENED"
              ],
              "rows": [
                [
                  "Prototype",
                  "2nd floor",
                  "Cracked",
                  "Fell for 3 seconds, Egg was impacted directed"
                ],
                [
                  "Final Product",
                  "2nd floor",
                  "Cracked",
                  "Fell for 3 seconds, Egg was indirectly impacted"
                ]
              ]
            }
          ]
        },
        {
          "title": "My thoughts",
          "cols": 2,
          "blocks": [
            {
              "type": "text",
              "text": "Prototype:\nOur prototype design relied on the parachute working, but once we tested we saw that the whole prototype rotated because the parachute must not have been catching the air perfectly. The cone landed on its side, resulting in the egg still being impacted through the cardstock.\nFinal Product:\nOur final design took a totally different approach. Instead of slowing down the egg over a longer time, we decided to absorb the impact into the product so the egg remains untouched. This did not work as we expected. Upon impact, the shock absorbers we made compressed too fast and did not distribute the impact, resulting in the egg again hitting the ground through the cardstock, BUT this design reduced the damage on the egg significantly, proving that our method could have worked, provided the right materials."
            }
          ]
        },
        {
          "title": "PROTOTYPE VS FINAL PRODUCT",
          "cols": 2,
          "blocks": [
            {
              "type": "image",
              "src": "",
              "alt": "",
              "caption": "Damage to the egg in the prototype"
            },
            {
              "type": "image",
              "src": "",
              "alt": "",
              "caption": "Damage to the egg in the final product"
            }
          ]
        },
        {
          "title": "Did we meet the criteria?",
          "cols": 1,
          "blocks": [
            {
              "type": "table",
              "head": [
                "Criterion",
                "Met?",
                "Evidence"
              ],
              "rows": [
                [
                  "The egg survives with no cracks or leaks",
                  "[No]",
                  "Padding was not sufficient and compressed too fast on impact"
                ],
                [
                  "The device stays in one piece",
                  "[Yes]",
                  "Taped seams and a stiff cardstock shell"
                ],
                [
                  "Only the allowed materials were used",
                  "[Yes]",
                  "3 sheets of cardstock and one Ms. Navea arm's length of tape"
                ],
                [
                  "A quarter of the egg stays visible",
                  "[Yes]",
                  "Top of the egg was visible through the insertion opening"
                ]
              ]
            }
          ]
        },
        {
          "title": "WHAT WORKED WELL: PROTOTYPE",
          "cols": 1,
          "blocks": [
            {
              "type": "cards",
              "items": [
                {
                  "title": "The parachute",
                  "body": "Slowed the fall and reduce impact speed"
                },
                {
                  "title": "Testing early",
                  "body": "The trial drop showed us the problems before the real one."
                }
              ]
            }
          ]
        },
        {
          "title": "WHAT WORKED WELL: FINAL PRODUCT",
          "cols": 1,
          "blocks": [
            {
              "type": "cards",
              "items": [
                {
                  "title": "THE SHOCK ABSORBERS",
                  "body": "Took the brunt of the impact and reduced the damage to the egg"
                },
                {
                  "title": "PLACING THE EGG DIRECTLY IN THE MIDDLE",
                  "body": "Allowed for the egg to be safe from all sides and kept the center of gravity generally in the middle"
                }
              ]
            }
          ]
        },
        {
          "title": "What we would improve",
          "cols": 1,
          "blocks": [
            {
              "type": "pairs",
              "leftLabel": "Weak spot",
              "rightLabel": "Next version",
              "items": [
                {
                  "left": "The parachute drifted. Landed on side, resulting in the egg hitting the ground",
                  "right": ""
                },
                {
                  "left": "Shock absorbers got compressed too fast, let the egg hit the ground through the cardstock",
                  "right": "Use remaining cardstock to fill in the absorbers so that they dont compress all the way"
                },
                {
                  "left": "The design was not very intuitive.",
                  "right": "What you changed"
                }
              ]
            }
          ]
        },
        {
          "title": "What we learned",
          "cols": 1,
          "blocks": [
            {
              "type": "list",
              "items": [
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
          <div class="blocks ${sub.cols === 3 ? "three" : sub.cols === 2 ? "two" : ""}">
            ${(sub.blocks || []).map((b, k) => `<div class="bw${b.span === "full" ? " span-full" : ""}${b.span === "narrow" ? " narrow center" : ""}">${
              renderBlock(b, `sections.${i}.subs.${j}.blocks.${k}`)}</div>`).join("")}
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

function itemTools(p, n, what) {
  if (!editing) return "";
  return `<div class="item-tools">
    <button data-act="item-up" data-path="${p}" data-n="${n}" title="Move ${what} up">&#9650;</button>
    <button data-act="item-down" data-path="${p}" data-n="${n}" title="Move ${what} down">&#9660;</button>
    <button data-act="item-dup" data-path="${p}" data-n="${n}" title="Copy ${what}">&#10697;</button>
    <button class="del" data-act="item-del" data-path="${p}" data-n="${n}" title="Delete ${what}">&#10005;</button>
  </div>`;
}

function renderBlock(b, p) {
  switch (b.type) {
    case "text":
      return `<div class="card b-text"><p data-path="${p}.text">${esc(b.text)}</p></div>`;

    case "list":
      return `<div class="card b-list">
        <ul>${(b.items || []).map((it, n) => `<li><span data-path="${p}.items.${n}">${esc(it)}</span>${itemTools(p, n, "point")}</li>`).join("")}</ul>
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
          ${itemTools(p, n, "card")}
        </div>`).join("")}
        ${tools(p, [["add-item", "+ card"], ["del-item", "– last card"]])}
      </div>`;

    case "steps":
      return `<div class="grid-cards steps">
        ${(b.items || []).map((it, n) => `<div class="card mini">
          <span class="step-no">${n + 1}</span>
          <h4 data-path="${p}.items.${n}.title">${esc(it.title)}</h4>
          <p data-path="${p}.items.${n}.body">${esc(it.body)}</p>
          ${itemTools(p, n, "step")}
        </div>`).join("")}
        ${tools(p, [["add-item", "+ step"], ["del-item", "– last step"]])}
      </div>`;

    case "pairs":
      return `<div class="pairs">
        ${(b.items || []).map((it, n) => `<div class="pair">
          <div class="card"><span data-path="${p}.items.${n}.left">${esc(it.left)}</span>${itemTools(p, n, "row")}</div>
          <div class="arrow" aria-hidden="true">➜</div>
          <div class="card"><span data-path="${p}.items.${n}.right">${esc(it.right)}</span></div>
        </div>`).join("")}
        ${tools(p, [["add-item", "+ row"], ["del-item", "– last row"]])}
      </div>`;

    case "table":
      return `<div>
        <div class="table-wrap"><table class="tbl">
          <thead><tr>${(b.head || []).map((h, c) => `<th data-path="${p}.head.${c}">${esc(h)}</th>`).join("")}${editing ? "<th></th>" : ""}</tr></thead>
          <tbody>${(b.rows || []).map((row, r) => `<tr>${row.map((cell, c) =>
            `<td data-path="${p}.rows.${r}.${c}">${esc(cell)}</td>`).join("")}${editing ? `<td class="rowtools">${itemTools(p, r, "row")}</td>` : ""}</tr>`).join("")}</tbody>
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

    case "embed": {
      const raw = (b.src || "").trim();
      const shape = b.shape || "wide";
      let inner;
      if (!raw) {
        inner = `<div class="img-empty">Paste a link below — a YouTube video, a Google Doc or Slides deck, a PDF, a video file or a photo</div>`;
      } else {
        const yt = raw.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{6,})/);
        const vim = raw.match(/vimeo\.com\/(?:video\/)?(\d+)/);
        const gdoc = raw.match(/docs\.google\.com\/(document|presentation|spreadsheets|forms)\/d\/(?:e\/)?([\w-]+)/);
        const gfile = raw.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
        const low = raw.toLowerCase().split("?")[0];
        let url = null, kind = "iframe";
        if (yt) url = "https://www.youtube.com/embed/" + yt[1];
        else if (vim) url = "https://player.vimeo.com/video/" + vim[1];
        else if (gdoc) url = `https://docs.google.com/${gdoc[1]}/d/${gdoc[2]}/preview`;
        else if (gfile) url = `https://drive.google.com/file/d/${gfile[1]}/preview`;
        else if (/\.(png|jpe?g|gif|webp|svg|avif)$/.test(low)) kind = "img";
        else if (/\.(mp4|webm|ogv|mov|m4v)$/.test(low)) kind = "video";
        else if (/\.(mp3|wav|m4a|ogg)$/.test(low)) kind = "audio";
        else url = raw;

        if (kind === "img") inner = `<img src="${esc(raw)}" alt="${esc(b.caption || "")}" loading="lazy">`;
        else if (kind === "video") inner = `<video src="${esc(raw)}" controls playsinline></video>`;
        else if (kind === "audio") inner = `<audio src="${esc(raw)}" controls></audio>`;
        else inner = `<iframe src="${esc(url)}" title="${esc(b.caption || "Embedded item")}" loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
      }
      return `<div class="card b-embed">
        <div class="${esc(shape)}">${inner}</div>
        <p style="margin:10px 0 0" data-path="${p}.caption">${esc(b.caption || "")}</p>
        <div class="embed-edit">
          <input type="text" value="${esc(b.src || "")}" data-embed="${p}.src"
                 placeholder="Paste a link, or type a file name you put in this folder">
          <select data-embed-shape="${p}.shape">
            ${[["wide", "Widescreen"], ["square", "Square"], ["tall", "Tall"], ["page", "Full page"]]
              .map((o) => `<option value="${o[0]}" ${shape === o[0] ? "selected" : ""}>${o[1]}</option>`).join("")}
          </select>
          <p class="embed-note">Google Docs and Slides need sharing set to "anyone with the link" before they show up.</p>
        </div>
      </div>`;
    }

    case "label":
      return `<div class="b-label"><span class="tag" data-path="${p}.text">${esc(b.text)}</span></div>`;

    case "quote":
      return `<div class="card b-quote">
        <p data-path="${p}.text">${esc(b.text)}</p>
        <p class="who" data-path="${p}.who">${esc(b.who || "")}</p>
      </div>`;

    case "stat":
      return `<div class="card b-stat">
        <div class="num" data-path="${p}.num">${esc(b.num)}</div>
        <p class="lab" data-path="${p}.label">${esc(b.label)}</p>
      </div>`;

    case "video":
      return `<div class="card b-video">
        ${b.src ? `<iframe src="${esc(b.src)}" title="${esc(b.caption || "Video")}" allowfullscreen loading="lazy"></iframe>`
                : `<div class="img-empty">Video goes here${editing ? "" : " — add one in the editor"}</div>`}
        <p style="margin:10px 0 0" data-path="${p}.caption">${esc(b.caption || "")}</p>
        ${tools(p, [["set-video", b.src ? "change video" : "add a video"]])}
      </div>`;

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
  const n = +btn.dataset.n;
  const listOf = (blk) => (blk.type === "table" ? blk.rows : blk.items);
  if (act === "item-up") move(listOf(block), n, -1);
  if (act === "item-down") move(listOf(block), n, 1);
  if (act === "item-dup") { const L = listOf(block); L.splice(n + 1, 0, clone(L[n])); }
  if (act === "item-del") listOf(block).splice(n, 1);
  if (act === "set-video") {
    const url = prompt("Paste a YouTube embed link (the one that looks like https://www.youtube.com/embed/XXXX):", block.src || "");
    if (url === null) return;
    block.src = url.trim().replace("youtube.com/watch?v=", "youtube.com/embed/").split("&")[0];
  }
  if (act === "set-img") {
    const url = prompt("Paste an image link, or the file name of a photo you put in this folder:", block.src || "");
    if (url === null) return;
    block.src = url.trim();
  }
  save();
  renderSections();
  applyEditable(true);
});

document.addEventListener("change", (e) => {
  const inp = e.target.closest("[data-embed],[data-embed-shape]");
  if (!inp) return;
  set(inp.dataset.embed || inp.dataset.embedShape, inp.value.trim());
  renderSections(); applyEditable(editing);
});

/* =========================================================
   Theme
   ========================================================= */

const THEME_LABELS = { paper: "Paper", grid: "Grid lines", cream: "Cards", ink: "Text", yolk: "Yolk yellow", shell: "Shell brown" };

const FONTS = [["Anton", "Anton — tall poster"], ["Bungee", "Bungee — chunky arcade"],
  ["Archivo Black", "Archivo Black — heavy block"], ["Oswald", "Oswald — narrow and neat"]];

function applyTheme() {
  const t = (data.theme = Object.assign(clone(DEFAULT_CONTENT.theme), data.theme || {}));
  Object.keys(THEME_LABELS).forEach((k) => document.documentElement.style.setProperty("--" + k, t[k]));
  document.documentElement.style.setProperty("--display", `"${t.display}",Impact,sans-serif`);
  document.documentElement.style.setProperty("--grid-size", t.gridSize + "px");
}

function renderThemeFields() {
  document.getElementById("themeFields").innerHTML = Object.keys(THEME_LABELS).map((k) => `
    <label>${THEME_LABELS[k]}
      <input type="color" value="${esc(data.theme[k])}" data-theme="${k}">
    </label>`).join("");
  document.getElementById("themeFields").insertAdjacentHTML("beforeend", `
    <label>Heading font
      <select id="fontPick">${FONTS.map((f) =>
        `<option value="${f[0]}" ${data.theme.display === f[0] ? "selected" : ""}>${f[1]}</option>`).join("")}</select>
    </label>
    <label>Graph paper squares — ${data.theme.gridSize}px
      <input type="range" id="gridPick" min="12" max="60" step="2" value="${data.theme.gridSize}">
    </label>`);

  document.querySelectorAll("[data-theme]").forEach((inp) =>
    inp.addEventListener("input", () => { data.theme[inp.dataset.theme] = inp.value; applyTheme(); save(); }));

  document.getElementById("fontPick").addEventListener("change", (e) => {
    data.theme.display = e.target.value; applyTheme(); save();
  });
  document.getElementById("gridPick").addEventListener("input", (e) => {
    data.theme.gridSize = +e.target.value; applyTheme(); save();
    e.target.previousSibling.textContent = `Graph paper squares — ${e.target.value}px`;
  });
}

const META_FIELDS = [
  ["meta.title", "Project title", "text"],
  ["meta.authors", "Who made it", "text"],
  ["meta.kicker", "Small line above the title", "text"],
  ["meta.lede", "Intro sentence", "area"],
  ["meta.footer", "Footer line", "area"]
];

function renderMetaFields() {
  const box = document.getElementById("metaFields");
  box.innerHTML = META_FIELDS.map(([path, label, kind]) => `
    <label>${label}
      ${kind === "area"
        ? `<textarea rows="3" data-meta="${path}">${esc(get(path))}</textarea>`
        : `<input type="text" value="${esc(get(path))}" data-meta="${path}">`}
    </label>`).join("");
  box.querySelectorAll("[data-meta]").forEach((inp) =>
    inp.addEventListener("input", () => {
      set(inp.dataset.meta, inp.value);
      document.querySelectorAll(`[data-bind="${inp.dataset.meta}"]`).forEach((el) => (el.textContent = inp.value));
    }));
}

/* =========================================================
   Admin panel
   ========================================================= */

const admin = document.getElementById("admin");

function openAdmin() {
  admin.hidden = false;   // no dark overlay: the page stays clickable so you can type on it
  document.body.classList.add("admin-open");
  renderMetaFields(); renderTree(); renderThemeFields();
  if (!editing) toggleEdit(true);
}
function closeAdmin() {
  admin.hidden = true;
  document.body.classList.remove("admin-open");
  // editing stays on if it was on, so you can keep typing on the page;
  // the "Done editing" button at the bottom left switches it off.
}

document.getElementById("adminClose").addEventListener("click", closeAdmin);

document.getElementById("editPill").addEventListener("click", () => { toggleEdit(false); toast("Saved in this browser"); });

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
  ["embed", "Embed a link (video, Docs, Slides, PDF)"],
  ["label", "Small tag label (like \"The Physics\")"],
  ["text", "Paragraph"], ["list", "Bullet list"], ["cards", "Cards"], ["steps", "Numbered steps"],
  ["pairs", "Two column rows"], ["table", "Table"], ["formula", "Big formula"], ["image", "Photo"],
  ["video", "Video"], ["quote", "Quote"], ["stat", "Big number"], ["banner", "Banner"]
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
    banner: { type: "banner", text: "A line worth shouting" },
    video: { type: "video", src: "", caption: "Our drop, filmed from the ground." },
    embed: { type: "embed", src: "", shape: "wide", caption: "What this shows." },
    label: { type: "label", text: "Small Heading", span: "full" },
    quote: { type: "quote", text: "What someone said about the build.", who: "— who said it" },
    stat: { type: "stat", num: "0", label: "What this number counts" }
  }[kind];
}

function move(arr, i, dir) {
  const j = i + dir;
  if (j < 0 || j >= arr.length) return;
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function renderTree() {
  const tree = document.getElementById("tree");
  const colLabel = { 1: "&#9647;", 2: "&#9638;", 3: "&#9636;" };

  tree.innerHTML = data.sections.map((s, i) => `
    <div class="node" data-drop="sec" data-i="${i}">
      <div class="node-row" draggable="true" data-drag="sec" data-i="${i}">
        <span class="grip" title="Drag to move this section">&#10495;</span>
        <input type="text" class="letter-in" value="${esc(s.letter)}" data-field="sections.${i}.letter" maxlength="2">
        <input type="text" value="${esc(s.name)}" data-field="sections.${i}.name">
        <button class="mini-btn" data-t="sec-up" data-i="${i}" title="Move up">&#9650;</button>
        <button class="mini-btn" data-t="sec-down" data-i="${i}" title="Move down">&#9660;</button>
        <button class="mini-btn" data-t="sec-dup" data-i="${i}" title="Copy section">&#9099;</button>
        <button class="mini-btn del" data-t="sec-del" data-i="${i}" title="Delete section">&#10005;</button>
      </div>
      <div class="kids">
        ${(s.subs || []).map((sub, j) => `
          <div class="kid" data-drop="sub" data-i="${i}" data-j="${j}">
            <div class="node-row" draggable="true" data-drag="sub" data-i="${i}" data-j="${j}">
              <span class="grip" title="Drag this part anywhere, even into another section">&#10495;</span>
              <input type="text" value="${esc(sub.title)}" data-field="sections.${i}.subs.${j}.title">
              <button class="mini-btn" data-t="cols" data-i="${i}" data-j="${j}"
                      title="One, two or three columns">${colLabel[sub.cols] || colLabel[1]}</button>
              <button class="mini-btn" data-t="sub-up" data-i="${i}" data-j="${j}" title="Move up">&#9650;</button>
              <button class="mini-btn" data-t="sub-down" data-i="${i}" data-j="${j}" title="Move down">&#9660;</button>
              <button class="mini-btn" data-t="sub-dup" data-i="${i}" data-j="${j}" title="Copy part">&#9099;</button>
              <button class="mini-btn del" data-t="sub-del" data-i="${i}" data-j="${j}" title="Delete part">&#10005;</button>
            </div>
            ${(sub.blocks || []).map((b, k) => `
              <div class="blockline" draggable="true" data-drag="blk" data-i="${i}" data-j="${j}" data-k="${k}">
                <span class="grip" title="Drag this block anywhere">&#10495;</span>
                <span class="what">${(BLOCK_KINDS.find((x) => x[0] === b.type) || ["", b.type])[1]}</span>
                <button class="mini-btn" data-t="span" data-i="${i}" data-j="${j}" data-k="${k}"
                        title="Width: normal, full row, or narrow">${b.span === "full" ? "&#8596;" : b.span === "narrow" ? "&#8677;&#8676;" : "&#9723;"}</button>
                <button class="mini-btn" data-t="blk-up" data-i="${i}" data-j="${j}" data-k="${k}" title="Move up">&#9650;</button>
                <button class="mini-btn" data-t="blk-down" data-i="${i}" data-j="${j}" data-k="${k}" title="Move down">&#9660;</button>
                <button class="mini-btn" data-t="blk-dup" data-i="${i}" data-j="${j}" data-k="${k}" title="Copy block">&#9099;</button>
                <button class="mini-btn del" data-t="blk-del" data-i="${i}" data-j="${j}" data-k="${k}" title="Delete block">&#10005;</button>
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
    if (t === "sec-dup") S.splice(i + 1, 0, clone(S[i]));
    if (t === "sec-del" && confirm(`Delete the whole "${S[i].name}" section?`)) S.splice(i, 1);
    if (t === "sub-up") move(S[i].subs, j, -1);
    if (t === "sub-down") move(S[i].subs, j, 1);
    if (t === "sub-dup") S[i].subs.splice(j + 1, 0, clone(S[i].subs[j]));
    if (t === "sub-del") S[i].subs.splice(j, 1);
    if (t === "sub-add") (S[i].subs = S[i].subs || []).push({ title: "New part", cols: 1, blocks: [blankBlock("text")] });
    if (t === "cols") sub.cols = (sub.cols || 1) % 3 + 1;
    if (t === "span") sub.blocks[k].span = { undefined: "full", normal: "full", full: "narrow", narrow: "normal" }[sub.blocks[k].span];
    if (t === "blk-up") move(sub.blocks, k, -1);
    if (t === "blk-down") move(sub.blocks, k, 1);
    if (t === "blk-dup") sub.blocks.splice(k + 1, 0, clone(sub.blocks[k]));
    if (t === "blk-del") sub.blocks.splice(k, 1);
    if (t === "blk-add") {
      const kind = document.querySelector(`[data-kind="${i}-${j}"]`).value;
      sub.blocks.push(blankBlock(kind));
    }
    save(); renderAll(); renderTree();
  }));

  wireDrag(tree);
}

/* ---- dragging things around in the editor ----
   Pointer Events (not the HTML5 drag API) so the same grip works
   with a mouse, a trackpad, or a finger on a phone or tablet. */

let dragInfo = null;      // what's being moved: {kind,i,j,k}
let dragGhost = null;     // the floating copy that follows the finger
let dragTarget = null;    // {type:"onto", el} or {type:"into", el} — resolved on release
let dragScroller = null;  // the panel we auto-scroll near its edges

const clearMarks = () => document.querySelectorAll(".drop-before,.drop-after,.drop-into")
  .forEach((el) => el.classList.remove("drop-before", "drop-after", "drop-into"));

function wireDrag(tree) {
  tree.querySelectorAll("[data-drag] > .grip").forEach((grip) => {
    grip.addEventListener("pointerdown", (ev) => {
      if (ev.button !== undefined && ev.button !== 0) return;
      startDrag(ev, grip.closest("[data-drag]"));
    });
  });
}

function startDrag(ev, el) {
  ev.preventDefault();
  dragInfo = { kind: el.dataset.drag, i: +el.dataset.i, j: +el.dataset.j, k: +el.dataset.k };
  dragScroller = el.closest(".admin-body");

  el.classList.add("dragging");
  const r = el.getBoundingClientRect();
  dragGhost = el.cloneNode(true);
  dragGhost.className = "drag-ghost";
  dragGhost.style.width = r.width + "px";
  document.body.appendChild(dragGhost);
  positionGhost(ev.clientX, ev.clientY);

  window.addEventListener("pointermove", onDragMove);
  window.addEventListener("pointerup", onDragEnd, { once: true });
  window.addEventListener("pointercancel", onDragEnd, { once: true });
}

function positionGhost(x, y) {
  dragGhost.style.left = x + 14 + "px";
  dragGhost.style.top = y + 10 + "px";
}

function onDragMove(ev) {
  if (!dragInfo) return;
  positionGhost(ev.clientX, ev.clientY);
  autoScroll(ev.clientY);
  clearMarks();
  dragTarget = null;

  const here = document.elementFromPoint(ev.clientX, ev.clientY);
  if (!here) return;

  const row = here.closest(`[data-drag="${dragInfo.kind}"]`);
  const draggingEl = document.querySelector(".dragging");
  if (row && row !== draggingEl) {
    const r = row.getBoundingClientRect();
    const after = ev.clientY > r.top + r.height / 2;
    row.classList.add(after ? "drop-after" : "drop-before");
    dragTarget = { type: "onto", i: +row.dataset.i, j: +row.dataset.j, k: +row.dataset.k, after };
    return;
  }

  const wants = dragInfo.kind === "sub" ? "sec" : dragInfo.kind === "blk" ? "sub" : null;
  const box = wants && here.closest(`[data-drop="${wants}"]`);
  if (box) {
    box.classList.add("drop-into");
    dragTarget = { type: "into", i: +box.dataset.i, j: +box.dataset.j };
  }
}

function autoScroll(clientY) {
  if (!dragScroller) return;
  const r = dragScroller.getBoundingClientRect();
  const edge = 46;
  if (clientY < r.top + edge) dragScroller.scrollTop -= 14;
  else if (clientY > r.bottom - edge) dragScroller.scrollTop += 14;
}

function onDragEnd() {
  window.removeEventListener("pointermove", onDragMove);
  document.querySelector(".dragging")?.classList.remove("dragging");
  dragGhost?.remove();
  dragGhost = null;
  clearMarks();

  if (dragTarget && dragInfo) {
    if (dragTarget.type === "onto") {
      dropOnto(dragInfo.kind, dragTarget.i, dragTarget.j, dragTarget.k, dragTarget.after);
    } else {
      appendInto(dragInfo.kind, dragTarget.i, dragTarget.j);
    }
  }
  dragInfo = null; dragTarget = null; dragScroller = null;
}

function listFor(kind, i, j) {
  const S = data.sections;
  if (kind === "sec") return S;
  if (kind === "sub") return S[i].subs;
  return S[i].subs[j].blocks;
}

function dropOnto(kind, ti, tj, tk, after) {
  const d = dragInfo;
  const from = listFor(kind, d.i, d.j);
  const to = listFor(kind, ti, tj);
  const fromIdx = kind === "sec" ? d.i : kind === "sub" ? d.j : d.k;
  let toIdx = (kind === "sec" ? ti : kind === "sub" ? tj : tk) + (after ? 1 : 0);
  const item = from.splice(fromIdx, 1)[0];
  if (from === to && fromIdx < toIdx) toIdx--;
  to.splice(toIdx, 0, item);
  finishDrag();
}

function appendInto(kind, i, j) {
  const d = dragInfo;
  const from = listFor(kind, d.i, d.j);
  const to = kind === "sub" ? (data.sections[i].subs = data.sections[i].subs || []) : data.sections[i].subs[j].blocks;
  if (from === to) return finishDrag();
  to.push(from.splice(kind === "sub" ? d.j : d.k, 1)[0]);
  finishDrag();
}

function finishDrag() {
  save(); renderAll(); renderTree();
  toast("Moved");
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
  renderAll(); renderMetaFields(); renderTree(); renderThemeFields(); toast("Back to the original");
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
