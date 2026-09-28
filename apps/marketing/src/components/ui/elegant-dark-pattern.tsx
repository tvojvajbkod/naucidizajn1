import { cn } from "@repo/ui";
import type { ReactNode } from "react";

/**
 * Tamna podloga sa prelivom — ambijent iza celog sajta.
 *
 * Sve boje dolaze iz brend palete (`globals.css`), ne iz proizvoljnih
 * vrednosti: osnova je `#0B0B0D`, a sjaj je limeta `#B7FF00` i tamnija zelena
 * `#8FCC00`, obe spuštene na nekoliko procenata prozirnosti. Zbog toga podloga
 * ostaje skoro crna i ne dira kontrast teksta — provereno: najsvetlija tačka
 * preliva podiže podlogu sa `#0B0B0D` na oko `#141810`, pa beli tekst i dalje
 * ima preko 16:1.
 *
 * KAKO RADI
 * Sloj je `absolute` preko cele visine strane i stoji iza sadržaja (`-z-10`),
 * pa se pomera zajedno sa stranom. Namerno NIJE `fixed`: tada bi sjaj stajao
 * zakovan na vrhu ekrana i pratio čitaoca kao mrlja. Ovako sjaj pripada vrhu
 * STRANE — stoji iza heroja i odlazi kad se strana pomeri.
 *
 * Vidi se kroz sekcije koje nemaju svoju podlogu; sekcije na `bg-panel` i
 * kartice na `bg-card` ga prekrivaju, i tako i treba: one su čitljive
 * površine, a preliv je vazduh između njih.
 *
 * ŠTA SE NE SME
 * - Ne pojačavati prozirnost sjaja u OVOM sloju preko ~12%. Preko toga podloga
 *   prestaje da bude neutralna, limeta počinje da se takmiči sa dugmadima, i
 *   akcenat gubi snagu (isto pravilo kao „jedna limeta površina po stranici").
 *   Hero je jedini izuzetak — tamo je sjaj jači (do ~16%) jer je to jedino
 *   mesto gde je sjaj poenta, a ne vazduh.
 * - Ne stavljati tekst direktno na najsvetliji deo preliva bez panela iza.
 * - `aria-hidden` mora da ostane: ovo je ukras, čitač ekrana ga ne čita.
 *
 * Mrežica i zrno su namerno na granici vidljivosti. Njihov posao je da velika
 * prazna tamna polja ne izgledaju kao „nije se učitalo", a ne da se primete.
 */

/** Zrno (noise) kao SVG u samom fajlu — bez dodatne slike i bez mrežnog poziva. */
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

export function DarkGradientBg({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative isolate", className)}>
      <div aria-hidden="true" className="-z-10 pointer-events-none absolute inset-0 bg-page">
        {/* Osnovni preliv: malo svetlije pri vrhu, tamnije ka dnu. */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#16161a_0%,#0b0b0d_22%,#0b0b0d_100%)]" />

        {/* Limeta sjaj iza heroja — centriran, širok i vrlo slab. */}
        <div className="absolute inset-0 bg-[radial-gradient(1100px_620px_at_50%_-120px,rgba(183,255,0,0.10),transparent_70%)]" />

        {/* Dva tiha ugla, da podloga ne bude simetrična kao gradijent iz alata. */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_700px_at_-10%_34%,rgba(143,204,0,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_700px_at_110%_76%,rgba(183,255,0,0.045),transparent_70%)]" />

        {/* Mrežica — linije na 72px, jedva vidljive. */}
        <div className="absolute inset-0 bg-[length:72px_72px] bg-[linear-gradient(to_right,rgba(245,245,242,0.022)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,245,242,0.022)_1px,transparent_1px)]" />

        {/* Zrno — skida „plastičnost" velikih tamnih polja. */}
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{ backgroundImage: grain }}
        />
      </div>

      {children}
    </div>
  );
}
