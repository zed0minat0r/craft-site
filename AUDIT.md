# AUDIT — Made by Molly
**Auditor:** Nigel
**Date:** 2026-04-26 (cycle 4)
**Focus axis:** Conversion friction
**Score:** 7.3 / 10

---

## Rubric Anchors
- 5.0 = average, forgettable
- 6.0 = generic but functional
- 7.0 = better than most competitors
- 8.0 = someone chooses this over alternatives

---

## Overall Verdict

Cycle 4 delivered three discrete improvements that each touch conversion friction in different ways. The net result is a modest but earned advance from 7.2 to 7.3.

The testimonial relabeling is the most conversion-relevant change this cycle. "via Etsy" implied external platform verification that did not exist — a buyer who hovered expecting a live link would find nothing, which is worse than no signal at all. "past commission client" and "direct order" are honest attributions that a real buyer reads as intentionally restrained, not evasive. The credibility-dissonance Nigel cycle 3 flagged is resolved. One card retaining "direct order" versus the majority using "past commission client" also introduces a small but healthy variation — uniformity across all five would feel as engineered as five perfect ratings once did. Removing the pill border flattens the visual hierarchy in the right direction: the attribution now reads as metadata, not as a badge claiming something.

The trust-strip change in the Custom CTA is a smaller but accurate move. "Bags, quilts & commissions welcome" was a category restatement — a buyer deep enough into the page to reach the CTA already knows the offer. "Hand-finished in Pennsylvania" is a production claim. It is not bold (no shipping guarantee, no returns guarantee, no maker close-up), but it is specific, confident, and not redundant. This is the trust strip doing its job at the minimum viable level.

The cursor trail merits its own assessment because the brief specifically calls it out. At 4px radius decaying to 0 at life=0, opacity floored at 0.35 * life, copper rgba(207,139,103) on the brand's own palette — this is well-calibrated. It is subtle enough not to distract from copy, visible enough to register as intentional craft. The pointer:fine guard is correct (no touch pollution). The prefers-reduced-motion guard is correct. The z-index:9999 is appropriate for a fixed overlay that must read over section backgrounds without capturing events (pointer-events:none). As a brand-presence layer it is the first "wow" signal this site has shipped. It does not reduce conversion friction directly — a buyer filling out the contact form is not thinking about the cursor trail. But it contributes to the felt quality of the experience in a way that makes the pricing feel more justified. Scored under brand cohesion rather than conversion friction.

The score does not move past 7.3 because:
1. `pexels-7998221` is still in both the About section and the closing Process panel. This is unchanged and it remains the score ceiling.
2. The testimonial section still has five cards with no pause affordance on mobile, no swipe indicator, and the disclaimer text ("collected over the past year from custom commission clients") still sits below the scroll port on most viewports — buyers who do not scroll past the track never read it.
3. The contact form textarea still has a generic placeholder. Blank-page paralysis is a real conversion blocker for custom commission work where the buyer has to describe something.

Score ceiling: 7.5. Will not cross it without original photography.

---

## Section Scores

### 1. Hero (7.5/10)

**No change from cycle 3.** Ken Burns + copper breathe is the strongest scroll-opening moment on the page. Value prop is clear. Sub-copy still leads with negatives rather than buyer-benefit framing. Two near-equal CTAs split intent.

---

### 2. Shop by Mood / Collection (7.0/10)

**No change from cycle 3.** Price ranges in all three rows are the right structural fix. `mood-time` copy remains italic walnut at 13px — the highest-value price-justification copy is still the least legible element in this section. Shop CTA setTimeout pre-select still has a race condition.

---

### 3. The Process — Sticky Scroll (7.3/10)

**No change from cycle 3.** Vertical centering consistent. Readability improvements hold. Closing panel is still a dead-end with no forward link. Mobile dwell still short on panels 3 and 4.

---

### 4. About the Maker (7.8/10)

**No change from cycle 3.** "Pennsylvania Studio" caption strip, L-bracket corner marks, 2.1rem signature — the structural improvements from cycle 3 hold. Image is still `pexels-7998221`. The same stock image used in the closing Process panel appearing here is the single most trust-damaging repeated element on the page.

---

### 5. Studio Strip (6.0/10)

**No change.** All stock imagery. No finished product visible. Pull quote unattributed. Mobile horizontal scroll is a conversion dead zone.

---

### 6. Custom CTA (7.2/10)

**Cycle 4 delta:** Moved from 7.0 to 7.2.

- Spark Frame B spacing tightening is the correct treatment: eyebrow reads first, title reads second, body paragraph at weight 400 and 1.0625rem is now legible without squinting on mid-range displays. The hierarchy is earned, not assumed.
- Trust strip third item is now "Hand-finished in Pennsylvania." This is a production claim rather than a category restatement. Specific and honest.
- Watermark removed. The ::before "Custom" ghost competed with the headline on tablet viewports. Its removal is a net positive — the section is cleaner and the headline wins without a fight.

**Remaining weaknesses:**
- Trust strip still has no shipping guarantee or returns commitment at the decision point. "Hand-finished in Pennsylvania" is more confident than what it replaced but a buyer at the CTA wants risk reduction, not origin information.

---

### 7. Testimonials (7.0/10)

**Cycle 4 delta:** Moved from 6.5 to 7.0.

The honest-attribution relabeling is the single most conversion-relevant change in this cycle. "via Etsy" implied platform verification that did not exist; "past commission client" and "direct order" are accurate and read as intentionally honest rather than evasive. Removing the pill border is the correct visual treatment — the attribution is metadata, not a badge making a claim.

