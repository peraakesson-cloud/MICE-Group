# 31 - Legal and compliance: package travel law, resegaranti, T&Cs, GDPR, marketing law, influencer disclosure, checklist

Owner: Legal / Compliance lead (internal hat held by Head of Operations until a named person is appointed, per WS24; external Swedish travel and marketing-law counsel by the hour). Executive sponsor: CEO. Co-owners: CFO (guarantee, cash, fees), DPO (GDPR), Head of Marketing (ads, influencers), Tech lead (checkout, consent).
Date: 2 Nov 2026. Plans in English; customer-facing copy blocks in Swedish.
Inherits: /docs/00-strategy.md (north star, gates, A24 cash and exposure, A25 stop-loss, positioning "jourtelefon under resan"), /docs/research/09-regulation-trust.md (R09), WS25 tech stack sections 7 and 11, WS28 budget ("never cut: compliance and legal review").
Status: planning draft with NO internal company data. This is a compliance programme plan, not legal advice. Every legal reading below must be confirmed by Swedish counsel before it is relied on. Facts carry a source URL; everything else is [ASSUMPTION] or [VERIFY] and is listed in section 15 so the CEO can replace it with real data.

---

## 1. Objectives

Compliance is a gate on the growth plan, not an afterthought. Growing turnover by about 60% (core, 64.4 MSEK) to 100% (stretch, 80 MSEK) scales guarantee exposure, fund fees, complaint volume, ad volume and personal data volume by roughly the same factor. The programme has seven objectives.

| # | Objective | Target | By |
|---|---|---|---|
| O1 | Guarantee is always sufficient for the order book: Kammarkollegiet informed of growth before it happens, bank/insurer limit in place before the sales that need it | Zero weeks with booked guarantee-liable turnover above the approved guarantee; growth notice given to Kammarkollegiet before the 1 Dec 2026 campaign start (strategy 16.1), revised forecast filed before each gate release | Continuous; first call 13 Nov 2026, preliminary filing 27 Nov 2026, revised at Gate 0 (15 Dec 2026) |
| O2 | Every sales surface (site, quote, checkout, e-mail, PDF) gives the legally required pre-contract information, including the resegaranti standard form, and treats package vs stand-alone deliberately | 100% of live product/checkout templates pass the checklist in section 12 | 31 Jan 2027 (core templates); 31 Mar 2027 (all) |
| O3 | T&Cs are current, readable, consistent with supplier terms, and the price-change, cancellation, deposit and refund clauses are matched to what the company can actually recover | Counsel-approved Swedish T&Cs v2 live; supplier-to-customer terms gap log closed for the top 20 suppliers by volume | 31 Jan 2027 |
| O4 | GDPR and cookie rules are met without destroying measurement: lawful basis per purpose, consent evidence, DPAs, retention, DPIA screening | DPAs signed with 100% of processors; consent log live; record of processing current | 15 Dec 2026 (DPAs), 31 Mar 2027 (retention) |
| O5 | All marketing (own, paid, social, creators, partners) complies with the Marketing Act: no hidden advertising, no misleading price or safety claims, evidence file per claim | Zero Konsumentverket/Marknadsetiska/court findings; 100% of creator posts labelled; 100% of price claims archived | Minimum pack live before the 1 Dec 2026 paid test and early-booking campaign (D0); full programme from Jan 2027 |
| O6 | Complaint and dispute handling scales without losing ARN trust signals | First reply to complaints within 7 days (new EU standard, used now); reasoned reply within 30 days internally (EU limit 60); ARN cases per 1,000 travellers tracked | Live 31 Jan 2027 |
| O7 | Regulatory change is anticipated: SFS 2026:97 guarantee rule, EU Directive 2026/1024 transposition (about Sep 2028 [VERIFY]), accessibility rules | Legal watch log reviewed monthly; Directive re-engineering plan in hand before transposition (matches WS29 2028 O6) | Plan by 30 Jun 2028 |

---

## 2. Legal map (what applies, sourced)

Source for all rows unless stated: R09 and the primary pages it cites. Re-verify each at the time of use.

| Area | What the authority or law says | Source | What it means for sydafrikaresor.se |
|---|---|---|---|
| Package Travel Act (Paketreselagen 2018:1217) | Package = two or more different travel services combined (transport + stay, etc.) lasting 24 h or more or including an overnight stay. Pre-contract information, price-change limits (only fuel, taxes/fees, exchange rates; at least 20 days before departure; over 8% the traveller may cancel with full refund), right to terminate before departure (fee may apply, none for unavoidable and extraordinary circumstances at the destination; confirm exact conditions with counsel), refund within 14 days after termination, liability for errors during the trip | https://www.konsumentverket.se/lagar/paketreselagen-konsument/ ; https://www.konsumentverket.se/marknadsratt-foretag/resor-for-foretag/ ; https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/paketreselag-20181217_sfs-2018-1217/ | Flight + lodge + car + safari is a package. FX clauses must be explicit; hedge the margin (A24: 60% foreign-currency cost, 6% price buffer, 50-70% hedge) rather than rely on surcharges, because a >8% increase gives a free exit |
| Resegarantilagen 2018:1218 as amended by SFS 2026:96 and 2026:97 | Guarantee must exist before a package is offered; operator notifies Kammarkollegiet; if sales are set to rise, report immediately with a new forecast; sanction fee SEK 5,000 to 10,000,000 (max 10% of prior-year turnover) | https://lagen.nu/2018:1218 ; https://www.kammarkollegiet.se/vara-tjanster/resegaranti/betala-avgift-till-resegarantifonden | Growth notice is a launch gate (section 4) |
| Fund fee | 0.6% of package price for trips booked from 1 Apr 2026, reported and paid three times a year (report 31 May / 30 Sep / 31 Jan; pay 10 Jun / 10 Oct / 10 Feb); reported by departure month under penalty of perjury; continues until the fund reaches SEK 1.5 bn | https://www.kammarkollegiet.se/vara-tjanster/resegaranti/betala-avgift-till-resegarantifonden | Cost of sales line at 0.6% of package price. Upper bound if all turnover is guarantee-liable packages: about SEK 0.29 M on 48 MSEK (2027) and about SEK 0.39 M on 64.4 MSEK (2028), arithmetic. Strategy 12.1 carries only the incremental levy (0.05 / 0.15 MSEK); confirm the baseline levy is already in the P&L (WS27) |
| Individual guarantee level | Today: reductions as the fund hits milestones (SFS 2026:96). Enacted, not in force: 6.25% of guarantee-liable annual turnover, adjustable by risk (SFS 2026:97, in force "the day the government decides") | https://lagen.nu/2018:1218 ; Prop. 2025/26:45 [VERIFY: bill reference not opened in R09] | Illustration only: 6.25% of 48 MSEK = 3.0 MSEK; of 64.4 = 4.0; of 80 = 5.0 (upper bound if all turnover is guarantee-liable). Strategy A19 / section 12.4 uses a 1.5-3.7 MSEK increment on core turnover (6.25-15%), 2.5-6.0 at 80 |
| EU Directive (EU) 2026/1024 | Amends 2015/2302; in force 28 May 2026; 28 months to transpose; linked travel arrangements removed; online add-ons within 24 h can become a package; vouchers only with consent; wider free cancellation (including reasonably expected disruption); complaints acknowledged in 7 days, reasoned reply in 60; insolvency refunds in 6 months. Final prepayment rule NOT confirmed | https://www.lexology.com/library/detail.aspx?g=83c11353-0dd6-457e-affe-b598ae2fb4c5 ; https://www.abta.com/news/ask-expert-revised-eu-package-travel-directive-and-how-it-may-affect-you | Cross-sell journeys must be re-engineered by 2028; deposit policy must stay configurable (WS25 section 7) |
| Marketing Act (marknadsföringslagen) - hidden advertising | Hidden advertising is prohibited; labelling must be clear on a fleeting glance; the company that hired the influencer carries main responsibility, cannot contract it away, and is liable even for claims the influencer makes on own initiative; serious breaches can lead to a sanction fee of up to 4% of annual turnover | https://www.konsumentverket.se/marknadsratt-foretag/influencers-reklaminlagg-regler-for-foretag/ (reviewed 3 Sep 2026) | 4% of 48 MSEK is up to SEK 1.9 M. Creator contracts, briefs, pre-approval and post-publication checks are mandatory (section 8) |
| Marketing Act - price information | Price must include tax and additional costs; travellers need not pay costs they were not told about | https://www.konsumentverket.se/marknadsratt-foretag/resor-for-foretag/ ; https://www.konsumentverket.se/konsumentratt/felaktig-prisinformation/ | "Fran" prices in ads must be actually bookable including taxes, fuel surcharges, fees, and state what is included (flights or not, per person) |
| Electronic marketing (e-mail/SMS) | Consent required for individuals with a narrow existing-customer exception; section number and conditions not verified | Secondary: https://www.mailer.se/gdpr-samtycke-e-postmarknadsforing/ ; https://kundkanalen.se/gdpr-e-postmarknadsforing | [VERIFY] with counsel; draft the list rules conservatively (opt-in everywhere; separate transactional from marketing) |
| Cookies and tracking | Electronic Communications Act (2022:482) chapter 9 section 28: data may be stored in or read from a user's terminal only if the user has information about the purpose and consents (secondary reading: PTS supervises, IMY enforces GDPR) | https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2022482-om-elektronisk-kommunikation_sfs-2022-482/ ; secondary https://kukie.io/blog/cookie-consent-sweden-imy-rules | Granular opt-in banner; no ad/analytics tag fires before consent (WS16 QA). Plan measurement for lower consented coverage |
| GDPR | Standard rules apply to CRM, call recording, lookalikes, retargeting; no primary source read in R09. Figures used in this plan (one-month response to data subject requests, 72-hour breach notification to IMY) come from the Regulation text, to be re-checked by the DPO | https://eur-lex.europa.eu/eli/reg/2016/679/oj [VERIFY articles 12, 33] ; otherwise [ASSUMPTION] | DPO and counsel to confirm legal basis per purpose (section 9) |
| ARN and dispute resolution | ARN fee SEK 150, about 6 months handling, one year from first complaint; Konsumentverket supervises the Act | https://www.konsumentverket.se/lagar/paketreselagen-konsument/ | Track ARN cases; state "we follow ARN decisions" only if true [VERIFY with CEO] |
| Accessibility | New accessibility law effective 28 Jun 2025 (passenger transport); whether it or the e-commerce accessibility rules cover the booking site is not researched | https://www.konsumentverket.se/marknadsratt-foretag/resor-for-foretag/ | [VERIFY] with counsel; WS25 already targets WCAG 2.1 AA on quote and payment flows by 31 Mar 2027 |

