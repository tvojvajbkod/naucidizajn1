import { JsonLd, faqJsonLd } from "@/components/json-ld";
import { CtaSection } from "@/components/sections/cta";
import { FAQSection } from "@/components/sections/faq";
import { MentorsSection } from "@/components/sections/mentors";
import { ProofSection } from "@/components/sections/proof";
import { stats } from "@/lib/brand";
import type { FaqItem } from "@/lib/faq";
import { buildMetadata } from "@/lib/seo";
import { Check } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Mentorstvo 1-1",
  description:
    "Šestomesečni program sa ličnim mentorom: sastanak svake nedelje, kompletan kurs, Discord zajednica i rad na tržištu. Prosečna ocena 9,2 od 10.",
  path: "/mentorstvo",
});

const phases = [
  {
    letter: "P",
    title: "Pravila",
    body: "Osnove zanata i alata. Postavljaš temelj koji kasnije ne moraš da prepravljaš — od kompozicije i tipografije do rada u alatu.",
  },
  {
    letter: "U",
    title: "Uvežbavanje",
    body: "Simulacije pravih projekata, jedna za drugom. Mentor ti vraća rad dok ne dostigne nivo koji se može pokazati klijentu.",
  },
  {
    letter: "T",
    title: "Tržište",
    body: "Portfolio, profil, obraćanje klijentima i pregovor o ceni. Faza u kojoj se učenje pretvara u posao ili prve honorare.",
  },
];

const included = [
  "Individualni sastanak sa mentorom svake nedelje",
  "Kompletan kurs iz izabrane oblasti, doživotan pristup",
  "Grupno mentorstvo i nedeljni grupni sastanci",
  "Discord grupa za svakodnevna pitanja",
  "Freelance sastanci na dve nedelje",
  "Pristup događajima uživo",
  "Sertifikat po završetku",
];

const mentorshipFaq: FaqItem[] = [
  {
    question: "Koliko traje program i koliko vremena traži?",
    answer:
      "Šest meseci, uz jedan do dva sata dnevno. Ritam je prilagodljiv — mentor planira zadatke prema tvom rasporedu, ali bez redovnog rada program nema smisla.",
  },
  {
    question: "Koliko košta?",
    answer:
      "Od 200 do 550 evra mesečno, zavisno od smera i načina plaćanja. Najniža cena je kod plaćanja šest meseci unapred, najviša kod plaćanja iz meseca u mesec. Tačan iznos za svoj smer dobijaš na besplatnom pozivu.",
  },
  {
    question: "Mogu li da biram mentora?",
    answer:
      "Mentora predlažemo prema smeru i tvom cilju, a upoznaješ ga pre početka. Ako saradnja ne funkcioniše, menjamo ga — to nije problem i dešava se.",
  },
  {
    question: "Šta ako ne nađem posao posle šest meseci?",
    answer:
      "Niko ne može da garantuje zaposlenje i mi to ne radimo. Ono što možemo jeste portfolio, sistem javljanja i mentor koji prati tvoje konkurisanje. Prosečna ocena programa je 9,2 od 10 u anketi sa preko 100 studenata.",
  },
  {
    question: "Kako izgleda besplatan poziv?",
    answer:
      "Petnaest minuta razgovora: gde si sada, šta hoćeš da postigneš i da li ti je mentorstvo uopšte potrebno. Ako ti je bolje članstvo ili samo kurs, reći ćemo ti to.",
  },
];

export default function MentorstvoPage() {
  return (
    <main>
      <section className="border-b bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="font-medium text-muted-foreground text-sm">Mentorstvo 1-1</p>
          <h1 className="mt-3 max-w-3xl font-medium text-4xl text-ink leading-tight tracking-[-0.02em] md:text-5xl">
            Lični mentor koji te vodi šest meseci
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Najskuplja i najtemeljnija opcija kod nas — za one koji menjaju karijeru, a ne traže
            dodatni izvor prihoda. Sastanak jedan na jedan svake nedelje, kompletan kurs, zajednica
            i rad na tržištu. Prosečna ocena programa je {stats.mentorshipScore}.
          </p>
          <Link
            href="/cene"
            className="mt-9 inline-flex items-center justify-center rounded bg-ink px-7 py-3.5 font-semibold text-background transition-colors hover:bg-ink/85"
          >
            Pogledaj cene mentorstva
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="max-w-2xl font-medium text-3xl text-ink tracking-[-0.02em] md:text-4xl">
          Program u tri faze
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Metoda P.U.T. — pravila, uvežbavanje, tržište. Redosled je namerno takav: tržište dolazi
          na kraju, kad ima šta da se pokaže.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {phases.map((phase) => (
            <div key={phase.letter} className="rounded-2xl border bg-card p-7">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary font-bold text-ink text-lg">
                {phase.letter}
              </span>
              <h3 className="mt-5 font-semibold text-ink text-lg">{phase.title}</h3>
              <p className="mt-2.5 text-muted-foreground leading-relaxed">{phase.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-medium text-3xl text-ink tracking-[-0.02em] md:text-4xl">
            Šta je uključeno
          </h2>
          <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-ink" />
                <span className="text-ink/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <MentorsSection />
      <ProofSection limit={4} />
      <FAQSection
        items={mentorshipFaq}
        title="Česta pitanja o mentorstvu"
        description="Trajanje, cena, izbor mentora i šta realno možeš da očekuješ."
      />
      <CtaSection
        title="Nisi siguran da ti treba mentorstvo?"
        body="Ako ti je cilj prva zarada za mesec dana, a ne promena karijere, AI članstvo je jeftinije i brže. Pogledaj oba pa odluči."
      />
      <JsonLd data={faqJsonLd(mentorshipFaq)} />
    </main>
  );
}
