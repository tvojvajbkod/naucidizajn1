import { cn } from "@repo/ui";
import type { ReactNode } from "react";

/**
 * Serifni kurziv kao akcenat unutar naslova.
 *
 * Potpisni potez brenda Nauči Dizajn: naslov je bezserifni, a jedna reč u njemu
 * je serifni kurziv. Na postojećem sajtu to radi font Saol Standard; ovde je
 * Instrument Serif, besplatna zamena bliskog karaktera (visok kontrast, uski
 * serifi, izražen kurziv).
 *
 * Koristi se ŠTEDLJIVO — jedna reč po naslovu. Dve akcentovane reči u istom
 * naslovu ubijaju efekat.
 *
 * DVA TONA (izmenjeno 27.09. kad je sajt prešao na tamnu paletu):
 * - `tone="lime"` (podrazumevano) — limeta slova. Na podlozi #0B0B0D kontrast
 *   je 14,6:1, pa je ovo sada uobičajeni izbor na celom sajtu.
 * - `tone="mark"` — limeta potez ispod reči, kao markerom, sa tamnim slovima
 *   preko poteza. Ostaje za SVETLE podloge (limeta traka, limeta kolona sa
 *   cenom), gde bi limeta slova bila nečitljiva.
 */
export function Accent({
  children,
  className,
  tone = "lime",
}: {
  children: ReactNode;
  className?: string;
  tone?: "lime" | "mark";
}) {
  return (
    <em
      className={cn(
        "font-accent font-normal italic tracking-normal",
        tone === "lime"
          ? "text-primary"
          : "box-decoration-clone bg-[linear-gradient(transparent_62%,var(--primary)_62%)] px-1 text-primary-foreground",
        className,
      )}
    >
      {children}
    </em>
  );
}
