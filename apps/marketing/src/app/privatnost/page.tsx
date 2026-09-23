import { LegalPage, LegalSection } from "@/components/legal";
import { brand } from "@/lib/brand";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Politika privatnosti",
  description: `Kako ${brand.name} prikuplja, koristi i štiti podatke o ličnosti.`,
  path: "/privatnost",
});

/**
 * Politika privatnosti usklađena sa Zakonom o zaštiti podataka o ličnosti RS
 * („Sl. glasnik RS", br. 87/2018 — ZZPL).
 *
 * Prepisana za edukaciju, ne za SaaS. Obavezno pokriva i formu za prijavu na
 * webinar — sajt od tog trenutka prikuplja ime i mejl, pa to mora biti
 * navedeno ovde. Polja u [uglastim zagradama] popunjava firma, a tekst pre
 * objave mora da pogleda advokat.
 */
export default function PrivacyPage() {
  return (
    <LegalPage title="Politika privatnosti" updated="[DATUM]">
      <LegalSection title="1. Ko obrađuje tvoje podatke">
        <p>
          Rukovalac podacima je <strong>[PUNO POSLOVNO IME]</strong>, [ADRESA], matični broj
          [MATIČNI BROJ], PIB [PIB] (u daljem tekstu: {brand.legalName}, „mi"). Kontakt za sva
          pitanja o podacima: {brand.email}.
        </p>
        <p>
          [POPUNI: da li je imenovano lice za zaštitu podataka o ličnosti i njegov kontakt, ako
          postoji obaveza.]
        </p>
      </LegalSection>

      <LegalSection title="2. Koje podatke prikupljamo i kada">
        <p>
          <strong>Prijava na besplatan webinar.</strong> Ime i imejl adresu, uz tvoj izričit
          pristanak označen u formi. Koristimo ih da ti pošaljemo termin, link za pristup i snimak.
        </p>
        <p>
          <strong>Mesečno članstvo.</strong> Nalog, profil i naplata su na platformi Skool. Tamo
          unesene podatke obrađuje Skool kao samostalan rukovalac, po svojoj politici privatnosti;
          mi vidimo samo ono što je vidljivo unutar zajednice.
        </p>
        <p>
          <strong>Kada nam pišeš.</strong> Sadržaj poruke i tvoju adresu, da bismo odgovorili.
        </p>
        <p>
          <strong>Analitika i kolačići.</strong> Podatke o poseti (stranice, uređaj, približna
          lokacija) — samo ako na traci sa kolačićima prihvatiš analitiku.
        </p>
        <p>
          Ne tražimo i ne prikupljamo posebne vrste podataka (zdravlje, uverenja i slično). Naše
          edukacije nisu namenjene deci mlađoj od [15] godina.
        </p>
      </LegalSection>

      <LegalSection title="3. Zašto ih obrađujemo i po kom osnovu">
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <strong>Izvršenje ugovora</strong> — pristup članstvu koje si platio i podrška uz njega.
          </li>
          <li>
            <strong>Pristanak</strong> — prijava na webinar, obaveštenja o novim edukacijama,
            analitika i marketinški kolačići. Pristanak povlačiš u svakom trenutku, jednako lako kao
            što si ga dao.
          </li>
          <li>
            <strong>Zakonska obaveza</strong> — izdavanje i čuvanje računa i poreske evidencije.
          </li>
          <li>
            <strong>Legitiman interes</strong> — bezbednost sajta i sprečavanje zloupotreba, u meri
            koja ne preteže nad tvojim pravima.
          </li>
        </ul>
        <p>
          Ne donosimo odluke o tebi isključivo automatizovanom obradom i ne radimo profilisanje sa
          pravnim dejstvom.
        </p>
      </LegalSection>

      <LegalSection title="4. S kim delimo podatke">
        <p>Podatke ne prodajemo. Delimo ih samo sa obrađivačima koji su nam potrebni da radimo:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>platforma zajednice i naplate članstva — Skool,</li>
          <li>servis koji prima prijave sa formi — [PROVAJDER FORMI],</li>
          <li>imejl servis za slanje obaveštenja — [PROVAJDER MEJLA],</li>
          <li>hosting i isporuka sajta — [HOSTING],</li>
          <li>analitika i oglasni pikseli — Google Analytics, Meta Pixel (samo uz pristanak),</li>
          <li>knjigovodstvo i nadležni organi kada to zakon nalaže.</li>
        </ul>
        <p>
          Neki od ovih provajdera su van Srbije i Evropskog ekonomskog prostora (pre svega u SAD). U
          tim slučajevima prenos se zasniva na standardnim ugovornim klauzulama ili drugom
          odgovarajućem osnovu iz ZZPL-a.
        </p>
      </LegalSection>

      <LegalSection title="5. Koliko dugo čuvamo podatke">
        <ul className="list-disc space-y-1 pl-6">
          <li>
            prijave na webinar — do povlačenja pristanka, a najduže [2] godine od poslednje prijave,
          </li>
          <li>
            podaci o kupovini i računi — u rokovima koje propisuju poreski propisi (najmanje 10
            godina),
          </li>
          <li>prepiska — [2] godine od poslednje poruke,</li>
          <li>podaci iz analitike — prema podešavanju servisa, najduže [14] meseci.</li>
        </ul>
        <p>Posle isteka roka podatke brišemo ili trajno anonimizujemo.</p>
      </LegalSection>

      <LegalSection title="6. Tvoja prava">
        <p>U svakom trenutku imaš pravo da:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>tražiš pristup podacima koje o tebi imamo i kopiju tih podataka,</li>
          <li>tražiš ispravku netačnih i dopunu nepotpunih podataka,</li>
          <li>tražiš brisanje ili ograničenje obrade,</li>
          <li>uložiš prigovor na obradu zasnovanu na legitimnom interesu,</li>
          <li>tražiš prenosivost podataka u uobičajenom formatu,</li>
          <li>povučeš pristanak, bez posledica po ono što je do tada zakonito obrađeno.</li>
        </ul>
        <p>
          Zahtev šalješ na {brand.email}. Odgovaramo najkasnije u roku od 30 dana. Ako smatraš da ti
          je pravo povređeno, možeš se obratiti i Povereniku za informacije od javnog značaja i
          zaštitu podataka o ličnosti, Bulevar kralja Aleksandra 15, Beograd.
        </p>
      </LegalSection>

      <LegalSection title="7. Kolačići">
        <p>
          Neophodni kolačići drže sajt funkcionalnim i postavljaju se bez pristanka. Analitika i
          oglasni pikseli učitavaju se tek pošto ih prihvatiš na traci koja se pojavljuje pri prvoj
          poseti. Izbor menjaš brisanjem kolačića u pregledaču, čime se traka ponovo pojavljuje.
        </p>
      </LegalSection>

      <LegalSection title="8. Bezbednost">
        <p>
          Sajt radi preko šifrovane veze (HTTPS), pristup podacima imaju samo osobe kojima je
          neophodan za rad, a provajdere biramo prema njihovim bezbednosnim merama. U slučaju
          povrede podataka koja može da ugrozi tvoja prava, obaveštavamo Poverenika i tebe u
          rokovima propisanim ZZPL-om.
        </p>
      </LegalSection>

      <LegalSection title="9. Izmene ove politike">
        <p>
          Politiku možemo menjati; važeća verzija je uvek na ovoj stranici, sa datumom poslednje
          izmene na vrhu. O bitnim izmenama obaveštavamo mejlom one koji su nam ostavili adresu.
          Uslovi pod kojima koristiš naše edukacije opisani su u{" "}
          <Link href="/uslovi" className="text-ink underline underline-offset-4">
            Uslovima korišćenja
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
