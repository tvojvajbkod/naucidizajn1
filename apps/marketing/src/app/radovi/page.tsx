import { Accent } from "@/components/accent";
import { PageImage } from "@/components/page-image";
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
      <section className="border-b bg-panel">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h1 className="max-w-3xl font-medium text-4xl text-foreground leading-tight tracking-[-0.02em] md:text-5xl">
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
          <div className="overflow-hidden rounded-2xl border bg-card">
            {/* Tekst levo, slika desno. Dve kolone tek od `md` — na telefonu
                slika ide ispod teksta, jer objašnjenje zašto je strana prazna
                mora da se pročita pre nego što se vidi ukras. */}
            <div className="grid items-center gap-10 p-8 md:grid-cols-[1.1fr_1fr] md:p-10">
              <div>
                <h2 className="font-medium text-2xl text-foreground tracking-[-0.02em]">
                  <Accent>Prvi radovi</Accent> se pripremaju
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Sajtove polaznika objavljujemo tek kad dobijemo dozvolu i od polaznika i od
                  njegovog klijenta — klijent je vlasnik svog brenda i ne objavljujemo ga bez
                  pitanja. Dok prikupljamo te saglasnosti, ovde nema ničega, i to je namerno: praznu
                  stranicu je lakše objasniti nego tuđi rad predstavljen kao svoj.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  U međuvremenu možeš da vidiš kako ceo posao izgleda iznutra — sa promptovima,
                  porukom klijentu i računicom cene.
                </p>
                <Link
                  href="/studije-slucaja/anatomija-projekta"
                  className="mt-8 inline-flex items-center gap-2 rounded bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-glow"
                >
                  Pogledaj kako izgleda jedan projekat
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <PageImage />
            </div>
          </div>
        )}
      </section>

      <CtaSection surface="cream" />
    </main>
  );
}
