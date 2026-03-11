const Cart = require("../models/Cart");

// Add product to cart
const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const cart = new Cart({
      userId,
      productId,
      quantity
    });

    await cart.save();

    res.json({ message: "Product added to cart" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// View cart items
const getCart = async (req, res) => {
  try {
    const carts = await Cart.find({ userId: req.params.userId });
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove product from cart
const removeFromCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.json({ message: "Product removed from cart" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart
};