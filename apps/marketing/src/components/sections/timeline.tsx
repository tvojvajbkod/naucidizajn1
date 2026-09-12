/**
 * Kako izgleda 30 dana. Zatečena ponuda kaže „1 dan teorije – 29 dana prakse",
 * ali nigde ne pokazuje šta to znači po danima — a baš to je ono što posetilac
 * pokušava da zamisli pre nego što plati.
 */
const weeks = [
  {
    label: "Dan 1",
    title: "Teorija, i to je to",
    body: "Ceo sistem odjednom: kako se sajt sklapa uz AI, koji alati, kojim redom. Posle ovoga se ne vraćaš na predavanja.",
  },
  {
    label: "Dani 2–7",
    title: "Prvi sajt",
    body: "Praviš kompletan sajt za izmišljenog klijenta. To je istovremeno i vežba i prvi rad u portfoliju.",
  },
  {
    label: "Dani 8–16",
    title: "Javljaš se klijentima",
    body: "Sastavljaš listu firmi, šalješ poruke po šablonu, vodiš evidenciju odgovora. Ispravke dobijaš na nedeljnom sastanku.",
  },
  {
    label: "Dani 17–24",
    title: "Razgovor i ponuda",
    body: "Prvi pozivi. Kako se vodi razgovor, kako se postavlja cena i šta se šalje kao ponuda.",
  },
  {
    label: "Dani 25–30",
    title: "Isporuka i naplata",
    body: "Izrada za pravog klijenta, predaja sajta i naplata. Odatle se ciklus ponavlja, samo brže.",
  },
];

export function TimelineSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="max-w-2xl">
        <h2 className="font-bold text-3xl text-ink tracking-tight md:text-4xl">
          Kako izgleda tvojih 30 dana
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Jedan dan teorije, dvadeset devet dana rada. Svakog dana znaš šta ti je zadatak — ne biraš
          sam šta ćeš učiti.
        </p>
      </div>

      <ol className="mt-12 space-y-px overflow-hidden rounded-2xl border">
        {weeks.map((week) => (
          <li
            key={week.label}
            className="grid gap-2 bg-card p-6 md:grid-cols-[9rem_1fr] md:gap-8 md:p-7"
          >
            <span className="font-semibold text-muted-foreground text-sm md:pt-0.5">
              {week.label}
            </span>
            <div>
              <h3 className="font-semibold text-ink text-lg">{week.title}</h3>
              <p className="mt-1.5 text-muted-foreground leading-relaxed">{week.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-6 text-muted-foreground text-sm">
        Ritam je okvir, ne rok. Ako ti treba više vremena, članstvo traje dok god ti treba — i
        prestaje onog trenutka kad ga otkažeš.
      </p>
    </section>
  );
}
