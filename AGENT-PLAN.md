# AGENT-PLAN — Made by Molly
**Cycle:** 8
**Date:** 2026-04-26
**Coordinator:** dispatch-only (no code work)
**Score state:** 7.5 (photography ceiling — hard cap until original imagery lands)
**User input pending:** pause/continue/pivot reply (not yet received) + Bug #27 brand decision + photography source

---

## Dispatch Decision

**One-line rationale:** Score is at the photography ceiling (7.5) and won't move without user input, but Mobile Performance 74 → 90 is real measurable buyer-experience work that has not yet been attempted — Performance + targeted image-attribute work is the cycle 8 backbone, with Spark/Pixel cleanup on never-touched zones (header/nav, footer).

**Cycle 8 is NOT auto-paused.** Two genuine work items exist: (1) the 530ms Google Fonts render-blocking CSS swap is concrete, mobile-LCP-relevant, and untouched; (2) header/nav has never been a focus area in any of seven cycles, footer was audited cycle 4 but never visually refined. There is real cycle 8 work that does not require the user.

**However:** if cycle 9 produces no Nigel score movement AND the user has still not replied on photography, the loop should auto-pause per memory rule (auto-pause idle loops after 2 no-change cycles). Cycle 8 is the second-to-last allowed before a self-pause prompt to user.

---

## Scheduled Agents (in run order)

### 1. Performance — Google Fonts + image srcset push (BACKBONE)

**Why:** Mobile Performance 74 against a floor of 90. The two named issues in PERFORMANCE.md cycle 7 are concrete and unattempted: render-blocking Google Fonts CSS (530ms savings) and oversized mood-row Pexels images (276KB savings). Together these should move Mobile Performance from 74 toward 90 — measurable cellular-load improvement for a buyer arriving from a craft-show postcard QR code. This is the highest-value real work available this cycle.

**Instructions:**
1. **Google Fonts swap (priority 1):** Replace `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?...">` in `index.html` `<head>` with one of two patterns:
   - **Preferred:** Self-host the three woff2 files locally (Playfair Display italic, Playfair Display regular, DM Sans). Inline `@font-face` declarations directly in a `<style>` block in `<head>` pointing to local paths (e.g. `/fonts/playfair-italic.woff2`). Keep `font-display: swap`. Delete the Google Fonts `<link rel="stylesheet">` and the `<link rel="preload">` lines that point at fonts.gstatic.com (now self-hosted, those preloads should point at the local paths).
   - **Fallback if self-hosting is too invasive in one pass:** Convert the existing `<link rel="stylesheet">` to the `<link rel="preload" as="style" onload="this.rel='stylesheet'">` async pattern with a `<noscript>` fallback. Less ideal (still a network round-trip) but eliminates render-blocking parser stall.
2. **Mood-row image srcset (priority 2):** On the three `.mood-photo img` elements in `index.html` (Bags row, Quilts row, Custom row), add `srcset` and `sizes` attributes. Pexels supports URL parameters like `?auto=compress&cs=tinysrgb&w=450` for mobile and `?w=900` for desktop. Example: `srcset="https://images.pexels.com/.../pexels.jpg?w=450 450w, https://images.pexels.com/.../pexels.jpg?w=900 900w" sizes="(max-width: 768px) 450px, 900px"`. Do NOT change the visual rendering, layout, aspect ratio, or `loading`/`decoding` attributes. Do NOT change which image is referenced. This is a pure delivery optimization.
3. **Re-run Lighthouse mobile + desktop** after both changes land. Update PERFORMANCE.md with the new numbers in a new "Cycle 8" section. Goal: Mobile Performance 74 → 85+.

