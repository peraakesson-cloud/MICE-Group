# 27 - Financial model for sydafrikaresor.se: revenue bridge by month, gross margin, marketing spend, CAC, headcount, cash flow

Status: Draft v1 for CEO and CFO review | Prepared 2026-11-02 | Accountable role: CFO (model owner), with an FP&A analyst (model keeper) and the Programme owner (inputs from the growth council)
Inherits: `/home/user/MICE-Group/docs/00-strategy.md` (binding: sections 9 bridge, 10 funnel, 11 marketing budget, 12 P&L and cash, 13.1 units, 14 guardrails G1-G10, 16 gates, 18 assumptions A1-A26). Evidence: R09 (regulation), R10 (economics), R11 (conversion). Plans in English.
Files delivered with this plan (same folder):
- `/home/user/MICE-Group/docs/workstreams/27-finance-model.csv` - the live model: inputs plus a 48-month table, all formulas (open in Excel or LibreOffice).
- `/home/user/MICE-Group/docs/workstreams/27-finance-model-values.csv` - the same model with values calculated for the core scenario at 20% gross margin, readable without a spreadsheet.

Rules followed: we have no internal company data. Nothing about the company's real turnover mix, margin, payroll, supplier terms or booking curve is stated as fact. Every number that is not taken from the strategy file or a cited URL is marked [ASSUMPTION] or [A#]. The model is built so the CFO can overwrite the yellow-equivalent input cells (top block of the CSV) and the whole bridge, P&L and cash view re-computes.

---

## 1. Why this workstream exists and what it must answer

The strategy makes economic claims that nobody can yet check month by month: "programme nets about -1.7 MSEK in 2027 and -2.2 MSEK in 2028", "break-even gross margin about 23.5%", "peak working capital 5-12 MSEK", "stop-loss at -3.0 MSEK at 30 Jun 2027". This workstream turns them into one auditable model so that every gate (strategy 16.2) is decided on numbers that tie to the same definitions.

The model must answer five questions, in this order of importance:

1. **Does growth pay?** Incremental gross profit minus incremental cost, by month, under five gross margin cases and five turnover scenarios.
2. **Are we inside the guardrails?** Marketing per booking, marginal marketing cost per marketing-created booking, marketing share of turnover, loss limit, prepaid supply cap (G1, G4, G7, G10).
3. **Can we deliver?** Bookings, travellers, handling hours and FTE by month (strategy 13.1, 13.3).
4. **Can we fund it and survive a shock?** Customer funds held, supplier prepayments, refund exposure for the next 90 days, guarantee, FX exposure (strategy 12.4, G3, G6).
5. **What do we do when it says no?** Pre-agreed triggers that change spend, hiring and supply commitments (section 9).

### Objectives (measurable)

