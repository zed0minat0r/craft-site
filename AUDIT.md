# AUDIT — Made by Molly
**Auditor:** Nigel
**Date:** 2026-04-25 (cycle 3)
**Focus axis:** Conversion friction
**Score:** 7.2 / 10

---

## Rubric Anchors
- 5.0 = average, forgettable
- 6.0 = generic but functional
- 7.0 = better than most competitors
- 8.0 = someone chooses this over alternatives

---

## Overall Verdict

Cycle 3 delivered three genuine improvements: price ranges in all three shop rows, a refined About section personal anchor, and a material readability and vertical centering fix on the Process panels. Each of these moved a real buyer signal forward in a meaningful — if incremental — way.

The shop rows now show budget ceilings ($75–$220 bags, $120–$480 quilts, $95+ custom). A prospective buyer can gauge budget fit in one glance. That is a direct conversion-friction reduction: the "at least this much" stopping signal is replaced by a range that contextualises value. Bags and quilts both land well ($220 is a sensible ceiling for a handmade structured tote; $480 for a multi-day quilt signals serious craft pricing credibly). Custom at "$95+" is still open-ended — it is the one row that retains price anxiety — but commission work is inherently variable and the copy justifies it.

The About section refinement is a genuine qualitative improvement. The "Pennsylvania Studio" caption strip with a copper hairline divider is more confident than a floating corner badge — it reads as authorship rather than decoration. The L-bracket corner marks on the photo frame are restrained and tasteful. The signature at 2.1rem with 44px top margin now lands as a personal seal, not an afterthought. Combined, the About section now reads more like a real maker's page than a template fill-in.

The Process panel fix is the most technically impactful change. Vertical centering via `top: 50%; transform: translateY(-50%)` is correct and consistent — the text block's centre point is now viewport-locked on all four panels regardless of text height. The readability upgrades (weight 300→400, opacity 0.82→0.96, font floor 0.9rem→1rem, overlay floor 15%→30%) make the panel descriptions actually readable in ambient light conditions. These are not cosmetic — they were genuine usability failures that blocked the process narrative from landing.

The net result: a buyer in 90 seconds now gets clearer budget signals in the shop, a more believable personal maker story in About, and a more readable process narrative. The site moves from 7.0 to 7.2. The score remains below 7.5 because stock photography — including the repeated `pexels-7998221` across both About and the closing Process panel — is still the credibility ceiling. No code change this cycle addressed that blocker.

---

## Section Scores

### 1. Hero (7.5/10)

**No change from cycle 2.** Strong value prop, Ken Burns + copper breathe, provenance eyebrow. Sub-copy still leans on "no factory, no shortcuts" negative framing rather than buyer-benefit framing. Two CTAs of near-equal weight. Ghost watermark adds cognitive load before headline.

---

### 2. Shop by Mood / Collection (7.0/10)

**Cycle 3 delta:** Moved from 6.5 to 7.0. Price ranges are now in all three rows.

- Bags: $75–$220. This is the single best change this cycle. A buyer knows a market tote is at the low end, a structured weekender is at the top. The anxiety of "starting from" with no ceiling is gone.
- Quilts: $120–$480. The range correctly reflects the scale of effort — a small wall hanging versus a full-size art piece. This is credible and earns trust.
- Custom: $95+. Still open-ended, but commission work necessarily is. The copy context ("A quilt from your grandmother's old clothes") justifies the open price without creating a stopping signal.

**Remaining weaknesses:**
- The `mood-time` copy ("Each bag takes 6–10 hours") is still italic walnut at 13px — the highest-value price-justification copy is the least legible element in the section.
- Shop CTA buttons still link to `#contact` via 600ms setTimeout for pre-select. A buyer who clicks before scroll-stop may land with no pre-selection.

---

### 3. The Process — Sticky Scroll (7.3/10)

**Cycle 3 delta:** Moved from 7.0 to 7.3. Vertical centering fix is correct and consistent — all four panels now share the same text-block centre point. Readability improvements are material: weight 400, opacity 0.96, and a higher overlay floor mean the description copy now survives over photo backgrounds in normal ambient conditions.

**Remaining weaknesses:**
- Panel 3 and Panel 4 remain tonally repetitive. The closing quote panel is a dead-end — no link to the next conversion step.
- Mobile: 200vh sticky budget still means panels 3 and 4 get near-zero dwell on phone viewports.

---

### 4. About the Maker (7.8/10)

**Cycle 3 delta:** Moved from 7.5 to 7.8. This is the most improved section this cycle.

- The "Pennsylvania Studio" caption strip with copper hairline divider below the photo reads as authorship attribution, not a floating badge. It is the correct treatment for a personal maker brand.
- L-bracket corner marks (28px, 65% opacity) are restrained and elegant — they frame the photo without competing with it.
- Signature at 2.1rem with 44px top margin now functions as a genuine personal seal. The about copy, quote, divider, body copy, signature, and CTA read as a complete narrative arc.
- Quote quieted slightly so the signature wins the visual attention hierarchy — correct priority.

