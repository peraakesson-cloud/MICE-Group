# 16 - Analytics and measurement for sydafrikaresor.se: GA4, consent, server-side tagging, CRM-to-ads loop, attribution, incrementality, dashboards, reporting rhythm

Status: Draft v1 for CEO review | Prepared 2026-11-02 | Accountable role: Analytics lead (see [MA1]; reports to Head of Marketing, dotted line to CFO for order-book and margin numbers)
Inherits: `/home/user/MICE-Group/docs/00-strategy.md` (north star and metric tree section 4, paid incrementality 11.2-11.3, budget line "Measurement, tracking, incrementality tests" 11.1, operating prerequisites 15, gates and governance 16, risk R13, assumptions A7, A10, A15, A18). Evidence: R06 (SEO, tracking stack seen on the competitor-like site), R07 (paid benchmarks), R09 (consent), R11 (CRM). Plans in English, customer-facing text (consent banner, form labels) in Swedish.
Rules followed: we have no internal data and no access to the GA4 property, Ads accounts, CRM or booking system. Nothing about the company's current tracking, traffic or conversion is stated as fact. Items sourced from the web carry a URL; everything else is marked [ASSUMPTION] (register [MA#] in section 17) or [VERIFY].

---

## 1. Why this workstream exists, and the one design principle

The strategy makes three promises that only measurement can keep:

1. The **north star is the booked-not-departed order book (SEK) versus plan by departure year, always shown with the gross margin of that order book** (strategy section 4). That number does not exist in web analytics. It lives in the booking system and must be joined to marketing source.
2. **Paid prospecting (Tranche B, L3) is released only on holdout-proven incremental ROAS of at least 5x to scale and 4x to continue** (strategy 11.2). Platform-reported ROAS cannot prove this.
3. **Every gate (0, 1, 2, 3) needs numbers that are trusted** (strategy 16.2). A gate decision on an untrusted number is worse than no gate.

**Design principle: the booking, not the click, is the unit of truth.** Web analytics (GA4) describes behaviour up to an enquiry. The CRM and booking system describe what actually happened to money and margin. Platforms (Google, Meta) describe what they claim credit for. We build one lead identifier that links all three, then **triangulate** rather than pick one attribution model (section 7). Because the product is high-ticket, long-cycle (weeks to months from enquiry to deposit) and sold by a named adviser, most of the value is created offline, and a web-only measurement set-up would mis-steer budget.

### Objectives (measurable)

| # | Objective | Target | Date | Strategy link |
|---|---|---|---|---|
| M1 | Tracking v1: GA4 property clean, consent banner with Consent Mode v2 signals, enquiry/quote/call events, UTM and click-ID capture into the CRM lead record | Live and audited (QA checklist 100% pass) | 30 Nov 2026 | Section 15, 16.1 |
| M2 | Baseline pack from the web side: GA4 (as far back as retained, target 12-14 months) + Search Console (up to 16 months [VERIFY]) pull (traffic, landing pages, conversion rate by channel, branded vs non-branded) | Delivered to Gate 0 | 15 Dec 2026 | Gate 0 |
| M3 | Weekly one-page dashboard v1 (order book vs plan and order-book margin, enquiries existing vs new, response time, close rate by source) | Live, auto-refreshed, signed off by CFO on definitions | v1 14 Dec 2026; full 31 Jan 2027 | 16.3 |
| M4 | Offline conversion import: qualified enquiry, quote sent, deposit/booking with value (and margin band) returned to Google Ads (and Meta CAPI where consent allows) | Live | 31 Jan 2027 | 11.2 |
| M5 | Server-side tagging container live for GA4, Google Ads and Meta, respecting consent state | Live and verified | 31 Jan 2027 | R13 mitigation |
| M6 | Incrementality programme: brand-search pause test, first geo/time-based holdout designed, pre-registered, running | Holdout live | 31 Jan 2027; first read by Gate 1 (31 Mar 2027) | Gate 1 condition |
| M7 | Source capture: share of new enquiries with usable source (UTM/click ID or "how did you hear") | 90% by 31 Jan 2027, 95% by 30 Jun 2027 | per date | 15 |
| M8 | Gate pack automation: each gate has a pre-built one-page pack produced from the same definitions. Pack due 5 working days before the gate (Easter 2027 and Midsommar considered): Gate 1 Mon 22 Mar 2027, Gate 2 Tue 22 Jun 2027, Gate 3 Mon 25 Oct 2027 (31 Oct is a Sunday), Gates 4-5 Fri 24 Mar and Thu 22 Jun 2028. Gate 0 is the exception (see section 11) | Gate 1 pack ready 22 Mar 2027 | 22 Mar 2027 | 16.2 |
| M9 | Replace every [A] benchmark in the strategy that measurement can supply (traffic baseline, visitor-to-enquiry, close rate by source, lead lag, booking-date curve) | Re-baseline delivered | 31 Jan 2027, then quarterly | 16.1 |
| M10 | Booking-date vs departure-date curve and order-book milestone recalibration | Recalibrated | within 60 days of data access (by 31 Jan 2027) | 4 [A11] |

Out of scope here (owned elsewhere, but this plan specifies the data they need): ad account structure (06, 07), CRM flows and consent wording (13), site build and Core Web Vitals (04), review programme (12). The overlap with 13 is the consent record and lead fields; this plan does not duplicate 13's consent wording, it consumes the consent flags.

---

## 2. Starting point and what we do not know

Facts we can state (all from research files):

| Fact | Source |
|---|---|
| A comparable operator site (the competitor snapshot in R03/R06) runs Google Analytics, Meta pixel, Microsoft Clarity, Bing UET and Google Ads tags behind a cookie consent list, on WordPress. Assume sydafrikaresor.se has a similar client-side stack; this is **not verified** for our site | R03, R06 section "tracking visible" |
| Core plan 2028 needs about 3,350 enquiries (+65% vs the ~2,025 implied for 2026, of which 2,148 is the existing flow after 3% a year growth and ~1,200 is new traffic) and 134-223k qualified sessions at 1.5-2.5% visitor-to-enquiry; baseline traffic and keyword pool unknown | Strategy 2, 3.2, 10, [A10] |
| Cookie consent for non-essential cookies applies in Sweden under the Electronic Communications Act (LEK, 9 kap. 28 §); legitimate interest is not a basis for non-essential cookies. Secondary sources: https://cookieconfirm.com/sv/guider/cookielagen/ and https://svenskcybersakerhet.se/guider/berattigat-intresse-vs-samtycke-cookies . R09 flagged this as unverified | R09 5.2, [VERIFY] with counsel/IMY/PTS |
| Google states that if EEA users are measured with Google tags, end-user consent choices must be passed to Google (Consent Mode); v2 adds `ad_user_data` and `ad_personalization`. Google Ads conversion modelling needs about 700 ad clicks over 7 days per domain-by-country grouping; GA4 behavioural modelling has eligibility rules including at least 1,000 events per day with `analytics_storage` denied for 7 days (and, as we understand it, a minimum of consented daily users as well [VERIFY]). Secondary source: https://www.enzuzo.com/blog/google-consent-mode . Thresholds can change | Web, [VERIFY] on Google's own help pages |

What we do not know (data requests, section 16): whether a GA4 property exists and since when; whether it is Universal-era data migrated or fresh; which CMP is used and what the accept rate is; what the booking system can export; whether bookings are taken only by advisers or partly online; how enquiries arrive (form, email, phone, chat); and the size of the paid baseline.

**Consequence of the volume problem.** At about 39 existing-flow enquiries a week nationally in 2026 (~2,025 a year, strategy section 2 [A]) rising to about 41 in 2028 (2,148 a year, [A10]), most statistical tests at channel or region level are underpowered. Section 8 is written around that fact instead of pretending a clean experiment is available.

---

## 3. Measurement architecture

