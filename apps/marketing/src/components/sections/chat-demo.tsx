"use client";

import { Accent } from "@/components/accent";
import { assetPath } from "@/lib/asset";
import { isProposal } from "@/lib/brand";
import { Sparkles, UserRound } from "lucide-react";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * „Kako ti praviš sajt" — prepiska sa AI-em umesto objašnjenja.
 *
 * Ovo je najbrži način da se razbije strah od programiranja: posetilac vidi da
 * posao izgleda kao dopisivanje, a ne kao pisanje koda. Zato poruke moraju da
 * budu KONKRETNE (pravi zahtev, prava izmena), ne uopštene.
 *
 * Fotografija uz poruke polaznika je prazno mesto dok ne stigne prava slika —
 * isto pravilo kao kod mentora i utisaka: lice se objavljuje samo uz saglasnost
 * osobe sa slike, i nikad se ne stavlja lice sa stocka.
 *
 * Poruke se pojavljuju jedna po jedna kad sekcija uđe u vidokrug, kao da se
 * prepiska odvija. Bez JavaScript-a su sve vidljive, a `prefers-reduced-motion`
 * gasi pojavljivanje.
 */

/** Na serveru nema layout faze — tamo se koristi obični efekat. */
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Razmak između dve poruke. */
const STEP = 260;

interface Message {
  from: "covek" | "ai";
  text: string;
  /**
   * [POPUNI] Fotografija uz poruku polaznika, npr. „/chat/polaznik.jpg".
   * Prazno = okruglo prazno mesto. Kvadratna slika, najmanje 200 × 200 px.
   */
  photo?: string;
}

const messages: Message[] = [
  {
    from: "covek",
    text: 'Napravi mi jednostavan sajt za stolarsku radionicu „Hrast". Treba galerija radova, cenovnik po tipu posla, radno vreme i dugme za poziv.',
  },
  {
    from: "ai",
    text: "Napravio sam sajt sa četiri dela: naslov sa galerijom radova, cenovnik, radno vreme i kontakt. Dugme za poziv stoji i u zaglavlju i na dnu strane.",
  },
  {
    from: "covek",
    text: "Cenovnik pomeri odmah ispod naslova i dodaj formu za upit — ljudi najčešće pitaju za cenu.",
  },
  {
    from: "ai",
    text: "Urađeno. Cenovnik je sada druga sekcija, a forma šalje upit na mejl koji si dao. Hoćeš li da dodam i mapu sa lokacijom radionice?",
  },
];

function canAnimate() {
  if (typeof window === "undefined") return false;
  if (typeof IntersectionObserver === "undefined") return false;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Okruglo prazno mesto za fotografiju polaznika. */
function PersonAvatar({ photo }: { photo?: string }) {
  if (photo) {
    return (
      <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
        <Image src={assetPath(photo)} alt="" fill sizes="40px" className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border border-dashed bg-muted"
      title={isProposal ? "Mesto za fotografiju — /chat/<ime>.jpg" : undefined}
    >
      <UserRound className="size-5 text-muted-foreground/70" aria-hidden="true" />
    </div>
  );
}

/** Znak AI-a je naš crtež, nikad tuđi logotip. */
function AiAvatar() {
  return (
    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary">
      <Sparkles className="size-5 text-primary-foreground" aria-hidden="true" />
    </div>
  );
}

export function ChatDemoSection() {
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
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="kako-pravis" className="scroll-mt-20 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-medium text-3xl text-foreground tracking-[-0.02em] md:text-4xl">
            Kako ti praviš <Accent>sajt</Accent>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Nije ti potrebno prethodno znanje programiranja. Bitno je da znaš da objasniš svoju
            ideju, a kod piše AI. Ti proveravaš šta je uradio, i pišeš mu izmene sve dok ne budeš
            zadovoljan. Ti upravljaš njegovim radom.
          </p>
        </div>

        <div
          ref={ref}
          className="mx-auto mt-12 max-w-3xl space-y-5 rounded-3xl border bg-panel p-6 md:p-10"
        >
          {messages.map((message, index) => {
            const mine = message.from === "covek";
            return (
              <div
                key={message.text}
                className={`flex items-end gap-3 motion-reduce:transition-none ${
                  mine ? "flex-row-reverse" : ""
                }`}
                style={{
                  opacity: shown ? 1 : 0,
                  transform: shown ? "none" : "translateY(8px)",
                  transition: "opacity 380ms ease, transform 380ms cubic-bezier(0.22, 1, 0.36, 1)",
                  transitionDelay: shown ? `${index * STEP}ms` : "0ms",
                }}
              >
                {mine ? <PersonAvatar photo={message.photo} /> : <AiAvatar />}
                <p
                  className={`max-w-[85%] rounded-2xl px-5 py-3.5 leading-relaxed ${
                    mine
                      ? "rounded-br-sm border border-primary/35 bg-primary/10 text-foreground"
                      : "rounded-bl-sm border bg-card text-foreground/85"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-5 max-w-3xl text-muted-foreground text-sm">
          Prepiska je primer, napisan da pokaže postupak. Fotografije uz poruke stoje prazne dok ne
          stigne prava slika.
        </p>
      </div>
    </section>
  );
}
