import ArticleTemplate from "@/components/ArticleTemplate";

export default function KrajRataArticle() {
  return <ArticleTemplate
    path={"/geopolitika/da-li-je-na-pomolu-kraj-rata"}
    sectionLabel={"GEOPOLITIKA"}
    title={"Da li je na pomolu kraj rata?"}
    dateLabel={"12. NOVEMBAR 2026."}
    deck={"Posle pregovora u Abu Dabiju, američki izaslanici doputovali su u Moskvu na razgovore sa Vladimirom Putinom. Diplomatski kontakti se intenziviraju, ali teritorijalna pitanja i bezbednosne garancije za Ukrajinu ostaju najveće prepreke mogućem mirovnom sporazumu."}
    imageSrc={"/news/kraj-rata-ukrajina.jpg"}
    imageAlt={"Simbolička AI ilustracija pregovaračkog stola sa dokumentom i maslinovom grančicom, uz pogled na Kremlj."}
    imageCredit={"Ilustracija: Novi talas / AI generisana ilustracija."}
    imageHeightClass={"h-auto"}
    backHref={"/geopolitika"}
    backLabel={"← Nazad na Geopolitiku"}
    paragraphs={["Specijalni izaslanik američkog predsednika Stiv Vitkof i Džared Kušner sastali su se u četvrtak u Kremlju sa ruskim predsednikom Vladimirom Putinom. Na aerodromu ih je dočekao Kiril Dmitrijev, predstavnik ruske strane uključen u diplomatske kontakte sa Vašingtonom. Njihova poseta usledila je dan nakon završetka dvodnevnih pregovora predstavnika Rusije, Ukrajine i Sjedinjenih Američkih Država u Abu Dabiju. Bio je to prvi direktan susret predstavnika Moskve i Kijeva uz američko posredovanje posle devet meseci.", "Razgovori u Ujedinjenim Arapskim Emiratima doneli su načelni dogovor o novoj razmeni ratnih zarobljenika, ali ne i sporazum o prekidu vatre. Predstavnici dve strane potvrdili su napredak u humanitarnim pitanjima, dok su američki posrednici ukazali na to da su razlike oko uslova za okončanje rata i dalje velike. Najteže pitanje ostaje teritorija: Moskva zahteva povlačenje ukrajinskih snaga iz celog Donbasa, uključujući oblasti koje Rusija ne kontroliše, dok Kijev takav zahtev odbacuje.", "Američka diplomatija nastoji da razgovore proširi i na buduće bezbednosne garancije za Ukrajinu, obnovu zemlje i širi evropski bezbednosni poredak. Moskva je izrazila spremnost da razgovara o mogućim sporazumima o nenapadanju sa članicama NATO-a, ali se protivi uključivanju Evropske unije u neposredne pregovore. Ukrajina, s druge strane, insistira na tome da evropski partneri moraju imati važnu ulogu u odlučivanju o budućoj bezbednosti kontinenta. Putin je na sastanku ponovio da je raspoređivanje evropskih trupa u Ukrajini za Moskvu neprihvatljivo. Ruske teritorijalne zahteve povezao je sa četiri ukrajinske oblasti čiju je aneksiju Moskva proglasila 2022, iako ih ne kontroliše u celosti.", "Nakon posete Moskvi, Vitkof i Kušner trebalo bi da otputuju u Dablin na razgovore sa ukrajinskim predsednikom Volodimirom Zelenskim. On je izrazio nadu da bi do kraja godine moglo doći do konkretnih rezultata, ali je naglasio da će mnogo zavisiti od pristupa Vašingtona prema Rusiji. Uprkos nastavku diplomatskih kontakata, vojna dejstva nisu obustavljena. Za sada nema potvrde da su strane spremne na ustupke koji bi omogućili postizanje sveobuhvatnog mirovnog sporazuma."]}
    imageBeforeDeck
  />;
}
