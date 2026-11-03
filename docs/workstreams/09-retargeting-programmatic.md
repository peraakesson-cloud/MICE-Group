# 09 - Retargeting, display/programmatic, affiliate and comparison-site channels

Owner: Head of Marketing (accountable); Performance marketer (day-to-day); CRM manager and Analytics lead (data dependencies); Head of Sales (partner deals); CFO (commission and margin guardrails).
Prepared: 2026-11-02. Horizon: Q4 2026 prep, 2027, 2028. Plans in English, customer-facing copy in Swedish.
Inherits: /docs/00-strategy.md (north star; lever L2/L3/L8; section 11 budget and incrementality; gates G1, G4, G5, G8; risks R7 and R13). Siblings: 06-google-ads (Search, Tranche A/B), 07-meta-ads (Meta retargeting MP-02). Research: R07 (paid benchmarks, affiliate rates), R09 (consent), R11 (conversion/CRM), R12 (partners).
Conventions: facts carry a URL; everything else is tagged [ASSUMPTION] with the ID RPx, listed in section 14 for the CEO to replace with real data. There is no internal company data.

---

## 1. Bottom line (read this first)

1. **This is a small, defensive and roughly self-funding workstream, not a growth engine.** At the planned budgets its incremental **booked value** (order book, not departure-year turnover; most H2 2027 bookings depart in 2028) is about SEK 0.8 M in 2027 and about SEK 1.7 M in 2028 (section 8), i.e. roughly 1.5-2.5% of planned turnover, and net contribution is about break-even (about +SEK 12k in 2027 and +SEK 80k in 2028 on planning assumptions; slightly negative in 2027 if the lower-yield definition in section 8.2 applies). It exists to (a) convert the existing flow we already pay for, (b) test two cheap prospecting channels under the same holdout discipline as Tranche B, and (c) run affiliate only as pay-on-booking with a hard margin guardrail. The 80 MSEK stretch does not depend on it.
2. **The binding constraint is margin, not reach.** At the 20% planning margin [A7] and the 15% post-commission product floor (strategy L8/G5), the maximum affiliate commission is **5% of booked value** (20% - 5% = 15%). The 5-8% range in strategy A17 is only usable on products with margin of 21.5% or more. Commission is also paid on bookings that would have arrived anyway, so the default contract is new-customer-only, no coupon/cashback sites, no brand bidding.
3. **Price comparison does not fit the positioning.** The strategy places us 15-20% above the group-with-flights cluster and says we do not compete on lowest price. Price-led comparison and charter-aggregator sites rank by price. We therefore do **not** buy CPC or fixed-fee listings on price comparison sites in 2027-28; we test only editorial/review comparisons and pay-on-booking partners (section 5).
4. **Consent shrinks every audience.** Retargeting pools are only the consenting share of visitors. Build the consent and tagging foundation before spending a krona (30 Nov deadline in strategy), because audience lists fill only forward in time: every week of delay before February is a week of lost audience. Tags are switched on only after the consent platform is live and the legal brief is answered (section 11), never before.
5. **Retargeting is Tranche A (committed, small); programmatic prospecting is Tranche B (gated); affiliate fees are tests.** Nothing here may raise paid spend while the response-time SLA is missed (strategy G8).

---

## 2. Objectives and KPIs

| # | Objective | KPI | Target | Date | Source / lever |
|---|---|---|---|---|---|
| O1 | Convert interest we already paid for | Cost per qualified enquiry (CPQE), Google remarketing | At or under SEK 1,200 (2027), SEK 1,100 (2028) [RP5] | Quarterly from Q2 2027 | L2; Meta ws sets SEK 300-900 on Meta [M9] |
| O2 | Prove or kill retargeting incrementality | Holdout-measured share of retargeting-attributed bookings that are incremental | At least 25% to scale above SEK 60k; 20-25% = continue at the same budget; below 20% for two consecutive quarters = cut to SEK 20k/yr minimum [RP4] | 30 Jun 2027 (directional only, too few bookings) and 31 Oct 2027 (first binding read) | Strategy 11.2 (inconclusive = not proven) |
| O3 | Build remarketable first-party audience | Consented, remarketable unique users (rolling 180-day pool, all channels) | 10,000 by 31 Mar 2027; 25,000 by 31 Dec 2027 [RP2] | Monthly | Consent rate [RP1] decides this |
| O9 | Audience quality and reach | Customer Match match rate; share of quote recipients reached by follow-up ads within 7 days (matched audience, ws 07 M22); average frequency per person across Google plus Meta | Match rate reported from launch, floor set after first upload [RP15]; reach 70%+ of matched quote recipients; frequency at or under 4 a week combined | Monthly | Cross-channel fatigue control (risk 8) |
| O10 | Programmatic traffic quality | Invalid-traffic share, bounce rate, qualified enquiries per 1,000 clicks | Invalid traffic at or under 5%; bounce no worse than 1.3x site average; at least 1.5 qualified enquiries per 1,000 clicks (the 0.2% planning rate is 2 per 1,000) [RP15] | End of test (Oct 2027) | Kill criteria in 5.1 |
| O4 | Programmatic prospecting test, one clean read | Holdout incremental ROAS (revenue / spend) | At least 4x to continue, 5x to scale (break-even 5x at 20% margin) | Test Sep-Nov 2027, read 15 Dec 2027 | L3, strategy 11.2 rules |
| O5 | Affiliate pilot with margin protection | Affiliate-sourced bookings; post-commission product margin | 6 bookings in H2 2027 (about SEK 0.6 M); 20 in 2028 (about SEK 2.0 M); post-commission margin at least 15% on every booking | 31 Dec 2027; 31 Dec 2028 | L8, G5 |
| O6 | New-customer integrity | Share of affiliate bookings from customers not already in CRM or open-quote | At least 80% | Monthly | Cannibalisation control |
| O7 | Hold the marginal cost cap | Marginal marketing cost per marketing-created booking (this ws contribution) | Within the SEK 20,000 blended cap; this ws alone under SEK 30,000 in 2027 and SEK 20,000 in 2028 [RP6] | Quarterly | G4 |
| O8 | Compliance and trust | Zero ads without consent-gated tags; "Annons" labelling on 100% of partner content; zero complaint on price claims | 100% | Continuous | R09 |

