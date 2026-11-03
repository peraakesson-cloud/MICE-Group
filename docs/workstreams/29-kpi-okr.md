# 29 - KPI framework and OKRs by quarter: leading vs lagging indicators, targets, thresholds, dashboards and operating rhythm

Owner: Programme owner (appointed by CEO by 6 Nov 2026), with the Analytics lead as day-to-day steward of the KPI dictionary. Approver: CEO. Date: 2 Nov 2026. Plans in English; the few Swedish strings (customer-facing survey questions, section 11.1) are marked.
Inherits: /docs/00-strategy.md (section 4 north star and metric tree, section 9 bridge, section 10 funnel, section 14 guardrails G1-G10, section 16 gates and governance). Consumes: workstream 16 (analytics, dashboards D0-D7), 27 (finance model), 28 (budget allocation). Feeds: every other workstream, which must adopt its KPI rows from section 6 and its quarterly KRs from section 7.
Status: planning draft with NO internal company data. Every number that does not come from the strategy or a cited source is marked [ASSUMPTION] and listed in section 17 so the CEO, CFO and Head of Sales can replace it. All amounts are SEK, excluding VAT, unless stated.

---

## 1. Purpose and objectives

The strategy sets one north star (booked-not-departed order book versus plan, always with order-book gross margin), ten guardrails and five dated gates. This workstream turns that into a system people can run weekly: a small set of KPIs with exact definitions and owners, nine quarters of OKRs (Q4 2026 to Q4 2028), thresholds that trigger pre-agreed actions, and the dashboards and meetings that carry them.

| # | Objective of this workstream | Target |
|---|---|---|
| W1 | One KPI dictionary, signed by CFO, Head of Sales and Analytics lead, so that "booking", "turnover", "order book", "margin" and "marketing-created booking" mean one thing | Dictionary v1 signed by 15 Dec 2026 (Gate 0); changes only through the change log |
| W2 | Every workstream owner has at most 3 objectives and 3-5 KRs per quarter, all traceable to a bridge lever or a guardrail | 100% of KRs carry a lever tag (L1-L10, GL1-GL4 or G1-G10) by 20 Nov 2026 |
| W3 | Leading indicators give at least 8 weeks of warning before a gate is missed | Gate-miss risk flagged amber or red at least 8 weeks before each gate date, in 5 of 5 gates (Gates 1-5; Gate 0 on 15 Dec is only 6 weeks away) |
| W4 | Every red threshold has a named action and an owner decided in advance | 100% of the company KPIs K0-K10 have a trigger-action row (section 9), signed before 31 Jan 2027; lever KPIs (section 6.2) get theirs at the first monthly lever scorecard |
| W5 | KPI discipline costs little time | At most 2 hours per week per workstream owner (CFO about 4 h and CEO about 3 h until the order-book extract is automated, section 13); OKR admin at most 0.2 FTE of the Analytics lead |
| W6 | Targets are recalibrated from data, not defended | All [ASSUMPTION] targets re-based by 31 Jan 2027 and re-checked at each quarterly bridge re-run |

---

## 2. Starting point and what we do not know

Taken from the strategy (not company data): core plan 48 MSEK in 2027 (range 46-50) and 64.4 MSEK in 2028; stretch 80 MSEK needs GL1-GL4 (+15.6 MSEK); order-book checkpoints 24 / 36 MSEK for 2027 departures (31 Mar and 30 Jun 2027), 19 MSEK for 2028 departures at 31 Dec 2027 (24 stretch), then 32 / 48 (stretch 40 / 60) at 31 Mar and 30 Jun 2028; gross margin 20% planning value (17-25%); 485 bookings in 2027 and 637 in 2028 (core), 2,440 and 3,348 enquiries; close rate 25% rising to 27% on existing flow, 18% on new traffic, quote rate 80%; marketing 0.30 MSEK in Q4 2026, 3.6 in 2027, 4.6 in 2028; marginal marketing cost cap SEK 20k per marketing-created booking; Tranche B scales only at holdout incremental ROAS of 5x or more.

Not known (the plan below works around each, and each is a data request in section 18):
- Actual 2026 baselines for almost every KPI: enquiries by month and source, close rate, response time, order book by departure month, booking-date curve, margin, review count, repeat share, marketing spend by channel. The 2026 enquiry base of about 2,030 is back-calculated from the strategy (3,348 is +65%) [ASSUMPTION].
- What the 40 MSEK counts (departure-date or booking-date recognition, pass-through items, whether flights are included) [A8]. Until known, all turnover KPIs are labelled "definition pending".
- Whether the booking system can produce order book by departure month with margin per booking. If not, building that extract is the first deliverable (section 16).
- Sweden's 2026 arrival trend (SA total was down in 2026 per the red-team, categories unverified), so the L1 market tailwind KPI is tracked as an external indicator, not a target we own.

---

## 3. Approach: ten design principles

1. **Few numbers, one owner each.** Eleven company-level KPIs (K0-K10, Tier 0 and 1), each with one accountable role. Everything else is a diagnostic that lives in a dashboard, not in an OKR.
2. **Lagging numbers are the score; leading numbers are the steering wheel.** Turnover and margin tell us what happened 4-12 months ago. The order book, enquiries, response time and pipeline age tell us what will happen. Every lagging KPI is paired with at least one leading KPI and a stated lag.
3. **Outcome, not activity.** A KR is a measured change in a number, not "launch X". Launch milestones live in the workstream plans as initiatives. Exception: gate-dependency KRs (for example "FX policy approved") are binary and marked as such.
4. **Order book and margin travel together.** No order-book number is shown without margin on the same line (strategy section 4). Revenue-only KRs are not allowed.
5. **Existing flow and new traffic are always separated.** Close rate, enquiries and cost are reported for existing channels (L2) and new traffic (L3-L5, L8) separately, because blending hides the 18% versus 27% difference (strategy section 10).
6. **Incremental, not attributed.** Paid KRs use holdout-measured incremental ROAS and the marginal cost per marketing-created booking. Platform ROAS is a sanity check.
7. **Gates are scorecards.** Each gate has a pre-printed pass/fail list drawn from the same KPI dictionary (section 10); there is no new metric invented at a gate.
8. **Commit vs aspirational KRs.** Commit KRs (gate conditions, guardrails) are scored pass/fail and must be met. Aspirational KRs (growth ambitions) are scored 0.0-1.0 and 0.7 is acceptable. Mixing them is the usual way OKRs lose credibility.
9. **Thresholds before data.** Red/amber/green bands and the action for each are written now, so that a red week produces a decision and not a debate.
10. **Re-base honestly.** Targets marked [ASSUMPTION] are replaced by measured baselines at Gate 0 and Jan 2027; the bridge is re-run quarterly. Moving a target is allowed only with the change log entry and the CEO's sign-off, and never after a gate date to rescue a pass.

---

## 4. KPI architecture: five tiers, leading versus lagging

| Tier | Purpose | Count | Reviewed | Forum |
|---|---|---|---|---|
| T0 North star | Is the plan on track? | 2 (K0 order book, with K1 order-book margin on the same line) | Weekly | CEO, growth council |
| T1 Gate and guardrail KPIs | Can we release money and scale? | 9 (K2-K10) | Weekly, formal at gates | Growth council |
| T2 Lever KPIs | Which part of the bridge is moving? | 1-2 per lever (L1-L10, GL1-GL4) | Monthly (weekly for L2, L3) | Growth council |
| T3 Operating leading indicators | Early warning, 2-12 weeks ahead | about 25 | Daily / weekly | Functional stand-ups |
| T4 Health diagnostics | Explain a move; never an OKR | unlimited | On demand | Analysts |

### 4.1 The causal chain (what leads what), with assumed lags

| Stage | Leading indicator (earlier) | Lag to next stage | Lagging outcome (later) |
|---|---|---|---|
| Demand creation | Qualified sessions, branded search demand, impressions share, social reach to saved/engaged | 2-8 weeks [A] | Enquiries (count and cost) |
| Enquiry handling | Enquiries per week, share with budget and date, first-reply time, quote sent within 24-48 h | 1-3 weeks [A] | Quotes sent, quote age |
| Sales | Quotes outstanding, quote age, follow-up cadence compliance, lost reasons | 2-6 weeks [A] | Bookings (count, value, margin) |
| Booking | Bookings per week, deposit paid, margin per booking, booking-date curve | immediate | **Order book by departure year (T0)** |
| Fulfilment | Order book by departure month, cancellations, supply held vs sold, final payments | 4-12 months (flagship lead times 10-12 months per seller advice, directional, strategy section 13.2) | Departed (recognised) turnover and gross profit |
| Experience | Trip-end NPS, complaints per 1,000 travellers, Trustpilot rolling score | 1-9 months | Repeat and referral bookings, review volume |
| SEO / content | Indexed hub pages, impressions on informational cluster, non-branded clicks | 4-9 months (strategy L4) | Organic enquiries and bookings (mostly late 2028 and 2029 departures) |

