import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/hydrogen-light.jpg";

const PARAGRAPHS = [
  "Kina je izvela prvi uspešan test megavatnog vodoničnog turboprop motora, što predstavlja značajan korak u razvoju nove generacije avijacije sa smanjenim emisijama. Reč je o tehnološkom iskoraku koji pokazuje da se trka za budućnost vazdušnog saobraćaja više ne vodi samo oko brzine i troškova, već i oko energetskih modela koji će definisati naredne decenije.",
  "Nova tehnologija koristi vodonik kao izvor energije za proizvodnju električne snage, sa ciljem da se smanji zavisnost od klasičnih fosilnih goriva. Iako je komercijalna primena još daleko, sam test pokazuje da Kina ubrzano gradi poziciju u sektoru koji bi mogao da promeni odnos snaga u globalnoj avio-industriji.",
  "Ovaj razvoj dolazi u trenutku kada i Sjedinjene Države i Evropska unija ulažu značajna sredstva u alternativne pogonske sisteme, ali kineski tempo sugeriše pokušaj da se standardi buduće industrije oblikuju izvan zapadnih centara moći. U tom smislu, vest nije samo tehnološka, već i geopolitička.",
  "Za međunarodna tržišta i države koje prate transformaciju energetike, ovo je signal da se avijacija postepeno uključuje u širu tranziciju ka novim izvorima energije. Pitanje više nije da li će do promene doći, već ko će prvi uspeti da je pretvori u industrijsku i stratešku prednost.",
];

export default function KinaTestiraVodonicniAvion() {
  return (
    <ArticleTemplate
      path="/geopolitika/kina-testira-vodonicni-avion-pocetak-nove-energetske-trke-u-avijaciji"
      sectionLabel="Geopolitika"
      title="Kina testira vodonični avion: početak nove energetske trke u avijaciji"
      dateLabel="6. APRIL 2026."
      deck="Kina je izvela prvi uspešan test megavatnog vodoničnog turboprop motora, što ukazuje na ubrzanje globalne energetske i tehnološke trke u avijaciji."
      imageSrc={IMAGE_SRC}
      imageAlt="Vodoničnim gorivnim ćelijama pogonjen avion na poletištu tokom testiranja"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
