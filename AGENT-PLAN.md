# AGENT-PLAN — Cycle 10
**Date:** 2026-04-25 (ET)
**Coordinator:** Cycle 10 dispatch
**Project:** Made by Molly (craft-site)
**Live:** https://zed0minat0r.github.io/craft-site/
**Score state:** 7.5 held 3 consecutive cycles (7, 8, 9)
**Decision:** REAL CYCLE — three concrete candidates qualify as genuine value, not polish-on-polish

---

## Honest Assessment

Cycle 9 closed the post-submit funnel gap (success state) but flagged two unfinished threads:

1. Pixel cycle 9 explicitly surfaced `.about-location-tag` (11.2px) and `.testimonial-source` (10.8px) as below-13px-floor accessibility violations. Cycle 9 set the precedent by raising form labels (11.5→13px) and explicitly noted "cooled-section freeze does not apply to accessibility floor violations." Leaving these is inconsistent with the policy just enforced.

2. Performance cycle 9 explicitly noted: "CSS minification and rAF fix will show on the next post-push run." The Mobile P=72-73 reading was pre-push, with Pexels CDN cold-cache jitter. Whether 84→90 landed remains unverified.

3. The contact form's mid-submit moment ("Sending..." button text → blank → ?submitted=1 redirect) has no designed loading/sending state. Cycle 9 designed the post-submit close; the parallel pre-success moment is the symmetric funnel gap. BUGS #20 also notes the "Sending..." text never resets on Formspree HTTP errors.

This is NOT a no-op cycle. Auto-pause does not fire.

---

## Cycle 10 Schedule (4 agents)

### 1. Pixel — A11y Floor Pass (Sub-13px Compliance)
**Brief:** Fix the two below-floor text instances Pixel cycle 9 flagged but did not touch:
- `.about-location-tag` 0.7rem → 0.8125rem (13px)
- `.testimonial-source` 0.675rem → 0.8125rem (13px)

Both are accessibility floor violations under the policy cycle 9 just established (form labels 11.5→13px). Re-minify `style.min.css` after edits. Confirm 375/414 alignment unchanged (font-size bump is ~2-2.5px height delta per element, negligible layout impact).

**Memory rules to respect:**
- Pixel must always audit center-alignment consistency on mobile (375/414)
- Nigel never removes glows/animations — Pixel doesn't either
- No ghost numbers / fabricated content
- Apps must NOT look AI-generated — preserve the brand voice

**Forbidden:** Studio Strip, Hero Ken Burns, Mood rows visual layout, Process panels visual, About section visual (only the location-tag font-size, nothing else), Custom CTA, Cursor trail, Contact card visual, Contact textarea, Testimonial carousel mechanics, Header/nav, Footer, Section-label sizing (already done cycle 8). Do not introduce new visual changes — this is a font-size compliance pass only.

---

### 2. Performance — Cycle 10 Verification Re-run
**Brief:** Run Lighthouse mobile + desktop AFTER cycle 9 fixes have propagated to GitHub Pages. Cycle 9 was pre-push; cycle 10 is the post-push confirmation. Goal: verify whether Mobile P 84 → 90 landed (rAF idle-exit + CSS minification -12KB + nav reflow guard).

If Mobile P confirms ≥90, mark the floor met in PERFORMANCE.md.
If still below 90 due to Pexels CDN, document the variance honestly — do NOT chase a fix that can't change the third-party CDN cookies score (Best Practices 77 is unaddressable without real photography per cycle 6+).

**Memory rules to respect:**
- No content in agent loops — UI/UX only, no fabricated content
- Respectful tone in PERFORMANCE.md updates
- Apps must NOT look AI-generated

**Forbidden:** No new code changes. This is verification only. Do not minify further, do not change image strategy, do not touch CSS. Only run Lighthouse, record numbers, update PERFORMANCE.md with cycle 10 readings, note any variance.

---

