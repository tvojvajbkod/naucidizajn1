"use client";

import { Accent } from "@/components/accent";
import { cn } from "@repo/ui";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Zamenjuje `TurningPointSection` (odluka — videti istoriju page.tsx).
 *
 * Isti vizuelni jezik kao `ui/how-it-works.tsx` („postupak kao tok, ne kao
 * spisak", odluka 28.09.): koraci na liniji, linija crtana PO KORAKU,
 * vodoravno na računaru / uspravno na telefonu, ulazak u vidokrug otkriva
 * korake redom, `prefers-reduced-motion` gasi animaciju.
 *
 * Redosled je NAMERNO izražen, ne suptilan stagger (izmena — prva verzija je
 * imala razmak od samo 80ms po koraku, pa se čitalo kao da se sve pojavljuje
 * odjednom). Korak se pojavljuje, PA se linija do sledećeg razvuče, PA tek
 * tada sledeći korak — `STEP` je razmak u ms između dva koraka, a linija crta
 * unutar tog razmaka, ne istovremeno sa čvorom.
 *
 * Zaseban komponent a ne izmena `how-it-works.tsx` jer taj komponent crta
 * redni broj koraka (1..5) u krug, dok ovde krug nosi BROJ DANA (01, 05,
 * 10…30) — različit podatak, ne bi trebalo preopteretiti deljenu komponentu
 * tipom `CaseStep`.
 *
 * Sedam koraka, ne pet: ovo je kompletan pregled meseca, ne najava koja vodi
 * na drugu stranicu (za to postoji `how-it-works.tsx`). Horizontalni raspored
 * aktivan tek od `lg` — sedam kolona je pretesno na manjim ekranima računara.
 */

const days = [
  { day: "01", title: "Postavljaš osnovu" },
  { day: "05", title: "Razumeš AI workflow" },
  { day: "10", title: "Praviš prvi projekat" },
  { day: "15", title: "Gradiš portfolio" },
  { day: "20", title: "Tražiš potencijalne klijente" },
  { day: "25", title: "Šalješ outreach" },
  { day: "30", title: "Imaš spreman sistem za prvi plaćeni projekat" },
];

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;
/** Razmak u ms između pojavljivanja dva uzastopna koraka. */
const STEP = 550;
/** Kad unutar razmaka počinje crtanje linije ka sledećem koraku (posle čvora). */
const LINE_DELAY = 250;
const LINE_DURATION = 260;

function canAnimate() {
  if (typeof window === "undefined") return false;
  if (typeof IntersectionObserver === "undefined") return false;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ThirtyDaysSection() {
  const [shown, setShown] = useState(true);
  const ref = useRef<HTMLOListElement | null>(null);

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
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <h2 className="max-w-2xl font-medium text-3xl text-foreground tracking-[-0.02em] md:text-4xl">
          Od „ne znam šta radim“ do „ovo mogu da <Accent>naplatim</Accent>“
        </h2>

        <ol ref={ref} className="mt-14 grid gap-8 lg:grid-cols-7 lg:gap-4">
          {days.map((step, index) => (
            <li
              key={step.day}
              className="relative flex gap-4 motion-reduce:transition-none lg:block"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "none" : "translateY(10px)",
                transition: "opacity 420ms ease, transform 420ms cubic-bezier(0.22, 1, 0.36, 1)",
                transitionDelay: shown ? `${index * STEP}ms` : "0ms",
              }}
            >
              {index < days.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-10 left-[19px] h-[calc(100%-0.5rem)] w-px bg-border motion-reduce:transition-none lg:top-[19px] lg:left-10 lg:h-px lg:w-[calc(100%-1.25rem)]"
                  style={{
                    opacity: shown ? 1 : 0,
                    transition: `opacity ${LINE_DURATION}ms ease`,
                    transitionDelay: shown ? `${index * STEP + LINE_DELAY}ms` : "0ms",
                  }}
                />
              ) : null}

              <span
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/45 bg-panel font-semibold text-primary text-sm",
                )}
              >
                {step.day}
              </span>
              <div className="lg:mt-5">
                <p className="font-medium text-foreground/50 text-xs uppercase tracking-wide">
                  Dan {step.day}
                </p>
                <p className="mt-1 text-foreground leading-snug">{step.title}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
