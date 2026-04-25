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
  if (heroBg) {
    // trigger Ken Burns after load
    window.addEventListener('load', function() {
      heroBg.classList.add('loaded');
    });
    // subtle parallax
    window.addEventListener('scroll', function() {
      const y = window.scrollY;
      if (y < window.innerHeight * 1.5) {
        heroBg.style.transform = 'scale(1) translateY(' + (y * 0.25) + 'px)';
      }
    }, { passive: true });
  }
})();

/* ---- Scroll Reveal ---- */
(function() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

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

/* ---- Contact Form ---- */
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  const success = document.getElementById('form-success');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(function() {
    btn.style.display = 'none';
    success.style.display = 'block';
    document.getElementById('contact-form').reset();
  }, 1200);
}

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
