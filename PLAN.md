# PLAN — Cycle 4, Builder

**One-liner:** AUDIT P2 honest testimonial source labels, AUDIT P3 trust-strip third item, SCOUT copper-glow cursor trail.

## What and Why

### AUDIT P2: Testimonial source badge honesty pass
- 4 "via Etsy" pills + 1 "via Instagram" pill — no live Etsy shop, no Instagram handle in footer.
- Re-label each to honest plain text matching the card's copy:
  - Card 1 (Rachel M. — custom tote): "past commission client"
  - Card 3 (Sara L. — commissioned three bags, was "via Instagram"): "past commission client"
  - Card 4 (Kate A. — custom quilt inquiry): "past commission client"
  - Duplicate set cards 1, 3, 4: same labels as originals
- Remove pill border treatment from `.testimonial-source` in style.css — plain attribution reads better without the verification-stamp border.
- Files: `index.html` (8 edits: 4 primary + 4 duplicate cards), `style.css` (1 edit: remove border).

### AUDIT P3: Custom CTA trust strip third item
- Replace "Bags, quilts & commissions welcome" with "Hand-finished in Pennsylvania".
- File: `index.html` line 378. One edit.

### SCOUT Candidate C: Copper-glow cursor trail
- New file: `js/cursor-trail.js` (~40 lines vanilla JS).
- Canvas overlay, pointer-events:none, z-index:9999.
- `pointer:fine` guard — desktop only.
- `prefers-reduced-motion` guard — skips effect entirely.
- Copper rgba(207,139,103, life * 0.35), decay 0.025/frame.
- Loaded via `<script defer src="js/cursor-trail.js"></script>` at end of body in index.html.

## Files Touched

- `index.html` — 9 edits (8 source labels + 1 trust strip line + 1 script tag)
- `style.css` — 1 edit (remove pill border from .testimonial-source)
- `js/cursor-trail.js` — new file (~40 lines)
- `CHANGELOG-AGENT.md` — append entry
- `BUGS.md` — update if applicable

## Expected Diff

~50 lines across 3 files.

## Success Criterion

- All testimonial source labels honest plain text, no Etsy/Instagram platform claims.
- Trust strip third item = "Hand-finished in Pennsylvania".
- Cursor trail visible on pointer:fine desktop, invisible on touch + prefers-reduced-motion.
