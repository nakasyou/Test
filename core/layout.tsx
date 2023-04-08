/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, renderToString } from "https://deno.land/x/jsx/mod.ts"
import Header from "./header.tsx";
import { Head, SubFiles } from "./head.tsx";


export default async function(children, {title,description}){
  return "<!doctype HTML>"+await renderToString(<>
    <html lang="ja">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content={description}/>
        <meta name="google-site-verification" content="ACaZWde-uW06btqxdWzZvgqHUw2T-27zvr8L89SI2z8" />
        <Head/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
        <link rel="stylesheet"
          href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/styles/base16/railscasts.min.css"/>
        
        <title>{title}</title>
      </head>
      <body>
        <div style="position:fixed;width:100%;">
          <Header/>
        </div>
        <div style="height:2.8em"></div>
        {children}
        <div class="comment"></div>
        <div>
          &copy; 2023 nakasyou. All rights reserved. CC BY 4.0 LICENSE.
        </div>
        <SubFiles/>
        <script>
          const $utterances = document.getElementsByClassName("utterances")[0];
          const $comment = document.getElementsByClassName("comment")[0];
          $comment.appendChild($utterances);
        </script>
      </body>
    </html>
  </>)
}
