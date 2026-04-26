# Bug Report — Made by Molly
**Tested:** 2026-04-25 at 375px mobile + 1440px desktop
**Branch:** main (latest: commit 858d612)
**Total bugs:** 17 (2 Critical, 6 High, 8 Medium, 7 Low)

---

## CRITICAL (broken functionality, user-blocking)

**1. Nav logo click throws SyntaxError — smooth scroll JS crashes**
- Section: Navigation
- Selector: `a[href="#"].nav-logo` / `main.js` line 112
- The smooth scroll listener runs `document.querySelector(this.getAttribute('href'))` on every `a[href^="#"]`. When `href="#"` (the logo), this evaluates `document.querySelector("#")` which is an invalid CSS selector and throws `SyntaxError: '#' is not a valid selector` in Chrome/Safari/Firefox. The whole click handler crashes. The logo does scroll to top via browser default fallback, but a JS error fires in console on every logo tap.
- Reproduce: Open DevTools console, click "Made by Molly" logo in nav — observe SyntaxError.

**2. Form success message never displays — `#form-success` permanently hidden**
- Section: Contact form
- Selector: `#form-success` / `index.html` line 559, `main.js` line 181
- The contact form submits natively to Formspree via HTTP POST (no `e.preventDefault()` / no AJAX). After Formspree processes it, the user is redirected to `?submitted=1` per the `_next` hidden field. However, there is no JS handler checking `?submitted=1` on page load, and the success div has `display:none` with no code that ever sets it to visible. The success div is dead code. On mobile, user submits form, page reloads to the top of the site with no confirmation. The submit button also permanently reads "Sending..." if they somehow catch the form before redirect.
- Reproduce: Submit the contact form. No success feedback shown.

---

## HIGH (visible visual breakage)

**3. Hero Ken Burns scale animation killed on first scroll**
- Section: Hero
- Selector: `.hero-bg` / `main.js` lines 42–47
- The Ken Burns effect animates `transform: scale(1.05) → scale(1)` via 8s CSS transition. The parallax scroll handler sets `heroBg.style.transform = 'scale(1) translateY(...)` — inline style overwrites the CSS class transform, dropping the scale component immediately on first scroll event. The subtle cinematic zoom disappears the instant the user begins scrolling.
- Reproduce: Load page (Ken Burns zoom is visible), scroll 1px — scale instantly resets.

**4. Hero product inset image loads eagerly on mobile but is hidden**
- Section: Hero
- Selector: `.hero-product-inset img` / `index.html` line 70
- The inset image has `loading="eager"` and is visible on desktop. On mobile (`max-width: 768px`) the entire `.hero-product-inset` div is `display:none`. The eager image still downloads on mobile, burning ~100KB of bandwidth on an image that is never shown. Should be `loading="lazy"` at minimum, or excluded from mobile via `<picture>`.
- Affects: All mobile users.

**5. ~~Hamburger button stacks above mobile nav overlay — hamburger stays visible over full-screen menu~~ CLOSED**
- Section: Navigation (mobile)
- Selector: `.nav-hamburger` z-index 1001 vs `.mobile-nav-overlay` z-index 999
- **Fix (cycle 3):** Raised `.mobile-nav-overlay` z-index from 999 to 1002 in style.css. Overlay now sits definitively above the hamburger button. The existing `.nav-hidden` opacity:0 treatment on hamburger is now backed by a stacking-order guarantee.
- **Verified:** style.css updated; overlay z-index 1002 confirmed in HEAD. At 375px the overlay covers the full screen including the nav layer.

**6. Studio strip scroll loop has a 20px visible jump on every cycle**
- Section: Studio Strip
- Selector: `@keyframes studio-scroll` / `style.css` line 1317
- The seamless loop animation translates `calc(-270px * 5 - 20px * 5) = -1450px`. The flex `gap: 20px` applies between items only (4 gaps for 5 items), so the true first-set width is `5×270 + 4×20 = 1430px`. The animation overshoots by 20px (one extra gap), creating a visible 20px jump each time the loop resets.
- Fix: Change to `calc(-270px * 5 - 20px * 4)` = `-1430px`.

