System.register([], (function () {
  'use strict';
  return {
    execute: (function () {

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

    })
  };
}));
