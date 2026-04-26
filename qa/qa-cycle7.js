/**
 * QA Cycle 7 — Made by Molly
 * PRIMARY: Bug #28 verification (testimonial loop seam fix)
 * SECONDARY: Bug sweep #8, #17, #19, #21, center-alignment, console errors
 * Viewports: 375, 414, 768, 1440px
 */

const { chromium } = require('/usr/local/lib/node_modules/playwright');
const fs = require('fs');
const path = require('path');

const LIVE_URL = 'https://zed0minat0r.github.io/craft-site/';
const SS_DIR = path.join(__dirname, 'screenshots/cycle7');

const VIEWPORTS = [
  { name: '375', width: 375, height: 812 },
  { name: '414', width: 414, height: 896 },
  { name: '768', width: 768, height: 1024 },
  { name: '1440', width: 1440, height: 900 },
];

const results = [];
const log = (vp, scenario, status, notes) => {
  const entry = { viewport: vp, scenario, status, notes };
  results.push(entry);
  console.log(`[${status}] ${vp}px -- ${scenario}${notes ? ': ' + notes : ''}`);
};

(async () => {
  const browser = await chromium.launch({ headless: true });

  for (const vp of VIEWPORTS) {
    console.log(`\n=== Viewport ${vp.name}px ===`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      userAgent: vp.width <= 768
        ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
        : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    });
    const page = await context.newPage();

    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    page.on('pageerror', err => consoleErrors.push('PAGE ERROR: ' + err.message));

    // --- PAGE LOAD ---
    try {
      await page.goto(LIVE_URL, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(2500);
      log(vp.name, 'Page load', 'PASS', null);
    } catch (e) {
      log(vp.name, 'Page load', 'FAIL', e.message);
      await context.close();
      continue;
    }

    // ============================================================
    // BUG #28 VERIFICATION — testimonial track scrollWidth + loop seam
    // ============================================================
    try {
      await page.evaluate(() => {
        const el = document.querySelector('#testimonials');
        if (el) el.scrollIntoView({ behavior: 'instant' });
      });
      await page.waitForTimeout(1200);
      await page.screenshot({ path: `${SS_DIR}/${vp.name}-testimonials.png`, fullPage: false });

      const trackData = await page.evaluate(() => {
        const track = document.getElementById('testimonials-track');
        if (!track) return null;
        const cards = track.querySelectorAll('.testimonial-card');
        const style = getComputedStyle(track);
        const gap = parseFloat(style.gap) || 24;
        const paddingLeft = parseFloat(style.paddingLeft) || 0;
        const paddingRight = parseFloat(style.paddingRight) || 0;
        const firstCard = cards[0];
        const cardW = firstCard ? firstCard.offsetWidth : 0;
        const trackScrollW = track.scrollWidth;
        const halfWidth = trackScrollW / 2;

        // Card[0] to card[5] distance (5 cards + 5 gaps)
        const card0to5_exact = 5 * cardW + 5 * gap;

        // Verify paddingRight = 24px (the fix)
        const fixApplied = paddingRight === 24;

        // Dots
        const dotsContainer = document.getElementById('testimonial-dots');
        const dotsVisible = dotsContainer ? getComputedStyle(dotsContainer).display !== 'none' : false;
        const activeDot = dotsContainer ? dotsContainer.querySelector('.dot.active') : null;

        // Keyframe value
        let keyframeTranslate = null;
        for (const sheet of document.styleSheets) {
          try {
            for (const rule of sheet.cssRules) {
              if (rule instanceof CSSKeyframesRule && rule.name === 'testimonial-scroll') {
                for (const kf of rule.cssRules) {
                  if (kf.keyText === '100%') keyframeTranslate = kf.style.transform;
                }
              }
            }
          } catch (e) { /* cross-origin */ }
        }

        // Animation on track
        const animName = style.animationName;
        const animDuration = style.animationDuration;

        return {
          cardWidth: cardW,
          gap,
          paddingLeft,
          paddingRight,
          trackScrollWidth: trackScrollW,
          halfWidth,
          card0to5_exact,
          halfMatchesExact: Math.abs(halfWidth - card0to5_exact) < 1,
          delta: halfWidth - card0to5_exact,
          fixApplied,
          numCards: cards.length,
          dotsPresent: !!dotsContainer,
          dotsVisible,
          hasActiveDot: !!activeDot,
          keyframeTranslate,
          animName,
          animDuration,
        };
      });

      if (trackData) {
        // Core fix verification
        log(vp.name, 'Bug #28 — padding-right fix applied (24px)', trackData.fixApplied ? 'PASS' : 'FAIL',
          `paddingRight=${trackData.paddingRight}px paddingLeft=${trackData.paddingLeft}px`);

        log(vp.name, 'Bug #28 — scrollWidth half == card0→card5 distance', trackData.halfMatchesExact ? 'PASS' : 'FAIL',
          `scrollW=${trackData.trackScrollWidth}px halfW=${trackData.halfWidth}px exact=${trackData.card0to5_exact}px delta=${trackData.delta}px cardW=${trackData.cardWidth}px gap=${trackData.gap}px cards=${trackData.numCards}`);

        log(vp.name, 'Bug #28 — keyframe translateX', trackData.keyframeTranslate ? 'INFO' : 'WARN',
          `keyframe="${trackData.keyframeTranslate}" anim="${trackData.animName}" dur="${trackData.animDuration}"`);

        if (vp.width <= 768) {
          log(vp.name, 'Testimonial dots on mobile', trackData.dotsPresent && trackData.dotsVisible ? 'PASS' : 'FAIL',
            `present=${trackData.dotsPresent} visible=${trackData.dotsVisible} activeDot=${trackData.hasActiveDot}`);
        }
      } else {
        log(vp.name, 'Bug #28 — track not found', 'FAIL', 'testimonials-track element missing');
      }
    } catch (e) {
      log(vp.name, 'Bug #28 testimonial track', 'FAIL', e.message);
    }

    // ============================================================
    // BUG #28 — Loop boundary: measure card[0] vs card[5] offset directly
    // ============================================================
    try {
      const offsetCheck = await page.evaluate(() => {
        const track = document.getElementById('testimonials-track');
        if (!track) return null;
        const cards = track.querySelectorAll('.testimonial-card');
        if (cards.length < 6) return { error: `only ${cards.length} cards found` };
        const card0 = cards[0].getBoundingClientRect().left;
        const card5 = cards[5].getBoundingClientRect().left;
        const trackLeft = track.getBoundingClientRect().left;
        const offset0 = cards[0].getBoundingClientRect().left - trackLeft;
        const offset5 = cards[5].getBoundingClientRect().left - trackLeft;
        return {
          card0Left: Math.round(card0),
          card5Left: Math.round(card5),
          offsetDiff: Math.round(card5 - card0),
          relOffset0: Math.round(offset0),
          relOffset5: Math.round(offset5),
        };
      });

      if (offsetCheck && !offsetCheck.error) {
        const trackScrollW = results.find(r =>
          r.viewport === vp.name && r.scenario.includes('scrollWidth half')
        );
        const halfW = trackScrollW ? null : null;
        log(vp.name, 'Bug #28 — card[0]→card[5] measured offset', 'INFO',
          `card0.left=${offsetCheck.card0Left}px card5.left=${offsetCheck.card5Left}px diff=${offsetCheck.offsetDiff}px (rel: card0=${offsetCheck.relOffset0}px card5=${offsetCheck.relOffset5}px)`);
      } else if (offsetCheck && offsetCheck.error) {
        log(vp.name, 'Bug #28 card offset measurement', 'FAIL', offsetCheck.error);
      }
    } catch (e) {
      log(vp.name, 'Bug #28 card offset measurement', 'FAIL', e.message);
    }

    // ============================================================
    // BUG #8 — Mobile mood-row wipe-in direction
    // ============================================================
    try {
      await page.evaluate(() => {
        const el = document.querySelector('#shop');
        if (el) el.scrollIntoView({ behavior: 'instant' });
      });
      await page.waitForTimeout(800);
      await page.screenshot({ path: `${SS_DIR}/${vp.name}-shop.png`, fullPage: false });

      const bug8 = await page.evaluate(() => {
        // Check the CSS keyframes / initial clip-path on mood-photo
        let mobileClipPath = null;
        let mobileClipPathFrom = null;
        let mobileClipPathTo = null;

        for (const sheet of document.styleSheets) {
          try {
            for (const rule of sheet.cssRules) {
              if (rule instanceof CSSKeyframesRule) {
                // look for any keyframe that clips mood images
              }
              // Check media rules for mobile
              if (rule instanceof CSSMediaRule) {
                const condText = rule.conditionText || '';
                if (condText.includes('max-width: 768') || condText.includes('max-width:768')) {
                  for (const inner of rule.cssRules) {
                    if (inner.selectorText && inner.selectorText.includes('mood-photo')) {
                      mobileClipPath = inner.style.clipPath || inner.style['clip-path'];
                    }
                  }
                }
              }
            }
          } catch (e) { /* cross-origin */ }
        }

        // Direct element check
        const moodPhotos = document.querySelectorAll('.mood-photo');
        const firstPhoto = moodPhotos[0];
        const computedClip = firstPhoto ? getComputedStyle(firstPhoto).clipPath : null;

        // Check if the not-revealed class has the clip
        const styleRules = [];
        for (const sheet of document.styleSheets) {
          try {
            for (const rule of sheet.cssRules) {
              if (rule.selectorText && rule.selectorText.includes('mood-photo') && !rule.selectorText.includes('reveal')) {
                styleRules.push({ sel: rule.selectorText, clip: rule.style.clipPath });
              }
              if (rule instanceof CSSMediaRule) {
                for (const inner of rule.cssRules) {
                  if (inner.selectorText && inner.selectorText.includes('mood-photo')) {
                    styleRules.push({ sel: `@media ${inner.parentRule.conditionText} { ${inner.selectorText} }`, clip: inner.style.clipPath });
                  }
                }
              }
            }
          } catch (e) { /* cross-origin */ }
        }

        return {
          mobileClipPath,
          computedClipOnFirstPhoto: computedClip,
          styleRules: styleRules.slice(0, 10),
          numMoodPhotos: moodPhotos.length,
        };
      });

      log(vp.name, 'Bug #8 mood-row wipe direction check', 'INFO',
        `mobileClip="${bug8.mobileClipPath}" computed="${bug8.computedClipOnFirstPhoto}" photos=${bug8.numMoodPhotos} rules=${JSON.stringify(bug8.styleRules)}`);

      // The correct fix would be inset(0 0 100% 0) for upward reveal (bottom inset closing)
      // Bug = inset(100% 0 0 0) means top clip shrinks = images drop from above
      if (vp.width <= 768 && bug8.mobileClipPath) {
        const isUpward = bug8.mobileClipPath.includes('inset(0 0 100%') || bug8.mobileClipPath.includes('inset(0,0,100%');
        const isDownward = bug8.mobileClipPath.includes('inset(100% 0 0') || bug8.mobileClipPath.includes('inset(100%,0,0');
        if (isDownward) {
          log(vp.name, 'Bug #8 wipe direction STILL BACKWARDS (top inset = drops from above)', 'FAIL',
            `clip="${bug8.mobileClipPath}" — should be inset(0 0 100% 0) for upward reveal`);
        } else if (isUpward) {
          log(vp.name, 'Bug #8 wipe direction FIXED (bottom inset = rises up)', 'PASS',
            `clip="${bug8.mobileClipPath}"`);
        } else {
          log(vp.name, 'Bug #8 wipe direction uncertain', 'WARN',
            `clip="${bug8.mobileClipPath}" — could not determine direction`);
        }
      }
    } catch (e) {
      log(vp.name, 'Bug #8 mood wipe check', 'FAIL', e.message);
    }

    // ============================================================
    // BUG #17 — Font sizes (12px labels)
    // ============================================================
    try {
      const fontSizeCheck = await page.evaluate(() => {
        const selectors = [
          { sel: '.section-label', label: 'section-label' },
          { sel: '.hero-eyebrow', label: 'hero-eyebrow' },
          { sel: '.author-location', label: 'author-location' },
          { sel: '.testimonials-disclaimer', label: 'testimonials-disclaimer' },
          { sel: '.footer-copy', label: 'footer-copy' },
          { sel: '.footer-made', label: 'footer-made' },
          { sel: '.footer-col-title', label: 'footer-col-title' },
        ];
        return selectors.map(({ sel, label }) => {
          const el = document.querySelector(sel);
          if (!el) return { label, found: false };
          const fs = parseFloat(getComputedStyle(el).fontSize);
          const opacity = parseFloat(getComputedStyle(el).opacity);
          return { label, found: true, fontSize: fs, opacity };
        });
      });

      const below13 = fontSizeCheck.filter(f => f.found && f.fontSize < 13);
      if (below13.length > 0) {
        log(vp.name, 'Bug #17 — elements below 13px', 'FAIL',
          below13.map(f => `${f.label}=${f.fontSize}px opacity=${f.opacity}`).join(' | '));
      } else {
        log(vp.name, 'Bug #17 — all label font sizes >= 13px', 'PASS',
          fontSizeCheck.filter(f => f.found).map(f => `${f.label}=${f.fontSize}px`).join(' | '));
      }
    } catch (e) {
      log(vp.name, 'Bug #17 font size check', 'FAIL', e.message);
    }

    // ============================================================
    // BUG #19 — Duplicate studio strip items on mobile
    // ============================================================
    if (vp.width <= 414) {
      try {
        await page.evaluate(() => {
          const el = document.querySelector('#studio');
          if (el) el.scrollIntoView({ behavior: 'instant' });
        });
        await page.waitForTimeout(500);

        const bug19 = await page.evaluate(() => {
          const track = document.querySelector('.studio-strip-track');
          if (!track) return null;
          const allItems = track.querySelectorAll('.studio-strip-item');
          const hiddenItems = track.querySelectorAll('.studio-strip-item[aria-hidden="true"]');
          const animationValue = getComputedStyle(track).animationName;
          const isAnimationNone = animationValue === 'none' || !animationValue;
          // Check if duplicates are visible (not hidden from screen)
          const firstHidden = hiddenItems[0];
          const hiddenVisibility = firstHidden ? getComputedStyle(firstHidden).visibility : null;
          const hiddenDisplay = firstHidden ? getComputedStyle(firstHidden).display : null;
          return {
            totalItems: allItems.length,
            hiddenAria: hiddenItems.length,
            animationNone: isAnimationNone,
            animationName: animationValue,
            firstHiddenVisibility: hiddenVisibility,
            firstHiddenDisplay: hiddenDisplay,
          };
        });

        if (bug19) {
          const dupExposedOnMobile = bug19.hiddenAria > 0 && bug19.animationNone;
          log(vp.name, 'Bug #19 — duplicate studio items exposed on mobile', dupExposedOnMobile ? 'OPEN' : 'PASS',
            `total=${bug19.totalItems} ariaHidden=${bug19.hiddenAria} animNone=${bug19.animationNone} firstHiddenDisplay=${bug19.firstHiddenDisplay}`);
        }
      } catch (e) {
        log(vp.name, 'Bug #19 studio duplicates', 'FAIL', e.message);
      }
    }

    // ============================================================
    // BUG #21 — Process closing arrow hover snap (mobile check)
    // ============================================================
    if (vp.width <= 414) {
      try {
        await page.evaluate(() => {
          const el = document.querySelector('#process');
          if (el) el.scrollIntoView({ behavior: 'instant' });
        });
        await page.waitForTimeout(500);

        const bug21 = await page.evaluate(() => {
          const arrow = document.querySelector('.process-fp-closing-arrow');
          if (!arrow) return null;
          const style = getComputedStyle(arrow);
          // Check if there's a transition on transform to smooth the hover-off snap
          const transition = style.transition;
          const animName = style.animationName;
          const transform = style.transform;
          return {
            exists: true,
            animationName: animName,
            transition,
            transform,
          };
        });

        if (bug21) {
          // The snap happens because no transition covers the animation→static change
          // If transition includes 'transform', the snap should be smoothed
          const hasTransformTransition = bug21.transition && bug21.transition.includes('transform');
          log(vp.name, 'Bug #21 — process arrow hover snap (mobile)', 'OPEN',
            `anim="${bug21.animationName}" transition="${bug21.transition}" hasTransformTransition=${hasTransformTransition} — snap on hover unfixed (CSS polish, mobile touch rarely triggers)`);
        } else {
          log(vp.name, 'Bug #21 — process arrow element', 'SKIP', 'arrow element not found');
        }
      } catch (e) {
        log(vp.name, 'Bug #21 process arrow', 'FAIL', e.message);
      }
    }

    // ============================================================
    // CENTER ALIGNMENT — testimonials, contact, footer (Pixel mandate)
    // ============================================================
    if (vp.width <= 414) {
      try {
        // Testimonials section
        await page.evaluate(() => {
          const el = document.querySelector('#testimonials');
          if (el) el.scrollIntoView({ behavior: 'instant' });
        });
        await page.waitForTimeout(500);

        const alignData = await page.evaluate(() => {
          const checks = [
            { sel: '.testimonials-header', label: 'testimonials-header' },
            { sel: '.testimonials-heading', label: 'testimonials-heading' },
            { sel: '.contact-inner', label: 'contact-inner' },
            { sel: '.footer-inner', label: 'footer-inner' },
            { sel: '.footer-copy', label: 'footer-copy' },
          ];
          return checks.map(({ sel, label }) => {
            const el = document.querySelector(sel);
            if (!el) return { label, found: false };
            const rect = el.getBoundingClientRect();
            const vw = window.innerWidth;
            const elCenter = rect.left + rect.width / 2;
            const viewCenter = vw / 2;
            const centerDelta = Math.abs(elCenter - viewCenter);
            const textAlign = getComputedStyle(el).textAlign;
            return {
              label,
              found: true,
              textAlign,
              width: Math.round(rect.width),
              left: Math.round(rect.left),
              right: Math.round(vw - rect.right),
              centerDelta: Math.round(centerDelta),
            };
          });
        });

        for (const item of alignData) {
          if (!item.found) {
            log(vp.name, `Center alignment: ${item.label}`, 'SKIP', 'not found');
            continue;
          }
          // For inline content: text-align center is the signal
          // For block elements: left margin should roughly equal right margin (within 8px)
          const isTextCentered = item.textAlign === 'center';
          const isBlockCentered = item.centerDelta <= 8;
          const pass = isTextCentered || isBlockCentered;
          log(vp.name, `Center alignment: ${item.label}`, pass ? 'PASS' : 'FAIL',
            `textAlign=${item.textAlign} left=${item.left}px right=${item.right}px centerDelta=${item.centerDelta}px w=${item.width}px`);
        }
        await page.screenshot({ path: `${SS_DIR}/${vp.name}-contact.png`, fullPage: false });
      } catch (e) {
        log(vp.name, 'Center alignment sweep', 'FAIL', e.message);
      }
    }

    // ============================================================
    // CONSOLE ERRORS — full session check
    // ============================================================
    if (consoleErrors.length === 0) {
      log(vp.name, 'Console errors — full session', 'PASS', 'zero errors');
    } else {
      log(vp.name, 'Console errors — full session', 'FAIL', consoleErrors.join(' | '));
    }

    // ============================================================
    // OVERFLOW CHECK
    // ============================================================
    try {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(300);
      const overflowInfo = await page.evaluate(() => {
        return {
          bodyScrollWidth: document.body.scrollWidth,
          viewportWidth: window.innerWidth,
          overflow: document.body.scrollWidth > window.innerWidth,
        };
      });
      if (overflowInfo.overflow) {
        log(vp.name, 'Horizontal overflow', 'FAIL',
          `body.scrollWidth=${overflowInfo.bodyScrollWidth} > viewport=${overflowInfo.viewportWidth}`);
      } else {
        log(vp.name, 'Horizontal overflow', 'PASS', null);
      }
    } catch (e) {
      log(vp.name, 'Horizontal overflow', 'FAIL', e.message);
    }

    await context.close();
  }

  await browser.close();

  fs.writeFileSync(path.join(SS_DIR, 'results.json'), JSON.stringify(results, null, 2));

  const passed = results.filter(r => r.status === 'PASS').length;
  const failed = results.filter(r => r.status === 'FAIL').length;
  const open = results.filter(r => r.status === 'OPEN').length;
  const warn = results.filter(r => r.status === 'WARN').length;

  console.log('\n=== SUMMARY ===');
  console.log(`PASS: ${passed} | FAIL: ${failed} | OPEN (known): ${open} | WARN: ${warn}`);
  console.log(`Results saved to ${SS_DIR}/results.json`);
})();
