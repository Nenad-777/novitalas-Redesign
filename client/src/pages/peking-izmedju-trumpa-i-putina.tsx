import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/putin-xi.jpg";

const PARAGRAPHS = [
  "Vladimir Putin stigao je u Peking na razgovore sa Sijem Đinpingom, nekoliko dana posle susreta kineskog predsednika sa Donaldom Trumpom. Dvojica lidera istakla su da su odnosi Rusije i Kine na izuzetno visokom nivou, potpisano je više sporazuma, a produžen je i ugovor o dobrosusedstvu i prijateljskoj saradnji iz 2001. godine.",
  "Poseta dolazi u trenutku kada Kina pokušava da održi dve paralelne linije: stratešku bliskost sa Moskvom i stabilizaciju odnosa sa Vašingtonom. Za Putina, Peking je potvrda da Rusija nije izolovana uprkos ratu u Ukrajini i zapadnim sankcijama. Za Sija, susret je prilika da pokaže da Kina može da razgovara i sa Moskvom i sa Vašingtonom, bez odricanja od sopstvenih interesa.",
  "U tome je najvažnija promena u rasporedu velikih sila. Kina danas ne mora da bira između Rusije i Amerike. Njena prednost je u tome što obe strane dolaze u Peking tražeći nešto što same više ne mogu lako da obezbede: Moskva oslonac, Vašington stabilnost, a ostatak sveta signal da se krize mogu držati pod kontrolom.",
  "Ipak, kinesko-rusko partnerstvo ima svoje granice. Rusija u Peking dolazi pod pritiskom rata, sankcija i potrebe za tržištem, dok Kina taj odnos koristi pažljivo, bez preuzimanja celog tereta ruskih sukoba. Zato ova poseta ne pokazuje samo bliskost Moskve i Pekinga, već i novu hijerarhiju: Kina sve više postaje prostor u kome se mere odnosi velikih sila, a ne samo jedna od strana u njihovom sukobu.",
];

export default function PekingIzmedjuTrumpaIPutina() {
  return (
    <ArticleTemplate
      path="/geopolitika/peking-izmedju-trumpa-i-putina"
      sectionLabel="GEOPOLITIKA"
      title="Peking između Trumpa i Putina: Kina u središtu nove velike igre"
      dateLabel="17. maj 2026."
      authorLabel="Novi Talas"
      deck="Putinova poseta Pekingu, samo nekoliko dana posle Trumpovog susreta sa Sijem, pokazuje da Kina postaje mesto na kome se ukrštaju ruski, američki i kineski interesi. Moskva traži potvrdu savezništva, Vašington stabilniji odnos, a Peking pokušava da zadrži prednost razgovora sa svima."
      imageSrc={IMAGE_SRC}
      imageAlt="Vladimir Putin i Si Đinping u Pekingu tokom susreta"
      imageCredit="Foto: Kremlin.ru / Wikimedia Commons"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
