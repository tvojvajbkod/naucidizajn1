import type { NextConfig } from "next";
import "../../packages/config/env-load.mjs";

/**
 * Konzervativni security headeri — bezbedan default koji ništa ne lomi.
 * Strogi CSP je namerno izostavljen: zahteva nonce setup i allowlist za
 * analitiku, pa ga uvodi tek onaj kome zatreba (vidi CLAUDE.md, Bezbednost).
 */
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

/**
 * Statički izvoz za GitHub Pages.
 *
 * Uključuje se SAMO kad je `STATIC_EXPORT=1` — normalan `bun run dev` i deploy
 * na Vercel prolaze nepromenjeni. Razlog je što statički izvoz isključuje sve
 * što traži server: security headere, ISR i server rendering.
 *
 * `NEXT_PUBLIC_BASE_PATH` je podfolder na kom sajt živi. GitHub Pages servira
 * projekat na `https://korisnik.github.io/ime-repozitorijuma/`, pa bez ovoga
 * sve putanje pucaju. Za sopstveni domen ili `korisnik.github.io` repozitorijum
 * ostavi prazno.
 */
const isStaticExport = process.env.STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/config", "@repo/ui"],

  ...(isStaticExport
    ? {
        output: "export" as const,
        // Bez servera nema optimizacije slika u hodu — služe se kako jesu.
        images: { unoptimized: true },
        // Svaka strana dobija svoj folder sa index.html, pa staticki server
        // pogađa pravu datoteku i bez pravila za prepisivanje URL-ova.
        trailingSlash: true,
        ...(basePath ? { basePath, assetPrefix: basePath } : {}),
      }
    : {
        // `headers()` postoji samo kad iza sajta stoji server.
        async headers() {
          return [{ source: "/(.*)", headers: securityHeaders }];
        },
      }),
};

export default nextConfig;
