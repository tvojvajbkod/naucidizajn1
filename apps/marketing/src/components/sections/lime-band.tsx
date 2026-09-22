import { ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * Limeta traka — izlaz iz dugog tamnog bloka nazad u svetlo.
 *
 * Zatečeni sajt na istom mestu ima limeta traku (~250px) sa jednim pitanjem i
 * jednim dugmetom; tamo je to kviz „koja veština je za tebe". Kviz kod nas ne
 * postoji, pa traka radi isti posao drugim sredstvom — vodi na tabelu
 * poređenja, koja je naš odgovor na isto dvoumljenje.
 *
 * Jedna po stranici. Limeta je akcenat; dve trake i prestaje da bude akcenat.
 */
export function LimeBandSection() {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-14 text-center md:py-16">
        <h2 className="max-w-3xl font-medium text-2xl text-ink leading-snug tracking-[-0.02em] md:text-3xl">
          Ne znaš da li ti treba članstvo, kurs ili mentorstvo?
        </h2>
        <p className="max-w-xl text-ink/70 leading-relaxed">
          Sva tri stoje jedno pored drugog — cilj, trajanje, cena i vrsta podrške u jednoj tabeli.
        </p>
        <Link
          href="/cene"
          className="inline-flex items-center gap-2 rounded bg-ink px-7 py-3.5 font-semibold text-background transition-colors hover:bg-ink/85"
        >
          Uporedi u tabeli
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
