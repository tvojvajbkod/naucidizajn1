import { cn } from "@repo/ui";

/**
 * Ogromna kondenzovana brojka.
 *
 * Drugi potpisni potez brenda: statistika se ne piše sitno pored teksta nego se
 * razvuče preko pola ekrana. Na postojećem sajtu to radi Druk Condensed Super
 * u 236px; ovde je Anton, besplatna zamena istog karaktera (jedna težina,
 * usko, vrlo crno).
 *
 * `size="giant"` je za samostalni trenutak na stranici — jedan po stranici,
 * ne više. `size="row"` je za traku sa nekoliko brojki.
 */
export function BigStat({
  value,
  label,
  size = "row",
  className,
}: {
  value: string;
  label: string;
  size?: "row" | "giant";
  className?: string;
}) {
  return (
    <div className={className}>
      <span
        className={cn(
          "block font-display uppercase leading-[0.85] tracking-tight",
          size === "giant" ? "text-[4.5rem] md:text-[9rem]" : "text-4xl md:text-5xl",
        )}
      >
        {value}
      </span>
      <span
        className={cn(
          "mt-2 block",
          size === "giant" ? "max-w-sm text-base" : "text-sm",
          "opacity-60",
        )}
      >
        {label}
      </span>
    </div>
  );
}
