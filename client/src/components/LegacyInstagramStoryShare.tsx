import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'wouter';
import InstagramStoryShare from './InstagramStoryShare';
import type { StoryArticle } from '@/lib/instagramStory';

// Adapter for the original custom article pages. No edits to individual stories.
export default function LegacyInstagramStoryShare() {
  const [path] = useLocation();
  const [target, setTarget] = useState<{ host: HTMLElement; article: StoryArticle } | null>(null);
  useEffect(() => {
    setTarget(null);
    if (!/^\/(geopolitika|srbija|kultura|nasa-planeta|obavestajni-izvori)\/[^/]+\/?$/.test(path) || document.querySelector('[data-story-article]')) return;
    const main = document.querySelector('main'); const heading = main?.querySelector('h1');
    if (!main || !heading) return;
    const root = main.closest('.min-h-screen') || main;
    const photo = root.querySelector<HTMLImageElement>('main img, section img');
    const host = document.createElement('div'); host.dataset.instagramLegacy = 'true';
    let anchor: Element = heading;
    if (photo) {
      anchor = photo.closest('figure') || photo.parentElement!;
      // Include a wrapping photograph container and its existing credit.
      if (anchor.parentElement && anchor.parentElement !== main && anchor.parentElement.tagName !== 'ARTICLE' && !anchor.parentElement.querySelector('h1') && anchor.parentElement.querySelectorAll('img').length === 1) anchor = anchor.parentElement;
      const next=anchor.nextElementSibling;
      if (next?.matches('figcaption,.photo-credit,.photo-caption')) anchor=next;
    }
    anchor.insertAdjacentElement('afterend', host);
    setTarget({host, article:{path,title:heading.textContent?.trim() || '',section:main.querySelector('.kicker')?.textContent?.trim() || path.split('/')[1].replaceAll('-',' '),imageSrc:photo?.getAttribute('src') || undefined,credit:root.querySelector('.photo-credit,figcaption')?.textContent?.trim()}});
    return () => host.remove();
  }, [path]);
  return target ? createPortal(<InstagramStoryShare article={target.article}/>,target.host) : null;
}
