import { Hono } from "https://deno.land/x/hono@v3.1.5/mod.ts";
import { serveStatic } from "https://deno.land/x/hono@v3.1.5/middleware.ts";
import { serve } from 'https://deno.land/std/http/server.ts';
import indexpage from "./core/indexpage.tsx";
import postpage from "./core/postpage.tsx";
import sitemap from "./core/sitemap.ts";

const app = new Hono();

app.get('/sitemap',async c=>{
  return c.body(await sitemap());
})
app.get('/',async c=>{
  try{
    return c.html(await indexpage());
  }catch(e){
    return c.text(e.stack)
  }
})
app.get('/style.css', async c=>{
  return c.body(await Deno.readTextFile("./style.css"))
})
app.get('/posts/:name',async c=>{
  return c.html(await postpage(c));
})
app.use('/*',serveStatic({
  root: "./static"
}))

serve(app.fetch)
