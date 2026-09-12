/**
 * Studije slučaja.
 *
 * DVE VRSTE, i razlika je namerna i vidljiva na sajtu:
 *
 * 1. `kind: "demonstracija"` — prikaz metoda na izmišljenom klijentu. Nije
 *    priča o stvarnom čoveku i tako je i označena na stranici. Ovo sme da se
 *    objavi odmah jer ništa ne tvrdi o tuđim rezultatima.
 *
 * 2. `kind: "student"` — prava priča pravog polaznika. Svaka takva stavka mora
 *    da bude popunjena STVARNIM podacima i objavljena tek uz pismenu saglasnost
 *    polaznika. Polja sa [POPUNI] su prazna mesta — dok god ih ima, stavka
 *    ostaje `published: false` i ne prikazuje se na sajtu.
 *
 * NIKAD ne popunjavaj `kind: "student"` izmišljenim imenom, klijentom ili
 * iznosom. Lažna referenca je najlakša stvar za proveriti i najskuplja kad
 * pukne — a Zakon o oglašavanju i Zakon o zaštiti potrošača je tretiraju kao
 * obmanjujuće oglašavanje.
 */

/** Slika uz studiju slučaja. Fajlovi žive u `public/studije/`. */
export interface CaseMedia {
  /** Putanja u /public, npr. "/studije/anatomija-gotov-sajt.png". */
  src: string;
  /** Opis za čitače ekrana — obavezan, nije ukras. */
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

export interface CaseStep {
  /** Npr. „Dan 1" ili „Korak 2". */
  label: string;
  title: string;
  body: string;
  /** Doslovan prompt ili poruka, kad ih korak ima. */
  snippet?: string;
  /** Naslov iznad snippet-a, npr. „Prompt" ili „Poruka klijentu". */
  snippetLabel?: string;
  /** Snimak ekrana uz korak — npr. gotov sajt ili ekran alata. */
  image?: CaseMedia;
}

export interface CaseStudy {
  slug: string;
  kind: "demonstracija" | "student";
  published: boolean;
  title: string;
  /** Rečenica koja stoji na kartici. */
  summary: string;
  /** Prvi pasus na stranici — AEO: direktno odgovara na pitanje iz naslova. */
  intro: string;
  /** Kratke činjenice u zaglavlju. */
  facts: Array<{ label: string; value: string }>;
  steps: CaseStep[];
  /** Šta se iz ovoga uči — zaključak bez prodaje. */
  takeaways: string[];
  /** Naslovna slika — snimak gotovog sajta. Bez nje stranica i dalje radi. */
  cover?: CaseMedia;
  /** Dodatne slike na dnu (detalji, mobilni prikaz, pre i posle). */
  gallery?: CaseMedia[];
  /** Živi sajt, ako klijent pristaje da se pominje. */
  liveUrl?: string;
  /** Za priče polaznika: ime i saglasnost. */
  person?: { name: string; role?: string; consent: boolean };
}

const demonstracija: CaseStudy = {
  slug: "anatomija-projekta",
  kind: "demonstracija",
  published: true,
  title: "Anatomija jednog projekta: od prompta do naplate",
  summary:
    "Ceo posao za izmišljenu stolarsku radionicu, korak po korak — sa stvarnim promptovima, porukama i računicom cene.",
  intro:
    "Ovo je prikaz metoda, ne priča o polazniku. Klijent je izmišljen — stolarska radionica iz manjeg grada koja posluje preko Instagrama — da bi svaki korak mogao da se pokaže doslovno: prompt koji se kuca, poruka koja se šalje, način na koji se dolazi do cene. Pravi projekti se razlikuju po detaljima, ali redosled koraka je ovaj.",
  facts: [
    { label: "Klijent", value: "Stolarska radionica (primer)" },
    { label: "Obim", value: "Sajt od pet sekcija, jedna strana" },
    { label: "Vreme izrade", value: "Oko 6 sati rada" },
    { label: "Raspon cene", value: "300–600 € (vidi korak 6)" },
  ],
  steps: [
    {
      label: "Korak 1",
      title: "Nalaženje klijenta kome sajt stvarno fali",
      body: "Ne tražiš „bilo koga kome treba sajt“, nego uzak profil: zanatska radnja ili lokalna usluga koja već prodaje preko Instagrama, ima objavljene radove i fotografije, i dobija poruke sa pitanjem o ceni. Takav klijent ima dokaz da tražnja postoji i muku koju sajt rešava — ne moraš da ga ubeđuješ da mu internet treba. Praktično: pretraga po lokaciji i delatnosti, pa lista od trideset naloga koji ispunjavaju sva tri uslova.",
    },
    {
      label: "Korak 2",
      title: "Prva poruka",
      body: "Kratka, konkretna i bez pohvala koje zvuče kao šablon. Pomeni jednu stvar koju si stvarno video na njegovom profilu, imenuj problem koji mu to pravi i ponudi nešto malo. Cilj prve poruke nije prodaja nego odgovor.",
      snippetLabel: "Poruka",
      snippet:
        "Dobar dan, video sam kuhinju od hrasta koju ste objavili prošle nedelje — radovi su zaista lepi.\n\nPrimetio sam da u opisu profila nemate sajt, pa svako ko pita za cenu mora da vam piše poruku. To znači da odgovarate na ista pitanja po više puta dnevno, a ljudi koji pitaju uveče često ne sačekaju odgovor.\n\nNapravio bih vam jednostavnu stranicu sa galerijom radova, cenovnikom po tipu posla i formom za upit. Mogu da vam pošaljem predlog izgleda pre nego što se dogovorimo o bilo čemu — nezavisno od toga da li ćemo raditi.\n\nZanima vas?",
    },
    {
      label: "Korak 3",
      title: "Šta pitaš pre nego što otvoriš alat",
      body: "Pet pitanja, ne petnaest. Koje poslove najviše želi da radi, koje najmanje; koliko otprilike košta najčešći posao; ima li fotografije u pristojnoj rezoluciji; šta ljudi najčešće pitaju; kako želi da ga kontaktiraju. Odgovori na ovih pet pitanja su ceo sadržaj sajta — sve ostalo je oblik.",
    },
    {
      label: "Korak 4",
      title: "Prompt za strukturu",
      body: "Prvi prompt ne traži izgled nego redosled. AI dobro sklapa strukturu kad mu daš stvarne odgovore klijenta umesto opšteg opisa delatnosti. Loš prompt je „napravi sajt za stolara“ — dobija se isto što i svi drugi. Dobar prompt nosi ograničenja i rečenice klijenta.",
      snippetLabel: "Prompt",
      snippet:
        'Praviš strukturu jednostranog sajta za stolarsku radionicu iz manjeg grada u Srbiji.\n\nŠta znam o klijentu:\n- Najviše želi da radi: kuhinje po meri i ugradne plakare\n- Ne želi više da radi: sitne popravke\n- Najčešći posao košta oko 1.500–3.000 €, izrada traje 3–5 nedelja\n- Ima oko 40 dobrih fotografija gotovih radova\n- Ljudi najčešće pitaju: koliko košta, koliko traje, da li izlazi na teren da meri\n- Želi upite preko forme i WhatsApp-a\n\nDaj mi redosled sekcija sa kratkim obrazloženjem zašto svaka stoji baš tu.\nZa svaku sekciju napiši koji je jedan zadatak te sekcije.\nBez marketinških fraza tipa "vrhunski kvalitet" i "dugogodišnje iskustvo".\nPiši na srpskom, ekavica.',
    },
    {
      label: "Korak 5",
      title: "Izrada i ono što AI ne radi umesto tebe",
      body: "Struktura i tekst dolaze brzo. Ono što ostaje na tebi: izbor fotografija koje se ne ponavljaju, čitljivost cenovnika, redosled na mobilnom telefonu — jer će osamdeset odsto ljudi sajt otvoriti na telefonu — i provera da forma zaista stiže na mejl koji klijent otvara. Ovo je deo gde se razdvajaju oni koji su naučili alat od onih koji su naučili posao.",
    },
    {
      label: "Korak 6",
      title: "Kako se dolazi do cene",
      body: "Cena ne izlazi iz tvojih sati nego iz vrednosti za klijenta, ograničene onim što tržište podnosi. Računica: ako mu jedan prosečan posao donosi 1.500–3.000 € i sajt mu godišnje donese makar dva upita koja bi inače propao, sajt se isplatio višestruko. Zato je raspon 300–600 € za jednostranu izradu razuman u regionu — ispod toga radiš ispod cene, iznad toga za ovaj obim klijent traži agenciju. Ključna rečenica u ponudi nije cena nego šta je u nju uključeno i šta nije.",
    },
    {
      label: "Korak 7",
      title: "Predaja i naplata",
      body: "Pola unapred, pola po predaji — standard koji te štiti i klijentu deluje ozbiljno. Uz sajt ide kratko uputstvo kako da sam menja cenovnik i dodaje fotografije, jer klijent koji ume sam da promeni cenu neće te zvati za svaku sitnicu, a tebe će preporučiti. Poslednji korak koji svi preskaču: traži da ti napiše dve rečenice utiska dok je zadovoljan. To je tvoj sledeći klijent.",
    },
  ],
  takeaways: [
    "Uži profil klijenta donosi više odgovora nego veća lista.",
    "Sadržaj sajta dolazi iz pet pitanja klijentu, ne iz alata.",
    "AI radi strukturu i tekst; izbor, redosled i provera ostaju na tebi.",
    "Cena se izvodi iz vrednosti posla za klijenta, ne iz broja tvojih sati.",
    "Utisak se traži odmah po naplati, dok je zadovoljstvo sveže.",
  ],
};

/**
 * ŠABLONI za prave priče polaznika. Ostaju `published: false` dok se svako
 * [POPUNI] ne zameni stvarnim podatkom i dok polaznik ne da pismenu saglasnost.
 * Upitnik za prikupljanje je u projektnoj dokumentaciji.
 */
const studentTemplates: CaseStudy[] = [
  {
    slug: "prica-polaznika-1",
    kind: "student",
    published: false,
    title: "[POPUNI: naslov — šta je postigao, konkretno]",
    summary: "[POPUNI: jedna rečenica za karticu]",
    intro: "[POPUNI: prvi pasus — odakle je krenuo i gde je sada]",
    facts: [
      { label: "Vreme do prvog klijenta", value: "[POPUNI]" },
      { label: "Prethodno iskustvo", value: "[POPUNI]" },
      { label: "Delatnost klijenta", value: "[POPUNI]" },
      { label: "Naplaćeno", value: "[POPUNI — samo ako polaznik pristane]" },
    ],
    steps: [
      {
        label: "Pre",
        title: "[POPUNI: čime se bavio i zašto je krenuo]",
        body: "[POPUNI]",
      },
      {
        label: "Tokom",
        title: "[POPUNI: gde je zapeo i šta mu je pomoglo]",
        body: "[POPUNI]",
      },
      {
        label: "Prvi klijent",
        title: "[POPUNI: kako ga je našao i šta mu je napravio]",
        body: "[POPUNI]",
      },
      {
        label: "Sada",
        title: "[POPUNI: šta radi danas]",
        body: "[POPUNI]",
      },
    ],
    takeaways: ["[POPUNI]"],
    // Snimak sajta koji je polaznik napravio. Napravi ga skriptom
    // `bun scripts/snimi-radove.ts` da dimenzije budu ujednačene.
    cover: undefined,
    gallery: undefined,
    liveUrl: undefined,
    person: { name: "[POPUNI]", role: "[POPUNI]", consent: false },
  },
];

const all: CaseStudy[] = [demonstracija, ...studentTemplates];

/** Samo objavljene — nepopunjeni šabloni se ne prikazuju na sajtu. */
export const caseStudies: CaseStudy[] = all.filter((study) => study.published);

/** Sve stavke, uključujući nacrte — za interni pregled. */
export const allCaseStudies: CaseStudy[] = all;

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
