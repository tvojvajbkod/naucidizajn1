import type { BlogPost } from "@/lib/blog";

/**
 * Blog objave koje žive U REPOZITORIJUMU.
 *
 * Zašto postoje pored Supabase bloga: sajt je objavljen kao statički izvoz na
 * GitHub Pages, gde nema Supabase ključeva — blog iz baze je tamo uvek prazan.
 * Objave odavde ulaze u build, pa se vide i na Pages-u. Na Vercel postavci se
 * spajaju sa objavama iz baze (`lib/blog.ts`).
 *
 * KAKO SE DODAJE NOVA OBJAVA
 * 1. Dodaj stavku u niz ispod. `slug` je deo adrese — mala slova, crtice, bez
 *    kvačica (`kako-pronaci-klijente`, ne `kako-pronaći-klijente`).
 * 2. `description` je jedna rečenica: stoji na kartici u spisku, u pretrazi i
 *    kad se link deli. Nije prvi pasus teksta.
 * 3. `content` je Markdown. Naslovi počinju od `##` — `#` je naslov strane i
 *    piše se u `title`, ne u tekstu.
 * 4. `publishedAt` je `YYYY-MM-DD`. Objave se ređaju po tom datumu, najnovija
 *    prva.
 *
 * ŠTA SE NE SME
 * - Ne izmišljaj brojke, imena polaznika ni tuđe rezultate. Isto pravilo kao za
 *   utiske i studije slučaja.
 * - Ne prepisuj tuđi tekst. Objave nastale iz snimaka Nauči Dizajna su naše;
 *   tuđi sadržaj ide samo uz navođenje izvora i u kratkom citatu.
 */

export const localPosts: BlogPost[] = [
  {
    slug: "klijenti-preko-google-mapa",
    title: "Kako pronaći web dizajn klijente: trik sa Google Mapama koji većina dizajnera ignoriše",
    description:
      "Umesto slanja ponuda u prazno, klijenti se traže na mapi — lokalne firme koje nemaju sajt ili imaju zastareo. Postupak u četiri koraka.",
    publishedAt: "2026-09-28",
    content: `Većina početnika i frilensera u web dizajnu pravi istu grešku kada je u pitanju pronalazak prvih klijenata: otvaraju društvene mreže, šalju generičke poruke u prazno ili se nadaju da će ih neko sam kontaktirati.

Postoji jednostavan, a izuzetno efikasan trik koji ubrzava pronalazak klijenata koji zaista imaju i novac i potrebu za novim sajtom — korišćenje Google Mapa.

## U čemu je tajna pretrage po mapi

Lokalni biznisi — stomatološke ordinacije, restorani, auto-servisi, frizerski saloni, građevinske firme — svakodnevno zavise od lokalnih kupaca. Kada neko traži uslugu u svom gradu, prva adresa je Google pretraga i Google Mape.

Kada otvoriš mapu i pogledaš firme u bilo kom gradu, videćeš tri grupe:

1. Firme koje uopšte nemaju naveden sajt — oslanjaju se samo na profil na mapi ili na društvene mreže.
2. Firme čiji je sajt star deset godina — nije prilagođen telefonu, spor je i nepregledan.
3. Firme sa modernim, funkcionalnim sajtom.

Tvoja ciljna grupa su prve dve.

## Korak po korak

### 1. Izaberi nišu i grad

Otvori Google Mape i ukucaj delatnost i grad — na primer „stomatolog Beograd“, „autolimarija Novi Sad“, „restoran Niš“.

### 2. Pogledaj kako stoje na mreži

Klikći redom na profile firmi iz rezultata. Proveri imaju li dugme za sajt i kako taj sajt izgleda kada ga otvoriš **na telefonu**, ne na računaru.

### 3. Pronađi konkretan problem

Nemoj nuditi „lepši dizajn“. Pronađi problem koji ih košta novca:

- Sajt se učitava predugo.
- Dugme za zakazivanje ili poziv ne radi na telefonu.
- Nemaju sajt, pa gube klijente u odnosu na konkurenta pored njih koji ga ima.

### 4. Pošalji personalizovanu ponudu

Umesto generičke poruke, obrati im se direktno i ukaži na problem koji si primetio, uz kratko rešenje — kako im nov sajt može dovesti više pacijenata ili kupaca.

## Zašto ova metoda daje rezultate

- **Potreba je vidljiva.** Ne nudiš uslugu nekome kome ne treba — javljaš se firmi koja očigledno zaostaje za konkurencijom na istoj mapi.
- **Manja konkurencija.** Većina dizajnera juri klijente po Upwork-u ili Instagramu, dok su lokalne firme potpuno zanemarene.
- **Vrednost je jasna.** Kada vlasniku pokažeš kako gubi klijente jer mu sajt ne radi dobro na telefonu, izrada sajta postaje investicija, a ne trošak.

## Zaključak

Umesto čekanja idealne prilike: otvori Google Mape, izaberi jednu nišu i pronađi deset firmi kojima već danas možeš ponuditi konkretno poboljšanje.
`,
  },
];
