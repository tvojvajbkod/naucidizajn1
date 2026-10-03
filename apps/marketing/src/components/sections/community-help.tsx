"use client";

import { Accent } from "@/components/accent";
import { PageImage } from "@/components/page-image";
import { type CommunityCase, communityCases } from "@/lib/community";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * „Kad zapneš, ne zapinješ sam“ — zajednica u akciji.
 *
 * Posetilac bira muku koju i sam ima, pa dobija ono što bi dobio u grupi:
 * odgovori iskaču jedan po jedan, svaki u svom oblačiću. Zato je ovo jedina
 * sekcija na sajtu u kojoj posetilac nešto radi — odgovara na pitanje „šta ja
 * tu konkretno dobijam“ time što mu se pokaže, a ne time što mu se kaže.
 *
 * Razlika u odnosu na sekciju „Kako ti praviš sajt“ (isto oblačići): tamo je
 * prepiska čoveka i AI-a, sa avatarima i dve strane. Ovde nema avatara ni
 * naizmeničnih strana — oblačići su kartice sa ulogom, i bira se dugmadima.
 * Ako neko kasnije bude menjao dizajn, ove dve sekcije moraju da ostanu
 * različite, jer su blizu jedna drugoj po ideji.
 *
 * Bez JavaScript-a: prikazuju se SVI slučajevi sa svim odgovorima, pa je
 * sadržaj čitljiv i kad skripta ne radi. Tek kad se komponenta montira,
 * ostavlja se izabrani slučaj. `prefers-reduced-motion` gasi pojavljivanje —
 * odgovori su odmah tu.
 */

/** Na serveru nema layout faze — tamo se koristi obični efekat. */
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Koliko tačkice „kucaju“ pre prvog odgovora. */
const TYPING_MS = 850;
/** Razmak između dva odgovora. */
const STEP = 420;

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Tri tačkice dok grupa „kuca“. */
function Typing() {
  return (
    <div className="flex items-center gap-3 text-muted-foreground text-sm">
      <span className="flex gap-1.5" aria-hidden="true">
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            className="size-2 animate-pulse rounded-full bg-muted-foreground/60 motion-reduce:animate-none"
            style={{ animationDelay: `${dot * 180}ms` }}
          />
        ))}
      </span>
      Članovi zajednice kucaju…
    </div>
  );
}

/** Jedan odgovor. Mentor je obeležen limetom, član zajednice nije. */
function Bubble({
  answer,
  shown,
  delay,
}: { answer: CommunityCase["answers"][number]; shown: boolean; delay: number }) {
  const mentor = answer.role === "Mentor";

  return (
    <li
      className="motion-reduce:transition-none"
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(10px)",
        transition: "opacity 320ms ease, transform 320ms cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: shown ? `${delay}ms` : "0ms",
      }}
    >
      <div
        className={`rounded-2xl rounded-tl-sm border bg-card px-5 py-4 ${
          mentor ? "border-primary" : ""
        }`}
      >
        <p className="flex items-center gap-2 font-medium text-muted-foreground text-xs uppercase tracking-[0.08em]">
          {mentor ? <span className="size-2 rounded-full bg-primary" aria-hidden="true" /> : null}
          {answer.role}
        </p>
        <p className="mt-2 text-foreground/85 leading-relaxed">{answer.text}</p>
      </div>
    </li>
  );
}

/** Naslov slučaja + odgovori. Koristi se i za statički prikaz bez skripte. */
function CaseBlock({
  item,
  shownCount,
  typing,
}: {
  item: CommunityCase;
  /** Koliko je odgovora već iskočilo. -1 znači: prikaži sve (bez skripte). */
  shownCount: number;
  typing: boolean;
}) {
  return (
    <div>
      <h3 className="font-medium text-foreground text-xl tracking-[-0.01em]">{item.problem}</h3>
      {typeof item.replyMinutes === "number" ? (
        <p className="mt-1 text-muted-foreground text-sm">
          Prvi odgovor je stigao za {item.replyMinutes} min.
        </p>
      ) : null}

      <div className="mt-5 min-h-6">{typing ? <Typing /> : null}</div>

      <ul className="mt-2 space-y-3">
        {item.answers.map((answer, index) => (
          <Bubble
            key={answer.text}
            answer={answer}
            shown={shownCount < 0 || index < shownCount}
            delay={index * STEP}
          />
        ))}
      </ul>
    </div>
  );
}

export function CommunityHelpSection() {
  const [active, setActive] = useState(0);
  /** Počinje sa SVIM odgovorima vidljivim: tako izgleda i bez skripte. */
  const [shownCount, setShownCount] = useState(communityCases[0]?.answers.length ?? 0);
  const [typing, setTyping] = useState(false);
  const timers = useRef<number[]>([]);
  const activeCase = communityCases[active];

  /** Sakrij ih pre prvog iscrtavanja, da se ne vidi treptaj. */
  useIsoLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    setShownCount(0);
  }, []);

  /** Pusti odgovore za izabrani slučaj. */
  useEffect(() => {
    for (const id of timers.current) window.clearTimeout(id);
    timers.current = [];

    const total = communityCases[active]?.answers.length ?? 0;

    if (prefersReducedMotion()) {
      setTyping(false);
      setShownCount(total);
      return;
    }

    setShownCount(0);
    setTyping(true);
    timers.current.push(
      window.setTimeout(() => {
        setTyping(false);
        setShownCount(total);
      }, TYPING_MS),
    );

    return () => {
      for (const id of timers.current) window.clearTimeout(id);
      timers.current = [];
    };
  }, [active]);

  return (
    <section id="zajednica" className="scroll-mt-20 bg-panel py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <PageImage
            src="/skool/podrska-primer.png"
            alt="Primer teme u Skool zajednici Nauči Dizajn — pitanje o sajtu polaznika, sa odgovorima mentora i članova"
          />

          <div>
            <h2 className="font-medium text-3xl text-foreground tracking-[-0.02em] md:text-4xl">
              Kad zapneš — tu je <Accent>podrška zajednice</Accent>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Svaki posao donese nešto što ne znaš. U zajednici pitaš, i odgovor ne stiže od jedne
              osobe nego od nekoliko — od onih koji su isto to rešavali pre tebe, i od mentora.
              Izaberi muku koju i sam imaš.
            </p>
          </div>
        </div>

        <div className="mt-10 max-w-3xl flex flex-wrap gap-2.5">
          {communityCases.map((item, index) => {
            const on = index === active;
            return (
              <button
                key={item.problem}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(index)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  on
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-foreground/40"
                }`}
              >
                {item.problem}
              </button>
            );
          })}
        </div>

        <div className="mt-8 max-w-3xl">
          {activeCase ? (
            <CaseBlock key={active} item={activeCase} shownCount={shownCount} typing={typing} />
          ) : null}

          {/* Bez skripte dugmad ne rade, pa ostali slučajevi stoje ovde.
              Pregledač sa skriptom ovo ne iscrtava — zato sekcija ne menja
              visinu posle hidracije (vidi objašnjenje na vrhu fajla). */}
          <noscript>
            <div className="space-y-10 pt-10">
              {communityCases.slice(1).map((item) => (
                <CaseBlock key={item.problem} item={item} shownCount={-1} typing={false} />
              ))}
            </div>
          </noscript>
        </div>

        <p className="mt-8 max-w-3xl text-muted-foreground text-sm">
          Pitanja i odgovori su primeri, napisani da pokažu kako grupa odgovara. Prave poruke iz
          zajednice idu na sajt tek uz saglasnost onih koji su ih napisali.
        </p>
      </div>
    </section>
  );
}
