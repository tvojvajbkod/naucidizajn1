import { MentorPhoto } from "@/components/mentor-photo";
import { featuredMentors } from "@/lib/testimonials";

/**
 * „Ko te vodi" — od 23.09.2026. edukaciju vodi jedan čovek, pa sekcija više
 * nije mreža od tri kartice nego jedan blok: slika levo, tekst desno. Ako se
 * mentori vrate, raspored se vraća na mrežu (vidi istoriju fajla).
 */
export function MentorsSection() {
  const mentor = featuredMentors[0];
  if (!mentor) return null;

  return (
    <section id="mentori" className="bg-ink py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-medium text-3xl text-background tracking-[-0.02em] md:text-4xl">
            Ko te vodi
          </h2>
          <p className="mt-4 text-background/75 text-lg">
            Ne predaje se iz udžbenika. Gradivo se menja kad se promene alati — zato se sastanci i
            drže svake nedelje, uživo.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-8 rounded-2xl border border-background/15 bg-background/[0.06] p-6 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-12 md:p-10">
          <MentorPhoto mentor={mentor} />
          <div>
            <h3 className="font-semibold text-2xl text-background">{mentor.name}</h3>
            <p className="mt-1 font-medium text-primary">{mentor.role}</p>
            <p className="mt-4 text-background/70 text-lg leading-relaxed">{mentor.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
