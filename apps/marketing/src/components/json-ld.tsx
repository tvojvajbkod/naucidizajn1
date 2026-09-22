import { brand, links } from "@/lib/brand";
import { marketingEnv } from "@repo/config/marketing-env";

/**
 * JSON-LD schema markup — hrana za pretraživače i AI asistente (AEO).
 * Builderi vraćaju objekte; render ide kroz <JsonLd />.
 */

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  // Escape "<" sprečava </script> breakout ako sadržaj ikad postane dinamičan.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON.stringify + escape, bez sirovog user inputa
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

export function organizationJsonLd(): Record<string, unknown> {
  const base = marketingEnv().NEXT_PUBLIC_MARKETING_URL;
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: brand.name,
    alternateName: "Nauci Dizajn",
    url: base,
    email: brand.email,
    description:
      "Online škola dizajna na srpskom jeziku. Kursevi, mentorstvo i AI edukacija za web dizajn.",
    sameAs: [links.instagram, links.youtube, links.facebook],
  };
}

/** Course schema — koristi se na stranicama edukacija. */
export function courseJsonLd(course: {
  name: string;
  description: string;
  path: string;
}): Record<string, unknown> {
  const base = marketingEnv().NEXT_PUBLIC_MARKETING_URL;
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    url: `${base}${course.path}`,
    inLanguage: "sr",
    provider: {
      "@type": "EducationalOrganization",
      name: brand.name,
      url: base,
    },
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  date: string;
  slug: string;
}): Record<string, unknown> {
  const base = marketingEnv().NEXT_PUBLIC_MARKETING_URL;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    url: `${base}/blog/${article.slug}`,
    publisher: { "@type": "Organization", name: brand.name, url: base },
  };
}

/** Studija slučaja — Article sa jasnim autorstvom škole. */
export function caseStudyJsonLd(study: {
  title: string;
  description: string;
  slug: string;
}): Record<string, unknown> {
  const base = marketingEnv().NEXT_PUBLIC_MARKETING_URL;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.description,
    url: `${base}/studije-slucaja/${study.slug}`,
    inLanguage: "sr",
    publisher: { "@type": "Organization", name: brand.name, url: base },
  };
}

export function faqJsonLd(
  items: Array<{ question: string; answer: string }>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
