/*
 * SVET - 18. MART — Geopolitika (single article)
 * Date: 18. mart 2026.
 */

import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Dan obeležen naglim porastom tenzija na Bliskom istoku i prvim ozbiljnim signalima da se sukob širi izvan početnog okvira.",

  "Iran je potvrdio da je ubijen ministar obaveštajne službe, treća visoka likvidacija u samo nekoliko dana. Reč je o jednom od ključnih ljudi bezbednosnog aparata.",

  "Projektil je pogodio područje u blizini nuklearne elektrane Bushehr. Zvanično nema štete, ali sama lokacija napada izaziva zabrinutost.",

  "Kanada, Francuska, Nemačka, Italija i Velika Britanija uputile su zajedničko upozorenje Izraelu da ne pokreće kopnenu ofanzivu u Libanu.",

  "Ukrajina šalje više od 200 stručnjaka za dronove na Bliski istok kako bi pomogla u suprotstavljanju iranskim sistemima.",

  "Talibani tvrde da je pakistanski vazdušni napad u Kabulu izazvao stotine žrtava, uključujući civilne objekte.",

  "Sukob više nije izolovan, razvija se u mrežu povezanih kriza, sa sve većim brojem aktera i sve manjom kontrolom nad ishodom.",
];

export default function Svet18Mart() {
  return (
    <ArticleTemplate
      path="/geopolitika/svet-18-mart"
      sectionLabel="Geopolitika"
      title="SVET - 18. MART"
      dateLabel="18. MART 2026."
      deck="Pregled najvažnijih globalnih događaja dana: Iran, Liban, nuklearni rizik i širenje regionalne nestabilnosti."
      imageSrc="/news/svet-dnevni.jpg"
      imageAlt="Svet - 18. mart 2026. — globalni pregled"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
      contentBackground="#D6E6F5"
    />
  );
}
