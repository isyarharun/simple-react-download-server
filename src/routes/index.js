const FileController = require("../controllers/FileController");
module.exports = (app) => {
  app.get("api/generate", FileController.generateText);
};
