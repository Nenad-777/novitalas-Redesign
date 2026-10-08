import test from "node:test";
import assert from "node:assert/strict";
import {
  FieldDraftSchema,
  selectEdge,
  validateMeta,
  validateShift,
  type ShiftInput,
} from "../../server/sofia/beyond.ts";

const thought =
  "Ljudi hvale projekat, zato mislim da će ga koristiti kada ga objavim.";

const draft = () =>
  FieldDraftSchema.parse({
    nodes: [
      {
        id: "e1",
        text: "Ljudi hvale projekat.",
        kind: "reported",
        quote: "Ljudi hvale projekat",
        weight: 2,
      },
      {
        id: "c0",
        text: "Ljudi će koristiti projekat.",
        kind: "interpretation",
        quote: null,
        weight: 4,
      },
      {
        id: "a1",
        text: "Pohvala predviđa stvarnu upotrebu.",
        kind: "assumption",
        quote: null,
        weight: 3,
      },
    ],
    links: [
      {
        id: "l1",
        from: "e1",
        to: "c0",
        relation: "supports",
        basis: "inferred",
        quote: null,
        strength: 4,
      },
    ],
    inventory: [
      {
        kind: "reported_fact",
        basis: "stated",
        text: "Učesnik navodi pohvale.",
        quote: "Ljudi hvale projekat",
      },
      {
        kind: "identity_stake",
        basis: "unknown",
        text: "Nije poznato.",
        quote: null,
      },
    ],
    candidates: [
      {
        operator: "alternative_model",
        proposition: "Pohvala se tretira kao dovoljan model buduće upotrebe.",
        anchor: "Ljudi hvale projekat",
        operation: "Odvoji društvenu reakciju od ponašanja posle objave.",
        alternative:
          "Pohvala i stvarna upotreba mogu biti dva različita signala.",
        test: "Da li ljudi kojima je ponuđena probna verzija zaista nastavljaju da je koriste?",
        affects_nodes: ["c0", "a1"],
        affects_links: ["l1"],
        confidence: "moderate",
        scores: {
          grounding: 4,
          leverage: 4,
          specificity: 4,
          reversibility: 4,
          speculation: 0,
        },
      },
    ],
    limitation:
      "Pohvala je prijavljena, ali buduća upotreba nije još posmatrana.",
    clarification: null,
  });

test("selects one grounded Observer Shift and hides internal scores", () => {
  const field = selectEdge(draft(), thought, "", []);
  assert.equal(field.edge?.operator, "alternative_model");
  assert.equal("scores" in field.edge!, false);
  assert.equal(field.inventory[1].basis, "unknown");
});

test("never lets a candidate rewrite participant-reported material", () => {
  const field = selectEdge(draft(), thought, "", []);
  const input: ShiftInput = {
    action: "shift",
    thought,
    field,
    intervention: "apply",
    replacement: "",
  };

  const result = validateShift(input, {
    node_changes: [
      {
        id: "e1",
        state: "weakened",
        after: "Ljudi možda ne hvale projekat.",
        why: "wrong",
        weight: 1,
      },
      {
        id: "c0",
        state: "conditional",
        after: "Upotreba ostaje mogućnost, ne posledica pohvale.",
        why: "Veza više nije dovoljna.",
        weight: 2,
      },
      {
        id: "a1",
        state: "weakened",
        after: "Pohvala je samo jedan signal.",
        why: "Alternativni model odvaja signale.",
        weight: 2,
      },
    ],
    link_changes: [
      {
        id: "l1",
        state: "weakened",
        why: "Pohvala više nije dovoljan oslonac.",
      },
    ],
    transformed: "Pohvala postoji; buduća upotreba ostaje otvorena.",
    difference: "Promenila se veza, ne prijavljena pohvala.",
    test: "Posmatraj stvarnu upotrebu nakon objave.",
  });

  assert.equal(result.node_changes[0].state, "stable");
  assert.equal(result.node_changes[0].after, field.nodes[0].text);
  assert.equal(result.node_changes[0].weight, field.nodes[0].weight);
});

test("rejects fabricated stated material and ungrounded second-order depth", () => {
  const broken = draft();
  broken.nodes[0].quote = "Imamo hiljadu aktivnih korisnika.";
  broken.inventory[0].quote = "Imamo hiljadu aktivnih korisnika.";

  const field = selectEdge(broken, thought, "", []);
  assert.equal(field.nodes[0].kind, "inference");
  assert.equal(field.inventory[0].basis, "inferred");

  const meta = validateMeta(thought, {
    insight: {
      observation: "Sigurnost dolazi iz identiteta.",
      anchor: "Od detinjstva se dokazujem",
      relation: "Ovo bi bio drugi red.",
      confidence: "low",
    },
    stop_reason: "Fallback.",
  });
  assert.equal(meta.insight, null);
});

test("rejected structural edge cannot be selected again verbatim", () => {
  const field = selectEdge(draft(), thought, "", [
    "alternative_model:Pohvala se tretira kao dovoljan model buduće upotrebe.",
  ]);
  assert.equal(field.edge, null);
});
