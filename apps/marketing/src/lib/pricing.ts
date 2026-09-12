/**
 * Cenovnik na jednom mestu — koriste ga sekcija na početnoj i /cene.
 *
 * Nauči Dizajn ima TRI načina učenja sa različitim modelima naplate. Zatečeni
 * sajt ih nigde nije poredio, pa je posetilac morao sam da spaja informacije sa
 * tri različite stranice. Ovde su jedno pored drugog.
 */

import { links, membership } from "@/lib/brand";

export interface PricingPlan {
  name: string;
  description: string;
  /** Prikazna cena, npr. "$99" ili "Po dogovoru". */
  price: string;
  /** Sufiks uz cenu, npr. "/ mesečno". Izostavi za "Po dogovoru". */
  period?: string;
  /** Sitna napomena ispod cene. */
  priceNote?: string;
  cta: string;
  /** Interna ruta ili apsolutni URL. */
  href: string;
  highlighted?: boolean;
  /** Naslov liste, npr. "Sve iz Startera i:". Izostavi za prvi paket. */
  inherits?: string;
  features: string[];
}

export interface PricingGroup {
  id: string;
  label: string;
  /** Mali bedž uz labelu toggle-a. */
  badge?: string;
  plans: PricingPlan[];
}

export const pricingGroups: PricingGroup[] = [
  {
    id: "clanstvo",
    label: "AI članstvo",
    badge: "Najnovije",
    plans: [
      {
        name: "AI Web Dizajner",
        description: "Mesečno članstvo u zajednici. Cilj: prvi plaćeni projekat za 30 dana.",
        price: membership.price,
        period: membership.period,
        priceNote: membership.priceNote,
        cta: "Pridruži se zajednici",
        href: links.skool,
        highlighted: true,
        features: [
          "Kompletan sistem: sajt sa AI-em, bez pisanja koda",
          "Biblioteka promptova koji skraćuju rad",
          "Gde i kako naći prve klijente",
          "Poruke za obraćanje klijentima koje daju odgovore",
          "Kalkulator: koliko da naplatiš projekat",
          "Grupni sastanak svake nedelje",
          "Podrška zajednice i pomoć mentora",
        ],
      },
    ],
  },
  {
    id: "kursevi",
    label: "Kursevi",
    plans: [
      {
        name: "Starter",
        description: "Snimljen kurs, učiš sam, svojim tempom.",
        price: "99 €",
        priceNote: "Jednokratno · pristup 3 meseca · moguće na rate",
        cta: "Pogledaj kurseve",
        href: "/kursevi",
        features: [
          "Kompletan video kurs iz izabrane oblasti",
          "Projekti za vežbanje i portfolio",
          "LinkedIn kurs kao bonus",
          "30 dana grupnog mentorstva",
          "Garancija povraćaja novca 14 dana",
        ],
      },
      {
        name: "Pro",
        description: "Kurs plus šest meseci mentorstva.",
        price: "399 €",
        priceNote: "Jednokratno ili na rate · doživotan pristup kursu",
        cta: "Pogledaj kurseve",
        href: "/kursevi",
        inherits: "Sve iz Startera i:",
        features: [
          "6 meseci mentorstva",
          "Doživotan pristup kursu i dopunama",
          "Provera zadataka od strane mentora",
          "Sertifikat po završetku",
        ],
      },
      {
        name: "Ultra",
        description: "Kurs plus dvanaest meseci mentorstva.",
        price: "699 €",
        priceNote: "Jednokratno ili na rate · doživotan pristup kursu",
        cta: "Pogledaj kurseve",
        href: "/kursevi",
        inherits: "Sve iz Pro paketa i:",
        features: [
          "12 meseci mentorstva",
          "Prioritet u zakazivanju sastanaka",
          "Priprema portfolija za konkurisanje",
        ],
      },
    ],
  },
  {
    id: "mentorstvo",
    label: "Mentorstvo 1-1",
    plans: [
      {
        name: "Mesečno",
        description: "Bez obaveze, plaćaš mesec po mesec.",
        price: "od 300 €",
        period: "/ mesečno",
        priceNote: "Raspon 300–550 € zavisi od smera",
        cta: "Zakaži besplatan poziv",
        href: "/mentorstvo",
        features: [
          "Individualni sastanak sa mentorom svake nedelje",
          "Kompletan kurs iz izabrane oblasti",
          "Discord grupa i grupni sastanci",
          "Freelance sastanci na dve nedelje",
        ],
      },
      {
        name: "6 meseci, mesečno",
        description: "Pun program, plaćanje u ratama.",
        price: "od 250 €",
        period: "/ mesečno",
        priceNote: "Raspon 250–500 € zavisi od smera",
        cta: "Zakaži besplatan poziv",
        href: "/mentorstvo",
        highlighted: true,
        inherits: "Sve iz mesečnog i:",
        features: [
          "Ceo P.U.T. program: Pravila, Uvežbavanje, Tržište",
          "Doživotan pristup kursu",
          "Pristup uživo događajima",
        ],
      },
      {
        name: "6 meseci, unapred",
        description: "Isti program, najniža cena po mesecu.",
        price: "od 200 €",
        period: "/ mesečno",
        priceNote: "Raspon 200–450 € · plaćeno jednom, unapred",
        cta: "Zakaži besplatan poziv",
        href: "/mentorstvo",
        inherits: "Sve iz programa od 6 meseci i:",
        features: ["Najniža cena po mesecu", "Mesto u grupi rezervisano odmah"],
      },
    ],
  },
];

/** Poređenje tri modela — pomaže odluku „šta da biram". */
export interface ComparisonRow {
  label: string;
  membership: string;
  course: string;
  mentorship: string;
}

export const comparison: ComparisonRow[] = [
  {
    label: "Cilj",
    membership: "Prvi plaćeni projekat",
    course: "Savladati veštinu",
    mentorship: "Promena karijere",
  },
  {
    label: "Trajanje",
    membership: "30 dana po ciklusu",
    course: "Svojim tempom",
    mentorship: "6 meseci",
  },
  {
    label: "Plaćanje",
    membership: `${membership.price} mesečno`,
    course: "99–699 € jednokratno",
    mentorship: "200–550 € mesečno",
  },
  {
    label: "Podrška",
    membership: "Zajednica i nedeljni grupni sastanak",
    course: "30 dana grupnog mentorstva",
    mentorship: "1-1 sastanak svake nedelje",
  },
  {
    label: "Fokus",
    membership: "AI alati i nalaženje klijenata",
    course: "Zanat i portfolio",
    mentorship: "Zanat, portfolio i tržište",
  },
  {
    label: "Predznanje",
    membership: "Nije potrebno",
    course: "Nije potrebno",
    mentorship: "Nije potrebno",
  },
];
