const express = require("express");

const {validation, authenicate} = require("../middlewares");
const {user: {joiSchema}} = require("../models/schemas");
const {auth: ctrl} = require("../controllers");

const router = express.Router();

router.post("/signup", validation(joiSchema), ctrl.signup);
// router.post("/register", ctrl.register);

router.get("/verify/:verifyToken", ctrl.verifyEmail);

router.post("/signin", ctrl.signin);
// router.post("/login", ctrl.login);

router.get("/logout", authenicate, ctrl.logout);

module.exports = router;