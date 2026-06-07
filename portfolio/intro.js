/* ============ Intro preloader + welcome reveal ============ */
(function () {
  'use strict';
  var root = document.documentElement;

  function heroReady() { root.classList.add('hero-ready'); }
  // Absolute failsafe: hero is always revealed within 5s, whatever happens.
  setTimeout(heroReady, 5000);

  var intro = document.getElementById('intro');
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var seen = false;
  try { seen = sessionStorage.getItem('introV2') === '1'; } catch (e) {}

  function remove() {
    if (intro && intro.parentNode) intro.parentNode.removeChild(intro);
    document.body.style.overflow = '';
  }
  function finish() {
    if (root.classList.contains('intro-done')) return;
    root.classList.add('intro-done');           // curtain lifts
    try { sessionStorage.setItem('introV2', '1'); } catch (e) {}
    setTimeout(heroReady, 180);                  // welcome reveal rides the curtain up
    setTimeout(remove, 1100);
  }

  // No intro element, returning visitor, or reduced-motion → reveal hero now.
  if (!intro || reduce || seen) {
    remove();
    requestAnimationFrame(heroReady);
    return;
  }

  document.body.style.overflow = 'hidden';

  var num = document.getElementById('introNum');
  var bar = document.getElementById('introBar');
  var start = null, dur = 1500;

  function step(ts) {
    if (!start) start = ts;
    var p = Math.min((ts - start) / dur, 1);
    var eased = 1 - Math.pow(1 - p, 2);
    var v = Math.round(eased * 100);
    if (num) num.textContent = v;
    if (bar) bar.style.width = v + '%';
    if (p < 1) requestAnimationFrame(step);
    else setTimeout(finish, 300);
  }
  requestAnimationFrame(step);

  setTimeout(finish, 4200);
})();
