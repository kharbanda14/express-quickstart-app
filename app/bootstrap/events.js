const { eventListeners } = require("../events/index");
const { events } = require("express-quickstart-package");
const { debug } = require("express-quickstart-package").logger;

for (const eventName in eventListeners) {
  debug(`Registering event listener for : ${eventName} `);
  for (const listener of eventListeners[eventName]) {
    events.addListener(eventName, listener);
  }
}
