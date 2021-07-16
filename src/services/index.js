const generatorHelper = require("./generatorHelper");
const reportHelper = require("./reportHelper");
module.exports = {
  generateText() {
    return generatorHelper.generateRandomString(2097152);
  },
  generateReport(filePath) {
    return reportHelper.generateReport(filePath);
  },
};
