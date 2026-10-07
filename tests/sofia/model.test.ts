import test from "node:test";
import assert from "node:assert/strict";
import {
  selectShift,
  validateTransformation,
  InputSchema,
  type ShiftInput,
} from "../../server/sofia/model.ts";

const thought = "Ljudi hvale moj projekat, zato mislim da će ga koristiti.";
const candidate = {
  premise: "Pohvala znači spremnost da se projekat koristi.",
  anchor: "Ljudi hvale moj projekat",
  connection: "Zaključak bi mogao zavisiti od veze između pohvale i upotrebe.",
  test: "Da li isti ljudi koriste probnu verziju kada im je ponuđena?",
  type: "hidden_assumption" as const,
  affects: ["c0"],
  confidence: "low" as const,
  scores: {
    grounding: 4,
    leverage: 4,
    specificity: 4,
    parsimony: 4,
    speculation: 0,
  },
};
const draft = () => ({
  nodes: [
    {
      id: "c0",
      text: "Ljudi će koristiti projekat.",
      kind: "interpretation" as const,
      quote: null,
    },
    {
      id: "e1",
      text: "Ljudi hvale projekat.",
      kind: "reported" as const,
      quote: "Ljudi hvale moj projekat",
    },
  ],
  inventory: [
    {
      kind: "emotional_stake" as const,
      basis: "unknown" as const,
      text: "Nije poznato.",
      quote: null,
    },
  ],
  candidates: [candidate],
  limitation: "Pohvala je tvoj navod; ne znamo da li sledi upotreba.",
  clarification: null,
});

test("keeps only the grounded structural hinge, with no internal scores exposed", () => {
  const d = draft();
  d.candidates.unshift({
    ...candidate,
    premise: "Uspeh ti određuje identitet.",
    scores: {
      grounding: 0,
      leverage: 4,
      specificity: 4,
      parsimony: 4,
      speculation: 4,
    },
  });
  const m = selectShift(d, thought, "", []);
  assert.equal(m.shift?.premise, candidate.premise);
  assert.equal("scores" in m.shift!, false);
  assert.equal(m.inventory[0].basis, "unknown");
});
test("rejects fabricated source quotes and downgrades ungrounded reports", () => {
  const d = draft();
  d.candidates[0] = { ...candidate, anchor: "Već imamo 100 kupaca." };
  d.nodes[1].quote = "Plaća nam 100 kupaca.";
  const m = selectShift(d, thought, "", []);
  assert.equal(m.shift, null);
  assert.equal(m.nodes[1].kind, "inference");
});
test("a rejected premise does not survive re-ranking", () => {
  assert.equal(
    selectShift(draft(), thought, "", [candidate.premise]).shift,
    null
  );
});
test("user correction can supply grounding; actual reports cannot depend on a hypothesis", () => {
  const d = draft();
  d.candidates[0] = { ...candidate, anchor: "Nisu još probali projekat." };
  assert.ok(selectShift(d, thought, "Nisu još probali projekat.", []).shift);
  d.candidates[0].affects = ["e1"];
  assert.equal(
    selectShift(d, thought, "Nisu još probali projekat.", []).shift,
    null
  );
});
test("removing a premise preserves reported evidence and stable node identities", () => {
  const input: ShiftInput = {
    action: "shift",
    thought,
    model: selectShift(draft(), thought, "", []),
    intervention: "remove",
    replacement: "",
  };
  const result = validateTransformation(input, {
    changes: [
      {
        id: "c0",
        state: "unsupported",
        after: "Upotreba tek treba da se proveri.",
        why: "Pohvala nije test upotrebe.",
      },
      {
        id: "e1",
        state: "unsupported",
        after: "Nema pohvale.",
        why: "Pogrešno.",
      },
    ],
    conclusion: "Pohvala postoji; upotreba je otvoreno pitanje.",
    consequence: "Menja se veza sa predviđanjem.",
    test: "Ponuditi probnu verziju.",
  });
  assert.equal(result.changes[1].state, "unchanged");
  assert.equal(result.changes[1].after, input.model.nodes[1].text);
  assert.throws(
    () =>
      validateTransformation(input, {
        ...result,
        changes: [result.changes[0], result.changes[0]],
      }),
    /INVALID_TRANSFORMATION/
  );
});
test("bounded input refuses empty thoughts and excessive personal text", () => {
  assert.equal(
    InputSchema.safeParse({ action: "model", thought: "x" }).success,
    false
  );
  assert.equal(
    InputSchema.safeParse({ action: "model", thought: "x".repeat(1801) })
      .success,
    false
  );
});
