# Made by Molly — Nigel's Audit
**Date:** 2026-04-18
**Auditor:** Nigel (strict British auditor)
**Previous Score:** 5.8 / 10
**Current Score: 6.5 / 10**
**Delta: +0.7**

---

## Scoring Context

Scored strictly from the perspective of a real buyer — someone who has found the site
through a search or referral and is deciding within 90 seconds whether to commission
a bag or quilt or close the tab. The score from 5.8 moves to 6.5. That is a genuine
improvement, not a gift. The process rebuild is substantial. The hero overlay correction
is meaningful. The studio strip is a real addition. But the fundamental problem — a site
that looks like every other artisan brand generated in 2025 — is still present.

---

## What Changed and Whether It Helped

**Process section rebuilt (full-width alternating panels at 60vh, big photos, ghost
numbers, copper rules):** This is the most significant improvement in the build. Moving
from 160px circle thumbnails to full-width 60vh panels is a categorical upgrade. The
alternating photo-left / text-right layout with 55/45 column split is well-proportioned.
The ghost numbers now read at 7–9rem instead of being invisible. The copper rule divider
above the note text is a tasteful craft detail. This section now feels intentional rather
than assembled from a checklist.

**Hero overlay reduced from 72% to ~50%:** Confirmed. The gradient reads
`rgba(48,40,36,0.52)` at 0% and `rgba(48,40,36,0.30)` at 50%, meaning the underlying
image is now genuinely visible in the right two-thirds of the frame. The product actually
shows through. This is a meaningful improvement — the hero now has photographic content,
not just a tinted rectangle.

**Woven linen SVG texture on shop-mood and contact:** Present in the CSS. The `opacity:
0.035` on shop-mood and `0.04` on contact is so restrained that it is functionally
invisible except on calibrated screens in a darkened room. The texture is there in
principle; it contributes approximately nothing to the visible experience. A missed
opportunity — this motif should be at 0.06–0.08 to register.

**Studio/WIP strip (auto-scrolling photos between About and CTA):** This is a genuine
addition and the right instinct. Five photos, duplicated for seamless loop, with captions
and a hover-pause. On desktop it works well. On mobile it correctly disables the animation
and becomes a horizontally scrollable snap container. The images are still stock but the
section concept is right. This is the most interesting scroll moment on the page.

**CTA background: flat gradient replaced with real quilt fabric photo at 18% opacity:**
Confirmed — `background-image` referencing the pexels quilt image at `opacity: 0.18`.
The radial gradient overlay on top partly neutralises the image. The result is more
interesting than a flat dark box but the fabric is barely perceptible. Increase to 0.25
and reduce the radial darkening gradient for better effect.

**Wholesale inquiry removed from dropdown:** Correct. The dropdown now reads Bag or Tote
Order / Art Quilt Order / Custom Commission / General Question. This is cleaner and more
appropriate for a solo maker.

**About corner accent unclipped:** The `overflow: hidden` was removed from the `.about`
section, and the corner accent is now position `bottom: -20px / right: -20px` on the
`.about-photo-side`. On desktop this renders correctly — the copper corner box is
partially visible as a decorative bleed. This works.

---

## Section Scores

### 1. Hero — 6.5 / 10
*(was 6.0)*

The overlay correction is real. The image of fabric and bags now reads through the
gradient, particularly in the right and bottom quadrants. The Ken Burns scale-down on
load plus the parallax scroll creates genuine cinematic movement — this is the most
polished animation on the page. The copy remains the strongest on the site.

Still failing: the hero image is still a stock photograph. A buyer cannot see a single
piece that is specifically Molly's. The eyebrow flanked by copper rules is elegant but
also extremely common — it appears in approximately a third of artisan web templates.
The `hero-headline` typesize at `clamp(3rem, 7vw, 6.5rem)` is appropriate but the
italic `em` on "made to last." is a direct visual cliche of the genre.

---

### 2. Shop by Mood — 6.0 / 10
*(was 5.5)*

