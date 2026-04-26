# AUDIT — Made by Molly
**Auditor:** Nigel
**Date:** 2026-04-26 (cycle 5)
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

Cycle 5 delivered three improvements that each directly touch conversion friction, and one accessibility pass that raises the quality floor without moving the buyer's 30-second scan experience. The net result is an earned +0.1 from 7.3 to 7.4.

The testimonial mobile touch UX is the single most friction-relevant change this cycle. A buyer on a phone reading a testimonial mid-carousel could previously do nothing when the track auto-advanced mid-sentence. The implementation is technically sound: animationPlayState pause-on-touchstart with computed-matrix position capture means the track holds without a snap-back; the 4s auto-resume with negative animationDelay re-anchor closes the seam. The 5 dot indicators track the current visible card. This is not decoration — it converts a trust section from a read-or-miss experience to a read-at-your-pace one. For a custom commission business where the buyer is evaluating whether to entrust a human being with a personal project, testimonial read-completion rate is a genuine conversion signal.

The contact form textarea placeholder is a smaller but well-placed change. "e.g. a market tote in olive linen, roughly 14 inches wide, gift in 6 weeks — happy to send a sketch first" does three things simultaneously: it models the appropriate level of detail, it signals that Molly is collaborative (not just transactional), and it names a concrete deliverable (sketch). For custom-order buyers who blank on "Your Message," this is the difference between submitting and closing the tab.

The contact card trust note relocation is the most structurally correct move of the cycle. "If you're not happy with what arrives, message me — I'll make it right" is the strongest reassurance copy on the entire page. Previously it sat outside the card as a preamble — visually below the CTA flow, easy to miss. As a copper-ruled serif-italic blockquote inside the card, below the submit button, it reads as the emotional close: the last thing a buyer sees before sending. The placement is correct. The L-bracket corner marks continue the About-section frame family at smaller scale, which adds visual coherence without adding new visual language.

The accessibility pass (main landmark, process dot ARIA, focus-visible styles, disclaimer contrast) raises the quality floor across the board. None of these changes are visible to a sighted buyer doing a 30-second scan. I am noting them as genuine craft but am not moving any sub-score on their account.

