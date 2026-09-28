import type { FaqItem } from "@/lib/faq";
import { membershipFaq } from "@/lib/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@repo/ui";

/**
 * FAQ accordion. Pitanja žive u src/lib/faq.ts da bi isti niz mogao da hrani
 * i faqJsonLd() — FAQ schema je najjači AEO signal.
 *
 * `surface` postoji zbog pravila da dve susedne sekcije ne smeju da izgledaju
 * isto. FAQ svuda stoji između ponude i završnog CTA-a, a šta je iznad njega
 * razlikuje se od stranice do stranice — zato podloga nije ugrađena nego se
 * bira na mestu upotrebe. Ne menjaj je bez provere ritma cele stranice.
 */
export function FAQSection({
  items = membershipFaq,
  title = "Pitanja koja ljudi zaista postavljaju",
  description = "Bez uvijanja. Ako nešto ovde ne piše, piši nam i dopunićemo.",
  surface = "plain",
}: {
  items?: FaqItem[];
  title?: string;
  description?: string;
  surface?: "plain" | "panel";
}) {
  return (
    <section id="pitanja" className={`py-20 md:py-24 ${surface === "panel" ? "bg-panel" : ""}`}>
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-medium text-3xl text-foreground tracking-[-0.02em] md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-foreground/65">{description}</p>

        <Accordion type="single" collapsible className="mt-10 w-full">
          {items.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="text-left font-semibold text-base text-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/70 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/** Zadržano zbog starijih importa. */
export const faqItems = membershipFaq;
