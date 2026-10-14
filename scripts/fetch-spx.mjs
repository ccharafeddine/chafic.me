// Build step: snapshot S&P 500 daily closes into public/data/spx.json as the fallback when /api/spx is unavailable.
// Never fails the build: keeps the previous snapshot if Yahoo can't be reached.
import { writeFileSync, existsSync } from 'node:fs';
const out = new URL('../public/data/spx.json', import.meta.url);
try {
  const r = await fetch('https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC?range=2y&interval=1d', { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const res = (await r.json()).chart.result[0], c = res.indicators.quote[0].close;
  const daily = res.timestamp.map((t, i) => [t, c[i]]).filter(p => p[1] != null).map(([t, v]) => [t, Math.round(v * 100) / 100]);
  writeFileSync(out, JSON.stringify({ symbol: 'S&P 500', daily, intraday: [], last: daily.at(-1)[1], asOf: daily.at(-1)[0], open: false, source: 'Yahoo Finance snapshot at build' }));
  console.log('spx.json:', daily.length, 'days');
} catch (e) { console.warn('spx snapshot skipped:', e.message, existsSync(out) ? '(keeping old file)' : '(no file)'); }
