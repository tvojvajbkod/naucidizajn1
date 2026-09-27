import { links, membership } from "@/lib/brand";
import { ArrowRight, Check, Info } from "lucide-react";

/**
 * Cena, šta ulazi i uslovi — sve pre nego što korisnik napusti sajt.
 * Ovo je popravka najveće rupe u zatečenom levku: „AI Web Designer" je bio
 * stavka u meniju koja je vodila pravo na stranu na engleskom sa dugmetom
 * „JOIN $99/month", bez ijedne rečenice konteksta.
 */
const included = [
  "Ceo put od četiri meseca: sajtovi, SEO, AI automatizacije, napredni dizajn",
  "Sistem izrade sajta uz AI, bez koda",
  "Biblioteka promptova",
  "Gde da nađeš klijente i kako da im se javiš",
  "Kalkulator cene projekta",
  "Grupni sastanak uživo svake nedelje",
  "Snimci svih prethodnih sastanaka",
  "Podrška zajednice i pomoć mentora",
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
            <h2 className="font-semibold text-foreground text-lg">Šta je uključeno</h2>
            <ul className="mt-6 space-y-3.5">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
