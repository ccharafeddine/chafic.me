---
title: "A Data-Centre Trade Under a Crypto Label"
subtitle: "Mandate drift in the Corgi Crypto Infrastructure ETF (BLCK), checked against the issuer's own holdings file, measured against seven peer funds, and turned into three product designs"
author: "Chafic Charafeddine"
date: "2026-10-15"
site: "chafic.me"
type: "Independent research"
---

# A Data-Centre Trade Under a Crypto Label

*Mandate drift in the Corgi Crypto Infrastructure ETF (BLCK), checked against the issuer's own holdings file, measured against seven peer funds, and turned into three product designs*

**Chafic Charafeddine** · Independent research · Originally written August 2026 · Updated October 2026

> This is an independent piece written in a personal capacity. It is not written for or on behalf of any employer, client or institution, and it is not investment advice. Every data-derived number below was recomputed from public sources.

## Summary

- **This is the expanded and verified version of a study I wrote in August.** In that study I argued that the Corgi Crypto Infrastructure ETF (ticker BLCK), an actively managed fund launched on 6 May 2026, had drifted from its crypto mandate. My argument was that it held "a datacentre trade under a crypto label". The August version used a third-party top-ten list. This version uses the issuer's full holdings file for 14 August and 15 October 2026, classifies every holding from company filings, and runs the tests I had only proposed.
- **The "one third" estimate holds for August, but it is a ceiling.** On 14 August, holdings tied to AI data centres by a converted business or an executed contract made up **31.8%** of BLCK. Adding names that have only announced a pivot raises this to 38.6%. In my August top-ten data, four miners (HUT, RIOT, IREN and CIFR) were 38% of the top ten. The issuer file gives **37.5%**, so that claim stands.
- **The share has since fallen to 26.0%, and the fund made no trades.** I derived share counts by dividing each position's market value by its closing price. For all 33 equity positions they come out as the same whole numbers on 14 August and 15 October. The AI-tied share dropped from 31.8% to 26.0% only because those stocks fell in price: the fully converted names lost 34% of their value and the other holdings gained 2%. In practice the fund's exposure to AI data centres is set by market prices, not by any rebalancing decision.
- **Exposure is far ahead of revenue.** If each holding is weighted by the share of its latest-quarter revenue that actually comes from AI and high-performance computing (HPC), the figure is only **5.1%** of BLCK (6.5% in August). The gap between about 26% and about 5% is contracts that have been signed but have not yet produced revenue. Across BLCK's AI-tied holdings those contracts total about 5.7 GW and roughly $130bn of disclosed contract value. A small group of counterparties stands behind them: CoreWeave, Fluidstack with Google credit support, Anthropic, Microsoft, AWS and Meta.
- **The pattern is not unique to BLCK.** Across eight crypto-infrastructure ETFs the median AI-tied weight is **33.0%**, close to one third. The range is wide, from 14.6% (SATO) to 75.8% (WGMI). Two funds have already rewritten their mandates. CoinShares renamed WGMI the "Bitcoin Mining and Digital Power ETF" on 18 August 2026. Grayscale turned its Bitcoin Miners ETF (MNRS) into the AI Compute ETF (GCPU) on 22 September 2026. Two index funds still hold names that fail their own index's revenue rules: 27.1% of DAPP and 19.2% of BKCH.
- **The market already prices these names as a separate asset.** Since BLCK launched, its AI-tied holdings have moved with semiconductors (beta 1.10 to SMH, the VanEck Semiconductor ETF) more than with bitcoin (beta 0.50). The rest of the book behaves the other way (0.86 to bitcoin, 0.19 to SMH). For the six miners that signed large leases, the median beta to bitcoin halved over the year after signing, from 1.01 to 0.55.
- **"Thirty-five names, close to a single bet" is only half right.** I had set a test: if the first principal component explains more than about 70% of return variance, the fund is effectively one bet. It explains **43.7%**. The second component splits the AI sleeve from the crypto businesses, so the fund holds two bets, not one. Measured by the participation ratio, it behaves like about **4.6** independent positions, not 33.
- **Three products, two of them backtested.** All three come from the August study.
  - *A miner-to-data-centre conversion fund.* Names enter only after an executed lease is announced, so membership is known at each date. Since September 2025 it returned **+11.5%**, against **−12.9%** for miners that had not yet signed and **−24.2%** for IBIT, with a beta to bitcoin of 0.51.
  - *BLCK-Pure, a revenue-purity screen inside BLCK.* It returned **−51.5%** over the past year against −34.5% for the BLCK book. This is the expected result: it is a cleaner crypto bet, and crypto fell.
  - *A digital-asset-treasury fund weighted on mNAV,* the ratio of a company's value to the crypto it holds. Its rules are applied only to today's universe, because no free point-in-time mNAV history exists.

---

## 1. What this note updates

In August 2026 I wrote two short studies on Corgi's leveraged and thematic ETF shelf. The second, on mandate drift in the Corgi Crypto Infrastructure ETF (BLCK), made three claims and three proposals. It also listed four things I would verify before relying on it: where the holdings data came from, the revenue mix of the miners, the factor claim, and the quality of the mNAV data. This note does that verification. It replaces the third-party top-ten list with the issuer's file and extends the analysis to the full book and to seven peer funds. It also specifies the products closely enough to backtest them.

What survives, what changed and what is new:

| August claim | Status on 15 Oct 2026 | Section |
|---|---|---|
| 1. HUT, RIOT, IREN and CIFR are 38% of the top ten, "a datacentre trade under a crypto label" | **Verified** (37.5% in the issuer file). The AI-tied share of the whole book was 31.8% in August and is 26.0% now. All of the change came from prices. | 3, 4 |
| 2. BMNR is a digital-asset treasury company and carries an extra mNAV factor | **Verified, and wider.** Bit Digital (BTBT), which sat outside the top ten, is also an ETH treasury company. Treasury companies are 7.9% of the book, with a beta to bitcoin of 1.38. | 3, 7 |
| 3. Thirty-five names, close to a single bet | **Partly rejected.** The first principal component explains 43.7%, below the 70% threshold. The second component is the AI-versus-crypto split. | 8 |
| Fix: publish a revenue-purity screen | Specified as BLCK-Pure and backtested | 11.1 |
| New fund: conversion fund | Specified as an AI-conversion basket with entry at signing, backtested | 11.2 |
| New fund: DAT fund on the mNAV premium | Specified and applied to today's universe; no backtest | 11.3 |

