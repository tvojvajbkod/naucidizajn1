"use client";

import { Screenshot } from "@/components/screenshot";
import { publishedWorks, workCategories } from "@/lib/works";
import { cn } from "@repo/ui";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const ALL = "Sve";

/** Galerija radova sa filterom po delatnosti. Koristi je /radovi. */
export function WorksGallery() {
  const [active, setActive] = useState(ALL);

  const items =
    active === ALL ? publishedWorks : publishedWorks.filter((work) => work.category === active);

  if (publishedWorks.length === 0) return null;

  return (
    <div>
      {workCategories.length > 1 ? (
        <div className="flex flex-wrap gap-2">
          {[ALL, ...workCategories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full border px-4 py-2 font-medium text-sm transition-colors",
                active === category
                  ? "border-ink bg-ink text-background"
                  : "text-ink/70 hover:bg-muted",
              )}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((work) => (
          <article key={work.slug}>
            <Screenshot
              src={work.image}
              alt={`Sajt za ${work.client}, autor ${work.author}`}
              url={work.url?.replace(/^https?:\/\//, "")}
            />
            <div className="mt-4">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-semibold text-ink">{work.client}</h2>
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
    </div>
  );
}
