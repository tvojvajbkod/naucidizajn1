import { BrandMark } from "@/components/brand-mark";
import { brand, isProposal, links } from "@/lib/brand";
import Link from "next/link";

const columns: Array<{ title: string; items: Array<{ href: string; label: string }> }> = [
  {
    title: "Nauči veštinu",
    items: [
      { href: "/ai-web-dizajner", label: "AI Web Dizajner" },
      { href: "/kursevi/web-dizajn", label: "Web dizajn" },
      { href: "/kursevi/ui-ux", label: "UI UX dizajn" },
      { href: "/kursevi/webflow", label: "Webflow" },
      { href: "/kursevi/logo-dizajn", label: "Logo dizajn" },
      { href: "/kursevi/motion-dizajn", label: "Motion dizajn" },
    ],
  },
  {
    title: "Škola",
    items: [
      { href: "/radovi", label: "Radovi polaznika" },
      { href: "/studije-slucaja", label: "Studije slučaja" },
      { href: "/mentorstvo", label: "Mentorstvo" },
      { href: "/cene", label: "Cene" },
      { href: "/utisci", label: "Utisci studenata" },
      { href: "/o-nama", label: "O nama" },
      { href: "/blog", label: "Blog" },
      { href: "/webinar", label: "Besplatan webinar" },
    ],
  },
];

const social: Array<{ href: string; label: string }> = [
  { href: links.instagram, label: "Instagram" },
  { href: links.youtube, label: "YouTube" },
  { href: links.facebook, label: "Facebook" },
  { href: links.tiktok, label: "TikTok" },
];

export function SiteFooter() {
  return (
    <footer className="border-border/70 border-t bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-ink text-lg">
              <BrandMark />
              <span>
                nauči<span className="text-muted-foreground">dizajn</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-muted-foreground text-sm">
              Naša misija je najbolja online edukacija na našem jeziku — dostupna svima.
            </p>
            <a
              href={`mailto:${brand.email}`}
              className="mt-4 inline-block font-medium text-ink text-sm hover:underline"
            >
              {brand.email}
            </a>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="font-semibold text-ink text-sm">{column.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-muted-foreground text-sm hover:text-ink">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="font-semibold text-ink text-sm">Prati nas</h2>
            <ul className="mt-4 space-y-2.5">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-muted-foreground text-sm hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isProposal ? (
          <p className="mt-12 rounded border border-border bg-muted/60 px-4 py-3 text-muted-foreground text-sm leading-relaxed">
            Ovo je <strong className="text-ink">predlog redizajna</strong>, a ne zvanični sajt Nauči
            Dizajna. Zvanični sajt je{" "}
            <a
              href="https://www.naucidizajn.com/"
              className="text-ink underline underline-offset-4"
              rel="noreferrer noopener"
              target="_blank"
            >
              naucidizajn.com
            </a>
            .
          </p>
        ) : null}

        <div className="mt-8 flex flex-col gap-4 border-border/70 border-t pt-6 text-muted-foreground text-sm sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {brand.legalName}
          </span>
          <nav className="flex flex-wrap items-center gap-6">
            <Link href="/privatnost" className="hover:text-ink">
              Politika privatnosti
            </Link>
            <Link href="/uslovi" className="hover:text-ink">
              Uslovi korišćenja
            </Link>
            <Link href="/reklamacije" className="hover:text-ink">
              Reklamacije
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
