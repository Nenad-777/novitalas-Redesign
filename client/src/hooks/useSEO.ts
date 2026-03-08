import { useEffect } from "react";
import { seoData } from "../../../shared/seo";

export function useSEO(path: string) {
  useEffect(() => {
    const data = seoData[path];
    if (!data) return;

    document.title = data.title;

    const setMeta = (
      attrName: string,
      attrValue: string,
      content: string
    ) => {
      let el = document.querySelector(
        `meta[${attrName}="${attrValue}"]`
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", data.description);
    setMeta("property", "og:title", data.ogTitle);
    setMeta("property", "og:description", data.ogDescription);
    setMeta("property", "og:url", data.ogUrl);
    setMeta("property", "og:image", data.ogImage);
    setMeta("name", "twitter:title", data.twitterTitle);
    setMeta("name", "twitter:description", data.twitterDescription);
    setMeta("name", "twitter:image", data.twitterImage);

    return () => {
      document.title = "NOVI TALAS — Vaš prozor u svet";
    };
  }, [path]);
}
