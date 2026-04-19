import ArticleTemplate from "@/components/ArticleTemplate";

const IMAGE_SRC = "/news/teamlab1.jpg";

const PARAGRAPHS = [
  "U Tokiju, u četvrti Tojosu, nalazi se prostor koji više liči na prelaz nego na muzej. Zove se teamLab Planets.",
  "Na prvi pogled, sve je jednostavno: kupite kartu, ostavite cipele i ulazite. Ali ono što sledi nema mnogo veze sa klasičnim iskustvom izložbe.",
  "Prostor je organizovan kao niz povezanih celina kroz koje se prolazi bez vraćanja. Nema klasične podele na sale u kojima se zastaje pred delima. Ovde postoji putanja, i samo kretanje postaje deo rada.",
  {
    type: "image" as const,
    src: "/news/teamlab2.jpg",
    alt: "Posetioci prolaze kroz interaktivnu svetlosnu instalaciju u teamLab Planets muzeju",
    credit: "Foto: Unsplash",
  },
  "U jednoj prostoriji posetioci hodaju kroz vodu do članaka, dok se oko njih projektuju svetlosni oblici koji reaguju na svaki korak. U drugoj ulaze u prostor nalik šumi, gde digitalno cveće raste, nestaje i menja se u zavisnosti od prisustva ljudi. Negde dalje, ogledala brišu granice prostora, pa više nije jasno gde se slika završava, a gde počinje telo.",
  "Sve je povezano jednim principom: umetnost ne postoji bez posetioca. Ona se dovršava tek u susretu.",
  "I to menja osnovnu logiku izložbe. Posetilac više ne stoji ispred dela. On ga pokreće.",
  "Zanimljivo je da se taj povratak prirodi događa kroz digitalno. Projekcije, senzori i algoritmi stvaraju svet koji deluje organski. Kao da se priroda vratila, ali u novom obliku.",
  {
    type: "image" as const,
    src: "/news/teamlab3.jpg",
    alt: "Digitalne instalacije i refleksije koje brišu granicu između prostora i tela",
    credit: "Foto: Unsplash",
  },
  "Na izlazu nema objašnjenja. Nema zaključka. Ali ostaje utisak da granica između prirodnog i veštačkog više nije tamo gde smo mislili da jeste.",
  "I možda je to ono što ove izložbe rade najbolje: ne nude novu sliku sveta, već menjaju način na koji u njemu učestvujemo.",
];

export default function UmetnostKojaDiseTeamlabTokio() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/umetnost-koja-dise-teamlab-tokio"
      sectionLabel="Naša planeta"
      title="Umetnost koja diše: izložba u Tokiju koja briše granicu između čoveka i prirode"
      dateLabel="APRIL 2026."
      deck="U Tokiju, u četvrti Tojosu, izložba teamLab Planets menja način na koji posmatramo umetnost, prirodu i odnos čoveka prema prostoru."
      imageSrc={IMAGE_SRC}
      imageAlt="Interaktivna instalacija izložbe teamLab Planets u Tokiju"
      imageCredit="Foto: Unsplash"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
