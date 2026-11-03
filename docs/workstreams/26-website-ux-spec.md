# Workstream 26: Website UX and Information Architecture Spec for sydafrikaresor.se

Page templates, component library, content model, navigation, accessibility, performance and release plan.
Date: 2 Nov 2026. Plan horizon: Q4 2026 prep, 2027, 2028. Plan language: English. Customer-facing copy in this document: Swedish.
Status: v1 for CEO and programme owner review. Binding frame: `/home/user/MICE-Group/docs/00-strategy.md` (v2 core plan 48 MSEK in 2027 and 64.4 MSEK in 2028; 80 MSEK is a stretch that depends on gap levers).

Evidence rule: facts about the live site come from the public fetch recorded in WS04 section 2.1 (2 Nov 2026) and R06. Benchmarks come from R11 and are vendor-grade (tier C). Everything else is marked [ASSUMPTION] with a rationale. Section 20 lists every assumption so the CEO can replace it with real data. No internal company data was available.

---

## 1. Purpose and scope

This workstream defines what the website is made of, so that the other workstreams (SEO, CRO, content, paid, email, partners) build on one shared structure instead of ten private ones. It is the "blueprint" layer. It does not own traffic (WS04, WS05, WS06, WS07), the test programme (WS15) or the tracking plan (WS16), but it hosts all of them.

In scope: information architecture and navigation; 16 page templates; a component library with rules; the content model (entities, fields, relations) in WordPress; the quote-request and call-booking journey as UX; the departure/price/availability display rules; trust placement; mobile and older-audience rules; accessibility; performance budgets per template; legal display rules for price, guarantee and pre-contract information; the Nordic locale stub (GL1) and sister-site boundaries; release governance.

Out of scope: replatforming (WS04 section 9.4 rule: not recommended without evidence; this spec assumes the existing WordPress site stays); a self-service booking engine (WS15 section 9.2: consultative sale is the model in 2027); brand identity itself (WS01); copy production at scale (WS05); ad landing page media buying (WS06, WS07).

## 2. Objectives and how they tie to the strategy

The north star is the booked-not-departed order book versus plan, reported with its gross margin. The website's job is to feed and convert the flow in the strategy's funnel (section 10): core 2028 needs about 3,350 enquiries (+65% vs 2026), of which about 1,200 are new-traffic enquiries closing at about 18%, and existing flow closing at 25% rising to 27%.

| # | Objective | Measure | Target [ASSUMPTION until baseline, recalibrate 15 Dec 2026 and 31 Jan 2027] | Bridge link |
|---|---|---|---|---|
| O1 | Make every money page answer the five buyer questions fast: what is it, what does it cost and include, when can I go, why you, how do I talk to a person | Share of money templates passing the "5-question" heuristic review | 100% of Home, Hub, Rundresa, Reseförslag, Avgångar by 31 Mar 2027 | L2, L3 |
| O2 | Raise visitor-to-enquiry on qualified sessions | Enquiry rate (form submits + booked calls + qualified chat/phone) per qualified session | +0.3 percentage points by Q4 2027 and +0.5 by Q4 2028 versus the 31 Jan 2027 baseline (targets are placeholders; +0.5 pp is a 20-33% relative lift on a 1.5-2.5% base and should be cut if the baseline is already above 2.5%). Core 2028 needs 134-223k sessions at 1.5-2.5%, so each +0.1 pp is worth about 130-220 enquiries a year at 134-223k sessions | L2, L3, L4 |
| O3 | Convert informational traffic into advisory conversations without forcing "boka" | Soft-conversion rate on guide templates (calculator, itinerary PDF, "prata med rådgivare") | 2.5% of guide sessions by Q3 2027 [ASSUMPTION; 1-3% visitor-to-enquiry normal per R11, tier C] | L4 |
| O4 | Show the premium (sit 15-20% above the group-with-flights cluster) through visible inclusions, guide, flexibility and support, never through argument | Price-objection rate in sales notes (WS14); "pris" as lost reason | Fall by a third by Q4 2027 [ASSUMPTION] | Positioning |
| O5 | Make trust visible on every money page: guarantee, reviews, named adviser, company facts | Trust-stack compliance in QA | 100% of money templates from 31 Mar 2027 | L2, L7 |
| O6 | Keep the site fast, accessible and unbroken while 2.5x more people use it | Core Web Vitals pass rate per template; WCAG 2.2 AA audit result; zero ranking-page URL loss at releases | LCP at most 2.2 s, INP at most 150 ms, CLS at most 0.05 (WS04 section 5.1); no critical AA failures on money templates by 30 Jun 2027 | L4 protection |
| O7 | Be structured for partners, campaigns and later Nordic scope without rebuilds | Time to launch a partner or campaign landing page from template | At most 2 working days by 30 Jun 2027 [ASSUMPTION] | L8, GL1 |
| O8 | Pre-sales UX that lets the adviser start with context | Share of enquiries with budget bracket, month, travellers and interests filled | At least 75% by 31 Mar 2027 [ASSUMPTION] | L2 |

Honest limit: the site cannot create demand that the market and the media plan do not deliver. The UX goal is to stop leaking the traffic the plan buys. The strategy treats L2 (conversion on existing flow) as worth +3.5 MSEK and L3/L4 together +5.5 MSEK; this workstream is a condition for those, not a lever with its own bridge line. Important for double counting: the strategy already sizes 2028 traffic at a 1.5-2.5% visitor-to-enquiry rate (134-223k sessions for 3,350 enquiries). The O2 uplift is therefore the way to reach the upper end of that range (or to need fewer sessions), not enquiries on top of the 3,350 in the bridge. Section 16's return check shows the value of a CRO gain if it were additional and must not be added to the bridge.

## 3. Starting point

### 3.1 Observed (public fetch, WS04 section 2.1, 2 Nov 2026)
- WordPress with a custom 2020-vintage theme (`saso2020`), Yoast SEO, Gravity Forms, Cookie Law Info consent plugin, Smush Pro, Trustindex widget, tags for GA, Microsoft Clarity, Meta pixel, Bing UET, Google Ads.
- Content types already in use: rundresor, reseförslag, destination pages, utflykter (about 13 new, Aug-Sep 2026), boenden, reseberättelser (about 40), resespecialister, theme pages, FAQ, hyrbilar, presentkort, förlängningar, avgångar, katalog; only about 6 tips articles (R06).
- The site ranks #1 for head terms such as "resa till Sydafrika" and "rundresa/paketresa Sydafrika"; weak or absent on best-time, cost and safety guides (R06 sections on SERP snapshots).
- Sister brands Söderhavsresor and MICE are linked from the site; Seychelles, Mauritius, Maldives products are sold on the domain (WS04 section 4.7).

### 3.2 Unknown (data requests, in priority order)
1. GA4/Search Console: top landing pages, device split, age bands, entrances to quote form, exit pages (baseline pack due 15 Dec 2026).
2. How the current quote form works (fields, steps, completion rate) and whether any online payment exists today.
3. Whether "från" prices include flights, and where the price lives (CMS field, Excel, booking system).
4. Template inventory: how many distinct templates and page builders the theme really has.
5. Hosting, staging setup, deploy method, who maintains the theme and plugins.
6. Customer age profile (drives type size and interaction rules; section 11.4).
7. Current review volume and platform; guarantee entry at Kammarkollegiet.

Because these are unknown, Phase 0 (section 14) is an audit and a baseline, not a build. No visual redesign of the home page ships before the 15 Dec 2026 baseline pack.

## 4. Approach and principles

