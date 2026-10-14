// Hero background: a calm "live" BTC/USD chart.
// Seeds with the last ~24h of 15-minute candles from Coinbase (CORS-open, no key), falls back to CoinGecko,
// then polls the spot ticker every 20s and eases the line toward each new print.
// If every fetch fails it draws a static synthetic line (no label). Reduced motion: one static frame, no polling.
type Pt = { t: number; p: number };
const fmt = (n: number) => '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 });

async function seed(): Promise<Pt[] | null> {
  try {
    const r = await fetch('https://api.exchange.coinbase.com/products/BTC-USD/candles?granularity=900');
    if (!r.ok) throw 0;
    const rows: number[][] = await r.json(); // [time, low, high, open, close, volume], newest first
    const pts = rows.map(c => ({ t: c[0] * 1000, p: c[4] })).sort((a, b) => a.t - b.t);
    const cut = Date.now() - 24 * 3600e3;
    const out = pts.filter(x => x.t >= cut);
    if (out.length > 10) return out;
  } catch {}
  try {
    const r = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1');
    if (!r.ok) throw 0;
    const j = await r.json();
    const out = (j.prices as number[][]).map(([t, p]) => ({ t, p }));
    if (out.length > 10) return out;
  } catch {}
  return null;
}
async function tick(): Promise<number | null> {
  try { const r = await fetch('https://api.exchange.coinbase.com/products/BTC-USD/ticker'); if (r.ok) { const j = await r.json(); const v = +j.price; if (v > 0) return v; } } catch {}
  try { const r = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'); if (r.ok) { const j = await r.json(); const v = +j.bitcoin?.usd; if (v > 0) return v; } } catch {}
  return null;
}
function synthetic(): Pt[] {
  const now = Date.now(); let p = 100; const out: Pt[] = [];
  for (let i = 96; i >= 0; i--) { p *= 1 + (Math.sin(i / 7) * 0.002 + (Math.random() - 0.5) * 0.006); out.push({ t: now - i * 900e3, p }); }
  return out;
}

export function heroChart(reduce: boolean): () => void {
  const c = document.getElementById('hero-canvas') as HTMLCanvasElement | null;
  const label = document.getElementById('hero-live');
  if (!c) return () => {};
  const x = c.getContext('2d')!;
  let W = 0, H = 0, alive = true, raf = 0, timer = 0, live = false;
  let pts: Pt[] = [];
  let lo = 0, hi = 1, tgtLo = 0, tgtHi = 1; // eased y-range
  let shown = 0, target = 0;               // eased last price
  const size = () => { const d = devicePixelRatio || 1; W = c.width = c.offsetWidth * d; H = c.height = c.offsetHeight * d; };
  size(); addEventListener('resize', size);

  const range = () => { const ps = pts.map(q => q.p).concat(target); const mn = Math.min(...ps), mx = Math.max(...ps), pad = (mx - mn) * 0.25 || mx * 0.01; tgtLo = mn - pad; tgtHi = mx + pad; };
  const draw = () => {
    x.clearRect(0, 0, W, H);
    if (pts.length < 2) return;
    const now = live ? Date.now() : pts[pts.length - 1].t, span = 24 * 3600e3, t0 = now - span;
    const X = (t: number) => ((t - t0) / span) * W * 0.92;            // leave right margin for the "head"
    const Y = (p: number) => H * 0.82 - ((p - lo) / (hi - lo)) * H * 0.5; // keep in mid-lower band behind the text
    const series = pts.slice(0, -1).concat({ t: now, p: shown });
    x.beginPath(); series.forEach((q, i) => i ? x.lineTo(X(q.t), Y(q.p)) : x.moveTo(X(q.t), Y(q.p)));
    const g = x.createLinearGradient(0, 0, W, 0); g.addColorStop(0, 'rgba(167,139,250,0.15)'); g.addColorStop(1, 'rgba(56,189,248,0.75)');
    x.strokeStyle = g; x.lineWidth = 1.6 * devicePixelRatio; x.lineJoin = 'round'; x.stroke();
    const last = series[series.length - 1];
    x.lineTo(X(last.t), H); x.lineTo(X(series[0].t), H); x.closePath();
    const f = x.createLinearGradient(0, H * 0.3, 0, H); f.addColorStop(0, 'rgba(56,189,248,0.10)'); f.addColorStop(1, 'rgba(56,189,248,0)');
    x.fillStyle = f; x.fill();
    if (live) { // gentle pulsing head dot
      const r = (2.5 + Math.sin(performance.now() / 600) * 0.8) * devicePixelRatio;
      x.beginPath(); x.arc(X(last.t), Y(last.p), r * 2.2, 0, 7); x.fillStyle = 'rgba(56,189,248,0.15)'; x.fill();
      x.beginPath(); x.arc(X(last.t), Y(last.p), r, 0, 7); x.fillStyle = 'rgba(56,189,248,0.9)'; x.fill();
    }
  };
  let lastFrame = 0;
  const loop = (ts: number) => {
    if (!alive) return; raf = requestAnimationFrame(loop);
    if (ts - lastFrame < 33) return; lastFrame = ts; // ~30fps is plenty for a slow chart
    const k = 0.04; shown += (target - shown) * k; lo += (tgtLo - lo) * k; hi += (tgtHi - hi) * k;
    draw();
  };
  const setLabel = (p: number, up: boolean | null) => {
    if (!label) return;
    label.hidden = false;
    const v = label.querySelector('[data-v]'); if (v) v.textContent = fmt(p);
    label.dataset.dir = up == null ? '' : up ? 'up' : 'down';
  };

  (async () => {
    const s = await seed();
    if (!alive) return;
    live = !!s; pts = s ?? synthetic();
    target = shown = pts[pts.length - 1].p; range(); lo = tgtLo; hi = tgtHi;
    if (live) setLabel(target, null);
    if (reduce || !live) { draw(); return; } // static frame
    raf = requestAnimationFrame(loop);
    const poll = async () => {
      if (document.hidden) return;
      const v = await tick(); if (!alive || v == null) return;
      const prev = target;
      // commit the eased head as a real point every ~5 min, so the line grows like a live chart
      const lastT = pts[pts.length - 1].t;
      if (Date.now() - lastT > 300e3) pts.push({ t: Date.now(), p: v }); else pts[pts.length - 1] = { t: lastT, p: v };
      while (pts.length > 2 && pts[1].t < Date.now() - 24 * 3600e3) pts.shift();
      target = v; range(); setLabel(v, v === prev ? null : v > prev);
    };
    timer = window.setInterval(poll, 20000);
  })();

  return () => { alive = false; cancelAnimationFrame(raf); clearInterval(timer); removeEventListener('resize', size); };
}