---

## 3. Approach and principles

1. **Compliance gates growth, in writing.** No gate release (Gate 0 15 Dec 2026, Gate 1 31 Mar 2027, Gate 2 30 Jun 2027, Gate 3 31 Oct 2027, Gates 4 and 5 31 Mar and 30 Jun 2028, as in strategy 16.2) without a one-page Legal sign-off covering guarantee headroom, T&C/info status, consent status and open findings. Legal has a veto on a specific campaign or product, escalated to the CEO within 24 hours.
2. **Design legal status into product.** Each product (guided departure, tailor-made, extension, safari add-on, car-only, hotel-only) is classified once as package, stand-alone, or (until transposition) linked arrangement, recorded in a product register, and the checkout flows from that classification.
3. **Match customer terms to supplier terms.** The company must not promise a refund it cannot recover. Every product has a supplier-terms gap line.
4. **Say less, prove more.** Claims about safety, guarantee, price, "specialist since 2003", guide quality, reviews and response times each need an evidence file entry. Claims the company cannot yet staff (24/7 local presence) are not made; copy says "jourtelefon under resan" (strategy positioning).
5. **Counsel by the hour, internal owner by name.** Use external counsel for first-time opinions and templates, then run the checklist internally. Do not hire a full-time lawyer in the core plan (WS24 treats legal as an ops hat plus external counsel).
6. **Compliance money is never cut** (WS28 rule). Stretch scope (Nordic extension GL1, wholesale GL4, acquisition GL3) adds new legal workstreams that are funded only with the gate that releases them (section 11).

---

## 4. Workstream A - Resegaranti and capital (CFO + Legal)

### 4.1 Tactics

| ID | Action | Owner | Date |
|---|---|---|---|
| A1 | Collect current facts: guarantee instrument, amount, issuer, annual cost, renewal date, last forecast filed with Kammarkollegiet, share of 40 MSEK that is guarantee-liable package turnover (needed before the 13 Nov call, so due earlier than v1) | CFO | 11 Nov 2026 |
| A2 | Build the guarantee headroom model: guarantee-liable turnover by month x payment-to-departure lag x repatriation estimate (the factors Kammarkollegiet weighs, R09 section 3.1) under 3 rules: today's fund-linked step-down; 6.25% rule; risk add-on case | CFO | 27 Nov 2026 |
| A3 | Growth-forecast call with Kammarkollegiet (strategy 16.1 sets 13 Nov, before any campaign): present the 2027 plan as core 48 MSEK (46-50) with the 2028 trajectory 64.4 and the stretch case; ask how a forecast revision is filed, expected processing time, and what evidence they weigh. Record answers. Follow-up meeting with the headroom model by 11 Dec | CFO + CEO | Call 13 Nov 2026; follow-up by 11 Dec 2026 |
| A4 | Open the bank/insurer limit dialogue for the planned increase (strategy A19 / 12.4: 1.5-3.7 MSEK increment at core, 2.5-6.0 at 80; strategy G6 and 12.4 require negotiating guarantee, hedge and liquidity lines together), include fee quotes and collateral terms; confirm lead time | CFO | Start 13 Nov 2026 (strategy 16.1); term sheet by 15 Jan 2027 (strategy: liquidity term sheet 31 Jan 2027) |
| A5 | Give Kammarkollegiet a preliminary growth notice before the 1 Dec 2026 early-booking campaign and paid test, then file the revised forecast at Gate 0 (before allocation commitments rise and before any ad spend ramp); re-file at each gate (Gates 1, 2, 3) and immediately if 4-week rolling bookings run 15% or more above forecast [ASSUMPTION trigger] | CFO | Preliminary 27 Nov 2026; revised 15 Dec 2026; then each gate |
| A6 | Set up the fund-fee process: monthly reporting by departure month, tertial filing dates in calendar (report 31 Jan, 31 May, 30 Sep; pay 10 Feb, 10 Jun, 10 Oct), reconciliation to the booking system, sign-off by CFO because reporting is under penalty of perjury | Finance controller | First run: period 1 Sep - 31 Dec 2026, report 31 Jan 2027, pay 10 Feb 2027 |
| A7 | Check the 1 Apr - 31 Aug 2026 report (due 30 Sep, pay 10 Oct 2026) was filed and paid; if not, fix immediately | Finance controller | 6 Nov 2026 |
| A8 | Liquidity linkage: peak working capital 5-12 MSEK and liquidity facility 10-15 MSEK are in A24; Legal confirms the facility covenants do not conflict with the guarantee instrument (cross-default, collateral overlap) | CFO + counsel | 15 Jan 2027 |
| A9 | Refund-stress scenario: if a UD travel warning or extraordinary event forces cancellations, 100% refunds within 14 days. Model the strategy 12.4 shock (free cancellation of next-90-day departures, a 10-20 MSEK refund call within weeks) as the base stress, with 10% of the order book cancelling in 30 days as the mild case (strategy calls 10% too mild), against cash, the 10-15 MSEK facility and the supplier recovery share. Feeds shock case (38 MSEK 2027) | CFO | 31 Jan 2027 |
| A10 | Quarterly legal-watch check for the SFS 2026:97 commencement date; when announced, re-run A2 and A4 within 10 working days | Legal | Quarterly from 31 Jan 2027 |
| A11 | Add Kammarkollegiet "hitta reseaktorer med resegaranti" link and the company's own entry to footer, checkout, ad landing pages after confirming the entry is correct | Web lead + Legal | 31 Jan 2027 |

Reference link for the public lookup: https://www.kammarkollegiet.se/vara-tjanster/resegaranti/hitta-reseaktorer-med-resegaranti

### 4.2 Guarantee gates (binding rules for the programme)

- No Tranche B paid release, and no allocation or prepayment commitment above the SEK 4 M prepaid supply cap (A24), unless the guarantee headroom model shows headroom of at least 15% above the forecast order book [ASSUMPTION threshold]. Strategy G6 additionally requires a three-month buffer; the stricter of the two applies until the CFO defines them as one rule.
- Guarantee headroom is a standing line in the weekly CEO dashboard (order-book SEK versus approved guarantee), next to the north-star metric.
- If the 6.25% rule is announced with an effective date inside a gate window, the gate decision includes the capital effect.

