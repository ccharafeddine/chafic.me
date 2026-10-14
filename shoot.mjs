import { chromium } from 'playwright';
const B='http://localhost:4321';
const b=await chromium.launch();
const ctx=await b.newContext({viewport:{width:1440,height:900},recordVideo:{dir:'shots/vid',size:{width:1280,height:800}}});
const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.goto(B+'/',{waitUntil:'networkidle'}); await p.waitForTimeout(1500);
const H=await p.evaluate(()=>document.documentElement.scrollHeight-innerHeight);
let n=0; const marks=[0,0.06,0.14,0.22,0.3,0.45,0.6,0.75,1];
for(let i=0;i<=120;i++){ const y=H*i/120; await p.mouse.move(400+400*Math.sin(i/9),400+200*Math.cos(i/7)); await p.mouse.wheel(0,H/120); await p.waitForTimeout(110);
 if(marks.some(m=>Math.abs(m*120-i)<0.5)){ await p.waitForTimeout(500); await p.screenshot({path:`shots/scroll-${String(n++).padStart(2,'0')}.png`}); } }
await p.goto(B+'/',{waitUntil:'networkidle'}); await p.waitForTimeout(800);
await p.click('a[href="/projects/derivatives-underwriting-workbench/demo"]'); await p.waitForTimeout(1500);
await p.screenshot({path:'shots/workbench-demo.png',fullPage:true});
await p.fill('#vol','35'); await p.dispatchEvent('#vol','input'); await p.waitForTimeout(800);
console.log('cva',await p.textContent('#k-cva'),'errors',errs);
await ctx.close();
// mobile check
const m=await b.newPage({viewport:{width:390,height:844},isMobile:true});
await m.goto(B+'/#projects',{waitUntil:'networkidle'}); await m.waitForTimeout(1500); await m.screenshot({path:'shots/mobile-projects.png'});
// no-JS check
const nj=await (await b.newContext({javaScriptEnabled:false,viewport:{width:1440,height:900}})).newPage();
await nj.goto(B+'/'); await nj.screenshot({path:'shots/nojs-home.png',fullPage:true});
await b.close();