1. **Evolve, do not replatform.** Keep WordPress and the existing ranking URLs (WS04 rule: live URL wins; enrich in place). Build a new design layer (tokens, components, templates) that the theme adopts template by template, starting with the pages closest to purchase.
2. **Consultative sale, not e-commerce.** The primary conversion is "prata med en rådgivare" (quote request or booked call). Deposit is paid after a proposal, via a link from the adviser (WS15 section 9.2). We do not show a "lägg i varukorg" experience in 2027.
3. **One source of truth for price, availability and legal text.** Prices, "ingår/ingår ej", departure state and the resegaranti block come from structured fields, so pages, schema, feeds and ads cannot diverge (WS04 section 4.5).
4. **Show the premium in value, never argue it.** Every product page carries an inclusion block, guide block, flexibility block and support block before the price comparison questions arise.
5. **Mobile first, older audience safe.** Large type, no hover-only content, no auto-playing carousels, visible sections instead of hidden tabs (WS15 section 9.3, WS04).
6. **Honest claims only.** No "24/7 på plats" (not costed or staffed); the copy says "jourtelefon under resan". No "Sydafrika är säkert". No "Skandinaviens största" until it can be proven. No "svarar inom en timme" until the SLA is met (strategy section 6.3).
7. **Every addition has a speed and accessibility budget.** No new third-party script without a WS04 speed review.
8. **Release small, release safely.** The WS04 release checklist (section 9.2) applies to every template change.

## 5. Audiences and jobs-to-be-done (design inputs)

Segments are those of strategy section 7; the names and shares below are design hypotheses [ASSUMPTION] to be validated by WS15's user research.

| Visitor mode | Job | What the site must show within 10 seconds | Primary CTA |
|---|---|---|---|
| Dreamer (early research, "bästa tiden", "vad kostar") | Decide if South Africa is for me, and when | Plain-language answer, month/budget guidance, inspiration | Soft: ladda ner reseförslag, räkna ut budget (calculator exists from Q2 2027) |
| Comparer (rundresa vs egen hand vs Ving/Albatros) | Choose a provider | Specialist since 2003 (claim shown only once the founding date is evidenced, section 12.4), what is included, flexibility, guarantee, reviews | Be om offert / boka samtal |
| Ready buyer (has dates, travellers) | Confirm availability and price, talk to a person | Departure state, price basis, adviser name, how fast they answer (only if true) | Fråga om platser / Boka samtal |
| Existing customer / referral | Re-book, add extension, recommend | Recognition, extensions, referral path | Kontakta din rådgivare |
| Partner / affinity member (L8) | Use the member offer | Partner-branded context, member benefit, same trust stack | Partner landing form with partner ID |
| Group or company enquiry (GL2) | Reach the right unit | Clear route to MICE page | Separate form, not mixed into leisure hubs |

## 6. Information architecture and navigation

### 6.1 Site map (target; live URLs win where they differ, per WS04 4.1)

```
/                          Home
/rundresor/                Hub: guidade rundresor (published departures)
  /rundresor/<slug>/         Rundresa (product)
/reseforslag/              Hub: skräddarsydda förslag
  /reseforslag/<slug>/       Reseförslag (product)
/avgangar/                 Departure calendar (one URL; dates are on-page content)
/safari-sydafrika/         Commercial hub
/kapstaden/  /garden-route/  /kruger/   Destination hubs
/teman/<tema>/             Segment hubs: familjeresa, brollopsresa, golf, jubileum, lyxresa
/kombinera-med/            Extensions hub: Victoriafallen, Botswana, Mauritius, Seychellerna ...
/utflykter/<destination>/<slug>/   Excursions
/boenden/<slug>/           Lodges and hotels
/guide/                    Guides hub
  /guide/basta-tiden-att-resa-till-sydafrika/ (+ month spokes)
  /guide/vad-kostar-en-resa-till-sydafrika/
  /guide/ar-sydafrika-sakert/
  /guide/sydafrika-pa-egen-hand-eller-rundresa/
/reseberattelser/          Customer stories
/resespecialister/         Advisers (bios, regions, languages)
/om-oss/  /resegaranti/  /omdomen/  /vanliga-fragor-faq/
/offert/                   Quote request (also modal entry points)
/boka-samtal/              Book a call
/partner/<partner>/        Partner landing pages (template P)
/presentkort/  /hyrbilar/  /katalog/   Existing utility pages
```

Rules: maximum click depth 3 for money pages, 4 for guide spokes; breadcrumbs on all pages; keyword-to-URL map held by SEO lead; the slug patterns above are proposals until the crawl sign-off on 30 Nov 2026.

### 6.2 Primary navigation (desktop and mobile)

Desktop (5 items plus a persistent CTA, not a mega-menu with 40 links):

| Item | Contents | Notes |
|---|---|---|
| Rundresor | Guidade resor with svensk guide; Avgångar 2027-28; Familj; Safari | Opens a panel with 3 product cards and "Se alla avgångar" |
| Skräddarsytt | Reseförslag; Så planerar vi din resa; Boka samtal | Explains the process in one place |
| Resmål | Kapstaden; Garden Route; Kruger/Safari; Södra Afrika; Kombinera med | Hubs only; deep links stay in body |
| Planera & guider | Bästa tiden; Vad kostar det; Säkerhet; Visum och praktiskt; Egen hand eller rundresa | Informational hubs |
| Om oss | Våra rådgivare; Omdömen; Resegaranti; Reseberättelser; Kontakt | Trust cluster |
| CTA button (sticky) | "Prata med en rådgivare" opening the call/quote chooser | Telephone number visible on mobile header as tap-to-call |

Mobile: top bar with logo, phone icon (tap-to-call), "Meny"; a bottom sticky bar on money templates with two actions: "Be om offert" and "Ring". The bar hides on scroll down and shows on scroll up, never overlaps the cookie banner, and respects safe areas. Menu is an accessible disclosure, not a hover menu.

Footer: five columns (Resor, Resmål, Guider, Om oss och trygghet, Kontakt) plus legal block (organisation number, address, resegaranti link to Kammarkollegiet lookup, personuppgifter, villkor), sister-site links in "Våra andra resmål" only (WS04 section 4.7).

### 6.3 Search and filters
- On-site search: single field in header, results page `noindex, follow`, canonical to the hub (WS04 4.3). Autocomplete suggests hubs and guides first, products second.
- Filters on hubs: month, duration, style (guidad/skräddarsydd), traveller type, budget bracket. Filters change displayed cards without creating indexable parameter URLs. Default state is pre-rendered static content so the hub is crawlable without JavaScript.
- Departure calendar: month-by-month list with state chips (section 8.4), filter by trip and month, no URL per date.

### 6.4 Internal linking modules (from WS04 4.2, as components)
"Passar dig om du vill..." (guide spokes), "Bokningsbara resor" strip (hubs, ordered by order-book margin or availability, not alphabetically), "Läs mer" strip (products link to best-time, cost, safety guides), month and region pickers as crawlable links, adviser and review module.

## 7. Page templates

For each template: purpose, mandatory blocks in order, CTA, and key rules. Estimated priority from WS15 section 9.1 (confirm with analytics).

