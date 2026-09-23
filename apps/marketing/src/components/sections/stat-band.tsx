import { Accent } from "@/components/accent";
import { BigStat } from "@/components/big-stat";
import { stats } from "@/lib/brand";

/**
 * Jedan broj razvučen preko pola ekrana.
 *
 * Postojeći sajt ovaj potez koristi za „98.6%" u ogromnom kondenzovanom fontu —
 * i to je ono što se pamti sa te stranice. Ovde stoji na krem podlozi, kao
 * predah između dve bele sekcije, i nosi jedini podatak koji sam po sebi ubeđuje.
 */
export function StatBandSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[1fr_1.1fr] md:py-24">
        <BigStat
          size="giant"
          value={stats.satisfaction}
          label="polaznika je izjavilo da je zadovoljno kupovinom"
          className="text-ink"
        />
        <div>
          <h2 className="font-medium text-3xl text-ink leading-tight tracking-[-0.02em] md:text-4xl">
            Broj koji <Accent>nije</Accent> marketinški
          </h2>
          <p className="mt-4 text-ink/70 text-lg leading-relaxed">
            Meri se anketom među polaznicima, ne procenom. Uz njega ide i ocena{" "}
            {stats.mentorshipScore} za rad sa mentorom, iz ankete sa preko sto studenata, i{" "}
            {stats.skoolRating} od 5 za zajednicu.
          </p>
          <p className="mt-4 text-ink/55 text-sm leading-relaxed">
            Brojke stoje na jednom mestu u kodu, pa su svuda na sajtu iste. Zatečeni sajt je na
            četiri stranice tvrdio četiri različita broja polaznika.
          </p>
        </div>
      </div>
    </section>
  );
}
