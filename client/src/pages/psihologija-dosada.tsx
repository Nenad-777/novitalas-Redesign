import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Postoji jedna neobična, gotovo sumnjiva aktivnost koju smo kao vrsta nekada redovno praktikovali, a danas je izbegavamo sa gotovo dirljivom upornošću: ne raditi ništa.",
  "Nekada su ljudi znali da sede. Samo sede. Gledaju u daljinu, u drvo, u zid, u nešto što nema notifikacije. Danas, ako se zateknete u takvom stanju duže od deset sekundi, velika je verovatnoća da ćete instinktivno posegnuti za telefonom, kao da vam je neko upravo oduzeo kiseonik.",
  "I tu dolazimo do jednog od zanimljivijih otkrića savremene psihologije, koje je, u suštini, toliko jednostavno da je gotovo uvredljivo: vaš mozak najbolje radi kada ga ostavite na miru.",
  "Naučnici su, uz pomoć skenera, grafika i ozbiljnih izraza lica, otkrili da postoji čitava mreža u mozgu koja se aktivira upravo kada ne radite ništa posebno. Nazvali su je Default Mode Network, što zvuči kao nešto što biste pronašli u podešavanjima Wi-Fi rutera, ali je zapravo mesto gde se dešavaju neke od najvažnijih stvari u vašem životu, samo što vi toga niste svesni.",
  "U tom \u201ebesposlenom\u201c stanju mozak povezuje događaje, sređuje uspomene, rešava probleme i, povremeno, smisli nešto što će vam kasnije delovati kao genijalna ideja do koje ste došli pod tušem ili dok ste gledali u plafon. Ukratko, dok vi mislite da ne radite ništa, vaš mozak radi sve ono što nema vremena da uradi dok ste zauzeti.",
  "Problem je što smo, kao civilizacija, odlučili da je to neprihvatljivo.",
  "Živimo u vremenu u kojem se praznina doživljava kao greška u sistemu. Svaki trenutak mora biti ispunjen, informacijom, zvukom, sadržajem, makar i potpuno besmislenim. Kao da smo kolektivno zaključili da je najgora stvar koja može da nam se desi da ostanemo sami sa sopstvenim mislima.",
  "Što je, naravno, pomalo nezgodno, jer su to jedine misli koje zaista imamo.",
  "Savremena psihologija zato sve češće govori o nečemu što zvuči kao nova disciplina, ali je zapravo vrlo stara ideja: mentalna ekologija. To je zamisao da našem umu treba prostor, baš kao što gradu trebaju parkovi. Bez tog prostora, sve funkcioniše, ali ništa nije prijatno.",
  "Ako vam ovo deluje kao preterivanje, razmislite o sledećem: kada ste poslednji put imali ideju koja nije došla iz nečega što ste upravo videli, pročitali ili čuli? Kada vam je misao zaista bila vaša, a ne samo uredno upakovan odjek sveta oko vas?",
  "Tu negde, u tom pitanju, leži suština ovog otkrića.",
  "Ne radi se o tome da treba da odbacimo tehnologiju, preselimo se u planinu i počnemo da razgovaramo sa drvećem, mada, iskreno, ima gorih planova. Radi se o nečemu daleko jednostavnijem: da povremeno dozvolimo sebi da budemo dosadni.",
  "Da sedimo. Da čekamo. Da ne radimo ništa.",
  "Jer, kako sada izgleda, to \u201eništa\u201c možda je najproduktivnija stvar koju ćemo danas uraditi.",
  "I što je najzanimljivije, potpuno je besplatno.",
];

export default function PsihologijaDosada() {
  return (
    <ArticleTemplate
      path="/nasa-planeta/psihologija-dosada"
      sectionLabel="Naša planeta"
      title="Otkriće psihologije: zašto je najbolja stvar koju možete da uradite da ne radite ništa"
      dateLabel="20. MART 2026."
      deck="Postoji jedna neobična aktivnost koju smo kao vrsta nekada redovno praktikovali, a danas je izbegavamo sa gotovo dirljivom upornošću: ne raditi ništa."
      imageSrc="/news/psihologija-dosada.jpg"
      imageAlt="Čovek koji sedi u tišini i gleda u daljinu — simbol mentalne odmorenosti i dosade kao produktivnog stanja"
      paragraphs={PARAGRAPHS}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
