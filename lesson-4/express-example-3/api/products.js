const express = require("express");

const {validateProduct} = require("../middlewares");
const {products: ctrl} = require("../controllers");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", validateProduct, ctrl.add);

router.put("/:id", validateProduct, ctrl.update);

router.delete("/:id", ctrl.del);

module.exports = router;