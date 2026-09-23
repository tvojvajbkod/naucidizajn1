import { LegalPage, LegalSection } from "@/components/legal";
import { brand, membership } from "@/lib/brand";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Uslovi korišćenja",
  description: `Uslovi korišćenja edukacija i članstva ${brand.legalName}.`,
  path: "/uslovi",
});

/**
 * Uslovi korišćenja za ONLINE EDUKACIJU — ne za SaaS. Templejtska verzija je
 * govorila o „softveru koji se koristi preko interneta"; to nije ovaj posao i
 * nije se smelo ostaviti.
 *
 * Od 23.09.2026. postoji samo jedan proizvod: mesečno članstvo „Postani AI web
 * dizajner". Odredbe o snimljenim kursevima, paketima, ratama i mentorstvu 1-1
 * obrisane su jer te ponude više nema.
 *
 * Oslonac: Zakon o obligacionim odnosima, Zakon o elektronskoj trgovini i
 * Zakon o zaštiti potrošača RS. Polja u [uglastim zagradama] popunjava firma,
 * a tekst pre objave mora da pogleda advokat.
 */
export default function TermsPage() {
  return (
    <LegalPage title="Uslovi korišćenja" updated="[DATUM]">
      <LegalSection title="1. Ko smo mi i na šta se ovi uslovi odnose">
        <p>
          Ove uslove primenjuje <strong>[PUNO POSLOVNO IME]</strong>, [ADRESA], matični broj
          [MATIČNI BROJ], PIB [PIB], email {brand.email} (u daljem tekstu: {brand.legalName}, „mi").
        </p>
        <p>
          Uslovi važe za našu edukaciju — mesečno članstvo „Postani AI web dizajner" — kao i za
          besplatan webinar i sadržaj na ovom sajtu. Upisom ili prijavom prihvataš ove uslove.
        </p>
        <p>
          Ako si potrošač u smislu Zakona o zaštiti potrošača, na naš odnos primenjuju se i odredbe
          tog zakona, koje imaju prednost nad bilo čim suprotnim u ovom tekstu.
        </p>
      </LegalSection>

      <LegalSection title="2. Šta tačno kupuješ">
        <p>
          <strong>Mesečno članstvo „Postani AI web dizajner"</strong> je pristup privatnoj
          zajednici, materijalima i nedeljnim grupnim sastancima uživo, dok traje plaćeni mesec.
          Zajednica i naplata su na platformi Skool; na nju se primenjuju i uslovi te platforme.
        </p>
        <p>
          Gradivo je postavljeno kao put od četiri meseca (izrada sajtova i dolazak do klijenata,
          SEO, AI automatizacije, napredni web dizajn). To je raspored materijala, a ne ugovoreno
          trajanje — članstvo se plaća i otkazuje mesečno, bez obaveze da ostaneš četiri meseca.
        </p>
        <p>
          Sadržaj edukacija povremeno dopunjujemo i menjamo kada se promene alati o kojima učimo.
          Suštinski obim onoga što si platio time se ne umanjuje.
        </p>
      </LegalSection>

      <LegalSection title="3. Cene i plaćanje">
        <p>
          Članstvo se naplaćuje u dolarima preko Skool platforme ({membership.price} mesečno). Iznos
          u dinarima zavisi od kursa tvoje banke na dan naplate. [POTVRDI: da li je moguće plaćanje
          u dinarima ili uplatnicom.]
        </p>
        <p>
          Članarina se naplaćuje unapred, svakog meseca, dok je ne otkažeš. Nema ugovora na duži
          period, upisnine ni plaćanja na rate.
        </p>
        <p>[POTVRDI: da li su cene sa ili bez PDV-a i da li je firma u sistemu PDV-a.]</p>
      </LegalSection>

      <LegalSection title="4. Trajanje i otkazivanje članstva">
        <p>
          Članstvo traje mesec dana i obnavlja se automatski dok ga ne otkažeš. Otkazuješ ga sam, iz
          svog naloga na Skool-u, u bilo kom trenutku — nije potrebno da nam pišeš ni da obrazlažeš
          razlog.
        </p>
        <p>
          Posle otkazivanja pristup ostaje aktivan do kraja već plaćenog meseca. Otkazivanje ne
          povlači naplatu za naredni mesec.
        </p>
        <p>
          [POTVRDI: šta ostaje polazniku posle otkazivanja — da li zadržava pristup snimcima
          sastanaka i materijalima, i u kom obimu.]
        </p>
      </LegalSection>

      <LegalSection title="5. Pravo na odustanak i garancija">
        <p>
          Za digitalni sadržaj koji se isporučuje odmah, zakonsko pravo potrošača na odustanak u
          roku od 14 dana ne važi kada je izvršenje počelo uz izričitu saglasnost potrošača — što
          potvrđuješ kada prvi put otvoriš materijale.
        </p>
        <p>
          Nezavisno od toga, članstvo otkazuješ sam i u svakom trenutku, pa ne ostaješ vezan ni za
          jedan naredni mesec. [POTVRDI: da li za prvi plaćeni mesec važi garancija povraćaja novca
          u roku od 14 dana, bez obrazloženja.]
        </p>
        <p>
          Zahtev šalješ na {brand.email}. Postupak i rokovi opisani su na stranici{" "}
          <Link href="/reklamacije" className="text-ink underline underline-offset-4">
            Reklamacije
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. Kako se koristi pristup">
        <p>Pristup je ličan i vezan za tvoj nalog. Nije dozvoljeno:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>deljenje pristupnih podataka sa drugim osobama,</li>
          <li>snimanje, preuzimanje i dalja raspodela lekcija i materijala,</li>
          <li>preprodaja ili javno objavljivanje sadržaja edukacije,</li>
          <li>
            objavljivanje snimaka i sadržaja iz zajednice i sa grupnih sastanaka izvan zajednice,
          </li>
          <li>ponašanje u zajednici koje vređa ili uznemirava druge polaznike i mentore.</li>
        </ul>
        <p>
          Kod ozbiljnog ili ponovljenog kršenja možemo ograničiti ili ukinuti pristup. Ako je do
          toga došlo bez tvoje krivice, vraćamo srazmeran deo uplaćenog iznosa.
        </p>
      </LegalSection>

      <LegalSection title="7. Autorska prava">
        <p>
          Video lekcije, materijali, šabloni, promptovi i naziv {brand.legalName} su naše
          vlasništvo, odnosno vlasništvo naših predavača, i zaštićeni su zakonom. Kupovinom dobijaš
          pravo da ih koristiš za sopstveno učenje i za rad sa svojim klijentima — ne i da ih
          preprodaješ ili predaješ kao svoje.
        </p>
        <p>
          Radovi koje napraviš tokom edukacije su tvoji. Objavljujemo ih na sajtu samo uz tvoju
          saglasnost, a kada je u pitanju rad za klijenta — i uz saglasnost tog klijenta.
        </p>
      </LegalSection>

      <LegalSection title="8. Šta ne obećavamo">
        <p>
          Ne garantujemo zaposlenje, klijente ni određenu zaradu. Rezultati zavise od tvog rada,
          vremena koje uložiš i tržišta. Iznosi i primeri na sajtu su ilustracije onoga što se na
          tržištu sreće, a ne obećanje.
        </p>
        <p>
          Edukacije zahtevaju sopstveni računar i internet vezu, kao i naloge kod alata o kojima
          učimo. Ti alati su usluge trećih lica i mogu da menjaju svoje cene i uslove.
        </p>
      </LegalSection>

      <LegalSection title="9. Odgovornost i dostupnost">
        <p>
          Trudimo se da materijali i zajednica budu dostupni bez prekida, ali zavisimo i od
          platformi trećih lica (Skool, provajder plaćanja, alati za video). Kraći prekidi zbog
          održavanja ili više sile su mogući i ne smatraju se neispunjenjem obaveze.
        </p>
        <p>
          U meri u kojoj to prinudni propisi dozvoljavaju, ne odgovaramo za posrednu štetu ni za
          izgubljenu dobit. Ovo ograničenje ne dira u odgovornost za nameru i grubu nepažnju, ni u
          prava potrošača.
        </p>
      </LegalSection>

      <LegalSection title="10. Reklamacije i sporovi">
        <p>
          Reklamaciju šalješ na {brand.email}. Odgovaramo u zakonskom roku od 8 dana od prijema.
          Postupak je opisan na stranici{" "}
          <Link href="/reklamacije" className="text-ink underline underline-offset-4">
            Reklamacije
          </Link>
          .
        </p>
        <p>
          Spor prvo pokušavamo da rešimo dogovorom, a potom vansudskim rešavanjem potrošačkih
          sporova pred telom sa liste Ministarstva. Ako to ne uspe, nadležan je stvarno nadležni sud
          u [MESTO].
        </p>
      </LegalSection>

      <LegalSection title="11. Izmene uslova i kontakt">
        <p>
          Uslove možemo menjati; izmenjenu verziju objavljujemo na ovoj stranici sa novim datumom.
          Ako izmena bitno menja tvoja prava kod već plaćene edukacije, obavestićemo te mejlom pre
          nego što počne da važi.
        </p>
        <p>
          Za sva pitanja: {brand.email}. Obrada podataka o ličnosti uređena je{" "}
          <Link href="/privatnost" className="text-ink underline underline-offset-4">
            Politikom privatnosti
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
