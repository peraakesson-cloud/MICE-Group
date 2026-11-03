# 13 - Email and CRM lifecycle for sydafrikaresor.se (segmentation, automations, sample Swedish emails)

Inherits: `/home/user/MICE-Group/docs/00-strategy.md` (positioning, levers L2, L6, L7 and part of L3/L4 conversion, program P3 "Conversion and CRM machine", budget line 11.1 "CRM automation, review programme, community", gates, risks R1 capacity, R3 margin squeeze, R9 reputation and R13 measurement loss, assumptions A1, A7, A9, A10, A12, A17, A18, A20). Evidence: R11 (conversion and CRM), R09 (regulation, consent), R02 (segments), R03 (competitors). Related workstreams: 12 (reviews, owns the +3 and +10 day messages), 04/05 (SEO and lead magnets), 06/07/09 (ads, retargeting, customer-match audiences), 10 (social), 02/03 (product, pricing).
Date: 2026-11-02. Language: English plan, Swedish customer-facing copy (section 18). Everything not sourced is marked [ASSUMPTION] or [VERIFY] and is listed in section 20 so the CEO can replace it with real data. "R11" etc. refer to files in `/home/user/MICE-Group/docs/research/`.

---

## 1. Why this workstream exists and what it owns

The strategy's North Star is the booked-not-departed order book at healthy margin. Email and CRM is the cheapest lever on it because it works on demand the company has already paid for. Three of the strategy's levers run through it:

| Lever | Bridge value 2027 / 2028 | What email/CRM does | Share of delivery |
|---|---|---|---|
| L2 Conversion on existing flow (close 25% to 27%) | +2.0 / +3.5 MSEK; 2028 is about 34 bookings (2,148 existing-flow enquiries in 2028 x 0.8 x 2 pp) | Quote follow-up cadence, abandoned-enquiry recovery, decision-call booking, lost-quote win-back | Co-owned with Head of Sales; CRM owns the system, Sales owns the calls |
| L7 Repeat and referral | +0.8 / +3.0 MSEK; 2028 is about 30 incremental bookings (3.0 MSEK / about SEK 101k); total repeat+referral about 125 bookings in 2028 | Post-trip, referral, anniversary and cross-sell flows; preference data | Primary owner |
| L6 Revenue per traveller | 0.0 / +1.0 MSEK (ABV flat 2027, +2.2% 2028) | Pre-trip extension and add-on offers, tracked per departure | Contributor, about a third of 2028 L6 (about 0.3 MSEK) [ASSUMPTION]. Check: O9 +8 pp attach on about 637 bookings is about 51 bookings x an assumed average add-on of SEK 6,000 = about 0.3 MSEK. In 2027 add-on revenue only offsets the mix dilution the strategy already assumes, so no 2027 claim |
| L3/L4 (new traffic) | 2028: +4.0 / +1.5 (2027: +1.2 / +0.2) | Captures visitors who are not ready to enquire (consented list, nurture) and converts them at the 18% new-traffic rate | Contributor, no separate target |

Important: these are not extra millions. The bridge already counts them. This workstream is the delivery mechanism and is judged on the KPIs in section 3, not on a separate revenue claim. Nothing here adds to the 24.4 MSEK core bridge.

Out of scope: paid media (06, 07, 09), review platform choice and the +3/+10 day messages (12; the flow specs here only reserve the slots), site CRO and quote form UX (04, with a joint requirement list in section 10), pricing (03).

Principle set (binding for all flows):
1. **Human first on a SEK 100k purchase.** Automation prepares, reminds and measures; a named adviser sends the messages that matter (quote, follow-up, decision call). Mail from "Anna på Sydafrikaresor", not "noreply".
2. **Triggered flows over batch campaigns** (R11: structure transfers even if ecommerce numbers do not).
3. **Revenue per recipient and bookings, not open rate.** Apple Mail Privacy Protection inflates opens (R11).
4. **Consent before volume.** No flow that needs marketing consent runs on contacts without it (section 5).
5. **No premature promises.** Copy says "jourtelefon under resan", never "24/7 på plats" until costed and staffed (strategy positioning). No fixed-price published departures in email before the FX policy exists (strategy section on irreversible commitments); use "från-pris" exactly as the site shows it, with date.
6. **Premium shown through value, not discounts.** We sit about 15-20% above the group-with-flights cluster, so no discount-led campaigns; use inclusions, guide, flexibility, support, time-limited extras that cost little (for example an upgraded transfer or a pre-trip call with the guide) [ASSUMPTION: margin impact to be approved by CFO].

---

## 2. Starting position and what we do not know

No internal data exists. Facts known from public sources and the strategy:
- The company publishes 25 SA itineraries from SEK 17,900 to 95,200 (R02, sydafrikaresor.se destination page).
- Trustpilot shows 8 reviews at 2.7/5 (R03). Google reviews via Trustindex name individual advisers (R03, R08). This matters for email: adviser names are an asset.
- Strategy planning values (strategy sections 2 and 10): about 2,025 enquiries in 2026 (about 2,086 existing-channel enquiries in 2027 and 2,148 in 2028), about 405 bookings, about 890 travellers, revenue per booking about SEK 99k in 2026-27 and about SEK 101k in 2028 (SEK 45-46k x 2.2 travellers), close 25% on existing flow, quote rate 80% [A1, A9, A10]. All are placeholders until Gate 0.

Unknown and critical (request to CEO, merged into the Gate 0 data pack by 6 Nov):
1. Current CRM / booking system, whether it exposes stage events and an API, and who administers it.
2. Email list size, consent records (date, wording, source), opt-out history, engagement.
3. Customers (booked travellers) by year 2019-2026 with valid email; share with marketing consent; share with phone.
4. Current quote template, follow-up practice, median days enquiry to booking, quote-age cut-off.
5. Current sending domain, SPF/DKIM/DMARC status, ESP in use, and monthly volume.
6. Whether sydafrikaresor.se sells insurance itself (licence status) or only refers.
7. Complaint log (needed for suppression rules).

Until answered, volumes in this plan are planning values from the strategy and are marked [ASSUMPTION].

---

## 3. Objectives and KPIs

Targets inherit strategy and R11 (R11 section 8 table is [ASSUMPTION] and is recalibrated at the 60-day baseline review, 31 Jan 2027).

| # | Objective | KPI | 31 Dec 2026 | 31 Mar 2027 | 30 Jun 2027 | 31 Dec 2027 | 31 Dec 2028 |
|---|---|---|---|---|---|---|---|
| O1 | One clean lead record with consent | Share of new enquiries with consent flag, source/UTM, trip fields | 80% | 95% | 98% | 98% | 98% |
| O2 | Speed to lead (shared with Sales) | First human reply within 1 business hour | measured | 90% | 90% | 90% (within 30 min) | within 30 min |
| O3 | Follow-up discipline | Quotes with 4+ follow-up touches logged | flow live | 60% | 80% | 95% | 95% |
| O4 | Lift close rate on existing flow | Quote-to-booking, existing flow (baseline 25%, A10) | baseline measured | baseline +0.5 pp | baseline +1.0 pp | 26% | 27% |
| O5 | Recover stale quotes | Lost-quote win-back bookings per quarter (holdout-measured) | n/a | flow live Q1 | 3-5 | 5-8 | 8-12 [ASSUMPTION] |
| O6 | Feed repeat and referral (L7) | Repeat+referral share of bookings (about 15% now, about 20% in 2028, A12) | definition agreed | baseline | 16% | 17% | 20% |
| O7 | Ask everyone | Referral ask sent to eligible returned bookings (day 14) | flow live | 100% | 100% | 100% | 100% |
| O8 | Grow the owned list | New double-opt-in subscribers, calendar-year to date | list audit | 300 | 1,000 | 2,500 | 4,000 [ASSUMPTION: about 2% capture of the 100-165k (2027) and 134-223k (2028) qualified sessions in strategy sections 3.2 and 10; v1 draft of 4,000/6,000 needed 1% of 400-600k sessions and is withdrawn] |
| O11 | Make customers contactable | Consent coverage of the past-customer pool (customers 2019-2026 with valid email and logged marketing consent) | audit | baseline (E1 trigger below 40%) | 40% | 60% | 70% [ASSUMPTION] |
| O12 | Quote hygiene | Median days enquiry to first quote; share of quotes sent within 48 h; quote rate (quotes / enquiries, strategy 80%) | baseline | 70% within 48 h | 80% | 90% | 90%; quote rate 80% |
| O13 | Referral output (L7) | Referral enquiries and referral bookings per quarter; referral close rate (strategy 45%+) | n/a | baseline | 5 / 2 | 25 / 11 per year | 100 / 45 per year at the 45% referral close rate [ASSUMPTION: 30-60 referral bookings is the 25-50% of the 125 repeat+referral bookings assumed to be referral] |
| O14 | Programme efficiency | Programme cost (section 13 lines incl. tech share, rewards, legal) per holdout-attributed incremental booking | n/a | n/a | tracked | at most SEK 30,000 | at most SEK 15,000 [ASSUMPTION; see economics check below] |
| O9 | Add-on revenue per departure | Share of bookings with at least one paid add-on (extension, upgraded transfer, activity) sold after booking | baseline | baseline | +3 pp | +5 pp | +8 pp [ASSUMPTION] |
| O10 | Healthy sending | Spam complaints, hard bounces, unsubscribes per marketing send | <0.1%, <0.5%, <0.2% | same | same | same | same |