| # | Objective | Target | Date | Strategy link |
|---|---|---|---|---|
| F1 | Model v1 (this file's CSV) reviewed by CFO; definitions of turnover, gross margin, marketing and "programme" agreed in writing | Signed off | 20 Nov 2026 | A8, section 2 |
| F2 | Data baseline replaces A1, A7, A8, A10, A18, A23, A24 with actuals (margin by product, 40 MSEK composition, payroll, booking and payment curve, supplier terms, guarantee level) | All priority-1 and priority-2 inputs replaced | 15 Dec 2026 (Gate 0) | Gate 0 |
| F3 | 13-week cash forecast live and updated weekly; 24-month monthly cash model (this CSV extended with actual bank and supplier timing) | Live, reconciled to bank | 15 Dec 2026 | 12.4 |
| F4 | Order-book margin report (booked turnover, booked gross margin, by departure month) produced weekly | Live | 31 Jan 2027 | Section 4 north star |
| F5 | Gate packs (one page per gate) generated from the model with the same definitions | Gate 1 pack ready 20 Mar 2027 | 20 Mar 2027 | 16.2 |
| F6 | Forecast accuracy: rolling 3-month turnover and cost forecast within +/-7% of actual | Achieved for two consecutive quarters | 30 Sep 2027 | 16.3 |
| F7 | Rolling re-forecast each month; scenario table updated after each gate | Every month, by working day 8 | From 8 Jan 2027 | 16.3 |
| F8 | Treasury policy package approved: FX policy, liquidity facility term sheet, guarantee limit | Approved | FX 20 Nov 2026; facility term sheet 31 Jan 2027 | G3, G6 |

---

## 2. Definitions the model uses (CEO and CFO to confirm, A8)

| Term | Definition used | Why it matters |
|---|---|---|
| Turnover | Gross booked package value, recognised in the month of departure (departure-year basis). Excludes MICE and Pacific/Australia/NZ unless the CEO widens scope (GL2) | If the 40 MSEK is net revenue, deposit-based or includes other units, every figure changes. See the funding test in section 4.3 |
| Gross margin | (Turnover - cost of sales) / turnover, where cost of sales is flights, lodges, DMC, guides, transfers and in-trip direct cost. Promotions and value-adds (cap 2% of turnover, G2) sit inside cost of sales | G1 and the 23.5% break-even depend on it |
| Programme | Everything above the 2026 base of 40 MSEK of turnover and the 2.6 MSEK baseline marketing | The programme P&L is incremental, as in strategy 12.1-12.2 |
| Incremental gross profit | Gross profit on all turnover minus a fixed 8.0 MSEK baseline gross profit (20% of 40 MSEK) | Same convention as strategy 12.2, so the model ties to it |
| Order book | Booked-not-departed turnover by departure year, with its booked gross margin | North star (strategy section 4) |
| Booking | One booking with 2.2 travellers on average [A1] | Converts turnover to units |

---

## 3. Approach

**One model, three layers, one set of inputs.**

1. **Input block** (top of the CSV): scenario selector, gross margin, turnover by scenario and year, marketing budget by scenario, hiring flags and dates, annual cost parameters, seasonality, payment timing. Every input carries its assumption number from the strategy register.
2. **Monthly table** (48 rows, Jan 2026 to Dec 2029): turnover, gross profit, bookings, marketing, FTE, each cost line, net contribution, cumulative net, stop-loss flag, customer funds, supplier prepayments, net customer-funded position, working-capital need, guarantee, 90-day refund exposure. Months are departure months. 2029 exists only so that cash look-ahead for late-2028 departures has a data source (2029 is a flat placeholder at the 2028 level, [A]).
3. **Annual summary** (SUMIFS on the table) with every guardrail metric and the strategy checkpoints, ready to paste into gate packs.

**Design choices that matter**

- **Departure-month recognition for turnover and gross profit; cash-month recognition for marketing and people.** This means early months look worse than the economics warrant (costs lead, profit lags by 4-12 months). The model shows this honestly and a separate booked-contribution KPI (section 8) is used as the leading indicator.
- **Strategy convention kept** so results can be compared: incremental gross profit = GP on all turnover - 8.0 MSEK; cost lines are the seven lines of strategy 12.1.
- **Cash is modelled as balances by months-to-departure, not as a full bank ledger.** For each future departure month the model knows the share of the price the customer has paid and the share of cost the supplier has been paid, as a function of months remaining. Summing across future departures gives customer funds held, supplier prepayments outstanding and the net. This isolates the part of cash that growth changes. It is not a bank balance: it excludes opening cash, overhead, tax and the programme's own losses (section 7 adds those).
- **Scenarios flex turnover, marketing, hiring and variable costs together**, so the downside and shock cases include the cost cuts the strategy promises (Tranche B not released, hires after the first two deferred) and show whether those cuts are sufficient.

**Reproduction check (done).** At 20% margin, core scenario, the model gives net contribution of -1.72 MSEK (2027) and -2.22 MSEK (2028), cumulative -3.94, and a break-even gross margin of 23.6% and 23.4%. Strategy 12.2 shows -1.70, -2.22, -3.9 and about 23.5%. The only difference is 2027 headcount: 1.225 MSEK computed from start dates (11 months of one FTE plus 5 months of two) versus 1.2 rounded in the strategy. The model was recalculated in LibreOffice with no formula errors, and the five gross margin rows (17, 18.5, 20, 22, 25%) match strategy 12.2 to within 0.05 MSEK.

---

## 4. What the model shows (core scenario unless stated; all [A] inputs)

### 4.1 Revenue bridge by month

Departure-month turnover, MSEK. Seasonality is an assumption (profile A for 2027, profile B for 2028 after season spreading L10 moves 1 point each into Apr, May, Oct and Nov) [ASSUMPTION: no departure-month data; peaks Jul-Sep and Dec reflect dry-season safari and festive travel; replace with actual 2023-2026 departures by month].

| Month | 2027 share | 2027 base | 2027 incr | 2027 total | 2028 share | 2028 base | 2028 incr | 2028 total |
|---|---|---|---|---|---|---|---|---|
| Jan | 8% | 3.20 | 0.64 | 3.84 | 7% | 2.80 | 1.71 | 4.51 |
| Feb | 5% | 2.00 | 0.40 | 2.40 | 5% | 2.00 | 1.22 | 3.22 |
| Mar | 6% | 2.40 | 0.48 | 2.88 | 6% | 2.40 | 1.46 | 3.86 |
| Apr | 7% | 2.80 | 0.56 | 3.36 | 8% | 3.20 | 1.95 | 5.15 |
| May | 7% | 2.80 | 0.56 | 3.36 | 8% | 3.20 | 1.95 | 5.15 |
| Jun | 8% | 3.20 | 0.64 | 3.84 | 8% | 3.20 | 1.95 | 5.15 |
| Jul | 11% | 4.40 | 0.88 | 5.28 | 10% | 4.00 | 2.44 | 6.44 |
| Aug | 11% | 4.40 | 0.88 | 5.28 | 10% | 4.00 | 2.44 | 6.44 |
| Sep | 10% | 4.00 | 0.80 | 4.80 | 10% | 4.00 | 2.44 | 6.44 |
| Oct | 8% | 3.20 | 0.64 | 3.84 | 9% | 3.60 | 2.20 | 5.80 |
| Nov | 7% | 2.80 | 0.56 | 3.36 | 8% | 3.20 | 1.95 | 5.15 |
| Dec | 12% | 4.80 | 0.96 | 5.76 | 11% | 4.40 | 2.68 | 7.08 |
| **Total** | 100% | 40.00 | 8.00 | **48.00** | 100% | 40.00 | 24.40 | **64.40** |

Lever contribution by quarter (MSEK, net of the 15% overlap haircut, strategy 9.1). Levers are spread in proportion to departures; in reality L4 (SEO lag 4-9 months) and L9 (supply-gated) are back-loaded, so the CFO should replace this with each lever owner's own phasing at the first monthly re-forecast [ASSUMPTION].

| Lever | 2027 Q1 | Q2 | Q3 | Q4 | 2027 | 2028 Q1 | Q2 | Q3 | Q4 | 2028 |
|---|---|---|---|---|---|---|---|---|---|---|
| L1 Market tailwind | 0.23 | 0.26 | 0.38 | 0.32 | 1.2 | 0.43 | 0.58 | 0.72 | 0.67 | 2.4 |
| L2 Conversion | 0.38 | 0.44 | 0.64 | 0.54 | 2.0 | 0.63 | 0.84 | 1.05 | 0.98 | 3.5 |
| L3 Paid | 0.23 | 0.26 | 0.38 | 0.32 | 1.2 | 0.72 | 0.96 | 1.20 | 1.12 | 4.0 |
| L4 SEO and AI-search | 0.04 | 0.04 | 0.06 | 0.05 | 0.2 | 0.27 | 0.36 | 0.45 | 0.42 | 1.5 |
| L5 Social, creators, PR | 0.08 | 0.09 | 0.13 | 0.11 | 0.4 | 0.36 | 0.48 | 0.60 | 0.56 | 2.0 |
| L6 Revenue per traveller | 0.00 | 0.00 | 0.00 | 0.00 | 0.0 | 0.18 | 0.24 | 0.30 | 0.28 | 1.0 |
| L7 Repeat and referral | 0.15 | 0.18 | 0.26 | 0.22 | 0.8 | 0.54 | 0.72 | 0.90 | 0.84 | 3.0 |
| L8 B2B and partners | 0.19 | 0.22 | 0.32 | 0.27 | 1.0 | 0.63 | 0.84 | 1.05 | 0.98 | 3.5 |
| L9 New products | 0.15 | 0.18 | 0.26 | 0.22 | 0.8 | 0.45 | 0.60 | 0.75 | 0.70 | 2.5 |
| L10 Season spreading | 0.08 | 0.09 | 0.13 | 0.11 | 0.4 | 0.18 | 0.24 | 0.30 | 0.28 | 1.0 |
| **Core increment** | 1.52 | 1.76 | 2.56 | 2.16 | **8.0** | 4.39 | 5.86 | 7.32 | 6.83 | **24.4** |

Gap levers GL1-GL4 (+15.6 MSEK in 2028) are not in the core table. The stretch scenario in the model (selector 4) adds them as a block to turnover (80 MSEK in 2028), with stretch marketing (+1.0 MSEK) and one extra FTE, but no cost for GL1-GL4 themselves (Nordic localisation, acquisition, wholesale systems), which are unquoted. Stretch results are therefore a best case on cost (section 4.2).

### 4.2 P&L, marketing, CAC and headcount (annual summary, MSEK unless stated)

| Metric | 2026 base | 2027 core | 2028 core | Guardrail or strategy figure |
|---|---|---|---|---|
| Turnover | 40.0 | 48.0 | 64.4 | Strategy 9.1 |
| Gross profit at 20% | 8.00 | 9.60 | 12.88 | |
| Incremental gross profit | 0 | 1.60 | 4.88 | 12.2 |
| Bookings (2.2 travellers, SEK 45k / 46k per traveller) | 404 | 485 | 636 | 13.1 (405 / 485 / 637) |
| Total marketing | 0.30 Q4 prep | 3.60 | 4.60 | 11.1 |
| Marketing share of turnover | | 7.5% | 7.1% | G4 at most 7.5% |
| Blended marketing per booking (SEK) | | 7,425 | 7,229 | G4 at most 8,000 |
| Marginal marketing cost per marketing-created booking (SEK) | | 35,357 | 18,400 | G4 cap 20,000; 2027 is an investment year above cap by design (strategy: about 36k) |
| First-trip gross profit per booking (SEK) | | 19,800 | 20,240 | Basis of the 20,000 cap |
| Incremental marketing (vs 2.6 baseline) | 0.30 | 1.00 | 2.00 | 11.1 |
| Incremental FTE at year end (loaded SEK 0.7 M each) | | 3 | 5 | 12.1, 13.3 |
| Headcount cost | | 1.225 | 3.50 | 12.1 (1.2 / 3.5) |
| Consultant-equivalents required (20.6 h per booking, 1,450 h each) | 5.7 | 6.9 | 9.0 | 13.1 (5.6 / 9.1); +1.2 and +3.3 vs 2026 |
| Total incremental cost (excl. Q4 2026 prep) | | 3.32 | 7.10 | 12.1 (3.30 / 7.10) |
| **Net contribution** | -0.30 (prep) | **-1.72** | **-2.22** | 12.2 |
| Cumulative net, excl. Q4 2026 prep | | -1.72 | -3.94 | 12.2 (-3.9) |
| Worst cumulative net, incl. Q4 2026 prep | | -2.02 | -4.24 | Stop-loss test uses this (stricter) |
| Break-even gross margin on whole book | | 23.6% | 23.4% | 12.2 (about 23.5%) |

Quarterly path (MSEK): turnover 9.1 / 10.6 / 15.4 / 13.0 in 2027 and 11.6 / 15.5 / 19.3 / 18.0 in 2028; total marketing 1.08 / 0.58 / 0.79 / 1.15 and 1.38 / 0.74 / 1.01 / 1.47; cumulative net contribution from Nov 2026 -0.67 / -0.91 / -1.33 / -2.02 at the end of each 2027 quarter and -2.95 / -3.37 / -3.66 / -4.24 for 2028 (marketing is phased 53% into Nov-Mar, strategy 11.3, [A]).

**Net contribution by gross margin case (core turnover; ties to strategy 12.2):**

| Gross margin | 2027 net | 2028 net | Worst cumulative, incl. Q4 2026 prep | Stop-loss status |
|---|---|---|---|---|
| 17% | -3.16 | -4.15 | -7.61 | Breaches -3.0 in Nov 2027 (-3.08; -3.46 at Dec 2027) and passes the -6.0 limit during H2 2028 (-5.62 at Jun, -7.61 at Dec 2028) |
| 18.5% | -2.44 | -3.18 | -5.93 | Inside both limits, little headroom |
| 20% | -1.72 | -2.22 | -4.24 | Inside |
| 22% | -0.76 | -0.93 | -1.99 | Inside |
| 25% | +0.68 | +1.00 | -0.30 (Dec 2026 prep; -0.22 within 2027-28) | Inside; cumulative turns positive by Jun 2027 (+0.07) and ends 2028 at +1.38 |

**Scenarios (20% margin; 17% margin in brackets):**

| Scenario | 2027 / 2028 turnover | 2027 net | 2028 net | Worst cumulative incl. prep | Year-end FTE 2028 | Total incremental cost 2028 |
|---|---|---|---|---|---|---|
| Core | 48 / 64.4 | -1.72 (-3.16) | -2.22 (-4.15) | -4.24 (-7.61) | 5 | 7.10 |
| Downside (Tranche B not released, hires after first two deferred) | 44 / 55 | -0.84 (-2.16) | +0.02 (-1.63) | -1.33 (-4.10) | 2 | 2.98 |
| Shock (about -35% bookings) | 38 / 46 | -1.85 (-2.99) | -1.38 (-2.76) | -3.53 (-6.05) | 2 | 2.58 |
| Stretch 80 (gap levers, no GL cost included) | 48 / 80 | -1.72 (-3.16) | -1.49 (-3.89) | -3.51 (-7.35) | 6 | 9.49 |
| Market only, no programme (3%) | 41.2 / 42.4 | -1.47 (-2.71) | -1.54 (-2.82) | -3.02 (-5.53) | 2 | 2.02 |

Read-outs the CFO should take from this table:

1. **At 20% margin the downside case is nearly self-funding in 2028 (+0.02) only because the cost base is cut to committed lines and two hires.** That is the value of the gated design: the programme's loss is a decision, not a fate.
2. **The "market only" row loses 3.0 MSEK cumulative because it still carries the pre-approved lines** (one consultant, booking-ops coordinator, technology builds, fees and in-trip support; marketing stays at the 2.6 baseline and Q4 2026 prep is set to zero in this scenario, so the figure has no prep in it); it shows what the first commitments cost if the programme is then stopped at once. The no-regret commitments before Gate 1 (two hires, technology, fees) cost about 2.0 MSEK a year at run-rate; the loss budget must cover them.
3. **Stretch at 80 MSEK is not profitable enough to fund its missing costs.** At 20% margin it nets -1.49 MSEK in 2028 before any cost of the gap levers; at 17% it nets -3.89. GL1 (Nordic localisation), GL3 (acquisition) and GL4 (wholesale systems) need their own cost lines and margin tests before the CEO commits to 80 MSEK (they carry margin tests of at least 20%, 18% and 15% after commission).
4. **The shock case alone stays inside both loss limits at 20% margin** (cumulative -2.15 MSEK at Dec 2027 and -3.53 at Dec 2028, incl. prep, because costs are cut to the committed level). **Shock plus a 17% margin breaches both** (-3.29 at Dec 2027, -6.05 at Dec 2028). A category-wide shock therefore becomes a loss-limit event only when it coincides with margin erosion, which is why order-book margin is tracked as closely as the order book.

### 4.3 The funding test the strategy flags but cannot resolve

At 20% gross margin the 40 MSEK base gives 8.0 MSEK of gross profit. A 22-person company with a loaded cost of SEK 0.7 M per person [A18] costs 15.4 MSEK in salaries alone, plus 2.6 MSEK marketing and rent, systems and other overhead [ASSUMPTION: no payroll or P&L data]. Even allowing that the 22 employees also serve the Pacific, Australia/NZ and MICE units, whose revenue is not in the 40 MSEK, the South Africa line cannot fund a team of its size at 20%. At least one of these is therefore true, and the CFO must establish which one at Gate 0 (15 Dec 2026):

1. Gross margin on the South Africa book is well above 20%. Salaries (15.4) plus marketing (2.6) alone are 18.0 MSEK, i.e. 45% of 40 MSEK before any rent, systems or other overhead, so a margin of 45% or more would be needed to fund 22 staff from this line alone. That is above the 25-35% typical for multi-day tours in the one secondary benchmark we hold (AtlasPerk https://atlasperk.com/guides/finance-for-travel/tour-pricing-margins/, US-oriented, directional only), so this explanation alone is unlikely to be sufficient and most likely combines with (2)-(4).
2. The 40 MSEK is net revenue (commission and margin), not gross booked value. Then bookings and cash flows are far larger than modelled, and the guarantee, levy and refund exposure are understated.
3. Loaded cost per employee is below SEK 0.7 M, or only part of the 22 work on South Africa.
4. The business is subsidised by other units.

The model reacts correctly to the answer for (1) because margin is one input (cell B5): each point of gross margin on the whole book is worth 0.48 MSEK in 2027 and 0.64 MSEK in 2028. It does not yet react to (2); if turnover is net revenue, the CFO sets the turnover table to gross booked value and uses the margin as a percentage of that value. Which of (1)-(4) holds changes the answer to "does growth pay" more than any other input.

### 4.4 Cash, guarantee and exposure (core; ranges depend on supplier terms [A])

Base payment timing [ASSUMPTION, replace with booking and payment curves by 15 Dec 2026]: customers pay 6% as registration fee (modelled at 8 months before departure; the brand's SEK 3,000 registration fee per person is about 6% of a SEK 46k per-traveller price, and is payable within 10 days of confirmation; fee and stepped cancellation scale from sydafrikaresor.se terms, per R10), 40% at 4 months before departure (the "further 40%" is a search snippet; timing unverified) and 54% at 2 months. Suppliers are paid 30% of flight cost at 6 months and the rest (70%) at 3 months; lodges and DMCs 20% of ground cost at 5 months and the rest 1 month before departure (matches F-A4 and F-A5 and the CSV). Flights are 45% of cost of sales [ASSUMPTION].

| Item (peak in year, MSEK) | 2027 | 2028 | Strategy figure or guardrail | Reading |
|---|---|---|---|---|
| Customer funds held for future departures | 15.5 | 19.7 | Customer prepayments are protected, not growth capital | Large, and it is a liability under the guarantee regime |
| Supplier prepayments outstanding (flights + ground) | 10.8 | 13.8 | G7 cap SEK 4 M | Over the cap under base terms. The same timing assumptions put the 2026 base business (40 MSEK) at a peak of about 9.0 MSEK, also over the cap (the CSV flags every month "OVER CAP"). Either the assumed supplier timing is harsher than reality or G7 as written is already breached today; the supplier terms register decides which |
| Supplier prepayments, ground only (lodges, DMC) | 4.0 | 5.0 | G7 cap SEK 4 M | At the cap in 2027, over it in 2028 |
| Net customer-funded position (customers minus suppliers), range over the year | +2.8 to +5.0 | +3.9 to +6.2 | | Positive: customers fund suppliers |
| Working-capital need (timing only) | 0 | 0 | 5-12 (A24) | Base terms contradict the strategy's cautious view |
| Refund exposure, next 90 days of departures | 12.8 | 15.8 | Facility 10-15 (A24) | Exceeds the top of the planned range in 2028 |
| Guarantee at 10% of 12-month liable turnover | 6.4 | 6.4 | Increment 1.5 / 2.4 / 3.7 at 6.25 / 10 / 15% | Increment over the 40 MSEK base: 2.4 MSEK |
| Fund levy 0.6% on all turnover | 0.29 | 0.39 | 0.24 at 40, 0.48 at 80 (R09) | Ties |
| Foreign-currency cost (60% of turnover) | 28.8 | 38.6 | 38.6 in 2028 (12.4) | Ties |
| Open FX exposure at 60% hedge | 11.5 | 15.5 | 11.6-19.3 | Ties |
| Cost of a 10% adverse move on open exposure | 1.2 | 1.5 | 1.2-1.9 | Ties |

**Sensitivity to supplier terms (the answer is not robust, which is the point):**

| Supplier timing variant | Peak working-capital need 2027 / 2028 | Peak supplier prepaid 2027 / 2028 | Peak refund exposure 2027 / 2028 |
|---|---|---|---|
| Base (above) | 0 / 0 | 10.8 / 13.8 | 12.8 / 15.8 |
| Supplier-first: flights 50% at 10 months and 50% at 4; ground 30% at 8 months and 70% at 2 | 6.8 / 7.1 | 20.8 / 24.2 | 12.8 / 15.8 |
| Customer pays late: instalment 30% at 4 months, 64% at 1 month | 0 / 0 | 10.8 / 13.8 | 8.9 / 11.1 |
| Supplier-light: flights 20% at 5 months, 80% at 3; ground 5% at 3 months, 95% at 1 | 0 / 0 | 8.6 / 10.9 | 12.8 / 15.8 |

Conclusions for the CFO:

- **Whether the company funds growth or customers do depends entirely on when airlines and lodges are paid.** Under the strategy's cautious "supplier-first" reading the working-capital need is 6.8-7.1 MSEK, inside its 5-12 range. Under the favourable base it is zero. Both are consistent with the strategy; neither is evidence. Fixed-departure block seats and flagship lodge deposits (strategy 13.2) push towards supplier-first, so **plan on supplier-first until the supplier terms register (below) says otherwise.**
- **The prepaid supply cap of SEK 4 M (G7) is not compatible with the allocation plan under any timing tested.** Even with ground-only prepayments the cap is reached in 2027 and breached in 2028 at 64.4 MSEK. Either the cap is defined as lodge and DMC deposits only and raised to about SEK 5-6 M for 2028, or deposit terms are negotiated down, or the cap stays and some flagship allocation is not taken. The CEO decides at Gate 0 and the definition goes into G7.
- **The 90-day refund exposure (12.8 / 15.8 MSEK) is a gross figure** (customer money received for the next three months of departures) before recovery from suppliers and before airline refunds; stretch is 13.2 / 19.7 and the shock case is smaller because turnover falls. The facility range 10-15 MSEK in the strategy covers core in 2027 but not 2028 or stretch. Proposal for CEO and CFO decision (it widens strategy G6, which says 10-15 MSEK): negotiate a committed facility of at least SEK 16-20 M for 2028 [ASSUMPTION: 15.8 gross exposure plus margin for stretch], and treat the bank limit for hedging, guarantee and facility as one negotiation (strategy 12.4).
- **Guarantee, at 10% planning rate, is 6.4 MSEK in core (8.0 at stretch)** against a 4.0 MSEK equivalent for the 40 MSEK base; the increment is 2.4 MSEK core and 4.0 MSEK stretch. Rate and current level are unknown (A19). Kammarkollegiet notification (13 Nov 2026) comes before any campaign.
- **Programme funding need.** Add the programme's own cumulative loss to the timing position: -4.2 MSEK at the end of 2028 in the core case (-7.6 at 17% margin). So the peak call on the company's own money in the core case is roughly SEK 4-5 M of programme losses, plus 0-7 MSEK of timing (zero under base terms, about 7 under supplier-first), plus 2.4 MSEK of guarantee increment if it must be cash-collateralised. This is a planning range of SEK 4-14 M at 20% margin (about 17 M at 17% margin: 7.6 + 7.1 + 2.4), not a forecast, and it excludes any loss in the base business. The low end applies only if supplier terms are favourable and the guarantee is not cash-collateralised.

---

## 5. Tactics (what the finance workstream does)

| # | Tactic | Detail | Owner (role) | Date |
|---|---|---|---|---|
| T1 | Freeze definitions | Turnover, gross margin, programme, order book, booking, marketing cost (what is in and out: agency fees, tools, creators, staff time) | CFO + CEO | 20 Nov 2026 |
| T2 | Data pull | The nine-item request in section 10 to the booking system, ledger, payroll, bank and supplier contracts | CFO + FP&A analyst | Items 1-5 by 30 Nov, rest by 15 Dec 2026 |
| T3 | Replace assumptions | Overwrite [A] inputs in the CSV with actuals; keep a change log of every replaced input and the effect on 2028 net contribution | FP&A analyst | 15 Dec 2026, then monthly |
| T4 | Margin by product and by booking | Gross margin per booking at quote time (CRM field), margin by ladder tier (strategy 8.2 P4), margin after partner commission (G5) | CFO + Head of Product | Quote field live 31 Jan 2027 |
| T5 | Order-book margin report | Booked turnover, booked gross margin, share of order book below 18% and below 15%, by departure month | FP&A analyst + Analytics lead (WS 16) | 31 Jan 2027 |
| T6 | Cash model and 13-week forecast | Replace the stylised payment timing with real instalment dates and supplier schedules; weekly 13-week view | CFO | 15 Dec 2026 |
| T7 | Treasury package | FX policy (hedge 50-70% of confirmed foreign-currency cost, layered monthly, confirmed bookings only), liquidity facility (size from section 4.4), guarantee limit with three-month buffer | CFO | FX 20 Nov 2026; term sheet 31 Jan 2027 |
| T8 | Guarantee and levy | Growth forecast to Kammarkollegiet before campaigns; reporting calendar for the 0.6% levy (reporting 31 May / 30 Sep / 31 Jan, payment 10 Jun / 10 Oct / 10 Feb, R09 via Visita https://visita.se/viktiga-forandringar-i-resegarantilagen/) | CFO | 13 Nov 2026; calendar by 30 Nov 2026 |
| T9 | Pricing and FX buffer review | Quarterly check that list price carries a 6% buffer and that the price-adjustment clause is in terms (20-day notice, 8% cancel threshold, Konsumentverket https://www.konsumentverket.se/lagar/paketreselagen-konsument/) | CFO + Head of Product | First review 31 Jan 2027, then quarterly |
| T10 | Marketing efficiency tracking | Blended and marginal marketing cost per booking, incremental ROAS from holdouts (WS 16) entered in the model each month | FP&A analyst + Head of Marketing | Monthly from 8 Jan 2027 |
| T11 | Capacity and hiring model | Quotes and bookings to hours and FTE (strategy 13.1); trigger table in section 9 | CFO + Head of Sales | 31 Jan 2027, time study replaces A23 |
| T12 | Monthly re-forecast and gate packs | One page per gate from the model, same definitions as the weekly dashboard (WS 16) | FP&A analyst | Monthly by working day 8; Gate 1 pack 20 Mar 2027 |
| T13 | Gap-lever economics | Separate P&L sheet for GL1-GL4 with their own cost, margin test and cash; no gap lever enters the plan without it | CFO + CEO | GL3 screening model 31 Jan 2027; others by Gate 1 |
| T14 | Controls | Model is version-controlled; inputs changed only by FP&A analyst with CFO approval; every gate decision cites the model version | CFO | From 20 Nov 2026 |

---

## 6. How the CSV works: formulas explained

File: `27-finance-model.csv`. English function names, comma separator. Dates are real dates. Cell addresses below refer to the file as delivered. The input block is rows 1-110; the monthly table is rows 115 (headers) to 163 (Jan 2026 to Dec 2029); the annual summary follows. Change inputs only; never type over a formula.

### 6.1 Input block (rows 4-110)

| Cell or range | Input | Default | Used by |
|---|---|---|---|
| B4 | Scenario selector: 1 Core, 2 Downside, 3 Shock, 4 Stretch 80, 5 Market only | 1 | Turnover, marketing and hiring tables via INDEX |
| B5 | Gross margin on all turnover, 2027 onward | 20% | Gross profit, first-trip gross profit, prepaid factor |
| B6 | Gross margin for 2026 baseline and baseline gross profit | 20% | Incremental gross profit |
| B7, B8 | Baseline turnover 40 MSEK; baseline marketing 2.6 MSEK | | Baseline columns; incremental marketing |
| B9, B10 | Loaded cost per FTE 0.7 MSEK; fund levy 0.6% | | Headcount cost; levy |
| B11-B13 | Travellers per booking 2.2; handling hours per booking 20.6; productive hours per FTE 1,450 | | Bookings; consultant-equivalents |
| B14, B15 | Stop-loss through Dec 2027 (3.0); cumulative loss limit from Jan 2028 if the 2028 loss budget is released at Gate 3 (6.0) | | Stop-loss flag |
| B16-B21 | Guarantee rate (10%), foreign-currency cost share (60%), hedge ratio (60%), FX shock (10%), prepaid cap (4.0), facility range (10 / 15) | | Guarantee, FX, flags |
| Scenario tables | Turnover by scenario and year; marketing by scenario (Q4 2026, 2027, 2028); hiring flags H2b, H3, H4 by scenario | Strategy 9.2, 11.1, 12.1, 13.3 | Annual parameters |
| Hires | Start date and number for H1 consultant (1 Feb 2027, 1), H2a booking-ops coordinator (1 Aug 2027, 1), H2b second consultant (1 Aug 2027, 1), H3 consultant and product manager (1 Jan 2028, 2), H4 stretch (1 Jan 2028, 1) | Strategy 12.1, 13.3 | FTE column |
| Annual parameters | Selected turnover; revenue per traveller (45,000 / 45,000 / 46,000 / 46,000 SEK); selected marketing; technology builds (0.6 / 0.3); core turnover; scale factors; commissions (0.15 / 0.50), hedge, guarantee and payment fees (0.15 / 0.35), in-trip support (0.15 / 0.30); marketing-created turnover (2.8 / 11.0); order-book shares (30% / 50% / 75%) | Strategy 12.1, 4, 10 | Cost lines and metrics |
| Seasonality | Departure share by month, profile A (2026-27) and profile B (2028-29), marketing phasing | [ASSUMPTION] | Monthly spread |
| Payment timing | Customer events (lead months, share) and supplier events (lead months, share of cost); factor table for 1-12 months before departure | [ASSUMPTION] | Cash columns |

Scale factors: `sinc = MAX(0, selected turnover - 40) / (core turnover - 40)` and `stot = selected turnover / core turnover`. Variable cost lines are the core amount times the factor, so costs fall in downside and shock and rise in stretch.

### 6.2 Monthly table (columns A-AH, rows 116-163)

| Col | Header | Formula in words | Excel form (row r) |
|---|---|---|---|
| A | Month | First of month, Jan 2026 + 1 month per row | `=EDATE(A r-1,1)` |
| B, C | Year, Mon | Calendar parts | `=YEAR(A)`, `=MONTH(A)` |
| D | Dep share | Share of annual departures that fall in this month; profile A to 2027, profile B from 2028 | `=IF(B<=2027,INDEX(profileA,C),INDEX(profileB,C))` |
| E | Annual turnover | Selected scenario's turnover for that year | `=INDEX(turnover row,B-2025)` |
| F | Turnover | Annual turnover times share | `=E*D` |
| G | Baseline turnover | 40 MSEK times share | `=base*D` |
| H | Incremental turnover | Turnover minus baseline | `=F-G` |
| I | Gross profit | Turnover times margin (2026 uses baseline margin) | `=F*IF(B=2026,B6,B5)` |
| J | Baseline gross profit | Baseline turnover times baseline margin | `=G*B6` |
| K | Incremental GP | Gross profit minus baseline gross profit (blank after 2028) | `=I-J` |
| L | Travellers | Turnover in SEK divided by revenue per traveller | `=F*1e6/INDEX(rpt,B-2025)` |
| M | Bookings departing | Travellers divided by travellers per booking | `=L/B11` |
| N | Total marketing | Annual budget times phasing; Q4 2026 prep split over Nov and Dec | `=annual*INDEX(phasing,C)` |
| O | Incremental marketing | Total minus baseline 2.6 spread by the same phasing (2026: all of it) | `=N-B8*INDEX(phasing,C)` |
| P | Incremental FTE | Sum of hired groups whose start date has passed, times the scenario flag for gated groups | `=IF(A>=h1,1,0)+...+IF(A>=h2b,1,0)*flag` |
| Q | Headcount cost | FTE times loaded cost divided by 12 | `=P*B9/12` |
| R | Tech builds | Annual amount divided by 12 | `=tech/12` |
| S | Fund levy | 0.6% of positive incremental turnover (the levy on the base is already in the base cost) | `=B10*MAX(0,H)` |
| T | Partner commissions | Core annual amount times scale factor times departure share | `=comm*sinc*D` |
| U | Hedge, guarantee, payment fees | Core annual amount times turnover factor divided by 12 | `=hed*stot/12` |
| V | In-trip support | Core annual amount times scale factor times departure share | `=trip*sinc*D` |
| W | Total incremental cost | O + Q + R + S + T + U + V | |
| X | Net contribution | K - W | |
| Y | Cumulative net (from Nov 2026) | Running sum of X from Nov 2026, including the SEK 0.30 M prep | `=SUM(X$nov:X r)` |
| Z | Stop-loss flag | "STOP-LOSS" if Y is worse than -3.0 (to Dec 2027) or -6.0 (from Jan 2028) | |
| AA | Customer funds held | Sum over the next 12 departure months of turnover times the share the customer has paid when that many months remain | `=SUMPRODUCT(factor customer,F r+1:F r+12)` |
| AB | Supplier prepaid outstanding | Same, using supplier paid share times (1 - margin) | `=SUMPRODUCT(factor supplier,F r+1:F r+12)` |
| AC | Net customer-funded position | AA - AB | |
| AD | Working-capital need | MAX(0, -AC) | |
| AE | Guarantee-liable next 12 months | Sum of the next 12 months' turnover | `=SUM(F r+1:F r+12)` |
| AF | Guarantee at selected rate | AE times guarantee rate | |
| AG | Refund exposure next 90 days | Next three months' turnover times customer-paid share at 1, 2 and 3 months | `=SUMPRODUCT(...,F r+1:F r+3)` |
| AH | Prepaid vs cap flag | "OVER CAP" if AB exceeds the cap | |

Cash columns (AA-AH) run to Dec 2028; later rows are blank because they would need 2030 data. All P&L columns after Dec 2028 are blank for the same reason.

### 6.3 Annual summary

Each row uses `SUMIFS(column, Year column, year)` for flows and `MAXIFS`/`MINIFS` for peaks and troughs. Derived rows: marketing share of turnover, blended marketing per booking (`marketing x 1e6 / bookings`), marketing-created bookings (`core marketing-created turnover x sinc x 1e6 / (revenue per traveller x travellers per booking)`), marginal marketing cost (`incremental marketing x 1e6 / marketing-created bookings`; zero when the scenario is below the 40 MSEK base), consultant-equivalents (`bookings x hours per booking / productive hours`), break-even gross margin (`(40 x baseline margin + total incremental cost) / turnover`), guarantee increment (`peak guarantee - rate x 40`), FX rows (`turnover x 60%`, times `1 - hedge`, times FX shock) and order-book checkpoints (`turnover x 30% / 50% / 75%`: 2028 gives 19.3, 32.2, 48.3 against the strategy's 19, 32, 48; 2027 gives 14.4 at 31 Dec 2026 as an extra, derived checkpoint, and 24 and 36 at March and June).

### 6.4 How to run a scenario

1. Set B4 (scenario) and B5 (margin). Read the annual summary.
2. To test supplier timing, edit the supplier events (lead months and shares) in the payment-timing block; the factor table and the cash columns update.
3. To test a hiring delay, change the start date of any hire; to cancel a gated hire set its scenario flag to 0.
4. To load actuals, add real months over the first 10 rows of the table (2026 actuals) and replace the seasonality profiles with actual departure shares.

---

## 7. Budget for this workstream (SEK)

Costs of the programme itself are in the strategy (marketing 3.6 / 4.6 MSEK; incremental cost 3.3 / 7.1 MSEK). This section covers only the finance capability to run it. All are [ASSUMPTION: market-rate estimates, to be quoted]; they are not in the strategy's incremental cost table and should be absorbed in the technology and hedging/guarantee/payment-fee lines (0.6 and 0.15 MSEK in 2027) or approved by the CEO as an addition.

| Item | Q4 2026 | 2027 | 2028 | Note |
|---|---|---|---|---|
| FP&A analyst time (existing finance staff, 0.3 FTE; loaded SEK 0.7 M per FTE) | 35,000 | 210,000 | 210,000 | In-house, not incremental if capacity exists; otherwise a contractor |
| External model review (independent check of formulas and assumptions, once before Gate 1, once before Gate 3) | 40,000 | 40,000 | 0 | |
| Treasury and FX advisory (policy, hedge platform set-up, facility negotiation) | 60,000 | 60,000 | 40,000 | |
| Legal and guarantee advice (Kammarkollegiet, price clause, partner terms) | 40,000 | 30,000 | 20,000 | Overlaps with WS on regulation |
| BI and data connection (booking system, CRM and bank to model; dashboard licence) | 30,000 | 90,000 | 90,000 | With WS 16 and WS 25 |
| **Total** | **205,000** | **430,000** | **360,000** | Of which in-house time SEK 35k / 210k / 210k |

Bank costs (guarantee commission, facility commitment fee, hedging spread) are in the programme cost table (0.15 / 0.35 MSEK), not here.

---

## 8. KPIs and targets

| KPI | Definition | Target | Frequency | Source |
|---|---|---|---|---|
| Order book vs plan | Booked-not-departed turnover by departure year vs checkpoint | 24 MSEK (31 Mar 2027), 36 (30 Jun 2027), 19 (31 Dec 2027 for 2028); stretch 24 | Weekly | Booking system |
| Order-book gross margin | Booked margin / booked turnover on the order book | At least 20% blended, at least 19% on new bookings at Gate 1 | Weekly | Booking system with margin field |
| Booked contribution (leading indicator) | Order-book gross profit on bookings made in the period minus incremental cost in the period | Positive for cumulative 2028-departure bookings by 31 Dec 2027 at 20% margin [ASSUMPTION; set after baseline] | Monthly | Model |
| Net contribution (departure basis) and cumulative | Model column X, Y | Core: -1.7 (2027), -2.2 (2028); not worse than -3.0 cumulative to Dec 2027 | Monthly | Model |
| Forecast accuracy | Absolute error of 3-month rolling turnover and cost forecast | Within 7% | Monthly | Model vs ledger |
| Marketing share of turnover | Total marketing / turnover | At most 7.5% | Monthly | Ledger |
| Blended marketing per booking | Total marketing / bookings | At most SEK 8,000 | Monthly | Model |
| Marginal marketing cost per marketing-created booking | Incremental marketing / marketing-created bookings | At most SEK 20,000 from 2028; 2027 about 35,000 is expected | Quarterly | Model plus WS 16 incrementality |
| Incremental ROAS on prospecting | Holdout-measured | At least 4x to continue, 5x to scale | Per test | WS 16 |
| Gross margin by product | Per ladder tier, per channel | No product below 15% after commission; ladder entry at least 18% | Monthly | Ledger |
| Discount and promotion leakage | Value-adds and discounts / turnover | At most 2% (G2) | Monthly | Booking system |
| Consultant utilisation | Hours used / hours available | Within the limit set from the first 60-day baseline (G9) | Monthly | Time study |
| Customer funds held; supplier prepaid; net position | Model AA, AB, AC reconciled to bank and ledger | Prepaid within the cap decided at Gate 0 | Weekly in peak season, monthly otherwise | Treasury |
| 90-day refund exposure vs committed facility | Model AG vs facility | Facility at least 1.0x exposure; sized per section 4.4 | Monthly | Treasury |
| FX hedge ratio | Hedged / confirmed foreign-currency cost | 50-70% | Monthly | Treasury |
| Guarantee headroom | Limit less forecast liable turnover x rate | Three-month buffer (G6) | Monthly | Treasury |
| Cumulative programme net contribution vs loss budget | Model Y | Not worse than -3.0 MSEK at 30 Jun 2027 (G10, binding); the model also flags -3.0 at any month to Dec 2027 and -6.0 from Jan 2028 once released (extension of G10, CEO to confirm, A25) | Monthly | Model |
| Incremental gross profit vs plan | Model K, annual | 1.6 (2027), 4.9 (2028) at 20% margin | Monthly | Model, ledger |
| Revenue and margin per traveller | Turnover and gross profit / travellers | SEK 45,000 flat in 2027, 46,000 in 2028 [A1]; margin per traveller not falling (F-R12) | Monthly | Booking system |
| Margin after partner commission | Gross margin net of 8-12% commission, by partner | At least 15%; single partner under 10% of turnover (G5) | Monthly | Ledger |
| Marketing and cost spend vs phased budget | Actual vs plan by line, committed vs gated | Within 5% of phased budget; gated lines released only at gate | Monthly | Ledger, model |
| Cancellation and refund rate | Cancelled value / booked value, by cause | Baseline from actuals by 15 Dec 2026, then target set (benchmark 5-10% leakage, secondary, AtlasPerk via R10) | Monthly | Booking system |
| 13-week cash forecast accuracy | Absolute error of forecast vs bank, weekly | Within 10% [ASSUMPTION] | Weekly | Treasury |
| Levy and guarantee compliance | Levy reports and payments filed on time (31 May / 30 Sep / 31 Jan; paid 10 Jun / 10 Oct / 10 Feb) | 100% on time | Per tertial | Treasury |

---

## 9. Decision rules the model enforces

| Trigger (from the model) | Action | Owner | Strategy link |
|---|---|---|---|
| Cumulative net (Y) worse than -3.0 MSEK at 30 Jun 2027 (strategy G10 and 12.3) or two or more gate metrics missed; the model also applies the -3.0 test in every month to Dec 2027 and -6.0 from Jan 2028 once released (stricter extension, CEO to confirm) | Freeze gated lines and Tranche B; defer unstarted hires; convert planned fixed headcount to variable; target at least 30% run-rate cost reduction within 60 days | CEO on CFO recommendation | 12.3, G10 |
| Order-book margin on new bookings under 19% for two consecutive months (the model flags this before the departure-based loss does) | Reprice rate cards on renewal; stop value-add promotions; CEO decision on the 18% floor (G1) | CFO + Head of Product | 12.2, G1 |
| Supplier prepaid (AB) above the cap | No new deposits until reduced; release or renegotiate | CFO + Head of Product | G7 |
| Refund exposure (AG) above 90% of committed facility | Stop paid campaigns that lift next-90-day volume until the facility is increased | CFO | G6 |
| Marginal marketing cost per marketing-created booking above SEK 20,000 for two consecutive quarters from Q1 2028 | Cut Tranche B in the worst channels (WS 16 holdouts) | Head of Marketing | G4 |
| Required consultant-equivalents exceed available by 10% | Release the next gated hire if margin and SLA conditions pass; else seasonal or agency capacity | Head of Sales + CFO | G9, 13.3 |
| Hedge ratio outside 50-70% or open exposure cost of a 10% move above 1.9 MSEK | Execute hedges to policy | CFO | G3 |

A weakness the model exposes: the stop-loss in G10 is measured on departure-basis net contribution, which lags. At 17% margin the cumulative net at 30 Jun 2027 is -1.50 MSEK (incl. prep), well inside -3.0, although the programme is already on a path to breach -3.0 in November 2027 and to -7.6 MSEK by December 2028. Costs lead and gross profit lands at departure, mostly in Q3 and Q4, so a 30 Jun 2027 test on departure-basis contribution cannot catch a margin problem. The order-book margin trigger above is the operative early warning; recommend the CEO adopts both.

---

## 10. Data requests (priority order; owner CFO unless stated)

1. Definition and composition of the 40 MSEK (gross booked value or net revenue; South Africa vs extensions vs other; by month 2023-2026 YTD). Needed by 30 Nov 2026.
2. Gross margin by product, tier and channel; cost of sales by supplier type (flights, lodges, DMC, guides, other); promotions and discounts.
3. Departure-month and booking-month history 2023-2026 YTD (seasonality, booking curve, lead time) from the booking system.
4. Payment history: customer instalment dates and amounts; supplier payment dates and amounts; deposits paid to airlines and lodges; open prepayments at 31 Oct 2026.
5. Payroll and headcount of the South Africa team, split with Pacific and MICE; loaded cost; hours per file (Head of Sales).
6. Marketing spend by channel 2025-2026 YTD and all marketing-related fees and tools (replaces A18 baseline 2.6 MSEK).
7. Current travel guarantee: type, amount, issuer, cost, Kammarkollegiet decision and renewal date; levy payments since 1 Apr 2026.
8. Bank facilities, covenants, hedging history and open positions; foreign-currency cost share.
9. Overheads and the full company P&L for 2025 and 2026 YTD, to run the funding test in section 4.3.

---

## 11. Timeline

| Date | Milestone | Owner (role) |
|---|---|---|
| Mon 2 Nov - Fri 6 Nov 2026 | Model v1 circulated; definitions memo; data requests issued | CFO |
| 13 Nov 2026 | Kammarkollegiet growth-forecast call (uses model guarantee and exposure figures) | CFO |
| 20 Nov 2026 | Definitions signed (F1); FX policy approved (F8) | CFO + CEO |
| 30 Nov 2026 | Data items 1-5 delivered; levy calendar; first replacement of [A] inputs | FP&A analyst |
| 1 Dec 2026 | Paid test and early-booking campaign start, only after the guarantee call and FX policy; weekly order-book margin placeholder | Head of Marketing + CFO |
| 15 Dec 2026 | **Gate 0:** baseline pack, 13-week and 24-month cash model, margin and 40 MSEK definition, funding test (4.3), prepaid cap decision, 2027 target recut | CFO |
| 8 Jan 2027 | First monthly re-forecast | FP&A analyst |
| 31 Jan 2027 | Order-book margin report live; quote margin field; liquidity facility term sheet; capacity model; GL3 screening model | CFO |
| 1 Feb 2027 | First hire starts (cost lands in column P/Q) | Head of Sales |
| 20 Mar 2027 | Gate 1 pack (order book 24 MSEK, margin 19%, marketing per booking, supply) | FP&A analyst |
| 31 Mar 2027 | **Gate 1** | CEO |
| 30 Jun 2027 | **Gate 2:** order book 36 MSEK; cumulative net not worse than -3.0; GL3 go/no-go; 2028 guarantee limit | CFO |
| Sep 2027 | Second external model review; 2028 budget draft from re-based model | CFO |
| 31 Oct 2027 | **Gate 3:** 2028 budget (4.6 MSEK marketing) and 2028 loss budget (up to 3.0 MSEK) | CEO |
| 31 Dec 2027 | 2028 order book 19 MSEK (core) or 24 (stretch) | CFO |
| 31 Mar and 30 Jun 2028 | Gates 4 and 5 | CFO |

---

## 12. Dependencies

| Dependency | From | Needed by | Impact if late |
|---|---|---|---|
| Booking-system extract with margin and payment dates | CFO / Head of Sales | 30 Nov 2026 | Model stays on assumptions; Gate 0 cannot confirm margin |
| CRM stage and source fields; offline conversion data | WS 13, WS 16 | 31 Jan 2027 | No marketing-created booking count, so marginal cost cannot be measured |
| Hiring plan and start dates | WS 24 | 31 Dec 2026 | Cost and capacity lines mis-dated |
| Supplier terms register (deposits, release dates, FX clause) | WS 02, WS 23 | 15 Dec 2026 | Cash conclusions in 4.4 unreliable; prepaid cap undecided |
| Pricing and revenue-management rules, FX buffer | WS 03 | 20 Nov 2026 | Margin path (A7) unmodelled |
| Measurement of incrementality | WS 16 | Gate 1 | Tranche B release cannot be decided |
| Technology costs and quotes | WS 25 | 31 Dec 2026 | Tech line (0.6 / 0.3 MSEK) stays an estimate |
| Scope decision (GL1, GL2) and baseline definition | CEO | 31 Mar 2027 | Turnover table cannot change |
| Bank and Kammarkollegiet dialogue | CFO | 13 Nov 2026 and 31 Jan 2027 | Campaign start and facility sizing delayed |

---

## 13. Risks

| # | Risk | Likelihood / impact | Early signal | Mitigation | Owner (role) |
|---|---|---|---|---|---|
| F-R1 | Gross margin is below 20% (down to 17%) and the programme loses 7+ MSEK | High / High | Order-book margin under 19% | Margin field on every quote; reprice on renewal; section 9 triggers | CFO |
| F-R2 | Turnover definition differs (net revenue vs gross), invalidating cash, guarantee and refund figures | Medium / High | Data item 1 | Resolve before Gate 0; rescale model | CFO |
| F-R3 | Funding test fails: the base business cannot support 22 staff at 20% margin, so the loss budget is not available | Medium / High | Overhead data (item 9) | Section 4.3; CEO decision on scope and cost of the programme | CEO + CFO |
| F-R4 | Supplier-first payment profile ties up 7 MSEK or more and the prepaid cap is breached | High / Medium | Supplier terms register | Negotiate balance dates; cap definition decision; facility sized to 16-20 MSEK | CFO |
| F-R5 | FX: rand strengthens (SEK/ZAR 1.696 on 2 Nov 2026, krona down 7% in 12 months, Trading Economics https://tradingeconomics.com/sekzar:cur); a 10% adverse move on open exposure costs 1.2-1.5 MSEK | High / Medium | Weekly rate | Hedge 50-70%; 6% buffer; clause | CFO |
| F-R6 | Shock (travel warning, Gulf closure): 90-day refund call of 10-16 MSEK within weeks | Low / Very high | UD warning, airline cancellations | Committed facility; disruption playbook; refund exposure KPI | CFO |
| F-R7 | Model risk: formula error or stale input drives a wrong gate decision | Medium / High | Reconciliation breaks | Independent review twice, change log, version control, tie-out to strategy tables | CFO |
| F-R8 | Seasonality and booking curve are wrong; monthly view misleads | High / Low-Medium | Actual departures vs profile | Replace with actuals at Gate 0 | FP&A analyst |
| F-R9 | Hiring ahead of margin proof: fixed cost is committed (about SEK 0.29 M per FTE for the first five months) before Gate 1 | Medium / Medium | Stop-loss flag | Pre-approve only two hires; gated hires after Gate 1 | CEO |
| F-R10 | Guarantee regime or levy changes (reform context: levy continues until the fund reaches SEK 1.5 bn, R09; Visita https://visita.se/viktiga-forandringar-i-resegarantilagen/) | Medium / Medium | Kammarkollegiet guidance | Annual review; guarantee line in model | CFO |
| F-R11 | Gap levers added to the plan without cost or margin lines | Medium / High | CEO presents 80 MSEK as plan | T13: no gap lever enters the plan without its own P&L sheet | CFO |
| F-R12 | Pass-through: higher supply prices raise turnover but not margin, flattering growth | High / Medium | Margin per traveller flat while turnover per traveller rises | Report margin per traveller beside turnover; G1 | CFO |

---

## 14. First 30 days (2 Nov - 2 Dec 2026)

| Week | Action | Output | Owner (role) |
|---|---|---|---|
| 1 (2-6 Nov) | Circulate model v1 and this plan; CEO appoints finance owner; issue data requests 1-9; book Kammarkollegiet call (13 Nov) | Model v1, request list | CFO |
| 1 | Pull departure and payment history for 2025-2026 from the booking system (data items 3-4) | Raw extracts | FP&A analyst |
| 2 (9-13 Nov) | Definitions memo (section 2) to CEO; first pass at the 40 MSEK composition; draft FX policy; prepare forecast pack for the guarantee call (core: peak liable 64.4 MSEK, increment 2.4 MSEK at 10%) | Memo, FX draft, pack | CFO |
| 2 (13 Nov) | Kammarkollegiet growth-forecast call and bank guarantee dialogue | Written feedback | CFO |
| 3 (16-20 Nov) | Replace seasonality profiles and revenue per traveller with actuals; replace payment timing with real instalments and supplier terms; rerun scenarios | Model v1.1, change log | FP&A analyst |
| 3 (20 Nov) | Definitions signed; FX policy approved; supplier-terms register started (with Head of Product) | Signed memo, policy | CFO + CEO |
| 4 (23-27 Nov) | Payroll and overhead data in; run the funding test (4.3); compute real break-even gross margin; margin by product | Funding test result | CFO |
| 4 | Levy and guarantee reporting calendar; bank facility outline and prepaid-cap options paper | Calendar, paper | CFO |
| 5 (30 Nov - 2 Dec) | Model v1.2 with actuals for items 1-5; 13-week cash forecast first version; pre-brief for the 1 Dec paid test and early-booking campaign (guarantee and FX preconditions met) | Cash forecast, pre-brief | CFO |
| Rolling | Prepare Gate 0 pack (15 Dec) and reconcile all strategy figures to the model | Draft pack | FP&A analyst |

---

## 15. Assumptions register (workstream 27; replace with company data)

| # | Assumption | Rationale | Replace with | By |
|---|---|---|---|---|
| F-A1 | All strategy assumptions A1, A3, A4, A6, A7, A8, A10, A14, A15, A18, A19, A24, A25 are inherited unchanged | Binding strategy | Actuals per strategy 18 | 15 Dec 2026 |
| F-A2 | Seasonality: profile A 8/5/6/7/7/8/11/11/10/8/7/12% (2026-27); profile B 7/5/6/8/8/8/10/10/10/9/8/11% (2028-29) | Peaks Jul-Sep and Dec for dry-season safari and festive travel; L10 spreading into Apr, May, Oct, Nov; no data | Departures by month 2023-2026 | 30 Nov 2026 |
| F-A3 | Marketing phasing 11/10/9/6/5/5/5/8/9/9/11/12% (53% in Nov-Mar) | Strategy 11.3 says 50-60% of paid in Nov-Mar | Actual spend phasing | 15 Dec 2026 |
| F-A4 | Customer payments: 6% at 8 months, 40% at 4 months, 54% at 2 months before departure | Registration fee 3,000 SEK pp (about 6% of SEK 101k booking), "further 40%" from a search snippet of the brand's terms, balance at about 60 days; timing unverified | Payment history | 15 Dec 2026 |
| F-A5 | Supplier payments: flights 45% of cost (30% at 6 months, 70% at 3); ground 55% (20% at 5, 80% at 1) | Stylised, no supplier data | Supplier terms register | 15 Dec 2026 |
| F-A6 | 2029 turnover equals 2028 (placeholder for cash look-ahead only) | Needed to compute balances at late-2028 months | Plan 2029 | Gate 3 |
| F-A7 | Handling hours per booking 20.6 (8 h + 3 h x 4.2 quotes) | Derived from strategy A23 and 13.1 | Time study | 31 Jan 2027 |
| F-A8 | Marketing-created turnover (L3+L4+L5+L8) is 2.8 MSEK in 2027 and 11.0 in 2028 at core, scaling with incremental turnover in other scenarios | Strategy G4 (28 and 109 bookings) | Attribution plus holdouts | 31 Mar 2027 |
| F-A9 | Downside and shock cost behaviour: marketing at committed level only (2.4 / 3.0 MSEK), no hires beyond H1 and H2a, commissions and fees scaled to turnover | Strategy 11.1, 12.3 | Gate decisions | Each gate |
| F-A10 | Stretch: marketing 3.6 / 5.6 MSEK, 6 FTE, no cost for GL1-GL4 | Strategy 11.1 and 13.3; gap lever costs unquoted | GL cost sheets | Gate 1 |
| F-A11 | Quarterly lever phasing proportional to departures | Simplification | Lever-owner phasing | Jan 2027 |
| F-A12 | Programme funding range SEK 4-14 M at 20% margin, about 17 M at 17% (section 4.4) | Sum of own-losses, timing and guarantee; indicative | 24-month cash model | 15 Dec 2026 |
| F-A13 | Workstream budget SEK 205k / 430k / 360k | Market-rate estimates | Quotes | 31 Jan 2027 |
| F-A14 | Flights 45% of cost of sales | No data | Cost of sales split | 15 Dec 2026 |

---

## 16. Sources

- Strategy file `/home/user/MICE-Group/docs/00-strategy.md` (all MSEK figures, levers, guardrails, gates, A-register).
- Guarantee reform, 0.6% fund levy from 1 Apr 2026, reporting and payment dates, guarantee shrinking toward 6.25%: Visita https://visita.se/viktiga-forandringar-i-resegarantilagen/ ; Kammarkollegiet https://www.kammarkollegiet.se/vara-tjanster/resegaranti/fragor-och-svar-om-resegaranti-for-reseaktorer
- Price changes (20 days, 8% cancel right): Konsumentverket https://www.konsumentverket.se/lagar/paketreselagen-konsument/ ; Paketreselag 2018:1217 https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/paketreselag-20181217_sfs-2018-1217/
- SEK/ZAR 1.696 on 2 Nov 2026, -7% in 12 months: Trading Economics https://tradingeconomics.com/sekzar:cur
- Brand terms (registration fee, cancellation scale): https://www.sydafrikaresor.se/villkor/resevillkor/ (summarised in `/home/user/MICE-Group/docs/research/10-pricing-economics.md`)
- Margin benchmarks (secondary, directional): AtlasPerk https://atlasperk.com/guides/finance-for-travel/tour-pricing-margins/ ; Vinggruppen 4.2% pre-tax margin https://via.tt.se/pressmeddelande/4312196/vinggruppen-levererar-rekordomsattning-och-kraftigt-okat-ebitda-resultat?publisherId=1726617&lang=sv
