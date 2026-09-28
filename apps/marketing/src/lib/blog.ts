import { localPosts } from "@/lib/posts";
import { marketingEnv } from "@repo/config/marketing-env";
import { createClient } from "@supabase/supabase-js";

/**
 * Blog objave — dva izvora, namerno.
 *
 * 1. `lib/posts.ts` — objave koje žive u repozitorijumu i ulaze u build. Ovo je
 *    izvor koji radi na GitHub Pages-u, gde nema Supabase ključeva.
 * 2. Supabase — objave iz admin portala. Anon klijent, RLS pušta isključivo
 *    objavljene (`published = true`). Bez ključeva se ovaj izvor preskače; to
 *    je očekivano stanje, ne greška.
 *
 * Spisak je spoj oba, poređan po datumu (najnovija prva). Ako isti `slug`
 * postoji na oba mesta, pobeđuje objava iz baze — tako se tekst iz koda može
 * ispraviti iz admin portala bez novog deploy-a.
 */

/** Naslovna slika objave. Stoji u zaglavlju teksta i na kartici u spisku. */
export interface BlogCover {
  /** Putanja u `public/`, npr. „/blog/ime-objave.jpg". */
  src: string;
  /**
   * Opis za čitače ekrana i za slučaj da se slika ne učita. Piše ŠTA SE VIDI,
   * bez reči „slika" — to čitač ekrana već kaže.
   */
  alt: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string | null;
  /** Objave iz baze je nemaju; postavlja se samo za objave iz `posts.ts`. */
  cover?: BlogCover;
}

interface PostRow {
  slug: string;
  title: string;
  description: string;
  content: string;
  published_at: string | null;
}

const POST_COLUMNS = "slug, title, description, content, published_at";

function blogClient() {
  const env = marketingEnv();
  if (!env.NEXT_PUBLIC_SUPABASE_URL || !env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return null;
  }
  return createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    auth: { persistSession: false },
  });
}

function toPost(row: PostRow): BlogPost {
  return {
    slug: row.slug,
    title: row.title,
    description: row.description,
    content: row.content,
    publishedAt: row.published_at,
  };
}

/** Najnovija prva. Objave bez datuma idu na kraj. */
function byDateDesc(a: BlogPost, b: BlogPost): number {
  return (b.publishedAt ?? "").localeCompare(a.publishedAt ?? "");
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const supabase = blogClient();
  if (!supabase) {
    return [...localPosts].sort(byDateDesc);
  }
  const { data, error } = await supabase
    .from("posts")
    .select(POST_COLUMNS)
    .order("published_at", { ascending: false });
  if (error) {
    throw new Error(`Čitanje blog objava nije uspelo: ${error.message}`);
  }
  const fromDb = ((data ?? []) as PostRow[]).map(toPost);
  const dbSlugs = new Set(fromDb.map((post) => post.slug));
  return [...fromDb, ...localPosts.filter((post) => !dbSlugs.has(post.slug))].sort(byDateDesc);
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  // Slug dolazi iz URL-a — pusti samo [a-z0-9-] pre upita.
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return null;
  }
  const local = localPosts.find((post) => post.slug === slug) ?? null;

  const supabase = blogClient();
  if (!supabase) {
    return local;
  }
  const { data, error } = await supabase
    .from("posts")
    .select(POST_COLUMNS)
    .eq("slug", slug)
    .maybeSingle();
  if (error) {
    throw new Error(`Čitanje blog objave nije uspelo: ${error.message}`);
  }
  return data ? toPost(data as PostRow) : local;
}
