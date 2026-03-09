const express = require("express");
const router = express.Router();

<<<<<<< HEAD
const productController = require("../controllers/productController");

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
=======
const { getProducts, addProduct } = require("../controllers/productController");

router.get("/products", getProducts);
router.post("/products", addProduct);
>>>>>>> c922a013a536e177f8873fc4c72035e3dfd6b4b5

module.exports = router;