# PERFORMANCE.md — Made by Molly
**Last updated:** 2026-04-25 (cycle 6 — first Performance pass)
**Live URL:** https://zed0minat0r.github.io/craft-site/

---

## Lighthouse Scores — Cycle 6 (pre-fix baseline)

| Metric | Mobile | Desktop |
|--------|--------|---------|
| Performance | 66 | 85 |
| Accessibility | 97 | 97 |
| Best Practices | 73 | 73 |
| SEO | 100 | 100 |

Hard floors: Perf ≥ 90, Best Practices ≥ 95, SEO ≥ 95.
**Status before fixes:** FAILING (Perf + BP on both form factors)

---

## Core Web Vitals

| Metric | Mobile | Desktop |
|--------|--------|---------|
| LCP | 8.1 s | 1.6 s |
| CLS | 0 | 0.171 |
| INP | N/A | N/A |
| TBT | 0 ms | 0 ms |
| FCP | 2.8 s | 0.8 s |
| Speed Index | 6.1 s | 1.0 s |

**CLS on desktop (0.171):** Confirmed culprit is `section#hero > ::before` (the giant "Handmade" watermark text, 18rem Playfair Display). All three Google Fonts woff2 files (2× Playfair Display, 1× DM Sans) trigger CLS when they swap in via `font-display: swap`. The element is `position: absolute` inside `overflow: hidden` hero, but the font-swap still causes Lighthouse to record a layout shift score.

**LCP on mobile (8.1s):** LCP element is the `nav-logo` anchor text ("Made by Molly") — not an image. "Element render delay" is 2.89s. Root cause: Google Fonts CSS request + 3 woff2 downloads form a 378ms dependency chain that blocks first text paint. `main.js` is also render-blocking (loaded synchronously before body completes).

---

## Root Causes Identified

### 1. Render-blocking `main.js` (HIGH IMPACT)
- `<script src="main.js">` in `index.html` line 642 (before fix) was synchronous — blocks HTML parsing.
- `cursor-trail.js` already had `defer` but `main.js` did not.
- **Fix applied:** Added `defer` to `main.js` script tag.

### 2. Font-swap CLS on hero watermark (HIGH IMPACT — desktop)
- `::before { content: 'Handmade'; font-size: clamp(6rem, 18vw, 18rem); font-family: var(--font-display) }` at 18rem uses Playfair Display.
- Preconnect hints are present but fonts load after CSS parse — woff2 files arrive late, triggering swap.
- **Fix applied (two-part):**
  - Added `<link rel="preload" as="font" type="font/woff2" crossorigin>` for all 3 woff2 files in `<head>`. Preloads ensure fonts arrive at/before first paint, eliminating the swap.
  - Added `contain: layout size` to `.hero::before` in style.css. This isolates the pseudo-element from document layout so even if a swap occurs, it cannot propagate CLS to surrounding elements.

### 3. Missing favicon (MEDIUM IMPACT — Best Practices 73)
- Browser auto-requests `/favicon.ico` which returns 404. This fires a console error, triggering Best Practices penalty.
- **Fix applied:** Added `favicon.svg` (espresso background, copper italic "M") + `<link rel="icon" href="favicon.svg" type="image/svg+xml">` in `<head>`.

### 4. Bug #4 — Hero inset image downloads on mobile despite display:none (LOW IMPACT — bandwidth)
- `.hero-product-inset { display:none }` on mobile, but `<img src="...">` still pre-fetched by browser.
- `loading="lazy"` is insufficient — browser may still preload images in the LCP zone.
- **Fix applied:** Wrapped in `<picture>` with `<source media="(max-width: 768px)" srcset="">`. Empty srcset on mobile source tells the browser to skip the download entirely.

### 5. Bug #16 — Google Fonts @import (ALREADY FIXED pre-cycle 6)
- `@import` in style.css was confirmed removed prior to this cycle. style.css line 5 is a comment confirming the fix. Fonts loaded via `<link rel="stylesheet">` in index.html.
- Additional improvement this cycle: font preloads added (see item 2 above).

---

## Cursor Trail — Leak Check

`/js/cursor-trail.js` audit:

- **Mobile guard (line 3):** `if (!window.matchMedia('(pointer:fine)').matches) return;` — clean exit on touch/coarse pointer. Canvas is never created. No rAF scheduled. PASS.
- **Reduced-motion guard (line 6):** `if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;` — clean exit before canvas creation. PASS.
- **rAF disposal on pointer leave:** The rAF loop (`tick()`) runs unconditionally once started. There is NO explicit pause when the pointer leaves the window. The `particles` array empties naturally as each particle's `life` decrement reaches 0 (life starts at 1.0, decrements by 0.025 per frame → ~40 frames to clear). After the last particle is filtered out, `ctx.clearRect` runs on each tick with nothing to draw. **The rAF continues running even with no particles.** This is a minor CPU inefficiency (one `clearRect` call + `requestAnimationFrame` per frame) but not a memory leak. The canvas, particles array, and ctx are all local to the IIFE scope — no global references. No leak.
- **Verdict:** No leak. The always-on rAF is cosmetically wasteful on a tab left open with no mouse activity. A `mouseleave/mouseenter` gate on `document` could pause/resume the loop — flagged as a future low-priority optimization. Not a bug.

---

## Testimonial Touch IIFE — Passive Listener Audit

`main.js` testimonial carousel (lines ~280–398):

- **`touchstart`** listener: `{ passive: true }` — PASS. Does not call `preventDefault()`. Records `touchStartX` and pauses animation. Safe as passive.
- **`touchend`** listener: `{ passive: true }` — PASS. Does not call `preventDefault()`. Computes swipe delta and schedules resume. Safe as passive since it reads `e.changedTouches[0].clientX` (read-only) and does not need to cancel scroll.
- **`touchmove`** listener: **NOT PRESENT.** No touchmove listener exists in the testimonial IIFE. Swipe direction is computed entirely on touchend from the delta between touchstart and touchend positions. This means mid-swipe scroll is never blocked — the browser handles scroll freely during the swipe. The trade-off: diagonal swipes (more common on mobile) may trigger a page scroll AND a card swipe simultaneously. However, since swipe detection fires on touchend only, the UX is acceptable and no passive listener violation exists.
- **Verdict:** All existing touch listeners are correctly passive. No passive listener violations. No scroll-perf issues.

---

## Fixes Applied This Cycle

| Fix | File | Impact |
|-----|------|--------|
| `defer` added to main.js | index.html | Removes render-blocking JS |
| Font preloads (3 woff2) | index.html | Eliminates font-swap CLS |
| `contain: layout size` on `.hero::before` | style.css | CLS containment fallback |
| Favicon SVG + link tag | favicon.svg + index.html | Fixes Best Practices 404 |
| `<picture>` mobile empty source | index.html (Bug #4) | Prevents hidden image download |
| `width`/`height` on inset img | index.html | Prevents inset reflow |

---

## Not Fixed This Cycle (out of scope)

- **Third-party cookies (Pexels):** 2 cookies found from images.pexels.com. This is a Pexels CDN behavior; not addressable without self-hosting images. Would require real photography.
- **CSS minification (3KB savings):** Low priority for a GitHub Pages static site. Minification would require a build step.
- **Image responsive sizes (276KB savings mobile):** Pexels images at `w=900` served to 412px viewports. Correct fix is `w=450` parameter on mobile Pexels URLs via `<picture>/<srcset>`. Planned for cycle 7 if performance still failing after this cycle's fixes.
- **Studio strip loop 20px jump (Bug #6):** Belongs to Builder after QA verifies math.
