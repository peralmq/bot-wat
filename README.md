# bot-wat
Hi, I'm a messenger bot based on Gary Bernhardt's Wat talk (https://www.destroyallsoftware.com/talks/wat). I'm the REPL of bots. Feed me some JavaScript.

<img src="https://cloud.githubusercontent.com/assets/238536/14621056/86368f38-05c0-11e6-8094-5c0c37d04031.png" width="300">

Forked from https://github.com/peralmq/koa-facebook-messenger-echo-bot

# Deploy
Deploy to Heroku and set two environment variables
```
heroku create <app name>
heroku git:remote -a <app name>
heroku config set PAGE_TOKEN=<Facebook page token> VERIFY_TOKEN=<Facebook verification token> -a <app name>
```

# Development
`npm test`
