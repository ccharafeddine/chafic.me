import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
gsap.registerPlugin(ScrollTrigger);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
let lenis: Lenis | null = null;
let rafId = 0;
let cleanups: (() => void)[] = [];

function splitWords(el: HTMLElement) {
  if (el.dataset.split) return el.querySelectorAll('.w > span');
  el.dataset.split = '1';
  el.innerHTML = el.textContent!.trim().split(/\s+/).map(w => `<span class="w inline-block overflow-hidden align-bottom pb-1"><span class="inline-block">${w}</span></span>`).join(' ');
  return el.querySelectorAll('.w > span');
}

function heroCanvas() {
  const c = document.getElementById('hero-canvas') as HTMLCanvasElement | null;
  if (!c) return;
  const x = c.getContext('2d')!; let W = 0, H = 0; const N = 16; let paths: number[][] = [];
  const reset = () => { W = c.width = c.offsetWidth * devicePixelRatio; H = c.height = c.offsetHeight * devicePixelRatio; paths = Array.from({ length: N }, () => [H * (0.3 + Math.random() * 0.5)]); };
  reset(); addEventListener('resize', reset);
  const step = 4 * devicePixelRatio; let alive = true;
  const frame = () => { if (!alive) return; x.clearRect(0, 0, W, H);
    paths.forEach((p, i) => { p.push(p[p.length - 1] + (Math.random() - 0.5) * H * 0.02); if (p.length * step > W) p.shift();
      x.beginPath(); p.forEach((y, j) => j ? x.lineTo(j * step, y) : x.moveTo(0, y));
      x.strokeStyle = `rgba(${i % 2 ? '56,189,248' : '167,139,250'},${0.15 + 0.4 * (i / N)})`; x.lineWidth = 1.2 * devicePixelRatio; x.stroke(); });
    requestAnimationFrame(frame); };
  if (reduce) { for (let k = 0; k < 400; k++) paths.forEach(p => { p.push(p[p.length - 1] + (Math.random() - 0.5) * H * 0.02); if (p.length * step > W) p.shift(); }); alive = true; frame(); alive = false; }
  else frame();
  cleanups.push(() => { alive = false; removeEventListener('resize', reset); });
}

function tilt() {
  if (!matchMedia('(hover: hover)').matches || reduce) return;
  document.querySelectorAll<HTMLElement>('.tilt').forEach(el => {
    const rx = gsap.quickTo(el, 'rotationX', { duration: 0.4 }), ry = gsap.quickTo(el, 'rotationY', { duration: 0.4 });
    gsap.set(el, { transformPerspective: 900 });
    const mv = (e: PointerEvent) => { const r = el.getBoundingClientRect(); ry(((e.clientX - r.left) / r.width - 0.5) * 12); rx(-((e.clientY - r.top) / r.height - 0.5) * 12); };
    const lv = () => { rx(0); ry(0); };
    el.addEventListener('pointermove', mv); el.addEventListener('pointerleave', lv);
  });
}

function glow() {
  const g = document.getElementById('cursor-glow'); if (!g || reduce || !matchMedia('(hover: hover)').matches) return;
  const xTo = gsap.quickTo(g, 'x', { duration: 0.6, ease: 'power3' }), yTo = gsap.quickTo(g, 'y', { duration: 0.6, ease: 'power3' });
  const mv = (e: PointerEvent) => { xTo(e.clientX - 200); yTo(e.clientY - 200); gsap.to(g, { opacity: 1, duration: 0.3 }); };
  addEventListener('pointermove', mv); cleanups.push(() => removeEventListener('pointermove', mv));
}

