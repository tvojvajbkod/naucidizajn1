import { cn } from "@repo/ui";

/**
 * Znak kursa — šest originalnih crteža u istom ključu.
 *
 * Zatečeni sajt ima svoje bedževe kurseva; oni su njihova grafika i nisu
 * preuzeti. Ovo su nacrtani iz nule, ali u brend ključu: linija debljine 2.6,
 * zaobljeni krajevi, ink potez i TAČNO JEDAN limeta element po znaku — isti
 * princip po kome se limeta na celom sajtu koristi kao akcenat, ne kao podloga.
 *
 * Crtaju delatnost, ne alat: nema tuđih logotipa (Figma, Webflow, Adobe) jer
 * su to tuđi žigovi i ne smeju se crtati kao naši.
 */

const stroke = {
  stroke: "currentColor",
  strokeWidth: 2.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  fill: "none",
} as const;

const LIME = "#DBFF00";

function Glyph({ slug }: { slug: string }) {
  switch (slug) {
    // Stranica: zaglavlje, glavni blok, tekst pored.
    case "web-dizajn":
      return (
        <>
          <rect x="8" y="12" width="48" height="40" rx="5" {...stroke} />
          <path d="M8 23h48" {...stroke} />
          <rect x="14" y="29" width="17" height="17" rx="2.5" fill={LIME} />
          <path d="M37 31h13M37 38h13M37 45h8" {...stroke} />
        </>
      );

    // Ekran telefona i tok kroz njega.
    case "ui-ux":
      return (
        <>
          <rect x="19" y="7" width="26" height="50" rx="6" {...stroke} />
          <rect x="24" y="14" width="16" height="12" rx="2.5" fill={LIME} />
          <path d="M24 32h16M24 39h11" {...stroke} />
          <path d="M27 49h10" {...stroke} />
        </>
      );

    // Blokovi koji se slažu mišem, bez koda.
    case "webflow":
      return (
        <>
          <rect x="8" y="11" width="32" height="13" rx="3" {...stroke} />
          <rect x="8" y="30" width="19" height="13" rx="3" {...stroke} />
          <rect x="33" y="30" width="19" height="13" rx="3" fill={LIME} />
          <path d="M31 46l3 12 3.2-5.2 5.8 1.4z" {...stroke} />
        </>
      );

    // Znak koji nastaje iz geometrije.
    case "logo-dizajn":
      return (
        <>
          <circle cx="25" cy="32" r="15" {...stroke} />
          <rect x="30" y="17" width="23" height="23" rx="3" {...stroke} />
          <circle cx="33" cy="32" r="5" fill={LIME} />
        </>
      );

    // Trag kretanja i ključni kadar.
    case "motion-dizajn":
      return (
        <>
          <path d="M8 22h22M8 32h14M8 42h22" {...stroke} />
          <circle cx="44" cy="32" r="12" fill={LIME} />
          <path d="M39 26l11 6-11 6z" fill="#232421" />
        </>
      );

    // Čovek i rast — lični brend.
    default:
      return (
        <>
          <circle cx="26" cy="22" r="9" {...stroke} />
          <path d="M11 52c0-8.3 6.7-15 15-15s15 6.7 15 15" {...stroke} />
          <path
            d="M40 30l14-14M45 15h9v9"
            stroke={LIME}
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
  }
}

export function CourseBadge({
  slug,
  title,
  className,
}: {
  slug: string;
  title: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-xl bg-cream text-ink",
        className,
      )}
    >
      {/* Srazmerno, da isti znak radi i u kartici (48px) i u zaglavlju (64px). */}
      <svg
        viewBox="0 0 64 64"
        className="h-[58%] w-[58%]"
        role="img"
        aria-label={`Znak kursa ${title}`}
      >
        <title>{`Znak kursa ${title}`}</title>
        <Glyph slug={slug} />
      </svg>
    </span>
  );
}
