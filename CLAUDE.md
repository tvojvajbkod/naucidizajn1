# Nauči Dizajn — uputstvo za rad sa Claude Code

Ovaj projekat je generisan iz LudusVibe SaaS templejta. Auth, baza, RLS, env
validacija i monorepo struktura su već postavljeni i **provereni** — tvoj posao
je da na ovim osnovama gradiš svoj proizvod, ne da ih menjaš.

## Struktura

```
apps/
  app/         # SaaS proizvod (iza auth-a), port 3000
  marketing/   # javni sajt (landing, pricing, SEO), port 3001 — poseban Vercel projekat
packages/
  ui/          # design system (Archivo, limeta #DBFF00, ink #232421, podloga #FFFFFF)
  db/          # Drizzle šema + migracije (Supabase Postgres)
  auth/        # Supabase Auth klijenti (server, browser, admin, middleware)
  config/      # Zod env šeme + deljeni tsconfig
  payments/    # apstraktni payment interfejs (provajdere dodaju moduli)
```

## Komande

```bash
bun install            # instalacija
bun run local:setup    # lokalni Supabase (Docker) + .env + migracije + seed
bun run local:stop     # gasi lokalni stack (podaci ostaju)
bun run dev            # oba app-a (turbo)
bun run typecheck      # tsc za ceo monorepo
bun run build          # build za ceo monorepo
bun test               # testovi (uz lokalni stack i RLS/webhook integracioni)
bun run lint           # biome check
bun run db:migrate     # primeni migracije na bazu (DATABASE_URL iz .env)
bun run db:seed        # seed nalozi i demo podaci (idempotentan)
```

## Setup (prvi put)

**Lokalno (default):** `bun install` → `bun run local:setup` → `bun run dev`.
Skripta podiže Supabase u Dockeru, upisuje lokalne ključeve u `.env`, primenjuje
migracije i seed-uje naloge: `admin@local.test` / `korisnik@local.test`
(lozinka `lozinka123!`). Ne popunjavaj `.env` ručno za lokalni rad.

**Produkcija:** napravi Supabase projekat, popuni `.env` (Dashboard → Settings
→ API), `DATABASE_URL` mora biti **pooler** string u transaction modu
(port 6543), pa `bun run db:migrate`.

## UI pravila (shadcn/ui + Tailwind)

- UI se gradi ISKLJUČIVO shadcn/ui komponentama iz `@repo/ui` + Tailwind
  klasama. Bez novih UI biblioteka i bez ručnog CSS-a van `globals.css`.
- Komponente žive u `packages/ui/src/components/ui/` (shadcn konvencija).
  Nova shadcn komponenta se dodaje TU (kopiraj iz shadcn docs), pa se
  re-eksportuje u `packages/ui/src/index.ts` ako je često korišćena.
- Ikonice: `lucide-react` (već instaliran). Bez drugih icon setova.
- Boje/razmaci idu preko theme tokena (`bg-primary`, `text-muted-foreground`,
  `border`, `bg-sidebar`...). Tokeni su u `globals.css` oba app-a — brend se
  menja TAMO, ne po komponentama. Aliasi `text-ink`/`bg-paper` postoje zbog
  starijeg koda.
- Dashboard okvir (sidebar + header) je u `apps/app/src/app/dashboard/layout.tsx`
  — nove dashboard stranice renderuju SAMO sadržaj, bez sopstvenog okvira.
  Linkovi u sidebar-u: `components/app-sidebar.tsx` (`navItems`), stavke u
  korisničkom meniju: `components/nav-user.tsx`.

## Auth tokovi (svi su implementirani — ne izmišljaj nove)

- Prijava/registracija email+lozinka: `(auth)/actions.ts` (`login`, `signup`).
- Google OAuth: `signInWithGoogle` → `/auth/callback` (PKCE exchange).
  Provider se uključuje u Supabase podešavanjima (lokalno: `supabase/config.toml`,
  produkcija: Dashboard → Authentication → Providers).
