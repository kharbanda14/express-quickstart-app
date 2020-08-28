const models = require("express-quickstart-package/providers/models");
const { ValidationFailed } = require("express-quickstart-package").exceptions;
const events = require("express-quickstart-package/providers/events");

module.exports = async (req, res, next) => {
  const data = req.body;
  try {
    const user = new models.User(data);
    await user.save();
    events.emit("user.registered", user);
    return res.send(user);
  } catch (error) {
    if (error.code == 11000) {
      throw new ValidationFailed({ email: "Email already exists" });
    }
  }
};
