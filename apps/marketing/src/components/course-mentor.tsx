import { MentorPhoto } from "@/components/mentor-photo";
import { getMentor } from "@/lib/testimonials";

/**
 * Ko predaje na ovom kursu.
 *
 * Zatečeni sajt svakoj kursnoj strani daje blok „Upoznaj svog mentora" sa
 * fotografijom — a to je jedini deo strane koji pokazuje čoveka. Naš sajt ga
 * do sada nije imao uopšte.
 *
 * Fotografije nisu preuzete sa njihovog sajta: to su slike stvarnih ljudi i
 * traže njihovu saglasnost. Zato stoji prazno mesto tačnih dimenzija — kad
 * slika stigne, upiše se `photo` uz tog mentora u `lib/testimonials.ts`.
 */
export function CourseMentor({ mentorSlug }: { mentorSlug: string }) {
  const mentor = getMentor(mentorSlug);
  if (!mentor) return null;

  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[260px_1fr] md:gap-14">
        <MentorPhoto mentor={mentor} />

        <div>
          <p className="font-medium text-primary text-sm uppercase tracking-[0.14em]">
            Ko te uči na ovom kursu
          </p>
          <h2 className="mt-4 font-medium text-3xl text-background tracking-[-0.02em] md:text-4xl">
            {mentor.name}
          </h2>
          <p className="mt-1.5 font-medium text-background/60">{mentor.role}</p>
          <p className="mt-5 max-w-xl text-background/75 text-lg leading-relaxed">{mentor.bio}</p>
        </div>
      </div>
    </section>
  );
}
