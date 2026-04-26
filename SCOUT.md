# SCOUT — Cycle 3
**Date:** 2026-04-25
**Researcher:** Scout agent
**Site:** https://zed0minat0r.github.io/craft-site/
**Current score:** 7.0 (conversion-friction axis)
**Research angle:** Next "wow" interaction moment — artisan / textile / single-maker websites

---

## Research Basis

Sites examined: Loewe Foundation Craft Prize (craftprizeexhibition.loewe.com), Bookhou (bookhou.com),
Foekje Fleur (foekjefleur.com), Fredericks & Mae (fredericksandmae.com), Tekla Fabrics (teklafabrics.com),
Lotus Leather Studio (lotusleatherstudio.com). Codrops animation references: sticky-section scroll patterns
(tympanus.net/codrops/2024/01/31), layered zoom scroll (tympanus.net/Tutorials/TelescopeZoom/),
CSS scroll-driven animation primer (tympanus.net/codrops/2024/01/17). Awwwards pattern library:
cursor trail references (charlotte-beaude, amanda-braga fashion designer). CSS-Tricks Apple-style
image-sequence scroll (css-tricks.com/lets-make-one-of-those-fancy-scrolling-animations-used-on-apple-product-pages/).

---

## Candidates Found in Research

### Candidate A — Layered Telescope Zoom (scroll-driven close-up)
**Reference:** Codrops tutorial + live demo at https://tympanus.net/Tutorials/TelescopeZoom/
**The interaction:** A single product image is pinned; as the user scrolls, 6 layered + masked copies
of the image scale outward toward the viewer while blur fades — creating the sensation of zooming
into the material. Text halves split apart to reveal the image beneath.
**Why it works:** Gives tactile weight to a single object. A finished bag or quilt photographed
at medium shot can reveal stitching detail, leather grain, or fabric weave purely through scroll
depth — no 3D engine required. The "falling into the material" sensation is genuinely surprising
on an artisan site.
**Implementation cost:** M. Requires GSAP ScrollSmoother + ScrollTrigger (both already viable as
script tags, no build step). Needs one high-res product photo with a good surface detail. 60–80 lines
of JS + 40 lines of CSS. The demo source is open.
**Fit vs cream/espresso/copper identity:** 9/10. Warm tones work naturally in the pinned layer stack;
the effect is material-focused, not cyber or neon. Complements horizontal scroll already in use
(different axis, different section).
**Implementation hint:**
```css
.telescope-wrap { position: sticky; top: 0; height: 100vh; overflow: hidden; }
.telescope-layer { position: absolute; inset: 0; background-size: cover;
  background-image: url('img/bag-detail.jpg'); transform-origin: center; }
```
ScrollTrigger maps scroll progress to `scale()` and `blur()` per layer with staggered timing.
Pin the wrapper for `300vh` of runway. Entry point: replace or augment the current mood row
for the hero bag with this section, giving Bags the most prominent "material moment."

---

### Candidate B — Scroll-Driven Process Strip (raw-to-finished scrollytelling)
**Reference:** Codrops sticky section article (tympanus.net/codrops/2024/01/31/on-scroll-animation-ideas-for-sticky-sections/).
Technique popularized broadly; closest artisan parallel is Loewe Foundation Craft Prize exhibition
(craftprizeexhibition.loewe.com — awarded Awwwards Honorable Mention) which uses vertical scroll
to move through a craft objects gallery sequentially.
**The interaction:** A single bag is shown from 4 to 5 sequential states (raw fabric → cut panels →
hand-sewn seams → attached hardware → finished). Each state is a sticky panel; the user scrolls
through 400–500vh of runway while the image cross-fades or clips to the next state. Text annotations
appear at each stage ("Waxed canvas cut by hand in the studio" etc.).
**Why it works:** Directly answers the buyer's "was this really handmade?" doubt — and does it
through scroll pacing rather than static copy. Each stage forces the user to slow down. The pattern
is common in editorial journalism but rare on indie craft commerce sites — strong novelty in context.
**Implementation cost:** M–L. Requires either 4–5 distinct photos of production stages (needs Molly's
participation) OR a CSS clip-path morph between 2 photos + annotated middle states. Without real
process photography, this reduces to a text-heavy placeholder. This is the primary constraint.
**Fit vs cream/espresso/copper identity:** 8/10. Pairs well with the existing espresso text and
cream backgrounds. Risk: without real process photos it looks like template lorem ipsum.
**Implementation hint:**
Each panel is `position: sticky; top: 0; height: 100vh`. A `ScrollTrigger` scrub maps scroll
progress to `clip-path: inset(0 0 X% 0)` on the incoming image, revealing it from bottom up.
Text annotations use standard `.reveal` threshold already in `main.js`.

