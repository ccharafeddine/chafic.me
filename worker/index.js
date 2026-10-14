// Tiny Worker in front of the static assets. Only /api/spx runs code; everything else is served from ./dist.
// /api/spx proxies Yahoo's chart API for the S&P 500 (^GSPC): 2y daily closes + today's 5-minute bars.
// Yahoo quotes for indices are delayed; the client labels them that way. Cached at the edge for 60s.
const Y = 'https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC';
async function series(qs) {
  const r = await fetch(`${Y}?${qs}`, { headers: { 'User-Agent': 'Mozilla/5.0 chafic.me' }, cf: { cacheTtl: 60 } });
  if (!r.ok) throw new Error('yahoo ' + r.status);
  const res = (await r.json()).chart.result[0];
  const c = res.indicators.quote[0].close;
  return { meta: res.meta, pts: res.timestamp.map((t, i) => [t, c[i]]).filter(p => p[1] != null).map(([t, v]) => [t, Math.round(v * 100) / 100]) };
}
export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    if (url.pathname !== '/api/spx') return env.ASSETS.fetch(req);
    const cache = caches.default, key = new Request(url.origin + '/api/spx');
    let hit = await cache.match(key); if (hit) return hit;
    try {
      const [d, i] = await Promise.all([series('range=2y&interval=1d'), series('range=1d&interval=5m').catch(() => null)]);
      const m = (i ?? d).meta, tp = m.currentTradingPeriod?.regular, now = Date.now() / 1000;
      const body = { symbol: 'S&P 500', daily: d.pts, intraday: i?.pts ?? [], last: m.regularMarketPrice, asOf: m.regularMarketTime,
        open: !!tp && now >= tp.start && now <= tp.end, source: 'Yahoo Finance (delayed)' };
      const res = new Response(JSON.stringify(body), { headers: { 'content-type': 'application/json', 'cache-control': 'public, max-age=60' } });
      ctx.waitUntil(cache.put(key, res.clone())); return res;
    } catch (e) {
      return new Response(JSON.stringify({ error: String(e) }), { status: 502, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
    }
  },
};
