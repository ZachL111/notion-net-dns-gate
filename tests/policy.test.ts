import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
  {
    "name": "case_1",
    "demand": 55,
    "capacity": 104,
    "latency": 14,
    "risk": 21,
    "weight": 5,
    "score": 49,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 61,
    "capacity": 88,
    "latency": 27,
    "risk": 20,
    "weight": 8,
    "score": 32,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 106,
    "capacity": 82,
    "latency": 17,
    "risk": 11,
    "weight": 5,
    "score": 193,
    "decision": "accept"
  }
];

for (const item of cases) {
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
