# Workstream 30: Risk Register and Contingency

Inherits: `/home/user/MICE-Group/docs/00-strategy.md` (north star order book plus margin; shock case 38 / 46 MSEK; guardrails G3, G6, G7, G8, G10; sections 12.3, 12.4, 13.4, 13.8; risks R4, R6, R8, R9, R14). Evidence: R01, R04, R05, R09 and the finance (WS27), operations (WS23) and budget (WS28) workstreams. Prepared 2026-11-02. Owner (role): CFO as risk owner, CEO as sponsor.

Conventions: sourced facts carry a URL, or an internal research reference (R01-R09) whose file holds the URL. Red-team figures (RT-D, RT-S, RT-E) are secondary and directional until verified. Everything else is marked [ASSUMPTION] with a rationale and is collected in section 15 so the CEO can replace it with company data. No internal company data was available. Customer-facing copy is in Swedish, plans are in English. Review status: independently reviewed 2026-11-03 against 00-strategy.md and WS27/WS28; corrections are folded into the text.

---

## 1. Objectives

1. Keep the growth programme alive through a category-wide shock. In the shock case (UD warning, Gulf closure, safety or FX event) the plan of record falls to about 38 MSEK in 2027 and 46 MSEK in 2028 (strategy section 9, Tanzania analogue: bookings fell about 35% after unrest in Oct 2025, figure from red-team RT-D D11, secondary and [VERIFY]). WS27 shows the shock case alone stays inside both loss limits at 20% margin (cumulative -2.15 MSEK at Dec 2027, -3.53 at Dec 2028 incl. prep) only because costs are cut to the committed level, and that shock plus a 17% margin breaches both (-3.29 / -6.05). The workstream must therefore (a) execute the cost cuts within 60 days of the event, (b) watch order-book margin as the operative early warning, because the departure-basis stop-loss test at 30 Jun 2027 lags (WS27), and (c) never fail to refund or repatriate a customer.
2. Convert each named risk into a measured early signal, a pre-agreed trigger, a named owner and a pre-written response, so that decisions in a crisis take hours, not weeks.
3. Protect the north star (booked-not-departed order book and its margin) from FX drift, supplier failure and cancellation waves: hedge policy, prepaid cap SEK 4 M, liquidity facility 10-15 MSEK, guarantee headroom.
4. Protect trust. Safety perception is the central objection in the buying journey (R02, R09). The company must answer it with facts, not slogans, and must never claim "Sydafrika är säkert".
5. Deliver the disruption and schedule-change playbook (strategy 13.8, WS23 section 5.5) by 31 Jan 2027, test it by 31 Mar 2027 and again before festive 2027.

Out of scope: the content of the finance model (WS27), the staffing model (WS23, WS24) and the 24/7 decision itself (CEO, strategy 13.4). This workstream defines how they behave under stress.

---

## 2. Approach

- **One register, one owner per risk, one dashboard.** 24 risks (section 4), scored likelihood x impact on a 5x5 scale, reviewed monthly in the growth council and weekly by the risk lead during amber or red status.
- **Signal, trigger, action.** Each risk has an early-warning indicator (green/amber/red), a pre-approved response per colour, and an "authority to act" so the duty owner does not wait for a meeting.
- **Cut cost, not service.** In red status the programme cuts discretionary growth spend first (Tranche B, gated lines, social/creators), then deferred hires, and never cuts jourtelefon, refund processing or CRM.
- **Pre-fund the downside.** Liquidity, guarantee headroom and FX hedges are arranged before the campaign waves that create exposure (strategy G3, G6). The programme does not start the 1 Dec 2026 paid test until the guarantee call (13 Nov) and FX policy (20 Nov) are done (WS27, WS28).
- **Pre-write the words.** Swedish customer messages, a holding statement and FAQ for each trigger are written, legally reviewed and stored before they are needed.
- **Stress test with the model.** WS27 scenario selector runs core, downside, shock, shock plus 17% margin and stretch. Risk thresholds in this document are taken from those runs.

---

## 3. Evidence base (what we know, with sources)

| Topic | Fact | Source |
|---|---|---|
| Safety advice, other governments | US: "exercise increased caution" in South Africa due to crime, terrorism, unrest and kidnapping; advice to avoid demonstrations, avoid townships unless with someone familiar, avoid driving outside metro areas at night. Canada: "exercise a high degree of caution" due to significant serious crime. | https://travel.state.gov/en/international-travel/travel-advisories/south-africa.html ; https://travel.gc.ca/destinations/south-africa |
| Safety advice, Sweden | Swedish Embassy: crime level very high, most visits pass without serious incident; protests can arise at short notice; no UD travel warning text shown on 6 Oct 2026. A UD warning would trigger free-cancellation rights (R09). Sweden's own current text must be re-read at day 1 of the programme. | R09 (swedenabroad.se references in R02/R09) |
| Safety demand shock analogue | Tanzania bookings fell about 35% after post-election unrest in Oct 2025 (single analogue from the demand red-team RT-D D11, not independently verified; [VERIFY] before external use). | RT-D D11 |
| Gulf hub risk | US-Israel/Iran conflict from 28 Feb 2026 closed UAE/Qatar/Bahrain/Kuwait airspace for about a week; Emirates still at about 75% capacity in June 2026; EASA advised avoiding Bahrain/Kuwait/Qatar/UAE airspace until 31 Aug 2026. Emirates and Qatar are about 10% of weekly Cape Town capacity (Wesgro via HVS). | R04, R05 |
| Air capacity | Cape Town winter/peak 2026/27 about +250,000 two-way international seats (+12%), 26 airlines; KLM AMS-CPT 10 per week from 31 Aug 2026; Turkish IST-CPT 10 per week from 26 Oct 2026. Seat inventory in Dec-Mar, not aggregate seats, is the constraint. | R04 |
| Airline distress | Spirit ceased operations 2 May 2026; airBaltic and Wizz flagged at risk. SAS has no African long-haul nonstop. | R04 |
| Load-shedding | Eskom page on 2 Nov 2026: "currently NOT load shedding"; another tracker: "power system stable, load shedding remains suspended"; Eskom winter outlook again predicted no load-shedding. Residual risk is localised load reduction and municipal outages. | https://loadshedding.eskom.co.za/ ; https://www.ourpower.co.za/ ; https://www.eskom.co.za/media-statement-winter-outlook-for-power-grid-again-predicts-no-loadshedding-system-stability-enables-key-energy-security-decisions-to-be-updated/ |
| Currency | SEK/ZAR 1.696 on 2 Nov 2026, krona down about 7% in 12 months (rand stronger). A 10% adverse move on open exposure costs 1.2-1.9 MSEK, about 3.9 MSEK if fully unhedged (strategy 12.4, WS27). | https://tradingeconomics.com/sekzar:cur |
| Package-law mechanics | Price changes only for fuel, taxes/fees or exchange rates, notified at least 20 days before departure; if the increase exceeds 8% the traveller may cancel with full refund. Traveller may cancel without fee in unavoidable and extraordinary circumstances at destination or en route (terror, outbreak, natural disaster). | R09 (Konsumentverket, Riksdag text) |
| Guarantee and levy | Collective fund levy 0.6% of package price from 1 Apr 2026; individual guarantee to move to 6.25% of liable turnover when SFS 2026:97 enters into force (date not set); growth must be notified to Kammarkollegiet in advance; sanction fee SEK 5,000-10,000,000. | R09 https://www.kammarkollegiet.se/vara-tjanster/resegaranti |
| Health | Malaria exists only in some provinces and mainly Oct-May (Afrika Safari Resor via R01); malaria-free reserves exist (Madikwe, Pilanesberg, Eastern Cape, Waterberg) and are a product lever. | R01, R05 |
| Competitor risk reversal | TourCompass advertised "trygghetsgaranti"/risk-free booking and price guarantee for 2026-2028 departures booked by 31 Oct 2026 (that window had closed on 2 Nov; [VERIFY] whether it was extended or replaced); MyChoice offers price guarantee and open purchase. | R01, R03 https://www.tourcompass.se/sydafrika/resor.htm |
| Directive change | Directive (EU) 2026/1024 in force 28 May 2026, transposition about Sept 2028 [VERIFY]. Free cancellation extended to events at the departure place; vouchers rules tightened. | R09 |

