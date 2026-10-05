import { Accent } from "@/components/accent";

/**
 * Članarina u odnosu na cenu jednog projekta — matematika, ne tvrdnja.
 *
 * Brojevi su dati tačno onako kako ih je klijent poslao (99 €, 500 €, 1.000 €)
 * i namerno nisu povezani sa `membership.price` iz brand.ts — taj je u
 * dolarima (Skool naplaćuje u $), a ovde se računa procenat unutar iste
 * valute (€). Mešanje $ i € u istom računu bi obesmislilo procente.
 */
export function MembershipValueSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-medium text-3xl text-foreground tracking-[-0.02em] md:text-4xl">
          Koliko vredi jedna mesečna <Accent>članarina</Accent>?
        </h2>

        <div className="mt-10 rounded-3xl border bg-card p-8 md:p-10">
          <p className="font-medium text-foreground/70 text-sm">Članarina</p>
          <p className="mt-2 flex items-baseline gap-2">
            <span className="font-medium text-5xl text-primary tracking-[-0.02em]">99 €</span>
            <span className="text-foreground/75 text-lg">/ mesečno</span>
          </p>

          <p className="mt-8 text-foreground/80 text-base leading-relaxed">
            Ako kroz znanje iz zajednice dobiješ samo jedan projekat od:
          </p>

          <div className="mt-4 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/70 bg-panel px-5 py-4">
              <span className="font-semibold text-foreground text-lg">500 €</span>
              <span className="text-foreground/70 text-sm">
                članarina predstavlja <strong className="font-semibold text-primary">19,8%</strong>{" "}
                vrednosti tog projekta
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/70 bg-panel px-5 py-4">
              <span className="font-semibold text-foreground text-lg">1.000 €</span>
              <span className="text-foreground/70 text-sm">
                to je <strong className="font-semibold text-primary">9,9%</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
