"use client";

import { type ProgramMonth, programMonths } from "@/lib/program";
import { Check } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Put kroz program — četiri meseca, jedan ispod drugog.
 *
 * Boje (odluka 25.09.): sekcija je KREM, a meseci stoje u tamnozelenom panelu
 * sa prelivom. Ranije je cela sekcija bila maslinasta i stapala se sa tamnom
 * sekcijom iznad („Šta dobijaš"). Krem okvir razdvaja ta dva bloka, a tamni
 * panel drži program kao jednu celinu.
 *
 * Stavke svakog meseca su kvačice i pojavljuju se jedna po jedna kad taj mesec
 * uđe u vidokrug. Pravila su ista kao svuda na sajtu:
 * - bez JavaScript-a i pre hidracije stavke su VIDLJIVE (početno stanje je
 *   „prikazano", pa se sakriju u layout efektu) — tekst mora da se čita i kad
 *   skripta ne radi;
 * - `prefers-reduced-motion` gasi pojavljivanje.
 */

/** Na serveru nema layout faze — tamo se koristi obični efekat. */
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Razmak između dve kvačice. */
const STEP = 110;

function canAnimate() {
  if (typeof window === "undefined") return false;
  if (typeof IntersectionObserver === "undefined") return false;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function MonthRow({ month }: { month: ProgramMonth }) {
  const [shown, setShown] = useState(true);
  const ref = useRef<HTMLLIElement | null>(null);

  useIsoLayoutEffect(() => {
    if (!canAnimate()) return;
    setShown(false);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || !canAnimate()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <li ref={ref} className="p-6 md:p-9">
      <div className="grid gap-4 md:grid-cols-[7rem_1fr] md:gap-10">
        <span className="font-semibold text-primary text-sm md:pt-1">{month.label}</span>
        <div>
          <h3 className="font-semibold text-background text-xl md:text-2xl">{month.title}</h3>
          <p className="mt-2 font-medium text-background/85 leading-relaxed">{month.outcome}</p>
          <p className="mt-3 text-background/65 leading-relaxed">{month.body}</p>

          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {month.items.map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-background/75 text-sm leading-relaxed motion-reduce:transition-none"
                style={{
                  opacity: shown ? 1 : 0,
                  transform: shown ? "none" : "translateY(6px)",
                  transition: "opacity 420ms ease, transform 420ms cubic-bezier(0.22, 1, 0.36, 1)",
                  transitionDelay: shown ? `${index * STEP}ms` : "0ms",
                }}
              >
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

export function TimelineSection() {
  return (
    <section id="program" className="scroll-mt-20 bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-medium text-3xl text-ink tracking-[-0.02em] md:text-4xl">
            Tvoj put za naredna 4 meseca
          </h2>
          <p className="mt-4 text-ink/70 text-lg">
            Svaki mesec ima svoju temu i svoj ishod. Ne biraš sam šta ćeš učiti i ne vrtiš se u krug
            — znaš gde si i šta sledi.
          </p>
        </div>

        {/* Tamnozeleni panel sa prelivom — program kao jedna celina na krem podlozi. */}
        <ol className="mt-12 divide-y divide-background/10 overflow-hidden rounded-3xl bg-[linear-gradient(180deg,#16291d_0%,#0f1e15_100%)]">
          {programMonths.map((month) => (
            <MonthRow key={month.label} month={month} />
          ))}
        </ol>

        <p className="mt-6 text-ink/60 text-sm">
          Raspored je okvir, ne rok. Članstvo je mesečno i otkazuješ ga sam, u svakom trenutku — ako
          ti treba više vremena za neki mesec, niko te ne gura dalje.
        </p>
      </div>
    </section>
  );
}
