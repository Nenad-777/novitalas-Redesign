import ArticleTemplate from "@/components/ArticleTemplate";

export const CACILEND_ISTRAGA_PATH = "/srbija/posle-svedocenja-o-cacilendu-i-15-martu-sve-glasniji-zahtevi-za-istragom";
export const CACILEND_ISTRAGA_IMAGE = "/news/cacilend-15-mart-2025-nenad-maricic.avif";

export default function CacilendInvestigation2026Article() {
  return (
    <ArticleTemplate
      path={CACILEND_ISTRAGA_PATH}
      sectionLabel="SRBIJA"
      title="Posle svedočenja o Ćacilendu i događajima 15. marta 2025. godine, sve glasniji zahtevi za istragom"
      dateLabel="14. OKTOBAR 2026."
      deck="Sve više glasova zahteva od tužilaštva da ispita navode o organizovanju plaćenih grupa, mogućoj zloupotrebi državnih resursa i ulozi policije tokom protesta u Beogradu."
      imageSrc={CACILEND_ISTRAGA_IMAGE}
      imageAlt="Autorska fotografija masovnog protesta u Beogradu 15. marta 2025: ljudi i srpske zastave na ulici."
      imageCredit="Arhivski snimak protesta 15. marta 2025."
      imageFirst={true}
      imageHeightClass="h-auto"
      paragraphs={[
        "Svedočenje dugogodišnjeg aktiviste Srpske napredne stranke Momčila Marjanovića, koje je BIRN objavio 13. oktobra, izazvalo je prve zahteve za pokretanje istrage. Marjanović je izneo tvrdnje o organizovanju i finansiranju grupa angažovanih za stranačke potrebe, izazivanju incidenata na protestima i gotovinskim isplatama u prostorijama javnog preduzeća. Posebnu pažnju izazvala je njegova izjava o policijskom upozorenju neposredno pre incidenta tokom protesta 15. marta 2025. godine.",
        "Prema Marjanovićevom iskazu, za angažovanje u Ćacilendu dobijao je 500 evra dnevno, dok su članovi njegove grupe primali po 200 evra. Tvrdi da je novac preuzimao od Nenada Barca, direktora JKP „Novosadska toplana“, i da je tokom više meseci na taj način preuzeo između 350.000 i 400.000 evra. BIRN navodi da je dobio prepisku između njih dvojice. Marjanović je takođe izjavio da je čuo policajca kako prisutnima govori da zaštite uši u narednih petnaest minuta, ali sam nije čuo zvuk koji je izazvao uznemirenje demonstranata u Ulici kralja Milana. Poreklo novca i okolnosti policijskog upozorenja nisu nezavisno utvrđeni.",
        "Građanski pokret BRAVO zatražio je hitnu reakciju tužilaštva, proveru dostavljene prepiske, utvrđivanje porekla novca i ispitivanje odgovornosti pomenutih osoba. Advokat Vladimir Terzić ocenio je da bi nadležno tužilaštvo moralo da reaguje i da bi, ukoliko se utvrde elementi organizovanog kriminala, predmet trebalo da preuzme Tužilaštvo za organizovani kriminal. Advokat Božo Prelević takođe je postavio pitanje postupanja institucija, izrazivši sumnju da će predmet biti formiran dok je sadašnja vlast na funkciji.",
        "Nakon ovih izjava, u središtu pažnje nalazi se pitanje institucionalne odgovornosti. Provera finansijskih tokova, autentičnosti prepiske, mogućeg angažovanja zaposlenih u javnim preduzećima i identiteta policajca pomenutog u svedočenju mogla bi da utvrdi osnovanost iznetih tvrdnji. Posebno je značajno ispitati da li postoje dokazi o prethodnom znanju policije o događajima 15. marta, imajući u vidu ranije suprotstavljene nalaze o mogućoj upotrebi akustičnog oružja. Do trenutka pripreme ovog teksta, 14. oktobra, nije pronađeno zvanično saopštenje nadležnog tužilaštva o postupanju povodom novoobjavljenih navoda."
]}
      backHref="/srbija"
      backLabel="← Nazad na Srbiju"
    />
  );
}
