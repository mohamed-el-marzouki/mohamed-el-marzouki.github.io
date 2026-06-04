/* ============ Portfolio interactions ============ */
(function () {
  'use strict';

  /* --- nav: scrolled state --- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- scroll reveal --- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* --- nav active section --- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[data-nav]'));
  var sections = navLinks.map(function (a) {
    return document.getElementById(a.getAttribute('data-nav'));
  });
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var id = e.target.id;
          navLinks.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('data-nav') === id);
          });
        }
      });
    }, { threshold: 0.4, rootMargin: '-20% 0px -40% 0px' });
    sections.forEach(function (s) { if (s) spy.observe(s); });
  }

  /* --- marquee: duplicate track for seamless loop --- */
  var track = document.getElementById('marquee');
  if (track) {
    track.innerHTML += track.innerHTML;
  }

  /* --- dot nav scrollspy + click --- */
  var dots = Array.prototype.slice.call(document.querySelectorAll('.dotnav a[data-dot]'));
  var dotTargets = dots.map(function (a) { return document.getElementById(a.getAttribute('data-dot')); });
  if ('IntersectionObserver' in window && dots.length) {
    var dotSpy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var id = e.target.id;
          dots.forEach(function (a) { a.classList.toggle('active', a.getAttribute('data-dot') === id); });
        }
      });
    }, { threshold: 0.01, rootMargin: '-45% 0px -45% 0px' });
    dotTargets.forEach(function (s) { if (s) dotSpy.observe(s); });
  }

  /* --- case study overlay --- */
  var overlay = document.getElementById('caseOverlay');
  if (overlay) {
    var order = ['logareth', 'vinbot', 'ronin', 'octave'];
    var cases = overlay.querySelectorAll('.case');
    var scroller = document.getElementById('caseScroll');
    var current = null;
    function showCase(name) {
      current = name;
      cases.forEach(function (c) { c.hidden = (c.getAttribute('data-case') !== name); });
      if (scroller) scroller.scrollTop = 0;
    }
    function openCase(name) {
      showCase(name);
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function closeCase() {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    function step(dir) {
      var i = order.indexOf(current);
      showCase(order[(i + dir + order.length) % order.length]);
    }
    document.querySelectorAll('.proj[data-case]').forEach(function (card) {
      card.addEventListener('click', function () { openCase(card.getAttribute('data-case')); });
    });
    document.getElementById('caseClose').addEventListener('click', closeCase);
    overlay.querySelectorAll('[data-case-nav]').forEach(function (b) {
      b.addEventListener('click', function () { step(b.getAttribute('data-case-nav') === 'next' ? 1 : -1); });
    });
    document.addEventListener('keydown', function (e) {
      if (!overlay.classList.contains('open')) return;
      if (e.key === 'Escape') closeCase();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    });
  }

  /* --- mobile menu --- */
  var navToggle = document.getElementById('navToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  if (navToggle && mobileMenu) {
    function setMenu(open) {
      document.body.classList.toggle('menu-open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    }
    navToggle.addEventListener('click', function () {
      setMenu(!document.body.classList.contains('menu-open'));
    });
    mobileMenu.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  /* --- count-up stats --- */
  var counters = document.querySelectorAll('.stat-cell .n[data-to]');
  if ('IntersectionObserver' in window && counters.length) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        cio.unobserve(e.target);
        var el = e.target;
        var to = parseInt(el.getAttribute('data-to'), 10) || 0;
        var suf = el.querySelector('.suf');
        var sufHtml = suf ? suf.outerHTML : '';
        var start = null, dur = 1100;
        function stepCount(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.innerHTML = Math.round(eased * to) + sufHtml;
          if (p < 1) requestAnimationFrame(stepCount);
        }
        requestAnimationFrame(stepCount);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { cio.observe(c); });
  } else {
    counters.forEach(function (el) {
      var suf = el.querySelector('.suf');
      el.innerHTML = el.getAttribute('data-to') + (suf ? suf.outerHTML : '');
    });
  }
})();
