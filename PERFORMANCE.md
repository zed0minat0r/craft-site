# PERFORMANCE.md — Made by Molly
**Last updated:** 2026-04-26 (cycle 7 re-run — verification pass)
**Live URL:** https://zed0minat0r.github.io/craft-site/

---

## Lighthouse Scores — Cycle 7 Re-run (post cycle-6 fixes)

| Metric | Mobile | Desktop | Floor |
|--------|--------|---------|-------|
| Performance | 74 | 100 | ≥ 90 |
| Accessibility | 97 | 97 | — |
| Best Practices | 77 | 77 | ≥ 95 |
| SEO | 100 | 100 | ≥ 95 |

**Status:** Mobile Performance and Best Practices are next-cycle candidates. Desktop Performance hit 100. SEO and Accessibility at target.

---

## Core Web Vitals — Cycle 7

| Metric | Mobile | Desktop | Cycle 6 Mobile | Cycle 6 Desktop |
|--------|--------|---------|----------------|-----------------|
| LCP | 6.4 s | 0.8 s | 8.1 s | 1.6 s |
| CLS | 0 | 0.009 | 0 | 0.171 |
| TBT | 90 ms | 0 ms | 0 ms | 0 ms |
| FCP | 1.5 s | 0.4 s | 2.8 s | 0.8 s |
| Speed Index | 4.2 s | 0.5 s | 6.1 s | 1.0 s |

**Key deltas from cycle 6 baseline:**
- Mobile LCP: 8.1s → 6.4s (-1.7s, -21%) — defer on main.js + font preloads confirmed effective
- Desktop LCP: 1.6s → 0.8s (-0.8s, -50%) — font preloads pulled critical text earlier
- Desktop CLS: 0.171 → 0.009 (-98%) — `contain: layout size` on `.hero::before` + font preloads eliminated the watermark text-swap jump
- Mobile FCP: 2.8s → 1.5s (-1.3s, -46%) — significant improvement; main.js defer unblocked the parser
- Mobile Performance score: 66 → 74 (+8 points)
- Desktop Performance score: 85 → 100 (+15 points)

---

## Cycle 6 Fix Confirmation

| Fix | Expected Impact | Confirmed |
|-----|----------------|-----------|
| `defer` on main.js | Unblock HTML parse, improve FCP/LCP | YES — FCP -1.3s mobile |
| 3x woff2 font preloads | Reduce LCP, eliminate desktop CLS | YES — LCP -1.7s mobile, CLS 0.171→0.009 desktop |
| `contain: layout size` on `.hero::before` | CLS containment | YES — desktop CLS near-zero |
| favicon.svg | Best Practices 404 fix | Partial — BP still at 77 (third-party cookies dominate) |
| `<picture>` empty mobile srcset | Prevent hidden image download | Cannot isolate in score; mobile bandwidth improved |
| Bug #28 padding-right (cycle 7 Builder) | Negligible perf impact | Confirmed negligible |

---

## Remaining Issues — Next-Cycle Candidates

### 1. Best Practices 77 — Third-party Pexels cookies (HIGH IMPACT, UNADDRESSABLE)
- `_cfuvid` and `__cf_bm` Cloudflare cookies from `images.pexels.com` flagged by Chrome DevTools Issues panel.
- Favicon fix landed but BP still at 77 — Pexels cookies are the dominant penalizer.
- **Resolution:** Requires self-hosting images (real photography from user). Out of scope until then.

### 2. Mobile Performance 74 — LCP 6.4s still outside floor
- Top remaining mobile perf issues:
  - **Render-blocking Google Fonts CSS** (est. 530ms savings) — `fonts.googleapis.com/css2?...` link tag in head is parser-blocking. Mitigation: `rel="preload"` + injecting via JS, or use `@font-face` directly with self-hosted fonts.
  - **Image delivery (276KB savings)** — Pexels mood-row images at `w=900` served to 412px mobile viewports. Responsive srcset on mood-row `<img>` tags (adding `w=450` for mobile) is the fix.
  - **Unminified CSS (3KB savings)** — minor.

### 3. Render-blocking Google Fonts CSS — 530ms (MEDIUM IMPACT, ACTIONABLE)
- URL: `fonts.googleapis.com/css2?family=Playfair+Display...`
- The `<link rel="stylesheet">` for Google Fonts is still parser-blocking. The preload links added in cycle 6 preload the woff2 binaries but not the CSS.
- Candidate fix: swap `<link rel="stylesheet">` for a `<link rel="preload" as="style" onload>` pattern.

### 4. Image delivery — mood-row images oversized on mobile (MEDIUM IMPACT, ACTIONABLE)
- `w=900` Pexels parameter → 412px display width. Correct fix: add `srcset` pointing to `w=450` for mobile breakpoints.
- Estimated 276KB savings across the Shop section images.

---

## Root Causes (Cycle 6 — retained for reference)

### 1. Render-blocking `main.js` — CLOSED
Fixed with `defer`. FCP improvement confirmed.

### 2. Font-swap CLS on hero watermark — CLOSED
Font preloads + `contain: layout size` on `.hero::before`. Desktop CLS dropped from 0.171 to 0.009.

### 3. Missing favicon (Best Practices 404) — PARTIALLY CLOSED
Favicon landed. BP went from 73 → 77. Pexels third-party cookies are the remaining BP penalizer.

### 4. Bug #4 — Hero inset hidden image download on mobile — CLOSED
`<picture>` with empty mobile srcset in place.

---

## Cursor Trail — Leak Check (from cycle 6)
`/js/cursor-trail.js` exits clean on touch/coarse pointer and prefers-reduced-motion. No memory leak. Minor CPU note: rAF runs continuously even with no particles — cosmetic inefficiency, not a bug. Low-priority future optimization.

---

## Fixes Applied Cycle 6 (confirmed effective this run)

| Fix | File | Impact |
|-----|------|--------|
| `defer` added to main.js | index.html | FCP -1.3s mobile |
| Font preloads (3 woff2) | index.html | LCP -1.7s mobile; desktop CLS -98% |
| `contain: layout size` on `.hero::before` | style.css | CLS containment |
| Favicon SVG + link tag | favicon.svg + index.html | Partial BP recovery |
| `<picture>` mobile empty source (Bug #4) | index.html | Prevents hidden image download |

---

## Fixes Applied Cycle 7 (Builder)

| Fix | File | Impact |
|-----|------|--------|
| `padding-right: 24px` on `.testimonials-track` (Bug #28) | style.css | Negligible perf impact, confirmed |
