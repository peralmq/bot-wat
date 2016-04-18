'use strict';

const safeEval = require('safe-eval');

function echo(event) {
  return new Promise((resolve, reject) => {
    let result;
    try {
      result = safeEval(event.message.text);
    } catch (error) {
      result = error.toString();
    }

    console.log(`Evaluated ${event.message.text} to ${result}.`);
    resolve({
      messageText: result,
      senderId: event.sender.id
    });
  });
}

module.exports = {
  reactToMessage: echo
};
