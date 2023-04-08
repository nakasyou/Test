/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, renderToString } from "https://deno.land/x/jsx/mod.ts"
import layout from "./layout.tsx";
import config from "../blagin.config.ts";
import md from "./utils/markdown.ts";
import exists from "./utils/exists.ts";
export default async function(c){
  const name=c.req.param("name");
  const path=`./posts/${name}.md`;
  if(!await exists(path))
    return "404";
  const text=await Deno.readTextFile(path);
  const mded=md(text);
  const { html, yaml }=mded;
  const postjsx=<div dangerouslySetInnerHTML={{
    __html: html
  }} />;
  return await layout((<>
    <div><a href="/" class="back-to-home">←&nbsp;Back</a></div>
    <div>Published: {yaml.date}</div>
    
    {postjsx}
  </>),{
    title: `${yaml.title} -${config.name}`,
    description: yaml.desc,
  });
}
