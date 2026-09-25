import { JsonLd, courseJsonLd, faqJsonLd } from "@/components/json-ld";
import { CaseStudyTeaserSection } from "@/components/sections/case-study-teaser";
import { CtaSection } from "@/components/sections/cta";
import { FAQSection } from "@/components/sections/faq";
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

const forYou = [
  "Krećeš iz nule i hoćeš veštinu koja se brzo pretvara u novac",
  "Već dizajniraš, ali gubiš dane na izradu umesto na klijente",
  "Imaš firmu i hoćeš sam da rešiš sajt, bez agencije",
  "Imaš dva do tri sata dnevno i hoćeš da ih trošiš na rad, ne na predavanja",
];

const notForYou = [
  "Tražiš diplomu ili formalno obrazovanje",
  "Očekuješ zagarantovanu zaradu bez javljanja klijentima",
  "Nemaš vremena da radiš van snimaka",
  "Hoćeš da naučiš kodiranje — ovo je program o dizajnu i prodaji",
];

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

      {/* Siva podloga: iznad je maslinasta, ispod bela sa krem panelom. */}
      <section className="bg-muted/50 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="max-w-2xl font-medium text-3xl text-ink tracking-[-0.02em] md:text-4xl">
            Da li je ovo za tebe
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Radije ćemo da odustaneš sada nego da tražiš povraćaj novca za mesec dana.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border bg-card p-7">
              <h3 className="font-semibold text-ink text-lg">Jeste, ako</h3>
              <ul className="mt-5 space-y-3.5">
                {forYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-ink" />
                    <span className="text-ink/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Podloga sekcije je siva, pa ova kartica ide na belo — inače nestane. */}
            <div className="rounded-2xl border border-dashed bg-background p-7">
              <h3 className="font-semibold text-ink text-lg">Nije, ako</h3>
              <ul className="mt-5 space-y-3.5">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

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
