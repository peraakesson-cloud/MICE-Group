# Workstream 14: Lead Generation and Consultative Sales Process

Client: Swedish long-haul travel agency (~22 staff), sydafrikaresor.se. Version 1.1 (independent review applied against `00-strategy.md` v2), 2 Nov 2026. Plan horizon: Q4 2026 prep, 2027 and 2028.
Inherits from `/docs/00-strategy.md` (binding). Research: R03 competitors, R09 regulation, R10 pricing, R11 conversion and CRM, R12 partners.
Language: English plan; Swedish for all customer-facing copy (scripts, emails, SMS, chat).

Marking convention: facts carry a URL or a research reference. Everything else is **[ASSUMPTION]** with a rationale and is collected in section 17 so the CEO can replace it with company data. No company-internal figure is stated as fact anywhere in this file.

---

## 1. Objectives

This workstream owns lever **L2 (conversion on existing flow, +3.5 MSEK by year 2)** and is the conversion engine that the paid, SEO, social, B2B and referral levers (L3-L5, L7, L8) all depend on. If it does not hold, those levers buy enquiries that leak.

| # | Objective | Target | By |
|---|---|---|---|
| O1 | Speed-to-lead: first human reply in business hours | under 1 h for 90% of enquiries on a rolling 4-week basis; instant automatic acknowledgement (under 60 s) for 100%. SLA, rota and timers go live 20 Nov 2026; the 90% level is reached by 31 Jan 2027 (before the Jan-Feb peak) and in all cases by Gate 1 (31 Mar 2027); strategy section 4 sets Q2 2027 as the outer limit. The current response time is unknown, so a 90% result on day one is not assumed [ASSUMPTION WS14-A16] | Live 20 Nov 2026; 90% by 31 Jan 2027 |
| O2 | Close rate (quote to booking), **existing flow** | 25% baseline [A10] to 26% in 2027 and 27% in 2028 | 2027 / 2028 |
| O3 | Close rate, **new traffic** (paid, SEO, social) | 18% (plan value, [A10]); never blended with existing flow in reporting | from 1 Dec 2026 |
| O4 | Quote rate (qualified enquiry gets a written proposal) | 80% planning value [A10]; track decline reasons | Q1 2027 |
| O5 | Follow-up discipline | 100% of open quotes on a documented cadence; 80% of quotes receive 4+ touches by Q2 2027, 95% by end-2027 (R11 section 8 targets, [ASSUMPTION]) | Q2 2027 |
| O6 | Quality guard | Response SLA met and Trustpilot rolling 4.2+ (G8); margin on every proposal at or above G1 | continuous |
| O7 | Capacity | Handle ~2,440 enquiries in 2027 and ~3,350 in 2028 (core) without SLA breach, with templates and automation before hiring (strategy section 13.3) | continuous |

Volume the process must carry (strategy sections 10 and 13): 2026 ~2,025 enquiries and ~1,620 quotes; 2027 ~2,440 enquiries, 485 bookings; 2028 core ~3,350 enquiries, ~2,680 quotes, 637 bookings (464 from existing flow at 27%, 173 from new traffic at 18%). Handling-time inputs of 3 h per quote and 8 h per booking are illustrative [A18].

Value of the lever: each +1 pp of close rate on existing flow in 2028 is roughly 2,148 x 0.8 x 1% = ~17 bookings = ~SEK 1.7 M at ~SEK 101k per booking (strategy section 10 arithmetic). Check on the 2027 figure: 25% to 26% on 2,086 x 0.8 quotes is ~17 extra bookings, ~SEK 1.7 M at ~SEK 99k (45,000 x 2.2), against L2 +2.0 MSEK in the strategy bridge. The ~0.3 MSEK difference is within rounding of the bridge but should be re-run with actuals at Gate 0; this workstream does not count it as additional.

## 2. Operating principles

