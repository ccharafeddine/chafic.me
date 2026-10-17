import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { heroChart } from './hero-chart';
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });
ScrollTrigger.addEventListener('refresh', () => setTimeout(() => unhide(), 1500));
addEventListener('load', () => setTimeout(() => unhide(), 2500));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
let lenis: Lenis | null = null;
let rafId = 0;
let cleanups: (() => void)[] = [];

// Scroll to an in-page anchor; cards inside the pinned horizontal track map to the matching vertical scroll position.
function scrollToHash(hash: string, immediate = false) {
  if (!hash || hash.length < 2) return false;
  let el = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!el) return false;
  if (el.dataset.target) el = document.getElementById(el.dataset.target) || el;
  const y = el.getBoundingClientRect().top + scrollY - 72;
  if (lenis) lenis.scrollTo(y, { immediate, duration: 1.2 }); else scrollTo({ top: y, behavior: immediate || reduce ? 'auto' : 'smooth' });
  return true;
}
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest?.('a') as HTMLAnchorElement | null;
  if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
  const u = new URL(a.href, location.href);
  if (u.origin !== location.origin || u.pathname !== location.pathname || !u.hash) return;
  if (scrollToHash(u.hash)) { e.preventDefault(); e.stopPropagation(); history.pushState(null, '', u.hash); }
}, true);
addEventListener('popstate', () => scrollToHash(location.hash));

function splitWords(el: HTMLElement) {
  if (el.dataset.split) return el.querySelectorAll('.w > span');
  el.dataset.split = '1';
  el.innerHTML = el.textContent!.trim().split(/\s+/).map(w => `<span class="w inline-block overflow-hidden align-bottom pb-1"><span class="inline-block">${w}</span></span>`).join(' ');
  return el.querySelectorAll('.w > span');
}


// Reveal helper: fromTo with explicit end state (so a second tween on the same element can never "lock in" a hidden
// start value, which is what blanked the flagship card), once:true, and each element registered only once.
const SHOWN = { opacity: 1, x: 0, y: 0, xPercent: 0, yPercent: 0, scale: 1, rotate: 0, rotationY: 0, clipPath: 'inset(0 0 0 0)' };
function reveal(targets: gsap.TweenTarget, from: gsap.TweenVars, vars: gsap.TweenVars, trigger: Element | string, start = 'top 90%') {
  const els = gsap.utils.toArray<HTMLElement>(targets).filter(el => !el.dataset.rv);
  if (!els.length) return;
  els.forEach(el => el.dataset.rv = '1');
  const to: gsap.TweenVars = { ...vars, immediateRender: false, scrollTrigger: { trigger, start, once: true } };
  for (const k of Object.keys(from)) (to as any)[k] = (SHOWN as any)[k] ?? 0;
  if ('clipPath' in from) to.clearProps = 'clipPath';
  gsap.fromTo(els, { ...from }, to);
}
// Safety net: anything registered as a reveal that is on/above screen but still hidden gets shown.
function unhide() {
  document.querySelectorAll<HTMLElement>('[data-rv]').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight && +getComputedStyle(el).opacity < 0.05) gsap.set(el, { clearProps: 'opacity,transform,clipPath' });
  });
}

function heroCanvas() { cleanups.push(heroChart(reduce)); }

function tilt() {
  if (!matchMedia('(hover: hover)').matches || reduce) return;
  document.querySelectorAll<HTMLElement>('.tilt').forEach(el => {
    const rx = gsap.quickTo(el, 'rotationX', { duration: 0.4 }), ry = gsap.quickTo(el, 'rotationY', { duration: 0.4 });
    gsap.set(el, { transformPerspective: 900 });
    let r = el.getBoundingClientRect();
    el.addEventListener('pointerenter', () => { r = el.getBoundingClientRect(); });
    const mv = (e: PointerEvent) => { ry(((e.clientX - r.left) / r.width - 0.5) * 12); rx(-((e.clientY - r.top) / r.height - 0.5) * 12); };
    const lv = () => { rx(0); ry(0); };
    el.addEventListener('pointermove', mv, { passive: true }); el.addEventListener('pointerleave', lv);
  });
}

