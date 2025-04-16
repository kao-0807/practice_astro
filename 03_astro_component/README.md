
# 演習課題：Astro コンポーネントとデータ取り込み

## 課題1：レイアウトテンプレートの作成

- `src/layouts/BaseLayout.astro` を作成し、以下の構成を含めてください。
  - `<header>`：固定のナビゲーションバー
  - `<main><slot /></main>`：ページ内容を挿入
  - `<footer>`：固定フッター

---

## 課題2：次回公演情報セクションのコンポーネント化

- `src/components/UpcomingShow.astro` を作成し、propsで以下のデータを受け取るようにしてください。
  - `title`, `date`, `venue`, `summary`

### 表示例（Tailwind推奨）：
```
タイトル：XXX
日程：2025年12月12日
会場：高崎市文化会館
あらすじ：〜〜〜〜〜
```

---

## 課題3：劇団員データのMarkdown化とページ生成

- `src/content/members/` 以下に3人分の `.md` ファイルを作成
- `src/pages/members/[slug].astro` にて `getStaticPaths()` を使い、詳細ページを生成
