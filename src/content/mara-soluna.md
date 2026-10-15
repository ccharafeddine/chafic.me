# MARA Holdings × Soluna Holdings: Buy the Project, Not the Company

*Independent M&A case study by Chafic Charafeddine. Public information only. This was not prepared for, or on behalf of, any employer, client, or either company.*

**As of:** close of March 28, 2024. Financials are from the FY2023 Form 10-K filings. Balance sheets are at December 31, 2023 unless noted. All figures are in US$; "$M" means millions. Every number is traced to a source or labelled as an assumption in `figures.json` and the Excel model.

---

## Summary

The original thesis was that MARA should buy Soluna Holdings (SLNH) to own renewable-powered hosting capacity in Texas. I rebuilt the case from Soluna's FY2023 10-K, and the data do not support buying the whole company.

- **Ownership is thin.** Soluna owns only 41.5 of its 75 operating MW on an attributable basis.
- **Claims sit ahead of the common.** A $85M Series A preferred claim ranks above common shareholders, and $19.6M of debt needs to be refinanced in 2024.
- **The deal value is negative.** A full tender at $4.00 per share (a 39% premium) gives a transaction enterprise value of **$35.9M**, against **$17.6M** of value to MARA. That is an NPV of **–$20.3M**, and it stays negative even if the common is acquired for nothing.

The value worth having is **Dorothy 2**, a 50 MW shovel-ready expansion next to Soluna's operating Texas sites.

- **Recommendation:** an **all-cash asset purchase of the Dorothy 2 project rights for up to $6.0M** ($4.0M at closing plus a $2.0M earn-out paid on energization), gated on a fixed-price build contract.
- **Value:** the project is worth **$9.5M** to MARA (range $5.6–15.0M). Expected NPV is **+$3.6M**.
- **Impact on MARA:** no shares issued and no HSR filing. The EPS effect is immaterial (–0.3% in 2025E, +0.8% from 2026E).

---

## 1. Thesis

MARA's question in early 2024 was how to own more of its own capacity. At year-end 2023 it hosted about 193,000 miners with third parties and self-hosted none. It had begun buying operating sites at about $0.44–0.46M per MW.

Soluna has two things that look attractive:
- curtailment-tolerant capacity behind wind farms in ERCOT
- a 50 MW expansion that is ready to build

The answer depends on what MARA would actually be paying for:
- **Soluna Holdings, the company:** a small attributable share of three sites, a large preferred claim, debt maturing in July 2024, a going-concern opinion, and about $10M a year of corporate overhead.
- **Dorothy 2, the project:** power and land rights that MARA could build out with its own capital.

The first is worth less than it costs. The second is worth more than it costs, but only if the build cost is controlled.

## 2. Company overviews

### MARA Holdings (NASDAQ: MARA), FY2023

| Metric | FY2023 | Source |
|---|---|---|
| Revenue | $387.5M | 10-K |
| Net income | $261.2M | 10-K |
| Adjusted EBITDA | $419.9M, of which $331.5M is fair-value gains on bitcoin | 10-K |
| Bitcoin mined / held | 12,852 BTC mined; 15,126 BTC held ($639.7M) | 10-K |
| Energized hashrate | 24.7 EH/s; 19.4 EH/s average operational; 25 J/TH | 10-K |
| Cash / convertible notes | $357.3M / $330.7M principal (1%, due 2026) | 10-K |
| Hosting model | About 193,000 miners hosted by third parties; no self-hosting | 10-K |
| 2024 site purchases | Generate Capital sites, 390 MW, $179.0M (closed Jan 12, 2024); Garden City, TX, 200 MW, $87.3M (announced Mar 15, 2024) | 10-K/A; Applied Digital 8-K |
| Market cap / EV, 3/28/2024 | $5.48B / $5.45B (14.1× revenue), on 12/31/2023 shares | Yahoo; model |

The adjusted EBITDA figure is driven by bitcoin price gains under ASU 2023-08, so it is not a measure of operating leverage. Total margin excluding D&A was $164.2M.

### Soluna Holdings (NASDAQ: SLNH), FY2023

