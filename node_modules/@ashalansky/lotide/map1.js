const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
   console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
   console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
return results;
}


const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(["cat", "in", "the", "hat"], word => word[0]), ["c", "i", "t", "h"]);
assertArraysEqual(map([2,3,4], num => ++num), [3,4,5]);

const results2 = map(words, word => word.toUpperCase());
assertArraysEqual(results2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
