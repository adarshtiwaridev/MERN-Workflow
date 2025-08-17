const path = require("path");
const fs = require("fs");
const cloudnary = require("cloudinary").v2;

// ✅ Cloudinary config
cloudnary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret  
});

// ✅ Upload local file
exports.localFileupload = (req, res) => {
  try {
    console.log(req.files);

    if (!req.files || !req.files.file) {
      return res.status(400).json({
        status: false,
        message: "No file uploaded",
      });
    }

    const file = req.files.file;
    const dirPath = path.join(__dirname, "../files");

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }

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

function isTypesupported(type, supportedTypes) {
  return supportedTypes.includes(type);
}

async function uploadFileTocloudnary(file, folder) {
  return await cloudnary.uploader.upload(file.tempFilePath, {
    folder: folder,
  });
}

// ✅ Upload image with validation and cloudinary
exports.localImageupload = async (req, res) => {
  try {
    const { name, tags, emails } = req.body;
    const file = req.files.file;

    const supportedFormats = ['jpg', 'jpeg', 'png', 'gif'];
    const filetype = file.name.split('.').pop().toLowerCase();
    const filetypeSupported = isTypesupported(filetype, supportedFormats);

    if (!filetypeSupported) {
      return res.status(400).json({
        status: false,
        message: "Unsupported file type. Please upload a JPEG, PNG, or GIF image.",
      });
    }

    const cloudinaryResponse = await uploadFileTocloudnary(file, "Backendprcactice");
    console.log("✅ Cloudinary Upload:", cloudinaryResponse);

    const dirPath = path.join(__dirname, "../images");
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }

    //connect databse
    const  Filedata = {
      name,
      tags,
      emails,
      image: response.secure_url,
    };
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
        message: "Image uploaded locally and to Cloudinary",
        localPath: filePath,
        cloudinaryUrl: cloudinaryResponse.secure_url,
      });
    });

  } catch (error) {
    console.error("❌ Image upload error:", error);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};
