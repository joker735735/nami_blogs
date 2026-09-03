// scripts/new-zenn-article.js
import fs from "fs";
import path from "path";
import { randomBytes } from "crypto";

// ---------------------------
// slug を生成する関数（Zenn仕様の12文字の英数字）
// ---------------------------
function generateSlug() {
  // 6バイト = 12文字の16進数（英小文字+数字）
  return randomBytes(6).toString("hex");
}

// ---------------------------
// 記事テンプレート（初学者の学習ログ向け）
// ---------------------------
function createArticleContent() {
  return `---
title: ""
emoji: "📝"
type: "tech"
topics: []
published: false
---

## 概要（何をやったか / 学んだこと）
- 

## つまずいたところ & 解決策
### エラーや疑問
\`\`\`bash
# 発生したエラーログやコマンド
\`\`\`

### 原因・対処
:::message
**💡 学び・原因**
ここに原因や解決した理由を簡潔に書く
:::

## 参考リンク / ひとことメモ
- [参考記事タイトル](URL)
`;
}

// ---------------------------
// メイン処理
// ---------------------------
function createZennArticle() {
  try {
    const slug = generateSlug();
    const articlesDir = path.resolve("articles");
    const filePath = path.join(articlesDir, `${slug}.md`);

    // ディレクトリがなければ作成
    if (!fs.existsSync(articlesDir)) {
      fs.mkdirSync(articlesDir, { recursive: true });
    }

    const content = createArticleContent();
    fs.writeFileSync(filePath, content, "utf8");

    console.log(`✅ Created: ${filePath}`);
  } catch (err) {
    console.error("❌ Error creating article:", err);
  }
}

// スクリプト実行
createZennArticle();
