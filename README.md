# bot-wat
Hi, I'm a messenger bot based on Gary Bernhardt's Wat talk (https://www.destroyallsoftware.com/talks/wat). I'm the REPL of bots. Feed me some JavaScript.

<img src="https://cloud.githubusercontent.com/assets/238536/14655393/63c3978a-0682-11e6-9ccd-d77e7fee873c.gif">

Forked from https://github.com/peralmq/koa-facebook-messenger-echo-bot

# Deploy
Deploy to Heroku and set two environment variables
```
heroku create <app name>
heroku git:remote -a <app name>
heroku config set PAGE_TOKEN=<Facebook page token> VERIFY_TOKEN=<Facebook verification token> -a <app name>
```
Or just click:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

# Development
`npm test`