Reading rule: if an upstream leading indicator is red for 4 consecutive weeks and the downstream lagging KPI is still green, the downstream green is treated as at risk (amber) in the monthly pack.

### 4.2 Classification of the headline KPIs

| KPI | Type | Typical lag | Why it matters |
|---|---|---|---|
| Order book vs plan by departure year (T0) | Leading for revenue, lagging for sales activity | leads revenue 4-12 months | North star |
| Order-book gross margin | Leading for profit | same | Failure mode watch |
| Departed turnover and gross profit | Lagging | | Final scoreboard; used for the board and for Kammarkollegiet forecasts |
| Enquiries (existing / new) | Leading for bookings | 3-8 weeks | Volume gate |
| Close rate by source | Coincident | 2-6 weeks after quote | Lever L2 |
| First-reply time | Leading for close rate and trust | days | Gate G8 |
| Holdout incremental ROAS | Lagging for a test (6-8 weeks), leading for budget release | 8 weeks | Gate for Tranche B |
| Marginal marketing cost per marketing-created booking | Lagging, coincident with spend | 1-3 months | Gate G4 |
| Trustpilot rolling score, review count | Leading for conversion and for G8 | 1-6 months | Trust lever |
| Supply held vs sold | Leading constraint | 10-12 months for flagship | Caps the target |
| Cumulative programme net contribution | Lagging | monthly | Stop-loss G10 |
| Cash and guarantee headroom | Leading constraint | weeks | G6 |

---

## 5. Metric definitions that must be fixed before targets mean anything

Final wording is owned by the CFO (finance terms) and the Analytics lead (funnel terms), consistent with workstream 16 section 7. Draft definitions:

| Term | Draft definition | Owner |
|---|---|---|
| Booking | A confirmed order with a received deposit, in the booking system, with a booking date and a departure date. Re-bookings of the same trip count once. | CFO |
| Order book | Sum of booked turnover (excluding VAT, in SEK, including pass-through items shown separately) for trips not yet departed, by departure year and departure month. Net of cancellations. | CFO |
| Order-book margin | Booked gross profit / booked turnover for the same trips, using the cost basis at booking (hedged rate if hedged). Pass-through share shown separately because it adds turnover without margin (strategy L6). | CFO |
| Departed turnover | Turnover recognised in the period of departure (or as per the accounting policy; pending A8). | CFO |
| Enquiry | A unique contact with a trip request through form, phone, e-mail or chat, deduplicated within 30 days, excluding spam and existing customers' service questions. Phone and chat logged in CRM within one hour. | CRM manager |
| Qualified enquiry | Enquiry with destination = South Africa/southern Africa, a travel window, and a party size or budget bracket. | CRM manager |
| Existing flow vs new traffic | Existing: the channel mix in the 2026 baseline (organic brand, direct, e-mail, repeat, current partners). New: traffic from channels or campaigns launched under this programme (Tranche B, new SEO clusters, social/creators, new B2B). The split is frozen at Gate 0 and logged. | Analytics lead |
| Marketing-created booking | A booking whose first-touch or CRM source is a new-traffic channel and which passes the holdout or an incrementality sanity check. Used for the marginal cost KPI. | Analytics lead |
| First reply | First human reply (not auto-response) in business hours; clock stops at the reply. Evenings and weekends in peak per the rota. | Head of Sales |
| Programme net contribution | Incremental gross profit less incremental cost (marketing above baseline, FTE, tech builds, levy, commissions, hedging, guarantee, payment fees, in-trip support), as in strategy section 12. | CFO |

Two definition traps the signing session must resolve (otherwise K2 and K3 do not reconcile to the strategy funnel): (1) the strategy funnel applies the 80% quote rate to all enquiries (for example 2,148 x 0.8 x 27%), whereas the "qualified enquiry" above is narrower. Until the CFO and CRM manager choose one basis and rescale the volumes, K2 counts all enquiries as defined above and K3 is bookings divided by quotes sent. (2) The strategy states repeat and referral as a share of turnover (section 4); this file tracks it as a share of bookings (section 6.2 L7). Report both until the dictionary fixes one. The dictionary sign-off date here (15 Dec) is one day later than workstream 16 (14 Dec); use 14 Dec for the draft and 15 Dec for the Gate 0 signature.

---

## 6. KPI dictionary and targets (company level)

Targets are for the core plan unless a stretch column says otherwise. Baseline = 2026 actual, to be pulled by Gate 0. RAG bands: green = at or better than target; amber = within the stated tolerance; red = worse than the tolerance. "Q" targets are end-of-quarter values.

### 6.1 Tier 0 and Tier 1 (the weekly screen)

| ID | KPI | Type | Owner (role) | Source | Cadence | Target (core) | Amber | Red |
|---|---|---|---|---|---|---|---|---|
| K0 | Order book vs plan, by departure year (MSEK), with order-book margin; departed turnover and gross profit (section 7.2) shown as the lagging scoreboard | Leading | CEO (CFO produces) | Booking system, D5 | Weekly | Checkpoints in section 7.1 | 90-97% of plan, or margin in the K1 amber band | Under 90% of plan, or margin in the K1 red band |
| K1 | Order-book gross margin; discounts and promotions as share of turnover | Leading | CFO | D5 | Weekly | At least 20% blended (G1); at least 19% on new bookings at Gate 1 and Gate 3; ladder entry departures (SEK 36-45k) at least 18%; no product under 15% after commission without CEO approval; discounts and promotions at most 2% of turnover (G2) | 19.0-19.9%, or promotions 2.0-2.5% [A] | Under 19.0% for 2 consecutive weeks, or promotions over 2.5% [A] |
| K2 | Enquiries per week, split existing / new | Leading | Head of Marketing (new), Head of Sales (existing) | CRM, D4 | Weekly | Quarterly volumes in section 8 (2027 total 2,440; 2028 total 3,348) | 85-95% of weekly plan (4-week average) | Under 85% for 4 weeks |
| K3 | Close rate (booked / qualified quotes sent), existing flow and new traffic separately | Coincident | Head of Sales | CRM, D4 | Weekly (4-week rolling) | Existing 25% (Q4 2026 assumed) to 26% (2027) to 27% (2028); new traffic 18% | Existing: 1 pt under; new: 3 pts under | Existing: more than 1 pt under for 6 weeks; new: more than 3 pts under for 6 weeks |
| K4 | First-reply time: share answered within 1 business hour | Leading | Head of Sales | CRM, D4 | Daily / weekly | 90% from Q2 2027 (strategy); SLA live 20 Nov 2026 with an assumed ramp of 70% / 80% (section 7.4) that the CEO must confirm, because the strategy text reads 90% from the go-live date. The public promise "svarar inom en timme på vardagar" is used only after 90% is held for 4 consecutive weeks | From Q2 2027: 80-90%. Before: within 10 pts below the ramp value | From Q2 2027: under 80%. Before: more than 10 pts below the ramp value. Either way, SLA missed 2 consecutive weeks triggers G8 (paid to Tranche A only) |
| K5 | Marginal marketing cost per marketing-created booking | Lagging | Head of Marketing | Finance + D2 | Monthly | 2027 about SEK 36k (investment year; strategy G4 allows this), falling along the section 7.4 path to about 25k run-rate at Q4 2027 and about SEK 20k at Q1 2028, then about 18k (cap SEK 20k, G4). Scored only on a rolling 6-month basis and only once at least 30 marketing-created bookings exist (the strategy implies only about 28 in all of 2027), so the first scored reading is expected around Gate 2 or Q3 2027 | 20-24k in 2028 | Over 24k for 2 consecutive months in 2028, or over 40k (rolling) in 2027 |
| K6 | Holdout-measured incremental ROAS on Tranche B (rolling, per test) | Lagging (8-week test) | Analytics lead | D6 experiment log | Per test / monthly | At least 5x to scale; Tranche B released at Gate 1 only if at least 4x. The 2028 stretch media tranche (up to SEK 1.0 M) only after at least 5x for two consecutive quarters and capacity within SLA. Reads are low-powered (workstream 16 section 8: about 40-50 enquiries per holdout arm in 6 weeks), so every reading is reported with its interval and treated as decision evidence, not proof | 4-5x: hold spend, do not scale | Under 4x after 8 weeks: pause Tranche B (workstream 28 rule) |
| K7 | Trust and service: Trustpilot score and review count; complaints and ARN cases per 1,000 travellers (G8) | Leading | CRM manager (reviews), Head of Sales / Ops (complaints) | Trustpilot, Google, Reco, complaints log, D4 | Weekly | Rolling 12-month score at least 4.5 with the count path in section 7.4 (100+ by 31 Dec 2027; 150+ by mid-2028). Until 30 Jun 2027 the test is the average of reviews received since 1 Jan 2027 (at least 4.5) with the rolling score rising, because the strategy cites 2.7 on 8 reviews and no plausible review flow lifts the rolling score to 4.2 by Q1 2027. Complaints and ARN cases per 1,000 travellers within a threshold set from the 60-day baseline | From 30 Jun 2027: rolling 4.2-4.4 (G8 floor 4.2). Before: new-review average 4.2-4.4 | From 30 Jun 2027: rolling under 4.2 (G8 breach). Before: new-review average under 4.2 over at least 10 reviews. Complaints above threshold for 2 weeks |
| K8 | Cumulative programme net contribution (MSEK) | Lagging | CFO | Finance model (27), D0 | Monthly | Not worse than -3.0 MSEK at 30 Jun 2027 and within the 27 CSV path; 2028 within released loss budget | Within 0.5 MSEK of the limit | Limit reached: stop-loss rule (strategy 12.3) |
| K9 | Supply held vs order book, by departure month (coverage ratio) | Leading constraint | Head of Product | Allocation register | Weekly in peak, else monthly | Gate and hard floor: held supply at least equal to the order-book trajectory (1.0 x, strategy Gate 1); working target 1.15 x for months with open sales [A, KA8]; no advertised departure without held supply | 1.05-1.15 | Under 1.0 (gate floor), or any month sold above held supply |
| K10 | Cash, guarantee and currency: liquidity facility unused; guarantee limit headroom; prepaid supply versus SEK 4 M cap; FX hedge ratio | Leading constraint | CFO | 13-week cash model | Weekly | Guarantee headroom at least 3 months of forecast growth (G6), with the growth forecast sent to Kammarkollegiet before every campaign wave that can lift volume; prepaid at most SEK 4 M (G7); facility 10-15 MSEK committed by 31 Jan 2027 term sheet; hedge ratio 50-70% of known foreign-currency cost at confirmation (G3) | Headroom under 3 months, or hedge ratio 40-50% / 70-80% [A] | Headroom under 1 month, or prepaid over cap, or hedge ratio outside 40-80% [A], or a campaign wave launched without the forecast sent |

