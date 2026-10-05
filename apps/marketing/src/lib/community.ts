/**
 * Prepiska u Skool zajednici — pitanja koja polaznici stvarno postavljaju i
 * odgovori koje dobiju od ostalih članova i mentora.
 *
 * PRAVILA (ista kao za utiske i mentore):
 * - Nema izmišljenih imena. Uz odgovor stoji samo uloga („Član zajednice“,
 *   „Mentor“), jer ime i lice idu na sajt tek uz saglasnost te osobe.
 * - Nema izmišljenih zarada, brojeva klijenata ni obećanja rezultata.
 * - Tekstovi ispod su primeri napisani da pokažu KAKO grupa odgovara, a ne
 *   prekopirane poruke iz zajednice. To piše i ispod sekcije na sajtu.
 * - Kad Nauči Dizajn da stvarne poruke (uz saglasnost autora), ovaj fajl se
 *   menja i napomena ispod sekcije se skida.
 */

export interface CommunityAnswer {
  /** Ko odgovara. Uloga, ne ime — vidi pravila iznad. */
  role: "Član zajednice" | "Mentor";
  text: string;
}

export interface CommunityCase {
  /** Muka onako kako bi je polaznik sam opisao. Kratko, bez stručnih reči. */
  problem: string;
  answers: CommunityAnswer[];
  /**
   * [POPUNI] Koliko je minuta prošlo do prvog odgovora na TO pitanje.
   * Broj se prikazuje samo ako je upisan. Ne upisuj procenu — ili je stvarna
   * vrednost iz Skool-a, ili ostaje prazno.
   */
  replyMinutes?: number;
}

export const communityCases: CommunityCase[] = [];
