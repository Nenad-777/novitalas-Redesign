// Experiment 0001. All participant state lives in this module's memory only.
const root = document.querySelector("#app");
const live = document.querySelector("#status");
const privacy = document.querySelector("#privacy");
document
  .querySelector("#privacy-toggle")
  .addEventListener("click", () => privacy.showModal());
document
  .querySelector("#privacy-close")
  .addEventListener("click", () => privacy.close());
const initial = () => ({
  phase: "entry",
  thought: "",
  correction: "",
  rejected: [],
  model: null,
  result: null,
  intervention: null,
  replacement: "",
  rating: null,
  feedback: "",
  before: false,
});
let state = initial();
let busy = false;
let requestController;
let epoch = 0;
let service = null;

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key.startsWith("on"))
      node.addEventListener(key.slice(2).toLowerCase(), value);
    else if (key === "class") node.className = value;
    else if (key === "value") node.value = value;
    else if (value !== false && value != null)
      node.setAttribute(key, String(value));
  }
  for (const child of children.flat(Infinity))
    if (child != null)
      node.append(
        child instanceof Node ? child : document.createTextNode(String(child))
      );
  return node;
}
const text = (s, cls = "") => el("p", { class: cls }, s);
const button = (label, action, cls = "option", attrs = {}) =>
  el(
    "button",
    { type: "button", class: cls, onclick: action, ...attrs },
    label
  );
const primary = (label, action) =>
  button(
    [
      el("span", {}, label),
      el("span", { class: "arrow", "aria-hidden": "true" }, "↗"),
    ],
    action,
    "primary"
  );
const eyebrow = s => text(s, "eyebrow");
function announce(s) {
  live.textContent = s;
}
function focusRoot() {
  root.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "instant" });
}
function showError(message) {
  root.querySelector(".error")?.remove();
  const node = text(message, "status-message error");
  node.setAttribute("role", "alert");
  root.append(node);
  node.scrollIntoView({ block: "nearest", behavior: "smooth" });
}
function progress(message) {
  busy = true;
  root
    .querySelectorAll("button, textarea")
    .forEach(node => (node.disabled = true));
  const node = el(
    "div",
    { class: "pending", role: "status" },
    el("div", { class: "working", "aria-hidden": "true" }),
    text(message, "status-message"),
    button(
      "Otkaži",
      () => {
        epoch++;
        requestController?.abort();
        busy = false;
        render();
      },
      "quiet"
    )
  );
  root.append(node);
  node.scrollIntoView({ block: "nearest", behavior: "smooth" });
  announce(message);
}

async function request(payload) {
  const myEpoch = epoch;
  requestController = new AbortController();
  const timer = setTimeout(() => requestController?.abort(), 75000);
  try {
    const response = await fetch("/api/sofia-shift", {
      method: "POST",
      credentials: "same-origin",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "X-Sofia-Experiment": "0001",
      },
      body: JSON.stringify(payload),
      signal: requestController.signal,
    });
    if (myEpoch !== epoch) return null;
    if (!response.headers.get("content-type")?.includes("application/json"))
      throw new Error(
        "Preview sesija je istekla. Otvori ponovo privatni link."
      );
    const data = await response.json();
    if (!response.ok)
      throw new Error(
        data.message ||
          "Analiza trenutno nije dostupna. Tvoja misao je i dalje samo u ovoj sesiji."
      );
    return data;
  } catch (error) {
    if (myEpoch !== epoch) return null;
    throw new Error(
      error.name === "AbortError"
        ? "Analiza je trajala predugo. Možeš ponovo da pokušaš."
        : error instanceof TypeError
          ? "Veza je prekinuta. Proveri internet i pokušaj ponovo."
          : error.message
    );
  } finally {
    clearTimeout(timer);
    if (myEpoch === epoch) busy = false;
  }
}

