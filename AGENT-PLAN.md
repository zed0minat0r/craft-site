# AGENT-PLAN — Cycle 6

**Date:** 2026-04-26
**Coordinator dispatch:** cycle 6
**Live:** https://zed0minat0r.github.io/craft-site/
**Focus axis:** Performance + cleanup (pivot — visual sections at cooldown saturation)
**Score:** 7.4 / 10 (ceiling 7.5 without real photography)

---

## Dispatch rationale

Score has climbed 6.8 → 7.0 → 7.2 → 7.3 → 7.4 across five cycles, gaining 0.6 entirely through additive visual + UX work. The 7.5 ceiling is hard-capped on real photography (Nigel cycles 2–5, all confirming). Of 10 sections, 8 are on cooldown this cycle — stacking another visual addition would either re-touch a cooled section or pile on (violating simplicity-over-polish memory rule).

This cycle pivots to **work that has never run before**: a Performance pass (Lighthouse LCP/CLS/payload — never measured), a Razor pass (dead-CSS sweep across 5 cycles of edits), and the first holistic QA pass (Playwright at all breakpoints — Pixel has only done targeted alignment sweeps). Nigel re-scores honestly against a cleanup-improved baseline.

BUGS #27 (copper section-label contrast 2.50:1) is **surfaced to the user for a brand decision** and explicitly OFF the table for agents to attempt unilaterally.

This is a "raise the floor" cycle, not a "raise the ceiling" cycle.

---

## Agents — Execution order

### Agent 1 — Performance (NEW — never run)

**Why now:** Five cycles of additive code — cursor trail canvas IIFE (cycle 4), testimonial touch IIFE with rAF + matrix capture (cycle 5), process dot ARIA wiring (cycle 5), form submit handler, reveal observer, Ken Burns parallax — none have been profiled. JS bundle is at its largest point in the project. Bug #4 (mobile loads `display:none` hero inset image) and Bug #16 (Google Fonts via CSS `@import` — render-blocking despite preconnect hints) are both confirmed open and both performance-relevant.

**Specific instructions:**
1. Run Lighthouse against the live URL: `npx lighthouse https://zed0minat0r.github.io/craft-site/ --form-factor=mobile --output=json --output-path=./lighthouse-cycle6-mobile.json`. Capture: LCP, CLS, INP, total bundle weight, render-blocking resources, unused JS/CSS percentages. Same for `--form-factor=desktop`.
2. Verify Bug #4 via DevTools Network tab on a 375px viewport: confirm `.hero-product-inset img` still downloads despite being `display:none`. Fix with `loading="lazy"` minimum, or add `<picture>` with mobile `<source media="(max-width: 768px)" srcset="">` to skip the download.
3. Verify Bug #16: `style.css` line 5 `@import url('https://fonts.googleapis.com/...')` is render-blocking. Move to `<link rel="stylesheet" href="...">` in `<head>` to honor existing preconnect hints. Remove the `@import` line.
4. Profile cursor-trail.js: confirm clean exit on `pointer:fine` mismatch (mobile) and `prefers-reduced-motion`. Confirm rAF loop disposes when pointer leaves window — leak check with DevTools Performance tab.
5. Profile testimonial touch IIFE (`main.js`): confirm `touchmove` listener is `{ passive: true }` where applicable (scroll-perf hit otherwise). If touchmove participates in swipe-detection it may need to remain non-passive — document the trade-off.
6. Document findings in `PERFORMANCE.md` (new file, append-style). Apply ONLY low-risk wins this cycle: lazy-load fix, `@import` → `<link>`, passive listeners. No major refactors.

**Memory guardrails:**
- Do NOT remove any glow / animation / cursor / Ken Burns / reveal — those are quality, not bloat (Nigel-never-removes rule).
- Do NOT suggest dropping the cursor trail. It is a wow-layer shipped cycle 4 and Nigel scored it positively.
- Do NOT touch any cooled visual section.
- Apps must NOT look AI-generated — preserve cream/espresso/copper artisan identity even when removing render-blocking CSS.
- Respectful tone in PERFORMANCE.md commentary.

**Forbidden sections:** Studio Strip, Hero Ken Burns, Mood rows visual, About, Process panels visual, Shop price text, Custom CTA, Cursor trail behavior, Testimonial source labels, Testimonial carousel mobile UX, Contact form card visual, Contact textarea placeholder.

**Exit criteria:**
- Lighthouse mobile + desktop reports archived in PERFORMANCE.md (LCP / CLS / INP + bundle weight).
- Bug #4 closed (mobile no longer downloads hidden hero inset image).
- Bug #16 closed (fonts loaded via `<link>`, not `@import`).
- Cursor trail + testimonial IIFE leak check documented.
- Visual diff at 375 + 1440 shows zero rendered change.
- All changes pushed; CHANGELOG-AGENT.md appended.

---

### Agent 2 — Razor (dead-CSS cleanup — never run)

