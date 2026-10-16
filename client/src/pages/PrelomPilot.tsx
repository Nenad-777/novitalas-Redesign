import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowDownRight, ArrowRight, Bookmark, Check, CheckCircle2, ExternalLink, FileCheck2, FileText, Info, RotateCcw, Share2, Sparkles, X } from "lucide-react";
import "./PrelomPilot.css";

type Stage = "house" | "senate" | "law";
type Version = "before" | "after";

const SOURCES = {
  house: "https://www.govinfo.gov/app/details/BILLS-119hr10183ih",
  senate: "https://www.govinfo.gov/app/details/BILLS-119s5611is",
  reporting: "/geopolitika/srbija-act-stigao-i-u-senat-wilson-podrzao-inicijativu-i-ponovo-otvorio-pitanje-izbora-u-srbiji",
};
const KEY = "novitalas-prelom-pilot-20261016";
const STEPS: Array<{ id: Stage; title: string; number: string; before: string; after: string; detail: string }> = [
  { id: "house", number: "01", title: "Predstavnički dom", before: "H.R. 10183 · predlog podnet", after: "H.R. 10183 · predlog podnet", detail: "27. avgust 2026." },
  { id: "senate", number: "02", title: "Senat", before: "Predlog S. 5611 još nije uveden", after: "S. 5611 · predlog podnet", detail: "30. septembar 2026." },
  { id: "law", number: "03", title: "Status zakona", before: "Nije usvojen zakon", after: "Nije usvojen zakon", detail: "Stanje prema dostupnoj evidenciji" },
];