Not researched and therefore [VERIFY] before relying on them: SA water supply or drought status for 2027, foot-and-mouth or other animal-disease effects on game reserves and the Garden Route, cholera or measles outbreaks, Transnet/port or fuel supply issues, SA election and unrest calendar, Swedish insurer stance on South Africa, current UD text.

---

## 4. Risk register

Scoring: L = likelihood 1-5 over the 24-month horizon, I = impact 1-5 on the order book, margin or reputation, score = L x I. Red is 15 or more, amber 8-14, green below 8. Scores are judgement [ASSUMPTION: no company loss history; re-score at Gate 0 after the baseline pack].

### 4.1 Demand and perception

| ID | Risk | L | I | Score | Early signal (amber / red) | Trigger action | Owner |
|---|---|---|---|---|---|---|---|
| RK1 | **Safety event or negative media wave** (violent incident involving tourists, riots, xenophobic unrest, kidnapping headline) cuts category demand; Tanzania analogue -35% | 3 | 5 | 15 | Amber: SA safety story in top Swedish media or enquiry volume -15% vs 4-week trend. Red: enquiries -30% for 7 days or cancellations above 3% of next-90-day order book in a week | Section 7 playbook S1 | CEO (decision), Head of Marketing (comms) |
| RK2 | **UD/Utrikesdepartementet travel warning or change in advice** (partial warning for a region or general). Triggers statutory free-cancellation rights | 2 | 5 | 10 | Amber: embassy page text changed; Red: formal "avrådan" for any region we sell | Playbook S2; refund decision tree; liquidity call | CFO (cash), Head of Sales (customers) |
| RK3 | **Chronic safety perception** suppresses conversion and SEO long tail ("Är Sydafrika säkert?" is a top-of-funnel anxiety query) | 5 | 3 | 15 | Safety-related objections in more than 15% of lost-deal reasons | Safety hub, adviser script, trust assets (section 6.1) | Head of Marketing |
| RK4 | **Demand shortfall**: 2026 arrivals soft (SA total -6.5% y/y May 2026, -1.3% Sep 2026 per red-team, categories to verify), intermediated pool smaller than assumed | 4 | 4 | 16 | Order book below the path to Gate 1 (24 MSEK by 31 Mar 2027; path set at Gate 0 from the booking-date curve, A11) on 15 Feb 2027 | Strategy R6; hold gated spend; re-baseline at Gate 0/1 | CEO |
| RK5 | **Competitor risk-reversal offers** (TourCompass trygghetsgaranti, MyChoice open purchase) pull bookings or force discounting | 4 | 3 | 12 | Win-loss shows competitor guarantee as stated reason in more than 10% of losses | Respond with flexibility terms funded by supplier rebates, not blanket discounts (G2) | Head of Product |
| RK6 | **Substitution to other destinations** (Egypt, Cape Verde, Morocco, Mauritius, Kenya) after a price rise or a news event | 3 | 3 | 9 | Search-share and enquiry mix shift | Value messaging; multi-destination extension product | Head of Marketing |

### 4.2 Air access

| ID | Risk | L | I | Score | Early signal | Trigger action | Owner |
|---|---|---|---|---|---|---|---|
| RK7 | **Gulf hub closure or airspace restriction** strands packages routed via DXB/DOH (2026 precedent: about a week of closure, Emirates at about 75% capacity in June) | 3 | 4 | 12 | Amber: EASA conflict zone bulletin, carrier cancellations. Red: closure notice or more than 5% of departures in next 14 days affected | Playbook S3: reroute via AMS/IST/FRA/ZRH, bulk rebooking | Head of Air |
| RK8 | **Schedule change or capacity cut** on KLM or Turkish (10 weekly CPT each, bottleneck at peak Dec-Jan and sportlov) | 4 | 3 | 12 | Schedule-change notices; fare basis closing | Dual-carrier block strategy; change-fee rules | Head of Air |
| RK9 | **Airline insolvency or ceased operations** (precedent Spirit, 2 May 2026; airBaltic and Wizz flagged in R04) | 2 | 4 | 8 | Credit news, ADM or BSP warnings | Avoid selling on weak carriers as sole routing; the organiser stays liable to the traveller (rebook or refund), so pursue recovery via BSP/ADM rules, card chargeback where tickets were card-paid, and the insurer; resegaranti is the backstop only for the company's own insolvency (Legal to confirm [VERIFY]) | Head of Air / CFO |
| RK10 | **Fare spike or seat shortage** Dec-Mar makes published prices uncompetitive | 4 | 3 | 12 | Group block seat availability, fare index +15% | Early block contracts; price re-quote policy under 20-day/8% rule | Head of Air |
| RK11 | **Airport operations** in SA (strikes, ground handling, security incident, fuel supply, load reduction at terminals) | 2 | 3 | 6 | ACSA/airline notices (not researched in depth, R04 item 7) | Transfer buffer rules; same-day connection minimums | Operations lead |

### 4.3 Money

| ID | Risk | L | I | Score | Early signal | Trigger action | Owner |
|---|---|---|---|---|---|---|---|
| RK12 | **Rand strengthens against krona** (SEK/ZAR 1.696, krona -7% in 12 months). 60% of cost is foreign-currency [A24]; open exposure 11.6-19.3 MSEK | 4 | 3 | 12 | Amber: SEK/ZAR moves 3% in a month against the hedge average. Red: 5% move, or hedge ratio below 50% of confirmed cost (equal to an open-exposure loss at a 10% shock above SEK 1.4 M at 2027 volume / 1.9 M at 2028 volume; a policy-compliant 50-70% hedge gives 0.9-1.4 M in 2027 and 1.2-1.9 M in 2028 at full run-rate, so a lower threshold would be red permanently) | Layer hedges; invoke 6% price buffer and legal clause; re-price unsold departures | CFO |
| RK13 | **Hedge mismatch on cancellations** (over-hedged when bookings cancel) | 3 | 2 | 6 | Hedge ratio above 70% of confirmed cost | Hedge only confirmed bookings, monthly layers, unwind rule | CFO |
| RK14 | **Cash call from mass cancellation**: 90-day refund exposure 12.8 / 15.8 MSEK gross (core 2027 / 2028), peak customer funds 15.5-19.7 MSEK; supplier prepayments recover slowly | 2 | 5 | 10 | UD warning, Gulf closure, cancellation rate above 3% a week | Committed facility 10-15 MSEK; refund waterfall; supplier recovery desk | CFO |
| RK15 | **Margin below plan** (20% planning value, 17-25% range; break-even 23.5% on the whole book) combines with shock: shock plus 17% margin breaches both loss limits (WS27) | 4 | 4 | 16 | Order-book margin below 19% on new bookings (Gate 1 test) | Stop-loss section 12.3; reprice; ladder mix | CFO |
| RK16 | **Guarantee capacity**: growth outruns guarantee limit or Kammarkollegiet notification; levy 0.6% and guarantee 6.25% to 15% of liable turnover; bank credit lead time [ASSUMPTION] | 3 | 4 | 12 | Guarantee headroom below three months of forecast liable turnover | Notify before each wave; bank limit increase early; stop sales if headroom is breached | CFO |
| RK17 | **Supplier failure or prepayment loss** (lodge, DMC, car rental, guide) exceeding prepaid cap SEK 4 M | 2 | 4 | 8 | Late payments, DMC financial warning, repeated complaints | Cap, DMC panel of 3-5, payment by milestone, supplier scorecard | Head of Product |
| RK18 | **Data definition risk**: 40 MSEK may be net revenue, not gross; margin and guarantee understated | 4 | 5 | 20 | Gate 0 baseline pack contradicts assumptions | Re-run bridge and stress tests (strategy R14) | CEO / CFO |

