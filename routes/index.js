var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send({
    message: "Welcome to Express Quickstart",
  });
});

router.use("/api", require("./api/index"));

module.exports = router;
