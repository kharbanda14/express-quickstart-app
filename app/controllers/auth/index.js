const login = require("./login");
const register = require("./register");

module.exports = {
  login,
  register,
  profile: (req, res, next) => {
    return res.send(req.user);
  },
};