async function buildModel() {
  if (busy) return;
  if (state.thought.trim().length < 8) {
    showError("Napiši jednu celu misao, makar nekoliko reči.");
    return;
  }
  progress(
    state.rejected.length
      ? "Uzimam tvoju ispravku kao polazište."
      : "Razdvajam ono što je izrečeno od mogućih veza."
  );
  try {
    const data = await request({
      action: "model",
      thought: state.thought,
      correction: state.correction,
      rejected: state.rejected,
    });
    if (!data) return;
    state.model = data.model;
    state.result = null;
    state.phase = "model";
    render();
    focusRoot();
    announce("Privremena struktura je spremna. Sve veze možeš da ispraviš.");
  } catch (error) {
    render();
    showError(error.message);
  }
}

async function transform(intervention, replacement = "") {
  if (busy) return;
  if (intervention === "replace" && replacement.trim().length < 4) {
    showError("Napiši kako ova pretpostavka zapravo glasi.");
    return;
  }
  progress("Proveravam šta ostaje kada se ovaj oslonac promeni.");
  try {
    const data = await request({
      action: "shift",
      thought: state.thought,
      model: state.model,
      intervention,
      replacement,
    });
    if (!data) return;
    state.intervention = intervention;
    state.replacement = replacement;
    state.result = data.result;
    state.phase = "shifted";
    state.before = true;
    render();
    focusRoot();
    // Paint the old positions once, then transform these same DOM nodes.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        if (state.phase === "shifted") setComparison(false);
      })
    );
    announce(
      "Struktura se promenila. Puna linija znači da deo opstaje; isprekidana da je uslovan ili bez ovog oslonca."
    );
  } catch (error) {
    render();
    showError(error.message);
  }
}

function entry() {
  const input = el("textarea", {
    id: "thought",
    class: "thought-input",
    rows: 3,
    maxlength: 1800,
    placeholder: "Mislim da…",
    autocomplete: "off",
    spellcheck: "false",
    "aria-label": "Tvoja misao",
    "aria-describedby": "entry-note",
    value: state.thought,
  });
  const count = el("span", {}, `${state.thought.length} / 1800`);
  input.addEventListener("input", () => {
    state.thought = input.value;
    count.textContent = `${input.value.length} / 1800`;
  });
  const start = primary("Pogledaj svoju misao", () => {
    state.rejected = [];
    state.correction = "";
    buildModel();
  });
  if (service?.available === false) start.disabled = true;
  return el(
    "section",
    { class: "entry fade-in" },
    eyebrow("01 / MISAO"),
    el("h1", {}, "Reci Sofiji nešto u šta veruješ."),
    text(
      "Jedan zaključak, strah, odluka ili dilema. Ne moraš da budeš siguran.",
      "intro"
    ),
    input,
    el(
      "div",
      { class: "input-meta", id: "entry-note" },
      el("span", {}, "Možeš dodati i zbog čega to misliš."),
      count
    ),
    start,
    text(
      "Misao se obrađuje uz pravilo bez zadržavanja sadržaja. Ostaje u memoriji ove stranice do završetka ili osvežavanja.",
      "fine privacy-note"
    ),
    service?.available === false
      ? text(
          "Ovaj eksperiment radi isključivo u pripremljenom privatnom preview okruženju.",
          "status-message"
        )
      : null
  );
}

const kindLabels = {
  reported: "Tvoj navod · neproveren",
  interpretation: "SOFIJINO TUMAČENJE",
  inference: "MOGUĆI ZAKLJUČAK",
};
const inventoryLabels = {
  explicit_fact: "Činjenica prema iskazu",
  interpretation: "Tumačenje",
  inference: "Zaključivanje",
  assumption: "Pretpostavka",
  missing_information: "Nedostaje",
  uncertainty: "Neizvesnost",
  evidence: "Dokaz",
  emotional_stake: "Emocionalni ulog",
  identity_stake: "Lični ulog",
  causal_dependency: "Zavisnost",
  alternative_explanation: "Drugo objašnjenje",
  confidence: "Pouzdanost tumačenja",
};