The score does not reach 7.5 because:
1. `pexels-7998221` is still in the About section and the closing Process panel. Unchanged across five cycles. This remains the absolute ceiling.
2. The copper section-labels at 2.50:1 contrast (BUGS #27) are a brand decision pending from the user — this is documented and cannot be resolved by the agent team alone.
3. The Custom CTA trust strip still has no shipping or returns commitment at the decision point — the strongest risk-reduction signal is in the contact card, not at the earlier CTA where many buyers would need it to proceed.

Score ceiling: 7.5. Will not cross without original photography.

---

## Section Scores

### 1. Hero (7.5/10)

No change from cycle 4. Ken Burns + copper breathe is the strongest scroll-opening moment on the page. Value prop is clear. Sub-copy still leads with negatives rather than buyer-benefit framing. Two near-equal CTAs split intent.

---

### 2. Shop by Mood / Collection (7.0/10)

No change from cycle 4. Price ranges in all three rows remain. `mood-time` copy still italic walnut at 13px — the highest-value price-justification copy is still the least legible element in this section.

---

### 3. The Process — Sticky Scroll (7.3/10)

No change from cycle 4. Vertical centering consistent. Readability improvements hold. Closing panel still a dead-end with no forward link. Closing panel still uses `pexels-7998221`.

---

### 4. About the Maker (7.8/10)

No change from cycle 4. "Pennsylvania Studio" caption strip, L-bracket corner marks, 2.1rem signature all hold. Image is still `pexels-7998221`. The same stock image used in the closing Process panel appearing here remains the single most trust-damaging repeated element on the page.

---

### 5. Studio Strip (6.0/10)

No change. All stock imagery. No finished product visible. Pull quote unattributed. Mobile horizontal scroll is a conversion dead zone.

---

### 6. Custom CTA (7.2/10)

No change from cycle 4. Spark Frame B spacing hierarchy holds. Trust strip has no shipping or returns commitment. "Hand-finished in Pennsylvania" is specific but it is an origin claim, not a risk-reduction signal. A buyer at the decision point wants the latter.

---

### 7. Testimonials (7.3/10)

**Cycle 5 delta:** Moved from 7.0 to 7.3.

The mobile touch UX implementation is technically correct and conversion-relevant. Pause-on-touchstart via animationPlayState with computed-matrix capture holds position without snap. Swipe delta >=50px nudges by card+gap step. 4s auto-resume with negative animationDelay re-syncs cleanly. Five dot indicators track current card on mobile only — correctly hidden on desktop where they would be redundant. The aria-hidden container is the right treatment for a loop-duplicate track that should not pollute the accessibility tree.

For a buyer reading "The art quilt I got for my mom is the first thing guests comment on in her living room" on a phone, the ability to pause before the track advances is the difference between reading and missing the testimonial entirely. This is not an abstract UX improvement — it is a direct fix to a conversion-friction failure at the most important trust section on the page.

**Remaining weaknesses:**
- Disclaimer text ("Reviews collected over the past year from custom commission clients across Pennsylvania") sits below the track and is below the fold on many viewports. Buyers who do not scroll past the carousel never see it.
- No visible review count or timeframe in the section heading — buyers cannot calibrate recency from the heading alone.

---

### 8. Contact / Form (7.7/10)

**Cycle 5 delta:** Moved from 7.5 to 7.7.

The trust note relocation is the most structurally correct decision of this cycle. "If you're not happy with what arrives, message me — I'll make it right. I stand behind every piece I make." as a copper-ruled serif-italic blockquote inside the card, below the submit button, is the right placement. It reads as the last word before a buyer sends — and it is the right last word for a custom commission business where the risk of disappointment is the primary barrier to inquiry.

The directive textarea placeholder resolves the blank-page paralysis issue flagged in cycles 3 and 4. The placeholder models detail level, signals collaboration, and names a concrete first step ("happy to send a sketch first"). This is one attribute change with disproportionate conversion return.

The L-bracket corner marks on the contact card extend the About-section visual language at smaller scale. Coherent without being redundant.

**Remaining weaknesses:**
- Contact success state (form-submitted flow) still resolves to a simple inline div. A buyer who has just committed to a custom order deserves a confirmation experience that matches the quality of the form.

---

### 9. Mobile UX — Holistic (7.2/10)

**Cycle 5 delta:** Moved from 7.1 to 7.2.

Testimonials touch UX (pause/swipe/dot indicators) is the primary driver. The dot indicator row is centered (`justify-content: center; margin: 0 auto` confirmed), mobile-only via `display: none → flex`. This is the largest single mobile UX improvement since the carousel was built.

Textarea placeholder renders correctly within the existing 120px min-height field. Contact card blockquote left-aligned within card — correct treatment for a pull-quote.

**Remaining weaknesses:**
- No back-to-top affordance on a page approximately 12–14 viewport lengths tall.
- Process panels 3 and 4 still lose dwell on mobile (200vh sticky budget per panel).

---

### 10. Brand Cohesion / Photography (5.7/10)

No change from cycle 4. `pexels-7998221` unchanged in About section and Process closing panel. Cursor trail holds. A11y improvements are invisible quality-floor gains — not reflected in brand cohesion score. Original photography remains the single highest-leverage change available to this site.

---

## Priority List — Top 3 (Cycle 6)

### Priority 1 — CRITICAL: Real photography is the score ceiling

`pexels-7998221` in the About section and closing Process panel is unchanged across five cycles. This is the ceiling for the entire audit — 7.5 is the hard cap until original photography lands. One authentic image of a finished bag, a quilt, or the studio is worth more to conversion than any remaining code change. This is the next unlock; everything else is incremental.

### Priority 2 — BRAND DECISION NEEDED: Copper section-label contrast (BUGS #27)

The copper section-labels on cream background measure 2.50:1 — failing WCAG AA for small text (0.8rem). This cannot be resolved without a brand decision from the user: darken the copper slightly, increase font size, or accept the fail as a conscious brand choice and document it. The agent team cannot make this call unilaterally. Needs user input before cycle 6 can close it.

### Priority 3 — MEDIUM: Performance pass + razor cleanup

Every prior cycle has been additive. The JS bundle now includes the cursor trail IIFE, the testimonial touch IIFE, the process dot ARIA wiring, the form submit handler, and the reveal observer — none of these have been profiled. A performance pass (Lighthouse or equivalent) would surface any LCP or CLS regressions introduced by the cursor trail canvas or the testimonial CSS animation scale. Separately, a razor pass through style.css would identify any orphaned rules from removed elements (the old .contact-trust outer div, the old .testimonial-source pill border, the old .custom-cta ::before watermark) that were replaced but whose CSS rules may linger as dead weight.

---

## What Would Move This to 7.5+

1. One real original product photograph replacing `pexels-7998221` in the About section.
2. Copper section-label contrast brand decision (BUGS #27).
3. Back-to-top affordance for mobile (page is 12–14 viewport lengths).
4. Contact form success state — a confirmation experience that matches the form quality.
5. Custom CTA trust strip: a risk-reduction signal ("If it doesn't feel right, I'll make it right") as fourth item or replacing the current third.

---

## Audit History

| Date | Cycle | Score | Focus Axis | Top Issue |
|------|-------|-------|-----------|-----------|
| 2026-04-25 | 1 (smoke test) | 6.8 | conversion-friction | Disclaimered block of 5 perfect ratings actively destroys trust |
| 2026-04-25 | 2 | 7.0 | conversion-friction | Stock photography is the score ceiling; testimonials improved but unverified |
| 2026-04-25 | 3 | 7.2 | conversion-friction | Repeated pexels-7998221 across About + Process is the remaining primary trust blocker |
| 2026-04-26 | 4 | 7.3 | conversion-friction | pexels-7998221 unchanged; testimonial honest-attribution pass resolves credibility dissonance; testimonials mobile UX is next friction point |
| 2026-04-26 | 5 | 7.4 | conversion-friction | testimonials mobile touch UX + contact card trust-note relocation earned +0.1; pexels-7998221 still score ceiling at 7.5 |

---

*Score: 7.4 — Testimonial mobile touch UX (pause/swipe/dots) is the cycle's most friction-relevant change. Contact card trust note relocated as emotional close inside the card. Directive textarea placeholder resolves blank-page paralysis. A11y pass raises quality floor invisibly. Held at 7.4 (below 7.5 ceiling) by unchanged stock photography.*
