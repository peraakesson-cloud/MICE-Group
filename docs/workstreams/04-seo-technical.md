# 04 - Technical SEO, site architecture, Core Web Vitals, structured data and migration risk for sydafrikaresor.se

Status: Draft v2 (independent review applied 2026-11-03) for CEO review | Prepared 2026-11-02 | Owner role: SEO/Web lead (accountable), with Web developer (agency or in-house), Analytics lead, Head of Marketing
Inherits: /docs/00-strategy.md (lever L4 SEO/content/AI-search: +0.2 MSEK in 2027, +1.5 MSEK in 2028, evidence grade B; SEO and content line SEK 0.10 M Q4 2026, 0.70 M 2027, 0.80 M 2028; technology builds line 0.6 M 2027, 0.3 M 2028 "to be quoted"; hubs live by 31 Jan 2027; Gate 0 on 15 Dec 2026). Content strategy (what to write) is the sibling SEO-content workstream. This plan owns the container: crawlability, indexation, architecture, speed, markup, measurement integrity and the safety of any change to the site.
Evidence tags: R01-R12 = /docs/research files; RT-D/S/E = /docs/review files; [A#] = strategy assumption register; [OBSERVED] = fetched from sydafrikaresor.se on 2026-11-02 for this plan; [ASSUMPTION-T#] = introduced here (section 13). We have no internal data: GSC, GA4, server logs and hosting details are all unseen. Plans in English, customer-facing copy (page titles, schema text) in Swedish.

---

## 1. Purpose, scope and objectives

The strategy needs L4 to deliver +1.5 MSEK by 2028, mostly on late-2028 and 2029 departures, because informational long-tail content takes 4-9 months to mature (R06, RT-D). That payout is only possible if (a) new pages are discovered, indexed and fast, (b) the current #1 rankings for head terms are never put at risk, and (c) organic enquiries are measured to the order book with margin, so the CEO can see what SEO is worth. Technical SEO is therefore mainly a protection and measurement job in 2027, and a scaling job in 2028.

In scope: crawl/index control, URL and information architecture, internal linking templates, Core Web Vitals, structured data, rendering, consent/tracking integrity for organic measurement, AI-search readiness (technical side), international/Nordic readiness (GL1), sister-site boundaries (Söderhavsresor, MICE), migration and release governance, monitoring.
Out of scope: editorial plan and copy (content workstream), link building/PR (SoMe/PR workstream), paid landing page tests (ads workstream) except where they share templates, CRM flows (CRM workstream).

| # | Objective | Target | Date | Link |
|---|---|---|---|---|
| O1 | Establish a trustworthy baseline: GSC (16 months), GA4, crawl, CrUX, log sample, all stored in one dashboard | Baseline pack delivered; branded vs non-brand split known | 15 Dec 2026 (Gate 0) | Gate 0; R06 s9 |
| O2 | Zero unplanned loss of head-term rankings ("resa till Sydafrika", "rundresa Sydafrika", "familjeresa Sydafrika", FAQ cluster) | No more than 1 position drop sustained over 14 days on the 25 protected head keywords, any release | Continuous from 1 Dec 2026 | L4 protects existing flow, not only new |
| O3 | Index health of every money page | 100% of canonical product, destination and hub pages indexed; "Crawled - not indexed" and "Discovered - not indexed" below 5% of submitted URLs [ASSUMPTION-T1] | 31 Jan 2027 | Hubs live before Jan-Feb peak |
| O4 | Core Web Vitals pass on mobile for the templates that earn and convert | At least 90% of URLs in each template group rated "Good" for LCP, INP and CLS in GSC/CrUX (Google thresholds: LCP 2.5 s, INP 200 ms, CLS 0.1) [ASSUMPTION-T2 on the 90% share] | 31 Mar 2027 (plan milestone and Gate 1 evidence; CWV is not a strategy Gate 1 pass condition) | Conversion and rank |
| O5 | Architecture supports the content programme without cannibalisation | Agreed URL taxonomy, canonical rules and internal-link templates signed off before the first 6 hubs publish | 30 Nov 2026 | First 6 hubs by 31 Dec 2026 |
| O6 | Structured data valid and useful, not decorative | 100% of eligible templates validate with zero errors; no markup that is not visible on the page | 28 Feb 2027 | R06 s7 item 11 |
| O7 | Organic enquiries and bookings measured to value and margin | Organic landing page to enquiry to booking joined in CRM; offline conversion import live | 31 Jan 2027 (with tracking v2) | Section 11 of strategy; north star |
| O8 | No migration-class incident | Every release with SEO risk passes the release checklist (section 9); zero un-redirected URL deletions | Continuous | Risk R-T1 |
| O9 | Organic non-brand enquiries trending to what L4 needs | Bridge-implied increment of about 14 enquiries in 2027 and about 105-115 in 2028 (section 11.3, derived from the strategy bridge); % target set after baseline, placeholder +25% on the same months of 2026 [ASSUMPTION-T3] | Read 31 Dec 2027 | L4 +0.2 (2027), +1.5 (2028) |

---

## 2. Starting point

### 2.1 What was observed on the live site (2026-11-02, public fetch only) [OBSERVED]

| Item | Observation | Implication |
|---|---|---|
| Platform | WordPress (generator tag "WordPress 7.0.8"), custom theme folder `saso2020` | A 2020-vintage custom theme. Performance and markup quality depend on that theme; plugin and theme upkeep is a security and speed risk. Not necessarily a reason to replatform |
| SEO plugin | Yoast SEO v28.1 emits canonical, Open Graph and a JSON-LD graph | Good base; configuration quality unknown |
| Structured data on homepage | JSON-LD graph containing WebSite (with SearchAction), WebPage, Organization, ImageObject, BreadcrumbList | Foundation exists. SearchAction implies an on-site search URL pattern that may create thin indexable results; check |
| Canonical | Homepage self-canonical to https://www.sydafrikaresor.se/ (www, https) | Host preference is www; verify non-www and http redirect cleanly (to test) |
| robots.txt | `Disallow: /wp-admin/`, `Allow: /wp-admin/admin-ajax.php`, `Sitemap: https://www.sydafrikaresor.se/sitemap_index.xml`. No other rules | Nothing blocks faceted/search/parameter URLs or AI crawlers. Default WordPress setup |
| Sitemaps | Yoast index with post, page, info-categories sitemaps (R06) | Verify custom post types (rundresor, reseförslag, utflykter, boenden, reseberättelser, avgångar) are all in sitemaps and expired departures are not |
| Images | WebP in use (88 references), lazy loading (64), `fetchpriority` used (5), Smush Pro plugin present | Image pipeline is already modernised. Verify the LCP image is not lazy-loaded and is correctly sized |
| Forms | Gravity Forms (7 asset references) | Quote/enquiry forms are Gravity Forms. They load scripts site-wide if not restricted; also the tracking join point for O7 |
| Consent | Cookie Law Info (CookieYes-family) plugin | Consent banner can block GA4/Ads tags and delay LCP. Consent Mode v2 status unknown |
| Third-party tags (R06) | GA, Microsoft Clarity, Facebook pixel, Bing UET, Google Ads, Trustindex widget | Tag weight is a likely INP/LCP cost; Trustindex widget can be a CLS source |
| Content inventory (R06) | Page types: rundresor, reseförslag, destination pages, utflykter (about 13 new, Aug-Sep 2026), boenden, reseberättelser (about 40), resespecialister, theme pages, FAQ, hyrbilar, presentkort, förlängningar, avgångar, katalog; only about 6 tips articles | Many similar commercial templates: high duplicate/cannibalisation risk (section 4.4) |
| Sister brands | Söderhavsresor and MICE are linked from the site (R06) | Boundary rules needed (section 4.7) |

### 2.2 What is unknown (must be obtained, in order of importance)
1. GSC property access (16 months of queries/pages, index coverage, CWV report, manual actions, links) and whether the domain property and URL-prefix property both exist. [unknown]
2. GA4 configuration, conversion events, and whether phone, e-mail and offline bookings are tied to sessions. [unknown]
3. Hosting, CDN, caching, PHP version, TTFB, server logs (for crawl-budget and bot analysis), who can deploy and how (staging? version control?). [unknown]
4. Whether a staging environment exists and whether it is blocked from indexing. [unknown]
5. Number of indexable URLs, parameter patterns, existing redirect map, past migrations or domain history. [unknown]
6. Which tags fire before consent and Consent Mode v2 status. [unknown]
7. Whether prices on the site are generated from a booking/pricing system (feed, API) or edited by hand in WordPress. [unknown]
8. Current review volume and source for aggregate rating (Trustpilot 2.7 on 8 reviews per R03; Google via Trustindex). [partially known]

---

## 3. Approach (principles)

1. **Protect before you build.** The site already holds #1 for head terms (R06). In the first 90 days nothing ships that has not been crawled on staging and compared to a pre-change snapshot. A bad release costs more in lost enquiries than months of content gains.
2. **Measure before you optimise.** No speed or architecture project starts until baselines exist (Gate 0). Targets in this plan are placeholders until then and are re-set on 15 Dec 2026.
3. **Fix templates, not pages.** With roughly 100+ programme pages and growing, one template fix scales; page-by-page effort does not.
4. **Optimise WordPress first; replatform only on evidence.** A headless or new CMS rebuild is the highest-risk SEO event possible and competes for the same developer hours as the quote form and CRM builds. Decision rule in section 9.4.
5. **Technical SEO serves margin and incrementality.** Pages are prioritised by the order book's margin and the conversion data, not by traffic alone (north star in the strategy). A page that attracts DIY flight-hunters is deprioritised (R06 cluster 11).
6. **Search is no longer only Google blue links.** Keep the site machine-readable, fast, factual and citable for AI-search answers (section 8), without chasing unproven tricks.

---

## 4. Site architecture

### 4.1 Target information architecture (proposal, to be validated against GSC data)
The principle is a four-level hub-and-spoke model that mirrors how Swedes search (R06 clusters) and separates commercial from informational intent.

| Level | Purpose | Example URL pattern (Swedish, lower case, hyphens) | Template |
|---|---|---|---|
| L0 Home | Brand, trust, entry to all hubs | `/` | Home |
| L1 Commercial hubs | Money clusters 2, 3, 4, 8 | `/rundresor/`, `/reseforslag/` (individually tailored), `/safari-sydafrika/`, `/kapstaden/`, `/garden-route/`, `/teman/familjeresa/`, `/teman/brollopsresa/` | Hub with filters pre-rendered as static sections |
| L1 Guide hubs | Informational clusters 5, 6, 7, 10 | `/guide/basta-tiden-att-resa-till-sydafrika/`, `/guide/vad-kostar-en-resa-till-sydafrika/`, `/guide/ar-sydafrika-sakert/`, `/guide/sydafrika-pa-egen-hand-eller-rundresa/` | Long-form guide |
| L2 Spokes | Month, region, itinerary, activity pages | `/guide/basta-tiden-att-resa-till-sydafrika/januari/`, `/resor/sydafrika-14-dagar/` | Guide / itinerary |
| L3 Product | The bookable thing | `/rundresor/<slug>/`, `/reseforslag/<slug>/`, `/utflykter/<destination>/<slug>/`, `/boenden/<slug>/` | Product |
| Trust | Reviews, adviser bios, stories, guarantee | `/om-oss/`, `/resespecialister/`, `/reseberattelser/`, `/resegaranti/` | Trust |

Rules:
- **Do not rename or move existing URLs that rank** unless the audit shows a structural defect. New hubs get new URLs; existing ranking pages are enriched in place. Where the proposed pattern differs from the live one, the live URL wins and the pattern is applied to new pages only. Final taxonomy is signed off 30 Nov 2026 after the crawl.
- One primary page per query intent. A "money" query maps to exactly one URL (keyword-to-URL map held in the keyword tracker, owner SEO lead).
- Slugs: Swedish, ASCII-folded (å, ä, ö to a, a, o), no dates in evergreen URLs ("/2027/" is banned from guide slugs; year goes in the title, refreshed annually).
- Maximum click depth from the homepage to any indexable money page: 3. Guide spokes: 4.
- Breadcrumbs on every page, matching URL hierarchy, marked up as BreadcrumbList (already emitted by Yoast on home).

### 4.2 Internal linking templates
| Link block | Where | Rule |
|---|---|---|
| "Passar dig som vill ..." contextual module | Every guide spoke | At least 2 links to relevant L1 commercial hubs and 1 to a specific product, descriptive anchors, no "klicka här" |
| "Bokningsbara resor" strip | Every guide hub and destination page | Programmatic: 3-6 products tagged to the page's region/theme, ordered by order-book margin or availability, not alphabetically [ASSUMPTION-T4 that tags exist] |
| "Läs mer" strip | Every product page | 3 relevant guide links (best time, safety, cost) so product pages inherit informational authority |
| Month picker and region picker | Best-time hub | Crawlable `<a href>` links, not JavaScript-only widgets |
| Adviser and review module | Product and hub pages | Links to the named adviser's bio and 2-3 customer stories for that destination (E-E-A-T and trust proof) |
| Footer and mega-menu | Sitewide | Limited to L1 hubs and trust pages; deep links stay in-body to keep link equity concentrated |

### 4.3 Faceted/filter and search handling
- On-site search results (the WebSite SearchAction pattern) and any filter/parameter URLs (`?orderby=`, `?filter_`, `?s=`, date/price sort) get `noindex, follow` and canonical to the clean hub. Do not block them in robots.txt if they are already indexed (blocking prevents de-indexing); noindex first, robots later.
- Departure calendars ("avgångar") are the biggest crawl-trap risk: one URL per hub or per tour with departures rendered as on-page content, not one URL per departure date, unless a date-specific page has its own demand.
- Pagination: use crawlable `<a>` links; canonical to self (not to page 1); no "view all" if it breaks Core Web Vitals.

### 4.4 Duplication and cannibalisation controls (rundresor, reseförslag, utflykter, avgångar, themes)
1. Build a URL x primary-query x intent matrix from GSC and the crawl; flag any query for which two or more URLs get impressions.
2. For each collision decide: consolidate (301 into the stronger, merge content), differentiate (distinct intent, rewrite title/H1/lead), or canonicalise (duplicate boilerplate such as tour variants).
3. Templated boilerplate (terms, practical info repeated on 100+ pages) moves into collapsible shared blocks; unique text above the fold must be at least 250 words on every indexable product page [ASSUMPTION-T5].
4. Expired departures and withdrawn products: if the tour is permanently gone, 301 to the nearest relevant hub; if seasonal, keep live with "Nästa avgång: [datum]" or "Går inte att boka just nu"; never leave a 200 page with no bookable content, never return soft-404s. 410 only for content with no logical successor.

### 4.5 Pricing and availability consistency
Prices shown on pages, in schema, in feeds and in ads must match (Konsumentverket: advertised prices must include mandatory costs, R08/R09). Rule: one price source of truth; structured-data price fields are populated from it or omitted. "Från" prices must state whether flights are included (unknown today, R06). This is a legal and an SEO consistency issue and is owned jointly with Legal/Ops.

### 4.6 Hosting-level hygiene (to check in the audit)
- One canonical host: https + www; all variants (http, non-www, trailing-slash, uppercase) 301 in one hop.
- HSTS enabled after redirect verification.
- Custom 404 that returns a true 404 status and links to hubs; 410 for intentional removals.
- Staging and preview sites protected with HTTP auth (not only `noindex`), and verified not to appear in Google (`site:` check, owner Web developer, 30 Nov 2026).
- XML sitemaps: split by type, only canonical 200 indexable URLs, accurate `lastmod` (true content change only), submitted in GSC. Image/video sitemaps only if a template benefits.

### 4.7 Sister sites and brand boundaries (Söderhavsresor, MICE)
- Cross-links between sister sites are in footer or "Våra andra resmål" only, with normal links; no sitewide keyword-rich anchors (avoid footprint risk).
- Non-South-Africa products already sold on sydafrikaresor.se (Seychelles, Mauritius, Maldives; R06) are an extension basket lever. Keep them under a clear "Kombinera med" section so topical focus stays South Africa; do not build standalone SEO plays on those destinations on this domain without a decision (separate cost line).
- MICE content (företagsresor theme page) stays one page plus incentive guide; any MICE/bleisure cross-sell (GL2) is tested on a subfolder, not mixed into leisure hubs.

---

## 5. Core Web Vitals and performance

### 5.1 Targets (Google "Good" thresholds, 75th percentile of real users, mobile first)
| Metric | Good | Our internal target |
|---|---|---|
| LCP | at most 2.5 s | at most 2.2 s on home, hubs, product |
| INP | at most 200 ms | at most 150 ms |
| CLS | at most 0.1 | at most 0.05 |
| TTFB (supporting) | n/a | at most 0.8 s at the 75th percentile [ASSUMPTION-T6] |

Templates measured separately: Home, Commercial hub, Guide, Product (rundresa/reseförslag), Utflykt, Trust (stories, bios), Quote form page. Source of truth is field data (CrUX, GSC CWV report, a RUM script); lab data (Lighthouse, WebPageTest) is for diagnosis only. Hypothesis [ASSUMPTION-T17]: with good Swedish mobile coverage the main cost is likely JavaScript, third-party tags and image weight rather than bandwidth; the baseline must confirm this.

### 5.2 Likely issues to test first (hypotheses from the observed stack)
| Hypothesis | Test | Fix if confirmed |
|---|---|---|
| Hero/LCP image lazy-loaded or oversized, or loaded after a slider script | Lighthouse LCP element; check `loading` and `fetchpriority` on the LCP image | Remove lazy-load from the LCP image, `fetchpriority="high"`, responsive `srcset`, preload |
| Too many third-party scripts (GA, Ads, Clarity, Meta, Bing, Trustindex, cookie plugin) hurting INP and main-thread time | Chrome Performance panel, request waterfall, "Reduce the impact of third-party code" | Load via a single tag manager after consent; delay Clarity/Meta/Bing until interaction or consent; lazy-load Trustindex below fold with reserved height; move to server-side tagging (also needed for opt-in loss, see strategy 11.2) |
| Consent banner shifts layout (CLS) or blocks render | CLS attribution in DevTools | Fixed-height, overlay-style banner that does not push content |
| Gravity Forms and other plugin CSS/JS loaded sitewide | Coverage tab | Load only on pages that hold a form; defer |
| Web fonts (the theme uses a Playfair Display class on H1) cause CLS/FOIT | Font loading waterfall | Self-host, `font-display: swap`, preload the primary weight, subset |
| Theme/plugin bloat, unused CSS | Coverage, plugin audit | Remove or replace unused plugins; critical CSS inline; defer the rest |
| No full-page cache/CDN, slow TTFB | WebPageTest TTFB; hosting info | Page caching and a CDN with image optimisation; PHP and DB tuning; hosting upgrade if needed |
| Heavy image galleries on product pages | Page weight by type | Cap gallery to first 3-4 images inline, rest on interaction; AVIF/WebP with proper `sizes` |
| Carousels/sliders above the fold | Lighthouse | Replace with a single static hero |

### 5.3 Performance governance
- **Performance budget per template** (mobile): total page weight at most 1.5 MB on first load, JavaScript at most 300 KB compressed, at most 15 third-party requests before interaction [ASSUMPTION-T7, tighten after baseline]. Budgets are enforced in the release checklist (section 9.2) with a Lighthouse CI or PageSpeed Insights API check on staging.
- Weekly field-data check on the dashboard; alert when any template falls below 75% "Good" for two consecutive weeks.
- Any new embed (chat widget, map, review widget, video) needs a speed review before launch; videos load by click-to-play poster.

---

## 6. Structured data plan

Principles: markup must match visible content; no review or rating markup unless real, visible and compliant with Google's guidelines; validate with Rich Results Test and Schema Markup Validator; one JSON-LD graph per page, generated by Yoast filters or a small custom plugin so it is maintained in code, not pasted by hand.

| Template | Schema types | Notes | Rich result likely? |
|---|---|---|---|
| Sitewide | Organization (existing), WebSite (existing), BreadcrumbList (existing on home; extend everywhere) | Organization: logo, `sameAs` (Trustpilot, Facebook, Instagram, YouTube, LinkedIn: only profiles that exist and are verified as the company's), contact points, `foundingDate` 2003 only if the company confirms. Add `identifier`/membership (Svenska Resebyråföreningen) only if verified | Knowledge panel signals, breadcrumbs |
| Product page (rundresa, reseförslag) | `TouristTrip` with `itinerary`, `touristType`, plus `Offer` (price, currency SEK, availability, `validFrom`/`priceValidUntil` only where real) | `TouristTrip` has no Google rich result, but it is understood by search and AI systems. Use `Product` markup only if price and availability are accurate and there is an actual review/aggregate on the page; otherwise stay with TouristTrip + Offer | Low, but helps entity understanding |
| Utflykt (excursion) | `TouristAttraction` for the place; `Product` + `Offer` only if price and availability are accurate | Keep simple; "från" price must be real and tied to the price source (4.5) | Low |
| Boende | `LodgingBusiness`/`Hotel` pointing to the lodge | Do not copy third-party ratings; link to the lodge | Low |
| Guide / hub articles | `Article` or `BlogPosting` with `author` (Person with bio URL), `datePublished`, `dateModified`, `publisher` | Named expert authors tied to resespecialister pages support trust (R08: trust is brokered by people) | Author/article eligibility |
| Best-time and practical pages | `Article` + visible FAQ block | `FAQPage` rich results are no longer shown for most commercial sites (Google restricted them in 2023); still useful as on-page structure and for AI answer extraction, but expect no SERP feature [ASSUMPTION-T8, re-verify in Google documentation before relying] | None expected |
| Adviser bios | `Person` (name, jobTitle, `worksFor`, `knowsAbout`) | Only with each person's consent (GDPR); marks the "named personal adviser" promise | None |
| Reviews | `Review`/`AggregateRating` only if the reviews are first-party, on the page, and about a product, not self-serving about the organisation. Google does not show stars for self-serving Organization/LocalBusiness reviews [ASSUMPTION-T9, re-verify] | R03: Trustpilot 2.7 on 8 reviews; competitors show 4.6-4.9 stars. Priority is the review programme in the CRM workstream; markup follows only once volume and compliance are right. Trustindex's own markup, if any, must be audited for duplicates | Possible later |
| Customer stories | `Article` + `Review` of the trip if the customer consents and story is published | Handle consent and GDPR explicitly | Low |
| Videos | `VideoObject` | Only for self-hosted/YouTube embeds that are the page's main content | Video rich results possible |
| Contact/book a call | `ContactPoint` in Organization; `Action` not needed | Phone number consistency across site, GBP and Organization | n/a |
| Google Business Profile | Check and claim; align name/phone/category; add photos and posts | Local pack for brand and "researrangör Stockholm" style queries; R06 action 8 | Local pack |

Governance: schema is part of the template spec; a validation run is part of every release (section 9.2); Search Console "Enhancements" reports are watched weekly.

---

## 7. Crawl, index and rendering control

| Area | Action | Owner | Done by |
|---|---|---|---|
| Crawl baseline | Full crawl (Screaming Frog or similar, JS rendering on and off) of production: status codes, canonicals, titles, H1, depth, inlinks, duplicate content, images, structured data, hreflang absence | Web dev + SEO lead | 20 Nov 2026 |
| Log sample | 30 days of server logs: Googlebot/Bingbot/AI-bot hits by URL type; wasted crawl on parameters and expired URLs | Web dev (hosting access) | 30 Nov 2026 |
| GSC audit | Page indexing report, "Crawled - not indexed", duplicates, soft 404, CWV, manual actions, links, sitemap status | SEO lead | 30 Nov 2026 |
| Redirect map | Inventory all existing 301s; collapse chains; build a canonical redirect map file to reuse in every migration | Web dev | 15 Dec 2026 |
| Rendering | Confirm all critical content (itineraries, prices, links, reviews) is in initial HTML; client-rendered widgets (calendars, tabs, accordions) keep text in the DOM at load | Web dev | 15 Dec 2026 |
| Meta templates | Title/description formulas per template with Swedish copy rules (title at most about 60 characters, unique, includes year where useful on seasonal pages); remove duplicate or empty meta | SEO lead | 31 Dec 2026 |
| Images | ALT text from a rule (product + place + subject), never keyword-stuffed; descriptive file names for new images; consistent aspect ratios to prevent CLS | SEO lead + content | 31 Jan 2027 |
| Search/filter `noindex, follow` (4.3, quick fix) | Implemented and verified on staging, then production | Web dev | 15 Dec 2026 (before the freeze) |
| Pagination, departure-calendar and remaining 4.3 rules | Implemented | Web dev | 31 Jan 2027 (Medium risk, staged) |
| Security headers | HTTPS everywhere, no mixed content, HSTS, no `X-Robots-Tag` mistakes | Web dev | 31 Jan 2027 |
| Bing | Verify Bing Webmaster Tools and IndexNow (instant notification of new/changed URLs to Bing and other participating engines; Google does not use IndexNow, so Google relies on sitemaps and URL Inspection); Bing UET already present | SEO lead | 31 Dec 2026 |

### 7.1 Swedish title, H1 and meta formulas (draft copy for Content lead and Legal/Ops approval)
Titles at most about 60 characters, meta descriptions at most about 155. No unsupported superlatives ("störst", "bäst") and no safety guarantees; prices only from the price source (4.5) and dated. Figures in brackets are filled from real data.

| Template | Title | Meta description |
|---|---|---|
| Best-time hub | Bästa tiden att resa till Sydafrika, månad för månad | Väder, säsong och vad som händer i Kapstaden, Kruger och längs Garden Route varje månad. Få råd av en specialist på Sydafrika. |
| Cost guide | Vad kostar en resa till Sydafrika? Prisexempel | Prisexempel från våra egna resor, vad som ingår och vad du bör budgetera extra. Priser uppdaterade [månad år]. |
| Safety and practical hub | Är Sydafrika säkert? Fakta och praktiska råd | Fakta om säkerhet i Sydafrika med länkar till UD:s reseinformation, och hur vi planerar för trygghet på våra resor. |
| Rundresa (product) | [Resans namn]: [X] dagar i Sydafrika | [X] dagar med [höjdpunkter]. Pris från [X] kr per person, [flyg ingår / flyg ingår inte]. Personlig rådgivare och resegaranti. |
| Segment page | Familjeresa till Sydafrika: [X] förslag | Familjevänliga safariupplevelser och rundresor i Sydafrika, anpassade efter barnens ålder. Prata med en av våra rådgivare. |

Each product meta description must state whether flights are included (open question O-2) and may mention resegaranti only after Legal/Ops confirms the wording (strategy pillar 4).

---

## 8. AI-search and answer-engine readiness (technical side)

Strategy L4 includes "AI-search visibility". Evidence on what moves citation in AI answers is thin and changes quickly; the plan sticks to measures that also help classic SEO, and measures outcomes rather than assuming them. [ASSUMPTION-T10: AI-search referral volume to this site is small today; measure before investing beyond the items below.]

1. **Allow, do not accidentally block.** Keep robots.txt open to mainstream search and AI-search crawlers unless the CEO decides otherwise on content-licensing grounds. Document the decision (policy owner: Head of Marketing).
2. **Answer-first page design.** Each guide opens with a 40-80 word direct answer (best time, cost range, safety statement with link to Swedenabroad), then detail. Cost pages show real price ranges from own packages, dated and flagged "Pris från" with what is included.
3. **Entity clarity.** Consistent company name, address, phone and founding facts across Organization schema, GBP, Trustpilot, LinkedIn, Wikipedia-style sources where applicable. "Skandinaviens största" type claims require proof (Konsumentverket; workstream 01) and are not placed in schema until verified.
4. **Freshness.** `dateModified` reflects real edits; annual review of price and season facts; changelog line on cost and safety guides ("Uppdaterad november 2026").
5. **Citable facts.** Cite official sources (SAT, Swedenabroad/UD, South African Weather Service climate data) with links; Verifiable, sourced pages are the best available bet for both classic and AI search, though how AI systems weigh citations is not proven. Hypothesis [ASSUMPTION-T18]: competitor guides cite sources less consistently than we can; verify in the competitor content audit (R06 action 5).
6. **llms.txt.** Optional file; no demonstrated effect on rankings or citations at the time of writing [ASSUMPTION-T11]. Low cost (under 2 hours); do it only after the rest, with no promise of impact.
7. **Measurement.** Monthly manual and tool-based check of 40 priority prompts (Swedish) across Google AI Overviews, ChatGPT, Perplexity, Copilot: is sydafrikaresor.se cited or named; log in the dashboard. GA4 channel group for AI referrers (chatgpt.com, perplexity.ai, copilot.microsoft.com, gemini.google.com) created by 31 Jan 2027.

---

## 9. Migration and release risk management

### 9.1 Why this matters here
Three changes are already planned that touch the site: budget-bracket quote form and "book a call" (strategy section 15), tracking v2 with server-side tagging and offline conversion import (11.2), and new hubs (31 Jan 2027). A fourth, a redesign or replatform, is plausible once a new CEO reviews the site. Each is a way to lose the #1 rankings that protect existing flow, in the season (Jan-Feb) when search interest peaks (R06).

### 9.2 Release checklist (mandatory for any change touching templates, URLs, plugins, tags or hosting)
| Step | Check | Owner |
|---|---|---|
| 1 | Change described in a ticket with SEO risk class: Low (content edit), Medium (template, plugin, tag change), High (URL, platform, host, domain, consent tool change) | Product owner |
| 2 | Pre-change snapshot: crawl export, top 500 URLs by GSC clicks, rank tracker positions for protected keywords, CWV baseline, sitemap URL count | SEO lead |
| 3 | Staging crawl compared to snapshot: titles, H1, canonicals, status, robots meta, schema, internal links, hreflang if any; differences explained | Web dev + SEO |
| 4 | Redirect map tested: every changed/removed URL returns a single 301 to its successor; no chains, no loops, no redirect to homepage as a catch-all | Web dev |
| 5 | Performance budget check on staging (section 5.3); form and tag firing test with consent states (granted/denied) | Web dev + Analytics |
| 6 | Staging is not indexable; production robots.txt and meta robots verified before switch (the classic launch failure is a leftover `noindex` or `Disallow: /`) | Web dev |
| 7 | Release timing rule: High-risk changes avoided from 15 Dec to 15 Mar and in the school-holiday windows (Easter, Christmas) unless the CEO signs an exception; best window is late Mar-Jun (Sep-Oct is avoided for High-risk changes because of the content-indexing push). Tracking v2 is planned for Jan 2027, inside the freeze: replacing the consent tool is High risk and needs a CEO exception; configuring Consent Mode v2 and server-side tagging on the existing consent plugin is Medium and may proceed staged, with old and new tracking in parallel [ASSUMPTION-T12] | Programme owner |
| 8 | Post-release: GSC sitemap resubmit, URL inspection of 20 key pages, 24-hour and 7-day crawl, rank and traffic compared to snapshot; rollback trigger: more than 20% drop in organic clicks to the top 100 URLs over 7 days not explained by seasonality, or any 5xx/robots error | SEO lead |
| 9 | Rollback plan documented and tested before release (database + files backup, DNS/host switch) | Web dev |

### 9.3 Specific migration risks and mitigations
| Risk | Likelihood / impact | Mitigation |
|---|---|---|
| URL changes without redirects when restructuring rundresor/reseförslag/utflykter | M / High | Do not change URLs unless needed (4.1); redirect map; test |
| Theme rebuild changes titles, H1, internal links, schema or content hidden in tabs | M / High | Template spec with parity checklist; staging crawl diff |
| Consent tool replacement drops tracking; organic conversions disappear from reporting | M / High | Test consent states; keep GA4 and Ads tags tested; run old and new in parallel where possible |
| Quote-form change breaks conversion tracking or the Gravity Forms to CRM link | M / High | Event-based tracking spec before build; test submissions daily for the first 14 days |
| New plugin (chat, popup, maps) harms CWV | H / M | Speed review gate (5.3) |
| Leftover `noindex` / `Disallow` from staging goes live | L / Very high | Step 6 in the checklist; daily robots.txt monitor |
| Domain or sub-domain decision for Nordic scope (GL1) done ad hoc | M / High | Decision paper before any build (section 10) |
| Expired departures removed with 404/410 en masse | M / M | Rules in 4.4; monthly review |
| Hosting move changes IPs, TTFB, caching, headers | L / M | Treat as High risk; DNS TTL lowered; parallel run |
| CMS/plugin updates (WordPress core, Yoast) change canonicals or schema output | M / M | Update on staging first; weekly schema and canonical sample check; monitor after each update |
| Agency or developer dependency (single person knows the theme) | M / M | Documentation, repo with version control, second named developer by 31 Mar 2027 |

### 9.4 Decision rule: replatform or not
No replatform decision before the audit and baseline are complete. Consider it only if all hold: (1) audit proves that the theme or hosting cannot reach the CWV and schema targets with reasonable effort; (2) a vendor quote and a redirect/URL parity plan exist; (3) cost, including SEO protection, is inside the technology line (SEK 0.6 M 2027, 0.3 M 2028 [A18]) or approved by the CEO as an exception; (4) the cut-over falls in the window of 9.2 step 7 and after Gate 1; (5) the gate on cash and loss budget is passed. If any fails, remain on WordPress and optimise. A cut-over before 31 Mar 2027 is not recommended.

---

## 10. International and Nordic readiness (GL1) and language

GL1 (Norway, Denmark, Finland) needs a scope decision by 31 Mar 2027 (strategy). The technical choice must be made before any translation or build:

| Option | SEO characteristics | Cost / risk | When it fits |
|---|---|---|---|
| Subfolders on the same domain (`/no/`, `/da/`, `/fi/`) with hreflang | Inherits domain authority; easiest to manage; needs local-language content, not machine translation alone | Medium; Swedish customer content must not leak into Nordic SERPs | Preferred starting point |
| Separate ccTLDs (sydafrikaresor.no etc.) | Strong local signal; builds from zero authority; separate maintenance | High | Only after proof of demand |
| Subdomains | Mixed signals; no advantage over subfolders | Medium | Not recommended |
| English only for all Nordics | Poor intent match | Low | Not recommended |

Rules: Swedish stays at the root; hreflang annotated bidirectionally (`sv-SE`, `nb-NO`, `da-DK`, `fi-FI`) plus `x-default`; no automatic redirect by IP (breaks crawling and users); prices in local currency with their own legal terms (package-travel and guarantee regimes differ per country; Legal confirms). Norwegian and Danish arrivals to South Africa (14,632 and 19,547 in 2025, R06) are smaller than Sweden's 27,625; search demand in those languages is not measured, so the first step is a demand test with a small paid and organic page set, not a site build. Budget: none until the decision; draft estimate in section 12 is a placeholder.

---

## 11. Measurement, KPIs and dashboard

### 11.1 Instrumentation (integrity first)
1. GA4 with consent mode (v2), events for: enquiry form submit, quote request, "book a call", phone click, e-mail click, chat start, brochure/guide download, calculator use, newsletter signup. Define each as a key event; enquiry and quote events carry `landing_page`, `content_group`, and (via hidden fields) UTM source/medium/campaign to the CRM.
2. CRM join: Gravity Forms stores GA client ID, session source/landing page and "how did you hear" in hidden fields; CRM stages carry them forward; booked value and margin return to GA4/Google Ads as offline conversions (strategy 11.2; owner CRM manager + Analytics lead; due 31 Jan 2027).
3. Server-side tagging container to reduce script weight and recover consented measurement loss (strategy 11.2). Cost in tracking line.
4. GSC linked to GA4 and to the dashboard (BigQuery export if feasible, or Looker Studio connector); GSC data retained beyond 16 months by monthly export.
5. Rank tracker with about 300 keywords versus 10 named competitors (R06 action 4), weekly; separate branded/non-brand and by cluster.
6. RUM: web-vitals JS or CrUX API dashboard per template.
7. Alerts: robots.txt change, sitemap size change, sudden 4xx/5xx or indexation drop, GSC security/manual action, SSL expiry, uptime.

### 11.2 KPI table
Baselines are unknown and set by 15 Dec 2026; all targets below are [ASSUMPTION-T13] placeholders to be re-based then. Business KPI is enquiries and booked margin, not rank.

| KPI | Definition | Baseline | Target 31 Mar 2027 | Target 31 Dec 2027 | Target 31 Dec 2028 | Owner |
|---|---|---|---|---|---|---|
| Organic non-brand enquiries per month | CRM enquiries whose first or assisted touch is organic search on a non-brand landing page (brand-organic belongs to existing flow, not L4) | GSC/GA4/CRM by 15 Dec 2026 | Baseline set | Bridge-implied: about 14 extra enquiries in 2027 (about 1 per month). Placeholder +25% vs same months of 2026 [T3], re-based after Gate 0 | Bridge-implied: about 105-115 extra enquiries in 2028 (see 11.3). Placeholder +60% vs same months of 2026 [T3], not sized to the bridge until baseline exists | SEO lead |
| Organic-sourced booked value and order-book margin | Booked turnover and gross margin from organic-first or organic-assisted enquiries | Unknown | Reported monthly | Reported; margin at or above book average | idem | Analytics lead |
| Close rate of organic enquiries | Quote-to-booking, split brand-organic (existing flow, strategy 27%) and non-brand-organic (new traffic, strategy 18%, A10) | Unknown | Tracked | Brand-organic within 3 points of 27%; non-brand at least 18% | idem | Head of Sales |
| Non-brand clicks (GSC) | Clicks excluding brand queries | GSC export | Baseline | +30% | +70% | SEO lead |
| Head-term protection | Positions of 25 protected keywords | Rank tracker | Not worse than baseline | Not worse | Not worse | SEO lead |
| Cluster visibility | Share of top-3 positions for clusters 3, 4, 5, 6, 7 | Rank tracker | Baseline | Top-3 on 40% of tracked cluster keywords [ASSUMPTION-T13] | 55% | SEO lead |
| Non-brand organic sessions | GA4 sessions on non-brand landing pages | GA4 by 15 Dec 2026 | Baseline | Set at Gate 0; must fit the strategy 3.2 requirement of about 134-223k qualified sessions across all channels in 2028 | idem | Analytics lead |
| Organic visitor-to-enquiry rate | Enquiries / sessions, non-brand landing pages | Unknown | Baseline | Within strategy range 1.5-2.5% [A] | idem | Analytics lead |
| Brand-search clicks (protect) | GSC brand query clicks; read with the Tranche A brand-pause holdout (strategy 11.2) so organic and paid brand are not double-counted | GSC | Not worse than baseline | Not worse | Not worse | SEO lead |
| Time to index for new hubs | Median days from publish to "Indexed" in GSC | Unknown | At most 7 days [T13] | At most 7 days | At most 7 days | SEO lead |
| Crawl health | Internal 4xx/5xx links, redirect chains over 1 hop, orphan money pages | Crawl by 20 Nov 2026 | 0 chains, 0 orphan money pages | 0 / 0 | 0 / 0 | Web dev |
| AI-search citation share | Share of the 40 priority Swedish prompts (section 8 item 7) where sydafrikaresor.se is cited or named | Measured from Feb 2027 | Baseline | Trend reported | Trend reported | SEO lead |
| Indexed canonical URLs / submitted | GSC | Unknown | at least 95% | at least 95% | at least 95% | Web dev |
| CWV "Good" URL share (mobile) per template | GSC / CrUX | Unknown | at least 90% | at least 90% | at least 90% | Web dev |
| Mobile LCP (p75) on hubs | CrUX | Unknown | at most 2.5 s | at most 2.2 s | at most 2.2 s | Web dev |
| Structured data errors | GSC Enhancements | Unknown | 0 | 0 | 0 | SEO lead |
| Referrals from AI-search sources | GA4 channel | Unknown | Tracked from Feb 2027 | Trend reported | Trend reported | Analytics lead |
| Release incidents | High-risk releases breaching rollback trigger | 0 | 0 | 0 | 0 | Programme owner |
| Review snippet readiness | Trustpilot score/volume (workstream 01 target 4.5 at Gate 1) | 2.7 / 8 reviews (R03) | See WS01 | See WS01 | See WS01 | CRM manager |

### 11.3 Sanity link to the bridge
L4 is +0.2 MSEK in 2027 and +1.5 MSEK in 2028 at 20% margin [A7], i.e. about 0.04 MSEK and 0.30 MSEK of gross profit. At SEK 90-101k per booking (2.2 travellers x 42-46k per traveller; the strategy uses about SEK 101k in 2028) the 2028 figure equals about 15-17 additional bookings net of overlap. At the strategy's 80% quote rate and 18% new-traffic close rate (A10) that is roughly 105-115 additional organic enquiries a year (about 85-95 quotes). The 2027 figure is about 2 bookings, roughly 14 enquiries.

Consequence for the KPI table: a percentage target only matches the bridge once the baseline is known. +25% in 2027 equals the bridge's 14 enquiries only if non-brand organic enquiries are about 56 a year today; +60% in 2028 equals 105 only if they are about 175 a year. The two placeholders cannot both be right, so the absolute increments above are the binding KPI and the percentages are re-based at Gate 0.

That small number is the honest size of the SEO prize in the bridge: the cost of technical work (section 12, SEK 0.59 M committed over 2027-28 excluding contingency) is large next to a 2028 gross profit of about SEK 0.30 M from L4. Technical SEO therefore has to be justified mainly by protecting the existing organic flow inside the 2,148 enquiries and the #1 head terms, and by the measurement that lets paid Tranche B be judged against organic. If the baseline shows that flow is small or mostly branded, scale this plan down (R-T11).

---

## 12. Budget (SEK) and resourcing

Technical SEO is funded from the committed "SEO and content production" and "Measurement, tracking, incrementality tests" lines and the "Technology builds" line already in the strategy; it adds no new top-line request. Content production money (the larger part of the SEO line) is not in this table. [ASSUMPTION-T14 for all unit costs; Swedish agency day rates SEK 1,100-1,600 per hour for senior SEO/dev are indicative, not sourced. Replace with quotes by 31 Dec 2026.]

| Item | Q4 2026 | 2027 | 2028 | Funded from | Basis |
|---|---|---|---|---|---|
| SEO tool stack (rank tracker + crawler + one suite such as Ahrefs/Semrush, Screaming Frog, Lighthouse CI) | 15,000 | 90,000 | 90,000 | SEO line | About SEK 7,500 per month [ASSUMPTION-T14] |
| Technical audit and baseline (external specialist, about 60 hours) | 70,000 | 0 | 0 | SEO line Q4 (0.10 M total with content; Q4 content is therefore limited, see 14) | Fixed price, deliverables in section 7 |
| Web developer: CWV, templates, schema, redirects, sitemaps (about 190 hours 2027, 100 hours 2028) | 0 | 250,000 | 130,000 | Technology builds line (0.6 / 0.3 M) | Part of the site build; quote pending |
| Tracking v2, server-side tagging, consent test, offline conversion import (SEO-related share) | 0 | 60,000 | 20,000 | Measurement line | Shared with CRM workstream |
| Hosting/CDN/caching upgrade (if audit shows need) | 0 | 40,000 | 40,000 | Technology builds line | Only if confirmed |
| Monitoring (uptime, robots/sitemap alerts, RUM) | 0 | 15,000 | 15,000 | Measurement line | |
| Structured-data plugin or custom development | 0 | 25,000 | 5,000 | Technology builds line | |
| Ongoing technical retainer (monthly check, release reviews, about 6 hours per month, 72 h at about SEK 1,250) | 0 | 90,000 | 90,000 | SEO line | Hours cut from 8 to 6 so the figure matches the stated hourly range [T14] |
| Training (in-house team on Search Console, CWV, release checklist) | 0 | 15,000 | 10,000 | SEO line | |
| Contingency (about 10%) | 8,000 | 55,000 | 40,000 | None: no envelope exists (see flag) | Strategy has a reserve line only in 2028 (0.10 M, earmarked for gap-lever pilots) |
| **Total including contingency** | **93,000** | **640,000** | **440,000** | | |
| **Total inside existing strategy envelopes (excluding contingency)** | **85,000** | **585,000** | **400,000** | | The figure to approve |
| of which from SEO and content line | 85,000 | 195,000 | 190,000 | | leaves content: 15,000 / 505,000 / 610,000 |
| of which from technology builds line | 0 | 315,000 | 175,000 | | 52% of the 0.6 M and 58% of the 0.3 M line; see flag |
| of which from measurement line | 0 | 75,000 | 35,000 | | 38% / 18% of 0.20 M / 0.20 M |
| of which unfunded contingency | 8,000 | 55,000 | 40,000 | | Only from underspend or CEO approval |

Budget flags for the CEO:
1. **Q4 2026 SEO line.** SEK 0.10 M cannot fund both the technical audit (SEK 70k) and the 6 hubs targeted by 31 Dec 2026 (leaves SEK 15k for content). The strategy has no Q4 technology line (Q4 is paid 0.10, SEO 0.10, CRM 0.05, measurement 0.05). Options: (a) recommended: pull SEK 70k forward from the 2027 technology builds line, so the Q4 SEO line covers tools (15k) plus hub content (85k); 2027 web developer budget then falls from 250k to 180k (about 137 hours) unless the line is raised; (b) use the Q4 measurement line (50k max), which competes with tracking v1; (c) halve the audit to about 30 hours by doing the GSC audit in-house, or publish fewer than 6 hubs.
2. **Unbudgeted items.** (i) Web developer hours in Q4 2026 (staging and plugin inventory, log sample, redirect map, quick fixes; estimate 25-35 hours, roughly SEK 35-45k at the stated rates [T14]) are not in the table. (ii) An interim external SEO lead at 2-3 days a week from 9 Nov would cost roughly SEK 130-190k for the 7-8 weeks to 31 Dec at SEK 1,100-1,600 per hour [T14], more than the whole Q4 SEO line, and the strategy has no SEO/Web lead headcount in section 12. This plan assumes the lead is existing staff [ASSUMPTION-T19]; if not, the CEO must fund it separately.
3. **Technology line share.** This workstream draws 52% (2027) and 58% (2028) of a technology line that must also build the CRM, the budget-bracket quote form and tracking (strategy A18, workstream 14). Confirm the split with the CRM workstream and Head of Marketing before committing; if the line is insufficient, the quote form and CRM take precedence and CWV/schema work is staged later.
4. **No contingency envelope in 2027.** Contingency is shown for transparency only and is not funded.

Gated or optional: replatform (not budgeted; see 9.4), Nordic technical build (not budgeted; GL1 decision), AI-search tooling beyond SEK 15k per year (gated on measured referral volume).

Resourcing (roles): SEO/Web lead (owner; if not yet hired, an interim external lead 2-3 days a week from 9 Nov 2026), Web developer (agency or in-house, minimum 8 hours a week reserved across all projects; only about 4 hours a week average is budgeted to this workstream in 2027), Analytics lead, Content lead (sibling workstream), Head of Marketing (budget and priorities), Legal/Ops (price and claim review), CRM manager (form-to-CRM join). RACI: SEO lead Accountable for the plan and release sign-off; Web dev Responsible for implementation; Analytics lead Responsible for measurement; Head of Marketing Consulted/Approver; CEO Informed, approves exceptions to release windows.

---

## 13. Assumptions register (replace with real data)

| ID | Assumption | Rationale | Replace with |
|---|---|---|---|
| T1 | Index health target: below 5% of submitted URLs in "not indexed" states | Typical healthy target for sites of this size; no site data | GSC page-indexing export |
| T2 | 90% of URLs "Good" on all three CWV per template | Reasonable ambition for a content site; sites vary | CrUX/GSC baseline; may be set at 75% for the first quarter |
| T3 | Non-brand organic enquiries +25% (2027) and +60% (2028) vs the same months of 2026 | Placeholders only. They are not mutually consistent with the bridge: the bridge implies about 14 extra enquiries in 2027 and 105-115 in 2028 (section 11.3), which equal +25% and +60% only for different baselines | Baseline and the conversion data |
| T4 | Products are tagged by region and theme in the CMS | Needed for programmatic internal links | Content model audit |
| T5 | At least 250 unique words above the fold on every indexable product page | Common quality heuristic, not a Google rule | Page-level audit |
| T6 | TTFB at most 0.8 s at p75 | Common good-practice target | Hosting data |
| T7 | Performance budget numbers (1.5 MB, 300 KB JS, 15 third-party requests) | Common budgets; to be tightened after baseline | Lighthouse/RUM data |
| T8 | FAQPage rich results are not shown for typical commercial sites | Google's 2023 change; must be re-verified in current documentation | Google Search Central docs |
| T9 | Google does not display review stars for self-serving organisation reviews | Google's review snippet guidelines; re-verify | Google Search Central docs |
| T10 | AI-search referral volume is small today | General market state, no site data | GA4 channel report after 31 Jan 2027 |
| T11 | llms.txt has no demonstrated ranking or citation effect | No supporting evidence found at preparation time | Reassess annually |
| T12 | High-risk site changes avoided 15 Dec - 15 Mar and in school-holiday windows | Peak interest Jan-Feb (R06 3b) and booking season; exact enquiry seasonality unknown | Monthly enquiry curve from CRM (R06 action 9) |
| T13 | KPI targets in 11.2 | Placeholders pending baseline | Gate 0 baseline pack |
| T14 | Tool and labour costs | Indicative market levels, not quotes | Vendor and agency quotes by 31 Dec 2026 |
| T15 | WordPress, Yoast, Smush Pro, Gravity Forms and CookieYes-family plugin are the production stack and are current | Observed from the public HTML on 2026-11-02; hosting, versions of other plugins and staging unknown | Dev access and plugin inventory |
| T16 | One developer can implement the template work in the hours stated | No view of theme code quality | Dev review in week 2 |
| T17 | Bandwidth is not the main performance cost on Swedish mobile; JavaScript, tags and images are | Hypothesis from the observed stack; no measurement | CrUX/RUM baseline |
| T18 | Competitor guides cite official sources less consistently than we can | Hypothesis; not checked | Competitor content audit (R06 action 5) |
| T19 | The SEO/Web lead is existing staff at no extra cost to this budget | Strategy section 12 lists no SEO/Web lead hire; unknown | CEO confirmation |
| T20 | Q4 2026 web developer effort of 25-35 hours and retainer at about SEK 1,250 per hour | Derived from the stated indicative rate range | Developer quote |

Dependencies on other workstreams and strategy items: content hubs and calendar (content workstream; the first 6 hubs and their templates must exist by 31 Dec 2026), tracking v1 30 Nov 2026 and full 31 Jan 2027 (CRM/Analytics), data baseline pack 15 Dec 2026 (CFO), brand claim register (workstream 01; claims in titles and schema), review programme (CRM; review markup), price and package law check (Legal), pricing source of truth (Product/Finance), hiring of SEO/Web lead or interim, GL1 scope decision 31 Mar 2027, FX policy and fixed-price departures (departure pages are not published with fixed prices before 20 Nov 2026 FX policy).

---

## 14. Timeline

| When | Milestone | Owner |
|---|---|---|
| 2-13 Nov 2026 | Access granted (GSC, GA4, hosting, CMS, Tag Manager, Search Ads); tool stack live; interim SEO lead in place; protected-keyword list (25) agreed; staging indexability check | SEO lead, Web dev |
| 16-30 Nov 2026 | Crawl, log and GSC audits; URL taxonomy and canonical rules signed off (30 Nov); release checklist adopted; template specs for hubs (guide, best-time, cost, safety) and schema; tracking v1 verified for organic (30 Nov) | SEO lead, Web dev, Analytics |
| 1-15 Dec 2026 | Redirect map; quick fixes (robots, sitemaps, meta templates, noindex on search/filter URLs, LCP image fix, tag loading); Gate 0 pack: GSC/keyword baseline and CWV baseline | SEO lead, Web dev |
| 16-31 Dec 2026 | First 6 hubs publish through the checked template; Bing/IndexNow; schema v1 live on hub and product templates. Change freeze on High-risk items from 15 Dec | SEO lead, Content |
| Jan 2027 | Hubs indexed and monitored daily; tracking v2 on the existing consent plugin (Medium; a consent-tool replacement needs a CEO exception), offline conversions, GA4 AI channel; CWV fixes shipped to templates (Medium risk, staged); weekly dashboard; 31 Jan priority hubs live (strategy) | SEO lead, Analytics, Web dev |
| Feb 2027 | Duplicate/cannibalisation clean-up in batches; expired-departure rules; schema validation across all templates (28 Feb); no High-risk changes | SEO lead |
| Mar 2027 | CWV at 90% Good (Gate 1 evidence); second developer named; replatform decision memo (default: no); Nordic technical options paper for the 31 Mar GL1 decision | SEO lead, Web dev |
| Q2 2027 | Release window opens for larger template work; internal-link programme (programmatic modules); month/segment spokes scale; first read of L4 cohort; review markup if volume and compliance allow | SEO lead |
| Q3 2027 | Content indexed before Jan peak (Aug-Oct publishing push per R06); Core Web Vitals re-audit; log analysis refresh; GBP and entity clean-up | SEO lead |
| Q4 2027 | Annual refresh of price/season facts; year-end KPI read vs placeholders; plan re-baseline for 2028 | SEO lead |
| 2028 | Scale spokes and long tail; Nordic subfolder pilot only if GL1 approved; quarterly CWV and schema audits; migration to a new platform only if 9.4 passes | SEO lead |

---

## 15. Risks (technical SEO specific)

| ID | Risk | L / I | Early warning | Response | Owner |
|---|---|---|---|---|---|
| R-T1 | A site change causes loss of head-term rankings or tracking | M / H | Protected-keyword drop; sudden GA4 enquiry fall | Release checklist, rollback trigger (9.2) | SEO lead |
| R-T2 | Baselines show the site is in worse shape than assumed (slow, duplicate-heavy, poor indexation) | M / M | Audit findings | Re-sequence: technical fixes before new hubs; move hubs out of Q4 into Jan if needed | SEO lead |
| R-T3 | Developer capacity is consumed by quote-form and CRM builds | H / M | Tickets slip | Protected 8 h per week; second developer; scope MVP | Head of Marketing |
| R-T4 | Content ships without the template/schema spec, creating cannibalisation | M / M | Same query on two URLs | Keyword-to-URL map gate before publishing | SEO lead |
| R-T5 | Consent compliance vs measurement loss (opt-out users invisible) | H / M | GA4 vs CRM gap widens | Consent Mode v2, server-side tagging, CRM "how did you hear" as ground truth | Analytics lead |
| R-T6 | Review markup used improperly leads to manual action | L / H | GSC messages | Markup only where compliant; audit before launch | SEO lead |
| R-T7 | AI-search shifts reduce informational traffic faster than the plan assumes | M / M | Falling informational clicks with stable impressions | Focus on conversion-assist pages, brand search, owned audiences (CRM), tracked via 11.1 | Head of Marketing |
| R-T8 | Google core updates penalise thin or templated pages | M / M | Sitewide drops after an update | Unique content standard (4.4), author/expertise signals, no mass-generated pages | Content lead |
| R-T9 | Security incident on an aging WordPress/plugin stack (hacked site, SEO spam injection) | L / H | Alerts, GSC security issue | Update policy, WAF, backups, malware scan, least-privilege users | Web dev |
| R-T10 | Seasonal/pricing mismatches between pages and CRM mislead customers (legal exposure) | M / H | Price complaints | Price source of truth (4.5), monthly price audit | Legal/Ops |
| R-T11 | Measurement shows SEO's value is lower than the bridge | M / L-M | KPI below 11.2 | Reduce content spend within the SEO line; shift to CRM/referral/partners (strategy R7 logic) | Head of Marketing |

---

## 16. First 30 days (2 Nov - 2 Dec 2026)

| Day / date | Action | Owner | Output / acceptance |
|---|---|---|---|
| By 6 Nov | Request and receive access: GSC (owner), GA4 (editor), Tag Manager, WordPress admin (staging), hosting/CDN, Search Ads, Trustpilot/GBP; appoint interim SEO lead | Programme owner / CEO | Access list complete |
| By 6 Nov | Order tool stack (rank tracker + crawler + suite) | SEO lead | Tools live 9 Nov |
| By 9 Nov | Freeze list of protected assets: top 100 URLs by clicks (from GSC), 25 protected keywords, current redirect rules; take pre-change snapshot | SEO lead | Snapshot saved (crawl + GSC export + positions) |
| By 11 Nov | Verify staging/preview not indexable (HTTP auth); verify host variants redirect (http, non-www) in one hop; check robots/sitemap monitors set | Web dev | Pass/fail log |
| By 13 Nov | Plugin and theme inventory with versions; hosting/PHP/caching details; confirm who can deploy and rollback | Web dev | Stack document |
| By 16 Nov | Full crawl complete (JS on/off); GSC audit started; CWV baseline per template (CrUX/PSI) | SEO lead | Findings v0 |
| By 20 Nov | 30-day log sample reviewed; duplicate/cannibalisation matrix v0; check tags before consent and consent states | Web dev / Analytics | Gap list |
| By 20 Nov | Release checklist and risk classes adopted by Marketing, Product and the developer; change calendar published with freeze window 15 Dec - 15 Mar | SEO lead / Head of Marketing | Signed checklist |
| By 25 Nov | Quick-win list: meta templates, `noindex` for search/filter URLs, LCP image fix, tag loading order, sitemap cleaning, redirect chain fixes (prioritised by impact/effort) | SEO lead | Backlog with estimates |
| By 30 Nov | URL taxonomy, canonical rules, keyword-to-URL map and hub template specs (schema, internal-link blocks) signed off; tracking v1 for organic verified; first quick wins shipped to staging | SEO lead / Web dev | Sign-off record |
| By 2 Dec | Gate 0 prep: baseline dashboard (GSC non-brand/brand, GA4 landing pages, CWV, indexation) ready for 15 Dec review; list of unknowns still open | SEO lead / Analytics | Dashboard v0 |

Decisions needed from the CEO in the first 30 days: (1) confirm who the SEO/Web lead is and how an interim is funded, and approve the SEK 70k audit with the funding option in section 12 flag 1; (2) approve the release freeze 15 Dec - 15 Mar; (3) confirm that replatforming is off the table until Gate 1; (4) confirm the policy on AI crawlers (allow by default); (5) name the single owner of price data; (6) rule on the tracking v2 / consent-tool change versus the 15 Dec - 15 Mar freeze (section 9.2 step 7); (7) confirm the technology line split with the CRM workstream (section 12 flag 3).

---

## 17. Sources and notes

- Live site checks on 2026-11-02: https://www.sydafrikaresor.se/ (HTML head, JSON-LD, plugin paths), https://www.sydafrikaresor.se/robots.txt, sitemap index https://www.sydafrikaresor.se/sitemap_index.xml (via R06). Observations are of public markup only; they were not tested for rendering or speed.
- R06 SEO and keywords (/home/user/MICE-Group/docs/research/06-seo-keywords.md) for keyword clusters, SERP snapshots, content inventory, and the technical items listed as unknown; R03 for review baselines; R08/R09 for advertising and price rules; /docs/00-strategy.md for budgets, gates and bridge.
- Google thresholds for Core Web Vitals (LCP 2.5 s, INP 200 ms, CLS 0.1) and structured-data guidelines are from Google Search Central documentation as known at preparation time; the items tagged [ASSUMPTION-T8], [T9] and [T11] must be re-verified against the current documentation before decisions rely on them: https://developers.google.com/search/docs/appearance/core-web-vitals ; https://developers.google.com/search/docs/appearance/structured-data/review-snippet
- Konsumentverket guidance on misleading price and marketing claims is cited through R08/R09 and not re-fetched here.
