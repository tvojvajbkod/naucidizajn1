import { VideoWall } from "@/components/video-wall";
import { links, stats } from "@/lib/brand";
import { type Testimonial, testimonials } from "@/lib/testimonials";
import { ArrowUpRight, Star } from "lucide-react";

function Quote({ item }: { item: Testimonial }) {
  return (
    <figure className="break-inside-avoid rounded-2xl border bg-card p-6">
      {item.quote ? (
        <blockquote className="text-ink leading-relaxed">„{item.quote}"</blockquote>
      ) : (
        <div className="flex gap-0.5" aria-label="Ocena 5 od 5">
          {[0, 1, 2, 3, 4].map((index) => (
            <Star key={index} className="size-4 fill-primary text-primary" />
          ))}
        </div>
      )}
      <figcaption className="mt-4 border-border/70 border-t pt-4">
        <span className="block font-semibold text-ink text-sm">{item.name}</span>
        {item.role ? (
          <span className="block text-muted-foreground text-sm">{item.role}</span>
        ) : null}
        {item.retention ? (
          <span className="mt-1.5 inline-block rounded bg-accent px-2.5 py-0.5 text-ink text-xs">
            {item.retention}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}

export function ProofSection({ limit }: { limit?: number }) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;

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

        <h3 className="mt-16 font-medium text-ink text-xl tracking-[-0.02em]">Napisali su</h3>

        <div className="mt-6 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5">
          {items.map((item) => (
            <Quote key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
