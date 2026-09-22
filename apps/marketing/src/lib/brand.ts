/**
 * Jedan izvor istine za brend, linkove i brojke.
 *
 * VAŽNO: sve brojke na sajtu se čitaju odavde. Zatečeni sajt je prikazivao
 * različite vrednosti na različitim stranicama (4.600+ / 4.000+ / 4.800+ /
 * 40.000+) — to ruši poverenje. Menja se ovde, na jednom mestu.
 */

/**
 * Dok je sajt PREDLOG a ne zvanični sajt Nauči Dizajna, ovo ostaje `true`.
 *
 * Posledice: sajt se ne indeksira u pretraživačima (da ne konkuriše pravom
 * sajtu i da niko ne pomisli da je zvaničan), a u futeru stoji napomena.
 * Kad firma preuzme sajt, prebaci na `false` — to je jedina izmena.
 */
export const isProposal = true;

export const brand = {
  name: "Nauči Dizajn",
  legalName: "Nauči Dizajn™",
  email: "naucidizajn@gmail.com",
  tagline: "AI dizajnira. Ti zarađuješ.",
} as const;

export const links = {
  /** Skool zajednica — mesečno članstvo AI Web Dizajner. */
  skool: "https://www.skool.com/nauci-dizajn/about",
  instagram: "https://www.instagram.com/naucidizajn/",
  youtube: "https://www.youtube.com/@naucidizajn",
  facebook: "https://www.facebook.com/naucidizajn/",
  // TikTok je NAMERNO uklonjen sa sajta (odluka 22.09.). Ne vraćati ga
  // u futer ni u `sameAs` schema bez izričitog dogovora.
} as const;

/**
 * Logotip sajta.
 *
 * Pravi logo je žig firme i nije preuzet sa njihovog sajta. Dok ne stigne
 * fajl, u zaglavlju i futeru stoji prazno mesto tačnih dimenzija — raspored
 * se ne pomera kad se logo ubaci.
 *
 * [POPUNI] Kad fajl stigne: ubaci ga u `public/logo/` i upiši putanju u `src`
 * (npr. „/logo/naucidizajn.svg"). SVG je najbolji — ostaje oštar svuda.
 * Ako logo nije u odnosu 4:1, ispravi `width` i `height`.
 *
 * NAPOMENA: favicon (`src/app/icon.svg`), ikonica za telefon
 * (`src/app/apple-icon.png`) i slika za deljenje (`public/og.png`) nose crtež
 * znaka i prave se posebno — njih treba zameniti u istom koraku.
 */
export const logo = {
  src: "",
  width: 132,
  height: 32,
  alt: "Nauči Dizajn",
} as const;

/**
 * Brojke koje stoje na sajtu — sve PROVERENE na izvoru 22.09.2026.
 *
 * Izvor za `studentsSince2020`, `communityMembers`, `satisfaction`,
 * `mentorshipScore`, `areas` i `hoursOfMaterial`: početna naucidizajn.com.
 * Izvor za `skool*`: skool.com/nauci-dizajn/about.
 *
 * Brojevi članova i recenzija na Skool-u se menjaju iz nedelje u nedelju —
 * proveri ih pre svake veće objave. Ne prepisuj brojke iz starijih dokumenata.
 */
export const stats = {
  studentsSince2020: "4.600+",
  communityMembers: "2.200+",
  skoolMembers: "261",
  skoolRating: "5,0",
  skoolReviews: 16,
  satisfaction: "98,6%",
  mentorshipScore: "9,2 / 10",
  areas: 6,
  hoursOfMaterial: "80+",
} as const;

/**
 * Adrese na koje forme šalju prijave.
 *
 * Sajt je statičan (GitHub Pages) — nema servera koji bi primio formu, pa
 * prijava ide spoljnom servisu. Dovoljno je nalepiti adresu koju taj servis
 * da; forma je već napisana i radi sa bilo kojim koji prima `POST` sa
 * `multipart/form-data` i vraća JSON (Formspree, Getform, Basin, Web3Forms).
 *
 * [POPUNI] Dok je prazno, dugme otvara mejl klijent sa popunjenom porukom —
 * prijava i dalje stiže, samo ručno. Nijedna varijanta ne gubi posetioca.
 */
export const forms = {
  webinar: "",
} as const;

/** Cena članstva. [POTVRDI] da li postoji evro ekvivalent za region. */
export const membership = {
  price: "$99",
  period: "/ mesečno",
  priceNote: "Naplata preko Skool-a, u dolarima. Otkazuješ sam, iz svog naloga.",
} as const;
