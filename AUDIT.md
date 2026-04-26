# AUDIT — Made by Molly
**Auditor:** Nigel
**Date:** 2026-04-25 (cycle 2)
**Focus axis:** Conversion friction
**Score:** 7.0 / 10

---

## Rubric Anchors
- 5.0 = average, forgettable
- 6.0 = generic but functional
- 7.0 = better than most competitors
- 8.0 = someone chooses this over alternatives

---

## Overall Verdict

Cycle 2 delivered three genuine quality improvements: the testimonials source label is now a copper pill-badge paired flush-right with the star row (structural gain), the mobile mood photo wipe-in direction is corrected, and the carousel seamless-loop padding fix resolves a visible jump on narrow viewports. The About section CTA was already present in HEAD (a prior audit oversight — it is there, it is wired, it is good).

The net result is a site that now reads more credibly in the testimonials block and moves more cleanly on mobile. However, the trust ceiling imposed by stock photography, unverifiable review sources, and price range ambiguity has not moved. A prospective buyer in 90 seconds will still ask "is this a real shop?" and not find a definitive answer. The score moves from 6.8 to 7.0 — we are now at "better than most competitors" but have not yet reached "I would choose this over alternatives."

---

## Section Scores

### 1. Hero (7.5/10)

**Strengths:**
- "Bags & quilts made to last" with the em-italic treatment is a clean, scannable value prop.
- Ken Burns load animation + copper breathe on CTA is tasteful, not aggressive.
- Eyebrow "Handmade in Pennsylvania" immediately establishes provenance — a genuine purchase signal for craft buyers.
- Product inset photo (hidden on mobile) adds commercial context without cluttering the headline.

**Weaknesses:**
- Hero sub-copy ("no factory, no shortcuts") doubles down on what the piece is NOT rather than what the buyer gets. A busy shopper needs to hear the transformation: "Carry something that gets better with age" rather than a manufacturing disclaimer.
- The ghost "Handmade" watermark adds depth but also adds words — a reader's eye catches it and processes it as content, adding a beat of cognitive load before they reach the real CTA.
- Two CTA buttons of near-equal visual weight ("Shop the Collection" + "Meet Molly") split intent. The ghost button works but the gap between them at 18px is close enough that the pair reads as a single block rather than a clear primary/secondary hierarchy.

---

### 2. Shop by Mood / Collection (6.5/10)

**Strengths:**
- Three distinct categories (bags, quilts, commissions) are surfaced clearly.
- The reveal-glow scroll entrance is distinctive and feels earned rather than mechanical.
- Time disclosures ("Each bag takes 6–10 hours") are a genuine conversion tool — they frame price relativity before the price is shown, which is the right order.
- Mood numbers (01/02/03) as large faded type add design structure appropriately.

**Weaknesses:**
- **Critical conversion gap:** Every shop CTA button links to `#contact` with a `data-inquiry` pre-select via a 600ms setTimeout. That timeout is a fragile UX bet on scroll animation timing. If a user clicks the button before fully scrolling, the pre-selection may fire into an already-dismissed form state.
- **No price range credibility:** Starting prices ($75 bags, $120 quilts, $95 custom) appear, but there is no upper bound or sizing reference. A buyer planning a gift cannot gauge whether $75 is a market tote or a structured weekender. Without that context the price reads as "at least this much" which is a stopping thought, not a proceeding thought.
- The `mood-time` copy ("Each bag takes 6–10 hours") is in italic walnut at 13px — genuinely hard to read on mobile at the cashmere background contrast ratio. This is the highest-value copy on the page for price justification and it is the least legible.

---

### 3. The Process — Sticky Scroll (7.0/10)

**Strengths:**
- The sticky pin + fade interaction is technically well-executed. Four panels at 75vh budget each gives enough dwell time to actually read the copy.
- Panel text is personal and specific: "usually with a podcast on and a dog at my feet" — this is the kind of detail that converts a fence-sitter. Authenticity beats polish for craft buyers.
- Progress dots as clickable jump targets are thoughtful and useful.

