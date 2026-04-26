# AUDIT — Made by Molly
**Auditor:** Nigel
**Date:** 2026-04-26 (cycle 9)
**Focus axis:** Conversion-friction
**Score:** 7.5 / 10

---

## Rubric Anchors
- 5.0 = average, forgettable
- 6.0 = generic but functional
- 7.0 = better than most competitors
- 8.0 = someone chooses this over alternatives

---

## Overall Verdict

Cycle 9 delivered three changes. One is genuinely buyer-visible and conversion-relevant. Two are real improvements that a buyer doing a 90-second scan will not consciously register.

**Contact form success state.** This is the change that deserved to happen. Prior to cycle 9, a buyer who completed a commission inquiry — the final and most committed act on this site — saw nothing. Formspree redirected back, a URL parameter fired, a hidden div appeared: unstyled, unannounced, unworthy of the rest of the site's voice. The cycle 9 success state closes that gap. "Got it." at `clamp(2.6rem, 6vw, 4rem)` in italic Playfair is the correct dramatic register — not a celebration, not a SaaS confirmation toast, but the kind of thing Molly would actually say. The serif-italic trust note ("I'll read your message today and reply with a sketch and a fair quote.") is a genuine first-person soft commitment. The copper hairlines top and bottom match the contact card's L-bracket vocabulary without copying it. The soft shop CTA is correctly low-pressure. This is a designed close to a conversion funnel that previously had no close. The Contact sub-score moves.

**JS performance (rAF idle-exit, CSS minification, nav scroll guard).** TBT improved from 150ms to 30-70ms. CSS reduced 26% in file size. These are legitimate engineering improvements. A buyer arriving on a mid-range Android with cellular signal will load a faster page. However, a buyer doing a 30-second scan of whether to commission a textile from this person cannot perceive any of this. Mobile Performance trajectory is heading toward 90 — but the score rubric asks what a real buyer in 90 seconds sees, not what a Lighthouse CI report shows.

**Bug #17 form label fix (13px floor).** The 11.52px label text is now 13px. This is an accessibility compliance fix and a small readability improvement. Invisible to most buyers but correct to ship.

**Score decision: HOLD at 7.5.** The success state is a genuine conversion-friction improvement. In isolation it would earn a tick. But the ceiling rule is correct and the photography remains unchanged: `pexels-7998221` still occupies the About section and the closing Process panel — the two places where a buyer looks to verify this is a real human making real things. The Contact sub-score moves from 7.7 to 8.0; the holistic score cannot follow because the photography gap anchors the trust score. 7.5 holds.

A buyer who submits the form now has a complete, designed experience. A buyer who has not yet submitted still encounters a maker whose face they cannot see. That is the dominant fact.

---

## Section Scores

### 1. Hero (7.5/10)

No change. Ken Burns, copper breathe, desktop CLS eliminated. Sub-copy still leads with negatives. Two near-equal CTAs still split buyer intent. Nav logo at 1.5rem 700 weight continues to anchor the first impression correctly.

---

### 2. Shop by Mood / Collection (7.0/10)

No change. Price ranges ($75–$220 bags, $120–$480 quilts) still do their job. The `mood-time` italic walnut at 13px remains the least legible element in this section but is not a new regression.

---

### 3. The Process — Sticky Scroll (7.3/10)

No change. Vertical centering consistent. Closing panel still a dead-end with no forward link. Closing panel still uses `pexels-7998221`.

---

### 4. About the Maker (7.8/10)

No change. Caption strip, L-bracket corner marks, 2.1rem signature all hold. Image is still `pexels-7998221`. Stock image in About remains the single most trust-damaging element on the page.

---

### 5. Studio Strip (6.0/10)

No change. All stock imagery. No finished product visible. Pull quote unattributed.

---

### 6. Custom CTA (7.2/10)

No change. Trust strip reads "Hand-finished in Pennsylvania" — an origin claim, not a risk-reduction signal. Returns and shipping commitment exists in the Contact pull-quote but not here at the top-of-funnel commitment block.

---

### 7. Testimonials (7.4/10)

No change from cycle 8. Dot indicators, honest attribution, touch UX all hold.

---

### 8. Contact / Form (8.0/10)

This is the only sub-score that moves this cycle. The success state closes a gap that has existed since the site launched. Prior state: buyer submits form, sees nothing. Cycle 9 state: buyer submits form, sees "Got it." in oversized italic Playfair, a genuine first-person soft commitment in serif italic, a copper-hairline frame matching the site's mark vocabulary, and a low-pressure shop CTA. This is a designed end to a conversion funnel. The form card itself (trust pull-quote, L-bracket marks, directive placeholder) remains intact — the success state replaces the blank post-submit moment, not the form. Sub-score 7.7 to 8.0. This is the section's ceiling given the rest of the page's photography situation.

---

### 9. Mobile UX — Holistic (7.5/10)

