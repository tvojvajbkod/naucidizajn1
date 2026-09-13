import { JsonLd, faqJsonLd } from "@/components/json-ld";
import { FAQSection } from "@/components/sections/faq";
import { links, membership, stats } from "@/lib/brand";
import type { FaqItem } from "@/lib/faq";
import { buildMetadata } from "@/lib/seo";
import { ArrowRight, Clock, Video } from "lucide-react";

export const metadata = buildMetadata({
  title: "Besplatan webinar — AI dizajnira, ti zarađuješ",
  description:
    "Besplatan webinar od 45 minuta: zašto je sada najbolji trenutak za web dizajn uz AI i kako izgleda put do prvog plaćenog klijenta.",
  path: "/webinar",
});

const topics = [
  {
    title: "Zašto baš sad",
    body: "Šta se konkretno promenilo u poslednje dve godine i zašto ono za šta je trebalo šest meseci sada traje nekoliko dana.",
  },
  {
    title: "Zlatna era web dizajna",
    body: "Koliko firmi u regionu posluje bez pristojnog sajta i zašto one ne traže agenciju nego pojedinca.",
  },
  {
    title: "Put do prve zarade",
    body: "Kako izgleda redosled koraka do prvog klijenta i gde ljudi najčešće zapnu.",
  },
];

const webinarFaq: FaqItem[] = [
  {
    question: "Da li je webinar zaista besplatan?",
    answer:
      "Jeste, nema naplate ni unosa kartice. Na kraju predstavljamo članstvo, ali webinar ima smisla i ako se ne upišeš.",
  },
  {
    question: "Treba li mi predznanje?",
    answer: "Ne. Webinar je namenjen ljudima koji kreću iz nule.",
  },
  {
    question: "Šta ako ne mogu uživo?",
    answer:
      "Prijavi se svejedno — snimak stiže na mejl. [POTVRDI: da li se snimak zaista šalje svim prijavljenima]",
  },
  {
    question: "Koliko traje?",
    answer: "Četrdeset pet minuta, uz vreme za pitanja na kraju.",
  },
];

export default function WebinarPage() {
  return (
    <main>
      <section className="bg-ink text-background">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="inline-flex items-center gap-2 rounded border border-background/20 px-4 py-1.5 font-medium text-background/80 text-sm">
            <Video className="size-3.5" />
            Besplatan webinar · Zoom
          </p>

          <h1 className="mt-7 max-w-3xl font-medium text-4xl leading-[1.08] tracking-[-0.02em] md:text-6xl">
            AI dizajnira. <span className="text-primary">Ti zarađuješ.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-background/75 text-lg leading-relaxed">
            Za 45 minuta razumeš tri stvari: zašto je baš sada trenutak, gde su klijenti koji
            plaćaju i kako izgleda put do prve zarade. Bez predznanja, bez kodiranja — dovoljno je
            da dođeš i slušaš.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* [POTVRDI] zameni linkom ka formi za prijavu kad bude spremna. */}
            <a
              href="#prijava"
              className="inline-flex items-center justify-center gap-2 rounded bg-primary px-7 py-3.5 font-semibold text-ink transition-transform hover:scale-[1.02]"
            >
              Rezerviši mesto, besplatno
              <ArrowRight className="size-4" />
            </a>
            <span className="inline-flex items-center gap-2 text-background/60 text-sm">
              <Clock className="size-4" />
              45 minuta · uživo, uz pitanja
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <h2 className="max-w-2xl font-medium text-3xl text-ink tracking-[-0.02em] md:text-4xl">
          Tri stvari koje ćeš razumeti
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {topics.map((topic, index) => (
            <div key={topic.title} className="rounded-2xl border bg-card p-7">
              <span className="font-medium text-3xl text-muted-foreground/50">{index + 1}</span>
              <h3 className="mt-3 font-semibold text-ink text-lg">{topic.title}</h3>
              <p className="mt-2.5 text-muted-foreground leading-relaxed">{topic.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="prijava" className="mx-auto max-w-3xl px-6 pb-20">
        <div className="rounded-3xl border bg-muted/50 p-8 text-center md:p-12">
          <h2 className="font-medium text-2xl text-ink tracking-[-0.02em] md:text-3xl">
            Ne čekaš webinar da bi počeo
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Ako ti je već jasno da hoćeš da kreneš, članstvo ti otvara ceo materijal i{" "}
            {stats.skoolMembers} ljudi koji rade isto što i ti — odmah, bez čekanja na sledeći
            termin.
          </p>
          <a
            href={links.skool}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded bg-ink px-7 py-3.5 font-semibold text-background transition-colors hover:bg-ink/85"
          >
            Pridruži se — {membership.price} mesečno
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      <FAQSection
        items={webinarFaq}
        title="Pitanja o webinaru"
        description="Termin, snimak i šta te čeka na kraju."
      />
      <JsonLd data={faqJsonLd(webinarFaq)} />
    </main>
  );
}
