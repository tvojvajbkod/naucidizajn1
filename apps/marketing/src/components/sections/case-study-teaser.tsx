import { Accent } from "@/components/accent";
import HowItWorks from "@/components/ui/how-it-works";
import { caseStudies } from "@/lib/case-studies";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * Most između obećanja i dokaza: umesto „veruj nam", posetilac može da otvori
 * ceo postupak i sam proceni da li mu je jasan. Najjači deo su doslovni
 * promptovi i poruke — to niko ne stavlja na sajt, a baš to ljudi žele da vide.
 *
 * Raspored je izmenjen 28.09.: koraci su bili uska kolona desno od teksta i
 * čitali su se kao spisak linkova. Sada stoje preko cele širine, kao tok sa
 * brojevima na liniji (`HowItWorks`) — redosled se vidi pre nego što se
 * pročita ijedna reč, a to je jedino što ova sekcija treba da prenese.
 *
 * Prikazuje se pet od sedam koraka. Nije skraćivanje zbog prostora nego zbog
 * razloga da se klikne: poslednja dva koraka su cena i naplata, ono zbog čega
 * ljudi i otvaraju ovakav tekst.
 */
export function CaseStudyTeaserSection() {
  const study = caseStudies[0];
  if (!study) return null;

  return (
    <section className="bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="overflow-hidden rounded-3xl border bg-card p-8 md:p-14">
          <div className="max-w-3xl">
            <p className="font-medium text-foreground/60 text-sm">Bez uvijanja</p>
            <h2 className="mt-3 font-medium text-3xl text-foreground tracking-[-0.02em] md:text-4xl">
              Pogledaj <Accent>celi postupak</Accent> pre nego što doneseš odluku
            </h2>
            <p className="mt-4 text-foreground/70 text-lg leading-relaxed">
              Raspakovali smo jedan projekat od prve poruke klijentu do naplate — sa doslovnim
              promptovima koje kucaš, porukom koja dobija odgovor i računicom kako se dolazi do
              cene. Ako ti posle ovoga nije jasno šta radiš, nemoj da se upisuješ.
            </p>
          </div>

          <HowItWorks steps={study.steps.slice(0, 5)} className="mt-12" />

          <div className="mt-12 flex flex-col gap-4 border-border border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-foreground/60 text-sm">
              Ostaju još dva koraka: kako se dolazi do cene i kako se naplaćuje.
            </p>
            <Link
              href={`/studije-slucaja/${study.slug}`}
              className="inline-flex w-fit items-center gap-2 rounded bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-glow"
            >
              Otvori ceo postupak
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
