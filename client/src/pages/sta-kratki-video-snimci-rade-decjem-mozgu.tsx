import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Britanski istraživači pokrenuli su Nerve Lab pri University of the Arts London kako bi preciznije ispitali odnos dece i digitalnih sadržaja. Laboratorija kombinuje veštačku inteligenciju, nosivo skeniranje mozga i analizu medijskog sadržaja, sa ciljem da izmeri kako forma videa utiče na pažnju, razumevanje i emocionalni odgovor.",
  "U središtu istraživanja nisu samo telefoni, tableti i televizori, već ono što se na tim ekranima prikazuje. Tempo, boje, zvuk, ritam montaže i učestalost promene kadrova mogu oblikovati iskustvo deteta jednako snažno kao i sama tema sadržaja.",
  "To menja uobičajeno pitanje o vremenu pred ekranom. Umesto jednostavnog „koliko dugo dete gleda“, Nerve Lab pokušava da odgovori na složenije pitanje: šta dete tačno gleda, kako je taj sadržaj napravljen i šta se tokom gledanja događa sa njegovom pažnjom.",
  "Pola sata mirnog, narativno jasnog programa nije isto što i pola sata kratkih snimaka u kojima se prizori, zvuci i poruke smenjuju svakih nekoliko sekundi. Vreme provedeno pred ekranom može biti isto, ali je kognitivno iskustvo potpuno drugačije.",
  "Veštačka inteligencija omogućava istraživačima da velike količine video-materijala razlože na merljive elemente: brzinu rezova, intenzitet boja, promene glasnoće, složenost priče i broj trenutaka osmišljenih da ponovo privuku pažnju. Nosivi uređaji zatim beleže kako dečji mozak i telo reaguju dok sadržaj traje.",
  "Posebno pitanje predstavljaju kratki video-formati. Oni korisniku nude gotovo trenutnu nagradu i mogućnost da jednim pokretom pređe na sledeći stimulans. Kada se taj obrazac stalno ponavlja, sporiji sadržaji, duže priče i zadaci koji zahtevaju strpljenje mogu delovati manje privlačno.",
  "To ne znači da svaki kratki snimak šteti pažnji niti da je svaki ekran problem. Dečji razvoj zavisi od uzrasta, porodičnog okruženja, sna, škole i brojnih drugih faktora. Upravo zato je važno da istraživanje zameni pretpostavke merenjem, a moralnu paniku dokazima.",
  "Nerve Lab bi mogao da pomogne i autorima dečjeg programa. Ako se pokaže da određeni ritmovi montaže ili kombinacije zvuka i slike preopterećuju pažnju, kvalitet sadržaja ubuduće se možda neće procenjivati samo prema tome da li sadrži nasilje ili neprikladan jezik, već i prema načinu na koji je oblikovan.",
  "Slična pitanja važna su i za obrazovanje. Čitanje, slušanje i rešavanje problema traže zadržavanje pažnje bez stalne promene stimulansa. Ako digitalni sadržaji postepeno podižu prag onoga što dete doživljava kao zanimljivo, škola i knjiga mogu izgubiti bitku pre nego što je ona uopšte postala vidljiva.",
  "Roditeljima zato nije potrebna još jedna zabrana, već precizniji jezik za razlikovanje sadržaja. Nije isto kada ekran dete uvodi u priču, podstiče pitanje i ostavlja prostor za razumevanje, i kada ga samo zadržava neprekidnim nizom iznenađenja.",
  "Najvažniji doprinos britanske laboratorije mogao bi biti upravo u tome: da raspravu o ekranima pomeri sa brojanja minuta na razumevanje medija. Jer pažnju ne oblikuje samo trajanje gledanja, već ritam sveta koji dete svakodnevno gleda.",
  "Izvori: The Guardian; University of the Arts London / Nerve Lab.",
];

export default function StaKratkiVideoSnimciRadeDecjemMozgu() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/sta-kratki-video-snimci-rade-decjem-mozgu"
      sectionLabel="Naša planeta"
      title="Šta kratki video-snimci rade dečjem mozgu? Britanci pokrenuli laboratoriju da to konačno izmere"
      dateLabel="14. JUN 2026."
      authorLabel="Novi Talas"
      deck="Britanski Nerve Lab koristi AI, nosivo skeniranje mozga i analizu medijskog sadržaja kako bi ispitao kako tempo, boje, zvuk i kratki video-formati utiču na dečju pažnju, razumevanje i emocionalni odgovor."
      imageSrc="/news/nerve-lab-deca-ekrani-mozak.jpg"
      imageAlt="Dete osvetljeno ekranom telefona, sa apstraktnim prikazom mozga i digitalnih signala"
      imageCredit="Ilustracija: Novi Talas"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
