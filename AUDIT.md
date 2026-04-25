# Made by Molly — Nigel's Audit
**Date:** 2026-04-18
**Auditor:** Nigel (strict British auditor)
**Previous Score:** 6.5 / 10
**Current Score: 7.0 / 10**
**Delta: +0.5**

---

## Scoring Context

Scored strictly from the perspective of a real buyer — someone who found the site through
a referral or search and is deciding within 90 seconds whether to commission a bag or
quilt or close the tab. The previous score was 6.5. This round moves it to 7.0. That
half-point is genuinely earned: the process rebuild is now a real cinematic experience,
all three previous priorities were delivered, and the forest green gives the page its
first true contrast anchor. But 7.0 is still below "I would choose this over a competitor"
because the site's identity problem — Playfair italic plus DM Sans plus warm neutrals plus
copper accents — remains unresolved. It still reads as the canonical AI artisan template.
The gap to 8.0 is filled by one thing: real photography and one unexpected visual decision.

---

## What Changed and Whether It Helped

**Process section rebuilt as sticky pin and fade (4 panels, 300vh runway):**
This is a genuine architectural upgrade and the most impactful change in the build. A
300vh runway with a sticky container means the user scrolls through a full cinematic
sequence rather than past a list of steps. The JS implementation is clean — scroll budget
calculated from runway height, panel index derived from progress ratio, opacity toggled
with a 0.4s ease transition. The dot navigation with click-to-scroll is a correct
accessibility addition. On desktop this section now has presence. A buyer will linger here.

The closing panel — "Every seam sewn with intention." centred in italic display type
with a copper bouncing arrow — was Priority 1 from the previous audit. It is delivered
correctly. The copper-ringed arrow uses a `arrowBob` keyframe with a 2.5s loop. The
darker overlay on the closing panel (`rgba(48,40,36,0.65)`) gives the quote the
legibility it needs. This panel earns its place.

