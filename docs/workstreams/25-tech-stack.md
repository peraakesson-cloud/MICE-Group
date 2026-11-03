# 25 - Tech stack for sydafrikaresor.se: CMS, enquiry and quote engine, CRM, booking back-office link, payments, integrations, data model, build/buy

Inherits: `/home/user/MICE-Group/docs/00-strategy.md` (binding): north star (booked-not-departed order book with margin), program P3 "Conversion and CRM machine", budget lines "CRM automation, review programme, community" (0.05 / 0.30 / 0.35 MSEK Q4-26 / 2027 / 2028), "Measurement, tracking, incrementality tests" (0.05 / 0.20 / 0.20) and "Technology builds: CRM, quote form, site, tracking" (0.6 MSEK 2027, 0.3 MSEK 2028, "to be quoted"), no irreversible commitments before 31 Jan 2027, gates 0-3, guardrails G1 (margin), G8 (service), G9 (capacity), risks R1, R9, R13, R14.
Related: 04 (technical SEO, owns WordPress performance and release governance), 13 (email/CRM lifecycle, owns consent wording and the ESP shortlist), 14 (sales process, sets quote-tool requirements), 16 (analytics, owns tracking, CMP, warehouse design), 15 (CRO), 22/23 (customer experience, operations), 21 (referral). This plan **owns the systems architecture and the integrations between them**; it does not duplicate their content.
Evidence: R09 (regulation), R11 (conversion/CRM), plus [OBSERVED] facts from workstream 04 (WordPress, custom theme `saso2020`, Yoast, Smush Pro, Cookie Law Info, Gravity Forms, Trustindex, GA/Ads/Meta/Clarity/Bing tags). Plans in English, customer-facing microcopy in Swedish.
Rules followed: we have **no internal data**. We have not seen the current CRM, booking/back-office system, payment set-up, hosting or contracts. Nothing about them is stated as fact. Items not sourced to a URL are marked [ASSUMPTION] (register T-A1..T-A16, section 20) or [VERIFY]. No vendor is endorsed; categories and selection criteria are given, vendors are compared only after the Week 1-2 audit.

---

## 1. Objectives

The technology job is narrow: **make every enquiry captured, attributed, answered fast, quoted with margin visible, paid, and reported into the order book, with no re-keying.** It is not to build a travel platform.

| # | Objective | Target | Date | Strategy link |
|---|---|---|---|---|
| T1 | Systems inventory, data-flow map and "system of record" decision for lead, quote, booking, payment and customer | Signed off by CEO/CFO/Head of Sales | 27 Nov 2026 | R14, Gate 0 |
| T2 | Every web, phone and email enquiry becomes one CRM lead record with source, consent flags, adviser and first-reply timestamp | 98% of enquiries have a record within 1 min (web) / same day (phone, email) | v1 30 Nov 2026, full 31 Jan 2027 | P3, A10, SLA |
| T3 | Order book and order-book gross margin available daily from system data, by departure year, product, source and adviser | Dashboard refreshed daily, reconciled to finance monthly (variance under 1%) | v1 manual 15 Dec 2026, automated 31 Mar 2027 | North star, Gate 0/1 |
| T4 | Margin and approval status on every proposal; margin stored on the opportunity | 100% of sent quotes carry margin %, and below-threshold quotes need approval (G1). By 31 Jan 2027 via the interim locked-formula template plus CRM margin fields; dedicated quote tool live by 15 Mar 2027 (contract signed from 1 Feb) | 31 Jan / 15 Mar 2027 | G1, WS14 |
| T5 | Online deposit and instalment payments by payment link on accepted proposals, reconciled to booking files | Payment-link share of deposits at least 70% by 31 Dec 2027 [ASSUMPTION T-A9]; payment failure under 5% (R11 range 3-8%) | pilot 31 Mar 2027 | L2, L6, cash |
| T6 | Site platform stays fast, secure and releasable without breaking SEO | CWV targets of WS04 met; zero unplanned downtime above 30 min in peak (Jan-Mar) | 31 Mar 2027 | L4, WS04 |
| T7 | Integration layer with monitoring so a failed sync is seen in minutes, not weeks | Silent integration failure rate under 1 per month; alert to owner in under 15 min | 31 Mar 2027 | R13 |
| T8 | Privacy-by-design: consent log, DPAs, retention, deletion propagation, access control | All DPAs signed by 15 Dec 2026; deletion request closed in under 30 days | 15 Dec 2026 / 31 Mar 2027 | R09, WS16 |
| T9 | Capacity: tools remove at least 20% of non-selling handling time per booking by end 2027 (supports the 8 h per booking assumption A23) | Time study before/after | baseline 31 Jan 2027, measure 31 Dec 2027 | R1, G9 |
| T9b | First human reply within 60 business minutes for 90% of enquiries, measured from CRM timestamps (strategy service metric) | 90% (not median) | measured from 31 Mar 2027, target met by 30 Jun 2027 | G8, R1 |
| T9c | Agent portal v1 for B2B2C partners (registration, net-rate/product access, quote request into CRM, referral/commission tracking); core lever L8, not the gated GL4 wholesale API | Live, first 20 agents | Q2 2027 (strategy 16.2) | L8, P5 |
| T10 | Scale readiness for 1,740 travellers (stretch; up to 1,905 at SEK 42k) without replatforming; optional Nordic (GL1) and B2B/wholesale (GL4) extensions designed but not built until gated | Architecture decision record signed | 31 Mar 2027 | GL1, GL4 |

**Sizing logic (why "buy and configure", not "build").** Core 2028 needs about 3,350 enquiries and 637 bookings (strategy section 10); stretch about 4,400 enquiries and 790 bookings (1,740 travellers at SEK 46k; up to about 866 bookings / 1,905 travellers if revenue per traveller is SEK 42k, strategy section 2 sensitivity). Averaged over a year that is roughly 9 (core) to 12 (stretch) enquiries a day from all sources and about 1.7 (core) to 2.2-2.4 (stretch) bookings a day (derived: 637, 790 and 866 divided by 365). Peak weeks may run 2-3x the average in Jan-Feb [ASSUMPTION T-A7; replace with booking-date curve]. These are volumes a mainstream CRM, a quote tool and a payment provider handle comfortably. The constraints are **data quality, speed of response and integration discipline**, not throughput. Custom software is justified only where the company's edge lives (itinerary library, margin logic) and nothing off the shelf fits.

---

## 2. Principles

1. **One lead ID, one customer record, one booking ID.** `lead_id` is created at first capture and carried to the booking (WS16 4.2). No spreadsheet is a system of record after Gate 1.
2. **Booking system and CRM are the truth for money and margin; GA4 for behaviour; ad platforms for diagnostics** (WS16 section 2).
3. **Optimise WordPress, do not replatform** unless the section 5 decision rule fires. A CMS rebuild is the highest-risk SEO event and competes for the same developer hours as the CRM and quote builds (WS04 principle 4).
4. **Buy the commodity, configure the differentiator, build only glue.** Glue = small, documented, monitored integrations, preferably via the vendors' own connectors or an integration platform, not bespoke monoliths.
5. **No irreversible contract before 31 Jan 2027** (strategy guardrail). Until then: audit, shortlist, proofs of concept on trial plans, month-to-month or cancellable terms only. Operating definition (CEO to confirm): a tool may go live before 31 Jan on a trial or month-to-month plan with tested data export; annual or non-cancellable contracts, migrations and multi-year commitments are signed from 1 Feb 2027 after ADR-002.
6. **Reversibility and export.** Every contract must allow full data export (CSV/API) and have a termination clause; prefer EU data residency; DPA required.
7. **Humans stay in the loop on a SEK 100k purchase** (WS13): the stack prepares, reminds and measures; it does not replace the adviser.
8. **Small team reality:** 22 staff, no named tech lead known [ASSUMPTION T-A2]. Prefer fewer tools, SaaS with Swedish/English support, and an external development partner on a retainer with an internal product owner.
9. **Compliance is a feature, not a plugin:** package-travel information, guarantee display, consent evidence and payment handling are designed in from the start (R09).

---

## 3. Target architecture (system map)

