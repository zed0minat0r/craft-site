# AUDIT: Made by Molly — Nigel's Strict Assessment
**Auditor:** Nigel (British Standards, Real-User Perspective)
**Date:** 2026-04-18
**URL:** https://zed0minat0r.github.io/craft-site/

---

## OVERALL SCORE: 6.3 / 10

Strong bones. Creditable palette. But it still reads as a very polished AI template, not a real woman's knitting business. The copy is warmer than average, the colour system is cohesive, and the structure is logical. It is held back by a complete absence of real photography (every image is a generic Unsplash stock photo), a testimonials strip that a real user will recognise as fabricated, no pricing or availability signals anywhere, no mobile hamburger menu, and a contact form that silently does nothing. For someone genuinely looking to commission a baby blanket, these gaps create real doubt.

---

## SECTION SCORES

### 1. Hero — 7.0 / 10
The Ken Burns scale-on-load and the parallax scroll are both well-executed. The gradient overlay sits at the right depth — text is readable without murdering the image. Eyebrow label, headline, sub-copy, and dual CTA buttons are correctly layered. The "Handmade with intention" line is not embarrassing.

**What holds it back:** The Unsplash hero image (photo-1649490530808) shows what appears to be folded knitwear on a bed — acceptable, but it is clearly stock. No photographer credit, no real product. The `.btn-copper` breathing animation is pleasant at rest but the infinite glow pulse on two separate elements simultaneously (hero CTA and custom-orders CTA) will read as frenetic to some users. The scroll hint at 0.7rem / letter-spacing 0.15em is 10px rendered — below the 12px minimum legibility floor.

### 2. Shop by Mood — 6.5 / 10
The alternating split-screen rows (image left / text right, then reversed) are a proven layout that works. The mood numbers as decorative ghost text are a nice typographic touch. The background gradient bleed from cream into taupe is smooth.

**What holds it back:** All three Unsplash images are generic lifestyle shots — stacked blankets, a pile of coloured yarn skeins, a pink baby item. The yarn skein image for "A gift that lasts" (row 02 — scarves and hats) is a clear mismatch; a user landing here expecting to see hats and scarves sees a heap of unlabelled yarn. Row 02's `.mood-text` sits on `.mood-row:nth-child(even)` which maps to cashmere background, but the grid counts the header `div` as the first child — the even/odd alternation may render incorrectly depending on browser, producing two cashmere panels in a row. All three CTAs link to `#contact` rather than to any product page or individual section, which means "Blankets & Throws," "Scarves & Hats," and "Baby Collection" all navigate identically — a user who clicks any of them simply arrives at the contact form with zero further context. There is no price range, no turnaround time, no indication of what "Shop" actually means for a custom-order-only business.

### 3. Process Strip — 6.8 / 10
Three-step layout is clean. Circular image crops with the faint cream border work nicely on the cashmere background. The staggered reveal delays (0s / 0.15s / 0.3s) are subtle enough not to feel gimmicky.

**What holds it back:** The horizontal connector line (`process-strip::before`) is positioned at `top: 80px`, which places it through the ghost numbers, not through the circular images — it will appear visually disconnected from what it is meant to connect. Process step 02 uses a blue-wool Unsplash image (`photo-1597736091383`) that has a strong blue-teal cast entirely out of step with the warm Cashmere Taupe palette. Process step 03 shows folded machine-made-looking sweaters, not hand-knitted pieces. The copy for step 02 ("usually with a podcast on and a dog at my feet") is genuinely warm and personal — the best line on the site. More of this voice is needed everywhere.

### 4. About the Maker — 7.2 / 10
This is the strongest section. The 5/7 column grid, the layered photo-frame with copper accent square, the "Pennsylvania Studio" pill tag offset to the left, the italic blockquote, and the copper divider all work together. The copy is the most believable on the page — first-person, specific, unhurried.

**What holds it back:** The about photo (`photo-1632649027900`) shows hands knitting — hands, not Molly. A real artisan site at this quality level would have at least one image of the maker's face. On mobile, `about-location-tag` is repositioned to `left: 0` but the photo-frame has no left offset — the tag will clip or overlap awkwardly. The `.about-photo-accent` decorative copper-border square is hidden on mobile (`display: none`) which is correct, but on desktop the `bottom: -20px; right: -20px` positioning means it can be cropped by the section overflow if the next section's `z-index` does not clear it.

### 5. Custom Orders CTA — 6.5 / 10
Dark espresso section with radial copper gradients, a large italic headline, and the pulsing copper CTA button. Visually distinct from the surrounding sections. The copy ("stitch by stitch") is on-brand.

**What holds it back:** This section reveals nothing a customer needs to make a decision: no minimum order, no turnaround time, no price range, no indication of what happens after they click. For a custom-order business this is the single most important conversion moment on the page — it needs at least one line of expectation-setting ("Lead time is typically 3–4 weeks. I'll reply within 24 hours."). Without it, a nervous first-time customer has no reason to click.

### 6. Testimonials — 5.8 / 10
The auto-scrolling CSS animation is technically clean. The mask gradient fade on left and right edges is a professional touch. The hover-pause behaviour is correct and considerate.

**What holds it back:** All five testimonials are obviously fabricated. Every single one is five stars. Every person is from a Pennsylvania city (Philadelphia, Pittsburgh, Lancaster, Allentown, Chester County) — suspiciously perfect geographic distribution. Every quote reads like it was written by the same person. A real user who pauses to read these will smell them. "10/10" appearing inside a testimonial alongside five star icons is redundant and pattern-matches immediately to AI-generated copy. The author avatars are single-letter initials in copper circles — no real photos, no Gravatar-style images. This section actively damages trust rather than building it. The extra closing `</div>` at line 386 of index.html (after the testimonials section closes) is a stray tag that will cause DOM parsing issues in strict mode.

