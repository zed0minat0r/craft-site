# AGENT-PLAN — Cycle 3

**Coordinator dispatch:** 2026-04-25
**Site:** https://zed0minat0r.github.io/craft-site/
**Current score:** 7.0 / 10 (focus axis: conversion-friction)
**Cycle theme:** Close two open bugs + AUDIT P2 (price upper bounds), refine the long-untouched About section, and run the never-yet-run Scout pass to source the next "wow" moment.

**Rationale (one line):** Score below the 8.5 polish-only gate so build agents are eligible; Studio Strip / Testimonials / Mood rows / Hero are all on cooldown so attention rotates to Bug #5 + #13, the Shop section price ranges (AUDIT P2), and the deferred About section; Scout has never run and the user has explicitly asked for the next exciting feature; Nigel closes the cycle to re-score conversion-friction.

---

## Execution order

### 1. Builder — Bug #5, Bug #13, AUDIT Priority 2 (shop price upper bounds)

**Why this agent now:** Two open bugs from prior cycles live squarely in Builder's lane: Bug #5 (hamburger z-index 1001 stacks above mobile nav overlay z-index 999 — visible glitch when overlay opens) and Bug #13 (`reveal-glow` 20% threshold can fire before `.reveal` 12% threshold + -40px rootMargin on `.mood-text`, so children animate while parent is still opacity:0 on mobile). Both are surgical. AUDIT cycle 2 Priority 2 (price range ambiguity in Shop) is the highest-leverage non-photography conversion change available — Nigel called single-anchor "starting from $75" a stop signal rather than a proceed signal. Adding upper bounds is two-line copy plus light layout.

**Specific instructions:**
- Fix BUGS.md #5: lower `.nav-hamburger` z-index when the mobile nav overlay is open, OR raise the overlay above 1001. Hamburger should not be visible over the open full-screen menu. Verify at 375px in Chrome and Safari.
- Fix BUGS.md #13: align `.reveal` and `.reveal-glow` IntersectionObserver triggers so the parent text is guaranteed visible before the child stagger fires. Either match thresholds, or add a class gate so `.reveal-glow` waits on `.reveal` parent. Test slow-scroll at 375px on a real-feel viewport.
- AUDIT P2: add upper bounds to all three mood-row price labels in `index.html`. Currently single anchors ($75 bags, $120 quilts, $95 custom). Replace with believable plausible ranges, e.g. "Bags from $75–$220", "Quilts from $120–$650", "Commissions from $95+". Match the existing `.mood-price` typography. The ranges must align with the time disclosures already shown ("6–10 hours", "40–80 hours") — do not invent absurd upper bounds.
- Do NOT touch testimonials, mood-row layout/animation, hero, studio strip, process panels, or footer this cycle.

**Memory guardrails:**
- No fabricated content / no invented SKU specifics. Price ranges only — no fake product names, no fake order counts.
- Cream / espresso / copper artisan identity. New price text must inherit existing `.mood-price` styling.
- Apps must NOT look AI-generated — break Claude defaults; do not add a generic price-range badge component.
- No dev / template-marketplace content — this is a maker brand selling to gift buyers.
- Respectful tone in changelog and commit messages.

**Exit criteria:**
- Bug #5 verified fixed; hamburger no longer visible over open nav overlay at 375px.
- Bug #13 verified fixed; no parent-invisible / child-animating race observable on mobile slow-scroll.
- All three mood rows display price ranges with believable upper bounds.
- One commit prefixed `builder cycle 3:` referencing BUGS.md / AUDIT.md sources.
- BUGS.md updated to mark #5 and #13 closed with verification line.

---

### 2. Spark — About section Frame B refinement

**Why this agent now:** About section was deferred from cycle 1 and has not been touched in cycles 1 or 2. Nigel cycle 2 confirmed the Custom Order CTA is present and correctly wired (`data-inquiry="custom"`). The remaining lift is visual / typographic — the photo frame, the "Pennsylvania Studio" tag, the signature, and the heading hierarchy. The repeated `pexels-7998221` image with the Process panel is AUDIT P1 and Spark cannot fix that without a real photo from the user, but Spark CAN refine the surrounding frame so the section reads as deliberately designed even with a stock image.