**Guardrails:**
- Do NOT touch Studio Strip, Hero Ken Burns, Mood-rows visual layout, About, Process panels visual, Shop price text, Custom CTA, Cursor trail, Testimonial source labels, Contact form card visual, Contact textarea placeholder.
- The mood-row srcset edit is a tactical exception per memory rule: image *attributes* only (srcset/sizes), no change to clip-path, accent bars, copy, alignment, or any visual treatment. Confirm rendered output is pixel-identical at 375/414/768/1440px.
- No change to `.mood-photo` CSS rules.
- Do NOT swap the actual image files — `pexels-7998221` etc. stay as-is. Photography decision is user-blocked.
- Memory: apps must NOT look AI-generated — do not regress the cream/espresso/copper artisan identity. Do not introduce visible loading flashes (use `font-display: swap` with preloaded woff2 to keep the FOIT/FOUT minimal).

**Exit criteria:**
- Google Fonts CSS no longer flagged as render-blocking in Lighthouse mobile audit.
- Mood-row images deliver `w=450` on mobile (verifiable via DevTools Network tab @ 375px viewport).
- Mobile Performance score ≥ 80 (stretch: 85+).
- Zero new Lighthouse issues introduced.
- PERFORMANCE.md cycle 8 section appended with before/after numbers.

---

### 2. Spark — Header/nav Frame B (NEVER TOUCHED)