| ID | Template | Priority | Build phase |
|---|---|---|---|
| T01 | Quote request and thank-you | 1 | Phase 1 |
| T02 | Rundresa (guided trip product) | 2 | Phase 1 |
| T03 | Reseförslag (tailored itinerary product) | 2 | Phase 1 |
| T04 | Avgångar (departure calendar) | 3 | Phase 1 (after FX policy) |
| T05 | Commercial hub (rundresor, safari, destination, theme) | 2 | Phase 1 |
| T06 | Guide long-form (best time, cost, safety, self-drive) | 4 | Phase 1 |
| T07 | Guide spoke (month, region, activity) | 4 | Phase 2 |
| T08 | Home | 5 | Phase 2 (after baseline) |
| T09 | Adviser profile and Advisers index | 6 | Phase 2 |
| T10 | Customer story and stories index | 6 | Phase 2 |
| T11 | Utflykt (excursion) and Boende (lodge) | 7 | Phase 2 |
| T12 | Resegaranti and trust pages (om oss, omdömen, FAQ) | 5 | Phase 1 (resegaranti), Phase 2 (rest) |
| T13 | Partner/affinity/campaign landing page | 6 | Phase 2 |
| T14 | Budget calculator ("vad kostar en resa") | 4 | Phase 2 |
| T15 | Book-a-call | 1 | Phase 1 |
| T16 | Utility: 404, search results, payment/deposit page | 3 | Phase 1 (404), Phase 3 (deposit page) |

### 7.1 T02 Rundresa (guided trip) - blocks in order
1. Title block: trip name, duration, "med svensktalande guide" if true for this trip, from-price with basis (section 8.1), next departure state, primary CTA "Fråga om platser" (no "Boka plats" wording while there is no online booking, to avoid implying an instant purchase), secondary "Prata med [adviser name]".
2. Hero media: one large image (not a carousel), fetchpriority high, not lazy-loaded (WS04).
3. "Det här ingår" summary (icons plus 5-8 lines): flights (yes/no), accommodation standard, meals, transfers, guide, entrance fees, tips; each line sourced from structured fields.
4. Day-by-day itinerary: accordion with the first three days open, "Visa alla dagar" expand-all control, map with route. Never hide content that matters for SEO behind JavaScript-only widgets.
5. Premium proof block: guide profile (name, photo, languages, years), group size cap, flexibility rules (children, solo, private options), support during the trip ("jourtelefon under resan").
6. Departures and prices table (T04 component embedded): date, state chip, price per person, single supplement, seats left only if verified in real time.
7. "Vad ingår inte" and practical information (visa, vaccination, insurance recommendation) from shared blocks; unique text above the fold at least 250 words per product [ASSUMPTION-T5 from WS04].
8. Reviews and stories for this trip or region (Trustindex or first-party reviews), adviser module.
9. Pre-contract information summary (section 12) and resegaranti block.
10. FAQ (5-8 trip-specific questions, FAQ schema only where eligible).
11. Related trips and "Kombinera med" extensions.
12. Footer CTA repeating the form.

### 7.2 T03 Reseförslag (tailored itinerary)
Same skeleton as T02 with these differences: it is an example, not a fixed product, so the title says "Förslag" and the price label is "Pris från ... per person, anpassas efter dina önskemål"; the block "Så skräddarsyr vi" (3 steps) replaces the departures table; primary CTA is "Be om ett förslag baserat på detta"; the form pre-fills the itinerary ID as hidden field.

### 7.3 T05 Commercial hub
1. H1 with the intent (for example "Rundresor i Sydafrika med svensk guide"), 2-3 sentence lead.
2. Segment selector chips: guidad / skräddarsydd / familj / safari / bröllop (anchors, no JS dependency).
3. Product cards (6-12), sorted by margin or availability per WS04; card contents in section 9.
4. Comparison help: "Vilken resa passar mig?" 3-question helper as plain links to sections, not a modal quiz in 2027.
5. Trust stack row, adviser strip, reviews.
6. Informational content (400-800 words) lower on page, with internal links to guides.
7. FAQ and final CTA.

### 7.4 T06 Guide long-form
Fixed layout: summary box ("Kort svar", 40-60 words, for answer engines), table of contents (anchors), body with data tables (best time by month and region, cost ranges), author/reviewer line (named adviser, "Granskad [month year]" date), mid-article soft CTA, end CTA, related products strip, related guides. The cost guide shows ranges by trip type with the price basis spelled out (section 8). Guides state facts and link to UD/Ambassaden for safety; never "säkert".

### 7.5 T08 Home
Order: (1) promise + segment selector + CTA ("Prata med en rådgivare"), (2) three route cards (guidad / skräddarsydd / safari), (3) trust stack (resegaranti, "Sydafrikaspecialist sedan 2003" once approved in the claims register, reviews score and count once verified, named advisers), (4) next departures, (5) inspiration by month, (6) adviser strip, (7) stories, (8) guides teaser, (9) final CTA. Home is the highest-risk template for speed because of media; hero is a single optimised image or a short muted video loaded after the interaction.

### 7.6 T01 Quote request and thank-you
Spec in section 10. Thank-you page: states what happens next (named adviser, expected reply time only as true SLA), optional "boka samtal nu" calendar, itinerary PDF download, conversion events fired once.

### 7.7 T04 Avgångar
Single page and embedded table component. States: Bokningsbar, Få platser kvar (only if live data), Garanterad avresa (min participants met), Väntelista, Fullbokad, Pris bekräftas (when FX policy blocks fixed price). No fixed-price departures before the FX policy of 20 Nov 2026 and a ZAR-linked clause (WS15 9.1, strategy 11.3). Each row has CTA "Fråga om platser".

### 7.8 T13 Partner/affinity/campaign landing page
Shortened skeleton: partner-branded header strip (logo lockup rules), member benefit statement, 2-3 relevant trips, the full trust stack, form with hidden partner ID and UTM capture, no site navigation beyond logo, phone, and "Se alla resor". Commission is paid from margin with a 15% post-commission floor (strategy L8); the page never shows commission. Template cloned in under 2 days is objective O7.

### 7.9 T14 Calculator
"Vad kostar din Sydafrikaresa?": inputs (travellers, nights, month, style, extensions), output a range with a clear statement of what is included, no false precision, ends with "Skicka till en rådgivare" prefilled. It is a lead-capture tool; ranges come from product data, not a hard-coded table. Built only after the price basis [A1] is verified.

### 7.10 Other templates (summary)
- T09 Adviser profile: photo, name, regions, languages, years, personal tips, "Kontakta mig" form. Person data requires consent and employment agreement for publication (GDPR).
- T10 Story: before the trip, itinerary used, quote, photos, trip link; consent for names and images recorded.
- T11 Utflykt/Boende: lean templates, factual, with booking-add CTA and links back to trips; no standalone SEO plays beyond the WS04/WS05 plan.
- T12 Resegaranti: explains in plain language, links to the Kammarkollegiet operator lookup, shows the standard information form (Legal supplies text), links from footer, checkout and ad landers (R09).
- T15 Book-a-call: calendar widget (adviser rota, evening/weekend slots in peak), alternatives (phone number, WhatsApp only if the CEO approves and consent flow exists), reminder email with agenda.
- T16: 404 returns true 404 with hubs and search; deposit page per WS15 9.2 (Phase 3, after legal sign-off on terms and payment methods).

## 8. Price, availability and "premium" display rules

### 8.1 Price object (single source of truth)
Every price shown anywhere derives from one object: `currency`, `amount_from`, `per` (person), `basis` (flights included yes/no, which departure airport, dates range), `single_supplement`, `valid_until`, `fx_clause_flag`, `last_verified`. Rules:
- "Från" price always states whether flights are included and the departure city; unknown today (R06). Until the CEO confirms, product pages show "Pris från X kr per person (flyg [ingår/ingår ej])" only after verification; otherwise show "Pris på förfrågan" with an indicative range from the adviser. [ASSUMPTION: some current pages mix bases.]
- Mandatory costs and fees are included in the advertised price (Konsumentverket, R09). Avoid price anchoring that cannot be bought.
- Schema price fields are populated from the same object or omitted.
- A price older than `valid_until` shows "Pris bekräftas av rådgivare" automatically.