**7. Studio strip hover captions are completely invisible on mobile/touch**
- Section: Studio Strip
- Selector: `.studio-strip-hover-overlay` / `style.css` line 1289
- The photo captions ("Cutting the pattern", "At the sewing machine", etc.) are shown exclusively on CSS `:hover`. Touch devices never trigger hover states. On mobile the strip is in manual-scroll mode and the captions are permanently opacity:0. There is no touch fallback — the captions always hidden.
- Reproduce: At 375px, scroll the studio strip. No captions ever appear.

**8. Mobile mood-row wipe-in direction is backwards — images drop in from top instead of rising up**
- Section: Shop by Mood (all three rows)
- Selector: `.mood-photo` / `style.css` line 1532
- Mobile wipe-in: `clip-path: inset(100% 0 0 0)` (top inset 100%) → `clip-path: inset(0 0 0 0)`. This means the top clip shrinks, revealing the image as if it's dropping down from above — the opposite of what scroll-triggered reveals typically do (rising up into view). On desktop the wipe is horizontal (left or right), which is intentional. On mobile it should be `inset(0 0 100% 0)` (bottom inset) to create an upward reveal consistent with the scrolling direction.

---

## MEDIUM (polish, alignment, visible quirks)

**9. ~~`btn-walnut` tap target is ~41px — below the 44px minimum~~ CLOSED**
- Section: Shop by Mood (all three CTA buttons)
- Selector: `.btn-walnut` / `style.css` line 484
- **Fix (cycle 4, Pixel):** `min-height: 44px` confirmed present alongside `padding: 14px 28px`. Tap target at 44px. Verified in CSS audit at 375px + 414px.

**10. ~~`nav-cta` ("Custom Order" in desktop nav) tap target is ~37px~~ CLOSED**
- Section: Navigation
- Selector: `.nav-cta` / `style.css` line 105
- **Fix (cycle 4, Pixel):** `min-height: 44px` confirmed present with `display: inline-flex; align-items: center`. Tap target at 44px. Verified in CSS audit at 375px + 414px.

**11. `process-dots` container has `aria-hidden="true"` but wraps interactive buttons**
- Section: Process (sticky pin)
- Selector: `.process-dots[aria-hidden="true"]` / `index.html` line 227
- The four dot buttons are functional interactive controls (clicking them jumps to a panel). The container div has `aria-hidden="true"` which hides the buttons from all assistive technology. Screen reader users have no access to process panel navigation. The dots should either be properly labelled and not hidden, or the section should have an accessible alternative.

**12. Testimonial auto-scroll loop is not seamless on mobile viewports**
- Section: Testimonials
- Selector: `.testimonials-track` / `style.css` line 929
- The loop uses `translateX(-50%)` on a `width: max-content` track with 10 cards (5 + 5 duplicates). The card width is `clamp(300px, 35vw, 440px)`. At 375px: `35vw = 131.25px`, clamped to 300px. For -50% to create a seamless loop, the total track width must be exactly double the first 5 cards. With flex gap 24px: 5-card block = `5×300 + 4×24 = 1596px`. Total track with padding = not exactly 2× the 5-card block due to padding asymmetry. A visible jump occurs on loop reset on narrow viewports.

**13. ~~`reveal-glow` observer fires at 20% threshold; `reveal` fires at 12% with -40px root margin — race condition on mobile~~ CLOSED**
- Section: Shop by Mood
- Selector: `.mood-text` / `main.js` lines 63, 191
- **Fix (prior cycle, verified cycle 3):** The `reveal-glow` IntersectionObserver in main.js already uses `{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' }` — matching `.reveal` exactly (main.js line 249). The race condition was eliminated in a prior pass.
- **Verified cycle 3:** main.js line 249 confirms matching thresholds. No parent-invisible / child-animating race possible with identical trigger settings.

**14. Mobile reversed mood-rows have accent bar on the right; normal rows on the left — inconsistent on single-column layout**
- Section: Shop by Mood (Row 02 "Art quilts")
- Selector: `.mood-row.reverse .mood-text::before` / `style.css` line 429
- On desktop, the vertical copper accent bar flips sides for reversed rows (intentional for 2-col layout). On mobile the grid becomes single-column and `direction: ltr` is restored, but `.mood-row.reverse .mood-text::before { left: auto; right: 0; }` still applies. Row 01 and 03 have the bar on the left; Row 02 has it on the right. Inconsistent alignment on mobile where all bars should logically be on the same side.

