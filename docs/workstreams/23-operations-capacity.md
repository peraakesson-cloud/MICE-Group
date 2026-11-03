# 23 - Operations and capacity planning for 2x bookings (sydafrikaresor.se)

Inherits: `/home/user/MICE-Group/docs/00-strategy.md` (north star order book plus margin; gate G8 service quality and G9 capacity; risk R1 sales and booking-handling capacity; sections 13.1-13.6, 15, 16). Evidence base: `research/11-conversion-crm.md`, `research/05-product-supply.md`, `research/09-regulation-trust.md`. Related workstreams: 02 (product and supply), 13 (email/CRM automation), 14 (lead-gen and sales SLA), 16 (analytics and order-book dashboard), 18 (airline partnerships), 22 (customer experience and in-trip service), 24 (org and hiring; owns variable capacity and hours-per-file target), 25 (tech stack; owns systems architecture, change freeze and tech budget).
Date: 2026-11-02 (independently reviewed and corrected 2026-11-03; see section 16). English plan. No internal company data was available. Anything not sourced from the research files is marked [ASSUMPTION] and listed in section 13 for the CEO to replace with real data. Tool names are categories or examples, not recommendations of a vendor; no tool inventory exists.

---

## 1. Why this workstream exists

1. **People, not media, are the binding constraint** (strategy section 1, fact 5). Core 2028 is 637 bookings against 405 in 2026 (+57%), and stretch is 790. The unit table in strategy 13.1 derives workload at 8,100 hours (2026), 13,130 (2028 core) and 16,910 (2028 stretch), i.e. 5.6, 9.1 and 11.7 consultant-equivalents at 1,450 productive hours each. These are derived from illustrative inputs (3 h per quote, 8 h per booking), not headcount.
2. **Hiring alone does not solve it.** Strategy 13.3: the first consultant starts 1 Feb 2027, the second and the booking-ops coordinator by 1 Aug 2027, and a new adviser is productive only after a ramp. The Nov-Mar enquiry peak and the January-February booking peak therefore fall on the existing team. The only levers that act before February 2027 are process, templates, automation and temporary capacity.
3. **Capacity gates spend.** G9: marketing scales only while quotes per consultant stay within a limit set by the Head of Sales after the first 60-day baseline. R11 (conversion research) says the largest conversion lever is sales execution (speed, follow-up, itinerary quality), which is exactly what overloaded teams lose first.
4. **Errors scale with volume.** The organiser is liable for remedying errors during the trip and for incorrect information (R09, section 2 and 6). A booking-file error rate that is tolerable at 405 bookings becomes a complaint and ARN stream at 790. Operations must therefore reduce errors, not just handle more files.
5. **Supply timing is an operations problem.** Allocation calls start the week of 2 Nov 2026 and the 2027 target is capped at held supply at Gate 0 (15 Dec). Release dates, rooming lists and DMC briefings are deadline-driven workflows that currently have no known system (unknown; see data requests).
6. **Pre-approved and unapproved money.** Strategy pre-approves one consultant (1 Feb 2027) and a booking-ops coordinator. Everything else in this plan is either claimed against the strategy's technology line (0.6 MSEK 2027, 0.3 MSEK 2028; shared with WS25, WS14, WS13 and WS16, so the claim is provisional until the CFO reconciles it, see section 10) or flagged in section 10 as an incremental ask.

---

## 2. Objectives and targets

All baselines are unknown. Numbers marked [A] are placeholders to be replaced from the 30 Nov 2026 handling-time pull and the Gate 0 baseline pack (15 Dec 2026).

| # | Objective | Measure | 31 Mar 2027 | 31 Dec 2027 | 31 Dec 2028 |
|---|---|---|---|---|---|
| O1 | Know the real workload | Measured hours per quote and per booking (time study of at least 40 files across consultants) | Baseline set | Re-measured quarterly | Quarterly |
| O2 | Cut effort per quote | Hours per quote (strategy placeholder 3.0) | 3.0 -> 2.8 [A] | 2.2 [A] | 2.2 |
| O3 | Cut effort per booking | Hours per booking from confirmed to documents issued (placeholder 8.0) | 8.0 -> 7.5 [A] | 5.5 [A] | 5.5 |
| O4 | Keep every enquiry inside SLA | First human reply under 1 h for 90% in business hours (strategy 4 and 15); instant acknowledgement for 100%. Two consecutive weeks below 90% is a G8 breach (section 4.3) | 90% | 90%, peak weeks included | 90% |
| O5 | No quote ages out | Share of open quotes with a follow-up action due and done on cadence D2/D7/D14/D21/D30 | 85% [A] | 95% [A] | 95% |
| O6 | Booking-file quality | Files with at least one correction after confirmation (name/passport mismatch, wrong dates, wrong room type, missing supplier confirmation) | Baseline; under 6% [A] | under 3% [A] | under 2% [A] |
| O7 | Documents on time | Final documents 21+ days before departure (shared with WS22 C5) | 90% | 98% | 98% |
| O8 | Supply deadlines never missed | Allocation release/option dates actioned 14 days before the deadline | 100% of register | 100% | 100% |
| O9 | Capacity is visible and acts | Weekly capacity state (green/yellow/red) published; yellow and red trigger the actions in section 9 | Live | Live | Live |
| O10 | Productivity per consultant rises | Bookings handled per consultant-FTE per year (placeholder: 2026 405 / SA team size unknown) | Baseline | +25% vs baseline [A] | +40% vs baseline [A] |
| O11 | Hiring on time | New consultant at the team-median quote-to-book rate (within 10 percentage points) by end of month 4 and at full planned load from month 5 (ramp in 4.1) | Consultant 1 started 1 Feb (median rate by 31 May) | Consultant 2 productive by Q4 (start by 1 Aug) | Hire 3 and product/contracting manager productive |
| O12 | Quote turnaround | Fast-track quote sent within 4 working hours of a qualified brief for 90%; bespoke first draft within 2 working days (WS22 S2) for 90% [A] | 85% | 90% | 90% |
| O13 | Service outcome of operations | Complaints and ARN cases per 1,000 travellers (G8; threshold set from the baseline, reported by WS22) and file-related share of complaints | Baseline | Within G8 threshold | Within G8 threshold |
| O14 | Changes handled | Change request answered per WS22 S1 and a complete proposal (supplier re-confirmed) within 2 working days | 90% [A] | 95% [A] | 95% |
| O15 | Cash discipline | Share of files with balance paid by due date; files with unpaid balance at 0 days escalated the same day | 95% [A] | 97% [A] | 97% |
| O16 | Supply exposure within cap | Prepaid/at-risk supply against the CFO cap (SEK 4 M [A], G7); register exposure reported weekly | 100% within cap | 100% | 100% |
| O17 | Tool adoption | Share of quotes built from library/kit and of bookings with a complete file in the booking system (no off-system work) | 70% [A] | 90% [A] | 95% [A] |
| O18 | Team load is sustainable | Overtime hours and sick leave per FTE in Jan-Mar and Nov-Dec; share of reserve (item 11) used; voluntary attrition in the SA team. Any adviser above agreed overtime limit for 2 weeks triggers yellow [limits: HR, labour rules unknown] | Baseline | Within limits | Within limits |