The alternating image-text row structure has not changed architecturally, but the
linen texture overlay (however faint) and the gradient background (`cream → #ede5db →
taupe`) give the section marginally more depth than before. The mood-time italic
annotation ("Each bag takes 6–10 hours...") is a smart addition — it does the work of
communicating value and effort without a paragraph of copy.

Still failing: the ghost numbers at `rgba(48,40,36,0.08)` are still essentially invisible
on the taupe background. The contrast between mood-text panels (taupe, cashmere) and
the page background remains minimal — this section has no visual tension. The `btn-walnut`
links still go to #contact with no intermediate gallery, which is a conversion gap: a
buyer must decide to commission before they have seen enough product.

---

### 3. The Process — 7.5 / 10
*(was 6.5)*

The rebuild earns this score. Full-width 60vh alternating panels are a genuine editorial
statement. The ghost number at `clamp(5rem, 9vw, 9rem)` reads at a size that actually
registers. The copper rule between desc and note text is a precise craft detail. The
hover scale on the full-bleed photo creates a satisfying pan effect. On a desktop screen
this section now passes the "linger" test — a buyer will actually read through it.

Still failing: the process-panel-note text ("Selecting textiles, colors, patterns")
is placeholder-grade copy — it reads like an alt text caption, not a human moment. The
section ends abruptly without a transition into About. The `process-panel--reverse`
direction-swap technique (RTL flipping) is technically functional but can cause text
alignment quirks on some devices.

---

### 4. About the Maker — 7.0 / 10
*(unchanged)*

The unclipped corner accent now works properly, which removes a visual glitch from the
previous audit. The section is otherwise unchanged. The score holds at 7.0. The about
copy is personal and credible. The 5:7 portrait-to-text grid remains the best-composed
layout on the page. The portrait image is still stock, which is the ceiling on this score.

---

### 5. Studio Strip — 6.5 / 10
*(new section)*

Credit for adding this. It is the correct instinct — a buyer needs to see the making
process, not just the finished object, to build desire and trust. The CSS-only infinite
loop with hover-pause is technically clean. The edge fades via mask-image work properly
on desktop. The captions (Cutting fabric / At the machine / Choosing fabric) are plain
but honest.

Fails on the following: the strip images are 270px wide at 200px tall — small enough
that fabric detail is lost. The strip sits between About and Custom CTA, which is
architecturally correct, but there is no visual separation from the About section — both
sit on taupe/cashmere backgrounds and the boundary between them is ambiguous. The captions
in small uppercase are typographically fine but do nothing to create personality or
narrative across the strip.

---

### 6. Custom Orders CTA — 6.8 / 10
*(was 6.5)*

The quilt fabric photo at 18% opacity behind the espresso background is a genuine
improvement over the previous flat dark box. The radial gradient overlay preserves
legibility while letting the texture bleed through at the edges. The breathe glow on
the copper button remains one of the most effective single details on the page.

Still too timid. The fabric image at 18% opacity and behind a `rgba(48,40,36,0.6)` radial
darkener gives maybe 8–10% perceived texture to the eye. Bump the bg-img opacity to 0.28
and reduce the radial overlay's central opacity to 0.4. The title size
(`clamp(2.2rem, 5vw, 4rem)`) is correct but the section could carry a much larger
italic background watermark — the word "Custom" at enormous scale, 0.05 opacity, would
give this section visual depth without legibility cost.

---

### 7. Testimonials — 6.0 / 10
*(unchanged)*

The CSS marquee scroll remains elegant. The section has not changed since the previous
audit. The score holds. The header still reads "What People Say" as a section-label and
"What people are saying" as the h2 — exact repetition. All five reviews remain five-star,
uniformly structured, with the trust-undermining disclaimer intact.

---

### 8. Contact / Form — 6.5 / 10
*(unchanged)*

The form itself is unchanged and still functional. The wholesale inquiry removal is an
improvement to the dropdown. The section is technically correct. The score holds.

