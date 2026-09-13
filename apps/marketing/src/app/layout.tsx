import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { marketingEnv } from "@repo/config/marketing-env";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
// Fontovi se isporučuju SA sajtom (@fontsource), ne povlače se sa Google-a.
// Build zato radi i bez mreže, a posetilac ne šalje zahtev trećoj strani.
import "@fontsource/archivo/400.css";
import "@fontsource/archivo/500.css";
import "@fontsource/archivo/600.css";
import "@fontsource/archivo/700.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource/anton/400.css";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { MetaPixel } from "@/components/analytics/meta-pixel";
import { JsonLd, organizationJsonLd } from "@/components/json-ld";
import { brand, isProposal } from "@/lib/brand";
import { ConsentBanner } from "@repo/ui/consent";

export const metadata: Metadata = {
  metadataBase: new URL(marketingEnv().NEXT_PUBLIC_MARKETING_URL),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Online škola dizajna na srpskom. Nauči da praviš sajtove uz pomoć AI-a i dođi do prvog plaćenog klijenta za 30 dana.",
  // Predlog se ne indeksira — vidi `isProposal` u src/lib/brand.ts.
  ...(isProposal ? { robots: { index: false, follow: false } } : {}),
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
