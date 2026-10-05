import { StudentPhoto } from "@/components/student-photo";
import { stats } from "@/lib/brand";
import type { Testimonial } from "@/lib/testimonials";
import { BadgeCheck, Star } from "lucide-react";

/**
 * Utisci kao mehurići oko telefona — bez ruke, samo uređaj i ocene.
 *
 * Zamena za red kartica: isti podaci (ime, citat, izvor), samo u formi koja
 * liči na ilustracije „evo kako izgledaju recenzije" — telefon u sredini sa
 * ukupnom ocenom, utisci kao mehurići koji se kaskadno ređaju pored njega.
 * Prikazuju se najviše četiri utiska sa citatom — toliko ih trenutno i ima;
 * ako ih bude više, raspored ostaje čitljiv jer se dodatni jednostavno ne
 * prikazuju u ovoj ilustraciji (puna lista i dalje postoji ispod, u ocenama
 * bez teksta).
 */
function Bubble({ item, offset }: { item: Testimonial; offset: boolean }) {
  return (
    <figure
      className={`rounded-3xl border bg-card p-5 shadow-lg md:max-w-md ${offset ? "md:ml-14" : ""}`}
    >
      <div className="flex items-center gap-3">
        <div className="shrink-0">
          <StudentPhoto item={item} />
        </div>
        <figcaption className="min-w-0">
          <span className="block truncate font-semibold text-foreground text-sm">
            {item.name}
          </span>
          {item.role ? (
            <span className="block truncate text-muted-foreground text-xs">{item.role}</span>
          ) : null}
        </figcaption>
      </div>

      <div className="mt-3 flex gap-0.5" aria-label="Ocena 5 od 5">
        {[0, 1, 2, 3, 4].map((index) => (
          <Star key={index} className="size-3.5 fill-primary text-primary" />
        ))}
      </div>

      <blockquote className="mt-3 text-foreground/80 text-sm leading-relaxed">
        „{item.quote}“
      </blockquote>

      <p className="mt-4 flex items-center gap-1.5 text-muted-foreground text-xs">
        <BadgeCheck className="size-3.5 shrink-0 text-foreground" aria-hidden="true" />
        {item.source === "Skool" ? "Recenzija na Skool-u" : "Utisak sa sajta škole"}
      </p>
    </figure>
  );
}

export function TestimonialPhone({ items }: { items: Testimonial[] }) {
  const shown = items.slice(0, 4);

  return (
    <div className="grid gap-10 md:grid-cols-[260px_1fr] md:items-center md:gap-8">
      <div className="relative mx-auto w-48 shrink-0 md:w-full md:max-w-[220px]">
        <div className="relative aspect-[9/19] rounded-[2.75rem] border-[6px] border-foreground/15 bg-[linear-gradient(180deg,#18181c_0%,#101014_100%)] p-3 shadow-2xl">
          <div className="absolute top-3 left-1/2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-foreground/20" />
          <div className="flex h-full flex-col items-center justify-center gap-3 rounded-[2rem] bg-background/40">
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((index) => (
                <Star key={index} className="size-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="font-semibold text-3xl text-foreground">{stats.skoolRating}</p>
            <p className="text-muted-foreground text-xs">{stats.skoolReviews} recenzija</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {shown.map((item, index) => (
          <Bubble key={item.name} item={item} offset={index % 2 === 1} />
        ))}
      </div>
    </div>
  );
}
