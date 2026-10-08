const root = document.querySelector("#app");
const live = document.querySelector("#status");
const privacy = document.querySelector("#privacy");
const diagMode = new URLSearchParams(location.search).get("diag") === "1";

document.querySelector("#privacy-toggle")?.addEventListener("click", () => privacy.showModal());
document.querySelector("#privacy-close")?.addEventListener("click", () => privacy.close());

const initial = () => ({
  phase: "arrival",
  thought: "",
  correction: "",
  rejected: [],
  field: null,
  shift: null,
  meta: null,
  compare: "before",
  rating: null,
  viewpoint: null,
  feedback: "",
  diagnostics: {},
});

let state = initial();
let service = null;
let busy = false;
let requestController = null;
let epoch = 0;
let fieldController = null;

const operatorLabels = {
  uncertainty: "NEIZVESNOST",
  counterfactual: "KONTRAFAKTUAL",
  causal_direction: "SMER UZROKA",
  alternative_model: "DRUGI MODEL",
  timescale: "DRUGA SKALA VREMENA",
  observer: "DRUGA POZICIJA",
  identity_evidence: "IDENTITET / DOKAZ",
};

const kindLabels = {
  reported: "TVOJ NAVOD",
  evidence: "DOKAZ KOJI NAVODIŠ",
  interpretation: "TUMAČENJE",
  inference: "ZAKLJUČAK",
  assumption: "PRETPOSTAVKA",
  uncertainty: "OTVORENO",
};

const stateLabels = {
  stable: "OPSTAJE",
  conditional: "POSTAJE USLOVNO",
  weakened: "SLABI",
  reframed: "MENJA POLOŽAJ",
  open: "OSTAJE OTVORENO",
};

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key.startsWith("on") && typeof value === "function") {
      node.addEventListener(key.slice(2).toLowerCase(), value);
    } else if (key === "class") {
      node.className = value;
    } else if (key === "value") {
      node.value = value;
    } else if (value !== false && value != null) {
      node.setAttribute(key, String(value));
    }
  }
  for (const child of children.flat(Infinity)) {
    if (child == null) continue;
    node.append(child instanceof Node ? child : document.createTextNode(String(child)));
  }
  return node;
}

const p = (text, cls = "") => el("p", { class: cls }, text);
const button = (label, action, cls = "option", attrs = {}) =>
  el("button", { type: "button", class: cls, onclick: action, ...attrs }, label);
const eyebrow = text => p(text, "eyebrow");
const primary = (label, action, attrs = {}) =>
  button(
    [el("span", {}, label), el("span", { class: "arrow", "aria-hidden": "true" }, "↗")],
    action,
    "primary",
    attrs
  );

function announce(message) {
  live.textContent = message;
}

function focusRoot() {
  root.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "instant" });
}

function showError(message) {
  root.querySelector(".error")?.remove();
  const node = p(message, "status-message error");
  node.setAttribute("role", "alert");
  root.append(node);
  node.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function setBusy(message) {
  busy = true;
  root.querySelectorAll("button, textarea").forEach(node => {
    node.disabled = true;
  });
  const veil = el(
    "section",
    { class: "processing", role: "status" },
    el("div", { class: "processing-line", "aria-hidden": "true" }),
    p(message, "processing-copy"),
    button(
      "Otkaži",
      () => {
        epoch += 1;
        requestController?.abort();
        busy = false;
        render();
      },
      "quiet"
    )
  );
  root.append(veil);
  announce(message);
}

async function request(payload) {
  const myEpoch = epoch;
  requestController = new AbortController();
  const timer = setTimeout(() => requestController?.abort(), 75000);
  try {
    const response = await fetch("/api/sofia-beyond", {
      method: "POST",
      credentials: "same-origin",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "X-Sofia-Experiment": "0002",
      },
      body: JSON.stringify(payload),
      signal: requestController.signal,
    });
    if (myEpoch !== epoch) return null;
    if (!response.headers.get("content-type")?.includes("application/json")) {
      throw new Error("Preview sesija više nije dostupna. Otvori privatni link ponovo.");
    }
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "SOFIA trenutno ne može da završi ovu transformaciju.");
    }
    return data;
  } catch (error) {
    if (myEpoch !== epoch) return null;
    throw new Error(
      error?.name === "AbortError"
        ? "Obrada je trajala predugo. Možeš pokušati ponovo."
        : error instanceof TypeError
          ? "Veza je prekinuta. Proveri internet i pokušaj ponovo."
          : error.message
    );
  } finally {
    clearTimeout(timer);
    if (myEpoch === epoch) busy = false;
  }
}

