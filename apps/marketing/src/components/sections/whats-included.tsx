"use client";

import {
  Calculator,
  CalendarDays,
  Handshake,
  type LucideIcon,
  MessageSquareQuote,
  Search,
  Sparkles,
  Wand2,
} from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/** Na serveru nema layout faze — tamo se koristi obični efekat. */
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Šta se tačno dobija za mesečno članstvo. Stavke su preuzete iz opisa
 * zajednice — ništa dodato, ništa ulepšano, jer se svaka može proveriti.
 */
interface Item {
  title: string;
  description: string;
  icon: LucideIcon;
}

const items: Item[] = [
  {
    title: "Ceo sajt uz pomoć AI-a, bez koda",
    description:
      "Od prazne strane do gotovog sajta: struktura, tekst, slike i objava. Korak po korak, na primeru koji radiš zajedno sa nama.",
    icon: Wand2,
  },
  {
    title: "Biblioteka promptova",
    description:
      "Gotovi upiti za strukturu, tekstove i ispravke. Ne pogađaš formulaciju — koristiš onu koja je već dala rezultat.",
    icon: Sparkles,
  },
  {
    title: "Gde se nalaze klijenti",
    description:
      "Konkretna mesta i vrste firmi kojima sajt stvarno treba, i redosled kojim ih obrađuješ da ne bi gubio dane na pogrešne ljude.",
    icon: Search,
  },
  {
    title: "Poruke za obraćanje koje dobijaju odgovor",
    description:
      "Šabloni prve poruke, podsetnika i odgovora na „razmisliću“. Prepisuješ, prilagođavaš i šalješ.",
    icon: MessageSquareQuote,
  },
  {
    title: "Kalkulator cene projekta",
    description:
      "Koliko da tražiš za jednostavan sajt, a koliko za složeniji — da ne radiš ispod cene niti otkažeš posao previsokim brojem.",
    icon: Calculator,
  },
  {
    title: "Kako da prodaš svoj dizajn",
    description:
      "Razgovor sa klijentom, predstavljanje rešenja, ispravke i naplata. Deo koji obično odluči hoće li biti i drugi projekat.",
    icon: Handshake,
  },
  {
    title: "Grupni sastanak svake nedelje",
    description:
      "Uživo, sa mentorima. Pokazuješ šta si uradio, dobijaš ispravke. Sastanci se snimaju, pa propušten termin nije propušteno gradivo.",
    icon: CalendarDays,
  },
];

/**
 * Kartice ulaze jedna po jedna kad sekcija uđe u vidokrug, a na računaru uz to
 * reaguju na kursor (odluka 25.09.).
 *
 * Pravila:
 * - Bez JavaScript-a i pre hidracije kartice su VIDLJIVE. Zato početno stanje
 *   kaže „prikazano", pa se u layout efektu sakriju — tako nema treptaja, a ni
 *   prazne sekcije u HTML-u koji čita pretraga.
 * - `prefers-reduced-motion` gasi i ulazak i podizanje na kursor; ostaje samo
 *   promena boje ivice, koja nije kretanje.
 * - Razmak između kartica je 70 ms: dovoljno da se primeti redosled, a ceo niz
 *   od sedam kartica završi ispod sekunde.
 */
const STEP = 70;

export function WhatsIncludedSection() {
  const [revealed, setRevealed] = useState(true);
  const gridRef = useRef<HTMLUListElement | null>(null);

  useIsoLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;
    setRevealed(false);
  }, []);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sta-dobijas" className="bg-ink py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-medium text-3xl text-background tracking-[-0.02em] md:text-4xl">
            Šta dobijaš
          </h2>
          <p className="mt-4 text-background/75 text-lg">
            Sve na jednom mestu, na srpskom. Jedna članarina nosi ceo put od četiri meseca — izrada
            se uvek uči uz nalaženje klijenata i naplatu, jer prvo bez drugog ne donosi novac.
          </p>
        </div>

        <ul ref={gridRef} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <li
              key={item.title}
              className="motion-reduce:transition-none"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? "none" : "translateY(14px)",
                transition: "opacity 520ms ease, transform 520ms cubic-bezier(0.22, 1, 0.36, 1)",
                transitionDelay: revealed ? `${index * STEP}ms` : "0ms",
              }}
            >
              <div className="group h-full rounded-2xl border border-background/15 bg-background/[0.06] p-6 transition duration-200 hover:-translate-y-1 hover:border-background/30 hover:bg-background/[0.1] motion-reduce:translate-none! motion-reduce:transition-colors">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary transition-transform duration-200 group-hover:scale-110 motion-reduce:scale-100!">
                  <item.icon className="size-5 text-ink" />
                </div>
                <h3 className="mt-4 font-semibold text-background">{item.title}</h3>
                <p className="mt-2 text-background/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
