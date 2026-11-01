import { test } from 'node:test';
import assert from 'node:assert/strict';
import { storyLink, wrapText, storyTrack } from '../client/src/lib/instagramStory';
import handler from '../api/story-image';
import { articleMeta } from '../shared/articleMeta';
import { seoData } from '../shared/seo';

test('canonical origin and article path, with only Instagram UTM parameters', () => {
  const u=new URL(storyLink('/kultura/vest?utm_source=wrong&secret=no#part'));
  assert.equal(u.origin,'https://novitalas.org'); assert.equal(u.pathname,'/kultura/vest');
  assert.equal(u.search,'?utm_source=instagram&utm_medium=social&utm_campaign=story_share'); assert.equal(u.hash,'');
  for(const path of ['https://evil.example/vest','//evil.example/vest','/izdanja/2026-09','/']) assert.throws(()=>storyLink(path));
});
test('wrapping preserves very long headlines and unbroken words without overflow', () => {
  const ctx={measureText:(s:string)=>({width:Array.from(s).length*12})} as CanvasRenderingContext2D;
  for(const text of ['Kratak naslov', 'Čitljiv naslov sa ćirilicom: Пример. '.repeat(20), 'A'.repeat(160)]) {
    const lines=wrapText(ctx,text,240); assert(lines.every(line=>ctx.measureText(line).width<=240));
    assert.equal(lines.join('').replace(/\s/g,''),text.replace(/\s/g,''));
  }
});
test('analytics sends article ID only, and is optional', () => {
  const calls: unknown[]=[];
  (globalThis as any).window={va:(...args:unknown[])=>calls.push(args)};
  storyTrack('instagram_share_open','/srbija/vest?private=discard');
  assert.deepEqual(calls,[['event',{name:'instagram_share_open',data:{article:'/srbija/vest'}}]]);
  (globalThis as any).window={}; assert.doesNotThrow(()=>storyTrack('instagram_share_open','/srbija/vest'));
});
function response() {
  return {code:0,body:undefined as unknown,headers:{} as Record<string,string>,status(n:number){this.code=n;return this;},send(body:unknown){this.body=body;},setHeader(k:string,v:string){this.headers[k]=v;}};
}
test('image endpoint rejects arbitrary URLs and non-GET requests before fetch', async()=>{
  const old=globalThis.fetch; let fetched=false;
  globalThis.fetch=async()=>{fetched=true;throw new Error('unexpected');};
  try {
    const res=response();await handler({method:'GET',query:{path:'/srbija/vest',src:'http://127.0.0.1/secret'}},res);assert.equal(res.code,404);assert.equal(fetched,false);
    const post=response();await handler({method:'POST',query:{}},post);assert.equal(post.code,405);
  } finally {globalThis.fetch=old;}
});
const entry = Object.entries(articleMeta).map(([path,m])=>({path,src:m.imageSrc})).concat(Object.entries(seoData).map(([path,m])=>({path,src:m.ogImage}))).find(m=>m.src.startsWith('https://upload.wikimedia.org/'))!;
test('registered image returned with correct type; redirects cannot reach private networks', async()=>{
  assert(entry); const old=globalThis.fetch;
  try {
    globalThis.fetch=async()=>new Response(new Uint8Array([1,2,3]),{headers:{'content-type':'image/jpeg'}});
    const ok=response();await handler({method:'GET',query:entry},ok);assert.equal(ok.code,200);assert.equal(ok.headers['Content-Type'],'image/jpeg');
    let calls=0;globalThis.fetch=async()=>{calls++;return new Response(null,{status:302,headers:{location:'http://169.254.169.254/latest'}});};
    const blocked=response();await handler({method:'GET',query:entry},blocked);assert.equal(blocked.code,502);assert.equal(calls,1);
    globalThis.fetch=async()=>new Response('<html/>',{headers:{'content-type':'text/html'}});
    const html=response();await handler({method:'GET',query:entry},html);assert.equal(html.code,502);
  }finally{globalThis.fetch=old;}
});

test('generator exports 1080×1920 and preserves portrait and landscape proportions', async()=>{
  const {generateStory}=await import('../client/src/lib/instagramStory');
  const drawn:number[][]=[]; const texts:{value:string,y:number}[]=[]; let canvas:any;
  let imageWidth=1600,imageHeight=900;
  const ctx={font:'',measureText:(s:string)=>({width:Array.from(s).length*Number(ctx.font.match(/(\d+)px/)?.[1]||20)*.5}),fillRect:()=>{},fillText:(value:string,_x:number,y:number)=>texts.push({value,y}),drawImage:(_i:unknown,...args:number[])=>drawn.push(args)};
  (globalThis as any).window={location:{origin:'https://novitalas.org',hostname:'novitalas.org'},setTimeout,clearTimeout};
  (globalThis as any).document={fonts:{load:async()=>[],check:()=>true},createElement:()=>canvas={getContext:()=>ctx,toBlob:(cb:(b:Blob)=>void)=>cb(new Blob(['png'],{type:'image/png'}))}};
  (globalThis as any).Image=class {naturalWidth=imageWidth;naturalHeight=imageHeight;onload=()=>{};set src(_s:string){queueMicrotask(()=>this.onload());}};
  for(const [w,h] of [[1600,900],[600,1200],[1200,1200]]) {
    imageWidth=w;imageHeight=h;drawn.length=0;texts.length=0;
    await generateStory({title:'Veoma dug naslov o međunarodnim odnosima i budućnosti Evrope '.repeat(4),section:'Geopolitika',path:'/geopolitika/test',imageSrc:'/news/test.jpg'});
    assert.equal(canvas.width,1080);assert.equal(canvas.height,1920);
    assert.equal(drawn.length,1);const [x,y,dw,dh]=drawn[0];assert(Math.abs(dw/dh-w/h)<.001);assert(x>=88&&y>=900&&y+dh<=1470);
    assert(!texts.some(t=>t.y>=1570&&t.y<1725));
  }
  drawn.length=0;await generateStory({title:'Vest bez fotografije',section:'Srbija',path:'/srbija/test'});assert.equal(drawn.length,0);
});
