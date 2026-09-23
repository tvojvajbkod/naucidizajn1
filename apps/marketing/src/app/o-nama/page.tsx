import { CtaSection } from "@/components/sections/cta";
import { MentorsSection } from "@/components/sections/mentors";
import { brand, stats } from "@/lib/brand";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "O nama",
  description:
    "Nauči Dizajn je online škola dizajna na srpskom jeziku. Od 2020. kroz naše edukacije prošlo je preko 4.600 polaznika.",
  path: "/o-nama",
});

export default function ONamaPage() {
  return (
    <main>
      <section className="border-b bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h1 className="max-w-3xl font-medium text-4xl text-ink leading-tight tracking-[-0.02em] md:text-5xl">
            Najbolja online edukacija na našem jeziku — dostupna svima
          </h1>
          {/* AEO: prvi pasus odgovara na „šta je Nauči Dizajn". */}
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {brand.name} je online škola dizajna koja od 2020. uči ljude sa našeg govornog područja
            veštinama od kojih se živi. Danas sve to stoji u jednoj edukaciji — „Postani AI web
            dizajner": izrada sajtova uz veštačku inteligenciju, dolazak do klijenata, SEO, AI
            automatizacije i napredni web dizajn. Kroz naše edukacije prošlo je preko{" "}
            {stats.studentsSince2020} polaznika.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="font-medium text-2xl text-ink tracking-[-0.02em] md:text-3xl">
          U šta verujemo
        </h2>
        <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-ink">Uči se radeći.</strong> Snimci su najlakši deo. Ono što
            pravi razliku su zadaci koji liče na prave projekte i neko ko ih pregleda i vrati na
            doradu.
          </p>
          <p>
            <strong className="text-ink">Predaju ljudi iz prakse.</strong> Dizajn za klijente radi
            se svakog dana, ne predaje iz udžbenika. Zato se gradivo menja kad se promene alati, a
            ne na svakih pet godina.
          </p>
          <p>
            <strong className="text-ink">Znanje bez klijenata ne plaća račune.</strong> Zato dobar
            deo programa govori o tome kako se dolazi do posla, koliko se naplaćuje i kako se
            razgovara sa klijentom.
          </p>
          <p>
            <strong className="text-ink">Bez obećanja koja ne možemo da održimo.</strong> Ne
            garantujemo zaposlenje ni zaradu. Garantujemo sistem, ljude koji ga koriste i to da
            članstvo otkazuješ sam, u svakom trenutku.
          </p>
        </div>
      </section>

      <MentorsSection />
      <CtaSection />
    </main>
  );
}
