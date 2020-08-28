# Validation

Validation provider uses the **[joi](https://www.npmjs.com/package/joi)** package for validating data.

## Validation middleware

> Helper middleware is used for validating the joi schema with `req.body` which terminates in case of invalidation or updates the `req.body` with validated data.

```javascript
const {
  validateRequestBody,
} = require("express-quickstart-framework").middleware;



app.get(validateRequestBody(joiSchemaCallback), (req,res) => {})

// joiSchemaCallback 

const joiSchemaCallback = (joi) => ({
  name: joi.string().required(),
});

```

## Validation Provider

```javascript
const { validator } = require("express-quickstart-framework");
```