**Studio strip now on forest green with 300px images, hover captions, and pull-quote:**
All three sub-elements of Priority 2 and Priority 3 are present. The forest green
(`#2e3d2f`) is the only section on the site that breaks the warm neutral monotony — it
is exactly the contrast anchor the previous audit called for. The pull-quote ("My studio
is where fabric becomes something personal.") in italic display type at
`clamp(1.3rem, 2.5vw, 1.8rem)` does the work of framing the strip as a moment rather
than a decorative band. The 300px image height is a material improvement over the
previous 200px — fabric detail is now visible. Hover captions appearing as overlaid
italic text are the right treatment.

One technical issue: the `@keyframes studio-scroll` calculation uses
`calc(-270px * 5 - 16px * 5)` for the offset, but the `.studio-strip-track` has
`gap: 20px`, not 16px. This 4px discrepancy across 5 items creates a 20px jump at the
loop boundary — visible as a stutter on desktop on calibrated screens. Correct to
`calc(-270px * 5 - 20px * 5)`.

**Hero "Handmade" watermark:**
Present. Set at `rgba(247,242,236,0.05)` — approximately invisible. On the hero
photograph with its warm gradient overlay, this watermark registers at near-zero
contrast. It contributes texture in principle but nothing in practice. Increase to 0.09
to register as a deliberate depth layer without competing with the headline.

**CTA "Custom" watermark and fabric texture at 0.28 opacity:**
The fabric texture increase from 0.18 to 0.28 is perceptible. The "Custom" watermark
at `rgba(247,242,236,0.05)` has the same near-zero issue as the hero watermark — it
exists in the code but is functionally invisible behind the green overlay. The
`radial-gradient` overlay at `rgba(20,32,21,0.42)` in the centre is strong enough to
neutralise the texture in the area the eye goes first. Consider reducing the radial
central opacity to 0.25.

**Shop mood rows — copper vertical rule and scroll-in glow:**
The copper vertical rule on `.mood-text::before` — 3px wide, gradient from transparent
to `var(--copper)` to transparent, 20%–80% of panel height, at 0.7 opacity — is a
tasteful detail. It registers on desktop and correctly reverses side on `.mood-row.reverse`.
The `moodRowGlow` scroll-in animation (box-shadow pulse at 1.4s ease-out) is subtle
enough that most buyers will not consciously notice it, but it does add a micro-moment
of warmth to each row entry.

The ghost numbers remain at `rgba(48,40,36,0.13)` on a taupe background — still barely
legible. Increase to 0.22 to register as a visual element.

**Linen texture bumped to 0.06:**
Now marginally perceptible. Still restrained but present in the right way.

**Dead CSS cleaned:**
No legacy residue observed. The stylesheet is tight.

---

## Section Scores

### 1. Hero — 7.0 / 10
*(was 6.5)*

The "Handmade" watermark is present but functionally invisible at 0.05 opacity. The
Ken Burns parallax combination remains the most technically polished animation on the
page. Copy is still the strongest on the site. The hero image is still entirely stock —
no bags, no quilts, no Molly. The score moves slightly for the structural confidence
of the section but the identity ceiling remains.

---

### 2. Shop by Mood — 6.5 / 10
*(was 6.0)*

The copper vertical rule accent is a genuine detail. The shimmer on photo hover gives
the product rows a warm interactive moment. The scroll-in glow adds life to section
entry. Mood-time italic annotations (hours of work) continue to do good conversion work.

Ghost numbers still invisible at 0.13 opacity on taupe. No gallery exists between the
button and the contact form — a buyer clicking "Bags and Totes" still goes directly to
the order form without seeing finished pieces. This is the single highest-impact
conversion gap on the site.

---

### 3. The Process — 8.0 / 10
*(was 7.5)*

The sticky pin-and-fade is a real editorial experience. Four distinct full-viewport
panels with full-bleed photography, large display numerals (ghost at 0.08 opacity —
readable against dark imagery), italic copper type accents on panel titles, a 0.4s
opacity transition, and a closing panel with quote and animated arrow. This section is
now unambiguously the site's centrepiece. A buyer scrolling through the process will
spend 15–20 seconds here, which is long in website time. The dot navigation is a
correct usability addition.

Panel 3 reuses the same Pexels photograph as the hero background (`pexels-photo-4937323`)
which creates a subtle repetition a careful buyer will notice. The four panel images
should be distinct. Panel 4's darker overlay is appropriate for the closing moment.

---

### 4. About the Maker — 7.0 / 10
*(unchanged)*

This section is unchanged and holds. The quote, the 5:7 grid, the copper divider, the
corner accent, and the Molly signature are all correct. The score ceiling is the stock
portrait. A real photo of Molly at her machine would push this to 8.5 overnight.

---

### 5. Studio Strip — 7.5 / 10
*(was 6.5)*

The forest green background, 300px image height, pull-quote, and hover captions together
constitute a real visual upgrade. This section now reads as a feature, not a decorative
band. The pull-quote sits at the right scale. The mask-image edge fades work on desktop.
On mobile the section correctly switches to horizontal snap scroll.

The keyframe scroll calculation bug (`-16px` gap vs `20px` actual) is the one technical
defect in this section — it causes a visible loop stutter. Fix is a single number change.

The caption bar below each image ("Cutting fabric", "At the machine") is typographically
fine but redundant when the hover overlay already provides the same text. On desktop the
captions below are only visible when not hovering. They clutter the bottom of the item.
Consider removing the static captions and relying solely on the hover overlay, which is
more interesting.

---

### 6. Custom Orders CTA — 7.0 / 10
*(was 6.8)*

Fabric texture at 0.28 is a perceptible improvement. "Custom" watermark is present.
The breathe glow on the copper button remains one of the strongest details on the page.
Forest green background is now a coherent colour decision echoed in the studio strip.
The radial overlay in the centre still suppresses the texture in the focal zone — reduce
the central opacity from 0.42 to 0.25 for better fabric bleed-through.

---

### 7. Testimonials — 5.5 / 10
*(was 6.0)*

Penalised this round because nothing changed here and the previously noted problems are
now more conspicuous by comparison as other sections improve. The section-label still
reads "What People Say" and the h2 immediately below reads "What people are saying" —
exact content duplication that any competent editor would catch in ten seconds. All five
reviews are five-star, uniformly formatted, with the trust-undermining disclaimer
("Reviews from early customers and friends who've received my work") sitting
immediately below the header — which is the worst possible placement for a disclaimer.

The CSS marquee scroll is technically elegant and should remain. The cards themselves
are well-proportioned. But this section needs editorial attention before the next build.

---

### 8. Contact / Form — 6.5 / 10
*(unchanged)*

The form is unchanged and holds at 6.5. The inquiry pre-selection via `data-inquiry`
attribute is a smart UX touch. The contact-trust strip at the top (shipping info,
satisfaction guarantee) is the right framing above a commission form. The form-submit
hover to copper is correct.

---

### 9. Mobile Experience — 6.5 / 10
*(was 6.0)*

The studio strip mobile experience (animation off, snap scroll) is a correct decision.
The process sticky section on mobile centres the panel content with appropriate padding.
The hero centres cleanly. The mood rows stack correctly with 280px photo height.

The watermarks (`hero::before`) are correctly suppressed on mobile. The custom-cta
watermark is reduced to `font-size: 6rem` on mobile — appropriate.

One issue: the process sticky on mobile requires the user to scroll 300vh — three full
screen heights — to advance through four panels. On a phone this means a very long
committed scroll through a single pinned frame. Panel transitions at 75vh intervals on
mobile may feel slow. Consider a 200vh runway on mobile (reducing the scroll budget via
a media query) so the panels change more responsively on smaller screens.

---

### 10. Visual Identity / Does It Look AI-Generated? — 5.5 / 10
*(unchanged)*

The process section and the studio strip now have genuine design intent. The forest
green is a real colour decision, not just a neutral. These are improvements.

The fundamental identity problem remains. Playfair Display italic in cream over a dark
overlay is the default output of every AI artisan prompt written in 2024–2025. DM Sans
at 300 weight for body copy, small copper uppercase section labels at 0.22em letter-
spacing, copper-ruled dividers, ghost numerals, Ken Burns hero — every one of these
is a design cliche of the genre. The site could be selling candles, soap, leather goods,
or pottery with three colour swaps. Nothing on the page belongs specifically to Molly.

The about-quote ("I wanted to make things that outlast the trend they were bought in")
is still the most distinctive line on the site and it is buried in a section half the
visitors will not reach. It should be on the hero. It should be the site's visual
identity statement.

---

## Top 3 Priorities

### Priority 1 — Fix the Testimonials Section
This is now the weakest section on the site. Two things: (1) change the h2 from
"What people are saying" to something that is not a restatement of the section label —
try "In their own words" or simply use the section label alone without the h2; (2) move
the disclaimer to the bottom of the section, below the marquee, in smaller text, where
it reads as a footnote rather than an admission at the top. The marquee itself and the
card design are correct — the editorial failure is what pulls this section to 5.5.

### Priority 2 — Make the Hero Sell Product
The hero is technically polished but a buyer cannot see a single finished piece that
Molly made. Add a small product vignette to the hero — either a second image layer
(a bag or quilt at partial opacity, appearing on scroll) or an inset product frame in
the lower right quarter of the hero content area. Even a 200x260px framed photo of one
bag with a copper border and a small caption ("Current work: canvas market tote") would
do more for conversion than any typography change. The hero's job is to make a buyer
want the product. Right now it makes them want the atmosphere.

### Priority 3 — Fix the Studio Strip Loop Bug and Remove Redundant Captions
The `studio-scroll` keyframe calculates the offset using 16px gap when the actual gap
is 20px. Change `calc(-270px * 5 - 16px * 5)` to `calc(-270px * 5 - 20px * 5)` on
line 1295 of style.css. This eliminates the visible stutter at the loop boundary.
Separately, remove the static `.studio-strip-caption` text below each image — it
duplicates the hover overlay and clutters the bottom of each card on non-hover state.
The hover overlay is more interesting; let it do the work alone.

---

## What Is Working and Must Be Kept

- The sticky process section — now the site's strongest feature, do not simplify it
- The process closing panel ("Every seam sewn with intention." + copper arrow) — exactly right
- The forest green as studio strip and CTA background — the contrast anchor the site needed
- The breathe glow animation on copper buttons — one of the few genuinely distinctive details
- The copper vertical rule accents on mood text panels — a tasteful craft detail
- The about-quote — the best copy line on the site; should be promoted, not buried
- The Ken Burns + parallax hero combination — keep it
- The CSS-only testimonial marquee — technically correct and should remain

---

*Scored strictly. 7.0 is a real improvement from 6.5 — the sticky process earns it, the
closing panel earns it, the forest green earns it, the studio strip improvements earn it.
The three priorities from the previous audit were all delivered, which is the right kind
of progress. The gap between 7.0 and 8.0 is a single decision: real photography. One
genuine photo of Molly at her machine, or one finished bag on a real surface, would
move the needle more than any further typography or colour refinement.*
