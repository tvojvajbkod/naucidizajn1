import { Accent } from "@/components/accent";
import { assetPath } from "@/lib/asset";
import { publishedWorks } from "@/lib/works";
import { cn } from "@repo/ui";
import Image from "next/image";

/**
 * Traka sa sajtovima polaznika — beskonačno klizi udesno u levo.
 *
 * Isti izvor podataka kao zid radova (`src/lib/works.ts`): rad se ovde
 * pojavljuje tek kad je `published: true` i kad postoje OBE saglasnosti.
 * Dok nema nijednog objavljenog rada, sekcija se ne prikazuje — isto pravilo
 * kao na `WorksWallSection`.
 *
 * Niz se duplira jednom da bi klizanje bilo bešavno (druga polovina trake je
 * identična prvoj, pa se u trenutku `translateX(-50%)` prelazi neprimetno
 * nazad na početak). `prefers-reduced-motion` gasi animaciju i traka postaje
 * obična vodoravna lista koja se skroluje rukom.
 */
export function StudentWorksMarqueeSection() {
  if (publishedWorks.length === 0) return null;

  const items = [...publishedWorks, ...publishedWorks];

  return (
    <section className="bg-card py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl font-medium text-3xl text-foreground tracking-[-0.02em] md:text-4xl">
          Ovo su napravili <Accent>studenti Nauči Dizajn-a</Accent>
        </h2>
      </div>

      <div className="group mt-10 overflow-x-auto [scrollbar-width:none] motion-reduce:[&_.marquee-track]:animate-none">
        <ul
          className="marquee-track flex w-max gap-6 px-6 will-change-transform animate-marquee group-hover:[animation-play-state:paused]"
          aria-label="Sajtovi koje su napravili polaznici"
        >
          {items.map((work, index) => (
            <li key={`${work.slug}-${index}`} className="w-72 shrink-0 sm:w-80" aria-hidden={index >= publishedWorks.length}>
              <figure className="overflow-hidden rounded-2xl border bg-background">
                <div className="relative aspect-[16/10] w-full bg-panel">
                  <Image
                    src={assetPath(work.image)}
                    alt={`Sajt za ${work.client}, autor ${work.author}`}
                    fill
                    sizes="320px"
                    className={cn("object-cover object-top")}
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
      </div>
    </section>
  );
}
