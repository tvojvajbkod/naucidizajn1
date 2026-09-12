import { CtaSection } from "@/components/sections/cta";
import { caseStudies } from "@/lib/case-studies";
import { buildMetadata } from "@/lib/seo";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Studije slučaja",
  description:
    "Kako izgleda jedan web dizajn projekat od prvog prompta do naplate — sa stvarnim promptovima, porukama klijentu i računicom cene.",
  path: "/studije-slucaja",
});

export default function StudijeSlucajaPage() {
  return (
    <main>
      <section className="border-b bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h1 className="max-w-3xl font-bold text-4xl text-ink leading-tight tracking-tight md:text-5xl">
            Kako posao izgleda kad se raspakuje
          </h1>
          {/* AEO: prvi pasus direktno odgovara na pitanje iz naslova. */}
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Najčešće pitanje pre upisa nije „šta ću naučiti" nego „kako to zaista izgleda". Zato
            ovde ne stoje rezultati nego postupak: koji prompt se kuca, koja poruka se šalje
            klijentu, kako se dolazi do cene i šta ostaje na tebi kada AI odradi svoj deo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/studije-slucaja/${study.slug}`}
              className="group flex flex-col rounded-2xl border bg-card p-7 transition-colors hover:border-ink/30"
            >
              {study.kind === "demonstracija" ? (
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-muted px-3 py-1 font-medium text-muted-foreground text-xs">
                  <FlaskConical className="size-3" />
                  Prikaz metoda
                </span>
              ) : null}
              <div className="mt-4 flex items-start justify-between gap-4">
                <h2 className="font-semibold text-ink text-xl leading-snug">{study.title}</h2>
                <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="mt-3 flex-1 text-muted-foreground leading-relaxed">{study.summary}</p>
            </Link>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-muted-foreground text-sm leading-relaxed">
          Priče polaznika objavljujemo samo uz njihovu saglasnost i sa podacima koje sami potvrde.
          Dok ih nema ovde, nema ih — radije ćemo imati praznu stranicu nego izmišljenu referencu.
        </p>
      </section>

      <CtaSection />
    </main>
  );
}
