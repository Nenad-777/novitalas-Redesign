/*
 * DESIGN: "Diplomatska Klasika" — Foreign Affairs-inspired header
 * - Clean white/dark bar with centered logo
 * - Uppercase navigation links in sans-serif
 * - Thin bottom border
 * - Sticky positioning
 */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Geopolitika", href: "/" },
  { label: "Obaveštajni izvori", href: "/" },
  { label: "Kultura", href: "/" },
  { label: "Srbija", href: "/srbija" },
  { label: "Naša planeta", href: "/" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0d0d0f] border-b border-white/[0.08]">
      {/* Top bar */}
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex items-center justify-between h-[60px]">
          {/* Left nav — desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#c9c6cf] hover:text-white text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors duration-200"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Center logo */}
          <Link href="/" className="flex items-center gap-0 no-underline">
            <span
              className="text-[#f6f3e8] text-[22px] font-extrabold tracking-[0.18em] uppercase"
              style={{ fontFamily: "'Lora', serif" }}
            >
              NOVI{" "}
            </span>
            <span
              className="text-[#d9bf7a] text-[22px] font-extrabold tracking-[0.18em] uppercase"
              style={{ fontFamily: "'Lora', serif" }}
            >
              TALAS
            </span>
          </Link>

          {/* Right nav — desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.slice(3).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#c9c6cf] hover:text-white text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors duration-200"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                {item.label}
              </Link>
            ))}
            <span
              className="text-[#bcb7a6] text-[12px] font-medium italic ml-2"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Veritas ante omnia
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-[#c9c6cf] hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Meni"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0d0d0f] border-t border-white/[0.08] px-5 pb-5">
          <nav className="flex flex-col gap-3 pt-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#c9c6cf] hover:text-white text-[13px] font-semibold tracking-[0.1em] uppercase py-2 transition-colors duration-200"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p
            className="text-[#bcb7a6] text-[12px] italic mt-4"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Veritas ante omnia
          </p>
        </div>
      )}
    </header>
  );
}
