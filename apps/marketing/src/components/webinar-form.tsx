"use client";

import { brand, forms, isProposal } from "@/lib/brand";
import { ArrowRight, Check, Mail } from "lucide-react";
import Link from "next/link";
import { type FormEvent, useState } from "react";

/**
 * Prijava na webinar na statičkom sajtu.
 *
 * Zatečeno stanje: dugme „Rezerviši mesto" vodilo je na sidro `#prijava` i
 * nije skupljalo ništa. Sajt koji ne skuplja kontakte gubi svakog posetioca
 * koji nije spreman da plati istog trenutka — a to je većina.
 *
 * Dva režima, oba rade bez servera:
 * 1) `forms.webinar` popunjen  → prijava ide spoljnom servisu (fetch POST).
 * 2) `forms.webinar` prazan    → otvara se mejl sa već napisanom porukom.
 *
 * Pristanak je izdvojeno polje i nije unapred štikliran — po ZZPL-u pristanak
 * mora biti radnja, ne podrazumevano stanje.
 */

type State = "idle" | "sending" | "done" | "error";

const MAILTO_SUBJECT = "Prijava na besplatan webinar";

export function WebinarForm() {
  const [state, setState] = useState<State>("idle");
  const [email, setEmail] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Mamac za robote: polje je sakriveno od ljudi, pa ako je popunjeno —
    // popunio ga je bot. Tiho odustajemo.
    if (data.get("website")) return;

    const name = String(data.get("name") ?? "");
    const mail = String(data.get("email") ?? "");

    if (!forms.webinar) {
      const body = `Ime: ${name}\nEmail: ${mail}\n\nPrijavljujem se na besplatan webinar.`;
      window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(
        MAILTO_SUBJECT,
      )}&body=${encodeURIComponent(body)}`;
      setEmail(mail);
      setState("done");
      return;
    }

    setState("sending");
    try {
      const response = await fetch(forms.webinar, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error(String(response.status));
      setEmail(mail);
      setState("done");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-2xl border border-ink/10 bg-cream p-8 text-center md:p-10">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary">
          <Check className="size-6 text-ink" />
        </span>
        <h3 className="mt-5 font-medium text-2xl text-ink tracking-[-0.02em]">Prijava je stigla</h3>
        <p className="mx-auto mt-3 max-w-md text-ink/70 leading-relaxed">
          {forms.webinar
            ? `Termin i link šaljemo na ${email}. Ako poruka ne stigne za nekoliko minuta, pogledaj i „Promocije" ili spam.`
            : "Ostalo je još samo da pošalješ poruku koja ti se upravo otvorila u mejlu."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-ink/10 bg-cream p-7 md:p-9">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="font-medium text-ink text-sm">Ime i prezime</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Marko Marković"
            className="mt-2 h-11 w-full rounded border border-ink/15 bg-background px-3.5 text-ink outline-none placeholder:text-ink/35 focus:border-ink/40"
          />
        </label>
        <label className="block">
          <span className="font-medium text-ink text-sm">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="marko@primer.rs"
            className="mt-2 h-11 w-full rounded border border-ink/15 bg-background px-3.5 text-ink outline-none placeholder:text-ink/35 focus:border-ink/40"
          />
        </label>
      </div>

      {/* Sakriveno od ljudi, vidljivo robotima. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <label className="mt-5 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 size-4 shrink-0 accent-ink"
        />
        <span className="text-ink/70 text-sm leading-relaxed">
          Saglasan sam da mi pošaljete termin webinara i snimak. Adresu ne dajemo nikome i
          odjavljuješ se jednim klikom —{" "}
          <Link href="/privatnost" className="text-ink underline underline-offset-4">
            politika privatnosti
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded bg-ink px-7 font-semibold text-background transition-colors hover:bg-ink/85 disabled:opacity-60"
      >
        {state === "sending" ? (
          "Šaljem…"
        ) : forms.webinar ? (
          <>
            Rezerviši mesto, besplatno
            <ArrowRight className="size-4" />
          </>
        ) : (
          <>
            <Mail className="size-4" />
            Pošalji prijavu mejlom
          </>
        )}
      </button>

      {state === "error" ? (
        <p className="mt-4 text-destructive text-sm leading-relaxed">
          Slanje nije uspelo. Pokušaj ponovo ili nam piši na{" "}
          <a href={`mailto:${brand.email}`} className="underline underline-offset-4">
            {brand.email}
          </a>
          .
        </p>
      ) : null}

      <p className="mt-4 text-ink/50 text-xs leading-relaxed">
        Bez naplate i bez unosa kartice. Šaljemo samo poruke o webinaru.
        {isProposal && !forms.webinar ? (
          <>
            {" "}
            <span className="text-ink/70">
              [POPUNI] Kad firma otvori nalog na servisu za forme, adresa se upisuje u{" "}
              <code className="font-sans">forms.webinar</code> i prijave počinju da stižu same.
            </span>
          </>
        ) : null}
      </p>
    </form>
  );
}
