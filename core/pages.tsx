/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, renderToString } from "https://deno.land/x/jsx/mod.ts"
import { type blog_settings } from "./mod.ts"
import { markdown as md } from "./utils/index.ts"

type postArgs={
  settings: blog_settings,
  markdown: string,
  name: string,
}
export function Header({settings}){
  return (<div>
    <h1><b>{settings.auther}</b></h1>
  </div>)
}
export async function layout(children){
  return (<html>
    <head>
    </head>
    <body>
      {children}
    </body>
  </html>)
}
export async function post({ settings, html, file, yaml }: postArgs){
  const letter=<div class="letter" dangerouslySetInnerHTML={{
    __html: html
  }} />;
  return layout(<div>
    <Header settings={settings}/>
    <a href="/" class="back-to-home">←&nbsp;Back</a>
    {letter}
  </div>)
}