---

## 3. Approach

**Principles**
1. Measure first, spend second. No spend before tracking v1 (30 Nov 2026) and the holdout design (31 Jan 2027).
2. Retargeting follows the adviser, not the other way round. People with a quote open are handled by a named adviser (positioning). Ads for them only support the next human step ("Boka ett samtal"), never a discount.
3. Layered exclusions so we do not pay twice for the same person across Search, Meta and Google remarketing (shared exclusion lists, one frequency budget per person).
4. Value-add, not discount. Early-booking messages use inclusions, guide, flexibility and the travel guarantee. No "billig", no "lowest price".
5. Pay for outcomes where possible: affiliate and partner placements pay on booking only (strategy 11.3, R07 recommendation 5).
6. Everything is capped and gated: committed Tranche A at small size, Tranche B only on proof.

**Where each channel sits in the funnel**

| Channel | Role | Tranche | Funding line (strategy 11.1) |
|---|---|---|---|
| Google remarketing: YouTube, Demand Gen, Display (and RLSA, which is part of ws 06) | Convert and nurture existing flow | A (committed) | YouTube/Demand Gen line (SEK 0.15 M 2027, 0.20 M 2028); this ws uses SEK 60k and 80k |
| Meta retargeting (MP-02) | Same job on Meta | A | Owned by ws 07; this ws only coordinates audiences, exclusions and frequency |
| Programmatic/contextual and native prospecting | Reach new users on travel and Africa-interest content | B (gated) | "Tests" line (SEK 0.05 M 2027, 0.10 M 2028) |
| Affiliate / partner publishers | Pay-on-booking reach via content publishers | B-type test; commission is margin cost | Network fees from tests line; commissions from "Partner commissions, affiliate pay, referral rewards" (SEK 0.15 M 2027, 0.50 M 2028) |
| Price-comparison sites | Not bought | Rejected (see section 5) | None |

---

## 4. Retargeting and display tactics

### 4.1 Audience architecture (built with Analytics lead and CRM manager)

All lists are consent-gated. Recommended lists (names in English, ad copy in Swedish):

| ID | Audience | Window | Purpose | Message | Cap |
|---|---|---|---|---|---|
| RM1 | Viewed itinerary, price or "vad kostar" calculator pages, no enquiry | 30 days | Convert high intent | Adviser video, "Prata med din rådgivare", guarantee | Frequency 4/week |
| RM2 | Started but did not submit quote form | 14 days | Recover abandoned enquiry (strategy P3 cadence) | "Din reseplan väntar", 2-minute form, book a call | 3/week |
| RM3 | Read planning content (best time, safari, practical hub) | 90-180 days | Nurture to calculator or webinar; long lead time (flagship 10-12 months, directional) | Itinerary carousel, month guide | 2/week |
| RM4 | Watched 50%+ of destination video (YouTube/Meta) | 90 days | Warm consideration | Sydafrikakväll webinar, itinerary guide | 2/week |
| RM5 | Quote recipients (CRM Customer Match, consent and lawful basis confirmed) | 45 days | Support the adviser's follow-up D2/D7/D14/D21/D30 | "Har du hunnit titta på förslaget?" | 3/week; excluded when adviser task is open and activity under 7 days |
| RM6 | Lost quotes / unsold enquiries (CRM, consent) | 3-10 months | Reactivation (strategy P3) | New departure with seats, season offer | 1/week |
| RM7 | Past travellers (CRM, consent) | Always on, low | Repeat and referral (L7); email first, ads second | "Nästa resa", referral | 1/week |

Exclusions on every campaign: converted/booked (14-day buffer), customers currently travelling, open-quote recipients inside the 7-day adviser window (except RM5), employees and agents, sessions under 10 seconds (bounce), anyone in the holdout cell (4.4).

**Sizing the pool [RP1-RP3].** Core 2028 needs 134-223k qualified sessions (strategy section 3.2). At about 70% unique users and a 55% consent rate the remarketable pool is roughly 52-86k users a year; in 2027, with lower traffic, assume 25-45k a year, of which only a fraction (tags live from late Nov 2026) exists by 31 Mar 2027. The consent rate and traffic baseline are unknown (R06, R09), so the O3 targets above are placeholders to be reset after the 2 Dec 2026 audience size read.

**Definition used in this file:** a *qualified enquiry* is a CRM-qualified lead that receives a quote (same as ws 07), so the 27% and 18% close rates in strategy A10 apply to it directly. If CRM data shows qualified enquiries are all enquiries, apply the strategy's 80% quote rate on top; section 8.2 shows the effect. Platform minimum list sizes (Google and Meta) must be checked [VERIFY] before launch; small lists may force broader windows.

### 4.2 Campaigns (Google; Meta is in ws 07)

