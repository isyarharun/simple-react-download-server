const services = require("../services");
const fs = require("fs");
const path = require("path");
const randomstring = require("randomstring");
const { generateReport } = require("../services/reportHelper");
module.exports = {
  async generateText(req, res) {
    let fileName = randomstring.generate({
      length: 5,
      charset: "alphabetic",
    });
    let uploadPath = path.join(
      __dirname,
      "..",
      "..",
      "generatedFiles",
      `${fileName}.txt`
    );
    let generatedText = services.generateText();
    fs.writeFileSync(uploadPath, generatedText);
    res.send({ status: "uploaded", fileName: `${fileName}.txt` });
  },
  async downloadFile(req, res) {
    let fileName = req.params.filename;
    let filePath = path.join(__dirname, "..", "..", "generatedFiles", fileName);
    fs.readFileSync(filePath, "utf8");
    res.download(filePath);
  },
  async generateReport(req, res) {
    let fileName = req.params.filename;
    let filePath = path.join(__dirname, "..", "..", "generatedFiles", fileName);
    let report = services.generateReport(filePath);
    res.send(report);
  },
};