function structure() {
  const changed = state.phase === "shifted";
  const space = el(
    "section",
    { class: "thought-space" },
    eyebrow(changed ? "04 / POMERANJE" : "02 / PRIVREMENA STRUKTURA"),
    text(state.thought, "original")
  );
  const parts = el("div", {
    class: "structure",
    "data-shifted": "false",
    "aria-label": "Delovi tvoje misli i njihov oslonac",
  });
  for (const node of state.model.nodes) {
    const affected =
      state.phase !== "model" && state.model.shift?.affects.includes(node.id);
    parts.append(
      el(
        "div",
        {
          class: "part",
          "data-node": node.id,
          "data-kind": node.kind,
          "data-affected": Boolean(affected),
          "data-state": "unchanged",
        },
        el("span", { class: "part-label" }, kindLabels[node.kind]),
        text(node.text, "part-text"),
        el("p", { class: "part-reason hidden" })
      )
    );
  }
  space.append(parts);
  return space;
}

function inspection() {
  const body = el("div", { class: "inventory" });
  for (const item of state.model.inventory) {
    const basis = {
      stated: "Iz tvog iskaza",
      inferred: "SOFIJINA pretpostavka",
      unknown: "Nije poznato",
    }[item.basis];
    body.append(
      el(
        "p",
        {},
        el("span", { class: "basis" }, basis),
        el("span", {}, el("small", {}, inventoryLabels[item.kind]), item.text)
      )
    );
  }
  return el(
    "details",
    { class: "inspection" },
    el("summary", {}, "Kako sam pročitala tvoju misao · ispravi me"),
    body,
    text(state.model.limitation, "fine"),
    button("Ispravi tumačenje", () => showEditor("context"), "quiet"),
    button(
      "Ispravi prvobitnu misao",
      () => {
        state.phase = "entry";
        render();
        focusRoot();
      },
      "quiet"
    )
  );
}

function hinge() {
  const shift = state.model.shift;
  const stage = el("section", {
    class: "hinge",
    "aria-label": "Mogući oslonac zaključka",
  });
  if (!shift) {
    stage.append(
      eyebrow("GRANICA OVOG TUMAČENJA"),
      el("h2", {}, "Ovde još ne vidim pouzdan oslonac."),
      text(state.model.limitation, "connection"),
      text(state.model.clarification, "test"),
      primary("Dodaj ono što nedostaje", () => showEditor("context")),
      button("Završi eksperiment", finish, "quiet")
    );
    return stage;
  }
  if (state.phase === "model") {
    stage.append(
      text("Jedna moguća veza još nije izrečena.", "connection"),
      primary("Otkrij mogući oslonac", () => {
        state.phase = "revealed";
        render();
        announce(
          "Prikazana je jedna moguća pretpostavka. Možeš je prihvatiti, odbaciti ili promeniti."
        );
        root
          .querySelector(".hinge")
          ?.scrollIntoView({ block: "start", behavior: "smooth" });
      })
    );
    return stage;
  }
  stage.classList.add("revealed");
  stage.append(
    text("MOGUĆA PRETPOSTAVKA · SOFIJINO TUMAČENJE", "premise-label"),
    text(shift.premise, "premise"),
    text(shift.connection, "connection"),
    el(
      "p",
      { class: "anchor" },
      "Ovu vezu proveravam uz tvoje reči: ",
      el("q", {}, shift.anchor)
    ),
    text(
      shift.confidence === "low"
        ? "Ovo je nesigurna hipoteza. Ti odlučuješ da li pripada tvojoj misli."
        : "Ovo je privremeno tumačenje. Ti odlučuješ da li pripada tvojoj misli.",
      "fine"
    )
  );
  if (state.phase === "revealed") {
    stage.append(
      el(
        "div",
        { class: "response-options" },
        button("Da, tako razmišljam", () => {
          state.phase = "accepted";
          render();
          announce(
            "Pretpostavka je potvrđena kao deo tvoje misli. Sada možeš probno da je ukloniš ili promeniš."
          );
        }),
        button("Ne, pogrešno si povezala", () => showEditor("reject")),
        button("Izmeni pretpostavku", () => showEditor("replace"))
      )
    );
  } else if (state.phase === "accepted") {
    stage.append(
      text("Prepoznaješ ovaj oslonac. Sada ga probno pomeri.", "accepted"),
      el(
        "div",
        { class: "actions" },
        primary("Izvuci ovaj oslonac", () => transform("remove")),
        button("Zameni ga svojom pretpostavkom", () => showEditor("replace"))
      ),
      text(
        "Uklanjamo oslonac iz razmatranja. Time još ne tvrdimo da je netačan.",
        "fine"
      )
    );
  }
  return stage;
}