```
  Visitor (Swedish, mobile 60%+ [ASSUMPTION T-A3])
     |
  [WordPress site + custom theme]  -- CMP (Swedish, Consent Mode v2) -- GTM web --> sGTM (EU) --> GA4 / Ads / Meta CAPI
     | forms (quote, call-back, newsletter), click-to-call, chat? (decision in 6.4)
     v
  [Lead capture API / webhook]  --> dedupe + spam filter + enrichment (UTM, click IDs, lead_id)
     v
  [CRM]  (leads, contacts, households, opportunities, tasks, activities, consent)
     |  <--> [Telephony / call recording + call tracking]  (click-to-call, number-per-source)
     |  <--> [Email platform / ESP]  (flows F1-F10 from WS13; events in, engagement back)
     |  <--> [Calendar booking "boka samtal"]  (decision call)
     v
  [Quote / proposal tool]  itinerary library -> cost build-up (supplier cost, FX, commission, margin) -> PDF/web proposal -> approval
     v   (accepted)
  [Booking back-office / reservation system]  (booking file, suppliers, vouchers, documents, supplier payments, guarantee reporting)
     |  <--> [Payment provider (PSP)]  payment links, card/Swish/bank transfer, instalment schedule, refunds
     |  <--> [Accounting / ERP]  (invoices, receivables, supplier payables, FX, VAT margin scheme)
     v
  [Warehouse + BI]  (GA4 export + CRM + booking + ad cost + Search Console) -> order book, margin, source, SLA dashboards
     ^
  [Customer portal v1 (2028 H1)]  documents, itinerary, payment status, pre-trip forms  -- reads booking system
```

Layers and the decision for each:

| Layer | Starting point (observed or unknown) | Decision |
|---|---|---|
| CMS / site | WordPress, custom 2020 theme, Yoast, Gravity Forms, Smush Pro, Cookie Law Info, Trustindex [OBSERVED WS04] | **Keep and harden.** Replatform only if rule 5.3 fires |
| Enquiry capture | Gravity Forms [OBSERVED]; downstream routing unknown | Rebuild form flow to post to CRM via API/webhook with required fields, budget bracket, "how did you hear", consent flags (WS15, WS16) |
| CRM | Unknown [VERIFY] whether a CRM exists, or the booking system doubles as CRM | Decide in section 5: keep-and-extend vs adopt a dedicated travel-capable CRM |
| Quote / proposal | Unknown; WS14 asks for template with margin display and approval | Buy a proposal/itinerary tool or configure inside CRM/booking system; build only the margin-calculation glue |
| Booking back-office | Unknown [VERIFY] | Keep if it can export bookings with margin and accept API/webhook; otherwise shortlist replacement for H2 2027 at the earliest |
| Payments | Unknown | PSP with payment links and Swedish methods (section 7) |
| Accounting | Unknown | Keep; integrate by file or API; no change in the programme |
| Analytics and BI | GA4 / tags observed, warehouse absent | WS16 design; this plan provides the data model and pipelines |
| Email / SMS | Unknown | WS13 shortlist of 3; this plan provides the integration spec |
| Telephony | Unknown | Cloud telephony with CRM click-to-call, recording with consent notice, dynamic numbers (WS14, WS16) |

---

## 4. Approach and phases

| Phase | Dates | Goal | Exit criteria |
|---|---|---|---|
| P0 Discovery and quick wins | 2 Nov - 15 Dec 2026 | Know what exists; fix the leaks that cost leads today | Inventory + data-flow map signed; form to CRM with lead_id; response-time log; DPAs; manual order-book report; vendor shortlists |
| P1 Foundation | 16 Dec 2026 - 31 Jan 2027 | CRM stages, consent, quote form, call tracking, v1 integrations on trial/month-to-month plans; decide keep/replace; sign annual contracts after 31 Jan only | Stage events flowing; margin on every quote (interim template + CRM fields); decision record; annual contracts signed from 1 Feb |
| P2 Automate and measure | 1 Feb - 31 Mar 2027 (Gate 1) | ESP flows wired, offline conversion import, sGTM, automated order-book dashboard, payment-link pilot | Gate 1 tech evidence pack (section 12) |
| P3 Scale and harden | 1 Apr - 31 Dec 2027 | Payment links at scale, reconciliation, supplier/voucher automation, load readiness, B2B/Nordic design, portal specification | Gate 2 and 3 evidence; time study shows 20% reduction |
| P4 Portal and extensions | 1 Jan - 31 Dec 2028 | Customer portal v1, gated GL1/GL4 extensions, resilience | 2028 KPIs met; no replatform needed or decision taken with data |

---

## 5. CMS and website platform

### 5.1 Current state [OBSERVED in WS04, 2026-11-02]
WordPress with a custom theme from about 2020, Yoast SEO, Gravity Forms, Smush Pro, Cookie Law Info, Trustindex, several third-party tags. Hosting, PHP version, staging, deployment method, plugin update discipline and the source of prices (hand-edited vs feed) are unknown.

