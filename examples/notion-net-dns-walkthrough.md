# Notion Net DNS Gate Walkthrough

This note is the quickest way to read the extra review model in `notion-net-dns-gate`.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | packet span | 143 | ship |
| stress | retry pressure | 123 | watch |
| edge | route drift | 172 | ship |
| recovery | socket risk | 198 | ship |
| stale | packet span | 229 | ship |

Start with `stale` and `stress`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The next useful expansion would be a malformed fixture around retry pressure and socket risk.
