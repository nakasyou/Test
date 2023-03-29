/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, renderToString } from "https://deno.land/x/jsx/mod.ts"
import layout from "./layout.tsx";
import config from "../blagin.config.ts";
import { expandGlob } from "https://deno.land/std@0.181.0/fs/expand_glob.ts";
import { getYml } from "./utils/markdown.ts";

async function dataplus(datas,file){
  const text=await Deno.readTextFile(file.path);
  const { data }=getYml(text);
  datas.push({
    date: data.date,
    title: data.title,
    key: data.key,
    name: file.name.replace(".md",""),
  })
}
export default async function(){
  const datas=[];
  const asyncs=[];
  for await (const file of expandGlob("./posts/*.md")){
    if(!file.isFile)return;
    asyncs.push(dataplus(datas,file));
  }
  await Promise.all(asyncs);
  datas.sort((a,b)=>(a.key<b.key) ? 1 : -1);
  const jsx=<div class="center">
    <ul>
      {
        datas.map(post=>{
          return <li>
            <span>{
              post.date
            }</span>
            <a href={
              `./posts/${post.name}`
            }>{
              post.title
            }</a>
          </li>
        })
      }
    </ul>
  </div>
  return await renderToString(layout(jsx,{ title: config.name }));
}
