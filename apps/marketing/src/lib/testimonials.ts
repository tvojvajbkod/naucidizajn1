/**
 * Utisci — svi su preuzeti sa postojećih kanala (sajt, Skool zajednica).
 * Ništa nije izmišljeno. Polje `retention` je najjači, a do sada neiskorišćen
 * dokaz: Skool uz svaku ocenu prikazuje koliko dugo je čovek i dalje član koji
 * plaća. Zadovoljstvo ume da se odglumi, zadržavanje teže.
 */

export interface Testimonial {
  name: string;
  /** Uloga ili firma, kad postoji. */
  role?: string;
  quote?: string;
  /** Npr. „i dalje član posle 2 meseca". */
  retention?: string;
  source: "Skool" | "Sajt";
}

export const testimonials: Testimonial[] = [
  {
    name: "Mario Miladinović",
    role: "Digital dizajner @ HOLOGRAPHIK®",
    quote:
      "Nakon individualnog mentorstva zaposlio sam se u jednom od najboljih dizajn studija u Evropi.",
    source: "Sajt",
  },
  {
    name: "Teodora Đurđenić",
    role: "Junior UI/UX dizajner @ Nordeus",
    quote: "Učenje uz mentorstvo je najveći savet koji mogu da dam — to je novac koji ti se vrati.",
    source: "Sajt",
  },
  {
    name: "Milana Srdić",
    quote:
      "Jedna od najboljih investicija u znanje! Podrška u grupi je fantastična, materijali su vrhunski strukturirani, a saveti za monetizaciju rada izuzetno korisni.",
    retention: "i dalje član posle 2 meseca",
    source: "Skool",
  },
  {
    name: "Goran Granić",
    quote:
      "Sjajna grupa, sjajan predavač. Hvala Nikoli i Teodori na učenju o tome kako napraviti sajt, kreiranju sadržaja i prodaji naučenog i primenjenog. Nastavljamo dalje.",
    retention: "i dalje član posle 2 meseca",
    source: "Skool",
  },
  { name: "Marija Nedimović", retention: "i dalje član posle 2 meseca", source: "Skool" },
  { name: "Filip Ćorić", retention: "i dalje član posle 2 meseca", source: "Skool" },
  { name: "Jovan Knežević", retention: "i dalje član posle 2 meseca", source: "Skool" },
  { name: "Marijana Zdravković", retention: "i dalje član posle 2 meseca", source: "Skool" },
  { name: "Iskra Jovanovikj", retention: "i dalje član posle 28 dana", source: "Skool" },
  { name: "Milena Čajić", retention: "i dalje član posle mesec dana", source: "Skool" },
  { name: "Danijel Susaković", retention: "i dalje član posle mesec dana", source: "Skool" },
];

export interface Mentor {
  /** Koristi se i kao ime fajla sa fotografijom. */
  slug: string;
  name: string;
  role: string;
  bio: string;
  /**
   * Putanja do fotografije, npr. „/mentori/nikola-tripkovic.jpg".
   * Prazno = na sajtu stoji prazno mesto za sliku, sa uputstvom.
   * Fotografija se objavljuje ISKLJUČIVO uz saglasnost osobe sa slike.
   * Preporuka: uspravna slika, najmanje 800 × 1000 px, lice u gornjoj trećini.
   */
  photo?: string;
  /** Prikazuje se u sekciji „Ko te vodi" na početnoj i na /o-nama. */
  featured?: boolean;
}

/**
 * Mentor — podaci PROVERENI na naucidizajn.com, 23.09.2026.
 *
 * Od 23.09.2026. edukaciju vodi Nikola. Mentori sa snimljenih kurseva (Voja,
 * Sava, Staki) i Teodora uklonjeni su zajedno sa tim kursevima — nisu obrisani
 * greškom. Ako se neko od njih vrati u program, dodaj ga ovde sa proverenim
 * podacima i traži saglasnost za fotografiju.
 *
 * Napomena: njihov sajt na različitim stranicama navodi različit broj učenika
 * (3.500 / 4.000 / 4.600+). Zato ukupan broj polaznika NE prepisujemo iz
 * mentorskog bloka — on dolazi iz `stats` u `brand.ts`.
 */
export const mentors: Mentor[] = [
  {
    slug: "nikola-tripkovic",
    name: "Nikola Tripković",
    role: "Osnivač Nauči Dizajn",
    bio: "Vodi edukaciju „Postani AI web dizajner“ i drži nedeljne sastanke zajednice. Dizajn predaje od 2020. i iza njega je preko 2.000 mentorisanih polaznika.",
    featured: true,
  },
];

/** Mentori koji stoje u sekciji „Ko te vodi". */
export const featuredMentors = mentors.filter((mentor) => mentor.featured);

export function getMentor(slug: string): Mentor | undefined {
  return mentors.find((mentor) => mentor.slug === slug);
}
