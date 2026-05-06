function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 44, slack: 53, drag: 29, confidence: 89 };
equal(domainReviewScore(item), 143);
equal(domainReviewLane(item), "ship");