**Specific instructions:**
- Frame B mode only. Spark Frame B keeps content count. About currently has: section eyebrow + photo + studio tag + headline + 2 paragraphs + signature + CTA. Frame B output must keep all of that — no stripping.
- Eligible refinements (pick a coherent set, do not do all):
  - Photo frame copper accent: tighten or rework as a corner-only accent or a subtle inner shadow to anchor the stock image more deliberately.
  - "Pennsylvania Studio" tag: currently a corner badge. Could become a confident horizontal strip below the photo OR a serif-italic caption — pick ONE direction.
  - Molly signature: refine size, weight, or position to add a stronger personal anchor.
  - Section eyebrow / headline hierarchy: tighten leading and size relationships between section label, headline, and body paragraphs.
- DO NOT touch: hero, mood rows, testimonials, studio strip, process panels, footer, contact form.
- DO NOT add a new section or component. Refine within the existing About markup only.
- If you add a treatment, replace or remove an equivalent — no piling on (simplicity-over-polish memory rule).
- Center-alignment must hold on mobile 375px and 414px.

**Memory guardrails:**
- Apps must NOT look AI-generated — break Claude default patterns. Cream / espresso / copper identity. About is a personal section; treatment should feel hand-set, not templated.
- Spark must replace/remove when adding — Frame B keeps content count, never strips.
- No ghost numbers / large faded background numerals — do NOT add 01/02-style watermarks here.
- No dev / template-marketplace content — this is a maker brand.
- Pixel-alignment center on mobile.
- No fabricated content — do not invent biographical details for Molly.
- Nigel rule binds Spark too: never recommend or implement removing glows, animations, or effects.

**Exit criteria:**
- One Frame B commit prefixed `spark cycle 3 — Frame B: <change>`.
- About section visibly more deliberate without losing CTA / signature / tag / paragraphs.
- No regression at 375px / 414px alignment.
- Changelog entry naming what was replaced when something was added.

---

### 3. Scout — competitor research for the next "wow" moment

**Why this agent now:** Has never run in cycles 1 or 2. User has explicitly asked for exciting features they haven't seen yet — horizontal scroll-lock was the right instinct and is already shipped in the Process panels. Score of 7.0 will not push past 8.0 on layout / copy refinement alone; the next leap requires a distinctive interaction. Scout's job is to find candidate "wow" moments from the artisan / craft / textile / single-maker website space, evaluate each against the cream/espresso/copper identity, and recommend ONE concrete next-cycle implementation candidate.

**Specific instructions:**
- Research targets: artisan textile makers, indie quilt brands, single-maker leather goods sites, slow-fashion editorial sites, craft documentary microsites. Look for sites with a 7.5+ feel.
- Catalog 3–5 candidate "wow" moments. For each: site name + URL, the interaction in one sentence, why it works, estimated implementation cost (S/M/L), and fit score (1–10) against cream/espresso/copper artisan identity.
- Explicitly evaluate the three candidates the user has already named, side-by-side with anything you find:
  - Material / process scrollytelling on a signature piece (a single bag from raw fabric to finished object, scroll-tied)
  - Ambient sound toggle (sewing machine, scissors, fabric rustle — opt-in, persistent)
  - Copper-glow cursor trail (desktop-only, subtle, tied to copper accent palette)
- Output: one explicit recommendation with rationale, plus a runner-up.
- Write findings to `SCOUT.md` (replace prior content if present). Do NOT modify `index.html`, `style.css`, or `main.js`. Scout researches only.

**Memory guardrails:**
- User wants exciting features they haven't seen yet — bias toward novel, not template-typical.
- Apps must NOT look AI-generated — pick something that breaks Claude's default scroll-section pattern.
- Horizontal scroll-lock is already in use — pick a complement, not a duplicate.
- Simplicity over polish — if a candidate is complex, justify the lift; if it would replace an existing weaker section, name what it replaces.
- Cream / espresso / copper identity must hold; no chrome / neon / cyber moodboard.
- No fabricated examples — every cited site must be a real public URL.

