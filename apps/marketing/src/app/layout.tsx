import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { marketingEnv } from "@repo/config/marketing-env";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { MetaPixel } from "@/components/analytics/meta-pixel";
import { JsonLd, organizationJsonLd } from "@/components/json-ld";
import { brand } from "@/lib/brand";
import { ConsentBanner } from "@repo/ui/consent";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(marketingEnv().NEXT_PUBLIC_MARKETING_URL),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Online škola dizajna na srpskom. Nauči da praviš sajtove uz pomoć AI-a i dođi do prvog plaćenog klijenta za 30 dana.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sr">
      <body
        className={`${spaceGrotesk.variable} flex min-h-screen flex-col bg-paper font-sans text-ink antialiased`}
      >
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