- Zaboravljena lozinka: `/forgot-password` → email link → `/auth/callback?next=/reset-password`
  → `/reset-password` (recovery sesija) → `changePassword`.
- Promena lozinke ulogovanog korisnika: `/dashboard/settings`.
- `/auth/confirm` je fallback za prilagođene email šablone (token_hash).
- Novi zaštićeni URL-ovi rade automatski (middleware štiti sve osim
  PUBLIC_PATHS) — u PUBLIC_PATHS dodaješ samo stvarno javne rute.

## Marketing sajt (Nauči Dizajn)

Sajt prati JEDNU ponudu: mesečno članstvo „Postani AI web dizajner" ($99/mes,
Skool). Ono je heroj početne strane i ima svoju punu landing stranu.

- **JEDNA edukacija (odluka 23.09.2026.).** Nauči Dizajn više nema snimljene
  kurseve, cenovnik sa tri modela ni mentorstvo 1-1. Obrisani su namerno:
  `app/kursevi/`, `app/cene/`, `app/mentorstvo/`, `lib/courses.ts`,
  `lib/pricing.ts`, `components/course-badge.tsx`, `components/course-mentor.tsx`
  i sekcije `courses-grid`, `pricing`, `comparison`, `paths`. Ne vraćaj ih ni
  kao „bilo je ranije" — prvo pitaj firmu.
- **Put ide kroz četiri meseca**, jedan izvor istine: `src/lib/program.ts`
  (M1 pravljenje sajtova + dolazak do klijenata, M2 SEO, M3 AI automatizacije,
  M4 napredni web dizajn). Prikazuje ga `sections/timeline.tsx` (`id="program"`).
  Obećanje „30 dana do prvog klijenta" OSTAJE, ali kao ishod prvog meseca, ne
  kao trajanje programa.
- **Cena je na ponudi, ne na posebnoj stranici.** `sections/membership-offer.tsx`
  (`id="cena"`) stoji i na početnoj i na `/ai-web-dizajner`. Uz cenu UVEK ide
  naglašeno da polaznik sam otkazuje pretplatu u svakom trenutku — to je
  odluka, ne ukras, i ne skraćuje se.
- **Edukaciju vodi samo Nikola.** `mentors` u `lib/testimonials.ts` ima jednu
  stavku i `sections/mentors.tsx` je zato jedan blok, ne mreža od tri kartice.
- **Sadržaj pre izgleda.** Brojke, linkovi i cena žive u `src/lib/brand.ts`,
  program u `src/lib/program.ts`, FAQ u `src/lib/faq.ts`, utisci i mentor u
  `src/lib/testimonials.ts`. Komponente su samo izgled — tekst se menja u
  `lib/`, ne po sekcijama.
- **Srpski navodnici u TS stringu ruše build.** `„…"` sa običnim `"` zatvara
  string. Piši `„…“` (U+201E / U+201C) ili izostavi navodnike. U JSX tekstu
  problema nema.
- **Jedan skup brojki.** Zatečeni sajt je prikazivao 4.600+ / 4.000+ / 4.800+ /
  40.000+ polaznika na različitim stranicama. Sve sada dolazi iz `stats` u
  `brand.ts`. Ne upisuj broj direktno u JSX.
- **FAQ hrani i schema.** Svaki niz iz `lib/faq.ts` ide i u `faqJsonLd()`.
  Kad dodaješ pitanje, dodaj ga u niz — schema se ažurira sama.
- **`[POTVRDI]` i `[POPUNI]`** u tekstu označavaju tvrdnje koje firma mora da
  proveri pre objave (uslovi otkazivanja članstva, garancija za članstvo,
  plaćanje u dinarima, podaci o privrednom subjektu). Ne brisati bez provere.
- **Studije slučaja imaju dve vrste.** `kind: "demonstracija"` je prikaz metoda
  na izmišljenom klijentu i tako je označen na stranici. `kind: "student"` je
  prava priča pravog polaznika — popunjava se ISKLJUČIVO stvarnim podacima i
  objavljuje tek uz pismenu saglasnost (`person.consent: true`). Nepopunjene
  stavke ostaju `published: false` i ne prikazuju se. Nikad ne izmišljaj ime,
  klijenta ni iznos zarade — to je obmanjujuće oglašavanje, a i najlakše je za
  proveriti. Upitnik za prikupljanje pravih priča je u projektnoj dokumentaciji.
