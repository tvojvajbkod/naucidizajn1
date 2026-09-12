import { cn } from "@repo/ui";
import Image from "next/image";

/**
 * Snimak ekrana u okviru pregledača.
 *
 * Okvir nije ukras: kad su svi snimci u istom okviru i istog odnosa stranica,
 * zid radova izgleda kao celina umesto kao skup slučajnih slika različitih
 * dimenzija. Snimke pravi `bun scripts/snimi-radove.ts`.
 */
export function Screenshot({
  src,
  alt,
  caption,
  url,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  /** Adresa koja se ispisuje u traci okvira — samo prikaz, ne link. */
  url?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={cn("overflow-hidden rounded-2xl border bg-card", className)}>
      <div className="flex items-center gap-2 border-b bg-muted px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        {url ? (
          <span className="ml-2 truncate rounded-md bg-background px-2.5 py-1 text-muted-foreground text-xs">
            {url}
          </span>
        ) : null}
      </div>

      {/* 16:10 okvir — snimci se seku na vrhu strane, kao u pregledaču. */}
      <div className="relative aspect-[16/10] w-full bg-muted/50">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top"
        />
      </div>

      {caption ? (
        <figcaption className="border-t px-5 py-3 text-muted-foreground text-sm">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
