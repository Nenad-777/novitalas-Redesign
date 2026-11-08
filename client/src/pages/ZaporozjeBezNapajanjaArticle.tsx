import ArticleTemplate from "@/components/ArticleTemplate";

export default function ZaporozjeBezNapajanjaArticle() {
  return <ArticleTemplate
    path="/geopolitika/zaporozje-bez-spoljasnjeg-napajanja-rezervni-generatori"
    sectionLabel="GEOPOLITIKA"
    title="Nuklearna elektrana Zaporožje ostala bez spoljašnjeg napajanja: Uključeni rezervni generatori"
    dateLabel="8. NOVEMBAR 2026."
    deck="Najveća nuklearna elektrana u Evropi ponovo je izgubila vezu sa elektroenergetskom mrežom. Rezervni dizel-generatori obezbeđuju rad bezbednosnih sistema, dok ukrajinski Energoatom upozorava na rizike ukoliko prekid potraje. Prema saopštenju uprave elektrane, nivo radijacije je normalan."
    imageSrc="/news/Zaporozje.JPG"
    imageAlt="Arhivski panoramski pogled na nuklearnu elektranu Zaporožje i susednu termoelektranu."
    imageCredit={<><span>Nuklearna elektrana Zaporožje, arhivska fotografija (2009). Autor: </span><a href="https://commons.wikimedia.org/wiki/File:Kernkraftwerk_Saporischschja.JPG" target="_blank" rel="noopener noreferrer">Ralf1969 / Wikimedia Commons</a><span> / </span><a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a><span>. Prikaz prilagođen kadru.</span></>}
    imageHeightClass="aspect-video"
    imageObjectFit="cover"
    imageBeforeDeck
    backHref="/geopolitika"
    backLabel="← Nazad na Geopolitiku"
    paragraphs={[
      "ZAPOROŽJE, 8. novembar 2026. – Nuklearna elektrana Zaporožje, koja se od 2022. godine nalazi pod ruskom kontrolom, ostala je tokom noći bez spoljašnjeg napajanja električnom energijom. Prema saopštenju ukrajinskog Energoatoma, poslednji funkcionalni dalekovod Ferosplavna-1, napona 330 kilovolti, isključen je u 2.36 časova, a pokušaj automatskog ponovnog povezivanja nije uspeo. Uprava elektrane koju je postavila Rusija potvrdila je prekid i saopštila da je dalekovod isključen delovanjem zaštitnih sistema nakon oštećenja. Aktivirani su rezervni dizel-generatori, a prema navodima iste uprave, nivoi radijacije u postrojenju i okolnoj zoni ostali su normalni.",
      "Iako šest reaktora Zaporožja ne proizvodi električnu energiju, postrojenju je i dalje potrebno neprekidno napajanje. Električna energija koristi se za rad sistema za hlađenje reaktora i istrošenog nuklearnog goriva, kao i druge bezbednosne opreme. Rezervni generatori trenutno obezbeđuju to napajanje. Ukrajinski Energoatom upozorava da bi njihov kvar ili gubitak mogućnosti daljeg rada, ukoliko spoljašnje napajanje ne bude obnovljeno, mogao da ugrozi sisteme hlađenja. Za sada nema izveštaja da su ti sistemi otkazali.",
      "Prema podacima Energoatoma, ovo je šesnaesti potpuni gubitak spoljašnjeg napajanja elektrane od početka 2026. godine. Dalekovodi koji povezuju Zaporožje sa elektroenergetskom mrežom više puta su oštećeni tokom rata. Najnoviji incident dogodio se u vreme intenzivnih napada na ukrajinsku energetsku infrastrukturu, zbog kojih su stotine hiljada domaćinstava ostajale bez struje. Ipak, uzrok konkretnog oštećenja dalekovoda Ferosplavna-1 i odgovornost za njega još nisu nezavisno utvrđeni.",
      "Osoblje elektrane nastavlja da nadzire rad rezervnih generatora i bezbednosne opreme, saopštila je uprava koju je postavila Rusija. Energoatom je upozorio na posledice produženog oslanjanja na rezervno napajanje, dok je Međunarodna agencija za atomsku energiju (IAEA) u prethodnim izveštajima više puta naglašavala značaj pouzdane veze nuklearnih postrojenja sa elektroenergetskom mrežom. U trenutku objavljivanja dostupnih izveštaja nije bilo potvrde da je spoljašnje napajanje obnovljeno."
    ]}
  />;
}
