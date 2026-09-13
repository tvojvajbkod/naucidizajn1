import { Screenshot } from "@/components/screenshot";
import { publishedWorks } from "@/lib/works";
import { ArrowUpRight } from "lucide-react";

/**
 * Zid radova polaznika.
 *
 * Renderuje null dok nema nijednog objavljenog rada — prazna galerija sa
 * natpisom „uskoro" je gora od nepostojeće sekcije. Čim prvi rad dobije obe
 * saglasnosti i sliku, sekcija se pojavi sama.
 */
export function WorksWallSection({
  limit,
  heading = true,
}: {
  limit?: number;
  heading?: boolean;
}) {
  const items = limit ? publishedWorks.slice(0, limit) : publishedWorks;
  if (items.length === 0) return null;

  return (
    <section id="radovi" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      {heading ? (
        <div className="max-w-2xl">
          <h2 className="font-medium text-3xl text-ink tracking-[-0.02em] md:text-4xl">
            Sajtovi koje su napravili polaznici
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Pravi klijenti, pravi sajtovi, plaćen posao. Svaki rad je objavljen uz saglasnost
            polaznika i njegovog klijenta.
          </p>
        </div>
      ) : null}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((work) => (
          <article key={work.slug}>
            <Screenshot
              src={work.image}
              alt={`Sajt za ${work.client}, autor ${work.author}`}
              url={work.url?.replace(/^https?:\/\//, "")}
            />
            <div className="mt-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-ink">{work.client}</h3>
                {work.url ? (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex shrink-0 items-center gap-1 text-muted-foreground text-sm hover:text-ink"
                  >
                    Otvori
                    <ArrowUpRight className="size-3.5" />
                  </a>
                ) : null}
              </div>
              <p className="mt-1 text-muted-foreground text-sm">
                {work.category}
                {work.location ? ` · ${work.location}` : ""}
                {work.duration ? ` · ${work.duration}` : ""}
              </p>
              <p className="mt-2.5 text-muted-foreground text-sm leading-relaxed">{work.brief}</p>
              <p className="mt-3 font-medium text-ink text-sm">Autor: {work.author}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
