const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  user_id: String,
  products: [
    {
      product_id: String,
      quantity: Number
    }
  ]
});

module.exports = mongoose.model("Cart", cartSchema);