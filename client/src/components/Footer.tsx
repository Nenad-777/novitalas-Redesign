/*
 * DESIGN: "Diplomatska Klasika" — Authoritative, minimal footer
 * Dark background, centered copyright with motto
 * Removed: Kultura, Naša planeta
 */

import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#0f1217] border-t border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="no-underline">
            <span
              className="text-[#f6f3e8] text-[18px] font-extrabold tracking-[0.18em] uppercase"
              style={{ fontFamily: "'Lora', serif" }}
            >
              NOVI{" "}
            </span>
            <span
              className="text-[#d9bf7a] text-[18px] font-extrabold tracking-[0.18em] uppercase"
              style={{ fontFamily: "'Lora', serif" }}
            >
              TALAS
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-5">
            {["Geopolitika", "Obaveštajni izvori", "Srbija"].map(
              (item) => (
                <span
                  key={item}
                  className="text-[#8a8790] text-[11px] font-semibold tracking-[0.1em] uppercase hover:text-white transition-colors duration-200 cursor-pointer"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  {item}
                </span>
              )
            )}
          </nav>

          {/* Motto */}
          <p
            className="text-[#bcb7a6] text-[12px] italic"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Veritas ante omnia
          </p>
        </div>

        <hr className="border-white/[0.06] my-6" />

        <p
          className="text-center text-[#6b6872] text-[12px]"
          style={{ fontFamily: "'Source Sans 3', sans-serif" }}
        >
          &copy; {new Date().getFullYear()} NOVI TALAS &mdash; Sva prava zadržana
        </p>
      </div>
    </footer>
  );
}
