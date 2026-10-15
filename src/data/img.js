import man from './img-manifest.json';
// Responsive WebP attrs for a screenshot in public/shots/<repo>/<file>. SVGs pass through unchanged.
export function img(repo, file, sizes = '100vw') {
  const src = `/shots/${repo}/${file}`, m = man[`${repo}/${file}`];
  if (!m) return { src, decoding: 'async' };
  const b = `/shots/${repo}/${file.replace(/\.[^.]+$/, '')}`;
  const ws = [640, 1200].filter((w, i) => i === 0 || m.w > 640);
  return { src: `${b}.${m.w > 640 ? 1200 : 640}.webp`, srcset: ws.map(w => `${b}.${w}.webp ${Math.min(w, m.w)}w`).join(', '), sizes, width: m.w, height: m.h, decoding: 'async' };
}