Workload effect of O2 and O3 (illustrative, strategy volumes):

| Case | Quotes / bookings | Hours at 3.0 and 8.0 (no change) | Hours at 2.2 and 5.5 | Consultant-eq. no change | Consultant-eq. after |
|---|---|---|---|---|---|
| 2028 core | 2,680 / 637 | 13,136 | 9,400 | 9.1 | 6.5 |
| 2028 stretch | 3,530 / 790 | 16,910 | 12,111 | 11.7 | 8.4 |
| 2027 core (strategy section 10: about 2,440 enquiries x 80% = 1,952 quotes; 485 bookings) | 1,952 / 485 | 9,736 | 8,373 at 2.6 and 6.8 (2027 average of the glide path) | 6.7 | 5.8 |

Planning case for hiring gates (use this, not the target case): the automation catalogue in 7.3 nets to about 2,800 hours in 2028 core, so required hours are about 10,340 (7.1 consultant-equivalents, about 21% below no-change). That matches the 20% hours-per-file reduction target in WS24 (section on metrics, "-20% by Q4 2027"), which is the figure to be used for gate decisions. The O2/O3 targets here (-27% per quote, -31% per booking) are stretch targets for the operations lead; if the time study shows WS24's -20% is not reached, hires are not cancelled (OR11) but later hires are not accelerated either.

| 2028 core | Hours | Consultant-eq. | vs no change |
|---|---|---|---|
| No change (3.0 / 8.0) | 13,136 | 9.1 | 0% |
| Planning case (net automation 2,800 h; WS24 -20%) | about 10,340 | 7.1 | -21% |
| Target case (O2/O3: 2.2 / 5.5) | 9,400 | 6.5 | -28% |

Reading: reaching the target case removes about 3,700 hours in 2028 core (about 2.6 consultant-equivalents); the planning case removes about 2,800 (about 1.9). The purpose is to make the pre-approved and gated hires productive earlier and to keep the 2028 stretch case (11.7 consultant-equivalents without gains, 8.4 with target gains) within what can be staffed, not to cancel hires. Two caveats: (a) the 3 h and 8 h definitions in strategy 13.1 count only quoting and booking handling; pre-departure servicing, supplier chasing, guided-departure briefings, supply administration and in-trip work come on top, so true demand for hours is higher and the time study must capture it; (b) the baseline team size (5.6 is derived from placeholders, not headcount) is unknown. If measured hours are lower than the placeholders the saving is smaller; the time study decides.

---

## 3. Operating model: the five flows

Operations for the SA business is five connected flows. Each has one named owner role and one measurable output. Shared pools with Pacific and MICE are marked.

| Flow | Scope | Output | Owner (role) |
|---|---|---|---|
| F1 Lead-to-quote | Enquiry capture, routing, qualification, itinerary build, quote, follow-up | Quote sent within SLA, follow-up cadence executed | Head of Sales |
| F2 Quote-to-booked | Acceptance, payment, passenger data, supplier confirmations, travel guarantee and information form | Clean, confirmed booking file | Booking-operations coordinator (until hired: Head of Sales delegate) |
| F3 Supply and allocation | Allocation register, release dates, rate cards, DMC briefing, rooming lists, air seat management | Held supply known, deadlines met, no overselling | Head of Product (Head of Air for flights) |
| F4 Booked-to-departed | Touchpoints, documents, changes, final payment, pre-departure briefing | Documents on time, no silent weeks (WS22 C4/C5) | CRM manager with booking-ops |
| F5 In-trip and after | Jourtelefon, DMC and guide liaison, incident handling, post-trip close | Incident SLA, closed files, review/referral triggers (WS22, WS12) | In-trip desk lead |

Cross-flow finance: payment schedule, supplier payments, FX hedging at confirmation, guarantee reporting and reconciliation sit with the CFO (strategy G3, G4). Operations supplies the data (order book by departure month, currency exposure, deposits) and does not own the policy.

---

## 4. Capacity model and demand calendar

### 4.1 Model

One shared spreadsheet first (owner: Head of Sales, built by 30 Nov 2026), moved into the dashboard of WS16 by 31 Jan 2027. It has four tabs.

1. **Demand.** Enquiries per week (actual and forecast), quote rate (80% [A10]), close rates (existing flow 25% to 27%, new traffic 18%, strategy A10), departures per week, guided departures, in-trip travellers per week.
2. **Effort.** Hours per quote, per booking, per pre-departure file, per in-trip incident, per guided departure (briefing and DMC liaison). Starts with strategy placeholders 3.0 and 8.0 and is overwritten by the time study (action 1.1).
3. **Supply of hours.** Named people, share of time on SA vs Pacific vs MICE, holiday plan, productive hours (strategy 1,450 per FTE [A23]), ramp factor for new hires (50% months 1-2, 75% months 3-4, 100% from month 5 [A]).
4. **Result.** Weekly utilisation = demand hours / supply hours, capacity state, and forward 13-week view.

### 4.2 Peak calendar

Southern-hemisphere summer overlaps Pacific and MICE peaks (strategy 13.3). A shared capacity calendar marks, for each week of 2027 and 2028: enquiry peak (Nov-Mar [ASSUMPTION; strategy A16 gives this window for paid spend share, not enquiries; confirm with weekly enquiry history]), departure peaks (festive, and Jun-Sep per strategy 13.2), guided departures, MICE events, annual leave blackouts. Rules [ASSUMPTION, to be agreed with Head of Sales and MICE lead by 15 Dec 2026]:
- No leave blackout for SA advisers for more than one person at a time in Jan-Mar and Nov-Dec.
- MICE and Pacific borrowing of SA advisers is allowed only in green weeks; SA borrowing from them needs the owner of that unit to agree by Monday of the preceding week.
- A single weekly 30-minute capacity review (Monday), attendees Head of Sales, booking-ops coordinator, in-trip desk lead, Head of Product, CRM manager.

### 4.3 Capacity states (feeds G8 and G9)

Thresholds are placeholders until the 60-day baseline is done (G9 says the Head of Sales sets the limit).

| State | Definition [ASSUMPTION thresholds] | Required action | Effect on marketing (G9) |
|---|---|---|---|
| Green | Weekly utilisation under 85%; SLA met 90%+; open quotes per consultant under 38; oldest unanswered enquiry under 1 working hour | Normal | Budget may scale per plan |
| Yellow | Utilisation 85-100%, or SLA 80-90% for one week, or open quotes per consultant 38-45, or any adviser at 100% of the WS22 file cap | Switch on overflow (section 8): temp capacity, auto-reply with booked call slot, defer non-urgent MICE/admin tasks, pause new outbound campaigns | No increase to Tranche B or new campaigns; existing run |
| Red | Utilisation over 100%, or SLA under 80%, or open quotes per consultant over 45, for two consecutive weeks; **or SLA below 90% for two consecutive weeks (this is the G8 hard-gate breach and overrides yellow)** | Head of Sales declares red to CEO; hiring/overflow escalation; lead form switches to "boka samtal" or waiting list with honest response time (copy in section 14A) | Paid media reduced to Tranche A only (G8); budget is not moved while the SLA is missed (strategy 11.2) |

