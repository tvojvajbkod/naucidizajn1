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
  /**
   * Plaćanje na rate — doslovno kako stoji na naucidizajn.com (22.09.2026.).
   * Stoji ispod dugmeta, kao i tamo: ko ne može odjednom, mora to da vidi pre
   * nego što odustane, a ne tek na naplati.
   */
  installments?: string;
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
        description: "Snimljen kurs, bez mentorstva. Učiš sam, svojim tempom.",
        price: "99 €",
        priceNote: "Jednokratno · pristup kursu 3 meseca",
        installments: "Ili 2 rate po 60 € mesečno (ukupno 120 €)",
        cta: "Pogledaj kurseve",
        href: "/kursevi",
        features: [
          "Kurs iz izabrane oblasti",
          "LinkedIn kurs",
          "Pristup kursu na 3 meseca",
          "Projekti za vežbanje",
          "100% garancija zadovoljstva",
        ],
      },
      {
        name: "Pro",
        description: "Kurs plus šest meseci grupnog mentorstva.",
        price: "399 €",
        priceNote: "Jednokratno · doživotan pristup kursu",
        installments: "Ili prva rata 200 € + 2 rate po 130 € mesečno (ukupno 460 €)",
        cta: "Pogledaj kurseve",
        href: "/kursevi",
        inherits: "Sve iz Starter paketa, plus:",
        features: [
          "Doživotan pristup kursu",
          "6 meseci grupnog mentorstva",
          "Grupni video poziv svake nedelje",
          "„Napreduj kao freelancer“ sastanci",
          "50+ snimaka svih prethodnih sastanaka",
          "Polaganje za sertifikat",
        ],
      },
      {
        name: "Ultra",
        description: "Kurs plus dvanaest meseci grupnog mentorstva.",
        price: "699 €",
        priceNote: "Jednokratno · doživotan pristup kursu",
        installments: "Ili prva rata 200 € + 4 rate po 150 € mesečno (ukupno 800 €)",
        cta: "Pogledaj kurseve",
        href: "/kursevi",
        inherits: "Sve iz Pro paketa, plus:",
        features: [
          "Još 6 meseci grupnog mentorstva (ukupno 12)",
          "Poziv 1 na 1 sa Nikolom, jedanput",
          "Uživo druženje sa mentorima i polaznicima",
          "Ekskluzivna okupljanja uživo",
          "Nauči Dizajn majica",
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
        installments: "Plaćaš mesec za mesec, bez obaveze",
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
        installments: "Plaćaš mesečno, uz obavezu na 6 meseci",
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
        priceNote: "Raspon 200–450 € po mesecu",
        installments: "Plaćeno odjednom unapred za svih 6 meseci",
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
    course: "99–699 € jednokratno ili na rate",
    mentorship: "200–550 € mesečno",
  },
  {
    label: "Podrška",
    membership: "Zajednica i nedeljni grupni sastanak",
    course: "Bonus 1 mesec grupnog; Pro i Ultra 6–12 meseci",
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
