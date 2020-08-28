const models = require("express-quickstart-package/providers/models");
const { InvalidCredentials } = require("express-quickstart-package").exceptions;

module.exports = async (req, res, next) => {
  const User = await models.User.findOne({ email: req.body.email });

  if (!User) {
    throw new InvalidCredentials();
  }

  if (User.validatePassword(req.body.password)) {
    const jwtResponse = {
      access_token: User.generateAccessToken(),
    };
    return res.send(jwtResponse);
  }

  throw new InvalidCredentials();
};
