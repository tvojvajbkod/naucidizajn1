import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

/**
 * „Članstvo nije za mene" — umesto da takav posetilac ode, dobija druga dva
 * puta. Zatečeni sajt ova tri modela nigde nije poredio.
 */
const paths = [
  {
    href: "/kursevi",
    title: "Snimljeni kursevi",
    price: "od 99 € jednokratno",
    body: "Šest oblasti, od web dizajna do motion dizajna. Učiš svojim tempom, bez mesečne obaveze. Za one koji hoće zanat pre zarade.",
  },
  {
    href: "/mentorstvo",
    title: "Mentorstvo 1-1",
    price: "od 200 € mesečno",
    body: "Šest meseci sa ličnim mentorom i sastankom svake nedelje. Za one koji menjaju karijeru i hoće da neko prati svaki njihov korak.",
  },
];

export function PathsSection() {
  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-medium text-3xl text-ink tracking-[-0.02em] md:text-4xl">
            Članstvo nije jedini put
          </h2>
          <p className="mt-4 text-ink/70 text-lg">
            Ako ti mesečna obaveza ne odgovara ili hoćeš temeljnije da savladaš zanat, postoje još
            dva načina. Puno poređenje je na{" "}
            <Link href="/cene" className="font-medium text-ink underline underline-offset-4">
              stranici Cene
            </Link>
            .
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {paths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="group rounded-2xl border border-ink/10 bg-background p-7 transition-colors hover:border-ink/30"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-ink text-xl">{path.title}</h3>
                <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="mt-1 font-medium text-muted-foreground text-sm">{path.price}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">{path.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
