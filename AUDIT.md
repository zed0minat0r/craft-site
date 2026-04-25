# AUDIT: Made by Molly — Nigel's Strict Assessment
**Auditor:** Nigel (British Standards, Real-User Perspective)
**Date:** 2026-04-18
**Previous Score:** 6.3
**URL:** https://zed0minat0r.github.io/craft-site/

---

## OVERALL SCORE: 6.8 / 10
**Delta: +0.5 from 6.3**

A genuine step forward. The critical blockers from the last audit — silent contact form and missing mobile navigation — have both been resolved, which earns real credit. The accessibility improvements (reduced-motion coverage, font size corrections, process connector repositioning) are done correctly. The cross-stitch texture on the process section is a subtle, welcome touch. The site now functions as a business.

What holds it back from 7.0 and above remains the same structural problem it has always had: every image is generic Unsplash stock, all five testimonials are obviously fabricated, and there is still no real Molly on this page. The site has graduated from "template with critical failures" to "a polished AI-generated storefront." That is progress. But a real buyer who pauses for ten seconds will notice the same things they would have noticed before.

---

## WHAT CHANGED AND HOW IT SCORES

### Resolved: Contact Form — Formspree endpoint wired
The form now posts to `https://formspree.io/f/xpznqkdl`. This was the single most important fix and it is done correctly. The direct email fallback (`hello@madebymolly.com`) is present. The success message is in the DOM and wired properly. The previous score on this section was 6.0 due to the silent form. This is now creditable.

### Resolved: Mobile Hamburger Navigation
The hamburger is present, 44px tap target, aria-expanded attributes toggle correctly, the overlay is full-screen espresso with 64px min-height links, body scroll is locked when open, and links close the menu. The JS implementation is clean and correct. The previous 6.0 on mobile UX was earned. This is properly fixed.

### Resolved: Font sizes raised
`hero-scroll-hint` is now 0.8rem. `section-label` is 0.8rem. `process-step-label` is 0.8rem. These render at 12.8px at 16px base — above the 12px floor. The form labels at 0.75rem sit at 12px exactly. Acceptable. The `author-location` and `footer-copy` at 0.75rem and 0.78rem remain borderline but these are secondary metadata, not primary content. The worst offenders are gone.

### Resolved: prefers-reduced-motion
The CSS block at the bottom of style.css covers: both copper buttons (breathe animation), all five hero fade-up elements, scroll-line pulse, testimonial-scroll, all reveal elements, the hero-bg Ken Burns, and all hover image transitions. The JS parallax and reveal observer are both gated on `window.matchMedia('(prefers-reduced-motion: reduce)')`. This is thorough and correct.

### Resolved: Blue-teal yarn image
Process step 02 now shows `photo-1558769132-cb1aea458c5e` — hands knitting with warm cream wool on wooden needles. Warm-toned, on-palette, appropriate.

### Resolved: Process connector line
Previously at `top: 80px` (threading through ghost numbers). Now at `top: 118px`. The circular image wrap is 160px tall, positioned below a 5.5rem ghost number with -20px margin-bottom (approximately 68px rendered). The centre of the circles sits at approximately `68px + 80px = 148px` from the top of the process-step. At `top: 118px` the connector runs through the lower third of the ghost numbers and the upper third of the images — closer but still not dead-centre. Acceptable improvement.

### Resolved: Mood-row alternation
`.mood-row.reverse .mood-text` now directly applies `background: var(--cashmere)` to the reversed rows, independent of nth-child counting. The grid counting issue from the previous audit is bypassed. Works correctly.

### Resolved: Custom Orders CTA detail line
"Typical lead time: 3–4 weeks · I reply within 24 hours · Custom colors & sizes welcome" is present and correctly styled. This materially reduces bounce on that section.

### Resolved: Testimonial copy
The testimonials read slightly more naturally — no "10/10" inside the quote text. Still obviously fabricated, but less egregiously so.

### Resolved: Email fallback
Present in the contact section. Correct.

### New: Cross-stitch texture overlay
The SVG data-URI texture on `.process::before` is tasteful at `opacity: 0.045`. It adds hand-craft texture without cluttering the section. Good judgement on opacity.

---

## SECTION SCORES

### 1. Hero — 7.0 / 10
No change from last audit. Ken Burns + parallax executes correctly. Gradient overlay sits right. The reduced-motion guard now covers the hero completely. Copy remains solid. Held back by Unsplash stock image and breathe animation on the CTA button, which now properly stops on hover.

### 2. Shop by Mood — 6.5 / 10
No change. Layout is proven. The alternation fix is correct. The three CTAs still all link to `#contact` with no product differentiation — a user clicking "Baby Collection" lands on the same contact form with zero additional context. No pricing, no turnaround, no indication whether these items are made to order or available now.

### 3. Process Strip — 7.0 / 10
Up from 6.8. The warm-toned yarn image in step 02 now matches the palette. The cross-stitch texture adds craft authenticity. The connector line is improved. The copy for step 02 ("usually with a podcast on and a dog at my feet") remains the best line on the site.