### 4.4 Operations, people, health, infrastructure

| ID | Risk | L | I | Score | Early signal | Trigger action | Owner |
|---|---|---|---|---|---|---|---|
| RK19 | **In-trip incident** (accident, medical emergency, crime against a traveller, a guide failure) with no 24/7 cover; reputation and legal exposure | 3 | 5 | 15 | Incident log rate per 1,000 travellers; first-response time | 24/7 decision by 31 Jan 2027; incident SLA; insurer protocol | CEO (decision), In-trip desk lead |
| RK20 | **Service quality decay under volume** (Trustpilot 2.7 on 8 reviews, workload +60%) triggers gate G8 | 4 | 4 | 16 | Rating below 4.2, SLA below 90%. Note: the 2.7 / 8 reviews rating is already below 4.2, so G8 is breached today; paid is therefore limited to Tranche A (brand and high intent) until the rating recovers, which is consistent with the pre-Gate-1 paid cap of SEK 0.5 M | Reduce paid to Tranche A; capacity state | Head of Sales |
| RK21 | **Health event**: malaria cases among travellers, outbreak (cholera, measles, animal disease) near product areas, a pandemic-type restriction | 2 | 4 | 8 | WHO/Folkhälsomyndigheten notice; 2+ health incident reports | Malaria-free alternates; health information in pre-contract form; flex terms | Head of Product |
| RK22 | **Load-shedding or utilities** (power, water) return or localised outages affect lodges and city stays. Currently suspended per Eskom, residual municipal risk | 2 | 2 | 4 | Eskom stage announced; lodge reports; drought alerts [VERIFY water status] | Lodge generator/solar check in supplier scorecard; guest notice template | Head of Product |
| RK23 | **Natural events** (Western Cape fires, floods, severe weather on Garden Route, N2 closures) | 3 | 3 | 9 | Weather and road closure alerts | Reroute/alternate stays; DMC authority to substitute | Operations lead |
| RK24 | **Reputation and compliance incident** (misleading price claim, GDPR breach, package-law flaw in an upsell flow, creator disclosure breach) | 2 | 4 | 8 | Konsumentverket or IMY contact, viral complaint | Legal sign-off on claims; DPO review; incident log | CFO / Legal |

Top seven by score: RK18 (20), RK4 (16), RK15 (16), RK20 (16), RK1 (15), RK3 (15), RK19 (15). They are the focus of the first 30 days and the Gate 0 pack.

---

## 5. Mitigation architecture

### 5.1 Commercial terms that absorb shocks

- **Flexible-terms ladder** (priced, margin-checked, not free): standard terms with deposit and clear cancellation scale; "Flex" option with later cancel-by dates and credit note for safety/airline events; "Trygg Plus" bundle with insurance partner. Funded from supplier rebates, not from blanket discounts (G2, discounting at most 2% of turnover). Prepayment rules must be reconfirmed under Directive 2026/1024 [VERIFY].
- **Contract clauses** (Legal by 28 Feb 2027): ZAR/currency clause in rate cards (G7), price-adjustment clause matching package law (fuel, taxes, FX only, 20 days, 8% cap), force majeure and extraordinary-circumstances language, release dates 90-120 days flagship and 60-90 mid-tier (strategy G7), attrition limits on allocations, supplier refund timelines in writing.
- **Carrier diversification**: no more than [ASSUMPTION: 45%] of unbooked seat commitments on one carrier or one hub; written reroute options per hub; group-block rules checked for rebooking rights. Target routing mix report by carrier and hub monthly (R04 KPI).

### 5.2 Financial safeguards (WS27 owns the model; this workstream defines triggers)

| Safeguard | Policy | Source |
|---|---|---|
| FX | Hedge 50-70% of confirmed foreign-currency cost, layered monthly, confirmed bookings only; 6% price buffer plus clause; weekly SEK/ZAR dashboard; policy approved 20 Nov 2026 | Strategy G3, WS27 T7 |
| Liquidity | Committed facility 10-15 MSEK per strategy G6, term sheet 31 Jan 2027, against a 10-20 MSEK refund call within weeks (strategy 12.4). WS27 computes 90-day gross refund exposure of 12.8 MSEK (2027) and 15.8 (2028; 19.7 stretch) and proposes at least SEK 16-20 M for 2028, which would widen G6: open CEO/CFO decision | Strategy 12.4, WS27 |
| Prepaid cap | Total prepaid or at-risk supply at most SEK 4 M | Strategy G7 |
| Guarantee | Forecast to Kammarkollegiet before each campaign wave; three-month headroom; growth call 13 Nov 2026 | Strategy G6, WS27 |
| Loss limit | Stop-loss -3.0 MSEK at 30 Jun 2027; loss budget SEK 3.0 M for 2027 | Strategy G10, 12.3 |
| Sales brake | If liquidity or guarantee headroom is below buffer, new campaign waves stop until fixed | Strategy G6 |

### 5.3 Product and portfolio hedges

- **Geographic spread**: market malaria-free and non-Cape alternatives (Eastern Cape, Pilanesberg, Madikwe, KwaZulu-Natal) so a regional incident does not stop all sales (R05).
- **Southern Africa extensions** (Namibia, Botswana, Victoria Falls, Mauritius via Airlink) only where already covered by the DMC panel; extension revenue is a hedge if a SA-specific event hits, but is also hit by the same airline disruption [ASSUMPTION].
- **Season spread** (lever L10: Apr-May, Sep-Nov, green season) reduces concentration of cash exposure in Dec-Mar.
- **Routing mix**: sell a "via Europe" option (KLM, Lufthansa, Swiss/Edelweiss) alongside Gulf options; show the choice on the quote (R04 contingency messaging).

### 5.4 Insurance and war-risk check

CFO and Legal confirm by 15 Dec 2026: (a) which events the company's liability, event-cancellation and credit-insurance policies cover, including war and terror exclusions (R04 asks the company to check war-related coverage); (b) what Swedish travel insurers cover for South Africa (UD warning dependence, pre-existing conditions, medical evacuation); (c) whether an insurance partner can offer an "avbeställningsskydd" product on a commission basis (lever L6). Output: one-page coverage matrix.

---

## 6. Tactics by risk theme

### 6.1 Safety perception (RK1, RK2, RK3, RK19)

Principles: facts, not promises. Show how the company plans for safety. Never write "Sydafrika är säkert". Always link to UD/swedenabroad.se for the current official advice (R09).

