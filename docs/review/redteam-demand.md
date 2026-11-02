# Red-team review (demand lens): can Sweden deliver 80 MSEK for sydafrikaresor.se?

Reviewer: red-team skeptic, demand lens | Date: 2026-11-02 | Reviewed: docs/00-strategy.md (v1) and docs/research/01-12
Default stance: skeptical. Tags: [SOURCED] has a URL; [CALC] is arithmetic on the plan's own inputs; [ASSUMPTION] is my placeholder and needs real data.

## 1. Verdict

The 80 MSEK target is **not demonstrated to be achievable from Swedish demand, and the plan's own numbers say it is a stretch**. Four findings drive that:

1. **Share required is likely 7-10% of the Swedish leisure pool, not 4.7%.** The plan measures share against all Swedish arrivals, which include business, VFR and self-booked trips. It also assumes the company's own tripled-share story is "feasible" without sizing the leisure or intermediated pool.
2. **Market growth is almost certainly lower than the 7.2% a year assumed.** Fresh 2026 data show South Africa's total tourist arrivals have flattened (Sep 2026 about -1.3% y/y). The 2025 base (+12.5%) was a rebound year.
3. **The funnel math does not close with the plan's own conversion assumptions.** Close rate is assumed to rise (25% to 28%) while the new traffic is colder. A realistic blended close of 20-22% needs about 4,200 enquiries in 2028, not 3,300.
4. **Paid media is value-destroying at the plan's incremental economics.** L3 shows 5.0 MSEK incremental on 3.0 MSEK media (about 1.7x incremental ROAS) while the "8x ROAS" guardrail is on attributed revenue. At a 20% margin the paid lever loses money.

The risk-adjusted 66 MSEK in the plan is itself optimistic (see section 7). My demand-side estimate of a realistic 2028 outcome is **55-65 MSEK** [ASSUMPTION, wide band].

## 2. Market size and share: the denominator problem

