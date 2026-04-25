# AUDIT: Made by Molly — Nigel's Strict Assessment
**Auditor:** Nigel (British Standards, Real-User Perspective)
**Date:** 2026-04-18
**Previous Score:** 6.8
**URL:** https://zed0minat0r.github.io/craft-site/

---

## OVERALL SCORE: 7.2 / 10
**Delta: +0.4 from 6.8**

A meaningful improvement cycle. The changes this round are smaller in ambition than previous cycles, but they are the right kind of small: they close funnel gaps rather than add decoration. The pricing anchors, inquiry pre-selection, select chevron, and contact copy are all legitimate quality-of-life improvements that a real buyer would notice. That earns the bump.

The ceiling is now clearly in view. This site cannot break 7.5 without real proof that Molly exists — a genuine photograph, a real testimonial, or a wired social account. Every cycle that improves the polish without addressing authenticity is one that narrows the gap between this score and the structural limit.

---

## WHAT CHANGED AND HOW IT SCORES

### Copy de-templating across 6 sections
The hero sub is now: "Not mass-made. Not a factory. Just me, my needles, and a lot of good yarn — from my living room to yours." This is considerably better than whatever generic language preceded it. The about-section body copy is warm and specific. The contact sub-line — "Tell me what you're dreaming up. I read every message myself and usually reply same day." — is exactly right for a solo maker's contact form. The custom CTA sub now reads: "Most of my favorites have been custom orders. Someone sends me a photo, a color swatch, a vague idea — and we figure it out from there." Genuine voice. Real improvement across the board.

### Shop CTAs now pre-select inquiry type
The data-inquiry attributes are present on all three shop row buttons. The JS reads them on click and sets the inquiry select value after a 600ms scroll delay. This is correct and properly implemented. Blankets and Baby Collection both map to "custom"; Scarves and Hats map to "gift." The "gift" pre-selection for the Scarves row is a nice logical touch. The 600ms delay is sensible.

### Select dropdown chevron fixed
The select element now has `appearance: none` plus a background-image SVG chevron at right 14px, walnut-coloured, matching the form palette. This was a genuine visual bug — the previous stripped select had no affordance indicator. Now resolved correctly.

### Process connector at top: 140px
The previous audit recommended 140px as the accurate centre-threading position. It is now exactly 140px. The connector threads cleanly through the circular image wraps. This is a cosmetic fix but a correct one.

### Mobile about location tag fixed
`left: 16px` on mobile (previously `left: 0`). The tag no longer bleeds into or over the photo frame edge on narrow viewports. Small, clean fix.

### Pricing anchors on shop rows
$85 (Blankets), $45 (Scarves & Hats), $55 (Baby Collection) are all present with "Starting from" labels in copper. These were the single most-requested item from the last audit's Priority 3. Implemented correctly. A buyer can now gauge whether this is within budget before clicking through.

### Dead CSS removed and overflow fixes
Claimed 28 lines removed. Cannot fully verify line count but the CSS is 1202 lines with no orphaned dot-nav or unused utility classes detectable. Overflow: hidden is correctly applied on shop-mood and about sections. Clean.

---

## SECTION SCORES

### 1. Hero — 7.2 / 10
Up from 7.0. The de-templated hero sub ("Not mass-made. Not a factory...") is genuinely better copy. Everything else is unchanged: Ken Burns, parallax, gradient, breathe animation on CTA all working as before. Still Unsplash stock.

### 2. Shop by Mood — 7.0 / 10
Up from 6.5. The pricing anchors are the most significant functional improvement this cycle. A buyer can now see $85 for throws, $45 for scarves, $55 for baby items before committing to inquiry. The inquiry pre-selection adds a small but real funnel improvement. The layout remains strong. The three mood descriptions are appropriately specific. Still no material differentiation between sections beyond copy — all three go to the same contact form.

### 3. Process Strip — 7.0 / 10
No change from 7.0. Connector now threads correctly at 140px. Warm-toned images. Cross-stitch texture. "Usually with a podcast on and a dog at my feet" remains the best line on the page.

### 4. About the Maker — 7.2 / 10
No change. The body copy is now clearly from a real person's voice and holds up well. Still no face. The about photo shows hands, not Molly. This section cannot score above 7.5 without a portrait.

