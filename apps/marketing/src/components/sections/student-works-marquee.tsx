"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { Accent } from "@/components/accent";
import { assetPath } from "@/lib/asset";
import { publishedWorks } from "@/lib/works";
import { cn } from "@repo/ui";
import Image from "next/image";

/**
 * Coverflow traka radova — kartica najbliža centru se izdvaja (uveća, puna
 * oštrina i providnost), ostale u pozadini blede, smanjuju se i blago
 * zamagljuju prema ivicama.
 *
 * Kartica je namerno uža od ekrana na mobilnom (72vw, ne skoro puna širina)
 * da sused UVEK proviruje sa obe strane — bez toga traka na malom ekranu
 * izgleda kao jedna izolovana slika, ne kao niz koji se skroluje (greška iz
 * prve verzije, 06.10.). Pad providnosti je namerno blag (do 0,6, ne 0,45)
 * da taj sused ostane jasno vidljiv kao „još nešto postoji ovde", dok pad
 * veličine (do 0,68) nosi glavni utisak izdvajanja.
 *
 * Isti izvor podataka kao zid radova (`src/lib/works.ts`): rad se ovde
 * pojavljuje tek kad je `published: true` i kad postoje OBE saglasnosti.
 * Dok nema nijednog objavljenog rada, sekcija se ne prikazuje.
 */
export function StudentWorksMarqueeSection() {
  const trackRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const update = () => {
      const trackRect = track.getBoundingClientRect();
      const center = trackRect.left + trackRect.width / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const [index, item] of itemRefs.current.entries()) {
        if (!item) continue;
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(itemCenter - center);
        const proximity = Math.min(distance / (trackRect.width / 2), 1);

        // Skaliranje ide ka ivici bliže centru trake, ne ka sopstvenom centru
        // kartice — inače kartica koja tek proviruje sa ivice ekrana, čim se
        // smanji, "pobegne" još dalje van vidljivog dela i nestane.
        item.style.transformOrigin = itemCenter > center ? "left center" : "right center";
        item.style.transform = `scale(${1 - proximity * 0.32})`;
        item.style.opacity = String(1 - proximity * 0.4);
        item.style.filter = proximity > 0.15 ? `blur(${(proximity * 1.5).toFixed(2)}px)` : "";
        item.style.zIndex = String(Math.round((1 - proximity) * 100));

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      }

      setActiveIndex(closestIndex);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLUListElement>) => {
    const track = trackRef.current;
    if (!track || event.pointerType !== "mouse") return;

    const startX = event.clientX;
    const startScroll = track.scrollLeft;
    track.style.scrollSnapType = "none";
    track.style.cursor = "grabbing";

    const onMove = (moveEvent: PointerEvent) => {
      track.scrollLeft = startScroll - (moveEvent.clientX - startX);
    };
    const onUp = () => {
      track.style.scrollSnapType = "";
      track.style.cursor = "";
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  if (publishedWorks.length === 0) return null;

  return (
    <section className="overflow-hidden bg-card py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl font-medium text-3xl text-foreground tracking-[-0.02em] md:text-4xl">
          Ovo su napravili <Accent>studenti Nauči Dizajn-a</Accent>
        </h2>
      </div>

      <ul
        ref={trackRef}
        onPointerDown={onPointerDown}
        className="mt-12 flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto px-[calc(50%-36vw)] py-8 [scrollbar-width:none] sm:gap-6 sm:px-[calc(50%-170px)]"
        style={{ WebkitOverflowScrolling: "touch" }}
        aria-label="Sajtovi koje su napravili polaznici"
      >
        {publishedWorks.map((work, index) => (
          <li
            key={work.slug}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            aria-current={index === activeIndex}
            className={cn(
              "w-[72vw] shrink-0 snap-center transition-[transform,opacity,filter,box-shadow] duration-300 ease-out sm:w-[340px]",
              "motion-reduce:!scale-100 motion-reduce:!opacity-100 motion-reduce:!blur-none",
              index === activeIndex && "shadow-[0_30px_70px_-25px_rgba(0,0,0,0.65)] ring-1 ring-primary/40",
            )}
          >
            <figure className="overflow-hidden rounded-2xl border bg-background">
              <div className="relative aspect-[16/10] w-full bg-panel">
                <Image
                  src={assetPath(work.image)}
                  alt={`Sajt za ${work.client}, autor ${work.author}`}
                  fill
                  sizes="(min-width: 640px) 340px, 280px"
                  className="object-cover object-top"
                  draggable={false}
                />
              </div>
              <figcaption className="border-t px-5 py-4">
                <p className="font-semibold text-foreground">{work.client}</p>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{work.brief}</p>
                <p className="mt-3 font-medium text-foreground text-sm">Autor: {work.author}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
