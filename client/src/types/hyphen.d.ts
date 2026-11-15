declare module "hyphen/sh-latn" {
  const language: { hyphenateSync(text: string, options?: { minWordLength?: number }): string };
  export default language;
}
