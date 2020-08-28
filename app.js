var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const passport = require("express-quickstart-package/providers/auth");

const loggerLib = require("express-quickstart-package/providers/logger");

require("./app/bootstrap");

var indexRouter = require("./routes/index");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/storage",
  express.static(path.join(__dirname, "storage/data/public"))
);

app.use(passport.initialize());

app.use(fileUpload({ abortOnLimit: true }));

app.use("/", indexRouter);

app.use((error, req, res, next) => {
  loggerLib.log({
    level: "error",
    message: error.message,
    stack: error.stack,
  });
  return res
    .status(error.code || 500)
    .send({ status: false, message: error.message, data: error.data || {} });
});

module.exports = app;
