const express = require("express");
const router = express.Router();

const { localFileupload } = require("../controller/fileupload");

router.post("/upload", localFileupload); // ✅ /upload path

module.exports = router;
