'use strict';
function echo(event) {
  return Promise.resolve({
    messageText: event.message.text,
    senderId: event.sender.id
  });
}

module.exports = {
  reactToMessage: echo
};
