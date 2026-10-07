import { Accent } from "@/components/accent";
import { BigStat } from "@/components/big-stat";
import { assetPath } from "@/lib/asset";
import { links, membership, stats } from "@/lib/brand";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

/**
 * Hero je AI-first: najnovija ponuda je ono što posetilac vidi prvo.
 * Jedno dugme, i cena stoji odmah uz njega; zatečeni sajt ju je krio do Skool
 * checkout-a.
 *
 * Raspored je SPLIT — tekst levo, slika kao zaobljena kartica desno (odluka
 * 07.10., četvrta verzija heroja, zamenjuje treću). Nova slika
 * (`public/hero/zaradi-kao-ai-web-dizajner.jpg`) nije fotografija nego gotov
 * grafički materijal sa SOPSTVENIM utisnutim naslovom i checklistom — zato
 * prethodni pristup (slika kao pozadina heroja + naš h1 preko nje) ne radi:
 * dva naslova bi se vizuelno sudarala. Slika zato stoji kao samostalna
 * vizuelna celina pored teksta, bez prelivâ i bez našeg teksta preko nje.
 * Kontejner koristi `aspect-[720/383]` (tačan odnos strana izvorne slike) da
 * `object-cover` ništa ne odseca.
 *
 * Video („Mesto za video") ostaje UKLONJEN iz heroja (odluka 06.10.).
 *
 * Ovo namerno krši opšte pravilo „centrirano je rezervisano za hero i
 * prepisku" — hero ostaje levo poravnat izuzetak, ne vraćaj centriranje bez
 * novog dogovora.
 *
 * Slika ide KROZ `assetPath()`, kao i sav drugi sadržaj iz `public/`.
 *
 * Tipografija prati postojeći sajt: naslov je težine 500 sa vrlo skupljenim
 * razmakom (-0.03em), jedna reč je serifni kurziv, a brojke su kondenzovane.
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0d] text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_1fr] md:gap-16">
          <div className="flex flex-col items-start text-left">
            <p className="inline-flex items-center gap-2 rounded border border-border px-4 py-1.5 font-medium text-foreground/80 text-sm">
              <span className="size-2 rounded-full bg-primary" />
              Postani AI web dizajner · mesečno članstvo
            </p>

            <h1 className="mt-6 max-w-2xl font-medium text-4xl leading-[1.04] tracking-[-0.03em] md:text-[3.5rem]">
              AI dizajnira. Ti <Accent tone="lime">zarađuješ</Accent>.
            </h1>

            <p className="mt-5 max-w-xl text-foreground/80 text-lg leading-relaxed">
              Nauči da praviš sajtove pomoću AI-ja — i pretvori tu veštinu u prihod.
            </p>

            <p className="mt-4 max-w-xl text-foreground/80 text-lg leading-relaxed">
              AI Web Dizajner je praktična zajednica za ljude koji žele da naprave sajt, pronađu
              klijenta i počnu da zarađuju od web dizajna.
            </p>

            <p className="mt-6 font-medium text-foreground">1 dan teorije. 29 dana prakse.</p>
            <p className="mt-1 text-foreground/70 text-sm">
              Mentori. Zajednica. AI alati. Klijenti.
            </p>

            {/* Jedno dugme, ne dva: sekundarno („Vidi kako izgleda iznutra") uklonjeno
                25.09. — ista stranica se otvara iz navigacije. */}
            <div className="mt-8">
              <a
                href={links.skool}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded bg-primary px-7 py-4 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Pridruži se — {membership.price} mesečno
                <ArrowRight className="size-4" />
              </a>
            </div>

            <p className="mt-4 text-foreground/70 text-sm">
              Cilj nije da završiš još jedan kurs.
              <br />
              Cilj je da napraviš nešto što možeš da naplatiš.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl border border-border/50 aspect-[720/383]">
            <Image
              src={assetPath("/hero/zaradi-kao-ai-web-dizajner.jpg")}
              alt="Mentor na video pozivu okružen mozaikom polaznika, sa natpisom „Zaradi kao AI web dizajner”"
              fill
              priority
              quality={95}
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <dl className="grid w-full max-w-4xl grid-cols-2 gap-8 border-border border-t py-10 sm:grid-cols-4">
          <BigStat value={stats.skoolMembers} label="Članova zajednice" />
          <BigStat value={stats.skoolRating} label="Ocena zajednice" />
          <BigStat value={stats.studentsSince2020} label="Polaznika od 2020." />
          <BigStat value="1×" label="Sastanak uživo nedeljno" />
        </dl>
      </div>
    </section>
  );
}
