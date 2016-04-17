/* global it, describe */
'use strict';
require('should');

const bot = require('./bot');

describe('base bot', () => {
  describe('reactToMessage', () => {
    const testData = {
      message: {
        text: 'Hello!'
      },
      sender: {
        id: 1
      }
    };
    it('should return a Promise', done => {
      bot.reactToMessage(testData)
      .then(() => done());
    });
    it('should return an object with messageText and senderId', done => {
      bot.reactToMessage(testData)
      .then(actual => {
        actual.messageText.should.exist;
        actual.senderId.should.exist;
        done();
      });
    });
  });
});