1. **Safety hub on the website** (with SEO lead, WS05): "Är Sydafrika säkert? Så planerar vi din trygghet." Contents: current official advice (UD/Ambassaden, quoted and linked, date-stamped); what we do (pre-booked transfers, daytime driving rules, guided township visits, selected lodges, briefing, jourtelefon under resan); what the traveller does (valuables, ATM, night driving, demonstrations); incident statistics only from our own files once we hold them.
2. **Adviser script**: a 6-line answer to "Är det säkert?" with a Swedish-language one-pager. Training in the first 30 days; recorded call review monthly.
3. **Pre-departure briefing**: e-mail and PDF 14 days before, SMS 48 hours before (WS13).
4. **Incident protocol** (with insurers and DMC): 15-minute first response, named duty manager, escalation tree, documentation, medical evacuation partner, police report help, embassy contact, family contact, press line. Table-top test with the first live drill by 31 Mar 2027.
5. **Trust assets**: reviews programme (WS12), resegaranti link and Kammarkollegiet lookup on every landing page and checkout (R09), named advisers, guide bios.
6. **Safety-sensitive advertising**: no safety claims in ads; ads avoid imagery implying risk; keyword and placement exclusions for crime and unrest news in programmatic and video (WS09, WS08); brand-safety checks for creators.

Swedish copy (for review by Legal; not to be published until the 24/7 decision for the last line):

- Rubrik: "Så planerar vi för din trygghet i Sydafrika" (not "Trygg i Sydafrika", which reads as a safety promise)
- Brödtext: "Vi har skickat svenska resenärer till Sydafrika sedan 2003 [styrk innan publicering]. Du har en egen rådgivare före och efter resan, och en jourtelefon som du når under resan. Din resa omfattas av resegaranti via Kammarkollegiet. Läs alltid Utrikesdepartementets aktuella reseinformation innan du bokar: [länk]."
- Under resan: "Jourtelefon under resan" (until the CEO decides on a 24/7 local-presence model).

### 6.2 Airline disruption (RK7-RK11)

- **Routing policy**: no single-hub dependence in a departure month for more than [ASSUMPTION: 45%] of travellers; Gulf and European alternatives priced on every quote.
- **Disruption desk**: [ASSUMPTION: 2 FTE-equivalent] trained pool (from existing booking staff plus temp capacity; sized in WS23, and it competes with the +60% workload, so confirm it is not double-counted in the capacity model), bulk rebooking capacity 100+ travellers in one week (WS23 5.5), mass SMS/e-mail tool, templates (below).
- **Decision tree** (S3): within 4 hours decide wait / reroute / reschedule / refund by flight status, travel time to departure, supplier flexibility, package-law rights (refund within 14 days where the traveller cancels due to extraordinary circumstances, R09).
- **Preferred carrier agreements** and group-block rebooking rights negotiated with KLM, Turkish, Qatar, Lufthansa Group (WS18).
- **Ground-side cover**: DMC authority to extend lodge nights and substitute transfers up to a stated SEK limit without HQ approval [ASSUMPTION: SEK 15,000 per party per event].

### 6.3 Currency (RK12, RK13)

- FX policy written by 20 Nov 2026 (CFO), executed monthly. Weekly dashboard: SEK/ZAR, USD/SEK, EUR/SEK, hedge ratio, open exposure, gain/loss at 10% shock.
- Quote policy: publish "from" prices based on hedged rates with a 6% buffer; no fixed-price, un-hedgeable departures before the policy is live (G3).
- Price changes only for fuel, taxes/fees or exchange rates, notified at least 20 days before departure; above 8% the traveller may cancel with full refund (R09). Therefore the buffer exists to stay under the 8% line. Package law also expects cost decreases to be passed on [VERIFY with Legal], so the clause must be symmetric.
- Where the rand strengthens, expect competitors to emphasise value ("mer resa för pengarna", R01); the response is fixed-price departures after hedging and visible inclusions, not discounts (G2).
- Review annually and at each gate whether to contract in ZAR, hedge forward, or shift to EUR/USD contracts (R05 open question: what currency the company contracts in; unknown).

### 6.4 Load-shedding and utilities (RK22)

- Status: suspended as of 2 Nov 2026 per Eskom (source in section 3). Monitor monthly, not weekly.
- Supplier scorecard adds: backup power (generator/solar/inverter), water storage, Wi-Fi redundancy. Lodges failing the check are not sold as flagship.
- Guest pre-departure information: "Strömavbrott kan förekomma lokalt. Ta med powerbank." (neutral, factual).
- Trigger: Eskom announces Stage 2 or higher for 3 consecutive days, or a drought/"Day Zero" style water alert for a destination we sell [VERIFY current water status] triggers a review of affected itineraries within 48 hours.

### 6.5 Health (RK21)

- Pre-contract information form includes health rules, vaccination and malaria information as required by package law (R09), linking to Folkhälsomyndigheten and 1177 [VERIFY exact pages].
- Malaria-free safari alternatives are always quoted for families with children under 12 and for travellers who say they do not want prophylaxis (R05).
- Outbreak trigger: WHO or Folkhälsomyndigheten notice for a region we sell. Action within 48 hours: customer notice, flexibility decision, alternative reserve proposal.
- Insurance: all quotes show a travel-insurance recommendation; the adviser asks about medical conditions and reminds about evacuation cover.

### 6.6 Demand shocks (RK1, RK2, RK4, RK5, RK6)

- **Early-warning dashboard** (weekly, one page): enquiries and quotes versus a 4-week and year-ago trend; search interest in "Sydafrika säkert" and brand terms (Google Trends, Search Console); cancellation rate by week; new bookings by departure month; media monitoring on SA safety stories; competitor offers (TourCompass, MyChoice); SEK/ZAR; EASA and airline notices.
- **Shock budget rules** (WS28 section 9): from the month after the event, paid media at 40% of Tranche A, no Meta, SEO 70%, social and partner committed 50%, all gated lines frozen, CRM and measurement unchanged; at least a 30% run-rate cut within 60 days (strategy stop-loss).
- **Demand support moves** (only after the immediate customer response): reassurance content and Q&A webinars (WS20), advisor outreach to existing enquiries, flexible terms on new bookings for 90 days, targeted offers on 2028 departures (as 2027 recovers), repeat-customer and referral campaign (L7).

---

## 7. Contingency playbooks

Each playbook has at least: trigger, actions, customer message (Swedish), financial action and exit criteria. S1-S3 are written out in time phases; S4-S7 are v0 outlines to be expanded into the same hour 0-4 / 24 / 7-day format in the 31 Jan 2027 playbook v1. All Swedish messages are drafts for Legal review, and statements of customer rights are [VERIFY] until Legal confirms them.

### 7.1 Command structure

| Role | Person (role) | Deputy | Authority |
|---|---|---|---|
| Incident commander | CEO | CFO | Declares status (amber/red), approves refunds policy, signs holding statement |
| Customer lead | Head of Sales | Booking-ops coordinator | Customer contact, rebooking, refund processing |
| Comms lead | Head of Marketing | CRM manager | Website banner, e-mail/SMS, press, social, ads pause |
| Supply and air lead | Head of Product / Head of Air | Operations lead | Supplier and airline liaison, DMC instructions |
| Finance lead | CFO | Finance controller | Refund waterfall, facility draw, hedge adjustments, guarantee contact |
| In-trip lead | In-trip desk lead | Duty rota | Travellers in-country, embassy, insurer |
| Legal | Legal counsel (external) | CFO | Package-law rights, Kammarkollegiet contact, wording |