1. **Speed first, then depth.** Instant acknowledgement, human reply inside the hour, a real conversation inside 24 h. Source: firms replying within one hour were far more likely to qualify leads (HBR 2011, https://hbr.org/2011/03/the-short-life-of-online-sales-leads; B2B-heavy and old, directional). The recommendation (SLA under 1 business hour) is R11's.
2. **Sell by adviser, not by form.** The positioning is a named personal adviser. The first human reply is from the person who will own the file.
3. **Phone converts best.** Phone enquiries are reported as the highest-converting channel at 30-50% (R11, tier C, directional). Every web enquiry therefore aims at a booked call, not an email exchange.
4. **Margin is part of the sale.** Every proposal shows internal margin; no blanket discounts (G2); value-adds are funded from supplier rebates. We sit about 15-20% above the group-with-flights cluster (SEK 36-40k, R03) and justify it with inclusions, guide, flexibility and support, not price.
5. **No false urgency, no unsupported claims.** Scarcity statements only when true and checked against held allocation. "Skandinaviens största" and "24/7 local presence" are not used; the phrase is "jourtelefon under resan" until costed (strategy sections 4.2 and 13.4).
6. **Measure existing flow and new traffic separately** so a fall in blended close rate from colder traffic is not misread as a sales failure (RT-D).
7. **Automate admin, protect conversation time.** Templates, itinerary library and automated cadences exist to free consultant hours for calls.

## 3. Lead lifecycle: stages and definitions

One lead record per household, with source, UTM, consent flags, travel window, party size, budget bracket, trip type and lost reason (strategy P3, R11 section 7). Stages (R11 list, adapted):

| Stage | Definition | Exit rule / SLA |
|---|---|---|
| S0 New | Form, call, chat, email or partner referral received | Auto-ack under 60 s; owner assigned under 15 min in hours |
| S1 Contacted | Human reply sent or call connected | Within 1 business hour (90%) |
| S2 Qualified | Travel window, party, budget bracket and trip type known; a real intent | Within 2 business days; otherwise nurture track N1 |
| S3 Discovery call done | Qualification call held (15-25 min) | Target: within 24 h of S1 for A and B leads |
| S4 Proposal sent | Written itinerary and price, with margin check | Outline same day; full proposal 24-48 h after discovery call (R11 model) |
| S5 Decision call booked | Dated decision call in diary | Booked at proposal send |
| S6 Booked / deposit paid | Booking confirmed (pre-contract information form was already delivered with the proposal at S4, so the customer has it before being bound; legal to confirm timing) | Deposit within 3 business days of verbal yes |
| S7 Balance paid | Per terms | Reminders per payment schedule |
| S8 Travelled | Trip completed | |
| S9 Review / referral asked | 10-14 days after return, gated by 4+ star survey (R11 section 6) | 100% |
| L Lost | Mandatory lost reason from fixed list (section 9.4) | Enters reactivation track |

Late-conversion measurement: report close rate at 30, 60 and 90 days from quote, and net of cancellations (R11 section 7). Define "enquiry" once (a qualified human request for a quote, excluding spam, job seekers, brochure-only) and keep it fixed; enquiry definition drives every denominator in the strategy.

## 4. Lead intake, scoring and routing

### 4.1 Channels at intake
Quote form (budget-bracket field, fewest possible fields because every extra field is claimed to cost conversion, R11 section 4, unverified; A/B test), "boka ett samtal" calendar button, phone, email, live chat, partner and affinity referrals (GL4/L8), hosted-departure sign-ups, kundkväll registrations. Live chat is claimed to lift conversion 15-30% (R11, unverified vendor figure) so test, do not assume.

### 4.2 Scoring (simple, three tiers) [ASSUMPTION, calibrate on 60 days of data]
| Tier | Signals | Treatment |
|---|---|---|
| A (hot) | Stated travel window within 12 months, budget bracket given and plausible for the product, party known, asked for call, referral or repeat customer | Call within 30 min in hours; routed to the best-converting consultant for that trip type; full cadence |
| B (warm) | Window 12-18 months out or budget unknown, researching 2-3 destinations | First reply under 1 h; discovery call offered within 24 h; standard cadence |
| C (cool) | Brochure, no date, no budget, "just looking" | Automated nurture N1 plus one human check-in; no custom itinerary until a date or bracket is given |

Why: Rework reports consultant conversion varying 2-3x (R11 section 7, tier C, directional), so routing top leads to top performers may be a cheaper lever than hiring. Treat this as a hypothesis to test against own data; routing all A leads to a few people can also overload them, so the capacity cap (section 10.6) applies. Do not hide C leads from the dashboard; they are counted as enquiries only if they meet the fixed definition in section 3.

### 4.3 Routing rules
- Named adviser per trip type: guided departures (Swedish-speaking guide), tailor-made, self-drive/family, honeymoon/luxury, safari-first, wine/Cape-centred. [ASSUMPTION: segment expertise exists in the team; confirm in baseline pack.]
- Repeat and referral leads go to the original adviser where possible (referral close rate benchmarked at 45-60%, R11, tier C).
- MICE-flavoured enquiries (incentive, bleisure, 10+ travellers) go to the MICE lead and are logged for the GL2 test with 3 named accounts by Q2 2027. They are not counted in the core bridge.
- B2B/partner-sourced leads carry a partner ID so commission and the 15% post-commission floor (G5) can be checked.
- Nordic (non-Swedish) enquiries are tagged but not worked differently until the GL1 scope decision (31 Mar 2027).

### 4.4 Service-level agreement (SLA)
| Item | Standard | Peak (Jan-Mar [ASSUMPTION], confirm from enquiry seasonality) |
|---|---|---|
| Auto-acknowledgement | under 60 s, 24/7, states who will reply and by when | same |
| First human reply | under 1 business hour for 90%; Mon-Fri 08:30-17:30 [A] | extended rota Mon-Thu until 20:00 and Sat-Sun 10:00-16:00 |
| Enquiries outside hours | answered by 09:30 next business day at latest; auto-ack sets expectation | evening rota covers |
| Discovery call | offered within 24 h of first reply | same |
| Proposal outline | same day as discovery call for A leads | 1 business day |
| Full proposal | 24-48 h after discovery call | 48 h |
| Revision | one revision loop within 24 h | same |
| Escalation | any enquiry unanswered at 2 h auto-reassigns to rota lead and alerts Head of Sales; unanswered at 4 h alerts CEO daily digest | same |

Rules: the SLA clock runs in business hours only; the SLA is published on the site only after it is being met for four consecutive weeks (strategy: "svarar inom en timme" copy only when met). Budget never moves up in the paid plan while the SLA is missed (strategy section 11.2).

Tighten to under 30 min for 90% by end-2027 (R11 target).

## 5. Discovery call: structure and script (Swedish)

Goal: understand the trip, set a next step, and book the decision call. 15-25 minutes. The consultant logs every field in the CRM during the call.

**Open (30 s)**
> "Hej, det är [namn] från [företaget]. Jag är Sydafrikarådgivare och ser att du hört av dig om en resa till Sydafrika. Har du några minuter nu, eller ska jag ringa tillbaka när det passar bättre?"

**Frame (30 s)**
> "Mitt jobb är att förstå vad ni drömmer om, så att jag kan sätta ihop ett förslag som verkligen passar. Jag ställer några frågor, och sedan berättar jag hur jag skulle lägga upp det. Är det okej?"

**Questions (in this order; skip what the form already told you)**
1. Vilka reser, och i vilka åldrar? (Party, children's ages, mobility, special needs.)
2. När vill ni resa, och hur flexibla är ni? (Month and flexibility; school holidays; green season option.)
3. Hur länge vill ni vara borta? (Nights.)
4. Har ni rest till Afrika eller långt bort förut? (Experience; sets pace and guided vs self-drive.)
5. Vad är det viktigaste för er på resan? (Safari, Kapstaden, vin, Garden Route, aktivt, avkoppling.)
6. Vill ni ha en guidad resa med svensktalande guide, eller en helt skräddarsydd resa? (Product fork.)
7. Har ni en ungefärlig budget per person i åtanke, inklusive flyg? (Use brackets: "under 35 000, 35-45 000, 45-60 000, över 60 000" as sound-out ranges [ASSUMPTION: real bracket edges from price analysis, strategy range 35-60k].)
8. Är det fler som ska vara med och bestämma? När vill ni ha beslutat? (Decision process and date.)
9. Har ni tittat på andra alternativ? (Competitor and price anchor; do not disparage.)

**Reflect and position (2 min):** summarise in the customer's own words, then say what makes the trip good for them (guide, inclusions, flexibility, support).

**Close with a dated next step (1 min)**
> "Jag skickar ett förslag senast [dag/tid]. Kan vi boka in 20 minuter [dag] för att gå igenom det tillsammans, så att du kan ställa frågor innan du bestämmer dig?"

Rules: never quote a firm price on the first call before the margin check; give a range with what is included. Note the pre-contract information duties (section 12) before any booking.

If no answer on the first call attempt: SMS/email within 10 min (consent allowing), second call attempt within 4 business hours, third attempt next day. Maximum 3 attempts in 48 h before moving to nurture.

## 6. Proposal and quote standard

1. **Itinerary library** (build Dec 2026-Feb 2027): 10, 14, 17, 21-day base itineraries (strategy P2 SEO hubs use the same set) plus modular blocks (Kapstaden, vingårdar, Garden Route, safari, Kruger/privata reservat, extensions). Consultants assemble and personalise, not rebuild from zero. Cuts the illustrative 3 h per quote [A18]; track actual time saved. Phasing (aligned with the timeline): 10- and 14-day v1 by 31 Dec 2026, 17- and 21-day and modular blocks by Q2 2027. Produce the itineraries once and share them with the SEO workstream so the cost is not paid twice (the strategy SEO content line is SEK 0.70 M in 2027).
2. **Proposal layout (one page summary + detail):** trip in one sentence for them; day-by-day; what's included and not included; named guide or adviser; price per person and total; payment schedule; what happens if something goes wrong (jourtelefon under resan; travel guarantee); validity date; clear next step.
3. **Price presentation:** show the full price including mandatory items so the number cannot be accused of being misleading; list value-adds separately and truthfully. Offer good/better/best options (two or three levels) on trips above a value threshold [ASSUMPTION], because buyers compare and an anchor on the middle option lifts average value without discounting. Test this.
4. **Margin check before sending (internal):** quote tool or sheet shows margin % and absolute margin. The 20% in G1 is a blended target, not a per-proposal rule; for this workstream a proposal under 20% needs Head of Sales approval so the blend holds [ASSUMPTION WS14-A17]. Per G1 and G5, CEO approval is needed for any product under 15% after partner commission and for ladder-entry departures (SEK 36-45k) under 18%. Margin is stored on the opportunity so the weekly dashboard can report order-book margin with order-book value (north star).
5. **FX and payment terms:** use the approved FX clause and 6% price buffer language once the FX policy is approved (target 20 Nov 2026; G3); published fixed prices only after FX policy.
6. **Cost-pass-through honesty:** price changes between proposal and booking are explained, not hidden.
7. **Proposal follow-up trigger:** sending a proposal creates the cadence automatically (section 7).
8. **Quote validity:** 7-10 days [ASSUMPTION] for peak-season trips with allocation at risk, longer for off-peak. Validity is tied to real supplier hold dates.
9. **Delivery of pre-contract information:** the standard travel-guarantee/package-travel information form is attached to the proposal itself, so the customer holds it before saying yes and before any deposit (strategy section 15 Legal item, R09). Legal confirms the exact timing requirement; until the form exists (Legal item due 31 Mar 2027) use the current company form.

## 7. Follow-up cadences

All cadences are created by CRM automation but the consultant makes the human touches. Every touch adds new information (a question answered, a photo, a lodge availability update, a review), not "just checking in". Cadence (R11 suggests D2/D7/D14/D21/D30 after quote): 

### 7.1 Post-proposal cadence (A and B leads)
| Day (from proposal) | Touch | Content |
|---|---|---|
| D0 | Email + calendar invite | Proposal with decision call booked |
| D1 | none unless asked | |
| D2 | Phone call (or SMS if call missed) | "Hann du titta igenom förslaget? Har du några frågor?" Resolve the first question |
| D7 | Email, personalised | Add value: a relevant guest story, a lodge photo set, a seasonal tip for their month |
| D14 | Phone call + email | Check decision process; offer a revised option (shorter, different lodge) rather than a discount |
| D21 | Email | Honest availability update on key lodges or flights for their dates (only if true) |
| D30 | "Avslutande" email | Polite close-out: keep the offer available, ask what held them back (feeds lost reasons) |
| D45, D60, D90 | Monthly nurture | Newsletter segment by interest; seasonal content |
| D180 | Reactivation | "Vill ni planera en resa till Sydafrika under 2028?" (year adjusted to the customer's window) |

Cadence shortens when the customer states a travel date within 3 months; it extends for 12-18 month planners (quotes made early should be re-priced and re-confirmed with supplier availability).

### 7.2 Enquiry without proposal (C leads, unqualified)
Day 0 auto-ack; Day 1 human check-in with 3 qualifying questions; Day 5 inspiration email (itinerary teasers); Day 14 invite to a webinar/kundkväll; then segment nurture (N1). No custom itinerary until a date or a bracket is given.

### 7.3 Abandoned quote-form recovery
Triggered if a visitor starts but does not submit the quote form and an email is already captured (consent permitting): email after 2 h with a one-click "boka samtal" link (abandoned-booking recovery claims are vendor figures, R11 section 5; test). Phone reply for those who left a number.

### 7.4 Booked-customer cadence (protects margin and referrals)
Booking confirmation same day; D7 welcome and what's next; 90, 60, 30 days pre-departure documents, extensions and insurance offer (L6); departure week check; day 3 of trip check-in; return D10-14 review plus referral request (gated by 4+ stars); month 10 anniversary and cross-sell (neighbouring countries or another long-haul trip) (strategy L7; R11 section 6).

### 7.5 Cadence governance
- CRM shows quote age; any quote without a touch in 7 days is flagged red on the consultant's board and on the Head of Sales weekly report.
- Do-not-contact respected immediately; consent flags logged (section 12).
- Maximum 1 SMS per week, 3 emails per month after D30 [ASSUMPTION].

## 8. Pre-sale lead generation tactics owned by this workstream

Channel generation (paid, SEO, social, creators, B2B) sits in workstreams 04-13 and 15+. This workstream adds the tactics that sit between marketing and sales:

1. **Reactivate existing demand:** the existing flow is ~2,025 enquiries in 2026, rising to ~2,148 by 2028 (strategy section 10); about three quarters of quoted enquiries do not book at a 25% close rate. First action is a 90-day "unconverted enquiries 2025-26" sweep. Consent caution: the existing-customer exception reported in R11/R09 applies to customers, and an unconverted enquirer is probably not a customer, so legal must decide whether the sweep is by phone/personal email only or needs fresh consent. Target: 3-5% of the cohort re-open [ASSUMPTION WS14-A11]. Sizing for orientation: ~1,215 unbooked quotes a year (1,620 x 75%) x 3-5% = ~36-61 re-opened, at a 25% close = ~9-15 bookings, ~SEK 0.9-1.5 M at ~SEK 99-101k. This is part of lever L2/L7 in the strategy bridge and is not additional to it; measure as incremental against a no-contact control group.
2. **Kundkvällar and webinars** (monthly from Jan 2027): "Sydafrika på ett kvällspass" with adviser and guide; capture registrations as S0 leads with consent; attendees are scored A/B by default. Budget SEK 120k in 2027. Coordinate with hosted departures (L5).
3. **Call-me-back widget and instant booking of discovery call** on every priority hub page (SEO workstream 04/05) and in paid landing pages.
4. **Lead magnets with a real qualifying hook:** "Rätt tid att resa till Sydafrika" month guide, "Vad kostar en Sydafrikaresa" budget calculator output, 10/14/17/21-day itinerary PDFs. Each ends with the booking-a-call CTA.
5. **Referral and "bring a friend" asks** at three moments: after trip (D10-14), at the pre-departure call, and after a positive review. Reward structure to be approved by CFO and legal (G2: promotions and discounts at most 2% of turnover [A20]).
6. **Partner and affinity referral desk (L8):** one-page SLA for partners: lead reply under 1 h, shared status link, commission paid from margin after floor check (G5). Pilot with 3-5 partners in Q2 2027.
7. **Hosted departures and fam-trip follow-up:** every attendee at a sales event gets a personal call within 48 h.
8. **Outbound to known past customers** (3-month and 10-month reactivation; one personal call to every customer in the top third by booking value in the last 24 months [ASSUMPTION WS14-A13; the threshold is set from CRM data, a fixed per-person figure is meaningless when trips cost SEK 35-60k]).

## 9. Objection handling

Method (LAER): Listen, Acknowledge, Explore, Respond. Never argue; ask the question behind the objection. Log every objection in a CRM picklist so patterns can feed marketing and product. The scripts below are starting points in Swedish; coach them as conversation, not as readout.

### 9.1 Playbook

| Objection | Explore | Response (Swedish) |
|---|---|---|
| "Det är dyrare än andra" | Compare what exactly? | "Förstår, och det är klokt att jämföra. Kan du berätta vad du jämför med? Då går vi igenom vad som ingår hos oss: [guide/boende/transfers/flexibilitet/jourtelefon]. Mitt mål är att du ska få rätt resa, inte den billigaste." Offer a lower-spec variant before any discount |
| "Vi kan boka flyg och hotell själva" | What do they value in DIY? | "Det går absolut. Skillnaden är vem som tar ansvaret om något går fel, och att vi känner lodgerna och kan hjälpa till direkt. Vår resa är dessutom skyddad av resegaranti. Vill du att jag räknar ut vad det blir om ni bokar allt separat?" (Offer a transparent comparison, do not disparage) |
| "Vi måste fundera/prata med [partner]" | What do they need to decide? | "Självklart. Vad tror du att [partner] kommer att undra över? Ska vi boka 15 minuter tillsammans med er båda, så jag kan svara direkt?" (Book the joint call) |
| "Är det säkert i Sydafrika?" | What have they heard? | "Det är en rimlig fråga. Vi går igenom hur vi lägger upp resan: förbokade transfers, rekommenderade områden och guider där det passar. Kolla gärna UD:s aktuella reseinformation också." Be factual; do not minimise. Provide the safety hub link |
| "Vi väntar på ett bättre pris / sista minuten" | What would make them book now? | "Jag vill vara ärlig: de mest eftertraktade lodgerna brukar bli fullbokade långt i förväg. Vill du att jag kollar aktuell tillgång för er period så du ser läget?" Say nothing about how many months ahead lodges sell out until Product confirms it from the company's own sold-out history (the 10-12 month figure in the strategy is from seller blogs, directional only). State availability only when verified against the held-supply register |
| "Valutan/priset kan ändras" | Concern about extra costs | "Priset är [fast/vilar på vår valutaklausul] och vi har en buffert inlagd. Jag skickar villkoren så du ser exakt vad som gäller." (Align with FX policy once approved) |
| "Ni har inte så många omdömen" | Trust | "Bra att du frågar. Vi har skickat svenska resenärer till Sydafrika sedan 2003. Jag kan gärna sätta dig i kontakt med två kunder som har rest med oss." (Trustpilot is 2.7 on 8 reviews today per R03, so do not point to Trustpilot until the review programme has lifted it; "sedan 2003" and any customer references must be verified with the CEO and the customers' consent before use. Review target 100+ at 4.5+ by 31 Dec 2027) |
| "Flygresan är för lång / barn" | Specific worry | Offer flight options (dual routing, overnight flights, stopovers), child-friendly itinerary and age-appropriate lodge policy check |
| "Vi är osäkra på vilken tid på året som passar" | Goals | Use the best-time hub; present two seasons side by side; offer green-season option for value (L10) |
| "Vi vill ha en billigare gruppresa" | Group vs tailor-made | "Vi har guidade resor med svensktalande guide också. Låt mig visa vad skillnaden är i pris och i vad som ingår." (Position guided departures at the ladder entry within G1 margin) |
| "Vi har bokat med andra" | Lost | Thank, ask what decided it, record the lost reason, enter 10-month reactivation |

### 9.2 Discount policy (G2)
No blanket discounts. Order of concession: (1) adjust the spec (room category, one night less, different lodge) with transparent change; (2) add a value-add funded from supplier rebate or marketing co-op; (3) a price movement only with Head of Sales approval, margin at or above the floors in G1/G5, and CFO sign-off for any campaign. Record every price concession on the opportunity. Competitor price-matching is a separate decision (strategy R03 suggests considering an open-purchase or price-match equivalent after margin review); not introduced by this workstream.

### 9.3 Closing techniques that fit a consultative sale
- Ask for the booking explicitly on the decision call: "Ska jag reservera detta åt er?"
- Offer a no-obligation hold only when the supplier hold is real, with the true expiry.
- Make the deposit step easy: payment link, instalment info (deposit plus balance and several payment methods are recommended by R11 section 4).
- After yes: confirm same day, send the payment link and booking confirmation, name the person who handles documents. The pre-contract information form has already been sent with the proposal (section 6.9).

### 9.4 Lost-reason taxonomy (mandatory on S->L)
Price (vs specific competitor), found cheaper DIY, timing/date change, travel decision postponed, safety concerns, destination changed, no response after 3 attempts, supply unavailable, product mismatch, chose competitor (name), personal reasons, other (free text). Weekly review by Head of Sales; monthly summary to growth council (strategy section 16.3).

## 10. Coaching, quality and capacity

1. **Baseline (Nov-Dec 2026):** pull the actual SA team size, split with Pacific and MICE, handling hours per file, conversion by consultant and by source (strategy: due 30 Nov 2026). Rework reports best agents often convert 2-3x better than weaker ones (R11, tier C); verify with own data.
2. **Call recording and conversation review:** record and review (with consent notice) 5 calls per consultant per month, scored on a 10-item scorecard: opening, discovery depth, budget handled, next step booked, objection handled, margin awareness, claims accuracy, tone, CRM notes, compliance. Share best calls. Spend: SEK 60k in 2027 for tooling [ASSUMPTION].
3. **Weekly 45-minute pipeline review** (Head of Sales): open quotes by age, hot A leads, stuck deals, lost reasons, SLA breaches.
4. **Monthly role-play and objection clinic**; external sales coach for two half-days in Q1 2027 (SEK 120k incl. prep).
5. **Mystery shop** quarterly: 5 anonymous enquiries via form and phone, scored on speed, quality, accuracy of claims, compliance (SEK 30k/yr).
6. **Capacity guard (G9):** after the first 60-day baseline, Head of Sales sets a maximum number of active open quotes per consultant. Planning proxy: ~2,680 quotes in 2028 across ~9.1 consultant-equivalents, ~295 quotes per consultant-year (~25 per month); derived from assumptions, not a headcount. [ASSUMPTION: replace with actual data.] If quotes per consultant exceed the cap, paid media scale-ups pause.
7. **Hiring link:** consultant #1 starts 1 Feb 2027 (pre-approved); #2 at Gate 1 (31 Mar 2027) to start by 1 Aug 2027. Onboarding plan: 2 weeks shadowing, 2 weeks supervised, full load at week 8; assign a buddy; pre-built itinerary library and scripts cut ramp time.
8. **Workload reduction before hiring:** quote templates, itinerary library, automated follow-ups, standardised booking files (strategy 13.3); target 25% fewer hours per quote by end-Q2 2027 [ASSUMPTION].
9. **Peak rota:** shared capacity calendar with MICE and Pacific; mark southern-hemisphere summer overlap weeks; escalation rules agreed by Head of Sales and MICE lead.
10. **Consultant incentives:** a team-level bonus on order-book margin plus SLA and review score, and an individual component on conversion, so volume is not bought with discounting [ASSUMPTION; HR and CFO to design; avoid pure revenue-based pay].

## 11. CRM, tooling and data

Dependent on CRM workstream (CRM manager); requirements this workstream sets:

| Requirement | Detail | By |
|---|---|---|
| Single lead record | Source/UTM, consent flags, trip details, budget bracket, quote value, margin, quote age, lost reason (R11) | 30 Nov 2026 v1; 31 Jan 2027 full |
| Auto-ack and assignment | Time-stamped, round-robin by trip type with tier routing | 20 Nov 2026 |
| SLA timer and escalation | Business-hours clock; alerts at 2 h and 4 h | 20 Nov 2026 |
| Cadence automation | D2/D7/D14/D21/D30 tasks created on proposal send | 31 Dec 2026 |
| Quote tool | Proposal template with margin display and approval status | 31 Jan 2027 |
| Click-to-call / call recording | Telephony integrated to CRM | 31 Jan 2027 |
| Booking calendar | Consultant calendars embedded on site | 15 Dec 2026 |
| Offline conversion import | Bookings back into ad platforms for ROAS and holdout | 31 Jan 2027 |
| Dashboard | Response time, quote rate, close rate by consultant and by source (existing vs new), pipeline by travel month, order-book margin | 31 Jan 2027; weekly v0 by 30 Nov |

Current CRM/booking system capability is unknown; confirm whether it can trigger automations (R11 unknown 5) before any purchase; no irreversible tool contract before 31 Jan 2027.

## 12. Compliance and trust (flags for legal review)

All Swedish legal points below are flags from research and vendor summaries (R09, R11), not legal advice; the legal adviser confirms before launch.

- **Marketing consent:** the Swedish Marketing Act is reported to require prior consent for marketing email to natural persons, with an exception for existing customers and similar products if an opt-out is offered (https://getrebelos.com/blog/b2b-email-rules-sweden, https://revexa.io/en/blog/is-cold-email-legal-in-sweden; vendor summaries). Build consent capture into every form and quote; log it.
- **Phone:** check telemarketing rules and the NIX-Telefon register before outbound reactivation calls (R11).
- **GDPR:** lawful basis, retention for lost leads, call-recording notice, access and deletion routines.
- **Package travel law (R09):** the standard pre-contract information form and travel-guarantee information before booking; terms on deposits, instalments and FX clause; the organiser's liability for correct performance; upsell flows designed with package-law boundaries (strategy section 15 Legal).
- **Misleading claims:** "svarar inom en timme" only when the SLA is met; no unsupported superlatives (Konsumentverket, R08); scarcity statements must be true; fixed-price promises only after the FX policy.
- **Price transparency:** the quoted total includes mandatory costs.

## 13. Timeline

| Date | Milestone | Owner (role) |
|---|---|---|
| 2-6 Nov 2026 | Data request issued for funnel, consultant and source baseline; name SLA owner and rota lead | Head of Sales + CRM manager |
| 12 Nov 2026 | Travel News Market Stockholm: gather three MICE leads and partner leads for routing tests | Head of Product + MICE lead |
| 13 Nov 2026 | Lead intake audit: where enquiries arrive, who answers, current response times (one-week manual log) | Head of Sales |
| 20 Nov 2026 | Speed-to-lead SLA live (auto-ack, rota, escalation) | Head of Sales |
| 30 Nov 2026 | Tracking v1, stages and lost reasons live; baseline numbers in | CRM manager |
| 1 Dec 2026 | Discovery-call script and objection playbook v1 in use; paid test (SEK 100k) lands on pages with a call-back request form and phone number (the embedded booking calendar follows 15 Dec) | Head of Sales / Head of Marketing |
| 15 Dec 2026 | Gate 0 baseline pack: close rate by source and consultant, handling hours, quote age | Head of Sales + CFO |
| 31 Dec 2026 | Cadence automation live; itinerary library v1 (10 and 14 days); review requests wired | CRM manager / Head of Product |
| 31 Jan 2027 | Quote tool with margin display; dashboard full; call recording; partner SLA one-pager | CRM manager |
| 1 Feb 2027 | Consultant #1 starts; onboarding plan | Head of Sales |
| Feb 2027 | First monthly kundkväll; external coaching day 1 | Head of Sales |
| 31 Mar 2027 | Gate 1 (sales inputs to the strategy gate): 2027 order book at least 24 MSEK; SLA met 4+ weeks; close rate trend by source; margin on new bookings at least 19%; marketing per booking within cap; hire #2 and booking-ops release decision | Head of Sales / CEO |
| Q2 2027 | Partner pilot of 3-5 partners; MICE cross-sell test with 3 named accounts; itinerary library 17 and 21 days; mystery shop 1 | Head of Sales / MICE lead |
| 30 Jun 2027 | Gate 2: 2027 order book at least 36 MSEK; cumulative programme net contribution no worse than -3.0 MSEK (G10); 80% of quotes with 4+ touches; close-rate lift on existing flow at least +1 pp | Head of Sales |
| 1 Aug 2027 | Consultant #2 starts (full load about week 8; productive by Q4 2027 per strategy 13.3); booking-ops coordinator starts | Head of Sales |
| Q4 2027 | Peak planning for 2028-departure enquiries; SLA tightened to under 30 min | Head of Sales |
| 31 Dec 2027 | 2028 order book at least 19 MSEK (core); close rate existing flow at 26% (2027 average) | Head of Sales |
| 2028 | Close rate 27% on existing flow; new traffic 18%; consultant +1 as per plan; repeat share at ~20% | Head of Sales / CRM manager |

## 14. Owners (by role)

| Role | Responsibility |
|---|---|
| Head of Sales (A) | SLA, scripts, cadences, coaching, close rate, capacity cap |
| CRM manager (R) | Stages, automation, dashboards, consent flags |
| Travel consultants (R) | Discovery calls, proposals, follow-up, CRM hygiene |
| Rota lead (R) | Evening/weekend coverage, escalation handling |
| Head of Marketing (C) | Lead quality feedback loop, landing pages and CTAs |
| SEO/Web lead (C) | Form, calendar button, chat on hub pages |
| Head of Product (C) | Itinerary library, supply availability for quotes |
| CFO (C) | Margin floors, discount rules, FX clause, bonus design |
| Legal/Ops (C) | Consent, pre-contract information, call recording |
| MICE lead (C) | MICE routing and cross-sell test |
| CEO (I/approver) | Resourcing, gate decisions |

## 15. Budget (SEK) [ASSUMPTION unless stated]

Costs are planning estimates, not quotes. Tool lines overlap with the strategy's CRM/tech envelopes (CRM automation 0.30 MSEK per year; technology builds 0.6 MSEK in 2027 and 0.3 MSEK in 2028, to be quoted; strategy sections 11 and 12), and the CFO reconciles to avoid double counting. Salaries of the +5 FTE are in the strategy cost base and not repeated here.

| Line | 2027 | 2028 | Note |
|---|---|---|---|
| CRM seats, automation, quote tool configuration | 120,000 | 150,000 | Inside CRM/tech envelope if possible |
| Telephony, call recording, conversation review | 60,000 | 80,000 | |
| Live chat and booking widget | 40,000 | 50,000 | |
| Coaching and training (external) | 120,000 | 100,000 | 2 half-days Q1 2027 plus clinics |
| Mystery shop and QA | 30,000 | 40,000 | |
| Peak rota allowances (evenings and weekends) | 150,000 | 200,000 | Approx. 12 peak weeks; HR to confirm model |
| Kundkvällar and webinars | 120,000 | 180,000 | Venue, production, guide time |
| Itinerary library and templates (content, photos, copy) | 150,000 | 60,000 | |
| Lead magnets and call-booking assets | 60,000 | 40,000 | |
| Contingency (10%) | 85,000 | 90,000 | |
| **Total** | **~935,000** | **~990,000** | About 1.9% of 48 MSEK in 2027 and 1.5% of 64.4 MSEK in 2028 |

**Reconciliation to the strategy envelopes (reviewer addition).** The strategy cost table (section 12.1) has no line for sales-process costs: it covers marketing above baseline, headcount, technology builds (0.6 / 0.3 MSEK), CRM automation (0.30 / 0.35 MSEK inside marketing), fees and in-trip support. Only the tool lines here (CRM seats, telephony and recording, chat and booking widget: SEK 220k in 2027, 280k in 2028) can plausibly sit inside the CRM and technology envelopes. The remaining lines (coaching, mystery shop, rota allowances, kundkvällar, itinerary library, lead magnets, plus pro-rata contingency) are about SEK 0.69 M in 2027 and 0.68 M in 2028 and are **not in the strategy P&L** unless the CFO moves them into the marketing lines (kundkvällar and lead magnets are the closest fit; the itinerary library overlaps the SEO content line). At the 20% margin case the strategy 2027 net is -1.70 MSEK against a 3.0 MSEK loss budget (G10), i.e. 1.3 MSEK of headroom; this workstream uses 0.7 MSEK of it if all is incremental (up to 0.9 MSEK if the tool lines are also outside the envelopes). At the 18.5% case (-2.42 MSEK) the loss budget would be breached. To stay inside G10 the discretionary lines are split:

| 2027 | Committed now (SEK) | Gated to Gate 1, 31 Mar 2027 (SEK) |
|---|---|---|
| Tools (CRM, telephony, chat) | 220,000 | 0 |
| Coaching (day 1 only) | 60,000 | 60,000 (day 2 and clinics) |
| Mystery shop and QA | 30,000 | 0 |
| Rota allowances | 75,000 (Jan-Mar peak) | 75,000 (remaining peak weeks, if enquiry volume confirms) |
| Kundkvällar | 60,000 (first 3 events) | 60,000 |
| Itinerary library | 150,000 | 0 |
| Lead magnets | 30,000 (first 2 assets) | 30,000 |
| Contingency (10% of committed) | 63,000 | 23,000 |
| **Total** | **~688,000** | **~248,000** |

The split is [ASSUMPTION WS14-A9] and sums to the ~935,000 above. No spend line here is credited with turnover beyond L2; the case is the return check below.

Return check: if the workstream lifts close rate on existing flow from 25% to 27% (L2, +3.5 MSEK turnover in 2028), at 20% margin that is ~0.7 MSEK gross margin against ~1.0 MSEK of workstream cost; the case rests on speed and follow-up also protecting the new traffic that other levers pay for, and on lower hours per quote deferring a hire. Cost to be tracked; if the 2027 lift in close rate is below +1 pp by Gate 2, cut the discretionary lines (events, coaching second day) by half.

## 16. KPIs

| KPI | Definition | Baseline | Target |
|---|---|---|---|
| First human reply (business hours) | median and 90th percentile | unknown; measure from 13 Nov 2026 | SLA live 20 Nov 2026; 90% under 1 h by 31 Jan 2027 (rolling 4 weeks); under 30 min for 90% by end-2027 |
| Auto-ack coverage | share of enquiries acked under 60 s | unknown | 100% |
| Enquiry to discovery call | share held within 24 h | unknown | 60% of A/B by Q2 2027 [A] |
| Quote rate | qualified enquiries receiving a proposal | 80% planning [A10] | 80% (guard against 85% if it hurts margin) |
| Close rate, existing flow | bookings / quotes | 25% [A10] | 26% (2027), 27% (2028) |
| Close rate, new traffic | bookings / quotes | none | 18% |
| Close rate by consultant | spread of best vs median | unknown | narrow the gap; coach bottom quartile |
| Time to proposal | hours from discovery call | unknown | 24-48 h |
| Quotes with 4+ touches | share | unknown | 80% (Q2 2027), 95% (end-2027) |
| Quote age at last touch | days | unknown | no open quote older than 7 days without touch |
| Quote to booking lag | median days | unknown | track; adjust cadence |
| Order-book margin on new bookings | % | 20% planning [A7] | at or above 19% at Gate 1; 20% blended |
| Discount rate | price concessions as % of turnover | unknown | promotions at most 2% (G2) |
| Referral/repeat share | share of bookings | ~15% today [A]; ~20% target | ~20% by 2028 |
| Review ask completed | post-trip | | 100% |
| CSAT after proposal call | 1-5 | | 4.5+ [A] |
| Reactivation yield | bookings from lost/cold leads | none | 3-5% of reactivated cohort re-open [A] |
| SLA breaches | enquiries outside 1 h | | below 10% |
| Close rate at 30 / 60 / 90 days, net of cancellations | bookings kept / quotes, by quote cohort, existing vs new | unknown | report from Gate 0; targets as for close rate once lag known |
| Open quotes per consultant vs cap | active open quotes / cap set by Head of Sales (G9) | cap set after 60-day baseline (about end Jan 2027) | at or below cap; breach pauses paid scale-ups |
| Handling hours per quote | hours from time study | 3 h illustrative [A18] | 25% lower by end-Q2 2027 [ASSUMPTION] |
| Lost-reason completeness | lost records with a valid reason from the taxonomy | none | 100% of lost records; weekly audit |
| Call review completion | reviewed calls / planned 5 per consultant per month; scorecard average | none | 100%; average at or above 8 of 10 [ASSUMPTION] |
| Abandoned-form recovery | recovered enquiries / abandoned forms with captured email | none | measure on first 60 days; test against no-email control |
| Kundkväll yield | registrations, attendance, S2 leads and bookings attributed (90 days) | none | cost per attributed booking at or below SEK 20,000 (G4 marginal cap) |
| Partner lead handling | share of partner leads answered under 1 h; partner-sourced close rate | none | 90% under 1 h; close rate tracked against 45-60% referral benchmark (R11, tier C) |
| Reactivation cohort | bookings from reactivated unconverted enquiries vs no-contact control | none | 9-15 bookings in 2027 would equal the sizing in section 8.1 [ASSUMPTION] |
| Sales cost ratio | section 15 spend / turnover and per booking | n/a | at or below 1.9% of turnover (2027) and 1.5% (2028) |

Reporting: weekly dashboard (one page) with order-book vs plan and order-book margin, response time, close rate by source and by consultant, pipeline by travel month; monthly to growth council.

## 17. Assumptions register

| ID | Assumption | Rationale | Replace with |
|---|---|---|---|
| WS14-A1 | Current first-response time is unknown; business hours 08:30-17:30 Mon-Fri | No company data; typical | Actual rota and response log |
| WS14-A2 | Close rate 25% existing, 18% new, quote rate 80% | Strategy A10 | CRM data by source |
| WS14-A3 | Peak enquiry season Jan-Mar | Common for Swedish long-haul winter booking; no data | Monthly enquiry series |
| WS14-A4 | Tier scoring thresholds and budget brackets | Needed to start; calibrate | 60 days of data |
| WS14-A5 | 3 h per quote, 8 h per booking | Strategy A18 | Time study |
| WS14-A6 | ~295 quotes per consultant-year | Derived from section 13.1 units | Actual team and quote counts |
| WS14-A7 | Quote validity 7-10 days for peak trips | Practice | Supplier hold terms |
| WS14-A8 | Cadence frequency limits (1 SMS/week, 3 emails/month after D30) | Avoid fatigue and complaints | Unsubscribe and complaint data |
| WS14-A9 | Costs in section 15 and the committed / gated split | No quotes; split chosen to protect the G10 loss budget | Vendor quotes; CFO decision on which envelope each line belongs to |
| WS14-A10 | Repeat/referral share ~15% | Strategy | CRM |
| WS14-A11 | Lift of 3-5% from reactivating past unconverted enquiries | Vendor claims 5-15% for past travellers (R11, tier C) discounted | Pilot result |
| WS14-A12 | Consultant segment specialisation exists | Unknown | Skills matrix |
| WS14-A13 | CSAT target 4.5+, review ask rates, discovery-call hold rate 60%, call-score target 8 of 10, top-third customer value threshold for personal reactivation calls | Placeholders | Calibration from CRM |
| WS14-A14 | Incentive design (team margin component) | Prevents discounting | HR/CFO design |
| WS14-A15 | Evenings and weekends rota cost | Estimated | HR model |
| WS14-A16 | 90% under 1 h reachable by 31 Jan 2027 | Current response time unknown; rota and auto-ack are the levers; strategy outer limit Q2 2027 | One-week manual log from 13 Nov 2026 |
| WS14-A17 | Per-proposal margin approval at 20% (Head of Sales) | G1 sets 20% as a blended rule only | CFO / CEO decision |

## 18. Dependencies

- CRM/tracking build (CRM manager) and consent flags; offline conversion import for holdouts (Analytics lead).
- SEO/Web: quote form with budget bracket and "boka samtal" CTA on hubs by 31 Jan 2027; chat widget.
- Product: itinerary library, supply held register (Gate 0, 15 Dec 2026) so quotes and urgency claims are true.
- Finance: margin floors, FX policy (20 Nov 2026), guarantee forecast, payment methods and deposit terms.
- Legal: consent text, pre-contract information, call-recording notice, review of scripts' claims.
- HR: recruitment of consultant #1 (1 Feb 2027) and #2, rota model, incentive scheme.
- Marketing: Tranche B scaling blocked while SLA missed; lead-quality feedback loop; UTM discipline.
- MICE unit: shared capacity calendar, routing and cross-sell test.

## 19. Risks and mitigations

| Risk | Likelihood / impact | Mitigation | Trigger |
|---|---|---|---|
| Volume outpaces team; SLA breached | Medium-High / High | Capacity cap (G9), peak rota, templates before hires, pause paid scale-ups | 2 consecutive weeks of SLA breach reduces paid to Tranche A (G8) |
| Speed pushes quality down (rushed proposals) | Medium / Medium | Scorecard, call review, same-day outline not same-day full price | CSAT below 4.3 |
| Discounting to close | High / High | Concession ladder, margin shown on proposal, bonus on margin | Order-book margin below 19% |
| Close rate gain not realised (25% to 27%) | Medium / Medium | Test weekly; coach; cut discretionary spend by half at Gate 2 | Gate 2 shows under +1 pp |
| Dilution: new traffic closes below 18% | Medium / High | Separate reporting; tighten qualification; rely on holdout test before Tranche B | New-traffic close below 15% for 8 weeks |
| Consultant turnover, key-person dependency | Medium / High | Itinerary library and CRM notes; buddy system; retention plan | Any resignation |
| Legal breach (consent, calls, misleading claims) | Low-Medium / High | Legal review of scripts, consent logging, claims register | Complaint |
| False scarcity damages trust | Low / High | Verified availability only; supply register | |
| Data quality poor (lost reasons, stages) | High / Medium | Mandatory fields, CRM hygiene check weekly | >10% records incomplete |
| Tool lock-in before the baseline pack | Medium / Medium | No contracts before 31 Jan 2027 | |
| Shock case (38 MSEK 2027): too many consultants, too little demand | Low-Medium / High | Hire #2 only at Gate 1; flexible freelancers for peak [A] | Gate 1 miss |
| MICE/Pacific overlap in peak | Medium / Medium | Shared capacity calendar | |

## 20. First 30 days (2 Nov - 2 Dec 2026)

**Week 1 (2-6 Nov)**
1. Head of Sales confirms ownership; name rota lead. Issue the data request: monthly enquiries, quotes, bookings by source and consultant, response times, close rate by source, time to booking, current CRM capabilities, who answers phone/chat/email and when.
2. Start a manual response-time log (spreadsheet) for every enquiry from today; this is the baseline until CRM timestamps exist.
3. Write the one-page SLA and rota proposal; agree evenings/weekends cover for the Jan-Mar peak [A].
4. Audit the live quote form and phone path on sydafrikaresor.se: how many fields, what auto-reply is sent, where the form goes.

**Week 2 (9-13 Nov)**
5. Set up auto-acknowledgement text (Swedish). Until the SLA has been met four consecutive weeks (section 4.4) it must not promise one hour: "Tack för din förfrågan! [Namn] hör av sig så snart som möjligt, och senast nästa vardag kl. 09:30. Vill du hellre prata direkt kan du ringa [nummer] eller be om ett samtal här: [länk]." After four consecutive weeks at SLA, switch to "[Namn] kontaktar dig inom en timme på vardagar."
6. Run the intake audit; take the 13 Nov snapshot of average and 90th percentile response.
7. Attend Travel News Market (12 Nov) with a lead-capture routine and routing tags.
8. Draft stages, lost reasons and consent fields for the CRM manager.

**Week 3 (16-20 Nov)**
9. SLA live on 20 Nov: auto-ack, rota, 2 h and 4 h escalation, daily SLA email to Head of Sales and CEO.
10. Train all consultants (2 h) on discovery-call script and tiers; roll out the objection playbook v1.
11. Confirm margin floors and concession ladder with CFO; FX policy dependency flagged.
12. Pull first list of unconverted past enquiries for a reactivation sweep (legal sign-off first).

**Week 4 (23-30 Nov)**
13. Tracking v1: source/UTM and stage fields live; weekly dashboard v0 (response time, quotes sent, bookings by source).
14. Start the itinerary library (10- and 14-day v1 due 31 Dec 2026) and a spreadsheet proposal template with margin line (the quote tool follows 31 Jan 2027).
15. Define cadence tasks D2/D7/D14/D21/D30 in the CRM (manual task creation if automation not ready).
16. Agree test for 1 Dec paid pilot: landing pages route to a call-back request form and phone number ("boka samtal" calendar follows 15 Dec); enquiry source flagged as new traffic for separate close-rate tracking.

**Day 30 check (2 Dec):** Is first-reply time measured for every enquiry since 20 Nov, and is the share under 1 h at least 70% and rising (threshold is an [ASSUMPTION]; 90% is due by 31 Jan 2027)? Baseline close rate by source in hand? Cadence in use on 100% of open quotes? If not, keep paid media at the SEK 100k test and do not add Tranche A/B budget (G8 logic), and report to the CEO.

## 21. Sources

- https://resources.rework.com/libraries/travel-tour-growth/booking-conversion-metrics (funnel benchmarks, cadence, consultant variance; tier C)
- https://hbr.org/2011/03/the-short-life-of-online-sales-leads (speed to lead; B2B, old)
- https://resources.rework.com/libraries/lead-management/lead-response-time
- https://atlasperk.com/guides/crm-automation-for-travel/email-marketing/
- https://atlasperk.com/guides/crm-automation-for-travel/retention-loyalty/
- https://www.promodo.com/blog/tourism-marketing-benchmarks
- https://getrebelos.com/blog/b2b-email-rules-sweden
- https://revexa.io/en/blog/is-cold-email-legal-in-sweden
- Strategy `/home/user/MICE-Group/docs/00-strategy.md` (sections 4, 9-16, G1-G10) and research files R03, R09, R10, R11, R12.
