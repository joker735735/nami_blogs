# Zenn CLI

* [📘 How to use](https://zenn.dev/zenn/articles/zenn-cli-guide)

&nbsp;

# 初期設定

初期設定のために以下のコマンドを実行してください。

## 1. リポジトリのクローン

以下のコマンドを実行すると ``nami_blogs/`` というフォルダが作成される。

```bash
git clone https://github.com/ootahomare/nami_blogs.git
```

## 2. node.js npm のインストール

以下のコマンドをターミナルで実行し node.js をインストールする。

```bash
winget install OpenJS.NodeJS.LTS
```

以下のコマンドでバージョンが表示されていたらインストール成功！

```bash
node -v
npm -v
```

## 3. zenn-cli のインストール

```bash
cd nami_blogs/
npm install zenn-cli
```

&nbsp;

# 記事の作成フロー

## 0. ローカルを最新化

以下のコマンドを実行して、ローカルリポジトリを最新化する

```bash
git pull --rebase origin main
```

## 1. コマンドでテンプレートを作成

記事のテンプレートを作成する場合は以下のコマンドを実行。
``/articles/`` 配下に ``article-xxx.md`` のファイルが生成される。

```bash
node scripts/new_zenn_article.js
```

## 2. 作成された記事を編集する

``title`` など必須項目は忘れずに。

## 3. published を true にする

これにより、即公開される。
時間指定で公開したい場合はここでは ``false`` にして、Zenn 側でタイマーを設定する。

## 4. git コマンドで push

いつもどおり、``git commit``, ``git push`` をして GitHub にプッシュをすると自動でブログが公開される。