async function buildField({ rejectCurrent = false, correction = "" } = {}) {
  if (busy) return;
  if (state.thought.trim().length < 8) {
    showError("Napiši jednu celu misao.");
    return;
  }

  if (rejectCurrent && state.field?.edge) {
    const key = `${state.field.edge.operator}:${state.field.edge.proposition}`.toLocaleLowerCase();
    if (!state.rejected.includes(key)) state.rejected.push(key);
  }

  state.correction = correction.trim();
  setBusy(
    state.rejected.length
      ? "Ponovo čitam tvoju misao sa ispravkom."
      : "Razdvajam ono što si rekao od onoga što iz toga sledi."
  );

  try {
    const data = await request({
      action: "model",
      thought: state.thought,
      correction: state.correction,
      rejected: state.rejected,
    });
    if (!data) return;
    state.field = data.field;
    state.shift = null;
    state.meta = null;
    state.compare = "before";
    state.phase = "field";
    state.diagnostics = { ...state.diagnostics, model: data.diagnostics };
    render();
    focusRoot();
    announce("Privremeni model misli je spreman.");
  } catch (error) {
    render();
    showError(error.message);
  }
}

async function performShift(intervention = "apply", replacement = "") {
  if (busy || !state.field?.edge) return;
  if (intervention === "replace" && replacement.trim().length < 4) {
    showError("Napiši kako ta veza zapravo glasi.");
    return;
  }

  setBusy("Menjam samo jednu koordinatu i proveravam šta zaista ostaje.");

  try {
    const data = await request({
      action: "shift",
      thought: state.thought,
      field: state.field,
      intervention,
      replacement: replacement.trim(),
    });
    if (!data) return;
    state.shift = data.shift;
    state.meta = null;
    state.phase = "shift";
    state.compare = "before";
    state.diagnostics = { ...state.diagnostics, shift: data.diagnostics };
    render();
    focusRoot();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (state.phase !== "shift") return;
        state.compare = "after";
        const shell = root.querySelector(".semantic-shell");
        if (shell) applyFieldState(shell, true);
        root.querySelectorAll("[data-compare]").forEach(control => {
          control.setAttribute(
            "aria-pressed",
            String(control.dataset.compare === "after")
          );
        });
        root.querySelector(".after-copy")?.classList.remove("hidden");
        announce("Ista misao je promenila geometriju.");
      });
    });
  } catch (error) {
    render();
    showError(error.message);
  }
}

async function seekSecondOrder() {
  if (busy || !state.field || !state.shift) return;
  setBusy("Proveravam postoji li još jedan nivo koji je stvarno utemeljen.");

  try {
    const data = await request({
      action: "meta",
      thought: state.thought,
      field: state.field,
      shift: state.shift,
    });
    if (!data) return;
    state.meta = data.meta;
    state.phase = "meta";
    state.diagnostics = { ...state.diagnostics, meta: data.diagnostics };
    render();
    focusRoot();
    announce(
      data.meta.insight
        ? "Pronađena je jedna moguća meta-veza."
        : "Nema dovoljno osnova za dublje tumačenje."
    );
  } catch (error) {
    render();
    showError(error.message);
  }
}

function arrival() {
  const section = el("section", { class: "arrival fade-in" }, eyebrow("EXPERIMENT 0002 · THE OBSERVER"));

  if (!service) {
    section.append(
      el("h1", {}, "Proveravam privatni instrument."),
      p("Pre unosa proveravam da li je stvarna AI obrada dostupna.", "intro"),
      el("div", { class: "availability-line", "aria-hidden": "true" })
    );
    return section;
  }

  if (!service.available) {
    section.append(
      el("h1", {}, "Instrument još nije povezan."),
      p(service.message || "AI veza nije spremna.", "intro"),
      p("Unos je namerno zaključan. Nijedna misao neće otići nikuda dok privatna obrada nije aktivna.", "fine")
    );
    return section;
  }

  const input = el("textarea", {
    id: "thought",
    class: "thought-input",
    rows: 4,
    maxlength: 1800,
    placeholder: "Mislim da…",
    autocomplete: "off",
    spellcheck: "false",
    "aria-label": "Jedna misao",
    value: state.thought,
  });

  const count = el("span", {}, `${state.thought.length} / 1800`);
  input.addEventListener("input", () => {
    state.thought = input.value;
    count.textContent = `${input.value.length} / 1800`;
  });

  section.append(
    el("h1", {}, "Donesi jednu misao koju trenutno smatraš stvarnom."),
    p("Može biti uverenje, strah, odluka, predviđanje ili dilema. Dodaj razlog samo ako ti je važan.", "intro"),
    input,
    el("div", { class: "input-meta" }, el("span", {}, "Jedna misao. Bez biografije."), count),
    primary("Pogledaj odakle je vidiš", () => {
      state.rejected = [];
      state.correction = "";
      buildField();
    }),
    p("Sadržaj postoji samo tokom ove sesije. Osvežavanje stranice ga uklanja.", "fine")
  );

  return section;
}

