import { brand } from "@/lib/brand";
import { marketingEnv } from "@repo/config/marketing-env";
import type { Metadata } from "next";

/** Jedinstven način da stranica dobije kompletan metadata blok (OG + canonical). */
/**
 * Slika koja se vidi kad se link podeli (Viber, Instagram, Facebook, LinkedIn).
 * Bez nje deljenje sajta izgleda kao goli tekst — a ovaj sajt se i pravi zato
 * da bi se delio. Fajl je u `public/og.png`, 1200 × 630 px.
 */
export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${brand.name} — ${brand.tagline}`,
} as const;

export function buildMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const base = marketingEnv().NEXT_PUBLIC_MARKETING_URL;
  const url = `${base}${input.path}`;
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: brand.name,
      type: "website",
      locale: "sr_RS",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [ogImage.url],
    },
  };
}