Duty list with mobile numbers kept offline and in the shared calendar; reviewed quarterly [ASSUMPTION: names to be filled by CEO].

### 7.2 S1 Safety event or media wave (RK1)

- **Trigger**: red indicators in section 4 for RK1, or a serious incident involving Swedish travellers, or the embassy issues a security message.
- **Hour 0-4**: commander convenes; in-trip lead verifies all travellers in country (list from WS23 in-trip view: location, supplier, guide, emergency contact) and contacts each party; comms lead pauses scheduled social posts and paid ads in affected channels; holding statement.
- **Hour 4-24**: individual outbound contact to travellers departing in 14 days; website banner with official links; adviser FAQ; decision on any area-level changes to itineraries; insurer notified.
- **Day 2-7**: assess rights: if UD changes advice, statutory free-cancellation applies; otherwise company discretion. Decide a time-limited goodwill policy (for example free date change to 2028 for departures within 30 days, [ASSUMPTION] chosen so that credit notes do not create cash drain). Resume ads gradually after 72 hours of quiet news.
- **Customer message (Swedish, draft)**: "Vi följer läget i [område] noga, är i kontakt med våra lokala samarbetspartners och följer Utrikesdepartementets information. Är du på plats eller reser inom 14 dagar kontaktar vi dig personligen. Aktuell reseinformation hittar du här: [länk]. Har du frågor når du vår jourtelefon på [nummer]."
- **Exit**: seven days without new incidents and enquiries back above 80% of trend.

### 7.3 S2 UD warning or advice change (RK2)

- **Trigger**: new or changed Swedish government advice for a region sold.
- **Immediately**: legal confirms the traveller's rights (full refund in unavoidable and extraordinary circumstances; refund within 14 days, R09); finance computes the refund exposure for the next 90 days from the order book; the CEO calls the bank about the facility.
- **Customer actions**: proactive e-mail to all travellers with next-90-day departures; offer rebooking free of change fees, with the refund choice presented honestly. No pressure to take credit notes. (Directive 2026/1024 tightens voucher rules, but transposition is about Sept 2028, so the Swedish rules in force at the time govern; Legal to state the voucher conditions [VERIFY]. Voluntary good practice: voucher only with explicit consent.)
- **Customer message (Swedish, draft)**: "Utrikesdepartementet har ändrat sin reseinformation för [område]. Vi kontaktar dig inom [24] timmar om din resa är påverkad. Du får då välja mellan att omboka utan ändringsavgift eller att avboka, och vi går igenom villkoren med dig. Du behöver inte bestämma dig direkt. Aktuell information: [länk]. Frågor: [nummer]." [Legal to confirm the refund wording before use.]
- **Supplier actions**: invoke force-majeure refund terms with lodges, DMC, airlines; start refund recovery tracker.
- **Finance**: draw the facility if the refund call exceeds 50% of available cash [ASSUMPTION W30-A13]; freeze Tranche B and gated lines; apply shock budget; notify Kammarkollegiet if guarantee exposure changes.
- **Exit**: advice lowered or stable for 14 days; reopen campaign waves per gate.

### 7.4 S3 Gulf hub or airspace closure (RK7)

- **Trigger**: closure notice for DOH/DXB/AUH or EASA bulletin; or carrier cancels flights.
- **Hours 0-4**: Head of Air pulls list of affected passengers by date and routing; priority: those in transit or departing within 72 hours; call carriers' group desks; open rebooking on KLM, Turkish, Lufthansa Group, Swiss/Edelweiss, Air France; check war-risk insurance.
- **Hours 4-48**: bulk rebooking; DMC adjusts arrival transfers and first nights; hotel nights at transit airport where required; customer SMS wave.
- **Day 3-7**: future departures 8-60 days out: move to alternative routing at quote level; price differences absorbed within a pre-approved cap per passenger [ASSUMPTION: SEK 5,000, event cap SEK 500,000 in 2027 = 100 passengers, CFO and CEO approval above] and recovered from airlines where entitled (EU261 may apply on EU carriers [VERIFY]).
- **Customer message (Swedish, draft)**: "Ditt flyg är inställt eller ändrat på grund av stängt luftrum. Vi har lagt om din resa via [stad] och bekräftar nya tider inom [24] timmar. Du behöver inte göra något just nu. Har du frågor når du oss på [nummer]."
- **Exit**: carriers confirm normal schedule for 14 days.

### 7.5 S4 FX shock (RK12)

- **Trigger**: SEK/ZAR moves 5% against the hedge average in a month, or hedge ratio below 50% of confirmed foreign-currency cost (open-exposure loss at a 10% shock above SEK 1.4 M in 2027 / 1.9 M in 2028 volume).
- **Actions**: (1) CFO executes missing hedges to policy within 2 days; (2) re-price unbooked departures at new rate; (3) for booked customers, use the price clause only if the increase stays under 8% (above this the traveller can cancel) and notice is at least 20 days before departure; (4) value-add instead of discount; (5) revise margin guardrail and Gate test if an event persists more than 60 days.
- **Customer message (Swedish, draft, for price clause use)**: "På grund av ändrade växelkurser justerar vi priset på din resa med [x] kr ([y] %). Enligt våra villkor och paketreselagen meddelar vi dig minst 20 dagar före avresa. Om höjningen överstiger 8 % har du rätt att avboka utan kostnad. Kontakta din rådgivare om du vill diskutera alternativ." [Legal to confirm.]
- **Exit**: hedge ratio back within 50-70% and SEK/ZAR within 3% of the hedge average for 30 days.

### 7.6 S5 Supplier or airline failure (RK9, RK17)

- **Trigger**: insolvency notice, payment default, key lodge or DMC unable to operate.
- **Actions**: identify exposed bookings by file; secure alternatives from the supplier panel; notify guarantor/Kammarkollegiet where the company's own guarantee is touched; for customers, rebook within same category, refund difference or agree alternative; claim recovery from supplier, card network or insurer; update supplier risk list.
- **Customer message (Swedish, draft)**: "[Leverantör] kan tyvärr inte genomföra din [logi/flyg/transfer] som planerat. Vi har ordnat ett likvärdigt alternativ: [alternativ]. Du behöver inte betala något extra. Din rådgivare [namn] kontaktar dig inom [24] timmar. Frågor: [nummer]."
- **Exit**: all affected files re-confirmed or refunded, recovery claims filed, supplier removed from or restricted on the panel.

### 7.7 S6 In-trip emergency (RK19, RK21, RK23)

- **Trigger**: any incident log entry rated serious (injury, crime against traveller, missing traveller, serious illness, accident, natural event affecting a group).
- **Actions**: duty phone answer within 15 minutes; collect facts; contact insurer's alarm centre; arrange medical care or evacuation; contact next of kin only with consent; inform the embassy; keep a written log; senior manager contacts the traveller within 24 hours; post-incident review within 7 days.
- **Dependency**: the 24/7 decision (strategy 13.4, CEO by 31 Jan 2027): (a) DMC 24/7 line under SLA, (b) SA entity/contractor, or (c) 24/7 phone line with named escalation. Until then marketing says "jourtelefon under resan", not "24/7 lokal närvaro".
- **Customer message (Swedish, draft, to the traveller or next of kin with consent)**: "Vi har fått information om en händelse som rör [namn] och är i kontakt med [sjukhus/lokala myndigheter/försäkringsbolag]. [Namn på ansvarig] är din kontaktperson och når dig på [nummer]. Vi återkommer senast [klockslag]."
- **Exit**: traveller safe and cared for or repatriated, insurer case opened, written post-incident review within 7 days, incident log closed by the in-trip lead.