**15. ~~Dual smooth-scroll: both `html { scroll-behavior: smooth }` and JS `window.scrollTo({ behavior: 'smooth' })` active~~ CLOSED**
- Section: Global
- Selector: `style.css` line 29 + `main.js` line 117
- **Fix (cycle 5, Builder):** `html { scroll-behavior: smooth }` was already removed prior to this cycle. style.css line 29 contains a comment: `/* scroll-behavior intentionally omitted — JS smooth scroll handles all anchors */`. No dual-scroll conflict. Verified cycle 5.

**16. Google Fonts loaded via CSS `@import` (render-blocking) despite `<link rel="preconnect">` in HTML**
- Section: Global / `<head>`
- Selector: `style.css` line 5 / `index.html` lines 9–10
- The `<head>` has preconnect hints for `fonts.googleapis.com` and `fonts.gstatic.com` — but no `<link rel="stylesheet">` for the fonts. The actual font request is an `@import` inside `style.css`, which is render-blocking (browser must fetch and parse style.css before it can even start the font request). This negates the benefit of the preconnect hints. The fonts should be loaded via `<link rel="stylesheet">` in `<head>`, not `@import`.

---

## LOW (nice-to-have fixes)

**17. Multiple elements use font-size 0.75rem (12px) — at the legal minimum, risky on text-only labels**
- Selectors: `.section-label`, `.hero-eyebrow`, `.author-location`, `.testimonials-disclaimer`, `.footer-copy`, `.footer-made`, `.footer-col-title`
- All at exactly 12px. While technically at the 12px guideline minimum, WCAG recommends 14px+ for body text. These are all informational labels, not decorative, and are especially small on mobile. The disclaimer text at 12px with `opacity: 0.7` on a dark background is particularly low-contrast.

**18. ~~Nav logo (`href="#"`) scrolls to top via browser jump, not smooth scroll~~ CLOSED**
- Selector: `a[href="#"].nav-logo`
- **Fix (cycle 5, Builder):** main.js lines 116-119 already handle this: `if (href === '#' || href === '') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }`. Logo tap smooth-scrolls to top correctly. Verified cycle 5.

**19. Duplicate studio strip images render on mobile — 10 items in a dead-end scroll**
- Section: Studio Strip (mobile)
- The 5 duplicate `aria-hidden="true"` items exist to enable the desktop CSS loop. On mobile, the animation is `none` and the strip becomes a manual scroll carousel. Users scroll through 5 real images then 5 visually identical duplicates before hitting a hard right edge. No indication the duplicates are a dead end.

**20. Form submit button: "Sending..." text never resets if Formspree returns an HTTP error**
- Section: Contact form
- Selector: `main.js` lines 181–185
- `btn.disabled = true; btn.textContent = 'Sending...'` on submit event, no error handling. If the network request fails (offline, Formspree down), the button stays permanently disabled and reads "Sending..." with no way to retry. No `fetch`/XHR error catch, no reset.

**21. Process closing arrow hover resets position — small visual jump**
- Section: Process (panel 4 closing)
- Selector: `.process-fp-closing-arrow` / `style.css` lines 639–656
- Normal state: `animation: arrowBob 2.5s infinite` (bounces 0→6px→0). On hover: `animation: none; transform: translateY(3px)`. When user first hovers, the transition goes from mid-bob position directly to `translateY(3px)` — can snap. On hover-off: returns to bob from `translateY(3px)` position.

**22. ~~Contact section: two consecutive `reveal from-bottom` elements animate independently — jarring on mobile~~ CLOSED**
- Section: Contact
- Selectors: `.contact-trust.reveal.from-bottom` and `.contact-inner.reveal.from-bottom`
- **Fix (cycle 4, Pixel):** Added `transition-delay: 0.2s` on `.contact-inner.reveal` inside `@media (max-width: 768px)`. Trust strip animates first, form card follows 200ms later — intentional stagger, no longer looks like a double-stutter. style.css mobile block.

**23. Studio strip pull-quote: redundant `margin-left: auto; margin-right: auto` inside a `text-align: center` parent**
- Section: Studio Strip header
- Selector: `.studio-pull-quote` / `style.css` line 1255
- Minor CSS redundancy. The `margin-left/right: auto` on an inline element inside a centered parent has no effect. Harmless but noisy.
