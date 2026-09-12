/**
 * FAQ — odgovara na stvarne zamerke potencijalnih polaznika, ne na pitanja
 * koja nama odgovaraju. Ovaj niz hrani i accordion i FAQ JSON-LD schema
 * (najjači AEO signal — AI asistenti rado citiraju FAQ schema).
 *
 * [POTVRDI] označava tvrdnje koje firma mora da proveri pre objave.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

/** Pitanja o AI članstvu — stoje na početnoj i na /ai-web-dizajner. */
export const membershipFaq: FaqItem[] = [
  {
    question: "Šta tačno dobijam za 99 dolara mesečno?",
    answer:
      "Pristup privatnoj zajednici sa kompletnim sistemom za izradu sajtova pomoću AI-a, bibliotekom promptova, materijalom o tome gde se nalaze klijenti i kako im se piše, kalkulatorom cene projekta, grupnim sastankom svake nedelje i pomoći mentora. Plaćaš mesec po mesec — nema ugovora na godinu dana.",
  },
  {
    question: "Mogu li da otkažem kad hoću?",
    answer:
      "Da. Članstvo se otkazuje iz tvog naloga, bez poziva i objašnjenja, i ostaje aktivno do kraja plaćenog meseca. [POTVRDI: šta se dešava sa pristupom materijalima posle otkazivanja]",
  },
  {
    question: "Treba li mi predznanje? Moram li da znam da kodiram?",
    answer:
      "Ne i ne. Program je pravljen za ljude koji kreću iz nule. Ceo sajt se pravi bez pisanja koda — zato AI i jeste u centru priče. Ako već znaš dizajn, brže ćeš doći do prvog klijenta, ali to nije uslov za upis.",
  },
  {
    question: "Koliko vremena dnevno moram da izdvojim?",
    answer:
      "Računaj na dva do tri sata dnevno da bi ispratio ritam od 30 dana. Gradivo je postavljeno kao jedan dan teorije i dvadeset devet dana prakse, pa vreme uglavnom ide na rad, ne na gledanje snimaka. Sastanci se snimaju, tako da propušten termin ne znači propušteno gradivo.",
  },
  {
    question: "Je li realno da nađem klijenta za 30 dana?",
    answer:
      "Kod nekih se desi brže, kod nekih traje duže — to zavisi od toga koliko ljudi kontaktiraš i koliko brzo objaviš prve radove. Ono što program garantuje jeste sistem: šta da radiš svakog dana, kome da se javiš, šta da napišeš i koliko da naplatiš. Rezultat nije zagarantovan i niko ko ti to obeća ne govori istinu.",
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
      "Menja ga, i to brzo. Izrada sajta više nije uska grlo — jeste procena, struktura i odnos sa klijentom. Zato je program i postavljen tako da polovinu vremena troši na nalaženje klijenata i prodaju, a ne samo na alat. Ko ostane samo na izradi, njega AI stvarno pritiska.",
  },
  {
    question: "Na kom jeziku je edukacija i kako se plaća iz regiona?",
    answer:
      "Sve je na srpskom — materijal, sastanci i komunikacija u zajednici. Naplata ide preko Skool platforme, karticom, u dolarima. [POTVRDI: da li postoji mogućnost plaćanja u dinarima ili uplatnicom]",
  },
  {
    question: "Koja je razlika između članstva, kursa i mentorstva?",
    answer:
      "Članstvo je najbrži put do prve zarade i plaća se mesečno. Kurs je snimljeno gradivo koje savladavaš svojim tempom i plaća se jednom. Mentorstvo je šestomesečni program sa ličnim mentorom i najveća je investicija. Tabelu sa poređenjem imaš na stranici Cene.",
  },
];

/** Opšta pitanja o školi — stoje na /cene i /kursevi. */
export const generalFaq: FaqItem[] = [
  {
    question: "Da li mi je potreban jak računar?",
    answer:
      "Ne. Za dizajn se radi u Figmi koja je alat u pregledaču, pa je dovoljan prosečan laptop sa stabilnim internetom. Izuzetak je Motion dizajn — After Effects traži nešto jaču mašinu.",
  },
  {
    question: "Mogu li kurs da platim na rate?",
    answer:
      "Da. Na svakom paketu, odmah ispod dugmeta za upis, stoji opcija plaćanja na rate. Plaćanje ide karticom preko Stripe-a ili uplatnicom.",
  },
  {
    question: "Koliko dugo mogu da gledam kurs?",
    answer:
      "Uz Starter paket pristup traje tri meseca. Paketi sa mentorstvom nose doživotan pristup kursu, uključujući i kasnije dopune gradiva.",
  },
  {
    question: "Šta ako mi se ne svidi?",
    answer:
      "Na kursevima važi garancija povraćaja novca u roku od 14 dana od kupovine. [POTVRDI: da li ista garancija važi i za mesečno članstvo]",
  },
  {
    question: "Dobijam li sertifikat?",
    answer:
      "Da, digitalni sertifikat dobijaš po završetku kompletne edukacije. Vredi koliko i radovi koje uz njega pokažeš — zato je težište programa na projektima za portfolio.",
  },
  {
    question: "Ja sam programer. Ima li ovo smisla za mene?",
    answer:
      "Ima, jer prestaješ da zavisiš od dizajnera. Kad umeš i da osmisliš i da napraviš sajt, isporučuješ ceo posao i naplaćuješ ga kao ceo posao.",
  },
];
