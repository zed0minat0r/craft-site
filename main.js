/* ============================================
   MADE BY MOLLY — main.js
   ============================================ */

/* ---- Reading Progress Bar ---- */
(function() {
  const bar = document.getElementById('progress-bar');
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
})();

/* ---- Nav scroll state ---- */
(function() {
  const nav = document.getElementById('main-nav');
  function updateNav() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
})();

/* ---- Hero parallax / bg load ---- */
(function() {
  const heroBg = document.getElementById('hero-bg');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (heroBg) {
    // trigger Ken Burns after load (skip if reduced motion)
    window.addEventListener('load', function() {
      heroBg.classList.add('loaded');
    });
    // subtle parallax via CSS variable so Ken Burns scale is unaffected
    if (!reducedMotion) {
      window.addEventListener('scroll', function() {
        const y = window.scrollY;
        if (y < window.innerHeight * 1.5) {
          heroBg.style.setProperty('--parallax-y', (y * 0.25) + 'px');
        }
      }, { passive: true });
    }
  }
})();

/* ---- Scroll Reveal ---- */
(function() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  // If user prefers reduced motion, show all elements immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach(function(el) { el.classList.add('visible'); });
    return;
  }

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(function(el) { observer.observe(el); });
})();

/* ---- Testimonials auto-scroll is CSS-only (no JS needed) ---- */

/* ---- Mobile Hamburger Menu ---- */
(function() {
  var hamburger = document.getElementById('nav-hamburger');
  var overlay = document.getElementById('mobile-nav-overlay');
  var closeBtn = document.getElementById('mobile-nav-close');

  function openMenu() {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.classList.add('nav-hidden');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.classList.remove('nav-hidden');
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  if (overlay) {
    overlay.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', closeMenu);
    });
  }
})();

/* ---- Smooth scroll for anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var href = this.getAttribute('href');
    // Skip bare "#" (logo) — let it scroll to top explicitly
    if (href === '#' || href === '') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    var target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  });
});

/* ---- Process Sticky Pin & Horizontal Slide ----
   Vertical scroll into the runway is mapped to horizontal translateX on
   the track, so the viewport "locks" and panels slide sideways through it. */
(function() {
  var runway = document.getElementById('process-runway');
  var track  = document.getElementById('process-track');
  var panels = document.querySelectorAll('.process-fp');
  var dots   = document.querySelectorAll('.process-dot');
  if (!runway || !track || !panels.length) return;

  var numPanels = panels.length;
  var currentIndex = -1;

  function setActiveDot(idx) {
    if (idx === currentIndex) return;
    currentIndex = idx;
    dots.forEach(function(d, i) {
      d.classList.toggle('is-active', i === idx);
    });
  }

  function onScroll() {
    var rect = runway.getBoundingClientRect();
    var runwayH = runway.offsetHeight;
    var vh = window.innerHeight;

    var scrolled = -rect.top;
    if (scrolled < 0) scrolled = 0;
    var budget = runwayH - vh;
    if (budget <= 0) {
      track.style.transform = 'translateX(0)';
      setActiveDot(0);
      return;
    }

    var progress = scrolled / budget; // 0 → 1
    if (progress > 1) progress = 1;

    // First 75% of the budget drives the slide; last 25% is dwell on panel 4
    // so the closing panel actually has time to be read.
    var SLIDE_FRACTION = 0.75;
    var slideProgress = progress / SLIDE_FRACTION;
    if (slideProgress > 1) slideProgress = 1;

    var translatePct = -slideProgress * (numPanels - 1) * 100;
    track.style.transform = 'translate3d(' + translatePct + 'vw, 0, 0)';

    var idx = Math.round(slideProgress * (numPanels - 1));
    if (idx >= numPanels) idx = numPanels - 1;
    setActiveDot(idx);
  }

  // Dot click: jump scroll to where the dot's panel becomes active.
  // Last 25% of the budget is dwell on panel 4, so use SLIDE_FRACTION when
  // mapping segments back to scroll positions.
  dots.forEach(function(dot, i) {
    dot.addEventListener('click', function() {
      var runwayTop = runway.getBoundingClientRect().top + window.scrollY;
      var budget = runway.offsetHeight - window.innerHeight;
      var segments = numPanels - 1;
      var SLIDE_FRACTION = 0.75;
      var target = segments > 0
        ? runwayTop + (budget * SLIDE_FRACTION / segments) * i + 2
        : runwayTop + 2;
      window.scrollTo({ top: target, behavior: 'smooth' });
    });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();
})();

/* ---- Contact form loading state + success on ?submitted=1 ---- */
(function() {
  var form = document.getElementById('contact-form');
  var btn = document.getElementById('submit-btn');
  var successDiv = document.getElementById('form-success');

  // Show success message if Formspree redirected back with ?submitted=1
  if (successDiv) {
    var params = new URLSearchParams(window.location.search);
    if (params.get('submitted') === '1') {
      successDiv.style.display = 'block';
      // Scroll to the success message
      successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Clean up the URL so refreshing doesn't re-show the message
      history.replaceState(null, '', window.location.pathname);
    }
  }

  if (!form || !btn) return;

  form.addEventListener('submit', function() {
    btn.disabled = true;
    btn.textContent = 'Sending...';
    // Safety reset: re-enable button after 12s in case of network error
    setTimeout(function() {
      if (btn.disabled) {
        btn.disabled = false;
        btn.textContent = 'Send Message';
      }
    }, 12000);
  });
})();

/* ---- Mood row glow on scroll-in ---- */
/* threshold + rootMargin match the .reveal observer so they fire together */
(function() {
  var rows = document.querySelectorAll('.mood-row');
  if (!rows.length) return;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-glow');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  rows.forEach(function(r) { observer.observe(r); });
})();

/* ---- Shop CTA inquiry pre-selection ---- */
(function() {
  var inquirySelect = document.getElementById('inquiry');
  if (!inquirySelect) return;

  // Pre-select if a shop CTA with data-inquiry was clicked
  document.querySelectorAll('[data-inquiry]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var val = this.getAttribute('data-inquiry');
      if (val && inquirySelect) {
        // Set after scroll animation completes
        setTimeout(function() {
          inquirySelect.value = val;
        }, 600);
      }
    });
  });

  // Also handle ?inquiry= query param on page load
  var params = new URLSearchParams(window.location.search);
  var preselect = params.get('inquiry');
  if (preselect) {
    inquirySelect.value = preselect;
  }
})();
