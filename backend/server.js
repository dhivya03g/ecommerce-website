const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

// routes
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect database
connectDB();

// test route
app.get("/", (req, res) => {
  res.send("E-commerce Backend Running");
});

// product routes
app.use("/api/products", productRoutes);

// user routes
app.use("/api/users", userRoutes);

// port
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});