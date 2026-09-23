"use client";

import { Screenshot } from "@/components/screenshot";
import type { CaseStep } from "@/lib/case-studies";
import { cn } from "@repo/ui";
import { useEffect, useRef, useState } from "react";

/**
 * Koraci studije slučaja sa trakom napretka.
 *
 * Zašto ovako: sedam blokova teksta jedan ispod drugog ne daju nikakav osećaj
 * kretanja, pa čitalac odustane na trećem. Zato uz tekst stoji lepljiva traka
 * koja se puni dok skroluješ, a krug oko broja pokazuje koliko je prošao
 * TRENUTNI korak.
 *
 * Pravila koja se ne smeju pogaziti u kasnijim izmenama:
 * - Ništa se ne krije. Ceo tekst je u kodu i vidljiv i bez JavaScript-a —
 *   ovo je stranica koja mora da se skenira i koju pretraživači čitaju.
 * - Traka je ukras za orijentaciju, ne sadržaj: cela je `aria-hidden`, jer
 *   čitač ekrana već čuje „Korak 3" iz samog teksta.
 * - Poštuje `prefers-reduced-motion` — tada nema prelaza, vrednost samo skoči.
 */

/** Obim kruga poluprečnika 22 (2 × π × 22). */
const RING = 138.23;

export function CaseSteps({ steps }: { steps: CaseStep[] }) {
  const itemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const [active, setActive] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);
  const [overall, setOverall] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setAnimate(!reduced.matches);
    syncMotion();
    reduced.addEventListener("change", syncMotion);

    let frame = 0;

    const measure = () => {
      frame = 0;
      // Merna linija je na 38% visine ekrana — korak je „trenutni" kad njegov
      // vrh pređe tu liniju, a ne kad tek uđe u vidokrug.
      const anchor = window.innerHeight * 0.38;
      let index = 0;
      let within = 0;

      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= anchor) {
          index = i;
          within = Math.min(1, Math.max(0, (anchor - rect.top) / Math.max(rect.height, 1)));
        }
      });

      setActive(index);
      setStepProgress(within);
      setOverall(Math.min(1, (index + within) / steps.length));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      reduced.removeEventListener("change", syncMotion);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps.length]);

  /** Prelaz za jedno svojstvo, ili „none" kad je smanjeno kretanje uključeno. */
  const ease = (property: string) =>
    animate ? `${property} 180ms cubic-bezier(0.33, 1, 0.68, 1)` : "none";
  const current = steps[active];

  return (
    <div>
      {/* Telefon i tablet: tanka traka ispod zaglavlja. */}
      <div
        aria-hidden="true"
        className="-mx-6 sticky top-14 z-30 mb-10 border-b bg-background/90 px-6 py-3 backdrop-blur lg:hidden"
      >
        <div className="flex items-baseline justify-between gap-4">
          <p className="truncate font-medium text-ink text-sm">{current?.title}</p>
          <p className="shrink-0 text-muted-foreground text-xs tabular-nums">
            {active + 1} / {steps.length}
          </p>
        </div>
        <div className="mt-2 h-[3px] w-full rounded-full bg-border">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${overall * 100}%`, transition: ease("width") }}
          />
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-[3.5rem_1fr] lg:gap-x-12">
        {/* Računar: krug sa brojem i uspravna traka sa tačkama. */}
        <div aria-hidden="true" className="hidden lg:block">
          <div className="sticky top-28">
            <div className="relative size-14">
              <svg viewBox="0 0 56 56" aria-hidden="true" className="-rotate-90 size-14">
                <circle
                  cx="28"
                  cy="28"
                  r="22"
                  fill="none"
                  strokeWidth="3"
                  className="stroke-border"
                />
                <circle
                  cx="28"
                  cy="28"
                  r="22"
                  fill="none"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="stroke-primary"
                  style={{
                    strokeDasharray: RING,
                    strokeDashoffset: RING * (1 - stepProgress),
                    transition: ease("stroke-dashoffset"),
                  }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-semibold text-ink text-sm tabular-nums">
                {active + 1}
              </span>
            </div>

            <div className="relative mx-auto mt-6 h-48 w-px bg-border">
              <div
                className="absolute inset-x-0 top-0 bg-primary"
                style={{ height: `${overall * 100}%`, transition: ease("height") }}
              />
              {steps.map((step, i) => (
                <span
                  key={step.label}
                  className={cn(
                    "-translate-x-1/2 absolute left-1/2 size-2 rounded-full ring-4 ring-background",
                    i <= active ? "bg-primary" : "bg-border",
                  )}
                  style={{
                    top: `calc(${(i / Math.max(steps.length - 1, 1)) * 100}% - 4px)`,
                    transition: ease("background-color"),
                  }}
                />
              ))}
            </div>

            <p className="mt-5 text-center text-muted-foreground text-xs tabular-nums">
              {active + 1} / {steps.length}
            </p>
          </div>
        </div>

        <ol className="space-y-14">
          {steps.map((step, i) => (
            <li
              key={step.label}
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              className="scroll-mt-28"
            >
              <span
                className={cn(
                  "font-semibold text-sm",
                  i === active ? "text-ink" : "text-muted-foreground",
                )}
              >
                {step.label}
              </span>
              <h2 className="mt-1.5 font-medium text-2xl text-ink tracking-[-0.02em]">
                {step.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{step.body}</p>

              {step.snippet ? (
                <div className="mt-6 overflow-hidden rounded-2xl border bg-muted/50">
                  <p className="border-b bg-muted px-5 py-2.5 font-semibold text-ink text-xs uppercase tracking-wide">
                    {step.snippetLabel ?? "Primer"}
                  </p>
                  <pre className="overflow-x-auto whitespace-pre-wrap px-5 py-5 font-sans text-ink/85 text-sm leading-relaxed">
                    <code className="font-sans">{step.snippet}</code>
                  </pre>
                </div>
              ) : null}

              {step.image ? (
                <Screenshot
                  className="mt-6"
                  src={step.image.src}
                  alt={step.image.alt}
                  caption={step.image.caption}
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