function nodeOrder(nodes) {
  return [...nodes].sort((a, b) => {
    const centrality = kind => ({
      interpretation: 0,
      inference: 1,
      assumption: 2,
      uncertainty: 3,
      evidence: 4,
      reported: 5,
    })[kind] ?? 6;
    return b.weight - a.weight || centrality(a.kind) - centrality(b.kind);
  });
}

const orbit = [
  [50, 48],
  [22, 28],
  [77, 27],
  [82, 62],
  [24, 70],
  [49, 82],
  [50, 15],
];

function basePositions(nodes) {
  const positions = new Map();
  nodeOrder(nodes).forEach((node, index) => {
    const slot = orbit[index] || [50, 50];
    positions.set(node.id, { x: slot[0], y: slot[1] });
  });
  return positions;
}

function shiftedPositions(nodes, changes) {
  const base = basePositions(nodes);
  const positions = new Map();
  for (const node of nodes) {
    const original = base.get(node.id);
    const change = changes?.find(item => item.id === node.id);
    if (!change || change.state === "stable") {
      positions.set(node.id, original);
      continue;
    }
    const dx = original.x - 50;
    const dy = original.y - 48;
    const distance = Math.max(Math.hypot(dx, dy), 12);
    const ux = dx / distance;
    const uy = dy / distance;
    const push = {
      conditional: 5,
      weakened: 11,
      reframed: 7,
      open: 14,
    }[change.state] || 0;
    const rotate = change.state === "reframed" ? 7 : 0;
    positions.set(node.id, {
      x: Math.min(91, Math.max(9, original.x + ux * push - uy * rotate)),
      y: Math.min(88, Math.max(12, original.y + uy * push + ux * rotate)),
    });
  }
  return positions;
}

function linkChange(id) {
  return state.shift?.link_changes?.find(item => item.id === id) || null;
}

function drawLinks(shell, after) {
  const svg = shell.querySelector(".field-lines");
  if (!svg || !state.field) return;
  svg.replaceChildren();
  const positions = after
    ? shiftedPositions(state.field.nodes, state.shift?.node_changes)
    : basePositions(state.field.nodes);

  for (const link of state.field.links) {
    const from = positions.get(link.from);
    const to = positions.get(link.to);
    if (!from || !to) continue;
    const change = after ? linkChange(link.id) : null;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", String(from.x));
    line.setAttribute("y1", String(from.y));
    line.setAttribute("x2", String(to.x));
    line.setAttribute("y2", String(to.y));
    line.setAttribute("class", `field-link ${change ? `link-${change.state}` : ""}`);
    line.setAttribute("data-link", link.id);
    line.setAttribute("vector-effect", "non-scaling-stroke");
    svg.append(line);
  }
}

function applyFieldState(shell, after) {
  if (!state.field) return;
  const positions = after
    ? shiftedPositions(state.field.nodes, state.shift?.node_changes)
    : basePositions(state.field.nodes);

  for (const node of state.field.nodes) {
    const element = shell.querySelector(`[data-node="${node.id}"]`);
    if (!element) continue;
    const change = after
      ? state.shift?.node_changes?.find(item => item.id === node.id)
      : null;
    const position = positions.get(node.id);
    element.style.left = `${position.x}%`;
    element.style.top = `${position.y}%`;
    element.dataset.state = change?.state || "stable";
    element.querySelector(".node-state").textContent = change
      ? stateLabels[change.state]
      : kindLabels[node.kind];
    element.querySelector(".node-text").textContent = change?.after || node.text;
    element.querySelector(".node-why").textContent = change?.why || "";
    element.querySelector(".node-why").classList.toggle("visible", Boolean(change));
    const weight = change?.weight || node.weight;
    element.style.setProperty("--node-weight", String(weight));
  }

  shell.dataset.view = after ? "after" : "before";
  drawLinks(shell, after);
}

