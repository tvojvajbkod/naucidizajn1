"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Procenat kao krug koji se ispunjava, sa brojem koji broji do cilja.
 *
 * Kreće tek kad krug uđe u vidokrug — animacija koja se odigra dok je posetilac
 * na vrhu strane nije viđena ni jednom.
 *
 * Pravila:
 * - Bez JavaScript-a i pre hidracije na ekranu stoji KONAČNA vrednost, ne nula.
 *   Zato se početno stanje postavlja na cilj, pa se u layout efektu vrati na
 *   nulu — tako nema ni treptaja ni prazne brojke u HTML-u koji čita pretraga.
 * - `prefers-reduced-motion` gasi i brojanje i punjenje: vrednost samo stoji.
 * - Krug je ukras oko broja, pa je `aria-hidden`; broj se čita kao tekst.
 */

/** Na serveru nema layout faze — tamo se koristi obični efekat. */
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/** „98,6%" → 98.6 */
function parseValue(raw: string): number {
  const cleaned = raw.replace("%", "").replace(",", ".").trim();
  const parsed = Number.parseFloat(cleaned);
  return Number.isFinite(parsed) ? parsed : 0;
}

/** 98.6 → „98,6" (jedna decimala, i to samo kad je ima) */
function format(value: number, decimals: number): string {
  return value.toFixed(decimals).replace(".", ",");
}

const SIZE = 260;
const STROKE = 14;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const DURATION = 1600;

export function PercentRing({
  value,
  label,
  className,
}: {
  /** Npr. „98,6%" — tačno onako kako stoji u `stats`. */
  value: string;
  label: string;
  className?: string;
}) {
  const target = parseValue(value);
  const decimals = value.includes(",") ? 1 : 0;

  const [shown, setShown] = useState(target);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useIsoLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;
    setShown(0);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    let frame = 0;

    const run = () => {
      const begin = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - begin) / DURATION);
        // Usporava pred kraj — brojka „sleti" na cilj umesto da se zaustavi naglo.
        const eased = 1 - (1 - t) ** 3;
        setShown(target * eased);
        if (t < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            run();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [target]);

  const progress = target > 0 ? Math.min(1, shown / target) * (target / 100) : 0;
  const angle = (progress * 360 - 90) * (Math.PI / 180);
  const dotX = SIZE / 2 + RADIUS * Math.cos(angle);
  const dotY = SIZE / 2 + RADIUS * Math.sin(angle);

  return (
    <div ref={ref} className={className}>
      <div className="relative mx-auto w-fit md:mx-0">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          aria-hidden="true"
          className="size-[15rem] md:size-[17rem]"
        >
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            strokeWidth={STROKE}
            className="stroke-ink/10"
          />
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            strokeWidth={STROKE}
            strokeLinecap="round"
            transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
            className="stroke-ink"
          />
          {/* Limeta tačka na vrhu luka — jedini akcenat, kao i drugde na sajtu. */}
          <circle cx={dotX} cy={dotY} r={STROKE / 2 + 3} className="fill-primary" />
        </svg>

        <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[3.25rem] text-ink uppercase leading-none tracking-tight md:text-[4rem]">
          {format(shown, decimals)}%
        </span>
      </div>

      <p className="mt-6 max-w-sm text-center text-ink/60 md:text-left">{label}</p>
    </div>
  );
}
