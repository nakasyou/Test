import { getPostDatas } from "./indexpage.ts";
//import { Sitemap } from "https://deno.land/x/deno_sitemap@0.1.2/mod.ts";

export default async function(){
  const datas = await getPostDatas();
  const sitemap = new Sitemap("https://nakasyou.deno.dev");
  return sitemap.sitemap;
}
