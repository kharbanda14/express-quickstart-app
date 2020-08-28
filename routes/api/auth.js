var express = require("express");
var router = express.Router();

const expressAsyncHandler = require("express-async-handler");

const {
  validateRequestBody,
  requiresAuth,
} = require("express-quickstart-package").middleware;

const authValidations = require("../../app/validations/auth");

const authController = require("../../app/controllers/auth");

router.post(
  "/login",
  validateRequestBody(authValidations.login),
  expressAsyncHandler(authController.login)
);
router.post(
  "/register",
  validateRequestBody(authValidations.register),
  expressAsyncHandler(authController.register)
);
router.get(
  "/profile",
  requiresAuth(),
  expressAsyncHandler(authController.profile)
);

module.exports = router;
