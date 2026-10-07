import { Accent } from "@/components/accent";
import { CtaSection } from "@/components/sections/cta";
import { assetPath } from "@/lib/asset";
import { getPublishedPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Tekstovi o web dizajnu uz AI, dolasku do klijenata i naplati - iz prakse Nauči Dizajna, na srpskom.",
  path: "/blog",
});

// Objave stižu iz baze — ISR drži stranicu svežom bez novog deploy-a.
export const revalidate = 60;

function formatDate(value: string | null): string {
  if (!value) return "";
  return new Date(value).toLocaleDateString("sr-Latn-RS", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <main>
      <section className="border-b bg-panel">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h1 className="max-w-3xl font-medium text-4xl text-foreground leading-tight tracking-[-0.02em] md:text-5xl">
            Blog
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Kratki tekstovi iz prakse: kako se dolazi do klijenata, kako se radi uz AI i kako se
            posao naplaćuje. Bez opštih saveta - svaki tekst ima postupak koji možeš da primeniš
            istog dana.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        {posts.length > 0 ? (
          <ul className="grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-colors hover:border-primary/40"
                >
                  {post.cover ? (
                    <div className="relative aspect-[16/9] w-full overflow-hidden border-b">
                      <Image
                        src={assetPath(post.cover.src)}
                        alt={post.cover.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-7">
                    {post.publishedAt ? (
                      <p className="text-muted-foreground text-sm">
                        {formatDate(post.publishedAt)}
                      </p>
                    ) : null}
                    <h2 className="mt-3 font-medium text-foreground text-xl leading-snug tracking-[-0.01em]">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{post.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-medium text-primary text-sm">
                      Pročitaj
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          /* Prazno stanje je namerno i objašnjeno - isto pravilo kao na /radovi. */
          <div className="max-w-2xl rounded-2xl border bg-card p-8 md:p-10">
            <h2 className="font-medium text-2xl text-foreground tracking-[-0.02em]">
              <Accent>Prvi tekst</Accent> se piše
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Ovde će stajati tekstovi iz prakse. Dok ih nema, ceo postupak od prve poruke klijentu
              do naplate možeš da pročitaš u studiji slučaja.
            </p>
          </div>
        )}
      </section>

      <CtaSection surface="panel" />
    </main>
  );
}