### 3. Spark — Frame B: Contact Form Sending/Loading State
**Brief:** Design the mid-submit moment between user click and Formspree redirect. Currently `main.js` line 181-185 sets `btn.textContent = 'Sending...'` and disables the button — no further visual treatment, no maker-voice copy, no error handling. The success state (cycle 9) closes the post-submit; this closes the gap during submit.

Frame B = refine in place: keep the existing submit button structure but:
- Replace bland "Sending..." with maker-voice copy ("Sending it over...", "On its way...", or similar — first-person, warm, matches the success state tone)
- Add a subtle visual cue (copper hairline pulse, button color shift, or inline copper dot — anything coherent with the success state's L-bracket/copper-hairline vocabulary)
- Address BUGS #20: if Formspree returns an HTTP error or 12s passes with no redirect, reset button to enabled state with retry copy ("Hmm, try again?" or similar). The 12s safety reset already exists in main.js (BUGS #20 verified) — this cycle wires real copy into it.

Content count: 1 button before, 1 button during, 1 button after error. No piling on. Frame B keeps content count.

**Memory rules to respect:**
- Apps must NOT look AI-generated — break Claude default patterns
- Spark replaces when adding — Frame B keeps content count
- Interesting scroll experiences / unique design — match the editorial tone of the success state
- No fabricated content (no fake "Email sent to molly@..." — the form goes to Formspree, copy must be honest)
- Respectful tone

**Forbidden:** Studio Strip, Hero Ken Burns, Mood rows, About, Process panels, Custom CTA, Cursor trail, Footer, Header/nav, Testimonial carousel, Mood-row layout, Shop prices, the contact card layout itself (only the submit button states change), the success state (cycle 9, freeze).

---

### 4. Nigel — Cycle 10 Re-score (Stricter Lens)
**Brief:** Re-score after Pixel a11y floor pass + Spark sending state + Performance verification. Honest cycle-10 assessment: did any of these three changes earn score movement, or does 7.5 hold for cycle 4 in a row?

The photography ceiling at 7.5 is unchanged across all 9 cycles. Cycle 10 changes are quality-floor work (a11y compliance, performance verification, funnel-symmetry close on the sending state). None unlock the photography ceiling. If score holds at 7.5, that is the correct call — do not inflate.

If score holds 4 cycles in a row at 7.5 with photography unchanged, surface explicitly that the next cycle should auto-pause and prompt the user for the photography decision.

**Memory rules to respect:**
- Nigel must score stricter (real-buyer 90-second-scan lens, not encouragement)
- Nigel never removes quality (glows, animations, effects) — never recommend removal
- Respectful tone — never blame the user for the photography blocker
- No invented fight data / fabricated content (not relevant here, but the principle: no hallucinated audit observations)
- Apps must NOT look AI-generated — score from real-buyer perspective

**Forbidden:** No code changes. Audit-only. Do not recommend removing the cursor trail, the success state, the L-bracket marks, the copper hairlines, or any animation. Score from real-buyer perspective, not designer pride.

---

## Rationale (one-line)

Cycle 9 explicitly flagged unfinished a11y floor work (Pixel) and unverified performance fixes (Performance), and the contact funnel has a symmetric sending-state gap parallel to the success state just designed — three concrete real-value items qualify cycle 10 as a real cycle, not a no-op.

## Convergence guard

If cycle 10 ships and score holds at 7.5 for a 4th consecutive cycle, cycle 11 should auto-pause and prompt the user for the photography decision. The technical work is reaching genuine completion.

## Memory drift check

- "No ghost numbers" (April 25): about pillars — not relevant this cycle
- "Spark Frame B keeps content count": flagged in Spark brief above
- "Pixel always audits center-alignment 375/414": flagged in Pixel brief
- "Nigel never removes quality": flagged in Nigel brief
- "Apps must NOT look AI-generated": flagged in all four briefs
- "Always send live link": coordinator iMessage will include https://zed0minat0r.github.io/craft-site/

No 7-day-old memory items unaddressed.
