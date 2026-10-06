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
 * Raspored je TEKST-OVERLAY-PREKO-SLIKE (odluka 06.10., treća verzija
 * heroja). Prva verzija je sliku razvlačila na punu, nepredvidivu visinu
 * heroja (apsolutno pozicionirana, `inset-y-0`) — zavisila je od količine
 * teksta pored nje, pa je ispala predugačka i slika je delovala isečena.
 * Druga verzija je to rešila tako što je slika postala odvojena kartica
 * pored teksta (split layout) — ovo je treća, koja vraća sliku kao pravu
 * pozadinu heroja, ali bez greške prve verzije: vizuelni kontejner ima
 * EKSPLICITNU visinu (`min-h-[560px] md:min-h-[640px]`) nezavisnu od dužine
 * teksta, umesto da visinu heroja diktira sadržaj. Slika je `object-cover`
 * unutar te fiksne visine, pa ostaje čitava, ne rasteže se.
 *
 * Preliv preko slike ide u dva sloja: vodoravni (tamno levo → providno
 * desno, da tekst sedi na čitljivoj podlozi) i vertikalni (tamno dole, da se
 * donja ivica heroja stopi sa pozadinom sekcije ispod). Ton preliva je isti
 * kao pozadina heroja (#0b0b0d) — provera kontrasta: belo na ≥80% neprovidnog
 * #0b0b0d preko bilo kog dela slike i dalje prolazi 4.5:1.
 *
 * Video („Mesto za video") je UKLONJEN iz heroja (06.10.) — delovao je kao
 * nasumično ubačena kutija bez obzira gde je stajao u koloni. Ako firma
 * pošalje pravi snimak, vraćanje idе kao posebna odluka, ne automatski nazad
 * na staro mesto.
 *
 * Ovo namerno krši opšte pravilo „centrirano je rezervisano za hero i
 * prepisku" — hero ostaje levo poravnat izuzetak, ne vraćaj centriranje bez
 * novog dogovora.
 *
 * Slika (`public/hero/ai-web-designer.png`) ide KROZ `assetPath()`, kao i sav
 * drugi sadržaj iz `public/`.
 *
 * Tipografija prati postojeći sajt: naslov je težine 500 sa vrlo skupljenim
 * razmakom (-0.03em), jedna reč je serifni kurziv, a brojke su kondenzovane.
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0d] text-foreground">
      <div className="relative min-h-[560px] md:min-h-[640px]">
        <Image
          src={assetPath("/hero/ai-web-designer.png")}
          alt="Polaznica pravi sajt uz pomoć AI alata, pored nje stilizovan robot kao simbol AI asistenta"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_32%]"
        />
        <div className="absolute inset-0 bg-[#0b0b0d]/70 md:hidden" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#0b0b0d_0%,#0b0b0d_30%,rgba(11,11,13,0.93)_48%,rgba(11,11,13,0.45)_68%,rgba(11,11,13,0)_88%)] md:block" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,13,0)_55%,#0b0b0d_100%)]" />

        <div className="relative mx-auto flex min-h-[560px] max-w-6xl flex-col items-start justify-center px-6 py-16 text-left md:min-h-[640px] md:py-20">
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
          <p className="mt-1 text-foreground/70 text-sm">Mentori. Zajednica. AI alati. Klijenti.</p>

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
