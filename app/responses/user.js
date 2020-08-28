const { TransformResponse } = require("express-quickstart-framework").response;

module.exports = class UserResponse extends TransformResponse {
  static toArray(user) {
    return {
      id: user._id,
      name: user.name,
      email: user.email,
    };
  }
};
