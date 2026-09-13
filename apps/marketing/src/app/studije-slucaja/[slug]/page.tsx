import { JsonLd, caseStudyJsonLd } from "@/components/json-ld";
import { Screenshot } from "@/components/screenshot";
import { CtaSection } from "@/components/sections/cta";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { buildMetadata } from "@/lib/seo";
import { ArrowUpRight, Check, FlaskConical } from "lucide-react";
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
        <ol className="space-y-12">
          {study.steps.map((step) => (
            <li key={step.label}>
              <span className="font-semibold text-muted-foreground text-sm">{step.label}</span>
              <h2 className="mt-1.5 font-medium text-2xl text-ink tracking-[-0.02em]">
                {step.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{step.body}</p>

              {step.snippet ? (
                <div className="mt-6 overflow-hidden rounded-2xl border bg-muted/50">
                  <p className="border-b bg-muted px-5 py-2.5 font-semibold text-ink text-xs uppercase tracking-wide">
                    {step.snippetLabel ?? "Primer"}
                  </p>
                  <pre className="overflow-x-auto whitespace-pre-wrap px-5 py-5 font-sans text-ink/85 text-sm leading-relaxed">
                    <code className="font-sans">{step.snippet}</code>
                  </pre>
                </div>
              ) : null}

              {step.image ? (
                <Screenshot
                  className="mt-6"
                  src={step.image.src}
                  alt={step.image.alt}
                  caption={step.image.caption}
                />
              ) : null}
            </li>
          ))}
        </ol>

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
      </article>

      <CtaSection />
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
