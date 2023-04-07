/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, renderToString } from "https://deno.land/x/jsx/mod.ts"
import Header from "./header.tsx";
import Head from "./head.tsx";

export default function(children, {title}){
  return (<>
    <html>
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="google-site-verification" content="ACaZWde-uW06btqxdWzZvgqHUw2T-27zvr8L89SI2z8" />
        <Head/>
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <link rel="stylesheet"
          href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/styles/base16/railscasts.min.css"/>
        <script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/highlight.min.js"></script>
        <script>hljs.initHighlightingOnLoad();</script>
        <title>{title}</title>
        <link rel="stylesheet" href="/style.css"/>
      </head>
      <body>
        <div style="position:fixed;width:100%;">
          <Header/>
        </div>
        <div style="height:2.8em"></div>
        {children}
        <div>
          &copy; 2023 nakasyou. All rights reserved. CC BY 4.0 LICENSE.
        </div>
      </body>
    </html>
  </>)
}
