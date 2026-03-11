const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  removeFromCart
} = require("../controllers/cartController");

// Add to cart
router.post("/add", addToCart);

// View cart
router.get("/:userId", getCart);

// Remove from cart
router.delete("/remove/:id", removeFromCart);

module.exports = router;