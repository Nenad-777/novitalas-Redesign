import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import GeopolitikaIndexLegacy from "./GeopolitikaIndexLegacy";

const ORBITAL = {
  href: "/geopolitika/amerika-prvi-put-javno-potvrdila-imamo-oruzje-u-orbiti",
  title: "Amerika prvi put javno potvrdila: imamo oružje u orbiti",
  description:
    "SAD su prvi put otvoreno potvrdile da već imaju oružane sisteme raspoređene u Zemljinoj orbiti. Pentagon ne otkriva šta tačno mogu da urade, dok Kina upozorava na novu trku u naoružanju u svemiru.",
  imageSrc:
    "https://media.defense.gov/2026/Sep/15/2003997876/2000/2000/0/260914-F-JJ904-1095.JPG",
  imageAlt:
    "Američki sekretar Ratnog vazduhoplovstva Troy Meink govori na konferenciji Air, Space & Cyber 14. septembra 2026.",
};

function FeaturedOrbitalStory() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <article>
      <Link href={ORBITAL.href} className="no-underline">
        <div
          className="border mb-4 overflow-hidden"
          style={{
            borderColor: isDark ? "#2a2a2e" : "#eee",
            backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
          }}
        >
          <img
            src={ORBITAL.imageSrc}
            alt={ORBITAL.imageAlt}
            className="w-full h-[260px] md:h-[360px] object-cover object-center block"
            decoding="async"
          />
        </div>

        <span className="kicker">Geopolitika</span>
        <h2
          className="mt-2 text-[24px] md:text-[32px] font-bold leading-[1.15]"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: isDark ? "#e0ddd5" : "#111",
          }}
        >
          {ORBITAL.title}
        </h2>
        <p
          className="mt-2 text-[15px] leading-[1.6]"
          style={{
            fontFamily: "'Crimson Pro', serif",
            color: isDark ? "#9a978f" : "#555",
          }}
        >
          {ORBITAL.description}
        </p>
        <div
          className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em]"
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            color: isDark ? "#d9bf7a" : "#8B0000",
          }}
        >
          Otvori tekst →
        </div>
      </Link>
    </article>
  );
}

export default function GeopolitikaIndexWithOrbital() {
  const [host, setHost] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const candidates = Array.from(document.querySelectorAll("main div"));
    const grid = candidates.find(
      (el) =>
        el.classList.contains("grid") &&
        el.classList.contains("grid-cols-1") &&
        el.classList.contains("gap-10")
    );

    if (!grid) return;

    const mount = document.createElement("div");
    mount.className = "md:col-span-2";
    grid.prepend(mount);
    setHost(mount);

    return () => {
      mount.remove();
      setHost(null);
    };
  }, []);

  return (
    <>
      <GeopolitikaIndexLegacy />
      {host ? createPortal(<FeaturedOrbitalStory />, host) : null}
    </>
  );
}
