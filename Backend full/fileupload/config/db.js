const mongoose = require('mongoose');

require("dotenv").config();

exports.connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("✅ Database connected successfully");
    } catch (error) {
        console.error("❌ Database connection error:", error.message);
        process.exit(1); // Exit the app if DB connection fails
    }
};
