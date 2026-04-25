# Agent Changelog

## 2026-04-25 — Builder (smoke test, cycle 1)

- **Fix:** `@keyframes studio-scroll` translateX changed from `calc(-270px * 5 - 20px * 4)` to `calc(-270px * 5 - 20px * 5)` in style.css line 1330.
- **Why:** The 5-item strip has a 20px CSS gap between every adjacent item including between item 5 and the duplicate item 6. The previous calculation omitted that final gap, causing a 20px jump at the loop boundary — visible as a stutter on desktop. Correcting to 5 gaps produces a seamless infinite scroll.
- **Scope:** 1 character changed in 1 file.
- **AUDIT source:** Priority 3.
- **Plan commit:** 77c56ea | Code commit: (this commit)
