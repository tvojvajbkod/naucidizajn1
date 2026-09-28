import { CtaSection } from "@/components/sections/cta";
import { assetPath } from "@/lib/asset";
import { getPost, getPublishedPosts } from "@/lib/blog";
import { brand } from "@/lib/brand";
import { ogImage } from "@/lib/seo";
import { marketingEnv } from "@repo/config/marketing-env";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../blog.css";

// Objave stižu iz baze — ISR drži stranicu svežom bez novog deploy-a.
// U statičkom izvozu ISR ne postoji, pa se objave zamrzavaju u trenutku builda.
// Statički izvoz pravi samo objave iz generateStaticParams — nepoznat slug je 404,
// umesto pokušaja da se dohvati sa servera kojeg u tom režimu nema.
export const dynamicParams = false;

/**
 * Spisak objava koje se prave pri build-u. Na serveru je ovo samo zagrevanje
 * keša; u statičkom izvozu (GitHub Pages) je OBAVEZNO — bez njega build puca.
 *
 * Bez Supabase ključeva lista je prazna, a Next odbija PRAZAN rezultat porukom
 * „missing generateStaticParams()". Zato tada vraćamo jednu rezervnu putanju
 * koja renderuje 404 — sajt se izgradi, blog je prazan, a nijedan link ne vodi
 * na tu adresu. Čim objave postoje, rezervna putanja nestaje sama.
 */
const PRAZAN_BLOG_SLUG = "nema-objava";

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const posts = await getPublishedPosts();
  if (posts.length === 0) {
    return [{ slug: PRAZAN_BLOG_SLUG }];
  }
  return posts.map((post) => ({ slug: post.slug }));
}

function postUrl(slug: string): string {
  return `${marketingEnv().NEXT_PUBLIC_MARKETING_URL}/blog/${slug}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    return {};
  }

  const url = postUrl(post.slug);
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description ?? undefined,
      url,
      siteName: brand.name,
      type: "article",
      locale: "sr_RS",
      publishedTime: post.publishedAt ?? undefined,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description ?? undefined,
      images: [ogImage.url],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    notFound();
  }

  // Article schema za pretraživače i AI asistente. Namerno inline (bez importa
  // iz seo-aeo modula) — blog mora da radi i kad taj modul nije izabran.
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description ?? undefined,
    datePublished: post.publishedAt ?? undefined,
    url: postUrl(post.slug),
    publisher: { "@type": "Organization", name: brand.name },
  };
  // Escape "<" sprečava </script> breakout iz sadržaja objave.
  const articleLdJson = JSON.stringify(articleLd).replace(/</g, "\\u003c");

  return (
    <main>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON.stringify + escape, bez sirovog HTML-a
        dangerouslySetInnerHTML={{ __html: articleLdJson }}
      />

      <section className="border-b bg-panel">
        <div className="mx-auto max-w-3xl px-6 py-14 md:py-16">
          <Link
            href="/blog"
            className="mb-7 inline-flex w-fit items-center gap-2 text-muted-foreground text-sm hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Svi tekstovi
          </Link>
          {post.publishedAt ? (
            <p className="text-muted-foreground text-sm">
              {new Date(post.publishedAt).toLocaleDateString("sr-Latn-RS", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          ) : null}
          <h1 className="mt-3 font-medium text-3xl text-foreground leading-tight tracking-[-0.02em] md:text-[2.75rem]">
            {post.title}
          </h1>
          {post.description ? (
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{post.description}</p>
          ) : null}

          {/* Naslovna slika stoji ISPOD naslova, ne iznad: naslov i datum su ono
              zbog čega je čitalac kliknuo, pa ne treba da ih gura niže. */}
          {post.cover ? (
            <div className="relative mt-9 aspect-[16/9] w-full overflow-hidden rounded-2xl border">
              <Image
                src={assetPath(post.cover.src)}
                alt={post.cover.alt}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          ) : null}
        </div>
      </section>

      <article className="blog-article mx-auto max-w-3xl px-6 py-14">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </article>

      <CtaSection surface="panel" />
    </main>
  );
}
