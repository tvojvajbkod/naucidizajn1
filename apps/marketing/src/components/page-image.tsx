import { isProposal } from "@/lib/brand";
import { ImagePlus } from "lucide-react";
import Image from "next/image";

/**
 * Prazno mesto za sliku uz tekst — i sama slika, kad stigne.
 *
 * Isto pravilo kao kod mentora, utisaka i video trake: dok slike nema, stoji
 * prazan okvir tačnih dimenzija sa uputstvom šta u njega ide. Radije prazno
 * nego tuđa slika.
 *
 * PRAVILA ZA SLIKU (ista kao za ostale slike na sajtu):
 * - Mora da bude naša ili kupljena. Nikad skinuta sa tuđeg sajta.
 * - Na tamnoj podlozi — slika sa belom pozadinom pravi svetli pravougaonik
 *   usred tamne strane.
 * - Ako se na njoj vidi tekst ili logotip, mora da bude NAŠ. Snimak nekog
 *   drugog brenda na ovoj strani tvrdi nešto što nije tačno.
 * - `alt` nije ukras: piše šta se na slici vidi, bez reči „slika".
 */
export function PageImage({
  src,
  alt,
  hint = "vodoravna slika 3:2, najmanje 1200 px široko",
  path = "/radovi/naslovna.jpg",
}: {
  /** [POPUNI] Putanja u `public/`. Prazno = prazno mesto. */
  src?: string;
  /** Obavezan kad postoji `src`. */
  alt?: string;
  /** Kratko uputstvo koje se vidi u praznom mestu. */
  hint?: string;
  /** Gde fajl treba da stoji — piše u praznom mestu. */
  path?: string;
}) {
  if (src) {
    return (
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border">
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className="flex aspect-[3/2] w-full flex-col items-center justify-center gap-3 rounded-xl border border-border border-dashed bg-panel p-6 text-center"
      title={isProposal ? `Mesto za sliku — ${path}` : undefined}
    >
      <span className="flex size-12 items-center justify-center rounded-full bg-primary">
        <ImagePlus className="size-5 text-primary-foreground" aria-hidden="true" />
      </span>
      <span className="font-medium text-foreground text-sm">Mesto za sliku</span>
      <span className="text-muted-foreground text-xs leading-relaxed">
        {hint}
        <br />
        {path}
      </span>
    </div>
  );
}
