import { Accent } from "@/components/accent";
import { Check, X } from "lucide-react";

const youtube = [
  "100 različitih tutorijala",
  "nema strukture",
  "nema feedbacka",
  "nema odgovornosti",
  "ne znaš šta sledeće",
];

const system = ["jasan put", "konkretni zadaci", "mentor", "zajednica", "feedback", "klijenti", "praksa"];

export function YoutubeVsSystemSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-3xl font-medium text-3xl text-foreground tracking-[-0.02em] md:text-4xl">
          Zašto da platim 99 $ kada na <Accent>YouTube</Accent> mogu da nađem sve besplatno?
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          YouTube ti daje informacije. AI Web Dizajner ti daje sistem.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-red-500/60 bg-[linear-gradient(180deg,#18181c_0%,#101014_100%)] p-7 shadow-[0_0_24px_-6px_rgba(239,68,68,0.35)]">
            <h3 className="font-semibold text-foreground text-lg">YouTube</h3>
            <ul className="mt-5 space-y-3.5">
              {youtube.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="mt-0.5 size-4 shrink-0 text-red-500" aria-hidden="true" />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-500/60 bg-[linear-gradient(180deg,#18181c_0%,#101014_100%)] p-7 shadow-[0_0_24px_-6px_rgba(16,185,129,0.35)]">
            <h3 className="font-semibold text-foreground text-lg">AI Web Dizajner</h3>
            <ul className="mt-5 space-y-3.5">
              {system.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" aria-hidden="true" />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