| ID | Campaign | Audiences | Format | Goal event | Start |
|---|---|---|---|---|---|
| G-RM-1 | YouTube/Demand Gen warm | RM3, RM4 | 15-30 s itinerary clips, carousels | Click to calculator, then qualified enquiry | 1 Feb 2027, if list size allows (ws 06 section 13 sequences Demand Gen remarketing from Q2 2027 and treats lists as observation-only at launch; Head of Marketing to confirm by 15 Dec, otherwise the SEK 15k moves to Search) |
| G-RM-2 | Display/Demand Gen hot | RM1, RM2 | Responsive display, static, short video | Qualified enquiry or booked call | 1 Feb 2027 |
| G-RM-3 | Customer Match support | RM5, RM6, RM7 | Demand Gen, YouTube | Call booked; offline Booked event | 15 Mar 2027, after consent and lawful-basis check |

Bidding: no automated value bidding until at least 30 imported conversions in 30 days exist (unlikely in 2027). Use maximise clicks with a CPC cap, then move to target CPA on qualified enquiry. Budgets are tiny (about SEK 5-7k a month), so keep three campaigns, not more, and consolidate if any gets under SEK 3k a month for two months.

### 4.3 Creative (Swedish copy, to be reviewed by brand ws 01)

Rules: no unverified price claims; prices include mandatory costs; no "billigt"; do not mention 24/7 local presence (write "jourtelefon under resan"); guarantee wording must match the exact legal status confirmed by Kammarkollegiet (13 Nov dependency).

Headline bank (max 30 characters, all checked):
- "Din Sydafrikaresa väntar" / "Prata med en rådgivare" / "Sydafrikaspecialisten" / "Rundresa med svensk guide" / "Skräddarsydd Sydafrikaresa" / "Boka med resegaranti" / "Se lediga platser 2027"
- "Boka med resegaranti" only after the 13 Nov Kammarkollegiet answer; "Se lediga platser 2027" only for departures actually held (section 10, item 4). "Din rådgivare" is used only for people who already have one (RM5-RM7); cold and warm audiences get "en rådgivare".

Descriptions (max 90 characters, the Google responsive limit):
- "Fortsätt där du slutade. Boka ett kostnadsfritt samtal med en rådgivare." (72)
- "Sydafrikaspecialisten sedan 2003. Guidade rundresor eller helt skräddarsytt." (77)
- "Planerar du för 2027 eller 2028? Se när det är bäst att åka och vad resan kan kosta." (84)
- "Sedan 2003" and "kostnadsfritt samtal" are claims for the legal/brand check (ws 01) before launch.

Hot (RM2): "Du var nästan klar. Det tar ett par minuter att få ett förslag från en rådgivare." (confirm form length before using any time claim)
Quote support (RM5): "Har du hunnit titta på förslaget? Boka ett samtal så justerar vi resan efter dig."
Reactivation (RM6): "Nya avgångar med platser kvar. Hör av dig så hittar vi rätt resa."

Creative production: re-use ws 07 assets (target about SEK 30k extra in 2027 inside the SEK 90k creative envelope; no new line).

### 4.4 Incrementality design (the part that decides money)

Statistical honesty: about 2,148 existing enquiries a year (strategy L2) and a remarketing budget of SEK 60k produce about 50 attributed enquiries a year (section 8). That is too few to read a clean A/B on bookings within a quarter. The design therefore pools and uses leading indicators:
1. **Customer Match lists (RM5-RM7):** hash-based random 10% holdout cell, excluded from ads, tracked in CRM by list flag. Compare enquiry-to-booking and time-to-booking. Note RM5-RM6 are small (quote recipients, a few hundred people a year at planned volumes), so the 10% cell is a few dozen people; treat as directional and pool across both quarters.
2. **Pixel lists (RM1-RM4):** matched-week on/off (two weeks on, one week off in alternating audience halves where list size allows) and 10% holdout where the platform supports it. Platform conversion-lift studies normally need budgets above ours [VERIFY]; do not pay for one.
3. **Pooled read:** combine Google and Meta retargeting (with ws 07) across two quarters; leading indicators are qualified-enquiry rate and quote-to-booking days.
4. **Decision rule:** "inconclusive = not proven": no scale. Retargeting budget may only rise above SEK 60k if the pooled read shows at least 25% incrementality and CPQE at or under cap, and SLA is met.
5. **Attributed ROAS is a sanity check only** (strategy 11.2): retargeting always shows inflated attributed ROAS.

---

## 5. Programmatic, affiliate and comparison-site tactics

### 5.1 Programmatic / contextual / native prospecting (Tranche B, gated)

