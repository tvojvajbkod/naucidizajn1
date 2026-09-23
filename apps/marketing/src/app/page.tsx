import { JsonLd, faqJsonLd } from "@/components/json-ld";
import { CaseStudyTeaserSection } from "@/components/sections/case-study-teaser";
import { CtaSection } from "@/components/sections/cta";
import { FAQSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { LimeBandSection } from "@/components/sections/lime-band";
import { MembershipOfferSection } from "@/components/sections/membership-offer";
import { MentorsSection } from "@/components/sections/mentors";
import { ProofSection } from "@/components/sections/proof";
import { StatBandSection } from "@/components/sections/stat-band";
import { TimelineSection } from "@/components/sections/timeline";
import { TurningPointSection } from "@/components/sections/turning-point";
import { WhatsIncludedSection } from "@/components/sections/whats-included";
import { WorksWallSection } from "@/components/sections/works-wall";
import { membershipFaq } from "@/lib/faq";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Nauči Dizajn — AI dizajnira, ti zarađuješ",
  description:
    "Za 30 dana naučiš da praviš sajtove pomoću veštačke inteligencije i dođeš do prvog plaćenog klijenta. Mesečno članstvo, bez predznanja i bez kodiranja. Na srpskom.",
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TurningPointSection />
      <StatBandSection />
      <WhatsIncludedSection />
      <TimelineSection />
      <LimeBandSection />
      <WorksWallSection limit={3} />
      <CaseStudyTeaserSection />
      <ProofSection limit={6} />
      <MentorsSection />
      <MembershipOfferSection />
      <FAQSection />
      <CtaSection />
      <JsonLd data={faqJsonLd(membershipFaq)} />
    </main>
  );
}
