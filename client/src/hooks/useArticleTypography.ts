import { useLayoutEffect, useRef, useSyncExternalStore } from "react";

const mobileQuery = "(max-width: 767px)";
const subscribe = (listener: () => void) => {
  const query = window.matchMedia(mobileQuery);
  query.addEventListener("change", listener);
  return () => query.removeEventListener("change", listener);
};
const isMobile = () => window.matchMedia(mobileQuery).matches;
const selector = "p.nt-article-deck, p.nt-article-paragraph";

// A paragraph may justify only if every rendered space fits the reading budget.
// Range measures actual browser shaping, including rich text and the drop cap.
export function hasWideSpaces(paragraph: HTMLElement): boolean {
  const limit = parseFloat(getComputedStyle(paragraph).fontSize) * 0.65;
  const walker = document.createTreeWalker(paragraph, NodeFilter.SHOW_TEXT);
  const range = document.createRange();
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const text = node.textContent || "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") continue;
      range.setStart(node, i);
      range.setEnd(node, i + 1);
      if (Array.from(range.getClientRects()).some(rect => rect.width > limit)) return true;
    }
  }
  return false;
}

export function useArticleTypography(content: unknown) {
  const mobile = useSyncExternalStore(subscribe, isMobile, () => false);
  const ref = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const article = ref.current;
    if (!article) return;
    let disposed = false;
    let frame = 0;
    const fit = () => {
      if (disposed) return;
      const paragraphs = Array.from(article.querySelectorAll<HTMLElement>(selector));
      if (!mobile) {
        paragraphs.forEach(p => p.removeAttribute("data-mobile-align"));
        return;
      }
      // Batch writes/reads: no per-character reflow, no injected line breaks.
      paragraphs.forEach(p => p.dataset.mobileAlign = "justify");
      const fallback = paragraphs.filter(hasWideSpaces);
      fallback.forEach(p => p.dataset.mobileAlign = "start");
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(fit);
    };
    fit();
    document.fonts.ready.then(schedule);
    document.fonts.addEventListener("loadingdone", schedule);
    let width = article.getBoundingClientRect().width;
    const observer = new ResizeObserver(entries => {
      const next = entries[0]?.contentRect.width;
      if (next !== width) { width = next; schedule(); }
    });
    observer.observe(article);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.fonts.removeEventListener("loadingdone", schedule);
    };
  }, [mobile, content]);
  return { ref, mobile };
}