- **Utisci su kartice sa licem, izvorom i zadržavanjem** (`sections/proof.tsx`,
  odluka 25.09.). Naslov bloka je „Šta naši studenti kažu o nama". Svaka kartica
  ima okruglu sliku (`components/student-photo.tsx`), ime, citat i na dnu
  oznaku ODAKLE je utisak — „Recenzija na Skool-u" ili „Utisak sa sajta škole".
  Ta oznaka je poenta, ne ukras: ne sme da tvrdi više nego što znamo.
  Fotografije se objavljuju SAMO uz saglasnost osobe sa slike, i onda kad je
  utisak javan; dok je nema, stoji prazan krug. Nikad slika sa stocka uz pravi
  citat. Utisci bez napisanog teksta idu u niži red sa zvezdicama, da ne prave
  buku oko onih koji su nešto zaista napisali.
- **Radovi polaznika traže DVE saglasnosti.** `src/lib/works.ts` — rad ide na
  sajt tek kad je `published: true` I `consent.student` I `consent.client`.
  Klijent je vlasnik svog brenda; prikaz bez pitanja vraća se kao problem
  polazniku. Ako klijent ne želi da se imenuje, `client` postaje opis
  delatnosti a `url` se izostavlja. Slike idu u `public/radovi/`, snimke pravi
  `bun scripts/snimi-radove.ts` (traži `bun add -d playwright@1.56.1`).
- **Koraci studije slučaja imaju traku napretka** (`components/case-steps.tsx`,
  odluka 23.09.). Lepljiva traka uz levu ivicu se puni pri skrolu, a krug oko
  broja pokazuje koliko je prošao trenutni korak. Pravila: ništa se ne krije
  (tekst mora da se skenira i da ga čitaju pretraživači), traka je `aria-hidden`
  jer čitač ekrana već čuje „Korak 3" iz teksta, i poštuje se
  `prefers-reduced-motion`. Sadržaj ispod koraka (galerija, zaključak, napomena)
  uvučen je za `lg:pl-[6.5rem]` da bi se poklopio sa kolonom koraka — ako menjaš
  širinu trake, menjaj i to uvlačenje.
- **Prazno stanje je namerno.** Zid radova se ne prikazuje dok nema objavljenih
  radova, a `/radovi` tada objašnjava zašto. Ne dodavati natpis „uskoro" ni
  slike sa stocka — jedini smisao te stranice je da bude istinita.
- **Vizuelni jezik je izmeren sa postojećeg sajta, ne pogođen.** Naslovi su
  težine 500 sa razmakom `-0.02em` (`-0.03em` za hero), dugmad imaju radijus
  4px (`rounded`), kartice 12px. Par dugmadi je limeta sa ink tekstom
  (primarno) i maslinasto `bg-olive` sa limeta tekstom (sekundarno) — ne
  outline. Ne vraćaj `rounded-full` i ne vraćaj `font-bold` na naslove.
- **Ritam podloga je izmeren, ne pogođen.** Zatečeni sajt je ~46% tamnog,
  27% belog, 21% krem i 2% limeta po visini početne strane. Naš je na 41% / 31%
  / 9% / 3% — namerno blizu. Redosled: hero ink → bela → krem traka
  (`StatBandSection`) → **ink** (`WhatsIncludedSection`) → **maslinasta**
  (`TimelineSection`, put od četiri meseca) → **limeta traka**
  (`LimeBandSection`, vodi na besplatan webinar) → bela sa krem panelom → siva
  (`ProofSection`) → **ink** (`MentorsSection`) → limeta kolona sa cenom
  (`MembershipOfferSection`) → **krem** (FAQ) → ink kartica (`CtaSection`) →
  **ink futer**. Mereno 23.09. posle izbacivanja kurseva: 30% ink, 15%
  maslinasta, 15% siva, 4% krem, 3% limeta.
  Pravila: dugi tamni blok sme da spoji ink i maslinastu (original ima 2.969px
  neprekidno tamnog), ali dve ISTE podloge nikad ne idu jedna do druge; limeta
  traka je jedna po stranici; na tamnim sekcijama tekst je `text-background` /
  `text-background/75`, kartice `bg-background/[0.06]` uz `border-background/15`,
  sitne oznake u limeti. Ako menjaš podloge, prvo izmeri udeo — ne procenjuj.
