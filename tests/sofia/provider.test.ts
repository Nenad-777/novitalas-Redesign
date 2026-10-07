import test from 'node:test';
import assert from 'node:assert/strict';
import { freeProviderReady, generatePrivateStructure } from '../../server/sofia/groq';
import handler from '../../api/sofia-shift';

test('never sends a thought before free-tier and privacy prerequisites are confirmed', async () => {
 const previous={...process.env}; const oldFetch=globalThis.fetch; let calls=0;
 try {
  process.env.VERCEL_ENV='preview'; delete process.env.GROQ_API_KEY;
  delete process.env.SOFIA_GROQ_FREE_CONFIRMED; delete process.env.SOFIA_GROQ_ZDR_CONFIRMED;
  globalThis.fetch=async()=>{calls++;throw new Error('Must not call provider')};
  assert.equal(freeProviderReady(),false);
  const health=await handler.fetch(new Request('https://preview.test/api/sofia-shift'));
  assert.equal((await health.json()).available,false);
  await assert.rejects(()=>generatePrivateStructure('system','private thought',{},new AbortController().signal));
  const request=new Request('https://preview.test/api/sofia-shift',{method:'POST',headers:{Origin:'https://preview.test','Content-Type':'application/json','X-Sofia-Experiment':'0001'},body:'{"action":"model","thought":"private thought"}'});
  const response=await handler.fetch(request);assert.equal(response.status,503);assert.equal(request.bodyUsed,false);
  process.env.GROQ_API_KEY='test-key';assert.equal(freeProviderReady(),false);
  process.env.SOFIA_GROQ_FREE_CONFIRMED='1';assert.equal(freeProviderReady(),false);
  process.env.SOFIA_GROQ_ZDR_CONFIRMED='1';assert.equal(freeProviderReady(),true);
  assert.equal(calls,0);
 } finally { globalThis.fetch=oldFetch; for(const k of Object.keys(process.env))if(!(k in previous))delete process.env[k];Object.assign(process.env,previous); }
});

test('quota failures stop without retry, provider fallback, or upstream error disclosure', async () => {
 const previous={...process.env};const oldFetch=globalThis.fetch;let calls=0;
 try {
  Object.assign(process.env,{VERCEL_ENV:'preview',GROQ_API_KEY:'test-key',SOFIA_GROQ_FREE_CONFIRMED:'1',SOFIA_GROQ_ZDR_CONFIRMED:'1'});
  globalThis.fetch=async(url,options)=>{calls++;assert.equal(url,'https://api.groq.com/openai/v1/chat/completions');assert.equal(options?.cache,'no-store');return new Response('secret upstream content',{status:429});};
  const response=await handler.fetch(new Request('https://preview.test/api/sofia-shift',{method:'POST',headers:{Origin:'https://preview.test','Content-Type':'application/json','X-Sofia-Experiment':'0001'},body:JSON.stringify({action:'model',thought:'Mislim da će projekat uspeti.'})}));
  const body=await response.text();assert.equal(response.status,503);assert.match(body,/AI_BUSY/);assert.doesNotMatch(body,/secret upstream content/);assert.equal(calls,1);assert.match(response.headers.get('Cache-Control')||'',/no-store/);
 } finally {globalThis.fetch=oldFetch;for(const k of Object.keys(process.env))if(!(k in previous))delete process.env[k];Object.assign(process.env,previous);}
});