### 7.8 S7 Mass cancellation / cash call (RK14, RK15)

- **Trigger**: cancellations above 3% of next-90-day order book in a week (about SEK 0.4 M at the WS27 12.8 MSEK 2027 exposure), or refund exposure above SEK 5 M in a week [ASSUMPTION W30-A13].
- **Refund waterfall** (CFO): 1) customer money received for the next 90 days (WS27: 12.8 / 15.8 MSEK gross; whether it is held in a segregated account is unknown, CFO to confirm [VERIFY]); 2) supplier refunds and airline refunds, tracked per file; 3) facility; 4) guarantee only if insolvency (should never be reached); 5) cost-cut stack (Tranche B, gated lines, hires after H1/H2a, temp capacity).
- **Weekly cash**: 13-week cash forecast reviewed twice a week during red status.
- **Reporting**: informed board and Kammarkollegiet if forecast changes materially.
- **Customer message (Swedish, draft)**: "Vi hanterar just nu ovanligt många ändringar och avbokningar. Din avbokning är registrerad och du får besked om återbetalning inom [14] dagar enligt paketreselagen. Du behöver inte kontakta oss igen. Vi uppdaterar dig senast [datum]." [Legal to confirm the refund period.]
- **Exit**: weekly cancellations below 1.5% of the 90-day order book for 3 consecutive weeks and the facility undrawn or on repayment plan.

### 7.9 Communication principles for all playbooks

1. Tell customers first, before the media; one voice (comms lead); every message dated.
2. Be factual: what happened, what we do, what the customer can do, when we will update.
3. Never speculate, never blame, never promise what we do not control.
4. Pause promotional content on affected channels; resume after 72 hours of calm news.
5. Respond to every public review or comment within one working day during red status, with a human reply.
6. Keep an incident log; hold a lessons-learned review within 14 days.

---

## 8. Timeline

| Date | Milestone | Owner |
|---|---|---|
| 2-6 Nov 2026 | Risk lead named; register v1 loaded to shared tracker; incident commander and deputies named; read current UD text and record | CEO |
| 9-13 Nov | Early-warning dashboard v0 (manual: Search Console, enquiries, media monitoring, SEK/ZAR); Kammarkollegiet growth call (13 Nov) with exposure numbers from WS27; adviser safety script | Risk lead / CFO / Head of Marketing |
| 20 Nov | FX policy approved (strategy G3 / WS27 F8) | CFO |
| 1 Dec | Paid test and early-booking campaign start only after guarantee call and FX policy precondition check (WS28) | Head of Marketing + CFO |
| 15 Dec | Gate 0: baseline pack (margin, 40 MSEK definition, guarantee level, hedging history, held supply); risk scores re-baselined; insurance coverage matrix; liquidity facility outline | CFO / CEO |
| 15 Jan 2027 | Temp capacity pool contracted before Jan-Feb peak (WS23); dashboard v1 automated | Head of Sales / Risk lead |
| 31 Jan | Disruption playbook v1 complete; 24/7 model decision; liquidity facility term sheet; incident protocol; Swedish message templates approved by Legal | CEO / CFO / Operations lead |
| 28 Feb | Contract clauses (FX, force majeure, release) in use for new rate cards | Legal / Head of Product |
| 31 Mar | Table-top exercise 1 (Gulf closure plus UD warning), Gate 1 including risk tests (service, margin, supply, guarantee headroom) | CEO |
| 30 Jun | Gate 2; stop-loss test; second table-top (safety event); supplier scorecard review | CEO / CFO |
| Sep 2027 | Pre-festive peak drill; hedge and facility review; insurer renewal | CFO / Head of Air |
| 31 Oct 2027 | Gate 3: risk register refresh; decision on 2028 loss budget | CEO |
| Q1 2028 | Directive 2026/1024 re-engineering plan (transposition about Sept 2028 [VERIFY]) | Legal / Tech |
| Quarterly | Register review, playbook test, UD/health/air bulletin audit | Risk lead |

---

## 9. Owners and governance

- **Sponsor**: CEO. **Risk lead**: CFO or a delegated risk and compliance coordinator [ASSUMPTION: 0.2 FTE from existing staff; no new hire]. Registry owner updates weekly.
- **Meetings**: weekly 20-minute risk stand-up (during amber/red daily), monthly growth council item, quarterly deep review with the board.
- **Status definitions**: Green = within thresholds; Amber = any one amber signal, risk lead informs CEO within 24 hours and prepares options; Red = any red signal, incident commander declares and activates the playbook.
- **Authority to act** (pre-approved): customer lead may rebook and refund within policy; finance lead may execute hedges to policy and pause gated spend; comms lead may pause ads and scheduled posts; no one may promise customers new compensation outside policy without CEO approval.
- **Audit trail**: all red events recorded in the incident log with decision, time and cost, reviewed at the next gate.

---

## 10. KPIs and thresholds

| KPI | Definition | Target / threshold | Frequency | Owner |
|---|---|---|---|---|
| Risk register health | Open red risks without owner or action | 0 | Monthly | Risk lead |
| Early-warning dashboard freshness | Days since last update | At most 7 | Weekly | Risk lead |
| Order book margin | Weighted gross margin of booked-not-departed | At least 19% on new bookings, 20% plan (G1) | Weekly | CFO |
| Hedge ratio | Hedged / confirmed foreign-currency cost | 50-70% | Monthly | CFO |
| Open FX exposure cost at 10% move | SEK, on confirmed foreign-currency cost | Above SEK 1.4 M (2027 volume) / 1.9 M (2028 volume) triggers hedge action; equals hedge ratio below 50% | Monthly | CFO |
| Liquidity headroom | Committed facility plus cash vs 90-day refund exposure | Cover at least 100% of 90-day gross refund exposure (WS27: 12.8 / 15.8 MSEK) with facility plus free cash [ASSUMPTION]; the 10-15 MSEK facility alone does not cover 2028 | Weekly during amber | CFO |
| Refund timeliness | Refunds paid within 14 days of a valid cancellation or entitlement | 100% (statutory, R09); backlog report weekly in red | Weekly in red, monthly otherwise | Finance controller |
| Guarantee notification | Kammarkollegiet forecast sent before each campaign wave | 100% of waves (binary) | Per wave | CFO |
| Hedge policy compliance | Months with hedges executed to policy | 12 of 12 | Monthly | CFO |
| Cash forecast accuracy | 13-week forecast vs actual | Within +/-10% [ASSUMPTION] | Weekly in red, monthly otherwise | CFO |
| Dual-routing coverage | Quotes showing a Gulf and a European-hub option | At least 90% of quotes [ASSUMPTION] | Monthly | Head of Air |
| Supplier risk coverage | Flagship lodges and all DMCs with completed scorecard (backup power, water, financial check) | 100% by 28 Feb 2027 (strategy 13.6) | Quarterly | Head of Product |
| In-country traveller list | Accuracy of the live list of travellers in country (location, supplier, emergency contact) | 100% verified in each drill [ASSUMPTION] | Per drill | In-trip lead |
| Complaints and ARN cases | Per 1,000 travellers | Threshold set from baseline within 60 days (G8) | Monthly | CRM manager |
| Guarantee headroom | Limit less forecast liable turnover x rate | At least three months of forecast | Monthly | CFO |
| Prepaid supply | Total prepaid or at-risk supply | At most SEK 4 M | Weekly | Head of Product |
| Carrier concentration | Share of upcoming seats on one carrier / hub | At most 45% [ASSUMPTION] | Monthly | Head of Air |
| Cancellation rate | Cancelled / order book next 90 days, weekly | Amber above 1.5%, red above 3% [ASSUMPTION] | Weekly | Head of Sales |
| Enquiry trend | 4-week enquiries vs the same weeks last year (seasonally adjusted; the prior 4 weeks alone mislead around the Jan-Feb peak) | Amber -15%, red -30% | Weekly | Head of Marketing |
| Safety conversion objection | Lost-deal reason "safety" | Below 15% | Monthly | Head of Sales |
| Disruption response time | Share of affected travellers contacted within 4 hours of carrier notice | 90% in red status | Per event | Customer lead |
| Bulk rebooking capacity | Travellers rebooked within 7 days | 100+ | Per drill | Head of Air |
| Incident response | Duty answer within 15 minutes | 95%, measured from go-live of the model chosen on 31 Jan 2027 | Monthly | In-trip lead |
| Incident rate | Serious incidents per 1,000 travellers | Baseline set after first 100 travellers; trend down | Monthly | In-trip lead |
| Trustpilot rolling | Rating | At least 4.2 (target 4.5) (G8) | Weekly | CRM manager |
| Playbook readiness | Drills completed with documented fixes | 2 in 2027 H1, 1 before festive | Per drill | Operations lead |
| Stop-loss headroom | Cumulative programme net contribution vs -3.0 MSEK | Amber at -2.0, red at -2.5 [ASSUMPTION thresholds]. Lagging: WS27 core path is -0.91 at Jun 2027 and -2.02 at Dec 2027, and at 17% margin the path breaches -3.0 only in Nov 2027, so order-book margin (19%) is the operative early warning | Monthly | CFO |

