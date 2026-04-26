# PLAN — Cycle 5, Builder

**One-liner:** Testimonial carousel mobile touch UX (pause/swipe/dots), contact textarea placeholder, verify/document Bug #15 and #18 as already fixed.

## What and Why

### AUDIT P2: Testimonial carousel mobile touch UX
- Add touch interaction layer to the CSS-driven testimonials carousel via main.js.
- `touchstart`: capture X position, pause animation-play-state by setting a `data-paused` attribute + CSS class.
- `touchend`: measure delta; if >=50px jump prev/next card (manipulate `transform` directly, reconcile with loop). Restart animation after 4s delay.
- Dot indicators: inject 5 `.testimonial-dot` elements into a new `.testimonial-dots` container below `.testimonials-track-wrap` in index.html. Active dot tracks visible card via IntersectionObserver (on mobile) or position calculation.
- CSS: dot styles in style.css — small circles, copper active state, centered below track.
- Files: main.js (new IIFE ~60 lines), index.html (1 edit: add `.testimonial-dots` container), style.css (1 edit: dot styles ~15 lines).

### AUDIT P3: Contact textarea placeholder
- Update `placeholder` on `<textarea name="message">` (index.html line 577).
- New text: `e.g. a market tote in olive linen, roughly 14 inches wide, gift in 6 weeks — happy to send a sketch first`
- One attribute change.

### BUGS.md #15: scroll-behavior dual conflict
- Already resolved — style.css line 29 has a comment confirming `scroll-behavior` was intentionally omitted. Mark CLOSED in BUGS.md.

### BUGS.md #18: Nav logo smooth scroll
- Already resolved — main.js lines 116-119: `if (href === '#' || href === '') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }` — already scrolls to top smoothly. Mark CLOSED in BUGS.md.

## Files Touched

- `main.js` — 1 new IIFE (~60 lines): touch/swipe/pause + dot indicator logic
- `index.html` — 2 edits: textarea placeholder + testimonial-dots container
- `style.css` — 1 edit: dot indicator styles (~15 lines)
- `BUGS.md` — 2 edits: close #15 and #18
- `CHANGELOG-AGENT.md` — append cycle 5 entry

## Expected Diff

~80 lines across 4 files.

## Success Criterion

- On 375px: tap carousel pauses auto-scroll, swipe left/right advances cards, dots reflect current position.
- Existing translateX(-50%) seamless loop still works on resume.
- Contact textarea shows directive placeholder text.
- Bugs #15 and #18 marked CLOSED with fix notes.
