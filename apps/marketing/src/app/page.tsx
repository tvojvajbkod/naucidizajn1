import { JsonLd, courseJsonLd, faqJsonLd } from "@/components/json-ld";
import { CaseStudyTeaserSection } from "@/components/sections/case-study-teaser";
import { ChatDemoSection } from "@/components/sections/chat-demo";
import { CommunityHelpSection } from "@/components/sections/community-help";
import { CtaSection } from "@/components/sections/cta";
import { FAQSection } from "@/components/sections/faq";
import { FitCheckSection } from "@/components/sections/fit-check";
import { HeroSection } from "@/components/sections/hero";
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

/**
 * Početna JE stranica edukacije „Postani AI web dizajner" (odluka 28.09.).
 *
 * Ranije su postojale dve: `/` i `/ai-web-dizajner`. Druga je bila podskup
 * prve plus cena, pa je posetilac kroz meni dobijao dva puta skoro isti
 * sadržaj — različito napisan, pa je delovalo da negde postoji još nešto.
 * Sada postoji jedna strana, a `/ai-web-dizajner` preusmerava na nju (stara
 * adresa je mogla da ode u oglas ili u bio na Instagramu, pa se ne briše).
 *
 * Ako neko bude vraćao zasebnu landing stranu: razlog za to mora da bude
 * DRUGA publika ili druga ponuda, ne „hoćemo još jednu stranicu".
 */
export const metadata = buildMetadata({
  title: "Nauči Dizajn — AI dizajnira, ti zarađuješ",
  description:
    "Za 30 dana naučiš da praviš sajtove pomoću veštačke inteligencije i dođeš do prvog plaćenog klijenta. Kroz četiri meseca dodaješ SEO, AI automatizacije i napredni web dizajn. Mesečno članstvo, bez predznanja i bez kodiranja. Na srpskom.",
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TurningPointSection />
      <StatBandSection />
      <ChatDemoSection />
      <WhatsIncludedSection />
      <TimelineSection />
      <CommunityHelpSection />
      <FitCheckSection />
      <WorksWallSection limit={3} />
      <CaseStudyTeaserSection />
      <ProofSection limit={6} />
      <MentorsSection />
      <MembershipOfferSection />
      {/* FAQ ide na panel podlogu jer su i cena iznad i CTA ispod u osnovnoj. */}
      <FAQSection surface="panel" />
      <CtaSection />
      <JsonLd data={faqJsonLd(membershipFaq)} />
      <JsonLd
        data={courseJsonLd({
          name: "Postani AI web dizajner",
          description:
            "Mesečno članstvo u zajednici Nauči Dizajn. Put od četiri meseca: izrada sajtova uz veštačku inteligenciju i dolazak do klijenata, SEO, AI automatizacije i napredni web dizajn.",
          path: "/",
        })}
      />
    </main>
  );
}