```
 Visitor (consent state: granted/denied per purpose)
    |
    v
 CMP banner (Swedish, granular) --> consent state + log (timestamp, wording version)
    |
    v
 Web GTM container (client) --- sends consent signals (Consent Mode v2) ---> tags fire/ping per consent
    |
    v
 Server GTM container on first-party subdomain (e.g. data.sydafrikaresor.se)  [M5]
    |------> GA4 (events)                       -> GA4 BigQuery export (daily, from day 1)
    |------> Google Ads (conversions, enhanced conv. only if ad_user_data granted)
    |------> Meta Conversions API (only if consent covers it)
    |
 Quote form / call button / chat  --> CRM lead record (lead_id, UTM, gclid/gbraid/wbraid, fbclid, first/last landing page,
                                       consent flags, "how did you hear", budget bracket, travel month)
    |
 Booking system / ERP --> weekly (later daily) extract: booking_id, lead_id, status, booking value, margin, departure date,
                          booking date, currency, pass-through flag, cancellations
    |
 BigQuery (or equivalent warehouse; see [MA4]) = joins GA4 + CRM + booking + ad cost + Search Console
    |
 Looker Studio (or equivalent BI) dashboards D0-D7  +  offline conversion export back to Google Ads / Meta
```

Key design decisions:

| Decision | Choice | Rationale |
|---|---|---|
| Join key | `lead_id` (generated at form submit, stored in CRM, pushed to dataLayer, and sent as a user-scoped GA4 parameter only in non-PII form) | Lets booking value return to the channel that created the lead without sending personal data to ad platforms |
| Where truth lives | CRM + booking system for money and margin; GA4 for behaviour; platforms for diagnostics | Prevents arguments about "whose number" at gates |
| Server-side tagging | Yes, but **it does not bypass consent**. It improves data quality (first-party context, longer cookie life where permitted, fewer client blockers, control over what leaves) and lets us strip fields before forwarding. Consent still gates what is sent | Honest framing for R13; legal risk if sold internally as a way around consent |
| Warehouse | GA4 BigQuery export switched on in week 1 | GA4 standard data retention in the interface is limited [VERIFY], so history that is not exported is lost; export is the only way to keep a 24-month view |
| Consent Mode | Advanced mode with a Swedish CMP that supports Consent Mode v2 signals, subject to Legal confirming that cookieless pings are acceptable for the company's reading of LEK/GDPR [VERIFY]; fall back to Basic mode if Legal says no | Advanced mode feeds modelling, Basic does not; but modelling thresholds may not be met (below) |
| Identity | No cross-device user stitching beyond what consented first-party IDs give; no fingerprinting | Compliance and simplicity |
| BI tool | Looker Studio on the warehouse (free), moving to a paid BI only if refresh/permissions demand it | Budget is SEK 0.2 M a year |

**Modelling thresholds are probably not met in 2027.** If sessions are in the order of 370-610 a day in 2028 core (134-223k a year, strategy 3.2) and today lower, then 1,000 denied-consent events a day is unlikely to be reached for GA4 behavioural modelling [VERIFY against actual event counts; one session produces several events, so this could still be met]. Google Ads modelling needs 700 clicks in 7 days per domain-country grouping, which is roughly SEK 0.7-1.0 M a year of Search spend at CPCs of SEK 20-27 [ASSUMPTION: CPC range not account-verified, 700 x 52 = 36,400 clicks a year]. Planned Search is SEK 0.85 M (2027) and 1.10 M (2028) (strategy 11.1) and part of it is split across several campaigns, so the threshold is borderline at best; below it Google uses benchmarks. Planning rule: **do not rely on Google modelling to fill the opt-out gap.** Recovery comes from (a) CRM-captured source on every enquiry, (b) offline import keyed on click IDs where consent was given, (c) the "how did you hear" field, (d) holdouts and trend analysis.

---

## 4. Event and data design (the measurement plan)

### 4.1 GA4 events (names are proposals; keep a single naming convention, snake_case, English)

| Event | Trigger | Key parameters | Marked as GA4 key event? |
|---|---|---|---|
| `page_view` (auto) | Every page | page type taxonomy: hub, itinerary, trip-type, blog, price, about, quote | No |
| `view_itinerary` | Itinerary/rundresa page engaged (scroll 50% or 20 s) | itinerary_id, trip_type, duration_days, price_from_band | No |
| `quote_start` | First interaction with quote form | form_id, entry_page | No |
| `generate_lead` | Quote form submitted | lead_id, lead_type (quote/call/question), budget_bracket, travel_month, party_size band, source_page | **Yes** |
| `book_call` | "Boka ett samtal" submitted/scheduled | lead_id, slot_type | **Yes** |
| `click_phone` / `click_email` / `click_chat` | Tap/click on contact links | placement | Yes for phone |
| `call_qualified` | Call tracking: call over 60 s [ASSUMPTION: threshold] | source via dynamic number or CRM log | Yes (imported from call tool/CRM) |
| `newsletter_signup` / `guide_download` | Lead magnet (workstream 13) | magnet_id, double_opt_in_status | Yes (micro) |
| `file_download` | Brochure/itinerary PDF | file_name | No |
| `video_engage` | Video 50% | video_id | No |
| `site_search` | Internal search | query category (no free text with PII) | No |
| Offline events (imported via Measurement Protocol / warehouse, keyed on lead_id; never include PII): `lead_qualified`, `quote_sent`, `deposit_paid`, `booking_confirmed` (value), `booking_cancelled` | CRM stage change | lead_id, value, margin_band, departure_year | `booking_confirmed` yes |

Rules: no PII (names, email, phone, free text) in GA4 or in URLs; form field names hashed only for enhanced conversions and only when `ad_user_data` is granted; internal traffic filtered; referral exclusions for payment/booking domains; cross-domain linking if any booking/payment subdomain exists [VERIFY].

### 4.2 CRM lead record (shared with workstream 13, which owns consent wording)

Required at creation (hidden + visible fields): `lead_id`, created timestamp, first-touch and last-touch UTM (`source`, `medium`, `campaign`, `content`, `term`), `gclid`/`gbraid`/`wbraid`, `fbclid`, first landing page, form page, "how did you hear" (single select + optional text, section 4.4), budget bracket, travel month, party size, consent flags (marketing email, SMS, phone; each with date, wording version, URL), assigned adviser, `first_reply_at`. Stage timestamps: new, contacted, qualified, quote sent, deposit, booked, lost (reason), departed. Phone and email enquiries get the same record created manually with source asked by the adviser (mandatory dropdown, cannot save the stage change without it).

### 4.3 Booking system extract (needs finance sign-off on definitions)

`booking_id`, `lead_id` (or manual match key), booking date, departure date, return date, travellers, total booking value incl./excl. pass-through [per A8 turnover definition], **gross margin SEK and %**, currency mix, status (confirmed, amended, cancelled with date), product type (guided, tailor-made, group), gateway, repeat/referral flag, commission to partner or creator (SEK). This is what produces the order book, order-book margin and the booking-date curve [A11]. If the booking system cannot export this, the first fallback is a weekly CSV from the system's report module, the second is a finance-owned spreadsheet maintained by booking ops (slower, error-prone; flagged as a risk, section 13).

### 4.4 "How did you hear" (adviser-asked and form field)

Form label (Swedish): **"Hur hörde du talas om oss?"** (single select, then optional free text "Berätta gärna mer"). Options: Googlesökning; Annons på Google; Annan sökmotor (t.ex. Bing); Facebook eller Instagram; YouTube; TikTok; Pinterest; Har rest med er tidigare; Rekommendation från vän eller familj; Blogg, reseguide eller influencer; Mässa eller event; Tidning eller artikel; Förening, företag eller partner; AI-tjänst (t.ex. ChatGPT eller Gemini); Annat; Minns inte. "Minns inte" is mandatory so advisers and customers are not forced to guess (a forced guess pollutes the field). The adviser dropdown uses the same list. "AI-tjänst" matters because L4 includes AI-search visibility and GA4 will misreport it as direct or referral. Self-reported source is biased toward memorable touches but is the only way to see dark social, word of mouth and AI answers; we report it **side by side** with tracked source, never merged into it.

### 4.5 Taxonomy and discipline

- **UTM standard** (one page, enforced by a spreadsheet builder with validation, not by memory): `utm_source` (google, meta, youtube, tiktok, pinterest, newsletter, partner-name, creator-name), `utm_medium` (cpc, paid_social, organic_social, email, referral, affiliate, qr), `utm_campaign` (`yyyymm_theme_market`), `utm_content` (creative id), `utm_term` (search term group). Lower case, no spaces. Auto-tagging stays on for Google Ads; UTMs are added by tracking templates.
- **Channel grouping:** custom channel group so that Brand search, Non-brand search, Meta prospecting, Meta retargeting, YouTube, Creators, Partners, Email, Organic search, Direct, AI referrals are separate.
- **Brand vs non-brand search split** is maintained in Ads (campaign naming) and Search Console (regex on brand terms) because the strategy's Tranche A/B split depends on it.
- **Naming of campaigns** carries `A` or `B` (Tranche) so cost can be summed by tranche automatically.

