import { CaseSteps } from "@/components/case-steps";
import { JsonLd, caseStudyJsonLd } from "@/components/json-ld";
import { Screenshot } from "@/components/screenshot";
import { CtaSection } from "@/components/sections/cta";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { buildMetadata } from "@/lib/seo";
import { ArrowLeft, ArrowUpRight, Check, FlaskConical } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return buildMetadata({
    title: study.title,
    description: study.summary,
    path: `/studije-slucaja/${study.slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <main>
      <section className="border-b bg-muted/40">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          {/* Navigacija vodi pravo ovde, pa je ovo jedini put nazad na spisak. */}
          <Link
            href="/studije-slucaja"
            className="mb-7 flex w-fit items-center gap-1.5 text-muted-foreground text-sm hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            Sve studije slučaja
          </Link>

          {study.kind === "demonstracija" ? (
            <span className="inline-flex items-center gap-1.5 rounded bg-ink px-3.5 py-1.5 font-medium text-background text-xs">
              <FlaskConical className="size-3" />
              Prikaz metoda na izmišljenom klijentu
            </span>
          ) : null}

          <h1 className="mt-5 font-medium text-4xl text-ink leading-tight tracking-[-0.02em] md:text-5xl">
            {study.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{study.intro}</p>

          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 md:grid-cols-4">
            {study.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-muted-foreground text-sm">{fact.label}</dt>
                <dd className="mt-1 font-semibold text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>

          {study.liveUrl ? (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 inline-flex items-center gap-1.5 font-medium text-ink text-sm hover:underline"
            >
              Otvori sajt uživo
              <ArrowUpRight className="size-4" />
            </a>
          ) : null}
        </div>
      </section>

      {study.cover ? (
        <div className="mx-auto max-w-4xl px-6 pt-12">
          <Screenshot
            src={study.cover.src}
            alt={study.cover.alt}
            caption={study.cover.caption}
            url={study.liveUrl?.replace(/^https?:\/\//, "")}
            priority
          />
        </div>
      ) : null}

      <article className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <CaseSteps steps={study.steps} />

        {/* Uvlačenje prati kolonu koraka — traka napretka zauzima 3,5rem + 3rem razmaka. */}
        <div className="lg:pl-[6.5rem]">
          {study.gallery?.length ? (
            <section className="mt-16">
              <h2 className="font-medium text-2xl text-ink tracking-[-0.02em]">Kako izgleda</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {study.gallery.map((media) => (
                  <Screenshot
                    key={media.src}
                    src={media.src}
                    alt={media.alt}
                    caption={media.caption}
                  />
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-16 rounded-2xl border bg-card p-8">
            <h2 className="font-bold text-ink text-xl">Šta se iz ovoga uči</h2>
            <ul className="mt-6 space-y-3.5">
              {study.takeaways.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-ink" />
                  <span className="text-ink/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {study.kind === "demonstracija" ? (
            <p className="mt-8 text-muted-foreground text-sm leading-relaxed">
              Napomena: klijent iz ovog primera je izmišljen, a iznosi su rasponi koji se sreću na
              tržištu u regionu — nisu obećanje zarade. Koliko ćeš naplatiti zavisi od obima posla,
              klijenta i toga koliko si ubedljiv u razgovoru.
            </p>
          ) : null}
        </div>
      </article>

      <CtaSection surface="cream" />
      <JsonLd
        data={caseStudyJsonLd({
          title: study.title,
          description: study.summary,
          slug: study.slug,
        })}
      />
    </main>
  );
}
