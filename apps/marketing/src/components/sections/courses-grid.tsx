import { CourseBadge } from "@/components/course-badge";
import { courses } from "@/lib/courses";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function CoursesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {heading ? (
        <div className="max-w-2xl">
          <h2 className="font-medium text-3xl text-ink tracking-[-0.02em] md:text-4xl">
            Šest oblasti, jedan tempo — tvoj
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Svaki kurs vodi do konkretnog rada u portfoliju. Izaberi veštinu, ne paket.
          </p>
        </div>
      ) : (
        // Bez ovoga stranica skače sa H1 pravo na H3 kartica — čitač ekrana
        // i pretraživač to vide kao rupu u hijerarhiji.
        <h2 className="sr-only">Svi kursevi</h2>
      )}

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Link
            key={course.slug}
            href={`/kursevi/${course.slug}`}
            className="group flex flex-col rounded-2xl border bg-card p-7 transition-colors hover:border-ink/30"
          >
            <div className="flex items-start justify-between gap-4">
              <CourseBadge slug={course.slug} title={course.title} />
              <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <h3 className="mt-5 font-semibold text-ink text-xl">{course.title}</h3>
            <p className="mt-2 flex-1 text-muted-foreground leading-relaxed">{course.tagline}</p>
            <p className="mt-5 text-muted-foreground text-sm">
              {course.episodes} · {course.hours} · {course.tool}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