**Why now:** Five cycles of additive edits with multiple element removals — `.contact-trust` outer div removed (Spark cycle 5), `.testimonial-source` pill border removed (Builder cycle 4), `.custom-cta::before` watermark removed (Spark cycle 4), `.process-fp-content` bottom-anchor positioning replaced with `top:50%/translateY(-50%)` (Pixel cycle 3 hotfix). Orphaned CSS rules from removed elements add bytes and confuse future agents. Razor never run on this project.

**Specific instructions:**
1. Audit `style.css` for selectors targeting elements/classes no longer in `index.html`. Cross-reference every selector against current HTML and JS dynamic class additions.
2. Specifically inspect for orphaned rules from these known removals:
   - `.contact-trust` outer div (removed cycle 5 — content promoted into card; check for leftover flex/border/spacing rules)
   - `.testimonial-source` pill border (removed cycle 4 — leftover `border` / `padding` / `border-radius` declarations on the selector?)
   - `.custom-cta::before` watermark (removed cycle 4 — full block + mobile suppressor; confirm both gone)
   - `.process-fp-content` bottom-anchor positioning (replaced cycle 3 — leftover `bottom:` declarations alongside the new `top:50%`?)
   - `html { scroll-behavior: smooth }` (already removed; confirm only the comment marker remains at line 29)
3. Remove ONLY rules with zero matches in `index.html` AND zero matches in `main.js` / `cursor-trail.js` dynamic class additions.
4. Run a final byte count delta — report in CHANGELOG-AGENT.md.
5. Bug #23 (redundant `margin-left:auto; margin-right:auto` on `.studio-pull-quote` inside `text-align:center` parent) — close it via removal.
6. Bug #4 likely owned by Performance — coordinate; do not double-fix.

**Memory guardrails:**
- Razor never removes anything actively used. Bias toward leaving in if uncertain. Cost of removing a live rule is far worse than dead bytes.
- Do NOT touch any glow, animation, cursor effect, reveal observer, hover state, or focus-visible rule. Those are intentional quality.
- Do NOT remove rules scoped to `@media (prefers-reduced-motion)` — those are accessibility commitments.
- Do NOT touch styles for cooled sections without first verifying the selector is truly orphaned.
- Apps must NOT look AI-generated — visual identity must survive cleanup.
- Nigel-never-removes rule applies to Razor too: when in doubt, leave it.

**Forbidden sections:** Same cooldown list as Agent 1. Razor may TOUCH `style.css` broadly but may not remove any visible style from any cooled section.

**Exit criteria:**
- Orphaned-rule audit appended to CHANGELOG-AGENT.md (specific selectors removed + byte delta).
- Bug #23 closed.
- Visual diff (manual screenshot at 375 + 1440) shows zero change to any rendered section.
- Pushed.

---

### Agent 3 — QA (full Playwright sweep — first holistic QA pass)

**Why now:** Pixel has done targeted alignment sweeps, Accessibility ran cycle 5, but a full regression QA across 5 cycles of changes has never run. Bug #6 (studio strip 20px loop jump) needs definitive verification — the original BUGS.md says `*4` is correct, but Builder cycle 1 changed it to `*5`. One side is wrong and that math is checkable. Bug #12 (testimonial loop seamlessness on narrow mobile) was partially addressed cycle 2 but not verified. Bugs #19, #20, #21 still open.