| Metric | FY2023 | Source |
|---|---|---|
| Revenue | $21.1M (crypto mining $10.6M; hosting $10.2M; demand response $0.3M) | 10-K |
| Operating loss | $(20.2)M | 10-K |
| Net loss | $(27.7)M consolidated; $(29.2)M attributable to Soluna; $(36.5)M to common | 10-K |
| Adjusted EBITDA (company definition) | $(3.5)M for the year; positive in Q3 (+$0.4M) and Q4 (+$1.0M) | 10-K |
| Cash | $6.4M, plus $4.0M restricted | 10-K |
| Debt (principal) | $19.6M: convertible notes $8.7M (mature July 25, 2024); NYDIG loan $9.2M (in default); Navitas loan $1.7M | 10-K |
| 9.0% Series A preferred | 3.06M shares; $25 liquidation preference; $8.6M of dividends in arrears; total claim $85.1M | 10-K |
| Common shares | 2.84M (Mar 28, 2024), after a 1-for-25 reverse split in October 2023 | 10-K cover |
| Audit opinion | Going-concern paragraph | 10-K |

**Sites (12/31/2023)**

| Site | MW | Soluna's share | Activity | FY2023 revenue / cash cost |
|---|---|---|---|---|
| Sophie, Murray, KY | 25 | 100% | Hosting | $6.0M / $3.2M |
| Dorothy 1A, Silverton, TX | 25 | 15% (Spring Lane Capital owns 85%) | Hosting, from May 2023 | $6.9M / $4.4M |
| Dorothy 1B, Silverton, TX | 25 | 51% (Navitas owns 49%) | Proprietary mining, 817 PH/s at 29.9 J/TH | $6.8M / $3.4M |
| Dorothy 2, Silverton, TX | 50 | 100% | Shovel-ready | — |
| Kati, TX | 166 | 100% | Early development | — |

Soluna's attributable operating capacity is 41.5 MW, and its attributable FY2023 revenue is $10.5M.

## 3. Strategic rationale: what holds and what doesn't

**What holds**
- **Owning capacity is cheaper than renting it.** Dorothy hosting earned a cash margin of about $18/MWh (my estimate from the 10-K site table, after a 10% haircut for the halving). That margin is what a third-party host keeps, and MARA saves it by self-hosting.
- **Curtailment is a revenue line.** Dorothy enrolled in ERCOT demand response in December 2023. On a run-rate basis this is worth about $32k per MW per year (assumption: the December run-rate with a 50% haircut).
- **Ready-to-build capacity saves time.** Dorothy 2 has its power and land in place, so it could be energized in 2025.

**What doesn't**
- **"Own Dorothy outright" is not available.** Soluna owns 15% of Dorothy 1A and 51% of Dorothy 1B. Buying Soluna would give MARA minority or joint-venture positions with partners who hold the economics.
- **Moving MARA miners into existing Soluna sites is not a saving.** Those sites are already full of paying hosting customers. Replacing those customers with MARA's own miners only moves the margin from one line to another, so I give it no value.
- **The capital structure takes the value.** The preferred claim ($85.1M at liquidation value) is larger than any reasonable value for the business, and the notes and the NYDIG loan need to be dealt with in 2024.
- **The ESG benefit is real but cannot be quantified.** I treat it as qualitative.

## 4. Valuation

### 4.1 Market value and capital structure (3/28/2024)

| | $M |
|---|---|
| Common equity (2.84M shares × $2.88) | 8.2 |
| Series A preferred at market (3.06M × $2.79) | 8.5 |
| Debt principal | 19.6 |
| Less cash | (6.4) |
| **EV attributable to Soluna** | **30.0** |
| Plus non-controlling interests (book) and debt at carrying value | 26.6 |
| EV, consolidated | 56.5 (2.7× FY2023 revenue) |

I use the attributable figure throughout. It is the value of what a buyer of the holding company actually gets: $30.0M, or about $0.72M per attributable operating MW.

### 4.2 Trading comparables

| Peer | EV ($M) | EV / Revenue | EV / EH/s ($M) |
|---|---|---|---|
| MARA | 5,451 | 14.1× | 221 |
| RIOT | 2,229 | 7.9× | 180 |
| CLSK | 3,902 | 18.2× (LTM Dec-23) | 390 |
| CORZ | 1,131 | 2.3× | 67 |
| HUT | 1,141 | n.m. | 181 |
| IREN | 365 | n.m. | 65 |
| BITF | 661 | 4.5× | 102 |
| WULF | 808 | 11.7× | 147 |
| **Peer median (ex-MARA)** | | **7.9×** (25th–75th pct: 4.5–11.7×) | **147** |

EV is market cap plus debt and preferred, less cash, using balance-sheet-date shares and prices from 3/28/2024. CORZ uses its post-bankruptcy 3/31/2024 balance sheet. HUT and IREN revenue is not comparable because of a transition period and a June fiscal year.

At these multiples, Soluna's attributable revenue would be worth $48–84M. **I do not rely on this.** The peers are large self-miners whose valuations price in bitcoin exposure and growth pipelines. Soluna is a minority-owned hosting business with a going-concern opinion, and its own market value is $30.0M. EV/EBITDA is left out on purpose: FY2023 EBITDA across the group includes fair-value gains on bitcoin.

