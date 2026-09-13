import { Accent } from "@/components/accent";
import { BigStat } from "@/components/big-stat";
import { links, membership, stats } from "@/lib/brand";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * Hero je AI-first: najnovija ponuda je ono što posetilac vidi prvo.
 * Dva CTA-a, oba iznad preloma — jedan za odlučne, jedan za one koji prvo gledaju.
 * Cena stoji odmah uz dugme; zatečeni sajt ju je krio do Skool checkout-a.
 *
 * Tipografija prati postojeći sajt: naslov je težine 500 sa vrlo skupljenim
 * razmakom (-0.03em), jedna reč je serifni kurziv, a brojke su kondenzovane.
 */
export function HeroSection() {
  return (
    <section className="bg-ink text-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="inline-flex items-center gap-2 rounded border border-background/20 px-4 py-1.5 font-medium text-background/80 text-sm">
          <span className="size-2 rounded-full bg-primary" />
          Nova edukacija · mesečno članstvo
        </p>

        <h1 className="mt-7 max-w-3xl font-medium text-4xl leading-[1.04] tracking-[-0.03em] md:text-[4.75rem]">
          AI dizajnira. Ti <Accent className="text-primary">zarađuješ</Accent>.
        </h1>

        <p className="mt-6 max-w-xl text-background/75 text-lg leading-relaxed">
          Za 30 dana naučiš da napraviš ceo sajt pomoću veštačke inteligencije — bez kodiranja i bez
          predznanja — i tačno znaš kome da se javiš i koliko da naplatiš. Jedan dan teorije,
          dvadeset devet dana prakse.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={links.skool}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-2 rounded bg-primary px-7 py-4 font-semibold text-ink transition-transform hover:scale-[1.02]"
          >
            Pridruži se — {membership.price} mesečno
            <ArrowRight className="size-4" />
          </a>
          {/* Sekundarno dugme je maslinasto sa limeta tekstom — par preuzet sa postojećeg sajta. */}
          <Link
            href="/ai-web-dizajner"
            className="inline-flex items-center justify-center rounded bg-olive px-7 py-4 font-semibold text-primary transition-colors hover:bg-olive/85"
          >
            Vidi kako izgleda iznutra
          </Link>
        </div>

        <p className="mt-4 text-background/55 text-sm">
          Plaćaš mesec po mesec. Otkazuješ sam, iz naloga.
        </p>

        <dl className="mt-16 grid max-w-4xl grid-cols-2 gap-8 border-background/15 border-t pt-10 sm:grid-cols-4">
          <BigStat value={stats.skoolMembers} label="Članova zajednice" />
          <BigStat value={stats.skoolRating} label="Ocena zajednice" />
          <BigStat value={stats.studentsSince2020} label="Polaznika od 2020." />
          <BigStat value="1×" label="Sastanak uživo nedeljno" />
        </dl>
      </div>
    </section>
  );
}
