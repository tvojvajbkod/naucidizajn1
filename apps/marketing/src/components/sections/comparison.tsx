import { comparison } from "@/lib/pricing";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui";

/** Tabela „šta da biram" — tri modela jedan pored drugog. */
export function ComparisonSection() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-medium text-2xl text-ink tracking-[-0.02em] md:text-3xl">
          Šta da izaberem
        </h2>
        <p className="mt-3 text-ink/70">
          Tri načina učenja, tri različita cilja. Ako se dvoumiš, gledaj prvi red.
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/10 bg-background">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary hover:bg-primary">
                <TableHead className="w-36 text-ink">&nbsp;</TableHead>
                <TableHead className="font-semibold text-ink">AI članstvo</TableHead>
                <TableHead className="font-semibold text-ink">Kurs</TableHead>
                <TableHead className="font-semibold text-ink">Mentorstvo 1-1</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparison.map((row) => (
                <TableRow key={row.label}>
                  <TableCell className="font-medium text-muted-foreground">{row.label}</TableCell>
                  <TableCell className="text-ink">{row.membership}</TableCell>
                  <TableCell className="text-ink">{row.course}</TableCell>
                  <TableCell className="text-ink">{row.mentorship}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