### 6.2 Tier 2: lever KPIs (the bridge, by owner)

Each lever has one lagging KPI (MSEK contribution, from the strategy bridge) and one or two leading KPIs the owner can move this month. "By Year 2" = contribution in the 2028 core of 64.4 MSEK. Lever contributions are measured against the re-run bridge, with the overlap haircut of 15% applied to the sum, not to individual levers.

| Lever | Added MSEK by Year 2 | Lagging KPI | Leading KPIs (owner can move this month) | Owner | Evidence note |
|---|---|---|---|---|---|
| L1 Market tailwind | +2.4 | Swedish SA arrivals growth versus 3% base; our share of intermediated pool (core 2028 needs 13-19%) | Search demand index for "sydafrika resa" cluster; airline seat capacity Sweden-SA; competitor price indices | Analytics lead (external watch, not an owner target) | External; if 0% market, bridge loses about 2.4 (scenario 0/3/7%) |
| L2 Conversion on existing flow | +3.5 | Close rate 25% to 27%; about 34 extra bookings | First-reply within 1 h (K4); quote within 24-48 h; follow-up cadence compliance; quote age over 14 days | Head of Sales | Needs coaching and SLA; measured on existing flow only |
| L3 Paid prospecting (Tranche B) | +4.0 | Incremental bookings x ABV from holdout; K5, K6 | Qualified sessions; cost per qualified enquiry; new-traffic close rate (18%); lost impression share on high-intent terms | Head of Marketing | Most likely to be cut; planned total paid iROAS about 2.0x in 2028 vs 5x break-even |
| L4 SEO, content, AI-search | +1.5 | Organic bookings (new-traffic part) and enquiries from informational pages | Hub pages published and indexed (6 by 31 Dec 2026); impressions and clicks on non-branded cluster; AI-search referrals and self-reported "AI-chatt" | SEO/Web lead | 4-9 months lag; most payout on late-2028 and 2029 departures |
| L5 Social, creators, hosted departures, PR | +2.0 | Bookings with creator/hosted/PR source; hosted departures filled | Saves/shares and engaged reach on priority formats; creator-code redemptions; hosted departures at 50%, 75% of seats by T-120 days [A] | Head of Marketing | Evidence grade C; 4-6 hosted departures a year |
| L6 Revenue per traveller | +1.0 | ABV and margin per traveller (flat in 2027, +2.2% in 2028); attach rate of extensions and insurance | Extension offers shown and accepted; mix of ladder tiers; pass-through share | Head of Sales + Head of Product | Pass-through adds turnover, not margin |
| L7 Repeat and referral | +3.0 | Repeat and referral share of bookings (about 15% to about 20%; about 125 bookings in 2028) | Trip-end NPS; review request response rate; referral codes issued and used; reactivation e-mail conversion | CRM manager | v1's 25% share withdrawn |
| L8 B2B, affinity, partners | +3.5 | Partner-sourced turnover (8-10% by 2028; single partner under 10%) | Named partner pipeline (30 targets by 31 Jan 2027); signed partners; partner enquiries per month; margin after commission at least 15% | Head of Marketing (partners) + Head of Sales | Commission from margin |
| L9 New products and segments | +2.5 | Bookings on new products | Supply-readiness gate passed (60% of planned volume contracted, age policy checked, guide and DMC confirmed, margin at least 18% or 15% after partner commission, launch cap equal to contracted supply) | Head of Product | Launch only after gate |
| L10 Season spreading | +1.0 | Share of turnover departing Apr-May and Sep-Nov | Offer take-up; green-season enquiries | Head of Product + Head of Marketing | |
| GL1 Nordic scope extension | +4.0 (gap) | Bookings from NO/DK/FI; margin at least 20% | Scope decision by 31 Mar 2027; Norway pilot Q3 2027 if approved | CEO | Needs scope change |
| GL2 MICE, incentive, bleisure cross-sell | +3.0 (gap) | Turnover from converted MICE accounts (definition must be widened first); margin at least 18% | 3 named accounts engaged by Q2 2027 | MICE lead | |
| GL3 Inorganic | +5.0 (gap) | Signed target / alliance turnover; accretive at deal margin | Screening of 5 targets started by 31 Dec 2026 and complete by 31 Jan 2027; go/no-go at Gate 2 (30 Jun 2027) | CEO | No target identified |
| GL4 Wholesale, land-only to operators and agents | +3.6 (gap) | Wholesale turnover; margin after commission at least 15%; each partner under 10% | Pilot in Q2 2027; agent portal live with first 20 agents | Head of Sales | Low margin |

Core bridge tracks L1-L10 (+24.4 net to 64.4); GL1-GL4 (+15.6) are tracked from the date each is funded. A gap lever with no gate pass is shown grey (not red) in the pack and excluded from the core score.

### 6.3 Tier 3 operating leading indicators (inputs to the OKRs; owned in the workstream plans)

| Area | Indicators | Owner | Where defined |
|---|---|---|---|
| Web and SEO | Qualified sessions, visitor-to-enquiry (1.5-2.5%), Core Web Vitals pass, indexed hubs, non-branded impressions | SEO/Web lead | Workstreams 04, 05, 15, 26 |
| Paid | Spend pacing vs cap, cost per qualified enquiry, search impression share on brand and high intent, Tranche A/B split | Head of Marketing | 06, 07, 09, 28 |
| Social and creators | Reach to engaged, saves, creator briefs delivered, UGC consent collected | Head of Marketing | 08, 10, 11, 12 |
| CRM and e-mail | List growth (consented), open-to-click, reactivation conversions, follow-up compliance | CRM manager | 13, 14, 21 |
| Sales ops | Leads aged over 24 h, quotes outstanding, quote age, capacity (quotes per consultant) | Head of Sales | 14, 23 |
| Product and supply | Allocation held by month, DMC letters received, guides confirmed, air seats held vs sold | Head of Product / Head of Air | 02, 18, 23 |
| Finance | FX hedge ratio (50-70% of known cost), cash forecast accuracy, levy and guarantee cost | CFO | 27 |
| Measurement | % enquiries with source, offline-import match rate, tag error rate | Analytics lead | 16 |

---

## 7. Targets by period: the trajectory behind the OKRs

All values are core plan unless marked. Calendar seasonality of enquiries and recognised turnover is [ASSUMPTION] (enquiries peak Nov-Mar, strategy A16 states 50-60% of paid goes into Nov-Mar); recalibrate from the 2026 booking-date and departure-date curves by 31 Jan 2027.

### 7.1 Order book of future departures (end of quarter, MSEK; the T0 chart)

