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
 * od 25.09.): tekst levo, ilustracija desno kao zaobljena kartica u istoj
 * `max-w-6xl` koloni kao sve ostalo — NE bleeduje do ivice ekrana (prva
 * verzija je to radila, pa je slika delovala isečeno jer se razvlačila na
 * punu, nepredvidivu visinu heroja). Dve kolone dele prostor kroz CSS grid
 * (`md:grid-cols-[1.05fr_1fr]`), pa nema „mrtvog" razmaka između teksta i
 * slike kao kad je tekst bio uže ograničen (`max-w-xl`) nego kolona.
 * Slika ima fiksan odnos strana (`aspect-[4/3]`) nezavisno od visine teksta,
 * zato se heroj sad visinom uklapa u ostale sekcije (`py-20 md:py-24`, isto
 * kao svuda) umesto da raste s količinom teksta.
 *
 * Ovo namerno krši opšte pravilo „centrirano je rezervisano za hero i
 * prepisku" — hero je sad izuzetak od svog starog izuzetka, ne vraćaj staro
 * centriranje bez novog dogovora.
 *
 * Slika (`public/hero/ai-web-designer.png`) ide KROZ `assetPath()`, kao i sav
 * drugi sadržaj iz `public/`. Isti `<Image>` element se koristi i na
 * desktopu i na mobilnom — grid ga sam prebaci ispod teksta kad nema mesta
 * za dve kolone, pa nema duplog markupa za dva prikaza.
 *
 * Video je namerno NA KRAJU kolone, posle dugmeta („Pogledaj kako radi"), ne
 * usred uvodnog teksta — tu je delovao kao nasumično ubačena kutija između
 * dve rečenice i pre poziva na akciju.
 *
 * Tipografija prati postojeći sajt: naslov je težine 500 sa vrlo skupljenim
 * razmakom (-0.03em), jedna reč je serifni kurziv, a brojke su kondenzovane.
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(760px_380px_at_20%_2%,rgba(183,255,0,0.14),transparent_62%),radial-gradient(1400px_760px_at_0%_-14%,rgba(143,204,0,0.11),transparent_68%),linear-gradient(180deg,#191c16_0%,#0f0f13_78%,#0b0b0d_100%)] text-foreground">
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-14">
          <div className="flex flex-col items-start text-left">
            <p className="inline-flex items-center gap-2 rounded border border-border px-4 py-1.5 font-medium text-foreground/80 text-sm">
              <span className="size-2 rounded-full bg-primary" />
              Postani AI web dizajner · mesečno članstvo
            </p>

            <h1 className="mt-6 font-medium text-4xl leading-[1.04] tracking-[-0.03em] md:text-[3.5rem]">
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

            <HeroVideo />
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border/60">
            <Image
              src={assetPath("/hero/ai-web-designer.png")}
              alt="Polaznica pravi sajt uz pomoć AI alata, pored nje stilizovan robot kao simbol AI asistenta"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover object-[55%_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d]/35 via-transparent to-transparent" />
          </div>
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
