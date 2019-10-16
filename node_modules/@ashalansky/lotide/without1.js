const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
   console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
   console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

let itemInArray = function(item, arrayToCheck) {
  let found = false;
  for (let arrayToCheckItem of arrayToCheck) {
    // console.log(`item: ${item}; arrayToCheckItem: ${arrayToCheckItem}`);
    // console.log(item === arrayToCheckItem);
    if (item === arrayToCheckItem) found = true;
  }
  return found;
};

const eqArrays = function(array1, array2) {
  let equivalent = true;
  if (array1.length !== array2.length) {
    equivalent = false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      equivalent = false;
    }
  }
  return equivalent;
};

let without = function(sourceArray, itemToRemove) {
  let newArr = [];
  for (let item of sourceArray) {
      if (!itemInArray(item, itemToRemove)) newArr.push(item);
    }
        return newArr;
};


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
