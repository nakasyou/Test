---
date: 2023-4-8
key: 20230408#0
title: utteranc.esならコメント欄が簡単に作れる！
desc: このブログに、コメント欄を導入しました。GitHub連携できるのです！技術系のブログには、utteranc.esがおすすめです。
---
# utteranc.esならコメント欄が簡単に作れる！
このブログに、コメント欄を導入しました。GitHub連携できるのです！

このブログを見ている人は、だいたい技術系の人のはずです。なので、GitHubアカウントを持っている人が多いのかも。
技術系のブログには、utteranc.esがおすすめです。
## 導入方法
[utteranc.es](https://utteranc.es)にアクセスします。
そこで、当てはまるものをチェックしていき、`<script>`タグを作っていきます。
私の場合、次のようなコードが出来ました。
```html
<script src="https://utteranc.es/client.js"
          repo="nakasyou/nakasyou.deno.dev"
          issue-term="pathname"
          label="site-comment"
          theme="github-light"
          crossorigin="anonymous"
          async>
</script>
```
こんなコードを自分のページに貼り付ければよいのです！簡単ですね。
でも、それだけでは動きません。
動かすには、[このGitHub apps](https://github.com/apps/utterances)をインストールする必要があります。
インストール先は、使うレポジトリです。
私の場合は、`nakasyou/nakasyou.deno.dev`にインストールしました。
すると、自分のサイトに、コメント欄が表示されます！！

コメントは、自動的に、レポジトリのIssueに書き込まれるようです。
とても便利ですね。
## まとめ
utteranc.esを使えば、簡単にコメント欄を作ることができます。


以上
