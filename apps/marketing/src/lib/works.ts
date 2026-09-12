/**
 * Radovi polaznika — sajtovi koje su polaznici napravili za prave klijente.
 *
 * Jedan snimak ekrana vredi više od tri pasusa teksta: posetilac za sekundu
 * vidi nivo na koji može da dođe. Zato ovo nije ukras nego glavni dokaz.
 *
 * PRAVILA:
 * - Rad ide na sajt tek kad `published: true`, a to sme tek kad postoje OBE
 *   saglasnosti: polaznika (da se njegovo ime i rad prikažu) i njegovog
 *   klijenta (da se sajt i naziv firme pominju). Klijent je vlasnik svog
 *   brenda — prikaz bez pitanja ume da se vrati kao problem polazniku.
 * - Ako klijent ne želi da se pominje, `client` ostaje opis delatnosti bez
 *   imena („stolarska radionica, Kragujevac") i `url` se izostavlja.
 * - Slike idu u `public/radovi/`. Imena fajlova prate slug rada.
 * - NIKAD ne stavljaj tuđi rad, sliku sa stocka ni primer iz kursa kao rad
 *   polaznika. Ovo je stranica čiji je jedini smisao da bude istinita.
 *
 * Snimke pravi `bun scripts/snimi-radove.ts` — daje ujednačene dimenzije,
 * pa zid izgleda kao celina, a ne kao skup slučajnih slika.
 */

export interface Work {
  slug: string;
  published: boolean;
  /** Naziv firme ili opis delatnosti ako klijent ne želi da se imenuje. */
  client: string;
  /** Delatnost — koristi se za filter. */
  category: string;
  /** Grad ili region, kad ga ima. */
  location?: string;
  /** Ko je napravio. */
  author: string;
  /** Jedna rečenica: šta je bio zadatak. */
  brief: string;
  /** Putanja u /public, npr. "/radovi/stolarija-desktop.png". */
  image: string;
  /** Uža, uspravna varijanta za mobilni prikaz. Opciono. */
  imageMobile?: string;
  /** Živi sajt — samo ako je klijent pristao. */
  url?: string;
  /** Koliko je trajala izrada, kad je podatak potvrđen. */
  duration?: string;
  /** Da li postoje obe saglasnosti. Bez ovoga se ne objavljuje. */
  consent: { student: boolean; client: boolean };
}

/**
 * ŠABLON. Kopiraj stavku, popuni stvarnim podacima, prebaci `published` na
 * true tek kad su obe saglasnosti `true` i kad slika stvarno postoji u
 * `public/radovi/`. Dok je lista prazna, sekcija se na sajtu ne prikazuje —
 * ništa se ne lomi.
 */
export const works: Work[] = [
  {
    slug: "primer-slug",
    published: false,
    client: "[POPUNI: naziv firme ili delatnost bez imena]",
    category: "[POPUNI: npr. Zanatstvo]",
    location: "[POPUNI: grad]",
    author: "[POPUNI: ime polaznika]",
    brief: "[POPUNI: jedna rečenica — šta je bio zadatak]",
    image: "/radovi/primer-slug-desktop.png",
    imageMobile: "/radovi/primer-slug-mobile.png",
    url: undefined,
    duration: "[POPUNI]",
    consent: { student: false, client: false },
  },
];

/** Samo radovi spremni za javnost — dvostruka provera, namerno. */
export const publishedWorks: Work[] = works.filter(
  (work) => work.published && work.consent.student && work.consent.client,
);

/** Delatnosti koje se stvarno pojavljuju — za filter na /radovi. */
export const workCategories: string[] = Array.from(
  new Set(publishedWorks.map((work) => work.category)),
).sort((a, b) => a.localeCompare(b, "sr"));
