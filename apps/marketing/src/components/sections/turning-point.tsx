import { Clock, TrendingUp, Users } from "lucide-react";

/**
 * Odgovara na nemo pitanje „zašto baš sad" — bez kojeg ceo AI ugao zvuči
 * kao još jedan kurs. Tri argumenta, bez superlativa.
 */
const points = [
  {
    icon: Clock,
    title: "Izrada više nije usko grlo",
    body: "Ono što je nekad tražilo mesece učenja alata sada staje u nekoliko sati rada sa AI-em. Vreme koje si trošio na izradu sada ide na traženje klijenata.",
  },
  {
    icon: Users,
    title: "Ogroman broj firmi još nema pristojan sajt",
    body: "Male firme, zanatlije i lokalne usluge posluju sa stranicom na Instagramu ili sajtom od pre deset godina. To je tržište koje ne traži agenciju, nego nekoga ko je dostupan i brz.",
  },
  {
    icon: TrendingUp,
    title: "Prednost ima onaj ko prvi uđe",
    body: "Alati su svima dostupni, ali malo ko zna kako da od njih napravi uslugu koja se naplaćuje. Ta razlika se neće držati zauvek.",
  },
];

export function TurningPointSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="max-w-2xl">
        <h2 className="font-bold text-3xl text-ink tracking-tight md:text-4xl">Zašto baš sad</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Web dizajn se u poslednje dve godine promenio više nego u prethodnih deset. Evo šta je
          konkretno drugačije.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {points.map((point) => (
          <div key={point.title} className="rounded-2xl border bg-card p-7">
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary">
              <point.icon className="size-5 text-ink" />
            </div>
            <h3 className="mt-5 font-semibold text-ink text-lg">{point.title}</h3>
            <p className="mt-2.5 text-muted-foreground leading-relaxed">{point.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
