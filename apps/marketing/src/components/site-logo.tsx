import { isProposal, logo } from "@/lib/brand";
import { cn } from "@repo/ui";
import Image from "next/image";

/**
 * Logotip u zaglavlju i futeru — ili prazno mesto dok pravog nema.
 *
 * Pravi logo Nauči Dizajna je žig firme i nije preuzet sa njihovog sajta.
 * Zato ovde stoji okvir TAČNIH dimenzija (132 × 32): kad fajl stigne, upiše se
 * `logo.src` u `lib/brand.ts` i ništa se u rasporedu ne pomera.
 */
export function SiteLogo({ className }: { className?: string }) {
  if (logo.src) {
    return (
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        priority
        className={cn("h-8 w-auto", className)}
      />
    );
  }

  return (
    <span
      aria-label={`${logo.alt} — mesto za logo`}
      style={{ width: logo.width, height: logo.height }}
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-1.5 rounded border border-current/35 border-dashed",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-primary" />
      <span className="font-medium text-[0.62rem] uppercase tracking-[0.18em] opacity-60">
        {isProposal ? "logo" : logo.alt}
      </span>
    </span>
  );
}