### 7. Contact Form — 6.0 / 10
Clean card layout floating on the dark espresso/walnut gradient. Labels are correctly sized, inputs have 44px min-height, focus state is copper-ringed and clear. The inquiry-type dropdown with four options (Custom Order, General Question, Wholesale Inquiry, Gift Consultation) is thoughtful.

**What holds it back:** The form submits to nothing. `handleSubmit` fakes a 1.2-second delay then shows a "Thank you" message — no email is sent, no Formspree/Netlify endpoint, no backend. A customer who fills this out and hits Send will simply never hear from Molly. This is a critical failure for any real business. The inline style `font-size:0.9rem; color:var(--walnut)` on the contact sub-paragraph should be moved to CSS. No phone number or direct email address is provided as a fallback.

### 8. Typography — 7.5 / 10
Playfair Display at display sizes paired with DM Sans at body sizes is a sensible, warm pairing. The italic weight is used purposefully in headlines. `clamp()` sizing throughout is correct responsive practice. Line-height 1.65 body / 1.8 body-copy in about section is generous and readable.

**What holds it back:** `.hero-scroll-hint` at 0.7rem and `.process-step-label` at 0.65rem are both below 12px on most viewport sizes. Several `.section-label` elements render at ~11px. These are accessibility failures at WCAG AA.

### 9. Colour Palette — 7.8 / 10
The Cashmere Taupe system (cream, taupe, cashmere, walnut, espresso, copper) is internally consistent and genuinely warm. The gradient flows from section to section are thoughtfully ordered — cream into taupe into cashmere into espresso into walnut and back — creating a natural darkening journey down the page. The copper accent is used sparingly and correctly.

**What holds it back:** The blue-teal yarn image in the process section (step 02) breaks the palette entirely and should be replaced with a warm-toned image.

### 10. Mobile UX at 375px — 6.0 / 10
The hamburger menu is entirely absent — `.nav-links` is set to `display: none` on mobile with no replacement. A user on a phone has no way to navigate to any section except by scrolling. This is a fundamental mobile UX failure. The mood rows collapse to single column with 280px image heights — acceptable. Form inputs have `min-height: 44px` — correct. Process steps collapse to a single column — correct. The `form-row` collapses to single column on mobile — correct.

**What holds it back:** No hamburger/drawer navigation. Scroll-hint text at 0.7rem is under 10px on mobile. The about location tag repositioned to `left: 0` without adjusting the photo-frame margin will cause overlap on narrow screens.

### 11. Scroll Animations — 7.0 / 10
IntersectionObserver at 0.12 threshold with a -40px rootMargin is a sensible configuration. The four variants (from-bottom, from-left, from-right, from-fade) are used with purpose. Staggered delays on process steps are subtle. The hero parallax translate is correctly gated to `y < window.innerHeight * 1.5` to avoid wasted computation.

**What holds it back:** No `prefers-reduced-motion` media query anywhere — neither in the CSS animations (breathe, scrollPulse, testimonial-scroll, fadeUp) nor in the JS parallax or reveal logic. This is a significant accessibility gap.

### 12. Overall Authenticity — 5.5 / 10
The site has better-than-average copy warmth and a genuinely attractive palette. But taken as a whole, a discerning buyer will recognise the AI-template fingerprints: every stock image is generic Unsplash lifestyle content, all testimonials are clearly fabricated, there is no real Molly (no face, no social link with actual posts), no prices, no availability, no turnaround time, no Etsy link, no real email address. The site has the aesthetics of a real artisan brand without any of the proof signals.

---

## TOP 3 PRIORITIES

### Priority 1 — Add a Working Contact Form Backend
The form currently does nothing. Every enquiry is silently lost. Connect to Formspree (free tier), Netlify Forms, or EmailJS. Add Molly's email address in the contact section as a direct fallback. This is not a design improvement — it is the minimum viable requirement for the site to function as a business.

### Priority 2 — Add a Mobile Hamburger Navigation
On mobile (375px), all nav links are hidden with no replacement. A user on a phone cannot navigate to Shop, Process, About, or Custom Order without scrolling the entire page. Add a hamburger icon that opens a slide-in or full-screen drawer with all nav links. Tap targets must be at least 44px tall.

### Priority 3 — Replace Fabricated Testimonials with One Real One, and Add a Real About Photo
Five perfect five-star reviews from conveniently distributed Pennsylvania towns destroy credibility. If Molly has even one real customer who gave feedback — a text, an email, a comment — use that. One authentic testimonial outweighs five fake ones. Alongside this, add at least one real photograph of Molly's face. The about section currently shows hands. The hero image is stock. A single genuine portrait — even a casual phone photo — would do more for trust than any amount of visual polish.

---

## SECONDARY NOTES (for the builder)

- Fix the stray `</div>` at line 386 of index.html (inside the testimonials section).
- Add `prefers-reduced-motion` guards to all CSS animations and the JS parallax.
- Raise `hero-scroll-hint`, `process-step-label`, and `section-label` font sizes to a minimum of 12px.
- Replace the blue-teal yarn image (process step 02) with a warm-toned alternative.
- Add turnaround time and pricing guidance to the Custom Orders CTA section.
- Fix the `mood-row:nth-child(even)` selector — it may be counting the wrong elements depending on DOM structure.
- The `process-strip::before` connector line at `top: 80px` does not visually connect the circular images — adjust to sit at approximately `top: 120px` to thread through the centre of the circles.
