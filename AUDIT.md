# AUDIT: Made by Molly — Nigel's Strict Assessment
**Auditor:** Nigel (British Standards, Real-User Perspective)
**Date:** 2026-04-18
**Previous Score:** 7.2
**URL:** https://zed0minat0r.github.io/craft-site/

---

## OVERALL SCORE: 7.4 / 10
**Delta: +0.2 from 7.2**

A modest but honest bump. The nine changes claimed for this cycle are all present in the code and all correctly implemented. The problem is that most of them operate below the threshold of what a real buyer consciously notices: the time disclosures are a pleasant detail, the yarn brand names add mild credibility, the footer tap targets are invisible unless something was broken before. The shipping/returns trust block is the most useful addition — a buyer on the verge of contacting a stranger about a $85 purchase wants exactly that kind of reassurance.

The site has now reached a genuine code ceiling for the decorative layer. Every pixel-level improvement from here yields diminishing returns. The authenticity gap — no real face, no verified testimonials, no wired social presence — has not narrowed. A buyer who pauses and looks critically will still see a polished AI-generated storefront. That structural gap is the reason this score cannot reach 7.8 or higher without client content.

---

## WHAT CHANGED AND HOW IT SCORES

### Time disclosures on shop rows
"Each throw takes 12-15 hours of hand knitting" / "Each piece takes 4-8 hours of careful work" / "Each baby blanket takes 8-10 hours of hand knitting" — all three rows confirmed in HTML. These are implemented as `.mood-time` (italic, walnut-coloured, 13px). They are styled appropriately: small enough not to compete with the headline, present enough to register. On mobile the class correctly gets `text-align: center`. The copy is honest and differentiating — a buyer comparing handmade vs. machine-made goods responds to this. Small but genuine.

### Shipping/returns trust block
The `.contact-trust` block sits above the contact card: "Custom orders ship within 3-4 weeks via USPS Priority Mail. If you're not happy with what arrives, message me — I'll make it right. I stand behind every piece I make." This is exactly the right copy in exactly the right place. A buyer filling in a custom enquiry form has one question: will I be protected if something goes wrong? This line answers it. The styling (taupe text, subtle border, semi-transparent background) is appropriately low-key. Correct placement, correct tone, correctly styled.

