import { CtaSection } from "@/components/sections/cta";
import { ProofSection } from "@/components/sections/proof";
import { stats } from "@/lib/brand";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Utisci studenata",
  description:
    "Utisci polaznika Nauči Dizajna sa sajta i iz Skool zajednice - uz podatak koliko dugo je svaki član i dalje aktivan.",
  path: "/utisci",
});

export default function UtisciPage() {
  return (
    <main>
      {/* Tamni hero, a ne svetlosiv kao na ostalim unutrašnjim stranicama:
          odmah ispod stoji siva sekcija sa utiscima, pa bi dve svetle sive
          podloge jedna do druge izgledale kao jedna duga sekcija. */}
      <section className="bg-panel">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h1 className="max-w-3xl font-medium text-4xl text-foreground leading-tight tracking-[-0.02em] md:text-5xl">
            Utisci studenata
          </h1>
          <p className="mt-5 max-w-2xl text-foreground/75 text-lg leading-relaxed">
            Svi utisci ovde su preuzeti sa naših kanala - sa sajta i iz Skool zajednice. Uz
            recenzije iz zajednice stoji i koliko dugo je taj čovek i dalje član koji plaća, jer je
            to podatak koji se ne može ulepšati.
          </p>

          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <dt className="text-foreground/60 text-sm">Ocena zajednice</dt>
              <dd className="mt-1 font-medium text-2xl text-foreground">{stats.skoolRating} / 5</dd>
            </div>
            <div>
              <dt className="text-foreground/60 text-sm">Zadovoljnih polaznika</dt>
              <dd className="mt-1 font-medium text-2xl text-foreground">{stats.satisfaction}</dd>
            </div>
            <div>
              <dt className="text-foreground/60 text-sm">Ocena rada sa mentorom</dt>
              <dd className="mt-1 font-medium text-2xl text-foreground">{stats.mentorshipScore}</dd>
            </div>
            <div>
              <dt className="text-foreground/60 text-sm">Polaznika od 2020.</dt>
              <dd className="mt-1 font-medium text-2xl text-foreground">
                {stats.studentsSince2020}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <ProofSection />
      <CtaSection surface="panel" />
    </main>
  );
}
