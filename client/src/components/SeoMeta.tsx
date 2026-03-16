/**
 * SeoMeta.tsx
 *
 * Drop-in SEO component for article pages.
 * Render it (or let ArticleTemplate render it via its `path` prop) and all
 * OG + Twitter meta tags will be kept up-to-date for the current route.
 *
 * Priority chain for determining tag values:
 *   1. Explicit entry in shared/seo.ts   (preserves hand-crafted descriptions)
 *   2. Entry in shared/articleMeta.ts    (auto-derived; add new articles here)
 *   3. Direct props passed by caller     (fallback for truly inline usage)
 */

import { useEffect } from "react";

import { seoData } from "../../../shared/seo";
import {
  articleMeta,
  buildOgImageUrl,
} from "../../../shared/articleMeta";

const SITE_BASE = "https://novitalas.org";
const BRAND_SUFFIX = " — Novi Talas";

type SeoMetaProps = {
  /** Route path, e.g. "/geopolitika/svetska-kriza-sve-ozbiljnija" */
  path: string;
  /** Article headline — used as fallback when no seo.ts / articleMeta entry exists */
  title?: string;
  /** Short description — used as fallback */
  description?: string;
  /** Relative or absolute image path — used as fallback */
  imageSrc?: string;
};

export default function SeoMeta({
  path,
  title,
  description,
  imageSrc,
}: SeoMetaProps) {
  useEffect(() => {
    const setMeta = (
      attrName: string,
      attrValue: string,
      content: string,
    ) => {
      let el = document.querySelector(
        `meta[${attrName}="${attrValue}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // ── Priority 1: explicit seo.ts entry ──────────────────────────────────
    const explicit = seoData[path];
    if (explicit) {
      document.title = explicit.title;
      setMeta("name", "description", explicit.description);
      setMeta("property", "og:title", explicit.ogTitle);
      setMeta("property", "og:description", explicit.ogDescription);
      setMeta("property", "og:url", explicit.ogUrl);
      setMeta("property", "og:image", explicit.ogImage);
      setMeta("name", "twitter:title", explicit.twitterTitle);
      setMeta("name", "twitter:description", explicit.twitterDescription);
      setMeta("name", "twitter:image", explicit.twitterImage);
    } else {
      // ── Priority 2: articleMeta registry entry ───────────────────────────
      const registered = articleMeta.find((m) => m.path === path);
      if (registered) {
        const ogImage = buildOgImageUrl(registered.imageSrc);
        const ogUrl = `${SITE_BASE}${registered.path}`;
        document.title = `${registered.title}${BRAND_SUFFIX}`;
        setMeta("name", "description", registered.description);
        setMeta("property", "og:title", registered.title);
        setMeta("property", "og:description", registered.description);
        setMeta("property", "og:url", ogUrl);
        setMeta("property", "og:image", ogImage);
        setMeta("name", "twitter:title", registered.title);
        setMeta("name", "twitter:description", registered.description);
        setMeta("name", "twitter:image", ogImage);
      } else if (title) {
        // ── Priority 3: direct props (inline fallback) ────────────────────
        const ogImage = imageSrc ? buildOgImageUrl(imageSrc) : "";
        const ogUrl = `${SITE_BASE}${path}`;
        document.title = `${title}${BRAND_SUFFIX}`;
        setMeta("property", "og:title", title);
        setMeta("property", "og:url", ogUrl);
        setMeta("name", "twitter:title", title);
        if (description) {
          setMeta("name", "description", description);
          setMeta("property", "og:description", description);
          setMeta("name", "twitter:description", description);
        }
        if (ogImage) {
          setMeta("property", "og:image", ogImage);
          setMeta("name", "twitter:image", ogImage);
        }
      }
    }

    // Cleanup: restore default title when navigating away.
    return () => {
      document.title = "NOVI TALAS — Vaš prozor u svet";
    };
  }, [path, title, description, imageSrc]);

  return null;
}
