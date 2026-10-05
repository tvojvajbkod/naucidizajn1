import { stats } from "@/lib/brand";
import type { Testimonial } from "@/lib/testimonials";
import { Heart, Star, UserRound } from "lucide-react";

/**
 * Utisci kao obojeni mehurići oko telefona — bez ruke, samo uređaj i ocene.
 *
 * Oblik i boje su namerno preuzeti iz referentne ilustracije koju je klijent
 * poslao (plavi/roze/zeleni mehurić, profil ikonica, zvezdice, srce), ne
 * izmišljeni — jedina razlika je tekst utiska ispod zvezdica, jer bez njega
 * mehurić ne dokazuje ništa. Repić mehurića je spljošten ugao
 * (`rounded-bl-md`), isti trik kao kod chat mehurića u `community-help.tsx`.
 *
 * Prikazuju se najviše četiri utiska sa citatom — toliko ih trenutno i ima.
 */
const COLORS = [
  { bg: "bg-sky-500", icon: "bg-sky-400/40" },
  { bg: "bg-pink-500", icon: "bg-pink-400/40" },
  { bg: "bg-emerald-500", icon: "bg-emerald-400/40" },
];

function Bubble({ item, color, offset }: { item: Testimonial; color: (typeof COLORS)[number]; offset: boolean }) {
  return (
    <figure
      className={`relative rounded-3xl rounded-bl-md p-5 text-white shadow-xl md:max-w-md ${color.bg} ${offset ? "md:ml-14" : ""}`}
    >
      <div className="flex items-center gap-2.5">
        <div className={`flex size-9 shrink-0 items-center justify-center rounded-full ${color.icon}`}>
          <UserRound className="size-4.5 text-white" aria-hidden="true" />
        </div>
        <figcaption className="min-w-0 flex-1">
          <span className="block truncate font-semibold text-sm">{item.name}</span>
          {item.role ? (
            <span className="block truncate text-white/75 text-xs">{item.role}</span>
          ) : null}
        </figcaption>
        <Heart className="size-4.5 shrink-0 fill-white text-white" aria-hidden="true" />
      </div>

      <div className="mt-3 flex gap-0.5" aria-label="Ocena 5 od 5">
        {[0, 1, 2, 3, 4].map((index) => (
          <Star key={index} className="size-3.5 fill-white text-white" />
        ))}
      </div>

      <blockquote className="mt-3 text-sm text-white/90 leading-relaxed">
        „{item.quote}“
      </blockquote>
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
          <Bubble
            key={item.name}
            item={item}
            color={COLORS[index % COLORS.length] as (typeof COLORS)[number]}
            offset={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}
