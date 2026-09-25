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
 * DVA TONA, i izbor nije stvar ukusa nego čitljivosti (odluka 25.09.):
 * - `tone="lime"` — limeta slova. Radi SAMO na tamnoj podlozi.
 * - `tone="mark"` (podrazumevano) — limeta potez ispod reči, kao markerom.
 *   Za svetle podloge: limeta slova na beloj ili krem podlozi imaju kontrast
 *   oko 1,5:1 i praktično se ne mogu pročitati, a ovako akcenat ostaje limeta
 *   i reč se i dalje čita.
 */
export function Accent({
  children,
  className,
  tone = "mark",
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
          : "box-decoration-clone bg-[linear-gradient(transparent_62%,var(--primary)_62%)] px-1",
        className,
      )}
    >
      {children}
    </em>
  );
}
