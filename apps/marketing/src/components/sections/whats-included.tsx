import { Accent } from "@/components/accent";
import { PageImage } from "@/components/page-image";

/**
 * Šta dobijaš u Skool zajednici — šest razloga da ostaneš i posle prvog
 * meseca, ne samo šta dobijaš prvog dana. Levo tekst, desno mesto za sliku
 * (snimak ekrana Skool zajednice, kad stigne).
 */
interface Item {
  emoji: string;
  title: string;
  description: string;
}

const items: Item[] = [
  {
    emoji: "🎓",
    title: "Edukacija",
    description: "AI workflow, web dizajn, Webflow, prodaja...",
  },
  {
    emoji: "🤝",
    title: "Mentorstvo",
    description: "Pitanja, feedback, korekcije.",
  },
  {
    emoji: "👥",
    title: "Zajednica",
    description: "Ljudi koji su na istom putu.",
  },
  {
    emoji: "💼",
    title: "Klijenti",
    description: "Sistemi za pronalaženje i kontaktiranje potencijalnih klijenata.",
  },
  {
    emoji: "🧠",
    title: "AI",
    description: "Novi alati, promptovi i workflow-i.",
  },
  {
    emoji: "📈",
    title: "Napredak",
    description: "Novi projekti, portfolio i veće cene.",
  },
];

export function WhatsIncludedSection() {
  return (
    <section id="sta-dobijas" className="scroll-mt-20 bg-panel py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <h2 className="font-medium text-3xl text-foreground tracking-[-0.02em] md:text-4xl">
              Šta <Accent tone="lime">dobijaš</Accent> u Skool zajednici
            </h2>
            <p className="mt-4 text-foreground/75 text-lg">
              Svakog meseca dobijaš razlog da nastaviš.
            </p>

            <ul className="mt-10 space-y-6">
              {items.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="text-2xl leading-none" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-foreground/70 leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <PageImage hint="vodoravna slika 3:2 — snimak ekrana Skool zajednice" path="/skool/zajednica.jpg" />
        </div>
      </div>
    </section>
  );
}
