const randomstring = require("randomstring");

module.exports = {
  generateText() {
    let alphaNumerics = randomstring.generate({
      charset: "alphanumeric",
    });
    let alphabetics = randomstring.generate({
      charset: "alphabetic",
    });
    let integer = randomstring.generate({
      charset: "numeric",
    });
    return `${alphaNumerics},${alphabetics},${integer}`;
  },
};
