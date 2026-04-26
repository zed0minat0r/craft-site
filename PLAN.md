# PLAN — Cycle 3, Builder

**One-liner:** Fix Bug #5 (hamburger z-index over overlay), verify Bug #13 already resolved, update price ranges on all three mood rows.

## What and Why

### Bug #5: Hamburger z-index stacks above overlay
- `.nav-hamburger` z-index 1001 sits above `.mobile-nav-overlay` z-index 999.
- JS already adds `.nav-hidden` (opacity:0, pointer-events:none) but opacity transition can flash briefly.
- Fix: raise `.mobile-nav-overlay` to z-index 1002 so it definitively covers the hamburger.
- File: `style.css` line 1411

### Bug #13: reveal-glow fires before reveal (already fixed in HEAD)
- main.js line 249: reveal-glow observer already uses `{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' }` — matches .reveal. Race condition eliminated.
- Action: verify in code, then mark closed in BUGS.md with note.

### AUDIT P2: Price ranges on mood rows
- Row 1 (Bags, 6–10 hours): `$75` → `$75–$220`
- Row 2 (Quilts): note BUGS.md says "15–30 hours" in actual HTML, AGENT-PLAN says "40–80 hours". Will match what's in HTML.
  - `$120` → `$120–$480`
- Row 3 (Custom commissions): `$95` → `$95+`
- File: `index.html` lines 108, 133, 158
- Must inherit existing `.mood-price` styling — no new component.

## Files Touched

- `style.css` — 1 edit (overlay z-index)
- `index.html` — 3 edits (price text)
- `BUGS.md` — mark #5 and #13 closed
- `CHANGELOG-AGENT.md` — append entry

## Expected Diff

4 surgical edits total across 2 source files.

## Success Criterion

- Hamburger not visible over open nav overlay at 375px.
- No reveal-glow race condition observable.
- All three mood rows show price ranges.
- BUGS.md #5 and #13 marked closed.