| Date | 2027 departures (core) | 2028 departures (core / stretch) | 2029 departures (core placeholder) | Source of target |
|---|---|---|---|---|
| 31 Dec 2026 | 16 [A] | n/a | n/a | Placeholder; recalibrate at Gate 0 |
| 31 Mar 2027 | **24** | 1.5 [A] | n/a | Strategy checkpoint (Gate 1) |
| 30 Jun 2027 | **36** | 5 [A] | n/a | Strategy checkpoint (Gate 2) |
| 30 Sep 2027 | 43 [A] | 11 [A] | n/a | Interpolated |
| 31 Oct 2027 | | 14 / 17 [A] (Gate 3 trajectory test) | n/a | Interpolated from 11 at 30 Sep to 19 at 31 Dec (stretch pro rata 19:24); Gate 3 is held on 31 Oct, two months before the 31 Dec value it forecasts |
| 31 Dec 2027 | (departing; 48 final) | **19 / 24** | n/a | Strategy (Gate 3) |
| 31 Mar 2028 | | **32 / 40** | 2 [A] | Strategy (Gate 4) |
| 30 Jun 2028 | | **48 / 60** | 5 [A] | Strategy (Gate 5) |
| 30 Sep 2028 | | 56 / 70 [A] | 11 [A] | Interpolated |
| 31 Dec 2028 | | (departing; 64.4 / 80 final) | 19 [A] (30% of a flat 64.4) | Placeholder |

### 7.2 Recognised (departed) turnover, MSEK per quarter [ASSUMPTION on seasonality; definition pending A8]

| Quarter | 2027 core | 2028 core |
|---|---|---|
| Q1 | 11.0 | 14.7 |
| Q2 | 12.0 | 16.1 |
| Q3 | 14.0 | 18.8 |
| Q4 | 11.0 | 14.8 |
| Year | **48.0** (range 46-50) | **64.4** (stretch 80) |

Gross profit at 20%: 9.6 MSEK in 2027, 12.9 MSEK in 2028 (range at 17-25% margin: 8.2-12.0 and 10.9-16.1).

### 7.3 Funnel volumes per quarter (core) [ASSUMPTION: enquiry shares 32 / 22 / 18 / 28%]

| Quarter | Enquiries 2027 | Enquiries 2028 | Of which new traffic 2027 | Of which new traffic 2028 |
|---|---|---|---|---|
| Q1 | 780 | 1,070 | 115 | 385 |
| Q2 | 540 | 740 | 80 | 265 |
| Q3 | 440 | 600 | 60 | 215 |
| Q4 | 680 | 940 | 99 | 335 |
| Year | **2,440** (existing 2,086 + new 354) | **3,350** (existing 2,148 + new 1,200, rounded) | 354 | 1,200 |

Weekly equivalents: 2027 average about 47 enquiries a week (peak weeks Q1 about 60); 2028 average about 64 (Q1 about 82). Q4 2026 baseline about 570 enquiries in the quarter (about 44 a week) [A, back-calculated]. Bookings: 485 (2027) and 637 (2028) by the funnel arithmetic; travellers about 1,070 and 1,400 at 2.2 per booking.

Quote and close targets: quote rate 80% of qualified enquiries; existing-flow close rate Q4 2026 25% (assumed baseline, to be measured), Q1 2027 25.5%, Q2-Q4 2027 26%, Q1 2028 26.5%, Q2-Q4 2028 27%; new traffic 18% from first volume (below 30 quotes in a quarter the rate is reported but not scored).

### 7.4 Service, trust, efficiency path

| Metric | Q4 2026 | Q1 2027 | Q2 2027 | Q3 2027 | Q4 2027 | Q1 2028 | Q2 2028 | Q3 2028 | Q4 2028 |
|---|---|---|---|---|---|---|---|---|---|
| First reply within 1 h, share (K4) | 70% [A] | 80% | 90% | 90% | 92% | 92% | 92% | 93% | 93% |
| Trustpilot reviews (cumulative) [A] | baseline +10 | 25 | 50 | 75 | **100+** | 125 | **150+** | 165 | 175 |
| Trustpilot score, rolling 12 m (K7) [A] | measure | 4.0+ and rising; new-review average 4.5+ | 4.2+ (G8 floor); new-review average 4.5+ | 4.4+ | 4.5+ | 4.5+ | 4.5+ | 4.5+ | 4.5+ |
| Marginal marketing cost per marketing-created booking (K5, SEK k) | measure (not scored, under 30 bookings) | about 40 | about 36 | about 30 | about 25 (run-rate) | about 20 | about 18 | about 18 | about 18 |
| Marketing spend, period | 0.30 MSEK | 2027 total 3.6 MSEK (2.4 committed, 1.2 gated) | | | | 2028 total 4.6 MSEK (3.0 committed, 1.6 gated) | | | |
| Repeat + referral share of bookings (rolling 12 m) | measure | 15% | 15% | 16% | 17% | 18% | 19% | 19.5% | about 20% |

K7 arithmetic check (strategy figure: 2.7 on 8 reviews, R03, not re-verified here): the 8 existing reviews sum to about 21.6 stars. With 17 new reviews at an average of 4.8 the cumulative score at the 25-review mark is about 4.1, and with 42 new reviews at 4.8 (the 50-review mark) about 4.5; the older reviews drop out of a rolling 12-month window during 2027, which helps. A rolling score of 4.4 by Q1 2027, as in the first draft of this file, is therefore not reachable, and G8's 4.2 floor would be in breach from day one. That is why the pre-30 Jun 2027 test uses the new-review average. The CEO should confirm this reading of G8 (open question for the CEO).

K4 ramp: the 1 h SLA goes live 20 Nov 2026; the strategy requires 90% by Q2 2027. Review counts are placeholders because the returning-traveller pool (400-500 a year [A]) limits the response rate; they are re-based at Gate 0 and are the first KPI to be re-cut if the pool is smaller.

---

## 8. Company OKRs by quarter

Format: **O** = objective (qualitative, one sentence), **KR** = measurable key result with owner (role), type **C** (commit, pass/fail, tied to a gate or guardrail) or **A** (aspirational, scored 0.0-1.0; 0.7 acceptable). Six standing objectives run all nine quarters; the table for each quarter lists the KRs only.

Supply coverage convention used below: the strategy gate requires held supply at least equal to the order-book trajectory (1.0 x). The 1.15 x figure is this workstream's working buffer [A, KA8]; where a KR cites 1.15 x, only the 1.0 x floor is a pass/fail gate condition and the 1.15 x part is scored as aspirational.

Standing objectives:
- **O1 Build the order book to plan, at plan margin** (North star; CEO, with Head of Sales)
- **O2 Convert the flow we already have** (L2; Head of Sales)
- **O3 Create new demand that is proven incremental** (L3-L5, L8; Head of Marketing)
- **O4 Protect margin, cash, trust and service** (G1, G3, G6, G8, G10; CFO and Head of Product)
- **O5 Make supply and capacity real before we sell it** (G7, G9, strategy section 13; Head of Product, Head of Sales)
- **O6 Run on facts: measurement, experiments, decisions** (workstream 16; Analytics lead)

### Q4 2026 (2 Nov - 31 Dec): foundations and Gate 0

| Obj | Key result | Owner | Type |
|---|---|---|---|
| O1 | Baseline pack delivered: order book by departure month with margin, 40 MSEK definition, booking-date curve, channel mix, funnel by source, repeat share, SA team size and handling time per file (30 Nov); all A-assumptions in strategy section 18 replaced or confirmed, bridge re-run by 15 Dec | CFO + Head of Sales | C |
| O1 | 2027 target recut to held supply at Gate 0 (15 Dec) and 2027 order book at least 16 MSEK by 31 Dec [A] | CEO | A |
| O2 | Speed-to-lead SLA and rota live 20 Nov; first reply within 1 h for at least 70% of enquiries in December; weekly measurement from week 2 | Head of Sales | C |
| O3 | 4-week paid test live 1 Dec at SEK 100k (brand and high-intent only) with holdout design agreed; spend within the 0.30 MSEK Q4 envelope | Head of Marketing | C |
| O3 | Early-booking campaign with value-adds (not discounts) live 1 Dec for supply-held 2027 departures, and only after the Kammarkollegiet call (13 Nov) and FX policy (20 Nov); fixed-price departures published only with the ZAR price-adjustment clause; discounts and promotions at most 2% of turnover | Head of Marketing | C |
| O4 | Kammarkollegiet growth-forecast call held 13 Nov; FX policy approved 20 Nov; cash model (13-week and 24-month) delivered 15 Dec | CFO | C |
| O4 | Review requests drafted and review automation live by 31 Dec; 10 new reviews [A] | CRM manager | A |
| O5 | Allocation calls started the week of 2 Nov; held-allocation register by month complete 15 Dec | Head of Product | C |
| O6 | KPI dictionary v1 signed 15 Dec; tracking v1 live 30 Nov; D0 weekly one-pager first issued 23 Nov (manual if needed) | Analytics lead | C |
| O6 | First 6 SEO hubs published by 31 Dec; GA4 and Search Console keyword baseline in the Gate 0 pack | SEO/Web lead | C |
| O6 | GL3 target screening started by 31 Dec (5 targets screened by 31 Jan 2027); GL scope inputs collected for the 31 Mar GL1 decision | CEO | C |

