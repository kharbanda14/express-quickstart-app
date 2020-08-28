var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send({
    message: "API",
  });
});

router.use("/auth", require("./auth"));

module.exports = router;
