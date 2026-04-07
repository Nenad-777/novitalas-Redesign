/*
 * ObavestajniBrifingBlock — OBAVEŠTAJNI BRIFING | 2–4. april 2026.
 *
 * Reusable "blue style" highlighted block for intelligence briefings.
 * Reuses the existing dark-navy color scheme from the hero and CTA sections.
 * Used on: Home (top of main content), ObavestajniIndex (first element).
 */

import { Link } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";

interface ObavestajniBrifingBlockProps {
  compact?: boolean;
}

export default function ObavestajniBrifingBlock({ compact = false }: ObavestajniBrifingBlockProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "#0d1a2a" : "#0f1e2e";
  const borderColor = "#1a3a5a";
  const dividerColor = isDark ? "#1a3a5a" : "#1e4060";
  const textMain = "#f0ece4";
  const textMuted = "#9ab8d0";
  const accentColor = "#7ab0d0";
  const assessmentBg = isDark ? "#091525" : "#0c1c2e";

  if (compact) {
    return (
      <div
        style={{
          border: `2px solid ${borderColor}`,
          borderRadius: "4px",
          backgroundColor: bg,
          marginBottom: "32px",
          overflow: "hidden",
          padding: "20px 20px 22px",
        }}
      >
        <span
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: accentColor,
          }}
        >
          Obaveštajni izvori
        </span>

        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(18px, 3vw, 26px)",
            fontWeight: 700,
            color: textMain,
            lineHeight: 1.25,
            marginTop: "6px",
            marginBottom: "12px",
          }}
        >
          OBAVEŠTAJNI BRIFING | 2–4. april 2026.
        </h2>

        <p
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: "16px",
            lineHeight: 1.75,
            color: textMuted,
            margin: "0 0 18px",
          }}
        >
          U poslednja tri dana potvrđeno je da je prolaz kroz Ormuski moreuz
          ozbiljno ograničen, uz nagli pad pomorskog saobraćaja. Operativna zona
          sukoba širi se izvan inicijalnih granica, uključujući pomorske rute i
          teritorije susednih država.
        </p>

        <Link
          href="/obavestajni-izvori"
          style={{
            display: "inline-block",
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textDecoration: "none",
            color: accentColor,
            borderBottom: `1px solid ${accentColor}`,
            paddingBottom: "1px",
          }}
        >
          Pročitaj više →
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        border: `2px solid ${borderColor}`,
        borderRadius: "4px",
        backgroundColor: bg,
        marginBottom: "32px",
        overflow: "hidden",
      }}
    >
      {/* Block header */}
      <div style={{ padding: "20px 20px 16px" }}>
        <span
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: accentColor,
          }}
        >
          Obaveštajni izvori
        </span>

        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(18px, 3vw, 26px)",
            fontWeight: 700,
            color: textMain,
            lineHeight: 1.25,
            marginTop: "6px",
            marginBottom: "16px",
          }}
        >
          OBAVEŠTAJNI BRIFING | 2–4. april 2026.
        </h2>

        <div
          style={{ height: "1px", backgroundColor: dividerColor }}
        />
      </div>

      {/* Hero image — full-width, reduced height (~40% ratio instead of 56.25%) */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "39%", /* ~30% reduction from 56.25% */
        }}
      >
        <img
          src="/news/prvi-brifing.jpg"
          alt="Obaveštajni brifing — Ormuski moreuz, april 2026"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          decoding="async"
        />
      </div>

      {/* Content sections */}
      <div style={{ padding: "14px 16px 16px" }}>

        {/* SUBSECTION 1 */}
        <section>
          <h3
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(15px, 2vw, 19px)",
              fontWeight: 700,
              color: textMain,
              lineHeight: 1.3,
              marginBottom: "8px",
            }}
          >
            Ormuz: faktička blokada i pad saobraćaja
          </h3>

          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "15px",
              lineHeight: 1.65,
              color: textMuted,
              margin: "0",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            } as React.CSSProperties}
          >
            U poslednja tri dana potvrđeno je da je prolaz kroz Ormuski moreuz
            ozbiljno ograničen, uz nagli pad pomorskog saobraćaja. Oko 20% globalnog transporta nafte prolazi kroz ovaj koridor, što
            svaku destabilizaciju direktno prenosi na svetsko tržište energenata.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: dividerColor,
            margin: "14px 0",
          }}
        />

        {/* SUBSECTION 2 */}
        <section>
          <h3
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(15px, 2vw, 19px)",
              fontWeight: 700,
              color: textMain,
              lineHeight: 1.3,
              marginBottom: "8px",
            }}
          >
            Regionalna eskalacija: udari i širenje fronta
          </h3>

          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "15px",
              lineHeight: 1.65,
              color: textMuted,
              margin: "0",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            } as React.CSSProperties}
          >
            U istom periodu zabeleženi su napadi na pomorsku i energetsku
            infrastrukturu u regionu Persijskog zaliva. Operativna zona sukoba širi se izvan inicijalnih granica,
            uključujući pomorske rute i teritorije susednih država, što ukazuje
            na prelazak u regionalno umrežen konflikt.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: dividerColor,
            margin: "14px 0",
          }}
        />

        {/* SUBSECTION 3 */}
        <section>
          <h3
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(15px, 2vw, 19px)",
              fontWeight: 700,
              color: textMain,
              lineHeight: 1.3,
              marginBottom: "8px",
            }}
          >
            Energetski i ekonomski udar: globalni efekti
          </h3>

          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "15px",
              lineHeight: 1.65,
              color: textMuted,
              margin: "0",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            } as React.CSSProperties}
          >
            Poremećaji u Ormuzu već imaju vidljiv uticaj na cene energenata i
            logistiku transporta. Energetski sektor postaje centralni faktor sukoba, sa direktnim
            posledicama po ekonomsku stabilnost Evrope i globalnih tržišta.
          </p>
        </section>

        <div
          style={{
            height: "1px",
            backgroundColor: dividerColor,
            margin: "14px 0",
          }}
        />

        {/* FINAL: Obaveštajna procena */}
        <section
          style={{
            backgroundColor: assessmentBg,
            borderRadius: "4px",
            padding: "12px 14px",
          }}
        >
          <span
            style={{
              display: "block",
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: accentColor,
              marginBottom: "8px",
            }}
          >
            Obaveštajna procena
          </span>

          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "15px",
              lineHeight: 1.65,
              color: textMuted,
              margin: "0",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
            } as React.CSSProperties}
          >
            U poslednja tri dana dolazi do pomeranja fokusa sa direktnih vojnih
            operacija ka kontroli energetskih tokova i ekonomskom pritisku.
            Kontrola Ormuza ostaje ključni strateški instrument koji utiče na
            globalnu stabilnost.
          </p>
        </section>

        {/* Pročitaj više link */}
        <div style={{ marginTop: "16px" }}>
          <Link
            href="/obavestajni-izvori/nemacka-curenje-informacija"
            style={{
              display: "inline-block",
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textDecoration: "none",
              color: accentColor,
              borderBottom: `1px solid ${accentColor}`,
              paddingBottom: "1px",
            }}
          >
            Pročitaj više →
          </Link>
        </div>
      </div>
    </div>
  );
}

