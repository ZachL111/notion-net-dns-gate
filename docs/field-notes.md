# Field Notes

The useful part of this repository is the small rule set around packet span and route drift.

The domain cases cover `packet span`, `retry pressure`, `route drift`, and `socket risk`. They sit beside the smaller starter fixture so the project has both a compact scoring check and a domain-flavored review check.

`stale` tells me the happy path still works. `stress` tells me whether the guardrail still has teeth.

The language-specific addition keeps the review model typed and compiled before execution.
