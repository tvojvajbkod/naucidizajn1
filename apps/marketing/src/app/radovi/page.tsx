import { CtaSection } from "@/components/sections/cta";
import { WorksGallery } from "@/components/sections/works-gallery";
import { buildMetadata } from "@/lib/seo";
import { publishedWorks } from "@/lib/works";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Radovi polaznika",
  description:
    "Sajtovi koje su polaznici Nauči Dizajna napravili za prave klijente — objavljeni uz saglasnost polaznika i klijenta.",
  path: "/radovi",
});

export default function RadoviPage() {
  const hasWorks = publishedWorks.length > 0;

  return (
    <main>
      <section className="border-b bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h1 className="max-w-3xl font-bold text-4xl text-ink leading-tight tracking-tight md:text-5xl">
            Radovi polaznika
          </h1>
          {/* AEO: prvi pasus direktno odgovara na pitanje „šta ovde vidim". */}
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Sajtovi koje su polaznici napravili za prave klijente — ne vežbe iz kursa nego plaćen
            posao. Svaki rad stoji ovde uz saglasnost i polaznika i njegovog klijenta, sa imenom
            autora.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        {hasWorks ? (
          <WorksGallery />
        ) : (
          <div className="max-w-2xl rounded-2xl border bg-card p-8 md:p-10">
            <h2 className="font-bold text-2xl text-ink tracking-tight">
              Prvi radovi se pripremaju
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Sajtove polaznika objavljujemo tek kad dobijemo dozvolu i od polaznika i od njegovog
              klijenta — klijent je vlasnik svog brenda i ne objavljujemo ga bez pitanja. Dok
              prikupljamo te saglasnosti, ovde nema ničega, i to je namerno: praznu stranicu je
              lakše objasniti nego tuđi rad predstavljen kao svoj.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              U međuvremenu možeš da vidiš kako ceo posao izgleda iznutra — sa promptovima, porukom
              klijentu i računicom cene.
            </p>
            <Link
              href="/studije-slucaja/anatomija-projekta"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-semibold text-background transition-colors hover:bg-ink/85"
            >
              Pogledaj kako izgleda jedan projekat
              <ArrowRight className="size-4" />
            </Link>
          </div>
        )}
      </section>

      <CtaSection />
    </main>
  );
}
