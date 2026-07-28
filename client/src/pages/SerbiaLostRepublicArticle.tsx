import ArticleTemplate from "@/components/ArticleTemplate";

const PATH =
  "/srbija/srbija-bez-republike-moze-li-se-obnoviti-drzava-posle-cetrnaest-godina-vlasti-sns-a";

export default function SerbiaLostRepublicArticle() {
  return (
    <ArticleTemplate
      path={PATH}
      sectionLabel="ANALIZA"
      title="Srbija bez republike: može li se obnoviti država posle četrnaest godina vlasti SNS-a?"
      dateLabel="28. JUL 2026."
      deck="Rasprava o nepoverenju Vladi Srbije samo je povod za mnogo veće pitanje: šta se dogodilo sa zemljom u kojoj Vlada više nije stvarni centar izvršne vlasti, parlament ne kontroliše mesto na kojem se odluke donose, a institucije potvrđuju političku volju oblikovanu izvan njih?"
      imageSrc="/news/lost-republic.jpg"
      imageAlt="Minimalistička ilustracija kupole Narodne skupštine Srbije sa dugom senkom koja simbolizuje odnos između institucija i stvarne političke moći."
      imageCredit="Vizual: Novi Talas / AI ilustracija"
      imageFirst={true}
      paragraphs={[
        "Narodna skupština raspravlja o nepoverenju Vladi Srbije. Ishod je gotovo unapred poznat: vladajuća većina ima dovoljno glasova da Vlada opstane.",
        {
          type: "paragraph",
          content: (
            <>
              Ali važnije pitanje nije da li će Vlada pasti, već{" "}
              <strong>šta bi se njenim padom zaista promenilo</strong>.
            </>
          ),
        },
        "U parlamentarnoj republici Vlada je središte izvršne vlasti. Predsednik Vlade usmerava njen rad, ministri vode državnu politiku, a parlament ih kontroliše i poziva na odgovornost.",
        "U Srbiji ta ustavna arhitektura formalno i dalje postoji. Postoje Vlada, Narodna skupština, sudovi, tužilaštva, regulatorna tela i izbori.",
        "Ali Srbija već godinama ne funkcioniše kao republika definisana sopstvenim Ustavom.",
        { type: "heading", text: "Vlada koja vlada samo formalno" },
        "Današnja Vlada Srbije nije stvarni centar političkog odlučivanja.",
        "Od predsednika Vlade javnost ne očekuje da odredi pravac spoljne politike, predstavi najvažnije državne projekte ili odgovori na veliku političku krizu. Ta očekivanja već godinama usmerena su prema predsedniku Republike, iako mu Ustav ne poverava upravljanje Vladom.",
        "To nije samo posledica medijske dominacije jednog čoveka. Reč je o promeni stvarne strukture vlasti.",
        "Ministri raspolažu budžetima, upravljaju administracijom, predlažu zakone i potpisuju odluke, ali njihova politička samostalnost prestaje tamo gde počinje volja predsedničkog i partijskog centra.",
        {
          type: "paragraph",
          content: (
            <>
              Zato ministar može istovremeno biti moćan i politički nevažan.
              Kada se neki projekat predstavlja kao uspeh, zasluga pripada
              predsedniku. Kada nastane skandal, odgovornost se spušta naniže —
              na ministra, direktora, komisiju ili službenika.
            </>
          ),
        },
        {
          type: "paragraph",
          content: (
            <>
              <strong>Moć je koncentrisana, a odgovornost raspršena.</strong>
            </>
          ),
        },
        "Promena ministra zato retko menja politiku. Menja se lice, ali ne i način odlučivanja.",
        "Predlog za izglasavanje nepoverenja Vladi u sebi nosi paradoks: parlament pokušava da kontroliše organ kojem je ostavljena formalna odgovornost, ali ne i puna politička vlast.",
        {
          type: "heading",
          text: "Institucije nisu nestale. Promenile su namenu",
        },
        "Republika nije samo naziv države.",
        "Njena suština je u tome da vlast nije privatno vlasništvo pobednika i da se moć deli između institucija koje se međusobno ograničavaju.",
        "Vlada upravlja, ali odgovara parlamentu. Predsednik predstavlja državu, ali ne upravlja svim njenim organima. Sudovi i tužilaštva postupaju bez političkog naloga. Mediji nadziru vlast u ime javnosti.",
        "Takva ravnoteža u Srbiji nije ukinuta jednim zakonom. Razgrađivana je tokom četrnaest godina slabljenjem autonomije institucija i njihovim uklapanjem u jedinstvenu političku vertikalu.",
        {
          type: "paragraph",
          content: (
            <>
              U tome se ogleda osnovna osobina sistema SNS-a:{" "}
              <strong>
                njegova autoritarnost nije nastala ukidanjem institucija, već
                njihovim potčinjavanjem
              </strong>
              .
            </>
          ),
        },
        "Skupština je ostala, ali ne kontroliše stvarni centar izvršne vlasti.",
        "Vlada je ostala, ali više nije glavno mesto odlučivanja.",
        "Ministri su ostali, ali bez pune autonomije i odgovornosti.",
        "Tužilaštva postoje, ali javnost ne može sa sigurnošću očekivati da se zakon jednako primenjuje prema običnom građaninu i prema politički moćnom pojedincu.",
        "Izbori postoje, ali se održavaju u uslovima zloupotrebe javnih resursa, medijske neravnopravnosti i stapanja državne i partijske kampanje.",
        "Institucije, dakle, nisu nestale.",
        {
          type: "paragraph",
          content: (
            <>
              <strong>Promenile su namenu.</strong>
            </>
          ),
        },
        "Zarobljena institucija nije nužno neefikasna. Može biti stroga prema građaninu, a krajnje oprezna kada predmet dodirne politički vrh. Može brzo sprovesti odluku vlasti, ali godinama ne odgovoriti na pitanje javnosti.",
        "Zbog toga nije sasvim tačno reći da sistem ne funkcioniše.",
        "On često funkcioniše veoma disciplinovano.",
        {
          type: "paragraph",
          content: (
            <>
              Pitanje je samo — <strong>u čiju korist</strong>.
            </>
          ),
        },
        { type: "heading", text: "Afera bez završetka" },
        "Demokratske države nemaju manje skandala zato što su njihovi funkcioneri moralniji. Razlika je u tome što u demokratiji skandal proizvodi posledicu.",
        "Ministar podnosi ostavku. Parlament pokreće istragu. Tužilaštvo postupa. Javnost dobija završetak: smenu, presudu, oslobađanje ili jasno obrazloženje.",
        "U Srbiji je normalizovan drugačiji obrazac:",
        "otkriće, negiranje, napad na izvor, relativizacija, delimična istraga, čekanje, nova afera.",
        "Odgovornost se ne odbacuje uvek otvoreno. Ona se razlaže.",
        "Jedan organ tvrdi da nije nadležan. Drugi čeka dokumentaciju. Treći vodi predistražni postupak. Predsednik saopštava svoju verziju događaja. Vladajuća većina kritiku proglašava napadom na državu.",
        "Vreme prolazi, javnost se iscrpljuje, a novi slučaj potiskuje prethodni.",
        "Sistem ne mora da dokaže da se zloupotreba nije dogodila.",
        "Dovoljno je da joj ne dopusti politički i pravni epilog.",
        "Tako afera prestaje da bude izuzetak. Ona postaje deo ritma države.",
        "Sistem ne proizvodi samo poslušnost.",
        "Proizvodi osećaj nepromenljivosti.",
        { type: "heading", text: "Država kao infrastruktura partije" },
        "Najdublja promena nije izvršena samo na vrhu vlasti.",
        "Politička zavisnost proširena je kroz ministarstva, lokalne uprave, javna preduzeća, ustanove, konkurse, subvencije, medije i tokove javnog novca.",
        "U mnogim sredinama partijska pripadnost postala je put do zaposlenja, napredovanja, ugovora sa državom ili zaštite od institucija.",
        "Takav poredak ne održava se samo propagandom, već i mrežom materijalnih zavisnosti.",
        "Vlast se zato ne brani samo političkim uverenjem.",
        "Brani se radnim mestom.",
        "Ugovorom.",
        "Funkcijom.",
        "Strahom od gubitka egzistencije.",
        "Kada se partija tako duboko spoji sa državom, granica između javnog i partijskog interesa gotovo nestaje.",
        "Partija se predstavlja kao država.",
        "Kritika partije kao napad na Srbiju.",
        "Promena vlasti kao opasnost po stabilnost zemlje.",
        "Upravo tu republika gubi svoju osnovnu ideju: da država pripada svim građanima, bez obzira na to ko trenutno ima većinu.",
        { type: "heading", text: "Najveća šteta SNS-a" },
        "Četrnaest godina vlasti proizvelo je brojne afere, sumnje u korupciju, netransparentne poslove i slučajeve bez institucionalnog epiloga.",
        "Ali najveća šteta ne može se izmeriti njihovim zbirom.",
        "Najveća istorijska odgovornost vlasti SNS-a ogleda se u razgrađivanju demokratskog i republikanskog poretka Srbije.",
        "U pretvaranju Vlade u izvršni servis neformalnog centra moći.",
        "U svođenju ministara na potpisnike i branioce odluka koje nisu samostalno doneli.",
        "U pretvaranju parlamenta u mesto na kojem se vlast potvrđuje, a ne kontroliše.",
        "U potčinjavanju institucija koje bi morale da štite zakon.",
        "U brisanju granice između partije i države.",
        "U pretvaranju građanina iz nosioca suverenosti u posmatrača odluka donetih iznad njega.",
        "To je najveći politički i istorijski prestup ove vlasti.",
        "Koruptivna dela mogu biti istražena. Nezakoniti ugovori mogu biti raskinuti. Funkcioneri mogu biti procesuirani.",
        "Ali mnogo je teže obnoviti sposobnost institucije da kaže „ne“ vlasti.",
        "Još je teže obnoviti uverenje državnog službenika da služi zakonu, poslanika da odgovara građanima, a tužioca da mu za postupanje nije potreban politički signal.",
        { type: "heading", text: "Obnova republike" },
        "Promena vlasti neće sama po sebi obnoviti Srbiju.",
        "Ali će otvoriti prostor da obnova počne.",
        "Najvažniji test buduće vlasti neće biti da li ume da koristi aparat koji je nasledila, već da li ima snage da ga razgradi.",
        "Da li će predsednik ostati u granicama ustavnih ovlašćenja?",
        "Da li će Vlada ponovo stvarno upravljati državom?",
        "Da li će parlament kontrolisati izvršnu vlast?",
        "Da li će tužilac moći da istraži i bivšeg i novog ministra bez političke dozvole?",
        "Da li će javno preduzeće prestati da bude partijski resurs?",
        "SNS će jednog dana izgubiti vlast. Nijedna partija i nijedan predsednik nisu večni.",
        "Ali izborna smena sama po sebi neće poništiti poslednjih četrnaest godina.",
        "Prava promena počeće tek kada vlast ponovo bude podeljena, odgovornost jasno utvrđena, a institucije oslobođene obaveze da služe pobedniku.",
        "Najveći zadatak buduće Srbije zato neće biti samo da smeni SNS.",
        "Biće da obnovi republiku koju je sistem SNS-a ispraznio od njenog demokratskog sadržaja.",
        {
          type: "paragraph",
          content: (
            <>
              <strong>Srbija ne mora ponovo da izmišlja demokratiju.</strong>
            </>
          ),
        },
        {
          type: "paragraph",
          content: (
            <>
              <strong>Mora da vrati državu njenim građanima.</strong>
            </>
          ),
        },
      ]}
      backHref="/srbija"
      backLabel="← Nazad na Srbiju"
    />
  );
}
