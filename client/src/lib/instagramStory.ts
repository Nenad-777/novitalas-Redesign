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
  // Editorial cover: full-width photograph, readable title and an unobstructed sticker area.
  const W = 1080, H = 1920, margin = 76;
  ctx.fillStyle = '#f7f5ef'; ctx.fillRect(0, 0, W, H);
  ctx.textBaseline = 'top';

  // Magazine masthead, generously spaced and high-contrast.
  ctx.fillStyle = '#191d24';
  ctx.font = '700 64px "Playfair Display", serif';
  ctx.fillText('NOVI', margin, 150);
  const mastheadWidth = ctx.measureText('NOVI ').width;
  ctx.fillStyle = '#8d2836'; ctx.fillText('TALAS', margin + mastheadWidth, 150);
  ctx.fillStyle = '#8d2836'; ctx.fillRect(margin, 246, W - margin * 2, 3);
  ctx.fillStyle = '#8d2836';
  ctx.font = '600 24px "Lora", serif';
  ctx.fillText(article.section.toLocaleUpperCase('sr'), margin, 276);

  // Headline remains prominent even for long Serbian headlines.
  let size = 72, lines: string[] = [];
  for (; size >= 42; size -= 2) {
    ctx.font = `700 ${size}px "Playfair Display", serif`;
    lines = wrapText(ctx, article.title, W - margin * 2);
    if (lines.length <= 5 && lines.length * size * 1.17 <= 425) break;
  }
  ctx.fillStyle = '#171b22';
  ctx.font = `700 ${size}px "Playfair Display", serif`;
  const headlineTop = 338;
  lines.forEach((line, i) => ctx.fillText(line, margin, headlineTop + i * size * 1.17));

  // A generous landscape image is the focal point; crop only to fit a consistent 16:9 frame.
  const imageTop = Math.max(785, headlineTop + lines.length * size * 1.17 + 48);
  const imageHeight = 540;
  if (photo) {
    const scale = Math.max(W / photo.naturalWidth, imageHeight / photo.naturalHeight);
    const sourceW = W / scale, sourceH = imageHeight / scale;
    ctx.drawImage(photo, (photo.naturalWidth - sourceW) / 2, (photo.naturalHeight - sourceH) / 2, sourceW, sourceH, 0, imageTop, W, imageHeight);
  } else {
    ctx.fillStyle = '#e6e2d9'; ctx.fillRect(0, imageTop, W, imageHeight);
  }

  // Keep attribution legible without competing with the cover image.
  if (article.credit) {
    ctx.fillStyle = '#67635e';
    ctx.font = '400 18px "Lora", serif';
    const credits = wrapText(ctx, article.credit, W - margin * 2);
    credits.slice(0, 2).forEach((line, i) => ctx.fillText(line, margin, imageTop + imageHeight + 20 + i * 24));
  }

  // Reserve a clear, Instagram-safe area for the user's interactive Link sticker.
  ctx.fillStyle = '#8d2836';
  ctx.fillRect(margin, 1698, 74, 3);
  ctx.fillStyle = '#171b22';
  ctx.font = '700 30px "Lora", serif';
  ctx.fillText('ČITAJ NA NOVOM TALASU', margin, 1732);
  ctx.fillStyle = '#67635e';
  ctx.font = '400 25px "Lora", serif';
  ctx.fillText('novitalas.org', margin, 1780);
  return new Promise((resolve, reject) => canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('Slika nije napravljena. Pokušaj ponovo.')), 'image/png'));
}
