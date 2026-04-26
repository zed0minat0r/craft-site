# AUDIT — Made by Molly
**Auditor:** Nigel
**Date:** 2026-04-26 (cycle 8)
**Focus axis:** Brand cohesion
**Score:** 7.5 / 10

---

## Rubric Anchors
- 5.0 = average, forgettable
- 6.0 = generic but functional
- 7.0 = better than most competitors
- 8.0 = someone chooses this over alternatives

---

## Overall Verdict

Cycle 8 delivered two genuinely meaningful improvements and one that is real but buyer-invisible. The score holds at 7.5. Not because the work was poor — the mobile LCP reduction is the single most buyer-relevant change in eight cycles — but because the hard ceiling rule is correct and the photography gap remains unchanged.

**Mobile LCP 6.4s to 3.4s (-47%).** This is not a small number. The 3.4s mark sits just above the cellular bounce threshold. A buyer arriving via craft fair QR code, on a mid-range Android with variable signal, previously waited 6.4 seconds to see meaningful content. That buyer is now waiting 3.4 seconds. The self-hosted font work (eliminating a 530ms render-blocking Google Fonts CSS request) and the hero inset preload fix together account for a meaningful share of that gain. Mobile FCP dropped from 1.5s to 1.1s as a secondary win. This is conversion work. It simply cannot be read in the score because photography is the harder ceiling.

**Header/footer brand identity unification.** The nav logo is now 1.5rem at 700 weight — it reads as a deliberate editorial anchor rather than filler. The copper expand-from-center underline on nav links is the first hover state that feels like a choice rather than a default. The footer border-top switching from a faint cream hairline to a copper line at the same spec as the scrolled-nav hairline closes the brand loop top to bottom. The footer brand name at 700 weight now matches the nav logo weight — same family, same heft, same person. These are details a buyer does not consciously notice but would register as absent if missing. Brand cohesion sub-score moves from 5.7 to 6.0.

**Bug #17 closed.** The 12px label floor was the most widespread small-type problem on the site — it touched section labels, hero eyebrow, and footer column titles simultaneously. At 0.875rem (14px) these elements now sit above the accessibility floor and read as intentional typographic choices rather than afterthoughts.

**Score ceiling holds at 7.5.** The repeated `pexels-7998221` is unchanged in the About section and the closing Process panel. This is not a technicality — it is the face the buyer associates with the maker. A bespoke artisan textile site that shows a stock photograph where the maker should appear cannot cross 7.5 from a real buyer's perspective. No amount of correct typography or copper hairline work papers over this. Photography is the single unlock.

---

## Section Scores

### 1. Hero (7.5/10)

No change. Ken Burns, copper breathe, desktop CLS eliminated. Sub-copy still leads with negatives. Two near-equal CTAs still split buyer intent. Nav logo now reads as an editorial anchor (1.5rem 700 weight, cycle 8 Spark) — subtle improvement to the first impression above the fold.

---

### 2. Shop by Mood / Collection (7.0/10)

No change from cycle 7 on visual treatment. srcset added to mood-row images (Performance cycle 8) — mobile download sizes correct. `mood-time` italic walnut at 13px remains the least legible element in the section but is not a new regression.

---

### 3. The Process — Sticky Scroll (7.3/10)

No change. Vertical centering consistent. Closing panel still a dead-end with no forward link. Closing panel still uses `pexels-7998221`.

---

### 4. About the Maker (7.8/10)

No change. Caption strip, L-bracket corner marks, 2.1rem signature all hold. Image is still `pexels-7998221`. Stock image in About remains the single most trust-damaging element on the page — this is the face buyers associate with the maker.

---

### 5. Studio Strip (6.0/10)

No change. All stock imagery. No finished product visible. Pull quote unattributed.

---

### 6. Custom CTA (7.2/10)

No change. Trust strip has no shipping or returns commitment. "Hand-finished in Pennsylvania" is an origin claim, not a risk-reduction signal.

---

### 7. Testimonials (7.4/10)

No change from cycle 7 close. Bug #28 (12px stutter) remains closed. Dot indicators, touch UX, honest attribution all hold.

---

### 8. Contact / Form (7.7/10)

No change. Blockquote trust note, directive placeholder, L-bracket marks all hold. No form success state — confirmation experience still absent.

---

### 9. Mobile UX — Holistic (7.5/10)

Mobile LCP 6.4s to 3.4s (-47%) is the most buyer-relevant improvement across eight cycles. At 3.4s the site is now within range of the cellular bounce threshold rather than above it. Mobile FCP 1.5s to 1.1s. Mobile Performance score 74 to 84 (+10 points). The score does not yet reach 90 — Pexels third-party cookies hold Best Practices at 77 (unaddressable without real photography), and further mobile performance gains require JS analysis on the testimonial IIFE and cursor-trail rAF overhead. Sub-score ticks 7.3 to 7.5 on the strength of the LCP gain alone.