### 4. About the Maker — 7.2 / 10
Unchanged. Still the strongest section. The about photo shows hands, not Molly's face. Still the most significant remaining trust signal missing from the page.

### 5. Custom Orders CTA — 7.0 / 10
Up from 6.5. The lead time, reply time, and custom options line resolves the "nervous first-timer" problem identified in the last audit. A customer now has the expectation data they need before clicking. The pulsing copper CTA is correct on this dark espresso section — it draws the eye without competing with text.

### 6. Testimonials — 5.8 / 10
No meaningful change. Five perfect five-star reviews, all Pennsylvania, all reading as AI-authored. The copy is marginally more natural but a discerning buyer will still smell these immediately. This section continues to damage rather than build trust. The duplicate cards have `aria-hidden="true"` set correctly — that is a nice accessibility detail.

### 7. Contact Form — 7.5 / 10
Up from 6.0. The Formspree endpoint is live. Email fallback is present. Form layout is clean, labels are readable, focus states are copper-ringed, min-heights are 44px, textarea resizes vertically, the inquiry dropdown has four sensible options. The `_next` redirect points to the correct GitHub Pages URL. The success message div is in DOM and hidden. This section now functions as intended.

### 8. Mobile UX at 375px — 7.0 / 10
Up from 6.0. The hamburger is implemented correctly — 44px target, proper aria, body scroll lock, clean close behaviour. The full-screen overlay with 64px link rows is appropriate and accessible. The font size corrections resolve the worst legibility failures. Minor remaining issue: `about-location-tag` at `left: 0` with no photo-frame margin adjustment can still overlap the image on the narrowest viewports, as the frame has no left padding. Low priority.

### 9. Typography — 7.5 / 10
Up from 7.5 — no change. Playfair Display / DM Sans pairing is correct. The clamp sizing is good responsive practice. Label sizes are now above the 12px floor throughout primary content.

### 10. Colour Palette — 7.8 / 10
No change. The cashmere-taupe system is internally consistent. The blue-teal image has been replaced. The cross-stitch texture on the process section is warm and on-palette.

### 11. Scroll Animations — 7.8 / 10
Up from 7.0. The reduced-motion coverage is thorough — both CSS and JS. The IntersectionObserver configuration is sensible. The parallax is correctly gated. The testimonial scroll animation pauses on hover. All improved.

### 12. Overall Authenticity — 5.5 / 10
No change from last audit. The site has better-than-average copy warmth and a genuinely attractive palette. But it remains an AI-generated storefront with stock images, fabricated testimonials, and no visible real person. For a buyer looking to commission a handmade item from a real artisan, the absence of proof — a face, a real review, an Etsy link, a real social feed — is the central problem. Polish does not substitute for trust signals.

---

## TOP 3 PRIORITIES

### Priority 1 — Add one real photograph of Molly's face
The about section shows hands. The hero is stock knitwear. Every other image is Unsplash lifestyle. A single genuine portrait — even a casual phone photo in good light — would do more for conversions than any technical improvement on this list. It transforms "a pretty template" into "a real person's business." This is the highest-leverage change remaining.

### Priority 2 — Replace fabricated testimonials with real social proof
Five identical five-star reviews from perfectly distributed Pennsylvania towns read as AI-generated to any buyer who pauses for more than ten seconds. If there is one real customer quote — a text, an email reply, a comment on Instagram — use it. One genuine testimonial at four stars with an imperfect sentence beats five fabricated perfect ones. Consider replacing the scroll strip with two or three static cards if real reviews are sparse.

### Priority 3 — Add pricing anchors or a "starting from" line to each Shop row
The site is custom-order-only but gives no pricing signal anywhere. A buyer thinking about a baby blanket as a gift does not know if this is a $40 purchase or a $400 purchase. Even a vague "starting from $65" or "most pieces ship within 4 weeks for $80–$180" sets expectations and filters for buyers who are ready to commit. Without it, the Custom Order CTA requires a leap of faith that many buyers will not take.

---

## SECONDARY NOTES (for the builder)

- The `about-location-tag` at `left: 0` on mobile has no corresponding adjustment to the photo frame's left margin — on very narrow viewports this tag may overlap the image edge. Add `margin-left: 16px` to the tag on mobile or offset the frame accordingly.
- The `select` element in the contact form has no custom chevron indicator — the appearance is reset with `appearance: none` but no replacement arrow is provided. Add a CSS background-image SVG arrow to match the form's visual language.
- Social links in the footer link to `#` — correct placeholder behaviour, but if real social accounts exist they should be wired.
- The `process-strip::before` connector at `top: 118px` still does not thread perfectly through the centre of the circular images (centre sits closer to 148px). A value of `top: 140px` would be more accurate. Low priority cosmetic issue.
- All Shop row CTAs link to `#contact` with no context passed. Consider adding a `?type=blankets`, `?type=scarves`, `?type=baby` query param and using JS to pre-select the inquiry dropdown on page load. This would significantly improve the custom order funnel.
