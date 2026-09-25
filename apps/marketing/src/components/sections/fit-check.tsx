"use client";

import { Accent } from "@/components/accent";
import { Check, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * „Da li je ovo za tebe" — dve kolone, pozvani i nepozvani.
 *
 * Dizajn (odluka 25.09.): kartica sa razlozima DA stoji u tamnozelenom panelu
 * sa limeta kvačicama, kartica sa razlozima NE je tiha — isprekidana ivica bez
 * podloge. Poruka se vidi pre nego što se pročita: jedna strana je pozvana,
 * druga nije. Ranije su obe bile iste bele kartice, pa sekcija nije govorila
 * ništa dok se ne pročita.
 *
 * Stavke ulaze jedna po jedna kad sekcija uđe u vidokrug, naizmenično levo pa
 * desno. Pravila su ista kao svuda: bez JavaScript-a stavke su vidljive, a
 * `prefers-reduced-motion` gasi pojavljivanje.
 */

/** Na serveru nema layout faze — tamo se koristi obični efekat. */
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Razmak između dve stavke u istoj koloni. */
const STEP = 110;
/** Desna kolona kasni pola koraka, da se kolone „prepliću". */
const OFFSET = 55;

const forYou = [
  "Krećeš iz nule i hoćeš veštinu koja se brzo pretvara u novac",
  "Već dizajniraš, ali gubiš dane na izradu umesto na klijente",
  "Imaš firmu i hoćeš sam da rešiš sajt, bez agencije",
  "Imaš dva do tri sata dnevno i hoćeš da ih trošiš na rad, ne na predavanja",
];

const notForYou = [
  "Tražiš diplomu ili formalno obrazovanje",
  "Očekuješ zagarantovanu zaradu bez javljanja klijentima",
  "Nemaš vremena da radiš van snimaka",
  "Hoćeš da naučiš kodiranje — ovo je program o dizajnu i prodaji",
];

function canAnimate() {
  if (typeof window === "undefined") return false;
  if (typeof IntersectionObserver === "undefined") return false;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function revealStyle(shown: boolean, delay: number) {
  return {
    opacity: shown ? 1 : 0,
    transform: shown ? "none" : "translateY(6px)",
    transition: "opacity 420ms ease, transform 420ms cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: shown ? `${delay}ms` : "0ms",
  };
}

export function FitCheckSection() {
  const [shown, setShown] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);

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
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-muted/50 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl font-medium text-3xl text-ink tracking-[-0.02em] md:text-4xl">
          Da li je ovo za <Accent>tebe</Accent>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Radije ćemo da odustaneš sada nego da tražiš povraćaj novca za mesec dana.
        </p>

        <div ref={ref} className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-[linear-gradient(180deg,#16291d_0%,#0f1e15_100%)] p-7">
            <h3 className="font-semibold text-background text-lg">Jeste, ako</h3>
            <ul className="mt-5 space-y-3.5">
              {forYou.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-3 motion-reduce:transition-none"
                  style={revealStyle(shown, index * STEP)}
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-background/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tiha strana: bez podloge, samo isprekidana ivica — namerno slabija. */}
          <div className="rounded-2xl border border-ink/20 border-dashed p-7">
            <h3 className="font-semibold text-ink text-lg">Nije, ako</h3>
            <ul className="mt-5 space-y-3.5">
              {notForYou.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-3 motion-reduce:transition-none"
                  style={revealStyle(shown, index * STEP + OFFSET)}
                >
                  <X className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
