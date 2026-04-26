# AUDIT — Made by Molly
**Auditor:** Nigel
**Date:** 2026-04-26 (cycle 6)
**Focus axis:** Conversion friction
**Score:** 7.4 / 10

---

## Rubric Anchors
- 5.0 = average, forgettable
- 6.0 = generic but functional
- 7.0 = better than most competitors
- 8.0 = someone chooses this over alternatives

---

## Overall Verdict

Cycle 6 was a floor-raising pivot — performance, dead-CSS removal, and the first holistic Playwright QA pass. None of this is visible to a sighted buyer doing a 30-second scan. The score holds at 7.4.

The most conversion-relevant change of the cycle is the deferred `main.js` combined with font preloads and the empty-srcset mobile hero inset wrap. On a prior audit the mobile Lighthouse LCP was 8.1s — a figure well above the bounce threshold for a buyer arriving on cellular. Removing the synchronous render-blocking JS (179ms flagged savings) and eliminating the three woff2 font-swap delays together materially improve time-to-first-meaningful-interaction on mobile. For a buyer who would have bounced before reading the hero, this is conversion-relevant — not purely technical. I am acknowledging it as genuine without inflating the score, because I cannot confirm the final measured LCP without a re-run Lighthouse pass (Performance agent noted propagation time needed; score is an expectation, not a confirmed result).

The desktop CLS drop from 0.171 to approximately zero (font preloads + `contain: layout size` on the hero pseudo-element) eliminates the watermark text-swap jump that buyers on desktop experienced at first load. A visible element jumping on page load is a quality-perception signal that reads as "unfinished site" to a prospective buyer. This is now gone.

The favicon 404 fix (Best Practices score was 73 — low) is invisible to buyers but closes a developer-visible console error that would have undermined credibility for any technically-minded buyer reviewing source.

The Razor pass removed 86 bytes of dead CSS. Bug #23 closed as won't-fix with correct analysis.

The QA pass verified seven previously-fixed bugs are genuinely closed and found one new genuine issue: Bug #28 — the testimonials loop has a 12px seam per cycle (scrollWidth midpoint does not land at a card boundary). The stutter was present before cycle 6 and is unchanged by this cycle. Its discovery is positive — better to know than not — but the stutter itself is a live defect that a buyer reading testimonials on any viewport can perceive. It has a one-line fix (padding-right: 24px on `.testimonials-track`) landing cycle 7.

The score does not advance to 7.5 because:
1. `pexels-7998221` is unchanged in About and the closing Process panel — hard photography ceiling.
2. Bug #28 (12px testimonial stutter) is a live defect on the trust section, not yet fixed.
3. Mobile LCP improvement is genuine but unconfirmed in magnitude — holding until a re-run Lighthouse score validates it.

Score ceiling: 7.5. Will not cross without original photography.

---

## Section Scores

### 1. Hero (7.5/10)

No change from cycle 5. Desktop CLS eliminated (watermark text-swap gone) — first-load quality perception improved. Ken Burns + copper breathe holds. Sub-copy still leads with negatives. Two near-equal CTAs still split intent.

---

### 2. Shop by Mood / Collection (7.0/10)

No change from cycle 5. Price ranges hold. `mood-time` italic walnut at 13px remains the least legible element in the section.

---

### 3. The Process — Sticky Scroll (7.3/10)

No change from cycle 5. Vertical centering consistent. Closing panel still a dead-end with no forward link. Closing panel still uses `pexels-7998221`.

---

### 4. About the Maker (7.8/10)

No change from cycle 5. "Pennsylvania Studio" caption strip, L-bracket corner marks, 2.1rem signature all hold. Image is still `pexels-7998221`. Stock image repeated across both About and closing Process panel remains the single most trust-damaging element on the page.

---

### 5. Studio Strip (6.0/10)

No change. All stock imagery. No finished product visible. Pull quote unattributed. Mobile horizontal scroll is a conversion dead zone.

---

### 6. Custom CTA (7.2/10)

No change from cycle 5. Spark Frame B spacing hierarchy holds. Trust strip has no shipping or returns commitment. "Hand-finished in Pennsylvania" is an origin claim, not a risk-reduction signal.

---

### 7. Testimonials (7.3/10)

No change from cycle 5 in implemented features. Bug #28 newly identified this cycle: 12px loop seam per cycle because `translateX(-50%)` = −1608px but the card0→card5 distance is 1620px. Fix is one line — deferred to cycle 7. The stutter was pre-existing but is now documented. A buyer reading testimonials on any viewport sees a small but perceptible loop jump on every cycle. Holds at 7.3; would tick up to 7.4 on Bug #28 fix.

---

### 8. Contact / Form (7.7/10)

No change from cycle 5. Blockquote trust note, directive placeholder, L-bracket marks all hold.

---

### 9. Mobile UX — Holistic (7.2/10)

No change from cycle 5 in rendered output. Performance improvements (deferred main.js, font preloads, empty-srcset hero inset) are mobile-load-relevant but not visible in the rendered page for a buyer already loaded. Score holds pending Lighthouse re-run confirmation.

---

### 10. Brand Cohesion / Photography (5.7/10)

No change from cycle 5. `pexels-7998221` unchanged. Cursor trail holds. Original photography remains the single highest-leverage change available to this site.

---

## Priority List — Top 3 (Cycle 7)

### Priority 1 — CRITICAL: Real photography is the score ceiling

`pexels-7998221` in the About section and closing Process panel is unchanged across six cycles. Hard cap at 7.5 until original photography lands. One authentic image of a finished product or the maker at work is worth more to conversion than any remaining code change.

### Priority 2 — HIGH: Bug #28 — Testimonial loop 12px stutter (one-line fix)

`padding-right: 24px` on `.testimonials-track` sets scrollWidth from 3216 to 3240, making the midpoint land exactly at a card boundary. The fix takes one line and closes a live defect on the trust section. This is Builder work — zero risk, high reward, deferred only because testimonials were on cooldown in cycle 6.

### Priority 3 — MEDIUM: Bug #27 — Copper section-label contrast (brand decision needed)

Copper section-labels on cream background measure 2.50:1 — failing WCAG AA for small text (0.8rem). The agent team cannot resolve this without a user brand decision: darken the copper slightly, increase font size, or accept as conscious brand choice. Needs user input.

---

## What Would Move This to 7.5+

1. One real original product photograph replacing `pexels-7998221` in the About section.
2. Bug #28 fix (testimonial loop seam — one line, cycle 7).
3. Copper section-label contrast brand decision (BUGS #27).
4. Back-to-top affordance for mobile (page is 12–14 viewport lengths).
5. Contact form success state — a confirmation experience that matches the form quality.

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

---

*Score: 7.4 — Cycle 6 was infrastructure, not conversion. Performance improvements (deferred JS, font preloads, favicon, empty-srcset hero) raise the quality floor and materially improve mobile load time, but cannot be confirmed in magnitude without a Lighthouse re-run. Bug #28 is a live defect on the trust section, now documented. Photography ceiling unchanged.*
