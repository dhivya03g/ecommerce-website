const Payment = require("../models/Payment");

const makePayment = async (req, res) => {
  try {
    const { userId, orderId, amount, paymentMethod } = req.body;

    const payment = new Payment({
      userId,
      orderId,
      amount,
      paymentMethod,
      paymentStatus: "Success"
    });

    await payment.save();

    res.json({
      message: "Payment successful",
      payment
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { makePayment };