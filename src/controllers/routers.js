const express = require("express");
const FileController = require("./FileController");

const router = express.Router();
router.post("/generate", FileController.generateText);

module.exports = {
  router,
};