**Weaknesses:**
- Panel 3 ("Ready for Real Life") and Panel 4 (the closing quote) are tonally repetitive. Both land on "something worth keeping / worth living with" — the fourth panel should either escalate to a direct invitation or transition into the About section more actively than an animated arrow.
- The closing quote panel with the animated arrow is a dead-end — it does not link to the next conversion step (Contact). A user emotionally primed by the process narrative who clicks the down-arrow is dropped into the About section, which is a softer sell, not a harder one. The conversion sequence is inverted.
- On mobile, the sticky process works, but the 200vh budget means panels change every 100vh — panels 3 and 4 get almost no dwell. Users on mobile see "Choose the Fabric" and "Cut, Piece & Sew" then get dropped. The closing quote is likely never seen on most phones.

---

### 4. About the Maker (7.5/10)

**Strengths:**
- The about copy is the strongest writing on the site. "Textile art you actually want to live with" and "every seam sewn with intention" are specific and confident without being precious.
- Photo frame with copper accent, "Pennsylvania Studio" tag, and Molly signature together create a convincing personal voice.
- The grid proportion (5fr/7fr photo-to-text) is unconventional in a good way — the text dominates, which is right for a maker whose personality is the product.
- The "Start a custom order" CTA button at the base of the About section is present, wired via `data-inquiry="custom"`, and correctly placed at the emotional peak. This was flagged as missing in cycle 1 — it is confirmed present in HEAD.

**Weaknesses:**
- The image used ("Hands marking and cutting fabric") is the same Pexels photo used for the Process closing panel (`pexels-7998221`). A repeat image breaks the illusion of a specific studio and a specific maker.

---

### 5. Studio Strip (6.0/10)

**Strengths:**
- The CSS-only auto-scroll at 35s pace is unhurried and pleasant on desktop.
- Hover overlays with caption labels ("Cutting the pattern") add context without clutter.
- Forest green section creates visual contrast in an otherwise cream-dominant palette.
- Pull quote ("My studio is where fabric becomes something personal") is tonally right.

**Weaknesses:**
- This section does no conversion work. It is five photos of stock craft imagery that a visitor cannot distinguish from any other artisan brand. At minimum, one of these images should show a finished product held or worn to bridge process to purchase desire.
- The studio strip on mobile becomes a horizontal scroll with snap, which works mechanically but produces a dead section — users are already done here before any CTA or price anchor appears. The section could be merged with one clear image and a "Start your order" CTA to regain that real estate for conversion.
- The pull-quote is formatted as a quotation but is not attributed to Molly — a generic studio sentiment that any maker brand could use.

---

### 6. Custom CTA (7.0/10)

**Strengths:**
- The forest green break is visually dramatic and appropriate for a climactic mid-page CTA.
- "Most of my favorites have been custom work" — this signals that custom is not a hard ask, it is the preferred work.
- "Typical lead time: 3–6 weeks / I reply within 24 hours / Bags, quilts & commissions welcome" — the trust metadata strip is exactly the right content and exactly the right place for it.
- The btn-copper-lg breathe animation works as a pulse here. Not excessive.

**Weaknesses:**
- The watermark "Custom" in 22rem italic occupies nearly the full viewport width behind the content. On tablets the legible grey word competes visually with the headline — it reads closer to competing text than depth texture at mid-screen sizes.
- "Bags, quilts & commissions welcome" in the trust strip is redundant — this is the entire offer of the site. That third trust signal should be replaced with something more useful: "Ships to all 50 states" or "Returns accepted on any piece that doesn't feel right."

---

### 7. Testimonials (6.5/10)

