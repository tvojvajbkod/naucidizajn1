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
  name: string;
  role: string;
  bio: string;
}

export const mentors: Mentor[] = [
  {
    name: "Nikola Tripković",
    role: "Osnivač Nauči Dizajn",
    bio: "Vodi zajednicu AI Web Dizajner i drži nedeljne sastanke. Preko 2.000 mentorisanih polaznika od 2020.",
  },
  {
    name: "Voja",
    role: "Senior Web Designer, Rippling (San Francisco)",
    bio: "Preko deset godina u struci i 500+ mentorisanih polaznika. Radi za firmu iz San Franciska, predaje na srpskom.",
  },
  {
    name: "Teodora",
    role: "Mentorka",
    bio: "Radi sa polaznicima na izradi sajtova, sadržaju i prodaji naučenog — deo tima na nedeljnim sastancima zajednice.",
  },
];
