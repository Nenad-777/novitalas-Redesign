/*
 * LiveBriefingBlock — 🔴 UŽIVO stack sistem za NASA Artemis II misiju
 *
 * Prikazuje kompaktne izveštaje sa vremenskim oznakama (lokalno vreme Srbije).
 * Najnoviji izveštaj je uvek na vrhu. Prikazuju se max 3 unosa.
 * Koristi se na Home i NasaPlanetaIndex.
 */

interface LiveReport {
  id: string;
  time: string;
  text: string[];
}

interface LiveBriefingBlockProps {
  isDark: boolean;
}

// Izveštaji — najnoviji na vrhu. Prikazuju se samo prva 3.
const LIVE_REPORTS: LiveReport[] = [
  {
    id: "report-2155-splashdown",
    time: "21:55",
    text: [
      "Artemis II uspešno sleteo u Pacifik",
      "• misija završena bez incidenata",
      "• Orion bezbedno vraćen",
      "• istorijski let završen",
    ],
  },
  {
    id: "report-2000-rekord",
    time: "20:00",
    text: ["Rekordna udaljenost od Zemlje"],
  },
  {
    id: "report-1930-polovina",
    time: "19:30",
    text: ["Orion prošao polovinu puta ka Mesecu"],
  },
];

export default function LiveBriefingBlock({ isDark }: LiveBriefingBlockProps) {
  // Show only the 3 most recent reports
  const visibleReports = LIVE_REPORTS.slice(0, 3);

  return (
    <div
      style={{
        border: "2px solid #8B0000",
        borderRadius: "4px",
        padding: "12px 16px 14px",
        backgroundColor: isDark ? "#14100f" : "#fff9f9",
        marginBottom: "32px",
      }}
    >
      {/* Naslov bloka sa LIVE indikatorom */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "10px",
        }}
      >
        {/* Pulsing live dot */}
        <span
          className="live-pulse-dot"
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#cc0000",
            flexShrink: 0,
          }}
        />

        <span
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#cc0000",
          }}
        >
          UŽIVO
        </span>

        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "14px",
            fontWeight: 700,
            color: isDark ? "#e0ddd5" : "#111",
            lineHeight: 1.3,
          }}
        >
          Artemis II
        </span>
      </div>

      {/* Linija ispod naslova */}
      <div
        style={{
          height: "1px",
          backgroundColor: isDark ? "#2a1a1a" : "#f0d0d0",
          marginBottom: "10px",
        }}
      />

      {/* Stack izveštaja — max 3 */}
      <div>
        {visibleReports.map((report, index) => (
          <div
            key={report.id}
            style={{
              marginTop: index > 0 ? "10px" : "0",
              paddingTop: index > 0 ? "10px" : "0",
              borderTop:
                index > 0
                  ? `1px solid ${isDark ? "#2a1a1a" : "#f0d0d0"}`
                  : "none",
            }}
          >
            {/* Vreme objave */}
            <div
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "11px",
                color: isDark ? "#7a7872" : "#999",
                marginBottom: "4px",
                letterSpacing: "0.04em",
              }}
            >
              [{report.time}]
            </div>

            {/* Tekst izveštaja */}
            <div
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "14px",
                lineHeight: 1.55,
                color: isDark ? "#cfcac2" : "#333",
              }}
            >
              {report.text.map((line, i) => (
                <p key={i} style={{ margin: i > 0 ? "3px 0 0" : "0" }}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Link ka punom izveštaju */}
      <div
        style={{
          marginTop: "10px",
          paddingTop: "10px",
          borderTop: `1px solid ${isDark ? "#2a1a1a" : "#f0d0d0"}`,
        }}
      >
        <a
          href="/nasa-planeta/artemis-ii-splashdown"
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.06em",
            color: "#cc0000",
            textDecoration: "none",
            borderBottom: "1px solid #cc0000",
            paddingBottom: "1px",
          }}
        >
          Čitaj ceo izveštaj →
        </a>
      </div>
    </div>
  );
}


export default function LiveBriefingBlock({ isDark }: LiveBriefingBlockProps) {
  // Show only the 3 most recent reports
  const visibleReports = LIVE_REPORTS.slice(0, 3);

  return (
    <div
      style={{
        border: "2px solid #8B0000",
        borderRadius: "4px",
        padding: "12px 16px 14px",
        backgroundColor: isDark ? "#14100f" : "#fff9f9",
        marginBottom: "32px",
      }}
    >
      {/* Naslov bloka sa LIVE indikatorom */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "10px",
        }}
      >
        {/* Pulsing live dot */}
        <span
          className="live-pulse-dot"
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#cc0000",
            flexShrink: 0,
          }}
        />

        <span
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#cc0000",
          }}
        >
          UŽIVO
        </span>

        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "14px",
            fontWeight: 700,
            color: isDark ? "#e0ddd5" : "#111",
            lineHeight: 1.3,
          }}
        >
          Artemis II
        </span>
      </div>

      {/* Linija ispod naslova */}
      <div
        style={{
          height: "1px",
          backgroundColor: isDark ? "#2a1a1a" : "#f0d0d0",
          marginBottom: "10px",
        }}
      />

      {/* Stack izveštaja — max 3 */}
      <div>
        {visibleReports.map((report, index) => (
          <div
            key={report.id}
            style={{
              marginTop: index > 0 ? "10px" : "0",
              paddingTop: index > 0 ? "10px" : "0",
              borderTop:
                index > 0
                  ? `1px solid ${isDark ? "#2a1a1a" : "#f0d0d0"}`
                  : "none",
            }}
          >
            {/* Vreme objave */}
            <div
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "11px",
                color: isDark ? "#7a7872" : "#999",
                marginBottom: "4px",
                letterSpacing: "0.04em",
              }}
            >
              [{report.time}]
            </div>

            {/* Tekst izveštaja */}
            <div
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "14px",
                lineHeight: 1.55,
                color: isDark ? "#cfcac2" : "#333",
              }}
            >
              {report.text.map((line, i) => (
                <p key={i} style={{ margin: i > 0 ? "3px 0 0" : "0" }}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Link ka punom izveštaju */}
      <div
        style={{
          marginTop: "10px",
          paddingTop: "10px",
          borderTop: `1px solid ${isDark ? "#2a1a1a" : "#f0d0d0"}`,
        }}
      >
        <a
          href="/nasa-planeta/artemis-ii-fotografije-dubokog-svemira"
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.06em",
            color: "#cc0000",
            textDecoration: "none",
            borderBottom: "1px solid #cc0000",
            paddingBottom: "1px",
          }}
        >
          Čitaj ceo izveštaj →
        </a>
      </div>
    </div>
  );
}
