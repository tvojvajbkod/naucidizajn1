import { Accent } from "@/components/accent";
import { PageImage } from "@/components/page-image";
import { Briefcase, GraduationCap, Handshake, TrendingUp, Users, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Šta dobijaš u Skool zajednici — šest razloga da ostaneš i posle prvog
 * meseca, ne samo šta dobijaš prvog dana. Levo tekst, desno snimak ekrana
 * Skool zajednice.
 *
 * Ikonica u krugu, isti motiv kao `NextPhaseSection` (`border-primary/45` +
 * `bg-card`, limeta samo na ikonici i ivici) — sekcija je na `bg-panel`, pa
 * je krug `bg-card` da se izdvoji od podloge.
 */
interface Item {
  icon: LucideIcon;
  title: string;
  description: string;
}

const items: Item[] = [
  {
    icon: GraduationCap,
    title: "Edukacija",
    description: "AI workflow, web dizajn, Webflow, prodaja...",
  },
  {
    icon: Handshake,
    title: "Mentorstvo",
    description: "Pitanja, feedback, korekcije.",
  },
  {
    icon: Users,
    title: "Zajednica",
    description: "Ljudi koji su na istom putu.",
  },
  {
    icon: Briefcase,
    title: "Klijenti",
    description: "Sistemi za pronalaženje i kontaktiranje potencijalnih klijenata.",
  },
  {
    icon: Zap,
    title: "AI",
    description: "Novi alati, promptovi i workflow-i.",
  },
  {
    icon: TrendingUp,
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
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/45 bg-card">
                    <item.icon className="size-4 text-primary" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-foreground/70 leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <PageImage
            src="/skool/zajednica.jpg"
            alt="Skool zajednica Nauči Dizajn - naslovna strana sa objavama, mentorskim QnA najavom i statistikom zajednice"
          />
        </div>
      </div>
    </section>
  );
}
