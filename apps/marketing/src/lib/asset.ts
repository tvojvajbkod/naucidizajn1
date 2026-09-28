/**
 * Putanja do fajla iz `public/`, sa podfolderom u kom sajt živi.
 *
 * ZAŠTO POSTOJI. Sajt je objavljen na GitHub Pages-u, u podfolderu
 * `/naucidizajn1`. `<Link>` taj podfolder dodaje sam, ali `next/image` u
 * statičkom izvozu NE — jer je tamo `images.unoptimized: true`, pa Next služi
 * `src` onakav kakav je dobio. Slika upisana kao „/blog/slika.jpg" zato završi
 * na 404, i to SAMO na objavljenom sajtu; u razvoju, gde podfoldera nema, sve
 * izgleda ispravno. Ista zamka kao sa `<a href="/...">` umesto `<Link>`.
 *
 * KADA SE KORISTI. Uvek kad `src` za `next/image` dolazi iz našeg sadržaja
 * (`lib/*.ts`, blog objave, slike polaznika). Ne treba za spoljne adrese
 * (`http…`) ni za `data:` slike — njih funkcija ostavlja na miru.
 */
export function assetPath(src: string): string {
  if (!src.startsWith("/")) {
    return src;
  }
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!base || src.startsWith(`${base}/`)) {
    return src;
  }
  return `${base}${src}`;
}
