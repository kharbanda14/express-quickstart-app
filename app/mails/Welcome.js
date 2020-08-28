const { MailAble } = require("express-quickstart-package").email;

module.exports = class Welcome extends MailAble {
  viewFile = "emails/welcome.pug";

  constructor(user) {
    super();
    this.to = user.email;
    this.subject = "Welcome to application";
    this.user = user;
    this.data = {
      user: user,
    };
  }

  text() {
    return `Hello ${this.user.name}, Thanks for signing up!`;
  }
};
