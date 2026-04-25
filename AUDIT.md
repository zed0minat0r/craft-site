# Made by Molly — Nigel's Audit
**Date:** 2026-04-18
**Auditor:** Nigel (strict British auditor)
**Overall Score: 5.8 / 10**

---

## Scoring Context

Re-baselined from 7.4 following the content pivot from knitting to bags and art quilts.
The previous score was inflated. Scored strictly from the perspective of a real buyer
who has just landed on the site and is deciding whether to browse, commission, or leave.

The site functions correctly and is technically competent. It does not, however, visually
arrest the visitor. It reads like a well-assembled Squarespace template: beige-on-beige,
Playfair Display italic headline, fade-in reveals, copper accents. Every craft business
on Instagram uses this palette. There is nothing here that makes a real buyer stop scrolling
and think "I need one of these."

---

## Section Scores

### 1. Hero — 6.0 / 10

**What works:** Ken Burns scale-down on load is a nice touch. The staggered fadeUp
animation on headline, subtext, and buttons is cleanly executed. The copper progress bar
glow is tasteful. The copy ("Not mass-made. Not a factory. Just me, my fabric, and a
sewing machine") is the strongest writing on the page.

**What fails:** The hero background image is a generic stock photo of bags. It conveys
nothing specific about Molly's work. A real buyer cannot tell from this image whether
Molly makes canvas totes, leather satchels, or quilted clutches. The image does not
communicate craft — it communicates "bag brand." The overlay (72% espresso tint at 135
degrees) buries the photograph almost entirely, which means the hero is essentially a
dark gradient with text on it. The parallax is modest and the Ken Burns effect is very
subtle — these exist but contribute almost nothing to perceived drama.

**Priority improvement:** Replace the stock hero image with a grid or collage of actual
Molly pieces — or a textured fabric close-up that moves through a scroll-triggered reveal.
The hero needs to feel like you are standing in the studio, not looking at a mood board.

---

### 2. Shop by Mood — 5.5 / 10

**What works:** The alternating image-left / text-right layout is a proven structure. The
numbered rows (01, 02, 03) are a reasonable navigational device. The hover scale on
product images is smooth.

**What fails:** This is the most visually flat section on the page. The "mood text" panels
are taupe or cashmere — warm beiges — against warm beige background. There is virtually
no contrast or tension. The large ghost numbers (01, 02, 03) at opacity 0.08 are invisible
on screen — they add nothing. The product images are stock photographs with no relation
to Molly's actual work. A buyer looking at "Bags & Totes" sees a stock image of a bag;
looking at "Art Quilts" sees a stock close-up of patchwork. There is no sense of a maker
with a distinct aesthetic. The buttons ("Bags & Totes", "Art Quilts") link to #contact —
which is technically honest, but sends the buyer to a form with no intermediate imagery
or gallery to build desire. There is no price hierarchy or social proof at the product row
level to build conviction before asking for a custom inquiry.

**Priority improvement:** Add a 4-to-6 image mosaic or masonry strip between the mood
rows — real product photography or high-quality stand-ins that show the range and
texture of the work. Give the buyer visual evidence before the CTA.

---

### 3. The Process — 6.5 / 10

**What works:** The three-step layout with the connecting gradient line is structurally
clean. The circular image frames break the grid nicely. The staggered reveal delays
(0s / 0.15s / 0.3s) are well-calibrated. The cross-stitch SVG texture on the section
background is a subtle and appropriate craft detail.

**What fails:** 160px circular images are thumbnail-sized. The photographs are stock.
The section feels light — it explains the process in three sentences but does not make
the viewer feel the labour or care. At 160px circles, the buyer cannot see the detail
of the fabric being cut or the stitching being laid. The section title ("The Process")
is dull. This is the emotional heart of a handmade business — it should feel like a
behind-the-scenes moment, not a three-icon feature list.

**Priority improvement:** Make the process images dramatically larger — full bleed or
half-bleed photography. Introduce a horizontal scrollable "studio moment" strip that
lets the buyer move through the process visually, not just read bullet descriptions.

---

### 4. About the Maker — 7.0 / 10

**What works:** This is the strongest section. The 5:7 grid with portrait left and text
right is well-proportioned. The italic blockquote ("I wanted to make things that outlast
the trend they were bought in") is genuine and good. The decorative copper corner accent
adds craft-shop character. The Pennsylvania Studio location tag is a nice grounding
detail. The Molly signature line is appropriate.

**What fails:** The portrait image is stock — hands marking fabric, not a face. A buyer
commissioning a personal piece wants to know who they are buying from. There is no photo
of Molly herself. The about-photo-accent (decorative corner box) is positioned with
bottom: -20px / right: -20px but the parent has overflow:hidden, so it renders
only partially visible — a broken decorative element. The section background gradient
(cashmere to taupe) is more beige-on-beige without visual punctuation.

**Priority improvement:** Add a real photo of Molly or at minimum a second image of her
hands actively working — not a stock studio shot. Introduce a single high-contrast
accent — bold type, a pull-stat, a fabric swatch motif — to break the beige monotony.

---

### 5. Custom Orders CTA — 6.5 / 10

**What works:** The dark espresso background provides the only real contrast break on
the page. The copper button with the breathe glow animation draws the eye. The italic
headline ("made just for you?") is warm and personal. Lead time and turnaround copy
is appropriately reassuring.

**What fails:** The radial gradient accents (copper at 8% opacity, walnut at 12%) are
functionally invisible — they exist in the code but contribute nothing perceptible to
the eye. This section has the right bones for a dramatic mid-page moment but executes
timidly. It would benefit from a fabric texture overlay, a large italic type treatment
in the background, or a cinematic image bleed. As it stands, it is a dark box with a
few lines of text and a button.

**Priority improvement:** Add a large semi-transparent background element — a fabric
texture, a stitch pattern at scale, or a blurred close-up of material — that gives this
section visual weight. Make the section feel more like a gallery wall and less like a
modal dialogue.

---

### 6. Testimonials — 6.0 / 10

**What works:** The CSS-only auto-scroll marquee is technically elegant — no JS required,
pauses on hover, has edge fades. The testimonial cards with backdrop-filter blur on the
espresso/walnut background have appropriate depth. The copper gradient author avatars are
a decent substitute for photographs.

**What fails:** All five testimonials are five-star reviews with similar sentence
structures. A real buyer is suspicious of uniformity — it reads as curated or invented.
The disclaimer ("Reviews from early customers and friends who've received my work") is
an honest note but undermines trust rather than building it. The section header reads
"What people are saying" on both the label and h2 — a direct repetition. The marquee
is pleasant but is not an exciting scroll experience; it is background furniture.

**Priority improvement:** Vary the testimonials visually — one should be a longer quote
in a larger card, one should feature a specific before-and-after or named product. Add a
single quote pulled out in enormous display type above the marquee to create a moment
of genuine impact.

---

### 7. Contact / Form — 6.5 / 10

**What works:** The form is functional (Formspree integration), well-labelled, has
proper loading state and a trust strip above. The copper focus glow on inputs is tasteful.

**What fails:** The contact card sits on a dark walnut-to-espresso gradient and reads as
a clinical web form dropped into an otherwise editorial page. The "Wholesale Inquiry"
option in the dropdown feels out of place for a one-person studio; it raises questions
about scale and availability that a new visitor cannot answer.

**Priority improvement:** Add a warm pre-form panel — a quote, an image, a fabric colour
strip — that makes the act of filling in the form feel like starting a conversation
rather than submitting a ticket.

---

### 8. Mobile Experience — 5.5 / 10

**What works:** Mobile breakpoints are present and functional. Hamburger animates
correctly. Hero centers on mobile. Mood rows stack cleanly.

**What fails:** Center-alignment on mobile is inconsistent in the mood-time and mood-price
elements. The circular process images at 160px are still tiny on a 375px screen. The
testimonial cards at min-width 300px are nearly full-width on mobile, eliminating the
scrolling carousel effect entirely. The footer-brand-desc retains max-width: 260px on
mobile, creating awkward partial-width paragraphs against a full-width container.

---

### 9. Visual Identity / "Does It Look AI-Generated?" — 5.0 / 10

This is the most damaging score. The palette (cream, taupe, cashmere, walnut, espresso,
copper) is precisely what a generative model produces for every artisan business.
Playfair Display italic paired with DM Sans is the default craft-brand font stack. The
section labels in small copper uppercase with 0.22em letter-spacing appear on
approximately 40% of Webflow templates. The alternating image-text rows with numbered
items are a boilerplate editorial layout. The breathe glow animation on copper buttons
is ubiquitous in AI-generated craft sites.

None of this is catastrophically bad, but none of it is distinctively Molly's. A buyer
who has seen three other handmade bag sites this week will not remember this one. There
is no visual signature — no idiosyncratic typographic choice, no unexpected colour, no
structural surprise, no photography that could only belong to this maker.

---

## Top 3 Priorities for Visual Excitement

### Priority 1 — Introduce a Fabric-Texture Visual Language
The site talks about fabric constantly but never shows it in a way that makes the
visitor feel it. Introduce a full-bleed fabric texture as a recurring visual motif:
a woven linen SVG pattern or a real textile photograph used as a section background
at partial opacity. Use it behind the hero, as a section divider, and as an inset panel
in the CTA section. This single change would give the site a visual identity that no
template produces by default and would differentiate it immediately from AI-generated
craft sites.

### Priority 2 — Replace the Hero with a Split or Collage Treatment
The single dark stock image does not show what Molly makes. Replace it with a split
layout or polaroid-style collage of 3-5 product images that slide in on load — bags,
quilts, and fabric swatches together. This gives a buyer immediate visual vocabulary
for the range of work before reading a single word. Alternatively, use a CSS clip-path
reveal that unfurls a fabric texture across the hero as the page loads. Either approach
would make the hero feel like a destination, not a placeholder.

### Priority 3 — Add a Dramatic "Work in Progress" Full-Bleed Strip
Insert a horizontally scrollable, full-bleed photograph strip between the About section
and the Custom CTA. Show 5-7 images of work in progress: fabric being cut, seams being
pinned, a finished bag laid flat, a quilt panel in mid-assembly. Allow this strip to
scroll horizontally on desktop (mouse drag or arrow keys) and horizontally swipe on
mobile. This is the single most effective thing a handmade business can do to build
trust and desire simultaneously — it shows the actual labour, not just the finished
product, and it is the kind of scroll experience that makes visitors linger.

---

## What Is Working and Must Be Kept

- The copper breathe glow on primary buttons — distinctive and warm, do not remove
- The cross-stitch SVG texture on the process section — appropriate and subtle, keep it
- The CSS marquee testimonial scroll — technically elegant, keep and improve it
- The hero copy voice — genuine and strong, must not be genericised
- The about-quote ("I wanted to make things that outlast the trend they were bought in")
  — this line should also appear as a pull-quote or hero sub-headline, it is the best
  writing on the site

---

*Scored strictly. 5.8 reflects a competent but visually forgettable execution of a pivot
that has the right content but not yet the visual identity to make a buyer feel something.
The bones are solid. The soul is not yet visible on the screen.*