### 8.2 Premium made visible
The guided 13-day product at SEK 44.3k sits 15-20% above the group-with-flights cluster (R03 as cited in strategy 6.2). The "Varför kostar det här mer" component (compact, on product pages and the cost guide) shows a side-by-side of what is included in our trip versus what a typical cheaper alternative does not state, using only facts verified by Product. It never names competitors or quotes their prices. [ASSUMPTION: Product can supply a factual inclusions matrix by 15 Jan 2027.]

### 8.3 Value-adds over discounts
Early-booking campaigns use value-adds (for example an excursion or upgrade), not price cuts, in line with strategy 16.1. A "Kampanjbanner" component shows value-add, deadline and terms link; deadlines are real or the banner is removed.

### 8.4 Availability states
See T04. Scarcity ("endast 2 platser kvar") appears only when read live from the source and removed when stale; misleading urgency is a consumer-law risk (Konsumentverket, R09).

## 9. Component library

Built as WordPress blocks / theme partials with design tokens. Each has: purpose, variants, rules. The accessibility and performance acceptance criteria in section 11 apply to all.

| # | Component | Variants | Rules |
|---|---|---|---|
| C1 | Header and navigation | desktop, mobile, sticky CTA | Phone tap-to-call on mobile; focus management; no hover-only |
| C2 | Mobile sticky action bar | two actions | Hides on scroll down; respects cookie banner |
| C3 | Breadcrumb | standard | BreadcrumbList schema; matches URL hierarchy |
| C4 | Hero | image, video-after-interaction, text-only | One LCP image, never lazy, sized; no autoplay carousel |
| C5 | CTA button set | primary, secondary, text | Verbs in Swedish ("Be om offert", "Boka samtal", "Fråga om platser"); 44 px min tap target |
| C6 | Product card | rundresa, reseförslag, utflykt, boende | Image, name, duration, price with basis, state chip, 1 line differentiator; entire card is one link |
| C7 | Departure row/table | list, calendar | Section 7.7; state chips with text, not colour only |
| C8 | Inclusions block | compact, full | Fed from structured fields |
| C9 | Itinerary day accordion | default, expand-all | First three days open; print stylesheet |
| C10 | Route map | static image, interactive | Static fallback; interactive loaded on interaction (speed) |
| C11 | Trust stack | row, sidebar, footer strip | Order: resegaranti, reviews with count, specialist since 2003 (once approved), named adviser, company facts (section 12.2) |
| C12 | Review module | summary, list | Platform name and date visible; only real reviews; link to source (R09: review rules) |
| C13 | Adviser card and strip | card, strip | Name, photo, regions, languages; consented |
| C14 | Guide box "Kort svar" | standard | 40-60 words; answer-engine friendly |
| C15 | Table (data) | responsive | Real `<table>`; horizontal scroll container on mobile with visible hint |
| C16 | FAQ accordion | standard | Native `<details>` where possible; FAQ schema only where eligible |
| C17 | Quote form | short (4 fields, step 1), full (two-step) | Section 10 |
| C18 | Call-booking widget | inline, modal | Keyboard accessible; fallback phone number |
| C19 | Chat/messaging pilot | widget | Pilot only after form v2 is stable (WS15 7.2); speed review required |
| C20 | Banner / campaign strip | value-add, info | Dismissible; real deadline |
| C21 | Month picker / region picker | crawlable links | Plain anchors |
| C22 | "Kombinera med" extension strip | by trip | Raises revenue per traveller (L6); respects package-law design (section 12.3) |
| C23 | Pre-contract info summary | short, full | Section 12.1 |
| C24 | Resegaranti block | short, full | Standard text from Legal |
| C25 | Partner header strip | lockup | Section 7.8 |
| C26 | Newsletter / PDF capture | inline | Explicit consent checkbox, unticked; double opt-in per CRM design (WS13) |
| C27 | Cookie consent banner | standard | Equal-weight accept/reject, no CLS; Consent Mode v2 status to verify |
| C28 | Image and video | responsive | WebP/AVIF; width/height attributes; video loaded after interaction |
| C29 | Alert / notice | travel notice | Used for UD notices and operational changes, owned by Ops |
| C30 | Footer | standard | Legal block mandatory |

Design tokens: colour (WCAG AA contrast validated), type scale (base 17-18 px body on mobile and desktop), spacing, radius, elevation, motion (respect `prefers-reduced-motion`). Tokens published in a single stylesheet and documented in the design system file (Figma or equivalent; tool choice open, [ASSUMPTION: Figma, SEK cost in section 16]).

## 10. Quote-request and call-booking journey (UX specification)

Aligned with WS15 section 6 (form specification v1, Gravity Forms, two steps, Swedish copy); this section defines the UX contract, WS15 owns testing.

### 10.1 Entry points
Sticky header CTA, mobile bar, in-body CTAs, product-specific "Fråga om platser", guide soft CTAs, calculator hand-off, thank-you upsell. All entry points open the same form with context fields prefilled: `source_page`, `trip_id`, `departure_id`, `partner_id`, UTM set.

### 10.2 Form structure
- Step 1 (low friction, 4 fields): önskad månad/period (select, "Vet ej än" allowed), antal resenärer, vad vill du göra (chips: guidad rundresa / skräddarsytt / safari / bröllop / familj / vet ej), e-post or telefon (one required, both allowed).
- Step 2 (adviser context, optional but encouraged with an explanation of why): budgetspann per person (brackets, including "Vet ej, hjälp mig"), barn och åldrar, tidigare resor till Afrika, kommentar, föredragen kontakt (telefon/e-post) and time of day.
- Consent: GDPR information in one sentence with link; marketing consent separate and unticked.
- Progressive profile: after step 1 submit the lead is created, so step 2 abandoners are still contactable (consent covering this to be confirmed by Legal).
- Validation in words, not colour only; error summary at top; no CAPTCHA that blocks users (use honeypot plus rate limit).
- Budget bracket is a funnel-quality signal feeding paid-media value rules (WS06); do not display the bracket as a price promise.

### 10.3 Microcopy (Swedish, ready for WS15 test)
- Heading: "Berätta om din drömresa, så återkommer en av våra Sydafrikarådgivare."
- Sub: "Det är helt förutsättningslöst. Du får ett förslag som utgår från dina önskemål."
- Reply expectation: "Du får svar från din rådgivare [inom en timme på vardagar]" - bracketed text appears only after the SLA is met in practice (speed-to-lead SLA due 20 Nov 2026; strategy 6.3).
- Button: "Skicka förfrågan".
- Thank-you: "Tack för din förfrågan! [Rådgivarens namn] hör av sig till dig. Under tiden kan du ladda ner vår checklista \"Så planerar du din Sydafrikaresa\"." (The checklist does not exist yet; WS05 must produce it before launch, otherwise drop the sentence.)
- Phone line text: "Vill du hellre prata? Ring oss på [nummer], [öppettider]."

### 10.4 Book-a-call
Calendar slots from the adviser rota (evenings/weekends in peak, per strategy 15), 20-minute default, confirmation email with calendar file and "Förbered gärna" agenda; show the adviser name and photo when the slot is bound to a person. No-show reminder 24 hours and 1 hour before.

### 10.5 Handover to deposit
Proposal email links to a single deposit page (Phase 3, section 14): trip summary, total, deposit and balance dates, resegaranti notice, cancellation summary, contact. No account creation. Pre-contract information form delivered before payment (R09). Failed payment recovery within 24 hours by phone.

## 11. Cross-cutting standards

### 11.1 Content model integration
See section 13; templates read from structured fields only.

