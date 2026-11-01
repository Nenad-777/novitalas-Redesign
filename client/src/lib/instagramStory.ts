export type StoryArticle = { title: string; section: string; path: string; imageSrc?: string; credit?: string };
export type StoryEvent = 'instagram_share_open' | 'instagram_story_generated' | 'instagram_story_download' | 'instagram_share_sheet_open' | 'instagram_article_link_copy';
export function storyLink(path: string) {
  const url = new URL(path, 'https://novitalas.org');
  if (url.origin !== 'https://novitalas.org' || !/^\/(geopolitika|srbija|kultura|nasa-planeta|obavestajni-izvori)\/[^/]+\/?$/.test(url.pathname)) throw new Error('Link vesti nije dostupan.');
  url.search = ''; url.hash = '';
  url.searchParams.set('utm_source', 'instagram');
  url.searchParams.set('utm_medium', 'social');
  url.searchParams.set('utm_campaign', 'story_share');
  return url.href;
}
export function storyTrack(name: StoryEvent, path: string) {
  try {
    const va = (window as Window & { va?: (type: string, data: unknown) => void }).va;
    va?.('event', { name, data: { article: new URL(path, 'https://novitalas.org').pathname.slice(0,255) } });
  } catch { /* Analytics must never prevent sharing. */ }
}
export function wrapText(ctx: CanvasRenderingContext2D, text: string, width: number) {
  const lines: string[] = []; let line = '';
  for (const word of text.trim().split(/\s+/)) {
    if (ctx.measureText(word).width > width) {
      if (line) { lines.push(line); line = ''; }
      for (const char of Array.from(word)) {
        if (line && ctx.measureText(line + char).width > width) { lines.push(line); line = ''; }
        line += char;
      }
    } else if (line && ctx.measureText(line + ' ' + word).width > width) { lines.push(line); line = word; }
    else line += (line ? ' ' : '') + word;
  }
  if (line) lines.push(line);
  return lines;
}
function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image(); img.crossOrigin = 'anonymous';
    const timer = window.setTimeout(() => { img.src = ''; reject(new Error('Učitavanje fotografije traje predugo. Pokušaj ponovo.')); }, 12000);
    img.onload = () => { clearTimeout(timer); resolve(img); };
    img.onerror = () => { clearTimeout(timer); reject(new Error('Fotografija trenutno nije dostupna za Story. Pokušaj ponovo; link možeš kopirati odmah.')); };
    img.src = src;
  });
}
async function articleImage(article: StoryArticle) {
  if (!article.imageSrc) return null;
  const url = new URL(article.imageSrc, window.location.origin);
  if (['novitalas.org', 'www.novitalas.org', window.location.hostname].includes(url.hostname)) return loadImage(url.pathname + url.search);
  try { return await loadImage(url.href); }
  catch { return loadImage('/api/story-image?path=' + encodeURIComponent(article.path) + '&src=' + encodeURIComponent(url.href)); }
}
export async function generateStory(article: StoryArticle): Promise<Blob> {
  storyLink(article.path);
  const fonts = Promise.all([document.fonts.load('700 64px "Playfair Display"'), document.fonts.load('400 28px "Lora"')]);
  let timeout: ReturnType<typeof setTimeout> | undefined;
  try {
    await Promise.race([fonts, new Promise((_, reject) => { timeout = setTimeout(() => reject(new Error('Fontovi nisu učitani. Pokušaj ponovo.')), 12000); })]);
  } finally { clearTimeout(timeout); }
  if (!document.fonts.check('700 64px "Playfair Display"') || !document.fonts.check('400 28px "Lora"')) throw new Error('Fontovi nisu učitani. Pokušaj ponovo.');
  const photo = await articleImage(article);
  const canvas = document.createElement('canvas'); canvas.width = 1080; canvas.height = 1920;
  const ctx = canvas.getContext('2d'); if (!ctx) throw new Error('Ovaj pregledač ne podržava pripremu slike.');
  ctx.fillStyle = '#f8f6f1'; ctx.fillRect(0, 0, 1080, 1920);
  ctx.textBaseline = 'top'; ctx.fillStyle = '#17202b'; ctx.font = '700 64px "Playfair Display", serif';
  ctx.fillText('NOVI', 88, 230); const brandWidth = ctx.measureText('NOVI ').width;
  ctx.fillStyle = '#841b2c'; ctx.fillText('TALAS', 88 + brandWidth, 230);
  ctx.fillRect(88, 326, 904, 3);
  ctx.font = '400 25px "Lora", serif'; ctx.fillText(article.section.toLocaleUpperCase('sr'), 88, 365, 904);
  let size = 64; let lines: string[] = [];
  for (; size >= 22; size -= 2) {
    ctx.font = `700 ${size}px "Playfair Display", serif`; lines = wrapText(ctx, article.title, 904);
    if (lines.length * size * 1.18 <= (photo ? 430 : 830)) break;
  }
  if (size < 22) throw new Error('Naslov je predugačak za čitljivu Story karticu. Link možeš kopirati ispod.');
  ctx.fillStyle = '#20201e'; lines.forEach((line, i) => ctx.fillText(line, 88, 425 + i * size * 1.18));
  if (photo) {
    // Contain the original photograph: no distortion or cropping.
    const ratio = Math.min(904 / photo.naturalWidth, 570 / photo.naturalHeight);
    const w = photo.naturalWidth * ratio, h = photo.naturalHeight * ratio;
    ctx.drawImage(photo, (1080 - w) / 2, 900 + (570 - h) / 2, w, h);
    if (article.credit) {
      ctx.fillStyle = '#65635e'; ctx.font = '400 18px "Lora", serif';
      let creditSize = 18; let creditLines = wrapText(ctx, article.credit, 904);
      while (creditLines.length * creditSize * 1.25 > 76 && creditSize > 10) {
        creditSize--; ctx.font = `400 ${creditSize}px "Lora", serif`; creditLines = wrapText(ctx, article.credit, 904);
      }
      if (creditLines.length * creditSize * 1.25 > 76) throw new Error('Potpis fotografije je predugačak za karticu. Link možeš kopirati ispod.');
      creditLines.forEach((line, i) => ctx.fillText(line, 88, 1484 + i * creditSize * 1.25));
    }
  }
  // 1570–1700 remains intentionally empty for Instagram's Link sticker.
  ctx.fillStyle = '#841b2c'; ctx.fillRect(88, 1725, 72, 3);
  ctx.fillStyle = '#343431'; ctx.font = '400 28px "Lora", serif'; ctx.fillText('novitalas.org', 88, 1750);
  return new Promise((resolve, reject) => canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('Slika nije napravljena. Pokušaj ponovo.')), 'image/png'));
}