export default function PrelomPilot() {
  const [version, setVersion] = useState<Version>("before");
  const [selected, setSelected] = useState<Stage | null>(null);
  const [saved, setSaved] = useState<boolean>(() => {
    try { return JSON.parse(localStorage.getItem(KEY) ?? "{}").saved === true; }
    catch { return false; }
  });
  const [shareMessage, setShareMessage] = useState("");
  const detailRef = useRef<HTMLDivElement>(null);
  const controlRef = useRef<HTMLButtonElement>(null);
  const detailsId = useId();
  const after = version === "after";

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "PRELOM / SRBIJA Act — Novi talas LAB";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex,nofollow,noarchive";
    document.head.appendChild(meta);
    return () => { document.title = previousTitle; meta.remove(); };
  }, []);

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify({ saved })); } catch { /* private mode */ }
  }, [saved]);

  const evidence = useMemo(() => {
    if (selected === "house") return {
      label: "DOKUMENT / PREDSTAVNIČKI DOM",
      title: "H.R. 10183 — predlog od 27. avgusta",
      content: "Zvanični zapis potvrđuje da je predlog SRBIJA Act uveden u Predstavnički dom 27. avgusta 2026. i upućen odborima. To je početak zakonodavne procedure, ne usvojeni zakon.",
      limit: "Ovaj zapis ne dokazuje usvajanje u oba doma niti stupanje na snagu.",
      href: SOURCES.house,
      source: "U.S. Government Publishing Office · H.R. 10183 (IH)",
    };
    if (selected === "senate") return {
      label: "NOVI DOKAZ / SENAT",
      title: "S. 5611 — zaseban predlog od 30. septembra",
      content: "Zvanični zapis potvrđuje da su senatori Čak Grasli i Ričard Blumental 30. septembra 2026. uveli predlog S. 5611. Predlog je pročitan dva puta i upućen Odboru za spoljne odnose.",
      limit: "To nije glasanje o usvajanju zakona. S. 5611 i H.R. 10183 su dva predloga u različitim domovima, a ne dokaz da je isti predlog prošao oba doma.",
      href: SOURCES.senate,
      source: "U.S. Government Publishing Office · S. 5611 (IS)",
    };
    if (selected === "law") return {
      label: "OGRANIČENJE ZAKLJUČKA",
      title: "Predlog zakona nije zakon",
      content: "U zvaničnim dokumentima citiranim ovde oba predloga imaju status početnih verzija u zakonodavnoj proceduri. Ni samo uvođenje drugog predloga, ni dvostranačka podrška ne čine tekst važećim zakonom.",
      limit: "Ovo je presek proveren 16. oktobra 2026, ne automatska informacija o današnjem zakonodavnom statusu. Za najnovije stanje proveriti kongresnu evidenciju.",
      href: SOURCES.senate,
      source: "GovInfo · zvanična evidencija predloga, stanje 16.10.2026.",
    };
    return null;
  }, [selected]);

  const switchVersion = () => {
    setVersion(v => v === "before" ? "after" : "before");
    setSelected(null);
  };

  const openEvidence = (id: Stage) => {
    setSelected(prev => prev === id ? null : id);
    requestAnimationFrame(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }));
  };

  const share = async () => {
    const url = window.location.href.split("?")[0] + (after ? "?presek=septembar" : "?presek=avgust");
    try {
      if (navigator.share) await navigator.share({ title: "Novi talas | PRELOM: SRBIJA Act", url });
      else if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(url); setShareMessage("Link je kopiran"); }
      else { setShareMessage("Kopiraj adresu iz pregledača"); }
    } catch (error) {
      if ((error as Error)?.name !== "AbortError") setShareMessage("Deljenje nije uspelo");
    }
  };

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("presek") === "septembar") setVersion("after");
  }, []);

  return (
    <div className="prl">
      <div className="prl-topbar">
        <Link href="/" className="prl-wordmark" aria-label="Novi talas — javni sajt"><span>NOVI</span> <strong>TALAS</strong></Link>
        <div className="prl-topbar-center"><span className="prl-dot" /> ISTRAŽIVAČKA LABORATORIJA</div>
        <div className="prl-topbar-links">
          <button aria-label="Podeli eksperiment" type="button" onClick={share}><Share2 size={17} /></button>
          <Link href="/" aria-label="Vrati se na postojeći sajt"><X size={18} /></Link>
        </div>
      </div>

      <main className="prl-main">
        <div className="prl-statusline">
          <span>EKSPERIMENT 001</span>
          <span>JEDNO PITANJE · DVA PRESEKA</span>
        </div>

        <div className="prl-layout">
          <section className="prl-story" aria-labelledby="prelom-title">
            <div className="prl-kicker"><span className="prl-tiny-wave">∿</span> ZAKON / DIPLOMATIJA / SRBIJA</div>
            <h1 id="prelom-title">Da li je <em>SRBIJA Act</em> postao zakon?</h1>
            <p className="prl-deck">Novi dokument može da promeni važnu činjenicu, ali ne mora i konačan odgovor. Istraži šta se zaista promenilo.</p>

            <div className="prl-answer" aria-live="polite">
              <span className="prl-answer-label">KRATAK ODGOVOR</span>
              <div className="prl-answer-line">
                <span className="prl-answer-no">Ne.</span>
                <p>{after
                  ? "Predlozi postoje u oba doma Kongresa, ali dostupna evidencija ne pokazuje da je SRBIJA Act usvojen kao zakon."
                  : "U ovom preseku postojao je predlog u Predstavničkom domu, ali to nije značilo da je zakon usvojen."}</p>
              </div>
            </div>

            <div className="prl-discovery" aria-label="Poređenje promena kroz vreme">
              <div className="prl-discovery-top">
                <span>PRESEK ZNANJA</span>
                <span className={after ? "prl-point prl-point-active" : "prl-point"}>{after ? "B / NOVI DOKAZ" : "A / POLAZNO STANJE"}</span>
              </div>

              <div className="prl-switcher" role="group" aria-label="Izbor vremenskog preseka">
                <button type="button" aria-pressed={!after} onClick={() => {setVersion("before");setSelected(null);}}>
                  <span>A</span><span><b>27. AVGUST</b><small>2026.</small></span>
                </button>
                <div className="prl-wave" aria-hidden="true">
                  <svg viewBox="0 0 102 28" role="presentation"><path d="M2 14 H26 C31 14 32 6 36 6 S42 22 47 22 S52 3 57 3 S63 25 68 25 S72 14 78 14 H100" /></svg>
                </div>
                <button type="button" aria-pressed={after} onClick={() => {setVersion("after");setSelected(null);}}>
                  <span>B</span><span><b>30. SEPTEMBAR</b><small>2026.</small></span>
                </button>
              </div>

              <div className="prl-map">
                <div className="prl-map-rail" aria-hidden="true"><span /><span /><span /></div>
                {STEPS.map((step, i) => (
                  <button
                    key={step.id}
                    type="button"
                    className={"prl-node " + (step.id === "senate" && after ? "prl-node-changed " : "") + (selected === step.id ? "prl-node-selected" : "")}
                    onClick={() => openEvidence(step.id)}
                    aria-expanded={selected === step.id}
                    aria-controls={detailsId}
                  >
                    <span className="prl-node-index">{step.number}</span>
                    <span className="prl-node-content">
                      <strong>{step.title}</strong>
                      <small key={step.id + version}>{after ? step.after : step.before}</small>
                    </span>
                    <span className={"prl-node-status " + (step.id === "house" ? "prl-node-status-house" : step.id === "senate" && after ? "prl-node-status-new" : "")}>
                      {step.id === "house" ? <Check size={18} /> : step.id === "senate" && after ? <Sparkles size={19} /> : step.id === "law" ? "?" : "—"}
                    </span>
                  </button>
                ))}
              </div>

              <div className="prl-impact" aria-live="polite">
                {after ? (
                  <>
                    <div className="prl-impact-lead"><span className="prl-signal" /> <span>ŠTA SE PROMENILO</span></div>
                    <p><strong>Senat je dobio sopstveni predlog.</strong> Dokument S. 5611 pojavio se 30. septembra. To je novi institucionalni korak.</p>
                    <div className="prl-unchanged"><span>ŠTA NIJE PROMENJENO</span><p>Predlozi nisu time postali zakon. Dva dokumenta ne znače dva usvajanja.</p></div>
                  </>
                ) : (
                  <>
                    <div className="prl-impact-lead"><span className="prl-signal" /> <span>PRETHODNA SLIKA</span></div>
                    <p>Predlog H.R. 10183 podnet je Predstavničkom domu 27. avgusta. Postojanje inicijative još nije značilo usvajanje zakona.</p>
                    <div className="prl-unchanged"><span>ŠTA NAS ZANIMA</span><p>Hoće li se slična inicijativa pojaviti i u Senatu, i šta bi to zaista dokazalo?</p></div>
                  </>
                )}
              </div>
            </div>

            <div className="prl-identity"><span>◇</span> PRELOM <i>·</i> Pokaži šta novo saznanje zaista menja.</div>
          </section>

          <aside className="prl-proof" aria-label="Dokazi, tumačenje i istorija">
            <div className="prl-proof-inner">
              <div className="prl-proof-heading"><span>PROVERLJIVO.</span><span>NE PRETPOSTAVLJENO.</span></div>
              <div ref={detailRef} id={detailsId} className="prl-evidence" aria-live="polite">
                {evidence ? (
                  <div key={selected}>
                    <div className="prl-evidence-head">
                      <span>{evidence.label}</span>
                      <button aria-label="Zatvori dokaz" onClick={() => {setSelected(null); controlRef.current?.focus();}} type="button"><X size={18} /></button>
                    </div>
                    <h2>{evidence.title}</h2>
                    <p>{evidence.content}</p>
                    <div className="prl-limits"><Info size={17} /><span>{evidence.limit}</span></div>
                    <a className="prl-external" href={evidence.href} target="_blank" rel="noopener noreferrer">
                      <FileCheck2 size={17}/><span>OTVORI ZVANIČNI IZVOR</span><ExternalLink size={14}/>
                    </a>
                    <p className="prl-source-caption">{evidence.source}</p>
                  </div>
                ) : (
                  <>
                    <span className="prl-proof-symbol" aria-hidden="true">⌁</span>
                    <h2>Ne veruj grafikonu na reč.</h2>
                    <p>Dodirni bilo koji od tri koraka. Videćeš dokument koji ga potvrđuje — i ono što iz dokumenta ne možemo zaključiti.</p>
                    <div className="prl-proof-callout"><FileText size={18} /> Svaka promena vodi do proverljivog izvora.</div>
                  </>
                )}
              </div>
              <div className="prl-proof-links">
                <a href={SOURCES.house} target="_blank" rel="noopener noreferrer">H.R. 10183 <ExternalLink size={12} /></a>
                <a href={SOURCES.senate} target="_blank" rel="noopener noreferrer">S. 5611 <ExternalLink size={12} /></a>
                <Link href={SOURCES.reporting}>NAŠ TEKST <ArrowRight size={12} /></Link>
              </div>
              <div className="prl-editorial-note">
                <strong>Važno:</strong> prikazi od 27. avgusta i 30. septembra predstavljaju <em>naknadnu rekonstrukciju stanja na osnovu zvaničnih dokumenata</em>, a ne tada objavljene zaključke redakcije. Provera: 16. oktobar 2026.
              </div>
              <button className={"prl-follow " + (saved ? "prl-follow-saved" : "")} type="button" aria-pressed={saved} onClick={() => setSaved(v => !v)}>
                {saved ? <CheckCircle2 size={18} /> : <Bookmark size={18} />}
                {saved ? "PITANJE SAČUVANO U OVOM PREGLEDAČU" : "SAČUVAJ PITANJE ZA KASNIJE"}
              </button>
              <p className="prl-privacy">Čuva se samo izbor na ovom uređaju. Nema naloga ni obaveštenja; dosije se u ovoj probnoj verziji ne ažurira automatski.</p>
            </div>
          </aside>
        </div>
      </main>

      <div className="prl-actionbar">
        <div className="prl-actionbar-inner">
          <div className="prl-actionbar-label"><span>{after ? "02" : "01"} / 02</span><strong>{after ? "Sada znamo više." : "Jedan dodir menja sliku."}</strong></div>
          <button ref={controlRef} type="button" className="prl-action" onClick={switchVersion}>
            {after ? <RotateCcw size={18}/> : <ArrowDownRight size={19}/>}
            <span>{after ? "VRATI NA PRETHODNO" : "POKAŽI ŠTA OVO MENJA"}</span>
            {!after && <ArrowRight size={18}/>}
          </button>
        </div>
      </div>
      {shareMessage && <div className="prl-toast" role="status" onClick={() => setShareMessage("")}>{shareMessage}</div>}
    </div>
  );
}
