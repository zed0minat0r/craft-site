# AUDIT — Made by Molly
**Auditor:** Nigel
**Date:** 2026-04-26 (cycle 7)
**Focus axis:** Conversion friction
**Score:** 7.5 / 10

---

## Rubric Anchors
- 5.0 = average, forgettable
- 6.0 = generic but functional
- 7.0 = better than most competitors
- 8.0 = someone chooses this over alternatives

---

## Overall Verdict

Cycle 7 closed two genuine conversion-friction items that were measurable in prior cycles: the testimonial loop stutter (Bug #28) and confirmed mobile LCP reduction. The score ticks from 7.4 to 7.5 — the cap.

**Bug #28 closed.** The testimonials carousel had a visible 12px seam on every loop cycle at all four viewports. A buyer reading trust content was watching the band glitch every few seconds. QA verified scrollWidth now lands exactly at the card boundary (delta = 0px across 375/414/768/1440). This is conversion-relevant: trust sections that visibly malfunction undermine the signal they are supposed to send. The stutter is gone.

**Mobile LCP confirmed: 8.1s to 6.4s (-21%).** Cycle 6 shipped the performance fixes but could not re-run Lighthouse. Cycle 7 confirmed the numbers. A 1.7s LCP reduction on mobile is material — the bounce threshold on cellular is approximately 3–5 seconds, and a buyer arriving from a craft-show postcard QR code is on a phone. 6.4s is still above the 3s ideal but the trajectory is correct and the improvement is real. Desktop LCP halved (1.6s to 0.8s). Desktop CLS eliminated (0.171 to 0.009).

**Score still caps at 7.5.** Mobile Performance at 74 means the cold cellular load is still sluggish — Google Fonts CSS is render-blocking (530ms flagged) and Pexels mood-row images are oversized on mobile (276KB flagged). These are live friction points for a buyer arriving on a budget phone with variable signal. Photography is still the single largest trust gap. `pexels-7998221` appears in the About section and the closing Process panel across all seven cycles without change.

This is the photography ceiling. Until original maker or product photography lands, this site cannot cross 7.5 from a real buyer's perspective. A bespoke artisan textile site using stock photography of a person who is not the maker is a credibility gap no amount of performance tuning can paper over.

---

## Section Scores

### 1. Hero (7.5/10)

Desktop CLS eliminated — first-load watermark text-swap jump is gone. Ken Burns + copper breathe holds. Sub-copy still leads with negatives. Two near-equal CTAs still split buyer intent. No change from cycle 6.

---

### 2. Shop by Mood / Collection (7.0/10)

No change. Price ranges hold. `mood-time` italic walnut at 13px remains the least legible element in the section. Mood-row images flagged as oversized on mobile (P2 for cycle 8).

---

### 3. The Process — Sticky Scroll (7.3/10)

No change. Vertical centering consistent. Closing panel still a dead-end with no forward link. Closing panel still uses `pexels-7998221`.

---

### 4. About the Maker (7.8/10)

No change. "Pennsylvania Studio" caption strip, L-bracket corner marks, 2.1rem signature all hold. Image is still `pexels-7998221`. Stock image in About remains the single most trust-damaging element on the page — this is the face buyers associate with the maker.

---

### 5. Studio Strip (6.0/10)

No change. All stock imagery. No finished product visible. Pull quote unattributed. Mobile horizontal scroll is a conversion dead zone.

---

### 6. Custom CTA (7.2/10)

No change. Trust strip has no shipping or returns commitment. "Hand-finished in Pennsylvania" is an origin claim, not a risk-reduction signal.

---

### 7. Testimonials (7.4/10)

Bug #28 closed. The 12px loop seam is gone — QA verified delta = 0px at all four viewports across two full loop cycles each. Dot indicators tracking correctly post-fix. Center alignment at 375px holds. Touch UX (pause/resume, 50px swipe, dot tracking) unaffected by the padding-right change. Section ticks from 7.3 to 7.4. Honest attribution still holds from cycle 4.

---

### 8. Contact / Form (7.7/10)

No change. Blockquote trust note, directive placeholder, L-bracket marks all hold. No form success state — confirmation experience is still absent.

---

### 9. Mobile UX — Holistic (7.3/10)

Confirmed Mobile LCP 8.1s to 6.4s (-21%), Mobile FCP 2.8s to 1.5s (-46%). These are real buyer-perception improvements on cellular. However, Mobile Performance score 74 (floor target: 90) means Google Fonts CSS render-blocking and Pexels image sizing are still live friction. Section ticks from 7.2 to 7.3 on confirmed numbers. Does not reach 7.5 because cold cellular load is still sluggish above the bounce threshold.

---

### 10. Brand Cohesion / Photography (5.7/10)

No change. `pexels-7998221` unchanged. Cursor trail holds. Photography ceiling unchanged. This section score does not move without original imagery.

---

## Priority List — Top 3 (Cycle 8)

### Priority 1 — CRITICAL: Real photography is the score ceiling

`pexels-7998221` in the About section and closing Process panel is unchanged across seven cycles. Hard cap at 7.5 until original photography lands. One authentic image of the maker at work — or a finished product — is the single highest-leverage change available to this site. When ready, this unlocks Scout's Layered Telescope-Zoom sequence and moves the score trajectory toward 8.0.

### Priority 2 — HIGH: Mobile performance push (Google Fonts render-blocking + mood-row image sizing)

Google Fonts CSS is render-blocking 530ms on mobile. Mood-row images are 276KB each on mobile — flagged as oversized. These two changes together would push Mobile Performance from 74 toward 90 (the stated floor). Concrete paths: inline critical font-face declarations and preload swap (eliminates render-blocking CSS request), and add `srcset` / `sizes` on mood-row `<img>` elements to serve appropriately sized images on mobile. Neither touches a cooled visual section. Builder work.

### Priority 3 — MEDIUM: Bug #27 — Copper section-label contrast (user brand decision needed)

Copper section-labels on cream background measure 2.50:1, failing WCAG AA for small text (0.8rem, 12.8px). Three options for the user to choose: (a) darken copper slightly for label use only (e.g. `#b87040`), (b) bump label font-size to 14px or higher, (c) accept as a conscious brand choice. Agents cannot resolve this without a user decision — surfacing it as an input-needed item for cycle 8 planning.

---

## What Would Move This to 8.0

1. One real original product or maker photograph replacing `pexels-7998221` in About and the closing Process panel (unlocks 7.5 ceiling and trajectory toward 8.0).
2. Mobile Performance 74 to 90+ (Google Fonts inlining + mood-row srcset).
3. Contact form success state — a confirmation experience that matches the existing form quality.
4. Back-to-top affordance for mobile — the page is 12–14 viewport lengths on a 375px screen.
5. Bug #27 copper contrast resolved (user brand decision needed).

---

## Audit History

| Date | Cycle | Score | Focus Axis | Top Issue |
|------|-------|-------|-----------|-----------|
| 2026-04-25 | 1 (smoke test) | 6.8 | conversion-friction | Disclaimered block of 5 perfect ratings actively destroys trust |
| 2026-04-25 | 2 | 7.0 | conversion-friction | Stock photography is the score ceiling; testimonials improved but unverified |
| 2026-04-25 | 3 | 7.2 | conversion-friction | Repeated pexels-7998221 across About + Process is the remaining primary trust blocker |
| 2026-04-26 | 4 | 7.3 | conversion-friction | pexels-7998221 unchanged; testimonial honest-attribution pass resolves credibility dissonance |
| 2026-04-26 | 5 | 7.4 | conversion-friction | testimonials mobile touch UX + contact card trust-note relocation earned +0.1; pexels-7998221 still score ceiling |
| 2026-04-26 | 6 | 7.4 | conversion-friction | floor-raising cycle (perf/razor/QA) mostly invisible to buyer scan; mobile LCP improvement real but unconfirmed in magnitude; Bug #28 newly surfaced (12px testimonial stutter, fix cycle 7) |
| 2026-04-26 | 7 | 7.5 | conversion-friction | Bug #28 closed (testimonial stutter gone) + mobile LCP 8.1s→6.4s confirmed; photography ceiling reached at 7.5 |

---

*Score: 7.5 — Photography ceiling reached. Bug #28 (visible testimonial stutter on trust section) closed; mobile LCP 8.1s→6.4s confirmed via Lighthouse re-run. Mobile Performance 74 and pexels-7998221 in About+Process are the two remaining live conversion-friction blockers. Score cannot advance past 7.5 without original photography.*