---

### Candidate C — Copper-Glow Cursor Trail (desktop-only, palette-matched)
**Reference:** Awwwards inspiration — Charlotte Beaude (awwwards.com/inspiration/charlotte-beaude-cursor-trail-effect),
Amanda Braga fashion portfolio (amandabraga.com — awwwards inspiration trail-effect-cursor-amanda-braga-fashion-creative-designer).
Both are fashion/editorial contexts. The charlotte-beaude example is particularly close: warm palette,
serif typography, design-forward personal brand.
**The interaction:** On desktop, cursor movement generates a trailing bloom of the copper accent color
(#CF8B67 or similar) — 8–12 small particles or a single fading blob that decays in ~600ms. Stationary
cursor produces no trail. Mobile: no effect.
**Why it works:** It makes the site feel inhabited — there is a presence. On a cream background,
copper particles read as warm embers or threads, not gaming chrome. The effect is entirely passive
(user does nothing) but rewards movement. It costs the user no attention or action.
**Implementation cost:** S. Canvas overlay, 30–40 lines of JS. Particles array, requestAnimationFrame
loop, mouse position sampling every frame. Strictly desktop via `matchMedia`. No dependency required.
**Fit vs cream/espresso/copper identity:** 10/10. Uses the palette's primary accent. Directly tied
to the copper thread / warm maker aesthetic. Cannot read as cyber or neon on cream.
**Implementation hint:**
```js
const canvas = document.createElement('canvas');
canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
let particles = [];
document.addEventListener('mousemove', e => {
  particles.push({ x: e.clientX, y: e.clientY, life: 1.0 });
});
function tick() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter(p => p.life > 0);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4 * p.life, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(207,139,103,${p.life * 0.35})`;
    ctx.fill();
    p.life -= 0.025;
  });
  requestAnimationFrame(tick);
}
tick();
```
Tune `life -= 0.025` for decay speed; 0.018–0.030 gives the right wisp. Add `window.matchMedia('(pointer:fine)')` guard.

---

### Candidate D — Ambient Sound Toggle (sewing machine / fabric / scissors)
**Reference:** No direct artisan web precedent found in research. The pattern exists in gaming
and luxury automotive sites (Highsnobiety reports Celine and Louis Vuitton using ambient sound
in physical retail, not web). The closest web implementations are therapy/focus apps (mynoise.net,
moodist.mvze.net) and film promotional microsites.
**The interaction:** A small persistent toggle (top-right corner, icon only) opts the user into
ambient workshop sound — low sewing machine hum, occasional scissor snip, fabric rustle. Sound
loops at very low volume. Toggle state is remembered via localStorage.
**Why it works (in theory):** It would create a strong sense of being in the studio. Emotional
weight. Distinctive. Almost no artisan commerce site does this.
**Why it is risky in practice:**
1. Browser autoplay policies require user gesture to start AudioContext — the toggle handles that,
   but the UX moment of "click to hear" can feel like friction, not delight.
2. Sourcing clean isolated sewing-machine / fabric sound assets without unwanted noise floors is
   non-trivial. Royalty-free sources (Pixabay, Storyblocks) exist but quality varies sharply.
3. Any buyer who lands on the site in a shared office, phone meeting, or quiet public space
   will be startled if they mis-tap the toggle — even at low volume.
4. Mobile support for persistent ambient audio looping is inconsistent (iOS mute switch).
**Implementation cost:** M. JS + Web Audio API + asset sourcing + UX polish.
**Fit vs cream/espresso/copper identity:** 7/10. Conceptually strong. Execution risk is high enough
that it should be runner-up or cycle 5 material, not cycle 4.

---

### Candidate E — Text-Reveals-on-Grain (scroll reveals type through a linen texture mask)
**Reference:** Pattern seen in Kinfolk-aesthetic editorial sites and the Tekla Fabrics stories page
(teklafabrics.com/stories). Tekla uses a browsable editorial grid with atmospheric photography;
the typographic reveal variant goes further by using a grain / fabric texture as the clip mask
through which heading text emerges as it scrolls into view.
**The interaction:** Section headings (e.g., "Made by Hand in Pennsylvania") are rendered behind
a fabric-grain SVG mask; scroll progress removes the mask, so the text appears to "weave into"
view rather than fade or slide. At 0% scroll = fully masked (just grain). At 100% = clean text.
**Why it works:** Typography is already one of this site's strengths. The grain mask is thematically
tied to the textile identity. It is subtle — users may not consciously notice the mechanism but
feel the texture.
**Implementation cost:** S–M. SVG `feDisplacementMap` or a CSS `mask-image` with a grain texture
PNG + a scroll-linked opacity mask. No GSAP required; CSS scroll-driven animation spec handles it.
**Fit vs cream/espresso/copper identity:** 8/10.
**Implementation hint:**
```css
.grain-reveal-heading {
  -webkit-mask-image: url('grain-mask.png');
  mask-image: url('grain-mask.png');
  mask-size: cover;
  animation: grain-unmask linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 60%;
}
@keyframes grain-unmask {
  from { mask-position: 0% 100%; opacity: 0.2; }
  to   { mask-position: 0% 0%;   opacity: 1; }
}
```
Grain PNG can be a 512×512 tileable linen scan (public domain via Unsplash textures).

---

## User's Three Named Candidates — Side-by-Side Evaluation

| Candidate | Effort | Fit (1–10) | Novelty | Primary Risk | Verdict |
|---|---|---|---|---|---|
| Process scrollytelling (raw-to-finished, scroll-tied) | M–L | 8 | High for craft commerce | Requires real process photos from Molly — without them it is hollow | Conditionally strong; hold until Molly can supply 3–4 process photos. Do not implement with placeholder imagery. |
| Ambient sound toggle (sewing machine, scissors, fabric) | M | 7 | High — almost no precedent in craft commerce | Browser inconsistency, iOS mute switch, shared-office risk, asset sourcing | Runner-up / cycle 5 — worth a prototype once a process photo set exists to pair it with |
| Copper-glow cursor trail (desktop-only, palette-matched) | S | 10 | Medium — well-precedented in editorial/fashion | Negligible — can be disabled without removing any content | Recommended for cycle 4 |

---

## Explicit Recommendation

**Primary: Copper-glow cursor trail (Candidate C)**

Rationale:
- Smallest implementation surface of any candidate (one JS file addition, ~40 lines, no new section,
  no dependencies).
- Highest palette fit of any candidate (10/10 — directly uses the copper accent already driving
  the entire visual system).
- Complements the horizontal scroll lock without duplicating it (different interaction axis: movement,
  not scroll).
- Precedented in fashion editorial (Amanda Braga, Charlotte Beaude on Awwwards) but rare in indie
  craft commerce — reads as artisan-deliberate, not AI-template.
- Zero content risk: Molly needs to supply nothing new.
- Reversible: a single `<script>` tag or a one-line removal in `main.js` if the user dislikes it.
- Mobile guardrail already built into the pattern: `pointer:fine` media query limits to desktop.
- Simplicity-over-polish rule: this is one focused addition, not a new section. It replaces nothing
  because it adds an experience layer on top of existing content.

The implementation hint in Candidate C above is complete enough for Builder to ship in cycle 4
without further research.

---

## Runner-Up

**Runner-up: Layered Telescope Zoom (Candidate A)**

Rationale:
- Most dramatic scroll moment of any candidate — genuinely surprising on a handmade goods site.
- Fits the "not AI-template" brief strongly: almost no indie craft commerce site uses this pattern.
- GSAP ScrollSmoother is the primary new dependency; it is well-documented and the Codrops demo
  source is public (tympanus.net/Tutorials/TelescopeZoom/).
- Requires one high-resolution product photo with good surface texture (bag leather grain or quilt
  stitch close-up). This is a lighter photography ask than the full process scrollytelling — one
  good close-up of a finished piece, not 4–5 production-stage shots.
- Implementation cost is M (one weekend of builder work) rather than M–L.
- Recommended for cycle 5 once Builder has confirmed the cursor trail is stable and the user can
  supply one quality product photo.

---

## What to Avoid Next Cycle

- Do not implement process scrollytelling (Candidate B) until Molly provides 3–5 real production
  photos. Placeholder stock images undermine the entire premise of the section.
- Do not implement ambient sound (Candidate D) as cycle 4 scope — it is conceptually right but
  needs its own focused cycle with proper audio asset sourcing and UX review.
- Do not add a text-grain-reveal (Candidate E) simultaneously with the cursor trail — simplicity
  rule applies. Evaluate it for cycle 5 or 6 alongside the telescope zoom.
