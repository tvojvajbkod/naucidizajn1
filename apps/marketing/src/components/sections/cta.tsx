import { links, membership } from "@/lib/brand";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaSection({
  title = "Prvi sajt možeš da napraviš ove nedelje",
  body = "Zajednica te čeka sa gotovim sistemom, promptovima i ljudima koji su prošli isti put pre nekoliko meseci.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
      <div className="rounded-3xl bg-ink px-8 py-14 text-background md:px-14 md:py-16">
        <h2 className="max-w-2xl font-bold text-3xl tracking-tight md:text-4xl">{title}</h2>
        <p className="mt-4 max-w-xl text-background/75 text-lg leading-relaxed">{body}</p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={links.skool}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-ink transition-transform hover:scale-[1.02]"
          >
            Pridruži se — {membership.price} mesečno
            <ArrowRight className="size-4" />
          </a>
          <Link
            href="/webinar"
            className="inline-flex items-center justify-center rounded-full border border-background/25 px-7 py-3.5 font-semibold text-background transition-colors hover:bg-background/10"
          >
            Prvo na besplatan webinar
          </Link>
        </div>
      </div>
    </section>
  );
}