---

## 5. Workstream B - Package travel information, product register and checkout

### 5.1 Tactics

| ID | Action | Owner | Date |
|---|---|---|---|
| B1 | Product classification register: every sellable product and every cross-sell pairing tagged package / stand-alone / linked, with the legal reason, guarantee-liable yes/no, and the information blocks it needs | Legal + Product manager | 15 Dec 2026 (existing range); new products before launch (L9 supply-readiness gate adds a legal line) |
| B2 | Pre-contract information blocks, in Swedish, for product page, quote PDF, checkout and confirmation: organiser identity and contact, total price incl. taxes and extra costs, health/passport/visa notes, cancellation right and fee, minimum participants and notice date, insurance information, resegaranti standard form | Legal + Web lead | Draft 4 Dec 2026; live 31 Jan 2027 |
| B3 | Use the official resegaranti standard form text exactly (Konsumentverket requires a special standard form) and keep a dated copy of the version shown at each time | Legal | 4 Dec 2026 |
| B4 | Confirmation copy of contract sent automatically right after booking, stored with immutable timestamp | Tech lead | 31 Mar 2027 |
| B5 | Quote-to-contract trail: every quote PDF carries version, validity date, price basis (flight inclusive or not, per person), FX basis and the same information blocks, so a quote is never "marketing only" while the booking is something else | Sales ops | 31 Jan 2027 |
| B6 | Price-change engine: clause allows only fuel, taxes/fees, exchange-rate changes; notice at least 20 days before departure; automatic flag when a change exceeds 6% (internal alert below the 8% free-exit limit) | Tech lead + CFO | 31 Mar 2027 |
| B7 | Cross-sell journey design rule: any add-on offered during or right after a purchase (safari, car, extra nights) is either (a) sold inside the same contract as a package, or (b) shown with a clear notice that it is a separate stand-alone contract without package protection. Keep both options configurable so the 2028 rule change is a configuration, not a rebuild | Product manager + Web lead | Design 31 Mar 2027; re-engineering plan 30 Jun 2028 |
| B8 | Deposit and final-payment schedule is a configurable policy per product (final EU prepayment rule NOT confirmed [VERIFY]); default schedule set by CFO with Legal; reviewed at each directive/transposition update | CFO + Legal | 15 Jan 2027 |
| B9 | Cancellation, substantial change and force majeure playbook: who decides "unavoidable and extraordinary circumstances", template letters, 14-day refund timer, supplier recovery steps | Head of Ops + Legal | 28 Feb 2027 |
| B10 | Vouchers: do not issue vouchers instead of refunds unless the customer expressly agrees; track per the new Directive (max 12 months, protected) once transposed | Head of Ops | Policy 28 Feb 2027 |
| B11 | Accessibility check of quote and payment flows against WCAG 2.1 AA; counsel confirms whether the Swedish accessibility rules apply to the booking service (WS25 T-A12) | Web lead + Legal | 31 Mar 2027 |
| B12 | Insurance information: state whether insurance is recommended or required, who provides it, and that the company is not giving insurance advice beyond what its licence permits [VERIFY: insurance-intermediation registration status and rules applicable to selling travel insurance, relevant to L6] | Legal | 31 Jan 2027 |

### 5.2 Product page and checkout template (Swedish copy blocks, for counsel review)

These are draft blocks. The resegaranti block must be replaced by the official standard form text.