function showEditor(mode) {
  if (busy) return;
  root.querySelector(".editor")?.remove();
  const replacing = mode === "replace";
  const rejecting = mode === "reject";
  const label = replacing
    ? "Kako želiš da glasi pretpostavka?"
    : rejecting
      ? "Šta sam pogrešno povezala? (nije obavezno)"
      : "Šta treba da ispravim ili uzmem u obzir?";
  const input = el("textarea", {
    id: "correction",
    class: "thought-input",
    rows: 3,
    maxlength: replacing ? 600 : 1000,
    autocomplete: "off",
    spellcheck: "false",
    value: replacing ? state.model.shift.premise : "",
  });
  const editor = el(
    "section",
    { class: "editor fade-in" },
    el("label", { for: "correction" }, label),
    rejecting
      ? text(
          "Odbaciću ovu vezu. Možeš da me ispraviš ili da završimo ovde.",
          "fine"
        )
      : null,
    input,
    el(
      "div",
      { class: "actions" },
      primary(replacing ? "Promeni oslonac" : "Pogledaj ponovo", () => {
        if (replacing) {
          transform("replace", input.value.trim());
          return;
        }
        if (rejecting) {
          if (state.rejected.length >= 5) {
            finish();
            return;
          }
          state.rejected.push(state.model.shift.premise);
        }
        state.correction = input.value.trim();
        buildModel();
      }),
      button("Završi eksperiment", finish, "quiet"),
      !rejecting ? button("Otkaži", () => editor.remove(), "quiet") : null
    )
  );
  root.querySelector(".hinge").append(editor);
  input.focus({ preventScroll: true });
  editor.scrollIntoView({ block: "center", behavior: "smooth" });
}

function setComparison(before) {
  state.before = before;
  const shifted = !before;
  root
    .querySelector(".structure")
    .setAttribute("data-shifted", String(shifted));
  root.querySelectorAll("[data-node]").forEach(node => {
    const original = state.model.nodes.find(n => n.id === node.dataset.node);
    const change = state.result.changes.find(c => c.id === node.dataset.node);
    node.dataset.state = shifted ? change.state : "unchanged";
    node.querySelector(".part-text").textContent = shifted
      ? change.after
      : original.text;
    node.querySelector(".part-label").textContent = shifted
      ? {
          unchanged: "OPSTAJE",
          conditional: "SADA JE USLOVNO",
          unsupported: "BEZ OVOG OSLONCA",
        }[change.state]
      : kindLabels[original.kind];
    const reason = node.querySelector(".part-reason");
    reason.textContent = shifted ? change.why : "";
    reason.classList.toggle("hidden", !shifted);
  });
  const support = root.querySelector(".hinge");
  support.classList.toggle(
    "extracted",
    shifted && state.intervention === "remove"
  );
  support.querySelector(".premise").textContent =
    shifted && state.intervention === "replace"
      ? state.replacement
      : state.model.shift.premise;
  support.querySelector(".premise-label").textContent = !shifted
    ? "PRETHODNA MOGUĆA PRETPOSTAVKA"
    : state.intervention === "remove"
      ? "PROBNO UKLONJEN OSLONAC"
      : "TVOJA NOVA PRETPOSTAVKA · PROBNA PROMENA";
  root
    .querySelectorAll(".comparison button")
    .forEach(b =>
      b.setAttribute(
        "aria-pressed",
        String((b.dataset.view === "before") === before)
      )
    );
  root.querySelector(".after-reading")?.classList.toggle("hidden", before);
}

