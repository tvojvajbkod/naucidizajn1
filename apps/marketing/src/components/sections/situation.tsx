/**
 * „Gde si sada?" — pre nego što objasnimo šta nudimo, posetilac prepoznaje
 * sebe. Tri situacije, svaka sa istom putanjom: citat (unutrašnji glas) →
 * konkretni simptomi → strelica ka rešenju.
 *
 * Kartice se na hover diskretno podignu (`-translate-y-1`) — poziv da se
 * klikne/čita dalje, ne dekoracija.
 *
 * Podloga je `bg-panel` da razdvoji sekciju od heroja (sopstveni preliv) i od
 * `TurningPointSection` ispod (providna, `bg-page`) — pravilo ritma podloga.
 */
const situations = [
  {
    number: "01",
    quote: "„Znam da bih mogao/la… ali ne znam odakle da krenem.“",
    symptoms: ["Nemaš portfolio.", "Nemaš klijente.", "Ne znaš šta da ponudiš."],
    resolution: "AI Web Dizajner te vodi od nule.",
  },
  {
    number: "02",
    quote: "„Znam da napravim sajt, ali mi treba previše vremena.“",
    symptoms: ["Dizajniraš, pišeš tekst, tražiš slike, praviš strukturu…"],
    resolution: "AI ti skraćuje proces sa dana na sate.",
  },
  {
    number: "03",
    quote: "„Imam znanje, ali nemam stabilan priliv klijenata.“",
    symptoms: ["Znaš da radiš.", "Problem je prodaja."],
    resolution: "Učiš kako da pronađeš, kontaktiraš i pretvoriš potencijalnog klijenta u kupca.",
  },
];

export function SituationSection() {
  return (
    <section className="bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-medium text-3xl text-foreground tracking-[-0.02em] md:text-4xl">
            Gde si sada?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Verovatno se nalaziš u jednoj od ove 3 situacije:
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {situations.map((situation) => (
            <div
              key={situation.number}
              className="rounded-xl border bg-card p-7 transition-transform duration-200 hover:-translate-y-1 hover:border-primary/30"
            >
              <span className="font-display text-primary/50 text-3xl tracking-tight">
                {situation.number}
              </span>
              <p className="mt-4 font-medium text-foreground leading-snug">{situation.quote}</p>
              <div className="mt-4 space-y-1 text-muted-foreground">
                {situation.symptoms.map((symptom) => (
                  <p key={symptom}>{symptom}</p>
                ))}
              </div>
              <p className="mt-5 font-medium text-primary leading-relaxed">
                → {situation.resolution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
