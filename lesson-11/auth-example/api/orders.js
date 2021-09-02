const express = require("express");

const {validation, authenicate} = require("../middlewares");
const {order: {joiSchema}} = require("../models/schemas");
const {orders: ctrl} = require("../controllers");

const router = express.Router();

router.get("/", authenicate, ctrl.getAll);

router.post("/", authenicate, validation(joiSchema), ctrl.add);

module.exports = router;