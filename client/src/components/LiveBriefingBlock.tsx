/*
 * LiveBriefingBlock — 🔴 UŽIVO stack sistem za NASA Artemis II misiju
 *
 * Prikazuje više izveštaja sa vremenskim oznakama (lokalno vreme Srbije).
 * Najnoviji izveštaj je uvek na vrhu. Koristi se na Home i NasaPlanetaIndex.
 */

interface LiveReportImage {
  src: string;
  caption: string;
  credit: string;
}

interface LiveReport {
  id: string;
  time: string;
  text: string[];
  images?: LiveReportImage[];
}

interface LiveBriefingBlockProps {
  isDark: boolean;
}

// Izveštaji — najnoviji na vrhu. Dodaj nove na početak niza.
const LIVE_REPORTS: LiveReport[] = [
  {
    id: "report-2218",
    time: "22:18",
    text: [
      "Letelica Orion nalazi se u dubokom svemiru.",
      "Posada je već prešla više od 100.000 milja od Zemlje.",
      "Nalazi se na putu ka Mesecu nakon ključnog manevra.",
      "Let protiče stabilno, bez većih problema.",
    ],
    images: [
      {
        src: "/news/artemis-view2.jpg",
        caption: "Pogled na Zemlju iz kapsule Orion tokom misije Artemis II",
        credit: "Foto: NASA / Artemis II",
      },
      {
        src: "/news/artemis-view1.jpg",
        caption: "Zemlja viđena iz dubokog svemira tokom misije Artemis II",
        credit: "Foto: NASA / Orion spacecraft",
      },
    ],
  },
  {
    id: "report-0400",
    time: "04:00",
    text: [
      "Letelica Orion napustila je Zemljinu orbitu.",
      "Nalazi se na putu ka Mesecu.",
      "Izveden je ključni manevar za ulazak u duboki svemir.",
      "Let protiče stabilno, bez većih problema.",
    ],
  },
  {
    id: "report-2145",
    time: "raniji update",
    text: [
      "Misija Artemis II je u toku nakon uspešnog lansiranja.",
      "Let protiče stabilno, bez većih problema.",
      "Posada testira ključne sisteme za buduće misije.",
      "Zabeleženi manji tehnički problemi brzo su rešeni.",
      "Let se odvija prema planiranoj putanji ka Mesecu.",
    ],
  },
];

export default function LiveBriefingBlock({ isDark }: LiveBriefingBlockProps) {
  return (
    <div
      style={{
        border: "2px solid #8B0000",
        borderRadius: "4px",
        padding: "20px 20px 16px",
        backgroundColor: isDark ? "#14100f" : "#fff9f9",
        marginBottom: "32px",
      }}
    >
      {/* Naslov bloka sa LIVE indikatorom */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "16px",
        }}
      >
        {/* Pulsing live dot */}
        <span
          className="live-pulse-dot"
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: "10px",
            height: "10px",
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
            fontSize: "15px",
            fontWeight: 700,
            color: isDark ? "#e0ddd5" : "#111",
            lineHeight: 1.3,
          }}
        >
          Pratite prenos NASA misije Artemis II
        </span>
      </div>

      {/* Linija ispod naslova */}
      <div
        style={{
          height: "1px",
          backgroundColor: isDark ? "#2a1a1a" : "#f0d0d0",
          marginBottom: "16px",
        }}
      />

      {/* Stack izveštaja */}
      <div>
        {LIVE_REPORTS.map((report, index) => (
          <div
            key={report.id}
            style={{
              marginTop: index > 0 ? "20px" : "0",
              paddingTop: index > 0 ? "20px" : "0",
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
                fontSize: "12px",
                color: isDark ? "#7a7872" : "#999",
                marginBottom: "8px",
                letterSpacing: "0.04em",
              }}
            >
              [{report.time}]
            </div>

            {/* Tekst izveštaja */}
            <div
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "16px",
                lineHeight: 1.7,
                color: isDark ? "#cfcac2" : "#222",
              }}
            >
              {report.text.map((line, i) => (
                <p key={i} style={{ margin: i > 0 ? "6px 0 0" : "0" }}>
                  {line}
                </p>
              ))}
            </div>

            {/* Slike ispod teksta (opciono) */}
            {report.images && report.images.length > 0 && (
              <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
                {report.images.map((img) => (
                  <figure key={img.src} style={{ margin: 0, padding: 0 }}>
                    <img
                      src={img.src}
                      alt={img.caption}
                      style={{
                        width: "100%",
                        display: "block",
                        borderRadius: "4px",
                      }}
                    />
                    <figcaption
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: "13px",
                        lineHeight: 1.5,
                        color: isDark ? "#7a7872" : "#777",
                        marginTop: "6px",
                      }}
                    >
                      {img.caption}{" "}
                      <span style={{ fontStyle: "italic" }}>{img.credit}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* YouTube embed na dnu */}
      <div
        style={{
          marginTop: "20px",
          paddingTop: "14px",
          borderTop: `1px solid ${isDark ? "#2a1a1a" : "#f0d0d0"}`,
        }}
      >
        <div className="relative w-full overflow-hidden rounded-lg aspect-video">
          <iframe
            src="https://www.youtube.com/embed/m3kR2KK8TEs"
            title="NASA Artemis II, lansiranje uživo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}
