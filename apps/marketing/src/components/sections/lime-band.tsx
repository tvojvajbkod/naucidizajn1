import { ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * Limeta traka — izlaz iz dugog tamnog bloka nazad u svetlo.
 *
 * Zatečeni sajt na istom mestu ima limeta traku (~250px) sa jednim pitanjem i
 * jednim dugmetom; tamo je to kviz „koja veština je za tebe". Ranije je ovde
 * stajalo poređenje članstva, kursa i mentorstva — te ponude više nema, pa
 * traka sada nudi najniži prag: besplatan webinar pre plaćanja.
 *
 * Jedna po stranici. Limeta je akcenat; dve trake i prestaje da bude akcenat.
 */
export function LimeBandSection() {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-14 text-center md:py-16">
        <h2 className="max-w-3xl font-medium text-2xl text-ink leading-snug tracking-[-0.02em] md:text-3xl">
          Nisi siguran da je ovo za tebe?
        </h2>
        <p className="max-w-xl text-ink/70 leading-relaxed">
          Dođi prvo na besplatan webinar. Vidiš kako se sajt pravi uz AI i kako izgleda rad u
          zajednici, pa tek onda odlučuješ o članstvu.
        </p>
        <Link
          href="/webinar"
          className="inline-flex items-center gap-2 rounded bg-ink px-7 py-3.5 font-semibold text-background transition-colors hover:bg-ink/85"
        >
          Prijavi se na webinar
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
