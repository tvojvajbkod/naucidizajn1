"use client";

import { type PricingPlan, pricingGroups } from "@/lib/pricing";
import { Badge, Card, CardContent, Tabs, TabsContent, TabsList, TabsTrigger, cn } from "@repo/ui";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

/**
 * Cene sa prebacivačem: AI članstvo / Kursevi / Mentorstvo.
 * Podaci žive u src/lib/pricing.ts — ovde je samo izgled.
 */

function ctaClass(highlighted?: boolean) {
  return cn(
    "mt-6 inline-flex h-11 w-full items-center justify-center rounded font-semibold text-sm transition-colors",
    highlighted
      ? "bg-ink text-background hover:bg-ink/85"
      : "border bg-background text-ink hover:bg-muted",
  );
}

function PlanCard({ plan }: { plan: PricingPlan }) {
  const external = plan.href.startsWith("http");

  return (
    <Card className={cn("h-full gap-4 py-8", plan.highlighted && "border-ink ring-1 ring-ink/15")}>
      <CardContent className="flex h-full flex-col px-8">
        <h3 className="font-medium text-2xl text-ink">{plan.name}</h3>
        <p className="mt-2 min-h-12 text-muted-foreground">{plan.description}</p>

        <div className="mt-6">
          <p className="font-medium text-4xl text-ink tracking-[-0.02em]">
            {plan.price}
            {plan.period ? (
              <span className="ml-1 font-normal text-base text-muted-foreground">
                {plan.period}
              </span>
            ) : null}
          </p>
          {plan.priceNote ? (
            <p className="mt-1.5 text-muted-foreground text-xs leading-relaxed">{plan.priceNote}</p>
          ) : null}
        </div>

        {/* Spoljni link ide kao <a>, unutrašnji MORA kao <Link>: sajt živi u
            podfolderu (/naucidizajn1), a obično <a href="/..."> ne dobija taj
            prefiks i završi na 404. */}
        {external ? (
          <a
            href={plan.href}
            target="_blank"
            rel="noreferrer noopener"
            className={ctaClass(plan.highlighted)}
          >
            {plan.cta}
          </a>
        ) : (
          <Link href={plan.href} className={ctaClass(plan.highlighted)}>
            {plan.cta}
          </Link>
        )}

        {/* Rate stoje ISPOD dugmeta, kao na naucidizajn.com. Ko ne može
            odjednom, to mora da vidi pre nego što odustane. */}
        {plan.installments ? (
          <p className="mt-2.5 text-center text-muted-foreground text-xs leading-relaxed">
            {plan.installments}
          </p>
        ) : null}

        <div className="mt-8 space-y-3">
          {plan.inherits ? (
            <p className="flex items-center gap-2 font-medium text-ink text-sm">
              <Sparkles className="size-4" />
              {plan.inherits}
            </p>
          ) : null}
          <ul className="space-y-3 text-ink/80 text-sm">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-ink" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

export function PricingSection() {
  return (
    <section id="cene" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-medium text-3xl text-ink tracking-[-0.02em] md:text-4xl">
          Cene, bez traženja
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Tri načina učenja i tri modela plaćanja. Sve cene, rate i uslovi stoje ovde — ne otkrivaju
          se tek na naplati.
        </p>
      </div>

      <Tabs defaultValue={pricingGroups[0]?.id} className="mt-10 items-center">
        {/* max-w-full + scroll: tri jezička su na 390px šira od ekrana i
            gurala su celu stranicu u horizontalni scroll. */}
        <TabsList className="h-11 max-w-full overflow-x-auto rounded p-1">
          {pricingGroups.map((group) => (
            <TabsTrigger key={group.id} value={group.id} className="rounded px-2.5 sm:px-4">
              {group.label}
              {group.badge ? <Badge className="ml-1.5">{group.badge}</Badge> : null}
            </TabsTrigger>
          ))}
        </TabsList>

        {pricingGroups.map((group) => (
          <TabsContent key={group.id} value={group.id} className="mt-8 w-full">
            <h2 className="sr-only">{group.label}</h2>
            <div
              className={cn(
                "mx-auto grid max-w-5xl gap-6",
                group.plans.length >= 3
                  ? "md:grid-cols-3"
                  : group.plans.length === 2
                    ? "md:max-w-3xl md:grid-cols-2"
                    : "max-w-md",
              )}
            >
              {group.plans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
