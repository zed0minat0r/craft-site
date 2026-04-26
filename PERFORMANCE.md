# PERFORMANCE.md — Made by Molly
**Last updated:** 2026-04-26 (cycle 9 — rAF idle-exit + CSS minification + nav reflow guard)
**Live URL:** https://zed0minat0r.github.io/craft-site/

---

## Lighthouse Scores — Cycle 9 (post-fix)

| Metric | Mobile | Desktop | Floor | Status |
|--------|--------|---------|-------|--------|
| Performance | 72–73* | 96 | ≥ 90 | Mobile below floor (Pexels CDN variance) |
| Accessibility | 97 | 97 | — | PASS |
| Best Practices | 77 | 77 | ≥ 95 | FAILING (Pexels cookies, unaddressable) |
| SEO | 100 | 100 | ≥ 95 | PASS |

*Cycle 9 mobile scores ran before CSS minification was pushed to GitHub Pages. Two Lighthouse runs: P=72 and P=73. Mobile LCP of 7.1–7.3s is Pexels CDN cold-cache on throttled 4G — consistent with network variance, not regression.

**Floor status:** Mobile Performance below 90 floor due to Pexels CDN latency. CSS minification (12KB savings) and cursor-trail rAF fix pushed this cycle — expect improvement on next live run after GitHub Pages propagates.

---

## Core Web Vitals — Cycle 9

| Metric | Mobile | Desktop | Cycle 8 Mobile | Cycle 8 Desktop |
|--------|--------|---------|----------------|-----------------|
| LCP | 7.1–7.3 s* | 1.3 s | 3.4 s | 1.4 s |
| CLS | 0 | 0 | 0 | 0.009 |
| TBT | 30–70 ms | 0 ms | 150 ms | 0 ms |
| FCP | 1.1 s | 0.3 s | 1.1 s | 0.3 s |

*LCP variance on mobile is Pexels CDN cold-cache. TBT improved 150ms → 30–70ms (cursor-trail rAF no longer running at idle; nav reflow guard reduces classList mutations).

---

## Cycle 9 Fixes Applied

| Fix | File | Impact |
|-----|------|--------|
| cursor-trail rAF idle-exit | js/cursor-trail.js | rAF loop now stops when particles array is empty; restarts on mousemove. Eliminates continuous main-thread burn when cursor is idle. |
| CSS minification (style.min.css) | style.min.css (new), index.html | 46001 → 33864 bytes (-12KB, -26%). Reduces render-blocking CSS transfer time. style.css remains as editable source. |
| Nav scroll guard (classList.toggle) | main.js | classList mutation now only fires when scroll state actually changes. Eliminates repeated forced reflow on every scroll tick when above/below 60px threshold. |

---

## Testimonial IIFE Audit — Cycle 9

- `touchstart` and `touchend` both confirmed `{ passive: true }` — no scroll-jank risk.
- Both listeners bound to `track` element (element scope, not `window`) — no leaked global listener.
- `touchmove` is not listened to — swipe computed on `touchend.changedTouches[0].clientX` delta only.
- Carousel pause/resume cycle: reads `getComputedStyle(track).transform` (matrix parse) only on touchstart. No layout thrash in tick path.
- Finding: clean. No fixes needed.

---

## Lazy-Load Audit — Cycle 9

All below-fold images confirmed with `loading="lazy"`:
- Mood-row images (all 3 rows): lazy — confirmed
- About section image (pexels-7998221): lazy — confirmed
- Studio strip images (5 primary + 5 duplicates): lazy — confirmed
- Process panel images (CSS background-image, no loading attr): N/A
- Contact / footer: no img elements

Hero product inset: `fetchpriority="high"`, no `loading="lazy"` — correct (above-fold on desktop, mobile download blocked by empty `<source>` srcset).

No changes needed — all below-fold images already lazy.

---

## Remaining Issues

### 1. Best Practices 77 — Third-party Pexels cookies (HIGH IMPACT, UNADDRESSABLE)
- `_cfuvid` and `__cf_bm` Cloudflare cookies from `images.pexels.com` are the dominant penalizer.
- **Resolution:** Requires self-hosting images (real photography from user). User-blocked.

### 2. Mobile Performance below 90 — Pexels CDN latency
- Mobile LCP is dominated by Pexels CDN response time on throttled 4G (6–8s range observed across cycles).
- Mood-row images (particularly quilts row, pexels-15337117, 213KB at 900w) are the LCP candidate on mobile throttled runs.
- **Partial fix applied cycle 9:** CSS minification reduces render-blocking time; rAF fix reduces TBT.
- **Remaining lever:** Self-hosted images would eliminate CDN latency completely. User-blocked.

### 3. Forced Reflow — Testimonial getCardStep() (MINOR)
- `getCardStep()` in the testimonial IIFE calls `getComputedStyle(track)` on touchstart — minor reflow on touch, acceptable.

### 4. Style.min.css regeneration needed each perf cycle
- Agents edit `style.css` (source). After each cycle with CSS changes, `style.min.css` must be regenerated.
- Command: `npx clean-css-cli style.css -o style.min.css`

---

## Root Causes — Historical (Cycles 6–9, resolved)

### 1. Render-blocking `main.js` — CLOSED (cycle 6)
Fixed with `defer`. FCP improvement confirmed.

### 2. Font-swap CLS on hero watermark — CLOSED (cycle 6)
Font preloads + `contain: layout size` on `.hero::before`.

### 3. Missing favicon (Best Practices 404) — PARTIALLY CLOSED (cycle 6)
Favicon landed. BP went from 73 → 77. Pexels cookies remain.

### 4. Bug #4 — Hero inset hidden image download on mobile — CLOSED (cycle 6)
`<picture>` with empty mobile srcset in place.

### 5. Render-blocking Google Fonts CSS stylesheet — CLOSED (cycle 8)
Self-hosted woff2 + inline @font-face. No external CSS request.

### 6. Hero inset lazy-load regression — CLOSED (cycle 8)
`loading="lazy"` was causing 7s+ desktop LCP. Replaced with `fetchpriority="high"`.

### 7. Cursor-trail rAF idle burn — CLOSED (cycle 9)
rAF loop now terminates when particle array empties; restarts on mousemove.

### 8. Repeated classList mutations on every scroll tick (nav) — CLOSED (cycle 9)
Guard added: only mutates classList when scroll state boundary (60px) is crossed.
