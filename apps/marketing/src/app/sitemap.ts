import { getPublishedPosts } from "@/lib/blog";
import { caseStudies } from "@/lib/case-studies";
import { courses } from "@/lib/courses";
import { marketingEnv } from "@repo/config/marketing-env";
import type { MetadataRoute } from "next";

// Moduli mogu da dodaju dinamičke stavke (npr. blog objave) — osveži bar na sat.
// Staticki izvoz (GitHub Pages) trazi da ruta bude unapred izracunata.
export const dynamic = "force-static";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = marketingEnv().NEXT_PUBLIC_MARKETING_URL;
  const entries: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/ai-web-dizajner`, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/studije-slucaja`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/radovi`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/kursevi`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/cene`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/mentorstvo`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/webinar`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/utisci`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/o-nama`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/privatnost`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/uslovi`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/reklamacije`, changeFrequency: "yearly", priority: 0.3 },
  ];
  for (const study of caseStudies) {
    entries.push({
      url: `${base}/studije-slucaja/${study.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }
  for (const course of courses) {
    entries.push({
      url: `${base}/kursevi/${course.slug}`,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }
  entries.push({ url: `${base}/blog`, changeFrequency: "weekly", priority: 0.7 });
  for (const post of await getPublishedPosts()) {
    entries.push({
      url: `${base}/blog/${post.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }
  // @ludus:inject:sitemap:entries
  return entries;
}
