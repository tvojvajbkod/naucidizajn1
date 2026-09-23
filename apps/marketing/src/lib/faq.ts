/**
 * FAQ — odgovara na stvarne zamerke potencijalnih polaznika, ne na pitanja
 * koja nama odgovaraju. Ovaj niz hrani i accordion i FAQ JSON-LD schema
 * (najjači AEO signal — AI asistenti rado citiraju FAQ schema).
 *
 * Od 23.09.2026. postoji samo jedna edukacija — „Postani AI web dizajner",
 * mesečno članstvo, put od četiri meseca. Pitanja o snimljenim kursevima,
 * paketima, ratama i mentorstvu 1-1 obrisana su namerno, jer te ponude više
 * nema. Ne vraćaj ih bez provere sa firmom.
 *
 * [POTVRDI] označava tvrdnje koje firma mora da proveri pre objave.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

/** Pitanja o edukaciji — stoje na početnoj i na /ai-web-dizajner. */
export const membershipFaq: FaqItem[] = [
  {
    question: "Šta tačno dobijam za 99 dolara mesečno?",
    answer:
      "Pristup celoj edukaciji „Postani AI web dizajner“: sistem za izradu sajtova pomoću AI-a, biblioteku promptova, materijal o tome gde se nalaze klijenti i kako im se piše, kalkulator cene projekta, SEO i AI automatizacije, napredni web dizajn, grupni sastanak svake nedelje i pomoć mentora. Plaćaš mesec po mesec — nema ugovora na godinu dana.",
  },
  {
    question: "Mogu li da otkažem kad hoću?",
    answer:
      "Da. Članstvo otkazuješ sam, iz svog naloga, u svakom trenutku — bez poziva, mejla i objašnjenja. Ostaje aktivno do kraja meseca koji si platio i posle toga se više ništa ne naplaćuje. [POTVRDI: šta se dešava sa pristupom materijalima posle otkazivanja]",
  },
  {
    question: "Koliko traje program?",
    answer:
      "Postavljen je kao put od četiri meseca: prvi mesec izrada sajtova i dolazak do klijenata, drugi SEO, treći AI automatizacije, četvrti napredni web dizajn. To je raspored, ne rok — ideš svojim tempom, a članstvo plaćaš mesec po mesec dok ti treba.",
  },
  {
    question: "Treba li mi predznanje? Moram li da znam da kodiram?",
    answer:
      "Ne i ne. Program je pravljen za ljude koji kreću iz nule. Ceo sajt se pravi bez pisanja koda — zato AI i jeste u centru priče. Ako već znaš dizajn, brže ćeš doći do prvog klijenta, ali to nije uslov za upis.",
  },
  {
    question: "Koliko vremena dnevno moram da izdvojim?",
    answer:
      "Računaj na dva do tri sata dnevno ako hoćeš da ispratiš ritam. Težište je na radu, ne na gledanju snimaka — svaki mesec se završava nečim što si napravio. Sastanci se snimaju, tako da propušten termin ne znači propušteno gradivo.",
  },
  {
    question: "Je li realno da nađem klijenta za 30 dana?",
    answer:
      "Prvi mesec je baš tako i postavljen: sajt i poslate ponude pravim firmama. Kod nekih se desi brže, kod nekih traje duže — zavisi od toga koliko ljudi kontaktiraš i koliko brzo objaviš prve radove. Program garantuje sistem: šta da radiš svakog dana, kome da se javiš, šta da napišeš i koliko da naplatiš. Rezultat nije zagarantovan i niko ko ti to obeća ne govori istinu.",
  },
  {
    question: "Zašto da plaćam kad AI alati i tutorijali na internetu postoje besplatno?",
    answer:
      "Zato što ti ne fali informacija, nego redosled. Besplatan materijal ti pokaže šta alat ume, ali ne kaže ti koji klijent plaća, koliko da tražiš, šta da odgovoriš kad neko traži popust i kako da isporučiš posao. To je razlika između znanja i zarade. Ako ti treba samo alat, ne treba ti članstvo.",
  },
  {
    question: "Prihvataju li klijenti sajt napravljen uz pomoć AI-a?",
    answer:
      "Klijent kupuje rezultat — sajt koji radi, izgleda dobro i donosi mu upite. Ne pita kojim alatom je napravljen, isto kao što ne pita u kom programu je crtan logo. AI ti skraćuje izradu; procena šta je dobro, razgovor sa klijentom i ispravke i dalje su na tebi, i baš to se uči.",
  },
  {
    question: "Hoće li AI ukinuti posao web dizajnera?",
    answer:
      "Menja ga, i to brzo. Izrada sajta više nije usko grlo — jeste procena, struktura i odnos sa klijentom. Zato je program i postavljen tako da polovinu vremena troši na nalaženje klijenata i prodaju, a ne samo na alat. Ko ostane samo na izradi, njega AI stvarno pritiska.",
  },
  {
    question: "Da li mi je potreban jak računar?",
    answer:
      "Ne. Radi se u alatima koji žive u pregledaču, pa je dovoljan prosečan laptop sa stabilnim internetom.",
  },
  {
    question: "Na kom jeziku je edukacija i kako se plaća iz regiona?",
    answer:
      "Sve je na srpskom — materijal, sastanci i komunikacija u zajednici. Naplata ide preko Skool platforme, karticom, u dolarima. [POTVRDI: da li postoji mogućnost plaćanja u dinarima ili uplatnicom]",
  },
  {
    question: "Ja sam programer. Ima li ovo smisla za mene?",
    answer:
      "Ima, jer prestaješ da zavisiš od dizajnera. Kad umeš i da osmisliš i da napraviš sajt, isporučuješ ceo posao i naplaćuješ ga kao ceo posao. SEO i automatizacije su ti uz to usluga koja se naplaćuje mesečno.",
  },
];
