import { Accent } from "@/components/accent";
import { PercentRing } from "@/components/percent-ring";
import { stats } from "@/lib/brand";

/**
 * Jedan broj razvučen preko pola ekrana.
 *
 * Postojeći sajt ovaj potez koristi za „98.6%" u ogromnom kondenzovanom fontu —
 * i to je ono što se pamti sa te stranice.
 *
 * `surface` postoji zbog pravila da dve susedne sekcije ne smeju da izgledaju
 * isto: na početnoj ova traka stoji između dve sekcije u osnovnoj boji, pa je
 * panel. Ostaje kao prekidač za slučaj da traka jednom stane odmah ispod neke
 * panel sekcije — tada ide u osnovnoj boji.
 */
export function StatBandSection({
  surface = "panel",
}: {
  surface?: "panel" | "plain";
}) {
  return (
    <section className={surface === "panel" ? "bg-panel" : ""}>
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[1fr_1.1fr] md:py-24">
        <PercentRing
          value={stats.satisfaction}
          label="polaznika je izjavilo da je zadovoljno kupovinom"
        />
        <div>
          <h2 className="font-medium text-3xl text-foreground leading-tight tracking-[-0.02em] md:text-4xl">
            Broj koji <Accent>nije</Accent> marketinški trik
          </h2>
          <p className="mt-4 text-foreground/70 text-lg leading-relaxed">
            Meri se anketom među polaznicima, ne procenom. Uz njega ide i ocena{" "}
            {stats.mentorshipScore} za rad sa mentorom, iz ankete sa preko sto studenata, i{" "}
            {stats.skoolRating} od 5 za zajednicu.
          </p>
        </div>
      </div>
    </section>
  );
}
