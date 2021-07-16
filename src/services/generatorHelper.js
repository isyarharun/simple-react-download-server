const randomstring = require("randomstring");

module.exports = {
  generateRandomString(size) {
    return generateRandomData(size);
  },
};

function generateRandomData(size) {
  let string = "";

  while (size > byteLength(string)) {
    string += generateString() + ",";
  }

  return string;
}

// https://stackoverflow.com/questions/5515869/string-length-in-bytes-in-javascript
function byteLength(str) {
  var s = str.length;
  for (var i = str.length - 1; i >= 0; i--) {
    var code = str.charCodeAt(i);
    if (code > 0x7f && code <= 0x7ff) s++;
    else if (code > 0x7ff && code <= 0xffff) s += 2;
    if (code >= 0xdc00 && code <= 0xdfff) i--;
  }
  return s;
}

function generateString() {
  let alphaNumerics = randomstring.generate({
    length: 1000,
    charset: "alphanumeric",
  });
  let alphabetics = randomstring.generate({
    length: 1000,
    charset: "alphabetic",
  });
  let integers = randomstring.generate({
    length: 10,
    charset: "numeric",
  });
  let numbers = generateNumber(5000, 6000);
  return `${alphaNumerics},${alphabetics},${integers},${numbers}`;
}

// https://dirask.com/posts/JavaScript-how-to-get-random-double-between-2-numbers-xpJl71
function generateNumber(min, max) {
  if (min > max) {
    throw new Error("Minimum value should be smaller than maximum value.");
  }
  var range = max - min;
  return min + range * Math.random();
}
