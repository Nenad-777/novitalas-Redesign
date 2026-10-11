import ArticleTemplate from "@/components/ArticleTemplate";

export const BND_HANNING_PATH = "/obavestajni-izvori/spijunska-afera-nemacka-evropske-sluzbe-strahuju-za-tajne";
export const BND_HANNING_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/a/a4/Zentrale_des_Bundesnachrichtendienst%2C_Berlin.jpg";

export default function BNDHanningEspionage2026Article() {
  return (
    <ArticleTemplate
      path={BND_HANNING_PATH}
      sectionLabel="Obaveštajni izvori"
      title="Špijunska afera u Nemačkoj: evropske službe strahuju za svoje tajne"
      dateLabel="11. OKTOBAR 2026."
      deck="Hapšenje bivšeg direktora nemačke obaveštajne službe BND otvorilo je pitanje bezbednosti poverljivih podataka koje Berlin razmenjuje sa međunarodnim partnerima. Istraga obuhvata približno 2.000 dokumenata."
      imageSrc={BND_HANNING_IMAGE}
      imageAlt="Sedište nemačke spoljne obaveštajne službe BND u Berlinu, fotografija iz 2017. godine."
      imageCredit={
        <>
          Foto: Jan Kleihues (fotograf Stefan Müller) /{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Zentrale_des_Bundesnachrichtendienst,_Berlin.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Wikimedia Commons</a>,{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">CC BY-SA 4.0</a>. Arhivski snimak, 2017; bez izmena.
        </>
      }
      imageFirst={true}
      imageHeightClass="h-auto"
      paragraphs={[
        "Evropske obaveštajne službe pokušavaju da utvrde da li su njihove poverljive informacije kompromitovane u špijunskoj aferi koja potresa Nemačku. Kako je 8. oktobra objavio Reuters, hapšenje Augusta Haninga, nekadašnjeg direktora nemačke Savezne obaveštajne službe (BND), izazvalo je zabrinutost među međunarodnim partnerima Berlina. U središtu istrage nije samo pitanje mogućeg odavanja nemačkih državnih tajni već i sudbina podataka koje su druge službe godinama poveravale BND-u.",
        "Haning, koji je rukovodio nemačkom spoljnom obaveštajnom službom od 1998. do 2005. godine, uhapšen je 6. oktobra zbog sumnje na obaveštajnu delatnost i pokušaj odavanja državnih tajni. Nemačko savezno tužilaštvo sumnja da je preko nekadašnjeg saradnika, identifikovanog kao Manfred D., od 2010. do 2022. godine za novac pribavljao interne dokumente. Prema dosadašnjim nalazima istrage, reč je o približno 2.000 dokumenata, od kojih su neki bili klasifikovani. Istražitelji sumnjaju da je deo informacija iskorišćen za analizu namenjenu predstavniku strane obaveštajne službe, ali nije utvrđeno da li je analiza stigla do primaoca.",
        "Posebnu težinu slučaju daju nalazi zajedničkog istraživanja lista Süddeutsche Zeitung i javnih emitera NDR i WDR, prema kojima se među spornim materijalima nalaze informacije o iranskom nuklearnom programu, ruskoj vojsci, ali i poverljivi podaci partnerskih obaveštajnih službi. Reuters navodi da evropske službe sada procenjuju moguću štetu po međunarodnu saradnju; jedan zapadni zvaničnik rekao je toj agenciji da se među dokumentima nalazio i materijal CIA. Identitet strane službe kojoj su informacije navodno bile namenjene nije zvanično saopšten. Pominjana je moguća veza sa Azerbejdžanom, koji je takve navode odbacio. Haningov advokat negira da je njegov klijent nezakonito prosleđivao ili prodavao tajne podatke.",
        "Afera dolazi u trenutku kada Nemačka nastoji da ojača obaveštajne kapacitete i saradnju sa saveznicima. BND je pokrenuo unutrašnje provere nakon otkrivanja sumnji, dok su u nemačkoj javnosti obnovljena pitanja kontrole bivših obaveštajnih funkcionera koji posle odlaska iz službe ulaze u privatni konsultantski sektor. Najvažnija nepoznanica ostaje da li su zaista kompromitovani podaci drugih država i kakve bi posledice to moglo imati po poverenje među službama. Odgovor na to pitanje mogao bi biti značajniji od samog hapšenja."
      ]}
      backHref="/obavestajni-izvori"
      backLabel="← Nazad na Obaveštajne izvore"
    />
  );
}
