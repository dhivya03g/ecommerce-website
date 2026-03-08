const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
.then(() => console.log("Database Connected"))
.catch(err => console.log(err));

const products = [];

for (let i = 1; i <= 100; i++) {
  products.push({
    name: `Laptop Model ${i}`,
    price: 40000 + i * 500,
    category: "Electronics",
    description: `High performance laptop model ${i}`,
    stock: 10 + i
  });
}

async function seedProducts() {
  await Product.insertMany(products);
  console.log("100 Products Inserted Successfully!");
  mongoose.connection.close();
}

seedProducts();