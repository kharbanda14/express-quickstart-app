const { queueEmail } = require("express-quickstart-package").email;
const Welcome = require("../../../mails/Welcome");

module.exports = async (user) => {
  await queueEmail(new Welcome(user));
};
