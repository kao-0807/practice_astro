
# 🎨 Tailwind CSS 練習課題

以下の演習は、Tailwind CSSの基本ユーティリティクラスを使って、実際の劇団サイトで使えそうなUIパーツを再現する練習です。

---

## ✏️ 課題1：劇団ロゴ＋ナビゲーションヘッダー

### 要素構成：
- ロゴ（テキスト）：左側に「新日本演劇」と表示
- ナビゲーション（右側）：「次回公演」「劇団紹介」「お問い合わせ」

### Tailwindのヒント：
- `flex justify-between items-center`
- `px-6 py-4 bg-gray-100 shadow`

---

## ✏️ 課題2：公演告知カード

### 要素構成：
- 公演タイトル（太字）
- 日時（中サイズ）
- 会場名（小サイズ、グレー）
- あらすじ（2〜3行の説明文）

### Tailwindのヒント：
- `bg-white rounded-lg shadow-md p-4`
- `text-xl font-bold`, `text-sm text-gray-500`
- `space-y-2`

---

## ✏️ 課題3：劇団員プロフィールカード（横並び）

### 要素構成：
- 左：丸型画像
- 右：名前（太字）と一言紹介（小サイズ）

### Tailwindのヒント：
- `flex items-center space-x-4`
- `rounded-full w-20 h-20 object-cover`
- `text-lg font-semibold`, `text-sm text-gray-600`

---

## 📄 保存形式の推奨：
- HTMLファイルとして保存
- Tailwind CDNを使ったシンプルな構成（ViteやAstro導入前提でなくてOK）

### 例：
```html
<script src="https://cdn.tailwindcss.com"></script>
```