function semanticField({ interactiveShift = false } = {}) {
  fieldController?.disconnect?.();
  const shell = el(
    "div",
    {
      class: "semantic-shell",
      "data-view": state.compare,
      "aria-label": "Semantičko polje tvoje misli",
    },
    el("svg", {
      class: "field-lines",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "none",
      "aria-hidden": "true",
    }),
    el("div", { class: "field-origin", "aria-hidden": "true" }, "OBSERVER")
  );

  const edgeNodes = new Set(state.field?.edge?.affects_nodes || []);

  for (const node of state.field.nodes) {
    shell.append(
      el(
        "div",
        {
          class: `semantic-node ${edgeNodes.has(node.id) && state.phase !== "field" ? "edge-focus" : ""}`,
          "data-node": node.id,
          "data-kind": node.kind,
          "data-state": "stable",
          style: `--node-weight:${node.weight}`,
        },
        el("span", { class: "node-state" }, kindLabels[node.kind]),
        p(node.text, "node-text"),
        p("", "node-why")
      )
    );
  }

  requestAnimationFrame(() => {
    applyFieldState(shell, interactiveShift && state.compare === "after");
  });

  fieldController = new ResizeObserver(() => {
    drawLinks(shell, interactiveShift && state.compare === "after");
  });
  fieldController.observe(shell);

  return shell;
}

function modelStage() {
  const field = state.field;
  const section = el(
    "section",
    { class: "field-stage fade-in" },
    eyebrow("01 / SEMANTIČKO POLJE"),
    el("div", { class: "thought-echo" }, state.thought),
    semanticField()
  );

  if (!field.edge) {
    section.append(
      el("div", { class: "boundary" },
        p("GRANICA MODELA", "premise-label"),
        el("h2", {}, "Ovde neću izmišljati dubinu."),
        p(field.limitation, "connection"),
        field.clarification ? p(field.clarification, "test") : null,
        primary("Dodaj ono što nedostaje", () => showCorrection("context")),
        button("Završi", finish, "quiet")
      )
    );
    return section;
  }

  section.append(
    el("div", { class: "threshold" },
      p("U polju postoji jedno mesto sa nesrazmerno velikim uticajem.", "connection"),
      primary("Pokaži mi gde", () => {
        state.phase = "edge";
        render();
        focusRoot();
      })
    ),
    disclosure()
  );

  return section;
}

function disclosure() {
  const details = el(
    "details",
    { class: "inspection" },
    el("summary", {}, "Kako je SOFIA pročitala ovu misao")
  );
  const inventory = el("div", { class: "inventory" });
  for (const item of state.field.inventory) {
    inventory.append(
      el(
        "div",
        { class: "inventory-line" },
        el("span", { class: "inventory-basis" }, item.basis === "stated" ? "IZ ISKAZA" : item.basis === "unknown" ? "NEPOZNATO" : "HIPOTEZA"),
        p(item.text)
      )
    );
  }
  details.append(
    inventory,
    p(state.field.limitation, "fine"),
    button("Ispravi model", () => showCorrection("context"), "quiet")
  );
  return details;
}

function edgeStage() {
  const edge = state.field.edge;
  const section = el(
    "section",
    { class: "field-stage fade-in" },
    eyebrow("02 / THE EDGE"),
    el("div", { class: "thought-echo" }, state.thought),
    semanticField(),
    el(
      "div",
      { class: "edge-reading" },
      p(operatorLabels[edge.operator], "premise-label"),
      el("h2", {}, edge.proposition),
      p(edge.operation, "connection"),
      el("p", { class: "anchor" }, "Utemeljeno na tvojim rečima: ", el("q", {}, edge.anchor)),
      p(
        edge.confidence === "low"
          ? "Ovo je slaba hipoteza. Ti odlučuješ da li pripada tvojoj misli."
          : "Ovo je privremena strukturalna hipoteza. Ti odlučuješ da li pripada tvojoj misli.",
        "fine"
      ),
      el(
        "div",
        { class: "response-options" },
        primary("Da. Pomeri samo ovo.", () => performShift("apply")),
        button("Ne. Pogrešna veza.", () => showCorrection("reject")),
        button("Blizu je — ali glasi drugačije.", () => showCorrection("replace"))
      )
    )
  );

  return section;
}

