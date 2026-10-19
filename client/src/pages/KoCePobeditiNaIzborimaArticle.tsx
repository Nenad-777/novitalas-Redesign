import ArticleTemplate from "@/components/ArticleTemplate";

// Verbatim publication of approved editorial draft (19 October 2026).
const path = "/srbija/ko-ce-pobediti-na-izborima";
const title = "Ko će pobediti na izborima?";
const deck = "Šta ako Aleksandar Vučić 25. oktobra proglasi pobedu, a njegova vlast se već narednog jutra suoči sa mnogo težim pitanjem: koliko je takva pobeda politički održiva pred međunarodnom javnošću?";
const paragraphs = [
  "Izbori u Srbiji mogli bi da proizvedu paradoks: vlast koja osvoji većinu mandata, ali ne uspe da okonča krizu poverenja u izborni proces.",
  "Takav scenario sve je teže isključiti, jer se pitanje regularnosti izbora otvara mnogo pre samog izbornog dana.",
  "Izbori se, naime, ne odlučuju samo prilikom prebrojavanja glasova. Na njihov ishod utiču i uslovi u kojima se vodi kampanja, dostupnost medija, pritisci na birače, korišćenje državnih resursa i funkcionisanje institucija koje bi trebalo da obezbede ravnopravnu političku utakmicu.",
  "Upravo na takve probleme već ukazuju domaći i međunarodni posmatrači. Njihovi nalazi i upozorenja otvaraju pitanje da li se izborne nepravilnosti mogu posmatrati kao izolovani incidenti ili kao deo šireg procesa koji prethodi samom glasanju.",
  "Istovremeno, Evropska narodna partija preispituje status SNS-a u sopstvenoj političkoj porodici. Iako to nije odluka institucija Evropske unije, reč je o političkom signalu koji Beograd teško može da zanemari.",
  { type:"paragraph" as const, content:<strong>{"Šta se, dakle, događa ako Vučić proglasi pobedu?"}</strong> },
  "Ukoliko međunarodni posmatrači nakon izbora potvrde ozbiljne nepravilnosti, nova parlamentarna većina mogla bi da se suoči sa krizom legitimiteta koja prevazilazi granice Srbije.",
  "Tada u središtu međunarodne pažnje više ne bi bio samo izborni rezultat, već način na koji je ostvaren. Nalazi posmatrača mogli bi da postanu osnov za zahteve za nezavisnom proverom spornih postupaka, utvrđivanjem odgovornosti i konkretnim političkim odgovorima evropskih i američkih aktera.",
  "Za vlast bi posebno ozbiljna bila mogućnost da se sumnje u regularnost izbora pretoče u dugotrajan gubitak poverenja međunarodnih partnera. Parlamentarna većina može omogućiti formiranje vlade, ali ne može sama ukloniti pitanje političke verodostojnosti njenog mandata.",
  { type:"paragraph" as const, content:<strong>{"U tome se nalazi mogući paradoks izborne noći: proglašena pobeda mogla bi da označi početak najteže međunarodne provere legitimiteta vlasti, umesto potvrde njene stabilnosti."}</strong> },
  "Pitanje mogućih izbornih zloupotreba ne počinje 25. oktobra. Ono već postoji u predizbornom procesu. Izborni dan može doneti konačne brojke, ali ne može sam po sebi otkloniti posledice svega što mu je prethodilo.",
  "Prvi nalazi međunarodnih posmatrača očekuju se 26. oktobra. Njihova ocena, zajedno sa dokumentovanim nepravilnostima i postupanjem nadležnih institucija, biće važna za razumevanje političkih posledica izbora.",
  "Zato pitanje iz naslova ne mora imati samo jedan odgovor. Jedan će se odnositi na raspodelu mandata. Drugi na sposobnost buduće vlasti da odgovori na ozbiljne sumnje u regularnost izbornog procesa.",
  { type:"paragraph" as const, content:<strong>{"Jer proglasiti pobedu i obezbediti njen legitimitet nisu ista stvar."}</strong> },
];
export default function KoCePobeditiNaIzborimaArticle() {
  return <ArticleTemplate path={path} sectionLabel="Srbija · Analiza" title={title} dateLabel="19. OKTOBAR 2026." authorLabel="Novi Talas" deck={deck} imageSrc="/news/ko-ce-pobediti-na-izborima-2026-10-19.png" imageAlt="AI urednička ilustracija: providna glasačka kutija sa listićima ispred Narodne skupštine Srbije." imageCredit="AI ilustracija / Novi Talas" imageFirst={true} imageHeightClass="h-auto" paragraphs={paragraphs} backHref="/srbija" backLabel="← Nazad na Srbiju" />;
}
