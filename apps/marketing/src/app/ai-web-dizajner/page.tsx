import { RedirectHome } from "@/components/redirect-home";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

/**
 * Stara adresa edukacije — sada samo preusmerava na početnu.
 *
 * Do 28.09. je ovde stajala zasebna landing strana. Bila je podskup početne
 * plus cena, pa je posetilac kroz meni dobijao dva puta skoro isti sadržaj.
 * Sadržaj je spojen u jednu stranu (`/`), a ova adresa je ostala živa jer je
 * mogla da ode u oglas, u bio na Instagramu ili u tuđu poruku — obrisana
 * adresa bi tim ljudima dala 404.
 *
 * Sajt je statički izvoz (GitHub Pages), gde nema servera koji bi vratio 301.
 * Zato preusmerenje radi u pregledaču, a strana je `noindex` sa kanonskom
 * adresom na `/`, da se u pretrazi ne takmiči sa početnom. Za posetioca bez
 * JavaScript-a ostaje vidljiv link.
 */
export const metadata = {
  ...buildMetadata({
    title: "Postani AI web dizajner",
    description: "Stranica je premeštena na početnu stranu Nauči Dizajna.",
    path: "/",
  }),
  robots: { index: false, follow: true },
};

export default function AiWebDizajnerPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-4 px-6 text-center">
      <RedirectHome />
      <h1 className="font-medium text-2xl text-foreground tracking-[-0.02em]">
        Stranica je premeštena
      </h1>
      <p className="text-foreground/70 leading-relaxed">
        Sve o edukaciji „Postani AI web dizajner“ sada stoji na početnoj strani.
      </p>
      <Link
        href="/"
        className="rounded bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-glow"
      >
        Otvori početnu
      </Link>
    </main>
  );
}