The 45 open-quote cap and the WS22 file caps (55 pre-departure and 12 in-trip files per adviser) are starting assumptions [A] to be replaced by data. WS14 uses about 25 quotes per consultant-month as a proxy and WS24 describes the same G9 cap method; the Head of Sales sets one number after the 60-day baseline and all three plans adopt it. When a cap is hit, new leads route to the next adviser; when all are at cap, yellow is triggered.

---

## 5. Process design and standard work

### 5.1 F1 Lead-to-quote (with WS14)

- **Single intake.** All enquiry sources (form, phone, chat, email, partner leads, social DM) create one CRM lead with source, consent, party size, month, budget bracket and interest (strategy P3). Duplicate detection on email and phone.
- **Routing.** Rules by language/segment and current load, not by who sees it first: (a) top-value or complex leads (45+ k per traveller, 4+ travellers, tailor-made, 55+ small-group) to senior advisers; (b) ladder-entry guided departures (SEK 36-45k) to any adviser using a quote kit; (c) partner leads to named partner owners. Routing top leads to the best converters and coaching the rest is expected to be cheaper than hiring; the basis is a vendor claim that best agents convert 2-3x better than weaker ones (R11, Rework, Tier C, unverified), so measure the spread by adviser before relying on it.
- **Two-speed quoting.**
  - *Fast track* (published guided departures and ladder products): quote assembled from a fixed template in a target of 30 minutes of adviser time [A, validated in the time study], price from a rate-card, availability checked against the allocation register.
  - *Bespoke track* (tailor-made): modular itinerary library; first draft in 24-48 hours (R11 practical model; WS22 S2 commits to 2 working days), one revision loop, scheduled decision call.
- **Itinerary library.** 25-30 modular itineraries and day-blocks [A] covering the 10/14/17/21-day routes, Garden Route, safari, Cape Winelands, family malaria-free, KZN, Eastern Cape, extensions (strategy P2/P4). Each block carries current supplier, net rate, sell price, margin and date of last rate check. Owner: Head of Product; built with a freelance travel-content planner [A]; first 12 by 31 Jan 2027, full set by 31 Mar 2027. Margin is shown to the adviser on every quote (strategy G1) and a quote below the product margin floor needs approval per rule in section 9.4.
- **Follow-up cadence.** D2/D7/D14/D21/D30 after a quote, automatically scheduled as tasks (not emails alone) with templates; abandoned-enquiry recovery from WS13. Quote age is visible on the adviser's dashboard; at 21 days with no response an automatic "keep or close" prompt.
- **Visible SLA board.** Time-to-first-contact per adviser, quotes outstanding, quote age, and close rate by adviser and source (strategy 4 metric tree). Used in coaching, not as a league table of blame.

### 5.2 F2 Quote-to-booked

Standard booking file, one template for all SA bookings, with mandatory fields and a gate before status "Confirmed".

