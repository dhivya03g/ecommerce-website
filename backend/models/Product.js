const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
<<<<<<< HEAD
  category: String,
  description: String,
  image: String
=======
  description: String,
  category: String,
  image: String,
  stock: Number
>>>>>>> c922a013a536e177f8873fc4c72035e3dfd6b4b5
});

module.exports = mongoose.model("Product", productSchema);