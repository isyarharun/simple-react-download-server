const express = require("express");
const FileController = require("./FileController");

const router = express.Router();
router.post("/generate", FileController.generateText);
router.get("/download/:filename", FileController.downloadFile);
router.get("/report/:filename", FileController.generateReport);

module.exports = {
  router,
};