function init() {
  heroCanvas();
  // progress bar works even with reduced motion (it's informative)
  gsap.to('#progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.2 } });
  if (reduce) return;
  if (!lenis) { lenis = new Lenis({ lerp: 0.1 }); lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(t => lenis!.raf(t * 1000)); gsap.ticker.lagSmoothing(0); }
  tilt(); glow();

  // hero: entrance + parallax/shrink on scroll
  if (document.getElementById('hero')) {
    gsap.from('.hero-in', { y: 40, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out' });
    const tl = gsap.timeline({ scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
    tl.to('#hero-content', { scale: 0.82, y: 120, opacity: 0, ease: 'none' }, 0)
      .to('#hero-canvas', { y: 220, ease: 'none' }, 0)
      .to('#hero-orb', { y: 300, x: -100, ease: 'none' }, 0)
      .to('#hero-orb2', { y: -150, x: 120, ease: 'none' }, 0)
      .to('#scroll-cue', { opacity: 0, ease: 'none' }, 0);
    gsap.to('#scroll-cue', { y: 8, repeat: -1, yoyo: true, duration: 0.9, ease: 'sine.inOut' });
  }

  // split-text headings
  document.querySelectorAll<HTMLElement>('.split').forEach(h => {
    gsap.from(splitWords(h), { yPercent: 110, rotate: 4, duration: 0.9, stagger: 0.06, ease: 'power4.out', scrollTrigger: { trigger: h, start: 'top 88%' } });
  });

  // generic reveals
  gsap.utils.toArray<HTMLElement>('.reveal').forEach(el => gsap.from(el, { y: 50, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } }));

  // featured projects: pinned horizontal on desktop, stagger on mobile
  const mm = gsap.matchMedia();
  mm.add('(min-width: 1024px)', () => {
    const track = document.getElementById('htrack'); if (!track) return;
    const dist = () => track.scrollWidth - innerWidth;
    const tw = gsap.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: '#hpin', start: 'center center', end: () => '+=' + dist(), pin: true, scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1 } });
    gsap.utils.toArray<HTMLElement>('.pcard').forEach(card => {
      gsap.from(card, { opacity: 0.25, scale: 0.9, rotationY: -18, transformPerspective: 900, ease: 'none',
        scrollTrigger: { trigger: card, containerAnimation: tw, start: 'left 100%', end: 'left 55%', scrub: true } });
    });
  });
  mm.add('(max-width: 1023px)', () => {
    gsap.utils.toArray<HTMLElement>('.pcard').forEach((c, i) => gsap.from(c, { x: i % 2 ? 60 : -60, y: 40, opacity: 0, rotate: i % 2 ? 3 : -3, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: c, start: 'top 92%' } }));
  });
  cleanups.push(() => mm.revert());

  // timeline draw
  if (document.getElementById('tl')) {
    gsap.fromTo('#tl-line', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '#tl', start: 'top 70%', end: 'bottom 60%', scrub: true } });
    gsap.utils.toArray<HTMLElement>('.tl-item').forEach(li => {
      gsap.from(li, { x: -40, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: li, start: 'top 78%' } });
      gsap.from(li.querySelector('.tl-dot'), { scale: 0, duration: 0.5, ease: 'back.out(3)', scrollTrigger: { trigger: li, start: 'top 78%' } });
    });
  }

  // skill chips float in
  gsap.utils.toArray<HTMLElement>('#skills .card').forEach(card => {
    gsap.from(card.querySelectorAll('.chip'), { y: () => gsap.utils.random(30, 70), x: () => gsap.utils.random(-30, 30), rotate: () => gsap.utils.random(-15, 15), opacity: 0, duration: 0.9, stagger: 0.05, ease: 'back.out(1.6)', scrollTrigger: { trigger: card, start: 'top 85%' } });
  });
  // bootcamp grid
  if (document.querySelector('.bc')) ScrollTrigger.batch('.bc', { start: 'top 92%', onEnter: b => gsap.from(b, { y: 40, opacity: 0, scale: 0.95, stagger: 0.06, duration: 0.6, ease: 'power2.out' }) });
}

document.addEventListener('astro:page-load', () => { init(); requestAnimationFrame(() => ScrollTrigger.refresh()); });
document.addEventListener('astro:before-swap', () => {
  cleanups.forEach(f => f()); cleanups = [];
  ScrollTrigger.getAll().forEach(t => t.kill()); gsap.globalTimeline.clear();
});
document.addEventListener('astro:after-swap', () => { lenis?.scrollTo(0, { immediate: true }); });
