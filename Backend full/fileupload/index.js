const express = require("express");
const app = express();
require("dotenv").config();

// DB connection
const { connect } = require("./config/db");

// JSON parser
app.use(express.json());

// File upload middleware
const fileUpload = require("express-fileupload");
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/temp/',
}));

// Cloudinary connection
const cloudinary = require("./config/cloudniry");
cloudinary.cloudinaryconnect();

// Routes
const userRoutes = require("./routes/file");
app.use("/api/v1/UserRoutes", userRoutes); // ✅ Route prefix fixed here

// Server start
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