### 2.1 What the plan says
- Swedish arrivals 27,625 in 2025 [SOURCED: https://www.statssa.gov.za/publications/P0350/P0350December2025.pdf]. Plan implies 3.0% share today (about 890 travellers at SEK 45k [A1]) rising to 4.7% in 2028 (about 1,620 travellers).

### 2.2 Why 4.7% understates the ask
- Arrivals count all purposes. Holiday is only 17.5% of all SA arrivals, though that is dominated by regional VFR and Sweden is different [SOURCED: R06 citing SAT 2025 report https://live.southafrica.net/media/308701/sat-2025-annual-international-tourism-performance-report-1.pdf?downloadId=436981]. No Swedish holiday-only share exists in the research (R01 unknown 4, R06 unknown 6).
- Arrivals include self-booked, airline-package and mass-operator customers (Ving, TUI, Apollo, Ticket) that sydafrikaresor.se will not capture with a specialist offer.
- Sweden is outside SA's top-10 overseas markets and below Denmark (19,547) in arrivals [SOURCED: R01, R06]. Sweden does not have an obviously deep SA pool.

Sensitivity on the share the plan needs (all [CALC]; 2028 arrivals 34.1k per plan A3; travellers needed 1,620 at SEK 49.5k per traveller):

| Assumed leisure share of Swedish arrivals [ASSUMPTION] | Leisure pool 2028 | Share needed 2028 | Share today (890 pax / 29.6k arrivals) |
|---|---|---|---|
| 70% | 23.9k | 6.8% | 4.3% |
| 60% | 20.5k | 7.9% | 5.0% |
| 50% | 17.1k | 9.5% | 6.0% |

If only half of leisure travellers use any intermediary [ASSUMPTION], the share of the *intermediated* pool needed in 2028 is **14-19%**. For a company with a Trustpilot 2.7 on 8 reviews against MyChoice 5.0 (236) and Safariresor.se 4.8 (~623) (R03), that is a very large ask in a field with at least seven specialist rivals plus Ving/TUI/Apollo.

### 2.3 Revenue-per-traveller sensitivity (the plan's single most important unknown)
All [CALC]; 2028 revenue per traveller = ABV x 1.10.

| 2026 revenue per traveller [ASSUMPTION] | Travellers today | Share today | Travellers for 80 MSEK in 2028 | Share 2028 |
|---|---|---|---|---|
| SEK 35k | 1,143 | 3.9% | 2,078 | 6.1% |
| SEK 45k (plan) | 889 | 3.0% | 1,616 | 4.7% |
| SEK 60k | 667 | 2.3% | 1,212 | 3.6% |

The conclusion flips depending on ABV, and ABV is unknown. Note that if "from" prices (SEK 17.9k-95.2k) exclude international flights, true revenue per traveller could be well above 45k and the plan's share arithmetic is conservative; the plan itself flags this (strategy section 14, data request 6). **No decision on budget, hiring or allocations should be made before this is known.**

### 2.4 Share of *incremental* demand
Market adds about 4,500 arrivals between 2026 and 2028 under the plan's own growth (29.6k to 34.1k). The company needs about **730 extra travellers**, of which constant-share growth supplies only about 135 (3% of 4,500). So about **595 extra travellers (82% of the increment) must be taken from rivals or DIY**: roughly 13% of all market growth, 4-5x the company's fair share, in a segment where rivals (Tourcompass price guarantee to Nov 2028, MyChoice scale-up, Ving round trips with SEK 2,000 codes) are actively responding (R03, strategy R7).

## 3. Market growth: the 7.2% assumption is stale

- Plan A3: +7.2% a year 2026-28, tempered from +12.5% for fares, fuel, rand and Gulf risk. No Sweden 2026 YTD figure was obtained (R01 unknown 4/12; R06 unknown).
- New evidence this review pulled (secondary and partial, please verify on Stats SA monthly tables):
  - Total SA tourist arrivals Jan 2026 +11.8% y/y and Mar 2026 foreign-traveller arrivals +8.4% [SOURCED: https://www.statssa.gov.za/publications/P0350/P0350March2026.pdf].
  - By May 2026 the tourist arrivals row shows -6.5% y/y (368,610 to 344,519) [SOURCED: https://www.statssa.gov.za/publications/P0350/P0350May2026.pdf; table is ambiguous, verify which category].
  - September 2026 total tourist arrivals about -1.3% y/y [SOURCED, secondary: https://www.riotimesonline.com/south-africa-tourist-arrivals-fall-16-9-percent-2026/ ; primary https://www.statssa.gov.za/publications/P0350/P0350September2026.pdf not read].
- The strategy cites April 2026 Gulf shocks (Emirates -34%, Qatar -56% flights) and krona -7% y/y against the rand (SEK/ZAR 1.696) (strategy facts 6 and 8). Those are headwinds for Swedish demand specifically and both occurred *in the base year*.
- 2025 growth (+12.5%) was in line with Europe, i.e. a rebound, and Swedish arrivals are still about 43% below 2017 (48,552) (R02). That cuts both ways: headroom exists, but the market has previously fallen from 48.5k to 27.6k, so volatility, not trend, is the base case.
- Ticket's "South Africa bookings more than tripled" is a single agency, a five-week window, winter only, from a small base (R01 section 3). It should not support a trend claim.

Impact [CALC]: with 3% and 0% market growth in 2027/2028 (a downside I judge plausible, [ASSUMPTION]), constant-share turnover is about 42 MSEK in 2028, not 46. L1 (+6.0, confidence 90%) is overstated by 2-4 MSEK, and the extra gap falls on levers L2-L10 that already carry 50-70% confidence. **L1 confidence of 90% is not defensible**; 60-70% is.

## 4. Funnel math (traffic x conversion x basket)

### 4.1 The plan's implied funnel (strategy section 2)
| | 2026 | 2028 |
|---|---|---|
| Bookings | ~405 | ~735 |
| Close rate (quote to booking) | 25% | 28% |
| Quote rate | 80% | 80% |
| Enquiries | ~2,025 | ~3,300 |
| Sessions at 2.0% visitor-to-enquiry (R11 range 1-3%) | ~101k | ~164k |
| Sessions at 1.5% | ~135k | ~219k |

Basket: 2.2 travellers x SEK 49.5k = **SEK 109k per booking in 2028** [CALC].

### 4.2 Problems

**a) Conversion rises while traffic mix gets colder.** The plan lifts close rate from 25% to 28% *and* adds 1,300 enquiries mostly via paid prospecting, SEO and content. R11 itself says cold paid search closes at 12-25%, warm email 30-45%, referral 45-60% (Tier C vendor data). Sensitivity [CALC]:

| Blended close in 2028 | Enquiries needed for 735 bookings | vs 2026 (2,025) |
|---|---|---|
| 28% (plan) | 3,280 | +62% |
| 25% (flat) | 3,675 | +81% |
| 22% | 4,175 | +106% |
| 20% | 4,600 | +127% |

So **enquiry growth needed is plausibly +80% to +125%, not +63%**. Conversely if the new volume converts at a blended 18% and the existing base improves to 28%, bookings reach only about 640 (about 70 MSEK) [CALC].

**b) Traffic cannot be validated at all.** The research has no absolute search volumes (R06: "Volumes are NOT available"), no baseline sessions, and branded demand registers "~0" on Google Trends in Sweden (R06 section 3). The plan implicitly needs 160-220k annual sessions from a market where the whole Swedish SA-bound population is about 30k travellers. Even at 50% intermediated, that is one booking per roughly 8-9 sessions of every Swedish SA traveller's research journey, and sessions per customer can be 10-30+. It is *possible*, but nobody has shown the addressable search pool exists. [ASSUMPTION: typical long-haul shoppers visit several competitor sites; share of search must be about 10-15%.]

**c) SEO ceiling.** The plan puts 3.0 MSEK (L4) on content gaps. R06 shows the site already ranks #1 for "resa till Sydafrika" and "rundresa" (the high-intent head terms), so the additional organic volume is informational long tail, which converts poorly and slowly. 0.8 MSEK in 2027 with 4-9 month lag means most of it lands in 2028, past the point where it can feed 2028 departures that are mostly booked 6-12 months ahead (A11 order book 50% by 31 Mar 2028). **SEO content published in 2027 mostly feeds 2028 bookings for 2028 H2 departures and 2029.** Effective L4 contribution to 2028 turnover is probably 1.0-1.5 MSEK.

**d) Basket inconsistencies between research files.** R07 sizes the funnel at SEK 35,000 per booking (about 2 travellers); strategy uses SEK 99-109k per booking. R07's "100-330 paid clicks per booking" and "SEK 800-6,600 per booking" are therefore on a basket one-third the size, but CAC per enquiry is unchanged. The CAC cap of SEK 8,000/booking in strategy G4 is not derived from either. Needs one consistent funnel.

**e) Capacity not part of demand, but binds demand.** Quotes rise from about 1,620 to about 2,625 a year (strategy section 9.3). Adding 2-3 consultants is assumed, with no data on current quotes per consultant. Lead response SLA is assumed at under 1 h for 90% already by Q2 2027.

