import { JsonLd, faqJsonLd } from "@/components/json-ld";
import { CoursesGrid } from "@/components/sections/courses-grid";
import { CtaSection } from "@/components/sections/cta";
import { FAQSection } from "@/components/sections/faq";
import { PathsSection } from "@/components/sections/paths";
import { generalFaq } from "@/lib/faq";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kursevi",
  description:
    "Šest snimljenih kurseva na srpskom: web dizajn, UI UX, Webflow, logo dizajn, motion dizajn i lični brend. Učiš svojim tempom, uz projekte za portfolio.",
  path: "/kursevi",
});

export default function KurseviPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-4 md:pt-20">
        <h1 className="max-w-3xl font-medium text-4xl text-ink leading-tight tracking-[-0.02em] md:text-5xl">
          Izaberi veštinu koju hoćeš da savladaš
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Snimljeni kursevi, plaćaju se jednom i gledaju svojim tempom. Uz svaki ide niz projekata —
          jer posao dobija portfolio, ne sertifikat. Ako ti je cilj prva zarada, a ne zanat,
          pogledaj{" "}
          <a href="/ai-web-dizajner" className="font-medium text-ink underline underline-offset-4">
            AI članstvo
          </a>
          .
        </p>
      </section>

      <CoursesGrid heading={false} />
      <FAQSection
        items={generalFaq}
        title="Česta pitanja o kursevima"
        description="Uslovi pristupa, plaćanje na rate i garancija — na jednom mestu."
      />
      <PathsSection />
      <CtaSection />
      <JsonLd data={faqJsonLd(generalFaq)} />
    </main>
  );
}
