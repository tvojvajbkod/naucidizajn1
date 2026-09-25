import { Accent } from "@/components/accent";
import { JsonLd, courseJsonLd, faqJsonLd } from "@/components/json-ld";
import { CaseStudyTeaserSection } from "@/components/sections/case-study-teaser";
import { CtaSection } from "@/components/sections/cta";
import { FAQSection } from "@/components/sections/faq";
import { FitCheckSection } from "@/components/sections/fit-check";
import { MembershipOfferSection } from "@/components/sections/membership-offer";
import { MentorsSection } from "@/components/sections/mentors";
import { ProofSection } from "@/components/sections/proof";
import { StatBandSection } from "@/components/sections/stat-band";
import { TimelineSection } from "@/components/sections/timeline";
import { WhatsIncludedSection } from "@/components/sections/whats-included";
import { WorksWallSection } from "@/components/sections/works-wall";
import { links, membership, stats } from "@/lib/brand";
import { membershipFaq } from "@/lib/faq";
import { buildMetadata } from "@/lib/seo";
import { ArrowRight, Check, X } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Postani AI web dizajner — mesečno članstvo",
  description:
    "Za 30 dana praviš sajtove uz pomoć AI-a i dolaziš do prvog plaćenog klijenta, a kroz četiri meseca dodaješ SEO, AI automatizacije i napredni web dizajn. Bez kodiranja, bez predznanja, na srpskom.",
  path: "/ai-web-dizajner",
});

export default function AiWebDizajnerPage() {
  return (
    <main>
      <section className="bg-ink text-background">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="inline-flex items-center gap-2 rounded border border-background/20 px-4 py-1.5 font-medium text-background/80 text-sm">
            <span className="size-2 rounded-full bg-primary" />
            Jedina edukacija · mesečno članstvo · {stats.skoolMembers} članova
          </p>

          <h1 className="mt-7 max-w-3xl font-medium text-4xl leading-[1.08] tracking-[-0.02em] md:text-6xl">
            Postani AI web dizajner <span className="text-primary">za 30 dana</span>
          </h1>

          <p className="mt-6 max-w-2xl text-background/75 text-lg leading-relaxed">
            Prvi mesec ide na jedno: da uz veštačku inteligenciju napraviš ceo sajt bez kucanja koda
            i dođeš do prvog plaćenog klijenta. Posle toga put ide dalje — SEO, AI automatizacije i
            napredni web dizajn, mesec po mesec, uz nedeljne sastanke uživo. Sve na srpskom.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={links.skool}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded bg-primary px-7 py-3.5 font-semibold text-ink transition-transform hover:scale-[1.02]"
            >
              Pridruži se — {membership.price} mesečno
              <ArrowRight className="size-4" />
            </a>
            <Link
              href="/webinar"
              className="inline-flex items-center justify-center rounded border border-background/25 px-7 py-3.5 font-semibold text-background transition-colors hover:bg-background/10"
            >
              Prvo besplatan webinar
            </Link>
          </div>

          <p className="mt-4 text-background/55 text-sm">
            Ocena zajednice {stats.skoolRating} na {stats.skoolReviews} recenzija · Otkazuješ sam, u
            svakom trenutku
          </p>
        </div>
      </section>

      {/* Krem traka razdvaja dva tamna bloka — hero i „Šta dobijaš" su oba ink. */}
      <StatBandSection />
      <WhatsIncludedSection />
      <TimelineSection />

      <FitCheckSection />

      <WorksWallSection limit={3} />
      <CaseStudyTeaserSection />
      <ProofSection />
      <MentorsSection />
      <MembershipOfferSection />
      <FAQSection />
      <CtaSection />

      <JsonLd data={faqJsonLd(membershipFaq)} />
      <JsonLd
        data={courseJsonLd({
          name: "Postani AI web dizajner",
          description:
            "Mesečno članstvo u zajednici Nauči Dizajn. Put od četiri meseca: izrada sajtova uz veštačku inteligenciju i dolazak do klijenata, SEO, AI automatizacije i napredni web dizajn.",
          path: "/ai-web-dizajner",
        })}
      />
    </main>
  );
}
