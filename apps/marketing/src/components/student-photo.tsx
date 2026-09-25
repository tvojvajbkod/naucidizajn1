import { isProposal } from "@/lib/brand";
import type { Testimonial } from "@/lib/testimonials";
import { UserRound } from "lucide-react";
import Image from "next/image";

/**
 * Okrugla fotografija uz utisak polaznika, sa praznim mestom dok slike nema.
 *
 * Isto pravilo kao kod mentora: lice polaznika se objavljuje ISKLJUČIVO uz
 * njegovu saglasnost, i onda kad je sam utisak javan na Skool-u. Zato ovde
 * stoji prazno mesto tačnih dimenzija — kad slika stigne, upiše se `photo` u
 * `lib/testimonials.ts` i raspored se ne pomera.
 *
 * NE stavljati slike sa stocka umesto ovoga. Lažno lice uz pravi citat je gore
 * nego prazan krug.
 */
export function StudentPhoto({ item }: { item: Testimonial }) {
  if (item.photo) {
    return (
      <div className="relative size-16 overflow-hidden rounded-full">
        <Image src={item.photo} alt={item.name} fill sizes="64px" className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className="flex size-16 items-center justify-center rounded-full border border-border border-dashed bg-muted/60"
      title={
        isProposal && item.slug
          ? `Mesto za fotografiju — /utisci/${item.slug}.jpg, uz saglasnost polaznika`
          : undefined
      }
    >
      <UserRound className="size-6 text-muted-foreground/70" aria-hidden="true" />
    </div>
  );
}
