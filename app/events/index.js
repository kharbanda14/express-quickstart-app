const eventListeners = {
  "user.registered": [require("./listeners/users/registered")],
};

module.exports.eventListeners = eventListeners;