---

## 11. Budget (SEK, ex VAT)

All lines [ASSUMPTION: no vendor quotes; replace with quotes before commitment]. They sit outside the programme's marketing budget (3.6 MSEK in 2027, 4.6 MSEK in 2028) and outside the finance, guarantee and hedging lines already in strategy 12 (0.15 / 0.35 MSEK) and WS27 (treasury advisory, legal advice). Bank costs (facility commitment fee, guarantee commission, hedging spread) are therefore NOT repeated here to avoid double counting.

| # | Item | Q4 2026 | 2027 | 2028 | Basis |
|---|---|---|---|---|---|
| 1 | Risk lead time (0.2 FTE internal, not incremental) | 0 | 0 | 0 | Existing staff; noted for capacity only |
| 2 | Monitoring tools: media monitoring, Google Alerts/Trends, flight status feeds, FX data | 8,000 | 60,000 | 60,000 | Tool subscriptions |
| 3 | Legal review of terms, force majeure, price clause, templates, claims wording | 15,000 | 70,000 | 40,000 | About 60-80 hours at external rates |
| 4 | Insurance and war-risk coverage review (broker, advice) | 10,000 | 30,000 | 20,000 | One review plus renewal support |
| 5 | Table-top exercises and drills (facilitator, 3 per year first year) | 0 | 90,000 | 60,000 | Facilitator 20-30k per session |
| 6 | Crisis comms retainer or on-call PR adviser | 0 | 80,000 | 80,000 | Retainer at 6-7k a month |
| 7 | Mass SMS/e-mail notification tool, disruption desk set-up | 0 | 40,000 | 30,000 | Subscription plus set-up; overlaps with WS13/WS25 tools |
| 8 | Staff training: safety script, incident handling, first aid awareness for in-trip staff | 5,000 | 40,000 | 30,000 | Courses and internal time not costed |
| 9 | Outsourced after-hours overflow / duty phone (if decided, option c) | 0 | 0 here | 0 here | Funded from the strategy 12.1 in-trip support line (SEK 0.15 M 2027 / 0.30 M 2028, decision 31 Jan 2027); not repeated here to avoid double counting |
| 10 | Contingency 10% of items 2-8 | 4,000 | 41,000 | 32,000 | |
| | **Total (excl. item 9)** | **about 42,000** | **about 451,000** | **about 352,000** | |

**P&L impact (not in strategy 12.1):** the strategy's incremental cost table (3.30 / 7.10 MSEK) has no risk line, so these about 0.45 MSEK (2027) and 0.35 MSEK (2028) are additional. At 20% margin the cumulative programme result moves from about -3.9 to about -4.7 MSEK by end 2028, and the 2027 result from -1.70 to about -2.15 MSEK (inside the SEK 3.0 M loss budget, but it uses 0.45 of the 1.3 MSEK headroom). Decision for CEO: count these lines inside the programme net contribution that the stop-loss measures (recommended), or treat them as company overhead. WS27 has to be updated accordingly.

Contingent (not budgeted, funded only on trigger): goodwill and rebooking cost caps per event [ASSUMPTION W30-A4]: SEK 5,000 per passenger for an air reroute with an event cap of SEK 500,000 in 2027 (100 passengers, the bulk-rebooking design size), SEK 15,000 per party for DMC ground authority, and a separate discretionary goodwill cap of SEK 250,000 per event approved by the CEO. Anything larger is charged to the loss budget (SEK 3.0 M) and reported at the next gate. The refund and cash exposure (10-20 MSEK for 90 days per strategy 12.4; WS27 gross 12.8 / 15.8) is handled by the facility, not by this budget.

---

## 12. Dependencies

| Dependency | Needed from | By |
|---|---|---|
| Baseline pack: margin, 40 MSEK definition, current guarantee, bank facilities, hedging history, SEK/ZAR contracts | CFO (WS27) | 15 Dec 2026 |
| FX policy and facility term sheet | CFO | 20 Nov 2026 / 31 Jan 2027 |
| 24/7 model decision | CEO (WS23, WS22) | 31 Jan 2027 |
| Disruption playbook content and bulk tools | Head of Air, Operations lead (WS18, WS23) | 31 Jan 2027 |
| Supplier allocation register and release dates | Head of Product (WS02, WS23) | 15 Dec 2026 |
| Review and trust programme | CRM manager (WS12, WS22) | Ongoing |
| Safety hub content | SEO lead (WS05) and Legal | 28 Feb 2027 |
| Early-warning data: GA4, Search Console, enquiry feed | Analytics (WS16, WS25) | 15 Jan 2027 |
| Partners and affiliate terms with cancellation passthrough | WS19 | Q1 2027 |
| EU Directive 2026/1024 implementation | Legal and Tech | 2028 |

---

## 13. Risks to this workstream

| # | Risk | Mitigation |
|---|---|---|
| W1 | Plan sits on a shelf and is not drilled | Calendar drills; gate tests include "drill completed"; CEO signs |
| W2 | Early-warning dashboard produces noise | Fixed thresholds; two-stage amber/red; quarterly tuning |
| W3 | Staff capacity is consumed by growth, leaving none for crisis | Capacity state (WS23); temp pool; deputies |
| W4 | Scores and thresholds are judgement and may be wrong | Re-score at Gate 0 with company data; mark all thresholds [ASSUMPTION] |
| W5 | Customer-facing flexibility is too generous and erodes margin | CFO sign-off; funded from rebates; cap per event |
| W6 | Legal readings differ from this summary | Legal confirms every statutory statement before use (R09 [VERIFY] items) |
| W7 | Over-communication of safety content increases anxiety | Test copy; keep it factual; A/B test with CRO (WS15) |
| W8 | Key-person concentration: the CFO is risk lead, finance lead, deputy commander and legal deputy, and the CEO is incident commander while new in role | Name a separate risk coordinator (0.2 FTE) and a second deputy for finance (controller) by 13 Nov; rehearse CFO-absent and CEO-absent cases in table-top 0 |

