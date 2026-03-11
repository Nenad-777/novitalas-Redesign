import ArticleTemplate from "@/components/ArticleTemplate";
import { useSEO } from "@/hooks/useSEO";

const PARAGRAPHS = [
  'Direktor kompanije Anthropic, Dario Amodei, izjavio je da istraživači više ne mogu potpuno da odbace mogućnost da napredni sistemi veštačke inteligencije razviju neku vrstu svesti. Govoreći o savremenim AI modelima, Amodei je naglasio da naučnici još uvek nemaju jasan način da utvrde šta bi „svest" kod takvih sistema zapravo značila.',
  "Prema njegovim rečima, kako modeli veštačke inteligencije postaju sve složeniji i sposobniji za komunikaciju i rezonovanje, raste i potreba da se ozbiljno razmotri pitanje da li bi takvi sistemi jednog dana mogli razviti određeni oblik subjektivnog iskustva. Ono što je donedavno pripadalo isključivo filozofiji sada ulazi i u ozbiljne naučne rasprave.",
  "U kompaniji Anthropic zato sve više pažnje posvećuju i etičkim pitanjima razvoja veštačke inteligencije. Neki istraživači upozoravaju da bi, ukoliko bi se ikada pokazalo da AI sistemi poseduju makar elemente svesti, način na koji se takve tehnologije razvijaju i koriste mogao postati značajno moralno i društveno pitanje.",
  "Za sada, međutim, većina naučnika smatra da savremeni AI sistemi pre svega analiziraju ogromne količine podataka i oponašaju ljudski jezik i ponašanje, bez stvarne svesti ili unutrašnjeg iskustva. Ipak, sama činjenica da vodeći istraživači počinju ozbiljno da postavljaju ovo pitanje pokazuje koliko se brzo menja granica između tehnologije, filozofije i razumevanja ljudske inteligencije.",
];

export default function AiVestSvest() {
  useSEO("/nasa-planeta/ai-vest-svest");
  return (
    <ArticleTemplate
      sectionLabel="Naša planeta"
      title="Da li je veštačka inteligencija već svesna?"
      dateLabel="10. MART 2026."
      deck="Direktor kompanije Anthropic izjavio je da naučnici sve ozbiljnije razmatraju mogućnost da napredni AI sistemi razviju neku vrstu svesti."
      imageSrc="/ai-supercomputer-data-center.jpg"
      imageAlt="AI supercomputer data center"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