### Q1 2027 (1 Jan - 31 Mar): peak season, Gate 1

| Obj | Key result | Owner | Type |
|---|---|---|---|
| O1 | **2027-departure order book at least 24 MSEK by 31 Mar** (Gate 1), with order-book margin at least 19% on new bookings | CEO / Head of Sales | C |
| O1 | 2028-departure order book at least 1.5 MSEK by 31 Mar [A]; weekly D0 shows both years | Head of Sales | A |
| O2 | First reply within 1 h for at least 80% in Q1 and quote sent within 48 h for 90% | Head of Sales | C |
| O2 | Existing-flow close rate at least 25.5% (4-week rolling, March); follow-up cadence compliance at least 85% [A] | Head of Sales | A |
| O3 | About 780 enquiries in the quarter (115 new traffic); first holdout read published by 31 Mar (before Gate 1 this is a brand-search pause test and any prospecting test inside the SEK 0.5 M cap, so a Tranche B read may be underpowered; report the interval) | Head of Marketing / Analytics lead | A / C |
| O3 | Paid commitments before Gate 1 do not exceed SEK 0.5 M in total; Tranche B released only if holdout iROAS at least 4x | Head of Marketing | C |
| O3 | Partner pipeline of 30 named targets by 31 Jan; GL1 scope decision by 31 Mar (CEO) | Head of Marketing / CEO | C |
| O4 | Gross margin on new bookings at least 19%; liquidity facility term sheet 31 Jan; guarantee headroom at least 3 months of forecast | CFO | C |
| O4 | 25 cumulative Trustpilot reviews; average of reviews received since 1 Jan at least 4.5 and rolling score rising (see K7 and the arithmetic note in section 7.4) | CRM manager | A |
| O4 | Legal pack by 31 Mar: standard resegaranti information form, terms update (deposit, instalments, FX clause), influencer checklist, package-law check of upsell flows | Legal / Ops | C |
| O5 | First added consultant starts 1 Feb; supply held at least equal to the order-book trajectory (gate, 1.0 x) and aiming at 1.15 x for every month with open sales; lodge contracts signed by 28 Feb | Head of Sales / Head of Product | C / A |
| O5 | 24/7 model decision by 31 Jan; DMC peak-capacity letters by 28 Feb; guide contracts and succession confirmed by 31 Mar; copy keeps "jourtelefon under resan" until decided | Head of Product | C |
| O5 | Disruption playbook and war-risk cover check by 31 Jan; two preferred-carrier agreements by 28 Feb | Head of Air / CEO | C |
| O6 | Priority SEO hubs (cost, best time, safety, itineraries, segments) and budget-bracket quote form live by 31 Jan, before the Jan-Feb peak | SEO/Web lead | C |
| O6 | All [A] benchmarks replaced by account data by 31 Jan; offline conversion import and holdout live 31 Jan | Analytics lead | C |
| O6 | Gate 1 pack issued 7 days before 31 Mar with the pass/fail list from section 10 | Analytics lead | C |

### Q2 2027 (1 Apr - 30 Jun): Gate 2

| Obj | Key result | Owner | Type |
|---|---|---|---|
| O1 | **2027-departure order book at least 36 MSEK by 30 Jun** (Gate 2); 2028-departure order book at least 5 MSEK [A] | CEO / Head of Sales | C / A |
| O1 | Cumulative programme net contribution not worse than -3.0 MSEK at 30 Jun | CFO | C |
| O2 | First reply within 1 h for at least 90%; existing-flow close rate at least 26% | Head of Sales | C / A |
| O3 | About 540 enquiries (80 new traffic); new-traffic close rate at least 18% once 30 quotes exist | Head of Marketing | A |
| O3 | Holdout iROAS for Tranche B at least 5x to scale (hold at 4-5x, pause under 4x after 8 weeks); marginal cost per marketing-created booking trending to about SEK 36k | Head of Marketing / Analytics lead | C / A |
| O3 | Agent portal live with first 20 agents; GL2 (3 named MICE accounts) and GL4 pilots running | Head of Sales / MICE lead | A |
| O4 | Trustpilot 50 cumulative; rolling 12-month score at least 4.2 (G8 floor, applies from 30 Jun) and new-review average at least 4.5; complaints and ARN cases per 1,000 travellers within threshold set from the 60-day baseline | CRM manager / Ops | C |
| O4 | FX hedge ratio within 50-70% of known cost; prepaid supply at most SEK 4 M | CFO | C |
| O5 | New-product readiness checks passed before any L9 launch; second consultant and booking-ops coordinator released at Gate 1 and both starting by 1 Aug 2027 | Head of Product / Head of Sales | C |
| O6 | GL3 go/no-go decision made at Gate 2 (30 Jun) with at least 5 targets screened | CEO | C |
| O6 | Quarterly bridge re-run with actuals; experiment log complete for every test | Analytics lead + CFO | C |

### Q3 2027 (1 Jul - 30 Sep): scale the winners, prepare 2028

| Obj | Key result | Owner | Type |
|---|---|---|---|
| O1 | 2027-departure order book at least 43 MSEK [A]; 2028-departure order book at least 11 MSEK [A] | CEO | A |
| O1 | 2027 on track for 48 MSEK (range 46-50) per the monthly forecast; departed turnover for Q3 at least 14 MSEK [A] | CFO | A |
| O2 | Existing-flow close rate at least 26%; lost-reason coding on 95% of lost quotes | Head of Sales | A / C |
| O3 | About 440 enquiries (60 new traffic); Tranche B scaled only on tests with iROAS at least 5x; marginal cost per marketing-created booking at most about SEK 30k | Head of Marketing | A |
| O3 | At least 2 hosted departures at 75% of seats by T-120 days [A]; 60% of signed partners producing an enquiry in the quarter [A] | Head of Marketing | A |
| O4 | Margin on order book at least 19.5% [A]; no month sold above held supply | CFO / Head of Product | C |
| O4 | 75 cumulative Trustpilot reviews at a rolling score of at least 4.4; repeat and referral share (rolling) at least 16% | CRM manager | A |
| O5 | 2028 supply requested and held at least equal to (gate) and aiming at 1.15 x the 2028 order-book trajectory; DMC peak capacity letters for 2028 | Head of Product | C / A |
| O6 | 2028 budget proposal and KPIs re-based for Gate 3 prepared by 15 Oct | Programme owner | C |

### Q4 2027 (1 Oct - 31 Dec): Gate 3 and the 2028 release

| Obj | Key result | Owner | Type |
|---|---|---|---|
| O1 | **2028-departure order book on a trajectory to at least 19 MSEK by 31 Dec (core), 24 MSEK for stretch**; Gate 3 on 31 Oct tests at least 14 / 17 MSEK [A, section 7.1] and margin at least 19%; the 31 Dec values are then scored as the outcome | CEO | C |
| O1 | 2027 closes at 46-50 MSEK departed turnover with gross margin within 1 pt of order-book margin | CFO | A |
| O2 | Existing-flow close rate at least 26%; first reply within 1 h at least 92% | Head of Sales | A |
| O3 | About 680 enquiries (99 new traffic); marginal cost per marketing-created booking at most about SEK 25k run-rate; incremental ROAS proven for each channel receiving 2028 money | Head of Marketing | A / C |
| O3 | Resemässan/Seniorfestivalen exhibit in Oct (SEK 120-250k, gated line) judged on enquiry and booking attribution within 90 days (so scored in Q1 2028) | Head of Marketing | A |
| O4 | **100+ Trustpilot reviews at 4.5+** by 31 Dec; complaints within threshold | CRM manager | C |
| O4 | 2028 loss budget and guarantee limit released at Gate 3 only if cumulative net contribution within limit | CFO / CEO | C |
| O5 | 2028 hires made on triggers (K2 and capacity); supply coverage at least 1.0 (gate) and aiming at 1.15 | Head of Sales / Head of Product | C / A |
| O6 | GL1-GL4 go/no-go made on evidence at Gate 3; 2028 OKRs signed by 15 Dec | CEO / Programme owner | C |

### Q1 2028: Gate 4

| Obj | Key result | Owner | Type |
|---|---|---|---|
| O1 | **2028-departure order book at least 32 MSEK (core) / 40 (stretch) by 31 Mar** (Gate 4) with margin at least 19%; 2029-departure order book at least 2 MSEK [A] | CEO / Head of Sales | C / A |
| O2 | Existing-flow close rate at least 26.5%; about 1,070 enquiries (385 new traffic) | Head of Sales / Head of Marketing | A |
| O3 | Marginal cost per marketing-created booking about SEK 20k; Tranche B spend only on tests with iROAS at least 5x | Head of Marketing | C |
| O3 | Partner-sourced turnover on 2028 departures at 8% [A] of the order book, no single partner over 10% | Head of Marketing | A |
| O4 | 125 cumulative reviews at 4.5+; repeat and referral share (rolling) at least 18% | CRM manager | A |
| O4 | Programme net contribution tracked monthly within the 2028 loss budget | CFO | C |
| O5 | Quotes per consultant within the limit set by the Head of Sales (G9); no paid expansion in a week with SLA missed | Head of Sales | C |
| O6 | EU Directive 2026/1024 re-engineering plan drafted; final by Q2 2028 per strategy section 15 (transposition about Sept 2028 [VERIFY]) | Legal / Ops | C |

