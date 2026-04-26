# Agent Changelog

## 2026-04-25 — Builder (smoke test, cycle 1)

- **Fix:** `@keyframes studio-scroll` translateX changed from `calc(-270px * 5 - 20px * 4)` to `calc(-270px * 5 - 20px * 5)` in style.css line 1330.
- **Why:** The 5-item strip has a 20px CSS gap between every adjacent item including between item 5 and the duplicate item 6. The previous calculation omitted that final gap, causing a 20px jump at the loop boundary — visible as a stutter on desktop. Correcting to 5 gaps produces a seamless infinite scroll.
- **Scope:** 1 character changed in 1 file.
- **AUDIT source:** Priority 3.
- **Plan commit:** 77c56ea | Code commit: (this commit)

## 2026-04-25 — Nigel (smoke test, cycle 1)

- nigel — focus axis: conversion-friction, top issue: disclaimered block of five perfect ratings actively destroys trust at the testimonials section

## 2026-04-25 — Coordinator (cycle 2 dispatch)

- 2026-04-25 coordinator — scheduled: Builder, Spark, Pixel, Nigel, focus: conversion-friction (kill criticals + Frame B testimonial refinement + mobile alignment + re-score), forbidden: Studio Strip, About section, new sections, testimonial copy edits

## 2026-04-25 — Builder (cycle 2)

- **Audit:** All three BUGS.md targets (cycle 2) verified already shipped in commit 62e166c (prior Builder pass).
- **Bug #1 (CRITICAL):** `href="#"` smooth-scroll guard — main.js line 116, `if (href === '#' || href === '')` returns early, calls `window.scrollTo({ top: 0, behavior: 'smooth' })`. Console clean. Source: BUGS.md #1.
- **Bug #2 (CRITICAL):** `?submitted=1` → `#form-success` reveal — main.js lines 210-219, `URLSearchParams` check on load, `successDiv.style.display = 'block'`, `scrollIntoView`, `history.replaceState` URL cleanup. Source: BUGS.md #2.
- **Bug #3 (HIGH):** Hero Ken Burns parallax — parallax writes CSS variable `--parallax-y` (main.js line 45); style.css line 142 composes `scale(1.05) translateY(var(--parallax-y))`. No inline transform overwrite. Source: BUGS.md #3.
- **No code changes shipped** — all fixes already in HEAD. Changelog entry and PLAN.md only.
- 2026-04-25 11:00 builder — verified BUGS.md #1/#2/#3 already fixed in 62e166c; no regressions found (per PLAN.md)
