# AGENT-PLAN — Cycle 4

**Coordinator:** dispatched 2026-04-25
**Project:** Made by Molly (craft-site)
**Live:** https://zed0minat0r.github.io/craft-site/
**Last score:** 7.2 (cycle 3) — trajectory 6.8 → 7.0 → 7.2 (+0.2 each cycle)
**Focus axis:** conversion-friction + first "wow" interaction layer
**Forbidden sections this cycle:** Studio Strip · About section · Process panels · Hero (Ken Burns / parallax) · Mood rows visual+animation · Shop section price text

---

## Dispatch Decision

Score is 7.2 — under the 8.5 polish gate, so full agent slate runs. AUDIT P1 (real photography) cannot be fixed in code — explicitly excluded from agent scope. AUDIT P2 (Etsy badge) and P3 (trust strip line) are both code-eligible and form the Builder spine. SCOUT's recommended copper-glow cursor trail is the cycle's first "wow" candidate and fits Builder's budget after the P2/P3 work — added as the second Builder task. Spark refines the Custom CTA frame on a Frame B pass. Pixel runs the standard mobile alignment + accessibility-tap-target sweep. Nigel re-scores at the end.

**Rationale (one line):** Builder ships AUDIT P2/P3 + SCOUT's cursor trail wow-moment, Spark refines Custom CTA Frame B, Pixel sweeps mobile + tap targets including the new cursor-trail desktop guard, Nigel re-scores stricter against the photography ceiling.

---

## Agent 1 — Builder

**Why now:** Cycle 4 has two concrete, code-eligible AUDIT priorities (P2 testimonial badge, P3 Custom CTA trust strip) plus SCOUT's cycle-4 recommendation (copper-glow cursor trail). All three fit one Builder pass.

**Specific instructions:**
1. **AUDIT P2 — Testimonial source badges.** The user does NOT have a known live Etsy shop. Do NOT fabricate a URL. Re-label every "via Etsy" pill to honest plain text — pick one of: "past commission client" / "from Etsy customer" / "from Instagram DM" / "direct order" — and match each card to its actual source story already in the testimonial copy. Remove the pill border treatment if relabeling makes it read as plain attribution rather than verification. The four cards labeled "via Etsy" and the one labeled "via Instagram" both need an honesty pass — Instagram label can stay if the user has a real Instagram (check footer/contact for handle; if none, soften that one too).
2. **AUDIT P3 — Custom CTA trust strip third item.** Replace "Bags, quilts & commissions welcome" with a credible artisan-brand commitment. Approved options (pick one): "Ships within 2 weeks of order confirmation" / "Hand-finished in Pennsylvania" / "Every piece backed by a satisfaction guarantee". Do NOT invent specific shipping windows, return windows, or legal terms beyond these patterns.
3. **SCOUT recommendation — Copper-glow cursor trail.** Implement Candidate C from SCOUT.md exactly: ~40 lines vanilla JS, canvas overlay, `pointer-events:none`, `z-index: 9999`, particle decay 0.025/frame, copper rgba(207,139,103, life * 0.35). Wrap entire init in `if (window.matchMedia('(pointer:fine)').matches) { ... }` — desktop only. Add `prefers-reduced-motion` guard that skips the effect entirely. New file `js/cursor-trail.js` loaded via `<script defer src="js/cursor-trail.js"></script>` at end of body — do not bury it inside main.js.

**Memory guardrails (MUST respect):**
- No fabricated URLs / no fake Etsy link / no invented testimonial sources.
- No fabricated guarantees with specific legal terms (refund windows, lifetime warranty, etc.).
- Apps must NOT look AI-generated — cursor trail must use the cream/espresso/copper palette, not generic blue/white sparkle.
- Simplicity over polish — replace the trust-strip line, do not add a fourth item.

**Forbidden:** Studio Strip · About section · Process panels · Hero · Mood rows · Shop price text. Do not add new sections.

**Exit criteria:**
- AUDIT P2 cleared: every source label is honest (links to real platform OR is plain past-tense attribution; no implied verification without href).
- AUDIT P3 cleared: trust-strip third item replaced with one of the approved commitment lines.
- Cursor trail ships and is visible on desktop pointer:fine, invisible on touch + prefers-reduced-motion.
- BUGS.md updated only if Builder closes anything in passing.

---

## Agent 2 — Spark (Frame B)

**Why now:** Custom CTA section has not been touched since cycle 1. Builder is replacing the trust-strip third item (one line, content). Spark refines the surrounding Custom CTA frame on a Frame B pass — typography, spacing, visual hierarchy of the existing trust strip + headline + body — without adding new elements.

**Specific instructions:**
- Frame B refinement of the Custom CTA section ONLY (forest-green contrast block, headline "Most of my favorites have been custom work", body copy, trust strip, CTA button).
- Refine: spacing between headline and body, trust-strip iconography spacing, button weight, watermark "Custom" treatment (Nigel cycle 3 noted it competes on tablets — quiet it OR remove it; do not add a replacement).
- The watermark is the one element you may REMOVE without replacing — it's identified as competing for attention. Removing decorative noise honors simplicity-over-polish.
- Frame B keeps content count: do NOT strip the trust strip from 3 items to 2. Builder is replacing the third item's text — Spark refines its visual treatment.

**Memory guardrails (MUST respect):**
- Frame B keeps content count — three trust-strip items stay three.
- Spark must replace/remove when adding — if you add anything new, identify what comes out.
- No ghost numbers / large faded background numerals anywhere.
- Apps must NOT look AI-generated — keep the artisan cream/espresso/copper system, not generic SaaS gradients.
- Nigel never recommends removing glows/animations/effects — Spark may remove ONLY the over-large "Custom" watermark per Nigel's own cycle-3 note, nothing else.

