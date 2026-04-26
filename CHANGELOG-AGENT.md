# Agent Changelog

## 2026-04-25 — Spark (validation run, cycle 1) — Frame B: Clarity & Whitespace

- **Section touched:** Testimonials
- **Removed:** Auto-scrolling carousel of 10 cards (5 fabricated + 5 duplicates), animated `testimonial-scroll` keyframes, 5-star star ratings, `.author-dot` avatars, `.testimonials-disclaimer` disclaimer text, and all associated CSS (~90 lines)
- **Added:** Static editorial two-column quote grid (`social-proof-grid`), queue indicator line ("Currently working on 3 custom orders"), clean typographic hierarchy with no animation
- **SCOUT reference:** SCOUT Finding 2C + 2A — "Replace fabricated testimonials with first customer framing" and "Currently making counter increases inquiry conversion" (SCOUT-REPORT.md)
- **Why:** Nigel flagged this section as the top trust-destroyer (cycle 1). SCOUT confirmed fabricated testimonials score 5.8 and are a net negative. Frame B editorial restraint: generous whitespace, ruled grid lines as the only decoration, honest framing.
- **Frame:** B (Clarity & Whitespace) — first Spark entry, per alternation rule
- **MEMORY constraints applied:** simplicity_over_polish (replaced, did not pile on), unique_design (no teal, no cards, no rounded corners, not template), feedback_no_ghost_numbers (none added)

## 2026-04-25 — Builder (smoke test, cycle 1)

- **Fix:** `@keyframes studio-scroll` translateX changed from `calc(-270px * 5 - 20px * 4)` to `calc(-270px * 5 - 20px * 5)` in style.css line 1330.
- **Why:** The 5-item strip has a 20px CSS gap between every adjacent item including between item 5 and the duplicate item 6. The previous calculation omitted that final gap, causing a 20px jump at the loop boundary — visible as a stutter on desktop. Correcting to 5 gaps produces a seamless infinite scroll.
- **Scope:** 1 character changed in 1 file.
- **AUDIT source:** Priority 3.
- **Plan commit:** 77c56ea | Code commit: (this commit)

## 2026-04-25 — Nigel (smoke test, cycle 1)

- nigel — focus axis: conversion-friction, top issue: disclaimered block of five perfect ratings actively destroys trust at the testimonials section
