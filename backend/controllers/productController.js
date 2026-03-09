const Product = require("../models/Product");

const getProducts = async (req, res) => {
<<<<<<< HEAD
  const products = await Product.find();
  res.json(products);
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

=======
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
>>>>>>> c922a013a536e177f8873fc4c72035e3dfd6b4b5
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

<<<<<<< HEAD
module.exports = { getProducts, getProductById };
=======
module.exports = { getProducts, addProduct };
>>>>>>> c922a013a536e177f8873fc4c72035e3dfd6b4b5
