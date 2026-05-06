import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 44, slack: 53, drag: 29, confidence: 89 };
assert.equal(domainReviewScore(item), 143);
assert.equal(domainReviewLane(item), "ship");
