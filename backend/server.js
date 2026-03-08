const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");

const app = express();

connectDB();   // 🔴 very important

app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);

app.get("/", (req, res) => {
  res.send("E-commerce Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});