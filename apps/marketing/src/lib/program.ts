/**
 * Put kroz edukaciju „Postani AI web dizajner" — četiri meseca, četiri teme.
 *
 * Od 23.09.2026. ovo je JEDINA edukacija Nauči Dizajna. Snimljeni kursevi,
 * mentorstvo 1-1 i cenovnik sa tri modela više ne postoje; ako neko traži da
 * ih vrati, prvo proveri sa firmom — nisu sklonjeni greškom.
 *
 * Prvi mesec i dalje cilja prvi plaćeni sajt. Zato „30 dana" ostaje u herou,
 * ali kao ishod prvog meseca, ne kao trajanje programa.
 */

export interface ProgramMonth {
  /** „Mesec 1" — stoji kao oznaka iznad naslova. */
  label: string;
  title: string;
  /** Rečenica koja odgovara na „šta ću umeti na kraju ovog meseca". */
  outcome: string;
  body: string;
  /** Tri do pet konkretnih stavki. */
  items: string[];
}

export const programMonths: ProgramMonth[] = [
  {
    label: "Mesec 1",
    title: "Pravljenje sajtova i dolazak do klijenata",
    outcome: "Na kraju prvog meseca imaš gotov sajt i poslate ponude pravim firmama.",
    body: "Prvo se nauči da se sajt napravi uz AI, bez kodiranja. Odmah zatim ide onaj deo koji ljudi obično preskoče — kome se javljaš, šta tačno pišeš i koliko naplaćuješ.",
    items: [
      "Ceo sajt uz AI, od prazne strane do objave",
      "Biblioteka promptova koji skraćuju rad",
      "Gde se nalaze firme kojima sajt stvarno treba",
      "Poruke za obraćanje koje dobijaju odgovor",
      "Kalkulator: koliko da naplatiš projekat",
    ],
  },
  {
    label: "Mesec 2",
    title: "SEO — da sajt bude pronađen",
    outcome:
      "Na kraju drugog meseca umeš da klijentov sajt postaviš tako da ga ljudi nalaze na pretrazi.",
    body: "Sajt koji niko ne nađe ne donosi posao ni klijentu ni tebi. SEO je i najlakši razlog da ti klijent plati drugi projekat, a ne samo prvi.",
    items: [
      "Kako pretraživači čitaju sajt",
      "Ključne reči i struktura stranica",
      "Tehnički SEO: brzina, naslovi, oznake",
      "Lokalni SEO za firme iz regiona",
      "Merenje i izveštaj koji šalješ klijentu",
    ],
  },
  {
    label: "Mesec 3",
    title: "AI automatizacije",
    outcome: "Na kraju trećeg meseca umeš da klijentu prodaš i ono što radi posle isporuke sajta.",
    body: "Ovde se posao širi izvan izrade sajta: automatizacije koje klijentu štede sate rada, a tebi otvaraju uslugu koja se naplaćuje mesečno, a ne jednom.",
    items: [
      "Šta se u maloj firmi isplati automatizovati",
      "Alati i njihovo povezivanje, bez koda",
      "Automatizacije oko sajta: upiti, ponude, podsetnici",
      "Kako se takva usluga predstavlja i naplaćuje",
    ],
  },
  {
    label: "Mesec 4",
    title: "Napredni web dizajn",
    outcome:
      "Na kraju četvrtog meseca tvoji sajtovi izgledaju kao rad nekoga ko ovo radi godinama.",
    body: "Poslednji mesec je razlika između sajta koji je „uredu“ i sajta zbog kog te preporučuju. Tu se podiže i cena koju možeš da tražiš.",
    items: [
      "Kompozicija, tipografija i ritam stranice",
      "Animacije i detalji koji se primete",
      "Dizajn sistem: da svaki sledeći sajt ide brže",
      "Priprema portfolija i izbor projekata",
    ],
  },
];
