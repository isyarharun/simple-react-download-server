const fs = require("fs");
module.exports = {
  generateReport(filePath) {
    let readResult = fs.readFileSync(filePath, "utf8");
    let strings = readResult.split(",");
    let integers = [];
    let numbers = [];
    let alphaNumerics = [];
    let alphabets = [];
    for (let i = 0; i < strings.length; i++) {
      let current = strings[i];
      if (isInt(current)) {
        integers.push(current);
      } else if (!isNaN(current)) {
        numbers.push(current);
      } else if (isAlphabet(current)) {
        alphabets.push(current);
      } else {
        alphaNumerics.push(current);
      }
    }
    return {
      totalInteger: integers.length,
      totalNumber: numbers.length,
      totalAlphabet: alphabets.length,
      totalAlphanumeric: alphaNumerics.length,
    };
  },
};

function isInt(str) {
  return !isNaN(str) && Number.isInteger(parseFloat(str));
}

// https://stackoverflow.com/questions/4434076/best-way-to-alphanumeric-check-in-javascript
// answer no 2
// with some modification
function isAlphabet(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      return false;
    }
  }
  return true;
}
