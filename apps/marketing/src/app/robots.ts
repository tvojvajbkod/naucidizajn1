import { marketingEnv } from "@repo/config/marketing-env";
import type { MetadataRoute } from "next";

// Staticki izvoz (GitHub Pages) trazi da ruta bude unapred izracunata.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = marketingEnv().NEXT_PUBLIC_MARKETING_URL;
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
