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
  var raf;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  document.addEventListener('mousemove', function (e) {
    particles.push({ x: e.clientX, y: e.clientY, life: 1.0 });
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

    raf = requestAnimationFrame(tick);
  }

  tick();
}());
