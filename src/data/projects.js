// Content source: Cornelius's SITE_BRIEF_for_Vitruvius.md (Oct 14, 2026). Provisional; confirm with Chafic before launch.
// Keep-off: no P&L figures, no exchange names, no employer he applied to, no bare GitHub profile link.
const G='https://github.com/ccharafeddine/';
const RAW=[
{slug:'portfolio-analyzer',flagship:true,repo:'Portfolio_Analyzer',name:'Portfolio Analyzer',tag:'Portfolio analytics · Python · PySide6 · v3.0.0',
 desc:'A native desktop portfolio analytics app for Windows and macOS: backtest, optimize, measure risk, plan retirement and watch your holdings live, with a plain-English explanation for every result. Current version is v3.0.0 (Jul 2026), now in the Graphite design.',
 intent:'Began on Nov 27, 2025 as my University of St. Thomas MS capstone: a simple optimizer where you enter stocks and get optimal weights. I kept extending it far beyond the optimizer.',
 steps:[['Nov 2025','The capstone optimizer, built in Streamlit.'],['Dec 2025','Added Brinson-Fachler attribution, Black-Litterman, multi-factor regression, rolling risk and a hybrid data loader.'],['Then','Moved to a native PySide6 desktop app, with GitHub Actions CI that builds the installers automatically.'],['Graphite overhaul','Rebuilt in four phases: one canonical metrics module checked against reference libraries, the Graphite design, institutional risk and attribution analytics, and data-quality checks with fuller reports.']],
 features:['18-step analysis pipeline','Inception-aware backtest engine with trading costs','Optimization: Max-Sharpe, HRP and Black-Litterman, with cost-aware rebalance trades','VaR and expected shortfall by four methods, with a breach backtest','Historical stress tests and largest-drawdown table','Brinson-Fachler sector attribution','Fama-French factor loadings with t-stats','Capture ratios, tracking error and rolling Sharpe','Tax-aware analysis','Retirement Monte Carlo','DCF fair value','Comparison of up to 6 portfolios','Live Market Watch cockpit and price alerts','Data-quality checks with offline fallback','HTML, PDF and PPTX reports','Plain-English explanation for every chart'],
 skills:'Portfolio optimization methods, factor models, performance attribution, desktop GUI development, automated testing and CI/CD.',
 stats:[['110','commits'],['11','releases'],['~35.7k','lines of Python'],['316','pytest tests']],
 releases:G+'Portfolio_Analyzer/releases',
 demo:true,demoHref:'#demo',
 icon:'logo.svg',card:'card-1200x675.webp',
 extDemo:{href:'https://portfolio.chafic.me',label:'Full web app'},
 shots:['01-overview.webp', '02-risk.webp', '03-attribution.webp', '04-optimization.webp', '05-performance.webp', '06-live-market-watch.webp'],
 captions:[["Overview", "KPI strip with benchmark values, growth of $1M with drawdowns, period returns, risk snapshot and a sortable holdings table.", "Portfolio Analyzer Overview page in the Graphite theme"], ["Risk", "VaR and expected shortfall by four methods with a breach backtest, the largest drawdowns and historical stress tests.", "Portfolio Analyzer Risk page in the Graphite theme"], ["Attribution", "Contribution to active return by holding plus Brinson-Fachler sector attribution against the benchmark.", "Portfolio Analyzer Attribution page in the Graphite theme"], ["Optimization", "Efficient frontier with the capital allocation line, Max-Sharpe and HRP portfolios, and cost-aware rebalance trades.", "Portfolio Analyzer Optimization page in the Graphite theme"], ["Performance", "Capture ratios, tracking error, information ratio and rolling Sharpe over the full and common history.", "Portfolio Analyzer Performance page in the Graphite theme"], ["Live Market Watch", "A snap-to-grid cockpit of delayed quotes, an intraday chart, movers, day P&L, a heatmap and allocation.", "Portfolio Analyzer Live Market Watch page in the Graphite theme"]]},
{slug:'derivatives-underwriting-workbench',alias:'underwriting-workbench',repo:'Derivatives_Underwriting_Workbench',name:'Counterparty Credit Underwriting Workbench',tag:'Counterparty credit · Python · PySide6/Qt6 · Jul 2026',
 desc:'An OTC counterparty-credit underwriting simulator that runs on synthetic data.',
 intent:'Built after applying for a derivatives underwriting role, to learn what the job involves and to practice it. It includes a role-play simulator.',
 features:['Monte Carlo expected exposure and PFE','CVA/DVA/FVA','CSA collateral','Credit limits','A written underwriting memo with an approve or decline recommendation'],
 skills:'Exposure simulation, credit valuation adjustments, collateral mechanics, and writing a recommendation a reviewer can challenge.',
 shots:['exposure.png','cva.png','collateral.png','limits.png','memo.png','simulator-campaign.png'],demo:true,icon:'logo.svg'},
{slug:'crypto-quant-desk',repo:'crypto-quant-desk',name:'Crypto Quant Desk',tag:'Trading terminal · Python · Jun 2026',
 desc:'A Windows/macOS trading terminal for spot trading.',
 features:['Positions','Risk analytics','Live charts','A signal engine (advisory only)','Backtests','Order safety rails'],
 shots:['analysis.png','monitor.png','signals.png','trading.png'],icon:'logo.svg'},
{slug:'daily-melt',alias:'spx-income-trader',repo:'spx-income-trader',name:'SPX Income Trader',tag:'Systematic options strategy · Python · Jan 2026',caseStudy:true,
 desc:'An automated, momentum-based 0-DTE SPX options income strategy.',
 intent:'To turn my discretionary momentum approach into tested rules with hard limits: a daily loss circuit breaker, drawdown caps and position sizing from a loss budget.',
 steps:[['Backtest','Backtested it on history.'],['Live test','Live-tested it for about 1 month.'],['Outcome','It worked in backtests but not live. Intraday announcements kept reversing the morning momentum, so I paused it to rework the rules or wait for different conditions.']],
 skills:'Lesson: question the model when live results drift from the backtest.',
 shots:['icon.png'],icon:'logo.svg'},
{slug:'gifsmith',repo:'GifSmith',name:'GifSmith',tag:'Desktop app · TypeScript · Tauri',
 desc:'Fast, local-first desktop app for macOS and Windows that turns a slice of any video, local or from a link, into a high-quality animated GIF. Trim, crop, boomerang, presets. No accounts, no telemetry, no ads.',
 demo:true,demoHref:'https://gif.chafic.me',icon:'gifsmith.svg',
 shots:['desktop-app.png','web-demo.png','desktop-empty.png'],
 webNote:'The browser version downloads the ffmpeg video engine (about 31 MB) the first time you export; your browser keeps it after that. Files never leave your computer. In the browser, GIFs are up to 15 seconds long. Link import, gifski quality, frame-accurate trim handles, size targets and the gallery are in the desktop app only.'},
{slug:'clipsmith',repo:'ClipSmith',name:'ClipSmith',tag:'Desktop app · Rust · Tauri',
 desc:'Frame-accurate video clip cutter, reframer, and format converter for Mac and Windows, with subject-aware auto-reframe. Local-first, no accounts, no telemetry.',
 demo:true,demoHref:'https://clip.chafic.me',icon:'clipsmith.svg',
 shots:['desktop-app.png','web-demo.png','desktop-empty.png'],
 webNote:'The browser version downloads the ffmpeg video engine (about 31 MB) the first time you export; your browser keeps it after that. Files never leave your computer. In the browser, exports go up to 720p. Link import, auto-reframe, hardware encoding and any length or resolution are in the desktop app only.'},
{slug:'captionsmith',repo:'CaptionSmith',name:'CaptionSmith',tag:'Desktop app · Rust · whisper.cpp',
 desc:'On-device video captioning for macOS and Windows. Transcribe locally with whisper.cpp (GPU-accelerated), edit, style, add speaker labels, batch-process, then burn in or export .srt/.vtt/.ass. No accounts, no cloud.',
 demo:true,demoHref:'https://caption.chafic.me',icon:'captionsmith.svg',
 shots:['screenshot-1-load.png','screenshot-2-transcript.png','screenshot-3-style.png','web-demo.png','desktop-app.png'],
 webNote:'The browser version downloads the ffmpeg video engine (about 31 MB) the first time you export; your browser keeps it after that. Files never leave your computer. In the browser you import SRT/VTT files or type captions yourself. Whisper transcription, speaker labels, batch mode and link import are in the desktop app only.'},
{slug:'mediasmith',repo:'media-smith',name:'MediaSmith',tag:'Desktop + web app · Tauri 2 · Rust · SolidJS · FFmpeg',demo:true,demoHref:'https://media.chafic.me',icon:'mediasmith.svg',
 desc:'An open-source, local-first CapCut / Canva for the desktop and the browser, built for editing short videos end to end: import a file, cut on a multi-track timeline, add text and karaoke captions, reframe for vertical, and export to TikTok, Reels, Shorts, YouTube or GIF. No accounts, no watermark, no cloud.',
 features:['Templates by platform: TikTok/Reels, Shorts, YouTube, Instagram 4:5, square','Multi-track timeline: split, duplicate, zoom, snapping','Undo/redo and project save/open','Text presets and fade, pop or slide animations','Karaoke captions, SRT/VTT import and export','Export 9:16, 4:5, 16:9 and 1:1 MP4, plus GIF','Runs on the desktop (Tauri 2) and in the browser (ffmpeg.wasm)'],
 shots:['home.png','editor.png','export.png','web-hub.png','web-caption.png'],
 webNote:'The browser version downloads the ffmpeg video engine (about 31 MB) the first time you export; your browser keeps it after that. Files never leave your computer. In the browser, exports go up to 960p. Whisper auto-captions, speaker labels, AI rewrite, link import and hardware encoding are in the desktop app only.'},
{slug:'cube-solver',repo:'cube-solver',name:'Cube Solver',tag:'Web app · TypeScript · three.js',demo:true,demoHref:'https://cube.chafic.me',
 desc:'Set up any cube from 2x2 to 7x7 by scrambling, turning or painting stickers, and get solutions (optimal on the 2x2 and 3x3), next moves ranked by distance, and step-by-step breakdowns, all animated on a 3D cube you can grab, turn, zoom into and take apart.',
 features:['2x2 always optimal (full table of 3,674,160 positions)','3x3 Fast: Kociemba two-phase','3x3 Optimal: IDA* with pattern databases','4x4 to 7x7 by reduction','Next moves ranked by distance','Methods: Layer by layer, CFOP, Roux, ZZ','Paint a real cube on the 3D cube or a flat net','Solvability check','Exploded view','Share links, import/export','Notation lessons and app tour','Runs in the browser, as an offline PWA, and on Windows (Tauri 2)'],
 skills:'Search algorithms (two-phase, IDA*, pattern databases), 3D rendering with three.js, Web Workers and IndexedDB caching, accessible UI, automated tests and CI.',
 shots:['02-scrambled-solution.png','01-solved.png','03-solving.png','04-exploded.png'],icon:'suite-logo.svg'},
{slug:'chess-solver',repo:'chess-solver',name:'Chess Solver',tag:'Web + desktop app · TypeScript · Stockfish 18',demo:true,demoHref:'https://chess.chafic.me',
 desc:'Desktop chess analysis app for Windows and macOS powered by Stockfish 18. Set up any position and get engine-recommended moves with evaluations, tactical motifs, and principal variations.',
 shots:['screenshot-analysis.png','screenshot-tactics.png','screenshot-settings.png','screenshot-themes.png'],icon:'suite-logo.svg'},
{slug:'sudoku-solver',repo:'sudoku-solver',name:'Sudoku Solver',tag:'Web app · TypeScript · Vite',demo:true,demoHref:'https://sudoku.chafic.me',
 desc:'Play, generate or type in any 9x9 Sudoku. Solve it instantly, or get hints that name the trick a person would use next, outline the squares involved and explain it in plain words, then watch the whole puzzle solved step by step.',
 features:['Classic, Diagonal, Killer, Mini 6x6 and Mini 4x4','New puzzles from Easy to Fiendish, each with exactly one answer','Level rated by the hardest trick the human-style solver needs','Hints that name, outline and explain the next step','Step-by-step playback, forwards or backwards','Pencil marks and auto notes','Conflict and mistake highlighting','Undo/redo and a History timeline','Load and share puzzles by string or link','Lessons and an app tour','Runs in the browser, as an offline PWA, and on Windows (Tauri 2)'],
 shots:['screenshot-main.png','screenshot-steps.png','screenshot-killer.png','screenshot-lesson.png'],icon:'suite-logo.svg'},
{slug:'card-solver',repo:'card-solver',name:'Card Solver',tag:'Web + desktop app · TypeScript · Vite',demo:true,demoHref:'https://cards.chafic.me',
 desc:'Poker odds and perfect blackjack, with the game theory behind every choice explained in plain words. One app with two tabs: Texas Hold\'em equity, outs, pot odds and fold/call/raise EV, and exact blackjack EV for every action under any table rules.',
 features:['Poker equity vs random hands or a painted range, 1 to 8 opponents','Exact counting for one opponent up to 1.2M deals; Monte Carlo in a background thread otherwise','Outs with exact odds next to the rule of 4 and 2','Fold, call or raise EV bars (labelled simple model, not a solver)','Preflop reference charts for a 6-player table','Blackjack table rules with live house edge','Exact EV of hit, stand, double, split and surrender','Strategy chart, a scoring trainer and optional Hi-Lo counting with the Illustrious 18','Spotlight tour and 13 lessons with quizzes','Runs in the browser, as an offline PWA, and on Windows (Tauri 2)'],
 shots:['screenshot-poker.png','screenshot-blackjack.png','screenshot-aero.png','screenshot-tour.png','screenshot-mobile.png'],icon:'suite-logo.svg'},
];
// ── Section/suite metadata ──
// category: 'finance' → "Featured projects" (pinned horizontal scroller, in this order); 'hobby' → "Hobby projects".
// suite: groups hobby cards (see SUITES). Demo hook: set demo:true (+ optional demoHref) on any project and its card
// swaps "Live demo coming soon" for "● Live demo"; the detail page shows "Open live demo" pointing at demoHref or
// /projects/<slug>/demo (create src/pages/projects/<slug>/demo.astro, like the workbench demo).
const META={
 'derivatives-underwriting-workbench':{category:'finance'},'portfolio-analyzer':{category:'finance'},'crypto-quant-desk':{category:'finance'},'daily-melt':{category:'finance'},
 'chess-solver':{category:'hobby',suite:'puzzle'},'cube-solver':{category:'hobby',suite:'puzzle'},'sudoku-solver':{category:'hobby',suite:'puzzle'},'card-solver':{category:'hobby',suite:'puzzle'},
 'gifsmith':{category:'hobby',suite:'media'},'mediasmith':{category:'hobby',suite:'media'},'clipsmith':{category:'hobby',suite:'media'},'captionsmith':{category:'hobby',suite:'media'},
};
export const SUITES=[
 {id:'puzzle',name:'Puzzle-solving suite',emoji:'♞',blurb:'Engines that look at a position and find the answer.'},
 {id:'media',name:'Media suite',emoji:'🎬',blurb:'Four standalone, local-first video tools, each built for its own job: GifSmith makes GIFs, ClipSmith cuts and reframes clips, CaptionSmith captions on-device, and MediaSmith is a short-form video editor. Each one runs in the browser too.'},
];

export const projects=RAW.map(p=>({...p,url:G+p.repo,...META[p.slug]}));
export const finance=projects.filter(p=>p.category==='finance');
export const hobby=projects.filter(p=>p.category==='hobby');
// Demo link helpers: external demos (other sites/subdomains) open in a new tab; internal ones stay in this tab.
export const demoUrl=p=>p.demo?(p.demoHref??`/projects/${p.slug}/demo`):null;
export const extAttrs=h=>/^https?:\/\//.test(h??'')?{target:'_blank',rel:'noopener'}:{};
