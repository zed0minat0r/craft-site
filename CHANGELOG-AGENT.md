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

## 2026-04-25 — Pixel (cycle 3 hotfix)

**Diagnosed: vertical centering drift across all 4 panels**
- Root cause: `.process-fp-content` used `position: absolute; bottom: clamp(180px, 28vh, 320px)`, anchoring text from the bottom. Each panel's text block has a different height (Panel 3 shortest, Panel 4 longest). With a fixed bottom anchor, the *top edge* of the text block sits at a different Y on every panel — creating the appearance of misaligned content even though bottom offset is identical.
- Fix: Changed desktop rule to `top: 50%; transform: translateY(-50%)`. Text block's center is now exactly viewport center on all 4 panels. Mobile override updated identically (was `bottom: clamp(220px, 38vh, 360px)`, now `top: 50%; transform: translateY(-50%)`).

**Diagnosed: text readability**
- Root cause #1: `.process-fp-desc` was `font-weight: 300` — too light for text over a photo overlay.
- Root cause #2: Desc color `rgba(247,242,236,0.82)` — 82% opacity cream is marginal contrast over a semi-transparent dark overlay on varying-brightness photos.
- Root cause #3: `.process-fp-overlay` gradient bottomed out at 15% opacity at 100% position — nearly transparent at the edges where text can appear.
- Root cause #4: `font-size: clamp(0.9rem, 1.4vw, 1.05rem)` — 0.9rem floor was too small.
- Fix: Bumped desc to `font-weight: 400`, color `rgba(247,242,236,0.96)`, font-size floor to `clamp(1rem, 1.5vw, 1.1rem)`, line-height 1.8→1.9. Overlay gradient bottom stop raised from 15%→30% opacity (better contrast backing behind text).

**Files:** style.css lines 568-576 (overlay), 588-595 (fp-content desktop), 620-626 (fp-desc), 1581-1592 (fp-content mobile)

2026-04-25 pixel — How It's Made panels: vertical center fixed (bottom anchor → top:50%/translateY(-50%) all 4 panels), readability fixed (weight 300→400, opacity 0.82→0.96, overlay floor 15%→30%)

## 2026-04-25 — Nigel (cycle 3)

2026-04-25 23:28 nigel — focus axis: conversion-friction, top issue: repeated pexels-7998221 across About + Process closing panel is the primary remaining trust blocker

**Cycle 3 delta (+0.2 from 7.0):**
- Shop sub-score 6.5 → 7.0: Price ranges ($75–$220 bags, $120–$480 quilts) give buyers budget fit at a glance. "Starting from" open-ended anxiety is resolved for two of three rows.
- About sub-score 7.5 → 7.8: Caption strip + hairline divider, L-bracket corners, and 2.1rem signature combine into a convincing personal-maker anchor. This is the best single-section improvement of the cycle.
- Process sub-score 7.0 → 7.3: Vertical centering fix is correct (top:50%/translateY(-50%) all 4 panels). Readability improvements (weight 400, opacity 0.96, overlay floor 30%) make description copy land.
- Mobile sub-score 6.8 → 7.0: Process panel centering consistency improves perceived quality on small screens.

**Top 3 priorities — cycle 4:**
1. CRITICAL: Real photography — repeated pexels-7998221 in both About and Process closing panel is the ceiling blocker. One real photo outweighs any remaining code change.
2. HIGH: Link "via Etsy" source badge to actual Etsy shop URL (cooldown ends this cycle).
3. MEDIUM: Replace "Bags, quilts & commissions welcome" in Custom CTA trust strip with a shipping or returns guarantee.

## 2026-04-25 — Coordinator (cycle 4 dispatch)

2026-04-25 coordinator — scheduled: Builder, Spark, Pixel, Nigel, focus: conversion-friction + first wow-layer (AUDIT P2 honest source labels + AUDIT P3 trust-strip commitment + SCOUT cursor-trail + Custom CTA Frame B + tap-target fixes + re-score), forbidden: Studio Strip, About, Process panels, Hero, Mood rows, Shop price text, fabricated Etsy URL, fabricated guarantees

