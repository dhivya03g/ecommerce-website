const Product = require("../models/Product");

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};

// ⭐ ADD THIS
const addProduct = async (req, res) => {
  const { name, price, category, description, image } = req.body;

  const product = new Product({
    name,
    price,
    category,
    description,
    image
  });

  const savedProduct = await product.save();

  res.json(savedProduct);
};

module.exports = {
  getProducts,
  getProductById,
  addProduct
};