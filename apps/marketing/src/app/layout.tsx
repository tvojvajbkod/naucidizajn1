import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { marketingEnv } from "@repo/config/marketing-env";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
// Fontovi se isporučuju SA sajtom (@fontsource), ne povlače se sa Google-a.
// Build zato radi i bez mreže, a posetilac ne šalje zahtev trećoj strani.
// Samo latin + latin-ext: latin-ext nosi naša slova (č, ć, š, ž, đ), latin
// nosi cifre i osnovna slova. Vijetnamski podskup je izbačen — 10 fajlova
// koje niko na ovom sajtu nikada ne pročita.
import "@fontsource/archivo/latin-400.css";
import "@fontsource/archivo/latin-ext-400.css";
import "@fontsource/archivo/latin-500.css";
import "@fontsource/archivo/latin-ext-500.css";
import "@fontsource/archivo/latin-600.css";
import "@fontsource/archivo/latin-ext-600.css";
import "@fontsource/archivo/latin-700.css";
import "@fontsource/archivo/latin-ext-700.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "@fontsource/instrument-serif/latin-ext-400-italic.css";
import "@fontsource/anton/latin-400.css";
import "@fontsource/anton/latin-ext-400.css";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { MetaPixel } from "@/components/analytics/meta-pixel";
import { JsonLd, organizationJsonLd } from "@/components/json-ld";
import { brand, isProposal } from "@/lib/brand";
import { ogImage } from "@/lib/seo";
import { ConsentBanner } from "@repo/ui/consent";

const siteTitle = `${brand.name} — ${brand.tagline}`;
const siteDescription =
  "Online škola dizajna na srpskom. Nauči da praviš sajtove uz pomoć AI-a i dođi do prvog plaćenog klijenta za 30 dana.";

export const metadata: Metadata = {
  metadataBase: new URL(marketingEnv().NEXT_PUBLIC_MARKETING_URL),
  title: {
    default: siteTitle,
    template: `%s | ${brand.name}`,
  },
  description: siteDescription,
  // Podrazumevani OG blok — stranice bez `buildMetadata` (blog, pravne strane)
  // i dalje imaju sliku i opis kad se link podeli.
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: brand.name,
    type: "website",
    locale: "sr_RS",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage.url],
  },
  // Predlog se ne indeksira — vidi `isProposal` u src/lib/brand.ts.
  ...(isProposal ? { robots: { index: false, follow: false } } : {}),
};

/** Boja trake pregledača na telefonu — ista kao hero. */
export const viewport = {
  themeColor: "#232421",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sr">
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink antialiased">
        <SiteNav />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <JsonLd data={organizationJsonLd()} />
        {/* @ludus:inject:seo:jsonld */}
        <ConsentBanner />
        <GoogleAnalytics />
        <MetaPixel />
        {/* @ludus:inject:analytics:scripts */}
      </body>
    </html>
  );
}
