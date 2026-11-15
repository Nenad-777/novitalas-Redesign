import { Children, Fragment, cloneElement, isValidElement, type ReactNode } from "react";
import serbianLatin from "hyphen/sh-latn";
const { hyphenateSync } = serbianLatin;

// Dejan Muhamedagić's TeX Latin patterns (also used by Serbian LibreOffice).
// Only discretionary U+00AD break opportunities; editorial source stays intact.
export function hyphenateSerbian(text: string): string {
  return text.replace(/\S+/g, token => {
    // Keep URLs, email, acronyms, numbers and foreign spellings intact.
    if (/[\d@/:_\u00ad]/.test(token)) return token;
    return token.replace(/[A-Za-zČĆŽŠĐčćžšđÀ-žА-Яа-яЂЈЉЊЋЏђјљњћџ]+/g, word => {
      if (!/^[a-zčćžšđ]+$/.test(word) || /[qwxy]/.test(word) || word.length < 6) return word;
      return hyphenateSync(word, { minWordLength: 6 });
    });
  });
}

export function hyphenateArticleNode(node: ReactNode): ReactNode {
  return Children.map(node, child => {
    if (typeof child === "string") return hyphenateSerbian(child);
    if (!isValidElement<{ children?: ReactNode; lang?: string }>(child)) return child;
    // Do not transform custom components, code, links or explicitly foreign text.
    if (child.type !== Fragment && (typeof child.type !== "string" || !["strong", "em", "b", "i", "span"].includes(child.type))) return child;
    if (child.props.lang && !child.props.lang.startsWith("sr")) return child;
    return cloneElement(child, {}, hyphenateArticleNode(child.props.children));
  });
}
