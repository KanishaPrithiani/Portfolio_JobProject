import { useEffect, useRef } from 'react';

/**
 * Encapsulates all side-effects: smooth scroll, custom cursor,
 * intersection-observer reveals, tagline word-reveal, and the
 * flip-ghost portrait animation.
 *
 * Returns refs that need to be attached to DOM nodes.
 */
export function useScrollEffects() {
  const cursorRef     = useRef(null);
  const ringRef       = useRef(null);
  const heroSlotRef   = useRef(null);
  const heySlotRef    = useRef(null);
  const ghostRef      = useRef(null);
  const ghostInnerRef = useRef(null);
  const taglineRef    = useRef(null);
  const taglineSecRef = useRef(null);

  /* smooth-scroll state lives outside React render cycle */
  const scrollState = useRef({ targetY: 0, currentY: 0, rafId: null });

  /* ── smooth scroll ──────────────────────────────────────── */
  useEffect(() => {
    const s = scrollState.current;
    s.targetY = window.scrollY;
    s.currentY = window.scrollY;
    const LERP = 0.045;

    function tick() {
      const dist = s.targetY - s.currentY;
      if (Math.abs(dist) < 0.4) {
        s.currentY = s.targetY;
        window.scrollTo(0, s.currentY);
        s.rafId = null;
        return;
      }
      s.currentY += dist * LERP;
      window.scrollTo(0, s.currentY);
      s.rafId = requestAnimationFrame(tick);
    }

    function onWheel(e) {
      e.preventDefault();
      const maxY = Math.max(0, document.body.scrollHeight - window.innerHeight);
      s.targetY = Math.max(0, Math.min(maxY, s.targetY + e.deltaY * 1.15));
      if (!s.rafId) s.rafId = requestAnimationFrame(tick);
    }

    let touchStartY = 0;
    function onTouchStart(e) { touchStartY = e.touches[0].clientY; }
    function onTouchMove(e) {
      const dy = touchStartY - e.touches[0].clientY;
      touchStartY = e.touches[0].clientY;
      const maxY = Math.max(0, document.body.scrollHeight - window.innerHeight);
      s.targetY = Math.max(0, Math.min(maxY, s.targetY + dy));
      if (!s.rafId) s.rafId = requestAnimationFrame(tick);
    }

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      if (s.rafId) cancelAnimationFrame(s.rafId);
    };
  }, []);

  /* ── anchor-click smooth scroll ────────────────────────── */
  useEffect(() => {
    const s = scrollState.current;
    function handleAnchor(e) {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const maxY = Math.max(0, document.body.scrollHeight - window.innerHeight);
      s.targetY = Math.max(0, Math.min(maxY, el.getBoundingClientRect().top + s.currentY - 80));
      if (!s.rafId) {
        const LERP = 0.045;
        function tick() {
          const dist = s.targetY - s.currentY;
          if (Math.abs(dist) < 0.4) { s.currentY = s.targetY; window.scrollTo(0, s.currentY); s.rafId = null; return; }
          s.currentY += dist * LERP; window.scrollTo(0, s.currentY);
          s.rafId = requestAnimationFrame(tick);
        }
        s.rafId = requestAnimationFrame(tick);
      }
    }
    document.addEventListener('click', handleAnchor);
    return () => document.removeEventListener('click', handleAnchor);
  }, []);

  /* ── custom cursor ──────────────────────────────────────── */
  useEffect(() => {
    const dot  = cursorRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    let mx = -100, my = -100, rx = -100, ry = -100;
    let alive = true;

    function onMove(e) { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; }
    function onOver(e) { if (e.target.closest('a, button')) ring.classList.add('is-hovering'); }
    function onOut(e)  { if (e.target.closest('a, button')) ring.classList.remove('is-hovering'); }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout',  onOut);

    function loop() {
      if (!alive) return;
      rx += (mx - rx) * 0.13; ry += (my - ry) * 0.13;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    }
    loop();

    return () => {
      alive = false;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout',  onOut);
    };
  }, []);

  /* ── intersection observer (reveal + glass) ─────────────── */
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .card-glass, .testi-card, .thought-card, .contact-form');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('in-view'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    els.forEach((el, i) => { el.style.transitionDelay = (i % 4 * 0.09) + 's'; io.observe(el); });
    return () => io.disconnect();
  }, []);

  /* ── tagline word-reveal + flip ghost (RAF loop) ─────────── */
  useEffect(() => {
    const s = scrollState.current;
    const taglineEl  = taglineRef.current;
    const taglineSec = taglineSecRef.current;
    const heroSlot   = heroSlotRef.current;
    const heySlot    = heySlotRef.current;
    const ghost      = ghostRef.current;
    const ghostInner = ghostInnerRef.current;
    const spans      = taglineEl ? taglineEl.querySelectorAll('span') : [];
    let isDesktop    = window.innerWidth > 900;
    let alive        = true;
    const M          = {};

    function lerpN(a, b, t) { return a + (b - a) * t; }
    function easeIO(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }

    function measureGhost() {
      if (!isDesktop || !heroSlot || !heySlot) return;
      const hr = heroSlot.getBoundingClientRect();
      const yr = heySlot.getBoundingClientRect();
      M.hLeft = hr.left; M.hW = hr.width; M.hH = hr.height;
      M.yLeft = yr.left; M.yW = yr.width; M.yH = yr.height;
      M.hScrollTop = hr.top + s.currentY;
      M.yScrollTop = yr.top + s.currentY;
      const vh = window.innerHeight;
      M.start = M.hScrollTop + M.hH * 0.5 - vh * 0.55;
      M.end   = M.yScrollTop + M.yH * 0.5 - vh * 0.5;
    }

    function updateTagline() {
      if (!taglineSec || !spans.length) return;
      const rect = taglineSec.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const progressed = vh - rect.top;
      const progress = Math.max(0, Math.min(1, progressed / total));
      const litCount = Math.round(progress * spans.length);
      spans.forEach((sp, i) => sp.classList.toggle('lit', i < litCount));
    }

    function updateGhost() {
      if (!isDesktop || !ghost || !ghostInner || !M.end) return;
      const sc   = s.currentY;
      const prog = Math.max(0, Math.min(1, (sc - M.start) / ((M.end - M.start) || 1)));
      const e    = easeIO(prog);
      const hScreenTop = M.hScrollTop - sc;
      const yScreenTop = M.yScrollTop - sc;
      ghost.style.top          = lerpN(hScreenTop, yScreenTop, e) + 'px';
      ghost.style.left         = lerpN(M.hLeft, M.yLeft, e) + 'px';
      ghost.style.width        = lerpN(M.hW, M.yW, e) + 'px';
      ghost.style.height       = lerpN(M.hH, M.yH, e) + 'px';
      ghost.style.borderRadius = lerpN(20, 28, e) + 'px';
      ghostInner.style.transform = 'rotateY(' + (e * 180) + 'deg)';
    }

    function loop() { if (!alive) return; updateTagline(); updateGhost(); requestAnimationFrame(loop); }

    function onResize() { isDesktop = window.innerWidth > 900; measureGhost(); }
    window.addEventListener('resize', onResize);

    function init() { measureGhost(); document.body.classList.add('js-ready'); loop(); }
    if (document.readyState === 'complete') { init(); }
    else { window.addEventListener('load', init); }

    return () => {
      alive = false;
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', init);
      document.body.classList.remove('js-ready');
    };
  }, []);

  /* helper exposed to components that need to scroll to contact */
  function scrollToContact() {
    const el = document.getElementById('contact');
    if (!el) return;
    const s = scrollState.current;
    const maxY = Math.max(0, document.body.scrollHeight - window.innerHeight);
    s.targetY = Math.max(0, Math.min(maxY, el.getBoundingClientRect().top + s.currentY - 80));
  }

  return {
    cursorRef, ringRef,
    heroSlotRef, heySlotRef,
    ghostRef, ghostInnerRef,
    taglineRef, taglineSecRef,
    scrollToContact,
  };
}