### 11.2 Accessibility
Target WCAG 2.2 level AA on all templates. Requirements: contrast AA; text resizable to 200% without loss; keyboard operable; visible focus; semantic landmarks; form labels and error messages; alt text with meaningful content or empty for decorative; no information by colour alone; captions for any video; reduced-motion respected; link text descriptive. Audit: automated (axe or Lighthouse) in CI plus a manual keyboard and screen-reader pass per template before Phase 1 release and after Phase 2. The European Accessibility Act (Directive (EU) 2019/882) applies to certain consumer e-commerce services since 28 June 2025 (date from general knowledge, not re-verified in this workstream); whether and how it covers this site must be confirmed by Legal [ASSUMPTION: the sale of package travel online is in scope and the company is above the micro-enterprise exemption with 22 employees; verify exact Swedish implementing rules]. Treat AA as required regardless, because the audience skews older.

### 11.3 Performance budgets (per template, mobile, 75th percentile field data; aligned with WS04 5.1)
LCP at most 2.2 s; INP at most 150 ms; CLS at most 0.05; TTFB at most 0.8 s [ASSUMPTION-T6]. Page weight targets [ASSUMPTION]: Home 1.5 MB, product 1.8 MB, guide 1.2 MB, form page 0.8 MB at first load, JavaScript under 250 KB compressed on money templates. Rules: no render-blocking third-party tags; consent platform loaded with reserved space; Trustindex placeholder with fixed height; fonts self-hosted with `font-display: swap` and subsetting; images responsive with explicit dimensions; Gravity Forms scripts only on form pages (WS04 note). Any new script requires WS04 sign-off.

### 11.4 Older and mixed audiences
Base type 17-18 px, line-height 1.5, tap targets 44 px, contrast AA, no auto-playing carousels, no hover-only interactions, telephone always visible. Validate with 5-8 moderated tests across age bands in Dec 2026 and 6 more in 2027 (WS15 research budget).

### 11.5 Tracking contract
Every component emits events through one data layer, named to match WS15 section 4.2 and WS16 (events: view_item for products, select_departure, start_quote, submit_quote_step1/2, click_phone, book_call, download_pdf, calculator_complete, partner_landing_view). Event names, parameters (including `partner_id`, `trip_id`, `template_id`, `component_id`) and consent behaviour are finalised by the Analytics lead by 30 Nov 2026 (tracking v1). The UX spec adds `template_id` and `component_id` to every event so template-level reporting is possible. No personally identifiable data in the data layer.

### 11.6 Internationalisation and Nordic stub (GL1)
Gap lever GL1 (Norway, Denmark, Finland) needs a scope decision by 31 Mar 2027 and is unfunded until the gate. The spec reserves: language and locale fields in the content model, `hreflang` support in the template head, currency field on the price object, and separate form routing. No Norwegian/Danish/Finnish pages are built before the decision. If approved, a Norwegian pilot on `/no/` with translated top 10 pages is sized at SEK 0.25-0.4 M [ASSUMPTION], decided at the gate, not funded here.

### 11.7 Sister sites and MICE boundary
Cross-links in footer/"Våra andra resmål" only. MICE enquiries go to a dedicated MICE page and form (GL2 test with 3 named accounts by Q2 2027); no MICE content on leisure hubs. Non-South-Africa products appear under "Kombinera med" (WS04 4.7).

### 11.8 Security, privacy and maintenance
Staging behind HTTP auth; plugin and theme update policy monthly with a regression checklist; backup restore tested quarterly; Gravity Forms and plugins on supported versions; personal data minimised; processors listed in the privacy policy (WS13/Legal). The 2020 theme is a security and speed risk if unmaintained (WS04 2.1).

## 12. Legal and trust display requirements (to be confirmed by Legal; sources in R09)

### 12.1 Package Travel Act (Paketreselagen 2018:1217)
Before the contract: organiser identity and contact, price including tax and additional costs, passport/visa and health rules, cancellation conditions, minimum participants and notice date, insurance information, rights and resegaranti. The resegaranti information is given on a special standard form (Konsumentverket). UX consequences: product pages carry a "Viktig information före bokning" summary (C23) with a link to the full form; the proposal email and deposit page repeat it; PDFs carry it.

