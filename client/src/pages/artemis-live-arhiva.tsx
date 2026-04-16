import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveBriefingBlock from "@/components/LiveBriefingBlock";
import { useTheme } from "@/contexts/ThemeContext";

const ARTEMIS_ARCHIVE_ENTRIES = [
  {
    href: "/nasa-planeta/artemis-ii-splashdown",
    title:
      "Artemis II uspešno okončan: Orion se vratio na Zemlju nakon istorijskog leta oko Meseca",
  },
  {
    href: "/nasa-planeta/artemis-ii-rekord-udaljenosti",
    title:
      "Čovečanstvo najdalje od Zemlje u istoriji: Artemis II nadmašio rekord Apola 13",
  },
  {
    href: "/nasa-planeta/artemis-ii-orion-polovina-puta-do-meseca",
    title:
      "Orion više od polovine puta do Meseca: misija Artemis II u dubokom svemiru",
  },
  {
    href: "/nasa-planeta/artemis-ii-fotografije-dubokog-svemira",
    title:
      "Fotografije iz dubokog svemira: Artemis II beleži prizore sa lunarnog preleta",
  },
  {
    href: "/nasa-planeta/artemis-ii-uzivo-prenos-rekord",
    title: "Uživo: Artemis II obara istorijski rekord — prenos iz dubokog svemira",
  },
  {
    href: "/nasa-planeta/breaking-nasa-artemis-ii-mesec-posle-50-godina",
    title: "BREAKING: NASA ponovo šalje ljude ka Mesecu posle više od 50 godina",
  },
];

export default function ArtemisLiveArhiva() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      <Header />

      <main className="flex-1 py-12 md:py-16">
        <section className="max-w-[900px] mx-auto px-5">
          <div className="mb-8">
            <span className="kicker">Arhiva uživo praćenja</span>
            <h1
              className="mt-3 text-[30px] md:text-[42px] font-bold leading-[1.1]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#e0ddd5" : "#111",
              }}
            >
              Artemis II — live arhiva
            </h1>
          </div>

          <LiveBriefingBlock isDark={isDark} />

          <div
            className="relative w-full overflow-hidden rounded-xl aspect-video mb-10"
            style={{
              border: isDark ? "1px solid #2a2a2e" : "1px solid #e5e5e5",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/m3kR2KK8TEs"
              title="NASA Artemis II — arhivirani uživo prenos"
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

          <ul className="space-y-4 mb-10">
            {ARTEMIS_ARCHIVE_ENTRIES.map((entry) => (
              <li key={entry.href}>
                <Link
                  href={entry.href}
                  className="text-[18px] leading-[1.35] font-semibold no-underline"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? "#e0ddd5" : "#111",
                  }}
                >
                  {entry.title}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/nasa-planeta"
            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 no-underline"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              color: isDark ? "#d9bf7a" : "#8B0000",
            }}
          >
            &larr; Nazad na Našu planetu
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
