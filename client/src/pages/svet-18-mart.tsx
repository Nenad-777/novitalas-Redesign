import ArticleTemplate from "@/components/ArticleTemplate";

export default function Svet18Mart() {
  return (
    <ArticleTemplate
      path="/geopolitika/svet-18-mart"
      sectionLabel="Geopolitika"
      title="SVET — 18. MART"
      dateLabel="18. MART 2026."
      deck="Pregled najvažnijih globalnih događaja dana: Iran, Liban, nuklearni rizik i širenje regionalne nestabilnosti."
      imageSrc="/news/svet-dnevni.jpg"
      imageAlt="Svet — dnevni pregled globalnih događaja"
      pageBackground="#D6E6F5"
      paragraphs={[
        "Dan obeležen naglim porastom tenzija na Bliskom istoku i prvim ozbiljnim signalima da se sukob širi izvan početnog okvira.",
        "Iran je potvrdio da je ubijen ministar obaveštajne službe — treća visoka likvidacija u samo nekoliko dana. Reč je o jednom od ključnih ljudi bezbednosnog aparata. Ovaj niz ciljanih ubistava ukazuje na sistematski pritisak na vrh države i moguću destabilizaciju iznutra.",
        "Projektil je pogodio područje u blizini nuklearne elektrane Bushehr. Zvanično nema štete, ali sama lokacija napada izaziva zabrinutost. Ovo je prvi direktan signal da bi sukob mogao da se približi nuklearnoj infrastrukturi, što dramatično podiže rizik eskalacije.",
        "Kanada, Francuska, Nemačka, Italija i Velika Britanija uputile su zajedničko upozorenje Izraelu da ne pokreće kopnenu ofanzivu u Libanu. Reč je o pokušaju da se spreči otvaranje novog fronta, ali i o pokazatelju da saveznici žele da ograniče dalju eskalaciju.",
        "Ukrajina šalje više od 200 stručnjaka za dronove na Bliski istok kako bi pomogla u suprotstavljanju iranskim sistemima. Ovo je prvi jasan znak povezivanja dva velika konflikta — evropskog i bliskoistočnog.",
        "Talibani tvrde da je pakistanski vazdušni napad u Kabulu izazvao stotine žrtava, uključujući civilne objekte. Sukobi u regionu počinju da se prelivaju i na susedne zemlje, šireći zonu nestabilnosti.",
        "Sukob više nije izolovan — razvija se u mrežu povezanih kriza, sa sve većim brojem aktera i sve manjom kontrolom nad ishodom.",
      ]}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
