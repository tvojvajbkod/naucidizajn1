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
 * Mentori — imena, uloge i brojke PROVERENI na kursnim stranicama
 * naucidizajn.com, 23.09.2026.
 *
 * Napomena: njihov sajt na različitim stranicama navodi različit broj učenika
 * (3.500 na UI UX strani, 4.000 na Webflow strani, 4.600+ na početnoj). Zato
 * ukupan broj polaznika NE prepisujemo iz mentorskih blokova — on dolazi iz
 * `stats` u `brand.ts`. Ovde stoje samo brojke vezane za samog mentora.
 */
export const mentors: Mentor[] = [
  {
    slug: "nikola-tripkovic",
    name: "Nikola Tripković",
    role: "Osnivač Nauči Dizajn",
    bio: "Vodi zajednicu AI Web Dizajner i drži nedeljne sastanke, a predaje i UI UX i Webflow. Preko 2.000 mentorisanih polaznika od 2020.",
    featured: true,
  },
  {
    slug: "voja",
    name: "Voja",
    role: "Web dizajn mentor",
    bio: "Dizajnom se bavi od petnaeste godine. Sedam godina u struci i preko 50 mentorisanih polaznika. Radi kao senior web dizajner u velikoj softverskoj kompaniji. [POTVRDI naziv firme]",
    featured: true,
  },
  {
    slug: "sava",
    name: "Sava",
    role: "Logo dizajn mentor",
    bio: "Pet godina u struci i preko 50 mentorisanih polaznika. Radio je za više od 140 klijenata iz celog sveta; logotip Nauči Dizajna je njegov rad.",
  },
  {
    slug: "staki",
    name: "Staki",
    role: "Motion dizajn mentor",
    bio: "Pet godina u struci i preko 100 mentorisanih polaznika. Sarađivao je sa preko 100 softverskih kompanija i web agencija, među njima i Flow Ninja.",
  },
  {
    slug: "teodora",
    name: "Teodora",
    role: "Mentorka u zajednici",
    bio: "Radi sa polaznicima na izradi sajtova, sadržaju i prodaji naučenog — deo tima na nedeljnim sastancima zajednice.",
    featured: true,
  },
];

/** Mentori koji stoje u sekciji „Ko te vodi". */
export const featuredMentors = mentors.filter((mentor) => mentor.featured);

export function getMentor(slug: string): Mentor | undefined {
  return mentors.find((mentor) => mentor.slug === slug);
}