### 4.3 Precedent transactions ($ per MW)

| Date | Transaction | MW | Price | $M / MW |
|---|---|---|---|---|
| Jan 2024 | MARA buys Generate Capital sites (Granbury, TX; Kearney, NE) | 390 | $179.0M | 0.46 |
| Mar 2024 | MARA buys Applied Digital's Garden City, TX site | 200 | $87.3M | 0.44 |

Two pieces go into the precedent value:
- Soluna's 41.5 attributable operating MW, valued at $0.44–0.46M per MW.
- Dorothy 2, valued at 20–30% of that per-MW price to reflect development risk (an assumption).

Together they give **$22.5–25.9M**, below the $30.0M market value. On this basis Dorothy 2 rights are worth roughly $0.09–0.14M per MW.

### 4.4 Discounted cash flow

**Discount rate**

| Input | Value | Basis |
|---|---|---|
| Risk-free rate | 4.20% | 10-year Treasury, 3/28/2024 (FRED) |
| Equity risk premium | 4.60% | Damodaran implied ERP, January 2024 |
| Unlevered beta | 2.42 | Median of 7 peers, 2-year weekly vs. S&P 500 |
| Target debt / capital | 25% | Assumption |
| Relevered beta | 3.23 | No tax shield (NOLs) |
| Company-specific premium | 3.0% | Assumption: micro-cap, going concern, minority-owned sites |
| Cost of equity | 22.1% | |
| Cost of debt | 14.0% | Rate on the NYDIG loan, used as a proxy |
| **WACC** | **20.0%** | 20.04% before rounding; MARA's own cost of equity is about 20.7% as a cross-check |

**Operating assumptions**
- **Bitcoin price:** held flat at $70,745. This is not a price forecast. Bitcoin sensitivities are shown separately.
- **Network and hashprice:** network hashrate of 625 EH/s in Q2–Q4 2024 and 775 EH/s in 2025, with 3.125 BTC block subsidy plus 0.25 BTC in fees. That gives a hashprice of $55.0/PH/day in Q2–Q4 2024 and $44.4/PH/day in 2025.
- **Site margins** (from FY2023 site data):
  - Dorothy hosting: $0.136M per MW-year
  - Sophie: $0.111M per MW-year
  - Dorothy 1B: mines through 2025, then is assumed to move to hosting
- **Uptime:** 85%.
- **Maintenance capex:** $0.01M per MW-year.
- **Corporate G&A:** standalone, $10.0M in 2024 rising 3% a year, against $11.1M of cash G&A in FY2023. Under MARA, $2.5M.
- **Dorothy 2 build:** $0.45M per MW, or $22.5M, spent over 2024–25. This is an assumption set at the low end of what MARA paid per MW for operating sites. The project reaches 25% of run-rate in 2025 and is at full run-rate from 2026.
- **Taxes:** 0% standalone, because of NOLs. 21% under MARA, ignoring NOLs because of the §382 limit.
- **Timing:** 2024 covers only Q2–Q4. Cash flows are discounted at mid-period, and terminal growth is 2%.

**Results: attributable EV, $M**

| Case | Base (20%, 2%) | Range (WACC 18–22%, g 1–3%) | Implied terminal EV/EBITDA |
|---|---|---|---|
| Standalone (existing sites, standalone G&A) | (31.1) | (36.2) to (27.3) | n.m. |
| Under MARA (G&A cut, Dorothy 2 built) | 17.6 | 12.4 to 25.0 | 4.6× |
| Dorothy 2 only, before purchase price | 9.5 | 5.6 to 15.0 | 4.6× |

**Sensitivity: Under-MARA EV ($M)**

| WACC \ g | 1% | 2% | 3% |
|---|---|---|---|
| 18% | 21.2 | 23.0 | 25.0 |
| 19% | 18.6 | 20.1 | 21.8 |
| 20% | 16.3 | **17.6** | 19.1 |
| 21% | 14.2 | 15.4 | 16.7 |
| 22% | 12.4 | 13.4 | 14.5 |

**Bitcoin price (Under-MARA EV)**
- $50k: $14.8M
- $70.7k: $17.6M
- $100k: $21.3M

Value is driven mostly by hosting margins and G&A, not by the bitcoin price. On its own, Soluna's corporate overhead is larger than the attributable site cash flow, which explains why the market prices the company mainly as an option on future development.

### 4.5 Valuation summary (attributable EV, $M)