### Broken social links removed
Instagram and Pinterest icons gone from the footer. Only the email icon (linking to #contact) remains. This is the correct decision. An icon that goes nowhere actively damages credibility. The email-only footer is honest and functional. Confirmed.

### Yarn brands in descriptions
Merino, alpaca, cashmere-blend, organic cotton, bamboo — all woven into the three shop row descriptions. This is the kind of material specificity that converts a browsing buyer into an enquiring one. "Cashmere-blend yarns" and "hypoallergenic organic cotton and bamboo" for baby items are appropriate and persuasive. Confirmed. Small improvement.

### Testimonials disclaimer
"Reviews from early customers and friends who've received my work." Present and styled correctly as `.testimonials-disclaimer` (italic, small, cashmere-coloured). This is a responsible addition. A discerning buyer sees the disclaimer and gives the benefit of the doubt; without it they smell fabrication immediately. It doesn't fix the problem but it mitigates it appropriately. Confirmed.

### Footer tap targets (mobile)
`.footer-links a` and `.contact-email-fallback a` both have `display: inline-flex; align-items: center; min-height: 44px; padding: 4px 0;` in the mobile media query. Nine links, all at 44px minimum touch height. Correct. Confirmed.

### Submit button loading state
`form-submit:disabled` in CSS (walnut background, cursor: not-allowed, no transform, opacity 0.7). JS sets `btn.disabled = true` and `btn.textContent = 'Sending...'` on form submit. Clean implementation. Confirmed.

### Hero eyebrow lines resized for mobile
`@media (max-width: 768px)`: `.hero-eyebrow::before, .hero-eyebrow::after { width: 16px; }` — previously 28px. The proportional issue flagged in the last audit is resolved. Confirmed.

### Dead CSS cleaned
No orphaned classes detectable. CSS is 1264 lines with every class accounted for. The vestigial empty `{}` at `.about-text-side` noted in the previous audit — no longer present. Confirmed clean.

---

## SECTION SCORES

### 1. Hero — 7.2 / 10
Unchanged from last audit. Ken Burns on load, parallax on scroll, gradient overlay, breathe animation on CTA, reduced-motion handling all correct. The eyebrow lines are now proportional on mobile. Still Unsplash stock. The copy is strong. Nothing moved either direction.

### 2. Shop by Mood — 7.3 / 10
Up from 7.0. The time disclosures add a layer of authenticity that most handmade craft sites lack — specifying 12-15 hours for a throw is the kind of detail a machine-made competitor cannot credibly claim. The yarn brand names (merino, alpaca, cashmere-blend) give a buyer language to evaluate the product. Pricing anchors remain. Inquiry pre-selection remains. This section is now working hard.

### 3. Process Strip — 7.0 / 10
Unchanged. No claimed changes here. The connector threads correctly at 140px. The cross-stitch texture, the circular images, and the three-step copy ("usually with a podcast on and a dog at my feet") remain the most characterful section of the site.

### 4. About the Maker — 7.2 / 10
Unchanged. Voice is warm and specific. Still no face. A buyer who reads "I make things with my hands" and then sees a stock photo of someone else's hands will register the disconnect, even if they cannot articulate it. This section has reached its ceiling without a portrait.

### 5. Custom Orders CTA — 7.2 / 10
Unchanged. Lead time (3-4 weeks), 24-hour reply commitment, custom colors welcome — all present. Dark espresso background with copper accents reads correctly as a high-intent conversion section. Nothing new, nothing broken.

### 6. Testimonials — 5.8 / 10
Unchanged. Disclaimer improves the section marginally but does not change the fundamental problem: five reviews from five different Pennsylvania cities, all five stars, all coherent and warm, arriving in an era when any buyer who has encountered AI-generated content will recognise the pattern. The marquee scroll is technically correct, the hover-pause works, the aria-hidden on duplicates is correct. The execution remains excellent. The content remains a liability.

### 7. Contact Form — 7.6 / 10
Up from 7.5. The trust block above the form is a genuine improvement. Shipping method (USPS Priority Mail), timeline (3-4 weeks), and satisfaction guarantee in one sentence is exactly what a first-time buyer needs before submitting. The loading state on submit is now confirmed working. The Formspree endpoint is live. Email fallback is present. The form is as good as it can be without a real backend.

### 8. Mobile UX at 375px — 7.3 / 10
Up from 7.2. Footer tap targets at 44px. Hero eyebrow lines proportional. Trust block centred correctly on mobile. Mood-time centred on mobile. The site stacks cleanly and nothing is broken. One remaining observation: the about-section on mobile has `text-align: center` for the text side, which means the blockquote and about-body paragraphs are centre-aligned. For a personal narrative, centre-aligned paragraphs are harder to read than left-aligned. This is a minor legibility issue, not a blocking one.

### 9. Typography — 7.5 / 10
Unchanged. Playfair Display / DM Sans pairing correct. Clamp sizing on all major headings. Font weights appropriate throughout. No regressions.

### 10. Colour Palette — 7.8 / 10
Unchanged. Cream-taupe-cashmere-walnut-espresso-copper system internally consistent across every section. No violations.

### 11. Scroll Animations — 7.8 / 10
Unchanged. Reduced-motion coverage thorough. IntersectionObserver config sensible. Parallax correctly gated. All animations have appropriate timing.

### 12. Overall Authenticity — 5.9 / 10
Fractional improvement from 5.8. The yarn brand names, time disclosures, and testimonials disclaimer all move the needle slightly toward "real business." The shipping/returns language is the most authentic element added this cycle. The gap between "polished AI-generated storefront" and "real maker's business" remains. It cannot close without a photograph, real testimonials, or a wired social presence.

---

## TOP 3 PRIORITIES

### Priority 1 — A real photograph of Molly
This has been Priority 1 since audit 1. It remains Priority 1. The about section has everything correct: the quote, the voice, the body copy, the signature. It then shows a stock photo of someone else's hands. One authentic portrait — even a phone photo, even slightly out of focus — converts this site from "a beautiful template" into "a real person's business." No code change can substitute for this. It is the single highest-leverage action remaining.

### Priority 2 — Replace fabricated testimonials with real ones
If Molly has sold a single item and received any positive response — a text, a return email, a social comment — that content belongs here. Two authentic four-star reviews with natural imperfections are significantly more credible than five identical five-star cards from different Pennsylvania cities. Reducing the marquee to real reviews, even three, even short, is worth more than any further polish cycle. The disclaimer helps but it does not fix the root issue.

### Priority 3 — Wire a real social or commerce link
The footer now correctly shows only the email icon. The next step is connecting at least one external proof of existence: an active Instagram account with real photos of Molly's work, an Etsy shop link, a Google review page, or similar. Even a single wired account with twelve posts transforms the site's credibility signal from "this could be anyone" to "this is a real business." This is a client action, not a code action — but it is the third most important thing this site needs.

---

## CEILING ASSESSMENT

The code ceiling has been genuinely reached. Every meaningful improvement in the decorative and structural layer has been made: the colour system is tight, the typography is correct, the animations are appropriate and accessibility-compliant, the mobile layout stacks cleanly, the form is functional, the copy is warm and specific, the pricing and trust signals are in place. Further coding cycles will yield changes smaller than a real user can perceive.

The remaining gap between the current score (7.4) and a competitive score (8.0+) is entirely an authenticity gap. It requires client content: a photograph, real testimonials, a wired social or commerce account. None of these are code problems. A builder agent cannot solve them. The site is ready to receive that content — the infrastructure, the layout, the tone, and the trust signals are all in place. The bottleneck is now on the client side.

---

## SECONDARY NOTES

- About section on mobile: `text-align: center` on the text side makes multi-paragraph body copy harder to read. Left-aligning body paragraphs on mobile while keeping headings and the quote centered would improve legibility without touching the design.
- The contact form has no character count indicator on the message textarea. For a custom-order enquiry, a buyer may wonder how much detail is expected. A small "Tell me what you're looking for..." placeholder is present and is sufficient — this is genuinely minor.
- All footer links point to internal anchors. Wholesale (#contact) is listed as a footer link — if Molly does not offer wholesale, this option should be removed from the contact dropdown and the footer to avoid wasting inquiry slots on non-viable leads.
- The baby collection CTA uses `data-inquiry="custom"` which pre-selects "Custom Order" in the contact form. A dedicated "Baby Collection" option in the dropdown would route baby enquiries more specifically — this is a nice-to-have for a future cycle if enquiry volume justifies it.