---

### 9. Mobile Experience — 6.0 / 10
*(was 5.5)*

The studio strip mobile behaviour (animation disabled, horizontal snap scroll) is a solid
mobile decision. The process panels stack correctly with the photo capped at 52vw / max
320px. The mood rows stack cleanly. Hero centres correctly.

Still failing: the about-photo-accent is hidden on mobile (`display: none`) which is
correct, but the about section on mobile loses its only decorative interest. The
testimonials track on mobile renders cards at near-full viewport width, destroying the
carousel feel. The ghost process numbers at 9rem overflow into adjacent content on narrow
viewports — not clipped.

---

### 10. Visual Identity / Does It Look AI-Generated? — 5.5 / 10
*(was 5.0)*

Marginal improvement. The process rebuild gives the site one section that feels designed
rather than assembled. The studio strip is an appropriate structural addition. The hero
overlay correction gives the page more photographic content.

The fundamental palette problem is unchanged: cream / taupe / cashmere / walnut / espresso
/ copper is the exact output of any LLM prompted with "artisan craft website colour
palette." Playfair Display italic + DM Sans is the canonical AI craft brand font stack.
The small copper uppercase section labels at 0.22em letter-spacing appear verbatim in
the Webflow artisan template marketplace.

There is no visual signature that belongs specifically to Molly. No idiosyncratic
typographic choice. No unexpected structural element. No photography that could only
be hers. A visitor who has seen two other handmade bag sites will not remember this one.

---

## Top 3 Priorities for Visual Excitement

### Priority 1 — Give the Process Section a Closing Moment
The rebuilt process panels are now the strongest visual section. Capitalise on that by
adding a closing panel — a full-bleed "Ready" image at 100vh with a single overlaid
line of italic display type ("Every seam sewn with intention.") and a copper arrow
scrolling down into About. This turns a three-step information section into a narrative
with a conclusion. Cost: one panel, one image, thirty lines of CSS.

### Priority 2 — Make the Studio Strip a Feature, Not a Thumbnail Bar
The studio strip concept is right but the execution is modest. Increase the strip item
height from 200px to 300px. Add a hover state that expands the hovered image to 120%
height and fades the caption in as an overlay. Add a single pull-quote between the header
and the strip — one line from Molly about the making process, in large italic display
type — so the strip reads as a moment rather than a decorative element. On mobile, make
the snap items full-width (calc(100vw - 48px)) rather than a fixed 250px.

### Priority 3 — Break the Beige Monotony with One Unexpected Colour Decision
The entire site is warm neutrals. There is no visual surprise — no moment where the colour
palette does something unexpected. Introduce a single strong accent: a dark forest linen
green (`#2e3d2f`) as the background for one section (the studio strip, or a narrow
divider strip between process and about). This does not require a rebrand — one section
in a contrasting hue would give the page a backbone. Right now the page is all middle
tones: no true darks (espresso is soft), no true lights (cream is warm), and no contrast
anchor. A single deep green or dusty blue applied surgically would make every other
section look more intentional by comparison.

---

## What Is Working and Must Be Kept

- The copper breathe glow animation on primary buttons — distinctive, keep it
- The hero Ken Burns + parallax combination — the best animation on the page
- The rebuilt process panels at 60vh — the clearest visual upgrade in this build
- The CSS-only testimonial marquee — technically elegant, keep it
- The woven linen SVG texture concept — increase opacity but do not remove it
- The about-quote ("I wanted to make things that outlast the trend they were bought in")
  — must remain; it is the best line on the site and should be used more aggressively
- The studio strip between About and CTA — right concept, needs improvement, keep it

---

*Scored strictly. 6.5 is a real improvement from 5.8 — the process rebuild earns it.
The studio strip earns it. The hero overlay correction earns it. But the site still reads
as AI-assembled craft brand, not Molly's craft brand. The gap between 6.5 and 7.5 is
filled by one unexpected visual decision and real photography. Neither is present yet.*
