# Responses

Responses are simple utilities that transforms a model object data.

## Usage

The following defines how to transform the data using `static toArray` method.

```javascript
const { TransformResponse } = require("express-quickstart-package").response;

module.exports = class UserResponse extends TransformResponse {
  static toArray(user) {
    return {
      id: user._id,
      name: user.name,
      email: user.email,
    };
  }
};

```

To get transformed data use

```javascript
UserResponse.map(UserObject); // for single object
UserResponse.mapCollection(UserObject); // for a collection of objects
```