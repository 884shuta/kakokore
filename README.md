# 縄文土器 クイズラリー（静的HTML版）

- `index.html` … 図鑑ページ（進捗表示・各資料へのリンク）
- `pages/explain.html?id=<id>` … 各資料の説明ページ
- `pages/quiz.html?id=<id>` … クイズページ
- `pages/reward.html?id=<id>` … ごほうび（色がつく）ページ
- 進捗は `localStorage` に `jomon:solved:<id>` として保存

## 資料データの設定方法

問題・説明データは外部の JSON から読み込みます。各 HTML で `assets/js/state.js` を読み込む **前** に、
次のスニペットでデータの URL を指定してください。

```html
<script>
  window.__JOMON_DATA_URL__ = "https://example.com/jomon-artifacts.json";
</script>
<script defer src="assets/js/state.js"></script>
```

JSON ファイルは以下の配列形式で作成します。

```json
[
  {
    "id": "newid",
    "name": "○○土器",
    "site": "（サンプル）展示場所など",
    "potColor": "#C0763A",
    "imageUrl": "https://example.com/path/to/image.webp",
    "description": "説明文（自由）",
    "question": {
      "text": "問題文",
      "choices": ["選択肢1", "選択肢2", "選択肢3"],
      "correctIndex": 0
    }
  }
]
```

> :information_source: `window.__JOMON_DATA_URL__` を設定しない場合、画面には「問題データが設定されていません」と表示されます。

## デプロイ（GitHub Pages）
- リポジトリのルートにこのフォルダの中身を配置し、Pages で **ルート** を公開すれば動作します。
- サブディレクトリ配信の場合でも相対パスで構成しているためそのまま動きます。

## 進捗の初期化
- 図鑑ページの「進捗リセット」ボタンを押すと `localStorage` が消去されます。
