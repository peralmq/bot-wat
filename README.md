# koa-facebook-messenger-echo-bot
Bot for Facebook Messenger that echoes everything. Written using [Koa 2](https://github.com/koajs/koa/tree/v2.x/docs) without Babel dependencies.

<img src="https://cloud.githubusercontent.com/assets/238536/14589969/5006ae38-04ef-11e6-98f3-1737c4a29fc2.png" width="300">

# Facebook Messenger Platform
Follow [this guide](https://developers.facebook.com/docs/messenger-platform/quickstart) to enable bots for a particular Facebook Page.

# Deploy
Deploy to Heroku and set two environment variables
```
heroku create <app name>
heroku git:remote -a <app name>
heroku config set PAGE_TOKEN=<Facebook page token> VERIFY_TOKEN=<Facebook verification token> -a <app name>
```

# Local development
`npm test`
