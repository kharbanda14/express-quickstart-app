const { eventListeners } = require("../events/index");
const { events } = require("express-quickstart-framework");
const { debug } = require("express-quickstart-framework").logger;

for (const eventName in eventListeners) {
  debug(`Registering event listener for : ${eventName} `);
  for (const listener of eventListeners[eventName]) {
    events.addListener(eventName, listener);
  }
}
