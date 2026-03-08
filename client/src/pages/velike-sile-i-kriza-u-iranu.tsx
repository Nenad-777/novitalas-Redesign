/*
 * Velike sile i kriza u Iranu - GEOPOLITIKA (single article)
 * Date: 8. MART 2026
 */

import ArticleTemplate from "@/components/ArticleTemplate";
import { useSEO } from "@/hooks/useSEO";

const PARAGRAPHS = [
  "Kriza oko Irana ponovo je otvorila pitanje uloge velikih sila u regionalnim sukobima Bliskog istoka. Dok tenzije između Teherana i zapadnih država rastu, pažnja međunarodne javnosti sve više se usmerava ka reakcijama Moskve i Pekinga.",

  "Rusija i Kina poslednjih godina razvile su bliske političke i ekonomske odnose sa Iranom, ali njihove reakcije na aktuelnu krizu pokazuju znatno oprezniji pristup nego što se često pretpostavlja u javnim raspravama.",

  "U zvaničnim izjavama obe države osuđuju napade na Iran i pozivaju na deeskalaciju, ali istovremeno izbegavaju bilo kakve korake koji bi ih mogli uvući u direktan sukob sa Sjedinjenim Državama.",

  "Rusija između partnerstva i opreza",

  "Moskva i Teheran poslednjih godina razvili su intenzivnu saradnju u političkoj, vojnoj i ekonomskoj sferi. Posebno tokom rata u Ukrajini odnosi dve zemlje dobili su novu dimenziju, uključujući saradnju u oblasti vojnih tehnologija i energetike.",

  "Ipak, uprkos tom približavanju, Rusija u aktuelnoj krizi ne pokazuje spremnost za direktnu vojnu podršku Iranu.",

  "Zvanične izjave iz Kremlja naglašavaju potrebu za diplomatskim rešenjem i upozoravaju na opasnost šire destabilizacije regiona. Moskva nastoji da zadrži političku podršku Teheranu, ali istovremeno izbegava korake koji bi mogli dovesti do direktnog sukoba sa Zapadom.",

  "U tom smislu ruska strategija deluje kao pokušaj održavanja ravnoteže između strateškog partnerstva sa Iranom i sopstvenih globalnih interesa.",

  "Kina i logika stabilnosti",

  "Kina je u ovoj krizi zauzela još oprezniju poziciju.",

  "Peking dosledno poziva na prekid vojnih operacija i insistira na diplomatskom rešenju sukoba. U izjavama kineskih zvaničnika naglašava se da upotreba sile može samo dodatno destabilizovati region.",

  "Takav stav odražava i kineske ekonomske interese. Persijski zaliv predstavlja jedan od ključnih izvora energije za kinesku privredu, a svaki dugotrajan sukob u regionu mogao bi imati ozbiljne posledice po globalna tržišta nafte i trgovinske tokove.",

  "Zbog toga kineska diplomatija nastoji da krizu posmatra pre svega kroz prizmu stabilnosti međunarodnog sistema.",

  "Partnerstvo bez vojnog saveza",

  "Poslednjih godina sve češće se govori o približavanju Rusije, Kine i Irana kao delu šire transformacije međunarodnog poretka.",

  "Ipak, odnosi između ove tri države ne predstavljaju formalni vojni blok.",

  "Reč je pre svega o političkom i strateškom približavanju koje proizlazi iz zajedničkih interesa u odnosu na zapadni međunarodni poredak, ali bez obaveza koje bi podrazumevao klasični vojni savez.",

  "Zbog toga reakcije Moskve i Pekinga u trenutnoj krizi pokazuju jasnu granicu između političke podrške i spremnosti na vojno angažovanje.",

  "Bliski istok kao test globalne ravnoteže",

  "Sukobi na Bliskom istoku često predstavljaju tačke u kojima se presecaju interesi velikih sila. Upravo zbog toga reakcije Moskve i Pekinga imaju širi značaj od samog regionalnog konflikta.",

  "Trenutni razvoj događaja pokazuje da, uprkos rastućem rivalstvu između velikih sila, nijedna od njih ne želi da regionalna kriza preraste u direktan globalni sukob.",

  "U takvom okruženju Bliski istok ponovo postaje prostor u kojem se testira ravnoteža moći savremenog sveta.",
];

export default function VelikeSileIKrizaUIranu() {
  useSEO("/geopolitika/velike-sile-i-kriza-u-iranu");

  return (
    <ArticleTemplate
      sectionLabel="Geopolitika"
      title="Velike sile i kriza u Iranu: oprezna ravnoteža Moskve i Pekinga"
      dateLabel="8. MART 2026."
      deck="Između podrške Teheranu i izbegavanja velikog rata"
      imageSrc="/russia-china-shadows.jpg"
      imageAlt="Rusija i Kina — senke velikih sila"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
