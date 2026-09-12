import { mentors } from "@/lib/testimonials";

export function MentorsSection() {
  return (
    <section id="mentori" className="bg-muted/50 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-bold text-3xl text-ink tracking-tight md:text-4xl">Ko te vodi</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ljudi koji dizajn rade za klijente svakog dana, a ne predaju ga iz udžbenika. To je i
            razlog zašto se materijal menja kad se promene alati.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {mentors.map((mentor) => (
            <div key={mentor.name} className="rounded-2xl border bg-card p-7">
              <div className="flex size-12 items-center justify-center rounded-full bg-ink font-bold text-background text-lg">
                {mentor.name.charAt(0)}
              </div>
              <h3 className="mt-5 font-semibold text-ink text-lg">{mentor.name}</h3>
              <p className="mt-1 font-medium text-muted-foreground text-sm">{mentor.role}</p>
              <p className="mt-3 text-muted-foreground leading-relaxed">{mentor.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