All holdings are dated. "Weight" means percentage of net assets in the issuer file. Prices are Yahoo Finance adjusted closes to 15 October 2026. Company facts come from the latest earnings release or 8-K, cited in the references. CHANGES.md lists every methodological change from the August version.

## 2. The fund and the data

BLCK is an actively managed ETF listed on Cboe BZX. It held 33 equities plus a money-market fund, and had **$0.42m** in net assets on 15 October, down from $0.44m on 14 August. Its stated mandate is companies in "exchanges, custody providers, mining infrastructure, trading platforms, blockchain software and services". Because the fund is active, the questions here are about labels and risk, not breaches of a rulebook. "Mining infrastructure" is broad enough to cover a former miner leasing power shells to a hyperscaler. The problem is that a shareholder reading the label would not expect that.

The August study used an aggregator's top-ten list, which covered half the fund. This version uses two issuer files:

- **15 October 2026:** the issuer's live holdings feed, which drives `corgiinvest.com/blck`.
- **14 August 2026:** the same page as archived by the Wayback Machine on 17 August, labelled "as of 08/14/2026", which is the date of my original data.

The peer funds were pulled from their own issuers on 14–15 October:

| Fund | Issuer | Type | Holdings as of | Names | Source |
|---|---|---|---|---|---|
| BLCK | Corgi | Active | 15 Oct 2026 (and 14 Aug) | 33 + cash | corgiinvest.com/blck |
| WGMI | CoinShares | Active | 15 Oct 2026 | 28 + cash | coinshares.com (widget API) |
| GCPU (ex-MNRS) | Grayscale | Index (Indxx) | 14 Oct 2026 | top 10 published (67% of assets) | etfs.grayscale.com/mnrs |
| DAPP | VanEck | Index (MVDAPP) | 14 Oct 2026 | 20 + cash | vaneck.com |
| BKCH | Global X | Index (Solactive) | 15 Oct 2026 | 33 + cash | globalxetfs.com |
| BLOK | Amplify | Active | 15 Oct 2026 | 49 + cash | amplifyetfs.com |
| BITQ | Bitwise | Index (Bitwise/Morningstar) | 15 Oct 2026 | 30 | bitqetf.com |
| SATO | Invesco | Index (Alerian Galaxy) | 14 Oct 2026 | 55 + cash | invesco.com |

GCPU publishes only its top ten, so its figures cover 67% of the fund and the remaining 33% is left unclassified. BLOK and SATO also hold futures, crypto trusts or cash sleeves. Those positions are classified as "spot crypto" or "other", not as companies.

## 3. What a BLCK shareholder is buying

Every holding is given one business type, based on its most recent filings:

- pure miner
- miner pivoting to AI/HPC
- AI/HPC data centre
- exchange, broker or custodian
- payment and stablecoin rails
- digital-asset treasury company
- semiconductors and hardware
- other

On 15 October the book was 38% exchanges, brokers and custodians; 17% rails; 17% pivoting miners; 10% AI/HPC data centres; 8% treasury companies; and 6% pure miners (Figure 1).

![Figure 1](/research/crypto-infra-ai-pivot/fig01_blck_business_mix.1600.webp)

*Figure 1. BLCK by business type, 14 August and 15 October 2026, as a percentage of net assets. Source: issuer holdings file (August via the Wayback Machine); classification from company filings, see Appendix A.*

The type of business does not settle the question, because a "pivoting miner" might have a signed 15-year lease or only a press release. Section 5 sets out transparent rules that sort each name into a **tier** based on what it has contracted and earned. Tiers A and B together, the converted names and those with executed contracts, are what I call **AI-tied**.

| BLCK | 14 Aug 2026 | 15 Oct 2026 |
|---|---|---|
| Tier A, converted (IREN, WULF, CIFR, CORZ, APLD) | 13.6% | 9.5% |
| Tier B, executed contract (HUT, RIOT, GLXY, CLSK, BTDR) | 18.3% | 16.5% |
| **AI-tied (A+B)** | **31.8%** | **26.0%** |
| Tier C, declared but uncontracted (HIVE, SLNH, BTBT) | 6.8% | 5.1% |
| Broad (A+B+C) | 38.6% | 31.1% |
| Weighted by actual AI/HPC revenue share | 6.5% | 5.1% |
| Treasury companies (BMNR, BTBT) | 6.8% | 7.9% |
| Top ten holdings | 49.7% | 53.4% |
| Effective number of names (1/HHI) | n/a | 23.8 |

Two details stand out. First, CORZ and APLD, the two most fully converted companies in the book, are tiny positions of 0.17% and 0.14%. The drift is concentrated in miners that are partway through conversion. Second, the original "38% of the top ten" is confirmed by the issuer file. On 14 August the four miners were 18.6% of the fund and the top ten were 49.7%, so the four were 37.5% of the top ten.

## 4. Drift without trading

The most useful new fact is how the share moved. The holdings files give market values, not share counts. Dividing each market value by that day's closing price gives whole numbers on both dates, for example 28 shares of APLD, 1,000 of BKKT and 1,100 of BMNR. Across all 33 equity positions, **not one share count changed** between 14 August and 15 October. The AI-tied share fell by 5.8 percentage points only because those stocks repriced. Tier A positions lost 34% of their market value and tier B positions lost 15%. All other holdings rose 2%.

![Figure 2](/research/crypto-infra-ai-pivot/fig03_blck_price_drift.1600.webp)

*Figure 2. Change in each BLCK position's market value, 14 August to 15 October 2026, coloured by tier. Implied share counts did not change, so every movement is price. Source: issuer file and Wayback snapshot; Yahoo Finance closes; `blck_aug_oct_share_counts.csv`.*

This changes the diagnosis. Mandate drift is usually thought of as a manager buying off-mandate names. Here the drift happens through the holdings themselves. Miners the fund already owned signed leases with hyperscalers and AI labs during 2025–26, so their economics changed while the fund simply held them. An unrebalanced book also means that the AI weight is set by the market. Between August and October it fell by 5.8 points because the AI-tied stocks fell. A shareholder who wants a stable crypto-infrastructure exposure gets one that varies with how AI capex is perceived.

## 5. Screening rules

The August note asked for a revenue-purity screen but did not define one. These are the rules used throughout. Each is a yes-or-no test on disclosed facts, and the scripts apply them directly from the classification table.

