import { programMonths } from "@/lib/program";

/**
 * Put kroz program — četiri meseca, jedan ispod drugog.
 *
 * Ranije je ovde stajalo „tvojih 30 dana" po danima. Program je sada četiri
 * meseca sa jasno odvojenim temama, pa se i sekcija menja. Prvi mesec i dalje
 * nosi prvi plaćeni sajt — to nije izgubljeno, samo više nije ceo program.
 */
export function TimelineSection() {
  return (
    <section id="program" className="scroll-mt-20 bg-olive py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-medium text-3xl text-background tracking-[-0.02em] md:text-4xl">
            Četiri meseca, četiri stvari koje se naplaćuju
          </h2>
          <p className="mt-4 text-background/75 text-lg">
            Svaki mesec ima svoju temu i svoj ishod. Ne biraš sam šta ćeš učiti i ne vrtiš se u krug
            — znaš gde si i šta sledi.
          </p>
        </div>

        <ol className="mt-12 space-y-px overflow-hidden rounded-2xl border border-background/15">
          {programMonths.map((month) => (
            <li key={month.label} className="bg-background/[0.06] p-6 md:p-9">
              <div className="grid gap-4 md:grid-cols-[7rem_1fr] md:gap-10">
                <span className="font-semibold text-primary text-sm md:pt-1">{month.label}</span>
                <div>
                  <h3 className="font-semibold text-background text-xl md:text-2xl">
                    {month.title}
                  </h3>
                  <p className="mt-2 font-medium text-background/85 leading-relaxed">
                    {month.outcome}
                  </p>
                  <p className="mt-3 text-background/65 leading-relaxed">{month.body}</p>

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {month.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-background/70 text-sm leading-relaxed"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-background/60 text-sm">
          Raspored je okvir, ne rok. Članstvo je mesečno i otkazuješ ga sam, u svakom trenutku — ako
          ti treba više vremena za neki mesec, niko te ne gura dalje.
        </p>
      </div>
    </section>
  );
}