---

## 5. Consent and privacy

| Topic | Plan | Owner | Date |
|---|---|---|---|
| Legal basis for analytics and ad cookies | Consent (opt-in, granular: necessary, statistics, marketing). Counsel/DPO confirms reading of LEK 9 kap. 28 § and IMY/PTS guidance [VERIFY; R09 flagged this as unverified] | Legal / DPO | 20 Nov 2026 |
| CMP | A Swedish-language CMP with Consent Mode v2 support, equal-prominence "Godkänn alla" and "Avvisa alla", granular toggles, re-consent every 12 months [ASSUMPTION], consent log retained; configure and test before any paid test starts on 1 Dec | Analytics lead + SEO/Web lead | 27 Nov 2026 |
| Consent Mode signals | `analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization` set to denied by default for EEA, updated on user choice. Region settings: apply to EEA | Analytics lead | 27 Nov 2026 |
| Banner design | Test copy variants only within what Legal allows; no dark patterns. Measure accept rate weekly. Planning value for accept rate 55-75% [ASSUMPTION, MA5]; replace with actual | Analytics lead | continuous |
| Forms | Consent for marketing is separate from the right to answer an enquiry (workstream 13, section 5); unticked boxes; consent flags written to the CRM | CRM manager | 30 Nov 2026 |
| Data sent to ad platforms | Hashed first-party data (enhanced conversions, Customer Match, CAPI) only where consent covers it and Legal confirms the DPA/transfer position for Google and Meta [VERIFY] | Legal + Analytics lead | 31 Jan 2027 |
| Data processing agreements | DPAs in place with GA4/Google, CMP, sGTM host, CRM, BI, call-tracking vendor; record of processing updated | Legal / DPO | 15 Dec 2026 |
| Server-side hosting | EU region hosting; first-party subdomain; IP anonymisation and field stripping in the server container | Analytics lead / dev partner | 31 Jan 2027 |
| Retention | GA4 user/event retention set to the maximum allowed [VERIFY]; warehouse retention 26 months; PII never enters the warehouse (lead_id pseudonymous; join to PII happens only inside the CRM) | Analytics lead | 15 Dec 2026 |
| Request handling | Deletion/access requests handled via CRM; lead_id deletion propagates to the warehouse via a monthly job | CRM manager + Analytics lead | 31 Mar 2027 |
| Call recording / chat | Not enabled for marketing analysis unless Legal approves wording and notice | Legal | decision by 31 Jan 2027 |

**Swedish banner copy (draft; Legal/DPO must approve wording and category descriptions before launch):**

- Rubrik: "Du bestämmer över dina cookies"
- Text: "Vi använder nödvändiga cookies för att sajten ska fungera. Om du tillåter det använder vi också cookies för statistik, så att vi kan förbättra sajten, och för marknadsföring, så att vi kan visa relevanta annonser. Du kan ändra ditt val när som helst."
- Knappar (lika framträdande): "Godkänn alla" | "Avvisa alla" | "Anpassa"
- Kategorier: "Nödvändiga (alltid på)" | "Statistik" | "Marknadsföring"
- Länk i sidfoten: "Cookie-inställningar" (öppnar bannern igen), plus länk till integritetspolicyn.

Cookie-banner A/B is a legitimate growth lever (accept rate drives how much of the paid journey is observable) but is bounded by law; every banner change is logged in the change log (section 12).

---

## 6. Attribution approach: three lenses, one decision rule

