import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

type ArticleParagraph = string;

type ArticleTemplateProps = {
  sectionLabel: string;
  title: string;
  dateLabel?: string;
  deck?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCredit?: string;
  imageHeightClass?: string;
  paragraphs: ArticleParagraph[];
  backHref: string;
  backLabel: string;
};

export default function ArticleTemplate({
  sectionLabel,
  title,
  dateLabel,
  deck,
  imageSrc,
  imageAlt = "",
  imageCredit,
  imageHeightClass = "h-[260px] md:h-[420px]",
  paragraphs,
  backHref,
  backLabel,
}: ArticleTemplateProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [shareOpen, setShareOpen] = useState(false);
  const sharePanelRef = useRef<HTMLDivElement>(null);

  const [location] = useLocation();
  const shareUrl = `https://novitalas.org${location}`;
  const encodedShareUrl = encodeURIComponent(shareUrl);

  useEffect(() => {
    if (!shareOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (
        sharePanelRef.current &&
        !sharePanelRef.current.contains(e.target as Node)
      ) {
        setShareOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [shareOpen]);

  const handleViber = () => {
    window.open(`viber://forward?text=${encodedShareUrl}`, "_blank");
    setShareOpen(false);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodedShareUrl}`, "_blank");
    setShareOpen(false);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast("Link je kopiran!");
    } catch (err) {
      console.error("Failed to copy share link:", err);
      toast.error("Greška pri kopiranju.");
    }
    setShareOpen(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      <main
        className="py-12 md:py-16 flex-1"
        style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
      >
        <article className="max-w-[860px] mx-auto px-5">
          {/* Rubrika */}
          <span className="kicker">{sectionLabel}</span>

          {/* Naslov */}
          <h1
            className="mt-3 text-[30px] md:text-[44px] font-bold leading-[1.1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDark ? "#e0ddd5" : "#111",
            }}
          >
            {title}
          </h1>

          {/* Datum */}
          {dateLabel ? (
            <p
              className="mt-3 uppercase"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "12px",
                letterSpacing: "0.16em",
                color: isDark ? "#7f7a72" : "#888",
              }}
            >
              {dateLabel}
            </p>
          ) : null}

          {/* Podeli vest */}
          <div className="mt-4 relative inline-block" ref={sharePanelRef}>
            <button
              onClick={() => setShareOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 border px-4 py-[7px] text-[11px] font-semibold tracking-[0.14em] uppercase transition-opacity hover:opacity-80"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#d9bf7a" : "#8B0000",
                borderColor: isDark ? "#d9bf7a" : "#8B0000",
                backgroundColor: "transparent",
              }}
            >
              ↑ Podeli vest
            </button>

            {shareOpen && (
              <div
                className="absolute left-0 top-full mt-1 z-50 flex border"
                style={{
                  backgroundColor: isDark ? "#1a1c22" : "#ffffff",
                  borderColor: isDark ? "#2a2a2e" : "#e0e0e0",
                  boxShadow: isDark
                    ? "0 4px 18px rgba(0,0,0,0.45)"
                    : "0 4px 18px rgba(0,0,0,0.10)",
                }}
              >
                {[
                  { label: "Viber", action: handleViber },
                  { label: "WhatsApp", action: handleWhatsApp },
                  { label: "Kopiraj link", action: handleCopyLink },
                ].map(({ label, action }, i, arr) => (
                  <button
                    key={label}
                    onClick={action}
                    className="px-5 py-3 text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors hover:opacity-80"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: isDark ? "#cfcac0" : "#222",
                      backgroundColor: "transparent",
                      borderRight:
                        i < arr.length - 1
                          ? `1px solid ${isDark ? "#2a2a2e" : "#e0e0e0"}`
                          : "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Lead / deck */}
          {deck ? (
            <p
              className="mt-6 text-[18px] md:text-[20px] leading-[1.75]"
              style={{
                fontFamily: "'Lora', serif",
                color: isDark ? "#cfcac0" : "#222",
              }}
            >
              {deck}
            </p>
          ) : null}

          {/* Slika */}
          {imageSrc ? (
            <div className="mt-8">
              <div
                className="border overflow-hidden"
                style={{
                  borderColor: isDark ? "#2a2a2e" : "#eee",
                  backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                }}
              >
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className={`w-full ${imageHeightClass} object-cover object-center block`}
                />
              </div>
              {imageCredit ? (
                <p
                  className="mt-1 text-[11px]"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isDark ? "#6b6760" : "#999",
                  }}
                >
                  {imageCredit}
                </p>
              ) : null}
            </div>
          ) : null}

          {/* Tekst */}
          <div className="mt-8">
            {paragraphs.map((p, idx) => (
              <div key={idx}>
                <p
                  className={
                    idx === 0
                      ? // ✅ DROP CAP (prvo slovo velikoooo, magazinski)
                        "text-[18px] md:text-[20px] leading-[1.75] first-letter:text-[64px] first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:leading-[0.9]"
                      : "mt-5 text-[17px] md:text-[18px] leading-[1.8]"
                  }
                  style={{
                    fontFamily: "'Lora', serif",
                    color: isDark
                      ? idx === 0
                        ? "#cfcac0"
                        : "#b7b2aa"
                      : idx === 0
                      ? "#222"
                      : "#333",
                  }}
                >
                  {p}
                </p>

                {/* Separator između pasusa */}
                {idx !== paragraphs.length - 1 && (
                  <div
                    style={{
                      width: "40px",
                      height: "2px",
                      backgroundColor: isDark ? "#2a2a2e" : "#eee",
                      margin: "24px 0 24px 12px",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Back */}
          <div className="mt-12">
            <a
              href={backHref}
              className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] uppercase no-underline"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: isDark ? "#d9bf7a" : "#8B0000",
              }}
            >
              {backLabel}
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
