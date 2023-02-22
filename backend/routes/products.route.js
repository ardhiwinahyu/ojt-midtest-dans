const express = require("express");
const router = express.Router();
const { getAllProducts, getSingleProduct } = require("../controllers/products.contoller.js");

router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);

module.exports = router;