**Forbidden:** Studio Strip · About section · Process panels · Hero · Mood rows · Shop section · Testimonials (Builder owns this cycle). Do not add new sections. Do not touch typography globals.

**Exit criteria:**
- Custom CTA section reads tighter visually but content count unchanged (still 3 trust items, still 1 headline, still 1 body, still 1 CTA).
- Tablet watermark "Custom" no longer competes with the headline (quieted or removed cleanly).
- Diff is bounded to Custom CTA selectors in style.css + at most 1 HTML change.

---

## Agent 3 — Pixel

**Why now:** Builder is shipping a desktop-only cursor canvas + replacing copy in two sections. Pixel must verify (a) the cursor canvas does not regress mobile, (b) the relabeled testimonial badges still center-align at 375px and 414px, (c) tap targets stay at 44px after Custom CTA Frame B refinement.

**Specific instructions:**
1. **Mobile center-alignment audit at 375px AND 414px** (mandatory per memory) on:
   - Testimonials cards after Builder's relabel — source badge alignment in the rating-row flex.
   - Custom CTA section after Spark's Frame B — trust strip horizontal centering, CTA button centering, headline centering.
   - Footer (cycle eligible — has not been audited).
   - Contact form trust strip and form card vertical rhythm (BUGS.md #22 noted double-stutter on mobile reveals — diagnose if visible).
2. **Tap target sweep** — confirm `.btn-walnut` (BUGS.md #9, currently ~41px) and `.nav-cta` (BUGS.md #10, currently ~37px) — fix both to min-height 44px. These are persistent accessibility bugs.
3. **Cursor trail desktop-only verification** — confirm `pointer:fine` guard works: at 375px the canvas element should not paint, no console errors, no event listener leaks.
4. **prefers-reduced-motion** — verify cursor trail respects the user setting; verify the existing reveal animations also respect it (spot check, do not refactor).

**Memory guardrails (MUST respect):**
- Pixel always audits center-alignment on mobile at 375px AND 414px — both viewports, not one.
- No content removal — only alignment / tap-target / spacing fixes.
- Apps must NOT look AI-generated — do not introduce generic Material/Tailwind tap-target patterns.

**Forbidden:** Studio Strip · About · Process panels · Hero · Mood rows · Shop price layout · Testimonial copy edits (Builder owns content). No new sections. No CSS variable redefinitions.

**Exit criteria:**
- Both BUGS.md #9 and #10 closed (44px min-height confirmed).
- Mobile alignment sweep documented in changelog with each section verified at 375px + 414px.
- Cursor trail confirmed inactive on mobile + reduced-motion.

---

## Agent 4 — Nigel

**Why now:** Cycle close. Three code changes (Builder P2/P3 + Spark Frame B) plus the cursor-trail wow-moment plus Pixel tap-target fixes. Nigel re-scores from a real buyer's perspective.

**Specific instructions:**
- Re-audit conversion-friction axis. Score from a prospective buyer landing cold on the live URL.
- The score ceiling remains photography. P1 did not move this cycle (and was not in scope). Do NOT inflate the score above 7.5 just because cosmetic refinements landed. The repeated `pexels-7998221` is still in About and Process closing panel — that ceiling has not lifted.
- Acknowledge the cursor trail as a genuine new experience layer — it is the first "wow" moment shipped this project. Score its delight value, but do not let it inflate the conversion-friction axis (it does not directly reduce friction; it is brand presence).
- Update AUDIT.md with cycle 4 entry, top-3 priorities for cycle 5, and updated section scores.
- Append SCORES.log line.

**Memory guardrails (MUST respect):**
- Nigel scores stricter — new-ish artisan site sits 5.5–7.5. Do not move past 7.5 without real photography movement.
- Nigel never recommends removing glows / animations / effects — only addition or improvement. The cursor trail counts as a new effect; if it lands well, say so. If it does not, suggest tuning (decay rate, color, density), not removal.
- Score from a real buyer's perspective, not a designer's.
- Respectful tone — never blame the user for missing photography. Frame as "next unlock," not "blocker the user has not delivered."

**Forbidden:** Do not edit code. Do not touch agent files except AUDIT.md / SCORES.log / CHANGELOG-AGENT.md.

**Exit criteria:**
- AUDIT.md cycle 4 entry written with top-3 cycle 5 priorities.
- SCORES.log appended.
- Score delta justified with specific buyer-perspective reasoning, not vibes.

---

## Cooldowns Enforced

| Section | Last touched | Cooldown until |
|---|---|---|
| Studio Strip | cycle 1 | cycle 5 |
| About | cycle 3 (Spark) | cycle 5 |
| Process panels | cycle 3 (Pixel hotfix) | cycle 5 |
| Hero | cycle 2 ratified | cycle 5 |
| Mood rows visual / animation | cycle 2 (Pixel) | cycle 5 |
| Shop section price text | cycle 3 (Builder) | cycle 6 |

---

## Notes for Cycle 5+

- AUDIT P1 (real photography) remains the top blocker. Until the user supplies one original photo of Molly or a finished product, no code change can break 7.5 cleanly.
- SCOUT runner-up (Layered Telescope Zoom) is the next "wow" candidate after cursor trail proves stable. Cycle 6 candidate.
- Bug sweep candidate cycle: BUGS.md still has 17+ open including 2 mediums (#11 process-dots aria-hidden, #15 dual smooth-scroll) and the long-tail lows. Schedule a Razor pass cycle 6.
