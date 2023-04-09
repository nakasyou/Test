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
export async function getPostDatas(){
  const datas=[];
  const asyncs=[];
  for await (const file of expandGlob("./posts/*.md")){
    if(!file.isFile)return;
    asyncs.push(dataplus(datas,file));
  }
  await Promise.all(asyncs);
  datas.sort((a,b)=>(a.key<b.key) ? 1 : -1);
  return datas;
}
export default async function(){
  const datas = await getPostDatas();
  const jsx=<>
    <div class="desc">
      <div class="center">
      {config.desc}
      </div>
    </div>
    <div class="post-list">
    <ul>
      {
        datas.map(post=>{
          return <li class="post-about">
            <a href={`./posts/${post.name}`}>
              <div>
                <div>
                  <span class="post-date">{post.date}</span>
                  <span class="post-title">{post.title}</span>
                </div>
                <div>
                  <span>{post.desc}</span>
                <div>
              </div>
            </a>
          </li>
        })
      }
    </ul>
  </div>
  </>
  return await layout(jsx,{
    title: config.name,
    description: "nakasyouのブログです。",
  });
}