**Why:** Across seven cycles, header/nav has never been a Spark focus area. Pixel touched tap-target sizing (cycle 4, Bugs #9/#10/#5 — all closed) but no editorial/typographic refinement has run. Footer was audited cycle 4 but only for alignment — never visually refined. With every other section on cooldown, this is the only eligible Spark territory. Frame B = refine the existing nav, no new nav components, no piling on.

**Instructions:**
1. Audit current nav state at 1440px and 375px. Note: spacing rhythm of nav-logo / nav-links / nav-cta, letter-spacing on nav-links, the visual treatment of the nav-cta vs the rest of the link row.
2. **Frame B refinements (pick 2-3, ship them all together):**
   - Letter-spacing tightening or loosening on nav-links to match the editorial typography family used in section labels (currently 0.2em on labels, 0.25em on the cycle 3 about-eyebrow). Aim for visual coherence.
   - Subtle hover treatment on nav-links — copper underline that slides in from left, or weight shift, or letter-spacing breath. Pick ONE refinement, not all three.
   - Nav-cta visual hierarchy: the "Custom Order" button should read as the primary call rather than a peer of "Shop / Process / About / Contact". Consider a tiny copper rule above/below or a sharper border than the link row.
   - Logo: if "Made by Molly" wordmark in the nav has any visual rule worth tightening (kerning, italic vs regular Playfair pairing), flag and refine.
3. Mobile (375/414): nav-hamburger affordance is functional but the closed-state hamburger lines could match the L-bracket motif used in About / Contact (thin copper strokes instead of generic horizontal bars). If feasible without rewriting the open/close JS, ship it.

**Guardrails:**
- **MUST respect:** "Spark replaces when adding — no piling on" (memory). Every refinement must replace or refine an existing element. Do NOT add a new sub-nav, new "shop" mega-menu, new mobile drawer features, or new buttons.
- **MUST respect:** "Apps must NOT look AI-generated. Break Claude's default patterns. Each project needs a distinct visual identity." (memory). Avoid generic dark-bar-with-rounded-button conventions. Lean into the cream/espresso/copper artisan editorial palette.
- **MUST respect:** "Frame B keeps content count" (memory). 4 link items + 1 logo + 1 CTA + 1 hamburger. No additions, no removals.
- Do NOT change nav z-index relationships (Bug #5 fix relies on overlay z:1002 > hamburger z:1001).
- Do NOT touch tap-target heights — `min-height: 44px` on `.nav-cta` was a Pixel cycle 4 fix.
- Do NOT touch nav functional JS (hamburger toggle, scroll-direction hide/show, smooth-scroll href guard).
- FORBIDDEN sections (do NOT touch): Studio Strip, Hero Ken Burns, Mood rows visual, About, Process panels visual, Shop price text, Custom CTA, Cursor trail, Testimonial source labels, Contact form card visual, Contact textarea placeholder, Testimonial carousel mechanics, Footer (Pixel handles this cycle).

**Exit criteria:**
- 2–3 refinements shipped to header/nav, all replacements/refinements of existing elements.
- Mobile + desktop visual verification at 375/414/768/1440px.
- Zero functional regressions (nav still scrolls, hamburger still toggles, smooth-scroll still works).
- Section content count unchanged.

---

### 3. Pixel — Footer visual refinement + center-alignment audit (NEVER TOUCHED VISUALLY)

**Why:** Footer was alignment-audited cycle 4 (passed) but never visually refined. With Spark on header/nav this cycle, the symmetry is intentional: the two never-refined navigational bookends of the page get one polish pass each. Pixel handles the footer because Pixel owns alignment + small typographic polish, and this is closer to Pixel's territory than Spark's editorial refinement.

**Instructions:**
1. **Center-alignment sweep at 375/414** per memory rule ("Pixel must always audit center-alignment consistency on mobile"). Check:
   - Header/nav (after Spark's pass — verify nothing broke)
   - Hero, mood rows, Process, About, Studio Strip, Custom CTA, Testimonials, Contact, Footer at 375 and 414.
   - Document any drift in BUGS.md.
2. **Footer visual refinement** (this is Pixel's primary deliverable this cycle):
   - Footer was audited cycle 4 (`.footer-inner grid 1fr text-align:center` etc. — alignment pass). It was never given an editorial/typographic refinement. Apply the same level of polish that About got in cycle 3 and Custom CTA got in cycle 4.
   - Specific candidate refinements: footer-col-title letter-spacing + size hierarchy, copper hairline rule between footer rows, footer-bottom typography (currently 12px — flagged in Bug #17), social-link affordance (hover state, sizing), footer-made attribution treatment.
   - Bug #17 connection: footer-copy + footer-made + footer-col-title are 12px. Pixel may bump 1-2 of these to 13-14px IF it does not break the editorial hierarchy. This is a tactical exception that addresses an open bug while polishing the footer.
3. **Bug #21** (process arrow snap): if Pixel has bandwidth, fix the hover-state animation snap on `.process-fp-closing-arrow`. The arrow IS in the closing process panel — current open. Pure CSS transition fix (don't kill the bob animation, just smooth the hand-off).

**Guardrails:**
- **MUST respect:** Pixel must always audit center-alignment 375/414 (memory).
- **MUST respect:** No ghost numbers / faded background numerals (memory) — do NOT add giant faded section numbers to footer.
- **MUST respect:** "Apps must NOT look AI-generated" — avoid generic three-column footer with social icons + newsletter. Lean into the Made by Molly editorial palette.
- **MUST respect:** "Frame B keeps content count" — no new footer columns, no new newsletter signup, no new contact info. Refine what's there.
- Do NOT touch any of the cooled sections listed in the Spark guardrails.
- Bug #21 fix is OK because the arrow is on the Process closing panel — Process *visual* is on cooldown, but a hover-animation hand-off micro-fix is mechanical, not visual refinement of the panel itself. Tactical exception. If unsure, defer.

**Exit criteria:**
- Footer has 2–3 visual refinements that elevate it above the alignment-only state.
- Mobile center-alignment sweep documented at 375/414 across all sections.
- Bug #17 partially or fully addressed if footer typography work touches it.
- Bug #21 closed if attempted.
- BUGS.md updated.

---

### 4. Nigel — re-score cycle 8

**Why:** Required at the end of every cycle. Validates cycle 8 work and re-anchors the score.

**Instructions:**
1. Read AGENT-PLAN.md and the cycle 8 changelog entries from the three preceding agents.
2. Live-audit the site post-cycle-8.
3. Score sections affected this cycle: Mobile UX (perf), Header/Nav, Footer. Other sections untouched — sub-scores hold.
4. Update AUDIT.md with cycle 8 entry.
5. Append new SCORES.log line.
6. **Score expectation:** Cycle 8 is unlikely to break 7.5. Mobile Performance gains are buyer-relevant but the photography ceiling is unchanged. The trajectory (6.8 → 7.0 → 7.2 → 7.3 → 7.4 → 7.4 → 7.5) shows the asymptote. Score may move 7.5 → 7.5 (held) or 7.5 → 7.6 IF the perf gain is meaningful AND header/nav + footer refinements register as buyer-perceptible quality. **Do NOT inflate above 7.6.** Memory rule: "Nigel scores stricter — sits 5.5–7.5".
7. **If the perf push fails to land** (no Mobile Perf score gain) and header/nav + footer refinements feel like polish without conversion impact, score should hold at 7.5. That's honest.
8. Re-state the photography ceiling and Bug #27 brand decision as user-blocked items in the cycle 9 priorities.

**Guardrails:**
- **MUST respect:** "Nigel never removes quality" (memory) — never recommend removing glows, animations, effects, cursor trail, or any decorative element. Only add or improve.
- **MUST respect:** "Nigel scores stricter" — do NOT push past 7.5 without real photography movement.
- **MUST respect:** "No invented fight data / no fabricated content" (memory, generalized) — do NOT hallucinate buyer testimonials, fictional shop traffic stats, made-up review counts, or fabricated data points.
- **MUST respect:** Respectful tone (memory) — never frame the user as a bottleneck on the photography decision. Frame collaboratively: "this site is pre-launch quality and waiting on the maker's photo shoot to unlock the next ceiling."
- Re-state cycle 9 priorities including the photography ceiling.

**Exit criteria:**
- AUDIT.md cycle 8 entry written.
- SCORES.log appended.
- Cycle 9 top-3 priorities listed.
- Photography ceiling and Bug #27 surfaced as user-blocked.

---

## Cycle 8 Forbidden Sections (apply to Spark + Pixel agents above)

Studio Strip, Hero Ken Burns, Mood rows visual layout, About, Process panels visual, Shop price text, Custom CTA, Cursor trail, Testimonial source labels, Contact form card visual, Contact textarea placeholder, Testimonial carousel mechanics. Mood-row image *attributes* are a tactical Performance exception only — NOT a visual touch.

---

## Memory Guardrails Reinforced This Cycle

Every agent MUST respect:
- Apps must NOT look AI-generated. Cream/espresso/copper artisan identity. Each project needs a distinct visual identity.
- Spark replaces when adding — no piling on.
- Frame B keeps content count.
- Pixel always audits center-alignment 375/414.
- Nigel never removes quality.
- Nigel scores stricter — 5.5–7.5 range. Do NOT inflate above 7.5 without real photography.
- No ghost numbers / faded background numerals.
- No fabricated content / fake testimonials / invented data.
- Respectful tone — never call user a bottleneck.
- Performance fixes for image attributes (srcset/sizes) on cooled visual sections are OK as long as visual rendering does not change. This is a tactical exception.

---

## User-Blocked Items (carried forward, NOT dispatched)

1. **Original photography** — `pexels-7998221` in About + Process closing panel. Hard ceiling at 7.5. No agent can move this.
2. **Bug #27** — Copper section-label contrast (2.50:1, fails WCAG AA). Three options for user: darken copper for label-only use, bump label font-size to 14px+, or accept as conscious brand choice.
3. **User reply on pause/continue/pivot** — score has plateaued, user was asked, no reply yet. Cycle 8 proceeds because real perf work exists. If cycle 9 finds nothing left, auto-pause prompt fires.

---

## Why This Cycle Is Not Auto-Paused

Memory rule: "Auto-pause idle loops — pause after 2 no-change cycles." Cycle 6 → 7 was +0.1 (not no-change). Cycle 7 → 8 expected ~0 to +0.1. If cycle 8 → 9 is also flat AND mobile perf goal is met (no remaining concrete work), THEN auto-pause prompt fires to user. Cycle 8 has the perf push as concrete, never-attempted, score-floor-relevant work — running it is the right call.