| Rule | Test | Evidence used |
|---|---|---|
| **R1. Revenue** | AI/HPC revenue (hosting, colocation, GPU cloud) ≥ 50% of the latest reported quarter | Earnings release segment table |
| **R2. Contract** | An executed lease or service agreement of ≥ 100 MW **or** ≥ $1bn contract value, with a named or described counterparty. Letters of intent and "exclusivity" do not count. | 8-K or press release |
| **R3. Financing** | Project-level debt or credit support raised against an HPC contract (recorded as evidence only, not used for tiering) | 8-K |
| **R4. Identity** | Rename or reporting led by AI/HPC (e.g. Cipher Mining → Cipher Digital; Bitfarms → Keel Infrastructure) | Corporate filings |
| **Exit** | A stated plan to wind down or sell self-mining | Filings |

Tiers combine the rules:

- **Tier A, converted:** R1, or R2 + R4 + exit.
- **Tier B, contracted pivot:** R2 without the Tier A conditions.
- **Tier C, declared:** R4 or some AI revenue, but neither R1 nor R2.
- **Tier D:** none of the above.

The tiers are deliberately conservative. Riot's ~1 GW Corsicana letter of intent does not count until it is signed. Galaxy Digital is tier B on the 526 MW Helios lease with CoreWeave, even though it remains mainly a trading business.

The rules give an unambiguous answer for every BLCK holding except Hut 8. Hut 8 reports a single "Compute" segment that mixes ASIC hosting with AI cloud, so its AI revenue share is unknown. It enters the revenue-weighted figure at zero, but its 949 MW of leases put it in tier B regardless.

![Figure 3](/research/crypto-infra-ai-pivot/fig02_ai_share_by_fund.1600.webp)

*Figure 3. AI-tied weight (tiers A+B) and broader exposure across eight crypto-infrastructure ETFs, 14–15 October 2026. GCPU covers its published top ten (67% of assets). Source: issuer holdings files; tiers per §5.*

| Fund | As of | Names | Tier A | Tier B | **A+B** | Tier C | Semis | Rev.-weighted AI | Treasury cos. | Top 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| BLCK | 15 Oct | 33 | 9.5 | 16.5 | **26.0** | 5.1 | 0.0 | 5.1 | 7.9 | 53.4 |
| WGMI | 15 Oct | 28 | 54.5 | 21.4 | **75.8** | 12.3 | 5.0 | 40.6 | 0.0 | 61.9 |
| GCPU | 14 Oct | 10* | 38.9 | 8.0 | **46.9** | 8.4 | 6.1 | 32.7 | 0.0 | 67.1 |
| DAPP | 14 Oct | 20 | 20.9 | 21.2 | **42.1** | 0.0 | 0.0 | 13.3 | 17.0 | 63.1 |
| BKCH | 15 Oct | 33 | 21.3 | 18.7 | **40.1** | 4.4 | 0.6 | 13.5 | 12.5 | 72.1 |
| BLOK | 15 Oct | 49 | 10.1 | 9.5 | **19.6** | 0.0 | 15.3 | 6.0 | 5.3 | 33.4 |
| BITQ | 15 Oct | 30 | 2.9 | 15.0 | **18.0** | 1.6 | 0.0 | 0.4 | 21.1 | 62.5 |
| SATO | 14 Oct | 55 | 5.8 | 8.8 | **14.6** | 2.9 | 4.8 | 3.5 | 29.5 | 39.3 |

*All figures are % of net assets. \*Top ten only.*

The "about one third" estimate is a reasonable description of the category. The median AI-tied weight across the eight funds is **33.0%** and the mean is 35.4%. It is not a description of any particular fund: WGMI is three-quarters AI-tied, while SATO and BITQ are mostly exchanges and treasury companies. Revenue tells a different story. The median revenue-weighted AI share is only **9.6%**, and in every fund the contracted share is two to six times the revenue share.

## 6. What the AI sleeve actually owns: revenue, megawatts and counterparties

The table covers the miners and former miners that appear in BLCK or its peers. Each AI revenue share comes from the segment table of that company's latest earnings release, and each contract figure from its 8-K.

| Ticker | Tier | AI/HPC share of revenue (period) | Contracted MW | Contract value ($bn) | Counterparties and credit support |
|---|---|---|---|---|---|
| APLD | A | 84% (Q4 FY26) | 1,410 | 36.0 | CoreWeave (Polaris Forge 1, 400 MW) and two hyperscalers |
| HUT | B | not split (Q2 2026) | 949 | 26.6 | Fluidstack/Anthropic at River Bend (245 MW, 15 years, Google backstop); unnamed high-investment-grade tenant at Beacon Point (352 MW) |
| WULF | A | 71% (Q2 2026) | 839 | 27.0 | Fluidstack (Google credit support); Core42; Anthropic (401 MW) |
| CIFR | A | 0% (Q2 2026) | 600 | 9.3† | AWS (300 MW, 15 years, $5.5bn); Fluidstack at Barber Lake (300 MW, $1.73bn Google backstop) |
| CORZ | A | 83% (Q2 2026) | 590 | n.d. | CoreWeave (100% of colocation revenue) |
| GLXY | B | ~0% of gross revenue (Q2 2026) | 526 | n.d. | CoreWeave (Helios, 15 years) |
| RIOT | B | 13% (Q2 2026) | 241 | 9.8 | AMD (50 MW); a frontier AI lab, reported as Anthropic (191 MW, 20 years) |
| IREN | A | 51% (Q4 FY26) | 200 | 9.7 | Microsoft ($9.7bn GPU-cloud contract, Childress); other AI labs on shorter terms |
| CLSK | B | 0% (FQ3 2026) | 175 | 6.6 | Meta through a subsidiary, 20-year triple-net lease |
| BTDR | B | 6% (Q2 2026) | 121 | 4.7 | Volta at Tydal, Norway (16 years) |
| HIVE | C | 9% (FQ1 2027) | – | – | GPU cloud only, contracted ARR about $110m |
| MARA | D | 0% (Q2 2026) | – | – | No executed AI lease |

*† Cipher's Barber Lake lease was extended on 25 September 2026 to 20 years. That raises its contracted revenue from $3.8bn to more than $9bn; the table uses the figure at the time of the Q2 release.*

Three things in this table are missing from the August study.

**Contracted capacity has run far ahead of revenue.** The ten AI-tied BLCK holdings have 5.65 GW under contract and $129.7bn of disclosed contract value (where disclosed), yet their AI revenue is still small. Cipher and CleanSpark have signed multi-billion-dollar leases and report no AI revenue yet, and Hut 8 does not split its AI revenue out, so they are tier A or B on contracts and identity alone. TeraWulf disclosed only about 102 MW generating revenue in July 2026, against 839 MW contracted. The investment thesis is construction plus counterparty credit, which differs from a bet on bitcoin.