| Method | Low | High |
|---|---|---|
| Market, unaffected (3/28/2024) | 30.0 | 30.0 |
| Precedent transactions ($/MW) | 22.5 | 25.9 |
| DCF, standalone | (36.2) | (27.3) |
| DCF, under MARA | 12.4 | 25.0 |
| DCF, Dorothy 2 only | 5.6 | 15.0 |
| Comps, EV/Revenue (shown, not relied on) | 47.6 | 83.6 |
| **Cost of the whole company at $4.00 per share** | **37.9** | **37.9** |

## 5. Deal structure and financing

### 5.1 Tested and rejected: tender for all of Soluna

To control Soluna, MARA would have to deal with every claim, not just the common stock:

| Component | Terms | $M |
|---|---|---|
| Common | $4.00 per share × 2.91M fully diluted shares. Premium of 38.9% to the $2.88 spot price and 18.7% to the $3.37 30-day VWAP | 11.6 |
| Series A preferred | Tender at $3.50 per share, a 25.4% premium to market. Leaving it in place would leave an $85M senior claim. On a change of control, holders can convert, but only up to a cap of 0.2817 common shares each, which is worth $1.13 at $4.00. | 10.7 |
| Convertible notes | Repaid at the greater of par or as-converted value ($4.7M of the notes convert at $3.78) | 9.0 |
| NYDIG and Navitas loans | Repaid at principal (the NYDIG settlement value is not verified) | 10.9 |
| Less cash acquired | | (6.4) |
| **Transaction enterprise value (TEV)** | 1.7× FY2023 revenue | **35.9** |
| Fees | Assumption | 2.0 |
| **Total cost** | | **37.9** |

- **NPV:** $17.6M of value minus $37.9M of cost gives **–$20.3M**.
- **Common at zero:** with the common acquired for nothing, NPV is still –$8.3M. With the preferred bought at market, it is –$6.2M.
- **Downside stress:** across residual G&A of $1.5–3.5M and WACC of 18–22%, NPV ranges from –$9.8M to –$28.6M.
- **Paying in stock does not help.** It would mean issuing 0.99M MARA shares (0.37% dilution) for the same negative-NPV asset. The original's "stock-based consideration with a price cap" is not supported by either source document, and it fails on value whatever currency is used.

### 5.2 Recommended: all-cash purchase of the Dorothy 2 project rights

| Term | Proposal |
|---|---|
| Asset | Dorothy 2 (50 MW, Silverton, TX): land and site rights, interconnection and power arrangements, permits, and engineering |
| Price | **Up to $6.0M in cash**: $4.0M at closing plus a $2.0M earn-out if 45 MW or more is energized by September 30, 2025. That is $0.12M per MW, within the $0.09–0.14M/MW implied by the precedents. |
| Value to MARA | **$9.5M** (range $5.6–15.0M). The price plus fees has a present value of $5.9M, so NPV is **+$3.6M** and MARA pays 62% of the value. |
| Financing | Cash on hand. $29.0M in total: price, $22.5M build, and $0.5M of fees. That is 8% of MARA's $357.3M of year-end cash. No new debt and no shares issued. |
| Ownership impact | 0% dilution |
| EPS impact | –$0.003 per share in 2025E (–0.3% of FY2023 diluted EPS). +$0.008 in 2026E (+0.8%). Includes D&A on price and capex over 7 years and lost interest on the cash at the 3-month T-bill rate of 5.23%. |
| Conditions | Assignment of the power and interconnection arrangements, with ERCOT and utility consents. Fixed-price EPC bid at or below **$0.50M per MW**: NPV is +$1.8M at $0.50 and breaks even at $0.55. Lien releases. Soluna board approval. |
| Ongoing | Optional O&M contract with Soluna on market terms. Right of first offer (ROFO) on Kati. |
| Regulatory | Well below the 2024 HSR threshold of $119.5M. No filing. |

**Why cash.** Soluna needs liquidity: it had $6.4M of cash against notes maturing in July 2024. Cash at closing is the most valuable thing MARA can offer, and MARA has plenty. The earn-out shifts construction and interconnection timing risk back to the seller. Issuing stock for a $6M asset would add disclosure work and gain nothing.

**Cost in context.** All in, at $0.57M per MW for price plus build, Dorothy 2 costs more per MW than the operating sites MARA bought in Q1 2024. It is a bolt-on that earns its cost of capital, not a substitute for those purchases. The EPC gate is the main protection.

## 6. Synergies

