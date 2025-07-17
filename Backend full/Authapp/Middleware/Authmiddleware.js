const jwt = require('jsonwebtoken');
require("dotenv").config();

// ✅ Auth middleware
exports.Auth = (req, res, next) => {
    try {
        // ✅ Extract token from body, cookie, or Authorization header
        const token = req.body.token || req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "No token provided"
            });
        }

        // ✅ Verify token
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            req.user = payload; // Correct: use decoded payload here
        } catch (err) {
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            });
        }

        next(); // ✅ Continue to next middleware
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

// ✅ Student check middleware
exports.Isstudent = (req, res, next) => {
    try {
        if (req.user.role !== "student") {
            return res.status(403).json({
                success: false,
                message: "Access denied: Not a student"
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

// ✅ Admin check middleware
exports.IsAdmin = (req, res, next) => {
    try {
        if (req.user?.role !== "Admin") {
            return res.status(403).json({
                success: false,
                message: "Access denied: Not an admin"
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
