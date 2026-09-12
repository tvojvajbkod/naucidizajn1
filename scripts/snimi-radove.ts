/**
 * Ujednačeni snimci ekrana sajtova koje su napravili polaznici.
 *
 * Zašto skripta a ne ručno: snimci napravljeni telefonom ili alatom za
 * isecanje imaju različite širine, zumove i trake pregledača. Na zidu radova
 * to izgleda aljkavo i obesmišljava celu stranicu. Ova skripta svaki sajt
 * otvara u istoj širini prozora, sačeka da se učita i izveze snimak istog
 * odnosa stranica — desktop i mobilni.
 *
 * KORIŠĆENJE
 *
 *   1. bun add -d playwright@1.56.1        (jednom, namerna promena pina)
 *   2. bunx playwright install chromium    (jednom)
 *   3. Upiši sajtove u listu `sajtovi` ispod
 *   4. bun scripts/snimi-radove.ts
 *
 * Snimci se upisuju u apps/marketing/public/radovi/.
 * Putanju iz ispisa prekopiraj u `image` u src/lib/works.ts.
 *
 * NAPOMENA O DOZVOLI: snimaš tuđi sajt. Pre objave moraš imati saglasnost i
 * polaznika i klijenta — vidi komentar na vrhu src/lib/works.ts.
 */

import { mkdir } from "node:fs/promises";
import { join } from "node:path";

/** Popuni pre pokretanja. `slug` mora da odgovara slug-u rada u works.ts. */
const sajtovi: Array<{ slug: string; url: string }> = [
  // { slug: "stolarija-kragujevac", url: "https://primer.rs" },
];

const IZLAZ = join(import.meta.dir, "..", "apps", "marketing", "public", "radovi");

/** Desktop 1440×900 daje 16:10 — isti odnos koji koristi komponenta Screenshot. */
const DESKTOP = { width: 1440, height: 900 };
const MOBILNI = { width: 390, height: 844 };

/** Koliko čekamo da se učitaju fontovi, slike i animacije pri ulasku. */
const CEKANJE_MS = 2500;

async function main() {
  if (sajtovi.length === 0) {
    console.log(
      "Lista `sajtovi` je prazna. Dopuni je u scripts/snimi-radove.ts pa pokreni ponovo.",
    );
    return;
  }

  const { chromium } = await import("playwright").catch(() => {
    throw new Error(
      "Playwright nije instaliran. Pokreni: bun add -d playwright@1.56.1 && bunx playwright install chromium",
    );
  });

  await mkdir(IZLAZ, { recursive: true });
  const browser = await chromium.launch();

  for (const sajt of sajtovi) {
    for (const [naziv, viewport] of [
      ["desktop", DESKTOP],
      ["mobile", MOBILNI],
    ] as const) {
      const context = await browser.newContext({
        viewport,
        deviceScaleFactor: 2, // retina — snimak ostaje oštar i kad se skalira
        isMobile: naziv === "mobile",
        hasTouch: naziv === "mobile",
        locale: "sr-RS",
      });
      const page = await context.newPage();

      try {
        await page.goto(sajt.url, { waitUntil: "networkidle", timeout: 45_000 });
        // Skrolovanje do dna pa nazad pokreće lazy-load slike, pa ih snimak uhvati.
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(1200);
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(CEKANJE_MS);

        const putanja = join(IZLAZ, `${sajt.slug}-${naziv}.png`);
        await page.screenshot({ path: putanja, fullPage: false });
        console.log(`✓ ${sajt.slug} (${naziv}) → /radovi/${sajt.slug}-${naziv}.png`);
      } catch (error) {
        console.error(`✗ ${sajt.slug} (${naziv}): ${(error as Error).message}`);
      } finally {
        await context.close();
      }
    }
  }

  await browser.close();
  console.log(`\nGotovo. Snimci su u ${IZLAZ}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
