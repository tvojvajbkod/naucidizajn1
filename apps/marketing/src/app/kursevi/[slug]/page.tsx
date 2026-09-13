import { JsonLd, courseJsonLd, faqJsonLd } from "@/components/json-ld";
import { CtaSection } from "@/components/sections/cta";
import { FAQSection } from "@/components/sections/faq";
import { PathsSection } from "@/components/sections/paths";
import { courses, getCourse } from "@/lib/courses";
import { generalFaq } from "@/lib/faq";
import { buildMetadata } from "@/lib/seo";
import { Check } from "lucide-react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return buildMetadata({
    title: `${course.title} kurs`,
    description: course.outcome,
    path: `/kursevi/${course.slug}`,
  });
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <main>
      <section className="border-b bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="font-medium text-muted-foreground text-sm">Kurs</p>
          <h1 className="mt-3 max-w-3xl font-medium text-4xl text-ink leading-tight tracking-[-0.02em] md:text-5xl">
            {course.title}
          </h1>
          {/* AEO: prvi pasus direktno odgovara na „šta ću moći posle ovoga". */}
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {course.outcome}
          </p>

          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <dt className="text-muted-foreground text-sm">Obim</dt>
              <dd className="mt-1 font-semibold text-ink">{course.episodes}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground text-sm">Trajanje</dt>
              <dd className="mt-1 font-semibold text-ink">{course.hours}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground text-sm">Alat</dt>
              <dd className="mt-1 font-semibold text-ink">{course.tool}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground text-sm">Cena</dt>
              <dd className="mt-1 font-semibold text-ink">od 99 €</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr] md:py-20">
        <div>
          <h2 className="font-medium text-2xl text-ink tracking-[-0.02em] md:text-3xl">Šta učiš</h2>
          <ul className="mt-7 space-y-4">
            {course.curriculum.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-1 size-4 shrink-0 text-ink" />
                <span className="text-ink/85 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="h-fit rounded-2xl border bg-card p-7">
          <h2 className="font-semibold text-ink text-lg">Za koga je</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">{course.audience}</p>
          <p className="mt-6 border-border/70 border-t pt-6 text-muted-foreground text-sm leading-relaxed">
            Starter paket nosi pristup od tri meseca; paketi sa mentorstvom nose doživotan pristup.
            Na svim paketima važi garancija povraćaja novca u roku od 14 dana.
          </p>
          <a
            href="/cene"
            className="mt-6 inline-flex w-full items-center justify-center rounded bg-ink px-6 py-3 font-semibold text-background transition-colors hover:bg-ink/85"
          >
            Pogledaj pakete i cene
          </a>
        </aside>
      </section>

      <FAQSection
        items={generalFaq}
        title="Česta pitanja"
        description="Oprema, plaćanje, pristup i garancija."
      />
      <PathsSection />
      <CtaSection />

      <JsonLd data={faqJsonLd(generalFaq)} />
      <JsonLd
        data={courseJsonLd({
          name: `${course.title} kurs`,
          description: course.outcome,
          path: `/kursevi/${course.slug}`,
        })}
      />
    </main>
  );
}
