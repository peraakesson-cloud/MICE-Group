# Workstream 15: Conversion Rate Optimisation (CRO) - funnel, forms, chat, quote-request UX, trust, test programme

Client: Swedish long-haul travel agency (~22 staff), www.sydafrikaresor.se. Version 1, 2 Nov 2026. Horizon: Q4 2026 prep, 2027 and 2028.
Inherits from `/docs/00-strategy.md` (binding). Research used: R03 competitors, R07 paid, R08 social, R09 regulation/trust, R10 pricing, R11 conversion/CRM. Sister workstreams: 04 technical SEO (site, tags, schema, release governance), 12 UGC and reviews, 14 lead-gen and consultative sales.
Language: English plan; all customer-facing copy in Swedish.

Marking convention: facts carry a URL or a research reference (R##, WS##). Everything else is **[ASSUMPTION]** with a rationale and is collected in section 21 so the CEO can replace it with company data. No company-internal figure is stated as fact. Site observations come from WS04 section 2.1 (public fetch on 2 Nov 2026).

---

## 1. Why this workstream exists, and what it is not

The strategy needs about 3,350 enquiries in 2028 (core) against about 2,025 in 2026, and 134-223k qualified sessions at a 1.5-2.5% visitor-to-enquiry rate (strategy section 10). Sessions are bought or earned by workstreams 04-13. This workstream owns the **rate at which sessions turn into qualified enquiries and calls**, and hands a clean, measured enquiry to WS14 (sales).

Three things CRO is **not** in this plan:

1. **Not an extra revenue lever in the bridge.** The bridge (L1-L10) is not changed. CRO lowers the number of sessions the other levers must buy: if visitor-to-enquiry rises 20% relative, core 2028 needs about 112-186k sessions instead of 134-223k. It de-risks L3 (paid), L4 (SEO) and L5 (social), and is the tool for hitting the 1,200 new-traffic enquiries without raising the cost per enquiry. Counting it again as +MSEK would double count the overlap haircut already taken.
2. **Not a replatform project.** WS04 section 9.4 rules: stay on WordPress and optimise unless the audit proves otherwise; no cut-over before Gate 1. CRO work is built as templates, Gravity Forms changes and plugins on the existing stack.
3. **Not the sales process.** What happens after the form is submitted (SLA, discovery call, proposal, cadence) is WS14. CRO owns the page, the form, the chat widget, the thank-you page and the data hand-off; WS14 owns the human conversation.

## 2. Objectives

| # | Objective | Target | By |
|---|---|---|---|
| C1 | One agreed funnel definition and event model live, with every enquiry carrying source, landing page, device, consent and UTM into the CRM | 100% of form, call-click, chat, call-booking and e-mail-click events tracked and reaching CRM; offline phone enquiries tagged by "how did you hear" | v1 30 Nov 2026; full 31 Jan 2027 |
| C2 | Baseline of the funnel by segment (new vs existing flow, device, source, trip type) | Baseline pack with 90 days of data, honest about unknowns | 15 Dec 2026 (Gate 0) for what exists; refreshed 31 Jan 2027 |
| C3 | Visitor-to-qualified-enquiry rate on qualified sessions, measured like-for-like by segment (new vs existing traffic, device) against the same period a year earlier or an untreated control, never against the Q4 2026 baseline alone (Jan-Mar is the seasonal peak) | Gate 1 (31 Mar 2027): no decline, with a directional read on treated templates only (a +10% effect is not statistically measurable in the window, see 5.1); Gate 2 (30 Jun 2027): +10% relative; +20% by 31 Dec 2027; +30% cumulative by 31 Dec 2028 [ASSUMPTION: modest versus vendor claims of much larger uplifts, which are unverified]. The blended rate will be diluted as colder paid/SEO traffic grows, so the target applies per segment, not to the blended figure | 30 Jun 2027 / 31 Dec 2027 / 31 Dec 2028 |
| C4 | Quote-form start-to-submit completion | Baseline measured, then +15% relative on mobile and +10% on desktop by Gate 1 (from B-02), +25% mobile and +15% desktop by 31 Dec 2027 | 31 Mar 2027 / 31 Dec 2027 |
| C5 | Share of enquiries that book a call at the point of enquiry (calendar slot or "ring mig" with time) | 20% by Gate 1, 30% by 30 Jun 2027, 40% by end-2027 [ASSUMPTION; phone is the best-converting channel per R11 tier C] | 31 Mar / 30 Jun / 31 Dec 2027 |
| C6 | Trust stack complete on every money page (guarantee, adviser, reviews, price clarity) | 100% of the 40 priority templates and landing pages by 31 Mar 2027 | 31 Mar 2027 |
| C7 | A disciplined test programme: no more than the number of tests traffic can power, each with a pre-registered hypothesis, minimum detectable effect, stop rule and downstream check | 6-8 powered A/B tests in 2027 (the eight scheduled in section 11), 8-10 in 2028, plus before/after releases with guardrails. Backlog items marked "reserve" run only if capacity and traffic allow | continuous |
| C8 | Quality guard: CRO changes must not lower lead quality | Qualified-enquiry share, close rate on the new cohort and margin per booking not worse than control (see 5.4) | continuous |
| C9 | Compliance clean: price and package-law blocks, consent, accessibility | Zero open legal flags on conversion pages at Gate 1 | 31 Mar 2027 |

## 3. Starting point

### 3.1 Observed (WS04 section 2.1, public fetch 2 Nov 2026)
- WordPress with a 2020-vintage custom theme; forms run on **Gravity Forms**; consent via Cookie Law Info; tags include GA, Microsoft Clarity, Facebook pixel, Bing UET, Google Ads and a **Trustindex** review widget (possible CLS and INP cost). Many near-identical commercial templates (rundresor, reseförslag, avgångar, boenden, utflykter, reseberättelser, resespecialister, FAQ, hyrbilar, förlängningar). The site already ranks #1 for head terms (strategy L4), so entry pages are mostly **informational and brand-aware**, not cold.
- Review state per R03: Trustpilot 2.7 on 8 reviews, against specialist competitors at 4.8-5.0 with 124-623 reviews (strategy section 6.2). This is the single weakest trust asset and is the reason the plan avoids a star-rating-led design until WS12 lifts the score.
- Price and "från" labels: unknown whether they include flights (R06, WS04 section 4). Competitor anchors: TUI from SEK 11,337; Ving round trip from SEK 31,350; group-with-flights cluster SEK 36-40k; our guided 13 days at SEK 44.3k (R03).
- Audience skews older: TikTok reaches only 5-12% of the 1950s-1970s cohorts (R07, R08). Usability testing must recruit 50-75-year-olds, and design must pass large-text and tap-target checks.

### 3.2 Unknown (data requests; ask in priority order)
1. GA4/Search Console/Clarity access and current event set; which conversions are defined; whether phone and e-mail enquiries are tied to sessions.
2. Number of qualified sessions per month, by template, device and source; seasonality (Jan-Mar peak expected, R06).
3. Current quote-form fields, submission count, spam share, completion rate; whether a "boka samtal" option exists (strategy mentions it as planned).
4. Mobile versus desktop share and conversion; share of enquiries by channel (form, phone, e-mail, chat).
5. Deposit and payment flow today: online or only after a consultant call; payment failure rate (R11 tier C benchmark 3-8%).
6. Platform/hosting constraints for testing (caching, staging, who deploys) - WS04 unknowns 3 and 4.
7. Whether prices on pages come from a system or are hand-edited.

## 4. Funnel model and measurement

### 4.1 Funnel stages (shared vocabulary with WS14 stage definitions S0-S9)

| Stage | Definition | Owner | Primary metric |
|---|---|---|---|
| F0 Qualified session | Human, non-bot session on a money-path page after consent state resolved (modelled where consent is withheld), excl. staff, job-seeker and brochure-only pages | CRM/Analytics | sessions |
| F1 Intent signal | Visit to 2+ product/price pages, or calculator use, or itinerary download, or form start, or call/e-mail click, or chat open | CRO lead | intent rate = F1 / F0 |
| F2 Enquiry started | First field touched in quote form or call-booking widget | CRO lead | start rate |
| F3 Enquiry submitted (WS14 S0) | Valid submission, deduplicated, spam-filtered | CRO lead | submit rate |
| F4 Qualified enquiry (WS14 S2) | Passes the fixed enquiry definition (WS14 section 3) | Head of Sales | visitor-to-qualified-enquiry |
| F5 Call held (WS14 S3) | Discovery call completed | Head of Sales | call rate |
| F6 Booked (S6) | Deposit paid | Head of Sales | close rate by cohort |

Reporting is always split **existing flow vs new traffic** (strategy RT-D rule): new traffic closes at about 18%, existing at 25-27% [A10]. A blended CRO rate hides the real picture.

### 4.2 Event specification (build with WS04 tracking v1, due 30 Nov 2026)
Events (GA4 key events + server-side where possible, consent-aware): `form_start`, `form_step_complete` (with step number), `form_submit_quote`, `form_error` (field name + error type), `call_click` (tel:), `email_click`, `call_booked` (calendar), `chat_open`, `chat_message_sent`, `chat_to_lead`, `calculator_use`, `itinerary_download`, `guarantee_link_click`, `review_widget_click`, `price_table_view`. Each lead event carries hidden fields: `landing_page`, `content_group`, `device`, `source/medium/campaign`, `gclid/fbclid`, `session_id`, `consent_state`, `experiment_id/variant`. Lead ID flows to CRM so offline conversion import (booked value and margin) can credit the variant (WS14 section 11, strategy section 11.2).

Phone is the leak most travel sites cannot see. Use **dynamic call-tracking numbers** per source group (or at minimum a "how did you hear" field in the call script) [ASSUMPTION: budget SEK 0 to 3,000 per month; confirm telephony in WS14]. Without it, a better form can look worse when it simply moves people to the phone.

### 4.3 Diagnostic analyses to run before changing anything (Nov-Dec 2026)
1. **Funnel by landing-page group** (home, rundresa, reseförslag, avgång, hub/informational, branded landing) x device x new/existing: where intent drops.
2. **Form analytics**: field-level drop-off, time to complete, error rates, mobile keyboard issues, autofill failures (Clarity + GA4 `form_error`).
3. **Page-path analysis**: what do enquirers read before enquiring (price page, itinerary, guide profile, guarantee, FAQ)? Content that precedes conversion earns prominent CTAs; content that traffic ignores gets cut or merged (coordinate WS04 duplicate risk).
4. **Session replay review**: 100 sessions (50 mobile, 50 desktop) coded for rage clicks, dead taps, scroll depth to first CTA.
5. **Voice of customer**: 20 recent enquirers and 20 recent bookers (WS14 call recordings and e-mails; consent for recording to be confirmed) coded for what they were afraid of and what finally convinced them; and 15 lost leads (reasons from WS14 taxonomy).
6. **Heuristic audit** by an external CRO specialist (SEK 40k): checklist-based, 40 priority pages, issues ranked by ICE (impact, confidence, ease).
7. **Speed and accessibility audit** on the form pages: LCP/INP/CLS on mobile (WS04 section 5), WCAG 2.2 AA contrast/target size/labels. Accessibility may also be a legal exposure under the EU accessibility act, which is understood to have applied to e-commerce services from mid-2025 [ASSUMPTION, not sourced here; VERIFY applicability to a travel agency of this size and to enquiry versus booking flows with legal].

### 4.4 Baseline scorecard and what "no data" means
If analytics cannot answer a question by 15 Dec 2026, the plan states so and uses the benchmarks in section 17 only as hypotheses. R11 benchmarks are tier C vendor figures: visitor-to-enquiry 1-3%, inquiry-to-quote 75-85%, quote-to-booking 20-40% (R11 section 1). The strategy's 1.5-2.5% planning range is the same family, so replace both with actuals.

## 5. Experimentation reality: traffic is the binding constraint

### 5.1 The arithmetic (why this plan runs few tests)
For a conversion event with a 2% base rate, a standard two-arm test (95% confidence, 80% power) needs roughly 16 x p(1-p) / d^2 visitors per arm, where d is the absolute lift you want to detect (rule-of-thumb formula).

| Detect (relative lift) | Absolute d at p = 2% | Sessions per arm | Sessions total |
|---|---|---|---|
| +10% | 0.2 pp | ~78,000 | ~157,000 |
| +20% | 0.4 pp | ~19,600 | ~39,000 |
| +30% | 0.6 pp | ~8,700 | ~17,400 |

Implied sessions: 2026 enquiries of ~2,025 at 2% give about 100k qualified sessions a year (80-135k at 2.5-1.5%) [ASSUMPTION - derived, not observed]. That is about 8,400 sessions a month, higher in Jan-Mar. A whole-site test for a +20% effect therefore takes roughly 4-5 months, a +30% effect about 2 months, and a +10% effect cannot be measured at all in a normal window. Conclusions that drive the programme:

1. **Test big, bundled changes**, not button colours. Target minimum detectable effects of 20-30% relative on the primary metric. Small polish is shipped on evidence from research and heuristics, without A/B.
2. **Use higher-rate proxy metrics** where the proxy is validated: `form_start`/`cta_click` rates run at several percent and give 3-5x the power, but a winner on the proxy is only accepted if submit and qualified-enquiry rates do not fall.
3. **Test where the traffic is**: home, the top 5 hub/informational pages, the top 5 rundresa/reseförslag pages, the quote form itself (every visitor funnels through it; the form test measures submit rate per form start, which is much higher than 2%, so it is the best-powered test in the programme).
4. **Run one primary test per page group at a time**, sequentially; use A/A and sample-ratio checks.
5. **Pre/post with a control** for changes that cannot be randomised (trust-block rollout across 40 templates): compare treated templates with not-yet-treated templates in staggered rollout (difference-in-differences), judged over 8 weeks, with seasonality noted.
6. **Weekly peeking is allowed, deciding is not**: stop rules are fixed in advance (5.3).

### 5.2 Test governance
- One registry (CRM/BI sheet or Notion table): ID, hypothesis, evidence, page group, variant spec, primary metric, guardrails, MDE, required sample, start/end, decision, learning. Owner: CRO lead.
- Release rule: every test and every template change follows the WS04 release checklist (SEO risk class, staging crawl, tag check). No change to titles, H1, canonicals, internal links or schema inside a CRO test without WS04 sign-off. Server-side or class-based variants only; no client-side flicker on above-the-fold content (CLS).
- Test tooling: a lightweight tool that works with WordPress and consent mode (options to evaluate in Dec: Convert, VWO, or server-side split in the theme; Google Optimize is discontinued) [ASSUMPTION on cost, section 16]. Must respect consent: no variant persistence cookie before consent; use per-request server assignment where consent is absent.
- Calendar rules: **freeze** on form, chat and checkout code 10 Jan - 15 Feb (peak) except bug fixes; big changes ship by 15 Dec or after 1 Mar; tests may run through the peak because that is where power is, but only with changes already proven safe in staging. Consequence for the plan: every test that should collect peak data (B-02, B-12) is deployed by 15 Dec; nothing new (chat, two-doors test, sitewide rollouts) starts between 10 Jan and 15 Feb.
- **One primary test per page group at a time.** The backlog in section 11 is sequenced so that no two tests share a page group (form: B-02; mobile CTA bar: B-12; hub pages: chat pilot B-15; rundresa/reseförslag: B-08 then B-05).

### 5.3 Decision and stop rules (default; written per test)
- Declare a winner when the pre-registered sample is reached, significance at 95% (two-sided) **and** guardrails hold.
- Early stop for harm: variant is cancelled if submit rate is lower by a margin that makes recovery implausible (sequential rule, e.g. below -25% relative after 30% of sample), or if any spam, complaint or legal flag appears.
- Inconclusive result = keep control, log learning, no re-run of the same idea without a new hypothesis.
- Winners are confirmed with a 4-week holdback (5% of traffic on control) where traffic allows, to catch novelty effects.

### 5.4 Quality guardrails (C8)
CRO commonly "wins" by letting more unqualified leads in. Every test reports at 30/60/90 days:
- qualified-enquiry share (WS14 definition), call-held rate, quote rate, close rate and average booking value by variant cohort;
- cost of consultant time per booking (hours per quote 3 h and per booking 8 h are illustrative, strategy A23);
- margin of resulting bookings (strategy Gate 1 threshold 19% on new bookings; G1 target 20% blended).
A form variant that increases submissions by 15% but cuts qualified share by 15% is a loss and is rejected. Because bookings lag (R11: luxury 30-60 days; consideration windows of 71 days average per Expedia/Luth, other markets), the **leading metric** is qualified enquiry; the confirming metric is booking within 90 days.

## 6. The quote-request journey (highest-value asset)

### 6.1 Principles
1. **Fewer fields before first value, more detail after commitment.** Evidence is e-commerce checkout, not travel: Baymard reports the average checkout has 11.3 form fields and 17% of US shoppers have abandoned due to checkout complexity; the effect of the number of fields is greater than the number of steps (https://baymard.com/research-articles/checkout-flow-average-form-fields). R11's claim that each field costs 5-10% is unverified vendor material. Treat as hypothesis, test.
2. **Ask only what changes the quote**: when, who, what interests, rough budget, how to reach. Everything else is asked on the discovery call (WS14 section 5).
3. **Name the human.** The form promises a named adviser and what happens next, with time. The reply promise is published only after WS14's SLA has been met four consecutive weeks (WS14 section 4.4; strategy message pillar 2).
4. **Offer two doors, not one.** "Få ett förslag" (async) and "Boka ett samtal" (sync) both visible, because phone converts best (R11, tier C) and older customers often prefer talking.
5. **No dark patterns.** No fake scarcity, countdown timers or "X personer tittar nu" unless true and verified against held allocation (strategy principle; Konsumentverket). Hold to WS14 principle 5.

### 6.2 Form specification v1 (Gravity Forms, two steps, Swedish copy)

**Step 1 - "Berätta om drömresan" (30 seconds; no personal data yet)**

| Field | Type | Notes |
|---|---|---|
| När vill ni resa? | Month/year dropdown + "Flexibelt" | Drives lead tier A/B/C (WS14 section 4.2) |
| Hur många reser? | Adults + children (ages) | Children ages matter for product fit (age policies, strategy L9 gate) |
| Hur många dagar? | Chips: 10-14, 15-21, 22+, Vet inte | Optional |
| Vad lockar mest? | Multi-select chips: Safari, Kapstaden & vin, Garden Route, Familj, Bröllopsresa, Guidad rundresa med svensk guide, Skräddarsydd, Kombinera med Victoriafallen/Botswana/Mauritius | Interest chips map to adviser routing (WS14 section 4.3) |
| Button | "Nästa" | Step progress "1 av 2" |

**Step 2 - "Så når vi dig"**

| Field | Type | Notes |
|---|---|---|
| Ungefärlig budget per person, inklusive flyg | Radio brackets (label must say flights are included; if the company's price basis differs, adjust the label, never leave it ambiguous) + "Vet inte än - hjälp mig" | Brackets set after baseline; placeholders: under 35k / 35-45k / 45-60k / 60-80k / över 80k [ASSUMPTION; ABV real range 35-60k, A1]. Always include the opt-out so it never blocks submission |
| Namn | Text | Single field "Namn" (not first/last), autocomplete on |
| Mobilnummer | tel, with explanation | "Så att din rådgivare kan ringa dig - vi ringer bara för din förfrågan" (Baymard recommends explaining the phone field). Optional at first test; test required vs optional (backlog B-03) |
| E-post | email | Required; typo suggestion for domains |
| Önskad kontakt | Radio: Ring mig / Mejla mig | If "Ring mig" show time chips: Förmiddag / Eftermiddag / Kväll |
| Något mer vi bör veta? | Textarea, optional | Collapsed by default |
| Samtycke | Checkbox, unticked. Draft text for counsel: "Jag vill att ni kontaktar mig om min förfrågan. Så behandlar vi dina personuppgifter finns i vår integritetspolicy." Separate optional box: "Ja tack, skicka reseinspiration och erbjudanden till min e-post." | Privacy policy link, purpose in plain Swedish; separate optional checkbox for newsletter (consent logged with timestamp and text version; Marketing Act and GDPR basis to be confirmed by counsel, R11 section 5) |
| Honeypot + rate limit | hidden | Spam control without CAPTCHA friction; reCAPTCHA only if spam >5% of submits |

Total visible fields: 9-10 over two steps (about 6-7 required). Autofill and `autocomplete` attributes set; input types correct (`tel`, `email`); large tap targets (min 44 px); labels above fields; inline, adaptive validation with Swedish error messages; **form state preserved on error and on back-navigation**; progress saved so a partial lead (email captured) can trigger WS14's abandoned-form recovery (WS14 section 7.3) - but only where consent was given at that point.

**Microcopy above the submit button (use only when true):** "Din rådgivare återkommer vanligtvis inom en timme på vardagar." [claim live only after SLA met; until then: "Din rådgivare hör av sig. Du får en bekräftelse direkt."] and "Inga förpliktelser. Du betalar ingenting nu."

**Thank-you page (a conversion asset, not a dead end):** (1) confirm what happens next with time; (2) **embedded calendar** "Boka en tid för ett samtal" (WS14 calendar embed due 15 Dec 2026); (3) meet your adviser: photo, name, short bio when the lead is assigned (dynamic where the CRM can return it; otherwise generic team block); (4) two helpful links: "Så fungerar en bokning" and "Resegarantin"; (5) conversion event fired once, deduplicated, with variant; (6) no upsell clutter.

**Confirmation e-mail:** sent in under 60 seconds (WS14 SLA), plain text style from the named adviser or team inbox, with the call-booking link, summary of their answers (the "mirror" builds confidence that we listened) and a link to the guarantee page.

### 6.3 Call-booking and "ring mig" widget
- Sticky bottom bar on mobile (single CTA "Få ett förslag"; secondary "Ring oss" tel: link with opening hours) and a slim header CTA on desktop; the bar hides once the form is open.
- "Ring mig om 5 minuter" instant callback during staffed hours (WS14 rota), otherwise "Ring mig i morgon förmiddag". Only offered when staffed; otherwise it damages the SLA more than it helps.
- Click-to-call event on mobile with dynamic number by source group where telephony allows.

### 6.4 Landing page for quote and calls (paid and hub traffic)
Paid and hub traffic should land on message-matched pages, not the home page. Template (build once, reuse): H1 matched to query/ad; short value block (specialist since 2003 [confirm founding year with company], named adviser, guarantee); 3 itinerary cards with "vad ingår" and "från"-price stating flights yes/no; adviser/guide block (for the 1 Dec test only staff and guides who have already consented and are on the site today; photo and bio refresh follows the 15 Jan 2027 consent deadline); 3 named traveller stories; FAQ strip (visum, vaccin, säkerhet by UD links, when to go); form at the top right (desktop) or after first scroll with a sticky CTA (mobile); no top navigation on paid LPs except logo and phone. Used for the 1 Dec 2026 paid test (SEK 100k, brand/high-intent only, strategy section 11.3) with an A/B of LP vs standard product page in the holdout design. **Power warning:** SEK 100k of brand/high-intent search buys a small number of clicks (CPC unknown, [ASSUMPTION] under 10,000 clicks), so a 30% MDE at a 2% base (about 8,700 sessions per arm, section 5.1) is probably not reachable in four weeks; treat B-07 as a directional read, extend it into the SEK 0.4 M Dec-Mar phase, and do not let it override the strategy's brand-search holdout design.

## 7. Chat, phone and messaging

### 7.1 Position
Live chat is claimed to lift conversion 15-30% (R11, unverified vendor figure). For a consultative SEK 100k booking the likelier benefit is **earlier contact with high-intent visitors** and fewer silent exits; the risk is chat flooding advisers with low-value questions and diluting phone time. So: pilot, measure, expand only on evidence.

### 7.2 Pilot design (1 Mar - 12 Apr 2027, after form v2 is decided; moved out of the 10 Jan - 15 Feb change freeze; go/no-go 30 Apr)
- Human-staffed chat, Mon-Fri 09:00-17:00 aligned with the WS14 SLA window [A]; widget loads after consent and after first scroll or 20 seconds on money pages only (speed gate per WS04 5.3); budget in WS14 section 15 (SEK 40k 2027).
- Outside hours: no pretend presence. Message "Vi svarar nästa vardag före 09:30" and a one-field leave-your-number form. Do **not** use "24/7" or "alltid nåbar" wording until the strategy 13.4 decision; the wording is "jourtelefon under resan".
- Opening script by page type (price page: "Undrar du över vad som ingår?"; guide page: "Vill du veta vem som följer med?"). No automated bot pretending to be human; if a bot answers FAQs it identifies itself as automated and hands over to a person. AI-chat is out of scope for 2027 until a source-grounded FAQ exists and legal reviews the disclosure; revisit at Gate 2.
- Measurement: chat-to-lead conversion, lead quality tier, handle time, effect on form submissions (cannibalisation) and on phone volume. Design: show chat to 50% of eligible sessions for 6 weeks on the top 5 hub/informational pages (a page group no other test uses at the time; needs about 17,000 eligible sessions for a 30% lift on a 2% base, which five hub pages may not reach in six weeks, so expect a directional read and fix the decision rule in advance).
- GDPR: chat transcripts are personal data; retention period, processor agreement, and visible privacy notice [flag for counsel].

### 7.3 Phone and e-mail
- Phone number in header on every page, with hours; `tel:` link; click event.
- Opening-hours extension in peak (WS14 peak rota) is shown on the site only when staffed.
- Dedicated tracked e-mail address for enquiries replied by the owner within SLA.

## 8. Trust stack (shown consistently on every money page)

### 8.1 Trust elements, order of priority
| # | Element | Content (Swedish) | Rule | Owner |
|---|---|---|---|---|
| 1 | **Resegaranti** | "Din resa omfattas av resegaranti via Kammarkollegiet" + link to the public lookup of operators with a guarantee (https://www.kammarkollegiet.se/vara-tjanster/resegaranti/hitta-reseaktorer-med-resegaranti) in footer, quote form, thank-you page and booking pages | Official standard-form text for pre-contract information (R09); company's own entry to be verified before the badge goes live | Legal / CFO |
| 2 | **Named adviser and guide profiles** | Photo, name, years in role, regions known, languages, a personal line ("Mitt bästa tips"), phone/e-mail | Only real staff; consent for photo; refresh yearly. Reduces anonymity vs mass-market operators | Head of Sales / Marketing |
| 3 | **Specialist heritage** | "Specialist på Sydafrika sedan 2003" with 2-3 proof points (examples of destinations covered, partners) | Founding year confirmed by company; no "Skandinaviens största" (strategy 6.3) | Brand (WS01) |
| 4 | **Real traveller stories** | 3 named reseberättelser per template (about 40 exist) with trip type, month, travellers' words, photos | Written consent; relevance matched to template (family, honeymoon, wine, self-drive) | Content / WS12 |
| 5 | **Reviews** | Verified third-party score + latest 3 reviews | **Display a star-rating widget prominently only when it supports the claim.** R03: Trustpilot 2.7 on 8 reviews today. Until WS12 reaches Gate 1 target (trending to 4.5, rolling 4.2+ per G8), lead with stories, adviser and guarantee, and keep the review link in the footer. Do not hide, do not curate selectively. Review markup only under WS04 section 6 rules | WS12 |
| 6 | **Price clarity** | "Från"-price card: per person based on 2 travellers, **flights included yes/no stated**, what is included (list), what is not, deposit and balance dates, cancellation terms in a human summary | Mandatory costs included in headline price (Konsumentverket; R09). One price source of truth with WS03/WS04 | Product / Finance |
| 7 | **Safety and practicalities** | "Så planerar vi för din trygghet": transfers, daytime driving, guided township visits, jourtelefon under resan; link to UD travel advice; never "Sydafrika är säkert" (R09) | Facts only, legal-checked | Product / Legal |
| 8 | **Flexibility terms** | Changes/rebooking/cancellation in plain language | Only terms the company can honour; align with open-purchase or price-match decision (strategy 6.2) | Commercial |
| 9 | **Payment trust** | Accepted methods, secure payment, what "deposit" means | See 9.2 | Finance |
| 10 | **Press, partners, memberships** | Logos of real memberships/partners (e.g. industry association; SAT partnership if formalised) | Only verified and current | Marketing |

### 8.2 Layout rules
- Above the fold (mobile): H1, one-line value, price card, primary CTA, one trust line (guarantee + adviser name), not a wall of badges.
- Mid-page: adviser block next to the first CTA; stories after itinerary; FAQ before the second CTA.
- Footer: legal entity, organisation number, address, phone, guarantee link, privacy, terms.
- Review/third-party widgets load below the fold with reserved height (CLS) per WS04.
- A trust element earns its place by test or research; if a badge does not tie to a real fear identified in VoC (4.3 item 5), remove it.

## 9. Page templates, mobile and the booking step

### 9.1 Template CRO priorities (by estimated traffic and proximity to purchase; confirm with analytics)
1. Quote form and thank-you page (all traffic funnels here).
2. Rundresa and reseförslag pages (price, itinerary, "vad ingår", dates, CTA).
3. Avgångar (published departures): availability state, fixed price after FX policy is in place (strategy 11.3: no fixed-price departures before the FX policy of 20 Nov 2026 and a ZAR-linked clause), "Boka plats" / "Fråga om platser" CTA.
4. Information hubs ("bästa tid", "vad kostar", "safe"): intent capture via calculator, itinerary PDF download with email (consent), and a soft CTA to talk to an adviser. These bring new-traffic enquiries at ~18% close, so the CTA is "prata med en rådgivare" more than "boka".
5. Home page: segment selector ("Jag vill ha en färdig guidad rundresa / skräddarsydd / safari / familj / bröllop"), social proof, adviser strip.
6. Branded landing pages for paid, partner and affinity traffic (WS14 partner desk, L8) with partner ID preserved.

### 9.2 Deposit and payment step
Unknown today whether payment is online; R11 notes 3-8% of confirmed bookings fail at payment (tier C). Principles:
- Offer an **online deposit link** from the consultant (WS14 S6 target: deposit within 3 business days of verbal yes), via card and the methods Swedish buyers use. Riksbank payments report 2026: Swish and buy-now-pay-later are the single most common payment methods for online purchases, and debit/credit cards plus card-in-phone services together make up 64% of the methods used for online purchases in the last 30 days (https://www.riksbank.se/en-gb/payments--cash/payments-in-sweden/payments-report-2026/developments-in-the-payments-market/payment-habits-in-sweden/). Whether Swish limits suit SEK 10-30k deposits, and whether credit/BNPL is appropriate for package travel, are open: **[VERIFY with payment provider and legal]**.
- Show a single page: trip summary, total, deposit amount and date, balance date, guarantee note, cancellation summary, contact. No account creation. Pre-contract information form and standard guarantee notice delivered before payment (R09).
- Retry and recovery for failed payments within 24 h by phone; track payment failure rate as a KPI.
- Do not build a self-service full booking engine in 2027: consultative sale is the model; the CRO task is to make the handover from proposal to deposit frictionless.

### 9.3 Mobile and older audiences
- Mobile-first design, but check the older cohort: base font at least 17-18 px, contrast AA, no auto-playing carousels, no hover-only content, tap targets at least 44 px, readable on a large phone and a tablet.
- Carousels and tabs hide content (WS04) and rarely convert; prefer visible sections.
- Page speed: LCP under 2.5 s, INP under 200 ms, CLS under 0.1 on form and money templates by 31 Mar 2027 (WS04 O4). CRO additions (chat, tests, widgets) have a speed budget agreed with WS04; any new third-party script needs speed review before launch.
- Accessibility: keyboard and screen-reader pass on the form; error text in words not only colour.

## 10. Micro-conversions and lead capture for early-stage visitors (with WS14 section 8)
Long consideration (Expedia/Luth research across seven non-Nordic countries, none of them Sweden: an average trip consideration window of 71 days, 33 inspiration plus 38 research and planning; the "303 minutes of content" figure is unverified here) means most visitors are not ready to ask for a quote. R11 section 2: https://partner.expediagroup.com/en-us/resources/blog/travelers-booking-behavior-path-to-purchase-marketing-strategies . Offer lower-commitment steps with a clear value exchange and consent:
1. **"Vad kostar en resa till Sydafrika?" calculator**: inputs (days, travellers, style, season) output a price **range** with what drives price; ends with "Få ett förslag" and "Boka samtal". Ranges derived from the price source of truth (WS03); no precision beyond what the data supports.
2. **"Rätt tid att resa" month chooser** and 10/14/17/21-day itinerary PDFs (WS14 lead magnets) behind an e-mail field (consent logged).
3. **"Spara min resa"** (shortlist emailed): low friction, creates a warm lead with interest data; sends to nurture N1.
4. **Kundkväll/webinar registrations** (WS14 section 8 item 2): registration page with the same trust stack.
5. Newsletter box only in footer and article ends; not a pop-up on money pages.
Exit-intent pop-ups: only a single, calm, dismissible "Vill du prata med en rådgivare?" on desktop money pages, tested (B-14); none on mobile or in the form.

## 11. A/B and optimisation backlog (prioritised)

Scoring: ICE = Impact x Confidence x Ease, each 1-5 (higher is better); impact here is judged on expected effect on qualified enquiries, not clicks. Method codes: **AB** = powered randomised test; **PP** = pre/post with staggered control; **SHIP** = ship on research/heuristic evidence, no test; **QUAL** = qualitative validation only. MDE = minimum detectable relative lift used to size the test. Sessions needed use the 2% base rule of thumb in 5.1 and must be recomputed with actual baseline.

| ID | Hypothesis (if / then / because) | Page group | Method | Primary metric | MDE | ICE | Earliest start |
|---|---|---|---|---|---|---|---|
| B-01 | **Fix tracking, dedupe submits, spam filter** (hygiene, not a test) | All | SHIP | Data quality | - | 5x5x4 | 2 Nov 2026 |
| B-02 | Two-step form with 5 early questions (no PII in step 1) beats current form on submit-per-start | Quote form | AB | Submit / form start; qualified share guardrail | 25% | 5x4x4 | 1 Dec 2026 (on LP); sitewide 50/50 split deployed by 15 Dec 2026 so it collects peak data; no deploys 10 Jan - 15 Feb; decision when sample is reached (estimate Feb-Mar) |
| B-03 | Phone optional with "ring mig" preference raises submit rate without lowering call-held rate vs phone required | Quote form | AB (reserve) | Submit rate; call-held rate | 20% | 4x3x5 | Sep 2027, after B-02 is decided |
| B-04 | Budget-bracket question with "vet inte än" does not hurt submit rate and improves lead tiering | Quote form | AB (reserve; run only if B-02 shows a lower submit rate, to isolate the budget field) | Submit rate; qualified share | 15% (non-inferiority) | 4x4x4 | After B-02 decision |
| B-05 | Showing two doors ("Få förslag" + "Boka samtal") raises total qualified contacts vs form only | Rundresa/reseförslag pages, thank-you | AB | Qualified contacts per session | 25% | 5x3x4 | 1 May 2027 (after the B-08 staggered rollout is judged; avoids the freeze and a shared page group) |
| B-06 | Embedded calendar on the thank-you page lifts call-booked share | Thank-you | PP (small N) | % enquiries with booked call | 30% | 5x4x4 | after calendar live (15 Dec) |
| B-07 | Message-matched paid landing page beats the standard product page on cost per qualified enquiry | Paid LPs | AB (with ad platform) | Cost per qualified enquiry | 30% | 4x4x3 | 1 Dec 2026 |
| B-08 | Trust block v1 (guarantee + adviser + stories + clear price card) above the fold lifts CTA click vs current layout | Rundresa/reseförslag | PP staggered, then AB on top 5 pages | CTA click-through, submit rate | 20% | 5x3x3 | 1 Mar 2027 (staggered rollout; after the 10 Jan - 15 Feb freeze) |
| B-09 | "Från"-price card with flights yes/no and what is included reduces unqualified enquiries and raises qualified share | Product pages | PP | Qualified share; quote rate | 15% | 4x4x4 | 1 Mar 2027, bundled into the B-08 rollout (after price source of truth; outside the freeze) |
| B-10 | Adviser photo and name beside the CTA lifts form start vs generic CTA | Avgångar pages and thank-you (not the B-08 page set) | AB | Form start rate | 20% | 4x3x5 | Mar 2027 (photos and consents due 15 Jan) |
| B-11 | Calculator ("vad kostar") captures more early-stage visitors and passes qualified leads to sales | Hubs | AB (CTA with/without calculator) | Calculator use; qualified leads | 30% | 4x3x3 | Mar 2027 (after content) |
| B-12 | Sticky mobile CTA bar lifts mobile form starts | All mobile | AB | Mobile form start | 20% | 4x4x5 | Deployed by 15 Dec 2026 (50/50), runs through peak |
| B-13 | Review widget placement: remove/shrink widget until score supports it vs prominent display (score-dependent) | Home, product | AB only if score >= 4.3; else QUAL | CTA click; trust survey | 15% | 3x3x5 | After WS12 Gate 1 |
| B-14 | Single calm exit-intent offer on desktop money pages (talk to adviser) | Desktop money pages | AB (reserve) | Incremental qualified contacts; bounce guardrail | 30% | 3x2x4 | H2 2027 if capacity |
| B-15 | Live chat pilot (human, office hours) vs no chat | Top 5 hub/informational pages | AB (50/50) | Qualified contacts per session; phone and form cannibalisation | 30% | 4x3x3 | 1 Mar 2027 (6 weeks; go/no-go 30 Apr) |
| B-16 | Departure pages with availability state ("X platser kvar" only when true) and clear next step raise enquiries | Avgångar | PP | Enquiries per departure view | 20% | 4x3x4 | After FX policy and allocation register |
| B-17 | Home-page segment selector (guidat / skräddarsytt / safari / familj) routes visitors to the right template | Home | AB | Click to second page; enquiry rate | 20% | 3x3x3 | Apr 2027 |
| B-18 | Shorter, benefit-first itinerary pages with day-by-day accordion open on mobile reduce exits before price | Rundresa | AB | Scroll to price; CTA click | 20% | 3x3x3 | Q2 2027 |
| B-19 | Confirmation e-mail with answer mirror and adviser name raises call-booked share | Email | AB (small) | Call-booked within 48 h | 30% | 4x3x5 | Mar 2027 (outside the freeze) |
| B-20 | Partner/affinity branded LPs with partner logo and code lift conversion of partner traffic | Partner LPs | PP | Partner lead rate | 25% | 3x3x4 | Q2 2027 (GL4/L8 pilots) |
| B-21 | Abandoned-form email recovery with one-click call booking (WS14 7.3) | Email | AB | Recovered qualified leads | 25% | 4x3x4 | Mar 2027 |
| B-22 | Reduced third-party script load (tag manager, delayed Clarity/Meta/Bing, lazy Trustindex) improves mobile conversion | All | PP | INP/LCP; mobile conversion | 10% | 4x4x3 | Dec 2026 (WS04) |
| B-23 | Accessibility fixes (contrast, sizes, labels) raise completion for 55+ users | Form + templates | SHIP + QUAL | Form completion by age proxy | - | 4x4x4 | Dec 2026 |
| B-24 | Pricing display with deposit and payment plan on proposal/deposit page | Deposit page | PP | Deposit-within-3-days rate; payment failure | 15% | 4x3x3 | Q1 2027 |

Order of execution (first 6 releases, because they are inexpensive and protect the 1 Dec paid test): B-01 tracking, B-23/B-22 hygiene, B-02 form v2 on the paid LP and then sitewide split, B-06 calendar on thank-you, B-07 LP vs product page, B-12 mobile CTA bar. All ship by 15 Dec 2026. Each additional test enters the queue only when the previous test in the same page group has a decision.

Tests per period are capped by traffic (5.1). The eight powered A/B tests of 2027 (C7) are: **Dec 2026 - Q1:** B-07, B-02, B-12 (three decisions by Gate 1, matching the KPI table); **Mar - Apr:** B-15 chat pilot, B-21 abandoned-form recovery, B-10 adviser beside CTA (B-08 trust block runs as a staggered pre/post, not counted as an A/B); **May - Jun:** B-05 two doors; **H2:** B-11 calculator. Reserve (run only if traffic and developer hours allow): B-03, B-04, B-14, B-17, B-18. 2028: re-run winning patterns on new hub clusters and Nordic variants if GL1 is approved (31 Mar 2027 decision).

## 12. Research programme (qualitative evidence is cheaper than tests)

| Method | When | Sample | Output |
|---|---|---|---|
| Moderated usability test of the quote journey, mobile and desktop | Round 1 Nov-Dec 2026 on current site; Round 2 Feb 2027 on form v2; Round 3 Sep 2027 | 5-6 participants per round, 50-75 years, planned South Africa trips in 12-24 months; recorded; about SEK 2,500-3,000 each for recruitment and incentive, with facilitation inside the CRO partner days [ASSUMPTION; matches the SEK 15k per round in section 16] | Prioritised issue list, copy fixes |
| 5-second and first-click tests on landing pages | Q1 2027 | 30-50 responses each | Message clarity |
| On-site micro-survey (2 questions: "Vad saknar du för att kunna kontakta oss?" and "Hur hittade du oss?") | Dec 2026 on exit and thank-you | All consented respondents; limit one prompt per session | Objection list, attribution check |
| Win/loss interviews (with WS14) | Quarterly | 6 booked + 6 lost | Objections, decision criteria, pricing perception (feeds the trust stack) |
| Competitor journey benchmarking | Dec 2026, mid-2027 | MyChoice, Safariresor.se, Afrikaresor.se, Albatros, Tourcompass, Ving: form length, chat, trust blocks, review display, price display | Pattern bank; no copying of claims |
| Session replay sampling | Weekly 20 sessions | Clarity | Backlog inputs |

Consent and recording: Clarity and any replay tools load only after consent; masking on all form fields; legal review of the DPIA need [flag].

## 13. Timeline

| Date | Milestone | Owner (role) |
|---|---|---|
| 2-6 Nov 2026 | Access to GA4, GSC, Clarity, Gravity Forms, tag manager, CRM; data request issued; registry created; CRO lead named | CRO lead / CEO |
| 9-20 Nov | Event spec signed off (4.2); heuristic audit complete; analytics gaps listed; usability round 1 recruited | CRO lead, CRM manager, external CRO |
| 12 Nov | Travel News Market Stockholm: collect competitor-form observations (informal) | Head of Product |
| 20 Nov | Speed-to-lead SLA live (WS14); form confirmation e-mail < 60 s; spam filter live | Head of Sales / Web dev |
| 23-30 Nov | Tracking v1 live (strategy); form v1 two-step built in staging; paid LP template built; tag cleanup plan | Web dev, Analytics |
| 1 Dec | Paid test live on message-matched LP with holdout (B-07); form v2 on LP only | Head of Marketing |
| 15 Dec | **Gate 0:** baseline pack (funnel by segment), event integrity audit, calendar embed live (B-06), usability round 1 report; change freeze starts 10 Jan | CRO lead, Head of Sales |
| 10 Jan - 15 Feb 2027 | Peak: bug-fix freeze on form and chat code; no new deployments; B-02 (form) and B-12 (mobile CTA bar) collect peak data | CRO lead |
| 31 Jan | Tracking v2 and offline conversion import live; benchmarks replaced by actuals; test registry reviewed | Analytics, CRM manager |
| 1 Mar | Trust block v1 (B-08) with price card (B-09) rolled out to 40 priority templates (staggered); chat pilot B-15 starts (6 weeks) | Web dev, Content |
| 31 Mar (Gate 1) | B-07, B-02 and B-12 decided; form v2 default sitewide if B-02 positive and guardrails green; trust stack complete on money pages; CWV pass on form templates; response SLA evidence; C3 shows no decline (directional only) | CRO lead |
| Q2 2027 | Tests B-10/B-21 (Mar-Apr), B-05 (from 1 May); partner LPs for pilots; usability round 2 held Feb (see section 12); chat go/no-go 30 Apr | CRO lead |
| 30 Jun (Gate 2) | C3 +10% relative or better (like-for-like, vs untreated templates) and quality guardrails green; decision to continue, expand or cut spend | CEO, Head of Marketing |
| Jul - Oct 2027 | Rebuilds ready before next peak: hubs with calculator, departures template v2, deposit page, usability round 3 (Sep), content freeze 1 Dec | Web dev, Content |
| 31 Oct (Gate 3) | C3 trajectory to +20% by 31 Dec; budget for 2028 released only if CRO KPIs are on track | CEO |
| 2028 | Optimise at scale: Nordic variants (if GL1), EU Directive 2026/1024 changes before transposition (about Sep 2028 [VERIFY]), refreshed audit Q1, 8-10 tests | CRO lead |

## 14. Owners (by role)

| Role | Accountable for |
|---|---|
| CEO | Prioritisation vs other web work; approves budget moves and gates |
| **CRO lead** (Digital product owner, 0.5 FTE internal, or external retainer plus internal owner) [ASSUMPTION: the strategy's +5 FTE do not name this role; confirm whether it is absorbed or hired] | Registry, backlog, test design, decision records, weekly funnel review |
| Head of Marketing | Landing pages, paid alignment, creative |
| Head of Sales | Response SLA, call booking, lead quality feedback, adviser profiles |
| CRM manager | Event model, CRM fields, consent logs, offline import, dashboards |
| Web developer (internal/agency) | Form, templates, widgets, performance, release checklist |
| Content/UX copy lead | Swedish microcopy, trust blocks, stories |
| Legal/compliance (external adviser) | Package-law blocks, consent texts, chat/GDPR, price display, accessibility scope |
| CFO | Budget reconciliation, payment provider terms, guarantee notice |
| WS12 owner | Review score trajectory and display rule |
| WS04 owner | SEO risk class and release gating |

## 15. Operating rhythm
- **Weekly (30 min)**: funnel dashboard (4.1) by new vs existing flow, device, source; active tests; blockers; bug list.
- **Monthly (growth council)**: C3-C5 trajectory, quality guardrails, tests concluded, backlog re-scored, learnings published to sales and content.
- **Quarterly**: refresh baseline, rerun ICE, update sample-size table with actual traffic, review budget.
- **Documentation**: every release has a one-paragraph change note linked to the registry.

## 16. Budget (SEK) [ASSUMPTION - planning estimates, not quotes]

Overlaps with envelopes in strategy sections 11-12 (technology builds SEK 0.6 M 2027 and 0.3 M 2028; CRM automation SEK 0.30/0.35 M; measurement SEK 0.20 M) and with WS14 section 15 (chat/booking widget SEK 40k/50k) and WS04 (web developer ~190 hours 2027). **CFO to reconcile to avoid double counting**; web developer hours below are CRO-specific incremental to WS04's 190 hours.

| Line | Q4 2026 | 2027 | 2028 | Basis |
|---|---|---|---|---|
| External CRO/analytics partner (audit, test design, stats QA) | 40,000 | 120,000 | 96,000 | Q4: heuristic audit; 2027: ~15 days at SEK 8,000; 2028: 12 days |
| Usability and user research (recruit, incentives, facilitation) | 15,000 | 60,000 | 50,000 | 1 round Q4, 2 rounds 2027, 1-2 in 2028 |
| Testing tool + replay/survey tool | 0 | 60,000 | 65,000 | Evaluate in Dec; Clarity free tier already on site |
| Web development for CRO (form, templates, widgets, tracking hooks) | 38,000 | 266,000 | 190,000 | 40 / 280 / 200 hours at SEK 950 [ASSUMPTION rate]; charge to technology line |
| Trust and creative assets (adviser photos/video, guide intros, itinerary visuals, microcopy) | 7,000 | 70,000 | 50,000 | |
| QA, accessibility audit, mystery shop of journeys | 0 | 25,000 | 20,000 | |
| Subtotal | 100,000 | 601,000 | 471,000 | |
| Contingency 10% | 0 | 60,000 | 47,000 | |
| **Total** | **100,000** | **661,000** | **518,000** | About 1.4% of 48 MSEK and 0.8% of 64.4 MSEK |
| of which web developer hours (technology line) | 38,000 | 266,000 | 190,000 | |
| of which needs marketing/CRM/measurement lines | 62,000 | 395,000 | 328,000 | |

**Funding proposal** [ASSUMPTION for CFO decision]: Q4 2026 SEK 62k from the Q4 CRM and measurement lines (0.05 + 0.05 MSEK) and web hours from the Q4 technology line; 2027 SEK 395k split as measurement (SEK 120k, within the 0.20 M line), CRM/review/community (SEK 75k) and **SEK 200k reallocated from gated Tranche B paid media (0.7 MSEK)**, justified because conversion fixes make the same traffic worth more and Tranche B stays unreleased until holdout ROAS is proven anyway. Any amount outside the strategy's 3.6 and 4.6 MSEK totals needs CEO approval.

**Reviewer corrections to this funding proposal:**
1. The SEK 200k moves money from a **gated** line (Tranche B, released only on holdout proof) into **committed** CRO spend. That raises the strategy's committed 2027 marketing from 2.40 to 2.60 MSEK and cuts the gated Tranche B pot from 0.70 to 0.50 MSEK (L3 is already the lever most likely to be cut). It is therefore a CEO decision, not a CFO reconciliation; if declined, the fallback is to drop usability round 3, halve the tool line and cap partner days at 10 (about SEK 100k saved) and fund the rest from the measurement and CRM lines.
2. In Q4 2026 the proposal takes SEK 62k of the combined SEK 100k CRM and measurement lines, leaving SEK 38k for tracking v1, the review programme and the SEK 100k paid-test holdout design. Confirm that is enough before committing.
3. In 2027 SEK 120k of the SEK 0.20 M measurement line is claimed by CRO, leaving SEK 80k for server-side tagging, holdouts and offline import (strategy section 11.2). Confirm with the CRM manager.
4. **Not in the table:** the internal CRO lead at 0.5 FTE, about SEK 0.35 M a year at the strategy's SEK 0.7 M loaded cost (A18), is not in the strategy's +5 FTE and is not budgeted here. Dynamic call tracking (up to SEK 36k a year, section 4.2) is assumed to sit in the WS14 telephony budget; if not, add it. The 280 development hours in 2027 are unlikely to cover the full scope listed (form v2, sticky bar, 40-template trust block, calculator, departures template v2, deposit page, partner LPs, chat integration, thank-you calendar); get an agency quote by 31 Jan 2027 and cut scope to fit rather than overspend.

**Return check** (arithmetic, not forecast): at 2028 core assumptions of about 150k qualified sessions and a new-traffic close of 18% on 80% quoted (14.4% per enquiry) at about SEK 101k per booking (strategy section 10), each **+0.1 percentage point** of visitor-to-enquiry gives about 150 extra enquiries, about 21.6 bookings, about SEK 2.2 M turnover and about SEK 0.44 M gross margin at 20%. The 2028 CRO budget of SEK 0.52 M therefore pays back at about +0.12 pp (for example from 2.0% to 2.12%, a 6% relative lift) if all extra volume is incremental and sales capacity holds. Total 3-period spend of about SEK 1.28 M should be compared with the cost of buying the same enquiries: at about SEK 1,700-3,800 per new enquiry (strategy section 10), 150 enquiries cost SEK 0.26-0.57 M in media. The payback figure ignores the extra consultant time, fund levy and commissions on the extra bookings, assumes all extra enquiries close at the new-traffic rate and are incremental, and ignores supply limits, so treat it as an upper bound; it is a sizing check, not a forecast, and CRO is not added to the bridge. CRO pays when the lift is sustained across years; if C3 is below +5% relative by Gate 2, cut the research and testing-tool lines by half and keep only SHIP-type fixes.

## 17. KPIs and targets [ASSUMPTION until baseline; recalibrate 15 Dec 2026 and 31 Jan 2027]

| KPI | Source | Baseline | Gate 1 (31 Mar 2027) | End-2027 | End-2028 |
|---|---|---|---|---|---|
| Visitor-to-qualified-enquiry (qualified sessions), like-for-like by segment | GA4 + CRM | unknown; planning 1.5-2.5% | no decline (directional; +10% is not measurable yet); +10% rel. at Gate 2 (30 Jun) | +20% rel. | +30% rel. |
| Form start rate (starts / money-page sessions) | GA4 | unknown | +10% | +15% | +20% |
| Form submit rate (submits / starts) | GA4 | unknown | +15% mobile, +10% desktop | +25% mobile, +15% desktop | maintain |
| Qualified share of submitted enquiries | CRM | unknown | not below baseline | +3 pp | +5 pp |
| Enquiries booking a call at submit | CRM | unknown | 20% | 40% | 45% |
| Spam/invalid share | CRM | unknown | <5% | <3% | <3% |
| Thank-you to call-held rate | CRM | unknown | baseline +5 pp | +10 pp | +10 pp |
| Mobile conversion gap vs desktop | GA4 | unknown | gap -15% | gap -30% | gap -40% |
| Chat (if kept): leads per 100 chats; share qualified | Chat + CRM | n/a | pilot | decision | per result |
| Payment failure on deposits | PSP | R11 benchmark 3-8% (tier C) | <5% | <4% | <3% |
| Pages with full trust stack (of 40 priority) | Audit | 0 | 40 | 40 | 40 + new |
| Core Web Vitals (form, money templates) | CrUX | unknown | 90% "Good" (WS04) | maintain | maintain |
| Powered A/B tests concluded with decision (cumulative) | Registry | 0 | 3 | 8 | 16-18 (C7: 8-10 in 2028) |
| Share of tests failing guardrail and rejected | Registry | n/a | tracked | tracked | tracked |
| Cost per qualified enquiry on paid LPs | Ads + CRM | n/a | within strategy caps (blended marketing at most SEK 8,000 per booking; marginal at most SEK 20,000 per marketing-created booking, G4) | -15% vs Q4 2026 | -25% |
| Revenue and margin per qualified enquiry (cohort, 90 days) | CRM | unknown | tracked | not below baseline | not below baseline |
| Booked within 90 days per qualified enquiry, new vs existing traffic | CRM | strategy planning 18% / 25-27% of enquiries (after 80% quote rate) | tracked | at or above 18% new, 26% existing | 18% new, 27% existing |
| Enquiry-to-first-reply time (hand-off to WS14 SLA) | CRM | unknown | under 1 h for 90% (strategy G8) | maintained | maintained |
| Sessions required for the strategy (134-223k core in 2028) versus actual qualified sessions | GA4 | unknown | tracked | tracked | CRO-adjusted need 112-186k at +20% |
| Trustpilot rolling score (shown, owned by WS12) | WS12 | 2.7 on 8 (R03) | trending to 4.5 | 4.5 | 4.5+ |

Reporting rule: all conversion KPIs are shown with existing vs new traffic split and with bookings-per-qualified-enquiry for the same cohorts at 30/60/90 days.

## 18. Dependencies

| Need | From | By |
|---|---|---|
| GA4, GSC, Clarity, tag manager, CRM, Gravity Forms access | CEO / IT | 6 Nov 2026 |
| Event model and CRM fields, consent log | CRM manager (WS14 section 11) | 30 Nov 2026 |
| Response SLA operating (to publish the one-hour claim) | Head of Sales (WS14) | 20 Nov, 4 weeks of evidence before claim |
| Calendar embed on site | WS14/CRM | 15 Dec 2026 |
| Price source of truth; flights-included flag; FX policy and ZAR clause | CFO, Product, WS03/WS04 | 20 Nov 2026 before departure pages |
| Held-supply register (to show availability) | Head of Product | 15 Dec 2026 |
| Reviews program output and Trustpilot trajectory | WS12 | Review automation live 31 Dec 2026 |
| Release checklist and staging | WS04 | 30 Nov 2026 |
| Adviser and guide photos, bios and consents | HR / Sales | 15 Jan 2027 |
| Legal review: consent texts, package-law blocks, chat/GDPR, accessibility scope | External counsel | 30 Nov 2026 for form text (go-live is 1 Dec, so brief counsel by 12 Nov); rolling |
| Verified entry of the company in the Kammarkollegiet guarantee lookup, before any guarantee badge goes live (including on the 1 Dec paid LP) | CFO / Legal | 27 Nov 2026 |
| Payment provider options and limits | CFO | 31 Jan 2027 |
| Developer capacity shared with WS04 (190 h) and tracking builds | Web developer/agency | Confirm 9 Nov; hire/retain agency if less than 300 hours total available in Q1 |

## 19. Risks and mitigations

| Risk | Likelihood / impact | Mitigation |
|---|---|---|
| Traffic too low to power tests; false winners from small samples | High / Medium | Few, bundled tests; MDE 20-30%; fixed stop rules; PP with control; do not ship on non-significant "trends" |
| Higher submissions but lower lead quality (junk enquiries, wasted consultant hours) | High / High | Quality guardrails (5.4); qualified-share KPI; budget bracket; compare cohorts at 90 days |
| Sales capacity overwhelmed by extra enquiries (SLA breach) | Medium / High | Budget never moves while SLA missed (strategy 11.2); gate rollout of form v2 on capacity; WS14 rota; throttle by hiding the "ring mig om 5 minuter" option when staff are unavailable |
| Form or template changes harm SEO (titles, H1, links, schema, speed) | Medium / High | WS04 release checklist; staging crawl diff; no cut-over before Gate 1; server-side variants only |
| Peak-season change causes outage or data loss | Medium / High | 10 Jan - 15 Feb freeze; staging; rollback plan; monitoring of submits per hour (alert if zero for 4 h in hours) |
| Phone enquiries invisible so tests misread (moves from form to phone) | High / Medium | Call tracking, "how did you hear" field, combined "qualified contacts" metric |
| Consent mode reduces measurable traffic and conversion data | High / Medium | Server-side tagging, modelled conversions, CRM as source of truth for enquiries and bookings |
| Weak reviews (2.7 on 8) drag conversion; widget hurts | High / High | Lead with guarantee/adviser/stories; fix at the root via WS12; show reviews prominently only when supportable |
| Over-claiming (response time, 24/7, largest, price) | Medium / High (Konsumentverket, brand) | Claims register (WS01); only when true and evidenced; copy review |
| Price display breaches package/marketing law (mandatory costs, flights) | Medium / High | Legal check; one price source; "från" with flights yes/no |
| Dark patterns, false scarcity | Low / High | Prohibited; copy checklist |
| Chat/GDPR/transcripts; AI chat disclosure | Medium / Medium | Human chat in 2027; processor agreement; retention policy; legal review before any bot |
| Accessibility complaints or legal exposure | Low-Medium / Medium | AA checks, scope review |
| Third-party scripts slow site; test tool flicker | Medium / Medium | Speed budget, server-side splits, load after consent |
| Platform replatform pressure from new CEO mid-programme | Medium / High | WS04 decision rule 9.4: no replatform before audit and Gate 1; port CRO patterns into any new theme as a spec |
| Developer bandwidth shared across SEO, tracking, CRM, CRO | High / Medium | Single prioritised queue by ICE and gates; agency retainer; freeze windows |
| Novelty effects, seasonality (Jan-Mar peak) bias results | Medium / Medium | Holdback groups; compare same-season periods; avoid starting tests on 20-24 Dec |
| Supply cap: extra enquiries cannot become 2027 bookings beyond held allocation (strategy 13.2) | High / Medium | Do not scale form or paid-LP rollout against peak-month departures that are sold out; route to shoulder-month and alternative-lodge products; use the held-supply register (due 15 Dec) in departure-page CTAs |
| Assumed benchmarks wrong (all R11 numbers tier C) | High / Medium | Replace with account data by 31 Jan 2027; targets stated as relative lift not absolute |

## 20. First 30 days (2 Nov - 2 Dec 2026)

| Week | Action | Owner | Output |
|---|---|---|---|
| 1 (2-6 Nov) | Name CRO lead; request access (GA4, GSC, Clarity, tag manager, Gravity Forms entries, CRM, telephony); issue data requests (section 3.2); create test registry; agree definitions of enquiry, qualified session, qualified enquiry with Head of Sales | CEO, CRO lead | Access list, definitions v1 |
| 1 | Commission external heuristic audit (SEK 40k); recruit 5-6 participants aged 50-75 | CRO lead | Audit booked, recruiting |
| 1 | Export last 12 months of form entries, calls and chat data if available; compute submit rate, spam share, channel mix | CRM manager | Baseline v0 |
| 2 (9-13 Nov) | Event spec (4.2) reviewed with Web dev and Analytics; cleanup list for duplicate/missing events; decide call-tracking approach; confirm developer hours with WS04 | Analytics, Web dev | Signed event spec |
| 2 | Watch 50 mobile and 50 desktop Clarity sessions; code issues | CRO lead | Issue list |
| 2 | Legal brief: form consent text, guarantee block, price display ("från" flights flag), chat/GDPR | CRO lead, Legal | Review request out |
| 3 (16-20 Nov) | Usability round 1 (5-6 sessions); on-site micro-survey live (consent-aware); heuristic audit delivered; ICE scoring of backlog | CRO lead, external CRO | Report, ranked backlog |
| 3 | Speed-to-lead auto-ack and confirmation e-mail live (WS14); spam filter | Web dev, CRM manager | 20 Nov |
| 4 (23-30 Nov) | Build form v2 (two steps), thank-you page with calendar placeholder, paid LP template in staging; tracking v1 verified end to end with test submissions; Swedish copy approved | Web dev, Copy lead | Staging ready |
| 4 | Define holdout and analysis plan for the paid test (with Head of Marketing); confirm B-07 sample/stop rules | CRO lead, Head of Marketing | Test plan |
| 5 (1-2 Dec) | Go-live of paid LP with form v2 (B-07/B-02 on LP); monitor submits hourly for 48 h; QA mobile on 3 devices | Web dev, CRO lead | Live, QA log |
| Throughout | Do not touch titles/H1/canonicals; follow WS04 release checklist; keep Clarity masking on | All | |

Definition of done for day 30: tracking v1 verified; baseline v0 written with unknowns listed; form v2 and paid LP live on the paid test traffic only; backlog scored; usability round 1 and audit reports delivered; legal questions out; Gate 0 pack plan (15 Dec) agreed.

## 21. Assumptions register (replace with company data)

| # | Assumption | Rationale | Replace by |
|---|---|---|---|
| X1 | Qualified sessions about 100k a year (80-135k) derived from 2,025 enquiries at 1.5-2.5% | Back-of-envelope from strategy numbers; not observed | GA4 baseline 15 Dec 2026 |
| X2 | Visitor-to-enquiry planning rate 2%; R11 benchmarks tier C | Vendor figures, not Swedish long-haul | Account data |
| X3 | Relative uplift targets +10/+20/+30% for C3 | Conservative vs unverified vendor claims (chat +15-30%, social proof +15-30%); tied to trust of a premium consultative offer | Recalibrate after baseline and first two tests |
| X4 | MDE 20-30% per test; sample sizes via rule-of-thumb formula | Traffic is limited; formula approximates standard power calc | Proper power calculation per test |
| X5 | Budget-bracket values (under 35k ... over 80k) | Based on A1 range 35-60k/pax and R03 anchors | Set from booking data |
| X6 | Founding year 2003 and "specialist" wording | From strategy positioning; to be confirmed | Company records, legal |
| X7 | Web developer rate SEK 950 per hour; CRO partner SEK 8,000 per day; tool costs; research incentives | Typical Swedish agency/market ranges, not quotes | Quotes by 31 Jan 2027 |
| X8 | CRO lead 0.5 FTE | No role named in strategy +5 FTE | CEO decision |
| X9 | Chat hours Mon-Fri 09:00-17:00; pilot 6 weeks | Aligned to WS14 SLA window | Actual staffing |
| X10 | Call-booked-at-submit targets 20/40/45% | Phone is best-converting channel per R11 (tier C); no Swedish data | Baseline from CRM |
| X11 | 40 priority templates for trust stack | Estimate from WS04 template inventory | Analytics top pages |
| X12 | Payment: deposit online via link; failure benchmark 3-8% | R11 tier C; no data on today's flow | Finance/PSP |
| X13 | EU Directive 2026/1024 timing about Sep 2028 | Strategy reference [VERIFY] | Legal |
| X14 | Accessibility regulation scope for booking sites | Not researched here | Legal |
| X15 | Quality guardrail thresholds (e.g. qualified share not below baseline) | Policy choice | CEO/Head of Sales |
| X16 | Funding reallocation of SEK 200k from gated Tranche B | Proposal; converts gated money to committed spend (see section 16 corrections); needs CEO decision | CEO/CFO |
| X17 | Under 10,000 clicks from the SEK 100k December paid test; usability cost SEK 2,500-3,000 per participant | Order-of-magnitude planning guesses; CPC and recruitment prices unknown | Google Ads account data; recruiter quotes |

## 22. Sources

- R11 conversion and CRM (benchmark tiers and URLs therein): https://resources.rework.com/libraries/travel-tour-growth/booking-conversion-metrics ; https://hbr.org/2011/03/the-short-life-of-online-sales-leads ; https://www.promodo.com/blog/tourism-marketing-benchmarks
- Baymard, checkout form fields and complexity: https://baymard.com/research-articles/checkout-flow-average-form-fields ; cart abandonment list: https://baymard.com/lists/cart-abandonment-rate (e-commerce, directional for travel enquiry forms)
- Riksbank, payment habits in Sweden (Swish, BNPL, card): https://www.riksbank.se/en-gb/payments--cash/payments-in-sweden/payments-report-2026/developments-in-the-payments-market/payment-habits-in-sweden/
- Expedia Group / Luth Research path to purchase: https://partner.expediagroup.com/en-us/resources/blog/travelers-booking-behavior-path-to-purchase-marketing-strategies
- Kammarkollegiet lookup of operators with guarantee: https://www.kammarkollegiet.se/vara-tjanster/resegaranti/hitta-reseaktorer-med-resegaranti ; R09 for law and standard forms
- Internal: `/docs/00-strategy.md` sections 6, 10, 11, 16; `/docs/workstreams/04-seo-technical.md` (site observations, release governance); `/docs/workstreams/14-lead-gen-sales.md` (SLA, stages, CRM); R03, R06, R07, R08.
