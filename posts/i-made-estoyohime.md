---
date: 2023-4-7
key: 20230407#0
title: esToyohimeっていうJavaScriptライブラリ生成器を作りました
---
# esToyohimeっていうJavaScriptライブラリ生成器を作りました

「esToyohime」というライブラリ生成器を作りました。バンドル処理には、[esbuild](https://esbuild.github.io)を使用しています。  
レポジトリ: https://github.com/nakasyou/esToyohime

ロゴはこんな感じです:  
![esToyohime logo](https://raw.githubusercontent.com/nakasyou/esToyohime/main/assets/estoyohime.svg)

うさぎはcc0の画像から取ってきました。
[Turbowarp](https://turbowarp.org)で編集しました。
## なんで作ったの？
今、私は、[KaguraJS](https://github.com/nakasyou/KaguraJS)というゲームフレームワークを作っています。
そのフレームワークを作るのに、必要だと考えたからです。
### 単体esbuildとかRollupとかあるじゃん！
Rollup.js等も考えました。でも、私は、esToyohimeを作成しました。
なぜかというと、**`node_modules`が大嫌い**だからです。
`node_modules`は、依存ライブラリを追加するときの、`npm i`をするたびに大きくなります。
`node_modules`は、Node.jsで開発するときに、いつもストレスになっていました。
私の開発用のノートパソコンは、SSDで、いつも容量限界です。それが嫌なので、私はesToyohimeを作りました。
### Denoで動いています
esToyohimeは、[Deno](https://deno.land)で動きます。Denoは、**`node_modules`を使いません**。
私にとって、まさに神でした。
Rollupは、Node.jsで動きます。それが嫌なので、esToyohimeを作りました。
## bye npm
Denoで開発するので、npmとはおさらばです。
package.jsonも必要ありません！

しかし、今あるJavaScriptプロジェクトのほとんどが、npmに登録されていると感じます。
npmに登録しなければ、いけないような気がします。

Denoが開発している、[dnt](https://github.com/denoland/dnt)を内蔵しました！
これにより、npmのパッケージとしても生成できます！
## その他の特徴
### Realtime bundle
これは、ほとんど、esbuildのおかげで作ることが出来ました。esbuildのwatchをそのまま使っています。
### argment build
コマンドライン引数を使って、そのままバンドルできます。
esToyohimeの設定ファイルが、`build.ts`なら、`deno run -A build.ts --build`でビルドできます。
でも、ちょっとめんどくさいですね。
なので、`deno.json`のタスクランナーに登録すれば良いのです。
```json
{
  "tasks": {
    "build": "deno run -A build.ts --build",
    "dev": "deno run -A build.ts --watch",
    "npm": "deno run -A build.ts --npm"
  }
}
```
こうすれば、`deno task build`ですみます。
## まとめ
こんな感じのものを作ってみました。
まだ使える段階ではありませんが、だんだんと成長させていきたいです。

以上。
