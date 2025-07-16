const jwt = require('jsonwebtoken');
require("dotenv").config();

// Auth middleware
exports.Auth = (req, res, next) => {
    try {
        // extract JWT token (better from headers for security)
        const token = req.body.token ;
  console.log(token)
        if (!token) {
            return res.status(400).json({
                success: false,
                message: "No token provided"
            });
        }

        // verify token
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log("Decoded token:", decoded);
            req.User = decoded;
        } catch (err) {
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            });
        }

        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

// Check if user is a student
exports.Isstudent = (req, res, next) => {
    try {
        if (req.body.role !== "student") {
            return res.status(401).json({
                success: false,
                message: "You are not a student"
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role check failed"
        });
    }
};

// Check if user is an admin
exports.IsAdmin = (req, res, next) => {
    try {
        if (req.body.role !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "You are not an admin"
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role check failed"
        });
    }
};
