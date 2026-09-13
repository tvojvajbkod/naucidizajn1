import { links, membership } from "@/lib/brand";
import { ArrowRight, Check, Info } from "lucide-react";

/**
 * Cena, šta ulazi i uslovi — sve pre nego što korisnik napusti sajt.
 * Ovo je popravka najveće rupe u zatečenom levku: „AI Web Designer" je bio
 * stavka u meniju koja je vodila pravo na stranu na engleskom sa dugmetom
 * „JOIN $99/month", bez ijedne rečenice konteksta.
 */
const included = [
  "Ceo sistem izrade sajta uz AI, bez koda",
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
          <div className="bg-primary p-8 md:p-12">
            <p className="font-medium text-ink/65 text-sm">Članstvo · AI Web Dizajner</p>
            <p className="mt-4 flex items-baseline gap-2">
              <span className="font-medium text-5xl text-ink tracking-[-0.02em]">
                {membership.price}
              </span>
              <span className="text-ink/70 text-lg">{membership.period}</span>
            </p>
            <p className="mt-3 text-ink/65 text-sm">{membership.priceNote}</p>

            <a
              href={links.skool}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded bg-ink px-6 py-3.5 font-semibold text-background transition-colors hover:bg-ink/85"
            >
              Pridruži se zajednici
              <ArrowRight className="size-4" />
            </a>

            <div className="mt-6 flex gap-3 rounded-xl bg-ink/[0.07] p-4">
              <Info className="mt-0.5 size-4 shrink-0 text-ink/60" />
              <p className="text-ink/70 text-sm leading-relaxed">
                Upis ide preko Skool platforme, gde zajednica i živi. Otkazuješ sam iz naloga i
                članstvo ostaje aktivno do kraja plaćenog meseca.
              </p>
            </div>
          </div>

          <div className="bg-cream p-8 md:p-12">
            <h2 className="font-semibold text-ink text-lg">Šta je uključeno</h2>
            <ul className="mt-6 space-y-3.5">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-ink" />
                  <span className="text-ink/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
