"use client";

import { Accent } from "@/components/accent";
import { type ProgramMonth, programMonths } from "@/lib/program";

/**
 * Put kroz program — četiri meseca, jedan ispod drugog.
 *
 * Boje (odluka 25.09.): sekcija je KREM, a meseci stoje u tamnom panelu
 * sa prelivom. Ranije je cela sekcija bila maslinasta i stapala se sa tamnom
 * sekcijom iznad („Šta dobijaš"). Krem okvir razdvaja ta dva bloka, a tamni
 * panel drži program kao jednu celinu.
 *
 * Svaki mesec prikazuje samo oznaku, naslov i ishod — bez liste stavki.
 */

function MonthRow({ month }: { month: ProgramMonth }) {
  return (
    <li className="p-6 md:p-9">
      <div className="grid gap-4 md:grid-cols-[7rem_1fr] md:gap-10">
        <span className="font-semibold text-primary text-sm md:pt-1">{month.label}</span>
        <div>
          <h3 className="font-semibold text-foreground text-xl md:text-2xl">{month.title}</h3>
          <p className="mt-2 font-medium text-foreground/85 leading-relaxed">{month.outcome}</p>
        </div>
      </div>
    </li>
  );
}

export function TimelineSection() {
  return (
    <section id="program" className="scroll-mt-20 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-medium text-3xl text-foreground tracking-[-0.02em] md:text-4xl">
            <Accent>Tvoj put</Accent> za naredna 4 meseca
          </h2>
          <p className="mt-4 text-foreground/70 text-lg">
            Svaki mesec ima svoju temu i svoj ishod. Ne biraš sam šta ćeš učiti i ne vrtiš se u krug
            — znaš gde si i šta sledi.
          </p>
        </div>

        {/* Tamnozeleni panel sa prelivom — program kao jedna celina na krem podlozi. */}
        <ol className="mt-12 divide-y divide-border overflow-hidden rounded-3xl bg-[linear-gradient(180deg,#18181c_0%,#101014_100%)]">
          {programMonths.map((month) => (
            <MonthRow key={month.label} month={month} />
          ))}
        </ol>

        <p className="mt-6 text-foreground/60 text-sm">
          Raspored je okvir, ne rok. Članstvo je mesečno i otkazuješ ga sam, u svakom trenutku — ako
          ti treba više vremena za neki mesec, niko te ne gura dalje.
        </p>
      </div>
    </section>
  );
}
