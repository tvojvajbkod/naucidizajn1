import {
  Calculator,
  CalendarDays,
  Handshake,
  type LucideIcon,
  MessageSquareQuote,
  Search,
  Sparkles,
  Wand2,
} from "lucide-react";

/**
 * Šta se tačno dobija za mesečno članstvo. Stavke su preuzete iz opisa
 * zajednice — ništa dodato, ništa ulepšano, jer se svaka može proveriti.
 */
interface Item {
  title: string;
  description: string;
  icon: LucideIcon;
}

const items: Item[] = [
  {
    title: "Ceo sajt uz pomoć AI-a, bez koda",
    description:
      "Od prazne strane do gotovog sajta: struktura, tekst, slike i objava. Korak po korak, na primeru koji radiš zajedno sa nama.",
    icon: Wand2,
  },
  {
    title: "Biblioteka promptova",
    description:
      "Gotovi upiti za strukturu, tekstove i ispravke. Ne pogađaš formulaciju — koristiš onu koja je već dala rezultat.",
    icon: Sparkles,
  },
  {
    title: "Gde se nalaze klijenti",
    description:
      "Konkretna mesta i vrste firmi kojima sajt stvarno treba, i redosled kojim ih obrađuješ da ne bi gubio dane na pogrešne ljude.",
    icon: Search,
  },
  {
    title: "Poruke za obraćanje koje dobijaju odgovor",
    description:
      "Šabloni prve poruke, podsetnika i odgovora na „razmisliću“. Prepisuješ, prilagođavaš i šalješ.",
    icon: MessageSquareQuote,
  },
  {
    title: "Kalkulator cene projekta",
    description:
      "Koliko da tražiš za jednostavan sajt, a koliko za složeniji — da ne radiš ispod cene niti otkažeš posao previsokim brojem.",
    icon: Calculator,
  },
  {
    title: "Kako da prodaš svoj dizajn",
    description:
      "Razgovor sa klijentom, predstavljanje rešenja, ispravke i naplata. Deo koji obično odluči hoće li biti i drugi projekat.",
    icon: Handshake,
  },
  {
    title: "Grupni sastanak svake nedelje",
    description:
      "Uživo, sa mentorima. Pokazuješ šta si uradio, dobijaš ispravke. Sastanci se snimaju, pa propušten termin nije propušteno gradivo.",
    icon: CalendarDays,
  },
];

export function WhatsIncludedSection() {
  return (
    <section id="sta-dobijas" className="bg-ink py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-medium text-3xl text-background tracking-[-0.02em] md:text-4xl">
            Šta dobijaš za članarinu
          </h2>
          <p className="mt-4 text-background/75 text-lg">
            Sve na jednom mestu, na srpskom. Pola programa je izrada, pola je nalaženje klijenata i
            naplata — jer prvo bez drugog ne donosi novac.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-background/15 bg-background/[0.06] p-6"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary">
                <item.icon className="size-5 text-ink" />
              </div>
              <h3 className="mt-4 font-semibold text-background">{item.title}</h3>
              <p className="mt-2 text-background/70 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