### 5. Custom Orders CTA — 7.2 / 10
Up from 7.0. The sub-copy ("Most of my favorites have been custom orders...") is more personal than whatever preceded it. Functionally identical to the previous build otherwise. The lead time and reply commitment line ("3-4 weeks · I reply within 24 hours") remains a strong trust signal.

### 6. Testimonials — 5.8 / 10
No change. Still five fabricated five-star reviews. The marquee scroll is technically well-executed and the hover-pause behaviour is correct. The cards look polished. The content is the problem, not the execution. No real person wrote these. A discerning buyer sees through this within seconds. Duplicate cards have aria-hidden="true" — that detail remains correct.

### 7. Contact Form — 7.5 / 10
No change. Formspree endpoint live. Email fallback present. Inquiry pre-selection now wired from shop CTAs. Chevron on select is visually resolved. The form is functional, clear, and appropriately minimal. One minor gap: no loading state on the submit button after clicking — the user gets no feedback that the form is processing, only the hidden success div appearing after completion. Low priority.

### 8. Mobile UX at 375px — 7.2 / 10
Up from 7.0. The location tag fix is confirmed at `left: 16px`. Form row goes to single column correctly. Mobile nav overlay is correctly implemented. The about-section in single column with centered text alignment works. A minor remaining issue: the hero eyebrow on mobile centers correctly (`justify-content: center`) but the decorative lines on either side of "Handmade in Pennsylvania" are 28px each, which on very small screens looks proportionally too wide relative to the text. Cosmetic, not blocking.

### 9. Typography — 7.5 / 10
No change. Playfair Display / DM Sans pairing remains correct. Font sizes above 12px for primary content throughout. Clamp sizing on major headings is good responsive practice.

### 10. Colour Palette — 7.8 / 10
No change. The cashmere-taupe-espresso-copper system is internally consistent throughout every section. No palette violations introduced.

### 11. Scroll Animations — 7.8 / 10
No change. Reduced-motion coverage remains thorough. IntersectionObserver threshold at 0.12 with -40px rootMargin is a sensible configuration. Parallax correctly gated.

### 12. Overall Authenticity — 5.8 / 10
Up fractionally from 5.5. The copy is now warm enough that it reads as a real person's voice. The process description is charming. The contact sub-line is exactly what a solo maker would write. These are real improvements. But without a face, without real testimonials, and without wired social links, this remains an AI-generated storefront wearing a convincing costume. A buyer who pauses at the testimonials section will lose confidence. A buyer who clicks the Instagram icon and hits a # will lose confidence.

---

## TOP 3 PRIORITIES

### Priority 1 — A real photograph of Molly
Not hands. Her face. Even a casual, unpolished phone photo is more persuasive than the finest Unsplash lifestyle imagery. The about section has everything right — the voice, the warmth, the quote, the signature — and then shows a stock image. One real portrait transforms "a polished AI storefront" into "a real person's business." This is the highest-leverage change remaining and has been Priority 1 since audit 1. It remains Priority 1.

### Priority 2 — Replace at least two fabricated testimonials with real ones
If Molly has sold one item and received any positive feedback — a text, an email reply, a comment — use it. Two real testimonials at four stars with imperfect sentences are more convincing than five fabricated five-star cards. Consider reducing the marquee to three cards if only two or three real reviews exist. Quality of social proof matters more than quantity.

### Priority 3 — Wire the social media links
The Instagram and Pinterest links in the footer both go to "#". If real accounts exist, link them. If they do not exist yet, consider removing the icons or replacing with a different trust signal (e.g., a Etsy link, a Google review count). An icon that goes nowhere signals to the buyer that this is a template, not a live business. A wired Instagram with even 12 posts of real knitting is vastly more credible than a broken social icon.

---

## SECONDARY NOTES

- Submit button has no loading or disabled state during form submission. Consider adding a visual indicator to prevent double-submit and confirm that something is happening.
- Hero eyebrow decorative lines (28px each) are slightly wide relative to text on very narrow mobile viewports. Reducing to 16-20px on mobile would improve proportion.
- Baby Collection CTA uses data-inquiry="custom" which is sensible given the dropdown options available, but a future improvement could add a "Baby Collection" inquiry option to the dropdown so pre-selection is more specific.
- The `about-text-side` class has an empty CSS rule `{}` at line 567 — vestigial, harmless, but tidy to remove.
- The process connector (`top: 140px`) is now correctly positioned. This is resolved.