**Credit risk is concentrated in a few counterparties.** CoreWeave stands behind about 1.5 GW (CORZ, APLD, GLXY). Fluidstack, a privately held AI cloud provider, has leases at HUT, CIFR and WULF. Those leases are bankable because Google provides a backstop. Anthropic is the end user at HUT (through Fluidstack), WULF and RIOT. For a fund holder, the AI sleeve's credit exposure therefore runs mostly to CoreWeave, Google and Anthropic, and only a small part to bitcoin.

**The financing is project finance.** Hut 8 ($7.5bn, investment grade), IREN ($6.4bn), Cipher ($3.7bn) and Riot ($0.6bn) have raised debt or facilities against HPC contracts, $18.2bn in total across BLCK's AI-tied names. That fits the shift from equity beta to bitcoin toward a lease-like asset with construction and refinancing risk, and it is the reason R3 is recorded as evidence.

## 7. Market behaviour: bitcoin versus semiconductors

I used IBIT (the iShares Bitcoin Trust) as the bitcoin proxy, because it closes at the same time as the equities, and SMH (VanEck Semiconductor ETF) as the AI/semis proxy. All returns are daily log returns on US trading days. Betas come from a two-factor regression, *r = α + β<sub>BTC</sub>·r<sub>IBIT</sub> + β<sub>SMH</sub>·r<sub>SMH</sub> + ε*.

| Fund (7 May – 15 Oct 2026) | Corr BTC | Corr SMH | β BTC | β SMH | R² | Vol | β BTC, prior year | β SMH, prior year |
|---|---|---|---|---|---|---|---|---|
| BLCK | 0.66 | 0.62 | 0.73 | 0.53 | 0.64 | 53% | – | – |
| WGMI | 0.36 | 0.70 | 0.37 | 1.13 | 0.51 | 81% | 0.93 | 0.80 |
| GCPU | 0.44 | 0.70 | 0.50 | 0.97 | 0.55 | 72% | 0.71 | 0.72 |
| DAPP | 0.66 | 0.64 | 0.80 | 0.63 | 0.65 | 59% | 0.94 | 0.69 |
| BKCH | 0.61 | 0.64 | 0.82 | 0.74 | 0.61 | 67% | 0.93 | 0.72 |
| BLOK | 0.64 | 0.68 | 0.48 | 0.45 | 0.67 | 39% | 0.56 | 0.55 |
| BITQ | 0.69 | 0.61 | 0.80 | 0.54 | 0.66 | 56% | 0.87 | 0.57 |
| SATO | 0.78 | 0.57 | 0.88 | 0.41 | 0.74 | 50% | 0.86 | 0.55 |

*The prior-year columns cover the 12 months to 15 Oct 2025. BLCK did not exist then.*

The funds with the most AI-tied weight have moved most toward semiconductors. WGMI's beta to bitcoin fell from 0.93 to 0.37 and its beta to SMH rose from 0.80 to 1.13. SATO, the least AI-tied fund, barely moved. Figure 4 shows the rolling picture.

![Figure 4](/research/crypto-infra-ai-pivot/fig04_rolling_betas.1600.webp)

*Figure 4. Rolling 126-day two-factor betas to IBIT and SMH for selected funds. Source: Yahoo Finance adjusted closes, my calculations.*

To isolate the drift within BLCK, I rebuilt the fund from its 15 October holdings and split it into three sleeves. The rebuilt book's returns correlate 0.989 with BLCK's actual returns.

| BLCK sleeve, since launch | Weight | β BTC | β SMH | Corr BTC | Corr SMH | Vol |
|---|---|---|---|---|---|---|
| AI-tied (tiers A+B) | 26.0% | 0.50 | 1.10 | 0.41 | 0.67 | 84% |
| Treasury companies | 7.9% | 1.38 | 0.45 | 0.78 | 0.48 | 75% |
| Crypto operating businesses | 64.3% | 0.86 | 0.19 | 0.78 | 0.40 | 46% |
| Whole book | 98.2% | 0.81 | 0.45 | 0.71 | 0.58 | 52% |

![Figure 5](/research/crypto-infra-ai-pivot/fig05_blck_sleeves.1600.webp)

*Figure 5. Two-factor betas to bitcoin (IBIT) and semiconductors (SMH) for BLCK's three sleeves and the peer funds, 7 May to 15 October 2026. Source: issuer holdings file, Yahoo Finance, my calculations.*

The AI sleeve is about a quarter of the weight and a much larger share of the risk. Its volatility is 84%, almost twice that of the operating businesses, and its main exposure is to semiconductors. In a fund called "Crypto Infrastructure", that is the sleeve that would most surprise the holder.

**Event study.** The test asks whether the change in market behaviour began when the leases were signed. For six miners I estimated betas over the 250 trading days before and after the first lease that qualifies under R2. The median beta to bitcoin fell from **1.01 to 0.55**, and the median beta to SMH rose from **1.06 to 1.29**. Bitcoin beta fell for five of the six (APLD's was already low, at 0.49, and stayed there), and SMH beta rose for five of the six (TeraWulf's fell). The post-event windows for HUT and CLSK are shorter (207 and 66 days).

![Figure 6](/research/crypto-infra-ai-pivot/fig07_event_study.1600.webp)

*Figure 6. Betas to bitcoin and semiconductors in the 250 trading days before and after each company's first qualifying AI/HPC lease. Source: event dates from company 8-Ks; prices from Yahoo Finance; `event_study_betas.csv`.*

## 8. Finding 3 tested: one bet or two?

In August I proposed a test without running it: if the first principal component of BLCK's holdings explained more than about 70% of their return variance, the 35 names would amount to one bet. I ran it on the 33 equities, using daily returns since launch (112 days) and also over 12 months (31 names with full history).

| | Since launch | 12 months |
|---|---|---|
| PC1 share of variance | **43.7%** | 45.0% |
| PC2 share | 12.0% | 8.9% |
| Participation ratio (effective number of independent bets) | 4.6 | 4.5 |
| Entropy-based effective N | 10.5 | 10.7 |
| Components needed for 80% of variance | 10 | 11 |
| Average pairwise correlation | 0.35 | 0.37 |
| Correlation of PC1 with IBIT | 0.63 | 0.73 |
| PC2 mean loading: AI-tied / crypto operating / treasury | +0.17 / −0.13 / −0.07 | +0.16 / −0.14 / −0.08 |

