# Objava sajta

Dva puta, i vredi znati razliku pre nego što izabereš.

| | GitHub Pages | Vercel |
|---|---|---|
| Cena | Besplatno | Besplatno za ovaj obim |
| Sajt radi | ✅ sve stranice | ✅ sve stranice |
| Blog iz baze | ⚠️ zamrznut na trenutak builda | ✅ osvežava se sam |
| Forme i prijave | ❌ traže server | ✅ |
| Sopstveni domen | ✅ | ✅ |
| Podešavanje | 5 minuta | 3 minuta |

**Ukratko:** GitHub Pages je odličan za sajt kakav je sada — sve stranice,
cene, FAQ, studije slučaja i radovi rade bez servera. Kad zatrebaju prave
forme za prijavu ili blog koji se menja bez novog deploy-a, prelazi se na
Vercel. Isti repozitorijum služi za oba.

---

## GitHub Pages

### 1. Napravi repozitorijum

Na GitHub-u → **New repository**. Zapamti ime — treba ti u koraku 3.
Može biti privatan; Pages radi i iz privatnog repozitorijuma.

### 2. Pošalji kod

U folderu projekta:

```bash
git init
git add .
git commit -m "Redizajn sajta Nauči Dizajn"
git branch -M main
git remote add origin https://github.com/KORISNIK/IME-REPOZITORIJUMA.git
git push -u origin main
```

Ako je git već inicijalizovan (jeste, ako si dobila projekat od mene sa
istorijom), preskoči prve tri linije.

### 3. Uključi Pages

U repozitorijumu → **Settings** → **Pages** → pod *Build and deployment*,
za **Source** izaberi **GitHub Actions**.

To je sve. Adresu ispod imena repozitorijuma (`/IME-REPOZITORIJUMA`) workflow
sam prepoznaje i ugrađuje u sve putanje — ništa ne podešavaš ručno.

### 4. Sačekaj build

Tab **Actions** → *Objavi sajt na GitHub Pages*. Prvi prolaz traje 2–3 minuta.
Kad se završi, adresa sajta piše u samom workflow-u i u Settings → Pages:

```
https://KORISNIK.github.io/IME-REPOZITORIJUMA/
```

Od tada se sajt objavljuje **sam, na svaki push** u granu `main`.

### Blog na GitHub Pages

Blog čita objave iz Supabase. Bez ključeva blog je prazan i to ne ruši build.

Ako hoćeš blog: **Settings → Secrets and variables → Actions → New repository
secret**, dodaj `NEXT_PUBLIC_SUPABASE_URL` i `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
Objave se tada ugrađuju u sajt pri svakom build-u — nova objava postaje vidljiva
tek posle sledećeg push-a ili ručnog pokretanja workflow-a (Actions → Run
workflow). To je cena statičkog hostovanja.

Analitika ide isto tako, kao **Variables** (ne Secrets, nisu tajne):
`NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_META_PIXEL_ID`.

### Sopstveni domen

Settings → Pages → *Custom domain*. Kad ga postaviš, sajt više ne živi u
podfolderu, pa u `.github/workflows/deploy-pages.yml` **nije** potrebna nikakva
izmena — `actions/configure-pages` sam vraća prazan `base_path`.

### Lokalna proba statičkog izvoza

```bash
bun run build:static
bunx serve apps/marketing/out
```

Za probu sa podfolderom, kao na Pages-u:

```bash
STATIC_EXPORT=1 NEXT_PUBLIC_BASE_PATH=/ime-repozitorijuma bun run build:static
```

---

## Vercel

1. [vercel.com](https://vercel.com) → **Add New → Project** → izaberi repozitorijum
2. **Root Directory**: `apps/marketing`
3. Framework se prepoznaje sam (Next.js). Build komanda i izlaz ostaju podrazumevani —
   `STATIC_EXPORT` se NE postavlja, pa sajt radi kao pun Next.js server.
4. Env varijable iz `.env.example` (bar `NEXT_PUBLIC_MARKETING_URL`)

Za `apps/app` (studentski portal i admin) napravi **drugi** Vercel projekat sa
Root Directory `apps/app` — tako je templejt i zamišljen.

---

## Šta se dešava sa `STATIC_EXPORT`

Prekidač je u `apps/marketing/next.config.ts`. Kad je `STATIC_EXPORT=1`:

- `output: "export"` — sajt se izvozi kao obični HTML fajlovi u `apps/marketing/out`
- slike se ne optimizuju u hodu (nema servera koji bi to radio)
- `trailingSlash: true` — svaka strana dobija svoj folder sa `index.html`
- `basePath` se uzima iz `NEXT_PUBLIC_BASE_PATH`
- security headeri se izostavljaju — njih postavlja server, a ovde ga nema

Bez te varijable ništa se ne menja: `bun run dev` i Vercel rade kao i pre.

## Poznata ograničenja statičkog izvoza

- **Blog** je zamrznut na trenutak builda (gore piše kako da se osveži)
- **Prijava na webinar** traži formu na serveru — sada je dugme sidro `#prijava`
- **Security headeri** ne postoje; na Pages-u ih postavlja GitHub, i dovoljni su
  za sajt bez prijave korisnika
- Ako blog nema nijednu objavu, build pravi jednu rezervnu 404 putanju
  (`/blog/nema-objava/`) jer Next odbija prazan spisak. Nijedan link ne vodi na
  nju i nestaje čim se pojavi prva objava.