### Q2 2028: Gate 5

| Obj | Key result | Owner | Type |
|---|---|---|---|
| O1 | **2028-departure order book at least 48 MSEK (core) / 60 (stretch) by 30 Jun** (Gate 5); 2029-departure order book at least 5 MSEK [A] | CEO | C / A |
| O2 | Existing-flow close rate at 27%; first reply within 1 h at least 92% | Head of Sales | A |
| O3 | About 740 enquiries (265 new traffic); marginal cost about SEK 18k; holdout iROAS reported on total paid (plan about 2.0x) with Tranche B at least 5x | Head of Marketing | C / A |
| O4 | **150+ reviews at 4.5+** by mid-2028; margin at least 20% on the order book (blended) | CRM manager / CFO | A / C |
| O5 | Supply for peak 2028 departures covered at least 1.15; guides and DMC capacity confirmed for the Jun-Oct peak | Head of Product | C |
| O6 | Quarterly bridge re-run: confirm whether GL1-GL4 are on track for 80 (at least three of four must land) | CFO / Programme owner | C |
| O6 | EU Directive 2026/1024 re-engineering plan final and approved before Gate 5 (30 Jun) | Legal / Ops | C |

### Q3 2028

| Obj | Key result | Owner | Type |
|---|---|---|---|
| O1 | 2028-departure order book at least 56 MSEK (core) / 70 (stretch) [A]; 2029-departure order book at least 11 MSEK [A] | CEO | A |
| O2 | Existing-flow close rate at 27%; follow-up cadence compliance at least 90% | Head of Sales | A |
| O3 | About 600 enquiries (215 new traffic); L4 organic share of new traffic at least 30% [A]; marginal cost at most SEK 18k | Head of Marketing / SEO lead | A |
| O4 | Repeat and referral share at least 19.5%; 165 cumulative reviews; complaints within threshold | CRM manager | A |
| O5 | 2029 allocation calls complete; hosted departures for 2029 announced only with supply held | Head of Product | C |
| O6 | 2029 planning inputs frozen from measured data (no assumptions without a source) by 30 Sep | Programme owner | C |

### Q4 2028: close-out and 2029 launch

| Obj | Key result | Owner | Type |
|---|---|---|---|
| O1 | **2028 departed turnover 64.4 MSEK (core) / 80 (stretch)** at margin at least 20%; 2029-departure order book at least 19 MSEK (30% of a flat 64.4 placeholder) | CEO / CFO | C / A |
| O2 | About 940 enquiries (335 new); existing-flow close rate at 27% | Head of Sales | A |
| O3 | Marginal cost at most SEK 18-20k; share of 2028 bookings from new traffic channels at least 27% of bookings (173 of 637) | Head of Marketing | A |
| O4 | Repeat and referral share about 20% (about 125 bookings); 175 reviews at 4.5+ | CRM manager | A |
| O5 | Capacity and supply plan for 2029 signed with Head of Product, Head of Sales, CFO | Head of Product | C |
| O6 | Programme close-out report: bridge versus actuals by lever, lessons, evidence-graded learning log; 2029 OKRs signed by 15 Dec | Programme owner | C |

Scoring note: C KRs are 1/0; A KRs use linear 0.0-1.0 between a floor (the value that would be red in section 6) and the target. The company objective score is the average of its KRs, but any failed C KR is displayed separately as a flag and cannot be averaged away.

---

## 9. Thresholds and pre-agreed actions (trigger-action table)

Applies to the weekly D0 screen. "Two consecutive weeks" means two consecutive Monday readings. The default owner executes unless the growth council overrides within one meeting.

| Trigger | Action (automatic unless overridden) | Owner |
|---|---|---|
| K4 below the K4 red band (80% from Q2 2027; more than 10 pts under the ramp before), or SLA missed 2 consecutive weeks | Freeze all budget increases; paid to Tranche A only (G8); rota change within 3 working days | Head of Sales / Head of Marketing |
| K0 order book 90-97% of plan for 4 weeks | Amber: root-cause review in next council (funnel stage, source, product); no budget change yet | Programme owner |
| K0 under 90% of plan at any checkpoint minus 8 weeks | Red: recompute gate forecast; prepare reduced-scope plan; hold unreleased gated money (2027: 1.2 MSEK gated); consider recutting the 2027/2028 target | CEO |
| K1 margin under 19.0% for 2 weeks | Review ladder entry products and partner commission; stop campaigns that discount; CFO approves any exception; value-adds funded from supplier rebates only | CFO |
| K2 enquiries under 85% of weekly plan for 4 weeks | Check tracking first (D7); then pacing and creative; do not increase spend until K3 and K4 are green | Head of Marketing / Analytics lead |
| K3 existing-flow close rate more than 1 pt under for 6 weeks | Pipeline review of lost reasons; coaching; check quote quality and price positioning vs the 15-20% premium | Head of Sales |
| K5 over 24k for 2 consecutive months in 2028 | Cut the lowest-iROAS spend by 20%; reallocate to Tranche A or CRM follow-up | Head of Marketing |
| K6 under 4x after 8 weeks | Pause Tranche B in that channel; redeploy only at the next growth council | Head of Marketing / Analytics lead |
| K7 red band (rolling score under 4.2 from 30 Jun 2027; new-review average under 4.2 before; complaints above threshold 2 weeks) | G8 breach: Tranche A only until fixed; service recovery review | Head of Sales / CRM manager |
| Two or more gate metrics missed at a gate, or K8 worse than -3.0 MSEK at 30 Jun 2027 | Stop-loss (strategy 12.3), within 30 days: freeze Tranche B and gated lines, defer 2028 hires, convert planned fixed headcount to variable capacity; target at least 30% run-rate cost reduction within 60 days | CEO / CFO |
| K10 hedge ratio outside the red band, or a campaign wave planned without the Kammarkollegiet forecast | Do not launch the wave; CFO restores the hedge or sends the forecast first | CFO |
| K8 within 0.5 MSEK of the -3.0 MSEK limit | Freeze all unspent gated marketing and uncommitted hires; CEO decision on the cost-cut rule (strategy 12.3) | CEO / CFO |
| K9 under 1.0 coverage, or a month sold above held supply (1.0-1.05 is a watch item reviewed weekly) | Stop promoting that month; release or buy allocation; no advertised departure without held supply | Head of Product |
| K10 guarantee headroom under 1 month or prepaid supply over SEK 4 M | Stop growth promotions that lift volume until the Kammarkollegiet forecast and bank limits are updated | CFO |
| D7 data quality: more than 10% of enquiries lack a source for 2 weeks | Do not read any source-based KPI as red or green; fix the capture | Analytics lead / CRM manager |

Rule against gaming: no KR may be met by relabelling sources, redefining "existing flow" or "marketing-created", or choosing a different time window after the fact. The Analytics lead can void a KR reading when the change log shows such a change.

---

## 10. Gate scorecards (pre-printed pass/fail lists)

Every gate uses the same one page plus appendix, issued by the Analytics lead 7 days ahead and signed by the CEO. Each row is pass / fail / not yet measurable, with the evidence grade (A hard data, B partial, C assumption). A gate passes only when every row passes (strategy 16.2).

| Gate | Date | Pass conditions (from strategy) | KPI rows |
|---|---|---|---|
| Gate 0 | 15 Dec 2026 | Margin and 40 MSEK definition known; held-supply register; cash model; Kammarkollegiet and bank feedback | K1 baseline, K0 definition, K9 register, K10 model |
| Gate 1 | 31 Mar 2027 | 2027 order book at least 24 MSEK; margin on new bookings at least 19%; response SLA met (read as the K4 Q1 path of 80% unless the CEO confirms a strict 90%); Trustpilot trending to 4.5 (new-review average at least 4.5, rolling score rising); first holdout read; marketing per booking within cap (read as blended at most SEK 8,000 per booking; K5 marginal cost is reported but not scored before 30 marketing-created bookings, because strategy G4 plans about SEK 36k in 2027); supply held at least equal to trajectory | K0, K1, K4, K7, K6, K5, K9 |
| Gate 2 | 30 Jun 2027 | 2027 order book at least 36 MSEK; cumulative net contribution not worse than -3.0 MSEK; L3 and L8 versus plan; service metrics; new-product readiness | K0, K8, lever KPIs L3 and L8, K4, K7, readiness checklist |
| Gate 3 | 31 Oct 2027 | 2028 trajectory to 19 MSEK (core) or 24 (stretch) by 31 Dec, tested as at least 14 / 17 MSEK at 31 Oct [A]; margin at least 19%; incremental ROAS proven | K0 (2028 departures), K1, K6 |
| Gates 4 and 5 | 31 Mar and 30 Jun 2028 | 2028 order books at 32 / 48 (core) or 40 / 60 (stretch) | K0 and margin; scale winners |

