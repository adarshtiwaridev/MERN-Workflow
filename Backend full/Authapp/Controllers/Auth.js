const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const User = require("../Models/Userschema");

// =================== Signup ====================
exports.signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, role } = req.body;

    // Input validation
    if (!name || !email || !password || !confirmPassword || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    // Check password match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({
      success: false,
      message: "Server error in signup",
    });
  }
};
// =================== Login ====================
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not registered",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    // Create payload and JWT token
    const payload = {
      id: user._id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    // Remove password from user object
    user.password = undefined;
    User.token=token;
    // Cookie options
    const options = {
      httpOnly: true,
      expires: new Date(Date.now() +  24*60*60*1000), // 2 hours
      secure: process.env.NODE_ENV === "production", // set secure only in production
    };

    // Send cookie and response
    res.cookie("token", token, options).status(200).json({
      success: true,
      message: "Login successful",
      user,
      token,
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during login",
    });
  }
};
