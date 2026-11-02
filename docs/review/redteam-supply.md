# Red-Team Review: Supply and Delivery Capacity (lens: supply)

Reviewer role: red-team skeptic | Date: 2026-11-02 | Reviewed: `/docs/00-strategy.md` (Draft v1) and `/docs/research/01-12`
Question asked: can supply, flights, lodges, DMC capacity and the 22-person team deliver 2x volume with service quality intact?
Convention: facts carry a source from the research files (R04, R05, R09, R11, R12 and the strategy's own tables). Everything else is marked **[ASSUMPTION]** with rationale and is replaceable by company data. No internal company data was available. Illustrative calculations are labelled as such and are not forecasts.

---

## 1. Verdict

**Not proven, and probably not deliverable as written.** The strategy treats supply as a risk line (R4, rated impact "M") and as a list of actions. It never converts the 80 MSEK into bed-nights, departures, guide-days, quotes handled and booking files serviced, and it never tests those against what the team, the DMCs and the lodges can provide. The demand side of the plan is worked out in detail. The supply side is not, and the three places where the strategy does touch it contradict each other (section 3, issues S1, S6, S9).

Red-team view, in order of danger:

1. **Time.** The supply window for Jun-Sep 2027 flagship safari beds is already closing (R05: operators advise 10-12 months), yet the strategy's own action table only sends requests on 30 Nov 2026 and signs by 28 Feb 2027, which is 4-7 months out. Part of the 2027 plan (56 MSEK) is likely capped before marketing starts.
2. **People.** About 22 staff serve South Africa, the Pacific/Australia/NZ brand and the MICE unit (client brief). The SA leisure team is a subset of that and its size is unknown (R11 unknown, R05 A4 "about 8 named specialists" on the public page). Bookings must rise 81% (405 to about 735, strategy section 2). The strategy funds +2-3 consultants, +1 product manager, +1 CRM, +1 SEO and none for operations, booking administration or 24/7 in-trip support. New hires will not be productive in time for the 2027 order-book gates.
3. **Margin.** Supply-side cost inflation (Cape Town luxury ADR +8.7% a year, Kruger fee +14.9%, krona -7% against the rand; R05, R10) versus the strategy's planned price rise (+4% in 2027, +10% by 2028) can pull blended margin below the 20% guardrail (G1). On the strategy's own numbers, incremental contribution is already only 0.5-1.9 MSEK at 20%.
4. **Fixed departures as the "supply-controllable" lever** (R05 8.4) create the opposite risk: prepaid or contractual commitments (air blocks, lodge blocks, guides) that go unsold, in the same year the plan raises volume the most.
5. **Air** is the least binding constraint in raw seat terms (see section 4), but the most volatile in price and disruption terms.

Planning implication: unless the fixes in section 6 are made in November 2026, treat **about 60-70 MSEK in 2028 as the supply-credible range** [ASSUMPTION: reviewer judgement; the strategy's own risk-adjusted figure is 66]. The reviewer does not endorse the 80 MSEK as supply-feasible with quality intact; it needs the changes below to be real, funded and dated.

---

## 2. What 2x actually means in operational units (illustrative model)

All inputs come from strategy section 2 unless marked. Replace the [ASSUMPTION] values with actuals in the 60-day baseline.

| Unit | 2026 base | 2027 | 2028 | Change 2026 to 2028 | Source / status |
|---|---|---|---|---|---|
| Turnover (MSEK) | 40 | 56 | 80 | +100% | given |
| Travellers | ~890 | ~1,200 | ~1,620 | +82% | strategy sec. 2 (uses A1 SEK 45,000/traveller) |
| Bookings (files) | ~405 | ~545 | ~735 | +81% | strategy sec. 2 |
| Enquiries | ~2,025 | ~2,500 | ~3,300 | +63% | strategy sec. 2 |
| Quotes at 80% quote rate | ~1,620 | ~2,000 | ~2,640 | +63% | strategy sec. 2 |

Note the structure: **revenue +100% but files +81%.** Service workload is driven by files and quotes, not by revenue. The plan's reliance on +10% revenue per traveller helps cost-to-serve per SEK but does nothing for headcount per file. At the same time, the +10% depends on extensions (Victoria Falls, Botswana, Mauritius, Seychelles), which add suppliers per file and therefore handling time [ASSUMPTION: reviewer view].

### 2.1 Lodge and safari beds [ASSUMPTION model]
- Assume an average 4 safari nights per traveller and 2 travellers per room [ASSUMPTION: typical 10-14 day Cape Town + safari + Garden Route shape; replace with booking data]. Safari room-nights: 2026 about 1,780; 2028 about 3,240; **+1,460 room-nights a year**, bought mostly in Greater Kruger or alternatives.
- If 35% of that falls Jun-Sep [ASSUMPTION: R05 says May-Sep is the dry peak; client mix unknown], the extra peak demand is about 510 room-nights over 122 nights, about 4 additional rooms every night. That sounds small, and it is the point: **it is small relative to the market but large relative to what flagship lodges allocate to one more Scandinavian operator**. R05 reports that flagship Sabi Sand lodges hold inventory back for tour operators at preferential rates and often show "fully booked" publicly, so access depends on relationships and contracts, not on market capacity. A new or growing client has no leverage yet.
- The cheaper, more available alternatives (malaria-free reserves, KZN, Eastern Cape, green season) are exactly where the strategy places its new products (L9, L10). Their supply is fragmented and small-operator (R05 6.6) and requires new vetting.

### 2.2 Guided departures and guides [ASSUMPTION model]
- The strategy relies on a flights-included guided ladder with "weekly/monthly published departures" (L9), 4-6 hosted departures a year with personalities (L5), 6-10 themed departures (L9), a malaria-free family product, a 55+ small-group product, and a premium tier (P4). Competitors set the bar: Tourcompass sells weekly departures through Nov 2028 (R03 as cited in strategy R7).
- The public team page names five guides (Nico, Annika, Jennifer, Dennis, Jim; R05 3.6). Whether they are employed, contracted, seasonal or SA-based is unknown.
- Illustration: if 40% of 2028 travellers (about 650) go on guided departures of 16 travellers [ASSUMPTION both], that is about 40 departures. A 14-17 day departure, plus preparation, travel days and rest, plausibly caps one guide at about 8-10 departures a year [ASSUMPTION]. That implies **4-5 fully booked guides**, before holiday, illness and hosted-departure duties. If hosted departures use the celebrity host plus a guide, guide demand rises further.
- Swedish-speaking guides are a scarce skill; the strategy contains no guide recruitment, licensing, training or retention plan. (Check South African guide registration and work-permit rules for guides from Sweden: **not researched; unverified**.)

### 2.3 Sales and service workload [ASSUMPTION model]
- Assume 3 consultant hours per quote (qualification call, itinerary within 24-48 h, one revision, decision call; the model R11 recommends) and 8 hours of post-sale handling per booking (supplier confirmations, documents, payments, changes, pre-departure) [ASSUMPTION: no company data; sensitivity below].
- 2026: 1,620 x 3 + 405 x 8 = about 8,100 hours. 2028: 2,640 x 3 + 735 x 8 = about 13,800 hours (+70%).
- At about 1,300 productive case-handling hours per FTE a year [ASSUMPTION], that is about 6.2 FTE now and about 10.6 FTE in 2028: **a need for about +4.4 FTE of sales and booking-handling capacity**, before automation gains.
- The strategy funds +2-3 consultants and a product/contracting manager (section 9.3). The product manager does not handle quotes. So the plan is **short by about 1.5-2.5 FTE** on the 3 h / 8 h illustration (about 0-1 FTE at the 2 h / 6 h sensitivity, which assumes no ramp-up delay), and no one is allocated to booking operations or in-trip support. Automation (instant acknowledgement, follow-up cadence) saves chasing time, not quote-building or supplier work. R11 (section 8) itself says "with 22 staff in total, the sales team size is unknown" and proposes coaching and routing top leads to top consultants as a cheaper route; that raises conversion, not throughput per head.
- Sensitivity: at 2 h per quote and 6 h per booking, 2026 = 1,620 x 2 + 405 x 6 = 5,670 h (about 4.4 FTE) and 2028 = 2,640 x 2 + 735 x 6 = 9,690 h (about 7.5 FTE), i.e. about +3.1 FTE. In both cases the need is at least +3 FTE and rises faster in the peak months (below).

### 2.4 Seasonal collision [ASSUMPTION]
- Demand for South Africa peaks Dec-Feb in search and Nov-Mar in travel (strategy A16, R04 4). That is also when (a) 50-60% of paid spend lands, (b) leads arrive, (c) customers are in destination needing support, and (d) the Pacific/Australia/NZ business has its own southern-hemisphere summer season [ASSUMPTION: reviewer inference, the sister brand's seasonality was not researched]. The same people sell, service and rescue.
- The strategy's capacity gate (G9) is only set "after the first 60-day baseline" (so about January 2027), when the Nov-Feb spend is already committed.

---

## 3. Findings (ranked)

Severity: Critical = can cap the plan or cause a service or financial failure; High = likely to cost 3-8 MSEK or quality; Medium = manageable with a named fix.

| # | Severity | Finding | Evidence | What the strategy says | Required change |
|---|---|---|---|---|---|
| S1 | **Critical** | **Lodge allocation timing contradicts the lead times quoted in the strategy itself.** | R05: 10-12 months for Jun-Sep and festive flagship suites (seller blogs; directional), 6-9 months by another operator; flagship stock held back for operators with relationships. Strategy sec. 1 item 7 says "closing", but sec. 11/12.1 puts requests on 30 Nov 2026 and signatures on 28 Feb 2027. | Treats it as an action, not a binding limit on 2027 | Start allocation calls this week, not 30 Nov; pull the real held-allocation position for Jun-Sep and Dec 2027 from the current contracts; recut the 2027 plan to what is held or can be secured; set a hard decision date in November on what premium volume is sold in 2027. |
| S2 | **Critical** | **Sales and booking-handling capacity: hires land after the gates they are meant to protect.** | Illustration section 2.3: +3 to +5 FTE needed on handling alone. Strategy sec. 12.2 "hire decision confirmed" at Gate 1 (31 Mar 2027). Recruiting plus ramp for a long-haul specialist is months [ASSUMPTION: 2-3 months to hire, 6-9 months to full productivity]. | Hire 2-3 consultants "by Q1 2027" (R1 mitigation) but the decision is only confirmed at Gate 1 | Open requisitions in November 2026; use interim capacity (SA-experienced freelancers, MICE unit cross-cover, part-time returners); fund a booking-operations role; make marketing spend release conditional on staffed capacity (G9 set now, not in January). 2027 must be largely delivered by the existing team: plan 2027 below 56 MSEK unless the baseline shows slack. |
| S3 | **Critical** | **Margin squeeze from supply inflation versus planned price rises.** | R05: Cape Town luxury ADR 8.7% CAGR 2015-2025 (HVS); Kruger fee +14.9% from 1 Nov 2026; R10: SEK/ZAR 1.696, krona -7% in 12 months. Strategy plans revenue per traveller +4% (2027) and +10% (2028) and guardrail G1 gross margin at least 20%. | Margin guardrails exist but there is no cost-inflation scenario | Illustration: start at price 100, air 15, land 65, margin 20 [ASSUMPTION structure]. If land rises 8.5% a year and price follows the plan: 2027 price 104, cost 85.5, margin 17.8%; 2028 price 110, cost 91.5, margin 16.8%. Gross profit 2028 is about 13.5 MSEK (1,620 x SEK 49,500 x 16.8%) versus 16.0 MSEK at a flat 20%. Against 6.1-7.5 MSEK of incremental cost (strategy sec. 10) this is roughly break-even. The ADR figure covers Cape Town luxury only, so the real exposure depends on mix; but the direction is a warning. Add a supply-cost scenario to sec. 10 and lock 2027-28 rate cards early (see S1). |
| S4 | **High** | **Fixed departures and blocks shift risk from supply scarcity to supply commitment, in the year volume ramps.** | R12 recommends pre-purchased blocks for 3-4 fixed-departure tours; R05 5.2 model C attrition risk; strategy G7 caps prepayment and attrition at 10%. R04 unknown 9: group contract rules (deposit, name change, ticketing deadline) not known. | Block seats for 3-4 departures by Q2 2027; 6-10 themed + 4-6 hosted departures; weekly/monthly published departures (L9) | Illustration: average gross profit per traveller about SEK 9,000 (SEK 45,000 x 20%). One unsold air seat costing about SEK 6,700 (KLM lowest return fare benchmark, R04; group cost unknown) wipes about 75% of one traveller's margin. A 16-seat departure with 3 empty seats loses about 14% of its margin before unsold land and guide cost. Cap the number of blocked departures to what the order book supports; open each departure only with a stated minimum and a cancel-by date; model fill rate per departure before publishing weekly dates. |
| S5 | **High** | **Guide supply (and key-person dependency on hosts) is unaddressed.** | Section 2.2; R05 3.6 lists five named guides; L5 depends on personalities (Ann Wilson, Lottie Knutson). | No guide plan, no pool size, no recruitment | Quantify guide-days required per year from the departure plan; sign a guide pool with SA partners; define host dependency fallbacks; cap departures at guide capacity. Check guide registration/permit rules (unverified here). |
| S6 | **High** | **The 24/7 local presence promise is a positioning pillar with no resourcing.** | Strategy 5.3, 7.1 (24/7 emergency line, local presence); R09 2: organiser must remedy errors and is liable; bigger volume means more incidents, in peak. R05 4.2/unknown 4: it is unknown whether the client has an SA entity or DMC-only model; R05 5.2 E "evaluate for 2028". | Promised in every pillar; not costed in sec. 9.3 | Cost and staff it: SA-based duty officer or DMC-contracted 24/7 service with SLA, escalation rota in Sweden, incident log. Do not publish the promise until it exists (misleading-claims risk, R09). |
| S7 | **High** | **DMC panel: capacity, priority and counterparty risk are not tested.** | R05 5.2 model A; 4.2: SATSA membership is a filter, "not an endorsement"; DMCs sell to many markets. A 1,620-traveller Swedish operator is a small account in December. | "3-5 SATSA-vetted DMCs", scorecards | Obtain written peak-season capacity commitments per DMC (vehicles, guides, transfers) for Dec-Mar and Jun-Sep; test financial standing (prepayment exposure; the Swedish organiser remains liable for supplier failure, R09 2); define fallback vendors; run a peak-week stress test with each. |
| S8 | **High** | **New products (L9) sit on the least-contracted supply.** | R05 3.2, 3.5, 6.6: malaria-free, KZN, Eastern Cape are fragmented small operators; strategy itself notes many lodges require age 12+; family segment is #4 priority for the supply gap. | L9 +3.5 MSEK at 60% confidence; L10 +1.5 MSEK at 50% | Before publishing, contract and inspect at least the first 6-10 properties per new region; give each new product a supply-readiness checklist and do not launch campaigns before it is ticked. Lower the L9/L10 confidence until contracts exist. |
| S9 | **High** | **Internal contradictions in the strategy on supply governance.** | G7 caps prepaid allocations by CFO and sets 60-90 day release, while P4 and sec. 11 require allocation and block contracts signed by 28 Feb 2027 and flagship contracts typically need deposits and low release flexibility [ASSUMPTION]. Sec. 1 says "urgent now" for lodge allocations but the roadmap does not. Sec. 9 treats supply roles as "enablers outside the marketing budget" with ranges only. | Not reconciled | Have the CFO set a prepayment envelope in November 2026, state what release terms Tier 1 lodges will actually accept, and reconcile G7 with the P4 plan in the next version. |
| S10 | **Medium (could become High)** | **Air: aggregate seats are not the problem; peak-week fare availability and disruption handling are.** | R04: Cape Town +250,000 seats (+12%), 255 weekly international flights; extra 730 travellers a year, perhaps 17 extra outbound a week across Nov-Mar [ASSUMPTION: 50% in Nov-Mar], which is trivial against seat supply. But: Gulf airspace closed about a week in 2026, Emirates still about 75% capacity in June; jet fuel forecast +70% in 2026; KLM and Turkish each 10 weekly CPT flights and the sportlov/Christmas weeks are the bottleneck; group contract terms unknown. | Dual routing, two preferred carriers, 3-4 blocks | Fix the real risk: a disruption playbook (rebooking for 100+ affected travellers in one week), supplier insurance/war-risk cover check (R04 unknown 10), fare-lock rules, and a peak-week fare watch. Air margin is not the prize (R12); protect continuity and price. |
| S11 | **Medium** | **Gateway congestion in the Garden Route and Cape Town at the peak.** | R05 3.4, 6.4: George Airport above design capacity in 2025; CTIA near capacity. Self-drive Garden Route (segment 6) adds rental-car demand in Dec-Jan [ASSUMPTION: car-hire supply at peak not researched]. | Not addressed in the plan | Add routing alternatives (Gqeberha, road transfers), check rental-car allocation and costs, and avoid pushing self-drive Garden Route in peak weeks. |
| S12 | **Medium** | **Review and reputation targets assume service quality that has not been demonstrated.** | Trustpilot 2.7 on 8 reviews (R03); strategy target 4.6+ and 150+ reviews by Q2 2027. Travellers returning Nov 2026 - May 2027 are perhaps 400-500 [ASSUMPTION: 890 a year, weighted to Nov-Mar]; that needs a 30-37% review-submission rate [ASSUMPTION: typical rates are lower; not sourced]. Doubling volume while stretching the team raises complaints before reviews arrive. | Treats reviews as an automation task | Treat review score as a service-quality metric: root-cause the existing negative reviews first; hold marketing scale-up if complaints, ARN cases or response time slip (G8 made a hard gate rather than a tracked metric). |
| S13 | **Medium** | **Cash and guarantee capacity are scaled by volume and by prepayment.** | R09 3.3-3.4: 0.6% fund fee (+0.24 MSEK), individual guarantee possibly +2.5 MSEK at 80 MSEK (6.25% rule date unknown); growth must be notified (sanction up to SEK 10 M); more lodge prepayments increase exposure. | Covered in G6, dialogue by 15 Dec 2026 | Add prepaid-supply exposure to the guarantee forecast; do not sign multi-lodge deposits before the bank/Kammarkollegiet position is known. |
| S14 | **Medium** | **Reliance on seller blogs and social posts for supply facts.** | R05 section 3.1: 10-12 months is from a seller blog; Cape Town occupancy from a Facebook group (low reliability); R04 uses Facebook/Instagram sources. | Strategy uses them as "facts" in sec. 4 | Replace with primary data from the company's own sold-out history and direct supplier statements before using them in decisions or ads. |
| S15 | **Medium** | **Shared pools with the other businesses are assumed, not validated.** | R05 A9: shared contracting with the MICE unit "feasible" (unverified); L8 relies on MICE bleisure; Söderhavsresor cross-sell is an upside. Same 22 people. | Counts MICE as a lever | Quantify the staff-hours the MICE and Pacific units need in the same months; do not count cross-cover capacity until it is measured. |

---

## 4. Where the strategy is right (and where I could not break it)

- Air seats in aggregate are not the binding constraint (section S10). The strategy is correct to focus on dual routing and disruption terms rather than raw seat counts.
- Recognising that supply, not demand, is the likely peak constraint (strategy sec. 4 fact 7) is correct and matches R05.
- The tiered lodge portfolio, SATSA DMC panel, ZAR/currency clauses and shoulder-season shifting are sensible direction. The weakness is sequencing, quantification and funding, not concept.
- Gating marketing spend on the response-time SLA (strategy 9.2) is the right principle. It needs to be set before the Nov-Mar spend rather than after the baseline.

---

## 5. What I could not verify (supply data gaps)

1. Number of SA-dedicated sales, product, operations and guide staff today, and how the 22 are split with Söderhavsresor and MICE.
2. Current lodge and DMC contracts: allocations held, release dates, currency, deposit terms for Jun-Sep and Dec 2027.
3. Guided departure count, size, fill rates and guide employment model today.
4. Booking-handling time per quote and per file; complaint, claims and ARN case rates per 1,000 travellers.
5. Share of travel by month and region; peak-week concentration (Christmas/New Year, sportlov, Easter).
6. Air contract status: fare types, group terms, ticketing deadlines, war-risk or airspace-closure cover.
7. Whether the client has an SA entity or relies fully on DMCs for 24/7 support.
8. Primary-source lodge occupancy and lead-time data for Greater Kruger (R05 notes only seller blogs).
9. South African guide-registration and Swedish-speaking guide labour supply (not researched).
10. Car-rental and Garden Route peak capacity (not researched).

---

## 6. Required changes to the strategy (priority order, with owners and dates)

| # | Action | Owner (role) | By |
|---|---|---|---|
| 1 | Start flagship and Tier 2 allocation calls for Jun-Sep 2027 and Dec 2027 - Jan 2028 immediately; confirm the currently held position and decide what premium volume can be sold in 2027 | Head of Product + CEO | Call start 4 Nov 2026; position by 20 Nov 2026 |
| 2 | Build a bed-night, departure, guide-day, quote-hour and file-hour capacity model (this document's section 2 with real inputs) and attach it to the baseline pack | CFO + Head of Sales + Head of Product | 15 Dec 2026 |
| 3 | Open requisitions now (2-3 consultants, 1 booking-operations, 1 product/contracting); line up interim capacity; release paid media in steps tied to staffed capacity | CEO + Head of Sales | Requisitions by 13 Nov 2026; interim cover by 31 Jan 2027 |
| 4 | Set the capacity gate (G9) before the Nov-Mar spend: maximum quotes per consultant per week and response-time floor; pause spend if breached for 2 consecutive weeks | Head of Sales + Head of Marketing | 20 Nov 2026 |
| 5 | Add a supply-cost scenario to strategy section 10 (land cost +5/+8.5/+12% a year vs planned price rises); tie price list and FX buffer to rate-card renewals | CFO | 15 Dec 2026 |
| 6 | Set the prepayment/commitment envelope and reconcile it with the P4 allocation plan; cap blocked departures to order-book-backed levels; require min-pax and cancel-by dates | CFO + Head of Product | 15 Dec 2026 |
| 7 | Guide plan: guide-days required, hiring/contracting, licensing check, host dependency fallbacks, retention | Head of Product | 31 Jan 2027 |
| 8 | Written peak capacity commitments and financial checks from each DMC; fallback vendors; peak-week stress test | Head of Product | 28 Feb 2027 |
| 9 | Cost and staff the 24/7 local support promise or remove it from marketing until it exists | Head of Product + COO/Operations lead | 31 Jan 2027 |
| 10 | Disruption playbook for Gulf/airspace/UD events: rebooking, comms, supplier terms, insurance cover check | Head of Air + Legal | 31 Jan 2027 |
| 11 | Supply-readiness checklist for each new product (malaria-free, KZN/Eastern Cape, family, 55+); no campaign before 6-10 contracted properties | Head of Product | Before each launch |
| 12 | Root-cause current negative reviews and complaints; make complaints per 1,000 travellers and response time a hard spend gate | CRM manager + Head of Sales | 15 Dec 2026 |

### Suggested edits to `00-strategy.md`
- Section 1 item 3 and section 8.1: add a supply-constrained scenario of about 60-70 MSEK for 2028 and label 2027 at 56 as conditional on S1 and S2 results.
- Section 11: change the allocation line to "start immediately; position by 20 Nov 2026".
- Section 9.3: split sales capacity from booking operations and in-trip support; add guide capacity.
- Section 10: add the cost-inflation sensitivity (S3).
- Section 13: re-rate R4 (supply scarcity) to H/H and add a new risk for "fixed-departure commitment losses" and "guide shortage".
- Section 12.2: add a Gate 0 on 31 Jan 2027 covering staffed capacity, held allocations and the baseline pack.

---

## 7. Kill and scale criteria (supply lens)

- **Scale** marketing only while: first reply under 1 h for 90% of enquiries, quotes per consultant within the agreed cap, held lodge allocations cover at least 80% of the planned peak 2027 safari room-nights, and gross margin on new bookings at least 20%.
- **Pause** new paid spend if any of the following occurs for two consecutive weeks: response SLA missed, quote age rising, complaints per 1,000 above the baseline, or margin on new bookings below 18%.
- **Cut or restructure a fixed departure** if fill is below the planned minimum 90 days before departure (or the supplier's release date, whichever comes first).
- **Escalate to CEO** if the held allocation position on 20 Nov 2026 is below the 2027 plan by more than 20% in any peak segment.

---

## 8. Assumptions register (replace with company data)

| ID | Assumption | Rationale | Replace with |
|---|---|---|---|
| RS1 | 4 safari nights per traveller, 2 travellers per room | Typical 10-14 day itinerary shape (R05 2: stays of 8-14 days) | Booking data by region |
| RS2 | 35% of safari room-nights fall Jun-Sep | R05: dry-season peak May-Sep | Own month curve |
| RS3 | 40% of travellers on guided departures; 16 per departure; 8-10 departures per guide per year | Strategy P4/L9 emphasise guided ladder; no company data | Actual guided share, group size, guide days |
| RS4 | 3 hours per quote and 8 hours per booking; 1,300 productive hours per FTE | R11 consultative model; sensitivity at 2 h/6 h shown | Time study / CRM timestamps |
| RS5 | Hiring 2-3 months, ramp 6-9 months for a long-haul specialist | General recruiting experience, not sourced | HR history |
| RS6 | Price/cost structure 100 = air 15 + land 65 + margin 20, land cost +8.5% a year | Uses R05 ADR CAGR as a proxy; real mix unknown | Cost structure by product |
| RS7 | Average gross profit per traveller about SEK 9,000; empty seat cost about SEK 6,700 | Strategy A1/A7; KLM from-fare benchmark (R04), not group cost | Actual margin and group fares |
| RS8 | 50% of travel falls in Nov-Mar | R04 4 assumed seasonality | Booking and departure data |
| RS9 | The Pacific/Australia/NZ business peaks in the same months | Southern-hemisphere summer inference | Sister-brand seasonality |
| RS10 | Review submission rate of 30-37% needed is higher than typical | General experience, not sourced | Own post-trip survey response data |
| RS11 | Flagship lodges treat a growing client as a small account | R05 3.1: inventory held for operators at preferential rates | Supplier meeting outcomes |
| RS12 | Car-hire and guide-registration constraints may bind in peak | Not researched | Local DMC advice |

---

## 9. Sources (from the research files; reliability noted there)

- R04 Air access: ACSA https://www.airports.co.za/news?item=447 ; KLM https://www.klm.se/sv-se/flyg-fran-stockholm-till-kapstaden ; Middle East Eye https://www.middleeasteye.net/news/middle-eastern-airlines-lose-43bn-2026-amid-iran-war ; ATTA https://atta.travel/resource/cape-town-set-for-international-flight-boost-as-airlines-expand-spring-services.html
- R05 Product and supply: HVS https://www.hvs.com/article/10464-cape-town-tourism-shows-resilience-despite-global-uncertainty ; Go2Africa https://www.go2africa.com/destinations/sabi-sands-game-reserve/why-go ; https://www.privatetourscapetown.com/blog/private-safari-kruger-national-park (seller blog) ; https://ellamckendrick.com/7-day-south-africa-safari-itinerary/ (seller blog) ; Kruger fees https://krugercompanion.co.za/fees/ ; SATSA https://www.satsa.com/membership-directory/corporate ; Arival https://arival.travel/article/how-to-set-net-rates-for-tours/ ; client site https://www.sydafrikaresor.se/om-oss/
- R09 Regulation: Kammarkollegiet https://www.kammarkollegiet.se/vara-tjanster/resegaranti/betala-avgift-till-resegarantifonden ; Konsumentverket https://www.konsumentverket.se/lagar/paketreselagen-konsument/
- R10 Economics: https://tradingeconomics.com/sekzar:cur
- R11 Conversion: Rework https://resources.rework.com/libraries/travel-tour-growth/booking-conversion-metrics
- R12 Partners: Pangaea / SAT Nordic case https://pangaeanetwork.com/case/south-africa-tourism-full-representation-in-the-nordics/
