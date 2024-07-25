'use strict';

var messages = {
  messages: {
    hello: "Hello, {name}!",
  },
};

const logError = (msg) => {
  console.error("--------error--------");
  console.error(msg);
  console.error("--------------------");
};

logError(messages.hello);