Guardrail KPIs (reported weekly, any breach pauses the relevant flow): complaints per 1,000 bookings (strategy dashboard), unsubscribe above 0.3% on any send, spam complaint above 0.1%, share of emails sent without consent (target zero).

Plausibility checks (all [ASSUMPTION], not forecasts):
- L2: 2027 quotes about 1,670 existing flow (2,086 x 0.8) plus about 283 new. One extra close point on existing flow is about 17 bookings, about SEK 1.7M at SEK 101k. The cadence alone cannot deliver 2 pp; speed-to-lead, itinerary quality and coaching carry the rest. Email/CRM claims no more than about half (1 pp).
- L7: 125 bookings in 2028 at "about 10% of prior customers rebooking or referring in a year" implies a pool of about 1,250 prior booking households (derived from strategy). The CRM job is to make that pool contactable: consent coverage of 60% or more of the pool by end 2027 [ASSUMPTION].
- List: 4,000 new subscribers (2028) converting to enquiry at 2.5% over 12 months gives 100 enquiries, at 80% quote rate and 18% close about 14 bookings, about SEK 1.4M; the 2,500 in 2027 give about 9 bookings, about SEK 0.9M. This sits inside L4/L3 new-traffic volumes, not on top.
- Referral reward cost: 30-60 referral bookings in 2028 x SEK 1,000-2,000 = SEK 30,000-120,000 (2027: about 10-25 bookings x the same = SEK 10,000-50,000, paid only after the friend's trip departs, so part falls into 2028).

### 3.1 Economics check (derived from the strategy bridge; not a separate revenue claim)
The strategy's honest finding is that margin is thin (20% planning value, break-even about 23.5%), so this workstream must also pay for itself. Attributable turnover is the share of each lever the plan gives to CRM: half of L2, all of L7, one third of L6.

| | 2027 | 2028 |
|---|---|---|
| Attributable turnover (MSEK) | 1.0 (L2) + 0.8 (L7) + 0 (L6) = 1.8 | 1.75 (L2) + 3.0 (L7) + 0.3 (L6) = about 5.1 |
| Gross profit at 20% (MSEK) | 0.36 | about 1.0 |
| Cost: marketing line (section 13) | 0.222 | 0.260 |
| Cost: tech-build share | 0.15-0.25 | 0.05-0.10 |
| Cost: referral rewards, legal | 0.03-0.11 | 0.04-0.13 |
| Cost total excl. staff time (MSEK) | 0.40-0.58 | 0.35-0.49 |
| Net before staff time (MSEK) | -0.04 to -0.22 | +0.5 to +0.65 |

Reading: 2027 is an investment year; 2028 turns positive before staff time. Over 2027-28 the net is about +0.3 to +0.6 MSEK before staff time and roughly break-even to slightly negative once about 0.5 FTE of CRM-manager time (about SEK 0.35 M a year at the strategy's SEK 0.7 M loaded FTE, [ASSUMPTION]) is charged. At 17-18.5% margin it is negative in both years. The case for the workstream therefore rests on protecting the order book (the strategy's North Star) and on 2029 departures, not on a 2027-28 profit, and the claimed lifts must be measured (section 11) before any scaling. O14 turns this into a tracked KPI. The 1 pp close-rate claim (about 17 bookings, 1.7 MSEK in 2027) is the single biggest driver; if T1 shows no uplift, F2 stays (it costs almost nothing) but F9/F12 and the tech-build share are cut first.

---

## 4. Data model, lifecycle stages and systems

### 4.1 Lifecycle stages (single definition, one record per household)
Aligned with R11 section 7 and strategy P3. Each stage has an entry rule and an owner. Stages are mutually exclusive on the primary record; a household can hold a past-customer status and a new-enquiry stage at once (second trip).

| Code | Stage | Entry rule | Owner |
|---|---|---|---|
| S0 | Subscriber / anonymous known | Consent captured (newsletter, guide download, fair lead), no trip enquiry | CRM manager |
| S1 | Enquiry | Form, call, chat or email requesting a trip | Head of Sales |
| S2 | Qualified | Budget bracket, travellers, month, interests known | Adviser |
| S3 | Quote sent | Itinerary/quote delivered; quote date and value stored | Adviser |
| S4 | Decision call booked | Call in calendar | Adviser |
| S5 | Booked | Contract confirmed; deposit due | Booking ops |
| S6 | Deposit paid / S7 Balance paid | Payment events | Booking ops / finance |
| S8 | Travelling | Departure date reached | Booking ops |
| S9 | Returned | Return date + 1 | CRM manager |
| S10 | Advocate / repeat | Review given, referral given, or second booking | CRM manager |
| L | Lost | Explicit decline, or quote age above the cut-off (60 days with no reply [ASSUMPTION], matching F9's first win-back at day 60) with no contact; always with a lost reason | Adviser |

Required fields per record: source, medium, campaign (UTM), first-touch landing page, "how did you hear" answer, consent (marketing email, SMS, phone, each with date, wording version, source), preferred language/adviser, travellers (adults/children, ages), travel month and flexibility, budget bracket, interests (safari, Cape Town and Garden Route, wine/food, golf, honeymoon, family, self-drive, 55+ comfort), route tags, quote value, quote date, quote-age, lost reason, departure date, return date, add-ons bought, review given (Y/N), referral given, complaint open (Y/N), cancellation flag.

### 4.2 Systems (decision by 30 Nov 2026)
Because the current stack is unknown, the plan states requirements, not a product:
- CRM/booking system must emit stage events (S1-S9) and payment events to the email platform, preferably by API or webhook; the email platform must write back opens/clicks/replies as activities on the record.
- Email platform must support: segmentation on CRM fields, event-triggered flows with exit conditions (reply, booking, unsubscribe), preference centre, one-click unsubscribe header, dynamic content blocks (adviser name, route, review snippet), A/B and holdout splits, SMS or an SMS add-on, Swedish character handling, export of send logs for consent evidence.
- Options to evaluate in the first two weeks (shortlist of 3, no vendor is endorsed here): the CRM's own marketing module, a mainstream ESP with a CRM connector, or a mid-market marketing automation tool. Selection criteria: EU data residency/DPA, connector quality, total cost per year at an assumed 5-15k contacts [ASSUMPTION: about 1,300 booking households 2025-27 plus about 2,000 enquirers a year; actual list size unknown], deliverability reputation, Swedish support.
- If the current CRM cannot emit events, the fallback for Q4 2026 is a spreadsheet-driven task queue plus manual templates (section 18), then the integration build in Q1 2027. This must not delay the quote follow-up cadence, which is the highest-value piece and can run as CRM tasks and saved templates from day 1.

---

## 5. Consent, legal basis and deliverability

Legal points come from secondary sources and R09/R11; every item is [VERIFY] with Legal/DPO before the first marketing send. This is not legal advice.

| Topic | Planning position | Status |
|---|---|---|
| Marketing email to individuals | Prior consent required; narrow exception for existing customers and similar products if opt-out offered at collection and in every message (R09 section 5; secondary sources https://www.mailer.se/gdpr-samtycke-e-postmarknadsforing/ , https://kundkanalen.se/gdpr-e-postmarknadsforing ) | [VERIFY section of Marknadsföringslagen and conditions with counsel] |
| Service messages | Confirmation, payment reminders, mandatory pre-contract and package-travel information, change notices, jourtelefon details are not marketing and may go regardless of marketing consent. Keep them free of promotion. | [VERIFY] |
| Review and feedback requests | Framed as service feedback, include opt-out, only to customers who bought (workstream 12 section 8) | [VERIFY] |
| Enquirers who did not book | Treated as having no marketing consent unless they ticked a box or Legal confirms a lawful basis for the quote follow-up (a reply to their own request is lawful; continued nurture beyond the quote needs consent) | [VERIFY] |
| Consent capture | Unticked box, plain Swedish text, separate for email and SMS, stored with timestamp, wording version, URL and IP; double opt-in for newsletter and guides | Recommended |
| Backlog | Only contacts with a valid purchase relationship or a logged consent; others get one permission-based re-opt-in email (not a marketing email) only if Legal confirms | [VERIFY] |
| Retention | Data age limit set by Legal (for example, no marketing to customers older than a set number of years) | [VERIFY] |
| Customer Match / retargeting uploads | Email hashes uploaded to Google or Meta only for contacts with consent covering it (coordinate with workstream 09) | [VERIFY] |
| Insurance | Selling or recommending travel insurance may be regulated insurance distribution. Emails inform and link to the licensed provider unless Legal confirms a distribution licence/tied-agent status | [VERIFY] |
| Follow-up window after a quote | F2 D2-D30 is framed as the answer to the customer's own request. Proposed maximum 30 days after the quote; anything later (F9, newsletters) requires marketing consent. Legal confirms the window before D14 goes live | [VERIFY] |
| Add-ons sold after booking (F6) | Adding extension nights or activities after the contract may change the package or create a new one; pre-contract information and the guarantee must follow the amended booking (R09; EU Directive 2026/1024, strategy P6) | [VERIFY] |
| Package-travel rules | Pre-contract information, resegaranti standard form and organiser details in the booking confirmation (R09 section 1); price shown with all mandatory costs | Per R09 |
| Resegaranti | Mention and link Kammarkollegiet lookup in footer or confirmation; the company must actually hold the guarantee and fee payments (R09 section 3). Do not print a claim in email until Finance confirms current status | [VERIFY] |
| Sender requirements | Authenticate sending domain (SPF, DKIM, DMARC), one-click unsubscribe header and low complaint rates for bulk senders are requirements of the large mailbox providers (Google sender guidelines https://support.google.com/a/answer/81126 , from memory, [VERIFY]) | Do in week 1-2 |

Deliverability plan: separate sending subdomain for marketing (for example `post.sydafrikaresor.se`) distinct from the adviser mailboxes and transactional mail; warm up over 3-4 weeks by sending first to the most engaged 20% of consented contacts; monitor with Google Postmaster Tools and a seed test monthly; suppress hard bounces at once and soft bounces after 3; sunset rule: no engagement (no click, no site visit, no reply) in 12 months leads to one final "Vill du fortsätta få våra brev?" message, then suppression from marketing (not deletion from the customer record).

Sales-mail note: advisers sending personal quotes from their own mailbox bypass the marketing domain, so quote emails also need SPF/DKIM alignment (the same DNS task).

---

## 6. Segmentation

Six dimensions, used in combination. Segments are queries on CRM fields, not static lists, so they update as data improves. Sizes are unknown; the first deliverable of the data audit (section 17, by 2 Dec) is a size table for each.

### 6.1 Dimensions
1. **Lifecycle stage** (S0-S10, L), the master dimension; decides which flow owns the contact.
2. **Product interest** (from R02 and strategy priority segments): classic safari + Cape Town + Garden Route (couples 45-65, core volume); 55+ active seniors (higher value, off-peak fill, 45-95k); honeymoon/anniversary; family (child-friendly, malaria-free, minimum age of lodges is a copy theme, R02); golf; wine and food; self-drive/road trip; guided Swedish-speaking vs tailor-made preference.
3. **Time window**: months to departure (0-3, 3-6, 6-12, 12+) and flexibility; drives urgency and which supply is available (the 2027 target is capped by held supply at Gate 0, 15 Dec).
4. **Value tier**: budget bracket (under 35k, 35-55k, 55-80k, 80k+ per person) [ASSUMPTION brackets from R02/R03 price ranges], and party size. High tier routes to the best-converting advisers (R11: agent conversion varies 2-3x).
5. **Relationship**: new, past customer 0-12 months, 12-36 months, 36+ months, referrer, reviewer, lost-quote, event/fair lead, B2B/affinity partner member (workstream 12 partners, L8), MICE-group contact (never mixed into leisure marketing; GL2 pilot only with consent).
6. **Engagement and risk**: engaged (click or visit in 90 days), dormant, open complaint (suppress marketing), travelling now (suppress marketing), recently returned (3 days, only service messages), unsubscribed, hard-bounced.

### 6.2 Priority segments and what each gets
| Segment | Definition | Primary treatment | Owner |
|---|---|---|---|
| A. Hot quote | S3/S4, quote age 0-30 days | Sales cadence (section 7, F2); no newsletter | Adviser |
| B. Warm quote | S3, 31-90 days | Slower cadence, new-idea email, decision call offer | Adviser |
| C. Lost quote | L, last 12 months, consent present | Win-back (F9) | CRM manager |
| D. Engaged subscribers, no enquiry | S0 with clicks in 90 days | Interest nurture (F4), call-to-quote | CRM manager |
| E. Booked, 90+ days to departure | S5-S7 | Pre-trip (F6) with add-on offers | Booking ops + CRM |
| F. Returned 0-90 days | S9 | Post-trip (F8) | CRM manager |
| G. Past customers 3-36 months | S10 / S9 older | Cross-sell, anniversary (F8, F10) | CRM manager |
| H. Advocates | Reviewer 4-5 stars, referrer | Referral, hosted departure invitations, story consent | CRM manager |
| I. 55+ and seniors' organisation leads | Interest tag + age band | Dedicated nurture with phone-first CTA; seniors' fairs follow-up | Head of Marketing |
| J. Fair and event leads | Resemässan, seniors' fairs, webinars | 48-hour follow-up (F11) | Adviser + CRM |

### 6.3 Lead scoring and routing (simple, v1 by 31 Jan 2027)
Points (all [ASSUMPTION], tune against won/lost data after 90 days): budget bracket 55k+ (+3), travel month within 9 months (+3), requested call (+3), pages viewed: price/itinerary (+2), repeat visit (+1), opened quote 2+ times (+2), kid under 12 and lodge minimum age issue (flag, product team), no response in 14 days (-2). Score 8+ routes to the highest-converting advisers and triggers a same-day call; below 3 goes to the nurture track with no call task. Routing never removes the 1-hour first reply for any lead.

---

## 7. Automation architecture

Priority rules between flows (to avoid collisions):
1. Service and transactional messages always send.
2. A contact in an active quote (S2-S4) receives only the sales cadence and service messages; newsletters and nurture are suppressed.
3. Booked contacts (S5-S8) receive only pre-trip and in-trip flows plus the monthly newsletter if consented, no promotional campaigns for other trips before departure except the pre-trip add-ons.
4. Max one marketing email per contact per 7 days; max 2 in 14 days across flows; SMS max 2 per booking before departure and 1 per month otherwise.
5. Open complaint, travelling now, and unsubscribed always suppress marketing.
6. Every flow has an exit on reply, booking and unsubscribe.

### 7.1 Flow catalogue

| ID | Flow | Trigger | Timing | Channel | Goal metric | Build priority |
|---|---|---|---|---|---|---|
| F1 | Enquiry acknowledgement | Form/chat/email enquiry | Instant | Email (service) + task to adviser | First human reply under 1 h | P0, by 30 Nov 2026 |
| F2 | Quote follow-up cadence | Quote sent (S3) | D0 quote, D2, D7, D14, D21, D30 (R11), then stop or long-term nurture | Email + adviser calls | Quote-to-booking, decision call booked | P0, by 30 Nov 2026 |
| F3 | Abandoned enquiry / saved itinerary | Started form or calculator, no submit; viewed itinerary 2+ times | 2 h, 2 days | Email (if identified) | Completed enquiries | P1, Q1 2027 |
| F4 | Interest nurture for subscribers | Guide download or newsletter signup, by interest tag | 6 emails over about 90 days (5, 12, 21, 35, 55, 80 days) | Email | Enquiry rate from subscribers | P1, Dec 2026 first track |
| F5 | Booking confirmation and payments | Booking, deposit due, balance due, failed payment | Immediate; reminders T-14 and T-3 before due date | Email + SMS (service) | Payment failure rate tracked against the vendor-reported 3-8% band (R11, Tier C); internal target below 3% [ASSUMPTION] | P0 with booking ops, Q1 2027 |
| F6 | Pre-trip | Departure date T-minus | T-120, T-90, T-60, T-45, T-30, T-14, T-7, T-3 | Email + SMS | Add-on share, readiness, fewer last-minute calls | P1, Feb 2027 |
| F7 | In-trip touch | Departure | Day 1 arrival check (service), mid-trip check-in | SMS/WhatsApp only if already used in service relationship | Early issue detection | P2, Q2 2027 |
| F8 | Post-trip | Return date | +3 days welcome home and rating (workstream 12), +10 review request (12), +14 referral, +45 photo/story, +90 next-trip, +300 anniversary/cross-sell | Email + SMS | Review, referral, repeat | P0 for the +14 referral ask (live 31 Dec 2026 as a personal "tipsa en vän" ask without reward; the reward version goes live with F10 in Feb 2027 once the CFO sets the reward policy); P1 for the rest, Q1 2027 |
| F9 | Win-back | Lost quote; past customer inactive; dormant subscriber | Lost quote at 60 and 150 days; past customers at 3 and 10 months (R11) | Email | Reactivated enquiries per 1,000, holdout-measured | P2, Q2 2027 |
| F10 | Referral and advocate | 4-5 star review or "yes" to referral | On trigger; reminders at +30 | Email + share link | Referral enquiries and bookings, L7 | P1, Feb 2027 |
| F11 | Event / fair / webinar lead | Lead import with source | 24 h, 7 days, 21 days | Email + call | Enquiry rate | P2, Q1 2027 |
| F12 | Hosted departure and VIP invitations | New hosted departure published (L5) | Launch, +7, +21 to segments I, G, H | Email | Seats sold | P2, Q3 2027 |
| F13 | Sunset and list hygiene | No engagement 12 months | Final ask, then suppression | Email | Complaint rate, deliverability | P2, Q2 2027 |

### 7.2 Flow specifications

**F1 Enquiry acknowledgement (service, instant).** Content: thanks, name of the adviser who will reply (routing rule), when they will reply (within 1 business hour, otherwise next working morning with times), what we need (month, travellers, budget bracket, interests) with a reply-to link, phone number, link to one useful page. Exit: adviser reply. Task created in CRM with SLA timer. Evenings and weekends: expectation stated honestly; duty rota is a Sales decision (capacity item, section 15).

**F2 Quote follow-up.** The one flow that carries L2.
- D0 (adviser, personal): quote/itinerary with 2-3 relevant reviews and a link to "Så här tycker kunder som rest samma resa" (workstream 12 O7), inclusions list, what the price includes and excludes, flexibility terms, resegaranti info, next step: a 20-minute decision call (calendar link).
- D2 (auto-email from adviser address): "Har du hunnit titta?", one question about the trip, two inline answers to common objections (when to go, safety, difficulty of the roads, malaria-free options for families).
- D7 (adviser call task, then email if unreached): offer a revision loop (R11: one revision, then decision call).
- D14 (email): a new idea, not a nudge: a variant of the route (shorter, cheaper, other season) or a short guide video from the actual departure; mention supply tightness only when true (from the supply tracker, never invented).
- D21 (call task + short email): ask for a decision date; offer to hold the trip if the supplier terms allow it (do not promise holds that supply cannot give).
- D30 (email): polite close: "Ska vi pausa din förfrågan?", option to move the date, reply with one word. Reply "pausa" sets stage L with reason; no reply moves to long-term nurture (only if consent) or F9 at day 60.
- Rules: stop on any reply or booking; quote value over the high-tier threshold gets an extra senior-adviser call; every touch logged; quotes older than 45 days without reply are flagged to Head of Sales weekly.
- Test (Q1 2027): D7 call versus D7 email only; measured on quote-to-booking at 30 days (matched by lead score, randomised by day of week).

**F3 Abandoned enquiry.** Only where the visitor is identified (previously consented or form partially filled with email). Email after 2 hours: "Din förfrågan blev inte klar" with a saved link and a "ring mig" option; second email after 2 days with one FAQ. Cookie consent limits this flow; expect small volume (R09: tracking shrinks without consent).

**F4 Interest nurture.** Tracks by interest (safari/classic, honeymoon, family, golf, wine and food, self-drive, 55+). Six emails: (1) the promised guide plus what to do next; (2) best time to go for that interest (links to SEO hub); (3) real itinerary with price-from and what it includes; (4) customer story with licence (workstream 12); (5) "Vanliga frågor", safety, malaria, driving, tipping; (6) invitation to a no-obligation 20-minute call. Branch on clicks: two or more price/itinerary clicks creates an S1 prompt "Vill du ha ett förslag?" to the adviser.

**F5 Booking confirmation and payments (service).** Booking confirmation with contract, pre-contract information and standardised blocks (R09), resegaranti standard form, named adviser, deposit and balance dates and amounts, payment methods, what happens next, what to prepare. Reminders before due dates, failed payment fix within 24 h. No cross-sell in this flow.

**F6 Pre-trip.**
| Time | Message | Type |
|---|---|---|
| T-120 | Welcome to the trip: what to prepare, passport validity, visa and health information link (official sources, [VERIFY] each) | Service |
| T-90 | Add-ons: extension nights (Cape Town, Winelands, Garden Route), upgraded transfers, a safari activity; one card per add-on with a "ja tack" button creating a CRM task | Marketing/offer (consent), or service if integral to the booked trip [VERIFY] |
| T-60 | Meet your guide / lodge preview, packing guide, weather expectations for the month | Service/content |
| T-45 | Insurance and travel documents reminder: link to the insurer or the insurance question (see section 5) | Service |
| T-30 | Final details, flights and times, baggage rules, currency and card tips | Service |
| T-14 | Final payment confirmed, document pack, jourtelefon number, what to do if something happens | Service |
| T-7 | Weather, packing checklist, check-in links | Service |
| T-3 | SMS: departure reminder and jourtelefon number | Service |
Add-on revenue is tracked by add-on code and departure; pass-through cost add-ons add turnover but not margin (strategy L6), so the dashboard reports add-on margin, not only revenue.

**F8 Post-trip (aligned with workstream 12).** +3 days "Välkommen hem" with one-question rating (12); +10 days review request (12); +14 days referral message (this workstream, separate message so it is not conflated with review, 12 section 5); +45 days "Dina bilder" (photo sharing, story consent); +90 days next-trip idea matched to interest and spend (Southern Africa neighbours, other long-haul, R11); +300 days anniversary "Ett år sedan" with a soft return offer. Detractor path: if the rating is 1-3 or free text signals a problem, the flow stops, a task goes to Head of Sales for a call within 1 working day, and marketing is suppressed until closed. Never gate review invitations by satisfaction (12 section 3, principle 1).

**F9 Win-back.** Lost quote at 60 days: "Är resan fortfarande aktuell?" with a new item (new departure, new season, freed-up room); at 150 days: seasonal content. Past customers at 3 months: not a sales push but story + question about next trip interest (builds preference data); at 10 months: anniversary-based invitation (R11 anniversary logic) with preview of next season's departures. All win-back flows run with a 10% holdout (no send) to measure incremental bookings.

**F10 Referral.** Triggered at +14 days and again for 4-5 star reviewers. Dual benefit [ASSUMPTION]: a value credit for the referrer on the next trip (for example SEK 1,000-2,000 as travel credit, only on a completed booking) and a pre-trip call or small extra for the friend, set by CFO with margin floor (strategy: 15% post-commission floor applies to B2B; for referral, cost must keep the booking above the planning margin of 20%). Personal share link and a "tipsa en vän" reply option. Disclose the benefit clearly. Reward is paid only after the friend's trip departs, to avoid paying on cancellations [ASSUMPTION].

**F11 Event leads.** Within 24 h personal email from the adviser who met them with the fair-specific offer, day 7 relevant itinerary, day 21 call invitation. Consent captured on the lead card; no consent means personal 1:1 mail only about their request.

**F12/F13** as in the catalogue; specifics defined in Q3 2027 build.

### 7.3 Campaign (batch) calendar
Monthly newsletter (S0, G, H, booked with consent) and 6-8 campaigns a year, themed to the L10 season-spreading lever and supply availability. [ASSUMPTION: the main Swedish booking season for long-haul is January-March and again late summer; confirm from the 2025-2026 booking dates in CRM.]

| Month | Theme | Segment | Note |
|---|---|---|---|
| Nov 2026 | "Planera Sydafrika 2027": best time, supply status | D, G, C | Only departures held at Gate 0 (15 Dec) |
| Dec 2026 | Gift/plan-for-new-year, call booking | D, C | Holiday week staffing |
| Jan 2027 | Peak booking: "Din Sydafrikaresa 2027", adviser Q&A | all consented | 24 MSEK of 2027 departures by 31 Mar 2027 (core checkpoint) |
| Feb-Mar 2027 | Limited seats and shoulder-season highlights | D, B | Only true scarcity |
| Apr-May 2027 | Apr-May and green-season offer (L10) | I, D | Value, not discount |
| Jun-Aug 2027 | 2028 departures early planning; hosted departure announcement (L5) | G, H | 19 MSEK of 2028 departures by 31 Dec 2027 |
| Sep-Nov 2027 | Sep-Nov offer (L10), 2028 plans, anniversary mailings | all | |
| Quarterly | Customer story issue; "Fråga en som varit där" (12) | all | |

---

## 8. Sales and CRM operating routines (the part that makes automation pay)

Joint with Head of Sales. Elements already in strategy P3 are repeated for completeness.
- **SLA**: instant acknowledgement, human reply within 1 business hour (30 minutes from 2027 H2), same-day proposal outline, itinerary within 24-48 h (R11).
- **Daily**: each adviser sees tasks sorted by lead score and quote age; overdue tasks escalate to Head of Sales at noon.
- **Weekly**: pipeline by travel month; conversion by adviser, source and destination; stale quotes list; lost reasons coded (price, timing, competitor, supply, trust, no response).
- **Coaching**: monthly call/mail review (record calls only with a notice and legal basis [VERIFY]); share the top adviser's templates; budget in section 13.
- **Capacity maths** [ASSUMPTION]: about 1,950 quotes in 2027 (section 3) is about 38 per week; two human follow-up touches per quote of about 10 minutes is about 13 adviser hours per week on follow-up; 2028 at about 2,680 quotes (3,348 x 0.8) is about 51 per week and about 17 hours. Strategy hire plan (hire 1 and booking-ops coordinator pre-approved) must be sized with this. Workload hours are illustrative (strategy A18).
- **Lost reasons** feed product (02), pricing (03) and the ads team monthly.

---

## 9. List growth (feeds F4)

Consented first-party data is the main owned channel (R09 section 5 recommendation). Sources, all with double opt-in and interest tag at capture:

| Lead magnet | Where | Feeds interest tag | Owner / dependency |
|---|---|---|---|
| "Bästa tid att resa till Sydafrika" PDF/checklist by month | SEO best-time hub (workstream 05) | classic, general | SEO lead builds page, CRM builds form |
| "Vad kostar en Sydafrikaresa" calculator with email-me-the-result | Cost guide and budget calculator (05) | value tier | Analytics + SEO |
| Safari guide: Kruger and private reserves compared | Safari pillar | safari | SEO |
| Family guide: malaria-free reserves and lodge minimum ages (R02 gap) | Family landing page | family | SEO + Product |
| Golf and wine guides | Segment pages | golf, wine/food | SEO |
| Webinar "Planera Sydafrika" with adviser and guide | Social, ads, email | all | Head of Marketing (12 hosted-departure content) |
| Fair and seniors' event leads | Resemässan, seniors' fairs (strategy segment 2) | 55+ | Partnerships |
| Checkout/booking: marketing opt-in unticked | Booking flow | all | Dev |
| Newsletter sign-up in footer and exit-intent | Site | general | Dev |

Rules: no prize draws or mandatory sign-up for price information; no sale of list; capture "when are you thinking of travelling" (month) in the form (zero-party data). Landing page conversion tested by A/B (each extra field costs conversion, R11 vendor claim, hence test not assume).

---

## 10. Joint requirements with the website/quote form (workstream 04)

1. Quote form with budget bracket, number of travellers, month, interests, phone (optional), consent boxes; UTM and landing page captured server-side.
2. "Book a call" calendar link on itinerary pages, in all quotes and in D2/D14/D21 mails.
3. Quote delivered as a web page ("Din resa") with tracked opens, rather than only a PDF, so engagement feeds the lead score [ASSUMPTION: feasible with chosen CRM; otherwise PDF plus tracked link].
4. Review snippets and live rating injected into quote emails (12 O7).
5. Preference centre page (interests, frequency, SMS, unsubscribe, delete my data).
6. Cookie-banner-aware tracking: first-party identifier for logged-in or emailed-link visitors where consent allows, server-side event for form submit and booking, offline conversion import of bookings back to ad platforms (strategy P3/measurement, with workstreams 06, 07).
7. Booking events sent to email platform in near-real time.

---

## 11. Measurement and testing

Dashboard (weekly, part of the strategy's one-page dashboard): response time, quote rate, close rate by source (existing vs new), by adviser, quotes by age, flows: sends, delivered, click rate, replies, bookings, revenue per recipient, unsubscribe and complaint rate, consent coverage of customers, referral asks sent and referral bookings, repeat+referral share, add-on attach rate and margin, win-back bookings vs holdout.

Attribution rule for this workstream: a booking is "email-assisted" if the household replied to or clicked a CRM email in the 30 days before booking; this is reported but never added to the bridge. Incremental claims for F2, F9 and F10 are accepted only from holdouts or randomised tests:

| Test | Design | Window | Decision |
|---|---|---|---|
| T1 Quote cadence vs minimal follow-up | 85/15 split on new quotes, the minimal arm still receives D0 and D30 and a human reply on request, never denied service | Jan-Jun 2027 | 1.5 pp is the practical-significance target, not a significance test: at about 290 minimal-arm quotes it cannot be detected reliably. Decide on the pooled direction and ranges across quarters; keep F2 unless the pooled result is zero or negative [ASSUMPTION threshold] |
| T2 D7 call vs email | Randomise by day | Q1-Q2 2027 | Allocate call time |
| T3 Quote email with vs without review proof page | per workstream 12 test 2 | Apr-Jun 2027 | Roll out proof |
| T4 Win-back vs 10% holdout | Random | Q2-Q4 2027 | Keep/kill F9 |
| T5 Referral reward size | SEK 1,000 vs 2,000 credit | H2 2027 | Reward policy |
| T6 Send time and subject style | Newsletter A/B | ongoing | Playbook |
| T7 Lead magnet landing pages | A/B | Q1 2027 | Form fields, magnet |

Statistical honesty: with about 1,950 quotes a year, a 15% holdout is under 300 quotes; effects below 3-4 pp will not be detectable at conventional confidence. We accept directional results, pool across quarters and say so in reports; no bonus or budget is tied to a single test.

---

## 12. Timeline

| When | Milestone | Owner |
|---|---|---|
| 2 Nov-2 Dec 2026 | 30-day plan (section 17): data audit, consent audit, DNS, platform decision, F1/F2 live, 8 templates | CRM manager |
| By 30 Nov 2026 | Stage definitions and consent fields live in CRM; quote cadence running as tasks; first weekly dashboard | CRM manager + Head of Sales |
| By 15 Dec 2026 | Segment size table; Gate 0 inputs (consent coverage, list size, repeat definition) | CRM manager |
| By 31 Dec 2026 | Sending domain warmed, F4 first track (classic) live, F8 referral flow live with workstream 12 review flow, newsletter v1 | CRM manager |
| Jan 2027 | Peak booking month: weekly cadence review; lead scoring v1 (31 Jan); full baseline (60-day review) | Head of Sales / CRM manager |
| Feb 2027 | F6 pre-trip live; F10 referral live; interest tracks 2-4 | CRM manager + booking ops |
| 31 Mar 2027 | Gate 1 checkpoint: 24 MSEK of 2027 departures; response SLA met (Gate 1 condition, CRM supplies the evidence); quote cadence compliance 60%; consent coverage baseline reported | CEO / Head of Sales |
| Q2 2027 | F3 abandoned enquiry, F9 win-back, F11 events; T1-T4 reading; 80% cadence compliance; Gate 2 (30 Jun) input: close rate trend | CRM manager |
| Q3 2027 | F12 hosted departure invitations; preference centre complete; review of reward policy | CRM manager |
| Q4 2027 | 2028 planning mailings; 95% cadence compliance; 19 MSEK of 2028 departures by 31 Dec 2027 | Head of Sales |
| 2028 | Optimise: scoring v2, predictive segments (only if data volume supports, otherwise skip), SMS/WhatsApp expansion if service model allows, cross-sell Southern Africa and other long-haul, B2B/affinity member mailings (L8) | CRM manager |
| Quarterly | Playbook review, list hygiene, consent audit, deliverability audit | CRM manager / DPO |

---

## 13. Budget (SEK)

Frame: strategy line 11.1 "CRM automation, review programme, community" = 0.05 MSEK Q4 2026, 0.30 MSEK 2027 and 0.35 MSEK 2028, all committed. That line also funds workstream 12 (review platform and community), so this plan takes 0.04 / 0.22 / 0.26 MSEK and leaves only 0.01 / 0.08 / 0.09 MSEK for workstream 12 [ASSUMPTION split; confirm with the 12 owner by 10 Nov]. That remainder looks thin for a review platform plus community; if workstream 12 needs more, this plan's lead-magnet and design lines are cut first, and the strategy line is not raised. Salaries and one-off technology builds are outside the line (strategy sections 11, 12).

| Item (marketing line) | Q4 2026 | 2027 | 2028 | Basis |
|---|---|---|---|---|
| Email/automation platform licence and SMS credits | 10,000 | 80,000 | 98,000 | [ASSUMPTION] mid-tier plan for 5-15k contacts, EU hosting; SMS about SEK 5-8k a year; replace with quotes |
| Deliverability set-up and monitoring (DMARC reporting, seed tests, warm-up support) | 5,000 | 12,000 | 12,000 | [ASSUMPTION] |
| Swedish copywriting and editing of templates, flows, newsletters | 12,000 | 40,000 | 45,000 | [ASSUMPTION] about 160 h a year at an external rate, plus internal adviser input |
| Email design system (modular templates, brand, dark mode checks) | 8,000 | 35,000 | 30,000 | [ASSUMPTION] |
| List growth: lead magnet production (PDFs, calculator email result, webinar tooling) | 0 | 25,000 | 40,000 | [ASSUMPTION], excludes SEO content cost (workstream 05) |
| Testing, analytics and dashboard build | 5,000 | 10,000 | 15,000 | [ASSUMPTION] |
| Sales follow-up coaching and template training | 0 | 20,000 | 20,000 | [ASSUMPTION] about two workshops plus monthly review hours |
| **Total marketing line, workstream 13** | **40,000** | **222,000** | **260,000** | Within 50k / 300k / 350k line |

Costs outside the marketing line (flag to CFO, belong to strategy section 12 P&L):

| Item | 2027 | 2028 | Where |
|---|---|---|---|
| Technology builds: CRM events, quote-as-web-page, preference centre, booking-to-email integration | SEK 150,000-250,000 of the 0.6 MSEK tech-build line (25-42%, shared with site, quote form and tracking: CFO to confirm the share does not crowd out workstream 04) | SEK 50,000-100,000 of 0.3 MSEK | Strategy 12 "Technology builds: CRM, quote form, site, tracking", [ASSUMPTION share] |
| CRM manager (named owner) | **Not in the strategy's FTE plan.** The strategy's +5 FTE are consultants, a booking-ops coordinator and a product/contracting manager (strategy 12.1). This plan assumes an existing employee gives about 0.5 FTE (about SEK 0.35 M a year loaded) [ASSUMPTION]. A dedicated hire would add up to SEK 0.7 M a year to the P&L and is a CEO decision | not costed | Strategy A18, loaded SEK 0.7 M per FTE |
| Referral rewards | about SEK 10,000-50,000 (10-25 bookings x SEK 1,000-2,000, part paid in 2028 because paid after departure) | about SEK 30,000-120,000 (30-60 bookings x SEK 1,000-2,000) | Sits inside the strategy 12.1 envelope "partner commissions, affiliate pay, referral rewards" (0.15 / 0.50 MSEK); in 2028 it fits only while partner commissions stay below about 0.4 MSEK. Also counts toward the 2% promotions cap (G2) [ASSUMPTION] |
| Add-on pass-through costs | in cost of sales | in cost of sales | Reported in margin, not here |
| Legal review of consent text, privacy policy and flows (DPO/counsel) | SEK 15,000-30,000 | SEK 10,000 | Legal budget [ASSUMPTION] |

Governance: spend gates follow the strategy (irreversible commitments before 31 Jan 2027 limited). The platform decision is annual and cancellable; no multi-year contract before the 60-day baseline review. If Gate 2 (30 Jun 2027) shows margin at risk, F9/F12 are the first to be cut; F1, F2, F5, F8 and F10 are protected because they cost little and protect the order book.

---

## 14. Owners (by role)

| Role | Responsibility in this workstream |
|---|---|
| CEO | Resource decisions (hire 1 allocation), consent and data requests, sponsor of SLA culture |
| Head of Sales | SLA, cadence compliance, routing, coaching, call duty rota, detractor calls |
| CRM manager (named owner of this workstream) | Platform, stages, flows, segmentation, calendar, dashboards, tests |
| Head of Marketing | Newsletter themes, lead magnets, campaigns, hosted-departure announcements |
| Analytics lead | Tracking, holdouts, offline conversion import, dashboard |
| Booking ops coordinator | Booking and payment events, F5 accuracy, pre-trip document pack |
| Head of Product | Departure calendar, supply status feeds, itinerary variants for D14 |
| CFO | Referral reward and add-on margin floors, price statements, insurance/resegaranti claim sign-off |
| Legal/DPO (external if needed) | Consent wording, lawful basis, insurance distribution, retention |
| Developer / agency | Form, events, preference centre, quote page |

RACI summary: Platform decision R CRM manager, A CEO; F2 R Head of Sales, A CEO; consent text R CRM manager + Legal, A CEO; F6 add-ons R Head of Product, A CFO for margin.

---

## 15. Dependencies

1. Gate 0 data pack (consent coverage, list size, enquiry sources, response times) by 6 Nov request, 15 Dec answer.
2. CRM/booking system capability (events, API); fallback described in section 4.2.
3. Workstream 12: shared consent, review/referral messages, proof library, no gating.
4. Workstream 04/05: lead magnets, forms, quote page, hub URLs and interest tags.
5. Workstreams 06/07/09: Customer Match lists, exclusion lists (do not retarget booked customers), offline conversions.
6. Workstream 02/03: departure calendar, "from" prices and FX policy before any fixed-price publication, supply-held numbers at Gate 0.
7. Sales capacity: evening/weekend coverage and hiring decision.
8. Legal confirmations (section 5).
9. Review of insurance and package-law wording in pre-trip flows.

---

## 16. Risks

| ID | Risk | Likelihood / impact | Early signal | Mitigation | Owner |
|---|---|---|---|---|---|
| E1 | Consent coverage too low to run nurture/win-back | M / H | Under 40% of past customers carry consent | Re-permission campaign if lawful; lean on service messages and personal adviser mail; build opt-ins into booking and post-trip | CRM manager |
| E2 | CRM cannot emit events or is hard to change | M / H | Integration estimate over 250k or 8 weeks | Task-based fallback; evaluate swapping; keep cadence manual until integrated | CRM manager |
| E3 | Deliverability harm (domain reputation, complaints) | M / H | Complaint rate over 0.1%, inbox placement falling | Separate subdomain, warm-up, cleanups, frequency caps | CRM manager |
| E4 | Sales capacity can't carry the SLA and cadence | H / H | Overdue tasks, response median over 4 h | Prioritise by score, auto-acknowledge, hire, reduce D7 calls to top-scored leads | Head of Sales |
| E5 | Automated nudging feels pushy and hurts premium positioning | M / M | Unsubscribes, negative replies | Human-voice copy, no countdown pressure, no false scarcity, quarterly tone review | Head of Marketing |
| E6 | Regulatory breach (consent, insurance distribution, package information, price claims) | L / H | Counsel feedback, complaints to Konsumentverket or IMY | Legal sign-off on templates, evidence logs, conservative defaults | Legal/DPO |
| E7 | Discounting or add-on offers erode margin (strategy R3, A7 at 20% planning margin) | M / H | Margin per booking falls | Value-add not price cuts; margin floor on add-ons and rewards | CFO |
| E8 | Attribution inflation: email credited for bookings that would have happened | H / M | Email-assisted share rising without total close-rate change | Holdouts, no bridge additions, report close-rate on whole flow | Analytics lead |
| E9 | Overpromise in pre-trip (24/7 local presence, fixed prices, availability) | M / H | Complaints | Copy review rule; use "jourtelefon under resan"; hold claims until costed | Head of Sales |
| E10 | Complaint/reputation spike under volume (R9): marketing sent to unhappy customer | M / M | Mail to open-complaint contact | Automatic suppression, complaint flag in data model | CRM manager |
| E11 | Small samples make tests inconclusive | H / L | Wide intervals | Pool quarters, accept directional learning | Analytics lead |

---

## 17. First 30 days (2 November to 2 December 2026)

| By | Action | Owner | Output |
|---|---|---|---|
| 6 Nov | Data request to CEO/CFO: CRM system and admin, list size, consent records, bookings 2019-2026 with email/phone and consent, complaint log, current templates, ESP, sending domain, insurance status | CRM manager -> CEO | Request logged in Gate 0 pack |
| 6 Nov | Name the workstream owner (CRM manager role) and a Sales counterpart | CEO | Names agreed |
| 10 Nov | Legal brief sent: consent wording, existing-customer exception, enquiry follow-up basis, insurance mention, retention; agree review slots | CRM manager | Brief + Legal ETA |
| 10 Nov | Agree budget split with workstream 12 owner | CRM manager | Split confirmed |
| 13 Nov | Funnel snapshot: last 12 months enquiries -> quotes -> bookings by source and adviser; response times; median lag | Analytics lead | Baseline v0 |
| 13 Nov | DNS check and fix: SPF, DKIM, DMARC for main and marketing subdomain | Developer | Authenticated sending |
| 16 Nov | Platform shortlist and selection criteria; demos with 3 options (or decision to use existing) | CRM manager | Recommendation memo |
| 18 Nov | Stage definitions (S0-S10, L), required fields, lost reasons, consent fields specified; workshop with Head of Sales and advisers | CRM manager | Signed-off spec |
| 20 Nov | Strategy deadline: speed-to-lead SLA live (strategy 16.1). Manual acknowledgement template and rota in use; quote follow-up cadence rules, call tasks and SLA timers in CRM (F2) | CRM manager + Head of Sales | SLA live; F2 usable as manual call tasks (D0 is the personal quote; no automated D2+ mail until templates are approved on 25 Nov) |
| 23 Nov | F1 automated acknowledgement email live with named adviser and honest reply times | Developer + Head of Sales | Live |
| 25 Nov | 8 Swedish templates approved: ack, D2, D7 (call-miss and email-only variants), D14, D30, abandoned, referral +14, newsletter welcome; Legal review of footer, consent copy and the 30-day follow-up window (section 5); D2-D30 automated sends start after this date | CRM manager | Approved |
| 27 Nov | Sales kick-off on cadence and SLA; daily task list and weekly stale-quote report running | Head of Sales | Compliance tracking started |
| 30 Nov | Platform decision signed (annual, cancellable); consent capture added to forms and booking; stage fields live | CEO / CRM manager | Contract; v1 stages |
| 30 Nov | First weekly dashboard (response time, quotes by age, cadence compliance, consent coverage) | Analytics lead | Dashboard v1 |
| 2 Dec | Segment size table from the data audit; list hygiene started; warm-up plan for marketing subdomain | CRM manager | Segment table; warm-up scheduled |
| 2 Dec | Retro and re-plan for Dec/Jan peak; list of data gaps to bring to Gate 0 (15 Dec) | CRM manager | Gate 0 inputs |

Success test at day 30: every new enquiry gets an instant acknowledgement and a named adviser; every quote has a follow-up schedule; consent is captured on every form; the dashboard shows real response times. Revenue effect will not be visible in 30 days and should not be claimed.

---

## 18. Sample Swedish content

Notation: `[ ]` = merge field or fact to confirm. Signature always from the named adviser. The tone is warm, concrete, du-tilltal, no urgency tricks. Every marketing mail has the footer in 18.12. Facts in brackets must come from the company; none are asserted here. Tilltal: "du" to the reader, "ni" for the travelling party. Brand name "Sydafrikaresor" and "sedan 2003" are the client's own claims (R03) and must be confirmed (W13-21). "Sydafrikaspecialisten sedan 2003" is the strategy's positioning line.

### 18.1 F1 Acknowledgement (service, instant)
**Ämne:** Tack för din förfrågan, [Förnamn]
**Förhandsvisning:** [Rådgivare] hör av sig inom en timme under kontorstid.

Hej [Förnamn],

Tack för att du hör av dig om en resa till Sydafrika. Din rådgivare heter [Rådgivarens namn] och hör av sig till dig [inom en timme under vardagar kl [tid]-[tid] / senast [dag] kl 10 om du skrev efter stängning].

För att ge dig ett förslag som passar behöver vi veta lite mer. Svara gärna på det här mejlet eller boka ett kort samtal här: [länk till kalender].
- Ungefär när vill ni resa, och hur flexibla är ni?
- Hur många reser, och finns det barn med? Hur gamla?
- Vad lockar mest: safari, Kapstaden, vin och mat, golf, självkörning?
- Ungefär vilken budget per person tänker ni er?

Du når oss även på [telefonnummer], [öppettider].

Varma hälsningar
[Rådgivarens namn]
Sydafrikaresor, Sydafrikaspecialisten sedan 2003

### 18.2 F2 D2, "Har du hunnit titta?" (from adviser address)
**Ämne:** Har du hunnit titta på förslaget, [Förnamn]?
**Förhandsvisning:** Två vanliga frågor, och ett erbjudande om ett kort samtal.

Hej [Förnamn],

Jag skickade ett reseförslag till dig för två dagar sedan: [länk till "Din resa"]. Jag vill bara höra om det känns rätt eller om något behöver justeras.

Det vi oftast får frågor om är:
- **Är det säkert att resa runt i Sydafrika?** [kort, faktabaserat svar och länk till säkerhetssidan]
- **Vilken tid på året passar bäst för er resa?** [kort svar för deras månad och länk till bästa-tid-sidan]

Vill du att vi tar ett kort samtal på 20 minuter? Välj en tid här: [kalenderlänk]. Du kan också bara svara på det här mejlet så ändrar jag förslaget efter dina önskemål, [till exempel färre nätter, ett annat boende eller en annan månad].

Hälsningar
[Rådgivarens namn]
[Direktnummer]

### 18.3 F2 D7, call-miss follow-up
**Ämne:** Jag försökte nå dig, [Förnamn]
**Förhandsvisning:** Några rader om hur vi kan gå vidare med er resa.

Hej [Förnamn],

Jag ringde dig i dag angående er resa till Sydafrika men fick inte tag på dig. Inga problem alls. Jag justerar gärna upplägget så att det passar er bättre [om bekräftat av ekonomi: en gång utan kostnad], till exempel med [kortare resa / annan årstid / annat budgetspann].

Skriv ett par rader om vad som känns fel eller saknas, så fixar jag det. Eller boka en tid som passar dig: [kalenderlänk].

Hälsningar
[Rådgivarens namn]

**Variant för e-postgrenen i test T2 (inget samtal har gjorts)**
**Ämne:** Några frågor om ditt reseförslag, [Förnamn]
**Förhandsvisning:** Säg vad som känns fel, så justerar jag.

Hej [Förnamn],

Det har gått en vecka sedan jag skickade ditt förslag på en resa till Sydafrika. Jag vill gärna veta om något behöver ändras, till exempel [kortare resa / annan årstid / annat budgetspann].

Skriv ett par rader om vad som känns fel eller saknas, så fixar jag det. Eller boka ett kort samtal här: [kalenderlänk].

Hälsningar
[Rådgivarens namn]

### 18.4 F2 D14, a new idea
**Ämne:** En annan variant av er Sydafrikaresa
**Förhandsvisning:** Samma känsla, [kortare/annorlunda] upplägg.

Hej [Förnamn],

Jag har funderat på er resa. Utifrån vad du berättade om [intresse, till exempel "djurupplevelser och mat och vin"] skulle jag vilja visa en variant: [kort beskrivning, till exempel "en natt mer i Kruger och ett vinhus i Winelands"]. Resan är [antal] dagar och kostar från [pris] kr per person [pris per datum, och om flyg ingår eller inte, hämtas från prisverktyget; obligatoriska kostnader ska vara inräknade].

Det som ingår är [kort lista: boende, guide, transfers, vad som inte ingår]. [Om det stämmer: Just den avresan har [antal] platser kvar.]

Vill du att jag skickar hela upplägget? Svara "ja" så fixar jag det.

Hälsningar
[Rådgivarens namn]

### 18.5 F2 D30, polite close
**Ämne:** Ska vi pausa din förfrågan, [Förnamn]?
**Förhandsvisning:** Inget tryck. Svara med ett ord om du vill.

Hej [Förnamn],

Det har gått en månad sedan jag skickade ditt reseförslag, och jag vill inte tjata. Svara gärna med ett av dessa ord så vet jag hur jag ska hjälpa dig bäst:
- **"Boka"** om du vill gå vidare, så ringer jag.
- **"Ändra"** om förslaget behöver justeras.
- **"Senare"** om ni vill resa en annan tid. Jag hör av mig igen i [månad].
- **"Pausa"** om ni inte längre planerar resan. Då avslutar jag förfrågan och skickar inget mer.

Hälsningar
[Rådgivarens namn]

### 18.6 F3 Abandoned enquiry (only for identified contacts)
**Ämne:** Din förfrågan blev inte klar
**Förhandsvisning:** Fortsätt där du slutade, eller ring oss.

Hej [Förnamn],

Det ser ut som att du började fylla i en förfrågan om en resa till Sydafrika men inte hann klart. Du kan fortsätta där du slutade här: [sparad länk]. Vill du hellre prata med en rådgivare ringer du [telefon] eller bokar en tid här: [kalenderlänk].

Hälsningar
Sydafrikaresor

### 18.7 F6 T-90, add-ons (marketing/offer, send only with consent or if integral service per Legal)
**Ämne:** Fler dagar i Kapstaden? Förslag inför din resa den [datum]
**Förhandsvisning:** Tre tillägg som våra resenärer ofta väljer.

Hej [Förnamn],

Det är [antal] veckor kvar till er resa. Många av våra resenärer vill gärna lägga till något extra när de vet hur resan ser ut. Tre förslag:
1. **Förläng med [antal] nätter i [Kapstaden/Winelands/Garden Route].** [Kort beskrivning] Pris per person: [pris].
2. **Uppgradera transfern till [privat transfer med guide].** Pris: [pris].
3. **Lägg till [aktivitet, till exempel valsafari eller vinprovning].** Pris: [pris].

Vill du ha något av dem? Klicka "Ja tack" så kontaktar [Rådgivarens namn] dig inom en arbetsdag och bekräftar tillgänglighet. Du betalar ingenting förrän du fått en bekräftelse. Prisinformation och villkor finns i varje erbjudande.

Hälsningar
[Rådgivarens namn]

### 18.8 F8 +14 days, referral (separate from review)
**Ämne:** Känner du någon som drömmer om Sydafrika?
**Förhandsvisning:** Tack för att du reste med oss. Dela gärna med dig.

Hej [Förnamn],

Vi hoppas att ni kom hem nöjda och full av minnen. Tack för att ni reste med oss. [Skickas inte om resan har en öppen reklamation eller betyget i +3-mejlet var 1-3.]

Om du har en vän eller släkting som funderar på Sydafrika vill vi gärna hjälpa dem på samma sätt. Så fungerar det:
- Din vän får [förmån, till exempel ett förberedande samtal med oss och en extra [småförmån]].
- När din väns resa har genomförts får du [värde, till exempel ett resetillgodo på [belopp] kr] att använda på nästa resa. [Villkor, giltighet och att tillgodot gäller efter genomförd resa.]

Din personliga länk: [länk]. Eller svara på det här mejlet med ett namn, men bara om din vän har sagt att det är okej att vi hör av oss.

Tack igen.
[Rådgivarens namn]

### 18.9 F9 Win-back, lost quote at 60 days
**Ämne:** Är Sydafrika fortfarande aktuellt, [Förnamn]?
**Förhandsvisning:** Nytt för [månad/år], om ni fortfarande funderar.

Hej [Förnamn],

För ett tag sedan fick du ett förslag på en resa till Sydafrika. Om planerna har ändrats är det helt okej. Om ni fortfarande funderar vill jag berätta att [nyhet, till exempel "vi har öppnat avresor för [månad]" / "en ny variant med [innehåll]"].

Svara på det här mejlet om du vill att jag tittar på ett nytt förslag, eller klicka här om du inte längre planerar resan: [länk]. Då hör vi inte av oss mer.

Hälsningar
[Rådgivarens namn]

### 18.10 F9 Past customer at 10 months, anniversary
**Ämne:** Snart ett år sedan Sydafrika
**Förhandsvisning:** Hur var det, och vart vill ni nästa gång?

Hej [Förnamn],

Snart har det gått ett år sedan er resa till Sydafrika. Vi undrar: vad är det första ni tänker på när ni ser tillbaka? Svara gärna med några rader, vi läser alla svar.

Och om ni börjat drömma om nästa resa: många av våra resenärer kombinerar Sydafrika med [grannland, till exempel Botswana, Namibia eller Moçambique] eller väljer något helt annat, till exempel [alternativ, till exempel "en rundresa i Namibia"]. Vill du att [Rådgivarens namn] tar fram ett förslag utan förpliktelser? Klicka här: [länk] eller ring [telefon].

Varma hälsningar
[Rådgivarens namn]

### 18.11 Newsletter welcome (after double opt-in)
**Ämne:** Välkommen, här är din guide: [guidens namn]
**Förhandsvisning:** Och vad du kan förvänta dig av oss.

Hej [Förnamn],

Tack för att du vill ha vårt brev. Här är guiden du bad om: [länk]. Vi skriver ungefär en gång i månaden och skickar bara sådant vi själva skulle vilja läsa: tips från våra rådgivare och guider, resor som är värda att uppmärksamma och berättelser från resenärer.

Berätta gärna vad du är mest intresserad av, så skickar vi rätt saker: [länk till preferenscentret].

Vill du prata med en rådgivare om en resa? Ring [telefon] eller boka en tid här: [kalenderlänk].

Hälsningar
[Namn], Sydafrikaresor

### 18.12 Footer for marketing emails
Du får det här mejlet för att du [anmälde dig till vårt nyhetsbrev den [datum] / har rest med oss och vi skickar information om liknande resor]. [Avregistrera dig med ett klick] eller [ändra dina val]. Så behandlar vi dina uppgifter: [länk till integritetspolicy]. Sydafrikaresor, [organisationsnummer], [adress]. Resegaranti: [uppgift och länk till Kammarkollegiets sökning, enbart om bekräftat av ekonomi]. [Standardtext om paketresor enligt R09 när relevant.]

### 18.13 SMS samples (service only unless SMS marketing consent)
- Betalning: "Hej [Förnamn], restbetalningen för din Sydafrikaresa [belopp] kr förfaller [datum]. Betala här: [länk]. Frågor? Ring [telefon]. /Sydafrikaresor"
- T-3: "Hej [Förnamn], nu är det snart dags! Din avresa är [datum]. Samlade resehandlingar: [länk]. Jourtelefon under resan: [nummer]. Trevlig resa! /Sydafrikaresor"
- Efter resan (om samtycke finns): "Välkommen hem, [Förnamn]! Hur var resan? Svara 1-5, så ser [Rådgivare] till att vi lär oss av din resa. /Sydafrikaresor"

### 18.14 Copy rules
No "billigast", no countdown timers that are not real, no scarcity that is not in the supply tracker, no "24/7 på plats". Use "jourtelefon under resan". Prices shown as "från-pris" with date and what is included. All Swedish copy goes through a native editor and Legal review once per template family.

---

## 19. Adviser playbook (short)

1. Reply within the SLA; first line is the answer, not a greeting.
2. Always offer a 20-minute call; ask three questions: when, who, what excites you.
3. Write the quote around their words, not a catalogue.
4. Log every touch and a lost reason.
5. Use the five-touch cadence; stop on a "no".
6. Ask for the referral and the review at the right moment (workstream 12 flows), never in the same message.
7. Tag interests and sensitivities (family minimum ages, mobility, dietary) in the record for later flows.

---

## 20. Assumptions register (replace with company data)

| # | Assumption | Rationale / source | Replace with |
|---|---|---|---|
| W13-1 | Budget split with workstream 12: 0.04 / 0.22 / 0.26 MSEK for this plan | Strategy line 11.1 shared | Agreed split by 10 Nov |
| W13-2 | Prior booking households about 1,250 behind the "10% rebook or refer" logic | Derived from 125 bookings / 10% (strategy L7) | CRM count of customers 2019-2026 |
| W13-3 | Consent coverage 60% of past-customer pool by end 2027 | Planning target | Actual consent audit |
| W13-4 | New double-opt-in subscribers 300 / 1,000 / 2,500 (2027 YTD) and 4,000 (2028) | About 2% capture of strategy session needs (100-165k in 2027, 134-223k in 2028); no baseline | Web analytics, list data |
| W13-5 | Subscriber-to-enquiry 2.5% in 12 months; lost-quote win-back 1-2% | Below R11 past-customer 3-8% since cold and lost | Holdout results |
| W13-6 | Email/CRM share of L2: about 1 pp of the 2 pp close-rate lift | Cadence alone insufficient | T1 test and cohort data |
| W13-7 | Lead score weights and thresholds | Heuristics | Won/lost model after 90 days |
| W13-8 | Platform, SMS, copy, design and coaching costs | No quotes obtained | Vendor quotes by 30 Nov |
| W13-9 | Referral reward SEK 1,000-2,000 credit, paid after departure | Typical dual-reward designs (R11 recommends dual reward) | CFO policy |
| W13-10 | Booking seasonality Jan-Mar and late summer | Core checkpoint of 24 MSEK by 31 Mar suggests Q1 weighting; no data | Booking-date histogram |
| W13-11 | Capacity: 10 minutes per follow-up touch, two touches per quote | Illustrative | Time study |
| W13-12 | Budget brackets under 35k / 35-55k / 55-80k / 80k+ | R02 and R03 price ranges | Actual price distribution |
| W13-13 | Add-on attach +3 pp / +5 pp / +8 pp | No baseline | Booking add-on history |
| W13-14 | Test thresholds (1.5 pp at 80% confidence) | Low sample sizes | Statistician review |
| W13-15 | Sender requirements and Swedish consent law are as in secondary sources | No primary-source reading | Counsel confirmation |
| W13-16 | Tech-build share SEK 150-250k (2027), 50-100k (2028) | Share of 0.6 / 0.3 MSEK builds | Developer quotes |
| W13-17 | Insurance can only be linked, not sold, in email | Regulatory caution | Licence status |
| W13-18 | CRM manager is an existing employee at about 0.5 FTE (SEK 0.35 M a year); not in the strategy's 5 FTE | Strategy 12.1 lists no CRM role | CEO decision, HR data |
| W13-19 | Contact base 5-15k; average add-on SEK 6,000; consent coverage 40/60/70% | About 1,300 booking households 2025-27 plus about 2,000 enquirers a year; no data | CRM export, add-on history |
| W13-20 | Quote lost cut-off 60 days; follow-up window 30 days after quote | Aligns F2 and F9; legal basis unconfirmed | Legal advice, quote-age data |
| W13-21 | Sender name "Sydafrikaresor" and the line "Sydafrikaspecialisten sedan 2003" | Client's own marketing claims (R03); legal entity name unknown | Company confirmation and legal check |
| W13-22 | Referral share of repeat+referral bookings 25-50%; referral close rate 45% | Strategy KPI 45%+; split invented | CRM source data |
| W13-23 | Economics check (section 3.1) uses 20% margin and the strategy's lever shares | Strategy A7, bridge | Finance margin by product |

---

## 21. Sources

Research files: `/home/user/MICE-Group/docs/research/11-conversion-crm.md` (funnel, cadence, benchmarks; all Tier C/B vendor sources, directional), `09-regulation-trust.md` (package travel, resegaranti, marketing law, cookies), `02-customer-segments.md`, `03-competitors-travel.md`, `/home/user/MICE-Group/docs/00-strategy.md`, `/home/user/MICE-Group/docs/workstreams/12-ugc-reviews.md`.
External URLs used (all via the research files unless stated):
- https://resources.rework.com/libraries/travel-tour-growth/booking-conversion-metrics (cadence D2/D7/D14/D21/D30, conversion bands)
- https://hbr.org/2011/03/the-short-life-of-online-sales-leads (speed to lead)
- https://atlasperk.com/guides/crm-automation-for-travel/email-marketing/ and /retention-loyalty/ (email and referral benchmarks; secondary)
- https://www.promodo.com/blog/tourism-marketing-benchmarks (rebooking interval, reactivation case)
- https://www.mailer.se/gdpr-samtycke-e-postmarknadsforing/ and https://kundkanalen.se/gdpr-e-postmarknadsforing (Swedish email consent, secondary)
- https://www.kammarkollegiet.se/vara-tjanster/resegaranti/hitta-reseaktorer-med-resegaranti (resegaranti lookup, via R09)
- https://support.google.com/a/answer/81126 (sender guidelines; from memory, not read in this run, [VERIFY])
Benchmarks from vendor blogs are directional only; replace with the client's CRM data within 60 days (31 Jan 2027).