## 2026-04-26 — Builder (cycle 4)

2026-04-26 builder — AUDIT P2: re-labeled 3 "via Etsy" + 1 "via Instagram" pills to "past commission client" across primary + duplicate testimonial cards (index.html lines 407/449/470/505/515/520); removed pill border from .testimonial-source in style.css (lines 1005-1016); AUDIT P3: replaced "Bags, quilts & commissions welcome" with "Hand-finished in Pennsylvania" (index.html line 378); SCOUT Candidate C: copper-glow cursor trail shipped as new file js/cursor-trail.js (42 lines, pointer:fine + prefers-reduced-motion guards, rgba(207,139,103) decay 0.025/frame), loaded via defer script tag at end of body (index.html line 632). AUDIT source: AGENT-PLAN.md cycle 4 Agent 1. SCOUT source: SCOUT.md Candidate C. (per PLAN.md)

## 2026-04-26 — Spark (cycle 4)

2026-04-26 spark — Frame B: Custom CTA spacing hierarchy + watermark removal, ref SCOUT Finding 4 (warm trust block clarity pattern), replaced ::before "Custom" ghost watermark (Nigel cycle 3 flag). eyebrow letter-spacing 0.22em→0.25em + margin 20→24px; title margin 20→28px; body font-weight 300→400 + size 1rem→1.0625rem + line-height 1.7 + margin 24→36px; trust strip gap 12→16px + margin 40→48px + opacity 0.85→0.9; watermark ::before rule removed entirely (18-line block + mobile suppressor line). Content count: 3 trust items, 1 headline, 1 body, 1 CTA — unchanged.

## 2026-04-26 — Pixel (cycle 4)

**Mobile center-alignment sweep (375px + 414px):**
- Testimonials (rating-row after Builder relabel): `.testimonial-rating-row` flex space-between, no pill border, source label reads "past commission client" / "direct order" as plain copper uppercase text. At 300px card width (375px viewport), stars ~88px + source label ~110px fits without wrap — aligned.
- Custom CTA (after Spark Frame B): `.custom-cta { text-align: center }` base + `.custom-cta-inner { max-width: 700px; margin: 0 auto }`, mobile padding `80px 24px`. `.custom-cta-details` flex justify-content:center flex-wrap:wrap. `.btn-copper-lg` display:inline-flex. All centered — aligned at 375px + 414px.
- Footer (first audit this cycle): `.footer-inner { grid-template-columns: 1fr; text-align: center }`, `.footer-brand-desc { max-width: 100%; margin: auto }`, `.footer-social { justify-content: center }`, `.footer-links { align-items: center }`, `.footer-bottom { justify-content: center; text-align: center }` — all centered — aligned at 375px + 414px.
- Contact form trust strip: `.contact-trust { text-align: center; margin: 0 auto 24px }` — aligned. `.contact-inner { max-width: 660px; margin: 0 auto }` — centered card — aligned. Form fields left-aligned (correct UX).
- Bug #22 diagnosed and fixed: added `transition-delay: 0.2s` on `.contact-inner.reveal` in mobile media query — trust strip animates first, form card follows 200ms later. No longer jarring double-stutter. style.css mobile block.

**Tap target sweep:**
- BUGS.md #9 (`btn-walnut`): `min-height: 44px` confirmed at style.css line 484. CLOSED.
- BUGS.md #10 (`nav-cta`): `min-height: 44px` with `display: inline-flex; align-items: center` confirmed at style.css line 107. CLOSED.

**Cursor trail verification:**
- js/cursor-trail.js line 3: `if (!window.matchMedia('(pointer:fine)').matches) return;` — IIFE exits on touch (375px). No canvas appended, no mousemove listener, no rAF loop. Mobile clean.
- prefers-reduced-motion: cursor-trail.js line 6 returns early on reduce preference. CSS @media (prefers-reduced-motion: reduce) block covers `.reveal`, `.testimonials-track`, `.btn-copper-lg`, `.mood-photo`, `.hero-bg`, `.process-fp` — existing reveal animations properly guarded.