For each gate the pack also states: which assumptions changed since the last gate, which levers are ahead or behind, and the recommended decision. Revenue alone never passes a gate.

---

## 11. Dashboards and reporting (built on workstream 16)

This workstream does not build tooling; it fixes what each screen shows and who reads it. Dashboard IDs are those of workstream 16 section 9.1.

| Screen | Primary KPIs | Owner | Cadence | Reader and decision |
|---|---|---|---|---|
| D0 Weekly one-pager (mobile-readable) | K0-K10, 2 lines each: actual vs plan, 4-week trend; RAG | Analytics lead | Monday 07:00 | CEO and council: any red triggers section 9 action |
| D5 Order book and margin | K0, K1, booking curve, cancellations, pass-through share, commission cost | CFO | Weekly | CFO, CEO: gate forecasting |
| D4 CRM and sales | K3, K4, quote age, lost reasons, capacity | Head of Sales | Daily | Advisers: daily work list |
| D2 Paid | K5, K6, spend vs cap, Tranche A/B | Head of Marketing | Daily | Marketing: optimisation within tranche rules |
| D3 SEO and content | L4 leading indicators, AI-search referrals | SEO lead | Weekly | Content priorities |
| D6 Experiment log | Every test, MDE, interval, decision | Analytics lead | On change | Council: scale or stop |
| Lever scorecard (monthly pack) | Section 6.2 table with actuals vs bridge, overlap haircut applied | Analytics lead + CFO | Monthly (first week) | Budget moves between levers |
| OKR tracker (shared sheet or tool already in use) | KR, owner, baseline, current, score, comment (Number, change, cause, action, owner, date) | Programme owner | Weekly update, scored monthly | Quarterly review |

Design rules: each screen answers one decision; no vanity metrics; every chart shows plan or prior year; every KPI links to its dictionary entry; one owner per screen; freshness stamp on every page. Before the data warehouse is ready (target 31 Jan 2027), D0 is a manually populated spreadsheet from the booking system and CRM exports. A late warehouse never delays the first weekly issue.

Commentary format (to stop dashboards becoming decoration): **Number, change, cause (known / unknown), action, owner, date.**

### 11.1 Swedish measurement copy (customer-facing; to be checked by the copy owner and, for the consent text, by Legal)

Source capture on every enquiry form, quote request and booking call script ("how did you hear", needed for D7 and the new-traffic split):

- Question: **Hur hörde du talas om oss?**
- Options: Googlesökning / Facebook, Instagram eller YouTube / AI-chatt (till exempel ChatGPT) / Rekommendation från vän eller familj / Har rest med oss tidigare / Tidning, mässa eller event / Resebyrå eller partner / Annat (fritext)

Trip-end survey (sent day 3-5 after return, before the review request at day 10-14):

- NPS: **Hur troligt är det att du skulle rekommendera oss till en vän eller kollega?** (0 = inte alls troligt, 10 = mycket troligt)
- Follow-up: **Vad var viktigast för ditt betyg?**
- Service check: **Fick du svar från din rådgivare så snabbt som du hoppades?** (Ja / Nästan / Nej)

These strings only measure; none of them makes a claim about the company. The "svar inom en timme" promise in marketing copy stays off until K4 allows it.

---

## 12. OKR operating rhythm

| Cadence | Event | Duration | Participants | Output |
|---|---|---|---|---|
| Weekly Mon | D0 issue plus 5-line commentary | async | CEO, council | Red items assigned |
| Weekly Tue-Wed | Functional stand-ups on D2/D3 and D4 (workstream 16 section 9.2) | 30 min each | Marketing; Sales and CRM | Optimisations, lead-quality feedback |
| Weekly Fri | KR check-in: each owner updates confidence (green / amber / red) and a comment in the tracker | 10 min per owner, async | All OKR owners | Tracker current |
| Monthly (first week) | Growth council: lever scorecard, experiment log, trigger-action review, KR scoring | 90 min | CEO (chair), Heads of Sales, Marketing, Product, CFO, CRM manager | Budget moves, tranche status, hiring triggers |
| Quarterly | OKR retro and next-quarter planning (done in the last two weeks of the quarter): score the last quarter, re-run the bridge with actuals, re-base [A] targets, set next quarter KRs | Half day | Council plus workstream owners | Signed OKR sheet by day 5 of the new quarter |
| Gate date | Gate pack review | 60 min | CEO, council, board as needed | Release or hold decisions |

Rules: at most 3 objectives per owner and 3-5 KRs; a KR without a baseline is not scored until the baseline exists (marked "measure"); KR changes in-quarter only through the change log and only for external shocks, not to rescue a score; owners do not score their own gate KRs (the Analytics lead and CFO do).

Cascading: company KRs (section 8) cascade to a one-page team OKR per function (Sales, Marketing, Product/Supply, CRM, Web/SEO, Finance, Analytics). Individual advisers get two KPIs only, in their performance conversation: first reply time and close rate on their own pipeline, plus quote quality; incentive design is outside this workstream and must not reward discounting (margin must be on the same line).

---

## 13. Budget (SEK)

The KPI and OKR system needs time more than money. It uses lines already in the strategy and adds nothing to the envelope. Figures are [ASSUMPTION] and sit inside workstream 16's lines (training and contingency).

| Item | Q4 2026 | 2027 | 2028 | Notes |
|---|---|---|---|---|
| OKR/KPI kickoff workshops and facilitation (internal facilitator preferred; external half-day if needed) | 10k | 15k | 5k | Funded from workstream 16 contingency |
| Training: dashboard literacy and CRM hygiene for advisers and owners | 0 | 10k | 5k | Workstream 16 training line |
| Tracker tool seats or template build (use existing tools first) | 0 | 5k | 0 | Spreadsheet by default |
| Contingency | 0 | 0 | 0 | |
| **Total** | **10k** | **30k** | **10k** | Cumulative SEK 50k; no new envelope |

Time budget (not in cash): Analytics lead 0.2 FTE for OKR administration, scoring and gate packs; each OKR owner about 2 hours a week; CEO about 3 hours a week across Monday D0, council and gates; CFO about 4 hours a week on the order-book and margin extract (until automated); the Analytics lead role itself is costed in workstream 16 and the A18 FTE line.

---

## 14. Timeline

| Date | Milestone | Owner |
|---|---|---|
| 6 Nov 2026 | Programme owner appointed; KPI list K0-K10 circulated for comment | CEO / Programme owner |
| 13 Nov 2026 | Draft KPI dictionary (section 5) reviewed by CFO, Head of Sales, Analytics lead | Analytics lead |
| 20 Nov 2026 | Every workstream owner has lever tag and 3-5 KRs for Q4 2026 and Q1 2027 | Programme owner |
| 23 Nov 2026 | First manual D0 weekly issue | Analytics lead |
| 30 Nov 2026 | Tracking v1 live; first weekly KR check-in | Analytics lead / all owners |
| 15 Dec 2026 | Dictionary v1 signed; baselines in; targets re-based; Gate 0 | CFO / Programme owner |
| 31 Jan 2027 | Warehouse-based D0; all [A] benchmarks replaced; thresholds in section 9 signed | Analytics lead |
| End Mar 2027 | Gate 1 pack; Q2 OKRs set | Programme owner |
| Quarterly | OKR retro in the last two weeks of each quarter | Programme owner |
| 30 Jun 2027 | Gate 2 | CEO |
| 31 Oct 2027 | Gate 3; 2028 OKRs signed by 15 Dec | CEO |
| 31 Mar and 30 Jun 2028 | Gates 4 and 5 | CEO |
| Dec 2028 | Close-out report; 2029 OKRs | Programme owner |

---

## 15. Dependencies and risks

### 15.1 Dependencies

| Dependency | Needed from | By | If late |
|---|---|---|---|
| Booking system extract: order book by departure month, with margin and cancellations | CFO, Head of Sales | 15 Dec 2026 | K0 and K1 run on manual extracts; Gate 0 flagged "evidence C" |
| CRM stages, source capture, consent flags | CRM manager | 30 Nov 2026 (v1), 31 Jan 2027 | Source-based KPIs shown "not measurable"; no scoring |
| Warehouse, GA4 and offline import | Analytics lead (workstream 16) | 31 Jan 2027 | Manual D0; K5 and K6 delayed |
| Holdout design and enough volume to read it (about 41 enquiries a week is a power constraint; workstream 16 section 8) | Analytics lead | 31 Jan 2027 | Use geo or time-based tests; accept wider intervals; keep 5x rule |
| Supply register | Head of Product | 15 Dec 2026 | K9 not scored; sales promotion limited to known supply |
| Finance model values and loss budget | CFO | 15 Dec 2026 | K8 uses placeholder path from the 27 model |
| Owner buy-in and time | CEO | 20 Nov 2026 | OKR system degrades into a report nobody uses |

