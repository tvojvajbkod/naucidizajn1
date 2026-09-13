import { caseStudies } from "@/lib/case-studies";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * Most između obećanja i dokaza: umesto „veruj nam", posetilac može da otvori
 * ceo postupak i sam proceni da li mu je jasan. Najjači deo su doslovni
 * promptovi i poruke — to niko ne stavlja na sajt, a baš to ljudi žele da vide.
 */
export function CaseStudyTeaserSection() {
  const study = caseStudies[0];
  if (!study) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="overflow-hidden rounded-3xl bg-cream">
        <div className="grid items-center gap-10 p-8 md:grid-cols-[1.2fr_1fr] md:p-14">
          <div>
            <p className="font-medium text-ink/60 text-sm">Bez uvijanja</p>
            <h2 className="mt-3 font-medium text-3xl text-ink tracking-[-0.02em] md:text-4xl">
              Pogledaj ceo posao pre nego što platiš išta
            </h2>
            <p className="mt-4 text-ink/70 text-lg leading-relaxed">
              Raspakovali smo jedan projekat od prve poruke klijentu do naplate — sa doslovnim
              promptovima koje kucaš, porukom koja dobija odgovor i računicom kako se dolazi do
              cene. Ako ti posle ovoga nije jasno šta radiš, nemoj da se upisuješ.
            </p>
            <Link
              href={`/studije-slucaja/${study.slug}`}
              className="mt-8 inline-flex items-center gap-2 rounded bg-ink px-7 py-3.5 font-semibold text-background transition-colors hover:bg-ink/85"
            >
              Otvori ceo postupak
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <ul className="space-y-3">
            {study.steps.slice(0, 5).map((step) => (
              <li
                key={step.label}
                className="flex items-baseline gap-4 border-ink/10 border-b pb-3 last:border-0"
              >
                <span className="shrink-0 font-semibold text-ink/45 text-sm">{step.label}</span>
                <span className="font-medium text-ink">{step.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
