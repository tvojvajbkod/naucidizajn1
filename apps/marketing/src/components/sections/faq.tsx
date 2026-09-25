import type { FaqItem } from "@/lib/faq";
import { membershipFaq } from "@/lib/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@repo/ui";

/**
 * FAQ accordion. Pitanja žive u src/lib/faq.ts da bi isti niz mogao da hrani
 * i faqJsonLd() — FAQ schema je najjači AEO signal.
 *
 * Podloga je krem, a ne bela: FAQ svuda stoji između ponude i završnog CTA-a,
 * pa bi na beloj podlozi nastao niz od tri bele sekcije zaredom. Ne vraćaj na
 * belo bez provere ritma cele stranice.
 */
export function FAQSection({
  items = membershipFaq,
  title = "Pitanja koja ljudi zaista postavljaju",
  description = "Bez uvijanja. Ako nešto ovde ne piše, piši nam i dopunićemo.",
}: {
  items?: FaqItem[];
  title?: string;
  description?: string;
}) {
  return (
    <section id="pitanja" className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-medium text-3xl text-ink tracking-[-0.02em] md:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-ink/65">{description}</p>

        <Accordion type="single" collapsible className="mt-10 w-full">
          {items.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="text-left font-semibold text-base text-ink">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-ink/70 leading-relaxed">
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
