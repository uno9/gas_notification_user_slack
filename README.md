# 💻 GAS shift notification for slack
スプレッドシートに記載している今日の担当をslackに通知してくれる機能

## ✅ Requirements
- gas

## 🚀 Usage
▼したのファイル内容をコピーしてgasのスクリプトエディタに張り付けてください
[shift_notification.js](./shift_notification.js)

※一部変更が必要な部分あり
- slackのincommig webhookのURL
- slackの通知を投稿するチャンネル名
- slackに通知をするときの文言（カスタムしたい場合）
  - 文字化け防止のため、絵文字の部分は`:hand:`の書き方で指定してください
- スプレッドシートで今日の行中から取得したい列番号
## 🤝 reference
- [【SlackAPI】GASでpostMessageを叩いて、Slackにメッセージを投稿する方法まとめ](https://tanuhack.com/gas-slackapi-postmessage/)
- [Google Apps Scriptで今日の日付の行に一瞬で移動する方法](https://tdyu.hatenablog.jp/entry/2019/05/04/135847)

## 👤 Author
- Twitter: [@u_no_d2](https://twitter.com/u_no_d2)
- Github: [uno9](https://github.com/uno9)