---

## 14. First 30 days (2 Nov to 2 Dec 2026)

| Week | Actions | Output | Owner |
|---|---|---|---|
| 1 (2-6 Nov) | Name risk lead, incident commander and deputies; load the register into the shared tracker; re-read current UD/Ambassaden text and save a dated copy; confirm there is no active travel warning; ask the CFO for the six baseline items that drive risk scoring (margin, 40 MSEK definition, guarantee level, facility, hedging history, held allocations) | Named roles; register v1; baseline request list | CEO |
| 2 (9-13 Nov) | Build manual early-warning dashboard (enquiries trend, Search Console, cancellations, SEK/ZAR, media monitor, EASA/airline notices); adviser safety script and objection log; contact Kammarkollegiet with growth forecast on 13 Nov (CFO); start insurance coverage questions to broker | Dashboard v0; script; call done | Risk lead / CFO / Head of Sales |
| 3 (16-20 Nov) | FX policy approved 20 Nov; draft Swedish templates for S1-S4 and send to Legal; list all travellers currently in-country and next-30-day departures (inventory of exposure); draft supplier scorecard additions (backup power, water, financial health) | FX policy; templates v0; exposure list | CFO / Comms lead / Operations lead |
| 4 (23-27 Nov) | Table-top exercise 0 (2 hours, desk-based): Gulf closure with 40 travellers in transit; test the duty list and the message sequence; refine; confirm paid-test preconditions (guarantee call done, FX policy live, dashboard live, safety copy checked) before the 1 Dec start | Drill report with fixes; go/no-go note | Incident commander |
| 5 (30 Nov-2 Dec) | Pre-brief for 1 Dec paid test and early-booking campaign with risk guardrails (no safety claims in ads; brand exclusions; stop rules); 13-week cash forecast and refund-exposure view with WS27; schedule Gate 0 risk pack for 15 Dec | Pre-brief; risk pack outline | Head of Marketing / CFO / Risk lead |

Decisions required from the CEO in the first 30 days: (1) who is risk lead and deputy commander; (2) accept the status definitions and authority to act in section 9; (3) approve the Q4 2026 budget of about SEK 42,000; (4) confirm that no safety or 24/7 claims are used in advertising until Legal and the 31 Jan 2027 decision; (5) approve data requests to finance for scoring; (6) decide whether the risk budget (about SEK 0.45 M in 2027) counts inside the stop-loss measure; (7) decide whether the liquidity facility target is widened from 10-15 to 16-20 MSEK for 2028 (WS27 proposal).

---

## 15. Assumptions and data requests (for the CEO to replace)

| ID | Assumption | Rationale | Replace with |
|---|---|---|---|
| W30-A1 | Risk scores L and I in section 4 | No loss history or customer data; judgement from R01, R04, R09 | Company incident and cancellation history |
| W30-A2 | Amber/red thresholds (enquiries -15% / -30%, cancellations 1.5% / 3% a week, FX 3% / 5% a month) | Common-sense trip-wire levels; not benchmarked | Calibrate on 12 months of company data by Gate 0 |
| W30-A3 | Carrier/hub concentration cap of 45% | Planning rule to avoid single-hub failure; Gulf carriers about 10% of CPT capacity (R05) | Actual routing mix |
| W30-A4 | Goodwill and reroute caps (SEK 5,000 per passenger air reroute with SEK 500,000 event cap; SEK 15,000 per party DMC authority; SEK 250,000 per event discretionary goodwill, 2027) | Illustrative decision limits to avoid delay in crisis | CFO approval |
| W30-A5 | Risk lead is 0.2 FTE from existing staff | Avoid new headcount beyond strategy's +5 FTE | HR/CEO decision |
| W30-A6 | Budget lines (SEK 42k / 451k / 352k) | Market-rate estimates, no vendor quotes | Quotes by 31 Jan 2027 |
| W30-A7 | Liquidity cover rule (facility plus free cash covers 100% of 90-day gross refund exposure) | Strategy states facility 10-15 MSEK sized to a 10-20 MSEK refund call; WS27 gross exposure 12.8 / 15.8 | Cash model (WS27) |
| W30-A8 | Extensions to Namibia/Botswana/Mauritius are a partial hedge | Not sourced; same airline exposure | Product data (WS02) |
| W30-A9 | Bank guarantee lead time and facility pricing | Unknown | Bank and Kammarkollegiet feedback |
| W30-A10 | Existing insurance covers; hedging practice; contracting currency | Unknown (R05 open questions) | CFO coverage matrix |
| W30-A11 | Stop-loss amber/red thresholds at -2.0 / -2.5 MSEK | Early warning ahead of the -3.0 MSEK binding limit | Board decision |
| W30-A12 | EU261 or equivalent compensation may apply on EU carriers | General regulatory knowledge, not checked | Legal |
| W30-A13 | Playbook financial triggers: facility draw when the refund call exceeds 50% of available cash; S7 weekly refund exposure above SEK 5 M; cancellation exit rule below 1.5% for 3 weeks | Trip-wire levels chosen to act before cash is short; not benchmarked | Cash model (WS27), bank covenants |
| W30-A14 | Response-time standards (15 min duty answer, 4 h customer contact, 24 h written update, 48 h health/utilities review), disruption desk of 2 FTE-equivalent, 90% dual-routing coverage, +/-10% cash-forecast accuracy | Common crisis-management practice; not tested against company capacity | Drill results, WS23 capacity model |
| W30-A15 | Tanzania -35% analogue is a valid proxy for a South Africa shock | Only analogue in the red-team material (RT-D D11), unverified | Verified source or company cancellation history |

Open [VERIFY] items: current UD text and any regional warnings; SA water and drought status for 2027; animal disease and health outbreaks near product regions; Swedish insurer stance on SA; transposition of Directive 2026/1024 and prepayment rules; commencement date of SFS 2026:97; Folkhälsomyndigheten pages; the SA election and unrest calendar.

---

## 16. Source list

- Eskom load shedding status: https://loadshedding.eskom.co.za/ ; https://www.ourpower.co.za/ ; https://www.eskom.co.za/media-statement-winter-outlook-for-power-grid-again-predicts-no-loadshedding-system-stability-enables-key-energy-security-decisions-to-be-updated/
- US State Department advisory (South Africa): https://travel.state.gov/en/international-travel/travel-advisories/south-africa.html
- Canada travel advice: https://travel.gc.ca/destinations/south-africa
- SEK/ZAR: https://tradingeconomics.com/sekzar:cur
- Kammarkollegiet resegaranti: https://www.kammarkollegiet.se/vara-tjanster/resegaranti ; Visita summary https://visita.se/viktiga-forandringar-i-resegarantilagen/
- Competitor risk-free offers: https://www.tourcompass.se/sydafrika/resor.htm
- Internal research files R01, R03, R04, R05, R09 under /home/user/MICE-Group/docs/research/ and workstreams 23, 27, 28.
