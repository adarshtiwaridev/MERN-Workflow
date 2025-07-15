const express = require("express");
const app = express();
 
require('dotenv').config();

const port = process.env.PORT || 5000; // ✅ 'PORT' should be in uppercase to match .env convention

// ✅ Corrected the path to the connect function
const { connect } = require("./config/data"); // Import connect function

// Middleware to parse JSON
app.use(express.json()); 

// Correctly import and use routes
const userRoutes = require("./routes/user");

app.use("/api/v1", userRoutes);

// Await database connection before starting server
const startServer = async () => {
    try {
        await connect();
        console.log("✅ Database connected successfully");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error("❌ Failed to connect to database, server not started", error);
        process.exit(1);
    }
};

startServer();
