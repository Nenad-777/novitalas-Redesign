/*
 * Zapadne sile upozorile Izrael - Geopolitika (single article)
 * Date: 18. mart 2026.
 */

import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "Zapadne sile uputile su zajedničko upozorenje Izraelu da ne pokreće kopnenu vojnu operaciju u Libanu, u trenutku kada tenzije na severnoj granici dostižu najviši nivo u poslednjih nekoliko godina.",

  "Kanada, Francuska, Nemačka, Italija i Velika Britanija upozorile su da bi takav potez mogao da izazove širu regionalnu eskalaciju i uključi dodatne aktere u sukob, uključujući Hezbollah i potencijalno Iran.",

  "Diplomatski pritisak dolazi paralelno sa intenziviranjem razmene vatre između izraelskih snaga i Hezbollaha, što dodatno povećava rizik od otvaranja novog fronta na Bliskom istoku.",

  "Iako ostaju politički i bezbednosni partneri Izraela, zapadne zemlje ovim signalom jasno ukazuju na zabrinutost zbog mogućih posledica dugotrajnog konflikta, naročito po civilno stanovništvo i regionalnu stabilnost.",

  "Bezbednosne procene ukazuju da bi kopnena operacija u Libanu mogla da preraste u dugotrajan i nepredvidiv sukob, sa ozbiljnim geopolitičkim posledicama.",
];

export default function WestAgainstIsraelLiban() {
  return (
    <ArticleTemplate
      path="/geopolitika/zapadne-sile-upozorile-izrael"
      sectionLabel="Geopolitika"
      title="Zapadne sile upozorile Izrael - ne pokretati kopnenu ofanzivu u Libanu"
      dateLabel="18. MART 2026."
      deck="Zapadne zemlje upozoravaju Izrael da ne pokreće kopnenu operaciju u Libanu, uz rastući rizik regionalne eskalacije."
      imageSrc="/news/west-against-israel.jpg"
      imageAlt="Zapadne sile upozorile Izrael - kopnena ofanziva u Libanu"
      paragraphs={PARAGRAPHS}
      backHref="/geopolitika"
      backLabel="← Nazad na Geopolitiku"
    />
  );
}