**Specific instructions:**
1. Run Playwright at 375px, 414px, 768px, 1440px. Test scenarios:
   - Page load + scroll-to-each-section + screenshot at each breakpoint.
   - Hero Ken Burns: scroll 1px, confirm scale not lost (Bug #3 verification — Builder cycle 2 said it was already fixed).
   - Studio strip desktop: record 30s of loop animation, confirm no 20px jump at boundary (Bug #6 — definitive answer).
   - Testimonial track desktop + 375px: record 30s of loop, confirm seamless on narrow viewport (Bug #12).
   - Process dots: keyboard tab through, confirm focus ring visible and `aria-selected` updates as user scrolls.
   - Contact form: submit with valid + invalid inputs, confirm `?submitted=1` redirect flow shows success div.
   - Cursor trail: confirm canvas only renders on `pointer:fine`, dispose on viewport blur.
   - Form submit error path (Bug #20): simulate Formspree HTTP error — confirm button does NOT stay stuck on "Sending..." (currently broken per BUGS.md).
2. Hunt for new regressions across all 5 cycles of edits. Document with screenshots.
3. Definitively resolve Bug #6 by measuring the actual gap between item 5 and item 6 (duplicate 1) at the loop boundary in DevTools. If current `*5` is wrong, file an issue (do NOT fix this cycle — Builder owns cycle 7).
4. Verify Bug #12 by recording the testimonial track at 375px for two full loop cycles.
5. Open new bug entries for any regression found. Do NOT fix them this cycle — QA reports, doesn't repair.

**Memory guardrails:**
- Pixel always audits center-alignment on mobile at 375/414. QA inherits this — confirm centering on every section at both widths.
- Test from a real buyer's perspective. Nigel's 5.5–7.5 range applies. A regression a real buyer would notice matters more than a developer-only quirk.
- Do NOT modify any code. QA only documents.

**Forbidden:** No code edits. Documentation only. New bugs go to BUGS.md as open entries; closed bugs may be re-opened with screenshot evidence.

**Exit criteria:**
- `QA-CYCLE-6.md` (new) with breakpoint screenshots + pass/fail per scenario.
- Bug #6 definitively resolved (math + measurement).
- Any new regressions added to BUGS.md as open entries.
- Pushed.

---

### Agent 4 — Nigel (re-score)

**Why now:** Standard end-of-cycle re-score. Cycle 6 is structurally different — no visual additions, only floor-raising work. Nigel must score honestly: invisible quality work (perf, dead-CSS, QA verification) does NOT move the conversion-friction score for a 30-second buyer scan. The score may hold at 7.4. That is acceptable and correct — the cycle was deliberately invisible.

**Specific instructions:**
1. Re-audit at 375px + 1440px against the rubric.
2. Score from a real buyer's POV. Floor-raising work that's invisible to a sighted 30-second scan should NOT inflate the score.
3. If the score holds at 7.4 because the cycle was correctly invisible, write it that way. Do NOT invent a delta to justify activity.
4. Surface BUGS #27 (copper section-label contrast 2.50:1) again as priority 2 — blocked on user brand decision and the agent team cannot resolve it. List the three options for the user (see "BUGS #27 surfaced" section below).
5. P1 remains real photography — unchanged across all 6 cycles. State this directly.
6. Top 3 priorities for cycle 7 should reflect: (1) photography, (2) BUGS #27 brand decision, (3) whatever cycle 6 surfaces (Performance regressions, QA-found bugs, etc).
7. Update AUDIT.md with cycle 6 results. Append SCORES.log.

**Memory guardrails:**
- Nigel scores stricter — new-ish artisan site sits 5.5–7.5. Do NOT inflate above 7.5 without real photography movement.
- Nigel never recommends removing glows / animations / effects. Only adds or improves.
- No fabricated data — all scores must trace to specific cycle 6 evidence.
- Respectful tone — never call user a bottleneck on photography or brand decision. Frame collaboratively.
- Apps must NOT look AI-generated — penalize any drift toward generic Claude defaults.

**Forbidden:** No code edits. AUDIT.md update + SCORES.log append + CHANGELOG-AGENT.md entry only.

**Exit criteria:**
- AUDIT.md updated with cycle 6 verdict + section deltas + 3 priorities for cycle 7.
- SCORES.log appended.
- CHANGELOG-AGENT.md appended.
- Pushed.

---

## Forbidden sections this cycle (cooldown list)

- Studio Strip (cycle 1)
- Hero Ken Burns (cycle 2)
- Mood rows visual (cycle 2)
- About (Spark cycle 3)
- Process panels visual (Pixel cycle 3 hotfix + Accessibility cycle 5 ARIA)
- Shop price text (Builder cycle 3)
- Custom CTA (Spark cycle 4)
- Cursor trail behavior (Builder cycle 4)
- Testimonial source labels (Builder cycle 4)
- Testimonial carousel mobile UX (Builder cycle 5)
- Contact form card visual (Spark cycle 5)
- Contact textarea placeholder (Builder cycle 5)

## NOT scheduled this cycle (and why)

- **Builder:** Most open bugs Builder would fix are owned by Performance (Bug #4, #16) or Razor (Bug #23). Bug #6 needs QA verification first — Builder may run cycle 7 after QA delivers definitive measurement.
- **Spark:** Every visual section is on cooldown. Spark needs at least one decoolied section to avoid piling on. No work this cycle.
- **Pixel:** Accessibility ran cycle 5; QA full sweep this cycle covers alignment regression at the same breakpoints. Pixel returns cycle 7 if QA surfaces alignment issues.
- **Scout:** Cycle 3 catalog has live runner-up (layered telescope zoom) blocked on real photography. New research not needed until photography unlocks.
- **Accessibility:** Ran cycle 5. WCAG floor raised. Returns cycle 8 (3-cycle cadence) unless QA surfaces a regression.

## BUGS #27 — surfaced for user decision (NOT for agents)

Copper section-label contrast 2.50:1 fails WCAG AA for small text (0.8rem). Three options:

**(a)** Darken copper for label use only (e.g. `#b87040`). Add new CSS variable `--copper-text` separate from `--copper`. Preserves original copper for accents/decoration/cursor trail. Cleanest fix.

**(b)** Increase `.section-label` font-size from 0.8rem to 1rem (qualifying as large text under WCAG, 3:1 threshold instead of 4.5:1). Risks visual hierarchy side-effects across all sections.

**(c)** Accept as conscious brand choice. Document the WCAG exception in BUGS.md. No code change.

Coordinator recommendation: **(a)**. But agents may NOT choose unilaterally.

---

## One-line rationale

Cycle 6 pivots to performance + cleanup + QA — eight visual sections are on cooldown, the score is one tick from its 7.5 photography ceiling, and floor-raising work has never run.
