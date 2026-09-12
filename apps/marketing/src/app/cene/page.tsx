import { JsonLd, faqJsonLd } from "@/components/json-ld";
import { ComparisonSection } from "@/components/sections/comparison";
import { CtaSection } from "@/components/sections/cta";
import { FAQSection } from "@/components/sections/faq";
import { PricingSection } from "@/components/sections/pricing";
import { generalFaq, membershipFaq } from "@/lib/faq";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cene",
  description:
    "Sve cene Nauči Dizajna na jednom mestu: AI članstvo od 99 dolara mesečno, kursevi od 99 evra jednokratno i mentorstvo 1-1 od 200 evra mesečno.",
  path: "/cene",
});

const pricingFaq = [...membershipFaq.slice(0, 3), ...generalFaq.slice(0, 4)];

export default function CenePage() {
  return (
    <main>
      <PricingSection />
      <ComparisonSection />
      <FAQSection
        items={pricingFaq}
        title="Pitanja o plaćanju"
        description="Rate, otkazivanje, garancija i pristup materijalima."
      />
      <CtaSection />
      <JsonLd data={faqJsonLd(pricingFaq)} />
    </main>
  );
}
