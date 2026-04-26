# PLAN — Cycle 2, Builder

**One-liner:** Verify and document BUGS.md #1/#2/#3 — all three critical/high fixes already shipped in commit 62e166c.

## What and Why

BUGS.md was written against commit 858d612. Commit 62e166c (a prior Builder pass) already
shipped all three fixes:
- Bug #1 (CRITICAL): smooth-scroll `href="#"` guard — main.js line 116
- Bug #2 (CRITICAL): `?submitted=1` → `#form-success` reveal — main.js lines 210-219
- Bug #3 (HIGH): Ken Burns parallax — CSS variable `--parallax-y` in main.js line 45, style.css line 142

No code changes needed this cycle. Work = audit + changelog entry.

## Files Touched

- None (all fixes already in HEAD)

## Expected Diff

None to code. Changelog entry appended to CHANGELOG-AGENT.md.

## Success Criterion

Console clean on logo click, form success state visible on `?submitted=1`, hero Ken Burns
scale preserved on first scroll. All verified against current HEAD.
