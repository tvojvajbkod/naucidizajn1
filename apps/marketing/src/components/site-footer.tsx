import { SiteLogo } from "@/components/site-logo";
import { brand, isProposal, links } from "@/lib/brand";
import Link from "next/link";

const columns: Array<{ title: string; items: Array<{ href: string; label: string }> }> = [
  {
    title: "Edukacija",
    items: [
      { href: "/ai-web-dizajner", label: "AI Web Dizajner" },
      { href: "/ai-web-dizajner#program", label: "Program po mesecima" },
      { href: "/ai-web-dizajner#cena", label: "Cena i uslovi" },
      { href: "/webinar", label: "Besplatan webinar" },
    ],
  },
  {
    title: "Škola",
    items: [
      { href: "/radovi", label: "Radovi polaznika" },
      { href: "/studije-slucaja", label: "Studije slučaja" },
      { href: "/utisci", label: "Utisci studenata" },
      { href: "/o-nama", label: "O nama" },
      { href: "/blog", label: "Blog" },
    ],
  },
];

const social: Array<{ href: string; label: string }> = [
  { href: links.instagram, label: "Instagram" },
  { href: links.youtube, label: "YouTube" },
  { href: links.facebook, label: "Facebook" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link
              href="/"
              aria-label="Nauči Dizajn — početna"
              className="flex items-center text-background"
            >
              <SiteLogo />
            </Link>
            <p className="mt-4 max-w-xs text-background/65 text-sm">
              Naša misija je najbolja online edukacija na našem jeziku — dostupna svima.
            </p>
            <a
              href={`mailto:${brand.email}`}
              className="mt-4 inline-block font-medium text-background text-sm hover:underline"
            >
              {brand.email}
            </a>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="font-semibold text-background text-sm">{column.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-background/65 text-sm hover:text-background"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="font-semibold text-background text-sm">Prati nas</h2>
            <ul className="mt-4 space-y-2.5">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-background/65 text-sm hover:text-background"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isProposal ? (
          <p className="mt-12 rounded border border-background/15 bg-background/[0.06] px-4 py-3 text-background/70 text-sm leading-relaxed">
            Ovo je <strong className="text-background">predlog redizajna</strong>, a ne zvanični
            sajt Nauči Dizajna. Zvanični sajt je{" "}
            <a
              href="https://www.naucidizajn.com/"
              className="text-primary underline underline-offset-4"
              rel="noreferrer noopener"
              target="_blank"
            >
              naucidizajn.com
            </a>
            .
          </p>
        ) : null}

        <div className="mt-8 flex flex-col gap-4 border-background/15 border-t pt-6 text-background/55 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {brand.legalName}
          </span>
          <nav className="flex flex-wrap items-center gap-6">
            <Link href="/privatnost" className="hover:text-background">
              Politika privatnosti
            </Link>
            <Link href="/uslovi" className="hover:text-background">
              Uslovi korišćenja
            </Link>
            <Link href="/reklamacije" className="hover:text-background">
              Reklamacije
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