### 15.2 Risks

| Risk | Likelihood / impact | Mitigation | Early indicator |
|---|---|---|---|
| Baselines are far from assumptions (for example margin 14% or enquiries 1,500), so most targets are wrong | Medium / High | Re-base at Gate 0 and in Jan 2027; show ranges; recut the 2027/2028 targets at Gate 0 through the CEO | Baseline pack differs more than 15% from strategy values |
| Too many KPIs; dashboard overload | High / Medium | Hard cap of 11 company KPIs; Tier 3 stays in functional dashboards | Council spends over half its time on definitions |
| KPI gaming: relabelled sources, discounting to hit order book, moving the "existing flow" line | Medium / High | Frozen definitions, change log, margin on the same line as order book, Analytics lead voiding power | Close-rate jumps with no behaviour change; margin falls with order book up |
| Lagging indicators trusted too long | Medium / High | Leading-indicator pairing and the 4-week reading rule (section 4.1) | Order book green, enquiries red for 4 weeks |
| Attribution noise causes wrong budget moves | High / Medium | Use holdout iROAS and marginal cost; platform ROAS as sanity check only | Platform ROAS 8x versus holdout under 3x |
| Review KRs unachievable because the returning-traveller pool is small | Medium / Low | Other review sources (Google, Reco); re-base the count at Gate 0; the score matters more than the count | Response rate under 15% after 8 weeks |
| Seasonality assumption wrong, so quarterly checkpoints mislead | Medium / Medium | Booking-date curve from 2026 data; checkpoints re-cut within 60 days | Q4 2026 order book vs placeholder differs by more than 25% |
| OKR fatigue or turnover of the Programme owner | Medium / Medium | Light rhythm (section 12); one deputy trained | Missed Friday check-ins for 2 weeks |
| Single-source dependency on the Analytics lead | Medium / High | Document dictionary; train a deputy; any external retainer must be quoted and approved separately (it is not in the SEK 50k of section 13) | Lead absent more than 2 weeks |
| Market shock (Tanzania analogue, -35% bookings) | Low / Very high | Shock case 38 MSEK in 2027 and 46 in 2028; shock triggers a re-plan of all KRs, not individual red flags | K2 and K0 both red for 4 weeks with external news |

---

## 16. First 30 days (2 Nov - 2 Dec 2026)

| Week | Action | Owner | Done when |
|---|---|---|---|
| 1 (2-6 Nov) | CEO appoints Programme owner; send KPI list K0-K10 and this plan for comment; issue the data requests in section 18 to CFO and Head of Sales | CEO | Owner named; requests sent |
| 1 | Start the "what is a booking / order book / enquiry" working session; draft definitions agreed in principle | CFO + Analytics lead + Head of Sales | Draft in section 5 reviewed |
| 2 (9-13 Nov) | Booking system extract specification (order book by departure month, margin, cancellations); first manual pull for 2026 | CFO | First extract in a sheet |
| 2 | Map every workstream owner's draft KRs to a lever tag; remove KRs that have no lever or guardrail | Programme owner | Mapping table complete |
| 3 (16-20 Nov) | Workshop (2 h): approve thresholds in section 9 as draft; agree who covers D0 when the owner is absent | CEO + council | Draft thresholds minuted |
| 3 | SLA live 20 Nov: start daily K4 measurement even if manual | Head of Sales | First week of data |
| 4 (23-27 Nov) | First D0 one-pager issued Monday 23 Nov (manual) with the baselines available, blanks marked "measure" | Analytics lead | CEO has received it |
| 4 | Q4 and Q1 KRs entered in the tracker; owners sign | Programme owner | 100% KRs signed |
| 5 (30 Nov - 2 Dec) | Tracking v1 live; first weekly KR check-in; first 4-week paid test (1 Dec) with holdout design registered | Analytics lead / Head of Marketing | Check-in held; test pre-registered |
| By 2 Dec | List every [A] value in sections 6-8 that can be replaced by a baseline before Gate 0 and assign an owner and date | Analytics lead | Replacement list agreed |

Output at day 30 (2 Dec): dictionary draft, KR set signed, two D0 issues (23 and 30 Nov), trigger-action table in draft, replacement list for all assumptions.

---

## 17. Assumptions register (replace with company data)

| # | Assumption | Rationale | Replace with |
|---|---|---|---|
| KA1 | 2026 enquiry baseline about 2,030 a year, about 570 in Q4 2026 | Back-calculated from strategy (3,348 = +65%) and enquiry seasonality | CRM export by month and source |
| KA2 | Enquiry seasonality 32 / 22 / 18 / 28% by quarter | Strategy A16 says 50-60% of paid goes into Nov-Mar; no Swedish source | 2026 enquiry data by month |
| KA3 | Recognised turnover seasonality (Q1 22.9%, Q2 25%, Q3 29.2%, Q4 22.9% of year) | Plausible southern-hemisphere peak; no company data | Departure-date turnover by month; recognition policy [A8] |
| KA4 | Interim order-book checkpoints (31 Dec 2026, 30 Sep 2027, 30 Sep and 31 Dec 2028 and the 2029 columns) | Interpolation between strategy checkpoints; flat 64.4 placeholder for 2029 | Booking-date versus departure-date curve; recalibrate within 60 days |
| KA5 | Existing-flow close rate 25% at Q4 2026 and the quarterly steps to 27% | Strategy A10; quarterly path is linear interpolation | CRM close rate by source |
| KA6 | First-reply baseline 70% in Dec 2026 and the ramp to 90% | Only the 90% by Q2 2027 target is from the strategy | Measured first-reply times in Nov |
| KA7 | Review count path (25 / 50 / 75 / 100 / ... 175) and the rolling-score path (4.0 / 4.2 / 4.4 / 4.5) | Linear to the strategy's 100+ by Dec 2027 and 150+ by mid-2028; depends on 400-500 returning travellers [A]; score path from arithmetic on the strategy's 2.7 on 8 reviews, assuming new reviews average 4.8 | Review platform export and returning-traveller count |
| KA8 | Supply coverage ratio 1.15 x order book as working target (strategy gate is 1.0 x) | Judgement buffer for cancellations and mix | Head of Product and DMC terms |
| KA9 | K5 quarterly path SEK 40k to 18k | Strategy gives 2027 about 36k and 2028 about 18k; quarterly interpolation | Finance + attribution after Jan 2027 |
| KA10 | Amber/red tolerances (for example 90-97%, 85% for 4 weeks, 6 weeks of close rate) | Judgement; calibrate to weekly volatility once baseline exists | 12 weeks of weekly data |
| KA11 | Repeat and referral path 15% to 20% | Strategy A12; quarterly path linear | CRM repeat share |
| KA12 | Hosted departure and partner KRs (75% seats by T-120, 60% of partners producing) | Judgement | Product plans |
| KA13 | Budget lines for the OKR/KPI system (SEK 10k / 30k / 10k) | Inside workstream 16's line | Actual quotes and training needs |
| KA14 | Order book 2027 at 31 Dec 2026 equals 16 MSEK | Placeholder | Actual 2026 pace at same date |
| KA15 | Individual adviser KPIs (first reply, close rate, quote quality) | Common practice; no company evidence | HR and sales leadership design |

---

## 18. Data requests to the CEO (priority order)

1. Booking-system export: all bookings 2024-2026 with booking date, deposit date, departure date, turnover, cost, gross margin, pass-through items, cancellations, source and adviser.
2. Definition of the 40 MSEK and the revenue recognition rule (booking, deposit, departure or net).
3. CRM export: enquiries by date, source, adviser, stage, lost reason, response time, quote date; plus phone and chat logs.
4. 2026 marketing spend by channel and month; GA4 and Search Console access.
5. Current review counts and scores (Trustpilot, Google, Reco) and returning-traveller count.
6. Allocation held by departure month and supplier terms; guide and DMC capacity.
7. Current guarantee level, liquidity lines, FX practice.
8. Team list and workload (quotes per consultant, handling time), and the current incentive scheme for advisers.
9. Whether OKRs or KPI tools are already in use (do not add a new tool if one exists).

---

## 19. Sources

No external sources were needed beyond the strategy and its research files (/docs/00-strategy.md, /docs/research/, workstreams 16, 27, 28). KPI design follows widely used OKR practice (commit versus aspirational KRs, 0.7 scoring) as the author's working convention, not a cited study. Any web-sourced benchmark added later must carry its URL.
