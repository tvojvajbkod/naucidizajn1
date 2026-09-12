# Snimci radova polaznika

Ovde idu snimci sajtova koje su polaznici napravili za prave klijente.

## Kako se prave

```bash
bun add -d playwright@1.56.1     # jednom
bunx playwright install chromium # jednom
# upiši sajtove u scripts/snimi-radove.ts, pa:
bun scripts/snimi-radove.ts
```

Skripta pravi dva fajla po sajtu:

- `<slug>-desktop.png` — 1440×900, odnos 16:10 (isti kao komponenta Screenshot)
- `<slug>-mobile.png` — 390×844

## Imenovanje

`<slug>` mora da bude isti kao `slug` rada u `src/lib/works.ts`.

## Pre nego što objaviš

Rad sme na sajt tek kad postoje OBE saglasnosti — polaznika i njegovog klijenta.
Detalji: komentar na vrhu `src/lib/works.ts`.