function showCorrection(mode) {
  if (busy) return;
  root.querySelector(".editor")?.remove();
  const rejecting = mode === "reject";
  const replacing = mode === "replace";

  const input = el("textarea", {
    id: "correction",
    class: "thought-input editor-input",
    rows: 3,
    maxlength: replacing ? 600 : 1000,
    autocomplete: "off",
    spellcheck: "false",
    value: replacing ? state.field?.edge?.proposition || "" : "",
    placeholder: rejecting ? "Šta je ovde pogrešno povezano?" : "Šta treba uzeti u obzir?",
  });

  const editor = el(
    "section",
    { class: "editor fade-in" },
    p(
      replacing
        ? "Napiši precizniju verziju ovog oslonca."
        : rejecting
          ? "Odbaciću ovu vezu i ponovo izgraditi model."
          : "Dodaj samo ono što menja strukturu.",
      "premise-label"
    ),
    input,
    el(
      "div",
      { class: "actions" },
      primary(replacing ? "Probaj sa ovom verzijom" : "Pogledaj ponovo", () => {
        if (replacing) {
          performShift("replace", input.value);
        } else {
          buildField({ rejectCurrent: rejecting, correction: input.value });
        }
      }),
      button("Otkaži", () => editor.remove(), "quiet")
    )
  );

  root.append(editor);
  input.focus({ preventScroll: true });
  editor.scrollIntoView({ block: "center", behavior: "smooth" });
}

function setComparison(view) {
  state.compare = view;
  const after = view === "after";
  const shell = root.querySelector(".semantic-shell");
  if (shell) applyFieldState(shell, after);
  root.querySelectorAll("[data-compare]").forEach(control => {
    control.setAttribute("aria-pressed", String(control.dataset.compare === view));
  });
  root.querySelector(".after-copy")?.classList.toggle("hidden", !after);
}

function shiftStage() {
  const section = el(
    "section",
    { class: "field-stage fade-in" },
    eyebrow("03 / OBSERVER SHIFT"),
    el("div", { class: "thought-echo" }, state.thought),
    semanticField({ interactiveShift: true }),
    el(
      "div",
      { class: "comparison", role: "group", "aria-label": "Uporedi istu misao" },
      button("PRE", () => setComparison("before"), "", {
        "data-compare": "before",
        "aria-pressed": state.compare === "before",
      }),
      button("POSLE", () => setComparison("after"), "", {
        "data-compare": "after",
        "aria-pressed": state.compare === "after",
      })
    ),
    el(
      "section",
      { class: `after-copy ${state.compare === "after" ? "" : "hidden"}` },
      p("NOVA FORMULACIJA", "premise-label"),
      el("h2", {}, state.shift.transformed),
      p(state.shift.difference, "connection"),
      p("Šta bi razlikovalo ova dva pogleda?", "fine"),
      p(state.shift.test, "test"),
      el(
        "div",
        { class: "actions" },
        primary("Proveri postoji li još jedan nivo", seekSecondOrder),
        button("Ovo mi je dovoljno", finish, "quiet")
      )
    )
  );
  return section;
}

function metaStage() {
  const section = el(
    "section",
    { class: "meta-stage fade-in" },
    eyebrow("04 / DRUGI RED"),
    el("div", { class: "thought-echo" }, state.thought)
  );

  if (state.meta.insight) {
    section.append(
      p("Ne o temi. O načinu na koji je misao bila sastavljena.", "intro"),
      el("div", { class: "meta-observation" },
        el("h1", {}, state.meta.insight.observation),
        p(state.meta.insight.relation, "connection"),
        el("p", { class: "anchor" }, "Utemeljeno na: ", el("q", {}, state.meta.insight.anchor)),
        p(
          state.meta.insight.confidence === "low"
            ? "Niska sigurnost tumačenja."
            : "Umerena sigurnost tumačenja.",
          "fine"
        )
      )
    );
  } else {
    section.append(
      el("h1", {}, "Ovde je tačnije stati."),
      p(state.meta.stop_reason, "intro"),
      p("Ne moramo pronaći dublji sloj da bi prvi pomeraj bio stvaran.", "fine")
    );
  }

  section.append(primary("Vrati se svojoj misli", finish));
  return section;
}

function finish() {
  if (busy) return;
  state.phase = "rating";
  render();
  focusRoot();
}

