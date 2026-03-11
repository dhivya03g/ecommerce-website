const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  userId: String,
  orderId: String,
  amount: Number,
  paymentMethod: String,
  paymentStatus: String,
  paymentDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Payment", paymentSchema);