**Cycle 2 delta:** Moved from 6.0 to 6.5. The Spark refinement made a real structural improvement — the source label is now a copper pill-badge sitting flush-right of the stars at the top of each card. This is the correct hierarchy: rating + source as a verification row, body copy below, author at base. It reads closer to a platform stamp than it did before. Additionally, one card (Kate A.) now shows 4 stars, which is a meaningful credibility signal. The disclaimer copy is softened to opacity 0.45 and 12px — present for honesty, no longer visually competing with the card content. These are genuine gains.

**Why it did not move further:** "via Etsy," "direct order," and "via Instagram" are unlinked plain text. There is no clickable Etsy shop URL, no verified checkmark icon, no review count. "Direct order" and "via Instagram" are not verifiable platforms — they are labels a site owner writes for themselves. A skeptical buyer reads all three the same way: unverified. The initial-letter avatars (R, J, S, D, K) remain unconvincing stand-ins for real people. Trust ceiling for this block without a linkable platform presence is approximately 6.5 regardless of how well the layout is executed.

**Strengths:**
- Auto-scrolling testimonials at 50s pace is slow enough to be readable on desktop.
- Card content is specific — city names, product types, use frequency. Not boilerplate in tone.
- The hover-pause on track is a useful desktop behaviour.
- Spark's pill-badge + rating-row pairing reads as verification intent, which is the right signal direction.
- Mixed star rating (4 stars on Kate A.) is more believable than uniform 5-star unanimity.
- Disclaimer is now visually receded — present for honesty, not distracting from card content.
- Carousel padding fix resolves the 375px seamless-loop jump. Technically clean.

**Weaknesses:**
- Source labels ("via Etsy," "direct order," "via Instagram") are not linked to any verifiable platform. The pill-badge styling implies verification that the underlying data does not support.
- Four of five primary cards still show 5-star ratings. One mixed rating helps but does not change the overall impression of a curated set.
- Initial-letter gradient avatars remain. A single real reviewer photo with permission would outweigh five initial badges.
- On mobile, auto-play continues with no visible pause or swipe affordance.

---

### 8. Contact / Form (7.5/10)