### 12.2 Trust stack placement (every money page)
Order and content: (1) resegaranti statement with link to the Kammarkollegiet lookup of operators with a guarantee (check the company's own entry first), (2) review score with count, platform, date (only verified figures; target 100+ Trustpilot at 4.5+ by 31 Dec 2027 per strategy section 15), (3) "Sydafrikaspecialist sedan 2003" (only after the claims register approves it), (4) named adviser and photo, (5) company facts (organisation number, address, contact). Layout rules: no more than one trust row in the viewport at a time; do not push the primary CTA below the fold on mobile.

### 12.3 Package-law design of upsell flows
Extensions and add-ons presented after the booking decision can create a linked travel arrangement or a package; the design of "Kombinera med" and in-flow offers must be reviewed by Legal before launch (strategy section 15, legal review by 31 Mar 2027).

### 12.4 Claims register
Claims appear on the site only if they are listed as "approved" in a shared claims register owned by Legal/Ops and the Head of Marketing. Initial register: Specialist sedan 2003 (approved when founding date is evidenced), resegaranti (approved after listing check), "Skandinaviens största" (not approved), "svarar inom en timme" (approved only when SLA data shows at least 90% compliance), "24/7 lokal närvaro" (not approved; use "jourtelefon under resan"), "Sydafrika är säkert" (never).

### 12.5 Cookies and consent
Banner with equal-weight accept and reject, granular settings, no pre-ticked boxes; Consent Mode v2 verified; design so the banner has reserved space and does not cause layout shift. Tag firing logic in WS16.

## 13. Content model (WordPress custom post types and fields)

Build with custom post types and Advanced Custom Fields (or equivalent) so that content is structured, validated and reusable. [ASSUMPTION: existing types listed in R06 map to those below; Phase 0 audit confirms or revises.] Field names in English, labels in Swedish.

| Entity (CPT) | Key fields | Relations | Notes |
|---|---|---|---|
| Rundresa | title, slug, summary (max 160 chars), duration_days, guide_type (svensktalande/engelsk/ingen), group_size_min/max, inclusions[] (typed list), exclusions[], itinerary_days[] (title, text, overnight, meals), hero_image, gallery, map_route, difficulty, best_months[], segments[], price_object, status, published_on, last_reviewed | departures[], accommodations[], excursions[], guides, adviser(s), stories, guides_articles | Status values: draft, active, seasonal, withdrawn |
| Reseförslag | as Rundresa minus group fields, plus customisation_options[] and "typical_budget_bracket" | accommodations[], excursions[], adviser | Example itineraries; not bookable as-is |
| Avgång (departure) | trip_ref, start_date, end_date, departure_airport, flights_included, price_object, seats_state, min_participants, notice_date, fx_policy_flag, guide_ref | Rundresa | Not a public URL per date (WS04 4.3) |
| Utflykt | name, destination_ref, duration, price_object, included, season, age_limit, booking_note | Destination, Rundresa | 13 new pages from Aug-Sep 2026 |
| Boende | name, region, category, room_types, highlights, season_notes, images, supplier_ref (internal only), allocation_status (internal only) | Destination | Supplier and allocation fields never rendered publicly |
| Destination | name, type (region/city/park/country), lead, best_months, climate_table, travel_time_info, safety_note_link | trips, accommodations, guides | Hubs in IA |
| Guide article | title, short_answer, body blocks, data_tables, author_adviser, reviewed_on, next_review_due, related_trips, schema_type | Destination, Rundresa | `reviewed_on` visible; stale rule: review at least annually |
| Reseberättelse | title, traveller_display_name (consented), trip_ref, quote, images, consent_record_id | Rundresa, adviser | Consent evidence stored internally |
| Rådgivare | name, photo, role, regions, languages, years_of_experience (only if verified), bio, contact_options, calendar_id | stories, trips | Consent and employment agreement for publication |
| Omdöme (review) | source, score, count, date, text, trip_ref | Rundresa | Imported from platform widget or API; no editing of text |
| Tema/segment | name, lead, filters, featured_trips | Rundresa, Reseförslag | familjeresa, bröllopsresa, golf, jubileum, lyxresa |
| FAQ item | question, answer, topics[], reviewed_on | any | Reusable blocks |
| Shared block | type (resegaranti, pre-contract, visa/vaccination, insurance, terms summary), text, owner, reviewed_on, version | pages | One edit updates everywhere; Legal owns text |
| Partner | name, logo, partner_id, benefit_text, trips[], utm_defaults, commission_class (internal) | Landing page | Commission never rendered |
| Campaign/Banner | message, value_add, start, end, terms_link, targets | pages | Auto-expires |
| Price object (embedded) | amount_from, currency, per, basis, single_supplement, valid_until, fx_clause_flag, last_verified, verified_by | any priced entity | Section 8.1 |

Editorial workflow: roles (Editor, Product owner, Legal reviewer, Publisher); status flow draft - review - legal check (if price/claims/guarantee text changed) - publish; mandatory fields block publishing; "last_reviewed" older than 12 months flags the page in a weekly report; withdrawn products follow the redirect rules of WS04 4.4. Migration: map existing posts and meta to the new fields by script; run on staging; reconcile counts; do not change URLs.

## 14. Timeline

Dates assume programme start 2 Nov 2026 and a Gate 0 on 15 Dec 2026 (strategy 16.1). Phase 1 aims to have priority hubs and the form live before the Jan-Feb peak (strategy 15: priority hubs by 31 Jan 2027).

| Window | Phase | Deliverables | Exit criterion |
|---|---|---|---|
| 2 Nov - 2 Dec 2026 | Phase 0: audit and baseline | Template and content inventory; 5-question heuristic review of top 20 landing pages; analytics baseline requests; IA sign-off draft (with WS04, crawl sign-off 30 Nov); design tokens v0; legal claims register v1; first usability round (5 sessions) | Baseline pack inputs delivered; priority template list confirmed |
| 3 Dec 2026 - 31 Jan 2027 | Phase 1a: foundation | Note: the 6 SEO hubs the strategy requires by 31 Dec 2026 are published on the current theme and migrated to T05 later (no URL change); templates below are built on staging and go live per page, not sitewide. Design system v1 (tokens, 30 components in Figma), staging, data layer spec implemented, T01 form v2, T15 book-a-call, T05 hub (3 priority hubs), T02/T03 product templates (3 pilot products), T12 resegaranti page, 404 | Pilot templates pass AA automated checks and speed budget; release checklist passed |
| 1 Feb - 31 Mar 2027 | Phase 1b: roll-out of money templates | All rundresor/reseförslag on new templates; T04 Avgångar (after FX policy, 20 Nov 2026, and legal terms); T06 guides (cost, best time, safety); content model migration; trust stack everywhere; shared blocks | 100% of money templates compliant; O1 and O5 met by 31 Mar 2027 |
| 1 Apr - 30 Jun 2027 | Phase 2: scale and enrich | T08 Home (redesign informed by baseline and tests), T07 month spokes, T09/T10/T11, T13 partner template, T14 calculator, a11y manual audit; Gate 2 review (30 Jun 2027) | WCAG 2.2 AA clean on money templates; O7 met |
| 1 Jul - 31 Dec 2027 | Phase 3: optimise | T16 deposit page (after legal and payment decisions), chat pilot decision, test-driven iterations with WS15, localisation stub readiness for GL1 if approved, performance tuning | Visitor-to-enquiry gain per O2; evidence pack for Gate 3 (31 Oct 2027) |
| 2028 | Phase 4: sustain and extend | Quarterly UX review, template refresh from data, Nordic locale build only if approved, EU Directive 2026/1024 preparation by Q2 2028 (strategy 15) | Core Web Vitals pass; no ranking regressions |

Release cadence: two-week sprints with a freeze during campaign peaks (the early-booking campaign 1 Dec 2026 and the January-February peak: only critical fixes). Phase 1a overlaps that window, so the freeze applies to sitewide changes (header, navigation, global form, tags); the 3 pilot product templates and form v2 go live one page or route at a time, outside campaign launch days, with SEO sign-off, a rollback plan and the old form kept as a fallback for 14 days. Every release follows the WS04 checklist and has a rollback plan.

## 15. Owners (by role) and decision rights

| Role | Responsibility |
|---|---|
| Programme owner (appointed by CEO by 6 Nov 2026) | Approves scope, priorities and gates; arbitrates between WS04, WS15, WS26 conflicts |
| Web/UX lead (new or existing; if none, interim by the SEO/Web lead, WS24 hiring) | Owns this spec, design system, backlog, release plan |
| UX/UI designer (contract, about 17 days or 136 hours in 2027, matching section 16) [ASSUMPTION] | Design system, templates, usability tests |
| Web developer(s) (internal/contract) | Theme and block build, content model, performance |
| SEO lead | URL map, internal linking, schema, release SEO checklist |
| CRM manager + Analytics lead | Form integrations, data layer, consent, dashboards |
| Head of Sales | Form fields and adviser context, SLA, call rota, adviser profiles |
| Head of Product | Inclusions facts, departure data, price object accuracy, guide profiles |
| Legal / Ops | Claims register, pre-contract info, resegaranti text, consent evidence, accessibility legal check |
| Head of Marketing | Campaign and partner landing pages, copy approval |
| CFO | Budget reconciliation across WS04/WS15/WS26; deposit page payment decisions |
| CEO | Nordic scope decision, brand risk claims, final approvals |

Decisions: new component or template needs a one-page proposal with evidence; deviations from the speed budget need SEO lead and programme owner sign-off.

## 16. Budget (SEK) [ASSUMPTION - planning estimates, not quotes]

Rates: designer SEK 1,100/hour [ASSUMPTION], developer SEK 950/hour (same as WS15). This budget is gross for the UX scope. **It overlaps with WS15 web-developer hours (SEK 38k Q4 2026, 266k 2027, 190k 2028) and with the technology line of the strategy (0.6 MSEK 2027, 0.3 MSEK 2028)**, which also funds tracking and CRM builds. The CFO must reconcile so nothing is counted twice; the net column shows the amount not already in WS15.

| Line | Q4 2026 | 2027 | 2028 | Basis |
|---|---|---|---|---|
| UX audit, IA validation, heuristic review | 40,000 | 0 | 0 | About 6 days at SEK 6,700 |
| Design system and template design (UX/UI) | 90,000 | 150,000 | 80,000 | About 82 / 136 / 73 hours at SEK 1,100 |
| Front-end and CMS development (content model, templates, components) | 123,500 | 570,000 | 304,000 | 130 / 600 / 320 hours at SEK 950; includes WS15 CRO hours |
| Content structuring, copy templates, photography and short video for trust blocks | 25,000 | 120,000 | 80,000 | Adviser portraits, guide intros, itinerary visuals; paid from content lines if available |
| Accessibility audit and QA (manual a11y, cross-device, mystery shop) | 0 | 40,000 | 25,000 | External specialist |
| Tooling (design tool seats, monitoring, a11y/visual regression) | 0 | 30,000 | 30,000 | |
| Subtotal | 278,500 | 910,000 | 519,000 | |
| Contingency 10% | 27,850 | 91,000 | 51,900 | |
| **Total gross** | **306,350** | **1,001,000** | **570,900** | About 2.1% of 48 MSEK (2027) and 0.9% of 64.4 MSEK (2028) |
| Less: already in WS15 (web developer hours) | -38,000 | -266,000 | -190,000 | |
| **Net incremental to WS15** | **268,350** | **735,000** | **380,900** | Cumulative net SEK 1,384,250 |

Three-year gross total SEK 1,878,250. Funding proposal [ASSUMPTION for CFO]: Q4 2026 from the technology and CRM lines; 2027 split between the technology line (0.6 MSEK, shared), content line (WS05, photography and copy) and a reallocation of about SEK 0.3 M from lower-priority paid media if no other source; 2028 release at Gate 3 (31 Oct 2027, when the strategy releases the 2028 budget) only if Phase 1 KPIs improved. The strategy's total incremental cost is 3.3 MSEK in 2027, so SEK 0.74 M net is material (about 22% of it). Effect on the strategy's loss budget: if the net amount is additional to the strategy's technology line (0.6 MSEK in 2027, 0.3 in 2028, which also funds CRM, form and tracking), the plan-case 2027 net contribution moves from about -1.7 to about -2.4 MSEK against the -3.0 MSEK cap (G10), and 2028 from -2.2 to about -2.6. The 120k/80k content line may also overlap with the strategy's SEO and content line (0.7/0.8 MSEK) and must be reconciled by the CFO; if the CFO cannot absorb it, cut order: (1) T14 calculator, (2) T13 variants, (3) interactive map, (4) chat pilot, (5) Home redesign until evidence exists. Phase 1 templates are not cut.

Return check (arithmetic, not forecast): the WS15 sensitivity is that each +0.1 pp visitor-to-enquiry on about 150k qualified sessions gives about 150 extra enquiries a year; at a blended new-traffic quote rate of 80% and close of 18%, that is about 22 bookings; at about SEK 101k per booking this is about 2.2 MSEK turnover, about SEK 0.44 M gross margin at 20% [ASSUMPTION A7]. Net cost of SEK 0.735 M in 2027 is therefore recovered by roughly +0.17 pp visitor-to-enquiry on gross margin terms, before considering existing-flow effects. This is a break-even marker, not a promise, and it is not additive to the strategy bridge (section 2). The 2027 spend mainly produces 2028 departures, so the payback falls in 2028.

## 17. KPIs and reporting

Reported weekly in the dashboard built by WS16; template-level via `template_id`.

| KPI | Baseline | Target 31 Mar 2027 | Target 31 Dec 2027 | Target 31 Dec 2028 |
|---|---|---|---|---|
| Visitor-to-enquiry (qualified sessions) | Unknown, baseline 31 Jan 2027 | +0.1 pp | +0.3 pp | +0.5 pp |
| Quote form completion (step 1 start to submit) | Unknown | +10% relative | +20% relative | +25% relative [ASSUMPTION] |
| Enquiries with budget bracket, month and travellers filled | Unknown | 75% | 85% | 85% |
| Product page to enquiry rate | Unknown | Baseline measured | +15% relative | +20% relative |
| Guide soft-conversion rate | Unknown | Baseline | 2.5% | 3% |
| Core Web Vitals pass (LCP, INP, CLS) on money templates | Unknown | 75% | 90% | 90% |
| WCAG 2.2 AA critical issues on money templates | Unknown | 0 critical in automated checks | 0 critical in manual audit (first manual audit complete by 30 Jun 2027, per O6) | 0 |
| Pages meeting trust-stack standard | Unknown | 100% | 100% | 100% |
| Price consistency errors (page vs feed vs ad) | Unknown | 0 | 0 | 0 |
| Time to launch a partner/campaign landing page | Unknown | n/a | 2 days (met by 30 Jun 2027, per O7) | 1 day |
| Website qualified sessions vs strategy requirement (134-223k in 2028) | Unknown, baseline 15 Dec 2026 | Report | On track to 2028 requirement (about 70-75% of it in 2027 if enquiries follow the 2,440 plan) [ASSUMPTION] | 134-223k |
| Enquiries from the website vs funnel plan, split existing flow vs new traffic | Unknown | Report | About 2,440 total (2,086 existing, 354 new) | About 3,350 (2,148 existing, 1,200 new) |
| Quote-to-booking on site-originated enquiries (guardrail) | Unknown | Report | New traffic at least 18%, existing at least 26% | New traffic at least 18%, existing 27% |
| Step 1 to step 2 completion and phone-click rate | Unknown | Baseline | Report; used as diagnostic | Report |
| Booked-call show rate | Unknown | Baseline | At least 70% [ASSUMPTION] | At least 75% [ASSUMPTION] |
| Mobile share of enquiries | Unknown | Report only | Report only | Report only |
| Release regressions (ranking-page 404s, broken forms) | n/a | 0 | 0 | 0 |

All targets are placeholders and recalibrated on 15 Dec 2026 and 31 Jan 2027 with real baselines. A template change is deemed successful only if enquiry quality (share reaching quote and booking) does not fall: guardrail on close rate by source (WS14, WS15 section 5.4).

## 18. Dependencies

| Dependency | From | Needed by | Impact if late |
|---|---|---|---|
| Crawl and URL taxonomy sign-off | WS04 | 30 Nov 2026 | IA changes risk URL churn |
| Tracking v1 and event spec | WS15/WS16, CRM manager | 30 Nov 2026 | No baselines; templates untestable |
| Form v2 specification | WS15 | 15 Dec 2026 | T01 delayed |
| Speed-to-lead SLA live | Head of Sales | 20 Nov 2026 | Cannot show response-time promise |
| FX policy and ZAR clause | CFO | 20 Nov 2026 | T04 cannot show fixed prices |
| Price basis confirmation (flights in "från"?) | Head of Product / CEO | 15 Dec 2026 | Price object cannot launch; legal exposure |
| Claims register and resegaranti text | Legal / Ops | 15 Jan 2027 | Trust stack incomplete |
| Reviews programme (volume, platform) | CRM manager | 31 Dec 2026 | Weak social proof; can launch with adviser and guarantee only |
| Adviser and guide consent and photos | Head of Sales, HR | 31 Jan 2027 | Named adviser block unavailable |
| Staging and deployment pipeline | Web developer / host | 15 Nov 2026 | Release risk rises |
| Guide and content briefs | WS05 | Rolling | Guide templates empty |
| Partner programme definition | WS19 | 30 Jun 2027 | T13 specification incomplete |
| Nordic scope decision | CEO | 31 Mar 2027 | Locale work not started (GL1) |
| Payment provider decision and terms | CFO / Legal | 30 Sep 2027 | Deposit page delayed |

## 19. Risks and mitigations

| # | Risk | Likelihood / impact | Mitigation | Owner |
|---|---|---|---|---|
| R1 | Redesign damages rankings (URL change, content loss, JS rendering) | Medium / High | Live URLs preserved; staged roll-out template by template; WS04 release checklist; Search Console monitoring; rollback plan | SEO lead |
| R2 | Speed degrades (more components, tags, media) | Medium / High | Performance budgets enforced in CI; third-party tag review; field-data monitoring | Web developer |
| R3 | Peak season freeze collides with launch dates | Medium / Medium | Pilot templates and priority hubs before 31 Jan 2027 (full roll-out by 31 Mar); freeze rules; pilot on 3 products first | Programme owner |
| R4 | Prices or availability inconsistent or misleading (legal) | Medium / High | Price object; automatic expiry; Legal review; mystery shop | Product, Legal |
| R5 | Unsubstantiated claims (24/7, "svar inom en timme", superlatives) | Medium / High | Claims register; copy approval step | Legal, Marketing |
| R6 | Accessibility failures; legal exposure | Medium / Medium | AA target, audits, component-level criteria | Web/UX lead |
| R7 | Design system adoption fails (too many one-off pages) | Medium / Medium | Template-first builds; page-builder limits; editor training | Web/UX lead |
| R8 | Budget overlap with WS15/WS04 causes double counting or shortfall | High / Medium | CFO reconciliation by 15 Dec 2026; net view in section 16 | CFO |
| R9 | No internal capacity (single developer) | High / High | Contract partner on retainer; template priority; cut order in section 16 | Programme owner |
| R10 | Low traffic makes tests inconclusive, so redesign is driven by opinion | High / Medium | Use qualitative research; larger changes judged by directional evidence and guardrails; avoid micro-tests (WS15 5.1) | WS15 lead |
| R11 | Consent/privacy issues from form, chat, profiles | Low-Medium / High | Legal review; consent records; minimised data | Legal |
| R12 | Plugin or theme vulnerability on legacy stack | Medium / High | Update policy; backup tests; monitoring; WAF | Web developer |
| R13 | Staff photos/names withheld; trust block weaker | Medium / Low | Fallback to team page without names; alternative proof | Head of Sales |
| R14 | Content model migration errors | Medium / Medium | Script on staging, reconcile counts, parallel run | Web developer |
| R15 | Demand shortfall (market down) makes UX gains invisible | Medium / Medium | Report conversion rates not only volumes; segment by source | Analytics lead |

## 20. Assumptions register (replace with company data)

| ID | Assumption | Rationale | How to replace |
|---|---|---|---|
| W1 | The site stays on WordPress with the current theme as a base | WS04 decision rule: no replatform without evidence | Platform audit by 30 Nov 2026 |
| W2 | Existing CPTs in R06 map to the entities in section 13 | Public content inventory only | Phase 0 audit of admin |
| W3 | Developer SEK 950/h and designer SEK 1,100/h | WS15 uses 950; designer rate typical Swedish freelance range, not sourced | Quotes by 30 Nov 2026 |
| W4 | Hours: 130 (Q4), 600 (2027), 320 (2028) | Estimated from template count and component count; no benchmark | Re-estimate after Phase 0 |
| W5 | "Från" prices currently may mix flight bases | R06 says it is unknown whether flights are included | CEO / Head of Product by 15 Dec 2026 |
| W6 | Customer base skews 45+ | Long-haul, high-ticket leisure; not measured | GA4 age bands, CRM data |
| W7 | KPI targets in section 17 (+0.1/0.3/0.5 pp; 75% completeness; 2.5% guide conversion) | Placeholders from R11 tier-C ranges | Replace on 31 Jan 2027 with baselines |
| W8 | Page weight budgets in 11.3 | Typical targets for performance; not tested on this site | Lighthouse and CrUX baseline in Phase 0 |
| W9 | Figma (or equivalent) is the design tool | Common practice | Team preference |
| W10 | European Accessibility Act applies to this site; micro-enterprise exemption does not (22 staff) | General understanding, Swedish rules not verified | Legal opinion by 31 Jan 2027 |
| W11 | Product can supply a factual inclusions matrix versus alternatives by 15 Jan 2027 | Needed for "Varför kostar det mer" | Head of Product |
| W12 | Consent for acting on step 1 form data covers contacting the lead | Legal basis and wording unverified | Legal review of form text |
| W13 | A Norwegian pilot costs SEK 0.25-0.4 M | Analogy to translating 10 pages plus dev; no quote | Gate decision, quotes |
| W14 | Return arithmetic uses 20% gross margin (A7), SEK 101k per booking, 150k sessions | Strategy sections 7 and 10 placeholders | CFO and analytics data |
| W15 | Adviser and guide bios can be published with consent | Standard practice; not confirmed | HR/Sales confirm |
| W17 | 70-75% of 2028 sessions and 70%/75% call show rates in section 17 | Placeholders for pacing; no benchmark | Replace with baseline data |
| W16 | WCAG 2.2, Core Web Vitals thresholds as in WS04 and well-known public standards | Not re-fetched in this workstream | Cite when audited |

## 21. First 30 days (2 Nov - 2 Dec 2026)

| By | Action | Owner |
|---|---|---|
| 6 Nov | Name the Web/UX lead (interim SEO/Web lead) and agree that WS04, WS15 and WS26 share one backlog and one release calendar | Programme owner |
| 6 Nov | Data requests issued: GA4/GSC access, form completion data, CMS admin access, theme and plugin list, hosting details | Web/UX lead |
| 9 Nov | Lock the scope boundaries in this spec (no replatform, no booking engine, no Nordic build) and circulate it to WS04, WS05, WS13, WS15, WS16 owners for comment | Web/UX lead |
| 13 Nov | Template and component inventory complete; list of live templates mapped to T01-T16 | Web developer |
| 16 Nov | Contract designer and (if needed) developer partner; confirm rates and availability for Dec-Jan | Programme owner |
| 18 Nov | Heuristic review of top 20 landing pages against the five-question test and trust-stack standard; findings list | Web/UX lead + CRO partner |
| 20 Nov | Confirm FX policy and speed-to-lead SLA dates feed T04 and form microcopy | CFO / Head of Sales |
| 23 Nov | First usability round: 5 moderated sessions on quote journey and a product page, mixed ages | UX designer |
| 27 Nov | Claims register v1 and resegaranti text request to Legal; price object field list agreed with Head of Product | Legal / Product |
| 30 Nov | IA sign-off with WS04 (URL taxonomy); data layer spec with Analytics lead; staging environment ready | SEO lead / Analytics lead |
| 2 Dec | Phase 0 report: baseline, priorities, final Phase 1 scope and revised estimate; design tokens v0 and component list v1 in the design tool | Web/UX lead |

Stop condition for the first 30 days: if the platform audit reveals that the theme cannot support component-level templates, escalate to the programme owner with a replatform-versus-refactor options note (WS04 9.4) before any Phase 1 spend beyond SEK 100k.

## 22. Sources and notes

Internal: `/home/user/MICE-Group/docs/00-strategy.md` (sections 6, 10, 15, 16); `/home/user/MICE-Group/docs/workstreams/04-seo-technical.md` (sections 2.1, 4, 5, 9); `/home/user/MICE-Group/docs/workstreams/15-conversion-cro.md` (sections 6, 8, 9, 16); `/home/user/MICE-Group/docs/research/06-seo-keywords.md`; `/home/user/MICE-Group/docs/research/09-regulation-trust.md`; `/home/user/MICE-Group/docs/research/11-conversion-crm.md`.

External sources as cited in those files:
- Konsumentverket, Paketreselagen (consumer): https://www.konsumentverket.se/lagar/paketreselagen-konsument/ ; business page: https://www.konsumentverket.se/marknadsratt-foretag/resor-for-foretag/
- Kammarkollegiet, operators with resegaranti: https://www.kammarkollegiet.se/vara-tjanster/resegaranti/hitta-reseaktorer-med-resegaranti
- Konsumentverket, misleading price information: https://www.konsumentverket.se/konsumentratt/felaktig-prisinformation/
- Riksbank payment habits (for deposit step): https://www.riksbank.se/en-gb/payments--cash/payments-in-sweden/payments-report-2026/developments-in-the-payments-market/payment-habits-in-sweden/
- Conversion benchmarks (tier C, directional): https://resources.rework.com/libraries/travel-tour-growth/booking-conversion-metrics

Not independently verified in this workstream: WCAG 2.2 and Core Web Vitals thresholds beyond what WS04 states, the European Accessibility Act applicability to this business, and any competitor UX. These should be checked when the audit starts.