![Figure 7](/research/crypto-infra-ai-pivot/fig06_pca.1600.webp)

*Figure 7. PCA of BLCK constituents: variance explained and PC2 loadings by sleeve. Source: Yahoo Finance adjusted closes, my calculations.*

The strong version of the claim fails, since 43.7% is well below 70%. A weaker version holds. The book has the diversification of about four or five independent positions, not 33. Its largest factor is mostly bitcoin. The second factor separates the AI-tied names from the crypto operating businesses and correlates −0.47 with bitcoin. So the fund is two bets: crypto beta, and a smaller AI-capex bet that partly offsets it.

## 9. Valuation: what the market pays per contracted megawatt

![Figure 8](/research/crypto-infra-ai-pivot/fig08_valuation.1600.webp)

*Figure 8. Enterprise value per contracted MW and contracted value relative to EV for AI-pivot holdings, 15 October 2026. Source: market cap, EV and TTM revenue from Yahoo Finance; MW and contract value from company filings. IREN is shown separately because its contracts are GPU-cloud services, not leases.*

| Ticker | Tier | Market cap ($bn) | EV ($bn) | EV per contracted MW ($m) | Contract value / EV | EV / TTM revenue |
|---|---|---|---|---|---|---|
| APLD | A | 6.2 | 11.9 | 8.4 | 3.03× | 13.6× |
| WULF | A | 6.3 | 8.9 | 10.6 | 3.03× | 54.0× |
| CORZ | A | 4.6 | 7.3 | 12.3 | – | 16.5× |
| CIFR | A | 4.2 | 8.9 | 14.9 | 1.04× | 46.8× |
| GLXY | B | 10.8 | 8.0 | 15.1 | – | n.m. |
| HUT | B | 9.4 | 17.1 | 18.0 | 1.55× | 53.9× |
| CLSK | B | 2.4 | 4.0 | 22.8 | 1.66× | 5.9× |
| RIOT | B | 5.8 | 6.2 | 25.8 | 1.57× | 9.2× |
| BTDR | B | 2.3 | 3.8 | 31.2 | 1.25× | 4.6× |
| IREN | A | 12.0 | 13.9 | (69.6) | (0.70×) | 19.7× |

The median EV per contracted MW is **$15.1m** across the nine lessors, and the median ratio of contract value to EV is **1.57×**. Two cautions apply.

1. EV per MW is lower for converted names (APLD, WULF and CORZ at $8–12m) than for pivoting ones (RIOT, CLSK and BTDR at $23–31m). This does not mean the converted names are cheap. For the pivoting names, EV still includes a mining business, which the per-MW metric attributes entirely to the leases.
2. Contract value / EV above 1× does not mean free money. The contracts pay out over 15–20 years, and the companies must first spend heavily on construction. At an illustrative build cost of about $10m per critical-IT MW (an assumption, not a company figure), building out the contracted capacity would cost roughly as much as these companies' entire EV, and most of that is still to be funded.

On a trailing basis, WULF, CIFR and HUT trade at about 50× revenue. That multiple values construction to come, not current earnings.

## 10. Style drift against each fund's own rulebook

BLCK is active, so the only standard it can be held to is its label. Index funds publish rules, so I tested each holding's latest-quarter revenue against its index's eligibility threshold.

| Fund (index) | Rule | Weight failing on latest-quarter revenue | Names |
|---|---|---|---|
| DAPP (MarketVector Global Digital Assets Equity) | New constituents need ≥ 50% of revenue from digital assets | **27.1%** | APLD, CORZ, IREN, WULF, XYZ |
| DAPP | Existing constituents keep eligibility at ≥ 25% | 8.4% | APLD, CORZ |
| BKCH (Solactive Blockchain) | Pure-play: ≥ 50% of revenue from blockchain activities, including mining | **19.2%** | APLD, CORZ, IREN, WULF |
| BITQ (Bitwise Crypto Innovators 30) | Tier 1 > 75% of revenue; Tier 2 ≥ $10bn market cap | 0% | none |

Two notes on this table:

- These failures are not necessarily breaches. Indices review eligibility periodically, often using trailing annual revenue, and some include buffers. A name that fails on the latest quarter can still pass on the index's own data until the next review. What the table measures is drift that is building up between reviews.
- Two issuers responded by changing the label rather than the holdings. Until August, WGMI required at least 50% of revenue from bitcoin mining. Its new name says "Digital Power". Grayscale's MNRS became GCPU and now tracks a "High Performance Computing" index. Both are honest fixes, and they show the AI pivot is now an accepted category. That category is not BLCK's mandate.

## 11. Products

The August study proposed one fix and two new funds. All three are kept here, specified in enough detail to implement, and backtested where free point-in-time data allow. Costs are charged at 20 basis points per unit of one-way turnover, and fund fees are excluded.

### 11.1 The fix: BLCK-Pure, a published revenue-purity screen

**Proposal.** Keep BLCK's label and make the book match it. The manager would publish each holding's digital-asset revenue share and tier every quarter and apply a hard screen.