### 5.2 Hardening plan (WordPress, in scope of this plan jointly with WS04)
| Action | Detail | Owner | Date |
|---|---|---|---|
| Hosting and environment audit | Provider, PHP and DB version, TTFB, backups, restore test, CDN, WAF, uptime monitoring | Tech lead + web partner | 30 Nov 2026 |
| Staging and release process | Staging site, version control (Git), CI deploy, rollback; WS04 release checklist is mandatory | Web partner | 31 Jan 2027 |
| Plugin and theme audit | Remove unused plugins; pin versions; security scan; replace abandoned plugins | Web partner | 15 Dec 2026 |
| Security | MFA for all admins, least-privilege roles, WAF, login rate limit, daily offsite backup with monthly restore test, security headers | Tech lead | 15 Dec 2026 |
| Content model | Custom post types and fields for itineraries (reseförslag), departures, guides/bios, destinations, FAQ; structured so prices, durations and inclusions are fields not free text | Web partner + Head of Product | 31 Jan 2027 |
| Price/availability source | Show "från-pris" and departure dates from one source (field set, later feed from booking/product system). Never hand-edit the same price in two places | Head of Product + Web partner | 31 Mar 2027 |
| Form and tag hygiene | Load forms and tags only where needed; single tag manager; sGTM (WS16 M5) | Analytics lead | 31 Jan 2027 |
| Trust components | Link to Kammarkollegiet guarantee lookup in footer and checkout pages (R09 https://www.kammarkollegiet.se/vara-tjanster/resegaranti/hitta-reseaktorer-med-resegaranti); review widget with real, visible, compliant markup | SEO/Web lead | 31 Jan 2027 |
| Accessibility | WCAG 2.1 AA checks on quote and payment flows [ASSUMPTION T-A12 that the European Accessibility Act applies to the e-commerce service; VERIFY with Legal] | Web partner | 31 Mar 2027 |

### 5.3 Replatform decision rule (to be evaluated at Gate 1 and again at Gate 3)
Replatform (new CMS or headless) is considered **only if at least two** of these hold after hardening and with evidence: (a) field CWV cannot reach "Good" for 90% of URLs on commercial templates with reasonable effort (WS04 O4); (b) editorial workflow blocks the content plan (e.g. more than 2 working days to publish a hub); (c) security incidents or unsupported components that cannot be remediated; (d) the content model cannot represent departures/itineraries without hacks; (e) the cost of keeping WordPress exceeds an agreed multiple of rebuild cost over 3 years. A replatform, if approved, runs **outside Jan-Mar and Sep-Oct peaks**, with the full WS04 migration plan (redirect map, crawl comparison, staged launch). Default expectation: not needed in the 24-month window.

### 5.4 Multi-language and multi-market readiness (GL1, gated)
Design now, build only after the 31 Mar 2027 scope decision: hreflang-ready URL structure (WS04), NOK/DKK/EUR display option, Norwegian/Danish/Finnish content model fields, separate consent text, payment methods per market, VAT/package rules per market (Norway is outside the EU; treat compliance as [VERIFY]). Estimated gated cost in section 13.

---

## 6. Enquiry, CRM and quote engine

### 6.1 Requirements for the CRM (the system of record for people and pipeline)
Must have:
- Lead, contact, household, opportunity (trip), activity, task, document and consent objects; custom fields for the data model in section 8.
- Stage model from WS13/14 (new, contacted, qualified, quote sent, deposit, booked, lost with reason, departed, returned, advocate) with timestamps on every transition and mandatory fields (source dropdown, lost reason).
- API and webhooks (stage events out, lead create in); documented rate limits.
- Email sync from adviser mailboxes, click-to-call, task queues, SLA timers with red/amber flags (first reply under 1 business hour, quote age over 7 days).
- Role-based permissions, audit log, field-level consent flags with date, wording version, URL (WS13/16).
- EU data residency, DPA, SSO/MFA, export of all data.
- Reporting that can join to the warehouse (native export or connector).
Nice to have: duplicate detection, itinerary attachments, mobile app, e-signature, referral tracking, B2B account objects for GL4.

### 6.2 Keep-and-extend vs adopt: decision process (by 31 Jan 2027)
| Step | Action | Owner | Date |
|---|---|---|---|
| 1 | Capability audit of current CRM/booking system: stage events, API, custom fields, export, reporting, cost, contract end date, admin | CRM manager + Tech lead | 20 Nov 2026 |
| 2 | Scorecard (section 6.3) filled for current system and up to 3 alternatives; 2-week proofs of concept on trial plans using 30 real (anonymised) enquiry flows | CRM manager | 15 Jan 2027 |
| 3 | Total-cost-of-ownership at 20-40k contacts over 3 years, including migration, integration, seats for 22-30 users [ASSUMPTION T-A5] | CFO | 20 Jan 2027 |
| 4 | Decision record (ADR) and contract negotiation; sign after 31 Jan 2027 only | CEO + CFO + Head of Sales | 31 Jan 2027 |

Sequencing note: I5-I8 are configured on the current CRM before ADR-002 only as thin, documented connectors; if replacement is chosen they are re-pointed to the new CRM after cutover (the migration, parallel run and re-pointing are **not** in the 13.1 envelope and would displace other scope; CFO decides).

Default rule: **keep the current system if it scores at least 70% on must-haves and can emit stage events and export bookings with margin**; migrating a CRM in the Jan-Mar peak is itself a risk to the 24 MSEK Gate 1 target. If replacement is chosen, cut over in a quiet window (planned: late Apr - May 2027, after Gate 1 pressure eases), run parallel for 2 weeks, and migrate only the last 36 months of active records plus all consent evidence.

### 6.3 Scorecard (weights are proposals)
| Criterion | Weight |
|---|---|
| Must-haves in 6.1 (pass/fail count) | 30% |
| Integration quality (native connectors to ESP, PSP, telephony, accounting, WordPress; API quality) | 20% |
| Quote/itinerary support or clean link to quote tool | 10% |
| Reporting and warehouse export | 10% |
| Usability for advisers (time to log a call, mobile) measured in PoC | 10% |
| Total cost 3 years | 10% |
| Vendor risk (EU hosting, support in Swedish/English, roadmap, exit) | 10% |

### 6.4 Lead capture and chat/telephony
- **Forms:** one primary "Få en reseplan" quote form with budget bracket (WS15), travel month, party size, interests, "how did you hear" and consent checkboxes; short alternative "Ring mig" form; newsletter/guide download form. All post to the lead API, not to an inbox.
- **Dedupe:** match on email + phone (normalised), merge into existing household; repeat enquiry creates a new opportunity on the same contact.
- **Spam/bot:** invisible bot protection (no hard captcha on the quote form), honeypot, rate limit.
- **Instant acknowledgement:** automatic confirmation (Swedish) with adviser name and "svar inom en timme under kontorstid" only once the SLA is met and staffed (G8; strategy pillar 2); otherwise promise "samma arbetsdag".
- **Chat:** do **not** add live chat until the SLA is met for 4 consecutive weeks; then pilot a business-hours chat that creates a CRM lead. [ASSUMPTION T-A6]
- **Telephony:** dynamic number per source on the site, click-to-call from CRM, call recording with a notice and a 5-calls-per-adviser monthly review (WS14, SEK 60k tooling in 2027 [ASSUMPTION]). Legal confirms recording basis and retention [VERIFY].
- **Calendar:** "Boka ett samtal" slot booking tied to adviser calendars; creates a task and CRM activity.

### 6.5 Quote / proposal engine
The proposal is where margin is decided (G1) and where the brand is felt. Requirements:
- **Itinerary library:** 25 published itineraries (R02, sydafrikaresor.se) plus 10- and 14-day templates (WS14) stored as modular building blocks (day, accommodation, transfer, activity, guide) with supplier, cost, validity and currency.
- **Cost build-up:** supplier cost in ZAR/EUR/USD/SEK, FX rate and date, buffer (6%, A24), partner commission, margin SEK and %, pass-through lines flagged (so turnover and margin are reported correctly, strategy L6).
- **Approval workflow:** strategy G1/G5 fix the floors: blended at least 20%, ladder entry (SEK 36-45k departures) at least 18%, no product under 15% after partner commission without CEO approval. The approver levels below are proposals [ASSUMPTION T-A16]: below the applicable floor but at or above 15% after commission needs Head of Sales; below 18% on ladder entry, or below 15% after commission, needs CEO (WS14 section on quote check).
- **Output:** branded web proposal and PDF with price per person, what is included, flights status, payment schedule, guarantee note, link to accept and pay a deposit, adviser contact. Swedish text.
- **Versioning:** proposal versions stored on the opportunity; accepted version becomes the booking file basis.
- **Lock/expiry:** price validity date and FX assumption displayed.
- **Build vs buy:** buy an itinerary/proposal tool or use the booking system's module if it covers the above. Build only a small **margin calculator service or sheet-to-CRM sync** if no tool can compute margin with FX. Interim (until 31 Jan): shared spreadsheet template with locked formulas plus CRM fields for price, margin, FX (WS14).

---

## 7. Booking, payments and package-travel compliance

### 7.1 Booking back-office
Role: booking file, supplier confirmations and payments, vouchers and travel documents, guarantee-relevant reporting. Requirements: export of bookings with date, departure date, travellers, total value incl./excl. pass-through [per A8], gross margin SEK and %, currency mix, status and cancellation date, product type, gateway, repeat/referral flag, partner commission (WS16 4.3); webhook or scheduled export on create/amend/cancel; supplier payment due dates; document generation in Swedish.
Fallback hierarchy (WS16): (1) system API/webhook, (2) weekly scheduled CSV, (3) finance-owned spreadsheet maintained by booking ops (error-prone; time-limited to Gate 1).

### 7.2 Online booking vs consultative sale
Bookings at roughly SEK 99-101k each (SEK 45-46k per traveller x 2.2; strategy A1, A9) are sold consultatively. **Plan: no full self-service dynamic-packaging checkout in the 24-month window.** Instead: "accept and pay deposit online" on an approved proposal, and for fixed-price guided departures (if published after the FX policy, strategy gating) a simple departure page with seat count and deposit payment. Rationale: R11 benchmarks (Tier C, directional) put adviser-led and referral conversion well above cold online search (12-25%); a self-service flow would add cost and margin risk without evidence of demand. Revisit at Gate 3 using portal/payment data.

### 7.3 Payments
| Topic | Plan |
|---|---|
| Provider | One PSP (payment service provider) with payment links, hosted fields (card data never touches company servers, aiming at the simplest PCI scope [VERIFY with PSP]), bank transfer/invoice reference support, refunds API, reconciliation reports, multi-currency settlement, webhooks. Shortlist 3 after the audit; compare on fees (quote needed; strategy budgets "payment fees" at 0.15 MSEK 2027 / 0.35 MSEK 2028 together with hedging and guarantee costs), Swedish methods (Swish, cards, bank transfer; wallets) [VERIFY availability and fees], payout speed, SCA/3-D Secure handling |
| Flow | Proposal accepted -> booking file created -> payment link for deposit sent -> webhook marks deposit received -> stage `deposit` -> final-payment reminders by schedule -> payment status shown in CRM and booking system |
| Payment schedule | Deposit and final-payment dates are policy decisions for CFO/Legal. The EU rules on prepayment limits are **not confirmed** in R09 [VERIFY]; the system must support configurable schedules per product |
| Failures | Retry and reminder flow; manual phone follow-up for failures over 48 h; track failure rate (R11 benchmark 3-8% of confirmed bookings, https://resources.rework.com/libraries/travel-tour-growth/booking-conversion-metrics, Tier C) |
| Reconciliation | Daily PSP-to-booking match; unmatched payments queue owned by booking ops; monthly tie-out to accounting |
| Customer money | Customer prepayments are protected for the consumer and are not growth capital (strategy 12). The system should tag cash received by departure date so finance can model working capital and guarantee need (A24) |
| Refunds and chargebacks | Refund via PSP with approval; chargeback evidence pack template (contract, proposal, terms, communications) |
| Fees | Surcharging rules, VAT treatment of the margin scheme (travel agent's margin scheme) [VERIFY with accountant]. Fee exposure is not estimated here (no quotes): at roughly 6% deposits [strategy A24] plus instalments and final payments, card fees on SEK 100k bookings can be material, so default balances above a CFO-set amount to bank transfer/Swish payment links and track PSP fees as a % of turnover against the 0.15 / 0.35 MSEK line |

### 7.4 Package-travel and guarantee features (R09)
Features to build into proposals, checkout and documents, each to be validated by Legal before launch [VERIFY]:
- Pre-contract information per the Package Travel Act (Paketreselagen 2018:1217) with standard information form, delivered before the contract and stored with timestamp (R09 section 2; https://www.konsumentverket.se/lagar/paketreselagen-konsument/).
- Guarantee statement and link to the Kammarkollegiet lookup on site, proposals and payment pages (R09).
- Price-change and cancellation terms displayed in plain Swedish; consent to terms logged.
- **Fund levy 0.6% of package price** (R09, https://www.kammarkollegiet.se/vara-tjanster/resegaranti/betala-avgift-till-resegarantifonden): the booking system must flag which bookings are packages and compute the levy per booking; report to finance monthly.
- **Growth notification:** the order-book dashboard must produce the monthly forecast pack that CFO/CEO uses to notify Kammarkollegiet when sales are set to rise (R09 sections 3 and 6; sanction fee exposure SEK 5,000 - 10 MSEK). Owner: CFO; data from this plan.
- **EU Directive 2026/1024 (broader "package" definition, transposition about Sept 2028 [VERIFY], strategy R12/section 16.2 Gates 4-5):** upsell, extension and insurance flows must be re-checked so that linked-travel-arrangement versus package classification is a field in the booking record, not a manual judgement. Re-engineering is budgeted in 13.1 (2028) and starts after Gate 3.

---

## 8. Data model

Principle: pseudonymous IDs everywhere in analytics; PII stays in the CRM and booking system only (WS16 5).

### 8.1 Core entities
| Entity | Key fields (proposal) | System of record |
|---|---|---|
| Household / contact | `contact_id`, `household_id`, name, email, phone, language, postcode region, age band (for 55+ test, A13), marketing consents (email/SMS/phone) with date, wording version, URL; suppression flags | CRM |
| Lead / enquiry | `lead_id`, created timestamp, channel (form, phone, email, chat, fair, partner), UTM first/last touch, `gclid/gbraid/wbraid`, `fbclid`, landing page, form page, "how did you hear" (single select + text), budget bracket, travel month, party size, interests, assigned adviser, `first_reply_at`, lost reason | CRM |
| Opportunity (trip) | `opportunity_id`, `lead_id`, stage with timestamps, product type (guided, tailor-made, group), destinations, nights, quote versions, price, cost, FX rate/date, margin SEK/%, approval status, partner/affiliate, expected departure date | CRM + quote tool |
| Booking | `booking_id`, `opportunity_id`/`lead_id`, booking date, departure/return, travellers (adults/children/age), total value incl./excl. pass-through, gross margin SEK/%, currency mix, status (confirmed, amended, cancelled + date), package / linked-arrangement classification, guarantee/levy flag, air gateway, repeat/referral flag, partner commission | Booking system |
| Booking line | supplier, service type (flight, lodge, transfer, guide, activity, insurance), cost, currency, due date, paid date, confirmation number | Booking system |
| Payment | `payment_id`, `booking_id`, type (deposit/instalment/final/refund), amount, due date, paid date, method, PSP reference, status | PSP + booking system |
| Supplier / DMC | supplier ID, contract, rate card validity, allocation held vs sold (Gate 0 register), terms, currency, contact | Product/contracting system (initially a controlled spreadsheet, moved to the booking system when possible) |
| Departure / allocation | departure ID, date, guide, seats/rooms held, released date, sold, status | Booking/product system |
| Itinerary library item | item ID, type, description (Swedish), cost, validity, tags, photo set | Quote tool/CMS |
| Review / referral | review source, rating, date, `booking_id`, referral code, referred lead | CRM + reviews tool |
| Interaction | calls, emails, notes, tasks, SLA timers | CRM |
| Consent log | event ID, contact ID, purpose, status, timestamp, wording version, source form | CRM (and CMP log for cookies) |
| Marketing cost | date, channel, campaign, cost | Warehouse (from ad platforms) |

### 8.2 Stage and status definitions
Single source of truth maintained in the CRM admin guide: stage definitions, entry/exit criteria, mandatory fields, who may change a stage; any change without required fields is blocked (WS16: source dropdown cannot be skipped). Definitions of "enquiry", "qualified", "quote sent", "booked" and "turnover" must follow the CEO's confirmation of [A8] by 15 Dec 2026. Until then dashboards display both gross booked value and margin and are labelled "preliminary definition".

### 8.3 Warehouse model (WS16)
Tables: `fact_lead`, `fact_stage_event`, `fact_booking`, `fact_payment`, `fact_ad_cost`, `fact_web_session` (GA4 export), `fact_search_console`, dimensions for date, channel, campaign, adviser, product, departure year, supplier. Keys: `lead_id`, `booking_id`, hashed email never leaves the CRM. Retention 26 months (WS16). Refresh daily by scheduled ELT. Data quality tests: unique keys, non-null source, margin present on every booking, sum of PSP payments equals booking-paid, order-book total equals finance report within 1%.

### 8.4 Required reports from the model
1. Order book vs plan by departure year (24 MSEK by 31 Mar 2027; 36 MSEK by 30 Jun 2027; 19 MSEK of 2028 departures by 31 Dec 2027, 32 MSEK by 31 Mar 2028 and 48 MSEK by 30 Jun 2028; stretch 24 / 40 / 60 MSEK) with order-book margin. Strategy milestones are [A11] and are recalibrated from the booking-date curve within 60 days.
2. Enquiries, quotes, bookings and close rate by source, existing vs new traffic (A10), adviser and product.
3. Response time distribution and SLA breaches.
4. Marginal marketing cost per marketing-created booking vs the SEK 20k cap; incremental ROAS from holdouts (strategy 11.2-11.3).
5. Supply held vs sold by month; FX exposure by currency and due date; hedge ratio (CFO).
6. Cash received vs supplier payments due by departure month (A24).
7. Guarantee/levy forecast pack.
8. Data quality scorecard.

---

## 9. Integrations

| # | Integration | Direction / mechanism | Trigger and payload (minimal) | Owner | Live |
|---|---|---|---|---|---|
| I1 | WordPress forms -> CRM | Webhook/API | Form submit: lead fields, UTM, click IDs, consent flags, `lead_id` | Web partner | v1 30 Nov 2026 |
| I2 | CMP -> consent log | Plugin/API | Consent state, timestamp, wording version | Analytics lead | 27 Nov 2026 |
| I3 | GTM web -> sGTM -> GA4/Ads/Meta | Tag layer | Events per WS16 4.1; no PII | Analytics lead | 31 Jan 2027 |
| I4 | CRM -> GA4/Ads offline conversions | Measurement Protocol / Ads API | `lead_qualified`, `quote_sent`, `deposit_paid`, `booking_confirmed` value + margin band; click IDs only where consent exists | Analytics lead | 31 Jan 2027 |
| I5 | CRM <-> ESP | Native connector or iPaaS | Stage events out; opens/clicks/replies back as activities; unsubscribes sync both ways | CRM manager | 31 Mar 2027 |
| I6 | CRM <-> telephony | Native | Click-to-call, call log, recording link, dynamic number source | CRM manager | 31 Jan 2027 |
| I7 | CRM <-> calendar | Native | Booked call -> task | CRM manager | 31 Jan 2027 |
| I8 | CRM <-> quote tool | API/native | Opportunity data in; quote versions, margin, approval status out | CRM manager + Head of Sales | Interim template to CRM margin fields 31 Jan 2027; tool integration 15 Mar 2027 |
| I9 | Quote tool -> booking system | API/export | Accepted quote -> booking file draft (no re-keying) | Booking ops + Tech lead | 30 Jun 2027 (manual import before) |
| I10 | Booking system <-> PSP | Webhook | Payment link created per instalment; payment status back | Tech lead + CFO | pilot 31 Mar 2027 |
| I11 | Booking system -> accounting | File/API | Invoices, receipts, supplier payables, FX | CFO | 30 Jun 2027 |
| I12 | CRM + booking + ads + GA4 -> warehouse | ELT | Daily loads, tests | Analytics lead | automated 31 Mar 2027 |
| I13 | Warehouse -> BI | Connector | Dashboards, weekly one-pager (strategy 16.2) | Analytics lead | 31 Mar 2027 |
| I14 | Reviews tool <-> CRM | API | Review request at +3/+10 days (WS12), review link; rating back | CRM manager | v1 31 Dec 2026 (strategy: review automation live) using the review platforms' own invitation features or the current ESP/CRM on month-to-month terms; integrated with CRM 31 Mar 2027 |
| I15 | Referral/affiliate tracking <-> CRM | Link/code | Referral code on lead; partner commission calc (A17) | CRM manager + Head of Partnerships | 30 Jun 2027 |
| I16 | Booking system -> customer portal | API | Itinerary, documents, payment status | Tech lead | 31 Mar 2028 |
| I17a | Agent portal v1 (core lever L8, P5) | Gated WordPress area + form to CRM | Agent registration, product and net-rate access, quote request creating a CRM lead with `agent_id`, commission tracking via I15 | Tech lead + Head of Partnerships | Q2 2027 (first 20 agents; strategy 16.2) |
| I17b | Wholesale / land-only partner API (GL4, gated) | API | Product, availability, quote request, commission | Tech lead | Pilot Q2 2027 manual; automate only if Gate 2 passes |

Integration rules: (1) idempotent events with unique IDs; (2) retry with back-off and a dead-letter queue; (3) monitoring and alerting on failure (email/Teams/Slack to the integration owner within 15 min); (4) credentials in a secret manager, never in the theme or plugin settings; (5) each integration has a one-page runbook and a named backup owner; (6) prefer vendor connectors or an iPaaS/low-code tool over custom code, custom code in a Git repository with tests; (7) every integration listed here appears in the record of processing.

---

## 10. Security, privacy and operations

| Area | Standard | Owner | Date |
|---|---|---|---|
| Access control | SSO/MFA everywhere supported; role-based access in CRM (advisers see own and team; margin visible only to roles needing it); joiner/mover/leaver checklist | Tech lead + HR | 15 Dec 2026 |
| Data protection | DPAs with every processor; record of processing updated; DPIA screening for call recording and profiling; EU hosting preferred; transfer mechanism reviewed for non-EU vendors [VERIFY] | DPO/Legal | 15 Dec 2026 |
| Retention and deletion | Retention schedule per entity (leads not booked, customers, bookings for accounting law periods [VERIFY], call recordings); deletion propagation to warehouse monthly | DPO + CRM manager | 31 Mar 2027 |
| Payments | Card data handled only by PSP-hosted fields; no card numbers in email or CRM notes (guard rule + training) | CFO + Tech lead | 31 Mar 2027 |
| Backups and recovery | Site daily; CRM export weekly to separate storage; target RPO 24 h and RTO 4 h for site, 1 business day for CRM [ASSUMPTION T-A8]; restore drill twice a year | Tech lead | 31 Jan 2027 |
| Monitoring | Uptime and form-submission synthetic tests every 5 min; CWV RUM (WS04); integration alerts; tag health; payment webhook health | Tech lead + Analytics lead | 31 Jan 2027 |
| Incident response | 1-page runbook: who decides, how to notify customers and IMY within 72 hours if personal data is breached [VERIFY], how to switch the quote form to a phone-only banner | Tech lead + CEO | 31 Jan 2027 |
| Change control | WS04 release checklist for anything touching templates, tags, URLs, plugins, hosting; change freeze 20 Dec - 20 Jan [ASSUMPTION T-A10] unless fixing a critical defect; monthly patch window | Tech lead | 15 Dec 2026 |
| Vendor management | Register of all SaaS: owner, cost, contract end, data location, export test; annual review | CFO + Tech lead | 31 Jan 2027 |
| AI features | AI assistants for drafting proposals/emails allowed only on approved tools; no customer PII in non-approved tools; human review before send [ASSUMPTION T-A11] | CEO + DPO | 31 Jan 2027 |

---

## 11. Build vs buy summary

| Capability | Decision | Rationale | 2-year cost class |
|---|---|---|---|
| CMS | Keep WordPress (hardened) | Replatform risk and SEO exposure (WS04) | Hosting/maintenance retainer |
| Forms and lead API | Configure existing form plugin + small custom webhook code | Low complexity | Build (small) |
| CRM | Keep-and-extend if scorecard passes, else buy | Lock-in and migration risk; decision by 31 Jan 2027 | Subscription |
| Quote/proposal | Buy or configure; build margin-calc glue only if needed | Differentiator is the itinerary library, not the software | Subscription + configure |
| Booking back-office | Keep if it passes; replacement not before H2 2027 | Peak-season operational risk | Subscription |
| Payments | Buy (PSP) | Compliance and fraud | Transaction fees |
| Email/SMS | Buy (WS13 shortlist) | Commodity | Subscription |
| Telephony and recording | Buy | Commodity | Subscription |
| Warehouse/BI | Buy managed warehouse + free BI first | Small data, low cost | Usage |
| Integration | iPaaS/low-code or vendor connectors; custom code for edge cases | Small team | Subscription + build |
| Customer portal | Buy/extend booking-system portal if exists; else thin custom portal on WordPress or a separate app | Evaluate at Gate 2 | Build (2028) |
| Customer chatbot / AI concierge | Not in plan until SLA and data are in place | Avoid brand risk | n/a |

---

## 12. Timeline, owners and gate evidence

### 12.1 Master timeline
| Date | Milestone | Owner |
|---|---|---|
| 2-6 Nov 2026 | Name tech lead / product owner and web partner; issue systems data request (section 14); start manual response-time log | CEO + Head of Sales |
| 13 Nov 2026 | Systems inventory v1: every system, owner, cost, contract end, data held, API yes/no, export yes/no | Tech lead |
| 20 Nov 2026 | CRM/booking capability audit complete; form-to-CRM v1 spec | CRM manager |
| 27 Nov 2026 | CMP configured (WS16); data-flow map; ADR-001 system-of-record decision drafted | Analytics lead / Tech lead |
| 30 Nov 2026 | Tracking v1 and form->CRM with `lead_id`, source and consent flags; stage definitions live; hosting audit done | CRM manager / Web partner |
| 15 Dec 2026 | DPAs signed; plugin audit and security baseline; manual order-book + margin report from booking export (Gate 0 pack); [A8] confirmed | Tech lead / CFO |
| 20 Dec 2026 - 20 Jan 2027 | Change freeze except critical fixes | Tech lead |
| 31 Dec 2026 | Review request automation v1 (I14, trial/month-to-month); response-time dashboard from CRM timestamps | CRM manager |
| 31 Jan 2027 | CRM decision (ADR-002); margin on every quote via interim template + CRM fields; call tracking; sGTM and offline conversion import (I3-I8, trial/month-to-month); staging/CI; annual contracts signed from 1 Feb. Note: only configuration and tag work lands 21-31 Jan (change freeze ends 20 Jan); template/theme changes stay frozen unless critical | CEO/CFO, CRM manager, Analytics lead |
| 15 Mar 2027 | Dedicated quote tool live with margin and approvals (I8) | CRM manager + Head of Sales |
| 31 Mar 2027 (Gate 1) | ESP flows connected (I5); warehouse and automated dashboards (I12-13); payment-link pilot (I10); Core Web Vitals targets (WS04); restore drill passed; replatform rule evaluated | All |
| Apr - May 2027 | Cutover window if CRM or booking-system change was approved; parallel run 2 weeks | CRM manager + Booking ops |
| 30 Jun 2027 (Gate 2) | Quote->booking handover (I9); accounting sync (I11); partner tracking (I15); agent portal v1 live in Q2 (I17a); GL4 pilot data feed; customer portal specification; time-study midpoint | Tech lead |
| 31 Dec 2027 | Payment links at least 70% of deposits; time study shows at least 20% less handling time; load/peak readiness review for Jan 2028 | Tech lead + Head of Sales |
| 31 Mar 2028 | Customer portal v1 (I16) | Tech lead |
| 30 Jun 2028 | Gated extensions (GL1 site/market, GL4 partner API) delivered if approved | Tech lead |
| 31 Dec 2028 | Platform review; 2029 roadmap; replatform decision with data | CEO + Tech lead |

### 12.2 Gate evidence the tech stack must deliver
| Gate | Evidence |
|---|---|
| Gate 0 (15 Dec 2026) | Systems inventory; data-flow map; manual order-book and margin report; [A8] definition applied; DPAs; consent log live |
| Gate 1 (31 Mar 2027) | SLA timestamps from CRM; source on 95%+ of enquiries; holdout infrastructure (lead IDs by test cell); margin on every quote; margin on new bookings (gate threshold 19%) and marginal marketing cost per marketing-created booking reportable from system data; dashboard automated; payment pilot results; security baseline |
| Gate 2 (30 Jun 2027) | Quote->booking without re-keying; reconciliation variance under 1%; time-study midpoint; capacity metrics for hire decisions; GL3 and GL4 data feeds |
| Gate 3 (31 Oct 2027) | 2028 order book trajectory with margin (gate threshold 19%); incremental ROAS data from holdouts; peak-load readiness; customer-portal go/no-go; replatform decision; Directive 2026/1024 scoping |
| Gates 4-5 (31 Mar, 30 Jun 2028) | Order book vs 32 / 48 MSEK (core) or 40 / 60 (stretch) from the automated dashboard |

---

## 13. Budget (SEK, excl. VAT, planning estimates not quotes) [ASSUMPTION T-A4]

Strategy envelope: "Technology builds" **600,000 (2027) and 300,000 (2028)**; CRM automation line 50,000 (Q4 2026), 300,000 (2027), 350,000 (2028); measurement line 50,000, 200,000, 200,000. Tool lines in WS14 (CRM seats, quote tool 120,000 / 150,000) and WS13 (ESP) overlap with these; the CFO reconciles to avoid double counting. Payment fees, hedging and guarantee costs are in the separate 0.15 / 0.35 MSEK line. Salaries are in the +5 FTE base and are not repeated.

### 13.1 One-off build envelope
| Item | Q4 2026 | 2027 | 2028 | Notes |
|---|---|---|---|---|
| Discovery, audit, architecture, vendor selection, PoCs | 60,000 | 50,000 | 0 | Q4 from the CRM (50k) and measurement (50k) lines; 2027 in the tech envelope |
| Lead capture, API, dedupe, bot protection | 40,000 | 60,000 | 0 | Includes form UX with WS15 |
| CRM and integration layer (I1-I8, I14) incl. ESP connector | 0 | 110,000 | 0 | iPaaS or connectors preferred; excludes any CRM migration (see below) |
| Quote/proposal tool configuration and margin glue | 0 | 80,000 | 0 | Library import, templates, approvals |
| Payment-link integration and reconciliation (I10, I11) | 0 | 70,000 | 0 | Excludes transaction fees |
| Order-book and margin pipeline (I12-13) | 0 | 60,000 | 0 | Counted here; WS16 BI free tier |
| Security, backups, monitoring, DPAs tooling | 0 | 40,000 | 30,000 | Plus annual restore drill |
| Site hardening: staging/CI, content model and price-source fields, accessibility fixes (section 5.2) | 0 | 60,000 | 0 | Strategy lists "site" inside the technology-build line; ongoing changes sit in the retainer (13.2) |
| Agent portal v1 (I17a, lever L8) | 0 | 30,000 | 0 | Minimal gated area plus form-to-CRM; not the GL4 API |
| Customer portal v1 | 0 | 0 | 120,000 | Gate 2/3 go/no-go |
| Directive 2026/1024 re-engineering of upsell/extension flows | 0 | 0 | 60,000 | After Gate 3; [ASSUMPTION T-A4] |
| Contingency (about 7% in 2027, about 12% in 2028) | 0 | 40,000 | 30,000 | CFO release |
| **Total one-off (core)** | **100,000** | **600,000** | **240,000** | 2028 envelope 300,000; 60,000 unallocated headroom held for Gate 3 re-prioritisation |
| Memo: GL1 Nordic site/market extension (gated) | 0 | 0 | (60,000) | **Not in the envelope.** Strategy 9.3 puts gap levers outside the core budget; funded only from the 100,000 gap-lever pilot reserve (shared with GL2-GL4) or a CEO-approved increase, after the 31 Mar 2027 scope decision |
| Memo: GL4 wholesale partner API (gated) | 0 | 0 | (60,000) | **Not in the envelope.** Same funding rule; only if the pilot passes at Gate 2 |

Reallocation note: the 2027 total of 600,000 is the strategy envelope. Site hardening and the agent portal (both required by the strategy but absent from the first draft) are funded by trimming the build lines by about 20% in total (530,000 to 430,000); this makes the 2027 plan tight. Q4 2026 spend of 100,000 consumes the whole Q4 CRM (0.05 MSEK) and measurement (0.05 MSEK) lines, so the 31 Dec 2026 review programme and the holdout design have no separate Q4 budget; the CFO must confirm the split or move part of the Q4 spend into 2027 (open question for the CEO).

### 13.2 Recurring (sits in the CRM, measurement and hosting lines, to be quoted)
| Item | 2027 | 2028 | Notes |
|---|---|---|---|
| CRM, quote tool, telephony and ESP subscriptions | 250,000 - 350,000 | 300,000 - 400,000 | Within CRM line 300k / 350k plus WS14 tool lines; 22-30 users [ASSUMPTION T-A5] |
| Hosting/CDN/WAF/monitoring | 40,000 - 70,000 | 40,000 - 70,000 | [ASSUMPTION T-A4] |
| Web/dev retainer (maintenance, patches, small changes) | 120,000 - 180,000 | 120,000 - 180,000 | About 8-12 hours a week blended [ASSUMPTION T-A13]; may be absorbed in SEO and web budgets |
| Warehouse, BI, sGTM hosting | 30,000 - 60,000 | 30,000 - 60,000 | In measurement line |

Reconciliation to the strategy lines (SEK thousand, 2027): one-off 600 + recurring 440-660 (sum of the ranges above) = 1,040-1,260, against the technology line 600 + CRM line 300 + measurement line 200 = 1,100, which must also fund the review programme, community and incrementality tests. 2028: core one-off 240 + recurring 490-710 = 730-950 against 300 + 350 + 200 = 850. So the top of the range exceeds the lines in both years, and WS13/WS14 tool lines (quote tool 120 / 150, telephony about 60) overlap with the subscriptions row. Only spend that is **incremental to today's run-rate** counts against the programme; current CRM, hosting and tooling costs are presumably inside the assumed 2.6 MSEK marketing/overhead baseline [strategy A18] but this is unverified (open question). Hosting and retainer have no explicit strategy line and may only be absorbed in SEO/web budgets if the CFO agrees.

If run-rate plus build exceeds the lines above, the CFO decides between cutting scope and raising the envelope; the loss budget (SEK 3.0 M in 2027) is not extended by this plan.

---

## 14. KPIs

| KPI | Baseline | Target | Cadence | Owner |
|---|---|---|---|---|
| Enquiries with a CRM record and `lead_id` | Unknown | 98% | Weekly | CRM manager |
| Enquiries with source captured (tracked or self-reported) | Unknown | 95% | Weekly | CRM manager |
| First human reply within 60 business min (share of enquiries) | Manual log from 2 Nov | 90% by 30 Jun 2027 (strategy SLA); tracked from 31 Mar 2027 | Daily | Head of Sales |
| Form-submit to CRM record latency; duplicate-record rate | Unknown | Under 1 min for 98%; duplicates under 2% [ASSUMPTION T-A15] | Weekly | CRM manager |
| Share of sent quotes produced in the quote tool/template with margin shown | Unknown | 100% from 31 Jan 2027 | Weekly | Head of Sales |
| Quoted margin vs realised booking margin variance | Unknown | Within 1.5 percentage points [ASSUMPTION T-A15] | Monthly | CFO |
| Offline-conversion import match rate (consented leads only) | Unknown | At least 60% of consented bookings matched [ASSUMPTION T-A15] | Monthly | Analytics lead |
| Time from integration failure to owner alert | n/a | Under 15 min | Monthly | Tech lead |
| Restore drill passed (site and CRM export) | Unknown | Twice a year, 100% | Half-yearly | Tech lead |
| Active agents on the portal; partner-sourced turnover | 0 | 20 agents Q2 2027; 8-10% of turnover by 2028 (strategy section 4) | Quarterly | Head of Partnerships |
| PSP fees as % of turnover | Unknown | Within the 0.15 / 0.35 MSEK line (incl. hedging and guarantee) | Monthly | CFO |
| Quote age over 7 days without touch | Unknown | Under 5% | Weekly | Head of Sales |
| Bookings with margin recorded | Unknown | 100% | Weekly | Booking ops |
| Order-book vs finance reconciliation variance | Unknown | Under 1% | Monthly | CFO |
| Dashboard freshness | Manual | Daily by 31 Mar 2027 | Daily | Analytics lead |
| Payment-link share of deposits | 0% | At least 70% by 31 Dec 2027 [ASSUMPTION T-A9] | Monthly | Booking ops |
| Payment failure rate | Unknown | Under 5% (Tier C benchmark range 3-8%) | Monthly | CFO |
| Unmatched payments older than 3 days | Unknown | 0 | Weekly | Booking ops |
| Re-keying events per booking (manual copy between systems) | Unknown, measure | Under 2 by Q4 2027 | Quarterly time study | Booking ops |
| Handling hours per booking (A23: 8 h) | Time study | Minus 20% by 31 Dec 2027 | Quarterly | Head of Sales |
| Integration incidents, silent failures | n/a | Under 1 a month | Monthly | Tech lead |
| Site uptime (peak Jan-Mar) | Unknown | 99.9% and no single outage over 30 min [ASSUMPTION T-A15] | Monthly | Tech lead |
| CWV "Good" share of URLs | Unknown | 90% by 31 Mar 2027 (WS04) | Monthly | Web lead |
| Security: admin accounts with MFA | Unknown | 100% | Quarterly | Tech lead |
| DPAs signed vs processors | Unknown | 100% by 15 Dec 2026 | Once, then annually | DPO |
| Deletion/access requests closed under 30 days | n/a | 100% | Quarterly | CRM manager |
| Tech spend vs envelope | n/a | Within 600k / 300k | Monthly | CFO |

---

## 15. Owners (RACI by role)

| Role | Responsibility in this workstream |
|---|---|
| CEO | Sponsor; signs ADRs; decides keep/replace; confirms [A8]; owns scope decisions for GL1 |
| Tech lead / product owner (to be named; interim SEO/Web lead) | Architecture, vendor and partner management, security, release governance, integration owner of last resort |
| CRM manager | CRM configuration, stages, automations, data quality, consent flags, ESP and telephony integration |
| Analytics lead | Tracking, CMP, sGTM, warehouse, dashboards, offline conversions |
| Head of Sales | Requirements for quote tool and SLA, adviser adoption, time study |
| Booking-ops coordinator (hire by 1 Aug 2027; interim senior consultant) | Booking system data, payment reconciliation, supplier payment calendar |
| CFO | Budget, TCO, payment/accounting integration, guarantee/levy forecast, vendor contracts |
| Head of Product | Itinerary library, departure/allocation data, price source |
| DPO / Legal | DPAs, legal basis, retention, package-travel information, call recording |
| External web/dev partner | Build, maintenance, deployments under the release process |
| Head of Partnerships | Partner tracking and B2B data feed |

---

## 16. Risks and mitigations

| # | Risk | Likelihood / impact | Early warning | Mitigation | Owner |
|---|---|---|---|---|---|
| T-R1 | Unknown legacy systems cannot export or integrate (R14) | M / H | Audit shows no API/export | Weekly CSV fallback; spreadsheet interim limited to Gate 1; budget for replacement option in H2 2027 | Tech lead |
| T-R2 | Migration or major change in peak (Jan-Mar) disrupts response time and the 24 MSEK Gate 1 target | M / H | Cutover planned inside peak | Freeze 20 Dec - 20 Jan; cutover late Apr-May; parallel run | CEO |
| T-R3 | Tool sprawl and double-counted spend | H / M | Overlapping subscriptions | Vendor register; CFO reconciliation with WS13/14 | CFO |
| T-R4 | Vendor lock-in or price hikes | M / M | Contract without export | Export test before signing; max 12-month term initially | CFO |
| T-R5 | Key-person dependency (one developer or admin) | H / H | Only one person knows integrations | Runbooks, Git repo, second partner contact, documented ADRs | Tech lead |
| T-R6 | Consent or privacy failure (R13, R09) | M / H | Tags fire before consent; missing DPA | WS16 QA checklist; DPA gate; legal review | DPO |
| T-R7 | Data quality: advisers skip fields | H / M | Over 10% incomplete records | Mandatory fields, weekly hygiene report, coaching | CRM manager |
| T-R8 | Site security incident (outdated plugins) | M / H | Scan alerts; failed login spikes | WAF, patching window, MFA, backups | Tech lead |
| T-R9 | Payment errors cause cash and customer-service issues | M / M | Unmatched payments rise | Daily reconciliation, alerts, phone follow-up | Booking ops |
| T-R10 | Scope creep: portal, chatbot, self-service booking | H / M | Requests outside plan | Gated roadmap; each addition needs a KPI and owner | CEO |
| T-R11 | Quote tool slows consultants instead of helping | M / H | Quote time rises vs baseline | PoC on real quotes; time study; template-first design | Head of Sales |
| T-R12 | Replatform pressure from SEO or design | L / H | Pressure without evidence | Section 5.3 decision rule | CEO |
| T-R13 | Regulatory change (payment schedule limits, guarantee rules) | M / M | Legal bulletins | Configurable schedules; Legal watch | Legal |
| T-R14 | Integration platform costs scale with volume | L / M | Usage invoices rise | Monitor tasks per month; cap alerts | Tech lead |
| T-R15 | Tech lead is an unbudgeted extra hat: the +5 FTE base has no technology role, yet this plan assigns about 15 owned deliverables to it (T-A2) | H / H | Milestones slip; two or more Q4 2026 deliverables late | CEO names the role by 6 Nov; decide interim external product owner on retainer (cost in 13.2); cut scope before extending dates | CEO |
| T-R16 | Late-January crunch: freeze ends 20 Jan, go-lives and ADR-002 land by 31 Jan, peak enquiries start | M / H | Staging not ready 15 Jan; adviser time pulled into PoCs | Limit January go-lives to configuration; slip tool go-lives to 15 Mar before slipping the freeze; advisers' PoC time capped (G9) | Tech lead |

---

## 17. Dependencies

- CEO confirmation of turnover definition and gross margin ([A7], [A8]) by 15 Dec 2026; the margin fields and dashboards depend on it.
- WS16 provides tracking, CMP and warehouse design; this plan supplies lead and booking data. WS13 selects the ESP and owns consent wording; WS14 sets quote-tool requirements; WS04 owns SEO release governance; WS15 owns form design and CRO tests.
- Finance: accounting system export, margin-scheme treatment, guarantee and levy reporting.
- Legal: package-travel information, payment schedule, call recording, retention, accessibility.
- Product/supply: allocation register (Gate 0) feeds the departure entity.
- Contracts: no irreversible commitments before 31 Jan 2027; budget release by CFO.

---

## 18. First 30 days (2 Nov - 2 Dec 2026)

| Week | Actions | Owner | Output |
|---|---|---|---|
| 1 (2-6 Nov) | Name tech lead/product owner and web partner. Issue systems data request. Start the manual response-time log (spreadsheet) for every enquiry. Freeze new tool purchases. Obtain admin access (hosting, WordPress, GTM, GA4, Search Console, CRM, booking system, PSP, ESP) | CEO, Head of Sales, CRM manager | Data request sent; access list |
| 2 (9-13 Nov) | Systems inventory v1 (system, owner, cost, contract end, API, export, data location). Review plugin list and hosting. Screen CMP/consent state. Map current enquiry paths (form, phone, email) end to end by test submissions | Tech lead, web partner | Inventory v1; path map |
| 3 (16-20 Nov) | CRM/booking capability audit; stage definitions v1 agreed; mandatory fields list; form->CRM spec; shortlist 3 CRM options and 3 PSPs and 3 quote tools (criteria in section 6.3) | CRM manager, Head of Sales | Capability report; specs; shortlists |
| 4 (23-27 Nov) | Build form->CRM v1 with `lead_id`, source, consent flags; configure CMP (Swedish, equal-prominence buttons); data-flow map; ADR-001 system of record drafted; hosting and backup restore test | Web partner, Analytics lead | Working form flow in staging |
| 5 (30 Nov - 2 Dec) | Go-live v1 with QA checklist (WS16); DPAs requested from all processors; manual order-book + margin report prototype from booking export; PoC plan for CRM/quote tool for January; confirm freeze dates | CRM manager, Tech lead, CFO | Live v1; DPA tracker; report prototype |

Decisions needed from the CEO in the first 30 days: (1) who is the tech lead/product owner; (2) approval of the Q4 2026 budget of SEK 100,000; (3) the "no new contracts before 31 Jan 2027" rule; (4) turnover definition [A8]; (5) acceptance of the cutover window if replacement is chosen.

### Data request (send 2 Nov, owner CRM manager + Tech lead)
1. Current CRM, booking/back-office, quote, ESP, telephony, payment, accounting systems: vendor, plan, seats, annual cost, contract end, admin, API, export format.
2. How enquiries arrive (form, email, phone, chat) and where each lands; who answers and when.
3. Hosting provider, WordPress/PHP versions, staging, deployment method, backups, plugin list, developer/agency, SLA.
4. Payment methods offered today, PSP, fees, deposit and final-payment rules, failed-payment experience, refund process.
5. Booking export sample (anonymised) with fields in section 8.1; whether margin is stored per booking.
6. DPAs held, record of processing, DPO, retention rules, past incidents.
7. Current guarantee instrument and Kammarkollegiet notification status (CFO).
8. Staff count by role using each system; time per booking by step (time study design).

---

## 19. Swedish customer-facing microcopy (for forms and payment pages)

- Quote form heading: "Berätta om din drömresa till Sydafrika. Din personliga rådgivare hör av sig inom en timme under kontorstid." (use the "inom en timme" wording only once the SLA is met and staffed; otherwise "Din personliga rådgivare hör av sig samma arbetsdag.")
- Consent, enquiry: "Jag vill bli kontaktad om min förfrågan. Så behandlar vi dina uppgifter." (link to privacy policy with the legal entity named; not a marketing consent)
- Consent, marketing (separate, unticked): "Ja tack, jag vill få inspiration och erbjudanden på e-post."
- Source question: "Hur hörde du talas om oss?"
- Confirmation: "Tack! Din rådgivare [förnamn] hör av sig. Du kan också ringa oss på [telefonnummer]."
- Payment page: "Säker betalning. Dina kortuppgifter hanteras av vår betaltjänstleverantör och sparas inte hos oss." (use only once the PSP-hosted fields are confirmed [VERIFY])
- Guarantee: "Vi har resegaranti hos Kammarkollegiet. Du kan själv kontrollera det här." (link; text applies to package bookings only and must be approved by Legal, who also decides what to say for non-package items)
- Failure: "Betalningen gick inte igenom. Försök igen eller ring oss på [telefonnummer], så hjälper vi dig."
- Do not use "24/7 på plats" in any copy until costed and staffed (strategy positioning); use "jourtelefon under resan".

---

## 20. Assumption register (replace with real data)

| ID | Assumption | Rationale | Replace with |
|---|---|---|---|
| T-A1 | The company has some CRM/booking system but its capabilities (API, export, stage events) are unknown | Typical for a 22-person agency; not verified | Capability audit by 20 Nov 2026 |
| T-A2 | No full-time tech lead or developer in house; web work is done by an agency or freelancer | Team size; not verified | HR and ops confirmation |
| T-A3 | Mobile is 60%+ of sessions | Typical for travel; not measured | GA4 pull for Gate 0 |
| T-A4 | Cost estimates in section 13 are planning values (SEK, excl. VAT) with no vendor quotes | No pricing sourced; strategy marks tech "to be quoted" | Vendor quotes by 31 Jan 2027 |
| T-A5 | 22-30 CRM/quote users and 20-40k contacts | 22 staff incl. Pacific and MICE; WS13 contact range | HR and CRM export |
| T-A6 | Live chat is not worth adding before the reply-time SLA is stable | Chat creates a faster-reply promise | Pilot data after 4 weeks of SLA compliance |
| T-A7 | About 1.7 bookings a day (core 2028) to 2.2-2.4 (stretch), peaking 2-3x in Jan-Feb, implies no throughput constraint for mainstream SaaS | Derived from strategy volumes (637 core; 790 stretch; 866 at SEK 42k per traveller); the 2-3x peak factor is judgement | Actual peak-day counts |
| T-A8 | RPO 24 h / RTO 4 h for site and 1 business day for CRM are acceptable | Proportionate to a consultative business | CEO decision |
| T-A9 | 70% of deposits can move to payment links by end 2027 | Customers may prefer bank transfer for SEK 50-100k bookings | Pilot data at Gate 1/2 |
| T-A10 | A change freeze 20 Dec - 20 Jan protects peak enquiry season | Strategy notes Jan-Feb peak; WS04 peak caution | Seasonal data |
| T-A11 | AI drafting tools are permitted with human review and no PII in unapproved tools | Governance choice | DPO decision |
| T-A12 | Accessibility rules apply to the online booking/payment service | Legal reading not performed | Legal opinion |
| T-A13 | Web maintenance needs 8-12 hours a week on average | Typical for a content-heavy WordPress site | Agency quote and ticket history |
| T-A14 | Itinerary library of 25 published routes is the core of the quote tool; supplier rate cards exist in structured form | R02 observed 25 itineraries; rate cards unknown | Product data export |
| T-A15 | KPI targets without a sourced benchmark: duplicate rate under 2%, quoted-vs-realised margin variance within 1.5 pp, offline-conversion match rate 60%, uptime 99.9% | Proportionate engineering judgement; no benchmark sourced | Baseline measured in Q1 2027, then CEO/CFO confirm |
| T-A16 | Approver levels for quotes below the margin floors (Head of Sales vs CEO) | Strategy G1/G5 give only the floors and the CEO exception | CEO decision |

External facts used (with sources): fund levy 0.6% and growth notification duty (R09, https://www.kammarkollegiet.se/vara-tjanster/resegaranti/betala-avgift-till-resegarantifonden); package travel act requirements (https://www.konsumentverket.se/lagar/paketreselagen-konsument/); guarantee lookup (https://www.kammarkollegiet.se/vara-tjanster/resegaranti/hitta-reseaktorer-med-resegaranti); funnel and payment-failure benchmarks, Tier C (https://resources.rework.com/libraries/travel-tour-growth/booking-conversion-metrics); site stack observations (WS04, fetched 2026-11-02).