**Files:** style.css (1 edit, mobile block, line ~1631), BUGS.md (#9/#10/#22 closed)

2026-04-26 09:00 pixel — Contact double-stutter fixed (Bug #22, transition-delay 0.2s on contact-inner.reveal mobile); Bugs #9/#10 verified closed (44px min-height confirmed); full alignment sweep 375+414px: testimonials/custom-cta/footer/contact all centered

## 2026-04-26 — Nigel (cycle 4)

2026-04-26 09:30 nigel — focus axis: conversion-friction, top issue: testimonials mobile UX (no pause/swipe affordance on auto-play carousel) is now the primary friction point after testimonial honest-attribution pass resolved credibility dissonance; pexels-7998221 unchanged and still score ceiling

**Delta from cycle 3:** 7.2 → 7.3 (+0.1)

**What moved the score:**
- Testimonials: honest-attribution relabeling ("via Etsy" → "past commission client" / "direct order") resolves the credibility-dissonance flag from cycle 3; pill border removal correct; section score 6.5 → 7.0
- Custom CTA: Spark Frame B spacing hierarchy + watermark removal + trust-strip upgrade ("Hand-finished in Pennsylvania"); section score 7.0 → 7.2
- Mobile UX: Pixel tap-target sweep (bugs #9/#10 closed) + contact double-stutter fixed (bug #22); holistic mobile score 7.0 → 7.1
- Brand cohesion: cursor trail (first "wow" interaction layer — copper rgba(207,139,103), well-calibrated decay, correct pointer:fine + reduced-motion guards); brand cohesion score 5.5 → 5.7

**Top 3 — Cycle 5:**
1. P1 CRITICAL: Real photography (pexels-7998221 unchanged — score ceiling, will not cross 7.5 without it)
2. P2 HIGH: Testimonials mobile UX — pause-on-touch + swipe/dot indicator on auto-play carousel
3. P3 MEDIUM: Contact textarea placeholder — directive text to reduce blank-page paralysis on custom commission inquiries

## 2026-04-26 — Coordinator (cycle 5 dispatch)

2026-04-26 coordinator — scheduled: Builder, Spark, Pixel, Nigel, focus: conversion-friction + first accessibility pass (AUDIT P2 testimonials mobile UX + AUDIT P3 directive placeholder + 2 stale bugs + Contact card Frame B + a11y pass + re-score), forbidden: Studio Strip, Hero, Mood rows, About, Process panels visual, Shop prices, Custom CTA, cursor trail, testimonial source labels, Footer

## 2026-04-26 — Builder (cycle 5)

2026-04-26 builder — AUDIT P2: testimonial carousel mobile touch UX: pause-on-touchstart (animationPlayState + animationName detach), resume after 4s on touchend (negative animationDelay re-sync to live position), swipe gesture >=50px delta jumps prev/next card, 5 dot indicators injected in index.html + CSS (.testimonial-dot, .is-active copper, display:none→flex on mobile), active dot tracks translateX position (main.js ~110 lines new IIFE); AUDIT P3: textarea placeholder updated to directive maker copy (index.html line 577); BUGS.md #15: scroll-behavior already omitted in prior cycle — marked CLOSED with verification note; BUGS.md #18: nav logo smooth scroll already implemented in main.js lines 116-119 — marked CLOSED with verification note. Files: main.js (+113 lines), index.html (2 edits: dots container + textarea placeholder), style.css (+21 lines: dot styles + mobile display:flex), BUGS.md (#15/#18 closed). AUDIT source: AGENT-PLAN.md cycle 5 Agent 1. (per PLAN.md)

## 2026-04-26 — Spark (cycle 5)

2026-04-26 spark — Frame B: Contact form card editorial pass — trust note relocated from external box above card to copper-ruled pull-quote inside card as emotional close, L-bracket corner marks added to card frame (same family as About-section, different corner positions/size), label-to-input gap 6→4px + label letter-spacing 0.1→0.09em tightened, contact-header margin-bottom 36→40px, ref SCOUT Finding 4 (warm trust block clarity pattern), replaced external .contact-trust border-box (removed entirely, content promoted into card)

## 2026-04-26 — Accessibility (cycle 5)

**Axe-core:** Manual audit (no headless browser available). WCAG 2.1 AA target.

**Violations found:**
1. No `<main>` landmark — all page content between nav and footer had no main wrapper (WCAG 2.4.1). CRITICAL.
2. Process dots labelled "Panel 1–4" — non-descriptive aria-labels; missing `role="tab"` / `aria-selected`; BUGS.md #11. HIGH.
3. No visible focus rings on any interactive elements except form inputs — process dots, nav links, all buttons (WCAG 2.4.7). HIGH.
4. Testimonials disclaimer at opacity 0.45: 2.45:1 contrast ratio — fails WCAG AA 4.5:1 for 12px text (WCAG 1.4.3). MEDIUM.
5. Copper section-labels on cream background: 2.50:1 — fails AA for small text (0.8rem). Brand identity constraint — documented only (BUGS.md #27). LOW.
6. Hero inset image `loading="eager"` on mobile hidden element (BUGS.md #4, pre-existing). LOW.

**Fixes applied (3):**
1. **`<main>` landmark:** Added `<main id="main-content">` wrapping all sections. index.html.
2. **Process dots ARIA:** `role="tab"` + descriptive `aria-label` ("Step 1: Choose the Fabric" etc.) + `aria-selected` toggled dynamically in JS `setActiveDot()`. index.html lines 232-236, main.js lines 147-149. BUGS.md #11 CLOSED.
3. **Testimonials disclaimer contrast:** Raised opacity 0.45 → 0.8 (contrast 2.45:1 → 4.64:1, passes WCAG AA). style.css line 1557. BUGS.md #26 CLOSED.
4. **Global focus-visible styles:** Added copper-themed `:focus-visible` rules for all interactive elements (process dots use cream outline on dark overlay). style.css (new block). BUGS.md #25 CLOSED.

**Mobile alignment sweep (375px + 414px):**
- Testimonial dot indicators: `justify-content: center; margin: 0 auto` confirmed — centered.
- Textarea placeholder: no visual rhythm disruption — placeholder is single-line hint within existing 120px min-height field.
- Contact card (Spark cycle 5): `contact-inner max-width:660px margin:0 auto`, mobile padding `32px 24px`, blockquote pull-quote left-aligned within card (correct for quote treatment) — aligned.

**Files:** index.html, style.css, main.js, BUGS.md
2026-04-26 11:00 accessibility — focus: ARIA/focus-rings/contrast, top issue: no visible focus states on any button/nav/dot outside form inputs, fixed: 4

## 2026-04-26 — Nigel (cycle 5)

2026-04-26 01:53 nigel — focus axis: conversion-friction, top issue: pexels-7998221 unchanged and still score ceiling at 7.5; testimonial mobile touch UX + contact card trust-note relocation earned +0.1 to 7.4

**Delta from cycle 4:** 7.3 → 7.4 (+0.1)

**What moved the score:**
- Testimonials: mobile touch UX (pause-on-touchstart via animationPlayState + computed-matrix hold, swipe >=50px nudge, 5 dot indicators, 4s auto-resume via negative animationDelay); section score 7.0 → 7.3 — genuine friction relief for mobile buyers at the trust section
- Contact: trust note relocated from external box to copper-ruled blockquote inside card as emotional close; directive textarea placeholder resolves blank-page paralysis; section score 7.5 → 7.7
- Mobile UX holistic: testimonial touch UX + dot centering; 7.1 → 7.2
- A11y pass (main landmark, process dot ARIA, focus-visible, disclaimer contrast): quality floor raised, not reflected in conversion-friction sub-scores — invisible to sighted 30-second buyer scan

**Top 3 — Cycle 6:**
1. P1 CRITICAL: Real photography (pexels-7998221 unchanged — hard ceiling at 7.5, will not cross without it)
2. P2 BRAND DECISION: Copper section-label contrast BUGS #27 (2.50:1 fails WCAG AA — needs user input to darken copper, increase size, or accept as conscious brand choice)
3. P3 MEDIUM: Performance pass (Lighthouse LCP/CLS after cursor trail + testimonial animation additions) + razor pass through style.css for orphaned rules from removed elements

## 2026-04-26 — Coordinator (cycle 6 dispatch)

2026-04-26 12:00 coordinator — scheduled: Performance, Razor, QA, Nigel, focus: performance + cleanup pivot (Lighthouse never run + dead-CSS sweep + first holistic Playwright QA + re-score), forbidden: Studio Strip, Hero Ken Burns, Mood rows visual, About, Process panels visual, Shop price text, Custom CTA, Cursor trail behavior, Testimonial source labels, Testimonial carousel mobile UX, Contact form card visual, Contact textarea placeholder. Score 7.4 with 7.5 ceiling — eight visual sections on cooldown so cycle pivots to floor-raising work that has never run. BUGS #27 surfaced to user for brand decision (NOT for agents). Builder/Spark/Pixel/Scout/Accessibility intentionally skipped — rationale in AGENT-PLAN.md.

## 2026-04-26 — Performance (cycle 6)

2026-04-25 performance — scores: P=66(mob)/85(desk) BP=73(both) A=97(both) S=100(both), top issue: render-blocking main.js + font-swap CLS 0.171 on desktop from hero watermark, fixed: 5

**Fixes applied:**
- `defer` added to `main.js` script tag — removes synchronous render-blocking JS (Lighthouse flagged 179ms savings desktop)
- Font preloads: added `<link rel="preload">` for 3 critical woff2 files (2× Playfair Display, 1× DM Sans) — eliminates font-swap CLS on hero watermark (CLS was 0.171 desktop)
- `contain: layout size` added to `.hero::before` — CLS containment fallback; isolates pseudo-element from document layout even if a font swap occurs
- Favicon SVG added (`favicon.svg`, copper "M" on espresso) + `<link rel="icon">` in head — fixes Best Practices console 404 error (main driver of BP=73 score)
- Bug #4 CLOSED: hero inset wrapped in `<picture>` with `<source media="(max-width: 768px)" srcset="">` — empty srcset tells browser to skip download on mobile where element is display:none; `width`/`height` attrs added to `<img>` for reflow prevention
- Bug #16 CONFIRMED CLOSED: `@import` was already removed pre-cycle-6; additional font preloads added this cycle for CLS fix

**Audits completed:**
- cursor-trail.js: clean guard on pointer:fine (mobile exits immediately, no canvas created). Clean guard on prefers-reduced-motion. rAF loop runs continuously but particles array empties naturally — no leak, minor CPU inefficiency only. No global references. Documented in PERFORMANCE.md.
- Testimonial touch IIFE: touchstart + touchend both `{ passive: true }`. No touchmove listener present — swipe computed on touchend delta. No passive listener violations. Scroll-perf clean.

**Scores after fixes:** Not re-run (GitHub Pages propagation time needed). Scores expected to improve on: Best Practices (favicon 404 resolved), desktop CLS (font preloads + containment), Performance (deferred JS removes render-blocking). Mobile LCP remains network-bottlenecked by 3× Pexels woff2 downloads — further improvement needs self-hosted fonts or `font-display: optional` (visual trade-off; deferred to future cycle).

**Files changed:** index.html, style.css, BUGS.md, PERFORMANCE.md (new), favicon.svg (new)

## 2026-04-26 — Razor (cycle 6)

**Dead-CSS audit — full sweep of style.css against index.html + main.js + cursor-trail.js**

**Selectors removed:**
- `.studio-strip-caption { display: none; }` (base rule, ~32 bytes) — element not present in HTML or JS; caption text never shipped, rule is fully orphaned
- `.studio-strip-caption { display: none; }` (mobile override inside `@media (max-width: 768px)`, ~34 bytes) — same orphaned element, double-redundant override

**Byte delta:** 45719 → 45633 bytes (-86 bytes)

**Known suspects — findings:**
- `.contact-trust` outer div: no rule with this selector exists in style.css; already absent before this cycle — confirmed clean
- `.testimonial-source` pill border: selector exists at line 990 but contains only display/font/color rules; border/padding/border-radius already removed in Builder cycle 4 — no orphan
- `.custom-cta::before` watermark: not present in style.css — removed in Spark cycle 4 as reported — confirmed clean
- `.process-fp-content` bottom anchor: no `bottom:` declaration on this selector — replaced with `top:50%/translateY(-50%)` in Pixel cycle 3 — confirmed clean
- `html { scroll-behavior: smooth }`: not present — only comment marker at line 29 — confirmed clean

**Bug #23 closed (will not fix):**
- `.studio-pull-quote` `margin-left/right: auto` — audit found these are NOT redundant. `.studio-pull-quote` is a `<blockquote>` (block element); parent `text-align: center` centers inline content within it, not the block itself. `margin: auto` is the functional centering mechanism for the `max-width: 600px` constraint. Removing would left-align the element — visual regression. Closed as will-not-fix with analysis in BUGS.md.

**Visual diff verdict:** Zero rendered change. Two `display: none` rules on a never-rendered element removed. No visual section affected.

2026-04-26 razor — .studio-strip-caption dead rule removed (base + mobile override, element never in HTML/JS), -86 bytes; Bug #23 closed will-not-fix (margins functional on block element)

## 2026-04-26 — QA (cycle 6)

2026-04-26 qa — 375/414/768/1440px Playwright sweep, 7 bugs closed, 1 new bug (#28) found

**Bugs closed this cycle:**
- Bug #6 CLOSED: studio strip loop jump — definitive Playwright measurement confirms *5 formula (item0→dup0=1450px). Builder cycle 1 correct. No jump.
- Bug #7 CLOSED: studio captions invisible on touch — @media(hover:none) opacity:1 rule confirmed present in stylesheet. Silently fixed, not previously logged.
- Bug #2 VERIFIED CLOSED: ?submitted=1 → #form-success visible — Playwright confirmed.
- Bug #3 VERIFIED CLOSED: Ken Burns scale preserved — parallax writes --parallax-y, CSS class transform unaffected.
- Bug #5 VERIFIED CLOSED: overlay z:1002 > hamburger z:1001 — Playwright confirmed at all mobile viewports.
- Bug #14 VERIFIED CLOSED: mood-row accent bar — all 3 rows left=0px at 375px, Playwright confirmed.
- Bug #20 VERIFIED CLOSED: form button reset — 12s setTimeout safety reset confirmed in main.js.

**New bug found:**
- Bug #28 (MEDIUM): Testimonial loop 12px seam — all viewports. translateX(-50%)=-1608px but card0→card5=1620px. 12px stutter per cycle. Fix: add padding-right:24px to track (scrollWidth 3216→3240, halfW=1620=exact match).

**Bug #12 definitive measurement:** 12px gap confirmed at 375/414/768/1440px. Root: 10-item flex (9 gaps) has no exact midpoint at card boundary; -50% falls half-a-gap short. Merged into Bug #28 entry.

**Process panels:** top:50% confirmed via cssRules API — getComputedStyle returns computed px, not percentage, causing initial false fail. All 4 panels correctly centered.

**Console:** zero errors across all 4 viewports, full session.

**Screenshots:** qa/screenshots/cycle6/ (24 images)

## 2026-04-26 — Nigel (cycle 6)

2026-04-26 14:00 nigel — focus axis: conversion-friction, top issue: floor-raising cycle mostly invisible to buyer scan; mobile LCP improvement real but unconfirmed in magnitude; Bug #28 (12px testimonial stutter) newly surfaced, fix deferred to cycle 7

**Delta from cycle 5:** 7.4 → 7.4 (held)

**What moved (and what didn't):**
- Performance improvements (deferred main.js, font preloads, empty-srcset hero inset) are the most conversion-relevant changes of the cycle — mobile LCP from ~8.1s expected to improve substantially on cellular, which is genuine buyer-perception gain. Held pending confirmed Lighthouse re-run.
- Desktop CLS 0.171 → ~0 (font preloads + containment on hero pseudo-element) eliminates the watermark text-swap jump at first load. Quality-perception improvement, invisible once loaded.
- Bug #28 discovery: 12px loop seam on testimonials track (pre-existing defect, now documented). One-line fix — deferred to cycle 7 per cooldown.
- Razor: 86 bytes dead CSS removed. Zero visual change.
- QA: zero console errors across all viewports. 7 bugs confirmed closed.
- Photography: unchanged. Hard ceiling at 7.5.

**Top 3 — Cycle 7:**
1. P1 CRITICAL: Real photography (pexels-7998221 in About + Process closing panel — hard ceiling, will not cross 7.5 without it)
2. P2 HIGH: Bug #28 — testimonial loop 12px stutter (padding-right: 24px on .testimonials-track — one-line Builder fix)
3. P3 MEDIUM: Bug #27 — copper section-label contrast (2.50:1, fails WCAG AA — needs user brand decision to resolve)

## 2026-04-26 — Coordinator (cycle 7 dispatch)

2026-04-26 15:00 coordinator — scheduled: Builder, Performance, QA, Nigel, focus: bug closure + perf verification (Bug #28 one-line testimonial fix + Lighthouse re-run to confirm cycle 6 fixes + bug-sweep of remaining open items + re-score), forbidden: Studio Strip, Hero Ken Burns, Mood rows visual, About, Process panels visual, Shop price text, Custom CTA, Cursor trail, Testimonial source labels, Contact form card visual, Contact textarea placeholder, Footer, Header/nav. Score 7.4 with 7.5 ceiling. Spark/Pixel/Refiner/Scout/Accessibility skipped — every section they would touch is on cooldown or recently audited. BUGS #27 + photography both user-blocked, surfaced in plan, not dispatched.

## 2026-04-26 — Builder (cycle 7)

2026-04-26 builder — Bug #28 CLOSED: added `padding-right: 24px` to `.testimonials-track` (style.css line 919) + mirrored in mobile override (line 1684); scrollWidth 3216→3240, translateX(-50%)=-1620px = exact card[0]→card[5] distance, loop seam closed (per PLAN.md)

## 2026-04-26 — Performance (cycle 7 re-run)

2026-04-26 04:20 performance — scores: Mobile P=74 BP=77 A=97 S=100 | Desktop P=100 BP=77 A=97 S=100, top issue: mobile LCP 6.4s (Google Fonts CSS render-blocking 530ms + Pexels image oversizing 276KB), fixed: 0 (verification only — cycle 6 fixes confirmed effective: LCP -1.7s mobile, FCP -1.3s mobile, desktop CLS 0.171→0.009, mobile perf score +8pts, desktop perf score +15pts; BP floor not met due to unaddressable Pexels third-party cookies)

## 2026-04-26 — QA (cycle 7)

2026-04-26 qa — 375px/414px/768px/1440px tested, 3 bugs closed (#8/#19/#28), 0 new bugs found; Bug #28 VERIFIED CLOSED: scrollWidth=3240 halfW=1620 exact card0→card5=1620px delta=0px all viewports; #8 VERIFIED CLOSED: CSS already correct (inset 0 0 100% 0); #19 VERIFIED CLOSED: aria-hidden items display:none on mobile; #17 still open (12px labels, unchanged); #21 still open (arrow snap, element absent from process panel 4 in headless); center alignment PASS at 375+414; zero console errors all viewports

## 2026-04-26 — Nigel (cycle 7)

2026-04-26 04:28 nigel — focus axis: conversion-friction, top issue: photography ceiling reached at 7.5; Bug #28 (testimonial stutter) closed + mobile LCP 8.1s→6.4s confirmed; next unlock requires original maker/product photography
