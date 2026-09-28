import { assetPath } from "@/lib/asset";
import { isProposal } from "@/lib/brand";
import type { Mentor } from "@/lib/testimonials";
import { ImagePlus } from "lucide-react";
import Image from "next/image";

/**
 * Fotografija mentora, sa praznim mestom dok slike nema.
 *
 * Prave fotografije mentora nisu preuzete sa zatečenog sajta — to su slike
 * stvarnih ljudi i traže njihovu saglasnost, ne samo tehnički pristup fajlu.
 * Zato ovde stoji prazno mesto tačnih dimenzija: kad slika stigne, upiše se
 * `photo` u `lib/testimonials.ts` i ništa drugo se ne menja.
 */
export function MentorPhoto({ mentor }: { mentor: Mentor }) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-foreground/[0.06]">
      {mentor.photo ? (
        <Image
          src={assetPath(mentor.photo)}
          alt={`${mentor.name}, ${mentor.role}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 border border-background/20 border-dashed px-5 text-center">
          <span className="flex size-11 items-center justify-center rounded-full bg-primary">
            <ImagePlus className="size-5 text-primary-foreground" />
          </span>
          <span className="font-medium text-foreground/70 text-sm">Mesto za fotografiju</span>
          {isProposal ? (
            <span className="text-foreground/40 text-xs leading-relaxed">
              uspravna, min. 800 × 1000 px
              <br />
              <code className="font-sans">/mentori/{mentor.slug}.jpg</code>
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
}
