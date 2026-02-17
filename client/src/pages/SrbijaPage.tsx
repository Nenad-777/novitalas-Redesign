/*
 * DESIGN: "Diplomatska Klasika" — Srbija analysis page
 * - Hero with Belgrade aerial image
 * - Two-column layout: main article + sidebar
 * - Same editorial styling as homepage
 */

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IMAGES = {
  serbiaHero: "https://private-us-east-1.manuscdn.com/sessionFile/6SqA6Ltpws9fwNQXZCXsiu/sandbox/HIwEcX3z49LxeP3NBMIlfm-img-4_1771294376000_na1fn_c2VyYmlhLWhlcm8.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNlNxQTZMdHB3czlmd05RWFpDWHNpdS9zYW5kYm94L0hJd0VjWDN6NDlMeGVQM05CTUlsZm0taW1nLTRfMTc3MTI5NDM3NjAwMF9uYTFmbl9jMlZ5WW1saExXaGxjbTguanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SpgNM0Pp8CeiiX-tssuFQwSkXkvliWhmBGEqUudA-zuPesD~f8enLK5o1sW5cCGUfFf-43bAvzY4sA6zOlseKh9AJpbTqefUwv1GzJxiFQktY3n6jN3h60SZP2p2t7dlVWpovQLcFmyMdG4UlMCSkdcEVhBxna1PWX1YnVA4cshV44FRSWSqJA84zgahTolzi7aS4bmG40JidfrrlFTJ0f8MR5QaHC72Dfh7RKEJXf-kPmz1bLm~Gy44hBa9btW953oLcl-1agWokUBYLV8A1Ao0Lf-EaYIXniiEFnKjxVdzLZKdV3u~hiThGiiwS2-UGFHCMVWMUQg12RreNKe~jA__",
  vest1Flota: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335272373/ueTSBmtOxunoiRTI.png",
};

export default function SrbijaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[320px] md:h-[400px] overflow-hidden">
        <img
          src={IMAGES.serbiaHero}
          alt="Beograd iz vazduha"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p
            className="text-white/90 text-[26px] md:text-[32px] italic tracking-wide"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            Analiza nedelje
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="bg-white py-12 md:py-16 flex-1">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14">
            {/* Main article */}
            <article>
              <span className="kicker">Srbija</span>
              <h1
                className="mt-2 mb-4 text-[32px] md:text-[42px] font-bold leading-[1.1] text-[#111]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Vučić između demokratije i autokratije: pogled iz Vašington Posta
              </h1>

              <p
                className="text-[#555] text-[18px] md:text-[19px] leading-[1.6] mb-8 italic"
                style={{ fontFamily: "'Crimson Pro', serif" }}
              >
                <em>The Washington Post</em> i drugi zapadni mediji u poslednjim analizama ističu Srbiju kao primer države koja balansira između formalnih demokratskih institucija i sve izraženijih autokratskih praksi.
              </p>

              <div
                className="text-[#222] text-[18px] md:text-[19px] leading-[1.75]"
                style={{ fontFamily: "'Crimson Pro', serif" }}
              >
                <p className="mb-6">
                  Vašington Post podseća da je Srbija zvanično kandidat za članstvo u Evropskoj uniji, ali se istovremeno sve češće percipira kao država u kojoj se guši pluralizam. Vlast je koncentrisana u rukama jednog čoveka, dok opozicija deluje fragmentisano i medijski marginalizovano.
                </p>

                <p className="mb-6">
                  U tekstu se ističe Vučićeva strategija „dvostruke igre": održavanje dobrih odnosa sa Zapadom i istovremeno veze sa Moskvom i Pekingom. Upravo ova ambivalentnost postavlja Srbiju u centar geopolitičkog nadmetanja.
                </p>

                <p className="mb-6">
                  Analiza zaključuje da Srbija ostaje u „sivoj zoni" između deklarativne demokratije i funkcionalne autokratije. Za građane, to znači produženu političku neizvesnost, dok međunarodni partneri sve češće postavljaju pitanje: da li će Beograd izabrati jasan kurs, ili će nastaviti da balansira na ivici dveju orbita?
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

            {/* Sidebar */}
            <aside>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#8B0000]"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Prateće vesti
                </span>
                <span className="flex-1 h-px bg-[#e5e5e5]" />
              </div>

              <div className="grid grid-cols-[1fr_100px] gap-4 items-start">
                <div>
                  <span className="kicker">Geopolitika</span>
                  <h3
                    className="mt-1 text-[18px] md:text-[20px] font-bold leading-[1.25] text-[#111]"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    <Link href="/" className="headline-link">
                      Italija i Španija šalju ratne brodove u zaštitu flotile za Gazu
                    </Link>
                  </h3>
                  <p
                    className="mt-1 text-[#666] text-[14px] leading-[1.5]"
                    style={{ fontFamily: "'Crimson Pro', serif" }}
                  >
                    Rimski i madridski potez otvara novo poglavlje angažmana na Bliskom istoku, uz upozorenja Izraela.
                  </p>
                </div>
                <img
                  src={IMAGES.vest1Flota}
                  alt="Ilustracija ratne flote"
                  className="w-[100px] h-[75px] object-cover border border-[#eee] bg-[#f5f5f5]"
                />
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
