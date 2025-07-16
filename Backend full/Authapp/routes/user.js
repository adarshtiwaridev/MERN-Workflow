const express = require("express");
const route = express.Router();

const { login, signup } = require("../Controllers/Auth");
const { Auth, Isstudent, IsAdmin } = require("../Middleware/Authmiddleware");

// Test route
route.get("/Test", Auth, (req , res) => {
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

module.exports = route;