One card retaining 4 stars (Kate A., Allentown) continues to be the section's most credible signal. Five uniform 5-star ratings would still feel suspicious; the 4-star card makes the other four more believable.

**Remaining weaknesses:**
- No pause or swipe affordance on mobile. Auto-play with no controls on a 5-card track is a dark-pattern-adjacent UX choice for a trust section.
- Disclaimer text below the track is below the scroll port on many viewports — most buyers who do not scroll past the carousel never see it.
- No visible review count or timeframe in the section heading — buyers cannot calibrate recency without reading the disclaimer they likely miss.

---

### 8. Contact / Form (7.5/10)

**No change from cycle 3.** Trust note ("If you're not happy with what arrives, message me — I'll make it right") is the strongest buyer-reassurance copy on the page. It belongs here and it lands correctly. Form architecture clean. Textarea placeholder is still generic — for a custom commission contact form this is a missed opportunity to reduce blank-page paralysis.

---

### 9. Mobile UX — Holistic (7.1/10)

**Cycle 4 delta:** Moved from 7.0 to 7.1.

- Pixel's tap-target sweep closed bugs #9 and #10 (btn-walnut and nav-cta both confirmed at 44px min-height). These were real usability failures that are now resolved.
- Contact double-stutter fixed (bug #22, transition-delay 0.2s stagger on contact-inner.reveal). The animation sequence is now legible: trust strip animates first, form card follows. This is the correct read order for a buyer landing on the contact section.
- Footer alignment confirmed clean at 375px and 414px.

**Remaining weaknesses:**
- Testimonials auto-play still has no pause or swipe indicator on mobile.
- No back-to-top affordance on a page approximately 12–14 viewport lengths tall.
- Process panels 3 and 4 still lose dwell on mobile (200vh sticky budget).

---

### 10. Brand Cohesion / Photography (5.7/10)

**Cycle 4 delta:** Moved from 5.5 to 5.7.

The cursor trail is the first interaction-layer "wow" signal on this site. Copper rgba(207,139,103) at 4px peak radius, decaying at 0.025/frame, max opacity 35% — this is calibrated correctly for a craft-maker brand. It is felt rather than seen. The pointer:fine and prefers-reduced-motion guards are correct. This does not fix the photography problem but it does raise the felt quality of the desktop experience enough to move the brand cohesion score by 0.2.

`pexels-7998221` remains in both the About section and the closing Process panel. This is unchanged. It is still the score ceiling for the entire site. One original photograph of Molly, her studio, or a finished product would do more for the brand cohesion score than any remaining code change.

---

## Priority List — Top 3 (Cycle 5)

### Priority 1 — CRITICAL: Real photography is still the score ceiling
`pexels-7998221` in the About section and closing Process panel is unchanged. This is the ceiling for the entire audit. Until original photography lands, the site scores below 7.5 regardless of all other improvements. Frame this as the next unlock — every other improvement on the list is a secondary gain against this primary one.

### Priority 2 — HIGH: Testimonials mobile UX — pause/swipe affordance
The testimonial track auto-plays on mobile with no pause button, no swipe indicator, and no dot navigation. A buyer reading a testimonial on a phone cannot pause the carousel to finish reading before it advances. This is the most friction-generating UX failure currently on the site that does not require photography. A simple pause-on-touch (touchstart stops the interval) and dot-indicator row beneath the track would resolve both issues in under 40 lines.

### Priority 3 — MEDIUM: Contact form textarea placeholder — reduce blank-page paralysis
The textarea currently has a generic or absent placeholder. For a custom commission maker, the single biggest reason a buyer abandons the contact form is not knowing what to write. A directive placeholder ("e.g. a market tote in olive linen, roughly 14 inches wide — I'd love your input on hardware") sets expectations, models the level of detail needed, and reduces the blank-page moment that kills intent. This is one attribute change with a disproportionate conversion return for a custom-order business.

---

## What Would Move This to 7.5+

1. One real original product photograph replacing `pexels-7998221` in the About section.
2. Testimonials mobile: pause-on-touch + swipe indicator or dot navigation.
3. Contact textarea placeholder made directive.
4. Back-to-top affordance for mobile (page is 12–14 viewport lengths).
5. Trust strip in Custom CTA: add a shipping or returns commitment ("Ships to all 50 states" / "If it doesn't feel right, I'll make it right") as a fourth item or replace the current third.

---

## Audit History

| Date | Cycle | Score | Focus Axis | Top Issue |
|------|-------|-------|-----------|-----------|
| 2026-04-25 | 1 (smoke test) | 6.8 | conversion-friction | Disclaimered block of 5 perfect ratings actively destroys trust |
| 2026-04-25 | 2 | 7.0 | conversion-friction | Stock photography is the score ceiling; testimonials improved but unverified |
| 2026-04-25 | 3 | 7.2 | conversion-friction | Repeated pexels-7998221 across About + Process is the remaining primary trust blocker |
| 2026-04-26 | 4 | 7.3 | conversion-friction | pexels-7998221 unchanged; testimonial honest-attribution pass resolves credibility dissonance; testimonials mobile UX is next friction point |

---

*Score: 7.3 — Testimonial honest-attribution pass resolves the cycle-3 credibility dissonance flag. Custom CTA spacing hierarchy and trust-strip upgrade are accurate improvements. Cursor trail is first "wow" interaction layer: well-calibrated for the brand, raises felt quality without visual clutter. Held below 7.5 by stock photography ceiling and mobile testimonial UX gap.*
