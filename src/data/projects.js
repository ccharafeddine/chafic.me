// Content source: Cornelius's SITE_BRIEF_for_Vitruvius.md (Oct 14, 2026). Provisional; confirm with Chafic before launch.
// Keep-off: no P&L figures, no exchange names, no employer he applied to, no bare GitHub profile link.
const G='https://github.com/ccharafeddine/';
const RAW=[
{slug:'portfolio-analyzer',flagship:true,repo:'Portfolio_Analyzer',name:'Portfolio Analyzer',tag:'Portfolio analytics · Python · PySide6 · v3.0.0',
 desc:'A native desktop portfolio analytics app for Windows and macOS. Current version is v3.0.0 (Jul 2026).',
 intent:'Began on Nov 27, 2025 as my University of St. Thomas MS capstone: a simple optimizer where you enter stocks and get optimal weights. I kept extending it far beyond the optimizer.',
 steps:[['Nov 2025','The capstone optimizer, built in Streamlit.'],['Dec 2025','Added Brinson-Fachler attribution, Black-Litterman, multi-factor regression, rolling risk and a hybrid data loader.'],['Then','Moved to a native PySide6 desktop app, with GitHub Actions CI that builds the installers automatically.']],
 features:['18-step pipeline','Backtesting with trading costs','Optimization: Max-Sharpe, HRP and Black-Litterman','Fama-French 3-, 4- and 5-factor loadings','Tax-aware analysis','Retirement Monte Carlo','DCF fair value','Comparison of up to 6 portfolios','Rebalancing trades','Live market watch and alerts','HTML, PDF and PPTX reports'],
 skills:'Portfolio optimization methods, factor models, performance attribution, desktop GUI development, automated testing and CI/CD.',
 stats:[['110','commits'],['11','releases'],['~35.7k','lines of Python'],['237','pytest tests']],
 releases:G+'Portfolio_Analyzer/releases',
 demo:true,demoHref:'#demo',
 shots:['01-overview.png','02-performance.png','03-risk.png','04-attribution.png','06-optimization.png','07-forecast.png']},
{slug:'derivatives-underwriting-workbench',alias:'underwriting-workbench',repo:'Derivatives_Underwriting_Workbench',name:'Counterparty Credit Underwriting Workbench',tag:'Counterparty credit · Python · PySide6/Qt6 · Jul 2026',
 desc:'An OTC counterparty-credit underwriting simulator that runs on synthetic data.',
 intent:'Built after applying for a derivatives underwriting role, to learn what the job involves and to practice it. It includes a role-play simulator.',
 features:['Monte Carlo expected exposure and PFE','CVA/DVA/FVA','CSA collateral','Credit limits','A written underwriting memo with an approve or decline recommendation'],
 skills:'Exposure simulation, credit valuation adjustments, collateral mechanics, and writing a recommendation a reviewer can challenge.',
 shots:['exposure.png','cva.png','collateral.png','limits.png','memo.png','simulator-campaign.png'],demo:true},
{slug:'crypto-quant-desk',repo:'crypto-quant-desk',name:'Crypto Quant Desk',tag:'Trading terminal · Python · Jun 2026',
 desc:'A Windows/macOS trading terminal for spot trading.',
 features:['Positions','Risk analytics','Live charts','A signal engine (advisory only)','Backtests','Order safety rails'],
 shots:['analysis.png','monitor.png','signals.png','trading.png']},
{slug:'daily-melt',alias:'spx-income-trader',repo:'spx-income-trader',name:'SPX Income Trader',tag:'Systematic options strategy · Python · Jan 2026',caseStudy:true,
 desc:'An automated, momentum-based 0-DTE SPX options income strategy.',
 intent:'To turn my discretionary momentum approach into tested rules with hard limits: a daily loss circuit breaker, drawdown caps and position sizing from a loss budget.',
 steps:[['Backtest','Backtested it on history.'],['Live test','Live-tested it for about 1 month.'],['Outcome','It worked in backtests but not live. Intraday announcements kept reversing the morning momentum, so I paused it to rework the rules or wait for different conditions.']],
 skills:'Lesson: question the model when live results drift from the backtest.',
 shots:['icon.png']},
{slug:'chess-solver',repo:'chess-solver',name:'Chess Solver',tag:'Web + desktop app · TypeScript · Stockfish 18',demo:true,demoHref:'https://chess.chafic.me',
 desc:'Desktop chess analysis app for Windows and macOS powered by Stockfish 18. Set up any position and get engine-recommended moves with evaluations, tactical motifs, and principal variations.',
 shots:['screenshot-analysis.png','screenshot-tactics.png','screenshot-settings.png','screenshot-themes.png'],icon:'logo.png'},
{slug:'gifsmith',repo:'GifSmith',name:'GifSmith',tag:'Desktop app · TypeScript · Tauri',pipe:1,
 desc:'Fast, local-first desktop app for macOS and Windows that turns a slice of any video, local or from a link, into a high-quality animated GIF. Trim, crop, boomerang, presets. No accounts, no telemetry, no ads.',
 shots:['gifsmith-icon.svg']},
{slug:'clipsmith',repo:'ClipSmith',name:'ClipSmith',tag:'Desktop app · Rust · Tauri',pipe:2,
 desc:'Frame-accurate video clip cutter, reframer, and format converter for Mac and Windows, with subject-aware auto-reframe. Local-first, no accounts, no telemetry.',
 shots:['clipsmith-icon.svg']},
{slug:'captionsmith',repo:'CaptionSmith',name:'CaptionSmith',tag:'Desktop app · Rust · whisper.cpp',pipe:3,
 desc:'On-device video captioning for macOS and Windows. Transcribe locally with whisper.cpp (GPU-accelerated), edit, style, add speaker labels, batch-process, then burn in or export .srt/.vtt/.ass. No accounts, no cloud.',
 shots:['screenshot-1-load.png','screenshot-2-transcript.png','screenshot-3-style.png']},
{slug:'cube-solver',repo:'cube-solver',name:'Cube Solver',tag:'Web app · TypeScript · three.js',demo:true,demoHref:'https://cube.chafic.me',
 desc:'Set up any cube from 2x2 to 7x7 by scrambling, turning or painting stickers, and get solutions (optimal on the 2x2 and 3x3), next moves ranked by distance, and step-by-step breakdowns, all animated on a 3D cube you can grab, turn, zoom into and take apart.',
 features:['2x2 always optimal (full table of 3,674,160 positions)','3x3 Fast: Kociemba two-phase','3x3 Optimal: IDA* with pattern databases','4x4 to 7x7 by reduction','Next moves ranked by distance','Methods: Layer by layer, CFOP, Roux, ZZ','Paint a real cube on the 3D cube or a flat net','Solvability check','Exploded view','Share links, import/export','Notation lessons and app tour','Runs in the browser, as an offline PWA, and on Windows (Tauri 2)'],
 skills:'Search algorithms (two-phase, IDA*, pattern databases), 3D rendering with three.js, Web Workers and IndexedDB caching, accessible UI, automated tests and CI.',
 shots:['02-scrambled-solution.png','01-solved.png','03-solving.png','04-exploded.png'],icon:'icon.svg'},
];
// ── Section/suite metadata ──
// category: 'finance' → "Featured projects" (pinned horizontal scroller, in this order); 'hobby' → "Side projects".
// suite: groups hobby cards (see SUITES). Demo hook: set demo:true (+ optional demoHref) on any project and its card
// swaps "Live demo coming soon" for "● Live demo"; the detail page shows "Open live demo" pointing at demoHref or
// /projects/<slug>/demo (create src/pages/projects/<slug>/demo.astro, like the workbench demo).
const META={
 'derivatives-underwriting-workbench':{category:'finance'},'portfolio-analyzer':{category:'finance'},'crypto-quant-desk':{category:'finance'},'daily-melt':{category:'finance'},
 'chess-solver':{category:'hobby',suite:'puzzle'},'cube-solver':{category:'hobby',suite:'puzzle'},
 'gifsmith':{category:'hobby',suite:'media'},'clipsmith':{category:'hobby',suite:'media'},'captionsmith':{category:'hobby',suite:'media'},
};
export const SUITES=[
 {id:'puzzle',name:'Puzzle-solving suite',emoji:'♞',blurb:'Engines that look at a position and find the answer.'},
 {id:'media',name:'Media suite',emoji:'🎬',blurb:'Local-first video tools that hand off to each other: GifSmith → ClipSmith → CaptionSmith.'},
];

export const projects=RAW.map(p=>({...p,url:G+p.repo,...META[p.slug]}));
export const finance=projects.filter(p=>p.category==='finance');
export const hobby=projects.filter(p=>p.category==='hobby');
// Demo link helpers: external demos (other sites/subdomains) open in a new tab; internal ones stay in this tab.
export const demoUrl=p=>p.demo?(p.demoHref??`/projects/${p.slug}/demo`):null;
export const extAttrs=h=>/^https?:\/\//.test(h??'')?{target:'_blank',rel:'noopener'}:{};
