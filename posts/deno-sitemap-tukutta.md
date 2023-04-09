---
date: 2023-4-8
key: 20230408#1
title: Denoの動的sitemap.xml生成器を作った
desc: a
---
# Denoの動的sitemap.xml生成器を作った
このブログには、`sitemap.xml`がありませんでした。
正直、実装がめんどうでした。
なので、どうせ作るならライブラリを作ったほうが使い回しが効くということで、作りました。

その名も、<b>deno_sitemap</b>です！！(そのまま)
- レポジトリ: https://github.com/nakasyou/deno_sitemap 
- Deno: https://deno.land/x/deno_sitemap
## 簡単
使い方は超簡単。
#### 1. まず、インポートしますね。
```ts
import { Sitemap } from "https://deno.land/x/deno_sitemap/mod.ts";
```
#### 2. サイトマップのインスタンスを作りますね。引数にはベースのURLを指定しますね。
```ts
const sitemap: Sitemap = new Sitemap("https://example.com");
```
#### 3. サイトマップに追加していきますね。
```ts
sitemap.add("info");
sitemap.add("news",{
  lastmod: "2023-04-08",
  priority : 0.9,
  changefreq: "daily",
});
```
sitemap.xmlの仕様である、`lastmod`や`priority`、`changefreq`も使えます。
#### 4. サイトマップを取得します。
```ts
console.log(sitemap.sitemap)
```
#### 5. すると...
こんなxmlが出力されます。本来はminifyされてるので、軽いですね。
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>https://example.com/info</loc>
   </url>
   <url>
      <loc>https://example.com/news</loc>
      <lastmod>0.9</lastmod>
   </url>
</urlset>
```
## まとめ
~~この記事書いている途中でバグ見つけたとか言えない~~

