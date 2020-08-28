# Authentication

The framework has already configured the following modules
- [passport](https://www.npmjs.com/package/passport)
- [passport-jwt](https://www.npmjs.com/package/passport-jwt)

## Usage

### Authentication Provider

```javascript
const { auth } = require("express-quickstart-framework"); // instance of passport.PassportStatic
```

You are free to configure, add more strategies to your passport as per your needs.

### Authenticating Request

Routes that needs authentication, helper method **requiresAuth()** is already present, which calls the passport's authenticate method.

```javascript
const {
  requiresAuth,
} = require("express-quickstart-framework").middleware;

router.get(
  "/profile",
  requiresAuth(),
  (req,res) => res.send(req.user)
);
```

## Configuration

The secret key for generating token can be configured in **.env** file.

```env
APP_SECRET="thesecretkey"
```