**Remaining weaknesses:**
- Image is still `pexels-7998221` — the same image used in the closing Process panel. A repeated stock photo within the same page is the single most trust-damaging detail on the site.

---

### 5. Studio Strip (6.0/10)

**No change.** Still all stock imagery. No finished product visible. Pull quote is unattributed. Mobile horizontal scroll is a conversion dead zone.

---

### 6. Custom CTA (7.0/10)

**No change.** Forest green contrast section works. "Most of my favorites have been custom work" is strong conversion copy. Trust metadata strip is well-placed. Watermark "Custom" still competes on tablets. Third trust-strip item ("Bags, quilts & commissions welcome") is still redundant.

---

### 7. Testimonials (6.5/10)

**No change this cycle.** Testimonials Etsy-link cooldown ends this cycle — P3 for cycle 4 is to link "via Etsy" to the actual shop.

**Status:** Source labels still unlinked. Four of five cards still 5-star. Initial-letter avatars remain. Auto-play on mobile has no pause or swipe affordance.

---

### 8. Contact / Form (7.5/10)

**No change.** Trust note above form is excellent. Form architecture is clean. `hello@madebymolly.com` fallback is unmonitored. No Instagram handle in contact section.

---

### 9. Mobile UX — Holistic (7.0/10)

**Cycle 3 delta:** Moved from 6.8 to 7.0. The Process panel vertical centering fix is the most impactful mobile improvement this cycle — panels that drifted in position on different text heights now sit consistently. Readability improvements compound on mobile where screen brightness and viewing angle reduce contrast further.

**Remaining weaknesses:**
- Process panels 3 and 4 still lose dwell time on mobile (200vh sticky budget).
- No back-to-top affordance on a page approximately 12–14 viewport lengths tall.
- Testimonials auto-play with no swipe affordance on mobile.

---

### 10. Brand Cohesion / Photography (5.5/10)

**No change.** This remains the score ceiling. All photography is stock. `pexels-7998221` appears in both the About section and the closing Process panel — the single most damaging repeated image on the site. One real photograph of Molly or a finished product would move this score more than any remaining code change.

---

## Priority List — Top 3 (Cycle 4)

### Priority 1 — CRITICAL: Real photography is the score ceiling
The repeated `pexels-7998221` across About and the Process closing panel is the single most trust-damaging detail remaining. One original photograph — Molly's hands on her specific products, a finished bag, a real quilt — would do more for conversion than any remaining code change. Until this is replaced, no amount of copy or layout refinement can move the site past 7.5.

### Priority 2 — HIGH: Etsy shop link on source badges (cooldown ends this cycle)
"via Etsy" as a pill badge implies external verification but links nowhere. Connecting it to an actual Etsy shop URL converts an implied trust signal into a real one. This is a single href change with a disproportionate credibility return. If a live Etsy URL is not available, the label should be rewritten to "past commission client" to be accurate without implying unverifiable platform verification.

### Priority 3 — MEDIUM: Trust strip third item in Custom CTA — swap for shipping or returns guarantee
"Bags, quilts & commissions welcome" is a restatement of the site's entire offer in the climactic CTA section. Replace with a concrete buyer reassurance: "Ships to all 50 states" or "If it doesn't feel right, I'll make it right." A buyer reading the trust strip at decision time needs risk reduction, not product category confirmation.

---

## What Would Move This to 7.5+

1. One real original product photograph replacing `pexels-7998221` in the About section at minimum.
2. Etsy shop link connected to "via Etsy" source badges.
3. Trust strip third item in Custom CTA replaced with a shipping or returns guarantee.
4. Back-to-top affordance for mobile.
5. Visible Instagram handle in contact or footer — fastest "real human" signal for a maker brand.
6. Textarea placeholder made directive ("e.g. a market tote in olive linen, roughly 14 inches wide") to reduce blank-page paralysis.

---

## Audit History

| Date | Cycle | Score | Focus Axis | Top Issue |
|------|-------|-------|-----------|-----------|
| 2026-04-25 | 1 (smoke test) | 6.8 | conversion-friction | Disclaimered block of 5 perfect ratings actively destroys trust |
| 2026-04-25 | 2 | 7.0 | conversion-friction | Stock photography is the score ceiling; testimonials improved but unverified |
| 2026-04-25 | 3 | 7.2 | conversion-friction | Repeated pexels-7998221 across About + Process is the remaining primary trust blocker |

---

*Score: 7.2 — Better than most competitors. Price ranges now give buyers budget fit at a glance. Process panels readable and vertically consistent. About section reads as a genuine maker page. Held below 7.5 by stock photography ceiling and repeated image.*
