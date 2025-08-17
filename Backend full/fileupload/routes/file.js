const express = require("express");
const router = express.Router();

const { localFileupload ,localImageupload } = require("../controller/fileupload");

router.post("/upload", localFileupload); // ✅ /upload path
router.post("/localImageupload", localImageupload); // ✅ /upload path


module.exports = router;
