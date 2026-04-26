# AGENT-PLAN — Cycle 2

**Coordinator dispatch:** 2026-04-25
**Site:** https://zed0minat0r.github.io/craft-site/
**Current score:** 6.8 / 10 (focus axis: conversion-friction)
**Cycle theme:** Kill user-blocking JS bugs, then tighten the restored testimonials block visually — no new sections, no piling on.

**Rationale (one line):** Score is sub-8.5 so Builder/Spark/Refiner are eligible; two Critical bugs are user-blocking (logo JS crash, form success never shows) and outweigh new feature work; testimonials were just restored with source labels — Frame B refinement (not replacement) is the right Spark mode; Pixel rotates in for mandatory mobile center-alignment audit; Nigel re-scores against AUDIT priorities with strict anti-inflation guardrails.

---

## Execution order

### 1. Builder — kill the two Criticals + the hero Ken Burns regression

**Why this agent now:** BUGS.md flags two CRITICAL items that block actual user behavior: the logo `href="#"` throws a SyntaxError on every click (line 112 main.js), and the contact form success state is dead code (`#form-success` never displays after Formspree redirect). Both are pure conversion friction and both are one-cycle fixes. The Ken Burns parallax also kills the hero scale animation on first scroll (HIGH, bug #3) — high-visibility regression at the top of the page.

**Specific instructions:**
- Fix BUGS.md #1: guard the smooth-scroll listener so `href="#"` returns early before `querySelector` runs. Logo should still scroll to top via `window.scrollTo({ top: 0 })`, no console error.
- Fix BUGS.md #2: detect `?submitted=1` on page load, reveal `#form-success`, scroll it into view, reset the submit button text. Do not rip out the Formspree native submit — only add the post-redirect handler.
- Fix BUGS.md #3: in the parallax handler, preserve the Ken Burns scale by composing `scale(var(--kb-scale)) translateY(...)` with a CSS variable, or skip the transform write while the load animation is still running.
- Do NOT touch testimonials, mood rows, or About section this cycle. Spark and Pixel own those.

**Memory guardrails:**
- No invented fight data / no fabricated content of any kind. (No new testimonial copy, no fake order counts.)
- No dev/template-marketplace content on the live demo.
- Apps must NOT look AI-generated — keep the existing distinct visual identity, do not add generic Claude-default UI patterns when fixing the success state.

**Exit criteria:**
- Console is clean on logo click on Chrome and Safari.
- Submitting the form (or visiting `?submitted=1` directly) shows the success state and resets the button.
- Scrolling 1px from top no longer kills the hero Ken Burns scale.
- One commit, scoped diff, no scope creep into other sections.

---

### 2. Spark — Frame B refinement of the testimonials section

**Why this agent now:** The testimonials carousel was reverted then restored with source labels and empty-star styles in commits e64d74b → d27f1f3. AUDIT.md Priority 1 is still testimonial credibility (6.0). The block now has the right content (real source labels, varied stars possible) — what it needs is typography and spacing refinement so the source label reads as evidence rather than disclaimer. This is the textbook Frame B case: rich section already in place, refine spacing/typography, do NOT strip content count.

**Specific instructions:**
- Frame B mode only. Do NOT reduce the testimonial card count. Do NOT remove the carousel. Do NOT remove glows or hover-pause behavior.
- Tighten the visual hierarchy so the source label (e.g. "via Etsy" or platform tag) sits adjacent to the stars, not below the body copy. Source attribution next to the rating is what makes a review read as verified.
- If the disclaimer copy ("Reviews from early customers and friends...") is still in the DOM, soften its weight — smaller, lower contrast, or move it to a less prominent position. Do not delete it; honesty is the point. But it should not visually compete with the cards themselves.
- Address BUGS.md #12 if straightforward: the auto-scroll loop translateX(-50%) is not seamless on narrow viewports because of padding asymmetry. If a one-line fix lands inside this Frame B refinement, take it.
- Mobile: review whether the carousel needs a visible pause/swipe affordance per AUDIT 7. If adding one, replace something — do not pile on.

**Memory guardrails:**
- Spark must replace/remove when adding — no piling on. If a new affordance is added (e.g. pause button), it replaces something redundant.
- Frame B keeps content count: never strip cards, never remove the carousel.
- No invented fight data / no fabricated testimonials. Do not write new review copy. Only restructure the visual treatment of the existing cards.
- No ghost numbers / large faded background numbers — do not reintroduce a "01/02" style watermark behind the testimonials.

**Exit criteria:**
- Source label is visually paired with the star row, not orphaned at the card foot.
- Disclaimer text is present but visually quieter than the card body.
- Card count and carousel mechanics unchanged.
- No new fabricated copy.

---

### 3. Pixel — mobile center-alignment audit (mandatory) + mood-row consistency

**Why this agent now:** Mobile center-alignment is a standing audit per user memory — every cycle. BUGS.md #14 (mobile mood-row accent bar inconsistency: row 02 has bar on right, rows 01/03 on left at single-column) and #8 (mood wipe-in direction backwards on mobile) are squarely Pixel's beat. The contact-trust block was last centered in commit 0ef64ed; we should verify nothing regressed.

**Specific instructions:**
- Audit at 375px and 414px: hero CTA stack, mood-row text + accent bar, custom-CTA trust strip, contact trust block, footer bottom row, testimonial cards, process panels.
- Fix BUGS.md #14: on mobile (single-column), the `.mood-row.reverse .mood-text::before` accent bar should snap back to the left edge so all three rows align. Do not change desktop behavior.
- Fix BUGS.md #8: change mobile `.mood-photo` clip-path from `inset(100% 0 0 0)` (drops down) to `inset(0 0 100% 0)` (rises up). Direction should match the scroll direction.
- Verify the testimonial cards (after Spark's pass) are center-aligned on mobile. Report any drift.
- Do NOT touch typography choices Spark just refined.

**Memory guardrails:**
- Pixel must always audit center-alignment consistency on mobile — primary mandate.
- No ghost numbers / large faded background numbers on approach pillars — do not introduce any background numerals while tweaking mood-row treatment.
- Apps must NOT look AI-generated — keep the cream/espresso/copper identity, no generic geometric flair.

**Exit criteria:**
- All three mood rows show the accent bar on the same side at single-column.
- Mood photo wipe-in rises from below on mobile, matching scroll direction.
- Center-alignment report covers hero, mood, custom CTA, testimonials, contact, footer at 375/414px with no regressions called out unfixed.

---

### 4. Nigel — re-audit against AUDIT.md Priority 1–3, strict scoring

**Why this agent now:** Builder + Spark + Pixel all touched conversion-adjacent surface this cycle. The previous audit set focus axis to conversion-friction at 6.8. Re-score on the same axis to measure delta — that is the only way the loop learns whether the cycle actually moved the trust dial or just polished surface.

**Specific instructions:**
- Re-audit conversion-friction axis only. Do not jump axes mid-loop.
- Specifically re-evaluate: testimonials credibility (Priority 1, was 6.0), About-section CTA presence (Priority 2 — note: Builder did not address this cycle, so it should remain flagged), price range ambiguity in Shop rows (Priority 3 — also untouched this cycle, should remain flagged).
- Score from a real prospective buyer's perspective. A new-ish artisan site with stock photography and limited social proof should sit 5.5–7.0. Do not inflate because surface bugs were fixed.
- Update AUDIT.md in place. Append the new score to SCORES.log. Do not delete prior audit history.

**Memory guardrails:**
- Nigel scores stricter — new sites start ~5.5, not 7.0+. Do not add 0.4+ for surface bug fixes alone; trust ceiling movement requires content/social-proof movement.
- Nigel never recommends removing glows, animations, or effects. Only add or improve. If the testimonials carousel feels off, recommend refinement, never removal.
- Score from a real user's perspective, not from a developer's.
- No content in agent loops — do not draft new testimonial copy or fabricate any data in the audit.
- Respectful tone — frame any blockers (e.g. real photography, real Instagram account) as collaborative needs, not user shortcomings.

**Exit criteria:**
- AUDIT.md updated with new score, dated 2026-04-25 cycle 2.
- SCORES.log appended with `2026-04-25 HH:MM <score> conversion-friction`.
- Top 3 priority list refreshed; if Priority 1 dropped because Spark genuinely fixed it, surface a new Priority 1 from the existing weakness list.

---

## Forbidden this cycle

- **Studio Strip section** (touched in cycle 1 — distribute attention).
- New section creation (Spark Frame A, content additions).
- Any work on testimonial copy itself (only visual treatment).
- Any change to the About section (saved for a future cycle when Builder can also wire a CTA — Priority 2).

## State concerns to flag to user

- AUDIT Priority 2 (About CTA) is intentionally untouched this cycle because it pairs better with a Builder cycle that has more headroom. Two Critical bugs ate this cycle's Builder budget.
- Real photography / real Instagram / real reviews remain the score ceiling per SCOUT-REPORT.md. None are addressable by agents alone.
