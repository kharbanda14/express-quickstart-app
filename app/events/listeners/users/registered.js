const { queueEmail } = require("express-quickstart-framework").email;
const Welcome = require("../../../mails/Welcome");

module.exports = async (user) => {
  await queueEmail(new Welcome(user));
};
