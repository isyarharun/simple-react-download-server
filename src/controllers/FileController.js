const services = require("../services");
const fs = require("fs");
const path = require("path");
module.exports = {
  async generateText(req, res) {
    let uploadPath = path.join(
      __dirname,
      "..",
      "..",
      "generatedFiles",
      "testFile.txt"
    );
    let generatedText = services.generateText();
    fs.writeFileSync(uploadPath, generatedText);
    res.send({ status: "uploaded" });
  },
};
