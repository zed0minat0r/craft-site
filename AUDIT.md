# AUDIT — Made by Molly
**Auditor:** Nigel
**Date:** 2026-04-26 (cycle 10)
**Focus axis:** Micro-interactions
**Score:** 7.5 / 10

---

## Rubric Anchors
- 5.0 = average, forgettable
- 6.0 = generic but functional
- 7.0 = better than most competitors
- 8.0 = someone chooses this over alternatives

---

## Overall Verdict

Cycle 10 shipped three changes. Scored through the micro-interactions lens — every small animated or interactive moment the buyer encounters during a 90-second scan.

**Contact form Sending state.** This is the one change in cycle 10 that a buyer can actually feel. The prior submission flow went: buyer clicks Send → button text changes to plain uppercase "Sending..." (no animation, no personality, wrong register for the site's voice) → 12 seconds of uncertainty → redirect. Cycle 10 replaces that with: button gets a 2px copper line sweeping left-to-right along the bottom edge (1.6s cubic-bezier, infinite), and the label becomes italic Playfair "Sending…" — the same register as the success state's "Got it." The effect is deliberate, controlled, and on-brand. It communicates: something is happening, and it is happening with intention. This is symmetrically correct — every micro-moment in the form funnel now has a designed state: idle → sending (copper sweep) → success/error (copper hairline, oversized italic close). The 12-second safety reset now also removes the `.is-sending` class, which was dead code before and would have left the animation running indefinitely on Formspree errors. That is a real catch.

The micro-interaction quality of this site, assessed holistically this cycle: the cursor trail (copper rgba decay), the form hover/focus states, the ken burns breathe, the mood-row wipe-in, the sending sweep, and the success state together form a coherent layer of animation that serves — not decorates — the experience. The calibration is correct throughout. No gratuitous motion. Everything has a function. For a craftsperson's site this is the right density.

**A11y font-size fixes.** `.about-location-tag` 11.2px to 13px. `.testimonial-source` 10.8px to 13px. These are correct and appropriate. The buyer who reads small print does so more comfortably. Invisible at 90 seconds to a sighted scanner.

**Performance re-verification.** Confirmed no regression from cycle 9. Mobile P 73 band (CDN cold-cache variance on Pexels). TBT 50ms confirmed. No new gain, no regression. Honest result.

**Score decision: HOLD at 7.5.** The Sending state is a genuine micro-interaction improvement that completes the funnel's designed motion language. But the micro-interactions axis has one ceiling condition that cannot be resolved through animation alone: the cursor trail is invisible on mobile (pointer:fine guard, correct), and on mobile — where most of a craft buyer's browsing happens — the animation layer is reduced to mood wipe-ins and the testimonial touch UX. That is still better than competitors. The photography remains `pexels-7998221` in About and the closing Process panel. The micro-interactions, however elegant, cannot substitute for the visceral trust signal of a real maker's hands in the photography. A buyer doing 90 seconds on mobile sees a beautiful, fast, well-animated page presented by a person whose face is a stock photograph. 7.5 holds.

This is the fourth consecutive cycle at 7.5. The site is genuinely better than most small craft shops online. It is not yet at 8.0. The unlock is singular and sits outside the agent team's authority.

---

## Section Scores

### 1. Hero (7.5/10)

No change. Ken Burns breathe, copper breathe, desktop CLS eliminated. Sub-copy leads with negatives. Two near-equal CTAs still split buyer intent.

---

### 2. Shop by Mood / Collection (7.0/10)

No change. Price ranges ($75–$220 bags, $120–$480 quilts) functional. `mood-time` italic walnut at 13px is the least legible element in the section.

---

### 3. The Process — Sticky Scroll (7.3/10)

No change. Vertical centering consistent across all 4 panels. Closing panel has no forward link. Closing panel still uses `pexels-7998221`.

---

### 4. About the Maker (7.8/10)

No visual change. `.about-location-tag` raised from 11.2px to 13px — correct accessibility fix, invisible to sighted buyer scan. Caption strip, L-bracket corner marks, 2.1rem signature all hold. Image is `pexels-7998221`. Stock image in About remains the dominant trust gap.

---

### 5. Studio Strip (6.0/10)

No change. All stock imagery. No finished product visible. Pull quote unattributed.

---

### 6. Custom CTA (7.2/10)

No change. "Hand-finished in Pennsylvania" — origin claim, not a risk-reduction signal.

---

### 7. Testimonials (7.4/10)

`.testimonial-source` raised from 10.8px to 13px — a11y fix. Mobile flex-wrap added so "past commission client" wraps cleanly at 375px rather than overflowing. Card padding tightened (40px 36px → 28px 24px on mobile). Mechanically correct. No visual disruption to honest attribution or dot indicators.

---

### 8. Contact / Form (8.0/10)

The Sending state is the cycle 10 completion piece. Idle → "Send Message" (button, squared edge, copper hover) → `.is-sending` → copper sweep animation + italic Playfair "Sending…" → success state ("Got it." + copper hairlines + first-person close). Every designed state is now present. The 12s safety reset correctly removes `.is-sending` so no animation orphan on Formspree error. Sub-score holds at 8.0 — the form funnel is now complete. Further gain here would require a live back-end confirmation (not a redirect) or a quote-estimate experience.

---

### 9. Mobile UX — Holistic (7.5/10)

No change from cycle 9. Performance re-verification confirms 73 mobile P band (CDN cold-cache). TBT 50ms. FCP 1.1s. These are good numbers for a craft site on Pexels-hosted imagery. The Sending state renders correctly on mobile (`.is-sending` class triggers CSS, copper sweep visible). The animation is not pointer:fine gated — it appears on all devices, which is correct since form submission happens on touch too.

---

### 10. Brand Cohesion / Photography (6.0/10)

The copper micro-interaction vocabulary is now complete and consistent: cursor trail → mood wipe-in → form hover/focus → sending sweep → success hairlines. This is a coherent motion language. But `pexels-7998221` is unchanged. The brand cohesion sub-score cannot rise above 6.0 while the maker's face is a stock photograph. The motion layer is excellent within its constraint.

---

## Priority List — Top 3 (Cycle 11)

### Priority 1 — CRITICAL: Real photography (explicit user ask)

`pexels-7998221` in About and closing Process panel. This is the fourth consecutive cycle at 7.5 and every remaining code path has been explored. The honest message to the user: the site is beautifully crafted. The agents have refined every section, closed every functional bug, and built a complete conversion funnel. The one thing that moves the score is a photograph of the actual maker or the actual product. One image. That is the unlock.

### Priority 2 — GENUINELY UNCLEAR

After 10 cycles, the remaining open items are: Bug #27 (copper section-label contrast — user brand decision, not an agent action), Bug #21 (process arrow snap — element absent from HTML, needs Builder to add), and Studio Strip photography (user action). There is no high-confidence code improvement left that would move a buyer's 90-second perception.

### Priority 3 — Bug #21 (process arrow snap) if scope is authorised

The closing arrow element is absent from Panel 4's HTML. If the coordinator authorises Builder to add it, the scroll transition into the closing panel can have a designed visual cue. This is the last structural bug on the open list. Low buyer-visibility, but it closes the panel correctly.

---

## Cycle 11 Recommendation: AUTO-PAUSE

Four consecutive cycles at 7.5. Every functional section has been refined. The motion language is complete. The form funnel is complete. The accessibility floor is met. The performance is as good as it can be on Pexels CDN.

The cycle 11 coordinator should auto-pause the agent loop and surface to the user: "The site is done at the code level. The score ceiling is one photograph." Continuing to cycle agents without new user input (photography or a new section brief) is polish-on-polish with diminishing returns.

---

## What Would Move This to 8.0

1. One real original photograph replacing `pexels-7998221` in About and the closing Process panel. This is the only change that moves the holistic score.
2. Studio Strip: one real product photo. Currently the only section buyers browse as a gallery shows nothing hand-made.
3. Bug #27 copper section-label contrast resolved (user brand decision required).

---

## Audit History

| Date | Cycle | Score | Focus Axis | Top Issue |
|------|-------|-------|-----------|-----------|
| 2026-04-25 | 1 (smoke test) | 6.8 | conversion-friction | Disclaimered block of 5 perfect ratings actively destroys trust |
| 2026-04-25 | 2 | 7.0 | conversion-friction | Stock photography is the score ceiling; testimonials improved but unverified |
| 2026-04-25 | 3 | 7.2 | conversion-friction | Repeated pexels-7998221 across About + Process is the primary remaining trust blocker |
| 2026-04-26 | 4 | 7.3 | conversion-friction | pexels-7998221 unchanged; testimonial honest-attribution pass resolves credibility dissonance |
| 2026-04-26 | 5 | 7.4 | conversion-friction | testimonials mobile touch UX + contact card trust-note relocation earned +0.1; pexels-7998221 still score ceiling |
| 2026-04-26 | 6 | 7.4 | conversion-friction | floor-raising cycle (perf/razor/QA) mostly invisible to buyer scan; mobile LCP improvement real but unconfirmed |
| 2026-04-26 | 7 | 7.5 | conversion-friction | Bug #28 closed (testimonial stutter gone) + mobile LCP 8.1s→6.4s confirmed; photography ceiling reached |
| 2026-04-26 | 8 | 7.5 | brand-cohesion | pexels-7998221 unchanged; mobile LCP 6.4s→3.4s most buyer-relevant improvement; photography hard-caps score |
| 2026-04-26 | 9 | 7.5 | conversion-friction | Contact success state designed (real funnel close); photography unchanged; score ceiling holds |
| 2026-04-26 | 10 | 7.5 | micro-interactions | Sending state completes form funnel motion language; pexels-7998221 unchanged; 4th consecutive hold |

---

*Score: 7.5 — Four consecutive holds. Motion language complete. Form funnel complete. Photography is the only remaining unlock. Cycle 11 should auto-pause.*
