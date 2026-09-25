import { StudentPhoto } from "@/components/student-photo";
import { VideoWall } from "@/components/video-wall";
import { links, stats } from "@/lib/brand";
import { type Testimonial, testimonials } from "@/lib/testimonials";
import { ArrowUpRight, BadgeCheck, Star } from "lucide-react";

/**
 * Kartica utiska — fotografija, ime, citat, pa oznaka izvora na dnu.
 *
 * Raspored je preuzet iz obrasca koji se pokazao najuverljivijim na sajtovima
 * sa pretplatom: red jednakih kartica, lice na vrhu, a ispod citata sitna
 * oznaka koja kaže ODAKLE je utisak. Ta oznaka je ovde poenta, ne ukras —
 * kaže se tačno gde se tvrdnja može proveriti.
 *
 * Oznaka nikad ne sme da tvrdi više nego što znamo. „Recenzija na Skool-u"
 * stoji samo uz utiske koji tamo zaista stoje javno.
 */
function StudentCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border bg-card p-6">
      {/* Slika je centrirana, tekst poravnat levo — duži citat centriran postaje
          nazubljen i teže se čita. */}
      <div className="flex justify-center">
        <StudentPhoto item={item} />
      </div>

      <figcaption className="mt-5">
        <span className="block font-semibold text-ink">{item.name}</span>
        {item.role ? (
          <span className="mt-0.5 block text-muted-foreground text-xs leading-relaxed">
            {item.role}
          </span>
        ) : null}
      </figcaption>

      <blockquote className="mt-4 flex-1 text-ink/80 text-sm leading-relaxed">
        „{item.quote}“
      </blockquote>

      {item.retention ? (
        <span className="mt-5 w-fit rounded bg-accent px-2.5 py-1 text-ink text-xs">
          {item.retention}
        </span>
      ) : null}

      <p className="mt-5 flex items-center gap-1.5 border-border/70 border-t pt-4 text-muted-foreground text-xs">
        <BadgeCheck className="size-3.5 shrink-0 text-ink" aria-hidden="true" />
        {item.source === "Skool" ? "Recenzija na Skool-u" : "Utisak sa sajta škole"}
      </p>
    </figure>
  );
}

/** Ocene bez napisanog teksta — kratke, u jednom redu, da ne prave buku. */
function RatingChip({ item }: { item: Testimonial }) {
  return (
    <li className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3">
      <span className="flex gap-0.5" aria-label="Ocena 5 od 5">
        {[0, 1, 2, 3, 4].map((index) => (
          <Star key={index} className="size-3.5 fill-primary text-primary" />
        ))}
      </span>
      <span className="min-w-0">
        <span className="block truncate font-medium text-ink text-sm">{item.name}</span>
        {item.retention ? (
          <span className="block truncate text-muted-foreground text-xs">{item.retention}</span>
        ) : null}
      </span>
    </li>
  );
}

export function ProofSection({ limit }: { limit?: number }) {
  const written = testimonials.filter((item) => item.quote);
  const rated = testimonials.filter((item) => !item.quote);
  const shownRatings = limit ? rated.slice(0, limit) : rated;

  return (
    <section id="utisci" className="bg-muted/50 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-medium text-3xl text-ink tracking-[-0.02em] md:text-4xl">
            Šta kažu ljudi koji plaćaju
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ocena zajednice je {stats.skoolRating} na {stats.skoolReviews} recenzija. Uz svaku stoji
            i koliko dugo je taj čovek i dalje član — zadovoljstvo se lako izjavi, zadržavanje se
            plaća svakog meseca.
          </p>
          {/* Sve što stoji na ovom sajtu o nama pišemo mi. Zato ide link na
              izvor koji ne uređujemo — jedini način da tvrdnja bude proverljiva. */}
          <a
            href={links.skool}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-flex items-center gap-1.5 font-medium text-ink text-sm underline underline-offset-4"
          >
            Sve recenzije stoje javno na Skool-u — proveri sam
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <VideoWall />

        <h3 className="mt-16 font-medium text-2xl text-ink tracking-[-0.02em] md:text-3xl">
          Šta naši studenti kažu o nama
        </h3>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {written.map((item) => (
            <StudentCard key={item.name} item={item} />
          ))}
        </div>

        <p className="mt-5 text-muted-foreground text-sm leading-relaxed">
          Fotografije stoje prazne dok polaznik ne da saglasnost da se njegovo lice objavi. Lice sa
          stocka uz pravi citat bilo bi gore nego prazan krug.
        </p>

        {shownRatings.length ? (
          <>
            <h4 className="mt-12 font-semibold text-ink text-sm uppercase tracking-wide">
              Ocenili su sa 5 / 5
            </h4>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {shownRatings.map((item) => (
                <RatingChip key={item.name} item={item} />
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </section>
  );
}
