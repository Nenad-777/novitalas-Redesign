import ArticleTemplate from "@/components/ArticleTemplate";

const PARAGRAPHS = [
  "🇷🇸 IZBORI U SRBIJI",
  "Preliminarni rezultati lokalnih izbora održanih 29. marta u deset opština u Srbiji pokazuju da je vladajuća koalicija zadržala vlast u svim sredinama, ali uz vidljivo smanjene razlike i tesne odnose snaga u više opština, pri čemu su u pojedinim slučajevima odlučivali jedan ili dva odbornička mandata.",
  "⸻",
  "📍 Bor",
  "Izlaznost: 25.982 od 38.492 birača (67,49%)",
  "Lista „Aleksandar Vučić – Bor, naša porodica!" osvojila je 12.495 glasova (48,09%) i 18 od 35 mandata.\nLista „Bor, naša odgovornost!" osvojila je 10.331 glas (39,76%) i 15 mandata.\nVlaška narodna stranka osvojila je 1.025 glasova (3,94%) i 2 mandata.",
  "Ispod cenzusa ostale su liste: „Irena Živković – Radnička – Bor Boranima" (2,27%), „Ljudi u centru – Srećko Zdravković" (1,6%), parlamentarna koalicija NADA (1,3%) i „Borci za Bor" (1,04%).",
  "⸻",
  "📍 Aranđelovac",
  "Izlaznost: 25.999 od 36.841 birača (70,57%)",
  "Lista „Aleksandar Vučić – Aranđelovac, naša porodica!" osvojila je 13.030 glasova (50,12%) i 21 od 41 mandat.\nLista „Studenti za Aranđelovac – Mladost pobeđuje" osvojila je 11.979 glasova (46,08%) i 20 mandata.",
  "Ispod cenzusa ostale su liste: „Ruska stranka – Za bolji Aranđelovac" (1%), „Srpski liberali za zeleni Aranđelovac" (0,5%) i „Koalicija 381 – Ujedinjeni podržavamo mlade" (0,3%).",
  "👉 Razlika: 1 mandat",
  "⸻",
  "📍 Bajina Bašta",
  "Izlaznost: 16.051 od 21.464 birača (74,78%)",
  "Lista „Aleksandar Vučić – Bajina Bašta, naša porodica!" osvojila je 8.415 glasova (52,42%) i 26 od 45 mandata.\nLista „Ujedinjeni za Bajinu Baštu" osvojila je 6.461 glas (40,25%) i 19 mandata.",
  "Ispod cenzusa ostale su liste: SDPS (2,27%), Zdrava Srbija (1,79%), „Nestranački pokret za Bajinu Baštu" (0,6%) i „Izađi – Izbori se za Bajinu Baštu – Srpski liberali" (0,4%).",
  "⸻",
  "📍 Kladovo",
  "Izlaznost: 11.387 od 21.805 birača (54%)",
  "Lista „Aleksandar Vučić – Kladovo, naša porodica!" osvojila je 8.043 glasova (70,63%) i 21 od 28 mandata.\nLista „Kladovo Ima nas – Vreme je za promene" osvojila je 2.979 glasova (26,16%) i 7 mandata.",
  "Ispod cenzusa ostala je lista „Srpski liberali za zeleno Kladovo" (1,2%).",
  "⸻",
  "📍 Knjaževac",
  "Izlaznost: 15.883 od 22.262 birača (71,34%)",
  "Lista „Aleksandar Vučić – Knjaževac, naša porodica!" osvojila je 8.825 glasova (55,73%) i 24 od 40 mandata.\nLista „Knjaževac uz studente – Čista lista – Dr Ivan Milošević" osvojila je 5.102 glasa (32,22%) i 13 mandata.\nLista „Promene – Dr Igor Milosavljević – Marko Ignjatović" osvojila je 1.367 glasova (8,63%) i 3 mandata.",
  "Ispod cenzusa ostala je lista „Srpski liberali za zeleni Knjaževac" (1%).",
  "⸻",
  "📍 Kula",
  "Izlaznost: 23.310 od 33.286 birača (70%)",
  "Lista „Aleksandar Vučić – Kula, naša porodica!" osvojila je 11.438 glasova (49,06%) i 19 od 37 mandata.\nLista „Glas mladih opštine Kula" osvojila je 11.076 glasova (47,5%) i 18 mandata.",
  "Ispod cenzusa ostale su liste: „Mladi za Kulu" (0,5%), „Srpski liberali za zelenu Kulu" (0,3%) i Rusinska lista (0,2%).",
  "👉 Razlika: 1 mandat",
  "⸻",
  "📍 Lučani",
  "Izlaznost: 11.562 od 14.631 birača (79,02%)",
  "Lista „Aleksandar Vučić – Lučani, naša porodica!" osvojila je 6.972 glasova (60,33%) i 23 od 35 mandata.\nLista „Zvuk pravde – Zajedno za studente – Mirjana Kern" osvojila je 3.803 glasova (32,9%) i 12 mandata.",
  "Ispod cenzusa ostale su liste: SDPS (2,1%), NADA (1,4%), BUNT (0,7%) i „Zeleni front za studente – Dragačevo" (0,5%).",
  "⸻",
  "📍 Majdanpek",
  "Izlaznost: 9.609 od 15.441 birača (62,22%)",
  "Lista „Aleksandar Vučić – Majdanpek, naša porodica!" osvojila je 6.079 glasova (63,26%) i 21 od 31 mandat.\nLista „Nu dau" osvojila je 1.816 glasova (18,89%) i 6 mandata.\nLista „Mi odlučujemo! – Dr Damjan Stevkić" osvojila je 1.203 glasova (12,5%) i 4 mandata.",
  "Ispod cenzusa ostala je lista „Srpski liberali za zeleni Majdanpek" (1,6%).",
  "⸻",
  "📍 Smederevska Palanka",
  "Izlaznost: 25.605 od 38.933 birača (65,76%)",
  "Lista „Aleksandar Vučić – Smederevska Palanka, naša porodica!" osvojila je 14.161 glasova (56,57%) i 30 od 49 mandata.\nLista „Mladi za Palanku – Sami protiv svih" osvojila je 7.151 glas (28,5%) i 15 mandata.\nLista „Ujedinjeni za Palanku" osvojila je 2.214 glasova (8,8%) i 4 mandata.",
  "Ispod cenzusa ostale su liste: Studenti Palanke (1,7%) i „Izlečimo sistem – Da Palanka ozdravi" (0,8%).",
  "⸻",
  "📍 Sevojno",
  "Izlaznost: 4.250 od 5.545 birača (76,64%)",
  "Lista „Aleksandar Vučić – Sevojno, naša porodica!" osvojila je 2.108 glasova (49,6%) i 9 od 19 mandata.\nLista „Ujedinjeni za Sevojno" osvojila je 1.906 glasova (44,84%) i 9 mandata.\nZdrava Srbija osvojila je 3,08% i 1 mandat.",
  "Ispod cenzusa ostala je lista „Srpski liberali za zeleno Sevojno" (0,7%).",
  "👉 Odnos: 9–9 + 1 mandat odlučuje",
];

export default function IzboriRezultati() {
  return (
    <ArticleTemplate
      path="/srbija/izbori-rezultati"
      sectionLabel="Srbija"
      title="Tesne razlike i smanjenje prednosti vlasti: preliminarni rezultati u deset opština"
      dateLabel="30. MART 2026."
      deck="Preliminarni rezultati lokalnih izbora od 29. marta pokazuju da je vladajuća koalicija zadržala vlast u svim opštinama, ali uz vidljivo smanjene razlike i tesne odnose snaga."
      imageSrc="/news/izbori-rezultati.jpg"
      imageAlt="Preliminarni rezultati lokalnih izbora u Srbiji 29. marta 2026."
      paragraphs={PARAGRAPHS}
      backHref="/srbija"
      backLabel="← Nazad na Srbiju"
    />
  );
}
