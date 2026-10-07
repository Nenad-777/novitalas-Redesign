// Inference is enabled only after the owner confirms FREE tier and ZDR in Groq.
// These flags are deployment prerequisites, not a substitute for provider settings.
export const freeProviderReady = () => Boolean(
  process.env.GROQ_API_KEY && process.env.SOFIA_GROQ_FREE_CONFIRMED === '1' &&
  process.env.SOFIA_GROQ_ZDR_CONFIRMED === '1'
);

// Constrained decoding uses structural constraints; the original Zod schema
// subsequently enforces lengths and numeric bounds locally.
function structuralSchema(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(structuralSchema);
  if (value && typeof value === 'object') return Object.fromEntries(
    Object.entries(value).filter(([key]) => !['$schema','minLength','maxLength','pattern','minimum','maximum','minItems','maxItems'].includes(key))
      .map(([key, item]) => [key, structuralSchema(item)])
  );
  return value;
}

export async function generatePrivateStructure(system: string, prompt: string, schema: unknown, signal: AbortSignal) {
  if (!freeProviderReady()) throw new Error('PROVIDER_NOT_READY');
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method:'POST', cache:'no-store', signal,
    headers:{'Content-Type':'application/json',Authorization:`Bearer ${process.env.GROQ_API_KEY}`},
    body:JSON.stringify({
      model:'openai/gpt-oss-120b',
      messages:[{role:'system',content:system},{role:'user',content:prompt}],
      max_completion_tokens:3500, reasoning_effort:'low',
      response_format:{type:'json_schema',json_schema:{name:'sofia_structure',strict:true,schema:structuralSchema(schema)}}
    })
  });
  if (!response.ok) {
    // Do not read, retain, log, or return upstream diagnostic bodies.
    await response.body?.cancel();
    throw Object.assign(new Error('PROVIDER_REQUEST_FAILED'),{statusCode:response.status});
  }
  const data = await response.json();
  const choice = data?.choices?.[0];
  if (choice?.finish_reason !== 'stop' || typeof choice?.message?.content !== 'string') throw new Error('INCOMPLETE_STRUCTURE');
  return JSON.parse(choice.message.content);
}
