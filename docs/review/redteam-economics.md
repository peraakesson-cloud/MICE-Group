# Red-Team Review: Economics (lens: unit economics, CAC, budget, currency, cash)

Reviewer role: red-team skeptic | Date: 2026-11-02 | Reviewed: `/docs/00-strategy.md` (Draft v1) and `/docs/research/01-12`
Question asked: do unit economics, CAC and payback, the marketing budget, currency exposure and cash (deposits, supplier payments, guarantee) hold up?
Convention: facts carry a research-file reference (R04, R05, R07, R09, R10, R11) or are the strategy's own numbers. Everything else is marked **[ASSUMPTION]** with rationale. No internal company data was available. All arithmetic is the reviewer's own and can be re-run once finance replaces the assumptions. Abbreviations: GM = gross margin on turnover, GP = gross profit, FTE costs as in strategy A18 (SEK 0.6-0.8 M loaded each).

---

## 1. Verdict

**The economics do not hold up as written. The plan is a revenue plan with a thin, unproven profit case, and at the margin it assumes (18-25%) the investment is roughly break-even in 2028 and loss-making in 2027, before cash, currency and guarantee effects.**

Red-team view, in order of danger:

1. **The profit case credits the plan with the market's growth.** Strategy section 10 compares +40 MSEK of turnover with the cost of the programme. But +6.0 MSEK of that (lever L1) arrives with no action at all (strategy: "doing nothing" gives about 46 MSEK). The turnover the spend actually buys is about **34 MSEK in 2028 and 13 MSEK in 2027**. At 20% GM that is 6.8 MSEK GP against 6.1-7.5 MSEK of incremental cost: **-0.7 to +0.7 MSEK in 2028**, not the +0.5 to +1.9 shown. The break-even gross margin sits at **about 18-22%, exactly the assumed range.** The go/no-go depends on a number nobody has (section 3).
2. **2027 loses money in the plan case, and the risk-adjusted case loses money in both years** (cumulative about -4 to -7 MSEK by end 2028 before technology builds, section 3.3). The strategy shows no P&L, no monthly cash flow and no funding line.
3. **Paid media economics contradict themselves.** The 8x ROAS assumption, the 5x kill rule, the 3.0 MSEK budget and the +5.0 MSEK credit in L3 cannot all be true (section 4). Incremental ROAS implied by the bridge is about 3x, which is below the 5x break-even at 20% GM.
4. **Average booking value (+4% / +10%) is probably wrong in direction.** The new product ladder, the priority segments and FX/cost inflation pull ABV down or only pass costs through (section 5).
5. **Cash and guarantee are asserted, not modelled.** Illustrative pre-funding of flights alone is 5-10 MSEK in peak [ASSUMPTION], the guarantee delta could be 2.5-6 MSEK, and the only stress test is "10% cancel" (section 7).
6. **Currency:** 10% adverse move removes about 3.8 MSEK of GP at 80 MSEK (24% of the plan's GP). The planned 3-5% price buffer is below both the 7.5% move seen in the last 12 months and the 5-8% operators use (section 6).

Planning implication: do not release the 4.2 MSEK 2027 budget or hire ahead of demand until finance has delivered the margin, ABV and cost-to-serve baseline (strategy section 11 already says 31 Dec 2026). Release in tranches against order-book gates, with a margin gate beside the revenue gate (section 9).

---

## 2. Baseline arithmetic of the plan (reconciled)

| Item | 2026 | 2027 | 2028 | Source |
|---|---|---|---|---|
| Turnover (MSEK) | 40 | 56 | 80 | strategy sec. 2 |
| Bookings | ~405 | ~545 | ~735 | strategy sec. 2 [A1, A9] |
| Revenue per booking (SEK) | ~98,800 | ~102,900 | ~108,800 | derived |
| GP per booking at 20% GM (SEK) | ~19,800 | ~20,600 | ~21,800 | derived [A7] |
| Marketing (MSEK) | 2.6 baseline [A18] | 4.2 (+0.35 in Q4 2026) | 5.6 | strategy sec. 9 |
| Marketing per booking (SEK) | ~6,400 | ~7,700 | ~7,600 | derived |
| Marketing as share of GP at 20% GM | 33% | 37% | 35% | derived |

Observations:
- Marketing consumes about a third of gross profit before any salary, levy, commission or technology cost. Strategy guardrail G4 (7.5% of turnover) sounds modest; against a 20% margin it is 35-37% of GP.
- The SEK 8,000 per booking cap (G4) is an **average** over all bookings, including those that would have come from brand search, repeat and referral. It hides the marginal cost (section 4).
- Strategy section 9 says baseline spend "is unknown" yet A18 sets it at 2.6 MSEK (6.5% of 40). Every "incremental" number depends on that guess. If true baseline is 1.5 MSEK, incremental marketing in 2028 is 4.1 MSEK, not 3.0; if 4.0 MSEK, it is 1.6 MSEK. Total programme cost moves by -1.4 to +1.1 MSEK, as large as the whole claimed profit.

---

## 3. Does growth pay? (section 10 of the strategy re-done)

### 3.1 Correct counterfactual
Doing nothing yields about 46 MSEK in 2028 (L1, strategy). Spending is justified only by the turnover above that. Costs below are the strategy's own (marketing +3.0 MSEK vs baseline; 4-6 FTE; levy), re-based for timing [ASSUMPTION: hires land Q1 2027, about 0.8 of a year of cost in 2027].

| Gross margin on action-driven turnover | 2028 GP on 34 MSEK | 2028 net vs cost 6.1-7.5 | 2027 GP on 13 MSEK | 2027 net vs cost 3.9-5.1 |
|---|---|---|---|---|
| 18% | 6.1 | -1.4 to 0.0 | 2.3 | -2.8 to -1.6 |
| 20% | 6.8 | -0.7 to +0.7 | 2.6 | -2.5 to -1.3 |
| 22% | 7.5 | 0.0 to +1.4 | 2.9 | -2.2 to -1.0 |
| 25% | 8.5 | +1.0 to +2.4 | 3.3 | -1.9 to -0.7 |
| 30% | 10.2 | +2.7 to +4.1 | 3.9 | -1.2 to 0.0 |

2027 cost build [ASSUMPTION]: incremental marketing 1.6 (4.2 less 2.6 baseline), FTE 2.2-3.4, levy on extra turnover 0.08 = 3.9-5.1 MSEK. Q4 2026 prep of 0.35 MSEK comes on top.

### 3.2 Break-even
Break-even GM on action-driven turnover is 6.1/34 = 17.9% to 7.5/34 = 22.1%. The assumed range (18-25%, A7) straddles break-even. One point of GM at 80 MSEK is 0.8 MSEK, so a 1-2 point miss erases the whole 2028 contribution. Note also that the FTE range in the strategy (2.8-4.2 MSEK) understates its own inputs: 4-6 FTE at 0.6-0.8 MSEK is **2.4-4.8 MSEK**, so total programme cost is 5.7-8.0 MSEK, not 6.1-7.5.

### 3.3 Risk-adjusted case (the strategy's own planning view of 66 MSEK)
Action-driven turnover is 20.85 MSEK in 2028 (26.25 less 5.4 for L1 at 90% confidence) and about 9.3 MSEK in 2027.

| | 2027 | 2028 | Q4 2026 prep | Cumulative to end 2028 |
|---|---|---|---|---|
| GP at 20% GM | 1.9 | 4.2 | | 6.1 |
| Programme cost (strategy range, re-timed) | 3.9-5.1 | 6.1-7.5 | 0.35 | 10.4-13.0 |
| Net | -3.2 to -2.0 | -3.3 to -1.9 | -0.35 | **about -4.3 to -6.9 MSEK** |

The plan says it will use the risk-adjusted view "for cash, hiring and guarantees" (strategy 8.1). On that view the programme loses roughly SEK 4-7 M by end 2028 unless costs flex downward with revenue. The stage gates (section 12 of the strategy) are all revenue gates; they do not say which costs fall if a gate is missed. Hires (fixed cost) are the least reversible item.

Fairness: the investment also builds assets (reviews, SEO, list, partner channels) that pay after 2028, and a do-nothing company would likely lose share to rivals that invest, so the real counterfactual is somewhat below 46 MSEK. The strategy should state both, with a 2029-2030 view. As written it shows neither.

### 3.4 Margin assumption is inconsistent with the company's size
At 20% GM, 40 MSEK of South Africa turnover is 8.0 MSEK GP. The 2.6 MSEK marketing assumption (A18) leaves 5.4 MSEK to pay for people and all overhead. At the strategy's own SEK 0.6-0.8 M per FTE that is fewer than 8 FTE with zero rent, IT, insurance or management. The client has about 22 employees, shared with Pacific/Australia/NZ and MICE (client brief); the split is unknown. Either (a) GM is materially above 20% (which would transform the case: +10 points on 80 MSEK is 8 MSEK), (b) turnover is a net or different measure (A8 unresolved), or (c) South Africa is subsidised by other units. **This one reconciliation, done on the real P&L, changes the verdict more than any other item in the plan.** [Data request D1.]

### 3.5 Costs missing from section 10
None of these is in the 6.1-7.5 MSEK, and all are the plan's own proposals [amounts ASSUMPTION unless sourced]:

| Item | Where the strategy proposes it | Indicative size at 2028 |
|---|---|---|
| Promotions and early-booking value-adds (cap 2% of turnover, G2) | G2, section 9.2 | up to 1.6 MSEK total; about 0.8 MSEK incremental. "Funded from supplier rebates" is unsourced. |
| Partner/agent commission 8-12% and affiliate 5-8% (A17) | L8 (6.0 MSEK), G5 | about 0.5-0.7 MSEK on 6 MSEK of partner turnover, plus creator/affiliate pay. Unclear whether the 20% GM is before or after commissions. |
| Website rebuild, CRM and automation platform, tracking, server-side tagging | Section 9 excludes "one-off technology builds"; A18 "to be quoted" | Unquantified. R03 notes a quote-led site with no checkout. |
| Referral and dual rewards (L7, +4.0 MSEK) | R11, section 7.2 P1 | Not in any budget line; CRM line is 0.25-0.30 MSEK in total. |
| Hedging: bank lines, option premia, dealing costs | G3 | Unquantified; "to be quoted". |
| Guarantee instrument fee and any collateral | A19 asserts "small" | Unsourced (section 7). |
| Payment and card fees, insurance-partner revenue share | none | Unquantified. |
| Cancellation leakage (5-10% on fixed departures, R10 sourced via AtlasPerk, low reliability) | G7 attrition at most 10% | On 10% of 80 MSEK fixed-departure-share inventory, can exceed several hundred thousand SEK. |

Taken together, a further 1.5-3.0 MSEK of cost is plausible [ASSUMPTION], enough to turn the plan case at 20% GM negative in 2028.

---

## 4. CAC, payback and the paid media numbers

### 4.1 The paid-media logic is internally inconsistent
- Strategy A15: planning ROAS of at least 8x. The research behind it (R07 section 6) states that ROAS values are "planning scenarios, **not benchmarks**"; the only sourced ROAS-type figure is irrelevant (Pinterest ecommerce 2.3x). The 8x has no empirical basis.
- At 8x, 3.0 MSEK of paid media in 2028 would attribute **24 MSEK** of revenue. The bridge (L3) credits paid with only **+5.0 MSEK** incremental, and R07 itself assumed 16-24 MSEK incremental from paid. Either most attributed revenue is not incremental (brand search, repeat, SEO assist), which is the likely truth, or L3 is understated 3-5 times. The strategy does not say which.
- If baseline paid is about 1.35 MSEK (52% of the assumed 2.6 MSEK baseline, [ASSUMPTION]), incremental paid spend is 0.85 MSEK in 2027 and 1.65 MSEK in 2028. Incremental ROAS implied by L3 is **2.5/0.85 = 2.9x (2027) and 5.0/1.65 = 3.0x (2028)**.
- Break-even ROAS on a gross-profit basis is 1/GM = **5.0x at 20% GM (5.6x at 18%)** before levy, sales labour, commission or cancellations. At about 3x each incremental SEK of paid media returns roughly SEK 0.6 of GP. To break even, L3 would need to be about **8.3 MSEK** in 2028 (1.65 x 5), 65% above the bridge.
- Strategy 9.2 kill rule: "pause any group below 5x ROAS for six weeks". At 20% GM that rule tolerates campaigns that earn exactly zero gross profit contribution. Guardrail G4 says at least 8x blended. The two rules are inconsistent; the rule that matters is margin-based.

**Fix:** set the kill/scale thresholds from contribution, not revenue: ROAS_min = 1 / (GM - levy 0.6% - payment fees - sales cost per booking share - expected cancellation). With 20% GM and about 2% of other variable cost, ROAS_min is about 5.5x; require 8x only on **incremental, net-of-cancellation, booking-date-matched** value (use holdout or geo tests; offline conversion import is already in the plan).

### 4.2 Marginal versus average CAC
- Plan average: SEK 7,600-7,700 per booking (inside the SEK 8,000 cap).
- Marketing-only incremental: from R07/strategy section 2 the market grows enquiries about 15% by 2028 (2,025 to about 2,330 at constant share). Required 3,300 enquiries leaves about **970 incremental enquiries** that marketing must create. At a 28% close and 80% quote rate (strategy A10) that is about 217 bookings. Incremental marketing of 3.0 MSEK / 217 = **about SEK 13,800 per marketing-created booking**, 73% above the cap, even before FTE cost.
- Sales labour on top: the incremental 2.8-4.2 MSEK of FTE (strategy) over 330 incremental bookings adds SEK 8,500-12,700 per incremental booking. **Fully loaded marginal acquisition and service cost is therefore about SEK 20,000-26,000 per marketing-created booking against GP per booking of about SEK 21,800 at 20% GM.** The marginal booking roughly breaks even in its first transaction; it pays back only through repeat and referral, which the strategy itself calls structurally low for same-destination repeat (A12, R11).
- Payback in time: cash margin is not realised until the traveller pays the balance (about 40 days before departure, section 7) and revenue is recognised on departure (A8). With a 4-12 month booking lead time, marketing spent in 2027 for 2028 departures is paid back in cash in H2 2027-H1 2028 and in P&L in 2028. The strategy mixes booking-year spend with departure-year turnover when it quotes "7.0-7.5% of turnover", which understates 2027 intensity and overstates 2028 efficiency.

### 4.3 Funnel scale
2028 needs about 3,300 enquiries. At the 1.5-2.5% visitor-to-enquiry range (strategy section 3) that is 130,000-220,000 qualified sessions a year. The strategy contains no current traffic figure and no traffic plan, so the budget cannot be tied to a click, session or enquiry volume. R07 says only that a booking needs 100-330 paid clicks at an assumed SEK 8-20 CPC; at those numbers, 217 marketing-created bookings need 22,000-72,000 paid clicks costing 0.2-1.4 MSEK, far below the 1.65 MSEK incremental paid budget, which suggests either unusually weak assumptions in R07 or an unexplained surplus of spend. The plan should reconcile this (cost per qualified enquiry target, derived bottom-up) before the 2027 budget is fixed.

### 4.4 Budget phasing and cash
- 50-60% of paid spend in Nov-Mar (A16) means 1.1-1.3 MSEK of the 2.2 MSEK 2027 paid budget falls before Gate 1 (31 Mar 2027). The budget is therefore committed before the first evidence (order book) exists, and the Q4 2026 test is only SEK 150-250k and four weeks. Gate 1 cannot release or withhold money that is already spent. Move at least the Meta prospecting and YouTube portion behind the January 2027 data checkpoint.
- Early-booking campaign "value-adds, not discounts" (Nov-Feb) is a cost; it is not in the 0.35 MSEK Q4 2026 budget or in the 4.2 MSEK.

---

## 5. Average booking value, mix and price

1. **Mix argues for lower, not higher, ABV.** Strategy P4/L9 builds the new volume engine on a flights-included guided ladder at SEK 36-45k and on segments 3, 4 and 6 (honeymoon 31.7k+, family 34.5k, self-drive 18-30k; R02, R10). The strategy's own average is SEK 45,000, rising to 49,500 (+10%). Illustration [ASSUMPTION]: if the existing 890 travellers pay SEK 49,500 and the 730 new ones SEK 38,000, 2028 turnover is **71.8 MSEK**, not 80. To reach 80 MSEK at a blended SEK 42,000 requires **about 1,905 travellers (+18% above plan) and about 870 bookings**, with proportional extra marketing and sales cost.
2. **A sizeable part of the +10% is cost inflation, not margin.** L6 includes "price and FX buffer". Supplier inflation is high: Cape Town luxury ADR +8.7% a year, Kruger conservation fee +14.9% from 1 Nov 2026 (R05). Pass-through of cost increases lifts turnover but not GM%; if price rises are held to 4-5% a year (competition: TUI from SEK 11,337, Ving round trip from SEK 31,350, group-with-flights SEK 36-40k; strategy section 5) while lodge costs rise 8%, GM falls by roughly 2-3 points (illustration: price index 1.05, cost index 1.08 on 80% COGS gives 17.7% GM), i.e. 1.6-2.4 MSEK of GP at 80 MSEK.
3. **Position conflict.** The strategy says the existing guided 13-day trip at SEK 44.3k is already 15-20% above the group cluster, wants to compete in that cluster at SEK 36-45k, keeps a 20% GM floor, adds a 3-5% FX buffer, and cannot discount (G2). Tourcompass holds a price guarantee and weekly departures. Which of these gives is not stated. Flights-included departures carry low-margin air pass-through, so product-level GM for the ladder is likely below the blended 20% (G1 permits 15%).
4. **Insurance attach 35-55%, extensions 20-35% and upgrade 15-25% (R10)** are set "from a zero baseline" with no source. Insurance commission of 20-30% (R10, blog source) is real but small in SEK: for a 7,000 SEK policy [ASSUMPTION] a 25% commission is SEK 1,750 per policy; 50% attach on 735 bookings is about 0.64 MSEK. Do not let ancillaries carry the margin case.
5. **Revenue definition.** If turnover is gross package value including flights and the company is a principal, the denominator includes pass-through; if it is accounted net, GM% is much higher but the 40/80 MSEK base is different. A8 is unresolved and shifts every ratio in this document.

---

## 6. Currency (ZAR / USD / EUR vs SEK)

Facts (R10): SEK/ZAR 1.696 on 2 Nov 2026, krona down 7% in 12 months (rand +7.5%); 100% of revenue in SEK; flights likely USD/EUR, ground likely ZAR; operators typically hold a 5-8% FX buffer; Swedish law: price increase only if the contract allows it, notified at least 20 days before departure, traveller may cancel free above 8%, company terms add a 100 SEK threshold.

Reviewer calculations [ASSUMPTION: 60% of COGS in ZAR/USD/EUR, COGS 80% of turnover]:
- 2028 foreign-currency cost is about **38 MSEK** (0.6 x 64). R10 and strategy cite "30-40 MSEK notional", consistent, but R10's derivation ("55% x 80 MSEK" = 44) applies the share to turnover, not cost; the sensitivity "6 points of margin per 10% move" in R10 is therefore overstated. Corrected: **10% adverse move = 3.8 MSEK = 4.8 points of GM = 24% of the plan's 16 MSEK GP.**
- A move equal to the last 12 months (7.5%) costs about 2.9 MSEK at 80 MSEK, more than the entire plan-case 2028 contribution (0.5-1.9 in the strategy, -0.7 to +0.7 re-based).
- **Hedge residue:** hedging 50-70% leaves 30-50% open, 11-19 MSEK, so a 10% move still costs 1.2-1.9 MSEK. Cancellations (5-10%) leave hedges larger than the exposure; unwinding at a loss is an additional cost.
- **Timing of the exposure:** the price is fixed at booking (sold in SEK); supplier cost is incurred over the following 4-12 months (A11). The pass-through right only exists if the contract says so and ends 20 days before departure, and a more-than-8% rise gives the traveller a free cancellation, which is a real risk if the rand strengthens again just when balance payments are due. A 3-5% buffer (G3, L6) is lower than the 7.5% already experienced in 12 months, lower than the 5-8% operators use (R10, low-reliability) and lower than R10's own "4-6%" recommendation (R10 section 7).
- **Programme prices already published** (site "from" prices, 2027-28 departures to be launched by 28 Feb 2027) are set before the allocation contracts and FX policy are final (policy approval 15 Dec 2026, allocations signed 28 Feb 2027). Publishing fixed-price departures before costs are locked is an open short position.
- The strategy says to hedge "at booking confirmation, layered monthly" but has no requirement to net across currencies (supplier rate cards may be in ZAR, USD or EUR and the same trip may mix them). Policy needs a currency-by-currency exposure ledger fed by actual contracts, which does not exist yet (R05 unknown: supplier list and currency).
- Hedging requires a bank facility. A 22-person firm may need collateral or margin lines [ASSUMPTION]; this competes with the guarantee facility for the same credit capacity (section 7). The strategy treats them separately.
- Marketing messaging risk: the "more trip for your money" argument is weaker with the rand stronger (R10); the budget does not reflect that conversion could fall as prices rise.

---

## 7. Cash, deposits, supplier payments and the guarantee

The strategy has no cash-flow model; it states in R10 that "customer cash arrives earlier than supplier cash" and moves on. That is unproven and, for the growth products, probably backwards.

### 7.1 Facts (R10, sydafrikaresor.se terms page last modified 2024-05-03, verify)
- Registration fee SEK 3,000 within 10 days of confirmation; a further 40% before departure (day count not captured); final payment timing unknown; peers: final payment 20-40 days before departure; deposits 3,500-4,500.
- Cancellation scale: 5,000 SEK pp more than 60 days out; 40% at 59-46 days; 75% at 45-31; 100% inside 30.
- Levy 0.6% of package price on bookings from 1 April 2026; individual guarantee to move to 6.25% of liable turnover on a date still unset (SFS 2026:97); growth must be notified to Kammarkollegiet; sanction up to SEK 10 M (R09).

### 7.2 Where cash goes the wrong way (illustration, [ASSUMPTION] throughout, replace with the real contract terms)
The deposit is 3,000 x 2.2 = SEK 6,600 per booking, about 6% of the SEK 108,800 average booking in 2028. Growth is planned through fixed departures with airline block seats, lodge allocations and prepaid guides (P4, L9, R05 section 8.4 "allocation with release 60-90 days; attrition risk").
- If airfare is about 30-37% of package price [ASSUMPTION: 15-18k per person] and individual tickets are issued at or soon after booking, the company pays about SEK 33,000-40,000 per booking against SEK 6,600 received: a day-0 funding gap of roughly SEK 27,000-33,000 per booking.
- 2028 booking flow is about 61 bookings a month. If the gap persists on average four months until the second instalment [ASSUMPTION], peak pre-funding is about 61 x 4 x 30,000 = **7.4 MSEK** just for flights, before lodge deposits (typically a share of the rate at confirmation, with balance 30-60 days ahead for premium lodges [ASSUMPTION, not in sources]), guide and vehicle commitments and FX hedge margin. A plausible range is **5-12 MSEK of peak working capital** to fund the plan's own volumes.
- Fixed-departure blocks add unsold-inventory risk: e.g. [ASSUMPTION] 8 departures x 24 seats x SEK 15,000 = 2.9 MSEK of seat commitments at 10% attrition = 0.3 MSEK lost on seats alone, more if lodge release terms are missed.
- Cancellation terms mismatch: the company's scale charges only 5,000 pp up to 60 days, then 40/75/100%. Peak-season lodges and block seats often penalise earlier [ASSUMPTION]; any shortfall is margin loss that is not modelled. The strategy plans to add a firm second instalment at 120-90 days (R10 4.4) but marks it a recommendation only; conversion impact is untested.

### 7.3 Customer money is not free working capital
The strategy's north star is the order book. A large booked-not-departed book means large customer prepayments. Under package law and the guarantee these funds are protected for the consumer, not available for growth. The individual guarantee under the 6.25% rule at 80 MSEK is 5.0 MSEK, while customer prepayments held at the peak could be several times that. The authority can set the level higher for specific risk (R09), and sanctions run to SEK 10 M or 10% of prior-year turnover. Funding growth from customer deposits is a risk to licence and trust, not a feature.

### 7.4 Guarantee sizing is under-specified
- Strategy section 9.3 adds +2.5 MSEK "if the 6.25% rule applies". That rule is **not in force**; the current regime (SFS 2026:96) sets the level on expected 12-month package revenue with step-downs as the fund grows (R09 3.3). The existing level is unknown.
- Sensitivity of the incremental guarantee limit to 40 MSEK of extra liable turnover [ASSUMPTION]: at 6.25% = 2.5 MSEK; at 10% = 4.0 MSEK; at 15% = 6.0 MSEK. The instrument may need cash collateral or a pledge. A19 ("carrying cost small") has no source.
- Timeline mismatch: the Kammarkollegiet conversation is planned for 15 Dec 2026 and the bank dialogue in parallel, yet the early-booking campaign and paid test start by 30 Nov 2026. Growth that is not notified is a sanctionable breach (R09). Notify first, spend second.

### 7.5 The stress test is far too mild
G6 tests "10% of bookings cancel for free". The realistic downside is a UD warning, extraordinary-circumstances rights or a Gulf airspace closure (strategy R2, R3; Tanzania bookings fell about 35% after unrest, R01). Illustrative [ASSUMPTION]: a travel warning with free cancellation for all departures in the next 90 days when annual turnover is 80 MSEK, in a peak quarter (about 25-30% of annual departures, 20-24 MSEK), requires refunding the cash received (perhaps 60-100% of that) within the statutory period, while supplier prepayments (flights, block lodges, hedges) are recovered slowly or not at all. A 10-20 MSEK cash call within weeks is a credible scenario; it is not in any liquidity plan, and the guarantee does not fund refunds when the company is solvent. Strategy "shock" scenario (-10% market, 58 MSEK) models revenue only, not cash.

### 7.6 Levy
0.6% of package price: 0.48 MSEK at 80 MSEK (0.24 MSEK more), correctly shown. It is cost of sales and must be in the quote margin for every booking, including partner-sold packages where the organiser pays it on the net or the gross price (R12 to check).

---

## 8. Other structural issues in the numbers

1. **Lever sizes overlap.** The ten levers sum to exactly 40.0 MSEK and the strategy admits they are "planning allocations" (A14). Close-rate improvement (L2) multiplies every other lever's enquiries; ABV uplift (L6) multiplies volume; L7 repeat is a share of all prior bookings. The bridge is additive where the real model is multiplicative with a binding capacity constraint (consultant time, supply). The confidence-weighted 66 MSEK assumes independence; the main risks (sales capacity, trust gap, one safety event, margin) are correlated, so the lower tail is thicker than the 58-70 range shown.
2. **Phasing 56/80.** 2027 needs +40% on a year whose order book is largely formed: Jun-Sep 2027 is booked Nov 2026-Mar 2027 (4-12 month lead), exactly when tracking, SLA, hires and supply allocation are still being built (strategy 12.1). The levers with lead times (L4 SEO, L8 partners, L5 hosted departures) deliver 2.2 MSEK of the 16 MSEK in 2027; the rest rests on L1 (3.0), L2 (3.0), L3 (2.5), L6 (1.5), L7 (1.0), L9 (1.0), L10 (0.5). A 2027 shortfall of even 4 MSEK (7%) moves 2028 up to the compounding gap and leaves the 2027 hires and spend unabsorbed.
3. **Sales capacity cost is probably understated.** Public team page shows about 8 specialists (R05 A4, unverified). Bookings +81% at constant productivity implies about 6.5 more consultants (about 4.6 MSEK at SEK 0.7 M), not 2-3, plus product, CRM and SEO roles: total FTE cost could be 5-7 MSEK versus 2.8-4.2 MSEK. Using 6.3 MSEK of FTE cost the 2028 plan-case result at 20% GM falls to about -2.6 to -4.0 MSEK versus the status quo.
4. **Repeat/referral (L7 +4.0 MSEK, 25% of turnover by 2028 per A12).** The strategy itself says same-destination repeat is structurally low (R11). 25% of 80 MSEK is 20 MSEK, about 185 bookings from past customers or their referrals, from a base that cumulatively served perhaps 1,200-1,500 bookings over three years [ASSUMPTION]. Needs a measured baseline before it enters the plan.
5. **Partners (L8, +6.0 MSEK).** R12 sized the opportunity at 8-12 MSEK; the strategy takes 6.0 at 50% confidence. Partner turnover carries 8-12% commission against a 20% GM: GM on that turnover is 8-12%, below the G1 floor of 15% for any product. Either margins on partner bookings are net-price-based (then state it) or L8 is much less profitable than the average.
6. **Kill thresholds and hiring are not tied.** Spending is gated on SLA (capacity), not on margin or cash; hires are made by Q1 2027 before Gate 1 on 31 Mar.
7. **Inconsistent sourced numbers.** R07's model uses SEK 35,000 per booking (about 2 travellers); R10 and the strategy use SEK 98,800-108,800. R07's cost-per-booking range (SEK 800-6,600) therefore cannot be compared with the SEK 8,000 cap. The strategy cites "R10 envelope 6-8% / R06 about 5%" without showing that the same ABV basis was used.

---

## 9. Required changes (ranked)

| # | Change | Owner (role) | By |
|---|---|---|---|
| 1 | Replace A1, A7, A8, A18 with actuals: realised ABV and GM by product and channel 2024-26; definition of the 40 MSEK; baseline marketing by channel; payroll for the South Africa team and the share of shared costs. Re-run section 3 above with real numbers. Decision rule: if GM on action-driven business is below 20% (break-even band 18-22%), reshape the plan toward margin before volume. | CFO | 15 Dec 2026 |
| 2 | Add a full P&L and monthly cash flow 2027-28 (plan, risk-adjusted, shock cases) with working capital, guarantee, hedge margin, levy, tech builds, commissions and promotions. Show 2029-30 for the asset value of spend. | CFO | 31 Jan 2027 |
| 3 | Make budget release margin- and cash-gated. Release marketing in quarterly tranches; make hires conditional on a booked order-book threshold and on GM per quote; define in advance which costs are cut if Gate 1 or 2 is missed. | CEO / CFO | before Q1 2027 spend |
| 4 | Rewrite paid-media KPIs: contribution-based break-even ROAS (about 5.5x at 20% GM), 8x target on incremental net value, holdout/geo tests; align kill rule (5x) with guardrail (8x); require cost per qualified enquiry and sessions-to-enquiries targets; separate brand from non-brand. | Head of Marketing | 31 Jan 2027 |
| 5 | Re-base ABV by segment and ladder: price points 36-45k, 31.7k, 34.5k, 18-30k vs 45k average. Model blended ABV bottom-up; set volume targets from that, not from +4%/+10%. | Head of Product / CFO | 31 Jan 2027 |
| 6 | Currency: build a currency exposure ledger from real contracts; set FX buffer at 5-8% (or per-departure margin-protected pricing); do not publish fixed-price 2027-28 departures before cost is locked (rate cards in SEK/EUR or hedged); quote bank facility including collateral; model over-hedge on cancellation; test +/-10% and -7.5% (repeat of the last 12 months) scenarios. | CFO | 15 Dec 2026 (policy), before 28 Feb 2027 launch |
| 7 | Cash: obtain actual supplier payment terms (flights ticketing, lodge deposit and balance, DMC) and compute peak working capital for 735 bookings and each fixed departure; align customer payment schedule (second instalment 120-90 days; test deposit SEK 4,500-5,000) and cancellation scale with supplier scales; no fixed block without a break-even load factor. | CFO / Head of Product | 31 Jan 2027 |
| 8 | Guarantee: notify Kammarkollegiet and agree the bank limit **before** the early-booking campaign and paid test; model guarantee at 6.25%, 10% and 15%; cost and collateral from bank quotes; include in funding plan. | CFO | before 30 Nov 2026 campaign start |
| 9 | Stress test: replace "10% cancel" by (a) UD warning with free cancellation of next-90-day departures, (b) Gulf closure, (c) rand +10%. Size a liquidity line or cash buffer for the worst plausible 90-day refund call. | CFO | 28 Feb 2027 |
| 10 | Restate section 10 of the strategy with the correct counterfactual (turnover above market growth), the full cost list in 3.5 and consultant capacity cost in section 8.3. | Programme owner | 31 Jan 2027 |

---

## 10. Issues list (for the orchestrator)

1. Profit case counts market growth (L1, +6 MSEK) as a return on spend; action-driven GP is 6.8 MSEK vs 6.1-7.5 MSEK cost at 20% GM, break-even 18-22% GM.
2. 2027 loses roughly 1.3-2.5 MSEK in the plan case; risk-adjusted case loses roughly 4-7 MSEK cumulative to end 2028.
3. Paid media: ROAS 8x is an unsourced scenario; implied incremental ROAS about 3x vs 5x break-even; 5x kill rule tolerates zero-profit campaigns; G4 and kill rule inconsistent.
4. Marginal CAC about SEK 13,800 (marketing only) and SEK 20-26k fully loaded vs GP per booking about SEK 21.8k; the SEK 8,000 average cap hides this.
5. ABV +4%/+10% conflicts with the SEK 36-45k ladder and lower-priced priority segments; much of the rise is cost pass-through; blended ABV 42k needs about 1,905 travellers.
6. Currency: 10% move = 3.8 MSEK (24% of GP); 3-5% buffer below the 7.5% 12-month move and 5-8% operator buffer; 2027-28 departures to be published before costs are hedged; R10 sensitivity overstated by mixing turnover and cost.
7. Cash: no cash-flow model; flights alone may need 5-10 MSEK peak pre-funding; customer deposits are not free working capital; second instalment and cancellation scale untested against supplier terms.
8. Guarantee: +2.5 MSEK relies on a rule not in force; true range 2.5-6 MSEK, possibly cash-collateralised; Kammarkollegiet notification scheduled after campaign start.
9. Stress test (10% cancel) far too mild; refund call of 10-20 MSEK in a warning scenario not funded.
10. Costs omitted from the cost side: promotions, partner commissions, referral rewards, tech builds, hedging, guarantee fees, payment fees; FTE range understated (2.4-4.8 vs 2.8-4.2; consultant capacity could need 6+).
11. Margin assumption (18-25%) is inconsistent with the stated 22-person payroll; 40 MSEK definition (A8) and baseline marketing (A18) unresolved and each moves the verdict.
12. Budget phasing commits 1.1-1.3 MSEK of 2027 paid media before Gate 1; gates are revenue-only with no cost-reversal rule.

---

## 11. Assumptions made by this review (replace with company data)

| ID | Assumption | Rationale | Replace with |
|---|---|---|---|
| E1 | Hires land Q1 2027, about 0.8 year of cost in 2027; 4-6 FTE at SEK 0.6-0.8 M | Strategy A18 and Q1 2027 hiring date | HR plan and payroll |
| E2 | Baseline paid media is about 52% of the 2.6 MSEK baseline (about 1.35 MSEK) | Same split as the 2027 plan | Channel spend 2026 |
| E3 | 60% of COGS in ZAR/USD/EUR; COGS 80% of turnover | R10 A4 (55-65%) applied to COGS at 20% GM | Contract currencies, margin |
| E4 | Airfare 30-37% of package price (SEK 15-18k pp); tickets issued at or soon after booking; four months until second instalment | Typical long-haul shape; not in sources | Airline terms, booking and payment curves |
| E5 | Fixed-departure illustration of 8 departures x 24 seats at SEK 15,000 and 10% attrition | Product plan L9 (6-10 themed departures) | Actual blocks |
| E6 | Guarantee as 6.25%, 10% or 15% of liable turnover; bank may require collateral | 6.25% from R09; higher values cover the unknown current regime | Kammarkollegiet decision, bank terms |
| E7 | Blended ABV SEK 42,000 and new-traveller price SEK 38,000 | Ladder 36-45k, family 34.5k, honeymoon 31.7k (R02, R10) | Segment-level actuals |
| E8 | 1.5-3.0 MSEK of omitted cost (section 3.5) | Sum of the strategy's own proposals at plausible sizes | Quotes and budgets |
| E9 | Peak quarter carries 25-30% of annual departures; refund call 60-100% of cash received | Seasonality in R05/R06 (Dec-Feb, Jun-Sep peaks) | Departure curve and payment curve |
| E10 | Past-customer base of 1,200-1,500 bookings over three years | Scaled from 405 bookings a year | CRM history |

---

## 12. Sources

Strategy and research files as listed in `/docs/00-strategy.md` section 15; primary items used here: R10 pricing and economics (terms https://www.sydafrikaresor.se/villkor/resevillkor/ ; SEK/ZAR https://tradingeconomics.com/sekzar:cur ; Konsumentverket https://www.konsumentverket.se/lagar/paketreselagen-konsument/ ; Kammarkollegiet https://www.kammarkollegiet.se/vara-tjanster/resegaranti/fragor-och-svar-om-resegaranti-for-reseaktorer ; AtlasPerk, secondary, https://atlasperk.com/guides/finance-for-travel/tour-pricing-margins/), R07 paid media (WordStream, Superads, Kvantic as cited there), R09 regulation (https://lagen.nu/2018:1218), R05 supply (HVS https://www.hvs.com/article/10464-cape-town-tourism-shows-resilience-despite-global-uncertainty ; https://krugercompanion.co.za/fees/), R11 conversion. All other figures are the reviewer's arithmetic or marked as assumptions above.