- **Dve susedne sekcije ne smeju da izgledaju isto — NI NA JEDNOJ stranici**
  (odluka 25.09.). Ne važi samo za početnu. Zato: FAQ je na krem podlozi (inače
  bi Membership → FAQ → CTA bile tri bele zaredom), `CtaSection` ima `surface`
  („plain" | „cream" | „muted") pa se bira prema sekciji iznad nje,
  `/ai-web-dizajner` ima krem traku sa brojkom između dva ink bloka i sekciju
  „Da li je ovo za tebe" na sivoj, a `/utisci` ima tamni hero jer ispod njega
  stoji siva `ProofSection`. Posle svake izmene podloga pokreni proveru: za
  svaku stranicu izlistaj `main > *`, uzmi `backgroundColor` i podlogu najvećeg
  unutrašnjeg panela, i traži dve iste vrednosti zaredom. Prozirna podloga
  (`rgba(0,0,0,0)`) je BELA — računa se.
- **Unutrašnji link IDE KROZ `<Link>`, nikad kroz `<a href="/...">`.** Sajt
  živi u podfolderu (`/naucidizajn1`); `<Link>` sam dodaje taj prefiks, obično
  `<a>` ne — i link završi na 404. Greška se ne vidi u razvoju (tamo nema
  podfoldera), nego tek na objavljenom sajtu. `<a>` ostaje samo za spoljne
  adrese (`http…`) i `mailto:`. Provera pre objave:
  `grep -rn 'href="/' --include=*.tsx src | grep '<a '`.
- **Logo je prazno mesto dok pravi ne stigne.** `components/site-logo.tsx` u
  zaglavlju i futeru; putanja se upisuje u `logo.src` u `brand.ts`, a dimenzije
  (132 × 32) drže raspored da se ne pomeri. Ne vraćati `BrandMark` + tekstualni
  wordmark u navigaciju. Kad stigne pravi logo, u istom koraku se menjaju i
  `icon.svg`, `apple-icon.png` i `og.png` — inače sajt ima dva različita znaka.
- **TikTok je namerno uklonjen** (22.09.) iz futera i iz `sameAs` schema. Ne
  vraćati ga bez izričitog dogovora.
- **Deljenje sajta ima sliku.** `public/og.png` (1200 × 630) je OG slika i
  ugrađena je u `buildMetadata()` i u root `layout.tsx`, pa je nose SVE
  stranice — i one koje `buildMetadata` ne koriste. Favicon je
  `src/app/icon.svg`, a `src/app/apple-icon.png` je ikonica za telefon. Ako se
  menja tekst na OG slici, menja se i slika — ona se ne generiše u buildu.
- **Nikad ne crtati tuđe logotipe.** Ako ikad zatreba znak za neku oblast,
  crta se delatnost, a ne žig (Figma, Webflow, Adobe su tuđi žigovi).
- **Forme rade bez servera.** Sajt je statičan, pa prijava ide spoljnom
  servisu; adresa stoji u `forms` u `brand.ts`. Dok je prazno, forma otvara
  mejl sa popunjenom porukom — nikad ne sme da ostane dugme koje ne radi.
  Pristanak je posebno polje i NIJE unapred štikliran (ZZPL).
- **Svaka nova javna stranica ide kroz `buildMetadata()`** — bez toga nema
  canonical ni OG slike. Provereno automatskom proverom svih ruta.
- **Fontovi: samo `latin` i `latin-ext`.** Latin nosi cifre, latin-ext naša
  slova. Ne uvoziti `@fontsource/<font>/400.css` (povlači i vijetnamski), nego
  `latin-400.css` + `latin-ext-400.css`.
- **`isProposal` u `src/lib/brand.ts`** drži sajt van pretraživača i prikazuje
  napomenu u futeru da ovo nije zvanični Nauči Dizajn. Prebacuje se na `false`
  tek kad firma preuzme sajt.
- **Skool je spoljni levak.** Sve CTA dugmad ka članstvu vode na `links.skool`
  i otvaraju se u novom tabu. Cena i uslovi stoje NA sajtu, pre klika.

## Pravne stranice

`/privatnost` i `/uslovi` na marketing sajtu su ŠABLONI za firme iz Srbije
(ZZPL, Zakon o zaštiti potrošača) — sadrže polja u [uglastim zagradama]
(naziv firme, PIB, matični broj...). Pomozi korisniku da ih popuni i prilagodi
svom proizvodu, ali ga UVEK podseti da tekst pregleda advokat pre objave —
ovo nije pravni savet. Žuti okvir upozorenja na tim stranicama se briše tek
kad je sadržaj finalan.

## Uloge (admin)

Uloga živi u `app_metadata.role` (`"admin"` | `"user"`) — postavlja je samo
admin API / seed, korisnik NE može sam sebi da je promeni (za razliku od
`user_metadata`). Provera na serveru: `user.app_metadata.role === "admin"`.
Nikad ne čitaj ulogu iz `user_metadata` niti iz klijentskog inputa.

## Admin portal

`/admin` je standardni deo templejta: poseban dashboard sa sopstvenim
sidebar-om. Ulaz je stavka "Admin portal" u korisničkom meniju (vidljiva samo
adminu). Podrazumevane stranice: `/admin` (kontrolna tabla sa karticama) i
`/admin/korisnici` (lista korisnika + dodela uloga). Moduli dodaju svoje
linkove u `components/admin-sidebar.tsx` (`adminNavItems`), a kartice na
kontrolnu tablu u `app/admin/page.tsx`.

- **Guard po ulozi je na SERVERU** — u layout-u, SVAKOJ stranici i SVAKOJ
  server akciji (`requireAdmin()` iz `src/lib/admin.ts`). Server akcija je
  javno pozivljiv endpoint; provera samo u layout-u nije dovoljna.
- Service-role pozivi (`createSupabaseAdminClient`, `auth.admin.*`) smeju SAMO
  u server kod admin portala, iza `requireAdmin()` — nikad u client komponente.
- **Sopstvena uloga se ne menja** (akcija to odbija) — namerno, da poslednji
  admin ne zaključa sam sebe. Ne "popravljaj" to.

## Invarijante (NIKAD ih ne krši)

- **RLS:** svaka tabela sa korisničkim podacima ima uključen RLS i eksplicitne
  politike. Nikad ne isključuj RLS da bi nešto "proradilo". Ako upit ne vraća
  podatke, problem je u politici ili JWT-u — popravi uzrok.
- **Pristup podacima:** korisnički podaci se čitaju i pišu kroz Supabase klijent
  koji nosi JWT korisnika (`createSupabaseServerClient` / browser klijent), tako
  da RLS važi po korisniku. Drizzle (`adminDb`) i service-role klijent su samo za
  poverene serverske operacije: webhookovi, admin poslovi, migracije.
- **Webhook potpis:** svaki webhook handler PRVO verifikuje potpis, pa tek onda
  obrađuje telo. Handler bez verifikacije potpisa je bezbednosna rupa.
- **Tajne:** service-role i secret ključevi žive samo na serveru. U browser smeju
  isključivo `NEXT_PUBLIC_` varijable. Nikad ne uvozi server-only module u client
  komponente.
- **Env:** svaka nova env varijabla ide kroz Zod šemu u `packages/config/src/`
  (`env.ts` za app, `marketing-env.ts` za marketing). App puca na startu ako fali
  obavezan ključ — to je namerno.
- **Migracije:** svaka promena šeme baze je nova SQL migracija u
  `packages/db/migrations` + entry u `meta/_journal.json` + ažuriranje
  `src/schema.ts`. Bez ručnih izmena baze kroz Supabase Studio.
- **Izvor istine za plaćanje:** status pretplate dolazi iz webhook-a, nikad iz
  redirect URL-a posle checkout-a. Redirect je samo UX.
- **Granice modula:** feature ne importuje direktno iz drugog feature-a. Deljena
  logika ide u `packages/`.
- **Determinizam:** build ne sme da zavisi od mreže ili LLM poziva.
- **Consent:** analitika i pixel skripte se učitavaju tek posle korisničkog
  pristanka (EU pravila). Consent gate se ne zaobilazi.
- **Konekcija na bazu (Vercel):** na serverless funkcijama uvek Supabase pooler
  connection string (transaction mode, port 6543), nikad direktna konekcija —
  direktne konekcije se brzo iscrpe.
- **Pin-ovane verzije:** sve zavisnosti u `package.json` fajlovima su TAČNE
  verzije (bez `^`/`~`) — namerno, da svaka instalacija reprodukuje testirano
  stanje (nova minor verzija zavisnosti ume da slomi produkciju, npr.
  radix-slot 1.3.1 je uveo `createContext` koji ruši server komponente).
  Ne vraćaj range-ove. Nadogradnja = svesna promena pina + `bun run typecheck`
  + `bun test` + ručna provera obe aplikacije.
- **Redirect mete iz inputa:** svaka putanja koja stiže iz forme/URL-a mora da
  prođe proveru `path.startsWith("/") && !path.startsWith("//")` pre
  `redirect()` — `//host` je protokol-relativni URL, tj. open-redirect.

## Bezbednost — šta je već podešeno i šta ostaje tebi

- **Security headeri** (X-Frame-Options, nosniff, Referrer-Policy,
  Permissions-Policy) su u `next.config.ts` oba app-a. Strogi CSP nije
  uključen — zahteva nonce setup i allowlist za analitiku; uvodi se svesno,
  tek kad znaš koje eksterne skripte sajt učitava.
- **Greške plaćanja i AI chata degradiraju graciozno** (poruka korisniku
  umesto sirovog 500) — zadrži taj obrazac u novim akcijama: provajderski
  poziv u `try/catch`, `redirect()` UVEK van `try` bloka (interno radi kroz
  throw, `catch` bi ga progutao).
- **Pre produkcije razmisli o rate limitu** na skupim rutama (`/api/chat` je
  iza auth-a, ali ulogovan korisnik i dalje može da troši tvoj AI budžet u
  petlji). Najjednostavnije: brojač poziva po korisniku u bazi ili Upstash
  Redis limiter.

## Kako se dodaje nova tabela (recept)

1. Novi SQL fajl u `packages/db/migrations/` (sledeći redni broj), sa
   `--> statement-breakpoint` između iskaza.
2. U istom fajlu: `enable row level security` + politike (`select`, `insert`,
   `update`, `delete` po potrebi, tipično `(select auth.uid()) = user_id`).
3. Dodaj entry u `migrations/meta/_journal.json` (idx +1, novi tag, veći `when`).
4. Ažuriraj `packages/db/src/schema.ts` da odslikava novo stanje.
5. `bun run db:migrate`, pa `bun run typecheck`.

---

# Uključeni moduli

Pravila ispod važe za module izabrane pri generisanju projekta.

## Modul: Google Analytics 4 (`analytics-google`)

Google Analytics 4 na marketing sajtu.

- Skripta se učitava tek kad `useConsent()` vrati `"granted"` — consent gate iz
  `@repo/ui/consent`. **Nikad ne učitavaj gtag pre pristanka** i ne uklanjaj
  `ConsentBanner` iz layout-a.
- Measurement ID dolazi iz `NEXT_PUBLIC_GA_MEASUREMENT_ID` (Zod šema u
  `packages/config/src/marketing-env.ts`). Bez vrednosti komponenta renderuje
  `null` — sajt radi i bez analitike.
- Novi event: pozovi `window.gtag("event", ...)` iz client komponente, ali tek
  pošto proveriš consent.

## Modul: Meta Pixel (`analytics-meta-pixel`)

Meta (Facebook) Pixel na marketing sajtu.

- Deli isti consent gate sa Google Analytics (`@repo/ui/consent`) — pixel se
  učitava tek posle `"granted"`. Ne zaobilazi gate ni za "samo PageView".
- Pixel ID je u `NEXT_PUBLIC_META_PIXEL_ID`; bez vrednosti komponenta renderuje
  `null` — sajt radi i bez piksela.
- Konverzije: `window.fbq("track", "Lead")` i slično pozivaj iz client
  komponenti, tek posle provere consent-a.

## Modul: Blog (`blog`)

Blog: objave žive u Supabase (`posts` tabela), uređuju se u admin portalu
(`/admin/blog`, TipTap markdown editor), a javno se čitaju na marketing sajtu
(`/blog`).

- **U bazi je uvek čist markdown** (`posts.content`). Editor je TipTap sa
  `@tiptap/markdown` — u formu ide `editor.getMarkdown()`. Renderovanje na
  marketingu ide kroz `react-markdown` + `remark-gfm`. Ne uvodi HTML u
  sadržaj i ne menjaj format skladištenja.
- **RLS:** `posts` ima SAMO javnu SELECT politiku za `published = true`.
  Upisi idu isključivo kroz service-role u admin akcijama
  (`apps/app/src/app/admin/blog/actions.ts`), iza `requireAdmin()` guarda —
  guard važi u SVAKOJ akciji i stranici. Ne dodaji INSERT/UPDATE politike.
- Nacrti (`published = false`) su vidljivi samo u admin portalu — anon klijent
  ih kroz RLS ne vidi ni po direktnom slug-u.
- Marketing čita objave anon klijentom (`apps/marketing/src/lib/blog.ts`) uz
  `NEXT_PUBLIC_SUPABASE_URL`/`NEXT_PUBLIC_SUPABASE_ANON_KEY`. Marketing i
  dalje radi bez tih ključeva — blog je tada prazan (graceful fallback), to
  nije bug.
- Blog stranice su ISR (`revalidate = 60`) — nova objava je vidljiva bez
  deploy-a, najkasnije za minut. `published_at` se postavlja pri prvom
  objavljivanju i ne resetuje se.
- Slug se izvodi iz naslova (`slugify` u actions.ts, ista transliteracija kao
  u asembleru) i validira na `[a-z0-9-]` pre čitanja po slug-u.
- Sitemap: modul injektuje blog URL-ove u `apps/marketing/src/app/sitemap.ts`
  (anchor `sitemap:entries`) — radi i sa i bez `seo-aeo` modula.
- Tipografija članka je u `src/app/blog/blog.css` (klasa `blog-article`), a
  editora u `components/admin/post-editor.css` — drži ih vizuelno usklađene.

## Modul: SEO / AEO (`seo-aeo`)

SEO / AEO sloj na marketing sajtu.

- `src/lib/seo.ts` → `buildMetadata({title, description, path})` — koristi ga
  za `export const metadata` na svakoj novoj javnoj stranici (daje canonical,
  OG i Twitter tagove odjednom).
- `src/components/json-ld.tsx` — JSON-LD builderi: `organizationJsonLd` (već u
  layout-u), `articleJsonLd` (dodaj na blog objave), `faqJsonLd` (FAQ sekcije —
  najjači AEO signal, AI asistenti rado citiraju FAQ schema).
- Sitemap živi u bazi (`src/app/sitemap.ts`) i ima anchor `sitemap:entries` —
  blog modul sam injektuje svoje URL-ove tamo. Nove javne stranice dodaješ
  direktno u listu `entries`.
- AEO princip: piši stranice tako da direktno odgovaraju na pitanje u prvom
  pasusu, koristi semantičke headinge (jedno H1, logična H2 hijerarhija) i
  dodaj FAQ blok gde ima smisla.

<!-- @ludus:inject:claude:modules -->
