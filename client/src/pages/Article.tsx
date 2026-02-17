/*
 * DESIGN: "Diplomatska Klasika" — Article page
 * - Single column, centered, generous margins
 * - Large serif headline, italic dek, kicker label
 * - Clean body text with proper typographic rhythm
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IMAGES = {
  minhenSamit: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/kzkbLJizklCGeszt.jpg",
};

export default function Article() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="bg-white py-12 md:py-16 flex-1">
        <article className="max-w-[760px] mx-auto px-5">
          {/* Kicker */}
          <span className="kicker">Geopolitika</span>

          {/* Headline */}
          <h1
            className="mt-3 mb-4 text-[34px] md:text-[46px] font-bold leading-[1.1] text-[#111]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Samit svetskih lidera u Minhenu: bezbednost, energija i nova linija podele
          </h1>

          {/* Byline */}
          <div
            className="flex items-center gap-2 mb-8 text-[13px] text-[#888]"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            <span className="font-semibold text-[#555] uppercase tracking-[0.05em]">
              Novi Talas
            </span>
            <span>•</span>
            <span>Februar 2026</span>
          </div>

          {/* Feature image */}
          <figure className="mb-10">
            <div className="border border-[#eee] bg-[#f7f7f7]">
              <img
                src={IMAGES.minhenSamit}
                alt="Siegestor u Minhenu u sumrak"
                className="w-full h-[300px] md:h-[420px] object-cover object-center block"
              />
            </div>
            <figcaption className="photo-credit mt-2">
              Foto: Martin Falbisoner / CC BY-SA 4.0 (Wikimedia Commons)
            </figcaption>
          </figure>

          {/* Article body */}
          <div
            className="text-[#222] text-[18px] md:text-[19px] leading-[1.75]"
            style={{ fontFamily: "'Crimson Pro', serif" }}
          >
            <p className="mb-6">
              Na 62. bezbednosnoj konferenciji u Minhenu, jednom od najvažnijih godišnjih foruma za međunarodnu bezbednost, okupili su se visoki državnici, ministri odbrane i ključni bezbednosni zvaničnici iz više od 60 zemalja kako bi razgovarali o izazovima globalne bezbednosti i stabilnosti. U fokusu diskusija bili su rat u Ukrajini, energetska stabilnost, rastuće sajber i hibridne pretnje, kao i budućnost transatlantskih odnosa u uslovima sve kompleksnijeg geopolitičkog okruženja. Glavna tema konferencije bila je kako transformisati postojeću bezbednosnu arhitekturu u svetlu dugotrajnih kriza i sve intenzivnijih tenzija među svetskim silama.
            </p>

            <p className="mb-6">
              U uvodnom izlaganju konferencije, nemački kancelar Friedrich Merz je pozvao na ponovnu izgradnju poverenja u transatlantskom savezu, naglašavajući da ni Sjedinjene Države ni Evropa ne mogu samostalno odgovoriti na bezbednosne izazove savremenog sveta. Merz je istakao da je ključno „opraviti i obnoviti poverenje", istovremeno jačajući saradnju kroz NATO, ali i podstičući razvoj evropskih odbrambenih kapaciteta. On je najavio i da su u toku poverljivi razgovori sa predsednikom Emmanuelom Macronom o evropskom nuklearnom odvraćanju, što bi povećalo stratešku autonomiju Evrope unutar alijanse.
            </p>

            <p className="mb-6">
              Generalni sekretar NATO-a Mark Rutte je na marginama konferencije poručio da će se alijansa u budućnosti sve više oslanjati na evropsko vođstvo, uz jasno očuvanu ulogu Sjedinjenih Država, naglašavajući koordinisani pristup odbrambenom planiranju.
            </p>

            <p className="mb-6">
              Istovremeno, danska premijerka Mette Frederiksen je upozorila da Evropa mora usvojiti „strateški mentalitet hitnosti" kako bi obezbedila sopstvenu bezbednost i smanjila preveliku zavisnost od spoljnih garancija.
            </p>

            <p className="mb-6">
              Samit u Minhenu ove godine jasno reflektuje duboke promene u globalnoj politici: teme konferencije naglašavaju ne samo tradicionalna vojna pitanja, već i sveobuhvatnu realnost u kojoj bezbednosna, energetska i tehnološka pitanja postaju nerazdvojna. Merzova poruka o potrebi jačanja evropskih odbrambenih kapaciteta — uz istovremeno očuvanje transatlantske saradnje — ukazuje na težnju evropskih lidera da redefinišu svoje uloge u svetlu promena na međunarodnoj pozornici.
            </p>

            <p className="mb-6">
              Ove godine, lideri nisu govorili o potpunom prekidu partnerstva sa SAD, već o potrazi za ravnotežom između autonomije i partnerstva. Rutteova izjava o većem evropskom vođstvu unutar NATO saveza potvrđuje trend većeg preuzimanja odgovornosti od strane evropskih članica. S druge strane, upozorenja o potrebi strateškog pristupa odbrane, koje je iznela danska premijerka, ukazuju da Evropa prepoznaje da stabilnost i bezbednost nisu dati ni u okruženju tradicionalnih savezništava ni u uslovima novih globalnih tenzija.
            </p>
          </div>

          {/* Back link */}
          <hr className="editorial-divider my-10" />
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#8B0000] text-[13px] font-semibold tracking-[0.08em] uppercase hover:text-[#6B0000] transition-colors duration-200 no-underline"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            ← Nazad na naslovnu
          </Link>
        </article>
      </main>

      <Footer />
    </div>
  );
}
