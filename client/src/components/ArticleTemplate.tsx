import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageCaption from "@/components/ImageCaption";
import ShareButton from "@/components/ShareButton";
import SeoMeta from "@/components/SeoMeta";
import { useTheme } from "@/contexts/ThemeContext";

type ArticleInlineImage = {
  type: "image";
  src: string;
  alt: string;
  credit?: string;
  heightClass?: string;
};

type ArticleParagraph = string | ArticleInlineImage;

const EM_DASH_REPLACEMENT = ",";

function normalizeEmDashes(text: string): string {
  return text.replace(/—/g, EM_DASH_REPLACEMENT);
}

type InfoBox = {
  title: string;
  items: string[];
};

type ArticleTemplateProps = {
  /** Route path used for SEO meta tags, e.g. "/geopolitika/ormuz". */
  path?: string;
  sectionLabel: string;
  title: string;
  dateLabel?: string;
  deck?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCredit?: string;
  imageHeightClass?: string;
  paragraphs: ArticleParagraph[];
  infoBox?: InfoBox;
  backHref: string;
  backLabel: string;
};

export default function ArticleTemplate({
  path,
  sectionLabel,
  title,
  dateLabel,
  deck,
  imageSrc,
  imageAlt = "",
  imageCredit,
  imageHeightClass = "h-[260px] md:h-[420px]",
  paragraphs,
  infoBox,
  backHref,
  backLabel,
}: ArticleTemplateProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#111318" : "#ffffff" }}
    >
      {path && (
        <SeoMeta
          path={path}
          title={title}
          description={deck}
          imageSrc={imageSrc}
        />
      )}
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
          <ShareButton />

          {/* Lead / deck */}
          {deck ? (
            <p
              className="mt-6 text-[18px] md:text-[20px] leading-[1.75]"
              style={{
                fontFamily: "'Lora', serif",
                color: isDark ? "#cfcac0" : "#222",
              }}
            >
              {normalizeEmDashes(deck)}
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
                  decoding="async"
                />
              </div>
              <ImageCaption credit={imageCredit} />
            </div>
          ) : null}

          {/* Tekst */}
          <div className="mt-8">
            {paragraphs.map((p, idx) => (
              <div key={idx}>
                {typeof p === "string" ? (
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
                    {normalizeEmDashes(p)}
                  </p>
                ) : (
                  <figure
                    className="mt-5 border overflow-hidden"
                    style={{
                      borderColor: isDark ? "#2a2a2e" : "#eee",
                      backgroundColor: isDark ? "#1a1c22" : "#f7f7f7",
                    }}
                  >
                    <img
                      src={p.src}
                      alt={p.alt}
                      className={`w-full ${p.heightClass ?? "h-[240px] md:h-[420px]"} object-cover object-center block`}
                      loading="lazy"
                      decoding="async"
                    />
                    {p.credit ? (
                      <figcaption
                        className="mt-[6px] px-2 pb-2 text-sm"
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          color: isDark ? "#6b6760" : "#777",
                        }}
                      >
                        {p.credit}
                      </figcaption>
                    ) : null}
                  </figure>
                )}

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

          {/* Info Box */}
          {infoBox ? (
            <div
              className="mt-10 p-5 border-l-4"
              style={{
                borderLeftColor: isDark ? "#d9bf7a" : "#8B0000",
                backgroundColor: isDark ? "#1a1c22" : "#f5f0e8",
              }}
            >
              <p
                className="text-[13px] font-bold uppercase tracking-[0.12em] mb-3"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: isDark ? "#d9bf7a" : "#8B0000",
                }}
              >
                {infoBox.title}
              </p>
              <ul className="list-none p-0 m-0 space-y-2">
                {infoBox.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-[16px] leading-[1.6]"
                    style={{
                      fontFamily: "'Lora', serif",
                      color: isDark ? "#b7b2aa" : "#333",
                    }}
                  >
                    <span
                      style={{ color: isDark ? "#d9bf7a" : "#8B0000" }}
                      className="mt-[2px] shrink-0"
                    >
                      ▪
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

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
