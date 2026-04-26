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

## 2026-04-25 — Spark (cycle 2)

- 2026-04-25 spark — Frame B: source-label-to-stars pairing, ref SCOUT Finding 7 (Etsy review count as social proof stamp), replaced orphaned footer attribution
- **What changed:**
  - HTML: Wrapped `testimonial-stars` + `testimonial-source` in new `.testimonial-rating-row` (flex, space-between) on all 10 cards (5 primary + 5 loop duplicates). Source label now sits flush-right at the top of each card, paired with the star row — reads as a verification stamp, not a disclaimer.
  - CSS: Added `.testimonial-rating-row` rule (flex, align-items: center, space-between, margin-bottom: 20px). Removed `margin-bottom` from `.testimonial-stars` (it now lives on the row). Updated `.testimonial-source` — removed `margin-top: 6px` (no longer relevant), added a subtle copper border-radius pill (`border: 1px solid rgba(207,139,103,0.3)`, `padding: 2px 6px`) so the badge reads as a stamp rather than plain text.
  - CSS: `.testimonials-disclaimer` softened from `opacity: 0.7 / font-size: 0.8125rem` to `opacity: 0.45 / font-size: 0.75rem` — present for honesty, visually receded so it does not compete with card content.
  - Bug #12 fix: `.testimonials-track` padding changed from `0 40px 12px` to `0 0 12px`. The left 40px padding was creating width asymmetry on the `max-content` track, causing the `translateX(-50%)` seamless loop to jump on narrow (375px) viewports. Removed in both desktop and mobile media query overrides.
- **Replaced:** The author-block source label (bottom of card, below name/location) was removed and replaced by the top-of-card rating-row version. No net addition — one label per card, repositioned.

## 2026-04-25 — Pixel (cycle 2)

**Mobile center-alignment sweep (375px + 414px):**
- Hero (headline, subhead, CTA stack): centered via .hero-content text-align:center + .hero-actions justify-content:center on mobile — aligned
- Mood rows (text + accent bar): Bug #14 confirmed fixed (line 1545 .mood-row.reverse .mood-text::before left:0 right:auto) — all 3 bars left-aligned on single-column — aligned
- Mood photo wipe-in: Bug #8 implemented — added mobile clip-path inset(0 0 100% 0) initial state + clip-path inset(0 0 0 0) on reveal-glow, rises upward on scroll — fixed
- Process panels (horizontal scroll-lock): .process-fp-content left:0 right:0 text-align:center align-items:center on mobile — aligned; snap not at risk (runway 300vh, no changes made) — aligned
- Studio strip: on cooldown — not touched. No alignment issues visible from CSS audit.
- Custom-CTA trust strip: .custom-cta text-align:center at base + padding:80px 24px mobile; inner max-width:700px margin:0 auto — aligned
- Testimonials (Spark's rating-row): .testimonial-rating-row flex space-between; at 300px card width stars (~88px) + badge (~72px) well under card width, no wrap — aligned
- Contact form + trust block: .contact-trust margin:0 auto text-align:center; .contact-inner max-width:660px margin:0 auto — aligned; form fields left-aligned (correct UX)
- Footer (top + bottom row): .footer-inner grid 1fr text-align:center; .footer-bottom justify-content:center — aligned
- Nav / sticky elements: nav-logo min-height:44px, nav-cta min-height:44px, btn-walnut min-height:44px, process-dot min-height:44px — tap targets passing

**Bugs fixed this cycle:**
- Bug #8: mood-photo mobile wipe-in direction corrected (upward rise via clip-path, mobile-only, prefers-reduced-motion safe)
- Bug #14: already fixed in prior cycle — confirmed present and correct

**Files touched:** style.css (1 edit in @media max-width:768px block)

2026-04-25 14:00 pixel — mood-photo mobile wipe-in clip-path direction fixed (rises up, Bug #8); full alignment sweep 375/414px all sections confirmed
