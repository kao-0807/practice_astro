
# 演習課題：Astro コンポーネントとデータ取り込み

### 最初に`pnpm install`を実行してください。

Astro起動コマンド
```shell
pnpm run dev
```

## 課題1：レイアウトテンプレートの作成

- `03_astro_component/src/layouts/BaseLayout.astro` を作成し、以下の構成を含めてください。
  - `<header>`：固定のナビゲーションバー
  - `<main><slot /></main>`：ページ内容を挿入
  - `<footer>`：固定フッター
- `03_astro_component/src/layouts/BaseLayout.astro` を `03_astro_component/src/index.astro`にインポートして、表示されるようにしてください
---

## 課題2：次回公演情報セクションのコンポーネント化

- `03_astro_component/src/components/UpcomingShow.astro` を作成し、propsで以下のデータを受け取るようにしてください。
  - `title`, `date`, `venue`, `summary`
- `03_astro_component/src/components/UpcomingShow.astro` を `03_astro_component/src/index.astro`にインポートして、以下のデータをpropsに渡してみてください。
  1. `title: ロミオとジュリエット, date: 2027/01/03, venue: 高崎芸術劇場, summary: とっても楽しいよ！`
  2. `title: オペラ座の怪人, date: 2028/10/14, venue: 大胡シャンテ マルエホール, summary: これはエキサイティン！`

### 表示例（Tailwind推奨）：
```
タイトル：XXX
日程：2025年12月12日
会場：高崎市文化会館
あらすじ：〜〜〜〜〜
```

---

## 課題3：劇団員データのMarkdown化とページ生成

- `03_astro_component/src/content/members/` 以下に3人分の `.md` ファイルを作成
- `03_astro_component/src/pages/members/[slug].astro` にて `getStaticPaths()` を使い、詳細ページを生成
