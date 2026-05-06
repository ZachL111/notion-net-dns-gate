# Review Journal

The cases below are the review handles I would use before changing the implementation.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its networking focus without claiming live deployment or external usage.

## Cases

- `baseline`: `packet span`, score 143, lane `ship`
- `stress`: `retry pressure`, score 123, lane `watch`
- `edge`: `route drift`, score 172, lane `ship`
- `recovery`: `socket risk`, score 198, lane `ship`
- `stale`: `packet span`, score 229, lane `ship`

## Note

A future change should add new cases before it changes the scoring rule.
