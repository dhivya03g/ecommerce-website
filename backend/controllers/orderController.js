const Order = require("../models/Order");

const createOrder = async (req, res) => {
  try {
    const { userId, products, totalPrice } = req.body;

    const order = new Order({
      userId,
      products,
      totalPrice
    });

    await order.save();

    res.json({ message: "Order placed successfully", order });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createOrder };