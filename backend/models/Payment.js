const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  user_id: String,
  amount: Number,
  payment_method: String,
  payment_status: String,
  payment_date: Date
});

module.exports = mongoose.model("Payment", paymentSchema);