const path = require("path");
const fs = require("fs");

exports.localFileupload = (req, res) => {
  try {
    // ✅ Check if file is uploaded
    if (!req.files || !req.files.file) {
      return res.status(400).json({
        status: false,
        message: "No file uploaded",
      });
    }

    const file = req.files.file;

    // ✅ Ensure /files folder exists
    const dirPath = path.join(__dirname, "../files");
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }

    // ✅ Save file with timestamp
    const filePath = path.join(dirPath, `${Date.now()}_${file.name}`);

    file.mv(filePath, (err) => {
      if (err) {
        console.error("❌ File move error:", err);
        return res.status(500).json({
          status: false,
          message: "File move failed",
        });
      }

      return res.status(200).json({
        status: true,
        message: "File uploaded and saved locally",
        fileName: file.name,
        path: filePath,
      });
    });

  } catch (error) {
    console.error("❌ Upload error:", error);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};
