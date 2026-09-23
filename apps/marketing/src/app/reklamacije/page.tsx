import { LegalPage, LegalSection } from "@/components/legal";
import { brand } from "@/lib/brand";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Reklamacije",
  description: "Postupak za reklamacije i povraćaj novca — rokovi, način prijave i kontakt.",
  path: "/reklamacije",
});

export default function ReklamacijePage() {
  return (
    <LegalPage title="Reklamacije" updated="[DATUM]">
      <LegalSection title="Pravo na odustanak">
        <p>
          Članstvo se plaća mesec po mesec i otkazuješ ga sam, u svakom trenutku, pa ne ostaješ
          vezan ni za jedan naredni mesec. [POTVRDI: da li za prvi plaćeni mesec važi garancija
          povraćaja novca u roku od 14 dana]
        </p>
      </LegalSection>

      <LegalSection title="Kako se podnosi reklamacija">
        <p>
          Pošalji poruku na{" "}
          <a href={`mailto:${brand.email}`} className="underline underline-offset-4">
            {brand.email}
          </a>{" "}
          sa podacima o uplati: ime i prezime, mejl sa kojim si se upisao i datum uplate, uz kratak
          opis razloga.
        </p>
      </LegalSection>

      <LegalSection title="Rokovi">
        <p>
          Odgovor na reklamaciju stiže u roku od 8 dana od prijema. Ako je reklamacija prihvaćena,
          povraćaj se izvršava na isti način plaćanja u roku od [BROJ] dana. [POPUNI: rok za
          povraćaj i eventualni troškovi transakcije]
        </p>
      </LegalSection>

      <LegalSection title="Otkazivanje članstva">
        <p>
          Mesečno članstvo otkazuje se samostalno, iz naloga na platformi na kojoj se plaća.
          Članstvo ostaje aktivno do isteka plaćenog perioda i ne obnavlja se. [POTVRDI: šta se
          dešava sa pristupom materijalima posle otkazivanja]
        </p>
      </LegalSection>

      <LegalSection title="Podaci o privrednom subjektu">
        <p>[NAZIV FIRME], [ADRESA], PIB [PIB], matični broj [MATIČNI BROJ]. [POPUNI]</p>
      </LegalSection>
    </LegalPage>
  );
}
