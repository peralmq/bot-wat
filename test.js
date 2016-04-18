/* global it, describe */
'use strict';
require('should');

const bot = require('./bot');

describe('wat', () => {
  describe('reactToMessage', () => {
    it('should evaluate JavaSript expressions', done => {
      bot.reactToMessage({
        message: {text: '1+1'},
        sender: {id: 1}
      })
      .then(actual => {
        actual.messageText.should.equal(2);
        done();
      })
      .catch(done);
    });
    it('should handle unsafe expressions', done => {
      bot.reactToMessage({
        message: {text: 'process'},
        sender: {id: 1}
      })
      .then(actual => {
        actual.messageText.should.match(/process is not defined/);
        done();
      })
      .catch(done);
    });
  });
});
