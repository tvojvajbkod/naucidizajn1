import { links, membership } from "@/lib/brand";
import { ArrowRight, Info } from "lucide-react";

/**
 * Cena i upis — sve pre nego što korisnik napusti sajt.
 * Ovo je popravka najveće rupe u zatečenom levku: „AI Web Designer" je bio
 * stavka u meniju koja je vodila pravo na stranu na engleskom sa dugmetom
 * „JOIN $99/month", bez ijedne rečenice konteksta.
 *
 * DESNA KOLONA NIJE SPISAK „šta dobijaš" (odluka 28.09.). Bio je, pa je
 * ispadalo da sajt dva puta nabraja isto: jednom u sekciji „Šta dobijaš u
 * Skool zajednici", pa opet ovde, malo drugačijim rečima — i posetiocu je
 * delovalo da negde postoji još nešto što nije pročitao. Sada ovde stoji ono
 * što se nigde drugde ne kaže: šta se konkretno dešava kad klikne dugme.
 * Ako neko bude vraćao nabrajanje, prvo neka obriše sekciju gore.
 */
const steps: Array<{ title: string; body: string }> = [
  {
    title: "Otvaraš nalog na Skool-u",
    body: "Zajednica živi na Skool platformi. Nalog se pravi u minutu, mejlom.",
  },
  {
    title: "Plaćaš prvi mesec",
    body: "Karticom, u dolarima, preko Skool-a. Bez ugovora i bez obaveze na više meseci.",
  },
  {
    title: "Pristup imaš odmah",
    body: "Celo gradivo i svi snimci prethodnih sastanaka otvaraju se istog trenutka, ne čeka se početak grupe.",
  },
  {
    title: "Prvi sastanak je već u ponedeljak",
    body: "Mentorski sastanci se drže svakog ponedeljka u 19 h, uživo. Na prvi ne čekaš duže od sedam dana.",
  },
];

export function MembershipOfferSection() {
  return (
    <section id="cena" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="overflow-hidden rounded-3xl border bg-card">
        <div className="grid md:grid-cols-2">
          {/* Jedina limeta površina na stranici. Tekst na njoj MORA biti taman
              (`text-primary-foreground`) — svetli tekst na limeti ima kontrast
              1,1:1 i ne može da se pročita. Dugme je ovde obrnuto: tamno sa
              limeta slovima, jer limeta na limeti nestaje. */}
          <div className="bg-primary p-8 md:p-12">
            <p className="font-medium text-primary-foreground/70 text-sm">
              Članstvo · Postani AI web dizajner
            </p>
            <p className="mt-4 flex items-baseline gap-2">
              <span className="font-medium text-5xl text-primary-foreground tracking-[-0.02em]">
                {membership.price}
              </span>
              <span className="text-lg text-primary-foreground/75">{membership.period}</span>
            </p>
            <p className="mt-3 text-primary-foreground/70 text-sm">{membership.priceNote}</p>

            <a
              href={links.skool}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded bg-primary-foreground px-6 py-3.5 font-semibold text-primary transition-colors hover:bg-panel"
            >
              Pridruži se zajednici
              <ArrowRight className="size-4" />
            </a>

            <div className="mt-6 flex gap-3 rounded-xl bg-primary-foreground/[0.08] p-4">
              <Info className="mt-0.5 size-4 shrink-0 text-primary-foreground/70" />
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                <strong className="font-semibold text-primary-foreground">
                  Otkazuješ sam, u svakom trenutku.
                </strong>{" "}
                Pretplatu gasiš iz svog naloga — bez poziva, mejla i objašnjenja. Ostaje aktivna do
                kraja meseca koji si platio i posle toga se više ništa ne naplaćuje. Upis ide preko
                Skool platforme, gde zajednica i živi.
              </p>
            </div>
          </div>

          <div className="bg-panel p-8 md:p-12">
            <h2 className="font-semibold text-foreground text-lg">Kako ide upis</h2>
            {/* Termin sastanka (ponedeljak, 19 h) potvrdila je Nauči Dizajn
                firma 28.09. Stoji na tri mesta — ovde, u kartici „Mentorski
                sastanak" i u FAQ-u. Ako se termin promeni, menja se na sva tri. */}
            <ol className="mt-6 space-y-5">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/40 font-semibold text-primary text-sm">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{step.title}</p>
                    <p className="mt-1 text-foreground/70 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