---

### 10. Brand Cohesion / Photography (6.0/10)

This is the cycle 8 focus axis and the only sub-score that moves. The nav logo (1.5rem 700 weight Playfair Display), copper expand-from-center hover underline, scrolled-nav copper hairline, and footer border-top at matching copper spec now form a continuous identity thread from nav to footer. The footer brand name at 700 matches the nav logo — same typeface, same weight. This is what brand cohesion looks like at the component level: the same decision, made consistently. The copper CTA border-radius squared to 0 is a small but correct move — a craft-stamp square fits the aesthetic better than a soft pill. Sub-score moves 5.7 to 6.0. It does not go higher because the Studio Strip remains all-stock and `pexels-7998221` in About is the maker's face.

---

## Priority List — Top 3 (Cycle 9)

### Priority 1 — CRITICAL: Real photography is the score ceiling

`pexels-7998221` in the About section and closing Process panel is unchanged across all eight cycles. Hard cap at 7.5. One authentic image of the maker at work — or a finished product shot — is the single highest-leverage change available. When it lands, it unlocks: About sub-score 7.8 to 9.0+ (maker credibility restored), Process closing panel (currently a dead-end with stock image), and Scout's Layered Telescope-Zoom sequence. Score trajectory moves toward 8.0+ immediately.

### Priority 2 — HIGH: Mobile Performance 84 to 90+ (JS overhead)

Self-hosted fonts and srcset are done. The next mobile performance gains require: (a) audit the testimonial carousel IIFE for unnecessary work on idle frames, (b) audit cursor-trail.js rAF — the rAF loop runs continuously even when the particle array is empty, which is minor CPU overhead but real on budget Android; adding an idle-exit (cancel rAF when array is empty, restart on next mousemove) eliminates the background cost, (c) below-fold image lazy-loading audit — confirm all images outside the top viewport have `loading="lazy"` to defer decoding on first paint. These changes together have a realistic path to Mobile Performance 84 to 90.

### Priority 3 — MEDIUM: Contact form success state

The form has no confirmation experience. After submit, a buyer has no signal that their commission inquiry landed — they see a URL parameter change but no designed success moment. This is a conversion-friction gap at the final step of the purchase funnel. A simple, well-designed success state (already partially scaffolded in main.js) that matches the existing card quality would close the loop and reduce duplicate submissions.

---

## What Would Move This to 8.0

1. One real original product or maker photograph replacing `pexels-7998221` in About and the closing Process panel (unlocks the 7.5 ceiling immediately).
2. Mobile Performance 84 to 90+ (JS overhead reduction — rAF idle-exit, testimonial IIFE audit, lazy-load verification).
3. Contact form success state that matches the existing form quality.
4. Bug #27 copper section-label contrast resolved (user brand decision: darken copper for labels, bump to 14px+, or accept as conscious choice).
5. Studio Strip real product photography — the horizontal strip is the only section buyers can browse after the mood rows, and it shows nothing real.

---

## Audit History

| Date | Cycle | Score | Focus Axis | Top Issue |
|------|-------|-------|-----------|-----------|
| 2026-04-25 | 1 (smoke test) | 6.8 | conversion-friction | Disclaimered block of 5 perfect ratings actively destroys trust |
| 2026-04-25 | 2 | 7.0 | conversion-friction | Stock photography is the score ceiling; testimonials improved but unverified |
| 2026-04-25 | 3 | 7.2 | conversion-friction | Repeated pexels-7998221 across About + Process is the remaining primary trust blocker |
| 2026-04-26 | 4 | 7.3 | conversion-friction | pexels-7998221 unchanged; testimonial honest-attribution pass resolves credibility dissonance |
| 2026-04-26 | 5 | 7.4 | conversion-friction | testimonials mobile touch UX + contact card trust-note relocation earned +0.1; pexels-7998221 still score ceiling |
| 2026-04-26 | 6 | 7.4 | conversion-friction | floor-raising cycle (perf/razor/QA) mostly invisible to buyer scan; mobile LCP improvement real but unconfirmed in magnitude; Bug #28 newly surfaced |
| 2026-04-26 | 7 | 7.5 | conversion-friction | Bug #28 closed (testimonial stutter gone) + mobile LCP 8.1s→6.4s confirmed; photography ceiling reached at 7.5 |
| 2026-04-26 | 8 | 7.5 | brand-cohesion | pexels-7998221 unchanged; mobile LCP 6.4s→3.4s is the most buyer-relevant improvement across 8 cycles but photography hard-caps the score |

---

*Score: 7.5 — Photography ceiling holds. Mobile LCP 6.4s→3.4s (-47%) is the most buyer-relevant single improvement across eight cycles. Header/footer copper identity unified (brand cohesion 5.7→6.0). Bug #17 closed (12px labels resolved). Score cannot advance past 7.5 without original photography replacing pexels-7998221 in About + closing Process panel.*
