const express = require("express");
const app = express();
require("dotenv").config();
const { connect } = require("./config/data");

// Middleware to parse JSON
app.use(express.json());

// ✅ GET route to test in browser
app.get("/", (req, res) => {
    res.send("hello");
});

// ✅ POST route test (optional)
app.post("/", (req, res) => {
    res.status(200).json({ message: "✅ POST at / working", body: req.body });
});

// ✅ Import and use user routes
const userRoutes = require("./routes/user");
app.use("/api/v1", userRoutes);

// ✅ Start server after DB connect
const port = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connect();
        app.listen(port, () => {
            console.log(`🚀 Server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error("❌ Server failed to start:", err);
        process.exit(1);
    }
};

startServer();
