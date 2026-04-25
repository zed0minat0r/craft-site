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
    // subtle parallax — disabled for reduced-motion users
    if (!reducedMotion) {
      window.addEventListener('scroll', function() {
        const y = window.scrollY;
        if (y < window.innerHeight * 1.5) {
          heroBg.style.transform = 'scale(1) translateY(' + (y * 0.25) + 'px)';
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
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
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
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  });
});
