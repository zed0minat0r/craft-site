# AGENT-PLAN — Cycle 7

**Date:** 2026-04-26
**Coordinator dispatch**
**Score going in:** 7.4 (held cycle 6) | Ceiling: 7.5 without real photography
**Focus axis:** Bug closure + performance verification (no new visual surface)
**Live:** https://zed0minat0r.github.io/craft-site/

---

## Rationale (one line)

Cycle 6 raised the floor invisibly; cycle 7 closes the one remaining live visible defect (Bug #28), verifies the perf fixes actually landed, sweeps any leftover open bugs, and re-scores — every cooled section is forbidden, photography is blocked on user, Bug #27 is blocked on user.

---

## Scheduled Agents (4, in execution order)

### 1. Builder — Bug #28 one-line testimonial fix

**Why now:** Testimonial carousel mechanism cooldown from cycle 5 has expired. Bug #28 is the one remaining live, visible defect on the page — a 12px stutter on every loop cycle of the trust section, measured at all four viewports by QA cycle 6. The fix is one CSS line. AUDIT cycle 6 Priority 2.

**Specific instructions:**
- Open `/Users/modica/projects/craft-site/style.css`, locate `.testimonials-track` rule.
- Add `padding-right: 24px;` to `.testimonials-track` (and only that — do not touch `padding-left`, do not touch the mobile override).
- This makes `scrollWidth` go from 3216 to 3240 at 375px, so `translateX(-50%)` lands at -1620px exactly — the card[0]->card[5] distance. Loop seam closes.
- Verify the existing mobile media query override at `@media (max-width: 768px)` does not reset padding-right; if it does, mirror the change there.
- Do NOT touch testimonial card markup, copy, source labels, dot indicators, or the touch IIFE.
- Update `BUGS.md` to mark Bug #28 CLOSED with a one-line note linking to the commit.
- Update `CHANGELOG-AGENT.md` with one line.

**Memory guardrails:**
- No invented data — testimonials are already honest-attribution; do not edit any source label or copy.
- Spark replaces when adding rule — Builder here is only adding one declaration to an existing selector, not piling on.
- Pixel-alignment is downstream concern; this fix is purely scrollWidth math.

**Forbidden sections (do not touch):** Studio Strip, Hero, About, Process panels, Mood rows, Shop prices, Custom CTA, Cursor trail, Contact form card, Contact textarea placeholder, Footer, Header/nav, testimonial source labels, testimonial copy, testimonial card structure.

**Exit criteria:**
- One CSS declaration added to `.testimonials-track`.
- BUGS.md #28 marked CLOSED.
- CHANGELOG entry written.
- No other files changed.

---

### 2. Performance — Lighthouse re-run + verification

**Why now:** Cycle 6 Performance shipped five fixes (deferred main.js, 3x font preloads, hero contain, favicon, empty-srcset picture wrap) but did NOT re-run Lighthouse (GitHub Pages propagation cited). One full cycle has now passed — propagation is done. Without confirmed numbers, Nigel is still holding the score and discounting the floor-raise. AUDIT cycle 6 explicit blocker: "Mobile LCP improvement is genuine but unconfirmed in magnitude — holding until a re-run Lighthouse score validates it."

**Specific instructions:**
- Re-run Lighthouse against the live URL `https://zed0minat0r.github.io/craft-site/` for both mobile and desktop.
- Update `/Users/modica/projects/craft-site/PERFORMANCE.md` with a clearly-labelled "Cycle 7 re-run" section showing: Performance, Best Practices, Accessibility, SEO scores for both form factors, plus key metrics (LCP, CLS, TBT, FCP).
- Compare against the cycle 6 baseline (P=66 mob / 85 desk; BP=73 both; A=97 both; S=100 both) and call out which fixes hit, which didn't, and the magnitude of LCP improvement on mobile.
- Floor expectations Nigel set: Performance >= 90, Best Practices >= 95.
- If a regression exists, surface it — do NOT ship more code; just report.
- If everything passed: write a one-line summary that QA/Nigel can cite to unblock score advancement.
- No code changes this run unless a clear regression is discovered AND the fix is one declaration.

**Memory guardrails:**
- Do NOT add fabricated numbers — paste actual Lighthouse output.
- Respectful tone — if a fix didn't fully land, frame as "next-cycle candidate" not "Performance failed."
- Apps must not look AI-generated — this is verification, not new visual surface.

**Forbidden sections:** All visual sections on cooldown. Performance does not touch HTML or CSS unless a regression appears.

**Exit criteria:**
- PERFORMANCE.md cycle 7 re-run section written with real numbers.
- Verdict line: "Cycle 6 fixes confirmed" or "Regression at X" with specifics.
- CHANGELOG entry.

---

### 3. QA — Spot-check Bug #28 fix + bug-sweep remaining open

**Why now:** Builder will have shipped the one-line testimonial fix earlier in the cycle. QA needs to verify it actually closed the seam, check no regression in the carousel touch UX or dot indicators, and sweep any remaining open BUGS.md items (#8 mobile mood-row direction, #17 12px label sizes, #19 mobile studio strip duplicates, #21 process arrow hover snap). Several of these have ambiguous status across cycles.

**Specific instructions:**
- Re-run Playwright against live URL across 375 / 414 / 768 / 1440 viewports.
- Specific Bug #28 verification: measure `.testimonials-track` scrollWidth post-fix and confirm `halfWidth x 2 = scrollWidth` exactly. Watch the loop boundary across at least 2 full cycles per viewport — should be visually seamless.
- Verify the touch UX (pause on touchstart, resume after 4s on touchend, swipe >=50px, dot indicator tracking) still works after the padding change.
- Sweep: BUGS.md #8 (mobile mood-row wipe direction — Pixel cycle 2 claimed fix, verify present), #19 (mobile studio strip 10-item dead-end — confirm whether still genuine or whether opacity:1 hover-overlay fix mitigates), #21 (process arrow hover snap — never touched).
- Update BUGS.md statuses based on what you actually find. Do NOT close anything you can't verify.
- Take screenshots into `qa/screenshots/cycle7/`.
- Save a `QA-CYCLE-7.md` report.

**Memory guardrails:**
- Pixel-alignment focus: also re-verify center-alignment at 375px on testimonials post-fix (the padding-right change can subtly shift card layout). Confirm `.testimonial-rating-row` still flush, dots still centered.
- No invented findings — only report what you measured.
- No fabricated content.

**Forbidden sections:** All cooled visual sections — QA only verifies, does not edit any visual code outside reporting.

**Exit criteria:**
- QA-CYCLE-7.md written.
- Bug #28 verified closed with measurement.
- 4+ open BUGS.md items have updated status.
- CHANGELOG entry.

---

### 4. Nigel — Re-score with confirmed perf numbers + Bug #28 closed

**Why now:** Two scoring blockers from cycle 6 should resolve this cycle: Bug #28 fix lands (testimonials section 7.3 -> 7.4 per Nigel cycle 6 explicit promise), and Lighthouse re-run confirms perf magnitude (unblocks mobile UX sub-score). Without re-scoring, the loop will look stuck.

**Specific instructions:**
- Read AUDIT.md cycle 6, the new PERFORMANCE.md cycle 7 section, the new QA-CYCLE-7.md, and the closed Bug #28 entry.
- Score from a real artisan-textile buyer's perspective on a mobile phone arriving from a craft-show postcard QR code.
- Score range realistic: 7.4 still likely. 7.5 reachable if perf gains are large AND testimonials seam genuinely seamless. NOT above 7.5 — that ceiling holds without original photography.
- Update AUDIT.md as a fresh cycle 7 audit (replace current contents — no history accumulation, the table at the bottom is the only history).
- Append cycle 7 row to the audit history table.
- Append one line to SCORES.log.
- Write Nigel's top 3 priorities for cycle 8. Photography stays Priority 1 until it ships. Bug #27 stays as P2/P3 user blocker. New P3 candidate from the cycle 6 brainstorm: back-to-top affordance for mobile (page is 12-14 viewport lengths) OR contact form success-state delight OR ambient-sound toggle as next "wow" — pick whichever has the cleanest path that doesn't touch a cooled section.

**Memory guardrails:**
- Nigel scores stricter — new artisan site sits 5.5–7.5. Do NOT inflate above 7.5.
- Nigel never recommends removing glows/animations/effects.
- No ghost numbers / no faded background numerals on any recommendation.
- No fabricated content / no fake testimonials / no invented data.
- No dev / template-marketplace content.
- Respectful tone — never call user a bottleneck. The photography blocker is a user-decision, frame collaboratively ("when ready").
- Apps must not look AI-generated — recommendations should reinforce cream/espresso/copper artisan identity.
- Bug #27 is blocked on user brand decision — surface as user-input-needed, do NOT instruct an agent to attempt it next cycle.

**Forbidden sections:** Nigel does not touch code — only AUDIT.md and SCORES.log.

**Exit criteria:**
- AUDIT.md replaced with cycle 7 audit.
- History table extended.
- SCORES.log appended.
- 3 priorities for cycle 8 written.
- CHANGELOG entry.

---

## What is NOT happening this cycle, and why

- **Spark:** Every visual section it could touch is cooled. Forcing Spark would risk piling on cooled sections or inventing a new section to refine. Skip.
- **Pixel:** Center-alignment was last swept cycle 5; will be re-checked by QA on the testimonial post-fix. Skip a dedicated pass.
- **Refiner / Razor:** Cycle 6 just ran a full dead-CSS audit. Nothing new to remove.
- **Scout:** SCOUT.md has the Layered Telescope-Zoom queued but it's blocked on real photography. Wow-candidate brainstorm at this point would be speculative — defer until the score budget actually opens.
- **Accessibility:** Cycle 5 ran a full axe-equivalent pass. The remaining a11y blocker is Bug #27, blocked on user.
- **Builder for Bug #27:** Blocked on user brand decision, surfaced in Nigel's priorities as user-input-needed.

---

## Stop conditions

- If Builder cannot find the `.testimonials-track` rule cleanly (style.css drift), stop and report — do not invent.
- If Performance Lighthouse run fails / propagation issue / numbers worse than cycle 6 baseline → stop, write findings to PERFORMANCE.md, do NOT have Builder ship more code in the same cycle.
- If QA finds Bug #28 fix didn't close the seam → stop the cycle there, mark it for cycle 8 re-attempt.
- 30-tool-call hard cap per agent.

---

## Cooldowns enforced this cycle

Studio Strip, Hero Ken Burns, Mood rows visual, About, Process panels visual, Shop price text, Custom CTA, Cursor trail, Testimonial source labels, Contact form card visual, Contact textarea placeholder, Footer (cycle 4 visual), Header/nav (no agent has it as primary).

The only section where visual code may be edited this cycle: testimonials (one CSS line in `.testimonials-track`, Builder only).

---

## User-blocked items (surfaced, not dispatched)

- **Real photography (P1)** — pexels-7998221 in About + closing Process panel. Hard ceiling at 7.5. One real product or maker photo unblocks the whole trajectory.
- **Bug #27 — copper section-label contrast** — 2.50:1 vs WCAG 4.5:1 floor for 12.8px text. Three options: (a) darken copper slightly for label use only (e.g. #b87040), (b) bump label size to 14pt+, (c) accept as conscious brand choice. Needs user input.
