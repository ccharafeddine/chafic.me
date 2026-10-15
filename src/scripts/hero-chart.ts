// Hero background: S&P 500 over the last 2 years (daily closes) with a calm "live-style" end.
// Data: /api/spx (Worker proxy of Yahoo, delayed quotes incl. today's 5-min bars) → fallback /data/spx.json
// (build-time snapshot) → fallback static synthetic line (no label). Never labeled "live": quotes are delayed.
// While the market is open and the API works, it re-polls every 60s and eases the head to the new value.
// Reduced motion: one static frame, no polling, no draw-in.
type Pt = { t: number; p: number };
type Feed = { daily: [number, number][]; intraday: [number, number][]; last: number; asOf: number; open: boolean };
const fmt = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

async function load(): Promise<{ f: Feed; api: boolean } | null> {
  for (const [u, api] of [['/api/spx', true], ['/data/spx.json', false]] as const) {
    try { const r = await fetch(u); if (r.ok) { const f = await r.json(); if (f.daily?.length > 20) return { f, api }; } } catch {}
  }
  return null;
}
function synthetic(): Pt[] {
  let p = 100; const out: Pt[] = [];
  for (let i = 0; i < 500; i++) { p *= 1 + 0.0005 + Math.sin(i / 23) * 0.002 + (Math.random() - 0.5) * 0.01; out.push({ t: i, p }); }
  return out;
}

export function heroChart(reduce: boolean): () => void {
  const c = document.getElementById('hero-canvas') as HTMLCanvasElement | null;
  const label = document.getElementById('hero-live');
  if (!c) return () => {};
  const x = c.getContext('2d')!;
  let W = 0, H = 0, alive = true, raf = 0, timer = 0, labeled = false;
  let pts: Pt[] = [], lo = 0, hi = 1, shown = 0, target = 0, reveal = reduce ? 1 : 0;
  let stroke: CanvasGradient | null = null, fill: CanvasGradient | null = null, onScreen = true, rs = 0;
  const size = () => { const d = Math.min(devicePixelRatio || 1, 2); W = c.width = c.offsetWidth * d; H = c.height = c.offsetHeight * d; stroke = fill = null; draw(); };
  const onResize = () => { clearTimeout(rs); rs = window.setTimeout(size, 150); };
  addEventListener('resize', onResize);
  // Only animate while the hero is on screen and the tab is visible.
  const io = new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; wake(); });
  io.observe(c);
  const onVis = () => wake();
  document.addEventListener('visibilitychange', onVis);
  function wake() { if (!reduce && pts.length && onScreen && !document.hidden && !raf && alive) raf = requestAnimationFrame(loop); }

  function draw() {
    x.clearRect(0, 0, W, H);
    if (pts.length < 2) return;
    const N = pts.length, m = Math.max(2, Math.ceil(N * reveal));
    const X = (i: number) => (i / (N - 1)) * W * 0.94;
    const Y = (p: number) => H * 0.85 - ((p - lo) / (hi - lo)) * H * 0.55;
    x.beginPath(); for (let i = 0; i < m; i++) { const p = i === N - 1 ? shown : pts[i].p; i ? x.lineTo(X(i), Y(p)) : x.moveTo(0, Y(p)); }
    if (!stroke) { stroke = x.createLinearGradient(0, 0, W, 0); stroke.addColorStop(0, 'rgba(167,139,250,0.12)'); stroke.addColorStop(1, 'rgba(56,189,248,0.75)'); }
    x.strokeStyle = stroke; x.lineWidth = 1.6 * Math.min(devicePixelRatio || 1, 2); x.lineJoin = 'round'; x.stroke();
    x.lineTo(X(m - 1), H); x.lineTo(0, H); x.closePath();
    if (!fill) { fill = x.createLinearGradient(0, H * 0.3, 0, H); fill.addColorStop(0, 'rgba(56,189,248,0.10)'); fill.addColorStop(1, 'rgba(56,189,248,0)'); }
    x.fillStyle = fill; x.fill();
    if (m === N && labeled) {
      const r = (2.5 + (reduce ? 0 : Math.sin(performance.now() / 700) * 0.8)) * Math.min(devicePixelRatio || 1, 2), hx = X(N - 1), hy = Y(shown);
      x.beginPath(); x.arc(hx, hy, r * 2.2, 0, 7); x.fillStyle = 'rgba(56,189,248,0.15)'; x.fill();
      x.beginPath(); x.arc(hx, hy, r, 0, 7); x.fillStyle = 'rgba(56,189,248,0.9)'; x.fill();
    }
  }
  let lastFrame = 0;
  const loop = (ts: number) => {
    raf = 0; if (!alive || !onScreen || document.hidden) return;
    raf = requestAnimationFrame(loop);
    // ~30fps while drawing in, ~12fps once only the head dot pulses
    if (ts - lastFrame < (reveal < 0.999 || Math.abs(target - shown) > 0.01 ? 33 : 80)) return; lastFrame = ts;
    reveal = Math.min(1, reveal + (1 - reveal) * 0.03 + 0.001); // slow ease-out draw-in over a few seconds
    shown += (target - shown) * 0.04; draw();
  };
  const fit = () => { const ps = pts.map(q => q.p); const mn = Math.min(...ps), mx = Math.max(...ps), pad = (mx - mn) * 0.08; lo = mn - pad; hi = mx + pad; };
  const setLabel = (f: Feed, dir: boolean | null) => {
    if (!label) return; labeled = true; label.hidden = false;
    const d = new Date(f.asOf * 1000);
    const when = f.open
      ? 'delayed · ' + d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'America/Chicago' }) + ' CT'
      : 'close ' + d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'America/New_York' });
    label.querySelector('[data-v]')!.textContent = fmt(f.last);
    label.querySelector('[data-asof]')!.textContent = when;
    label.dataset.dir = dir == null ? '' : dir ? 'up' : 'down';
  };
  const apply = (f: Feed) => {
    // daily closes, with today's latest delayed print as the head while the session is open
    pts = f.daily.map(([t, p]) => ({ t, p }));
    const lastDay = (t: number) => new Date(t * 1000).toISOString().slice(0, 10);
    if (f.last && pts.length) {
      if (lastDay(pts[pts.length - 1].t) === lastDay(f.asOf)) pts[pts.length - 1] = { t: f.asOf, p: f.last };
      else pts.push({ t: f.asOf, p: f.last });
    }
    fit();
  };

  (async () => {
    const got = await load();
    if (!alive) return;
    if (got) { apply(got.f); target = shown = pts[pts.length - 1].p; setLabel(got.f, null); }
    else { pts = synthetic(); fit(); target = shown = pts[pts.length - 1].p; }
    size();
    if (reduce) { draw(); return; }
    wake();
    if (got?.api && got.f.open) {
      timer = window.setInterval(async () => {
        if (document.hidden) return;
        try { const r = await fetch('/api/spx'); if (!r.ok) return; const f: Feed = await r.json(); if (!alive) return;
          const prev = target; apply(f); target = pts[pts.length - 1].p; setLabel(f, target === prev ? null : target > prev);
          if (!f.open) clearInterval(timer);
        } catch {}
      }, 60000);
    }
  })();

  return () => { alive = false; cancelAnimationFrame(raf); clearInterval(timer); removeEventListener('resize', onResize); io.disconnect(); document.removeEventListener('visibilitychange', onVis); };
}