function glow() {
  const g = document.getElementById('cursor-glow'); if (!g || reduce || !matchMedia('(hover: hover)').matches) return;
  const xTo = gsap.quickTo(g, 'x', { duration: 0.6, ease: 'power3' }), yTo = gsap.quickTo(g, 'y', { duration: 0.6, ease: 'power3' });
  let shown = false;
  const mv = (e: PointerEvent) => { xTo(e.clientX - 200); yTo(e.clientY - 200); if (!shown) { shown = true; gsap.to(g, { opacity: 1, duration: 0.3 }); } };
  addEventListener('pointermove', mv); cleanups.push(() => removeEventListener('pointermove', mv));
}

function init() {
  heroCanvas();
  // progress bar works even with reduced motion (it's informative)
  gsap.to('#progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.2 } });
  if (reduce) return;
  if (!lenis) { lenis = new Lenis({ lerp: 0.1 }); lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(t => lenis!.raf(t * 1000)); gsap.ticker.lagSmoothing(0); }
  const idle = (window as any).requestIdleCallback || ((f: () => void) => setTimeout(f, 200));
  idle(() => { tilt(); glow(); });

  // hero: entrance + parallax/shrink on scroll
  if (document.getElementById('hero')) {
    gsap.from('.hero-in', { y: 40, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out' });
    const tl = gsap.timeline({ scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
    tl.to('#hero-content', { scale: 0.82, y: 120, opacity: 0, ease: 'none' }, 0)
      .to('#hero-canvas', { y: 220, ease: 'none' }, 0)
      .to('#hero-orb', { y: 300, x: -100, ease: 'none' }, 0)
      .to('#hero-orb2', { y: -150, x: 120, ease: 'none' }, 0)
      .to('#scroll-cue', { opacity: 0, ease: 'none' }, 0);
    const cue = gsap.to('#scroll-cue', { y: 8, repeat: -1, yoyo: true, duration: 0.9, ease: 'sine.inOut' });
    // pause the bobbing cue once the hero is off screen, so nothing ticks for it while reading the page
    ScrollTrigger.create({ trigger: '#hero', start: 'top top', end: 'bottom top', onLeave: () => cue.pause(), onEnterBack: () => cue.play() });
  }

  // split-text headings
  document.querySelectorAll<HTMLElement>('.split').forEach(h => {
    reveal(splitWords(h), { yPercent: 110, rotate: 4 }, { duration: 0.9, stagger: 0.06, ease: 'power4.out' }, h, 'top 88%');
  });

  // generic reveals
  gsap.utils.toArray<HTMLElement>('.reveal').forEach(el => reveal(el, { y: 50, opacity: 0 }, { duration: 0.9, ease: 'power3.out' }, el));

  // finance projects: flagship scale-in, then rows reveal (staggered text) with in-card image parallax
  const fl = document.getElementById('flagship');
  if (fl) reveal(fl, { y: 60, scale: 0.94, opacity: 0 }, { duration: 1, ease: 'power3.out' }, fl, 'top 88%');
  gsap.utils.toArray<HTMLElement>('.frow').forEach((row, i) => {
    reveal(row, { y: 70, scale: 0.96, opacity: 0 }, { duration: 0.9, ease: 'power3.out' }, row, 'top 85%');
    reveal(row.querySelectorAll('.ftxt > *'), { y: 24, opacity: 0 }, { duration: 0.6, delay: 0.25, stagger: 0.07, ease: 'power2.out' }, row, 'top 85%');
    reveal(row.querySelector('.fimg'), { clipPath: i % 2 ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)' }, { duration: 0.9, delay: 0.1, ease: 'power3.inOut' }, row, 'top 85%');
    const img = row.querySelector('.fpar');
    if (img) gsap.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: row, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  // timeline draw
  if (document.getElementById('tl')) {
    gsap.fromTo('#tl-line', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '#tl', start: 'top 70%', end: 'bottom 60%', scrub: true } });
    gsap.utils.toArray<HTMLElement>('.tl-item').forEach(li => {
      reveal(li, { y: 50, opacity: 0 }, { duration: 0.8, ease: 'power3.out' }, li, 'top 78%');
      reveal(li.querySelector('.tl-dot'), { scale: 0 }, { duration: 0.5, ease: 'back.out(3)' }, li, 'top 78%');
    });
  }

  // skill chips float in
  gsap.utils.toArray<HTMLElement>('#skills .card').forEach(card => {
    reveal(card.querySelectorAll('.chip'), { y: () => gsap.utils.random(30, 70), x: () => gsap.utils.random(-30, 30), rotate: () => gsap.utils.random(-15, 15), opacity: 0 }, { duration: 0.9, stagger: 0.05, ease: 'back.out(1.6)' }, card, 'top 85%');
  });
}

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
// ── Return to the exact home scroll position after visiting a project ──
// Saved on leaving "/" (keyed by path). Restored when coming back via browser Back or the "← All projects" link
// (which acts like history.back() when the previous page was home). Fresh loads with a hash still jump to the anchor.
const KEY = (path: string) => 'scroll:' + path;
const norm = (p: string) => p.replace(/\/+$/, '') || '/';
let restoreY: number | null = null;
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest?.('a[data-back]') as HTMLAnchorElement | null;
  if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
  if (sessionStorage.getItem('cameFromHome') === norm(location.pathname) && history.length > 1) { e.preventDefault(); e.stopPropagation(); history.back(); }
}, true);
document.addEventListener('astro:before-preparation', (e: any) => {
  const from = new URL(e.from), to = new URL(e.to);
  if (from.pathname === '/' && to.pathname !== '/') {
    sessionStorage.setItem(KEY('/'), String(Math.round(scrollY)));
    sessionStorage.setItem('cameFromHome', norm(to.pathname));
  }
  if (to.pathname === '/' && from.pathname !== '/') {
    const saved = sessionStorage.getItem(KEY('/'));
    restoreY = saved != null && (e.navigationType === 'traverse' || sessionStorage.getItem('cameFromHome') === norm(from.pathname)) ? +saved : null;
    sessionStorage.removeItem('cameFromHome');
  } else restoreY = null;
});
function restoreScroll(y: number) {
  ScrollTrigger.refresh();
  const go = () => { if (lenis) lenis.scrollTo(y, { immediate: true, force: true }); window.scrollTo(0, y); };
  go(); requestAnimationFrame(go); setTimeout(() => { ScrollTrigger.refresh(); go(); }, 120); setTimeout(go, 400);
}
// Resume preview: the browser's PDF viewer can grab focus when it finishes loading, and the browser then scrolls
// the page down to it. So the <object> is only created once the resume section is about to come into view.
function lazyPdf() {
  const boxes = document.querySelectorAll<HTMLElement>('[data-pdf-embed]');
  if (!boxes.length) return;
  const mount = (box: HTMLElement) => {
    if (box.dataset.mounted) return; box.dataset.mounted = '1';
    const o = document.createElement('object');
    o.type = 'application/pdf'; o.data = box.dataset.pdfEmbed!; o.className = 'w-full h-full';
    o.innerHTML = box.innerHTML; box.replaceChildren(o); box.classList.remove('flex', 'items-center', 'justify-center');
  };
  const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { mount(e.target as HTMLElement); io.unobserve(e.target); } }), { rootMargin: '200px 0px' });
  boxes.forEach(b => io.observe(b));
  cleanups.push(() => io.disconnect());
}

document.addEventListener('astro:page-load', () => {
  init();
  lazyPdf();
  setTimeout(unhide, 2500);
  const y = restoreY; restoreY = null;
  requestAnimationFrame(() => {
    if (y != null) { restoreScroll(y); return; }
    ScrollTrigger.refresh();
    if (location.hash) setTimeout(() => { ScrollTrigger.refresh(); scrollToHash(location.hash, true); }, 150);
  });
});
document.addEventListener('astro:before-swap', () => {
  cleanups.forEach(f => f()); cleanups = [];
  ScrollTrigger.getAll().forEach(t => t.kill()); gsap.globalTimeline.clear();
});
document.addEventListener('astro:after-swap', () => { if (restoreY == null) lenis?.scrollTo(0, { immediate: true }); });
