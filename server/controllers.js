'use strict';
const querystring = require('querystring');
const request = require('request');

function requestp(options) {
  return new Promise((resolve, reject) => {
    request(options, (err, response) => {
      if (!err) {
        return resolve(response);
      }
      reject(err);
    });
  });
}

module.exports = function(
  PAGE_TOKEN,
  VERIFY_TOKEN,
  bot
) {
  function sendMessage(options) {
    if (options.senderId && options.messageText) {
      return requestp({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token: process.env.PAGE_TOKEN},
        method: 'POST',
        json: {
          recipient: {id: options.senderId},
          message: {text: options.messageText}
        }
      });
    }
    throw new Error('bot.reactToMessage needs to return senderId and messageText');
  }

  return {
    react: ctx => {
      const promises = ctx.request.body.entry
      .map(entry => {
        return entry.messaging
        .map(event => {
          return bot.reactToMessage(event)
          .then(sendMessage);
        });
      });

      Promise.all(promises)
      .then(_ => ctx.status = 200)
      .catch(_ => ctx.status = 500);
    },
    verify: ctx => {
      const query = querystring.parse(ctx.request.url);
      if (query['hub.verify_token'] === process.env.VERIFY_TOKEN) {
        ctx.body = query['hub.challenge'];
      } else {
        ctx.body = 'Bad verify_token';
      }
    }
  };
};
