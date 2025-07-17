const express = require("express");
const route = express.Router();

const { login, signup } = require("../Controllers/Auth");
const { Auth, Isstudent, IsAdmin } = require("../Middleware/Authmiddleware");

// ✅ Import your user model
const User = require("../Models/Userschema"); // adjust path if needed

// Test route
route.get("/Test", Auth, (req, res) => {
    res.json({
        success: true,
        message: "Welcome test"
    });
});

// Student route
route.get("/Student", Auth, Isstudent, (req, res) => {
    res.json({
        success: true,
        message: "Welcome Student"
    });
});

// Admin route
route.get("/Admin", Auth, IsAdmin, (req, res) => {
    res.json({
        success: true,
        message: "Welcome Admin"
    });
});

// Signup and login
route.post("/signup", signup);
route.post("/login", login);

// ✅ Check route (fix async/await and model usage)
route.get("/Cheack", Auth, async (req, res) => {
    try {
        const id = req.user.id;

        // ✅ Use correct model: User
        const user = await User.findById(id).select("-password"); // optionally exclude password

        res.status(200).json({
            success: true,
            user: user,
            message: "Welcome checker",
            id: id
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Error in check route",
            error: err.message
        });
    }
});

module.exports = route;
 