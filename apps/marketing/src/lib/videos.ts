/**
 * Video utisci polaznika.
 *
 * Najjači dokaz koji sajt može da ima — čovek koji govori svojim licem i imenom
 * teže se falsifikuje od teksta u navodnicima. Zato video traka stoji na vrhu
 * sekcije „Šta kažu ljudi koji plaćaju", dakle neposredno pre cene.
 *
 * Pravila su ista kao za radove polaznika:
 * - ništa se ne izmišlja — ni ime, ni rečenica, ni rezultat,
 * - snimak se objavljuje ISKLJUČIVO uz pismenu saglasnost osobe sa snimka
 *   (`consent: true`), koja pokriva i objavu na sajtu, ne samo na Instagramu,
 * - dok nema nijednog objavljenog snimka, na sajtu stoje prazna mesta —
 *   ali samo dok je sajt predlog (`isProposal`). Na zvaničnom sajtu se traka
 *   ne prikazuje dok nema pravog sadržaja.
 *
 * Kako se dodaje snimak:
 * 1) YouTube (preporučeno — ne opterećuje repozitorijum): `youtubeId`
 * 2) Fajl: `.mp4` u `public/video/`, put u `src`, plus `poster` slika
 *    (`public/video/<slug>.jpg`, 1080 × 1920 za uspravan snimak)
 */

export interface VideoTestimonial {
  slug: string;
  /** Ime i prezime osobe sa snimka. */
  name: string;
  /** Šta radi ili odakle je — kratko, kad postoji. */
  role?: string;
  /** ID YouTube snimka (deo posle „v="). */
  youtubeId?: string;
  /** Alternativa: fajl u `public/video/`. */
  src?: string;
  /** Naslovna slika; obavezna uz `src`, preporučena uz `youtubeId`. */
  poster?: string;
  /** Jedna rečenica ispod snimka — doslovno iz snimka, bez doterivanja. */
  summary?: string;
  /** Pismena saglasnost osobe sa snimka za objavu na sajtu. */
  consent: boolean;
  published: boolean;
}

export const videoTestimonials: VideoTestimonial[] = [
  // Primer popunjene stavke (obrisati komentar kad stigne prvi pravi snimak):
  // {
  //   slug: "ime-prezime",
  //   name: "Ime Prezime",
  //   role: "Web dizajner, Niš",
  //   youtubeId: "XXXXXXXXXXX",
  //   summary: "Prvi plaćeni sajt posle pet nedelja u zajednici.",
  //   consent: true,
  //   published: true,
  // },
];

/** Na sajt ide samo snimak koji ima i saglasnost i izvor. */
export const publishedVideos = videoTestimonials.filter(
  (video) => video.published && video.consent && (video.youtubeId || video.src),
);

/** Koliko praznih mesta prikazati dok je sajt predlog. */
export const videoSlotCount = 3;
