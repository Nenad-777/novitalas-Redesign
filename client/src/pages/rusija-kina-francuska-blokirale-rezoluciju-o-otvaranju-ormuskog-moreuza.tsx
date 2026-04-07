import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/un-security-council.jpg";

const PARAGRAPHS = [
  "U Savetu bezbednosti Ujedinjenih nacija blokirana je rezolucija koja je imala za cilj ponovno otvaranje Ormuskog moreuza, jednog od najvažnijih strateških i energetskih prolaza na svetu.",
  "Rezoluciju su, prema dostupnim izveštajima, blokirale Rusija, Kina i Francuska, čime je sprečeno donošenje odluke koja je trebalo da doprinese stabilizaciji pomorskog saobraćaja u regionu Persijskog zaliva.",
  "Ormuski moreuz predstavlja jednu od najvažnijih tačaka svetske trgovine energentima, jer kroz njega prolazi veliki deo međunarodnog izvoza nafte i gasa. Svaka nestabilnost u toj zoni ima neposredne posledice po globalno tržište, cene energenata i bezbednost pomorskih ruta.",
  "Tri sile, različitih interesa i pozicija, našle su zajedničku tačku: blokirati pokušaj brzog otvaranja jednog od najvažnijih prolaza na planeti. Time se jasno pokazuje da kontrola nad energetskim tokovima više nije samo pitanje tržišta, već instrument moći.",
  "Blokada u Savetu bezbednosti znači da se kriza premešta iz sfere diplomatije nazad na teren, gde odluke donose flote, savezi i pritisci.",
  "Drugim rečima, Ormus više nije samo prolaz. On postaje poluga.",
];

export default function RusijaKinaFrancuskaBlokada() {
  return (
    <ArticleTemplate
      path="/geopolitika/rusija-kina-francuska-blokirale-rezoluciju-o-otvaranju-ormuskog-moreuza"
      sectionLabel="Geopolitika"
      title="Rusija, Kina i Francuska blokirale rezoluciju o otvaranju Ormuskog moreuza"
      dateLabel="7. APRIL 2026."
      deck="Rusija, Kina i Francuska blokirale su u Savetu bezbednosti UN rezoluciju o ponovnom otvaranju Ormuskog moreuza, jednog od ključnih svetskih energetskih prolaza. Odluka dodatno produbljuje neizvesnost u regionu Persijskog zaliva i pojačava pritisak na globalne energetske tokove."
      imageSrc={IMAGE_SRC}
      imageAlt="Savet bezbednosti Ujedinjenih nacija u Njujorku, gde je blokirana rezolucija o otvaranju Ormuskog moreuza."
      imageCredit="Wikimedia Commons"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
