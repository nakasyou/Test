---
date: 2023-4-23
key: 20230423#0
title: GitHub Actionsで、Denoのモジュールをキャッシュする
desc: GitHub ActionsでCI/CDをするとき、Denoプロジェクトが大きくなってくると、Denoモジュールのダウンロード時間が長くなってしまいます。すると、当然、Actionsの時間が長くなってしまいます。npmのキャッシュのように、Denoもキャッシュできたらなと思ったので、書きました。
lastmod: 2023-04-23
---
# GitHub Actionsで、Denoのモジュールをキャッシュする
## 結論
```yaml
      - name: Cache deno
        uses: actions/cache@v2
        with:
          key: deno-${{ hashFiles('**/*') }}
          restore-keys: deno
          path: /home/runner/.cache/deno
```
## 経緯
GitHub ActionsでCI/CDをするとき、
Denoプロジェクトが大きくなってくると、Denoモジュールのダウンロード時間が長くなってしまいます。
すると、当然、Actionsの時間が長くなってしまいます。

npmのキャッシュのように、Denoもキャッシュできたらなと思ったので、書きました。
## 解説
GitHub Actions(ubuntu)のDenoでの、キャッシュフィルタは、`/home/runner/.cache/deno`です。
