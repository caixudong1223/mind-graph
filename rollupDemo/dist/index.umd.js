(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

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

}));
