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
 */
export function Accent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <em className={cn("font-accent font-normal italic tracking-normal", className)}>{children}</em>
  );
}