- **Hypothesis:** Swedish readers of travel, wine, golf, wildlife and nature content (45-70, the core segments in R02) can be reached cheaper on contextual placements than on Meta, but quality of enquiry is lower. Cold display conversion benchmarks are weak: display CPC about USD 0.44, CTR 0.47%, conversion 0.51% across industries (R07: https://swell.country/blogs/marketing/google-ads-benchmarks/ ; https://usermaven.com/blog/google-ads-benchmarks), non-travel and lead-type.
- **Test design:** one 8-week test, Sep-Oct 2027 (before the Nov-Mar peak), SEK 30k (2027); contextual targeting (not behavioural), direct publisher or one self-serve native/contextual network with no minimum above SEK 15k [RP7, VERIFY], frequency cap 3/week, geo Sweden, landing page per segment (ws 04/05), 10% geo or time holdout, UTM and `how did you hear` field.
- **Do not** buy open-exchange programmatic through a managed service with a monthly minimum; SEK 30-60k does not support it. Use existing Google Display/Demand Gen and YouTube accounts for the rest of reach.
- **Sizing (illustrative [RP8]):** SEK 30k at about SEK 4.2 per click [R07 CPC USD 0.44 x 9.5 SEK/USD, RP9] gives about 7,100 clicks; at 0.2% qualified-enquiry rate (cold, high-ticket; the 0.51% benchmark is for generic leads) about 14 enquiries; at 18% new-traffic close about 2.6 bookings, about SEK 0.26 M attributed (about 8.7x); at 50% incrementality about SEK 0.13 M, **about 4.3x**. This only just clears the 4x continue bar and misses the 5x scale bar, so expect this channel to be cut or kept small. If qualified enquiries are raw enquiries (80% quote rate applies, section 4.1) the same test gives about 3.4x, below the continue bar: it is then a pure learning budget. The CEO may reasonably strike it (SEK 30k in 2027) and move the money to Search Tranche A.
- **Kill criteria during the test:** pause a placement or network after 3 weeks if invalid traffic exceeds 5% or bounce is above 1.3x site average (O10); end the test early if spend passes SEK 10k with zero qualified enquiries.
- **Gate:** funded at Gate 2 (30 Jun 2027) only if tracking, holdout and SLA are in place and margin on new bookings is at least 19%.

### 5.2 Affiliate and partner publishers

**Why it is limited.** Published rates: tour-operator affiliate 5-20% per sale (https://timeless.tours/affiliate-program-in-tour-companies-everything-you-need-to-know/), G Adventures 6% on about USD 2,600 average order, Viator 8% with a 30-day cookie (https://backlinko.com/affiliate-marketing-travel). We cannot pay 8% out of a 20% margin without breaching the 15% floor. No Swedish long-haul operator payout data was found (R07). The sources are vendor and affiliate-marketing blogs of low reliability; treat the rates as directional.

**Commission policy (binding for this ws):**
| Rule | Value |
|---|---|
| Base commission | 4% of booked value, 5% maximum, paid on bookings with margin at or above 20% |
| Higher tier (6-8%) | Only for products where margin minus commission stays at or above 15%: 6% needs margin of at least 21%, 8% at least 23%. CFO approval per product. Strategy A17/G5 rates of 8-12% for agents need margins of 23-27% and are not reachable at the 20% planning margin; flagged to the CEO |
| Basis | New customers only (not in CRM, no open quote, no booking in 24 months); first-booking only |
| Payment trigger | On final payment received; reversed (clawback) on cancellation before departure; payout 30 days after final payment |
| Cookie / attribution window | 60 days last click [RP16], plus partner code or partner landing URL stored on the CRM lead record; phone and email bookings captured via `partnerkod` and the `how did you hear` field. The 30-day cookie in published travel programmes is short against a 4-12 month sales cycle, so the CRM lead record, not the cookie, is the attribution of record |
| Banned | Brand bidding, coupon/cashback/discount sites, incentivised clicks, pop-ups, claims about price or availability without approval |
| Disclosure | "Annons" or "Reklam i samarbete med Sydafrikaresor" in first line and in video; archive of all partner content (R08) |
| Cap | No partner above 10% of affiliate turnover; no fixed fees without proof (strategy 11.3) |

**Publisher types and priority**
1. Niche authorities and travel bloggers/YouTubers: wine, golf, wildlife photography, hiking, family and 55+ travellers. Overlaps with the creator programme (ws on social); here we contract only the affiliate/booking-commission element.
2. Swedish travel and lifestyle media with commercial content desks (publisher-by-publisher; no names assumed).
3. Networks: Adtraction (Sweden-based, active in Sweden, Norway, Denmark and other markets: https://adtraction.com/partners/) and Awin (https://www.awin.com/) are the two candidates found; Tradedoubler was mentioned in R07 but not verified. Fee structures were not found [VERIFY]. The network is for tracking, publisher access and payment control; a direct-deal tracking link (UTM + partner code) is the fallback.
4. B2B/affinity partners, golf clubs, wine clubs, SAT and airline co-op are handled in ws 12/partners (L8), not here; do not double-count.

**Pilot design:** 8-10 hand-picked partners (not an open programme), recruited Apr-Jun 2027, live 1 Jul 2027. Each gets: unique URL, partner code, three itinerary landing pages, creative kit, monthly report, an adviser contact.
**Scale rule:** scale to an open programme in 2028 only if (a) post-commission margin on affiliate bookings at least 15%, (b) at least 80% new customers, (c) incrementality (test via partner on/off by cohort) at least 50%, and (d) response SLA met.

### 5.3 Comparison and aggregator sites

- **Evidence of the competitive set:** price-led comparison/charter aggregators exist for Sydafrika (e.g. https://www.ticket.se/charter/sydafrika, which markets "Jämför bästa priser på charter och paketresor"), and specialist sellers show from-prices on their own sites (e.g. African Tours lists 16-day Sydafrika trips from SEK 34,510 and SEK 34,985 on https://africantours.se/sydafrikaresor/; whether prices include flights is unclear). Such sites typically rank by price [ASSUMPTION, listing rules not checked], and our positioning is the reverse.
- **Decision:** no CPC or fixed-fee listings on price comparison sites in 2027. Reassess 31 Oct 2027 only if (a) the site accepts guided round trips, (b) it supports pay-on-booking or pay-per-qualified-lead at a CPQE under SEK 1,500, and (c) our listing can show inclusions, guide and guarantee, not only price.
- **What we do instead:** (a) win comparison queries ourselves with a "Därför oss" page and "Sydafrika rundresa: vad ingår" comparison content (ws 05); (b) hold review profiles (Trustpilot, Google; target 4.5+) because they act as the comparison layer for a SEK 99k purchase; (c) test one editorial comparison placement per half-year on a pay-on-booking basis through the affiliate pilot.
- **Competitor-brand conquesting:** deprioritised in the strategy; the only allowed test is ws 06 campaign C11 (conditional).

---

## 6. Tracking, consent and legal (blocking dependencies)

| Item | Requirement | Owner | Deadline |
|---|---|---|---|
| Consent platform | Granular opt-in for ad/analytics cookies; log consent; Google consent signals including ad_user_data and ad_personalization. Google states that for EEA users without the correct consent signals audience lists and remarketing do not populate (https://support.google.com/tagmanager/answer/13695607?hl=en ; https://datarevolt.agency/blog/google-consent-mode-v2-complete-guide) | Analytics lead + legal | 20 Nov 2026 (v1) |
| Cookie/ePrivacy rule and IMY guidance | Not read from a primary source (R09 flags [VERIFY]); counsel to confirm | Legal / DPO | 13 Nov 2026 |
| Customer Match and CRM-based audiences | Confirm lawful basis, privacy-notice text, opt-out path, hashing; only fields with consent flag are uploaded | CRM manager + DPO | 31 Jan 2027 |
| Server-side tagging and offline conversion import | Qualified enquiry and booked value (and margin band where permitted) returned to Google/Meta | Analytics lead | 31 Jan 2027 (full) |
| Partner and creator disclosure | "Annons" label rules; contract clauses | Head of Marketing + legal | Before first partner live |
| Package-law check on upsell | Linked offers in ads must not create an unintended package (EU Directive 2026/1024 noted in strategy P6, R09) | Legal | Before RM5-RM7 upsell messages |
| Price claims | Mandatory costs included; no "from" price without matching availability | Head of Product | Continuous |

Without opt-in, tracked conversions and audiences fall; plan for under-reporting (strategy R13). Holdouts and CRM-based source fields, not platform reports, decide budget.

---

## 7. Timeline

| Date | Milestone | Owner |
|---|---|---|
| 2 Nov - 2 Dec 2026 | First 30 days (section 11) | Head of Marketing |
| 20 Nov 2026 | Consent platform live (consent mode v1) | Analytics lead |
| 23 Nov 2026 | Remarketing tags switched on (consent-gated) after CMP test and legal answer | Analytics lead |
| 30 Nov 2026 | Tracking v1 live: consent mode, audience events, UTM discipline | Analytics lead |
| 1 Dec 2026 | Paid test starts (ws 06/07); remarketing tags collecting audiences, no spend | Head of Marketing |
| 31 Jan 2027 | Full measurement: server-side, offline import, holdout design signed | Analytics lead |
| 1 Feb 2027 | Google remarketing live (RM1-RM4), SEK 15k pre-Gate-1 cap use | Performance marketer |
| 15 Mar 2027 | Customer Match support live (if lawful-basis check passed) | CRM manager |
| 31 Mar 2027 | **Gate 1**: release rest of remarketing budget (SEK 45k) if CPQE and SLA OK; first holdout read | CEO / growth council |
| Apr - Jun 2027 | Affiliate pilot: policy, contract, network choice, recruit 8-10 partners | Head of Sales + Head of Marketing |
| 30 Jun 2027 | **Gate 2**: retargeting incrementality read #1; release programmatic test (SEK 30k) and affiliate go-live | Growth council |
| 1 Jul 2027 | Affiliate pilot live | Head of Marketing |
| Sep - Oct 2027 | Programmatic/contextual test (8 weeks) | Performance marketer |
| 31 Oct 2027 | **Gate 3**: retargeting read #2; affiliate margin and newness read; comparison-site reassessment | Growth council |
| 15 Dec 2027 | Programmatic holdout read; decides whether the 2028 programmatic line (SEK 50k) is spent. The 2028 envelope for this ws is released at Gate 3 (31 Oct 2027, strategy 16.2), the other lines do not wait for this read | Head of Marketing |
| Jan - Mar 2028 | Scale only what passed (cap SEK 80k remarketing; open affiliate programme if scale rule met) | Head of Marketing |
| 30 Jun 2028 | Full review: cut or keep each channel | CEO |
| Q4 2028 | Repeat Sep-Oct test windows if channel kept | Head of Marketing |

---

## 8. Budget (SEK), forecast and economics

### 8.1 Budget by year (inside strategy 11.1; no new money)

| Line | Q4 2026 | 2027 | of which committed | of which gated | 2028 | Funding line |
|---|---|---|---|---|---|---|
| Google remarketing (YouTube/Demand Gen/Display) | 0 | 60,000 | 60,000 (15k Feb-Mar, 45k after Gate 1) | 0 | 80,000 | YouTube/Demand Gen line |
| Programmatic/contextual test | 0 | 30,000 | 0 | 30,000 (Gate 2) | 50,000 | Tests line |
| Affiliate network and tracking fees | 0 | 20,000 | 0 | 20,000 (Gate 1) | 30,000 | Tests line |
| Other tests (TikTok/Pinterest, per strategy) | 0 | 0 | 0 | 0 | 20,000 | Tests line balance |
| **Paid-media and tests subtotal** | **0** | **110,000** | **60,000** | **50,000** | **180,000** | |
| Affiliate commissions (cost of sale) | 0 | about 30,000 | n/a (pay-on-booking) | | about 101,000 | Partner commissions line (150k / 500k) |
| Measurement and consent build | in strategy 50k Q4 / 200k 2027 | shared | | | shared | Measurement line |
| In-house time | Performance marketer 0.3 FTE; analytics 0.1 FTE; CRM 0.05 FTE | | | | | Inside the 5 FTE incremental (strategy A18) |

Pre-Gate-1 note: the pre-Gate-1 paid cap is SEK 0.5 M for all channels; Meta uses SEK 180k and Search must stay under SEK 320k (ws 07 M15). This ws takes SEK 15k for Feb-Mar 2027, so **Search must stay at or under SEK 305k to Gate 1** (decision for Head of Marketing by 15 Dec) [RP10]. Q4 2026 has zero spend here.
The 2027 tests line (SEK 50k) is fully used here, so TikTok/Pinterest tests wait until 2028 unless the CEO prefers otherwise.

### 8.2 Forecast and economics (illustrative; replace with account data) [RP4-RP9]

Booking value SEK 99k in 2027 (45k x 2.2) and SEK 101k in 2028 (46k x 2.2); margin 20% (SEK 19.8k / 20.2k per booking); break-even incremental ROAS 5x.

| Channel | Spend | Enquiries (attributed) | Close | Bookings | Attributed order book | Incrementality | Incremental order book | Incremental ROAS |
|---|---|---|---|---|---|---|---|---|
| **2027** Google remarketing | 60k | 50 (CPQE 1,200) | 27% | 13.5 | SEK 1.34 M | 25% | SEK 0.33 M | 5.6x |
| 2027 Programmatic test | 30k | 14 | 18% | 2.6 | SEK 0.26 M | 50% | SEK 0.13 M | 4.3x |
| 2027 Affiliate pilot (H2) | 20k fees + 30k commission | n/a | n/a | 6 | SEK 0.59 M | 50% | SEK 0.30 M | 5.9x (on 50k fees + commission) |
| **2027 total** | **140k** | | | | **SEK 2.2 M** | | **SEK 0.76 M** | **5.4x** |
| **2028** Google remarketing | 80k | 73 (CPQE 1,100) | 27% | 19.6 | SEK 2.0 M | 25% | SEK 0.50 M | 6.2x |
| 2028 Programmatic | 50k | 24 | 18% | 4.3 | SEK 0.43 M | 50% | SEK 0.22 M | 4.3x |
| 2028 Affiliate | 30k fees + 101k commission | n/a | n/a | 20 | SEK 2.0 M | 50% | SEK 1.0 M | 7.6x |
| **2028 total** | **261k** | | | | **SEK 4.4 M** | | **SEK 1.7 M** | **6.5x** |

Notes:
- Incremental ROAS here is incremental order book divided by total spend including commission; the margin test is incremental gross profit (20%) minus cost: 2027 about SEK 152k - 140k = about +12k; 2028 about SEK 340k - 261k = about +79k. **Roughly break-even.** The leak is commission on non-incremental bookings, which is why the contract is new-customer-only.
- Affiliate ROAS counts network fees and commission as cost of sale.
- Incremental booked value is **inside** L2 (retargeting), L3 (programmatic) and L8 (affiliate/partners); it is not an addition to the 24.4 MSEK core bridge, and affiliate bookings from creators must not also be counted under L5 (ws 11 owns creators; one booking, one lever). The bridge counts departure-year turnover (strategy A8): bookings made in H2 2027 (the affiliate pilot, the Sep-Oct programmatic test) depart mostly in 2028, so the 2027 departure-year contribution is well below the SEK 0.8 M booked value and the 2028 figure includes carry-over.
- **Lower-yield sensitivity (qualified enquiry = raw enquiry, 80% quote rate applied):** 2027 remarketing incremental ROAS 4.5x, programmatic 3.4x, total incremental order book about SEK 0.67 M, total 4.8x, margin test about -SEK 7k; 2028 remarketing 5.0x, programmatic 3.5x, total about SEK 1.6 M, 6.1x, margin test about +SEK 55k. Both cases keep the workstream near break-even and neither supports raising the budget.
- The 2028 totals exclude the SEK 20k "other tests" line (TikTok/Pinterest), which has no forecast.
- Planning values only: no account data exists.
- Attributed bookings are for tracking and are not a target.
- Marginal marketing cost per marketing-created booking for this ws: 2027 about SEK 140k / (13.5 x 0.25 + 2.6 x 0.5 + 6 x 0.5 = about 7.7 incremental bookings) = about SEK 18.2k; 2028 about SEK 261k / (4.9 + 2.2 + 10 = about 17 incremental bookings) = about SEK 15.3k. Both under the SEK 20k cap [RP6], but these are planning values, not evidence.

### 8.3 Stop-loss and reallocation
- Any channel with holdout ROAS under 4x after 8 weeks is paused (strategy 11.2); a channel at 4-5x continues at the same budget; at or above 5x for two consecutive quarters it may scale.
- Unspent budget returns to Search Tranche A (high-intent) first, never to Tranche B.
- If cumulative programme net contribution is worse than -3.0 MSEK at 30 Jun 2027 or two gate metrics miss, freeze everything in this ws except RM5-RM7 and the Search-linked remarketing minimum (strategy stop-loss).

---

## 9. Owners (RACI by role)

| Activity | Responsible | Accountable | Consulted | Informed |
|---|---|---|---|---|
| Audience design, lists, exclusions | Performance marketer | Head of Marketing | Analytics lead, CRM manager | Growth council |
| Consent mode, server tagging, offline import | Analytics lead | Head of Marketing | DPO/legal, web developer | CFO |
| Creative and Swedish copy | Content/brand lead | Head of Marketing | Head of Product, legal | Head of Sales |
| Holdout design and reads | Analytics lead | Head of Marketing | CFO | Growth council |
| Affiliate policy, contracts, partners | Head of Sales | CEO | CFO, Head of Marketing, legal | Growth council |
| Commission and margin guardrail | CFO | CEO | Head of Product | Head of Marketing |
| Customer Match lists, lawful basis | CRM manager | DPO | Legal | Head of Marketing |
| Adviser coordination (no overlap with follow-up cadence) | Head of Sales | Head of Sales | CRM manager | Performance marketer |

---

## 10. Dependencies

1. Tracking v1 and consent (30 Nov), full measurement (31 Jan): blocking.
2. CRM with source, partner code, consent flag, stage and quote timestamps; ability to export a consented list (strategy P3); CRM tool and email list size are unknown.
3. Response-time SLA met (hard stop on budget increases, G8); service gate (Trustpilot 4.2+).
4. Supply: only advertise departures actually held; paid ads for sold-out or non-allocated departures paused the same day (ws 06 rule).
5. Margin by product from ws 03 (needed for commission tiers).
6. Landing pages and calculator from ws 04/05 for RM1/RM3 audiences.
7. Kammarkollegiet guarantee notification (13 Nov) before any volume-lifting campaign wave; guarantee wording in copy.
8. Search budget reallocation of SEK 15k (section 8.1).
9. Creator programme (ws 08 social) for overlap rules with creator affiliate codes.

---

## 11. First 30 days (2 Nov - 2 Dec 2026)

| By | Task | Owner | Done when |
|---|---|---|---|
| 6 Nov | Audit existing accounts: Google Ads/GA4 remarketing tags, existing audiences and lists, existing affiliate/network arrangements (R07 data request 9), current consent banner and CMP | Performance marketer | One-page inventory; list sizes and ages known |
| 9 Nov | Confirm owner, access and billing for Google/Meta accounts; agree naming/UTM; confirm no existing partner or coupon sites bidding on brand | Head of Marketing | Access list; UTM guide |
| 13 Nov | Legal brief: cookie/ePrivacy and IMY guidance, GDPR basis for retargeting and Customer Match, influencer/affiliate disclosure | Legal / DPO | Written answer or open-questions list |
| 16 Nov | Define RM1-RM4 events and tag plan; no remarketing tag fires before consent mode is live | Analytics lead | Event spec signed |
| 20 Nov | Consent mode v1 live; server-side tagging spec; CRM field spec (`partnerkod`, source, consent flag) | Analytics lead, CRM manager | Spec signed; CMP test passed |
| 23 Nov | **Switch on remarketing tags (consent-gated) so lists start filling**, if the 13 Nov legal answer allows | Analytics lead | Lists show non-zero consented users |
| 23 Nov | Draft affiliate commission policy and contract template (4-5% cap, new customers only, clawback); CFO sign-off request | Head of Sales + CFO | CFO comments received |
| 27 Nov | Shortlist 20 publisher candidates (niche authorities, media); compare Adtraction and Awin on fees, Swedish publisher base, tracking for phone bookings (request quotes) | Head of Sales | Shortlist; two network quotes |
| 30 Nov | Tracking v1 live: audience events, UTM, `how did you hear` field | Analytics lead | Weekly dashboard shows source split |
| 2 Dec | First audience size read; confirm pre-Gate-1 cap split (Meta 180k, Search max 305k, remarketing 15k); holdout design draft | Head of Marketing + Analytics | Decision logged; draft design circulated |

Not done in the first 30 days: any programmatic or affiliate spend, any price comparison listing, any partner contract signature.

---

## 12. Risks

| # | Risk | L / I | Signal | Mitigation | Owner |
|---|---|---|---|---|---|
| 1 | Low consent rate shrinks lists below platform minimums | M / H | Consent under 50%; list sizes under minimums | Consent banner optimisation without dark patterns; first-party email lists; broaden windows; shift weight to email/CRM | Analytics lead |
| 2 | Retargeting claims credit for bookings that would have happened | H / M | Holdout incrementality under 20% | Holdouts; cap at SEK 60-80k; attributed ROAS not a target | Head of Marketing |
| 3 | Affiliate commission on existing customers breaches margin floor | H / H | Post-commission margin under 15% | New-customer-only clause; 5% cap; CFO per-product approval; clawback | CFO |
| 4 | Coupon/cashback or brand-bidding partners poach brand demand | M / M | Branded search share drop; partner traffic on brand terms | Banned in contract; weekly brand SERP monitor | Head of Marketing |
| 5 | Programmatic traffic low-quality, fraud or brand-safety issues | M / M | High bounce, zero enquiries | Contextual only, allow-lists, small test, kill rule | Performance marketer |
| 6 | Sales overload: more leads than SLA allows | M / H | Response time breached | Budget never rises while SLA missed; cut to Tranche A after two weeks (G8) | Head of Sales |
| 7 | Legal/disclosure error (undeclared advertising, price claim, package-law) | L / H | Complaint, Konsumentverket/IMY contact | Counsel review; templates; archive; "Annons" labelling | Legal |
| 8 | Customer fatigue from stacked Search + Meta + Google follow-up | M / M | Unsubscribe, complaints, frequency over cap | Shared exclusions and frequency budget; adviser-first logic | Performance marketer |
| 9 | Phone and email bookings not attributed to partners | H / M | Many "no source" bookings | Partner code, landing URL, adviser prompts, `how did you hear` | CRM manager |
| 10 | Test results inconclusive due to low volume | H / M | Confidence interval spans zero | Pooled reads; default to not scaling; extend only one test at a time | Analytics lead |
| 11 | Platform policy changes (consent, audience restrictions) | M / M | Policy notice | Prefer first-party lists; keep email and referral alive | Head of Marketing |

---

## 13. Reporting

Weekly one-page (merged into the strategy dashboard): remarketable pool size and consent rate; spend and CPQE by audience; share of quote recipients reached within 7 days (target 70%+ in ws 07); frequency distribution; affiliate bookings, commission paid, post-commission margin, share new customers; holdout cell results; marginal marketing cost per marketing-created booking. Monthly growth council: keep, cut or scale decisions per channel using the rules above.

---

## 14. Assumptions to replace with real data

| ID | Assumption | Rationale | Replace with |
|---|---|---|---|
| RP1 | Consent rate 55% | Industry-typical for opt-in; no Swedish figure found (R09) | CMP analytics |
| RP2 | Remarketable pool 10k (Mar 2027), 25k rolling 180-day (Dec 2027); 25-45k users in 2027 and 52-86k users in 2028 at core traffic | 134-223k sessions x 70% unique x 55% consent; traffic baseline unknown; tags live only from late Nov 2026 | GA4 and CMP data |
| RP3 | 70% of sessions are unique users | Typical order of magnitude, unsourced | GA4 |
| RP4 | Retargeting incrementality 25% (floor), affiliate and programmatic 50% | Judgement; retargeting is typically heavily non-incremental | Holdout results |
| RP5 | CPQE SEK 1,200 (2027) and 1,100 (2028) on Google remarketing | Between Search A (about 890-940) and B (about 1,450-1,500) in ws 06; Meta retargeting SEK 300-900 | Account data after 60 days |
| RP6 | Marginal cost cap for this ws SEK 30k (2027) and 20k (2028); computed values about SEK 18.2k (2027) and 15.3k (2028) | Strategy G4 cap SEK 20k blended | Finance and CRM |
| RP7 | Self-serve contextual/native network with no minimum above SEK 15k exists in Sweden | Not verified | Vendor quotes |
| RP8 | Cold display qualified-enquiry rate 0.2% (vs 0.51% generic CVR) | High-ticket, human-assisted product; R07 cautions | Test data |
| RP9 | FX 9.5 SEK/USD for converting R07 USD benchmarks | Assumption | Current rate |
| RP10 | Search can stay at or under SEK 305k to Gate 1 | Meta uses 180k, remarketing 15k, cap 500k | Head of Marketing decision |
| RP11 | Affiliate network fees SEK 20k (2027) and 30k (2028) | Fee structures of Adtraction and Awin not found | Network quotes |
| RP12 | Affiliate volume 6 bookings (H2 2027) and 20 (2028) | Judgement on 8-10 niche partners; no Swedish long-haul benchmark | Pilot data |
| RP13 | Platform minimum list sizes and conversion-lift budget minimums | Not researched; stated as [VERIFY] | Platform documentation |
| RP14 | Cookie/ePrivacy and IMY interpretation, Customer Match lawful basis, influencer labelling rules | R09 marks all as [VERIFY]; no primary sources read | Counsel |
| RP15 | Customer Match match-rate floor, invalid-traffic limit 5%, bounce 1.3x site average, 1.5 qualified enquiries per 1,000 programmatic clicks | Judgement thresholds; no benchmark found | First upload, vendor reports, test data |
| RP16 | Partner attribution window 60 days (CRM lead record as record of truth) | Published programmes use 30 days (R07), short for a 4-12 month sales cycle | Pilot data, CRM lead-to-booking lag |
| RP17 | Qualified enquiry = enquiry that receives a quote (ws 07 definition); 27% and 18% close apply to it | Needed to reconcile with strategy's 80% quote rate; unconfirmed | CRM definitions |

Inherited strategy assumptions used: A1 (SEK 45-46k per traveller, 2.2 travellers), A7 (20% margin), A10 (close 25-27% existing, 18% new), A15, A17 (commission 5-8%, narrowed here to 4-5%), A18.

### Sources
- https://swell.country/blogs/marketing/google-ads-benchmarks/ ; https://usermaven.com/blog/google-ads-benchmarks (display CPC, CTR, CVR; via R07)
- https://backlinko.com/affiliate-marketing-travel (G Adventures 6%, Viator 8% with 30-day cookie; via R07)
- https://timeless.tours/affiliate-program-in-tour-companies-everything-you-need-to-know/ (5-20% tour-operator affiliate; via R07)
- https://support.google.com/tagmanager/answer/13695607?hl=en ; https://datarevolt.agency/blog/google-consent-mode-v2-complete-guide (EEA consent signals and remarketing audiences)
- https://adtraction.com/partners/ ; https://www.awin.com/ (affiliate networks)
- https://www.ticket.se/charter/sydafrika ; https://africantours.se/sydafrikaresor/ (comparison/price-led competitive context)
- Internal: /docs/00-strategy.md, /docs/research/07, 08, 09, 11, 12; /docs/workstreams/06-google-ads.md, 07-meta-ads.md
