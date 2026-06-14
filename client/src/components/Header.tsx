import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Sun, Moon, Search } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const navItems = [
  { label: "Geopolitika", href: "/geopolitika" },
  { label: "Obaveštajni izvori", href: "/obavestajni-izvori" },
  { label: "Srbija", href: "/srbija" },
  { label: "Naša planeta", href: "/nasa-planeta" },
];

function MastheadLogo({ isDark }: { isDark: boolean }) {
  return (
    <Link href="/" className="flex items-center justify-center gap-0 no-underline whitespace-nowrap max-w-full overflow-hidden">
      <span
        className="font-extrabold tracking-[0.13em] min-[390px]:tracking-[0.16em] uppercase text-[21px] min-[390px]:text-[23px] md:text-[22px]"
        style={{ fontFamily: "'Lora', serif", color: isDark ? "#f6f3e8" : "#1a2a3a" }}
      >
        NOVI{" "}
      </span>
      <span
        className="font-extrabold tracking-[0.13em] min-[390px]:tracking-[0.16em] uppercase text-[21px] min-[390px]:text-[23px] md:text-[22px]"
        style={{ fontFamily: "'Lora', serif", color: isDark ? "#d9bf7a" : "#8B0000" }}
      >
        TALAS
      </span>
    </Link>
  );
}

function MobileWaveDivider({ isDark }: { isDark: boolean }) {
  const lineColor = isDark ? "rgba(217,191,122,0.45)" : "rgba(139,0,0,0.42)";
  const waveColor = isDark ? "#d9bf7a" : "#8B0000";

  return (
    <div className="lg:hidden px-8 pb-2">
      <div className="h-[14px] flex items-center justify-center max-w-[290px] mx-auto">
        <div className="h-px flex-1" style={{ backgroundColor: lineColor }} />
        <svg viewBox="0 0 120 24" className="w-[62px] h-[16px] shrink-0 mx-[2px]" aria-hidden="true">
          <path
            d="M2 12 H34 C41 12 41 7 45 7 C50 7 49 18 53 18 C58 18 56 4 60 4 C64 4 62 20 67 20 C72 20 72 12 80 12 H118"
            fill="none"
            stroke={waveColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="h-px flex-1" style={{ backgroundColor: lineColor }} />
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header
      className="sticky top-0 z-50 transition-colors duration-300 overflow-hidden"
      style={{
        backgroundColor: isDark ? "#0d0d0f" : "#ffffff",
        borderBottom: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 min-[390px]:px-5">
        <div className="relative flex items-center justify-center lg:justify-between h-[66px] lg:h-[60px]">
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors duration-200"
                style={{ fontFamily: "'Source Sans 3', sans-serif", color: isDark ? "#c9c6cf" : "#1a2a3a" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Meni"
            className="absolute left-0 lg:hidden p-1"
            style={{ color: isDark ? "#c9c6cf" : "#1a2a3a" }}
          >
            {mobileOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

          <div className="flex flex-col items-center justify-center w-[calc(100%-118px)] max-w-[245px] min-[390px]:max-w-[270px] mx-auto">
            <MastheadLogo isDark={isDark} />
            <p
              className="lg:hidden mt-1 text-[15px] italic leading-none whitespace-nowrap"
              style={{ fontFamily: "'Lora', Georgia, serif", color: isDark ? "#bcb7a6" : "#333333" }}
            >
              Vaš prozor u svet
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.slice(2).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors duration-200"
                style={{ fontFamily: "'Source Sans 3', sans-serif", color: isDark ? "#c9c6cf" : "#1a2a3a" }}
              >
                {item.label}
              </Link>
            ))}

            <span
              className="text-[12px] font-medium italic ml-2"
              style={{ fontFamily: "'Lora', serif", color: isDark ? "#bcb7a6" : "#5a6a7a" }}
            >
              Veritas ante omnia
            </span>

            <button
              onClick={toggleTheme}
              className="ml-3 p-1.5 rounded-full transition-colors duration-200"
              style={{
                backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                color: isDark ? "#d9bf7a" : "#1a2a3a",
              }}
              aria-label={isDark ? "Svetli režim" : "Tamni režim"}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          <div className="absolute right-0 lg:hidden flex items-center gap-2 min-[390px]:gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors duration-200"
              style={{
                backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(26,42,58,0.07)",
                color: isDark ? "#d9bf7a" : "#1a2a3a",
              }}
              aria-label={isDark ? "Svetli režim" : "Tamni režim"}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="p-1 hidden min-[360px]:block"
              style={{ color: isDark ? "#c9c6cf" : "#1a2a3a" }}
              aria-label="Pretraga"
            >
              <Search size={23} />
            </button>
          </div>
        </div>
      </div>

      <MobileWaveDivider isDark={isDark} />

      {mobileOpen && (
        <div
          className="lg:hidden px-5 pb-5"
          style={{
            backgroundColor: isDark ? "#0d0d0f" : "#ffffff",
            borderTop: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <nav className="flex flex-col gap-3 pt-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13px] font-semibold tracking-[0.1em] uppercase py-2 transition-colors duration-200"
                style={{ fontFamily: "'Source Sans 3', sans-serif", color: isDark ? "#c9c6cf" : "#1a2a3a" }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <p
            className="text-[12px] italic mt-4"
            style={{ fontFamily: "'Lora', serif", color: isDark ? "#bcb7a6" : "#5a6a7a" }}
          >
            Veritas ante omnia
          </p>
        </div>
      )}
    </header>
  );
}
