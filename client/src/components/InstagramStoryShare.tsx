import { useEffect, useId, useRef, useState } from 'react';
import { Instagram, Download, Copy, Share2, X } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { useTheme } from '@/contexts/ThemeContext';
import { generateStory, storyLink, storyTrack, type StoryArticle } from '@/lib/instagramStory';
import './InstagramStoryShare.css';

export default function InstagramStoryShare({ article }: { article: StoryArticle }) {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false), [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<{file: File; url: string} | null>(null);
  const [error, setError] = useState(''), [message, setMessage] = useState('');
  const [sharing, setSharing] = useState(false);
  const linkId = useId();
  const linkRef = useRef<HTMLInputElement>(null);
  const { title, section, path, imageSrc, credit } = article;
  let link = ''; try { link = storyLink(path); } catch { /* No incorrect links. */ }
  useEffect(() => {
    if (!open || !link) return;
    let cancelled = false; let preview = '';
    setResult(null); setError(''); setMessage('');
    generateStory({ title, section, path, imageSrc, credit }).then(blob => {
      if (cancelled) return;
      preview = URL.createObjectURL(blob);
      const slug = path.split('/').filter(Boolean).pop()?.replace(/[^a-z0-9-]/gi, '').slice(0, 100) || 'vest';
      setResult({file: new File([blob], `novi-talas-${slug}-story.png`, {type:'image/png'}), url:preview});
      storyTrack('instagram_story_generated', path);
    }).catch(err => { if (!cancelled) setError(err instanceof Error ? err.message : 'Priprema nije uspela. Pokušaj ponovo.'); });
    return () => { cancelled = true; if (preview) URL.revokeObjectURL(preview); };
  }, [open, attempt, title, section, path, imageSrc, credit, link]);
  let canShare = false;
  try { canShare = !!(result && typeof navigator.share === 'function' && navigator.canShare?.({ files: [result.file] })); } catch { /* Use download. */ }
  async function copy() {
    try { await navigator.clipboard.writeText(link); setMessage('Link je kopiran. Dodaj ga u Instagram kroz Link sticker.'); storyTrack('instagram_article_link_copy', path); }
    catch { linkRef.current?.focus(); linkRef.current?.select(); setMessage('Kopiranje nije dozvoljeno u ovom pregledaču. Označi i kopiraj link iz polja.'); }
  }
  async function share() {
    if (!result || !canShare || sharing) return;
    setSharing(true); setMessage('');
    try {
      // Prepared file + direct click preserve transient activation, especially in Safari.
      const pending = navigator.share({files:[result.file]});
      storyTrack('instagram_share_sheet_open', path);
      await pending;
      setMessage('Sistemsko deljenje je završeno. Link dodaj zasebno kroz Link sticker.');
    } catch (err) {
      if (!(err instanceof DOMException && err.name === 'AbortError')) setMessage('Deljenje nije dostupno. Sačuvaj sliku, pa je dodaj u Instagram Story.');
    } finally { setSharing(false); }
  }
  if (!link) return null;
  return <Dialog open={open} onOpenChange={value => {setOpen(value); if (value) storyTrack('instagram_share_open', path);}}>
    <DialogTrigger asChild><button type="button" className={'nt-instagram-trigger ' + (theme === 'dark' ? 'nt-instagram-dark' : '')}><Instagram size={17} aria-hidden="true"/>Podeli na Instagramu</button></DialogTrigger>
    <DialogContent showCloseButton={false} className={'nt-story-dialog ' + (theme === 'dark' ? 'nt-instagram-dark' : '')}>
      <DialogClose className="nt-story-close" aria-label="Zatvori pripremu Storyja"><X size={22}/></DialogClose>
      <DialogTitle className="nt-story-title">Vest za tvoj Story</DialogTitle>
      <DialogDescription className="nt-story-help">Sačuvaj sliku i kopiraj link. Otvori Instagram Story, dodaj sliku i nalepi link pomoću Link sticker opcije.</DialogDescription>
      <div className="nt-story-workspace">
        <div className="nt-story-preview" aria-busy={!result && !error}>
          {result ? <img src={result.url} width={1080} height={1920} alt={'Pregled Story kartice: ' + title}/> : <div role="status">{error || 'Pripremam Story karticu…'}</div>}
        </div>
        <div className="nt-story-actions">
          <span className="nt-story-detail">1080 × 1920 · PNG</span>
          {result && <a className="nt-story-action" href={result.url} download={result.file.name} onClick={() => {storyTrack('instagram_story_download', path); setMessage('Ako se slika otvori u novom prikazu, zadrži prst na njoj i izaberi čuvanje slike.');}}><Download size={18} aria-hidden="true"/>Sačuvaj Story sliku</a>}
          {canShare && <button className="nt-story-action" disabled={sharing} onClick={share}><Share2 size={18} aria-hidden="true"/>Otvori meni za deljenje</button>}
          {error && <button className="nt-story-action" onClick={() => setAttempt(n=>n+1)}>Pokušaj ponovo</button>}
          <button className="nt-story-action" onClick={copy}><Copy size={18} aria-hidden="true"/>Kopiraj link vesti</button>
          <label className="nt-story-detail" htmlFor={linkId}>Link za Instagram sticker</label>
          <input ref={linkRef} id={linkId} className="nt-story-link" readOnly value={link} onFocus={e=>e.currentTarget.select()}/>
          <p className="nt-story-help">Prazan prostor pri dnu kartice ostavljen je za link. Instagram bira dostupne opcije deljenja; ova stranica ne objavljuje Story umesto tebe.</p>
          <p className="nt-story-status" role="status" aria-live="polite">{message}</p>
        </div>
      </div>
    </DialogContent>
  </Dialog>;
}
