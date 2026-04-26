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

## 2026-04-25 — Nigel (cycle 2)

2026-04-25 22:11 nigel — focus axis: conversion-friction, top issue: stock photography is the score ceiling; testimonials pill-badge refinement moved credibility sub-score 6.0→6.5 but unlinked platform labels cap further gain

**Score delta:** 6.8 → 7.0 (+0.2)

**Top 3 priorities for cycle 3:**
1. Real photography — one original image of a finished product or Molly at work is the single highest-leverage change remaining; no code work moves the needle past 7.5 while all photography is stock
2. Price range ambiguity — add upper bounds to all three shop rows ("$75–$95", "$120–$200") to convert browse-stage visitors who need a budget signal before filling the form
3. Testimonial platform links — either link "via Etsy" badge to the actual Etsy shop or reword to honest plain text; pill-badge implies external verification that does not currently exist

## 2026-04-25 — Coordinator (cycle 3 dispatch)

2026-04-25 coordinator — scheduled: Builder, Spark, Scout, Nigel, focus: conversion-friction (Bug #5/#13 + AUDIT P2 price ranges + About Frame B + first-ever Scout pass + re-score), forbidden: Studio Strip, Testimonials, Mood-row layout/animation, Hero, new sections, testimonial copy, unattested photo swaps

## 2026-04-25 — Builder (cycle 3)

- **Bug #5 (HIGH):** `.mobile-nav-overlay` z-index raised from 999 → 1002 in style.css line 1411. Overlay now stacks above `.nav-hamburger` (z-index 1001) unconditionally. The existing JS `.nav-hidden` treatment (opacity:0, pointer-events:none) remains as a UX complement. Source: BUGS.md #5.
- **Bug #13 (MEDIUM):** Verified already resolved in HEAD — main.js line 249 `reveal-glow` observer uses `{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' }` matching `.reveal` exactly. No race condition possible. Marked closed in BUGS.md. Source: BUGS.md #13.
- **AUDIT P2:** Price upper bounds added to all three mood-row `.mood-price` elements in index.html. Bags: `$75–$220` (6–10 hr range); Quilts: `$120–$480` (15–30 hr range); Custom commissions: `$95+` (open-ended). Inherited existing `.mood-price` span/strong markup — no new component. Source: AUDIT P2 / AGENT-PLAN.md.
- **Files:** style.css (1 edit, line 1411), index.html (3 edits, lines 108/133/158), BUGS.md (#5/#13 closed), PLAN.md updated.
2026-04-25 builder — Bug #5 overlay z-index fixed (999→1002), Bug #13 verified resolved, AUDIT P2 price ranges shipped (per PLAN.md)

## 2026-04-25 — Spark (cycle 3)

2026-04-25 spark — Frame B: About section editorial refinement, ref SCOUT Finding 1 (editorial hand-set photo caption), replaced floating espresso corner badge + full-square copper accent

- **Pennsylvania Studio tag:** Moved from absolute corner badge (espresso pill, `-16px left / 24px top`) to a static caption strip below the photo — thin copper rule at top, serif-italic uppercase, walnut text. Replaced the badge entirely (same content, editorial direction). Mobile: centered.
- **Photo frame accent:** Replaced the full 120x120 floating copper square (`bottom:-20px; right:-20px`) with inset corner bracket marks via `::before` / `::after` on `.about-photo-frame`. Two L-shaped 28px copper strokes at top-left and bottom-right corners, 65% opacity. Sits inside `overflow:hidden` — no overflow risk. Net: one decorative element removed (the square), one added (brackets) — no piling on.
- **Molly signature:** Size raised 1.6rem → 2.1rem, `margin-top` 32px → 44px. More presence as a personal anchor without changing content.
- **About quote:** Size tightened `clamp(1.5rem, 2.5vw, 2rem)` → `clamp(1.45rem, 2.3vw, 1.9rem)`, `line-height` 1.45 → 1.5. Slightly quieter quote lets the signature land harder.
- **Section label hierarchy:** `.about-text-side .section-label` gets `letter-spacing: 0.25em` (up from 0.22em) and `margin-bottom: 22px` (up from 14px) for more breathing room above the quote.

## 2026-04-25 — Scout (cycle 3)

2026-04-25 15:00 scout — research angle: wow-interaction candidates (cursor trail / telescope zoom / scrollytelling / ambient sound / grain-reveal), 5 candidates cataloged, recommendation: copper-glow cursor trail (S effort, 10/10 palette fit), runner-up: layered telescope zoom (M effort, 9/10 fit), SCOUT.md written
