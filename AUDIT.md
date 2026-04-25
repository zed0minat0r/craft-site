# AUDIT — Made by Molly
**Auditor:** Nigel  
**Date:** 2026-04-25  
**Focus axis:** Conversion friction  
**Score:** 6.8 / 10

---

## Rubric Anchors
- 5.0 = average, forgettable
- 6.0 = generic but functional
- 7.0 = better than most competitors
- 8.0 = someone chooses this over alternatives

---

## Overall Verdict

The site is visually accomplished for a single-page artisan build. The scroll experience, typography pairing, and colour palette are clearly above average craft — Playfair + DM Sans in cream/espresso/copper reads as intentional and appropriate. However, evaluated purely through the lens of whether a stranger reading this site will actually send an inquiry, several friction points bleed the site below the 7.0 threshold.

The site is better than a generic Squarespace template but not yet at the level where it removes every hesitation a prospective buyer carries into the page. It earns a 6.8.

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

**Weaknesses:**
- The section ends with "Tell me what you're looking for and let's figure out what we can make together" — but there is no CTA button at the bottom of the About section. A reader emotionally engaged at this point has nowhere to go except scroll to the next section (Studio Strip), which is atmospherically pleasant but lowers temperature. A direct CTA here would catch a conversion moment.
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

### 7. Testimonials (6.0/10)

**Strengths:**
- Auto-scrolling testimonials at 50s pace is slow enough to be readable on desktop.
- Card content is specific — city names, product types, use frequency. Not boilerplate in tone.
- The hover-pause on track is a useful desktop behaviour.

**Weaknesses:**
- All five testimonials are 5-star ratings. Without a platform badge (Etsy, Google, Meta), a block of identical perfect ratings reads as fabricated. This actively undermines trust rather than building it. Even a single 4-star rating with a note would be more credible.
- "Reviews from early customers and friends who've received my work" — this disclaimer appears directly below five perfect star ratings. It is an admission that these are not verified reviews positioned at the exact moment of maximum doubt. It does more damage than no testimonials at all for a skeptical buyer.
- The author initials (R, J, S, K, D) with gradient letter-avatars are not convincing stand-ins for real faces. A single real photo with permission would outweigh five initial-avatars.
- On mobile, auto-play continues with no visible controls — a user who cannot navigate back to a card they half-read will simply scroll past the section.

---

### 8. Contact / Form (7.5/10)

**Strengths:**
- The trust note above the form ("Custom orders ship within 3–6 weeks... If you're not happy with what arrives, message me — I'll make it right") is excellent conversion copy. Specific, personal, and addresses the risk a first-time buyer carries.
- Form architecture is clean: name, email, inquiry type, message. No field bloat.
- The inquiry pre-select via `data-inquiry` click linkage is genuinely smart.
- Form submit loading state plus 12s safety reset is solid engineering.

**Weaknesses:**
- `hello@madebymolly.com` as the fallback email is a placeholder — if the inbox is unmonitored, a visitor who uses the email fallback gets no response.
- There is no phone or social link in the contact section. For a personal maker brand, a visible Instagram handle would add the "real human" signal.
- The form textarea placeholder ("Tell me what you're looking for...") could be more directive. Something like "e.g. a market tote in olive linen, roughly 14 inches wide" gives hesitant buyers a model to follow and reduces blank-page paralysis.

---

### 9. Mobile UX — Holistic (6.5/10)

**Strengths:**
- 44px minimum touch targets are consistently respected throughout.
- Horizontal overflow has been addressed. No scroll bleed observed in the markup.
- Mobile hamburger, overlay, and close behaviour are clean and functional.

**Weaknesses:**
- On mobile the sticky process section at 200vh means panel transitions happen at high scroll speed — there is functionally no dwell on panels 3 and 4. A user who scrolls at a moderate pace will cycle through all four panels in under 4 seconds.
- There is no back-to-top affordance. A single-page site this tall (approximately 12–14 viewport lengths on mobile) has no recovery path for a user who passes a CTA.
- The testimonials auto-play on mobile has no visible pause or swipe affordance.

---

### 10. Brand Cohesion / Photography (5.5/10)

**Strengths:**
- The Pexels image selection is on-theme (fabric, sewing, patchwork) and avoids obviously generic stock clichés.
- Colour palette is internally consistent and the photography is selected to complement the cream/espresso/copper tones.

**Weaknesses:**
- All photography is stock. The images selected do not show the specific products being sold — no identifiable bags, no specific quilt pattern. A visitor sees "fabric and sewing" but cannot visualise "a Made by Molly bag."
- The hero background, mood row image for bags, and the closing process panel and about section photo are among the most-used Pexels craft images. A buyer who has visited any other handmade goods site in the past year may recognise them.
- Process panel 3 and the About section both use the same image (`pexels-7998221`). This is a direct contradiction within the same page — two sections, apparently different, sharing one photograph.

---

## Priority List — Top 3

### Priority 1 — CRITICAL: Repair testimonial credibility
The disclaimered block of five perfect ratings is the single most trust-damaging element on the page. Add a platform label ("via Etsy" or similar), vary the star ratings to include one 4-star, and move the disclaimer into a less prominent position — or remove it entirely and replace with one verified review widget. Five stars with a "friends who received my work" caveat is worse than no testimonials at all for a skeptical buyer.

### Priority 2 — HIGH: Add a CTA at the bottom of the About section
The emotional peak of the page (About copy, personal tone, Molly signature) has no action path. A reader primed by "I make things that outlast the trend they were bought in" needs a button immediately below — "Start a custom order" or "Tell me what you need." This is a missed conversion moment that costs one button element to fix.

### Priority 3 — MEDIUM: Fix price range ambiguity in the Shop rows
"Starting from $75" for bags creates open-ended price anxiety. Add a range or a second anchor ("Structured totes $75–$180 / Market bags $75–$95") so a buyer can estimate whether the piece fits their budget before investing time in the form. Without an upper bound, "starting from" implies unlimited price, which is a stop signal rather than a proceed signal.

---

## What Would Move This to 7.5+

1. Testimonial credibility fixed (verified source badge or mixed ratings).
2. CTA added at the base of the About section.
3. Price ranges added to all three shop rows.
4. Back-to-top affordance for mobile.
5. Trust strip third item in Custom CTA section replaced with a shipping or returns guarantee.
6. One original product photograph replacing the most-repeated stock image.

---

*Score: 6.8 — Visually better than most, held back by testimonial credibility failure and missed conversion moments at emotional peaks.*