## 5. Paid media: the incremental economics do not work

All [CALC] on plan inputs, 20% gross margin [A7].

| | 2027 | 2028 |
|---|---|---|
| Paid media spend | 2.2 MSEK | 3.0 MSEK |
| L3 incremental turnover | +2.5 | +5.0 |
| Incremental ROAS (turnover/media) | 1.1x | 1.7x |
| Gross profit on L3 at 20% | 0.50 | 1.00 |
| Media cost | 2.20 | 3.00 |
| Contribution before sales/ops cost | **-1.7** | **-2.0** |

The plan's "8x ROAS" guardrail applies to *attributed* revenue (strategy A15), which includes brand search and retargeting that would convert anyway. At 3.0 MSEK, 8x implies 24 MSEK attributed; L3 claims only 5 MSEK incremental. **Roughly 80% of "attributed" paid revenue is not incremental**, and the plan has no incrementality test (geo or holdout). The kill rule "pause below 5x ROAS for six weeks" would not catch this.

Total marketing check [CALC]: L3+L4+L5+L8 = 16 MSEK incremental in 2028 against incremental marketing spend of about 3.0 MSEK (5.6 less assumed 2.6 baseline) = **19% of incremental revenue**, versus a 20% gross margin. Marketing alone consumes about 94% of the gross profit on these levers before adding 4-6 FTE. Strategy section 10 shows the whole programme at roughly -0.3 to +1.9 MSEK contribution; with the demand adjustments above (lower growth, colder traffic) it is likely negative.

