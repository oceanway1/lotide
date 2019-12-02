const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
      let firstMiddle = array[Math.floor(array.length / 2) -1];
      let secondMiddle = array[Math.floor(array.length / 2)];
        return [firstMiddle, secondMiddle];
  } else {
    let middle = array[Math.floor(array.length / 2)];
    return [middle]
  }
};

console.log(middle([1,2,3,4,5]));

module.exports = middle;