| Lens | Source | Question it answers | Weakness | Used for |
|---|---|---|---|---|
| L-A Platform-attributed | Google Ads, Meta, GA4 data-driven attribution | What does each platform claim? | Over-claims, especially retargeting and brand; blind to opt-outs and offline | Daily optimisation inside a channel; sanity check (attributed ROAS at least 8x is the strategy's sanity line, not a target) |
| L-B CRM-attributed | CRM first-touch and last-touch UTM/click ID joined to booking value and margin; "how did you hear" side-by-side | Which channels create leads that become margin? | Last-touch bias; lag; offline sources (word of mouth) show as direct | Weekly/monthly channel economics: cost per qualified enquiry, cost per booking, margin per SEK of marketing, by existing vs new traffic |
| L-C Incremental | Holdouts, pause tests, geo/time tests, pre/post with controls | What would not have happened without the spend? | Low power at our volume (section 8); slow | Gate decisions, Tranche B release, budget reallocations between channels |

**Decision rule (binding for this workstream):**

1. Day-to-day bid and creative decisions use L-A, constrained by the cap from L-B.
2. Monthly budget moves between channels use L-B (marginal marketing cost per marketing-created booking at most SEK 20,000; blended at most SEK 8,000; strategy section 4).
3. **Any decision to release, scale or cut Tranche B uses L-C**, with L-A and L-B shown as context. If L-C is inconclusive (confidence interval spans both sides of the threshold) the default is **hold spend flat for one more test window**, not scale. Scaling on attributed numbers alone is forbidden by the strategy.
4. When the lenses disagree by more than a factor of 2 on a channel, the analytics lead writes a one-paragraph reconciliation in the monthly pack; that gap is itself a finding (typically retargeting and brand over-claim).

Attribution model settings: GA4 data-driven attribution (reporting identity: blended, with device-based fallback) [VERIFY the current GA4 options]; CRM view uses both first-touch and last-touch and a simple position-based 40/20/40 view for multi-touch journeys with at least 3 recorded touches [ASSUMPTION]; no "black-box" vendor attribution tool is bought in 2027 (cost not justified at this volume).

---

## 7. Marketing efficiency metrics (definitions that fix the strategy's targets)

| Metric | Definition | Owner of definition | Target (from strategy) |
|---|---|---|---|
| Order book (SEK) | Sum of booking value for confirmed, not-cancelled, not-yet-departed bookings, by departure year, with currency at booking-date rate and an FX-exposed flag | CFO | 24 / 36 MSEK 2027 departures at 31 Mar / 30 Jun 2027; 19 MSEK 2028 departures at 31 Dec 2027 (stretch 24) |
| Order-book gross margin | Sum of gross margin SEK of the same bookings / order book. Shown with pass-through split | CFO | At least 19% on new bookings by Gate 1; 20% planning value |
| Qualified enquiry | Enquiry meeting criteria: real trip intent, travel window, budget bracket not below floor, reachable contact. Spam, supplier solicitations, existing-customer service questions excluded | Head of Sales | counted weekly |
| Existing vs new traffic | "Existing flow" = sources active in the baseline year (set at Gate 0 from the baseline pack); "new" = incremental channels launched under the programme (paid prospecting, new content, creators, partners). Tagged at lead creation by rule on source/campaign | Analytics lead | needed for 25-27% vs 18% close rates |
| Close rate by source | Bookings / quotes sent (and bookings / qualified enquiries) by creation cohort, measured when the cohort is "mature" (cohort age at least 90 days [ASSUMPTION], to be set from observed lag) | Analytics lead | existing 25% to 27%; new traffic 18%; referral 45%+ |
| Marketing-created booking | Booking whose first-touch is a programme-funded channel and which is not tagged as existing flow or repeat | Analytics lead | denominator of marginal cost. The strategy's plan figures count only bookings from levers L3-L5 and L8 (28 in 2027, 109 in 2028, G4); repeat/referral (L7), new products (L9) and season spreading (L10) are not in that denominator. The tag rule must therefore map to L3-L5 + L8 so measured and planned figures are comparable; report L7/L9/L10 separately |
| Marginal marketing cost per marketing-created booking | Incremental marketing cost above the assumed 2.6 MSEK baseline [A18] / marketing-created bookings | Analytics lead + CFO | Cap SEK 20,000 (G4). Plan is SEK 36k in 2027 (accepted by the strategy as an investment year that "must fall") and 18k in 2028. Until the CEO sets a 2027 ceiling, the 20k cap binds new spend decisions and the 2027 figure is reported against the 36k plan (decision Q4 in section 19) |
| Blended marketing cost per booking | Total marketing cost / all bookings | CFO | at most SEK 8,000 (about 7,400 in 2027, 7,200 in 2028) |
| Incremental ROAS (Tranche B) | **Incremental first-trip booked turnover** attributable to the test group divided by incremental spend, from a pre-registered holdout. This is the strategy's convention: break-even 5x at 20% gross margin (1/0.20), 11.2 and A15. (Gross-profit ROAS = this figure x margin, break-even 1x; report it as a second line so nobody confuses the two) | Analytics lead | continue at 4x or more; scale at 5x or more (strategy 11.2, Gate 1 release at 4x or more) |
| Response time | Minutes from `lead created` to `first_reply_at` (human), business-hours aware | Head of Sales | under 1 h for 90% |
| Cost per quoted enquiry (Tranche A) | Spend / enquiries reaching "proposal sent". Workstream 06 sets the target on this definition (about SEK 890 per tracked qualified enquiry is its own conversion of the same target); keep both columns in D2 so the two documents cannot drift | Head of Marketing | At most SEK 1,100 in 2027, 1,180 in 2028 (workstream 06, G4) |
| Cost per qualified enquiry (all channels) | Channel cost / qualified enquiries | Head of Marketing | Reported, no cap in strategy. Reference points: about SEK 1,700 per new enquiry incremental, about SEK 3,800 if the whole 2028 budget is charged to new enquiries (strategy 10) |
| Visitor-to-enquiry | Qualified enquiries / sessions, by landing-page type and channel | SEO/Web lead | 1.5-2.5% (R11 range 1-3%) |
| Quote rate | Quotes sent / qualified enquiries | Head of Sales | 80% planning value [A10] |
| Lead-to-booking lag | Days from lead created to deposit, distribution by source | Analytics lead | Measured; sets the cohort maturity age |
| Review score and count; complaints and ARN cases per 1,000 travellers | Trustpilot, Google, Reco plus complaint log | CRM manager | Trustpilot 4.5+ with 100+ reviews by 31 Dec 2027; rolling 4.2+ is the hard spend gate G8 |
| Repeat plus referral share of turnover | Turnover from tagged repeat/referral bookings / total | CRM manager | about 15% now to about 20% by end 2028 [A12] |
| Revenue and gross margin per traveller | Order-book value and margin / travellers | CFO | Flat in 2027, +2.2% in 2028 (revenue); margin tracked separately |
| Partner-sourced share of turnover | Partner/agent-tagged bookings / total; largest single partner share | Head of Marketing | 8-10% by 2028; single partner under 10% (G5) |
| Marketing cost as share of turnover; promotions and discounts as share of turnover | Total marketing / turnover; promo spend / turnover | CFO | At most 7.5% (G4); at most 2% (G2) |
| Cumulative programme net contribution | Incremental gross profit less incremental cost per strategy 12.1-12.2 definitions (market-growth effect included as in the strategy table) | CFO | Not worse than -3.0 MSEK at 30 Jun 2027 (G10, stop-loss) |
| Supply held vs order book; FX hedge ratio | Held allocation register and hedge book vs confirmed foreign-currency cost | Head of Product / CFO | Supply held at least equal to order-book trajectory (Gate 1); hedge 50-70% (G3) |

Each definition goes into a one-page data dictionary (kept in the repo next to the dashboards) and is signed off by the CFO by 14 Dec 2026. **Changing a definition after Gate 0 requires a dated entry in the change log and a restated history.**

### 7.2 How each bridge lever (strategy 9.1) is measured

The monthly pack compares actuals with the bridge by lever. Without a measurement rule per lever the comparison is opinion. Levers overlap by design (15% haircut [A14]), so the pack reports each lever's lead KPI and one combined check: total booked turnover by departure year vs plan.

| Lever | Plan 2027 / 2028 (MSEK) | Measured by | Source system | Caveat |
|---|---|---|---|---|
| L1 Market tailwind | +1.2 / +2.4 | Swedish arrivals (Stats SA monthly) x constant 2026 share (~3.1% of arrivals [A2]) | Stats SA, booking system | Pools unvalidated until 31 Jan 2027; 2026 YTD for Sweden unknown |
| L2 Conversion, existing flow | +2.0 / +3.5 | Close rate (bookings / quotes sent) on existing-flow cohorts vs 25% to 27%; response time | CRM | Needs "existing flow" frozen at Gate 0 |
| L3 Paid prospecting | +1.2 / +4.0 | Tranche B only: holdout incremental ROAS and incremental enquiries (section 8); cross-check with L-B | Ads, CRM, experiment log | Detectability is poor (section 8.1); evidence grade C stays C unless a test reads |
| L4 SEO, content, AI visibility | +0.2 / +1.5 | Non-brand organic sessions, enquiries and bookings from organic by page; self-reported AI-tjänst | GA4, Search Console, CRM | 4-9 month lag; much of the payout lands in 2028 H2 and 2029 departures |
| L5 Social, creators, hosted departures, PR | +0.4 / +2.0 | Hosted-departure fill, creator promo codes and UTMs, assisted conversions, self-reported source | CRM, booking | Word of mouth and dark social show up only in self-report |
| L6 Revenue per traveller | 0.0 / +1.0 | Revenue and margin per traveller; extension and insurance attach rates | Booking | Pass-through inflates turnover without margin; show both |
| L7 Repeat and referral | +0.8 / +3.0 | Repeat plus referral share of turnover (15% to about 20%); referral-coded bookings | CRM, booking | Needs a returning-customer flag at booking |
| L8 B2B, affinity, partners | +1.0 / +3.5 | Partner-sourced turnover, active agents, margin after commission (at least 15%) | Booking, partner codes | Partner links and codes live from Q2 2027 |
| L9 New products | +0.8 / +2.5 | Fill rate and turnover by new product code vs launch cap | Booking, Product | Only after the supply-readiness gate |
| L10 Season spreading | +0.4 / +1.0 | Departures and turnover in Apr-May and Sep-Nov vs prior year | Booking | Needs a prior-year baseline from the 24-month extract |

---

## 8. Incrementality programme (how to prove 4x / 5x with 41 enquiries a week)

### 8.1 Power reality check

For a two-arm test with N outcome events in each arm, a rough 80% power, 5% significance minimum detectable relative lift is about 2.8 x sqrt(2/N). This is an approximation that **ignores geographic noise, which makes it optimistic** [ASSUMPTION: Poisson counts].

| Events per arm (enquiries in test window) | Approx. minimum detectable lift |
|---|---|
| 50 | about 56% |
| 100 | about 40% |
| 200 | about 28% |
| 400 | about 20% |

Planning numbers: nationally about 39-41 existing-flow enquiries a week (2026-2028, strategy section 2 and [A10]); a holdout region holding 15-20% of population gives about 6-8 a week. A 6-week region test therefore yields roughly 40-50 enquiries per holdout arm, meaning only very large effects are detectable. **The strategy's "6-week geo holdout" is therefore a feasibility test, not proof.** The design below is honest about this.

**Detectability against the plan's own expected effect (the check the first draft lacked).** The effect we want to detect is small. Strategy L3 is +1.2 MSEK in 2027 (about 12 bookings at ~SEK 99k) and +4.0 MSEK in 2028 (about 40 bookings at ~SEK 101k). At 80% quote rate and 18% close rate that is about 84 and 275 incremental enquiries a year, or roughly **3% of all enquiries in 2027 and 8% in 2028** (of ~2,440 and ~3,350; strategy section 10) [ASSUMPTION: derived from A1, A10]. A holdout region sees a treatment effect of that order, against a minimum detectable lift of about 40-56% (50-100 events per arm). Even a national alternate-weeks switchback over 16 weeks (about 330 events per arm) detects only about 22%. **Conclusion: at planned scale an enquiry-count holdout cannot prove or disprove 4x or 5x for Tranche B.** The pre-registered rule in 8.3 will therefore mostly return "inconclusive". Options for the CEO (decision Q3 in section 19): (a) accept that Tranche B is released on directional evidence plus a hard spend cap; (b) run longer all-Sweden on/off windows (26 weeks or more) and use higher-volume leading outcomes (qualified sessions on itinerary pages, quote-form starts, branded-search volume) as primary, with enquiries as secondary; (c) concentrate Tranche B spend in fewer, larger flights so the effect is larger than the MDE, at the cost of slower rollout. This plan defaults to (b) with the spend cap in (a).

### 8.2 Test portfolio

| Test | Design | Duration / volume | Read | Decision it supports |
|---|---|---|---|---|
| T1 Brand-search pause | Alternate weeks (switchback) or matched-region pause of brand bidding; measure brand clicks, total brand-intent enquiries, share that arrives organically | 8 weeks starting 1 Dec 2026, inside the pre-Gate-1 paid cap of SEK 0.5 M (SEK 100k 4-week test, then SEK 0.4 M, strategy 11.3); extend to 12 if under 100 brand enquiries. Pre-period baseline comes from Search Console history, not from the 2 days of tracking v1 data. Confounds to log: the early-booking campaign starts the same day and lifts brand searches; competitors may bid on the brand while it is paused (watch auction insights); Dec-Mar is peak season, so the cost of lost clicks is highest now | Cost of brand defence per incremental enquiry | Tranche A sizing; whether brand bids can be lowered |
| T2 Meta prospecting geo holdout | Withhold Meta prospecting in a matched set of regions (matched on historical enquiries and population, Stockholm/Göteborg/Malmö not split across arms) | Minimum 8 weeks, ideally 12. Pooling two flights does not fix the power problem (8.1); judge feasibility against the detectability check before launch. **Timing conflict with the strategy:** pre-Gate-1 paid spend is brand and high-intent only (11.3), so no prospecting runs before 31 Mar unless the CEO allows a capped Meta test flight inside the SEK 0.5 M | Incremental enquiries and (lagged) bookings | Tranche B release at Gate 1 / Gate 2 |
| T3 Platform conversion-lift (Meta lift study / Google conversion lift) when eligible | Use only if the platform's minimum spend/volume rules are met [VERIFY] | per platform | Cross-check on T2 | Same |
| T4 YouTube/Demand Gen incremental | Geo split or brand-search lift as a proxy (brand query uplift in exposed geos) | 6-8 weeks | Upper-funnel evidence; reported as directional | Tranche B mix |
| T5 Pre/post with synthetic control | For SEO/content launches and creator hosted departures where geo split is impossible: compare to a control built from untouched pages/regions with a time-series model (e.g. open-source causal-impact method) | per launch | Directional | L4/L5 evidence grade |
| T6 Always-on "ghost" control | Hold out 5-10% of retargeting audience from ads permanently | continuous | Retargeting incrementality (usually the worst over-claim) | Cut retargeting if lift is small |

### 8.3 Pre-registration and reading rules

- Each test has a one-page protocol written **before launch**: hypothesis, primary outcome (qualified enquiries; booking value as a lagging secondary), arms, duration, minimum spend, MDE, stop rules, and what decision each result triggers. Stored in the repo and dated.
- Primary outcome is **qualified enquiries** (more volume than bookings; see 8.1 for the limits), converted to incremental ROAS (turnover basis, section 7) using the cohort's observed new-traffic quote rate (80% planning value) and close rate (18% planning value [A10]) and average booking value (about SEK 101k in 2028, A1). Worked equivalence at planning values [ASSUMPTION]: 4x means at most about SEK 25k of spend per incremental booking, or about SEK 3,600 per incremental enquiry; 5x means about SEK 20k and about SEK 2,900 (cf. the SEK 20k marginal cap, G4). The booking-level confirmation arrives 2-4 months later and is used to correct the estimate, not to delay the first decision.
- **Reporting an interval, not a point:** incremental ROAS is reported with an 80% interval. Rule: continue Tranche B if the point estimate is at least 4x **and** the lower bound is at least 2x; scale if the point estimate is at least 5x and the lower bound at least 3x; cut if the upper bound is under 4x. Anything else is "inconclusive: hold flat, extend test". These bounds are [ASSUMPTION MA6]; CFO and Head of Marketing confirm before the first read. The strategy's stated thresholds (4x continue, 5x scale) are respected as point-estimate thresholds; the interval conditions are added because at our volume point estimates alone would be mostly noise. **Deviation to approve:** strategy 11.2 says pause a campaign group if holdout incremental ROAS is under 4x after 8 weeks. Until the CEO approves MA6, the strategy rule governs: a point estimate under 4x after 8 weeks triggers a reversible pause (no new commitments, spend frozen); a permanent cut needs the upper bound under 4x. The first draft let a noisy point estimate below 4x pass as "inconclusive", which would have overridden the strategy.
- If the plan's own maths holds (Tranche B incremental ROAS about 4x in 2028, 1.7x in 2027), a clean pass at 5x is unlikely; the programme should expect a "cut or hold" outcome on much of Tranche B and treat any scale decision as an upside. This is stated openly in every gate pack.
- No budget movement while the SLA is missed (strategy rule), and the test protocol records SLA performance during the window, because a slow response depresses measured incrementality.

### 8.4 What measurement can and cannot do for gates

| Gate | Measurement deliverable | Honest limit |
|---|---|---|
| Gate 0 (15 Dec 2026) | GA4 + Search Console baseline, lead-source baseline, funnel baseline from CRM, definitions signed off, 40 MSEK definition and margin from the booking extract (with CFO), first consent accept rate | No incrementality yet |
| Gate 1 (31 Mar 2027) | First read of T1 (brand pause); T2 read only if a capped prospecting flight was allowed (8.2); order book vs 24 MSEK and margin on new bookings vs 19%; response SLA; marketing per booking vs cap; Trustpilot trend toward 4.5 and supply held vs order-book trajectory (both fed from CRM and Product) | T2 read is directional at best (8.1); the strategy's 4x release condition for Tranche B can usually not be evidenced by Gate 1, so the default is hold |
| Gate 2 (30 Jun 2027) | T2/T3/T4 reads, cohort close rates by source, L3 and L8 vs plan, order book vs 36 MSEK, cumulative net contribution vs -3.0 MSEK, service metrics | Bookings from spring cohorts are still maturing; margin estimate uses mix-adjusted forecast |
| Gate 3 (31 Oct 2027) | 12-month cohort economics, ROAS by tranche, repeat/referral share, order-book trajectory to 19 (24) MSEK of 2028 departures by 31 Dec (forecast, since the checkpoint is 31 Dec), margin at or above 19% | Strongest evidence point in the plan |

---

## 9. Dashboards and reporting

### 9.1 Dashboard set (all built on the warehouse; one metric dictionary)

| ID | Name | Audience | Refresh | Content |
|---|---|---|---|---|
| D0 | One-page weekly (the strategy 16.3 dashboard) | CEO, growth council | Monday 07:00 | Order book vs plan by departure year, order-book margin, enquiries existing vs new, response time, close rate by source (existing vs new), marginal marketing cost per marketing-created booking, holdout incremental ROAS (latest), review score, complaints per 1,000, supply held vs sold, FX hedge ratio, cumulative programme net contribution (last four fed from Finance, Ops, CRM, Product) |
| D1 | Funnel and web | Marketing, SEO/Web | Daily | Sessions, qualified sessions, visitor-to-enquiry by landing page type and channel, form drop-off, Core Web Vitals pull (from 04), consent accept rate |
| D2 | Paid | Head of Marketing, paid specialists | Daily | Spend, cost per qualified enquiry, by Tranche A/B, platform vs CRM-attributed vs incremental, search terms quality, lost impression share, budget pacing vs cap, SLA gate status |
| D3 | SEO and content | SEO lead | Weekly | Rankings (priority set), clicks/impressions by cluster, branded vs non-branded, enquiries and bookings from organic by page, AI-search referrals and self-reported "AI-chatt" |
| D4 | CRM and sales | Head of Sales, CRM manager | Daily | Lead aging, first-reply time, quote age, stage conversion by adviser and by source, lost reasons, follow-up cadence compliance, capacity vs SLA |
| D5 | Order book and margin | CFO, CEO | Weekly | Order book by month of departure and departure year, booking curve vs prior and vs plan, margin by product/season/gateway, cancellations, pass-through share, partner commission cost |
| D6 | Experiment log | Growth council | On change | Every test protocol, status, MDE, result interval, decision taken |
| D7 | Data quality | Analytics lead | Daily alerts | Tag errors, consent-mode check, % enquiries with source, offline-import match rate, schema breaks |

Design rules: each dashboard answers one decision; no vanity metrics (sessions alone, impressions); every chart shows plan or prior-year comparison; every number links to its dictionary entry; mobile-readable D0 (CEO reads on phone); data freshness stamp on every page; single owner per dashboard.

### 9.2 Reporting rhythm

| Cadence | Forum / product | Producer | Audience | Content |
|---|---|---|---|---|
| Daily | Automated data-quality alerts (D7); paid pacing alert | System / Analytics lead | Marketing, Sales | Tag failures, spend pacing breach, response-time breach |
| Weekly (Mon 07:00) | D0 one-pager + 5-line commentary by the Analytics lead | Analytics lead | CEO, growth council | What moved, what we do about it |
| Weekly (Tue, 30 min) | Marketing stand-up on D2/D3 | Head of Marketing | Marketing team | Optimisations, tests |
| Weekly (Wed, 30 min) | Sales-marketing sync on D4 | Head of Sales | Advisers, CRM manager | Lead quality feedback loop, lost reasons |
| Monthly (first week) | Growth council pack: bridge vs actuals by lever (L1-L10 and GL1-GL4 where active), channel economics (L-B), experiment log, risks, data-quality score | Analytics lead + CFO | CEO (chair), Heads of Sales/Marketing/Product, CFO, CRM manager | Decisions on budget moves; Tranche status; hiring triggers |
| Quarterly | Bridge re-run with actuals; benchmark refresh (replace [A] values with measured); MMM-lite/trend review (2028) | Analytics lead + CFO | CEO, board | Re-baselined plan; feeds Kammarkollegiet and bank forecast updates |
| Gate dates | Gate pack (one page + appendix) | Analytics lead | CEO/board | Pass/fail on each condition with evidence grade |

Commentary format (to stop dashboards being decoration): **Number, change, cause (known/unknown), action, owner, date.**

---

## 10. Budget (SEK) and resourcing

Strategy budget line "Measurement, tracking, incrementality tests": **SEK 50k Q4 2026, SEK 200k in 2027, SEK 200k in 2028** (strategy 11.1). The one-off "technology builds: CRM, quote form, site, tracking" line (SEK 0.6 M in 2027, 0.3 M in 2028, "to be quoted", strategy 12.1) is separate; the CRM and form builds sit there. Items below are inside the measurement line unless marked.

| Item | Q4 2026 | 2027 | 2028 | Notes |
|---|---|---|---|---|
| CMP licence (Consent Mode v2 capable) | 5k | 15k | 15k | [ASSUMPTION MA7: SEK 10-25k a year at this traffic; replace with quote] |
| Server-side GTM hosting (EU) and monitoring | 5k | 25k | 30k | [ASSUMPTION: SEK 1-3k a month incl. managed host; replace with quote] |
| GA4 + GTM + sGTM implementation partner (audit, build, QA, offline import, CAPI) | 25k | 55k | 25k | [ASSUMPTION: about 60-80 consultant hours in Q4+Q1 at SEK 900-1,100 an hour] |
| Warehouse and BI (BigQuery storage/query, Looker Studio) | 2k | 10k | 20k | Free tier covers most; cost grows with 2028 data [ASSUMPTION] |
| Call tracking / dynamic numbers (if phone is a main channel) | 0 | 15k | 15k | Decision after data shows phone share [MA8] |
| Tag/data-quality monitoring tool | 0 | 10k | 10k | Optional; could be scripts instead |
| Incrementality support (design review, analysis, platform lift studies' minimum spend is NOT here; it is in paid media) | 3k | 40k | 60k | Statistician/analyst hours for pre-registration and reading |
| MMM-lite / trend modelling pilot (2028 only; open-source model, analyst time) | 0 | 0 | 15k | Only if spend and months of data justify it |
| Training (GA4/BigQuery for Analytics lead and advisers on CRM hygiene) | 0 | 10k | 5k | |
| Contingency | 10k | 20k | 5k | |
| **Total** | **50k** | **200k** | **200k** | Within strategy line |

Not in this budget (flagged): the Analytics lead's time (0.5 FTE of an existing employee, about SEK 0.35 M a year loaded at the strategy's SEK 0.7 M per FTE [A18]; none of the 5 incremental FTEs in strategy 12.1 and 13.3 is an analyst, so this cost is **missing from the strategy's P&L**, MA1); a fractional senior analyst, if used, at roughly SEK 25-35k a month for 4 days [ASSUMPTION: SEK 900-1,100 an hour], i.e. SEK 125-175k through Gate 1, which the SEK 50k Q4 plus 200k 2027 line cannot absorb alongside the items above; CRM and form engineering (technology builds line); media spend used in holdouts (it is paid-media budget, not measurement budget; the cost of a holdout is the lost sales in the withheld arm, which the plan treats as an investment of roughly the expected margin lost, estimated per test in its protocol).

**People.**
- **Analytics lead (0.5 FTE steady state; expect about 0.8 FTE in Nov 2026-Jan 2027 [ASSUMPTION]; name the person by 6 Nov, reallocate or hire by 13 Nov 2026)** [MA1]. Skills: GA4/GTM/sGTM, SQL, experiment design, consent. If none exists in-house, use the implementation partner for the build; a fractional analyst needs extra budget (see above) or a smaller scope (about 1-2 days a month, SEK 30-60k through Gate 1 [ASSUMPTION]).
- The Q4 2026 partner line (SEK 25k, about 25 hours at SEK 1,000) is thin for the Q4 scope (audit, CMP, tracking v1, BigQuery, QA). The Q4 total is capped at SEK 50k by the strategy, so the audit and build lean on the internal lead; if the partner is needed for more, move hours from 2027 (sGTM and offline import are January work) and record the move in the change log.
- **CRM manager** owns CRM fields, stage discipline and the offline export.
- **Head of Sales** owns adviser discipline on source and stage entries (a compliance KPI in section 11).
- **SEO/Web lead** owns dataLayer, form and CMP integration on the site.
- **CFO** owns the order-book and margin definitions and the booking extract.
- **Legal/DPO** owns lawful basis, DPAs and transfer analysis.

---

## 11. KPIs for the measurement workstream itself

| KPI | Baseline | Target | Date |
|---|---|---|---|
| Share of new enquiries with usable source (UTM/click ID or filled "how did you hear") | unknown | 90% / 95% | 31 Jan 2027 / 30 Jun 2027 |
| Share of phone/email enquiries with adviser-entered source | unknown | 95% | 31 Mar 2027 |
| Consent logged on every lead record with marketing flag | unknown | 98% (aligned to workstream 13 O1) | 31 Jan 2027 |
| Offline-import match rate (paid-click enquiries with click ID that return a booking value to the ad platform) | n/a | At least 70% of consented, click-ID leads [ASSUMPTION] | 30 Apr 2027 |
| Tag health (failed tags, duplicate events) | unknown | Zero critical, under 1% error | continuous |
| Dashboard freshness (D0 on time every Monday) | n/a | 95% of weeks | from 14 Dec 2026 |
| Difference between GA4 enquiry count and CRM enquiry count (de-duplicated) | unknown | Within 10% explained and documented | 31 Jan 2027 |
| Definitions in dictionary signed off | 0 | 100% of section 7 metrics | 14 Dec 2026 |
| Tests launched with pre-registered protocol | 0 | 100% of tests; at least 2 completed reads by Gate 2 | 30 Jun 2027 |
| Gate pack delivered 5 working days before each gate (dates in M8). Gate 0 exception: baseline data and definitions arrive 14-15 Dec, so the Gate 0 pack is delivered at the Gate 0 meeting on 15 Dec, with a draft on 8 Dec | n/a | 100% from Gate 1 | each gate |
| Consent accept rate (monitor, not optimise blindly) | unknown | Report weekly; alert if it drops more than 10 points in a week | continuous |
| Share of marketing budget decisions that cite L-B or L-C evidence | n/a | 90% of decisions above SEK 50k | from Q1 2027 |

---

## 12. Governance of data: change log, QA and ownership

- **Change log** (tracking changes, banner changes, definition changes, campaign structure changes, site releases touching forms/dataLayer). Every entry: date, who, what, expected effect. Without it, step changes in the dashboards cannot be explained.
- **Release QA:** every site release that touches forms, URLs or tags is tested with a 12-point checklist (events fire once, consent states honoured, UTM/click IDs persisted to hidden fields, lead_id created, CRM record complete, no PII in URL/events, cross-domain intact, mobile and desktop, ad-block test, Consent Mode check in diagnostics, server container logs, rollback ready).
- **Quarterly tracking audit** by someone other than the builder (the partner or a second analyst).
- **Access:** least privilege; named accounts; two-person rule for conversion definitions in Ads; admin access to GA4, GTM, Ads and warehouse held by the company (not only the agency); documented offboarding.
- **Agency terms:** any agency or partner gets data in the company's accounts, never the reverse.

---

## 13. Risks and mitigations

| # | Risk | L / I | Early signal | Mitigation | Owner |
|---|---|---|---|---|---|
| MR1 | Booking system cannot export order-book and margin by booking in usable form | M / H | No extract by 30 Nov | Fallback weekly CSV, then finance spreadsheet; scope CRM-to-booking sync inside the technology builds line; CFO decision at Gate 0 | CFO |
| MR2 | Low consent accept rate shrinks observed conversions and remarketing audiences (strategy R13) | M / M | Accept rate under ~50% [ASSUMPTION] | CRM-first source capture, "how did you hear", server-side hygiene, first-party list growth; do not game banner design beyond Legal limits | Analytics lead |
| MR3 | Google/Meta modelling not active due to volume thresholds | H / M | Diagnostics show modelling inactive | Do not depend on it; use CRM + offline import + holdouts | Analytics lead |
| MR4 | Holdouts are underpowered and give noise | H / H | Interval spans both sides of 4x | Pre-registered rule hold-flat-and-extend; longer windows; pool flights; use enquiry-level outcome; accept slower scaling | Analytics lead + Head of Marketing |
| MR5 | Advisers do not enter source/stage consistently | M / H | Source captured under 85% | Mandatory fields, weekly compliance list in D4, link to sales KPIs, incentives tied to data quality | Head of Sales |
| MR6 | Long lead-to-booking lag makes early reads misleading | H / M | Cohort close rates rise for months | Report cohorts by age; use leading indicators (qualified enquiry, quote sent) for early decisions; confirm with bookings later | Analytics lead |
| MR7 | Legal view on consent, server-side or data transfers is stricter than assumed | M / M | Counsel advice by 20 Nov | Fallback to Basic Consent Mode, reduce platform sharing, rely on CRM; budget flex in contingency | Legal / DPO |
| MR8 | Attribution fights between channel owners | M / M | Escalation in council | Three-lens rule (section 6), one dictionary, reconciliation paragraph, CFO arbitration | CEO |
| MR9 | Tooling creep: money spent on tools instead of decisions | M / L | Spend above plan | Free-tier first; quarterly tool review; max 1 paid BI/monitoring tool | Analytics lead |
| MR10 | Key-person dependency on one analyst or agency | M / M | Single admin | Documentation, second admin, company-owned accounts | Head of Marketing |
| MR11 | Reporting overload: too many dashboards, nobody reads | M / M | Open rate on weekly pack falls | One-pager first, 5-line commentary, retire unused dashboards each quarter | Analytics lead |
| MR12 | Data contains PII or leaves the EEA unlawfully | L / H | Audit finding | Pseudonymous lead_id, EU hosting, field stripping, DPAs, quarterly audit | Legal / DPO |
| MR13 | GA4/Google product changes break tracking or definitions | M / L | Deprecation notices | Warehouse export as source of record; quarterly review of platform changes [VERIFY] | Analytics lead |

---

## 14. Dependencies

| Dependency | From | Needed by | If late |
|---|---|---|---|
| Admin access to GA4, GTM, Search Console, Google Ads, Meta, CMP, CRM, booking system | CEO / Head of Marketing | 6 Nov 2026 | Everything slides; Gate 0 pack at risk |
| Booking extract and margin definition | CFO | 20 Nov 2026 (sample), 14 Dec (definitions) | D0 order book margin unavailable; manual workaround |
| CRM stage and field build (lead_id, UTM/click ID hidden fields, consent flags, "how did you hear") | CRM manager + technology builds line | 30 Nov 2026 (v1) | No offline import; no source baseline |
| Quote form and "book a call" CTA changes | SEO/Web lead (workstream 04) | 27 Nov 2026 | No `generate_lead` baseline for the 1 Dec test |
| Consent wording and flags | Legal + CRM manager (workstream 13) | 20 Nov 2026 | CMP cannot go live |
| Campaign naming and Tranche A/B tagging | Paid specialists (workstreams 06, 07, 09) | 27 Nov 2026 | Cost by tranche cannot be computed |
| Speed-to-lead SLA data (timestamps) | Head of Sales | 20 Nov 2026 | Response-time KPI blind |
| Holdout region and brand-pause approval (cost of withheld spend is accepted) | Head of Marketing + CFO + CEO | 15 Dec 2026 (T1 earlier: 27 Nov) | No Gate 1 read |
| SEO baseline pulls, rank tracking set | SEO lead (workstreams 04, 05) | 15 Dec 2026 | Gate 0 incomplete |
| Review and referral tracking (post-trip NPS/ratings, referral codes) | CRM manager (workstream 12/13) | 31 Mar 2027 | Repeat/referral L7 cannot be measured |
| Partner/affiliate deep links and promo codes | Partnerships (workstream 12 partners) | Q2 2027 | L8 attribution relies on self-report |

---

## 15. Timeline

| Window | Deliverables | Owner |
|---|---|---|
| **Q4 2026 (2 Nov - 31 Dec)** | Access, audit, GA4 and Search Console baseline pull; CMP + Consent Mode; tracking v1 (events, dataLayer, hidden fields); UTM standard; brand-pause protocol (T1); D0 v1; data dictionary; BigQuery export on; DPAs; Gate 0 pack | Analytics lead, CRM manager, SEO/Web lead, CFO, Legal |
| **Jan 2027** | sGTM live; offline conversion import (Google, Meta CAPI if consent allows); full D0-D2, D4, D5; T2 protocol; re-baselined bridge ([A] replaced); booking-date curve and milestone recalibration | Analytics lead |
| **Feb - Mar 2027** | Data-quality score reaching 90%+; first T1 read; early T2 read; Gate 1 pack (22 Mar); quarterly audit 1 | Analytics lead |
| **Q2 2027** | T2/T3/T4 reads; cohort close rates by source; partner/affiliate tracking; D3 matured; Gate 2 pack (22 Jun); agent portal tracking | Analytics lead |
| **H2 2027** | 12-month cohort economics; seasonal curve analysis (Apr-May, Sep-Nov offers); GL pilot measurement (GL1-GL4); Gate 3 pack (25 Oct); BI/vendor review | Analytics lead + CFO |
| **2028** | MMM-lite/trend model pilot (if data allows); quarterly re-baselines; EU Directive 2026/1024 data-flow check for upsell flows (with Legal); Gates 4-5 packs (24 Mar, 22 Jun 2028) | Analytics lead |

---

## 16. First 30 days (2 Nov - 2 Dec 2026)

| Day / date | Action | Owner | Output |
|---|---|---|---|
| Wk 1 (2-6 Nov) | CEO nominates Analytics lead (or fractional analyst); access requests issued to all platforms; data requests in section 18 sent; kick-off with CRM manager, CFO, SEO/Web lead | CEO / Head of Marketing | Named owner, access list |
| Wk 1 | Switch on GA4 BigQuery export (if a property exists) and verify Search Console is connected; export 14-month history from GA4 and 16-month from Search Console | Analytics lead | History saved |
| Wk 1 | Request booking-system export sample (last 24 months: booking date, departure date, value, margin, source if any) | CFO | Sample file |
| Wk 2 (9-13 Nov) | Audit current tracking: tags in GTM, events, key events, duplicates, cross-domain, consent behaviour (screenshot tests), form behaviour. Output: audit sheet with red/amber/green | Analytics lead + partner | Audit v1 |
| Wk 2 | Legal/DPO session on consent, Consent Mode mode choice, enhanced conversions, DPAs list (decision due 20 Nov) | Legal / DPO | Position note |
| Wk 2 | Draft data dictionary (section 7 definitions) and CRM field spec; agree "existing vs new" rule | Analytics lead + CFO + CRM manager | v0.1 |
| Wk 2 | Choose and order CMP and sGTM host (quotes by 12 Nov) | Analytics lead | PO |
| Wk 3 (16-20 Nov) | Build tracking v1 in staging: dataLayer for forms, hidden fields (UTM, click IDs, landing page), `lead_id`, events in section 4.1, UTM builder sheet; send spec to CRM manager | Analytics lead + SEO/Web lead | Staging ready |
| Wk 3 | Legal position confirmed (20 Nov); consent wording agreed with workstream 13; "how did you hear" list implemented in form and as adviser dropdown | Legal / CRM manager | Signed-off wording |
| Wk 3 | Brand-pause test T1 protocol written and approved (what, where, how long, stop rules) | Analytics lead + Head of Marketing | Protocol v1 (Fri 27 Nov deadline) |
| Wk 4 (23-27 Nov) | Deploy CMP + Consent Mode (default denied for EEA); QA with 12-point checklist; deploy tracking v1 to production; test forms and CRM record creation end to end | Analytics lead + partner | Live (27 Nov) |
| Wk 4 | Campaign naming convention and Tranche A/B tags issued to paid specialists; conversion actions defined in Ads (primary: qualified enquiry; secondary: call, book_call) | Analytics lead + paid specialists | Doc and Ads set-up |
| 30 Nov | **Tracking v1 milestone (strategy 16.1).** Report: coverage, source capture rate in first week, known gaps | Analytics lead | Status note |
| 1 Dec | 4-week paid test starts with T1 live, UTM/click ID capture verified, daily D2 stub | Head of Marketing | Test running |
| 1-2 Dec | Start D0 v1 build on whatever data is available (GA4, CRM, sample booking extract); finalise definitions for 14 Dec; plan Gate 0 pack | Analytics lead | D0 v1 in progress |

Gate 0 (15 Dec) measurement deliverables: GA4 and Search Console baseline, funnel baseline from CRM, source mix, first consent accept rate, D0 v1, signed data dictionary, offline-import design, holdout design.

---

## 17. Assumptions register (replace with company data)

| ID | Assumption | Rationale | Replace with |
|---|---|---|---|
| MA1 | Analytics lead is 0.5 FTE of an existing employee (about SEK 0.35 M a year loaded, not in the strategy's incremental P&L); no separate budget beyond the measurement line | Strategy names an Analytics lead but gives no cost, and none of its 5 incremental FTE is an analyst; volume does not justify a full-time analyst in 2027 | Org chart, hiring decision |
| MA2 | Current stack resembles the typical Swedish travel site: WordPress, GA4 or similar, Meta pixel, Google Ads tag, a CMP | Competitor snapshots in R03/R06; our own site not inspected | Tracking audit result |
| MA3 | Enquiries arrive by web form, email and phone; bookings are made with an adviser rather than a fully online checkout | High-ticket tailor-made product, strategy emphasises named adviser | Booking flow description |
| MA4 | BigQuery + Looker Studio are acceptable (Google Cloud EU region; DPA available) | Lowest cost, GA4 native export | IT/Legal preference (alternatives: Snowflake, Power BI, Excel) |
| MA5 | Consent accept rate 55-75% | Typical range for opt-in banners; no Swedish-specific source read | CMP statistics after 2 weeks |
| MA6 | Incrementality decision intervals (lower bound 2x to continue, 3x to scale, upper bound under 4x to cut) | Adds statistical caution to strategy's 4x/5x point thresholds given low volume | CFO/Head of Marketing sign-off, power analysis on real volumes |
| MA7 | Tool costs (CMP SEK 10-25k, sGTM SEK 1-3k a month, partner SEK 900-1,100 an hour, BI free tier) | Market estimates, no quotes obtained | Vendor quotes |
| MA8 | Phone is a material source of leads (call tracking justified) | Premium long-haul sales often start by phone | Share of calls in CRM |
| MA9 | Cohort maturity of 90 days for close-rate reads; qualified call = over 60 s | Initial rules; lag unknown | Observed lag distribution |
| MA10 | About 39 enquiries a week nationally in 2026 (~2,025 / 52, strategy section 2) and 41 in 2028 (2,148 / 52), and 6-8 a week in a 15-20% region | Derived from [A10], assumes even distribution | CRM geo data by län |
| MA11 | Offline-import match rate target 70% | Depends on click ID capture and consent | Actual match rate |
| MA12 | Booking-date vs departure-date curve and lead-to-booking lag to be measured, not assumed | Strategy [A11] | Booking extract |
| MA13 | Adviser source-entry compliance reaches 95% when fields are mandatory | Operational judgement | Compliance report |

Sourced external statements (use with [VERIFY]): LEK 9 kap. 28 § consent for non-essential cookies (https://cookieconfirm.com/sv/guider/cookielagen/, https://svenskcybersakerhet.se/guider/berattigat-intresse-vs-samtycke-cookies); Consent Mode v2, 700-click threshold and GA4 modelling eligibility (https://www.enzuzo.com/blog/google-consent-mode). These are secondary sources; primary sources (IMY/PTS, Google help pages) were not read.

---

## 18. Data requests to the CEO (priority order)

1. Read access (then admin) to GA4, GTM, Search Console, Google Ads, Meta Business, the CMP, CRM and booking system.
2. A 24-month booking extract: booking date, departure date, value, gross margin, product, gateway, source if any, cancellations.
3. Definition of the "40 MSEK" (net/gross, pass-through included or not, recognition basis) [A8].
4. Current consent management set-up, accept rate and legal advice already held.
5. Enquiry channels and volumes by channel (form, email, phone, chat, fairs), and whether any online booking exists.
6. Current paid spend by channel for the last 12 months (to fix the 2.6 MSEK baseline [A18]).
7. The name of the Analytics lead and whether an agency already manages tracking.
8. Approval for the 8-12 week brand-pause test (cost of withheld brand bids is accepted) and the principle that Tranche B is released only on interval-based incrementality evidence.

---

## 19. Decisions needed from the CEO (added at review)

| # | Decision | Why it cannot be settled in this plan | Default if no answer by 20 Nov 2026 |
|---|---|---|---|
| Q1 | Name the Analytics lead and accept the roughly SEK 0.35 M a year of internal time that is not in the strategy's P&L (or approve budget for a fractional analyst, SEK 125-175k through Gate 1) | Strategy 12.1 has no analyst role; the measurement line cannot absorb it | Existing employee at 0.5 FTE; partner hours cut to fit the SEK 50k Q4 line |
| Q2 | Approve a capped Meta prospecting test flight inside the SEK 0.5 M pre-Gate-1 paid cap, or confirm that no prospecting runs before Gate 1 | Strategy 11.3 limits pre-Gate-1 spend to brand and high-intent, yet Gate 1 asks for a first holdout read and a 4x condition for Tranche B | No prospecting before Gate 1; only T1 is read; Tranche B stays held at Gate 1 |
| Q3 | Choose how Tranche B is proven (8.1): directional evidence plus spend cap, long all-Sweden on/off windows with higher-volume leading outcomes, or fewer larger flights | Expected lift (about 3% of enquiries in 2027, 8% in 2028) is far below the detectable lift at our volume | Long on/off windows (26 weeks or more) plus spend cap |
| Q4 | Set the binding 2027 ceiling for marginal marketing cost per marketing-created booking | G4 sets 20k but plans 36k for 2027 | 20k binds new spend decisions; 36k reported as the 2027 plan |
| Q5 | Approve or reject the interval rules (MA6) that sit on top of strategy 11.2 | Changes when a campaign group is paused or cut | Strategy 11.2 governs; interval rule applies to scale decisions only |
| Q6 | Accept the 8-12 week brand-pause in peak season (cost: lost brand clicks, competitor conquesting) | Real revenue risk in Dec-Mar | Run T1 for 8 weeks with weekly stop rule if brand enquiries fall more than a pre-agreed share |
| Q7 | Gate 3 falls on Sunday 31 Oct 2027; confirm the meeting date (Fri 29 Oct suggested) | Strategy date is a weekend | Fri 29 Oct, pack Mon 25 Oct |

Review note: source-sensitive claims in sections 2, 3 and 5 (LEK consent, Consent Mode v2 thresholds, GA4/Search Console retention) still rest on secondary sources and are marked [VERIFY]. Dates were checked against the 2026-2028 calendar (weekends, Easter 2027, Midsommar).