**Strengths:**
- The trust note above the form ("Custom orders ship within 3–6 weeks... If you're not happy with what arrives, message me — I'll make it right") is excellent conversion copy. Specific, personal, and addresses the risk a first-time buyer carries.
- Form architecture is clean: name, email, inquiry type, message. No field bloat.
- The inquiry pre-select via `data-inquiry` click linkage is genuinely smart.
- Form submit loading state plus 12s safety reset is solid engineering.
- The `?submitted=1` success state now correctly reveals and scrolls (Bug #2 fixed in prior cycle).

**Weaknesses:**
- `hello@madebymolly.com` as the fallback email is a placeholder — if the inbox is unmonitored, a visitor who uses the email fallback gets no response.
- There is no phone or social link in the contact section. For a personal maker brand, a visible Instagram handle would add the "real human" signal.
- The form textarea placeholder ("Tell me what you're looking for...") could be more directive. Something like "e.g. a market tote in olive linen, roughly 14 inches wide" gives hesitant buyers a model to follow and reduces blank-page paralysis.

---

### 9. Mobile UX — Holistic (6.8/10)

**Cycle 2 delta:** Moved from 6.5 to 6.8. The mood photo wipe-in now rises upward on scroll (Bug #8 fixed), matching scroll direction and feeling natural. The full alignment sweep at 375/414px is confirmed clean across all sections — no regressions. The carousel padding fix removes the 375px loop jump. Tap targets all pass 44px.

**Strengths:**
- 44px minimum touch targets are consistently respected throughout.
- Horizontal overflow has been addressed. No scroll bleed observed in the markup.
- Mobile hamburger, overlay, and close behaviour are clean and functional.
- Mood photo wipe-in direction corrected — rises upward on scroll, which reads naturally.
- All three mood-row accent bars are now left-aligned in single-column layout.
- Center-alignment sweep confirmed clean at 375px and 414px.

**Weaknesses:**
- On mobile the sticky process section at 200vh means panel transitions happen at high scroll speed — there is functionally no dwell on panels 3 and 4.
- There is no back-to-top affordance. A single-page site this tall (approximately 12–14 viewport lengths on mobile) has no recovery path for a user who passes a CTA.
- The testimonials auto-play on mobile has no visible pause or swipe affordance.

---

### 10. Brand Cohesion / Photography (5.5/10)

No change from cycle 1. This is the score ceiling for the entire site. Until real product photography replaces stock imagery, this section anchors the overall score below 7.5.

**Strengths:**
- The Pexels image selection is on-theme (fabric, sewing, patchwork) and avoids obviously generic stock clichés.
- Colour palette is internally consistent and the photography is selected to complement the cream/espresso/copper tones.

**Weaknesses:**
- All photography is stock. The images selected do not show the specific products being sold — no identifiable bags, no specific quilt pattern. A visitor sees "fabric and sewing" but cannot visualise "a Made by Molly bag."
- The hero background, mood row image for bags, and the closing process panel and about section photo are among the most-used Pexels craft images. A buyer who has visited any other handmade goods site in the past year may recognise them.
- Process panel 3 and the About section both use the same image (`pexels-7998221`). This is a direct contradiction within the same page — two sections, apparently different, sharing one photograph.

---

## Priority List — Top 3 (Cycle 3)

### Priority 1 — CRITICAL: Real photography is the score ceiling
Stock photography and the repeated `pexels-7998221` image are the single largest trust blocker remaining. No amount of layout refinement will move this site past 7.5 while every image could belong to any other artisan brand. Minimum viable step: replace the repeated image in the About section with any original photograph of Molly or her actual products. One real image of a finished bag or quilt would do more conversion work than any remaining code change.

### Priority 2 — HIGH: Fix price range ambiguity in the Shop rows
"Starting from $75" for bags creates open-ended price anxiety. Adding an upper bound or second anchor ("Market bags $75–$95 / Structured totes from $140") allows a buyer to gauge budget fit before committing to the contact form. Without an upper bound, "starting from" implies unlimited price — a stop signal rather than a proceed signal. This is a two-line copy change with a direct conversion impact.

### Priority 3 — MEDIUM: Testimonials — link or remove the platform labels
"via Etsy" as a pill badge implies a verifiable platform review, but there is no link to the Etsy shop, no review count, and no verified checkmark. The badge styling creates an expectation the data does not fulfil. Either link "via Etsy" to the actual Etsy shop listing (which would be a genuine trust signal) or replace the label with "custom commission client" to be straightforwardly honest without implying external verification that does not exist.

---

## What Would Move This to 7.5+

1. One real original product photograph (replacing `pexels-7998221` repeat in About section at minimum).
2. Price ranges added to all three shop rows — buyers need an upper bound to proceed.
3. Etsy shop link added to "via Etsy" source badges, or label copy adjusted to accurate phrasing.
4. Back-to-top affordance for mobile.
5. Trust strip third item in Custom CTA section replaced with a shipping or returns guarantee ("Ships to all 50 states" or "Full refund if it doesn't feel right").
6. A visible Instagram handle in the contact or footer section — for a one-person maker brand, a live feed or @handle is the fastest "real human" signal.

---

## Audit History

| Date | Cycle | Score | Focus Axis | Top Issue |
|------|-------|-------|-----------|-----------|
| 2026-04-25 | 1 (smoke test) | 6.8 | conversion-friction | Disclaimered block of 5 perfect ratings actively destroys trust |
| 2026-04-25 | 2 | 7.0 | conversion-friction | Stock photography is the score ceiling; testimonials improved but unverified |

---

*Score: 7.0 — Better than most competitors. Held back by stock photography, unverifiable review sources, and price ambiguity. Testimonials credibility improved meaningfully via Spark cycle 2; About CTA confirmed present. Real photography is now the primary blocker.*