function ratingStage() {
  const section = el(
    "section",
    { class: "finish fade-in" },
    eyebrow("05 / POVRATAK"),
    el("h1", {}, "Da li sada vidiš nešto u ovoj misli što pre nekoliko minuta nisi mogao da vidiš?")
  );

  const ratings = el("div", { class: "rating", role: "group" });
  for (const value of ["Da", "Delimično", "Ne"]) {
    ratings.append(
      button(value, () => {
        state.rating = value;
        render();
      }, "", { "aria-pressed": state.rating === value })
    );
  }
  section.append(ratings);

  if (state.rating) {
    section.append(
      p("Da li se promenilo ono što veruješ — ili mesto sa kojeg to posmatraš?", "return-question")
    );
    const views = el("div", { class: "viewpoint", role: "group" });
    for (const value of ["Uverenje", "Pozicija", "Oboje", "Ništa"]) {
      views.append(
        button(value, () => {
          state.viewpoint = value;
          render();
        }, "", { "aria-pressed": state.viewpoint === value })
      );
    }
    section.append(views);
  }

  if (state.rating && state.viewpoint) {
    const input = el("textarea", {
      id: "feedback",
      class: "thought-input feedback-input",
      rows: 2,
      maxlength: 800,
      autocomplete: "off",
      value: state.feedback,
      placeholder: "Šta se promenilo? (nije obavezno)",
      oninput: event => {
        state.feedback = event.target.value;
      },
    });
    section.append(
      input,
      p("Ovaj utisak ostaje samo u memoriji ove stranice.", "fine"),
      primary("Završi i obriši", () => {
        clearSession();
        state.phase = "done";
        render();
        focusRoot();
      })
    );
  }

  return section;
}

function doneStage() {
  return el(
    "section",
    { class: "finish done fade-in" },
    eyebrow("EXPERIMENT 0002 · COMPLETE"),
    el("h1", {}, "Misao se vratila tebi."),
    el("div", { class: "end-mark", "aria-hidden": "true" }),
    p("Sadržaj aktivne sesije je uklonjen iz aplikacije.", "fine")
  );
}

function diagnostics() {
  if (!diagMode) return null;
  const d = state.diagnostics;
  return el(
    "aside",
    { class: "diagnostics", "aria-label": "Owner diagnostics" },
    p("OWNER DIAGNOSTICS", "premise-label"),
    el("dl", {},
      el("dt", {}, "build"), el("dd", {}, service?.commit || "—"),
      el("dt", {}, "provider"), el("dd", {}, service?.provider || "—"),
      el("dt", {}, "phase"), el("dd", {}, state.phase),
      el("dt", {}, "operator"), el("dd", {}, state.field?.edge?.operator || "—"),
      el("dt", {}, "model latency"), el("dd", {}, d.model?.latencyMs ? `${d.model.latencyMs} ms` : "—"),
      el("dt", {}, "shift latency"), el("dd", {}, d.shift?.latencyMs ? `${d.shift.latencyMs} ms` : "—"),
      el("dt", {}, "candidates"), el("dd", {}, d.model?.candidateCount ?? "—"),
      el("dt", {}, "validation"), el("dd", {}, d.shift?.validation || d.model?.validation || "—")
    )
  );
}

function render() {
  fieldController?.disconnect?.();
  root.replaceChildren();

  if (state.phase === "arrival") root.append(arrival());
  else if (state.phase === "field") root.append(modelStage());
  else if (state.phase === "edge") root.append(edgeStage());
  else if (state.phase === "shift") root.append(shiftStage());
  else if (state.phase === "meta") root.append(metaStage());
  else if (state.phase === "rating") root.append(ratingStage());
  else if (state.phase === "done") root.append(doneStage());

  const diag = diagnostics();
  if (diag) root.append(diag);
}

function clearSession() {
  epoch += 1;
  requestController?.abort();
  requestController = null;
  fieldController?.disconnect?.();
  fieldController = null;
  busy = false;
  state = initial();
  live.textContent = "";
}

window.addEventListener("pagehide", clearSession);
window.addEventListener("pageshow", event => {
  if (event.persisted) render();
});

render();

fetch("/api/sofia-beyond", {
  cache: "no-store",
  credentials: "same-origin",
})
  .then(async response => {
    if (!response.ok) throw new Error("UNAVAILABLE");
    service = await response.json();
    document.documentElement.dataset.build = service.commit || "local";
    if (state.phase === "arrival" && !state.thought) render();
  })
  .catch(() => {
    service = {
      available: false,
      message: "Privatni preview nije dostupan. Otvori važeći preview link i pokušaj ponovo.",
    };
    if (state.phase === "arrival") render();
  });
