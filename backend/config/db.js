const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
<<<<<<< HEAD
    console.log("Database Connected");
  } catch (error) {
    console.error("Database error:", error);
=======

    console.log("Database Connected");
  } catch (error) {
    console.error(error);
>>>>>>> c922a013a536e177f8873fc4c72035e3dfd6b4b5
    process.exit(1);
  }
};

module.exports = connectDB;