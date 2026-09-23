"use client";

import { SiteLogo } from "@/components/site-logo";
import { links as brandLinks } from "@/lib/brand";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@repo/ui";
import { Menu, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

/**
 * Navigacija prati jednu ponudu. Od 23.09.2026. Nauči Dizajn ima samo
 * edukaciju „Postani AI web dizajner" — kursevi, mentorstvo 1-1 i stranica sa
 * cenama su uklonjeni namerno, ne greškom. Cena sada stoji na samoj ponudi.
 */
const links: Array<{ href: string; label: string; highlight?: boolean }> = [
  { href: "/ai-web-dizajner", label: "AI Web Dizajner", highlight: true },
  { href: "/ai-web-dizajner#program", label: "Program" },
  // Vodi PRAVO na studiju slučaja, ne na spisak: postoji samo jedna, pa je
  // međukorak sa jednom karticom bio klik bez sadržaja. Spisak ostaje u futeru
  // i biće koristan kad stignu prave priče polaznika.
  { href: "/studije-slucaja/anatomija-projekta", label: "Anatomija projekta" },
  { href: "/radovi", label: "Radovi" },
  { href: "/utisci", label: "Utisci" },
  // @ludus:inject:nav:links
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-border/70 border-b bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" aria-label="Nauči Dizajn — početna" className="flex items-center text-ink">
          <SiteLogo />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.highlight
                  ? "flex items-center gap-1.5 font-medium text-ink text-sm hover:text-ink/70"
                  : "text-ink/70 text-sm hover:text-ink"
              }
            >
              {link.highlight ? <Sparkles className="size-3.5" /> : null}
              {link.label}
            </Link>
          ))}
          <a
            href={brandLinks.skool}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded bg-ink px-5 py-2.5 font-semibold text-background text-sm transition-colors hover:bg-ink/85"
          >
            Pridruži se
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex size-10 items-center justify-center rounded-lg border md:hidden"
            aria-label="Otvori meni"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="flex items-center text-ink">
                <SiteLogo />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 px-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 font-medium text-ink hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={brandLinks.skool}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-3 rounded bg-ink px-5 py-3 text-center font-semibold text-background"
              >
                Pridruži se
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
