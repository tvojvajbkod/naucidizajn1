import { links, membership } from "@/lib/brand";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * Podloga ispod tamne kartice.
 *
 * Postoji zbog jednog pravila: dve sekcije jedna za drugom ne smeju da izgledaju
 * isto. CTA je poslednja sekcija na svakoj stranici, a iznad nje ne stoji uvek
 * ista stvar — tamo gde je sekcija iznad bela, CTA ide na krem.
 */
const surfaces = {
  plain: "",
  cream: "bg-cream pt-20 md:pt-24",
  muted: "bg-muted/50 pt-20 md:pt-24",
} as const;

export function CtaSection({
  title = "Prvi sajt možeš da napraviš ove nedelje",
  body = "Zajednica te čeka sa gotovim sistemom, promptovima i ljudima koji su prošli isti put pre nekoliko meseci.",
  surface = "plain",
}: {
  title?: string;
  body?: string;
  surface?: keyof typeof surfaces;
}) {
  return (
    <section className={surfaces[surface]}>
      <div className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
        <div className="rounded-3xl bg-ink px-8 py-14 text-background md:px-14 md:py-16">
          <h2 className="max-w-2xl font-medium text-3xl tracking-[-0.02em] md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl text-background/75 text-lg leading-relaxed">{body}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={links.skool}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded bg-primary px-7 py-4 font-semibold text-ink transition-transform hover:scale-[1.02]"
            >
              Pridruži se — {membership.price} mesečno
              <ArrowRight className="size-4" />
            </a>
            <Link
              href="/webinar"
              className="inline-flex items-center justify-center rounded bg-olive px-7 py-4 font-semibold text-primary transition-colors hover:bg-olive/85"
            >
              Prvo na besplatan webinar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