Cost per incremental booking [CALC]: 3.0 MSEK / about 147 incremental bookings (16 MSEK / SEK 109k) = about **SEK 20,000**, against the plan's own SEK 8,000 cap (G4). The SEK 8,000 cap holds only on *average* cost per booking including the existing base.

## 6. Lever-by-lever demand challenge

| Lever | Plan 2028 (conf.) | Challenge | My demand-side range (MSEK) |
|---|---|---|---|
| L1 market | +6.0 (90%) | 2026 flat to negative arrivals; Gulf and FX headwinds; single-year rebound basis | +2 to +4 |
| L2 conversion | +5.0 (70%) | 25% to 28% is +12% relative, so 4.8 MSEK on the base only; but dilutes as colder traffic grows; vendor benchmarks only | +2 to +4 |
| L3 paid | +5.0 (70%) | Incremental ROAS is 1.7x; attribution inflation; Sweden CPC unknown | +2.5 to +5 (at a loss) |
| L4 SEO | +3.0 (60%) | Head terms already owned; lag 4-9 months; informational traffic | +1 to +2 |
| L5 social/creators | +2.0 (50%) | Evidence is two named creators (R08); Facebook organic reach weak; label rules | +0.5 to +1.5 |
| L6 ABV | +4.0 (70%) | +10% via extensions and upgrades; currency pass-through of 3-5% buffer is itself a price rise that hurts conversion and in the mix with 2 | +2 to +4 |
| L7 repeat/referral | +4.0 (60%) | Same-destination repeat structurally low (R11); needs 184 repeat/referral bookings in 2028 vs about 1,350 prior bookings (2025-27) = 14% of all past customers rebooking or referring in one year | +1.5 to +3 |
| L8 B2B/partners | +6.0 (50%) | R12 sizes 8-12 MSEK; commissions 8-12% on a 20% gross margin halve margin; SAT co-op money and tiered agent network unproven; Africa Showcase etc. are buyer-side events | +2 to +4 |
| L9 new products | +3.5 (60%) | Fixed departures need seats and lodge blocks (peak sold 10-12 months ahead, R05) and fill risk; guided cluster already crowded (Albatros, Tourcompass, Temaresor) | +1.5 to +3 |
| L10 season spread | +1.5 (50%) | Cape winter and green-season demand is thin; weakest safari value months | +0 to +1 |
| **Sum** | **+40.0** | | **+15 to +30** |

Reading: pure demand-side result **55-70 MSEK**, with the central case near **60 MSEK** [ASSUMPTION]. This is lower than the plan's own 66 because (a) L1 is overweighted and (b) levers are not additive: L2 (conversion) and L3-L5 (more leads) multiply the same funnel, and B2B/partner leads overlap with SEO, paid and referral sources, while the plan's 10% haircut is not documented (A14).

## 7. 2027 is nearly unreachable

