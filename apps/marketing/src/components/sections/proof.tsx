import { Accent } from "@/components/accent";
import { TestimonialPhone } from "@/components/testimonial-phone";
import { VideoWall } from "@/components/video-wall";
import { links, stats } from "@/lib/brand";
import { type Testimonial, testimonials } from "@/lib/testimonials";
import { ArrowUpRight, Star } from "lucide-react";

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
        <span className="block truncate font-medium text-foreground text-sm">{item.name}</span>
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
    <section id="utisci" className="scroll-mt-20 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-medium text-3xl text-foreground tracking-[-0.02em] md:text-4xl">
            Šta kažu <Accent>naši studenti</Accent>
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
            className="mt-4 inline-flex items-center gap-1.5 font-medium text-foreground text-sm underline underline-offset-4"
          >
            Sve recenzije stoje javno na Skool-u — proveri sam
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <VideoWall />

        {/* Bez međunaslova (odluka 27.09.): naslov sekcije već kaže da su ovo
            utisci studenata, pa bi „Šta naši studenti kažu o nama" bila ista
            rečenica dva puta. Mehurići idu odmah ispod video trake. */}
        <div className="mt-16">
          <TestimonialPhone items={written} />
        </div>

        <p className="mt-5 text-muted-foreground text-sm leading-relaxed">
          Fotografije stoje prazne dok polaznik ne da saglasnost da se njegovo lice objavi. Lice sa
          stocka uz pravi citat bilo bi gore nego prazan krug.
        </p>

        {shownRatings.length ? (
          <>
            <h4 className="mt-12 font-semibold text-foreground text-sm uppercase tracking-wide">
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
