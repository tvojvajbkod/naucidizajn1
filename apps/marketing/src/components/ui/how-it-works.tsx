"use client";

import type { CaseStep } from "@/lib/case-studies";
import { cn } from "@repo/ui";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Postupak kao tok, ne kao spisak.
 *
 * Koraci su ranije stajali kao redovi jedan ispod drugog i čitali su se kao
 * sadržaj neke druge stranice — posetilac nije video da je to JEDAN posao od
 * početka do kraja. Ovde koraci stoje na liniji, numerisani, pa se redosled
 * vidi pre nego što se pročita ijedna reč.
 *
 * Linija ide vodoravno na računaru i uspravno na telefonu; brojevi imaju
 * podlogu sekcije da linija ne prolazi kroz njih.
 *
 * Uz svaki korak ide JEDNA rečenica (`short` iz `case-studies.ts`), nikad ceo
 * pasus — ovo je najava postupka, a ne sam postupak. Ceo tekst je na stranici
 * studije slučaja i tamo mu je mesto.
 *
 * Koraci ulaze jedan po jedan kad sekcija uđe u vidokrug. Bez JavaScript-a su
 * svi vidljivi, a `prefers-reduced-motion` gasi pojavljivanje.
 */

/** Na serveru nema layout faze — tamo se koristi obični efekat. */
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Razmak između dva koraka. */
const STEP = 90;

function canAnimate() {
  if (typeof window === "undefined") return false;
  if (typeof IntersectionObserver === "undefined") return false;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function HowItWorks({
  steps,
  className,
}: {
  steps: CaseStep[];
  className?: string;
}) {
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
    <ol ref={ref} className={cn("grid gap-8 md:grid-cols-5 md:gap-6", className)}>
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="relative flex gap-4 motion-reduce:transition-none md:block"
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? "none" : "translateY(10px)",
            transition: "opacity 420ms ease, transform 420ms cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: shown ? `${index * STEP}ms` : "0ms",
          }}
        >
          {/* Linija do SLEDEĆEG koraka, pa je poslednji nema. Crta se po koraku,
              a ne kao jedna linija preko celog niza, da ne bi virila iza
              poslednjeg broja. Uspravna na telefonu, vodoravna na računaru;
              mere prate visinu broja (40px) i razmak u mreži. */}
          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="absolute top-10 left-[19px] h-[calc(100%-0.5rem)] w-px bg-border md:top-[19px] md:left-12 md:h-px md:w-[calc(100%-1.5rem)]"
            />
          ) : null}

          <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/45 bg-panel font-semibold text-primary">
            {index + 1}
          </span>
          <div className="md:mt-5">
            <p className="font-medium text-foreground leading-snug">{step.title}</p>
            {step.short ? (
              <p className="mt-1.5 text-foreground/65 text-sm leading-relaxed">{step.short}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
