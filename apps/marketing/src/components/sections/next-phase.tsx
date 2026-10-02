import { Check } from "lucide-react";

/**
 * „A šta posle 30 dana?" — odgovara na nemo pitanje odmah posle
 * `ThirtyDaysSection`: zar se tu staje? Ne, prvi klijent je početak, ne cilj.
 *
 * Nabrajanje sa štiklicom, ne kartice (odluka — prethodna verzija je imala 4
 * kartice u mreži, zamenjeno na izričit zahtev). Štiklica u krugu je isti
 * vizuelni motiv kao brojevi u `SituationSection`/`ThirtyDaysSection` (krug sa
 * `border-primary/45`), samo bez ispune — limeta je ovde samo na ikonici i
 * ivici, nikad kao puna površina iza teksta.
 *
 * Podloga je `bg-card` (#18181C) — različita i od `ThirtyDaysSection` iznad
 * (providna, `bg-page`) i od `ChatDemoSection` ispod (takođe providna), pa
 * sekcija stane između njih bez diranja ijedne druge sekcije na stranici
 * (pravilo: dve susedne sekcije ne smeju da imaju istu podlogu).
 */
const phases = [
  {
    title: "VIŠE KLIJENATA",
    body: "Novi outreach sistemi, leadovi, ponude i prodaja.",
  },
  {
    title: "BOLJI PROJEKTI",
    body: "Feedback mentora na realne projekte.",
  },
  {
    title: "BRŽI WORKFLOW",
    body: "Novi AI alati, promptovi i automatizacije.",
  },
  {
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

        <ul className="mt-12 max-w-2xl space-y-7">
          {phases.map((phase) => (
            <li key={phase.title} className="flex gap-4">
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/45 bg-panel">
                <Check className="size-4 text-primary" />
              </span>
              <div>
                <h3 className="font-semibold text-foreground tracking-wide">{phase.title}</h3>
                <p className="mt-1.5 text-muted-foreground leading-relaxed">{phase.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