Mobile Performance trajectory continues toward 90. rAF idle-exit removes background CPU cost when cursor is still. CSS minification (-26%, -12KB) reduces parse time on first load. TBT at 30-70ms is within good range. The success state is correctly verified at 375/414 by Pixel: the "Got it." heading at `clamp(2.2rem, 10vw, 3rem)` resolves to ~37.5px at 375px, the trust note wraps cleanly, the copper hairlines are present, and the soft CTA has a 44px min-height tap target. No regressions from the lazy-load audit. Sub-score holds at 7.5 — the photographic trust gap on About + Process limits the holistic mobile impression regardless of performance metrics.

---

### 10. Brand Cohesion / Photography (6.0/10)

No change from cycle 8. Copper identity is consistent from nav to footer. The success state's copper hairlines are the correct mark for this new surface — they match the L-bracket vocabulary in spirit without copying it (different accent, same family). This is good taste. But `pexels-7998221` is unchanged. Brand cohesion cannot exceed 6.0 while the maker's face is a stock photograph.

---

## Priority List — Top 3 (Cycle 10)

### Priority 1 — CRITICAL: Real photography is the score ceiling

`pexels-7998221` in the About section and closing Process panel is unchanged across all nine cycles. Hard cap at 7.5. One authentic image of the maker at work — or a finished product shot — is the single highest-leverage change available. When it lands, it unlocks: About sub-score 7.8 to 9.0+ (maker credibility restored), Process closing panel forward-link, and the overall score trajectory toward 8.0+. This is the coordinator's unlock to surface to the user as the next concrete ask.

### Priority 2 — HIGH: Mobile Performance 84 to 90 (remaining JS work)

The rAF idle-exit shipped. BUGS.md notes flagged two remaining below-13px text instances: `.about-location-tag` at 11.2px and `.testimonial-source` at 10.8px — both in cooled sections. These are legitimate a11y violations. A cycle that focuses on the accessibility floor (fix cooled-section small text, audit focus states, confirm WCAG contrast on copper section labels — Bug #27 unresolved) could bring the mobile a11y sub-score forward without touching photography. Concrete, bounded, achievable without user input.

### Priority 3 — MEDIUM: Bug #27 copper section-label contrast (unresolved)

Bug #27 has appeared in the top-3 list for multiple cycles without resolution — it is a user brand decision. The copper section labels are below WCAG AA contrast at their current weight and size. The resolution path is: (a) darken copper to meet contrast, (b) raise to 14px+ so the smaller-text contrast threshold applies, or (c) the user acknowledges it as a conscious brand choice. This should be surfaced explicitly as a decision point, not deferred again.

---

## What Would Move This to 8.0

1. One real original photograph replacing `pexels-7998221` in About and the closing Process panel (unlocks the 7.5 ceiling immediately).
2. Mobile Performance to 90+ (remaining JS overhead: testimonial IIFE audit, below-fold lazy-load confirmation).
3. Fix remaining sub-13px text: `.about-location-tag` (11.2px) and `.testimonial-source` (10.8px) — both below floor.
4. Bug #27 copper section-label contrast resolved.
5. Studio Strip: one real product photo. The only section buyers browse as a gallery currently shows nothing hand-made.

---

## Audit History

| Date | Cycle | Score | Focus Axis | Top Issue |
|------|-------|-------|-----------|-----------|
| 2026-04-25 | 1 (smoke test) | 6.8 | conversion-friction | Disclaimered block of 5 perfect ratings actively destroys trust |
| 2026-04-25 | 2 | 7.0 | conversion-friction | Stock photography is the score ceiling; testimonials improved but unverified |
| 2026-04-25 | 3 | 7.2 | conversion-friction | Repeated pexels-7998221 across About + Process is the primary remaining trust blocker |
| 2026-04-26 | 4 | 7.3 | conversion-friction | pexels-7998221 unchanged; testimonial honest-attribution pass resolves credibility dissonance |
| 2026-04-26 | 5 | 7.4 | conversion-friction | testimonials mobile touch UX + contact card trust-note relocation earned +0.1; pexels-7998221 still score ceiling |
| 2026-04-26 | 6 | 7.4 | conversion-friction | floor-raising cycle (perf/razor/QA) mostly invisible to buyer scan; mobile LCP improvement real but unconfirmed in magnitude; Bug #28 newly surfaced |
| 2026-04-26 | 7 | 7.5 | conversion-friction | Bug #28 closed (testimonial stutter gone) + mobile LCP 8.1s→6.4s confirmed; photography ceiling reached at 7.5 |
| 2026-04-26 | 8 | 7.5 | brand-cohesion | pexels-7998221 unchanged; mobile LCP 6.4s→3.4s is the most buyer-relevant improvement across 8 cycles but photography hard-caps the score |
| 2026-04-26 | 9 | 7.5 | conversion-friction | Contact success state designed (real funnel close); photography unchanged; score ceiling holds |

---

*Score: 7.5 — Photography ceiling holds. Contact form success state is a genuine conversion-funnel close (Contact sub-score 7.7→8.0) but pexels-7998221 in About + closing Process panel remains the hard cap. No score movement without real photography.*