function finish() {
  if (busy) return;
  state.phase = "rating";
  render();
  focusRoot();
}
function ending() {
  const section = el(
    "section",
    { class: "finish fade-in" },
    eyebrow("05 / TVOJ UTISAK"),
    el("h1", {}, "Da li ti je Sofija pokazala nešto što ranije nisi video?")
  );
  const choices = el("div", {
    class: "rating",
    role: "group",
    "aria-label": "Tvoj utisak",
  });
  for (const value of ["Da", "Delimično", "Ne"])
    choices.append(
      button(
        value,
        () => {
          state.rating = value;
          render();
        },
        "",
        { "aria-pressed": state.rating === value }
      )
    );
  section.append(choices);
  if (state.rating) {
    const input = el("textarea", {
      id: "feedback",
      class: "thought-input",
      rows: 2,
      maxlength: 1000,
      autocomplete: "off",
      value: state.feedback,
      oninput: e => {
        state.feedback = e.target.value;
      },
    });
    section.append(
      el(
        "label",
        { for: "feedback", class: "fine" },
        "Šta se promenilo? (nije obavezno)"
      ),
      input,
      text(
        "I „ne” je potpun odgovor. Ovaj utisak ostaje samo na tvom ekranu.",
        "fine"
      ),
      primary("Završi i obriši", () => {
        clearSession();
        state.phase = "done";
        render();
        focusRoot();
      })
    );
  } else
    section.append(
      button(
        "Završi bez ocene i obriši",
        () => {
          clearSession();
          state.phase = "done";
          render();
          focusRoot();
        },
        "quiet"
      )
    );
  return section;
}

function render() {
  root.replaceChildren();
  if (state.phase === "entry") root.append(entry());
  else if (state.phase === "rating") root.append(ending());
  else if (state.phase === "done")
    root.append(
      el(
        "section",
        { class: "finish fade-in" },
        eyebrow("EKSPERIMENT ZAVRŠEN"),
        el("h1", {}, "Tvoja misao ostaje tvoja."),
        el("div", { class: "end-mark", "aria-hidden": "true" }),
        text("Sadržaj ove sesije je uklonjen iz aplikacije.", "fine")
      )
    );
  else {
    root.append(structure(), hinge());
    if (state.phase === "shifted") {
      root.append(
        el(
          "div",
          {
            class: "comparison",
            role: "group",
            "aria-label": "Uporedi istu strukturu",
          },
          button("Pre pomeranja", () => setComparison(true), "", {
            "data-view": "before",
            "aria-pressed": true,
          }),
          button("Posle pomeranja", () => setComparison(false), "", {
            "data-view": "after",
            "aria-pressed": false,
          })
        ),
        el(
          "section",
          { class: "after-reading hidden" },
          text(state.result.consequence, "consequence"),
          text("MOGUĆA NOVA FORMULACIJA", "premise-label"),
          text(state.result.conclusion, "test"),
          text("Šta bi razlikovalo ova dva pogleda?", "fine"),
          text(state.result.test, "connection")
        ),
        el(
          "div",
          { class: "actions" },
          primary("Zabeleži svoj utisak", finish),
          button(
            "Ispravi novu pretpostavku",
            () => showEditor("replace"),
            "quiet"
          )
        )
      );
      setComparison(state.before);
    } else
      root.append(inspection(), button("Završi eksperiment", finish, "quiet"));
  }
}

function clearSession() {
  epoch++;
  requestController?.abort();
  requestController = null;
  busy = false;
  state = initial();
  root.replaceChildren();
  live.textContent = "";
}
window.addEventListener("pagehide", clearSession);
window.addEventListener("pageshow", event => {
  if (event.persisted) render();
});
render();
fetch("/api/sofia-shift", { cache: "no-store", credentials: "same-origin" })
  .then(async response => {
    if (!response.ok) return;
    service = await response.json();
    document.documentElement.dataset.build = service.commit || "local";
    if (state.phase === "entry" && !state.thought) render();
  })
  .catch(() => {
    /* No thought content or errors are logged. Submission offers a retry. */
  });
