const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user_id: String,
  products: Array,
  total_price: Number,
  payment_status: String,
  order_date: Date
});

module.exports = mongoose.model("Order", orderSchema);