**Exit criteria:**
- `SCOUT.md` written with 3–5 candidates and one explicit recommendation + runner-up.
- One commit prefixed `scout cycle 3:` with research summary in commit body.
- No code files modified.

---

### 4. Nigel — re-audit conversion-friction, set cycle 4 priorities

**Why this agent now:** Conversion-friction axis continues. Cycle 2 closed at 7.0 with Priority 2 (shop price ranges) and Priority 3 (testimonial linkage) deferred. Builder cycle 3 ships price ranges. Spark cycle 3 refines About. Scout produces the next-cycle direction. Nigel re-scores the whole site and sets cycle 4 priorities.

**Specific instructions:**
- Re-score conversion-friction axis only. Do not jump axes mid-loop.
- Score from a real prospective buyer's perspective. Read the rubric anchors at the top of the prior AUDIT.md.
- Stock-photo artisan site without verified social proof sits 5.5–7.5. DO NOT inflate above 7.5 without real photography or verifiable review volume.
- If price-range fix moved the Shop sub-score, reflect that. If About refinement actually shifted the section, reflect that. If a change did not move the conversion needle, say so plainly.
- Update top-3 priorities for cycle 4. Photography is still the ceiling — keep it surfaced. If Builder closed P2 and Spark improved About, the next priority list should reflect what is now most blocking.
- Append one row to the Audit History table.
- Update `AUDIT.md` overall verdict, section scores, and priority list. Replace prior cycle's content where appropriate but keep audit history intact.
- Append the new score to `SCORES.log`.

**Memory guardrails:**
- Score stricter — do not inflate above 7.5 without real photography or verifiable review volume.
- Nigel never recommends removing glows / animations / effects — only add or improve.
- No ghost numbers on approach pillars — do not request that treatment as a fix.
- No fabricated data / no fake testimonials / no invented matchups in any priority recommendation.
- Respectful tone — never blame the user for blockers; frame as collaborative needs.
- No dev / template-marketplace content suggestions.

**Exit criteria:**
- `AUDIT.md` updated with cycle 3 score, section scores, priority list, and history row.
- `SCORES.log` appended with `YYYY-MM-DD HH:MM <score> conversion-friction`.
- One commit prefixed `nigel cycle 3:` with score delta in subject line.

---

## Forbidden this cycle (cooldown)

- **Studio Strip** — Builder touched cycle 1, give it air.
- **Testimonials section** — Spark touched cycle 2, must settle.
- **Mood rows visual / animation** — Pixel + cycles 1 and 2 touched. Builder may add price-range copy text (in scope) but must NOT change layout, animation, or hover behavior.
- **Hero Ken Burns / parallax** — Builder cycle 2 ratified, stable.
- New section creation (Spark Frame A blocked).
- Testimonial copy edits.
- Photography swaps without user-supplied real images (Scout may recommend, no agent ships).

## Site-wide guardrails (every agent)

- Cream / espresso / copper artisan identity. Apps must NOT look AI-generated.
- No fabricated content / no fake testimonials / no invented data.
- Pixel-alignment center on mobile at 375px and 414px.
- No dev / template-marketplace content (sells to businesses / buyers, not developers).
- Respectful tone in all changelog and commit messages.
- Live link in any user-facing text: https://zed0minat0r.github.io/craft-site/

## Convergence safeguards

- Hard cap 30 tool calls per agent.
- If Builder ships nothing because all targets verified already in HEAD, log "no-op verified" and pass cycle to Spark unblocked.
- If Spark Frame B output is structurally identical to current HEAD, abort Spark cycle and let Scout + Nigel run.
- Coordinator next cycle will check that AUDIT priorities have actually moved — if cycle 3 closes with same top-3 as cycle 2, escalate to a different focus axis (e.g., visual identity) for cycle 4.

## State concerns to flag to user

- AUDIT P1 (real photography) cannot be addressed by agents — requires a real photo of Molly or a finished product. Score ceiling holds at ~7.5 until that lands.
- AUDIT P3 (testimonial Etsy link) deferred to cycle 4 because testimonials are on cooldown this cycle.
- Scout output sets the cycle 4 "wow" candidate; user should weigh in before Builder picks it up.
