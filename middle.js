const assertArraysEqual = require('./assertArraysEqual');

const middle = function (arr) {
  let arrResult = [];
  if (arr.length >= 2) {
    if (arr.length % 2 === 0) {
      arrResult.push(arr[((arr.length) / 2) - 1]);
      arrResult.push(arr[(arr.length) / 2]);
    } else {
      arrResult.push(arr[Math.floor(0.5 * arr.length)]);
    }
  } return arrResult;
};
module.exports = middle;