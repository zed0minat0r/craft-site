# AGENT-PLAN — Cycle 9
**Coordinator:** scheduled 2026-04-26
**Project:** Made by Molly (craft-site)
**Live:** https://zed0minat0r.github.io/craft-site/
**Score trajectory:** 6.8 → 7.0 → 7.2 → 7.3 → 7.4 → 7.4 → 7.5 → 7.5 (held twice)
**Focus axis this cycle:** funnel-close + JS perf push (no new content; brand-cohesion ceiling acknowledged)

---

## Decision rationale

Score has held at 7.5 for two consecutive cycles. The hard ceiling is photography (`pexels-7998221` in About + closing Process panel) — agents cannot break that without real assets the user must supply. Builder/Spark/Refiner do NOT enter polish-only mode here because Nigel's score is exactly at the gate (8.5 threshold rule), and there are two real gaps left that don't require photography:

1. **Contact form success state** — never been designed. P3 in AUDIT, partially scaffolded in main.js (`?submitted=1` reveal exists but reveals a plain hidden div). Buyer's final funnel step has no designed close. Eligible Spark Frame B candidate (NEW surface — not the contact card cooldown).
2. **Mobile Performance 84 → 90** — three discrete JS optimizations identified in AUDIT P2 with bounded scope.

Bug #21 (process arrow) is intentionally NOT scheduled — the element does not exist in HTML and adding it for a hover refinement is feature-creep, not a fix. Recommend closing as no-fix-needed in next QA pass.

Razor was last run cycle 6 (3 cycles ago). Eligible but not high-leverage right now — defer one more cycle to focus impact.

**Cooldown enforcement:** Studio Strip, Hero Ken Burns, Mood rows visual, About, Process panels visual, Shop price text, Custom CTA, Cursor trail behavior, Testimonial source labels, Contact CARD visual, Contact textarea placeholder, Testimonial carousel mechanics, Header/nav, Footer — ALL FORBIDDEN this cycle for visual changes. Performance MAY touch `cursor-trail.js` for rAF idle-exit only (tactical perf exception, not behavior change).

---

## Scheduled agents (ordered)

### 1. Performance — JS overhead push (Mobile P 84 → 90 target)

**Why:** Self-hosted fonts and srcset are done. AUDIT P2 identifies three remaining JS-side optimizations. This is the realistic 84→90 path — Best Practices is locked at 77 by Pexels cookies (unaddressable without photography).

