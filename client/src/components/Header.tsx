/*
 * DESIGN: "Diplomatska Klasika" — Foreign Affairs-inspired header
 * Light mode: Light blue top bar (#d6e8f0) — Foreign Affairs style
 * Dark mode: Dark bar (#0d0d0f)
 * Update: Added "Naša planeta" in top menu (right side, next to Srbija)
 */

import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const navItems = [
  { label: "Geopolitika", href: "/geopolitika" },
  { label: "Obaveštajni izvori", href: "/obavestajni-izvori" },
  { label: "Srbija", href: "/srbija" },
  { label: "Naša planeta", href: "/nasa-planeta" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header
      className="sticky top-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: isDark ? "#0d0d0f" : "#d6e8f0",
        borderBottom: isDark
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex items-center justify-between h-[60px]">
          {/* Left nav — desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors duration-200"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: isDark ? "#c9c6cf" : "#1a2a3a",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Center logo */}
          <Link href="/" className="flex items-center gap-0 no-underline">
            <span
              className="text-[22px] font-extrabold tracking-[0.18em] uppercase"
              style={{
                fontFamily: "'Lora', serif",
                color: isDark ? "#f6f3e8" : "#1a2a3a",
              }}
            >
              NOVI{" "}
            </span>
            <span
              className="text-[22px] font-extrabold tracking-[0.18em] uppercase"
              style={{
                fontFamily: "'Lora', serif",
                color: isDark ? "#d9bf7a" : "#8B0000",
              }}
            >
              TALAS
            </span>
          </Link>

          {/* Right nav — desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.slice(2).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors duration-200"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: isDark ? "#c9c6cf" : "#1a2a3a",
                }}
              >
                {item.label}
              </Link>
            ))}

            <span
              className="text-[12px] font-medium italic ml-2"
              style={{
                fontFamily: "'Lora', serif",
                color: isDark ? "#bcb7a6" : "#5a6a7a",
              }}
            >
              Veritas ante omnia
            </span>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="ml-3 p-1.5 rounded-full transition-colors duration-200"
              style={{
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.06)",
                color: isDark ? "#d9bf7a" : "#1a2a3a",
              }}
              aria-label={isDark ? "Svetli režim" : "Tamni režim"}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile: theme toggle + menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full transition-colors duration-200"
              style={{
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.06)",
                color: isDark ? "#d9bf7a" : "#1a2a3a",
              }}
              aria-label={isDark ? "Svetli režim" : "Tamni režim"}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Meni"
              style={{ color: isDark ? "#c9c6cf" : "#1a2a3a" }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div
          className="lg:hidden px-5 pb-5"
          style={{
            backgroundColor: isDark ? "#0d0d0f" : "#d6e8f0",
            borderTop: isDark
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <nav className="flex flex-col gap-3 pt-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13px] font-semibold tracking-[0.1em] uppercase py-2 transition-colors duration-200"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: isDark ? "#c9c6cf" : "#1a2a3a",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <p
            className="text-[12px] italic mt-4"
            style={{
              fontFamily: "'Lora', serif",
              color: isDark ? "#bcb7a6" : "#5a6a7a",
            }}
          >
            Veritas ante omnia
          </p>
        </div>
      )}
    </header>
  );
}
