# AGENT-PLAN — Cycle 5

**Date:** 2026-04-26
**Coordinator dispatch:** cycle 5
**Live:** https://zed0minat0r.github.io/craft-site/
**Score trajectory:** 6.8 → 7.0 → 7.2 → 7.3
**Score ceiling:** 7.5 (without real photography)
**Focus axis:** Conversion friction + accessibility (first pass)

---

## Rationale

Score sits at 7.3 with a 7.5 ceiling that holds until original photography lands. AUDIT cycle 4 gave clean P2/P3 targets that fit one Builder pass. Spark has done four straight Frame B passes on rich sections and the only unrefined-but-eligible visual area left is the Contact form card (footer was already audited cycle 4). Pixel has run a mobile sweep every cycle — cycle 5 is the right moment for the first-ever Accessibility pass (axe-core, ARIA, contrast, alt text), which also picks up BUGS.md #11 (process-dots aria-hidden wrapping interactive buttons). Nigel re-scores under stricter rubric per memory.

Razor and Performance passes are noted as eligible but deferred — accessibility is the higher-leverage next axis given BUG #11 is a real screen-reader-blocker still open. Razor next cycle if no fresh AUDIT critical surfaces.

---

## Agents (execution order)

### 1. Builder — AUDIT P2 + P3 + open bug sweep

**Brief:**
Ship two tightly-scoped buyer-friction fixes from AUDIT cycle 4 and clear two open BUGS.md items that haven't moved in 4 cycles.

- **AUDIT P2 (HIGH):** Testimonial carousel mobile UX. Add (a) pause-on-touch (touchstart pauses the auto-advance interval, touchend restarts after 4s), (b) dot indicators below the track (one dot per primary card, active dot reflects current visible card), (c) basic swipe gesture (touchstart X to touchend X delta, threshold ~50px, jump prev/next). Carousel structure unchanged — only mobile interaction layer. The `.testimonials-track` translateX(-50%) seamless loop must keep working. If swipe lands mid-loop, the pause-on-touch must hold position cleanly.
- **AUDIT P3 (MEDIUM):** Contact textarea directive placeholder. One attribute change on `<textarea name="message">` — placeholder text like `e.g. a market tote in olive linen, roughly 14 inches wide, gift in 6 weeks — happy to send a sketch first`. Honest, specific, not a fake order. No copy fabrication beyond the placeholder hint.
- **BUGS.md #15:** Remove `html { scroll-behavior: smooth }` from style.css line 29. JS smooth scroll is the correct path; CSS+JS dual is fighting. One-line removal.
- **BUGS.md #18:** Nav logo (`href="#"`) should call `window.scrollTo({ top: 0, behavior: 'smooth' })` from the existing smooth-scroll handler instead of falling through to browser default. main.js already has the guard for `#` — make it scroll, don't just early-return.

**MEMORY guardrails:**
- No fabricated content / no fake testimonials.
- Respectful tone in any user-facing copy.
- Apps must NOT look AI-generated — placeholder must read as a real maker would write it.

**Forbidden sections this cycle:**
Studio Strip, Hero (Ken Burns or otherwise), Mood rows visual/animation, About section, Process panels, Shop price text, Custom CTA, cursor trail, testimonial source labels.

**Source:** AUDIT P2/P3, BUGS.md #15/#18.

---

### 2. Spark — Frame B on Contact form card

**Brief:**
Frame B refinement on the Contact section form card (`.contact-inner`) — the only non-cooldown rich section that has never had a Spark editorial pass. Refine spacing, typography hierarchy, and the trust-note treatment ("If you're not happy with what arrives, message me — I'll make it right" — the strongest reassurance copy on the page, currently buried in default styling). Treat the trust note as the section's emotional anchor, not a footnote.

Possible moves: tighten label-to-input rhythm; raise the trust-note from inline paragraph to a hairline-bordered editorial pull-quote inside the card; consider an L-bracket corner mark on the card frame matching the About-section treatment for visual cohesion (NOT the same component — same family).

**MEMORY guardrails:**
- Frame B keeps content count — do NOT add or remove form fields, trust-note bullets, or section copy. Refine spacing/typography only.
- Replace when adding — if a new accent is introduced (e.g. corner brackets), an existing decorative element of equivalent weight gets removed or reduced. No piling on.
- No ghost numbers / large faded background numerals.
- Apps must NOT look AI-generated — keep cream/espresso/copper artisan identity.
- Nigel never recommends removing glows/animations/effects, but Spark can replace one decorative move with another.

**Forbidden sections this cycle:**
Studio Strip, Hero, Mood rows, About section, Process panels, Custom CTA, Footer (already audited cycle 4), Testimonials. Touch ONLY the Contact form card.