- **Eligibility:** digital-asset revenue ≥ 50% of the latest fiscal year; not tier A or B; not a treasury company (those would go in a separate sleeve or fund, see 11.3).
- **Weighting:** BLCK's own weights within the eligible set, rescaled to 100% and capped at 10% per name.
- **Rebalancing:** quarterly, with a 25% buffer for existing holdings (as in MVDAPP's rules) to limit turnover.
- **Disclosure:** each holding's revenue share and tier, published with the holdings file.

**Applied to today's book,** the screen keeps 14 names and 40.8% of BLCK's weight: COIN, CRCL, FIGR, MARA, BLSH, ETOR, HIVE, GEMI, CANG, CSHR, BKKT, CNCK, BTGO and FUFU. It drops the ten AI-tied names, the two treasury companies, and seven diversified businesses that fail the purity test (CME, HOOD, PYPL, XYZ, CBOE, GPGI and SLNH).

![Figure 9](/research/crypto-infra-ai-pivot/fig10_backtest_p2.1600.webp)

*Figure 9. BLCK-Pure against the rebuilt BLCK book, the AI-tied sleeve, IBIT and COIN, 15 October 2025 to 15 October 2026. Quarterly rebalance, 20 bp per unit of turnover. Source: my calculations.*

| 15 Oct 2025 – 15 Oct 2026 | Return | Vol | Max drawdown | β BTC | β SMH |
|---|---|---|---|---|---|
| BLCK-Pure | −51.5% | 61% | −55% | 0.90 | 0.37 |
| BLCK book (15 Oct weights) | −34.5% | 55% | −46% | 0.76 | 0.51 |
| BLCK AI-tied sleeve | −36.9% | 86% | −48% | 0.70 | 1.12 |
| IBIT | −27.1% | 45% | −49% | 1.00 | 0.00 |
| COIN | −46.2% | 72% | −61% | 1.22 | 0.10 |

*Quarterly turnover averaged 42%.*

**Reading it honestly.** BLCK-Pure lost more in a year when bitcoin fell, which is what a purer crypto product should do. The screen is meant to make the label accurate, not to add return. Its beta to bitcoin rises from 0.76 to 0.90 and its beta to semiconductors falls from 0.51 to 0.37. The backtest uses today's constituents and today's classification throughout, so it has look-ahead bias and should be read as a description of exposures, not as a performance claim.

**Risks.** Only about 14 names would qualify, so the fund would be concentrated, and the 10% cap binds on COIN and CRCL. Revenue shares for diversified exchanges rely on estimates where the company does not report a crypto segment. A fund with $0.4m in assets would also face cost problems from any frequent rebalancing.

### 11.2 New fund: the miner-to-data-centre conversion fund

**Proposal.** A separate, clearly labelled fund for the trade BLCK holds by accident: listed miners and former miners that have contracted their power to AI/HPC tenants.

- **Universe:** US-listed companies that were bitcoin miners on 1 January 2024.
- **Eligibility, point-in-time:** a company enters on the first trading day after it announces an executed lease or service agreement that meets R2 (≥ 100 MW or ≥ $1bn, counterparty disclosed). Letters of intent do not count. Market cap must be at least $0.5bn.
- **Weighting:** equal weight in the base case. A variant weights by the square root of contracted MW, capped at 25%.
- **Rebalancing:** monthly, with new qualifiers added at the next month-end.
- **Exit:** if a qualifying contract is terminated without replacement, or if market cap falls below the floor for two consecutive months.
- **Disclosure:** MW contracted, MW energised, contract value, counterparty and backstop for each name.

Qualifying dates, taken from the 8-Ks: CORZ 3 Jun 2024; APLD 2 Jun 2025; WULF 14 Aug 2025; CIFR 25 Sep 2025; IREN 3 Nov 2025; HUT 17 Dec 2025; CLSK 14 Jul 2026; BTDR 4 Aug 2026; RIOT 10 Aug 2026. DGXX (Cerebras, 40 MW and $1.1bn) qualified but was excluded by the size floor.

![Figure 10](/research/crypto-infra-ai-pivot/fig09_backtest_p1.1600.webp)

*Figure 10. Conversion fund backtest against a control basket of not-yet-qualified miners, WGMI, IBIT and SMH (the table adds GCPU and DTCR), 2 September 2025 to 15 October 2026. Monthly rebalance, 20 bp per unit of turnover. Source: my calculations.*

| 2 Sep 2025 – 15 Oct 2026 | Return | Vol | Max drawdown | β BTC | β SMH |
|---|---|---|---|---|---|
| Conversion fund (equal weight) | **+11.5%** | 85% | −53% | 0.51 | 1.16 |
| Variant: square root of MW, 25% cap | +14.7% | 85% | −53% | 0.51 | 1.16 |
| Control: miners not yet qualified | −12.9% | 76% | −66% | 0.88 | 0.76 |
| WGMI | +13.4% | 82% | −53% | 0.60 | 1.09 |
| GCPU (ex-MNRS) | −6.9% | 75% | −57% | 0.67 | 0.98 |
| IBIT | −24.2% | 44% | −53% | 1.00 | 0.00 |
| SMH | +93.1% | 38% | −25% | 0.00 | 1.00 |
| DTCR (Global X Data Center & Digital Infrastructure) | +40.2% | 25% | −19% | 0.07 | 0.51 |

*Average monthly turnover was 25%.*

**Reading it honestly.** Signing a lease is a measurable event, and it separates two groups of miners. Those that had signed returned 24 points more than those that had not, and carried about half the bitcoin beta. However, the fund did not beat the simpler options. It roughly matched WGMI, lagged a data-centre infrastructure ETF (DTCR), and fell far behind SMH, with twice SMH's volatility. Its distinctive exposure is the conversion spread, not raw AI beta. The square-root-of-MW variant uses today's MW figures, so it carries look-ahead bias. The equal-weight version uses only announcement dates.

**Risks.**

- *Counterparty concentration:* CoreWeave, Fluidstack/Google and Anthropic sit behind most of the contracts.
- *Construction risk:* large differences between contracted and energised MW.
- *Refinancing:* project debt is often floating rate.
- *Small universe:* nine names today, so the fund needs a name cap.
- *Short history:* the sample is 13 months, and most of the effect comes from a few dates.

### 11.3 New fund: the digital-asset-treasury fund, weighted on mNAV

**Proposal.** Treasury companies such as BMNR offer spot exposure through an equity whose value can trade above or below the crypto it holds. The August idea was to buy that exposure only when it is not expensive.

- **Universe:** listed companies whose main asset is a crypto treasury.
- **Eligibility:** treasury of at least $0.25bn; EV-based mNAV ≤ 1.25; basic mNAV ≤ 1.5. The second cap catches convertible-preferred structures, whose EV-based ratio can look cheap.
- **Weighting:** proportional to treasury size / (EV mNAV)², capped at 20% per name.
- **Rebalancing:** monthly, with an extra rebalance whenever a holding's mNAV moves above the threshold.

![Figure 11](/research/crypto-infra-ai-pivot/fig11_dat_mnav_rule.1600.webp)

*Figure 11. The DAT rule applied on 15 October 2026: mNAV-rule weights against capped market-cap weights for the eligible names. Source: datcap.io snapshot, retrieved 15 October 2026 (third-party; values not reconciled with filings).*

**Applied today,** 12 of 19 names qualify. ASST, ALCPB and CYPH are excluded for premium. MSTR (EV mNAV 1.14) and BMNR (0.95) both hit the 20% cap. The rule's weighted-average EV mNAV is **0.88**, against 0.91 for capped market-cap weights and 1.10 for the uncapped universe. In practice it buys about 4% more crypto per dollar than capped market-cap weighting.

**Why there is no backtest.** A rule that rebalances on premium needs a daily, point-in-time history of share counts, debt and coin holdings for each company. No free source provides one. Rebuilding it from 8-Ks and 10-Qs is feasible but outside the scope of this note. The universe also changed shape in 2025–26. The 2025 cohort issued shares at large premiums, while by October 2026 the sector traded at a basic mNAV of 0.90. A naive backtest would therefore mostly reflect survivorship, so rebuilding that history from filings comes first.

**Risks.**

- *Data quality:* the snapshot comes from a third-party aggregator.
- *Value-trap risk:* companies trading at a discount are often at a discount for reasons such as debt, governance or forced selling.
- *Concentration and beta:* two names hit the cap, and this sleeve has the highest beta to bitcoin in BLCK (1.38).

## 12. Risks and caveats

- **Classification is judgement applied to disclosed facts.** The rules are mechanical, but inputs such as Hut 8's revenue split, the estimated crypto revenue of exchanges, and Galaxy's tier involve choices.
- **Holdings are snapshots.** BLCK's history is reconstructed from two dates. GCPU publishes only its top ten. Weights move daily.
- **Short samples and look-ahead.** BLCK has 112 trading days of history and the conversion backtest 13 months. BLCK-Pure, the square-root-of-MW variant and the rebuilt book use today's classification; only the equal-weight conversion fund is strictly point-in-time.
- **Proxies.** IBIT stands in for bitcoin and SMH for AI/semis. Neither is a pure factor.
- **Scale and third-party data.** At about $0.4m, BLCK's costs and tracking are not those of a scaled fund. Prices (Yahoo Finance) and DAT mNAV (datcap.io) are not reconciled with filings line by line.

## 13. What would change the view

- **BLCK trades.** If the manager trims the AI-tied names or explains the sleeve as deliberate, the label question goes away. The next holdings file will show it.
- **Revenue catches up.** As leases energise in 2026–27, revenue-weighted shares will converge toward contracted shares. Index funds will then have to drop names or change their rules, as WGMI and MNRS have done.
- **Bitcoin and AI capex correlate again.** If both are driven by one liquidity factor, the two-bet structure becomes one bet and PC1 rises toward the 70% threshold.
- **Credit events.** A failure or renegotiation at CoreWeave, Fluidstack or a similar counterparty would show whether the Google backstops work as described. It would also test the case for the conversion fund.

## Appendix A. BLCK full book with classification

| Ticker | Company | Wt 14 Aug | Wt 15 Oct | Type | Tier | AI rev. share | Contracted MW |
|---|---|---|---|---|---|---|---|
| COIN | Coinbase | 6.97 | 9.19 | Exchange/broker/custody | D |  |  |
| CRCL | Circle | 5.36 | 6.94 | Rails | D |  |  |
| BMNR | BitMine Immersion | 4.49 | 6.18 | Treasury co. | D |  |  |
| CME | CME Group | 5.36 | 6.12 | Exchange/broker/custody | D |  |  |
| HOOD | Robinhood | 4.57 | 5.30 | Exchange/broker/custody | D |  |  |
| HUT | Hut 8 | 4.93 | 4.68 | Pivoting miner | B | n.d. | 949 |
| FIGR | Figure Technology | 4.31 | 4.04 | Rails | D |  |  |
| RIOT | Riot Platforms | 4.39 | 3.82 | Pivoting miner | B | 13% | 241 |
| IREN | IREN | 4.85 | 3.57 | AI/HPC | A | 51% | 200 |
| PYPL | PayPal | 3.56 | 3.52 | Rails | D |  |  |
| GPGI | GPGI (CompoSecure / Arculus) | 3.06 | 3.23 | Other | D |  |  |
| GLXY | Galaxy Digital | 3.32 | 2.98 | Exchange/broker/custody | B | 0% | 526 |
| WULF | TeraWulf | 3.84 | 2.97 | AI/HPC | A | 71% | 839 |
| MARA | MARA Holdings | 3.06 | 2.95 | Pure miner | D | 0% |  |
| CLSK | CleanSpark | 3.30 | 2.72 | Pivoting miner | B | 0% | 175 |
| CIFR | Cipher Digital (fka Cipher Mining) | 4.45 | 2.66 | AI/HPC | A | 0% | 600 |
| BLSH | Bullish | 1.85 | 2.57 | Exchange/broker/custody | D |  |  |
| XYZ | Block | 2.32 | 2.38 | Rails | D |  |  |
| ETOR | eToro | 2.53 | 2.35 | Exchange/broker/custody | D |  |  |
| HIVE | HIVE Digital | 2.60 | 2.28 | Pivoting miner | C | 9% |  |
| BTDR | Bitdeer | 2.33 | 2.28 | Pivoting miner | B | 6% | 121 |
| GEMI | Gemini | 1.81 | 1.91 | Exchange/broker/custody | D |  |  |
| FGXXX | Money market fund | 1.75 | 1.85 | Cash | – |  |  |
| CANG | Cango | 0.90 | 1.78 | Pure miner | D | 0% |  |
| CBOE | Cboe Global Markets | 1.60 | 1.78 | Exchange/broker/custody | D |  |  |
| CSHR | CoinShares | 2.04 | 1.71 | Exchange/broker/custody | D |  |  |
| BTBT | Bit Digital | 2.29 | 1.68 | Treasury co. | C | n.d. |  |
| BKKT | Bakkt | 1.73 | 1.42 | Exchange/broker/custody | D |  |  |
| CNCK | Coincheck | 1.97 | 1.38 | Exchange/broker/custody | D |  |  |
| BTGO | BitGo | 1.01 | 1.21 | Exchange/broker/custody | D |  |  |
| SLNH | Soluna Holdings | 1.92 | 1.16 | Pivoting miner | C | n.d. |  |
| FUFU | BitFuFu | 1.14 | 1.09 | Pure miner | D | 0% |  |
| CORZ | Core Scientific | 0.22 | 0.17 | AI/HPC | A | 83% | 590 |
| APLD | Applied Digital | 0.20 | 0.14 | AI/HPC | A | 84% | 1,410 |

*Weights are % of net assets. FGXXX is the cash sweep. Tiers follow §5. "n.d." means not disclosed. A blank means not applicable.*

## Appendix B. Data and method

- **Holdings.** Issuer holdings files, normalised to fund, as-of date, ticker, name, weight, market value and source URL. The 14 August BLCK book comes from the Wayback Machine capture of 17 August 2026.
- **Classification.** I keep one record per company: business type, AI revenue share and period, contracted MW, contract value, counterparty, first qualifying date, rename and mining exit. Each record carries a source URL.
- **Prices.** Yahoo Finance adjusted closes, 2 January 2023 to 15 October 2026. Returns are taken on US trading days only. Bitfarms is analysed under its current ticker KEEL. Some tickers carry the price history of predecessor entities and are excluded from the event study.
- **Fundamentals.** Market cap, EV and TTM revenue from Yahoo Finance, retrieved 15 October 2026.
- **Computations.** Figures were produced with my own Python scripts from the public sources cited. Each derived figure is recorded with a source URL or tagged as computed or an assumption.

## References

1. Chafic Charafeddine, "Two studies on Corgi's leveraged and thematic shelf", Part II, August 2026 (the source study).
2. Corgi Crypto Infrastructure ETF (BLCK), holdings and fund page, retrieved 15 Oct 2026. https://corgiinvest.com/blck ; archived 17 Aug 2026 (holdings as of 14 Aug): https://web.archive.org/web/20260817161505/https://corgiinvest.com/blck
3. CoinShares Bitcoin Mining and Digital Power ETF (WGMI), holdings, retrieved 15 Oct 2026. https://www.coinshares.com/us/etf/wgmi/ ; rename announcement, 18 Aug 2026: https://coinshares.com/us/news/coinshares-renames-wgmi-as-bitcoin-mining-and-digital-power-etf-reflecting-the-convergence-of-bitcoin-mining-and-ai-infrastructure/
4. Grayscale AI Compute ETF (GCPU, formerly MNRS), top holdings as of 14 Oct 2026. https://etfs.grayscale.com/mnrs
5. VanEck Digital Transformation ETF (DAPP), holdings as of 14 Oct 2026. https://www.vaneck.com/us/en/investments/digital-transformation-etf-dapp/holdings/ ; MarketVector Global Digital Assets Equity Index guide: https://www.marketvector.com/rulebooks/download/MVDAPP_Index_Guide.pdf
6. Global X Blockchain ETF (BKCH), holdings as of 15 Oct 2026. https://www.globalxetfs.com/funds/bkch/ ; Solactive Blockchain Index guideline: https://solactive.com/downloads/Guideline-Solactive-SOLBKCH.pdf
7. Amplify Transformational Data Sharing ETF (BLOK), holdings as of 15 Oct 2026. https://amplifyetfs.com/blok-holdings/
8. Bitwise Crypto Industry Innovators ETF (BITQ), holdings as of 15 Oct 2026. https://bitqetf.com/holdings ; index rulebook: https://indexes.morningstar.com/docs/rulebook/bitwise-crypto-innovators-30-FS0000GV71
9. Invesco Alerian Galaxy Crypto Economy ETF (SATO), holdings as of 14 Oct 2026. https://www.invesco.com/us/en/financial-products/etfs/invesco-alerian-galaxy-crypto-economy-etf.html
10. Hut 8, Q2 2026 results (Exhibit 99.1). https://www.sec.gov/Archives/edgar/data/1964789/000110465926090041/tm2621890d1_ex99-1.htm ; River Bend lease, 17 Dec 2025: https://www.sec.gov/Archives/edgar/data/1964789/000110465925122052/hut-20251217xex99d1.htm
11. IREN, FY26 results. https://www.sec.gov/Archives/edgar/data/1878848/000187884826000051/irenreportsfy26results.htm
12. Cipher Digital, results and Barber Lake amendment (25 Sep 2026). https://www.sec.gov/Archives/edgar/data/1819989/000181998926000007/exh991q4fy25_earningsprxvf.htm ; https://www.sec.gov/Archives/edgar/data/1819989/000181998926000043/barberlakeleaseamendmentpr.htm
13. Core Scientific, Q2 2026 results. https://investors.corescientific.com/news-events/press-releases/detail/139/core-scientific-announces-second-quarter-2026-results
14. TeraWulf, Q2 2026 investor release. https://www.sec.gov/Archives/edgar/data/1083301/000108330126000162/terawulfq22026investorpr.htm
15. Applied Digital, Q4 FY26 earnings release. https://www.sec.gov/Archives/edgar/data/1144879/000114487926000044/apldq426earningsreleaseasf.htm
16. Galaxy Digital, Q2 2026 overview (Exhibit 99.2). https://www.sec.gov/Archives/edgar/data/1859392/000185939226000084/exhibit992-q22026overvie.htm
17. Riot Platforms, Q2 2026 results, and 8-K of 10 Aug 2026. https://www.riotplatforms.com/riot-platforms-reports-second-quarter-2026-financial-results-and-strategic-highlights/ ; https://www.sec.gov/Archives/edgar/data/1167419/000110465926093406/riot-20260810x8k.htm
18. CleanSpark, Sandersville lease, 14 Jul 2026. https://investors.cleanspark.com/news/news-details/2026/CleanSpark-Secures-Twenty-Year-Lease-with-High-Investment-Grade-Global-Technology-Company-for-Data-Center-in-Sandersville-Georgia/default.aspx
19. Bitdeer, Q2 2026 results. https://ir.bitdeer.com/news-releases/news-release-details/bitdeer-reports-unaudited-financial-results-second-quarter-2026
20. HIVE Digital, FQ1 2027 revenue release. https://www.hivedigitaltechnologies.com/news/hive-reports-q1-2027-revenue-of-791-million-contracted-gpu-cloud-arr-reaches-approximately-110-million/
21. MARA Holdings, Q2 2026 shareholder letter. https://www.sec.gov/Archives/edgar/data/1507605/000150760526000020/q226shareholderletter.htm
22. Keel Infrastructure (formerly Bitfarms), rebrand. https://investor.bitfarms.com/news-releases/news-release-details/bitfarms-officially-rebrands-keel-infrastructure-completes-us
23. Bit Digital, results (Exhibit 99.1). https://www.sec.gov/Archives/edgar/data/1710350/000121390026088768/ea030181101ex99-1.htm
24. Soluna Holdings, Q2 2026 results. https://www.solunacomputing.com/news/q2-2026-results/
25. Digi Power X (DGXX), Cerebras agreement (Exhibit 99.1). https://www.sec.gov/Archives/edgar/data/1854368/000121390026089450/ea030173001ex99-1.htm
26. datcap.io, digital-asset treasury mNAV dashboard, retrieved 15 Oct 2026. https://datcap.io/
27. Yahoo Finance daily adjusted closes and quote fundamentals, retrieved 15 Oct 2026; my calculations.

---

*Chafic Charafeddine writes independent research at chafic.me. This article reflects only my views. It is not affiliated with, commissioned by, or written on behalf of any employer, client or institution, and it is not investment advice or a recommendation to buy or sell any security or asset. Holdings and prices as retrieved on 14–15 October 2026. Figures will be revised; refresh before relying on them.*
