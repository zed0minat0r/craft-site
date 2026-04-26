# QA Cycle 6 — Made by Molly
**Date:** 2026-04-26
**Tester:** QA agent (Playwright 1.59.1 / Chromium headless)
**URL tested:** https://zed0minat0r.github.io/craft-site/
**Viewports:** 375px, 414px, 768px, 1440px
**Screenshots:** qa/screenshots/cycle6/

---

## Pass/Fail Summary by Viewport

### 375px (iPhone SE)
| Scenario | Status | Notes |
|---|---|---|
| Page load + screenshot | PASS | |
| Console errors at load | PASS | zero errors |
| Hero Ken Burns scale after 1px scroll | PASS | `--parallax-y` used; inline transform = "" (scale preserved by CSS class) |
| Scroll to all sections | PASS | all 5 sections reachable |
| Mobile nav overlay z-index (Bug #5) | PASS | overlay z:1002 > hamburger z:1001 |
| Form ?submitted=1 reveals #form-success (Bug #2) | PASS | successDiv.style.display='block' confirmed |
| Bug #19 — duplicate studio items on mobile | OPEN | 10 items present, animation=none, 5 dups are dead-end scroll; unfixed known issue |
| Bug #20 — form button stuck "Sending..." | PASS | 12s safety setTimeout in main.js confirmed; button resets |
| Bug #21 — process arrow hover jump | OPEN | CSS-only polish issue; animation:none + translateY(3px) snap on hover — unchanged |
| Testimonial track loop seam (Bug #12) | FAIL | halfWidth=1608, actual card0→card5=1620; 12px jump per cycle |
| Testimonial dots container visible | PASS | present and display:flex on mobile |
| Cursor trail canvas absent on mobile | NOTE | headless matchMedia always returns pointer:fine — NOT a real bug; guards in code are correct |
| Center alignment: Hero content | PASS | text-align:center |
| Center alignment: Custom CTA | PASS | text-align:center |
| Center alignment: Footer inner | PASS | text-align:center |
| Center alignment: Contact inner | PASS | card centered by margin auto (20px each side at 375px); text-align:start is correct for form card |
| Horizontal overflow check | NOTE | body.scrollWidth=391 (16px over); caused by overflow-x:clip on body + .reveal.from-right initial translateX(40px) pre-reveal. No actual scrollbar; html.scrollWidth=375. Not a user-facing issue. |
| Console errors — full session | PASS | zero errors |

### 414px (iPhone Plus)
| Scenario | Status | Notes |
|---|---|---|
| Page load + screenshot | PASS | |
| Console errors at load | PASS | zero errors |
| Hero Ken Burns scale after 1px scroll | PASS | |
| Scroll to all sections | PASS | |
| Mobile nav overlay z-index | PASS | z:1002 > z:1001 |
| Testimonial track loop seam (Bug #12) | FAIL | same 12px gap as 375px (card clamped to 300px at 414px) |
| Testimonial dots visible | PASS | |
| Cursor trail | NOTE | headless artifact — code guards correct |
| Center alignment: all 4 elements | PASS | |
| Horizontal overflow | NOTE | same pre-reveal artifact as 375px |
| Console errors — full session | PASS | zero errors |

### 768px (tablet)
| Scenario | Status | Notes |
|---|---|---|
| Page load + screenshot | PASS | |
| Console errors at load | PASS | zero errors |
| Hero Ken Burns scale after 1px scroll | PASS | |
| Scroll to all sections | PASS | |
| Mobile nav overlay z-index | PASS | z:1002 > z:1001 (hamburger still present at 768px in current breakpoint) |
| Testimonial track loop seam (Bug #12) | FAIL | same 12px gap (card still 300px at 768px clamp) |
| Testimonial dots visible | PASS | display:flex |
| Process panels text centered | PASS | stylesheet confirms top:50%; all 4 panels same rule — verified via cssRules (getComputedStyle returns px, misleading but CSS is correct) |
| Cursor trail | NOTE | headless artifact |
| Horizontal overflow | NOTE | pre-reveal artifact (same as 375px, no real scrollbar) |
| Console errors — full session | PASS | zero errors |

### 1440px (desktop)
| Scenario | Status | Notes |
|---|---|---|
| Page load + screenshot | PASS | |
| Console errors at load | PASS | zero errors |
| Hero Ken Burns scale after 1px scroll | PASS | |
| Scroll to all sections | PASS | |
| Bug #6 — studio strip loop math | **CLOSED** | item[0]→item[5] offset=1450px = `*5` formula (Builder cycle1 correct). See definitive answer below. |
| Testimonial track loop seam (Bug #12) | FAIL | card=440px at 1440px; same 12px gap (5*440+5*24=2320, halfW=2308) |
| Process panels text centered | PASS | stylesheet top:50%, all 4 identical |
| Cursor trail canvas present | PASS | canvas appended on desktop (pointer:fine) |
| Horizontal overflow | PASS | no overflow at 1440px |
| Console errors — full session | PASS | zero errors |

---

## Bug #6 — Definitive Answer

**Verdict: Builder cycle 1 (`*5`) is CORRECT. Original BUGS.md (`*4`) was wrong.**

**Measurement method:** Playwright at 1440px measured `getBoundingClientRect().left` of `items[0]` and `items[5]` (first duplicate) while the track was static.

**Result:** `item[5].left - item[0].left = 1450px`

**Math:**
- Item width = 270px (confirmed via `offsetWidth`)
- CSS gap = 20px (confirmed via `getComputedStyle(track).gap`)
- 5 items + 5 gaps = `5×270 + 5×20 = 1350 + 100 = 1450px`

**Why 5 gaps, not 4?** In a CSS flex container with `gap`, the gap applies between every adjacent pair of items. Between item[4] and item[5] (the first duplicate), there is also a gap. So the boundary between the last real item and the first duplicate has one gap. The animation must overshoot by exactly that gap to land at item[5]'s left edge. `*5` is correct.

**Current keyframe:** `translateX(calc(-1450px))` — matches the measured offset exactly. No jump.

---

## Bug #12 — Definitive Measurement

**Verdict: CONFIRMED OPEN. 12px stutter per loop cycle on all viewports.**

| Viewport | Card width | Gap | 5-card block (5 gaps) | Track halfWidth (-50%) | Discrepancy |
|---|---|---|---|---|---|
| 375px | 300px | 24px | 1620px | 1608px | **12px** |
| 414px | 300px | 24px | 1620px | 1608px | **12px** |
| 768px | 300px | 24px | 1620px | 1608px | **12px** |
| 1440px | 440px | 24px | 2320px | 2308px | **12px** |

Root cause: 10-item flex track with 9 gaps has `scrollWidth = 10×cardW + 9×gap`. Half = `5×cardW + 4.5×gap`. But the loop boundary is at `card[5].left - card[0].left = 5×cardW + 5×gap`. The -50% animation always falls half-a-gap short.

Fix (Builder, next cycle): add `padding-right: 24px` to `.testimonials-track` → scrollWidth gains 24px → halfWidth = `5×cardW + 5×gap` = exact match.

---

## Bugs Verified Closed This Cycle

| Bug | Was | Status | Evidence |
|---|---|---|---|
| #2 | Form success never shows | CLOSED | ?submitted=1 → successDiv visible → PASS |
| #3 | Ken Burns killed on scroll | CLOSED | parallax writes --parallax-y; scale from CSS class unaffected |
| #5 | Hamburger above overlay | CLOSED | z-index confirmed 1002 > 1001 |
| #6 | Studio strip 20px jump | CLOSED | Measured offset=1450px, *5 correct, zero jump |
| #7 | Studio hover captions invisible on touch | CLOSED | @media(hover:none) opacity:1 rule confirmed in stylesheet |
| #14 | Reverse mood-row bar on wrong side | CLOSED | All 3 rows left=0px at 375px |
| #20 | Form button stuck "Sending..." | CLOSED | 12s setTimeout safety reset confirmed in main.js |

---

## New Bug Found

**Bug #28 — Testimonial loop 12px seam (all viewports)** — see BUGS.md entry #28 and definitive measurement above.

---

## Bugs Remaining Open

- Bug #8: Mood-photo wipe-in direction (Pixel cycle 2 said fixed — not re-tested this cycle; clip-path direction should be verified live)
- Bug #12: Testimonial loop 12px jump (confirmed open, see above)
- Bug #19: Studio duplicate items on mobile dead-end scroll
- Bug #21: Process closing arrow hover position snap
- Bug #27: Section-label copper contrast 2.50:1 (blocked on user brand decision)
- Bug #28: Testimonial loop 12px seam (new, same as #12 update)

---

## Screenshots

All screenshots in `qa/screenshots/cycle6/`:
- `375-hero.png`, `375-shop.png`, `375-process.png`, `375-studio.png`, `375-testimonials.png`, `375-contact.png`, `375-nav-open.png`, `375-form-success.png`
- `414-hero.png`, `414-shop.png`, `414-process.png`, `414-studio.png`, `414-testimonials.png`, `414-contact.png`, `414-nav-open.png`
- `768-hero.png`, `768-shop.png`, `768-process.png`, `768-studio.png`, `768-testimonials.png`, `768-contact.png`, `768-nav-open.png`
- `1440-hero.png`, `1440-shop.png`, `1440-process.png`, `1440-studio.png`, `1440-testimonials.png`, `1440-contact.png`
