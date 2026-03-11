const User = require("../models/User");

// register
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({
    name,
    email,
    password
  });

  await user.save();

  res.json({ message: "User registered successfully" });
};

// login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ message: "User not found" });
  }

  if (user.password !== password) {
    return res.json({ message: "Invalid password" });
  }

  res.json({ message: "Login successful", user });
};

module.exports = {
  registerUser,
  loginUser
};