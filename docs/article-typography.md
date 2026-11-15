# Article typography

Mobile (<768px): preserve Lora 19px/1.8 and existing margins. Add only optional
soft hyphens to lowercase Serbian Latin words using `hyphen@1.14.1`'s
`sh-latn` patterns, derived from Dejan Muhamedagić's TeX patterns. These are
also the basis of Serbian LibreOffice hyphenation; do not substitute English
or Croatian heuristics. Library: https://github.com/ytiurin/hyphen (ISC);
pattern provenance: https://github.com/hyphenation/tex-hyphen and
https://github.com/grakic/hyphen-sr (see upstream pattern licenses).

CSS support for `hyphens:auto` is not evidence that an OS supplies a Serbian
dictionary. Use explicit pattern-generated discretionary opportunities and
`hyphens:manual` on mobile. The article sources, metadata, and story titles
remain unchanged; copy removes discretionary characters. Names, uppercase
abbreviations, URLs, email, numbers, foreign-language spans and links are
not hyphenated. Rich emphasis and fragments retain their markup.

After font loading or a width change, measure actual spaces using DOM Ranges.
Justify paragraphs only when no rendered space exceeds 0.65em (12.35px at
19px). If a paragraph fails, keep natural spacing for the whole paragraph.
No forced line breaks, arbitrary hyphens, font shrinking, or margin changes.
Desktop keeps the original text and styling. Without measurement, mobile
uses natural spacing. This is a per-paragraph readability fallback, not a
promise of perfect full justification for every possible text or device.

Regression checks: `node --import tsx --test tests/article-hyphenation.test.tsx`
and `pnpm check`. Visual matrix: three articles × 375/390/430 CSS pixels;
check deck, drop cap, later paragraphs, resize, dark theme, copy and sharing.
A Chromium narrow viewport is not a real iPhone Safari test.
