import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useTheme } from "@/contexts/ThemeContext";

const VIBER_FALLBACK_DELAY_MS = 1500;

export default function ShareButton() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [shareOpen, setShareOpen] = useState(false);
  const sharePanelRef = useRef<HTMLDivElement>(null);

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

  const getArticleUrl = () =>
    `https://novitalas.org${window.location.pathname}`;

  const handleViber = () => {
    const articleUrl = getArticleUrl();
    const encoded = encodeURIComponent(articleUrl);
    const deepLink = `viber://forward?text=${encoded}`;
    const fallbackUrl = `https://www.viber.com/en/share/?text=${encoded}`;

    window.open(deepLink, "_blank");

    // If Viber deep link fails (page stays visible), open web fallback
    let timer: ReturnType<typeof setTimeout>;
    const cancelFallback = () => clearTimeout(timer);
    timer = setTimeout(() => {
      window.removeEventListener("blur", cancelFallback);
      if (!document.hidden) {
        window.open(fallbackUrl, "_blank");
      }
    }, VIBER_FALLBACK_DELAY_MS);

    window.addEventListener("blur", cancelFallback, { once: true });

    setShareOpen(false);
  };

  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(getArticleUrl());
    window.open(`https://wa.me/?text=${encoded}`, "_blank");
    setShareOpen(false);
  };

  const handleCopyLink = async () => {
    const articleUrl = getArticleUrl();
    try {
      await navigator.clipboard.writeText(articleUrl);
      toast("Link je kopiran!");
    } catch (err) {
      console.error("Failed to copy share link:", err);
      toast.error("Greška pri kopiranju.");
    }
    setShareOpen(false);
  };

  return (
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
  );
}
