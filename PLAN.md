# PLAN — Cycle 1

**One-liner:** Fix studio strip loop stutter by correcting the keyframe translateX calculation.

## What and Why

AUDIT.md Priority 3 calls out a visible stutter at the loop boundary in the studio strip
auto-scroll animation. The keyframe currently uses `calc(-270px * 5 - 20px * 4)`, which
scrolls 5 items plus 4 gaps. But the DOM has 5 real items followed by 5 duplicates, and
the CSS gap is 20px — including between item 5 and item 6. That means one gap is not
accounted for, so when the animation resets to translateX(0) it jumps 20px. Fix is one
number: change `20px * 4` to `20px * 5`.

## Files

- `/Users/modica/projects/craft-site/style.css` — line 1330, @keyframes studio-scroll

## Expected Diff

One number in one line. Before: `calc(-270px * 5 - 20px * 4)`. After: `calc(-270px * 5 - 20px * 5)`.

## Success Criterion

The studio strip scrolls continuously on desktop with no visible jump or stutter at the
loop boundary.