- Pris: "Priset gäller per person om inget annat anges. Flyg [ingår / ingår inte]. Skatter och avgifter som är kända vid bokning ingår. Kostnader som inte ingår: [lista]."
- Resegaranti: "[Officiell standardtext från Kammarkollegiet/Konsumentverket]. Du kan kontrollera att vi har resegaranti hos Kammarkollegiet: [länk]."
- Prisändring: "Priset kan höjas endast på grund av ändrade bränslekostnader, skatter eller avgifter, eller ändrade växelkurser. Du får besked senast 20 dagar före avresa. Om höjningen är större än 8 % av priset kan du avboka resan utan avgift och få pengarna tillbaka."
- Avbokning: "Du kan avboka resan före avresa. Avbokningsavgiften framgår av våra resevillkor: [tabell]. Vid oundvikliga och extraordinära omständigheter på resmålet betalar du ingen avbokningsavgift och får pengarna tillbaka." [Counsel to confirm the wording against the Act's conditions.]
- Jourtelefon: "Under resan når du vår jourtelefon på [nummer]. [Öppettider och svarstid enligt faktisk bemanning.]"
- Ansvarig arrangör: "[Bolagsnamn, organisationsnummer, adress, e-post, telefon]."

### 5.3 Further Swedish copy blocks (draft for counsel)

- Nyhetsbrev (checkbox, not pre-ticked): "Ja tack, jag vill få inspiration, erbjudanden och reseråd om Sydafrika från Sydafrikaresor via e-post. Du kan när som helst avsluta prenumerationen. Läs mer i vår integritetspolicy: [länk]."
- Cookie banner, first layer: "Vi använder cookies för att webbplatsen ska fungera och, om du tillåter det, för statistik och marknadsföring. Du väljer själv. [Godkänn alla] [Endast nödvändiga] [Inställningar]"
- Samtalsinspelning (start of call): "Samtalet kan spelas in för utbildning och kvalitetssäkring. Vill du inte bli inspelad säger du till, så avbryter vi inspelningen."
- Säkerhet (safety page lead): "Brottsligheten i Sydafrika är hög, men de allra flesta besök förlöper utan allvarliga händelser, enligt Sveriges ambassad. Så här planerar vi för din trygghet: förbokade transfers, körning i dagsljus, noga utvalda boenden och en genomgång före avresa. Aktuella resråd finns hos Utrikesdepartementet: [länk]." [Re-check the embassy wording at publication.]
- Bekräftelse av klagomål: "Tack för att du hör av dig. Vi har tagit emot ditt ärende och återkommer med ett motiverat svar senast [datum, högst 30 dagar]. Ärendenummer: [nr]." [Acknowledgement sent within 7 days.]

---

## 6. Workstream C - T&Cs (allmanna resevillkor)

### 6.1 Approach
Replace ad hoc terms with one counsel-approved set in Swedish (English summary for non-Swedish speakers), modular by product type, with an annex for guided departures (minimum group size, guide change rights) and tailor-made trips (supplier payment schedules, non-refundable elements).

### 6.2 Tactics

| ID | Action | Owner | Date |
|---|---|---|---|
| C1 | Collect current T&Cs, quote disclaimers, supplier contracts for top 20 suppliers by volume, and ARN history for 3 years | Head of Ops | 20 Nov 2026 |
| C2 | Gap analysis of current T&Cs vs Package Travel Act, resegaranti information duties, marketing law, plain-language standard; produce redline | External counsel | 11 Dec 2026 |
| C3 | Supplier-terms gap log: for each of the top 20 suppliers, compare supplier cancellation, change and payment terms with customer terms; flag where the company bears unrecoverable cost; propose fix (customer terms, price buffer, supplier renegotiation, insurance) | Head of Ops + CFO | 15 Jan 2027 |
| C4 | T&Cs v2 issued: guided vs tailor-made modules, minimum group notice date, price-change clause, cancellation table, force majeure, complaints (7-day acknowledgement) and ARN reference | Counsel + Legal | 31 Jan 2027 |
| C5 | Complaint-handling procedure: acknowledgement within 7 days, reasoned reply within 30 days, escalation rules, root-cause tagging, monthly review | Customer experience lead | 31 Jan 2027 |
| C6 | Version control: every booking stores the T&C version accepted; archive all versions with dates | Tech lead | 31 Mar 2027 |
| C7 | Group and MICE terms annex (GL2 cross-sell) and partner/wholesale terms (GL4) drafted only when the gate releases them | Counsel | Before Q2 2027 pilots |
| C8 | Annual T&C review plus event-driven review on SFS 2026:97 commencement and on directive transposition | Legal | Each Nov; 2028 transposition |

---

## 7. Workstream D - Marketing law for ads, SEO and site

### 7.1 Rules the plan adopts

1. **Price claims:** every advertised price is bookable on the day of publication, includes taxes and mandatory fees, states per person, states whether flights are included, and has an end date or a stock note. "Fran" prices only where at least one bookable departure exists at that price. Positioning: we do not compete on lowest price (strategy), so avoid "billigast" and similar superlatives without proof.
2. **Evidence file:** a shared folder per campaign holding screenshot of ad, landing page at launch, price source, date range, availability proof, and approver. Retained for the period set by counsel [VERIFY].
3. **Superlatives and credentials:** "Sydafrikaspecialisten sedan 2003" and any "marknadsledande"/"fler resenarer an..." claims need documentation (founding date, volume data) before use. Counsel decides what is puffery and what needs proof.
4. **Safety claims:** never claim South Africa is "safe" in absolute terms. Use the official Swedish advice as the reference and describe what we do (pre-booked transfers, daytime driving, vetted lodges, briefing). Embassy wording to quote: despite very high crime, the vast majority of visits pass without serious incident (Sweden Abroad, updated 6 Oct 2026). Source: https://www.swedenabroad.se/sv/om-utlandet-f%C3%B6r-svenska-medborgare/sydafrika/reseinformation/ambassadens-reseinformation/
5. **Review claims:** only genuine, verified, recent reviews (WS12 Trustpilot programme); no selective publication that misleads; no incentives without disclosure; no fake or purchased reviews. Rating claims state source and date.
6. **"24/7" and response promises:** "svarar inom en timme" and any 24/7 claim used only while the SLA is demonstrably met (WS24 rule, strategy positioning). Until costed and staffed, copy says "jourtelefon under resan".
7. **Scarcity and urgency:** "sista platserna" / countdowns must reflect real allocation (WS14 hosted departures, supply). Pull claims when supply changes.
8. **Comparative and brand ads:** no comparison with named competitors unless objective, verifiable, like-for-like; keyword bidding on competitor names is allowed to be assessed by counsel [VERIFY] and ad copy must not imply affiliation.
9. **Ad platform policy:** Google and Meta travel/destination policies checked by the channel owners at campaign setup [VERIFY]; Legal reviews restricted-claims lists (health, safety, guarantee) once.
10. **Wildlife and activity content:** no imagery or offers that promote prohibited or ethically contested wildlife interactions without caveats (reputational check owned by Brand) [ASSUMPTION - not legal requirement].
11. **Sweepstakes and giveaways (WS10/WS20):** terms published, no purchase needed or clear terms if required, GDPR notice on entry, no obligation to buy [VERIFY gambling-law and lottery rules with counsel before the first giveaway].

### 7.2 Tactics

| ID | Action | Owner | Date |
|---|---|---|---|
| D0 | Minimum compliance pack before the 1 Dec 2026 paid test and early-booking campaign (strategy 16.1): checklist 12.2 applied manually to every ad and landing page; price claims limited to bookable supply-held departures with taxes/fees and per-person basis; no "billigast", "24/7", absolute "safe" or unproven "största" claims; retargeting and custom audiences off until F7; no marketing e-mail to list segments (b) and (c) of F6; one test-browser check that no ad/analytics tag fires before consent; Kammarkollegiet notice given (A5); counsel sign-off on the landing page legal pack (D4, interim version). Without this the campaign date moves | Legal + Head of Marketing | 27 Nov 2026 |
| D1 | Marketing-claims register: each repeated claim with evidence, approver, expiry; Head of Marketing cannot publish a claim not in the register | Legal + Head of Marketing | 15 Dec 2026 |
| D2 | Ad pre-flight checklist (section 12) built into the ad workflow; sample audit of 10% of live ads monthly | Marketing ops | 15 Jan 2027 |
| D3 | Counsel training session (90 min) for marketing, sales and social teams on price information, hidden advertising, safety wording | External counsel | 20 Jan 2027 |
| D4 | Landing page legal pack: company details, guarantee link, price basis, T&C link, privacy link, complaint route | Web lead | 31 Jan 2027 |
| D5 | Monthly "live ads vs evidence" audit and a quarterly sweep of all site price claims vs bookable prices | Legal + Marketing ops | Monthly from Feb 2027 |
| D6 | Monitor Konsumentverket guidance updates (influencer, price information, sustainability claims) and Marknadsetiska/court rulings; log decisions relevant to travel | Legal | Monthly |
| D7 | Sustainability and green-season claims: any "hållbar", "ansvarsfull" or "ekoturism" claims need substantiation; avoid generic environmental claims [VERIFY current EU/Swedish rules on environmental claims] | Legal | Before any such claim is used |
| D8 | Keep a "pull-down" runbook: any ad or post can be paused within 4 hours of a Legal request; named deputies | Head of Marketing | 15 Jan 2027 |

---

## 8. Workstream E - Influencer, creator, hosted-departure and PR compliance

### 8.1 Rules (source: Konsumentverket, https://www.konsumentverket.se/marknadsratt-foretag/influencers-reklaminlagg-regler-for-foretag/, reviewed 3 Sep 2026)
- Posts for which the company pays money or provides benefits (including free or discounted trips, hosted departures, gifts) are marketing and must be clearly labelled as advertising.
- The label must be understood on a fleeting glance: placement, wording and colour matter; it is not enough if the viewer must scroll to find out.
- The company that commissions is mainly responsible and cannot contract the responsibility away; it can also be responsible for claims the influencer makes on own initiative. Influencers and intermediaries can have parallel responsibility.
- Serious breaches can lead to a sanction fee of up to 4% of annual turnover.

### 8.2 Programme tactics (links to WS11, WS10, WS17, WS20)

| ID | Action | Owner | Date |
|---|---|---|---|
| E1 | Creator contract template (Swedish): defined deliverables, disclosure obligation with wording and placement, approval and correction rights, takedown within 24 hours, claims allowed/prohibited, safety and wildlife conduct, content licence and usage period, GDPR for tagged participants, exclusivity, payment, termination | External counsel | 15 Jan 2027 |
| E2 | Creator brief with a one-page "Do and Don't" (Swedish): "Annons i samarbete med Sydafrikaresor" label in first line and on the visual in video, no price claims unless supplied by the company, no safety guarantees, no health or visa advice | Head of Marketing + Legal | 15 Jan 2027 |
| E3 | Approval workflow: draft reviewed by marketing before posting; Legal spot check on 20% in the first quarter, then 10% [ASSUMPTION] | Creator manager | From first creator post |
| E4 | Post-publication check within 24 hours of every post: label present and visible, claims within brief, screenshots stored in the evidence file | Creator manager | Per post |
| E5 | Hosted departures: written terms for hosts and guests (host receives a benefit = advertising when posting), guest consent for photo/video, minors rule, content licence | Legal + Events lead | Before first hosted departure (2027 H1) |
| E6 | Affiliate and partner links: labelled; commission relationship disclosed; affiliate T&Cs prohibit misleading claims, brand bidding and cookie stuffing | Partnership manager | Before first partner (Q2 2027 pilots, L8/GL4) |
| E7 | Press trips and PR gifts: written note that coverage is independent only if truly so; ask journalists to disclose per their own rules; no editorial control claimed | PR lead | 28 Feb 2027 |
| E8 | UGC/reviews reposting: written permission, no alteration that changes meaning, no use of minors' images without guardian consent | Social lead | 31 Jan 2027 |
| E9 | Employee advocacy: staff posts about the company must be labelled where the company asks for them; social media policy | HR + Marketing | 28 Feb 2027 |
| E10 | Creator register: name, platform, contract date, deliverables, labels used, incidents, takedown record; audited quarterly | Creator manager | 15 Jan 2027 |

### 8.3 Swedish label wording (draft for counsel)
- Video/Reels first line and on-screen: "Annons i samarbete med Sydafrikaresor."
- Stories: "Annons" sticker plus text label on the first frame and on each following frame.
- Caption starts with: "Annons/Reklam: ..." not hidden among hashtags. Platform branded-content tool used where available, as an addition, not a replacement for the text label [VERIFY adequacy of platform tools alone with counsel].
- Not sufficient: #sp, #ad buried among hashtags, "tack till" without advertising word, label only in comments [VERIFY by counsel against current case law].

---

## 9. Workstream F - GDPR, e-mail marketing, cookies and tracking (DPO + CRM + Tech)

### 9.1 Principles
- Lawful basis chosen per purpose and documented (contract performance for bookings; consent for newsletters and non-essential cookies; legitimate interest only after a balancing test, e.g. service e-mails to enquirers [VERIFY]).
- Collect only what is needed; passport data and health or dietary information (special category possible) handled with extra care and shared with suppliers only as needed.
- International transfers: South African lodges, DMCs and guides receive traveller data; transfer mechanism and supplier DPA needed [VERIFY by DPO].
- Measurement keeps working through server-side tagging and first-party data (WS16), not by bypassing consent.

### 9.2 Tactics

| ID | Action | Owner | Date |
|---|---|---|---|
| F1 | Record of processing activities (RoPA): CRM, site, ads, e-mail, telephony, booking system, payments, review platform, creators, suppliers; data categories, bases, retention, processors | DPO | 15 Dec 2026 |
| F2 | DPAs with every processor (CRM, e-mail, analytics, ad platforms where applicable, telephony, hosting, PSP, reviews) and supplier data-sharing terms for South African DMCs/lodges; track in a register | DPO + Procurement | 15 Dec 2026 (strategy-linked WS25 target 100%) |
| F3 | Cookie and consent management: granular opt-in banner for ad and analytics, "reject" as easy as "accept", consent receipts stored, withdrawal path; no tags fire before consent (QA test script in WS16) | Tech lead + DPO | 31 Jan 2027 |
| F4 | Privacy notice rewrite (Swedish): purposes, bases, recipients (including suppliers abroad), retention, rights, contact; layered at forms and calls | DPO + counsel | 15 Jan 2027 |
| F5 | E-mail/SMS consent: clear opt-in at enquiry and checkout (not pre-ticked), separate from booking terms; existing-customer exception applied narrowly after counsel confirms conditions [VERIFY]; one-click unsubscribe; suppression list shared across tools | CRM manager + DPO | 31 Jan 2027 |
| F6 | Existing database check: provenance and consent status of current list; segment into (a) clearly consented, (b) existing customers within exception, (c) unclear, which receives only a re-permission campaign or nothing | CRM manager | 15 Dec 2026 |
| F7 | Retargeting and lookalikes: legal basis and consent for custom audiences; hashed customer lists only for consented/permitted contacts; platform terms followed; DPIA screening | DPO + Paid media lead | 31 Jan 2027 |
| F8 | Call recording: notice at start of call, purpose, retention (shortest workable, e.g. 90 days [ASSUMPTION]), access limited to coaching/QA; no payment card details recorded; DPIA screening (WS25) | DPO + Head of Sales | 31 Jan 2027 |
| F9 | Retention schedule: unbooked leads, bookings (accounting-law periods [VERIFY]), recordings, creator data, claims files; deletion propagates to warehouse monthly | DPO + CRM manager | 31 Mar 2027 |
| F10 | Data subject request (DSR) procedure: log, identity check, 30-day response clock, templates; test once per quarter | DPO | 31 Jan 2027 |
| F11 | Incident response: personal data breach runbook with 72-hour assessment to IMY clock, contacts, template notices; tabletop exercise | DPO + Tech lead | 28 Feb 2027; exercise 30 Jun 2027 |
| F12 | AI tools policy: no customer personal data in non-approved tools; human review before sending AI-drafted text (WS25 T-A11) | DPO + CEO | 31 Jan 2027 |
| F13 | Review platform data: collecting reviews by e-mail needs a lawful basis and an easy opt-out; do not gate reviews by sentiment | CRM manager | 31 Jan 2027 |
| F14 | Children's data and group bookings: parent/guardian provides data for minors; school or youth groups need extra care; no marketing to minors | DPO | 31 Mar 2027 |
| F15 | DPO appointment decision: confirm whether a formal DPO is legally required (core activity analysis) or a privacy lead role suffices [VERIFY]; name the person | CEO + counsel | 15 Dec 2026 |

---

## 10. Workstream G - Complaints, safety communication and incident governance

| ID | Action | Owner | Date |
|---|---|---|---|
| G1 | Safety page and pre-departure briefing text reviewed by Legal: quote UD/embassy advice, describe our measures, avoid absolute safety claims. Include health points from the embassy page (malaria risk areas in parts of Kruger/Mpumalanga/Limpopo/KwaZulu-Natal, October to April; private hospitals can demand payment before treatment) and entry rules (90 days visa-free for Swedish citizens, passport validity) with a "rules can change" line and a link to the authority | Head of Ops + Legal | 31 Jan 2027 |
| G2 | Travel-advice watch: weekly check of UD/Sweden Abroad advice and aviation disruption notices (embassy page 9 Sep 2026 flagged Middle East aviation disruption). Trigger table: advice change -> Legal + Ops + CEO call within 24 hours; decision on communications, pausing ads for affected departures, offering changes | Head of Ops | Weekly from 9 Nov 2026 |
| G3 | Incident log: any serious incident on a trip (crime, accident, illness, evacuation) logged within 24 hours, reviewed for liability, insurer notification, guest follow-up, ARN risk, and marketing implications (pause claims if relevant) | Head of Ops | 31 Jan 2027 |
| G4 | ARN and complaints dashboard: cases per 1,000 travellers, upheld share, average handling time, root cause. Alert at 2x baseline once baseline is known | Customer experience lead | 31 Mar 2027 |
| G5 | Jourtelefon commitment: wording and hours match real staffing; the 24/7 local-presence promise stays out of copy until costed and staffed (strategy) | Head of Ops + Legal | Ongoing |
| G6 | Supplier insolvency and default: monitor top suppliers (airlines, DMCs, lodge groups, charter operators) financial health; contingency plan; know the guarantee claim process and repatriation procedure | CFO + Head of Ops | 28 Feb 2027 |
| G7 | Guide and driver compliance: contractual requirements for local guides and drivers (licences, insurance, vehicle safety) with evidence on file; the Swedish-speaking guide pool (5-6 plus 2 reserves in the strategy, unverified) needs employment/contractor classification checked [VERIFY local rules with the DMC/counsel] | Head of Ops | 31 Mar 2027 |

---

## 11. Gap-lever and scope-extension legal modules (unfunded until their gates)

| Lever | Legal work triggered | Gate and timing | Indicative cost [ASSUMPTION] |
|---|---|---|---|
| GL1 Nordic extension (NO, DK, FI) | Local package travel and guarantee rules per country (the Directive harmonises the base, but guarantee schemes, language, consumer authority and marketing rules differ); local T&Cs and privacy notices; VAT/margin scheme per country [VERIFY]; whether Swedish guarantee covers non-Swedish customers [VERIFY] | After CEO scope decision 31 Mar 2027 | SEK 150k opinions, SEK 100k per market localisation |
| GL2 MICE/incentive/bleisure cross-sell | Group contract terms, corporate T&Cs, B2B vs consumer status, VAT; whether business trips fall under the Package Travel Act (the Act covers trips by traders in some cases - counsel to confirm [VERIFY]) | Q2 2027 test with 3 accounts | SEK 50k |
| GL3 Acquisition/alliance | Legal due diligence: guarantee status of target, ARN history, contracts, GDPR, employees; share/asset purchase agreement; Kammarkollegiet notification of changes; competition rules if market share is relevant | Screening now; go/no-go Gate 2 (30 Jun 2027) | Screening SEK 40k in 2027 H1; DD SEK 300-600k only if go |
| GL4 B2B wholesale and land-only | Wholesale/agent agreements: who is organiser, who holds the guarantee, who gives pre-contract information, liability allocation, commission, data sharing, no partner above 10% of turnover; marketing control over partner claims | Pilot Q2 2027 | SEK 80k for agreement template |
| L8 B2B/affinity/partners | Partner agreement template: commission from margin with 15% post-commission floor, brand use, claim approval, data protection roles (joint controller vs processor) | Before first partner contract | Included in E6 and SEK 40k counsel |
| L9 New products | Legal readiness line in supply-readiness gate: age policy checked, guide/DMC confirmed, insurance, activity-specific liability (e.g. wildlife, adventure sports, diving) and waivers reviewed | Per launch | SEK 15k per product family |

---

## 12. Checklists

### 12.1 New or changed product / departure checklist (Legal sign-off before it goes on sale)
- [ ] Classified in the product register (package / stand-alone / linked) with reason
- [ ] Guarantee-liable yes/no, and guarantee headroom checked for the forecast volume
- [ ] Supplier contract and cancellation/payment terms received; gap vs customer terms logged
- [ ] Minimum participants and notice date stated (guided departures)
- [ ] Price basis: per person, flights in/out, taxes and fees included, FX basis, price-change clause
- [ ] Health, passport and visa notes written and dated; link to authority
- [ ] Safety wording reviewed; no absolute safety claim
- [ ] Insurance information block
- [ ] Resegaranti standard form displayed and logged
- [ ] Supply held (allocation confirmed) before any ad runs for the departure
- [ ] Age, accessibility and activity restrictions stated

### 12.2 Ad / post / e-mail pre-flight checklist
- [ ] Claim is in the claims register or approved by Legal
- [ ] Price bookable today, includes taxes and fees, states per person and flight inclusion, date range stated
- [ ] No superlative without proof; no "safe" claim; no "24/7"/"svarar inom en timme" unless SLA is met
- [ ] Reviews: real, dated, sourced
- [ ] Advertising clearly labelled where paid or benefit-provided (creators, partners, employees if instructed)
- [ ] Landing page shows company details, guarantee link, T&C link, privacy link
- [ ] Consent basis for the audience (e-mail/SMS list, custom audience) confirmed
- [ ] Screenshots stored in evidence folder; approver and date recorded
- [ ] Pull-down contact named

### 12.3 Website and checkout checklist (quarterly)
- [ ] Cookie banner: reject equals accept in effort; no tags before consent; consent receipts stored
- [ ] Pre-contract information complete on product, quote and checkout
- [ ] Add-on notice (package vs separate contract) shown as designed in B7
- [ ] Confirmation copy and T&C version stored on booking
- [ ] Payment schedule matches policy; refund timers configured (14 days)
- [ ] Accessibility test on quote and payment flows
- [ ] Footer: resegaranti lookup link, organisation details, complaints route and ARN information
- [ ] Privacy notice current; DSR form works

### 12.4 Creator checklist (per post)
- [ ] Signed contract with disclosure clause
- [ ] Brief and prohibited-claims list sent
- [ ] Draft approved; label wording and placement agreed
- [ ] Label visible on a fleeting glance (first line, on-screen, each story frame)
- [ ] Post-publication check within 24 hours with screenshot
- [ ] Claims about price, safety, health and visas absent or sourced
- [ ] Register updated; takedown path tested

### 12.5 Gate sign-off checklist (Legal one-pager for Gates 0-3)
- [ ] Guarantee headroom at forecast order book (with 15% margin) and Kammarkollegiet forecast filed
- [ ] Fund-fee reports filed and paid on time
- [ ] No open critical or high compliance finding older than 30 days
- [ ] Consent coverage and DPA completeness at target
- [ ] ARN cases and complaint SLA within thresholds
- [ ] Regulatory watch: SFS 2026:97 status, Directive transposition status
- [ ] Any new product, market or partner has completed its legal module (section 11)

---

## 13. Timeline

| Date | Milestone |
|---|---|
| 6 Nov 2026 | Confirm first fund-fee period (Apr-Aug 2026) was filed and paid (A7) |
| 11 Nov 2026 | Guarantee and compliance fact pack from CEO/CFO (A1) |
| 13 Nov 2026 | Growth-forecast call with Kammarkollegiet and start of bank/insurer dialogue (A3, A4; strategy 16.1) |
| 20 Nov 2026 | T&C, supplier-term and ARN document collection complete (C1) |
| 27 Nov 2026 | Guarantee headroom model v1 (A2) |
| 4 Dec 2026 | Resegaranti standard form and information blocks drafted (B2, B3) |
| 27 Nov 2026 | Preliminary growth notice to Kammarkollegiet (A5); D0 minimum compliance pack signed off before the 1 Dec campaign and paid test |
| 11 Dec 2026 | Kammarkollegiet follow-up meeting (A3); T&C gap analysis (C2) |
| 15 Dec 2026 | Gate 0: revised forecast filed (A5); RoPA, DPAs, existing-list check done (F1, F2, F6); DPO decision (F15); product register (B1); claims register (D1) |
| 15 Jan 2027 | Bank/insurer term sheet (A4); creator contract and brief (E1, E2); supplier-terms gap log (C3); privacy notice (F4); pull-down runbook (D8) |
| 31 Jan 2027 | T&Cs v2 live (C4); templates live (B2); cookie consent live (F3); e-mail consent (F5); complaints procedure (C5); call-recording rules (F8); fund-fee report for Sep-Dec 2026 due (A6); refund-stress scenario (A9) |
| 10 Feb 2027 | Fund fee for Sep-Dec 2026 paid |
| 28 Feb 2027 | Cancellation playbook (B9); breach runbook (F11); PR gifts rules (E7); supplier default plan (G6) |
| 31 Mar 2027 | Gate 1: checkout items (B4, B6, B7, B11), retention schedule (F9), Nordic scope decision with legal opinion scope (GL1), guide classification (G7), first quarterly website checklist |
| 31 May 2027 | Fund-fee report (Jan-Apr) due; payment 10 Jun |
| 30 Jun 2027 | Gate 2: breach tabletop exercise; GL3 go/no-go legal input; partner templates; 6.25% rule status review |
| 30 Sep / 10 Oct 2027 | Fund-fee report and payment (May-Aug) |
| 31 Oct 2027 | Gate 3 (strategy 16.2): full compliance audit by counsel; guarantee headroom for 2028 budget release; 2028 plan update |
| 31 Mar / 30 Jun 2028 | Gates 4 and 5: Legal one-pager; Directive re-engineering plan in hand by 30 Jun 2028 (B7) |
| 2028 | Quarterly checklists; transposition about Sep 2028 [VERIFY]; T&C v3 |

---

## 14. Budget, KPIs, dependencies and risks

### 14.1 Budget (SEK, excluding VAT, [ASSUMPTION] - no internal data)

Assumed external counsel rate SEK 2,800 per hour [ASSUMPTION]. The fund fee (0.6% of package price), guarantee cost and bank fees are NOT in this budget; they sit in the finance model (WS27) and strategy A18/A19/A24. Check that WS27 includes the 0.6% fee line.

| Line | Q4 2026 | 2027 | 2028 | Basis |
|---|---|---|---|---|
| T&C review and rewrite (C2, C4, C7) | 35,000 | 55,000 | 25,000 | About 12 + 20 + 9 counsel hours |
| Package travel and guarantee advice (Kammarkollegiet pre-meeting, bank term review, forecast notices) | 20,000 | 40,000 | 30,000 | About 7 + 14 + 11 hours |
| Product/checkout information review, template pack (B) | 15,000 | 45,000 | 60,000 | 2028 includes directive re-engineering opinion |
| Marketing law, claims register, training (D) | 10,000 | 50,000 | 30,000 | Includes 90-minute training and quarterly sweeps |
| Creator/influencer contract, brief, audits (E) | 0 | 60,000 | 40,000 | Template plus quarterly sampling |
| GDPR/DPO support, RoPA, DPAs, DPIA screens, tabletop (F) | 30,000 | 90,000 | 50,000 | External DPO support at about 15 hours a month in the build period [ASSUMPTION]; confirm if an internal DPO exists |
| Consent management platform and logging | 0 | 36,000 | 36,000 | About SEK 3,000 a month [ASSUMPTION]; may already exist in WS25 |
| Legal-watch subscription / newsletters, ARN/complaints tooling | 0 | 20,000 | 20,000 | |
| Accessibility testing (B11) | 0 | 25,000 | 10,000 | |
| Gap-lever legal modules (section 11), released only with gates | 0 | up to 460,000 (gated: GL1 opinion 150k + Norway localisation 100k, GL2 50k, GL3 screening 40k, GL4 80k, partner 40k) | up to 400,000 (gated: GL1 market localisation 200k, GL3 due diligence only if go, partly outside this budget) | Section 11 |
| Contingency (disputes, urgent opinions) | 0 | 50,000 | 40,000 | About 10% |
| **Committed total (excluding gated modules)** | **110,000** | **471,000** | **341,000** | |
| **Gated total (if all released)** | 0 | 460,000 | 400,000 | |

Rounded envelope for planning: Q4 2026 SEK 0.11 M; 2027 SEK 0.47 M committed plus up to 0.46 M gated; 2028 SEK 0.34 M committed plus up to 0.40 M gated. Marketing-side compliance already carried in WS28 (compliance 28k in 2028 social) is part of this and not additive [VERIFY allocation with WS28 owner].

**Reconciliation with strategy section 12.** The strategy's incremental cost table (3.3 MSEK in 2027, 7.1 in 2028) has no line for external legal and compliance cost. If this budget is treated as incremental, the 20%-margin case moves from -1.7 to about -2.2 MSEK in 2027 and from -2.2 to about -2.6 MSEK in 2028 (cumulative about -4.8 including Q4 2026, versus -3.9), still inside the SEK 3.0 M 2027 loss budget (A25) but narrowing the headroom to the 18.5% margin case, which the strategy says the loss budget should cover. Parts of the cost (T&C rewrite, DPAs, consent platform) would arguably be needed at 40 MSEK too; the CEO decides how much is baseline [see 15.1 item 9]. Committed legal spend is not a gated line and is not released or cut by the stop-loss rule (WS28 rule: compliance is never cut); gated modules do follow the stop-loss freeze.

Internal staff time (about 0.2 FTE of an ops/compliance owner, 0.1 FTE DPO/privacy lead, 0.1 FTE marketing ops, 0.4 FTE in total, about SEK 0.28 M a year at the strategy's SEK 0.7 M loaded FTE cost) is NOT inside the 5 FTE of strategy A18 (those are consultants, a booking-ops coordinator and a product/contracting manager). It is assumed to be absorbed by existing staff and is not costed in either document [ASSUMPTION; CEO to confirm or add a line].

### 14.2 KPIs

| KPI | Target | Frequency | Owner |
|---|---|---|---|
| Guarantee headroom (approved guarantee / forecast guarantee-liable turnover) | At least 115% at all times | Weekly dashboard | CFO |
| Kammarkollegiet forecast filed before each gate | 100% | Per gate | CFO |
| Fund-fee reports filed and paid on time | 100% | Tertial | Finance controller |
| Live product/checkout templates passing checklist 12.1 and 12.3 | 100% | Quarterly | Legal |
| Ads/posts passing pre-flight audit (10% sample) | At least 98% | Monthly | Legal + Marketing ops |
| Creator posts correctly labelled (checked within 24 hours) | 100% | Per post | Creator manager |
| External findings (Konsumentverket letters, court/Marknadsetiska cases, ARN losses due to information defects) | 0 | Monthly | Legal |
| Processors with signed DPA | 100% by 15 Dec 2026 | Monthly | DPO |
| Consent evidence coverage (tracked consents with receipt) | 100% | Quarterly | DPO |
| DSR response within 30 days | 100% | Monthly | DPO |
| Complaint acknowledgement within 7 days / reasoned reply within 30 days | At least 95% / at least 90% | Monthly | Customer experience lead |
| ARN cases per 1,000 travellers | Baseline set by 31 Mar 2027; no more than baseline | Quarterly | Customer experience lead |
| Time to pull a non-compliant ad or post | Under 4 hours | Per incident | Head of Marketing |
| Supplier-terms gap items closed (top 20 suppliers) | 100% by 31 Mar 2027 | Monthly | Head of Ops |
| Regulatory watch log updated | Monthly, with decision on each item | Monthly | Legal |
| Legal review turnaround (ads, copy, creator drafts) | At least 90% within 2 working days (R13 early signal) | Monthly | Legal |
| Claims-register coverage (repeated claims live on site/ads that are in the register with evidence) | 100% | Monthly | Legal + Head of Marketing |
| Bookings with accepted T&C version and confirmation copy stored | 100% from 31 Mar 2027 | Monthly | Tech lead |
| Refunds paid within 14 days after cancellation/termination | 100% | Monthly | Head of Ops |
| Guarantee headroom review: weeks below 115% or below strategy G6 three-month buffer | 0 | Weekly | CFO |
| Cookie consent opt-in rate and share of conversions measured (baseline Q1 2027, feeds R6 and WS16) | Tracked; alert under 50% [ASSUMPTION] | Monthly | Tech lead |
| Incidents logged within 24 hours (G3) | 100% | Monthly | Head of Ops |
| Legal and compliance spend versus budget (14.1), committed lines | Within 10% | Quarterly | Legal + CFO |
| Marketing staff and creators trained (D3, E1 briefing) | 100% before first live campaign wave / first post | Per wave | Legal |

### 14.3 Dependencies

- CEO/CFO data (section 15) for guarantee, T&Cs, marketing consents. Without it, sections 4 and 6 stay at model level.
- WS25 tech: consent platform, confirmation copy, price-change engine, payment schedule configuration, T&C version capture.
- WS16 analytics: server-side tagging and consent-aware measurement design.
- WS24 org: naming the Legal/Compliance owner and the DPO/privacy lead.
- WS28 budget: compliance line protected, and gating of GL1-GL4 legal modules.
- WS11 and WS10: creator workflow and giveaways must use E templates before the first post.
- WS14 sales: scripts using claims from the register; call recording notice.
- WS03 pricing: price-change and FX clauses consistent with the revenue-management model.
- Strategy gates: Gate 0 (15 Dec 2026), Gate 1 (31 Mar 2027), Gate 2 (30 Jun 2027), Gate 3 (31 Oct 2027), Gates 4 and 5 (31 Mar and 30 Jun 2028).
- Strategy 16.1: the 1 Dec 2026 paid test and early-booking campaign start before most legal deliverables; D0 and A5 are the dependencies.

### 14.4 Risks

| # | Risk | L / I | Early signal | Mitigation | Owner |
|---|---|---|---|---|---|
| R1 | Guarantee limit not in place when volume ramps (bank lead time, collateral) | M / H | No term sheet by 15 Jan 2027 | Start 13 Nov; keep booking velocity below guarantee headroom; Legal veto on Tranche B | CFO |
| R2 | SFS 2026:97 enters into force and guarantee need jumps to 6.25% of turnover | M / H | Government announcement | Model in A2; gate decision includes capital effect | CFO |
| R3 | Failure to notify Kammarkollegiet of growth, giving sanction (SEK 5,000 to 10 M, max 10% of turnover) | L / H | Bookings 15% above forecast | Trigger in A5; weekly dashboard | CFO |
| R4 | Misleading price or safety claims lead to Konsumentverket action and sanction fee (up to 4% of turnover for serious breaches in hidden advertising context) | M / H | Complaints, Konsumentverket inquiry | Claims register, pre-flight, evidence file, training | Legal |
| R5 | Creator posts unlabelled or contain own-initiative claims | H / M | Post check fails | Contract, brief, 24-hour check, takedown within 24 hours; company holds main responsibility | Creator manager |
| R6 | Consent rules reduce tracked conversions and retargeting audiences, distorting the iROAS gates | H / M | Consent rate under 50% [ASSUMPTION] | Server-side tagging, holdout tests that do not rely on cookies (WS16), first-party data | Tech lead |
| R7 | Package vs stand-alone classification error leads to missing guarantee coverage for a product | M / H | Product with add-ons outside register | B1 register, B7 rule, checklist 12.1 | Legal |
| R8 | Mass cancellation after a UD advice change or extraordinary event; refunds in 14 days exceed liquidity | L-M / H | Advice change, aviation disruption | G2 trigger table, A9 stress test, facility sizing, supplier terms alignment | CFO |
| R9 | T&Cs promise refunds that suppliers do not give | M / M | Gap log items open | C3, price buffer, insurance, supplier renegotiation | Head of Ops |
| R10 | Directive 2026/1024 transposed with prepayment cap or wider package definition, breaking checkout and cash model | M / M | Government bill | Configurable schedules, plan by 30 Jun 2028 | Legal |
| R11 | Data breach or inadequate DPA with South African suppliers | L / H | Incident, audit finding | F2, F11, minimisation, encryption | DPO |
| R12 | Complaint volume grows faster than service capacity; ARN cases increase | M / M | Reply SLA missed | C5, staffing from WS24, alerts in G4 | Customer experience lead |
| R13 | Legal function becomes a bottleneck and slows campaigns | M / M | Review time over 2 working days | Claims register, pre-approved templates, 48-hour service level for reviews, counsel retainer | Legal |
| R14 | Gap levers (GL1, GL3, GL4) add regulatory complexity (other countries, partners as organisers) | M / H | Scope decision | Legal module as precondition to release | CEO |
| R15 | Insurance selling (L6) triggers insurance-intermediation obligations | M / M | Insurance upsell design | B12 verification before launch | Legal |
| R16 | The 1 Dec 2026 campaign and paid test go live before notice, claims control and consent controls are in place | M / H | D0 not signed off by 27 Nov | D0 minimum pack is a launch condition; Legal can delay launch (veto, section 3) | Legal |

---

## 15. Assumptions and items for the CEO to confirm

### 15.1 Data needed from the CEO
1. Guarantee: instrument, amount, issuer, cost, renewal date, last Kammarkollegiet forecast and approved level; share of 40 MSEK that is guarantee-liable package turnover.
2. Current T&Cs, resegaranti information form used, last 3 years of ARN cases and refund/cancellation history.
3. Payment terms (deposit, final payment dates) in use.
4. Marketing consents: size and provenance of e-mail/SMS list; consent platform in place; DPAs signed; named DPO or privacy lead.
5. Memberships (industry bodies), review platform scores, whether the company follows ARN decisions.
6. Whether the fund fee (0.6%) is already in the P&L and how the first period (Apr-Aug 2026) was filed.
7. Insurance sales model: own, intermediated or referral.
8. Whether MICE/groups business is in the same legal entity and guarantee.
9. Whether the legal budget (14.1) is baseline cost or incremental to the programme, and whether the 0.4 FTE internal compliance time is existing capacity.
10. Whether the 1 Dec 2026 campaign date is firm; D0 and the Kammarkollegiet notice must be done by 27 Nov.

### 15.2 Assumptions made in this file

| # | Assumption | Rationale |
|---|---|---|
| LG-A1 | External counsel at SEK 2,800 per hour | Placeholder for Swedish travel and marketing-law specialist; get quotes |
| LG-A2 | Budget SEK 0.11 M (Q4 2026), 0.47 M (2027), 0.34 M (2028) committed, plus gated modules (up to 0.46 M in 2027, 0.40 M in 2028); not in strategy section 12.1 | Bottom-up from tasks above; no company data |
| LG-A3 | Guarantee headroom of at least 15% over forecast is the Tranche B release gate | Safety margin for forecast error; Legal/CFO to adjust |
| LG-A4 | Forecast revision trigger at bookings 15% above forecast on a 4-week rolling basis | Kammarkollegiet says report immediately when sales look set to rise; threshold is internal |
| LG-A5 | Complaint reply targets: 7 days acknowledgement, 30 days reasoned reply | The Directive's 7/60 days apply after transposition; internal target is stricter |
| LG-A6 | Call recording retention of 90 days | Internal choice; DPO to confirm |
| LG-A7 | Consent rate under 50% as the warning level | Placeholder; actual rate unknown |
| LG-A8 | Legal spot check of 20% of creator posts in first quarter then 10% | Risk-based sampling |
| LG-A9 | 0.2 + 0.1 + 0.1 FTE internal time absorbed by existing staff, not part of strategy A18's 5 new FTE | The 5 FTE are sales, booking-ops and product roles; about SEK 0.28 M a year if costed; confirm with WS24 |
| LG-A10 | A formal DPO may not be legally required; a privacy lead may suffice | Needs counsel analysis (F15) |
| LG-A11 | Consent management platform costs about SEK 3,000 per month | Market placeholder |
| LG-A12 | Product mix: guided and tailor-made trips are mostly packages | Product mix unknown; classify in B1 |
| LG-A13 | Insurance sales status unknown | B12 |
| LG-A14 | Gap-lever legal costs (section 11) are rough judgement | No sizing evidence |

### 15.3 Items marked [VERIFY] (counsel)
Electronic marketing section and exception conditions; adequacy of platform branded-content tools versus text label; competitor-name keyword bidding; environmental claims rules; lottery/giveaway rules; EU final prepayment rule and Swedish transposition; SFS 2026:97 commencement date; accessibility rules for the booking service; insurance-intermediation obligations; guarantee coverage for non-Swedish customers and Nordic rules; retention periods (accounting, evidence files); transfer mechanism for data to South Africa; whether DPO is mandatory; whether business/MICE trips fall under the Package Travel Act; guide contractor classification.

---

## 16. First 30 days (2 Nov - 2 Dec 2026)

| Week | Action | Owner | Output |
|---|---|---|---|
| Week 1 (2-8 Nov) | Name the Legal/Compliance owner and DPO/privacy lead; confirm fund-fee period 1 was filed and paid (A7); send data request list (section 15.1); engage external counsel (engagement letter, rate card, 48-hour review service level); start legal-watch log; set up weekly travel-advice check (G2) | CEO, Head of Ops, CFO | Named owners, status confirmation, counsel engaged |
| Week 2 (9-15 Nov) | CFO delivers guarantee fact pack (A1, 11 Nov); Kammarkollegiet growth call and bank/insurer dialogue start (A3, A4, 13 Nov); collect T&Cs, supplier contracts and ARN history (C1); inventory processors and consent tools (F1/F2 start); claims inventory of current site and ads (D1 start) | CFO, Head of Ops, DPO, Legal | Fact pack, document set, inventories |
| Week 3 (16-22 Nov) | Draft guarantee headroom model (A2); counsel starts T&C gap analysis (C2); DPAs requested from all processors; existing list provenance check (F6); quick audit of current site against checklist 12.3 and fix any severe price/safety wording; product register started (B1) | CFO, counsel, DPO, Legal | Model v0, audit findings |
| Week 4 (23-29 Nov) | Headroom model v1 (A2, 27 Nov); preliminary growth notice (A5, 27 Nov); D0 minimum pack signed off before the 1 Dec launch; prepare Kammarkollegiet follow-up pack (A3); draft information blocks and resegaranti text (B2/B3); creator contract outline (E1); decide consent platform approach with Tech lead (F3) | CFO, Legal, Tech lead | Pack, drafts |
| Days 29-30 (30 Nov - 2 Dec) | Review of first-30-day status with CEO: open risks, guarantee funding path, claims that must be withdrawn, budget for counsel confirmed, gate sign-off format agreed; book Kammarkollegiet follow-up meeting by 11 Dec | CEO, Legal | 30-day report; sign-off template for Gate 0 (15 Dec) |

Quick wins that need no counsel: remove any "24/7", "billigast" or absolute "safe" claims until evidenced; add Kammarkollegiet lookup link to footer after checking the entry; stop using unlabelled creator posts; switch off pre-ticked newsletter boxes; confirm no ad/analytics tag fires before consent on a test browser.

---

## 17. Source list

- Kammarkollegiet, fee to the guarantee fund: https://www.kammarkollegiet.se/vara-tjanster/resegaranti/betala-avgift-till-resegarantifonden
- Kammarkollegiet, lookup of operators with guarantee: https://www.kammarkollegiet.se/vara-tjanster/resegaranti/hitta-reseaktorer-med-resegaranti
- Resegarantilagen 2018:1218 (incl. SFS 2026:96/97): https://lagen.nu/2018:1218
- Paketreselag 2018:1217: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/paketreselag-20181217_sfs-2018-1217/
- Konsumentverket, package travel (consumer): https://www.konsumentverket.se/lagar/paketreselagen-konsument/
- Konsumentverket, rules for travel businesses: https://www.konsumentverket.se/marknadsratt-foretag/resor-for-foretag/
- Konsumentverket, influencer ad posts, rules for companies (reviewed 3 Sep 2026): https://www.konsumentverket.se/marknadsratt-foretag/influencers-reklaminlagg-regler-for-foretag/
- Konsumentverket, incorrect price information: https://www.konsumentverket.se/konsumentratt/felaktig-prisinformation/
- Lag (2022:482) om elektronisk kommunikation: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2022482-om-elektronisk-kommunikation_sfs-2022-482/
- Secondary cookie summary: https://kukie.io/blog/cookie-consent-sweden-imy-rules
- Directive (EU) 2026/1024 summaries: https://www.lexology.com/library/detail.aspx?g=83c11353-0dd6-457e-affe-b598ae2fb4c5 ; https://www.abta.com/news/ask-expert-revised-eu-package-travel-directive-and-how-it-may-affect-you
- Sweden Abroad, South Africa travel information: https://www.swedenabroad.se/sv/om-utlandet-f%C3%B6r-svenska-medborgare/sydafrika/reseinformation/
- E-mail marketing consent (secondary): https://www.mailer.se/gdpr-samtycke-e-postmarknadsforing/ ; https://kundkanalen.se/gdpr-e-postmarknadsforing
- Internal: /docs/research/09-regulation-trust.md, /docs/workstreams/25-tech-stack.md, /docs/workstreams/24-org-hiring.md, /docs/workstreams/28-budget-allocation.md, /docs/00-strategy.md
