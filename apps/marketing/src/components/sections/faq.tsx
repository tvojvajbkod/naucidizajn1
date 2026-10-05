import { Accent } from "@/components/accent";
import type { FaqItem } from "@/lib/faq";
import { membershipFaq } from "@/lib/faq";
import type { ReactNode } from "react";

/**
 * FAQ. Pitanja žive u src/lib/faq.ts da bi isti niz mogao da hrani i
 * faqJsonLd() — FAQ schema je najjači AEO signal.
 *
 * `surface` postoji zbog pravila da dve susedne sekcije ne smeju da izgledaju
 * isto. FAQ svuda stoji između ponude i završnog CTA-a, a šta je iznad njega
 * razlikuje se od stranice do stranice — zato podloga nije ugrađena nego se
 * bira na mestu upotrebe. Ne menjaj je bez provere ritma cele stranice.
 *
 * Otvaranje je na prelazak mišem preko pitanja (odluka klijenta), ne na klik
 * sa strelicom — zato nema Accordion komponente ni chevron ikonice. Odgovor
 * se otvara čistim CSS-om (`grid-template-rows` 0fr → 1fr), a `tabIndex` +
 * `group-focus` drže isto ponašanje na tastaturi i na dodir, gde hover ne
 * postoji.
 */
export function FAQSection({
  items = membershipFaq,
  title = (
    <>
      Pitanja koja ljudi <Accent>zaista</Accent> postavljaju
    </>
  ),
  description = "Bez uvijanja. Ako nešto ovde ne piše, piši nam i dopunićemo.",
  surface = "plain",
}: {
  items?: FaqItem[];
  /** Prima i tekst i JSX, jer podrazumevani naslov ima naglašenu reč. */
  title?: ReactNode;
  description?: string;
  surface?: "plain" | "panel";
}) {
  return (
    <section
      id="pitanja"
      className={`scroll-mt-20 py-20 md:py-24 ${surface === "panel" ? "bg-panel" : ""}`}
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-medium text-3xl text-foreground tracking-[-0.02em] md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-foreground/65">{description}</p>

        <div className="mt-10 w-full divide-y divide-border">
          {items.map((item) => (
            <div key={item.question} tabIndex={0} className="group py-5 outline-none">
              <p className="font-semibold text-base text-foreground">{item.question}</p>
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-focus:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <p className="pt-3 text-base text-foreground/70 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Zadržano zbog starijih importa. */
export const faqItems = membershipFaq;
