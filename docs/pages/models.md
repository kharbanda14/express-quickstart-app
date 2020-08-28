# Models

Framework consist a model provider utility that scans the **app/models** directory add registers them.

All the models can be fetched using. It returns a object with

{modelName: mongooseModel}

```javascript
const {
  models,
} = require("express-quickstart-framework");

console.log(models); // object

// create new User
await (new models.User(data)).save()
```