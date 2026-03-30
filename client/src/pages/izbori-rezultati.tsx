import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/izbori-rezultati.jpg";

const PARAGRAPHS = [
  `Rezultati lokalnih izbora u Srbiji potvrdili su dominaciju vladajuće Srpske napredne stranke, koja je osvojila većinu u najvećem broju opština, ali uz vidljivo slabljenje podrške u urbanim sredinama.`,
  `U Beogradu i većim gradovima zabeležen je rast glasova za opozicione i građanske liste, što analitičari tumače kao odraz nezadovoljstva delom birača koji su dotad glasali za vlast, ili se nisu odazivali na prethodna glasanja.`,
  `Studentski i građanski pokreti koji su participirali na ovim izborima privukli su pažnju javnosti, ali nisu uspeli da pređu u drugi krug ili osvoje mandate u dovoljnom broju okruga da promene suštinski raspored snaga.`,
  `Međunarodni posmatrači zabeležili su nekoliko spornih situacija na biračkim mestima, uključujući pritiske na birače i probleme sa spiskovima, ali nisu ocenili da su ove nepravilnosti dovoljne da dovedu u pitanje ukupnu validnost izbornog procesa.`,
  `Opozicione stranke najavile su prigovore na rezultate u više opština i zatražile uvid u izborne materijale, pozivajući se na prijave birača i posmatrača o nepravilnom postupanju određenih biračkih odbora.`,
  `Konačni rezultati biće zvanično objavljeni nakon razmatranja svih prigovora od strane Republičke izborne komisije, koja ima rok od sedam dana da donese odluke po uloženim žalbama.`,
];

export default function IzboriRezultati() {
  return (
    <ArticleTemplate
      path="/srbija/izbori-rezultati"
      sectionLabel="Srbija"
      title="Rezultati izbora: vladajuća stranka zadržala većinu, ali uz gubitke u gradovima"
      dateLabel="30. MART 2026."
      deck="Lokalni izbori u Srbiji doneli su pobede vladajuće stranke u većini opština, ali uz porast podrške opoziciji u urbanim centrima i prigovore na irregularnosti."
      imageSrc={IMAGE_SRC}
      imageAlt="Ilustracija izbornih rezultata u Srbiji — grafikon glasova i biračke kutije"
      imageCredit="Foto: ilustracija"
      paragraphs={PARAGRAPHS}
      backHref="/srbija"
      backLabel="← Nazad na Srbiju"
    />
  );
}
