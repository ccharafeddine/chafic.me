type Data = { tickers: string[]; dates: string[]; prices: Record<string, number[]>; rf_irx_pct: (number | null)[] };
const SAMPLE: Record<string, number> = { SPY: 40, QQQ: 15, EFA: 15, AGG: 20, GLD: 5, VNQ: 5 };
const pct = (v: number, d = 1) => (v * 100).toFixed(d) + '%';
const mean = (a: number[]) => a.reduce((s, v) => s + v, 0) / a.length;
const sd = (a: number[]) => { const m = mean(a); return Math.sqrt(a.reduce((s, v) => s + (v - m) ** 2, 0) / (a.length - 1)); };

export async function initPortfolioDemo() {
  let D: Data;
  try { D = await (await fetch('/data/demo-prices.json')).json(); } catch { document.getElementById('pd-err')!.hidden = false; return; }
  const T = D.tickers, n = D.dates.length;
  document.getElementById('pd-range')!.textContent = `${D.dates[0]} to ${D.dates[n - 1]}`;
  const R = T.map(t => { const p = D.prices[t]; return p.slice(1).map((v, i) => v / p[i] - 1); });  // daily simple returns
  const rfD = D.rf_irx_pct.slice(1).map(v => (v ?? 0) / 100 / 252);
  const rfA = mean(rfD) * 252;
  const months = D.dates.slice(1).map(d => d.slice(0, 7));

  // backtest with monthly rebalancing to target weights
  const backtest = (w: number[]) => {
    let h = w.slice(), v = 1; const val = [1], ret: number[] = [];
    for (let i = 0; i < n - 1; i++) {
      if (i > 0 && months[i] !== months[i - 1]) h = w.map(x => x * v);
      const before = v; h = h.map((x, k) => x * (1 + R[k][i])); v = h.reduce((s, x) => s + x, 0);
      ret.push(v / before - 1); val.push(v);
    }
    return { val, ret };
  };
  const stats = (val: number[], ret: number[]) => {
    const yrs = (n - 1) / 252, cagr = val[val.length - 1] ** (1 / yrs) - 1, vol = sd(ret) * Math.sqrt(252);
    const ex = ret.map((r, i) => r - rfD[i]); const sharpe = mean(ex) / sd(ex) * Math.sqrt(252);
    const down = ex.map(x => Math.min(0, x)); const sortino = mean(ex) * 252 / (Math.sqrt(mean(down.map(x => x * x))) * Math.sqrt(252));
    let pk = 1, mdd = 0; const dd = val.map(v => { pk = Math.max(pk, v); const d = v / pk - 1; mdd = Math.min(mdd, d); return d; });
    const s = ret.slice().sort((a, b) => a - b), q = Math.floor(s.length * 0.05), var95 = -s[q], cvar = -mean(s.slice(0, q + 1));
    const b = R[T.indexOf('SPY')]; const mb = mean(b), mr = mean(ret);
    const beta = ret.reduce((acc, r, i) => acc + (r - mr) * (b[i] - mb), 0) / b.reduce((acc, x) => acc + (x - mb) ** 2, 0);
    return { total: val[val.length - 1] - 1, cagr, vol, sharpe, sortino, mdd, calmar: cagr / -mdd, var95, cvar, beta, dd };
  };
  // annualized mean/cov for the frontier (sample estimates)
  const mu = R.map(r => mean(r) * 252);
  const cov = R.map(a => R.map(b => { const ma = mean(a), mb = mean(b); return a.reduce((s, x, i) => s + (x - ma) * (b[i] - mb), 0) / (a.length - 1) * 252; }));
  const pstat = (w: number[]) => { const r = w.reduce((s, x, i) => s + x * mu[i], 0); let v = 0; w.forEach((a, i) => w.forEach((b, j) => v += a * b * cov[i][j])); return { r, s: Math.sqrt(v) }; };
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const cloud = Array.from({ length: 2500 }, (_, k) => { let w = T.map(() => -Math.log(rnd())); if (k % 3 === 0) w = w.map(x => x ** 3); const s = w.reduce((a, b) => a + b); w = w.map(x => x / s); return { w, ...pstat(w) }; });
  // max-Sharpe ORP: best of the random cloud, then refined by random local search (long-only)
  let orp = cloud.reduce((a, b) => ((b.r - rfA) / b.s > (a.r - rfA) / a.s ? b : a));
  for (let it = 0; it < 4000; it++) { let w = orp.w.map(x => Math.max(0, x + (rnd() - 0.5) * 0.04)); const s = w.reduce((a, b) => a + b); w = w.map(x => x / s); const p = pstat(w); if ((p.r - rfA) / p.s > (orp.r - rfA) / orp.s) orp = { w, ...p }; }
  const orpBT = backtest(orp.w), orpS = stats(orpBT.val, orpBT.ret);
  const spyW = T.map(t => (t === 'SPY' ? 1 : 0)), spyBT = backtest(spyW), spyS = stats(spyBT.val, spyBT.ret);

  const inputs = [...document.querySelectorAll<HTMLInputElement>('[data-w]')];
  const getW = () => { const raw = T.map(t => +inputs.find(i => i.dataset.w === t)!.value); const s = raw.reduce((a, b) => a + b, 0) || 1; return raw.map(x => x / s); };
  const setW = (w: Record<string, number>) => { inputs.forEach(i => i.value = String(Math.round(w[i.dataset.w!] ?? 0))); render(); };

  const X = (i: number, W: number) => (i / (n - 1)) * W;
  const path = (vals: number[], W: number, H: number, lo: number, hi: number) => vals.map((v, i) => `${i ? 'L' : 'M'}${X(i, W).toFixed(1)},${(H - ((v - lo) / (hi - lo)) * H).toFixed(1)}`).join('');
  const yearTicks = (W: number, H: number) => D.dates.map((d, i) => [d, i] as const).filter(([d], i, a) => i > 0 && d.slice(0, 4) !== a[i - 1][0].slice(0, 4))
    .map(([d, i]) => `<line x1="${X(i, W)}" x2="${X(i, W)}" y1="0" y2="${H}" stroke="#1f2937"/><text x="${X(i, W) + 3}" y="${H - 4}" fill="#6b7280" font-size="10">${d.slice(0, 4)}</text>`).join('');

  function render() {
    const w = getW();
    T.forEach((t, k) => { document.querySelector(`[data-wv="${t}"]`)!.textContent = (w[k] * 100).toFixed(0) + '%'; });
    const raw = inputs.reduce((s, i) => s + +i.value, 0);
    document.getElementById('pd-sum')!.textContent = raw === 100 ? '100%' : `${raw}% → scaled to 100%`;
    const bt = backtest(w), S = stats(bt.val, bt.ret);
    // growth
    const all = [...bt.val, ...spyBT.val, ...orpBT.val], lo = Math.min(...all) * 0.97, hi = Math.max(...all) * 1.03;
    document.getElementById('pd-growth')!.innerHTML = yearTicks(800, 220) +
      [[spyBT.val, '#9ca3af'], [orpBT.val, '#a78bfa'], [bt.val, '#38bdf8']].map(([v, c]) => `<path d="${path(v as number[], 800, 220, lo, hi)}" fill="none" stroke="${c}" stroke-width="1.6" vector-effect="non-scaling-stroke"/>`).join('') +
      `<text x="796" y="14" text-anchor="end" fill="#e5e7eb" font-size="12">$${(bt.val[bt.val.length - 1] * 10000).toLocaleString('en-US', { maximumFractionDigits: 0 })}</text>`;
    // table
    const rows: [string, (s: any) => string][] = [['Total return', s => pct(s.total)], ['Annualized return (CAGR)', s => pct(s.cagr)], ['Annualized volatility', s => pct(s.vol)], ['Sharpe ratio', s => s.sharpe.toFixed(2)], ['Sortino ratio', s => s.sortino.toFixed(2)], ['Max drawdown', s => pct(s.mdd)], ['Calmar ratio', s => s.calmar.toFixed(2)], ['Daily VaR 95% (historical)', s => pct(s.var95, 2)], ['Daily CVaR 95%', s => pct(s.cvar, 2)], ['Beta vs SPY', s => s.beta.toFixed(2)]];
    document.getElementById('pd-table')!.innerHTML = `<tr class="text-gray-500 text-xs"><th class="text-left font-normal pb-2"></th><th class="text-right font-normal text-accent">Active</th><th class="text-right font-normal">Passive (SPY)</th><th class="text-right font-normal text-accent2">ORP</th></tr>` +
      rows.map(([l, f]) => `<tr class="border-t border-white/5"><td class="py-1.5 text-gray-400 font-sans">${l}</td><td class="text-right text-white">${f(S)}</td><td class="text-right text-gray-400">${f(spyS)}</td><td class="text-right text-gray-300">${f(orpS)}</td></tr>`).join('') +
      `<tr class="border-t border-white/5"><td class="py-1.5 text-gray-500 font-sans text-xs" colspan="4">Risk-free rate: ${pct(rfA, 2)} average 13-week T-bill (^IRX). ORP weights: ${T.map((t, k) => orp.w[k] > 0.005 ? `${t} ${(orp.w[k] * 100).toFixed(0)}%` : '').filter(Boolean).join(', ')} (estimated in-sample, so hindsight-biased).</td></tr>`;
    // drawdown
    const ddLo = Math.min(...S.dd, ...spyS.dd) * 1.05;
    document.getElementById('pd-dd')!.innerHTML = yearTicks(800, 160) +
      `<path d="${path(spyS.dd, 800, 160, ddLo, 0)}" fill="none" stroke="#9ca3af" stroke-width="1.2" vector-effect="non-scaling-stroke"/>` +
      `<path d="${path(S.dd, 800, 160, ddLo, 0)}L800,0L0,0Z" fill="rgba(248,113,113,.18)" stroke="#f87171" stroke-width="1.4" vector-effect="non-scaling-stroke"/>` +
      `<text x="796" y="152" text-anchor="end" fill="#f87171" font-size="11">max ${pct(S.mdd)}</text>`;
    // frontier
    const me = pstat(w), sp = pstat(spyW), pts = [...cloud, me, orp, sp];
    const sx = Math.max(...pts.map(p => p.s)) * 1.08, rlo = Math.min(0, ...pts.map(p => p.r)), rhi = Math.max(...pts.map(p => p.r)) * 1.12;
    const fx = (s: number) => 40 + (s / sx) * 460, fy = (r: number) => 270 - ((r - rlo) / (rhi - rlo)) * 250;
    const shs = cloud.map(p => (p.r - rfA) / p.s), smin = Math.min(...shs), smax = Math.max(...shs);
    const slope = (orp.r - rfA) / orp.s;
    document.getElementById('pd-ef')!.innerHTML =
      `<line x1="40" y1="270" x2="500" y2="270" stroke="#374151"/><line x1="40" y1="20" x2="40" y2="270" stroke="#374151"/>` +
      [0.1, 0.2, 0.3].filter(v => v < sx).map(v => `<text x="${fx(v)}" y="285" fill="#6b7280" font-size="10" text-anchor="middle">${v * 100}%</text>`).join('') +
      [0, 0.05, 0.1, 0.15, 0.2].filter(v => v >= rlo && v <= rhi).map(v => `<text x="34" y="${fy(v) + 3}" fill="#6b7280" font-size="10" text-anchor="end">${v * 100}%</text>`).join('') +
      cloud.map((p, i) => `<circle cx="${fx(p.s).toFixed(1)}" cy="${fy(p.r).toFixed(1)}" r="1.6" fill="hsl(${200 + 80 * (shs[i] - smin) / (smax - smin)} 80% 60% / .35)"/>`).join('') +
      `<line x1="${fx(0)}" y1="${fy(rfA)}" x2="${fx(sx)}" y2="${fy(rfA + slope * sx)}" stroke="#a78bfa" stroke-dasharray="4 4"/>` +
      `<circle cx="${fx(orp.s)}" cy="${fy(orp.r)}" r="6" fill="#a78bfa"/><text x="${fx(orp.s) + 9}" y="${fy(orp.r) - 6}" fill="#c4b5fd" font-size="11">Max-Sharpe ORP</text>` +
      `<circle cx="${fx(sp.s)}" cy="${fy(sp.r)}" r="5" fill="#9ca3af"/><text x="${fx(sp.s) + 8}" y="${fy(sp.r) + 4}" fill="#9ca3af" font-size="11">SPY</text>` +
      `<circle cx="${fx(me.s)}" cy="${fy(me.r)}" r="6" fill="#38bdf8" stroke="#0b0f17" stroke-width="2"/><text x="${fx(me.s) + 9}" y="${fy(me.r) + 14}" fill="#7dd3fc" font-size="11">Your mix</text>`;
    // histogram + VaR
    const lo2 = -0.04, hi2 = 0.04, bins = 40, cnt = Array(bins).fill(0);
    bt.ret.forEach(r => { const b = Math.min(bins - 1, Math.max(0, Math.floor((r - lo2) / (hi2 - lo2) * bins))); cnt[b]++; });
    const cm = Math.max(...cnt), bw = 480 / bins, vx = 20 + ((-S.var95 - lo2) / (hi2 - lo2)) * 480;
    document.getElementById('pd-hist')!.innerHTML = cnt.map((c, i) => `<rect x="${20 + i * bw}" y="${180 - c / cm * 160}" width="${bw - 1}" height="${c / cm * 160}" fill="${lo2 + (i + 0.5) * (hi2 - lo2) / bins < -S.var95 ? '#f87171' : '#38bdf8'}" opacity=".7"/>`).join('') +
      `<line x1="${vx}" x2="${vx}" y1="10" y2="180" stroke="#fbbf24" stroke-dasharray="3 3"/><text x="${vx - 4}" y="20" fill="#fbbf24" font-size="10" text-anchor="end">VaR 95%</text>` +
      [-0.04, -0.02, 0, 0.02, 0.04].map(v => `<text x="${20 + (v - lo2) / (hi2 - lo2) * 480}" y="195" fill="#6b7280" font-size="10" text-anchor="middle">${v * 100}%</text>`).join('');
    document.getElementById('pd-var')!.textContent = `On 95% of days the loss was smaller than ${pct(S.var95, 2)}. The average of the worst 5% of days was ${pct(-S.cvar, 2)}. Returns beyond ±4% are counted in the end bins.`;
  }
  // correlation (static)
  const corr = cov.map((r, i) => r.map((c, j) => c / Math.sqrt(cov[i][i] * cov[j][j])));
  document.getElementById('pd-corr')!.innerHTML = `<table class="text-xs font-mono mx-auto"><tr><td></td>${T.map(t => `<th class="px-2 pb-1 text-gray-400 font-normal">${t}</th>`).join('')}</tr>` +
    corr.map((r, i) => `<tr><th class="pr-2 text-gray-400 font-normal text-right">${T[i]}</th>${r.map(c => `<td class="w-12 h-9 text-center" style="background:${c >= 0 ? `rgba(56,189,248,${c * 0.7})` : `rgba(248,113,113,${-c * 0.7})`};color:${Math.abs(c) > 0.6 ? '#0b0f17' : '#e5e7eb'}">${c.toFixed(2)}</td>`).join('')}</tr>`).join('') + '</table>';

  inputs.forEach(i => i.addEventListener('input', render));
  document.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach(b => b.addEventListener('click', () => {
    const p = b.dataset.preset;
    if (p === 'sample') setW(SAMPLE);
    else if (p === 'equal') setW(Object.fromEntries(T.map(t => [t, 100 / T.length])));
    else if (p === '6040') setW({ SPY: 60, AGG: 40 });
    else setW(Object.fromEntries(T.map((t, k) => [t, orp.w[k] * 100])));
  }));
  render();
}
