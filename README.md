# bot-wat
Hi, I'm a messenger bot based on Gary Bernhardt's Wat talk (https://www.destroyallsoftware.com/talks/wat). I'm the REPL of bots. Feed me some JavaScript.

Forked from https://github.com/peralmq/koa-facebook-messenger-echo-bot

# Deploy
Deploy to Heroku and set two environment variables
```
heroku create <app name>
heroku git:remote -a <app name>
heroku config set PAGE_TOKEN=<Facebook page token> VERIFY_TOKEN=<Facebook verification token> -a <app name>
```

# Local development
`npm test`
