/* ============ Portfolio — magic FX ============ */
(function () {
  'use strict';
  var root = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(pointer:fine)').matches;
  function fx() { return root.getAttribute('data-effects') || 'full'; }

  /* ---- scroll progress ---- */
  var prog = document.getElementById('scrollProg');
  function onScroll() {
    if (!prog) return;
    var max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var p = max > 0 ? document.documentElement.scrollTop / max : 0;
    prog.style.transform = 'scaleX(' + p + ')';
  }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();

  /* ---- hero cursor spotlight ---- */
  var hero = document.querySelector('.hero');
  if (hero && fine) {
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      hero.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      hero.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  }

  /* ---- 3D tilt + glare on project cards ---- */
  if (fine && !reduce) {
    document.querySelectorAll('.proj').forEach(function (card) {
      var glare = document.createElement('div');
      glare.className = 'glare';
      card.appendChild(glare);
      card.addEventListener('pointermove', function (e) {
        if (fx() === 'none') return;
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width;
        var py = (e.clientY - r.top) / r.height;
        var rx = (py - 0.5) * -5.5;
        var ry = (px - 0.5) * 7;
        card.style.transform = 'perspective(1100px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateY(-3px)';
        glare.style.opacity = '1';
        glare.style.setProperty('--gx', (px * 100) + '%');
        glare.style.setProperty('--gy', (py * 100) + '%');
      });
      card.addEventListener('pointerleave', function () {
        card.style.transform = '';
        glare.style.opacity = '0';
      });
    });
  }

  /* ---- magnetic buttons ---- */
  if (fine && !reduce) {
    document.querySelectorAll('[data-magnetic]').forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        if (fx() === 'none') return;
        var r = el.getBoundingClientRect();
        var x = e.clientX - (r.left + r.width / 2);
        var y = e.clientY - (r.top + r.height / 2);
        el.style.transform = 'translate(' + (x * 0.3) + 'px,' + (y * 0.4) + 'px)';
      });
      el.addEventListener('pointerleave', function () { el.style.transform = ''; });
    });
  }

  /* ---- cursor glow ---- */
  var cursor = document.querySelector('.cursor-glow');
  if (cursor && fine) {
    var cx = 0, cy = 0, hideT;
    addEventListener('pointermove', function (e) {
      cx = e.clientX; cy = e.clientY;
      cursor.style.transform = 'translate(' + cx + 'px,' + cy + 'px)';
      var interactive = e.target.closest('a, button, .proj, .interest, .tag, .stack-items span');
      cursor.classList.toggle('lg', !!interactive);
    });
  }

  /* ---- hero meteors (canvas) ---- */
  var cv = document.getElementById('heroFx');
  var ctx = cv ? cv.getContext('2d') : null;
  var meteors = [], raf = null, running = false;
  function accent() {
    return getComputedStyle(root).getPropertyValue('--accent').trim() || '#cdfb45';
  }
  function resize() {
    if (!cv) return;
    var dpr = Math.min(devicePixelRatio || 1, 2);
    cv.width = cv.offsetWidth * dpr;
    cv.height = cv.offsetHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function makeMeteor() {
    var w = cv.offsetWidth, h = cv.offsetHeight;
    return {
      x: Math.random() * w * 1.2 - w * 0.1,
      y: Math.random() * -h * 0.5 - 20,
      len: 80 + Math.random() * 140,
      sp: 2.2 + Math.random() * 2.6,
      a: 0.15 + Math.random() * 0.35,
      w: Math.random() < 0.5 ? 1 : 1.5
    };
  }
  function loop() {
    if (!running) return;
    var w = cv.offsetWidth, h = cv.offsetHeight;
    ctx.clearRect(0, 0, w, h);
    var col = accent();
    while (meteors.length < 7) meteors.push(makeMeteor());
    for (var i = meteors.length - 1; i >= 0; i--) {
      var m = meteors[i];
      var dx = m.len * 0.8, dy = m.len; // ~50deg downward
      var ex = m.x + dx, ey = m.y + dy;
      var g = ctx.createLinearGradient(m.x, m.y, ex, ey);
      g.addColorStop(0, hexA(col, 0));
      g.addColorStop(1, hexA(col, m.a));
      ctx.strokeStyle = g;
      ctx.lineWidth = m.w;
      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(ex, ey);
      ctx.stroke();
      m.x += m.sp * 0.8; m.y += m.sp;
      if (m.y > h + 40 || m.x > w + 60) meteors.splice(i, 1);
    }
    raf = requestAnimationFrame(loop);
  }
  function hexA(hex, a) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(function (c) { return c + c; }).join('');
    var n = parseInt(hex, 16);
    return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')';
  }
  function startMeteors() {
    if (!cv || reduce || running) return;
    running = true; resize(); meteors = []; loop();
  }
  function stopMeteors() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    if (ctx) ctx.clearRect(0, 0, cv.offsetWidth, cv.offsetHeight);
  }
  addEventListener('resize', function () { if (running) resize(); });

  /* ---- public: react to tweak changes ---- */
  window.refreshEffects = function () {
    if (fx() === 'full') startMeteors(); else stopMeteors();
  };
  // initial
  window.refreshEffects();
})();
