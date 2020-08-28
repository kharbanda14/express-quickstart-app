# Sending Emails

Application is configured with [nodemailer](https://www.npmjs.com/package/nodemailer) for sending email.

## Configuration

Use and tweak the following config values to start and send emails with SMTP. 

```env
MAIL_DRIVER="smtp"

SMTP_HOST="localhost"
SMTP_PORT="1025"
SMTP_USER=""
SMTP_PASSWORD=""

MAIL_FROM_NAME="LocalUser"
MAIL_FROM_EMAIL="admin@localhost.com"
```

!> Only SMTP configuration has been added for sending emails.


## Emails

### Mailables

As per the sample Email.

```javascript
const { MailAble } = require("express-quickstart-framework").email;

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
```

Welcome email extends the Mailable class, which is used as object that is passed to email sending function.

For sending instant emails, use the **sendEmail()** function.
```javascript
const { sendEmail } = require("express-quickstart-framework").email;

module.exports = async (user) => {
  await sendEmail(new Welcome(user));
};
```

You can also add attachments
```javascript
const { sendEmail } = require("express-quickstart-framework").email;

module.exports = async (user) => {
  const email = new Welcome(user);
  email.addFileAttachment(
    await storage.getFile("folder/filename.jpg")
  );
  await sendEmail(email);
};
```

However you also have the option to queue the emails to a redis Queue. **This queue is already configured and setup in the backend.**
```javascript
const { queueEmail } = require("express-quickstart-framework").email;

module.exports = async (user) => {
  await queueEmail(new Welcome(user));
};
```

### View files
Emails have support for rendering and send HTML templates with rendering engine using **Pug**.
The property `viewFile` tells which file needs to be rendered to send emails, 

> The `data` object is passed to the view files to be rendered.

#### View file
```pug
h1 Welcome To Application
p Hello #{user.name} thanks for signing up!!

```