1. **Acceptance and deposit.** Payment link with deposit and balance dates explicit; FX clause in plain Swedish (strategy G3 and 11.3; legal wording by Legal). Confirmation to customer within 1 working day (WS22 stage 4).
2. **Passenger data.** Names exactly as in passport, passport check against the entry rule (Swedish embassy: valid 30 days beyond departure from South Africa, two blank pages, visa-free up to 90 days, per research/01 citing https://www.swedenabroad.se/sv/om-utlandet-f%C3%B6r-svenska-medborgare/sydafrika/reseinformation/ambassadens-reseinformation/; airlines and transit countries may require more, so verify per routing), date of birth, contact, emergency contact, special needs, dietary. Collected through a secure form, not email attachments.
3. **Four-eyes check.** The booking-ops coordinator (until hired, a second adviser; the time, estimated at 0.3-0.5 h per file [A], is included in the 8 h per booking and tracked in the time study) checks every file against a 12-item checklist before supplier confirmations are requested; sample 100% until the file error rate is under 3% for 3 months, then 25% random plus all files over SEK 150k [A].
4. **Supplier confirmations.** Requests via the DMC/lodge portals or standard e-mail templates; every service has status Requested / Confirmed / Waitlist; a file cannot reach "Documents issued" with open items. Overdue confirmation (48 hours [A]) alerts the owner.
5. **Statutory information.** Standard information form for package travel and link to travel-guarantee information issued with every offer/confirmation (R09; the existing information form is used until the legal review by 31 Mar 2027 per strategy 15, so no offer goes out without one). Any upsell flow is checked against package-law consequences (strategy P6).
6. **Margin lock.** Net cost, currency, hedge flag and gross margin recorded on the file at confirmation; this is what feeds the order-book-with-margin north star.

### 5.3 F3 Supply and allocation operations (with WS02, WS18)

- **Allocation and release register** (owner Head of Product; first version by 15 Dec 2026, Gate 0). Fields: supplier, product/room type, dates, units held, option date, release date, deposit paid (SEK) against the prepaid cap SEK 4 M [A], contract status, currency, rate, cancellation terms, contact, last confirmed date. Colour rules: release date within 30 days red, 60 days amber. Alerts at 60, 30 and 14 days before every release or option date; the 14-day point is the deadline for the keep/release/re-offer decision (O8). Strategy contract policy: flagship 90-120 day release, mid-tier 60-90 (13.2).
- **Release actions.** Decision logged 14 days before every release date (alerts per above); weekly review in the Monday meeting; unsold units are re-offered via fast-track products, shoulder-season offers (strategy L10) or released.
- **Oversell protection.** The quote tool and booking file read the register (initially a manual check against the register; automated lookup in Phase 3); no fixed-departure seat or room is quoted without a register check.
- **DMC and guide operations.** Per departure [A, standard-work targets to be validated with DMCs]: guide assignment confirmed 90 days out, DMC brief 60 days out, rooming list 30 days out, final manifest 14 days out. Per DMC: written peak capacity commitment, fallback vendor and scorecard by 28 Feb 2027 (strategy 13.6). Guide roster of 5-6 plus 2 reserves for about 41 guided departures in 2028 (strategy 13.5), with a guide calendar showing departures per guide (about 8 a year).
- **Air.** Block/seat inventory tracked in the same register; dual routing (Gulf plus European hub); schedule-change handling in section 5.5.

### 5.4 F4 Booked-to-departed

- Stage-based touchpoint schedule is owned by WS22/WS13; operations contributes the data triggers: confirmation, supplier confirmations complete, final payment due, documents ready, schedule-change flagged.
- **Final payment run.** Weekly list of files with balance due in 14/7/0 days; automated reminder; unpaid files at 0 days to the adviser for action. Cash reconciliation with the CFO.
- **Documents.** Auto-generated itinerary and voucher pack from the booking file (section 7). Issued 21+ days before departure (14 for late bookings). Pre-departure briefing call or video for guided departures.
- **Changes.** One change log per file, change fee rule set by Product and Legal, first reply per WS22 S1 (4 working hours, 1 working day until Q3 2027) and a complete proposal within 2 working days (O14), supplier re-confirmation required before customer confirmation.

### 5.5 Disruption and schedule-change playbook (with WS18, WS22)

Owner Head of Air with the in-trip desk lead; written by 31 Jan 2027 (strategy 13.8): trigger list (Gulf hub closure, airline schedule change, UD warning, safety event, FX event), roles, customer messaging templates in Swedish, bulk-rebooking process able to handle 100+ travellers in one week, mass SMS/email tool, decision tree for refunds and alternatives (14-day refund right in safety events per R09), and an insurance/war-risk check. Tested once in a table-top exercise by 31 Mar 2027 and again before the festive 2027 peak.

### 5.6 F5 In-trip operations (with WS22)

Operations provides: the duty rota in the shared calendar, the in-trip travellers-per-day view (list of travellers, location, supplier, guide, emergency contact), the incident log, and the escalation tree. The decision on the 24/7 model is due 31 Jan 2027 (strategy 13.4) and sits with the CEO; copy uses "jourtelefon under resan" until then.

---

## 6. Role design, staffing and ramp

### 6.1 Roles (strategy headcount, no change to the +5 FTE core)

| Role | Timing | Gate | Operational responsibilities |
|---|---|---|---|
| Existing SA team (size unknown; split with Pacific/MICE unknown) | Now | n/a | Pull team size, time allocation and handling time by 30 Nov 2026 |
| Consultant 1 | Start 1 Feb 2027 (pre-approved) | Approved | Fast-track quoting first; shadowing for 4 weeks; own book from week 6 [A] |
| Booking-operations coordinator | Recruit now, start by 1 Aug 2027 (pre-approved); pull earlier if checklists show >6% error rate | Approved | F2 four-eyes check, F4 document runs, supplier confirmation chasing, register upkeep |
| Consultant 2 | Start by 1 Aug 2027, productive Q4 2027 | Gate 1 (31 Mar 2027) | Mainly 2028-departure enquiries peak |
| Consultant 3 and product/contracting manager (shared with Pacific/MICE) | 2028 | After Gate 2 (30 Jun 2027) evidence [A] | Contracting, rate cards, library upkeep |
| In-trip desk lead | Role assigned from existing staff by 31 Jan 2027 | Part of WS22 | F5 |
| Operations/process lead (0.3 FTE of an existing senior person) | 15 Nov 2026 | Internal assignment, no new hire | Owns this plan, time study, process documentation |

Option for CEO decision (not assumed in any figure): starting the coordinator on 1 Feb 2027 instead of 1 Aug would cost about SEK 0.35 M more in 2027 (0.7 M x 11/12 less the 0.29 M in strategy 12.1) and removes the four-eyes load from advisers during the peak; it would also ease WS22 risk X13 (coordinator overload). Recommended if the time study shows a file error rate above 6%.

Sequencing risk: with a 1 Feb start, the January 2027 peak is carried by the current team. Swedish notice periods are often 1-3 months [ASSUMPTION], so a consultant advertised on 13 Nov may not be able to start on 1 Feb; WS24 holds a 1 Mar fallback with a freelance bridge from 1 Feb. Mitigation is temporary capacity (section 8) activated by capacity state, not a hire.

### 6.2 Onboarding and ramp

- 90-day onboarding pack by 31 Jan 2027: product ladder, library, quote kit, CRM, supplier map, risk and package-law basics, 10 recorded good-quote examples, shadowing plan.
- Ramp factor in the capacity model: 50% / 75% / 100% [A].
- Buddy and weekly coaching on 5 call recordings or quote reviews [A], with feedback to lift the weaker half of the team toward the median (R11: 2-3x spread by agent).

### 6.3 Productivity and incentives

- Team-level targets (SLA, error rate, quote-to-book), consistent with WS22 principle of avoiding individual NPS bonuses. Commission or bonus design is an HR decision [ASSUMPTION: not designed here]; operations asks only that no incentive rewards booking speed at the cost of file quality or margin below the floor.
- Cross-training: at least two advisers able to cover each of: Garden Route self-drive, safari, family, 55+ small group; the coordinator trained to cover booking-ops on Pacific files during troughs (to be agreed with Pacific lead).

---

## 7. Tooling, automation and data

### 7.1 Principles

1. **Configure before you buy.** The existing CRM and booking system (unknown) are used first. No re-platforming before Gate 1 (31 Mar 2027); any irreversible tooling commitment above SEK 150k [A] waits until the 31 Jan 2027 data pack (strategy 3.4 on irreversible commitments).
2. **One source of truth per object.** Lead and customer in CRM; booking and supplier confirmation in the booking system (or the booking file inside CRM if there is none); supply in the allocation register; order book and margin in the WS16 dashboard.
3. **Automate steps that are frequent, rule-based and low-risk first.** Customer-facing wording that is legally sensitive (price, terms, safety) is template-driven with Legal approval, not free-form AI text.
4. **GDPR by design.** Passport and health data stay in the booking system with access control; they are not sent to general-purpose AI tools or non-EU processors without a data processing agreement and DPO review [ASSUMPTION: DPO/legal capacity unknown]; consent flags per WS13/16.

### 7.2 Target architecture (categories)

WS25 owns the systems architecture, vendor selection and the change freeze (20 Dec 2026 - 20 Jan 2027, WS25 T-A10); this table states operational requirements only. Any A1-A4 change after 18 Dec 2026 needs a WS25 exception.

| Layer | Need | Notes |
|---|---|---|
| CRM / pipeline | Lead, stage, owner, SLA timer, tasks, source/UTM, consent | Stage definitions from R11; offline conversion import for ads (WS16) |
| Quote and itinerary builder | Library blocks, price from rate card, margin shown, PDF/web quote with e-accept | Could be a feature of the current system, a travel-agency platform, or a template system in CRM [no inventory] |
| Booking file and supplier confirmations | Checklist, status per service, documents | As above; if none exists, a structured CRM object or database plus checklist |
| Allocation and rate register | Held supply, release dates, rates, currency | Spreadsheet or lightweight database first; alerts by e-mail/chat |
| Workflow automation | Triggers between systems, reminders, document generation | iPaaS-class tool or native CRM automations |
| Payments | Payment links, instalments, reconciliation | With CFO and payment provider; fees in strategy 12.1 |
| Messaging | Transactional e-mail, SMS, mass notification for disruption | WS13 owns the e-mail platform |
| Telephony and chat | Call routing, recordings, missed-call callback, chat | Supports SLA measurement |
| Reporting | Order book with margin, SLA, capacity, error rates | WS16 dashboard |

### 7.3 Automation catalogue (ranked by estimated hours saved, all [A] until the time study)

| # | Automation | Mechanism | Est. hours saved per year at 2028 core [A] | Phase |
|---|---|---|---|---|
| A1 | Instant acknowledgement plus booked-call slot | Form/webhook, calendar link | 150 | 1 (Nov-Dec 2026) |
| A2 | Lead routing and SLA timer with escalation at 45 min | CRM rules | 100 | 1 |
| A3 | Quote kit and itinerary library, auto-pricing from rate card | Templates, library | 900 | 1-2 |
| A4 | Follow-up tasks D2/D7/D14/D21/D30 with templates | CRM sequences (with WS13) | 350 | 1 |
| A5 | Passenger-data form and validation | Secure form into booking file | 250 | 2 |
| A6 | Booking-file checklist with blocking rules | Workflow | 200 | 2 |
| A7 | Supplier confirmation request templates and overdue alerts | Templates, alerts | 350 | 2 |
| A8 | Document pack generation (itinerary, vouchers, emergency card) | Document generation from file data | 500 | 2-3 |
| A9 | Payment reminders and balance-due runs | Payment link, rules | 200 | 2 |
| A10 | Release-date alerts from allocation register | Calendar/alerts | 80 | 1 |
| A11 | Review/NPS/referral triggers (WS12/WS22) | CRM events | 150 | 2 |
| A12 | AI drafting assistant for first-draft replies and itinerary text, with human review and no passport or health data | Licensed assistant in CRM or e-mail | 300 | 3 (after data review) |
| A13 | Order-book, margin and capacity dashboard | WS16 | 150 | 2 |
| | **Total (gross, overlaps not removed)** | | about 3,700 | |

Review note: the per-item estimates sum to 3,680 hours, close to the 3,700-hour target case in section 2, because they were allocated top-down to the target, not built bottom-up from measured tasks; treat them as a budget of hours to be earned, not as evidence. Overlap and adoption losses of 25% [A] mean the plan should expect about 2,800 hours (about 1.9 FTE-eq.), which is the planning case in section 2. About 380 hours (A10, A11, A13) fall outside the quote and booking hours of strategy 13.1, so the saving against O2/O3 itself may be nearer 2,500 hours; the time study sets the split. The capacity model in section 4 glides from 3.0/8.0 to 2.8/7.5 (Mar 2027) and 2.2/5.5 (Dec 2027, target case); the 2027 average of 2.6 and 6.8 in section 2 is used for 2027 workload.

### 7.4 Build-vs-buy decision

Decision meeting 31 Jan 2027, input from the time study and the vendor shortlist (three options per layer, selection criteria: fit with Swedish package-law information flows, EU data hosting, integration with current CRM, price per user, migration effort, reference customers in leisure long-haul). Output: keep/configure, or replace. If replace, cut-over only outside Nov-Mar and Jun-Sep peaks, i.e. late Apr-May 2027 (the window WS25 plans, after Gate 1 pressure eases); Oct 2027 only if finished by 15 Oct because 2028 enquiries ramp from November [A]; with a 2-week parallel run and a rollback plan.

---

## 8. Overflow and variable capacity

Strategy 12.3 asks that fixed headcount be convertible to variable. Tools:

1. **Temporary adviser pool.** Two to three experienced freelance or retired travel advisers on call-off contracts [A] for fast-track quoting and follow-up, trained on the kit, usable in yellow state. Contracts signed by 15 Jan 2027.
2. **Peak back-office support.** Part-time or agency support for documents, supplier chasing and data entry in peak weeks, usable from 1 Jan 2027 [A].
3. **Quote triage.** In red state, leads are given an honest wait-time and a booked call slot; no discounting to speed closing. Marketing consequences per section 4.3.
4. **MICE/Pacific borrowing** within the rules in 4.2.
5. **Outsourced after-hours call handling** for jourtelefon overflow is a WS22 decision.
6. **Working-time rules** (overtime, evenings and weekends for the speed-to-lead SLA) are an HR/labour-law matter [ASSUMPTION: collective agreement unknown]; no peak-week plan relies on unpaid overtime.

Budget for temporary capacity is a gated reserve (section 10).

---

## 9. Governance, controls and risk management

### 9.1 Weekly and monthly cadence

| Forum | Frequency | Inputs | Decisions |
|---|---|---|---|
| Capacity review (30 min) | Weekly, Monday | Capacity dashboard, SLA, quote age, register release dates, 4-week departures | State green/yellow/red, overflow activation, marketing flag to Head of Marketing |
| Booking quality review | Monthly | Error log, complaints, ARN cases (with WS22) | Fix process, adjust check sampling |
| Programme gate review | Gates 0, 1, 2, 3 | Capacity, hours per quote/booking, hiring status | Release hires per gate |

### 9.2 Metrics to the programme owner (monthly)

Hours per quote, hours per booking, utilisation, SLA, open quotes per consultant, quote turnaround (O12), file error rate, complaints and ARN per 1,000 travellers (O13), change handling (O14), balance-paid-on-time (O15), supplier confirmation backlog, register exposure vs cap (O16), tool adoption (O17), overtime and reserve use (O18), time-to-productive of new hires.

### 9.3 Separation of duties

The person who confirms a booking does not approve its own below-floor margin; supplier payments follow a CFO-defined approval ladder [ASSUMPTION: CFO to set]; the allocation register is edited only by Product/booking-ops.

### 9.4 Margin and pricing guardrails in operations

Quote tool shows margin on every quote (G1). A quote below the product's planned margin or below the 18% floor for ladder entry (SEK 36-45k departures) needs Head of Sales approval; any product below 15% after partner commission needs CEO approval (G1). The 20% blended target is a portfolio measure tracked weekly on the order book, not a per-quote floor. Promotions and discounts are capped at 2% of turnover with CFO sign-off per campaign; value-adds are funded from supplier rebates (G2, A20).

### 9.5 Risks

| # | Risk | L / I | Early signal | Mitigation | Owner |
|---|---|---|---|---|---|
| OR1 | January-February 2027 peak overwhelms the current team before hire 1 (1 Feb) is productive | H / H | SLA below 90%, open quotes above cap | Quote kit and automations A1-A4 live by 18 Dec 2026 (before the WS25 change freeze); temp pool contracted by 15 Jan with no minimum-volume commitment; capacity state drives marketing | Head of Sales |
| OR2 | Time study shows effort per file is already low (or high), invalidating the 2.2/5.5 targets | M / M | Baseline vs placeholders | Re-run hires plan at Gate 0; keep hires pre-approved only | Operations lead |
| OR3 | Change fatigue and tool adoption failure | M / H | Low usage of kit, off-system work | Co-design with advisers, retire old routes, usage metric, owner per tool | Operations lead |
| OR4 | Oversell or missed release date on scarce supply | M / H | Register amber items unactioned | Register, alerts, weekly review, four-eyes on flagship allocations | Head of Product |
| OR5 | Booking-file errors rise with volume and feed complaints/ARN | M / H | File error rate above 6% | Checklist blocking rules, coordinator pulled forward, sampling | Booking-ops |
| OR6 | Disruption (Gulf hubs, safety event) hits 100+ travellers in a week | M / H | Schedule-change notices | Playbook, bulk-tools, preferred carrier agreements, insurance check | Head of Air |
| OR7 | Data breach or GDPR breach via new tools or AI | L / H | n/a | DPAs, access control, DPO review, no passport/health data in AI tools | CFO / DPO |
| OR8 | Hiring delays or poor quality hires | M / M | Time to fill, early attrition | Start recruitment now for coordinator; freelance pool as bridge; structured onboarding | Head of Sales / HR |
| OR9 | Shared-pool conflicts with Pacific and MICE in southern summer | M / M | Leave clashes, borrowed hours disputes | Shared capacity calendar and rules (4.2), escalation to CEO | CEO |
| OR10 | Platform migration disrupts peak operations | L / H | Cut-over scheduled in peak | No cut-over in peak, rollback, parallel run | Operations lead |
| OR11 | Productivity gains are overestimated and hires are delayed to save cost | M / H | Hours per file not falling | Gate hires by measured hours, not by plan; hires pre-approved are not cancelled by tooling optimism | CEO / CFO |

---

## 10. Budget (SEK thousand, ex VAT) [ASSUMPTION: no vendor quotes; all lines to be replaced by quotes before commitment]

| # | Item | 2027 | 2028 | Within strategy tech line (0.6 / 0.3 MSEK)? |
|---|---|---|---|---|
| 1 | Process mapping and time study (external facilitator 6-8 days, internal time not costed) | 60 | 0 | No (incremental) |
| 2 | Itinerary library and quote kit (freelance content/planner, photography reuse) | 120 | 40 | No (incremental) |
| 3 | CRM workflow configuration and booking-file standardisation | 150 | 50 | Yes |
| 4 | Automation/integration build and licences (A1-A11) | 200 | 80 | Yes |
| 5 | Allocation/rate register and alerts | 90 | 40 | No (incremental) |
| 6 | Order-book, margin and capacity dashboard (share with WS16) | 80 | 30 | Yes |
| 7 | AI drafting assistant licences, DPA and legal review | 60 | 80 | No (incremental) |
| 8 | Mass SMS/disruption tooling and playbook exercise | 40 | 60 | No (incremental) |
| 9 | Training, onboarding pack, coaching | 60 | 60 | No (incremental) |
| 10 | Contingency 10% of items 1-9 | 86 | 44 | No (incremental) |
| | **Subtotal, items 1-10** | **946** | **484** | |
| | of which inside strategy tech line (items 3, 4, 6) | 430 | 160 | |
| | **Incremental ask outside strategy 12.1 (items 1, 2, 5, 7-10)** | **516** | **324** | |
| 11 | Variable capacity reserve (temp advisers, back-office support), gated | 250 | 400 | No; released only in yellow/red state, treated as variable cost |
| | **Total incl. reserve** | **1,196** | **884** | |

Notes for the CFO:
- **Tech line double-counting risk.** Items 3, 4 and 6 (430 in 2027, 160 in 2028) are claimed against the strategy's technology line (600 / 300), leaving only 170 / 140 for the site, quote form, tracking and everything WS25, WS14 and WS16 need from the same line. WS25 section 13 also warns that WS13/WS14 tool lines overlap and that the CFO must reconcile. Until reconciled, treat items 3, 4 and 6 as shared with WS25/WS16 and do not add them on top of those plans; if the line is insufficient, the CFO either raises the envelope or cuts scope.
- **Overlap with WS24.** WS24 section 7 budgets a freelance/interim consultant bridge of 0.20 MSEK (2027) and 0.25 MSEK (2028). Item 11 below (0.25 / 0.40) is the same purpose; count one of them. Proposed: item 11 is the single reserve and WS24's amount is part of it.
- **Effect on the loss budget (strategy 12.2, 12.3).** Adding the incremental ask (0.516 / 0.324 MSEK) to the strategy's net contribution at 20% margin (-1.70 / -2.22) gives -2.22 in 2027 and -2.54 in 2028 (cumulative -4.76); if the reserve is fully released (0.25 / 0.40) it is -2.47 and -2.94 (cumulative -5.41). At 18.5% margin the 2027 figure is -2.94 without reserve and -3.19 with it, i.e. beyond the SEK 3.0 M 2027 loss budget and the -3.0 stop-loss (G10). Break-even gross margin rises from 23.5% to about 24.6% in 2027 and about 24.0% in 2028 (without reserve). The CFO should either approve the incremental ask inside the existing SEK 3.0 M budget (leaving about 0.8 M headroom in the plan case in 2027) or require offsets.
- Headcount (+5 FTE core; 1.2 MSEK in 2027 and 3.5 MSEK in 2028) and in-trip support (0.15 / 0.30 MSEK) are in strategy 12.1 and not repeated here.
- The incremental ask of SEK 0.52 M (2027) and 0.32 M (2028) is not in the 12.1 cost table and reduces the programme net contribution by the same amount unless offset. Offset rationale, stated honestly: in the core plan the pre-approved hires proceed regardless, so the spend is a cost, not a saving; it pays back only if it (a) avoids hires beyond the +5 FTE core (a consultant is SEK 0.7 M loaded [A18]; the planning case saves about 1.9 consultant-equivalents in 2028), (b) keeps SLA and file quality inside G8 so paid media can scale, or (c) makes the stretch case staffable. The CFO should judge it against those three tests at Gate 1.
- Spend before Gate 0 is limited to items 1, 2 (first 12 blocks, about half of the line) and 5, about SEK 210k in total (60 + 60 + 90) [A], all no-regret; everything else follows the 31 Jan 2027 data pack and the build-vs-buy decision.

---

## 11. Timeline

| Phase | Dates | Deliverables | Gate |
|---|---|---|---|
| 0 Baseline and quick wins | 2 Nov - 15 Dec 2026 | Operations lead named; time study; capacity model v1; SLA and routing rules live (with WS14 by 20 Nov); allocation register v1; booking-file checklist v1; peak calendar; temp-pool search | Gate 0 (15 Dec 2026) |
| 1 Peak readiness | 16 Dec 2026 - 31 Jan 2027 | Quote kit and first 12 library blocks; follow-up automations A1-A4 (live by 18 Dec, before the WS25 freeze); temp pool contracted (15 Jan); disruption playbook; build-vs-buy decision (31 Jan); onboarding pack; hire 1 start 1 Feb | 31 Jan data pack |
| 2 Standardise | 1 Feb - 30 Jun 2027 | Full library (25-30 blocks) by 31 Mar; passenger-data form; supplier-confirmation templates; document generation; capacity dashboard in WS16; coordinator recruited; first quarterly time re-measure | Gate 1 (31 Mar); Gate 2 (30 Jun) |
| 3 Scale | 1 Jul - 31 Dec 2027 | Coordinator and consultant 2 start by 1 Aug; AI assistant pilot (if DPO cleared); automated register lookup; shipping of all A1-A11; festive-peak table-top | Gate 3 (31 Oct 2027) |
| 4 Optimise at 2028 volume | 1 Jan - 31 Dec 2028 | Hire 3 and product/contracting manager; re-measure hours; vendor review; 2028 stretch readiness only if gap levers land | Gates 4 (31 Mar 2028) and 5 (30 Jun 2028); annual review |

---

## 12. Dependencies and interfaces

| Needs from | What | By |
|---|---|---|
| WS14 Lead-gen and sales | SLA definition, routing, scripts, coaching | 20 Nov 2026 |
| WS13 Email/CRM | Follow-up sequences, consent flags, transactional e-mail | 31 Dec 2026 |
| WS16 Analytics | Dashboard with SLA, capacity, error rates, order-book margin; offline conversion import | 31 Jan 2027 |
| WS22 Customer experience | Touchpoint schedule, in-trip desk and rota, file caps, incident log | 31 Jan 2027 |
| WS02 Product | Library content, ladder definitions, supply readiness gate | 31 Mar 2027 |
| WS24 Org and hiring | One variable-capacity budget and trigger rule; hours-per-file target aligned (-20% planning case); hire dates and fallback | 20 Nov 2026 |
| WS25 Tech stack | Architecture, vendor selection, change freeze 20 Dec - 20 Jan, cut-over window, reconciled tech budget | 20 Nov 2026 (capability audit), 31 Jan 2027 |
| WS18 Airlines | Preferred carrier agreements, group terms | 28 Feb 2027 |
| WS01 Marketing/paid (WS06, WS07) | Respect capacity states in budget pacing | Immediate |
| CFO / Legal | Payment terms, FX clause, guarantee reporting, information form, DPO | 20 Nov 2026 to 31 Mar 2027 |
| CEO | Programme owner, operations lead assignment, 24/7 model decision, shared-pool rules with MICE/Pacific | 6 Nov 2026 to 31 Jan 2027 |

This workstream provides to others: weekly capacity state (to marketing and the programme owner), the allocation register (to Product and sales), hours-per-file evidence (to the hiring gates), and the book of standard operating procedures (to onboarding).

---

## 13. Assumptions register (replace with company data)

| ID | Assumption | Rationale | Replace with |
|---|---|---|---|
| OP-A1 | Hours per quote 3.0 and per booking 8.0 (strategy A23), targets 2.2 and 5.5 by end 2027 | Illustrative; improvement assumes templates, library and automations deliver 25-30% | Time study of at least 40 files across consultants |
| OP-A2 | 1,952 quotes in 2027 (2,440 enquiries x 80%) and 485 bookings | Strategy section 10 funnel; corrected in review from an interpolated 1,990 / 486 | Actual funnel |
| OP-A3 | Capacity thresholds: green under 85% utilisation, yellow 85-100%, red over 100% or SLA under 80%; open quotes cap 45 per consultant | Planning guardrails; Head of Sales sets final limits after 60 days (G9) | Baseline from capacity model |
| OP-A4 | Ramp factor for new advisers 50% / 75% / 100% in months 1-2 / 3-4 / 5+ | Common onboarding pattern, no company evidence | HR and sales history |
| OP-A5 | Library 25-30 blocks; first 12 by 31 Jan 2027 | Coverage of strategy P4 ladder and routes | Product list from WS02 |
| OP-A6 | Booking-file error rate: under 6% (Mar 2027), 3% (Dec 2027), 2% (Dec 2028) | Placeholder; baseline unknown | Error log sample |
| OP-A7 | Four-eyes check sampling: 100% until under 3% for 3 months, then 25% plus files over SEK 150k | Control design | Risk appetite from CFO |
| OP-A8 | Automation hours saved A1-A13 (about 3,680 gross, 2,800 net of 25% overlap/adoption loss; about 380 gross outside quote/booking hours) | Allocated top-down to the target, no benchmark; planning case is the net figure | Post-implementation re-measure |
| OP-A9 | Temp advisers 2-3 and peak back-office available on call-off terms | Market availability unverified | Quotes from freelancers/agencies, HR/legal check |
| OP-A10 | Budget lines in section 10 | No vendor quotes, no tool inventory | Quotes by 31 Jan 2027 |
| OP-A11 | Irreversible tooling commitment threshold SEK 150k | Derived from strategy guidance on irreversible commitments before 31 Jan 2027 | CFO policy |
| OP-A12 | Passport rule used in the form: valid 30 days beyond departure from South Africa, two blank pages | Swedish embassy via research/01; airlines and transit countries may be stricter | UD/Ambassaden and airline rules per routing |
| OP-A13 | Platform cut-over window late Apr-May 2027 (Oct 2027 only if done by 15 Oct) | Off-peak per strategy seasonality and WS25 | Booking curve |
| OP-A14 | Operations lead at 0.3 FTE from an existing senior person | No new cost in the strategy | Org chart and workload |
| OP-A15 | Cross-training rules and shared-pool rules with Pacific and MICE | Unvalidated in strategy 13.3 | Agreement with unit heads |
| OP-A16 | Targets O12-O18 (turnaround 4 h fast-track, change handling 90/95%, balance on time 95/97%, tool adoption 70/90/95%, overtime limits) | Planning values, no baseline | Time study, HR, payment history |
| OP-A17 | Four-eyes check 0.3-0.5 h per file; standard-work lead times per departure (90/60/30/14 days) | Operational judgement | Time study, DMC agreements |
| OP-A18 | Swedish notice periods of 1-3 months for hires | Common labour-market pattern, no company evidence | HR / recruiter |
| OP-A19 | Peak enquiry window Nov-Mar | Strategy A16 covers paid-spend share only | Weekly enquiry history |

### Data requests for the CEO (operations, priority order)
1. SA team headcount, time split with Pacific and MICE, and handling time per file (quote, booking, pre-departure, in-trip) by 30 Nov 2026.
2. List of current systems: CRM, booking/back-office, telephony, e-mail platform, payments, document tools; contracts, renewal dates, users and cost.
3. Booking-file error and correction history, complaints and ARN cases for 2024-2026.
4. Enquiry-to-booking funnel by adviser and source; response times; seasonality by week.
5. Allocation and supplier terms: release dates, deposits, DMC contracts, guide contracts.
6. Labour rules for evenings/weekends, on-call, temporary staff; collective agreement (if any) and notice periods for the two pre-approved hires.
7. Payment history: share of balances paid on time, 2024-2026 (for O15).
8. Which of the systems in request 2 are covered by contracts that block a cut-over or a new tool before 31 Jan 2027.

---

## 14. First 30 days (2 Nov - 2 Dec 2026)

| Date | Action | Owner (role) | Output |
|---|---|---|---|
| 2-6 Nov | CEO appoints programme owner; Head of Sales names the operations lead (0.3 FTE) and a deputy | CEO / Head of Sales | Named owners |
| 2-6 Nov | Start allocation calls (strategy 13.2) and open the allocation register template; every call logged with date, units, option and release | Head of Product | Register v0 with first 18 supplier lines |
| By 6 Nov | Data request sent: team size, time split, system list, funnel (section 13) | CEO | Request issued |
| 9-13 Nov | Process walk-through: shadow 3 advisers for one day each, map F1-F2 as-is on one page, list top 10 time wasters | Operations lead | As-is map and top-10 list |
| 9-20 Nov | Time study: 40 files [A], timesheet or sample time-stamps, quote vs booking vs servicing hours | Operations lead + 3 advisers | Hours per quote/booking baseline |
| By 13 Nov | Recruit: job description for the booking-operations coordinator and consultant 1 (start 1 Feb); contact HR/recruiter | Head of Sales / HR | Ads live |
| By 16 Nov | Capacity model v1 (spreadsheet) with placeholder inputs; peak calendar for Nov 2026 - Dec 2027 | Operations lead | Model and calendar |
| By 20 Nov | Speed-to-lead SLA and routing rules live (with WS14): instant acknowledgement (copy in 14A), 1 h reply target for 90%, escalation at 45 minutes; weekend/evening rota in peak, subject to HR/labour-rule check (data request 6) | Head of Sales | SLA measured from day 1 |
| By 20 Nov | Booking-file checklist v1 (12 items) in use with four-eyes check by a second adviser | Operations lead | Checklist in use |
| By 23 Nov | Quote kit v0: top 6 itineraries and fast-track templates with rate and margin shown | Head of Product + advisers | First kit in use |
| By 27 Nov | Search for temp adviser pool (3 candidates) and back-office support; terms sketch; agree the capacity-state rules with Head of Marketing | Head of Sales | Shortlist, rules agreed |
| By 30 Nov | SA team and handling-time data delivered into baseline pack (strategy 16.1); first weekly capacity review held; capacity state reported to the programme owner | Head of Sales | Baseline input |
| 1 Dec | Paid test (strategy 16.1: SEK 100k, brand and high-intent only, which is Tranche A type spend) goes live unless the state is red; in yellow it needs the Head of Sales' written OK and no budget increase | Head of Marketing / Head of Sales | Go/no-go recorded |
| By 2 Dec | Draft build-vs-buy brief and vendor shortlist criteria; list of automations A1-A4 and A10 with owners; plan for Gate 0 (15 Dec) data package | Operations lead | Brief and automation backlog |

Success at day 30: SLA measured and at or above 85% reply-within-1-hour (the first month is a ramp to the 90% target; a state of yellow at this level is expected), time study done, capacity model live with weekly review, allocation register started, booking-file checklist in use, recruitment started, and no marketing change that ignores capacity state.

---

## 14A. Swedish customer-facing copy (drafts for Legal and brand review)

Drafts for the operational touchpoints this plan creates. They make no response-time promise that the SLA does not yet support (message pillar 2 in strategy 6.3 applies only once the SLA is met), no "lokal närvaro dygnet runt" (strategy 13.4) and no safety guarantee. Placeholders in brackets.

1. **Instant acknowledgement (A1), normal state.** Subject: "Tack för din förfrågan om Sydafrika"
   "Hej [förnamn]! Tack för din förfrågan. Den är nu registrerad och en av våra Sydafrikarådgivare återkommer personligen till dig [under våra öppettider, vardagar kl. [tid]-[tid]]. Vill du hellre prata direkt kan du boka en tid som passar dig här: [länk]. Du kan också svara på det här mejlet om du vill lägga till något, till exempel tänkt resmånad eller vilka som reser med."
2. **Acknowledgement, yellow or red state (section 4.3).** "Hej [förnamn]! Tack för din förfrågan. Just nu har vi många förfrågningar om Sydafrika, så vår svarstid är längre än vanligt, cirka [antal] arbetsdagar. Din förfrågan är registrerad och besvaras i den ordning den kom in av en namngiven rådgivare. Vill du ha svar snabbare kan du boka en samtalstid här: [länk]." (The figure is filled from the live queue; never an optimistic estimate.)
3. **Quote follow-up task text for advisers (D2), internal.** "Ring eller mejla kunden: har offerten kommit fram, vilka frågor finns, vad avgör beslutet? Notera svar och nästa steg i ärendet."
4. **Passenger data form intro (A5).** "För att din bokning ska bli rätt behöver vi dina uppgifter exakt som i passet. Kontrollera namn, födelsedatum och passets giltighetstid. Enligt Ambassadens reseinformation ska passet vara giltigt minst 30 dagar efter avresa från Sydafrika och ha två tomma sidor; kontrollera också vad ditt flygbolag kräver. Uppgifterna skickas säkert och används bara för din resa." [Legal to approve the GDPR wording; rule text to be re-checked against UD/Ambassaden before launch.]
5. **Schedule-change notice, first message (section 5.5).** Subject: "Ändring i din flygresa till Sydafrika". "Hej [förnamn]. [Flygbolag] har meddelat en ändring av din resa: [kort beskrivning, ny tid]. Vi går igenom alternativen redan nu och återkommer med ett förslag senast [datum]. Du behöver inte kontakta oss för att vi ska agera, men du är välkommen att höra av dig. Frågor under tiden: [telefon] eller svara på det här mejlet. Dina rättigheter vid ändringen beskrivs här: [länk till villkor]." [Legal must fix wording on withdrawal and refund rights; per R09 a refund is due within 14 days if the traveller withdraws.]
6. **Final payment reminder (A9), 14 days.** "Hej [förnamn]! Slutbetalningen för din Sydafrikaresa, [belopp] kr, förfaller [datum]. Du kan betala här: [länk]. Har du frågor om belopp eller betalsätt hör du av dig till [rådgivarens namn], [telefon]."

---

## 15. Sources

- Strategy: `/home/user/MICE-Group/docs/00-strategy.md` (sections 4, 12, 13, 14, 15, 16, 18).
- Research: `/home/user/MICE-Group/docs/research/11-conversion-crm.md` (speed to lead, follow-up cadence, agent conversion spread; vendor benchmarks are Tier C and directional), `/home/user/MICE-Group/docs/research/05-product-supply.md` (supply lead times and guides), `/home/user/MICE-Group/docs/research/09-regulation-trust.md` (organiser liability, information duties; Konsumentverket package travel law: https://www.konsumentverket.se/lagar/paketreselagen-konsument/).
- Workstream 22: `/home/user/MICE-Group/docs/workstreams/22-customer-experience.md` (file caps, in-trip model, touchpoints).
- No new web sources were used; no company data was available.

---

## 16. Review log (independent review, 2026-11-03)

Fixed against `00-strategy.md` and sibling workstreams: (1) 2027 volumes now follow strategy section 10 (1,952 quotes, 485 bookings; was 1,990 / 486); (2) Gate 3 date corrected to 31 Oct 2027 (was 31 Dec) and Gates 4-5 added; (3) SLA states aligned with G8 (two weeks below 90% is red; 1 Dec paid test rule no longer contradicts the day-30 SLA of 85%); (4) per-quote margin rule corrected to G1 (20% is a blended measure, not a quote floor); (5) budget now shows tech-line double-counting with WS25/WS14/WS16, overlap with WS24's variable-capacity line, and the effect on the SEK 3.0 M loss budget and break-even margin; pre-Gate-0 spend corrected from SEK 150k to about 210k; (6) hours-saved logic made honest (top-down allocation, planning case 2,800 h, aligned with WS24's -20%); the unsupported "same order as the hires" and "within 6 added FTE" statements removed; (7) release-alert timing made consistent (60/30/14 days; was 7-day alert after a 14-day deadline); (8) passport rule replaced with the sourced embassy rule; unverified R11 2-3x spread flagged as vendor claim; (9) automation freeze conflict with WS25 (20 Dec - 20 Jan) resolved by moving A1-A4 to 18 Dec; (10) KPIs O12-O18 added (turnaround, complaints/ARN, changes, cash, supply cap, adoption, team load); (11) Swedish copy drafts added (14A); owners added for the disruption playbook.

Open questions for the CEO are in the review hand-off: tech-line and reserve reconciliation, coordinator start 1 Feb vs 1 Aug (+SEK 0.35 M), approval of the incremental ask (0.52 / 0.32 MSEK) against the loss budget, one capacity-cap number across WS14/WS22/WS24/WS23, working-time rules, and the 40 MSEK and margin definitions.