**Source:** AGENT-PLAN cycle 5 eligible-focus list (Contact form card never refined).

---

### 3. Pixel — first-ever Accessibility pass (axe-core, ARIA, contrast, alt)

**Brief:**
First Accessibility pass in 5 cycles. Run a structured a11y audit across the full page and fix the open accessibility blocker:

- **BUGS.md #11 (MEDIUM, open):** `.process-dots` container has `aria-hidden="true"` while wrapping interactive buttons — screen-reader users have NO access to process panel navigation. Remove `aria-hidden` from the container and add proper `aria-label` to each dot button (e.g. `aria-label="Jump to step 1: Source"`). Use `role="tablist"` on the container and `role="tab"` / `aria-selected` on each dot if structurally appropriate.
- **Alt text audit:** Every `<img>` on the page — verify alt is descriptive, not empty, not filename. Stock pexels images get descriptive alt ("Hands cutting waxed canvas in studio" — describe the image, do NOT claim it's Molly). Decorative-only images get `alt=""`.
- **Contrast audit:** All text over photos (Hero headline, Process panel desc, Custom CTA body) — verify WCAG AA (4.5:1 normal, 3:1 large). Especially the testimonials disclaimer at opacity 0.45 / 12px on dark background (BUGS.md #17 area). Document which fail and bump the failing ones (raise opacity, not size — Spark cooldown applies to typography of testimonials).
- **ARIA roles and landmarks:** Verify `<main>`, `<nav>`, `<footer>` are semantic with appropriate landmarks. Verify form has a `<label>` for every input (or aria-label).
- **Focus states:** Confirm visible focus rings on all interactive elements (buttons, links, dots, form fields). Tab through mentally — anywhere focus disappears is a fail.
- **Mobile center-alignment sweep at 375 + 414px** — confirm Builder's testimonial dot indicators land centered, the new placeholder doesn't break the textarea visual rhythm, and Spark's Contact card changes are aligned.

**MEMORY guardrails:**
- Pixel ALWAYS audits center-alignment on mobile at 375/414px (in addition to a11y).
- No invented content — alt text describes what the image actually shows, doesn't claim it's Molly when it's pexels.
- Nigel never removes glows/animations — Pixel doesn't either; only add missing reduced-motion guards if any are absent.

**Forbidden sections this cycle:**
None for the a11y pass — page-wide. But do NOT change visual design beyond a11y necessity (focus rings, contrast bumps, aria attributes). No layout shifts. Cooldown sections (Studio Strip, Hero, About, Process visuals, Mood rows, Custom CTA, Shop prices, cursor trail) — touch only their a11y attributes, not their visual treatment.

**Source:** BUGS.md #11 (open), AUDIT cycle 4 testimonials disclaimer contrast flag, eligible-focus list (accessibility pass never run).

---

### 4. Nigel — re-score (cycle 5)

**Brief:**
Re-score under the strict rubric. New-ish artisan site sits 5.5–7.5; score from real-buyer perspective; do NOT inflate above 7.5 without real photography movement.

**Expected delta this cycle:** Modest. P2 testimonial mobile UX is genuine friction relief (worth ~+0.1 if shipped clean). P3 placeholder is small but real. Spark Contact card refinement could move the contact section sub-score. Accessibility pass moves the mobile UX sub-score and brand-cohesion confidence floor but most a11y wins are invisible to a sighted buyer doing a 30-second scan — Nigel should NOT over-credit invisible structural improvements on the conversion-friction axis. Realistic landing zone: 7.4 (+0.1). Hard cap remains 7.5 without real photography.

**MEMORY guardrails:**
- Nigel never recommends removing glows/animations/effects.
- Nigel scores stricter — new sites start ~5.5, not 7.0+.
- Nigel does NOT inflate past 7.5 without real photography.
- Respectful tone — never call user a bottleneck for not having shot photos yet. Frame photography as the next unlock, collaboratively.
- No dev/template-marketplace content recommendations.

**Forbidden:**
No new section invention. No fabricated metric ("X% conversion lift"). No prescribing photography content beyond "one original product or studio photograph" framing.

**Source:** AUDIT.md re-score; append to SCORES.log.

---

## Coordinator one-line

`2026-04-26 coordinator — scheduled: Builder, Spark, Pixel, Nigel, focus: conversion-friction + first accessibility pass (AUDIT P2 testimonials mobile UX + AUDIT P3 directive placeholder + 2 stale bugs + Contact card Frame B + a11y pass + re-score), forbidden: Studio Strip, Hero, Mood rows, About, Process panels visual, Shop prices, Custom CTA, cursor trail, testimonial source labels, Footer`
