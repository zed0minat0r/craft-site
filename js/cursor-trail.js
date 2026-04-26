(function () {
  // Desktop pointer:fine guard — skip entirely on touch devices
  if (!window.matchMedia('(pointer:fine)').matches) return;

  // prefers-reduced-motion guard — skip effect entirely
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
  document.body.appendChild(canvas);

  var ctx = canvas.getContext('2d');
  var particles = [];
  var raf = null; // null = loop is idle; non-null = loop is running

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  document.addEventListener('mousemove', function (e) {
    particles.push({ x: e.clientX, y: e.clientY, life: 1.0 });
    // Kick off the loop only if it is not already running
    if (raf === null) {
      raf = requestAnimationFrame(tick);
    }
  });

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles = particles.filter(function (p) { return p.life > 0; });

    particles.forEach(function (p) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4 * p.life, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(207,139,103,' + (p.life * 0.35) + ')';
      ctx.fill();
      p.life -= 0.025;
    });

    if (particles.length === 0) {
      // All particles have decayed — park the loop until next mousemove
      raf = null;
    } else {
      raf = requestAnimationFrame(tick);
    }
  }

  // Loop starts only on first mousemove — no burn on page load / idle tab
}());
