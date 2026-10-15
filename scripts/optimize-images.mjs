// One-off/idempotent: makes resized WebP copies of every PNG/JPG screenshot under public/shots
// (<name>.1200.webp for detail views, <name>.640.webp for cards) and writes their sizes to src/data/img-manifest.json.
// Originals stay in place for the full-size "open image" links. Run: node scripts/optimize-images.mjs
import sharp from 'sharp'; import fs from 'fs'; import path from 'path';
const root='public/shots', man={};
for (const dir of fs.readdirSync(root)) for (const f of fs.readdirSync(path.join(root,dir))) {
  if (!/\.(png|jpe?g|webp)$/i.test(f) || /\.\d+\.webp$/.test(f)) continue;
  const src=path.join(root,dir,f), base=f.replace(/\.[^.]+$/,''); const m=await sharp(src).metadata();
  const e={w:m.width,h:m.height};
  for (const w of [640,1200]) { const out=path.join(root,dir,`${base}.${w}.webp`);
    if (!fs.existsSync(out)) await sharp(src).resize({width:Math.min(w,m.width)}).webp({quality:80}).toFile(out); }
  man[`${dir}/${f}`]=e;
}
fs.writeFileSync('src/data/img-manifest.json',JSON.stringify(man));
