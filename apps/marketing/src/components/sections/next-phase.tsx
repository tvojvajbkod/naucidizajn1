/**
 * „A šta posle 30 dana?" — odgovara na nemo pitanje odmah posle
 * `ThirtyDaysSection`: zar se tu staje? Ne, prvi klijent je početak, ne cilj.
 *
 * Podloga je `bg-card` (#18181C), NE `bg-panel` — namerno, da izbegne kaskadu
 * izmena niz ostatak stranice. `ThirtyDaysSection` iznad je providna (`bg-page`)
 * a `StatBandSection` ispod je `bg-panel`; obe su već različite od `bg-card`,
 * pa sekcija stane između njih bez diranja ijedne druge sekcije na stranici
 * (pravilo: dve susedne sekcije ne smeju da imaju istu podlogu). Kartice unutra
 * su `bg-panel` da se odvoje od podloge sekcije.
 */
const phases = [
  {
    number: "01",
    title: "VIŠE KLIJENATA",
    body: "Novi outreach sistemi, leadovi, ponude i prodaja.",
  },
  {
    number: "02",
    title: "BOLJI PROJEKTI",
    body: "Feedback mentora na realne projekte.",
  },
  {
    number: "03",
    title: "BRŽI WORKFLOW",
    body: "Novi AI alati, promptovi i automatizacije.",
  },
  {
    number: "04",
    title: "ZAJEDNICA",
    body: "Ljudi koji rade isto što i ti + networking + partnerstva.",
  },
];

export function NextPhaseSection() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-medium text-3xl text-foreground tracking-[-0.02em] md:text-4xl">
            A šta posle 30 dana?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Ne završavaš program kada dobiješ prvog klijenta.
            <br />
            Tada tek počinje sledeća faza.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase) => (
            <div key={phase.number} className="rounded-xl border bg-panel p-7">
              <span className="font-display text-primary/50 text-3xl tracking-tight">
                {phase.number}
              </span>
              <h3 className="mt-4 font-semibold text-foreground tracking-wide">{phase.title}</h3>
              <p className="mt-2.5 text-muted-foreground leading-relaxed">{phase.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