**Instructions:**
- (a) **Cursor-trail rAF idle-exit:** `cursor-trail.js` runs `requestAnimationFrame` continuously even when the particle array is empty. Add `cancelAnimationFrame` when array becomes empty; restart on next `mousemove`. This is a tactical perf-only edit, NOT a behavior change.
- (b) **Testimonial carousel IIFE audit:** Inspect for unnecessary work on idle frames (e.g., reading layout values per-frame, listeners that should be passive, mutation observers that fire too often). Document findings even if no edit; this is diagnostic.
- (c) **Below-fold lazy-load verification:** Audit ALL non-LCP `<img>` tags. Confirm `loading="lazy"` is set on every image outside the top viewport. The hero LCP image must NOT be lazy. List exceptions with rationale.
- Run a fresh Lighthouse mobile pass before AND after to confirm 84 → 90 trajectory (or document why it didn't move). Save as `lighthouse-cycle9-mobile.json`.

**Guardrails:**
- DO NOT change cursor-trail visual behavior (particle count, color, opacity, decay rate). Idle-exit only.
- DO NOT touch testimonial carousel mechanics (cooldown). Audit only — file findings in PERFORMANCE.md.
- DO NOT touch header/nav, footer, or any cooldown section.
- Respect [Simplicity over polish](feedback_simplicity_over_polish.md) — if you add an event listener, don't leave the old rAF loop running.
- Respect [No content in agent loops](feedback_no_news_in_loops.md) — perf only, no content edits.

**Exit criteria:** Mobile Performance score change documented (target 90, accept 88+). At least one of (a)/(b)/(c) shipped or rigorously documented as no-op-needed. PERFORMANCE.md cycle 9 entry. Single commit.

---

### 2. Spark — Frame B: Contact form success state (NEW SURFACE)

**Why:** AUDIT cycle 8 P3. The `#form-success` div in index.html is hidden; revealed by main.js when `?submitted=1` is detected; the revealed content is undesigned. Buyer submits → Formspree redirects → buyer sees a plain unstyled block. The final step of a 7.7-rated contact section has no designed close. This is the only NEW surface eligible (every other surface is in cooldown).

**Instructions:**
- Frame B refinement on the success state div: typography, spacing, hierarchy, copper accent treatment that matches the existing form card quality.
- Real, honest copy: "Got it. Molly will be in touch within 2 business days." or similar — no fake urgency, no fabricated guarantees.
- Optional: subtle reveal animation (fade + rise, matching `.reveal.from-bottom` system). Keep under 600ms. Respect `prefers-reduced-motion`.
- This is NOT the contact card itself (cycle 5 cooldown). This is the success-state surface that replaces the form card after submit, or sits below it. Confirm scope before editing.

**Guardrails:**
- [Frame B keeps content count](feedback_frame_b_richness.md) — refining type/spacing/hierarchy on this surface, not stripping. Since this is a new surface, the rule is: don't strip the existing main.js scaffolding either.
- [Simplicity over polish](feedback_simplicity_over_polish.md) — when adding the success state, REPLACE the plain hidden div, don't pile a second one on top.
- [No invented fight data / no fabricated content](feedback_no_invented_fight_data.md) applies in spirit — no fake testimonial in the success state, no invented promises (no "We respond within 1 hour!" if that's not committed). Use language Molly would actually say.
- [No dev content on sites](feedback_no_dev_content.md) — buyer-facing copy only, no template marketplace language.
- [Unique design](feedback_unique_design.md) — must NOT look AI-generated. Cream/espresso/copper palette. Lean editorial, not "thank you for your submission!" generic SaaS.
- [Always send live link](feedback_always_send_link.md) reminder — your final commit message and any text should include the live URL.
- DO NOT touch the contact CARD itself (cooldown from cycle 5).
- DO NOT touch contact textarea placeholder (cooldown).
- DO NOT touch any other cooldown section (full list above).

**Exit criteria:** `#form-success` div has designed Frame B treatment in HTML + CSS. Reveal flow tested with `?submitted=1` URL param. main.js scaffolding either kept or upgraded (don't break the existing reveal). Single commit. Changelog entry references SCOUT finding if applicable.

---

### 3. Pixel — Mobile alignment sweep + form success state verification

**Why:** Standard rotation. Pixel must verify Spark's new success-state surface aligns at 375/414/768. Memory rule: [Pixel alignment focus](feedback_pixel_alignment.md) — center-alignment audit on mobile is non-negotiable.

**Instructions:**
- After Spark commits, audit the new success state at 375 / 414 / 768 / 1440. Verify center-alignment, tap targets if any interactive elements (44px min), reflow at narrow viewport, no text overflow.
- Sweep ALL sections at 375/414 (standard pass) — confirm no regressions from Performance's lazy-load audit (lazy images can shift layout if `width`/`height` are missing).
- Open Bug #14 verification: AUDIT lists "mood-time italic walnut at 13px remains the least legible element" — but that's a Nigel readability concern, not a Pixel alignment scope. Skip.
- Bug #21 (process arrow): recommend closing as no-fix-needed in BUGS.md (element absent by design; adding it is feature-creep, not bug-fix). Document the close rationale.
- Bug #20 (form submit "Sending..." stuck on error): related to the success-state work. If Spark's success state implies error-state handling, file a follow-up note; otherwise leave for a future cycle.

**Guardrails:**
- [Pixel alignment focus](feedback_pixel_alignment.md) — center-alignment 375/414 is required.
- [No ghost numbers on therapist](feedback_no_ghost_numbers.md) — does not apply here (different project) but the principle (no large faded background numerals) is reinforced if Spark added any decorative numerals on the success surface.
- [Nigel never removes quality](feedback_nigel_no_removal.md) — same applies to Pixel: do not remove glows, animations, or effects in your sweep. Alignment fixes only.
- DO NOT touch footer (cooldown from cycle 8).
- DO NOT touch header/nav (cooldown from cycle 8).
- DO NOT touch any cooldown section visually — alignment-fix-only edits to non-cooldown sections.

**Exit criteria:** Alignment sweep documented for 375/414. Spark's success state verified. Bug #21 closed in BUGS.md if recommended. Single commit. Changelog entry.

---

### 4. Nigel — Re-score cycle 9

**Why:** Standard rotation closes the cycle. Three real changes shipped (Performance JS, Spark success state, Pixel alignment) — score recalibration needed.

**Instructions:**
- Score from a real buyer's perspective. AUDIT cycle 8 verdict: 7.5 ceiling holds without photography.
- Sub-score the Contact / Form section specifically — does the success state change the conversion-funnel grade? (Currently 7.7.)
- Sub-score Mobile Performance / UX — if mobile P landed at 88+, how does that affect the holistic mobile sub-score (currently 7.5)?
- Update AUDIT.md with cycle 9 entry. Maintain Audit History table.
- Top 3 priorities for cycle 10.

**Guardrails:**
- [Nigel must score stricter](feedback_nigel_stricter.md) — score from a real buyer's perspective. Performance gains are buyer-invisible at the immediate scan level; don't inflate. The ceiling is photography. If you push past 7.6 without photography landing, justify rigorously.
- [Nigel never removes quality](feedback_nigel_no_removal.md) — recommendations may add or improve, never strip glows / animations / effects. Photography swap recommendations are addition, not removal.
- [Respectful tone](feedback_respectful_tone.md) — frame the photography blocker collaboratively with the user. Never frame the user as a bottleneck.
- [Nigel scores 5.5–7.5 ceiling without real photography](feedback_nigel_stricter.md) — DO NOT inflate.
- DO NOT recommend Studio Strip removal, Custom CTA stripping, or any cooldown section changes as scoring rationale.

**Exit criteria:** AUDIT.md cycle 9 entry. SCORES.log appended. Top 3 priorities documented. Single commit. iMessage to user (per always-text-back rule) with: score, delta, what moved, live link.

---

## Cycle 9 forbidden sections (cooldown enforcement)

Studio Strip · Hero Ken Burns · Mood rows visual · About · Process panels visual · Shop price text · Custom CTA · Cursor trail behavior (rAF perf-only exception for Performance agent) · Testimonial source labels · Contact form CARD visual · Contact textarea placeholder · Testimonial carousel mechanics · Header/nav · Footer

**Eligible new surface:** Contact form success state (NEW — never designed before).

---

## Memory guardrails (encoded across all 4 briefs)

- Cream/espresso/copper palette only — apps must NOT look AI-generated [unique-design].
- No fabricated content — no fake testimonials, no invented promises in the success state copy [no-invented-data].
- No ghost numbers / faded background numerals on any new surface [no-ghost-numbers].
- No dev / template-marketplace content [no-dev-content].
- Pixel always audits center-alignment 375/414 [pixel-alignment].
- Frame B keeps content count — refines spacing/typography on rich sections [frame-b-richness].
- Spark replaces when adding [simplicity-over-polish].
- Nigel scores 5.5–7.5 ceiling without real photography [nigel-stricter].
- Nigel never recommends removing glows/animations/effects [nigel-no-removal].
- Always send live link in agent text [always-send-link].
- Always text back via iMessage on completion [always-text-back, always-imessage].
- Respectful tone — never frame the user as a bottleneck [respectful-tone].

---

*Coordinator decision: not in polish-only mode (score = 8.5 gate, not >= 8.5). Builder is NOT scheduled — no targeted bug needs Builder hands this cycle (Bug #21 should be closed-as-designed; Bug #20 deferred). Razor deferred one cycle. Spark Frame B uses the only eligible new surface. Performance executes the bounded JS push from AUDIT P2. Pixel + Nigel close the cycle.*
