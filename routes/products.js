const express = require("express");
const router = express.Router();

const {getProducts, getProduct, deleteProduct, updateProduct, createProduct} = require("../controllers/products.js")
router.route("/")
    .get(getProducts)
    .post(createProduct)

router.route("/:id")
    .get(getProduct)
    .delete(deleteProduct)
    .put(updateProduct)
module.exports = router;