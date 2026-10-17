/**
 * NOVI TALAS — recover archived article metadata from existing published pages.
 * This is an indexer, not a publisher. It never modifies article pages, titles,
 * URLs, dates, editorial photographs or the production deployment.
 *
 * A month is only assigned when publication date is explicitly visible in the
 * article's own metadata (dateLabel/datePublished) or an existing news-page
 * "Datum" marker. Event dates inside a story never count.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";

const root = resolve(import.meta.dirname, "..");
const app = readFileSync(resolve(root,"client/src/App.tsx"),"utf8");
const output = resolve(root,"shared/archiveExtracted.json");
const reportPath = resolve(root,"shared/archiveExtracted.report.json");
const routePattern = /^\/(srbija|geopolitika|obavestajni-izvori|nasa-planeta)\/[^/]+$/;
const months = {
  januar:1, januara:1, februar:2, februara:2, mart:3, marta:3,
  april:4, aprila:4, maj:5, maja:5, jun:6, juna:6,
  jul:7, jula:7, avgust:8, avgusta:8, septembar:9, septembra:9,
  oktobar:10, oktobra:10, novembar:11, novembra:11,
  decembar:12, decembra:12
};

function literal(source,name) {
  const rx = new RegExp("\\bconst\\s+"+name+"\\s*(?::[^=;]+)?=\\s*([\"'\`])([\\s\\S]*?)\\1\\s*;");
  return source.match(rx)?.[2] ?? null;
}
function prop(source,name) {
  // Parse only an explicit JSX prop or reference to a simple literal const.
  const rx = new RegExp("\\b"+name+"\\s*=\\s*(?:\\\"([^\\\"]*)\\\"|'([^']*)'|\\{\\s*([A-Za-z_][A-Za-z0-9_]*)\\s*\\})");
  const m = source.match(rx);
  if (!m) return null;
  if (m[1]!==undefined) return m[1];
  if (m[2]!==undefined) return m[2];
  return literal(source,m[3]);
}
function isoFromText(raw) {
  if(!raw) return null;
  const text=raw.trim();
  const iso=text.match(/\b(2026)-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])\b/);
  if(iso)return iso[0];
  const m=text.match(/\b([1-9]|[12]\d|3[01])\.\s*([A-Za-zČĆŠĐŽčćšđž]+)\s+2026\./i);
  if(!m)return null;
  const month=months[m[2].toLowerCase()];
  if(!month)return null;
  const day=Number(m[1]);
  const dt=new Date(Date.UTC(2026,month-1,day));
  if(dt.getUTCMonth()!==month-1||dt.getUTCDate()!==day)return null;
  return "2026-"+String(month).padStart(2,"0")+"-"+String(day).padStart(2,"0");
}
function normalize(value) {
  return value?.replace(/\s+/g," ").trim() ?? "";
}
const imports=new Map([...app.matchAll(/import\s+([A-Za-z0-9_]+)\s+from\s+["']\.\/pages\/([^"']+)["']/g)].map(m=>[m[1],m[2]]));
const routeNodes=[...app.matchAll(/<Route\s+path=["']([^"']+)["']\s+component=\{([A-Za-z0-9_]+)\}/g)];
const routeMap=new Map();
for(const [,href,component] of routeNodes) if(routePattern.test(href)&&imports.has(component)&&!routeMap.has(href))routeMap.set(href,component);

const collected=[], unresolved=[], checked=[];
for(const [href,component] of routeMap) {
  const file="client/src/pages/"+imports.get(component)+".tsx";
  const full=resolve(root,file);
  if(!existsSync(full)){unresolved.push({href,file,reason:"article_source_missing"});continue;}
  const source=readFileSync(full,"utf8");
  const templateStart=source.indexOf("<ArticleTemplate");
  const template=templateStart===-1?"":source.slice(templateStart,source.indexOf("/>",templateStart)+2);
  let title=template?prop(template,"title"):null;
  let dateText=template?prop(template,"dateLabel")||prop(template,"datePublished"):null;
  let imageSrc=template?prop(template,"imageSrc"):null;
  let description=template?prop(template,"deck")||prop(template,"description"):null;
  let imageAlt=template?prop(template,"imageAlt"):null;
  if(template){
    // Resolve references to const declarations defined above the component.
    for(const field of ["title","dateLabel","datePublished","imageSrc","deck","description","imageAlt"]){
      const rx=new RegExp("\\b"+field+"\\s*=\\s*\\{([A-Za-z_][A-Za-z0-9_]*)\\}");
      const id=template.match(rx)?.[1];
      const val=id?literal(source,id):null;
      if(!val)continue;
      if(field==="title")title=val;
      else if(field==="dateLabel"||field==="datePublished")dateText=val;
      else if(field==="imageSrc")imageSrc=val;
      else if(field==="deck"||field==="description")description=val;
      else if(field==="imageAlt")imageAlt=val;
    }
  } else {
    // Non-template historical pages use explicit editorial constants.
    title=literal(source,"TITLE");
    imageSrc=literal(source,"IMAGE_SRC");
    description=literal(source,"DECK")||literal(source,"DESCRIPTION");
    const dateMarker=source.match(/\{\s*\/\*\s*Datum\s*\*\/\s*\}([\s\S]{0,1000})/i)?.[1];
    // Only a visibly labelled date is eligible, never dates embedded in body text.
    dateText=dateMarker?.match(/\b\d{1,2}\.\s*[A-Za-zČĆŠĐŽčćšđž]+\s+2026\./)?.[0]||null;
  }
  title=normalize(title);
  description=normalize(description);
  imageSrc=normalize(imageSrc);
  const publishedAt=isoFromText(dateText);
  const localImg=imageSrc.startsWith("/")?resolve(root,"client/public",imageSrc.slice(1)):null;
  const imagePresent=!!imageSrc && (!localImg || existsSync(localImg));
  checked.push({href,file,hasDate:!!publishedAt,hasTitle:!!title,hasImage:!!imageSrc,imagePresent});
  if(!publishedAt || !title || !imageSrc) {
    unresolved.push({href,file,reason:[!publishedAt&&"missing_verified_publication_date",!title&&"missing_title",!imageSrc&&"missing_image"].filter(Boolean).join(",")});
    continue;
  }
  // Missing image files are flagged, not silently replaced with unrelated art.
  if(!imagePresent) unresolved.push({href,file,reason:"source_image_missing; metadata_indexed_without_replacing_image",imageSrc});
  const category=href.split("/")[1];
  const section={"geopolitika":"Geopolitika","srbija":"Srbija","obavestajni-izvori":"Obaveštajni izvori","nasa-planeta":"Naša planeta"}[category];
  collected.push({
    href,category:section,title,description,
    imageSrc,imageAlt:normalize(imageAlt)||title,publishedAt
  });
}
collected.sort((a,b)=>b.publishedAt.localeCompare(a.publishedAt)||a.href.localeCompare(b.href));
mkdirSync(dirname(output),{recursive:true});
writeFileSync(output,JSON.stringify(collected,null,2)+"\n");
writeFileSync(reportPath,JSON.stringify({generatedAt:new Date().toISOString(),totalRoutes:routeMap.size,recovered:collected.length,missingDate:unresolved.filter(x=>x.reason?.includes("date")).length,missingImages:unresolved.filter(x=>x.reason?.includes("image")).length,unresolved},null,2)+"\n");
console.log("[NOVI TALAS ARCHIVE] routed="+routeMap.size+" recovered="+collected.length+" unresolved="+unresolved.length+" (no inferred dates)");

const monthlyTotals = {};
for (const article of collected) { const month=article.publishedAt.slice(0,7);monthlyTotals[month]=(monthlyTotals[month]||0)+1; }
console.log("[NT3 ARCHIVE MONTHS]",JSON.stringify(monthlyTotals));
for (const pending of unresolved) console.log("[NT3 ARCHIVE REVIEW]",pending.href,pending.reason);
// Archive catalog is regenerated before each build.
