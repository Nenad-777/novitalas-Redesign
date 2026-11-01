import { articleMeta } from '../shared/articleMeta';
import { seoData } from '../shared/seo';

// Only images already registered by the editors; never an arbitrary URL proxy.
const hosts = new Set(['upload.wikimedia.org', 'thumb.wikimedia.org', 'img.youtube.com']);
const safeUrl = (value: string) => {
  const u = new URL(value);
  if (u.protocol !== 'https:' || u.username || u.password || u.port || !hosts.has(u.hostname)) throw new Error('Unsupported image host');
  return u;
};
export default async function handler(req: { method?: string; query: Record<string, string | string[] | undefined> }, res: { status: (n:number)=>any; setHeader:(k:string,v:string)=>void; send:(body:unknown)=>void }) {
  if (req.method !== 'GET') { res.setHeader('Allow','GET'); return res.status(405).send('Method not allowed'); }
  const path = req.query.path, requested = req.query.src;
  if (typeof path !== 'string' || typeof requested !== 'string') return res.status(400).send('Missing article');
  const meta = articleMeta[path]; const seo = seoData[path];
  const allowed = [meta?.imageSrc, seo?.ogImage].filter(Boolean);
  if (!allowed.includes(requested)) return res.status(404).send('Unregistered article image');
  const controller = new AbortController(); const timer = setTimeout(()=>controller.abort(), 10000);
  try {
    let url = safeUrl(requested); let response: Response | undefined;
    for (let n = 0; n < 3; n++) {
      response = await fetch(url, {signal:controller.signal, redirect:'manual'});
      if (response.status >= 300 && response.status < 400) { const next=response.headers.get('location'); if (!next) throw new Error('Invalid redirect'); await response.body?.cancel(); url=safeUrl(new URL(next,url).href); continue; }
      break;
    }
    const mime=response?.headers.get('content-type')?.split(';')[0] || '';
    if (!response?.ok || !/^image\/(jpeg|png|webp|avif)$/.test(mime) || !response.body) throw new Error('Invalid image');
    const limit=12*1024*1024;
    if (Number(response.headers.get('content-length')) > limit) throw new Error('Image too large');
    const chunks: Uint8Array[]=[]; let length=0; const reader=response.body.getReader();
    for (;;) { const {value,done}=await reader.read(); if(done)break; length+=value.byteLength; if(length>limit){await reader.cancel();throw new Error('Image too large');} chunks.push(value); }
    res.setHeader('Content-Type',mime); res.setHeader('Cache-Control','public, max-age=86400, s-maxage=604800'); res.setHeader('X-Content-Type-Options','nosniff');
    return res.status(200).send(Buffer.concat(chunks));
  } catch { return res.status(502).send('Article image unavailable'); }
  finally { clearTimeout(timer); controller.abort(); }
}
