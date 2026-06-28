import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Jedna od vodećih svetskih kompanija za razvoj veštačke inteligencije, Anthropic, upozorila je da bi napredak najmoćnijih AI sistema uskoro mogao da nadmaši postojeće bezbednosne mehanizme namenjene njihovoj kontroli. Kako prenosi Reuters, kompanija ne poziva na zaustavljanje razvoja veštačke inteligencije, već na uspostavljanje zajedničkog međunarodnog sistema koji bi omogućio privremeno usporavanje razvoja ukoliko rizici postanu preveliki.",
  "Predlog dolazi u trenutku kada vodeće tehnološke kompanije razvijaju sve sposobnije AI modele, dok istovremeno raste zabrinutost da regulatorni okvir ne prati brzinu tehnoloških promena. Anthropic smatra da bi najveće AI laboratorije trebalo da unapred definišu jasna pravila i bezbednosne procedure koje bi se aktivirale ukoliko budući sistemi dostignu nivo koji zahteva dodatne provere.",
  "Prema pisanju Associated Pressa, kompanija posebno naglašava da nijedna država ili kompanija ne može sama rešiti pitanje bezbednosti veštačke inteligencije. Umesto toga, predlaže međunarodnu saradnju vodećih tehnoloških kompanija, naučnih institucija i vlada kako bi se uspostavili zajednički standardi za razvoj najnaprednijih AI sistema.",
  "Ova rasprava predstavlja novu fazu u razvoju veštačke inteligencije. Pre samo nekoliko godina govorilo se uglavnom o tome šta AI može da uradi. Danas se sve češće postavlja drugačije pitanje — kako obezbediti da njene sposobnosti rastu uporedo sa mehanizmima koji će omogućiti bezbednu i odgovornu primenu.",
  "Bez obzira na to da li će predlozi kompanije Anthropic biti prihvaćeni, jedno je izvesno: debata o budućnosti veštačke inteligencije više se ne vodi samo među inženjerima. Ona postaje tema međunarodne politike, ekonomije i bezbednosti, sa mogućim posledicama koje će u narednim godinama oblikovati način na koji društvo koristi jednu od najmoćnijih tehnologija savremenog doba.",
];

export default function AnthropicAIGovernanceArticle() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/anthropic-upozorava-da-li-razvoj-vestacke-inteligencije-postaje-brzi-od-nase-sposobnosti-da-je-kontrolisemo"
      sectionLabel="Naša planeta"
      title="Anthropic upozorava: da li razvoj veštačke inteligencije postaje brži od naše sposobnosti da je kontrolišemo?"
      dateLabel="28. jun 2026."
      deck="Jedna od vodećih svetskih kompanija za razvoj veštačke inteligencije upozorava da bi napredak najmoćnijih AI sistema uskoro mogao da nadmaši postojeće bezbednosne mehanizme namenjene njihovoj kontroli."
      imageSrc="/news/ai-governance-safeguards.jpg"
      imageAlt="Minimalist editorial illustration about AI governance and safety"
      imageCredit="Ilustracija / Novi Talas"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
