import { links, membership, stats } from "@/lib/brand";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

/**
 * Hero je AI-first: najnovija ponuda je ono što posetilac vidi prvo.
 * Dva CTA-a, oba iznad preloma — jedan za odlučne, jedan za one koji prvo gledaju.
 * Cena stoji odmah uz dugme; zatečeni sajt ju je krio do Skool checkout-a.
 */
export function HeroSection() {
  return (
    <section className="bg-ink text-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-1.5 font-medium text-background/80 text-sm">
          <span className="size-2 rounded-full bg-primary" />
          Nova edukacija · mesečno članstvo
        </p>

        <h1 className="mt-7 max-w-3xl font-bold text-4xl leading-[1.08] tracking-tight md:text-6xl">
          AI dizajnira. <span className="text-primary">Ti zarađuješ.</span>
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
            className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-ink transition-transform hover:scale-[1.02]"
          >
            Pridruži se — {membership.price} mesečno
            <ArrowRight className="size-4" />
          </a>
          <Link
            href="/ai-web-dizajner"
            className="inline-flex items-center justify-center rounded-full border border-background/25 px-7 py-3.5 font-semibold text-background transition-colors hover:bg-background/10"
          >
            Vidi kako izgleda iznutra
          </Link>
        </div>

        <p className="mt-4 text-background/55 text-sm">
          Plaćaš mesec po mesec. Otkazuješ sam, iz naloga.
        </p>

        <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-8 border-background/15 border-t pt-8 sm:grid-cols-4">
          <div>
            <dt className="text-background/55 text-sm">Članova zajednice</dt>
            <dd className="mt-1 font-bold text-2xl">{stats.skoolMembers}</dd>
          </div>
          <div>
            <dt className="text-background/55 text-sm">Ocena zajednice</dt>
            <dd className="mt-1 flex items-center gap-1.5 font-bold text-2xl">
              {stats.skoolRating}
              <Star className="size-4 fill-primary text-primary" />
            </dd>
          </div>
          <div>
            <dt className="text-background/55 text-sm">Polaznika od 2020.</dt>
            <dd className="mt-1 font-bold text-2xl">{stats.studentsSince2020}</dd>
          </div>
          <div>
            <dt className="text-background/55 text-sm">Sastanak uživo</dt>
            <dd className="mt-1 font-bold text-2xl">Nedeljno</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
