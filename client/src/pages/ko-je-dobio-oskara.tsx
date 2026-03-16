import ArticleTemplate from "@/components/ArticleTemplate";
import { useSEO } from "@/hooks/useSEO";

export default function KoJeDobioOskara() {
  useSEO("/nasa-planeta/ko-je-dobio-oskara");
  return (
    <ArticleTemplate
      sectionLabel="Naša planeta"
      title="Ko je dobio Oskara?"
      dateLabel="16. MART 2026."
      deck="Dok svet tone u ratove, razaranja i očigledan pad civilizacijskih normi, ceremonija Oskara nastavlja da blista, gotovo ravnodušna prema vremenu koje izgleda poraženo."
      imageSrc="/news/oscar-world.jpg"
      imageAlt="Ceremonija dodele Oskara — 98. dodela nagrada Američke filmske akademije"
      paragraphs={[
        "Na 98. dodeli nagrada Američke filmske akademije u Los Anđelesu najveći trijumf ostvario je film One Battle After Another reditelja Paula Thomasa Andersona, koji je osvojio nagradu za najbolji film i još nekoliko ključnih priznanja večeri. Oskara za najboljeg glumca dobio je Michael B. Jordan za ulogu u filmu Sinners, dok je nagradu za najbolju glumicu osvojila Jessie Buckley za istorijsku dramu Hamnet. U kategorijama sporednih uloga slavili su Sean Penn za film One Battle After Another i Amy Madigan za film Weapons.",
        "Među ostalim nagrađenim ostvarenjima našao se animirani film KPop Demon Hunters, dok je nagrada za najbolji međunarodni film pripala norveškom filmu Sentimental Value. Film Sinners osvojio je i niz autorskih nagrada, uključujući priznanja za originalni scenario i muziku, čime je potvrdio status jednog od najzapaženijih ostvarenja godine.",
        "Ali ove godine pitanje nije samo ko je dobio Oskara. Pitanje je šta zapravo znači filmska ceremonija u trenutku kada svet prolazi kroz duboke istorijske potrese. Dok se u dvorani smenjuju govori, aplauzi i slavljenički trenuci Holivuda, istovremeno se na drugim mestima planete odvijaju prizori koji kao da pripadaju nekoj drugoj, mračnijoj epohi: gradovi u ruševinama, narodi raseljeni preko kontinenata i detinjstva prekinuta pre nego što su zaista počela.",
        "U tom paradoksu leži i prava slika večeri Oskara. Filmska industrija slavi umetnost, priču i talenat, dok stvarnost izvan dvorane često izgleda kao brutalna suprotnost svemu što film pokušava da sačuva. Možda je upravo zato ova ceremonija i dalje važna: ne zato što odgovara na pitanja vremena, već zato što uporno podseća da kultura još nije nestala.",
        "Jer film je jedna od poslednjih umetnosti koja pokušava da govori o čoveku čak i onda kada istorija izgleda kao da ga je zaboravila. U svetu koji sve češće deluje kao scena velikih tragedija, priča na velikom platnu ostaje prostor gde se još uvek veruje da smisao, pravda i nada nisu zauvek izgubljeni.",
      ]}
      backHref="/nasa-planeta"
      backLabel="← Nazad na Našu planetu"
    />
  );
}
