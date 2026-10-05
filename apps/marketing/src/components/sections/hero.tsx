import { Accent } from "@/components/accent";
import { BigStat } from "@/components/big-stat";
import { HeroVideo } from "@/components/hero-video";
import { assetPath } from "@/lib/asset";
import { links, membership, stats } from "@/lib/brand";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

/**
 * Hero je AI-first: najnovija ponuda je ono što posetilac vidi prvo.
 * Jedno dugme, i cena stoji odmah uz njega; zatečeni sajt ju je krio do Skool
 * checkout-a.
 *
 * Raspored je ASIMETRIČAN SPLIT (odluka 05.10., zamenjuje centrirani raspored
 * od 25.09.): tekst levo, ilustracija bleedovana do desne ivice ekrana iza
 * nje. Ovo namerno krši opšte pravilo „centrirano je rezervisano za hero i
 * prepisku" — hero je sad izuzetak od svog starog izuzetka, ne vraćaj staro
 * centriranje bez novog dogovora.
 *
 * Slika (`public/hero/ai-web-designer.png`) ide KROZ `assetPath()`, kao i sav
 * drugi sadržaj iz `public/`. Levi preliv preko slike je isti ton kao
 * pozadina heroja (#0b0b0d/#191c16) da se slika utopi u podlogu umesto da
 * seče tekst oštrom ivicom; desna ivica slike ostaje puna boja.
 *
 * Tipografija prati postojeći sajt: naslov je težine 500 sa vrlo skupljenim
 * razmakom (-0.03em), jedna reč je serifni kurziv, a brojke su kondenzovane.
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(760px_380px_at_20%_2%,rgba(183,255,0,0.14),transparent_62%),radial-gradient(1400px_760px_at_0%_-14%,rgba(143,204,0,0.11),transparent_68%),linear-gradient(180deg,#191c16_0%,#0f0f13_78%,#0b0b0d_100%)] text-foreground">
      {/* Slika, bleedovana do desne ivice — samo na desktopu, iza teksta. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[50%] md:block">
        <Image
          src={assetPath("/hero/ai-web-designer.png")}
          alt="Polaznica pravi sajt uz pomoć AI alata, pored nje stilizovan robot kao simbol AI asistenta"
          fill
          priority
          sizes="50vw"
          className="object-cover object-[62%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0d] via-[#0b0b0d]/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d]/60 via-transparent to-[#0b0b0d]/20" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="flex flex-col items-start text-left md:max-w-xl">
          <p className="inline-flex items-center gap-2 rounded border border-border px-4 py-1.5 font-medium text-foreground/80 text-sm">
            <span className="size-2 rounded-full bg-primary" />
            Postani AI web dizajner · mesečno članstvo
          </p>

          <h1 className="mt-6 font-medium text-4xl leading-[1.04] tracking-[-0.03em] md:text-[4rem]">
            AI dizajnira. Ti <Accent tone="lime">zarađuješ</Accent>.
          </h1>

          <p className="mt-5 text-foreground/75 text-lg leading-relaxed">
            Nauči da praviš sajtove pomoću AI-ja — i pretvori tu veštinu u prihod.
          </p>

          <p className="mt-4 text-foreground/75 text-lg leading-relaxed">
            AI Web Dizajner je praktična zajednica za ljude koji žele da naprave sajt, pronađu
            klijenta i počnu da zarađuju od web dizajna.
          </p>

          <p className="mt-6 font-medium text-foreground/90">1 dan teorije. 29 dana prakse.</p>
          <p className="mt-1 text-foreground/55 text-sm">Mentori. Zajednica. AI alati. Klijenti.</p>

          <HeroVideo />

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

          <p className="mt-4 text-foreground/55 text-sm">
            Cilj nije da završiš još jedan kurs.
            <br />
            Cilj je da napraviš nešto što možeš da naplatiš.
          </p>
        </div>

        {/* Slika na mobilnom — ispod teksta, puna širina, vinjeta gore da se stopi sa tekstom iznad. */}
        <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-2xl md:hidden">
          <Image
            src={assetPath("/hero/ai-web-designer.png")}
            alt="Polaznica pravi sajt uz pomoć AI alata, pored nje stilizovan robot kao simbol AI asistenta"
            fill
            sizes="100vw"
            className="object-cover object-[58%_25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d]/50 via-transparent to-[#0b0b0d]/30" />
        </div>

        <dl className="mt-14 grid w-full max-w-4xl grid-cols-2 gap-8 border-border border-t pt-10 sm:grid-cols-4">
          <BigStat value={stats.skoolMembers} label="Članova zajednice" />
          <BigStat value={stats.skoolRating} label="Ocena zajednice" />
          <BigStat value={stats.studentsSince2020} label="Polaznika od 2020." />
          <BigStat value="1×" label="Sastanak uživo nedeljno" />
        </dl>
      </div>
    </section>
  );
}
