"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Preusmerava na početnu čim se strana učita.
 *
 * Koristi `router.replace`, a ne `window.location`: `replace` ne ostavlja trag
 * u istoriji (dugme „nazad" vodi tamo odakle je posetilac došao, a ne u petlju
 * preusmerenja), i sam dodaje podfolder u kome sajt živi (`/naucidizajn1`),
 * što bi sa ručno sklopljenom adresom završilo na 404.
 *
 * Ako JavaScript ne radi, ovde se ne dešava ništa — zato strana koja koristi
 * ovu komponentu MORA da ima i vidljiv link ka početnoj.
 */
export function RedirectHome() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
}