| Item | Whole company | Dorothy 2 asset deal | Basis |
|---|---|---|---|
| Corporate G&A removed | $7.7M/yr from 2025, with $2.5M one-time cost to achieve | — (no overhead acquired) | $10.3M standalone less $2.6M residual (assumption) |
| Self-hosting margin on new capacity | $8.4M/yr EBITDA from 2026 | $8.4M/yr EBITDA from 2026 | (Dorothy margin $0.136M + demand response $0.032M) × 50 MW |
| MARA miners moved into existing Soluna sites | $0 | $0 | Displaces paying hosting customers; not incremental |
| AI/HPC conversion | Not valued | Not valued | Upside only; no contracted demand |
| Funding cost | Included | Included | Build capex funded by MARA at its cost of capital |

The original claimed $8–12M of cost synergies and $5–10M of revenue synergies. Most of that was hosting savings on capacity that is already rented to other customers, so it was counted twice.

## 7. Risks

| Risk | Effect | Mitigation |
|---|---|---|
| Build cost overrun | Each +$0.10M/MW cuts NPV by about $3.7M. Breakeven is $0.55M/MW. | Fixed-price EPC at or below $0.50M/MW as a closing condition |
| Hosting margin compression after the halving | Breakeven margin is $0.115M per MW-year, 16% below base | Self-hosting (MARA keeps the margin); demand response income |
| Power rights cannot be transferred | Deal fails | Assignment and consents are conditions; no payment until close |
| Seller insolvency (going concern, NYDIG default) | Fraudulent-transfer or lien challenge | Price shown to be fair against precedents; lien releases at close; earn-out held back |
| Partner rights (Spring Lane Capital, Navitas) over Dorothy 2 | Could block or delay the deal | Diligence item; not disclosed in the 10-K (unverified) |
| ERCOT curtailment and policy | Lower uptime or demand response income | 85% uptime assumed; demand response is valued at a 50% haircut |
| Opportunity cost | Operating sites were available at $0.44–0.46M/MW | Keep the deal small; it does not compete with larger acquisitions |
| Whole-company path, if pursued | Preferred holdouts; note maturity; ~$10M of overhead | Not recommended |

## 8. Recommendation

1. **Do not acquire Soluna Holdings.** At $4.00 per share, the TEV of $35.9M is twice the $17.6M the business is worth to MARA. Buying out the preferred, the notes and the loans uses up any control value.
2. **Buy Dorothy 2 for up to $6.0M in cash** ($4.0M at closing plus a $2.0M earn-out). Close only with a fixed-price build at or below $0.50M per MW and assignable power rights. Expected NPV is +$3.6M; there is no dilution and no HSR filing.
3. **Keep the larger site program going.** Operating capacity at about $0.45M per MW was the better use of MARA's capital in 2024. Dorothy 2 adds to that program and does not replace it.

---

## What happened next (hindsight, not used in the valuation)

- **Soluna built Dorothy 2 itself.** Spring Lane Capital agreed in July 2024 to finance up to $30M of a resized 48 MW project, about $0.63M per MW. Construction finished in November 2025, after phased energization from Q1 2025.
  - At that build cost, the asset deal above would have had an NPV of about –$2.9M. That is why the EPC gate was needed.
  - The September 2025 earn-out milestone would likely not have been met.
- **MARA was already a Soluna customer.** It signed a co-location agreement with Soluna at Project Sophie dated January 3, 2024. This was disclosed in a March 2025 loan agreement and was not named in the FY2023 10-K. MARA could get Soluna capacity by contract without buying the company.
- **Soluna's revenue grew and its share count exploded.**
  - Revenue was $38.0M in FY2024 and $29.7M in FY2025. Net losses were $(63.3)M and $(53.4)M.
  - Shares outstanding reached 244.6M by August 2026, about 86 times the March 2024 count.
  - SLNH closed at $0.72 on October 14, 2026, down 75% from the valuation date.
- **MARA's results swung.** Revenue was $656.4M in FY2024 and $907.1M in FY2025. Net income went from $541.3M to a net loss of $(1,311.5)M as bitcoin fair-value marks moved.

## Method and sources

- **Primary:** SEC EDGAR 10-K filings for FY2023 (Soluna, MARA and 10-K/A, RIOT, CORZ, HUT 10-KT, WULF), Bitfarms 40-F, CleanSpark 10-K/10-Q, IREN 6-K, the Applied Digital 8-K, and Soluna's Series A 424B5 for the preferred terms.
- **Market data:** Yahoo Finance daily prices and volumes; FRED (DGS10, DTB3); Damodaran implied ERP; blockchain.com difficulty and fee data; FTC HSR thresholds.
- **Model:** `model/MARA_Soluna_model.xlsx`, with live formulas, reconciled to `model/model.py`.
- **Figure register:** `figures.json` lists value, unit, as-of date, source URL or "assumption", and a note for each figure.
