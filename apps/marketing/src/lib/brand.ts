/**
 * Jedan izvor istine za brend, linkove i brojke.
 *
 * VAŽNO: sve brojke na sajtu se čitaju odavde. Zatečeni sajt je prikazivao
 * različite vrednosti na različitim stranicama (4.600+ / 4.000+ / 4.800+ /
 * 40.000+) — to ruši poverenje. Menja se ovde, na jednom mestu.
 */

export const brand = {
  name: "Nauči Dizajn",
  legalName: "Nauči Dizajn™",
  email: "naucidizajn@gmail.com",
  tagline: "AI dizajnira. Ti zarađuješ.",
} as const;

export const links = {
  /** Skool zajednica — mesečno članstvo AI Web Dizajner. */
  skool: "https://www.skool.com/nauci-dizajn/about",
  instagram: "https://www.instagram.com/naucidizajn/",
  youtube: "https://www.youtube.com/@naucidizajn",
  facebook: "https://www.facebook.com/naucidizajn/",
  tiktok: "https://www.tiktok.com/@naucidizajn",
} as const;

/** Brojke koje stoje na sajtu. [POTVRDI] pre objave — izvor: Skool + postojeći sajt. */
export const stats = {
  studentsSince2020: "4.800+",
  communityMembers: "2.200+",
  skoolMembers: "269",
  skoolRating: "5,0",
  skoolReviews: 12,
  satisfaction: "98,6%",
  mentorshipScore: "9,2 / 10",
  areas: 6,
  hoursOfMaterial: "80+",
} as const;

/** Cena članstva. [POTVRDI] da li postoji evro ekvivalent za region. */
export const membership = {
  price: "$99",
  period: "/ mesečno",
  priceNote: "Naplata preko Skool-a, u dolarima. Otkazuješ sam, iz svog naloga.",
} as const;