- Plan: 56 MSEK in 2027 (+40% y/y) [A4]. Order book milestone: 28 MSEK by 31 Mar 2027 (A11), i.e. at Gate 1 half the year must be on the books. The 2026 order book for 2027 is unknown (R01 unknown 1).
- Lead time 6-12 months for guided tours, 4-9 for tailor-made (R01 A6) means the *only* 2027 departures that new marketing can influence are bookings made Dec 2026 to roughly Aug 2027. The paid test starts 30 Nov 2026 and SEO hubs by 31 Dec 2026; allocations for Jun-Sep 2027 must be signed by 28 Feb 2027 but operators already advise 10-12 months (strategy fact 7). **Peak-season capacity for 2027 is largely sold or priced for current demand.**
- The 2027 lever sum (+16.0) assigns 3.0 to market growth (+7.5%), which the 2026 data now question.
- Realistic 2027: 46-50 MSEK [ASSUMPTION], not 52 (the plan's own risk-adjusted case) and certainly not 56.
- Consequence: 2028 must carry an 80 MSEK year off a lower base, requiring about +60-70% growth in a single year, which is far outside any benchmark in the research.

## 8. Concentration and external risks that hit demand

- Single-agency datapoints (Ticket) and a single national statistic (Stats SA) support the growth story. No Swedish consumer demand data for SA (intent, safety perception, price sensitivity) exist (strategy fact 10, R02 unknown).
- Safety shock risk: Tanzania bookings fell about 35% after unrest in Oct 2025 (R01). A single UD travel warning or a high-profile incident would hit the whole category, not just the company. Plan scenario "Shock" gives 58 MSEK, which is only 8 below risk-adjusted: the plan's downside is not deep enough. A 25-35% demand drop (Tanzania analogue) would put 2028 at 45-50 MSEK.
- Air: no nonstop flight; Gulf carriers cut flights sharply in April 2026 (R04, strategy fact 6). Airfare is a large share of trip price; fare spikes hit conversion first (R01 section 6).
- FX: krona down about 7% y/y against the rand (R10). The "more trip for your money" argument is weakened (strategy fact 8). A 3-5% price buffer adds to a SEK 109k basket.
- Competitors are increasing activity: Tourcompass price guarantee for departures 2026-2028 booked by 31 Oct 2026; weekly departures to Nov 2028 (R03, R01).

## 9. What the plan gets right (to be fair)

- It already states the target is "feasible only as a share-gain plan" and that risk-adjusted odds are about 66 MSEK.
- It flags the leisure-pool issue (strategy section 2 note, R12) and requires a 60-day data baseline.
- It puts order book as the north star and sets stage gates.
- Swedish arrivals are 43% below 2017, so the structural ceiling is not 34k; a 2017-level recovery to 48k would make the share needed 3.4%.

## 10. Recommendations (demand lens)

1. **Hold all irreversible commitments until the baseline pack is in (target 15 Dec 2026):** ABV with and without flights, pax, order book for 2027, funnel by source, Swedish YTD arrivals (Stats SA monthly tables by country). Specifically, do not sign prepaid allocations or hire beyond +2 FTE until then.
2. **Rebuild the target as a range** (e.g. floor 60, base 70, stretch 80) and tie spend gates to order book and incremental ROAS, not attributed ROAS. Run a holdout/geo test for paid in the Q4 2026 test.
3. **Re-state the share target against the leisure/intermediated pool** and show it on the dashboard. If the ratio exceeds 10% of the intermediated pool, treat 80 MSEK as dependent on new demand creation (non-SA considerers), not on share gain.
4. **Lower L1 confidence to 60-70%** and put a 0%/3% growth scenario into section 8.1.
5. **Make the paid case incremental:** shift paid budget from broad prospecting toward lead types that close at 30%+ (referral, warm email, hosted departures, partner/club lists) and cut cold prospecting unless incremental ROAS exceeds about 5x (break-even at 20% margin).
6. **Replace R07's SEK 35,000 booking value** with the strategy basket (and show click, enquiry, quote and booking values consistently).
7. **Extend scenario analysis**: add a "-25% demand shock" case and a "flat market + 22% blended close" case.
8. **Prioritise margin over revenue**: given the numbers above, a 60-65 MSEK plan with 22%+ margin beats an 80 MSEK plan with 18%.

## 11. Issues list (returned to orchestrator)

| # | Severity | Issue |
|---|---|---|
| D1 | High | Share measured against all Swedish arrivals; leisure/intermediated pool not sized; true required share likely 7-10% (14-19% of intermediated pool) |
| D2 | High | 7.2% market growth is unsupported; 2026 SA arrivals decelerating (Sep -1.3% y/y); Sweden YTD unknown; L1 confidence 90% unjustified |
| D3 | High | Conversion rises while traffic gets colder; blended close 20-22% needs 4,200-4,600 enquiries (+105-125%) |
| D4 | High | Paid media incremental ROAS 1.1-1.7x vs "8x" attributed; L3 loses 1.7-2.0 MSEK at 20% margin; no incrementality test |
| D5 | High | 2027 at 56 MSEK (+40%) not reachable with 4-12 month lead times; realistic 46-50 |
| D6 | Medium | No absolute search volume or traffic baseline; addressable pool unvalidated |
| D7 | Medium | Revenue per traveller (35-60k) swings required share between 3.6% and 6.1%; flights inclusion unknown |
| D8 | Medium | Levers are additive in the bridge but multiplicative or overlapping in reality; haircut undocumented |
| D9 | Medium | Basket inconsistency: R07 uses SEK 35k per booking vs strategy SEK 99-109k |
| D10 | Medium | Marketing cost per incremental booking about SEK 20k vs SEK 8k cap; marketing consumes ~94% of gross profit on levers L3-5, L8 |
| D11 | Medium | Shock scenario (58 MSEK) too shallow; Tanzania analogue implies 45-50 |
| D12 | Low | Ticket "tripled" and Visit Sweden stats used as trend evidence despite single-agency or domestic basis |

## 12. Assumptions used in this review (replace with data)
| ID | Assumption | Rationale |
|---|---|---|
| RD1 | Swedish leisure share of SA arrivals 50-70% | Holiday share for Sweden not published; Europe markets skew to leisure; VFR small |
| RD2 | Intermediated share of leisure travellers about 50% | Rivals and self-booking both present; no source found |
| RD3 | 2027-28 Swedish arrivals growth 0-3% in downside | Total SA tourist arrivals turned flat/negative in H2 2026 |
| RD4 | Blended close rate for new traffic 12-25%, mid ~18% | R11 cold paid search 12-25% (Tier C) |
| RD5 | Demand-shock analogue -25 to -35% | Tanzania -35% (R01) |
| RD6 | Realistic 2027 46-50 MSEK; 2028 55-65 MSEK | Reviewer judgement from sections 3-7 |
| RD7 | Gross margin 20% (plan A7) | Not verified |

## 13. Sources used in this review
- Stats SA P0350 Dec 2025: https://www.statssa.gov.za/publications/P0350/P0350December2025.pdf
- Stats SA P0350 Mar 2026: https://www.statssa.gov.za/publications/P0350/P0350March2026.pdf
- Stats SA P0350 May 2026: https://www.statssa.gov.za/publications/P0350/P0350May2026.pdf
- Stats SA P0350 Sep 2026 (not read, listed in search): https://www.statssa.gov.za/publications/P0350/P0350September2026.pdf
- Rio Times (secondary) on Sep 2026 arrivals: https://www.riotimesonline.com/south-africa-tourist-arrivals-fall-16-9-percent-2026/
- SAT 2025 report: https://live.southafrica.net/media/308701/sat-2025-annual-international-tourism-performance-report-1.pdf?downloadId=436981
- Rework conversion benchmarks (Tier C): https://resources.rework.com/libraries/travel-tour-growth/booking-conversion-metrics
- Ticket winter 2025: https://res.se/svenskar-valjer-afrika-for-vinterresan-sydafrika-ny-favorit-2025
- All other numbers: docs/00-strategy.md and docs/research/01-12.
