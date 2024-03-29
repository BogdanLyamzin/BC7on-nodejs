const express = require("express");

const {ctrlWrapper} = require("../helpers");
const {authors: ctrl} = require("../controllers");
const {joiSchema} = require("../models/schemas/author");
const {validation} = require("../middlewares");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", validation(joiSchema), ctrl.add);

router.put("/:id", ctrlWrapper(ctrl.update));

// router.delete("/:id", ctrl.del);

module.exports = router;