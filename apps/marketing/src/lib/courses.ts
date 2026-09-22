/** Katalog kurseva — koristi ga /kursevi i /kursevi/[slug]. */

export interface Course {
  slug: string;
  title: string;
  tagline: string;
  /** Rečenica koja odgovara na „šta ću moći posle ovoga". */
  outcome: string;
  episodes: string;
  hours: string;
  tool: string;
  /** Za koga je — konkretno, ne „za sve". */
  audience: string;
  curriculum: string[];
  /** Najniža cena kursa, izmerena sa naucidizajn.com 22.09.2026. */
  price: string;
  /** Kratka napomena uz cenu — koji paketi postoje i šta je u ceni. */
  priceNote: string;
  /** Plaćanje na rate, doslovno kao na naucidizajn.com (22.09.2026.). */
  installments: string;
}

export const courses: Course[] = [
  {
    slug: "web-dizajn",
    title: "Web dizajn",
    tagline: "Dizajniraj sajtove od nule, bez predznanja.",
    outcome:
      "Posle kursa umeš da napraviš kompletan dizajn sajta u Figmi — od strukture i tipografije do predaje razvoju.",
    episodes: "85+ epizoda",
    hours: "12+ sati",
    tool: "Figma",
    audience: "Za one koji kreću iz nule i hoće veštinu koja se najbrže pretvara u plaćen posao.",
    curriculum: [
      "Osnove kompozicije, mreže i tipografije",
      "Figma od prvog klika do komponenti",
      "Struktura sajta i korisnički tok",
      "Responsive dizajn za mobilni i desktop",
      "Predaja dizajna razvoju",
      "Projekti za portfolio",
    ],
    price: "99 €",
    priceNote: "Tri paketa: Starter 99 € · Pro 399 € · Ultra 699 €.",
    installments: "Na rate: Starter 2 × 60 € · Pro 200 € + 2 × 130 € · Ultra 200 € + 4 × 150 €.",
  },
  {
    slug: "ui-ux",
    title: "UI UX dizajn",
    tagline: "Dizajniraj aplikacije koje rade dobro i izgledaju lepo.",
    outcome:
      "Posle kursa umeš da osmisliš i dizajniraš mobilnu aplikaciju — od istraživanja do klikabilnog prototipa.",
    episodes: "60 epizoda",
    hours: "10+ sati",
    tool: "Figma",
    audience: "Za one koje zanima proizvod, a ne samo vizuelni sloj.",
    curriculum: [
      "Razlika između UI i UX u praksi",
      "Istraživanje korisnika i korisnički tokovi",
      "Wireframe pa vizuelni dizajn",
      "Dizajn sistem i komponente",
      "Klikabilni prototip i testiranje",
      "Studija slučaja za portfolio",
    ],
    price: "99 €",
    priceNote: "Tri paketa: Starter 99 € · Pro 399 € · Ultra 699 €.",
    installments: "Na rate: Starter 2 × 60 € · Pro 200 € + 2 × 130 € · Ultra 200 € + 4 × 150 €.",
  },
  {
    slug: "webflow",
    title: "Webflow",
    tagline: "Napravi sajt bez jedne linije koda.",
    outcome:
      "Posle kursa umeš da svoj dizajn pretvoriš u živ sajt i predaš ga klijentu sa CMS-om koji sam može da uređuje.",
    episodes: "80+ epizoda",
    hours: "12+ sati",
    tool: "Webflow",
    audience: "Za dizajnere koji hoće i da isporuče, ne samo da nacrtaju.",
    curriculum: [
      "Webflow okruženje i box model bez koda",
      "Prenos dizajna iz Figme u Webflow",
      "Responsive prelomi i interakcije",
      "CMS kolekcije za blog i portfolio",
      "SEO podešavanja i objava",
      "Predaja sajta klijentu",
    ],
    price: "99 €",
    priceNote: "Tri paketa: Starter 99 € · Pro 399 € · Ultra 699 €.",
    installments: "Na rate: Starter 2 × 60 € · Pro 200 € + 2 × 130 € · Ultra 200 € + 4 × 150 €.",
  },
  {
    slug: "logo-dizajn",
    title: "Logo dizajn",
    tagline: "Od ideje do celog vizuelnog identiteta.",
    outcome:
      "Posle kursa umeš da napraviš logo i knjigu standarda koju klijent može odmah da koristi.",
    episodes: "70+ epizoda",
    hours: "10+ sati",
    tool: "Adobe Illustrator",
    audience: "Za one koji vole crtež, oblik i brend priču.",
    curriculum: [
      "Istraživanje i koncept pre crtanja",
      "Illustrator alati koji se stvarno koriste",
      "Tipografija i izbor pisma",
      "Boja i primena kroz medije",
      "Knjiga standarda",
      "Prezentacija rešenja klijentu",
    ],
    price: "99 €",
    priceNote: "Tri paketa: Starter 99 € · Pro 399 € · Ultra 699 €.",
    installments: "Na rate: Starter 2 × 60 € · Pro 200 € + 2 × 130 € · Ultra 200 € + 4 × 150 €.",
  },
  {
    slug: "motion-dizajn",
    title: "Motion dizajn",
    tagline: "Animacije i specijalni efekti u After Effectsu.",
    outcome:
      "Posle kursa umeš da napraviš animirani spot, logo animaciju i efekte za društvene mreže.",
    episodes: "90 epizoda",
    hours: "34+ sati",
    tool: "Adobe After Effects",
    audience: "Za one koje zanima pokret, video i sadržaj za mreže.",
    curriculum: [
      "After Effects od nule",
      "Ključni kadrovi i principi animacije",
      "Animacija logotipa i tipografije",
      "Efekti, maske i praćenje pokreta",
      "Zvuk i ritam montaže",
      "Izvoz za sve platforme",
    ],
    price: "99 €",
    priceNote: "Jedan paket, bez mentorstva.",
    installments: "Ili 2 rate po 60 € mesečno (ukupno 120 €).",
  },
  {
    slug: "licni-brend",
    title: "Lični brend za dizajnere",
    tagline: "Vođen program do prvog klijenta.",
    outcome:
      "Posle programa imaš portfolio, profil i način obraćanja koji ti donose upite — a ne samo lajkove.",
    episodes: "28 epizoda",
    hours: "4 sata",
    tool: "LinkedIn, Instagram",
    audience: "Za one koji već umeju da dizajniraju, ali nemaju klijente.",
    curriculum: [
      "Pozicioniranje: šta tačno prodaješ i kome",
      "Portfolio koji donosi upite",
      "Profil na LinkedIn-u i Instagramu",
      "Obraćanje potencijalnim klijentima",
      "Cena i pregovor",
      "Od prvog razgovora do ugovora",
    ],
    price: "499 €",
    priceNote: "Jedan paket.",
    installments: "Ili 4 rate po 150 € mesečno (ukupno 600 €).",
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
