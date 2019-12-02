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

const flatten = function(array) {
  let flattened = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let k = 0; k < array[i].length; k++) {
        flattened.push(array[i][k]);
      }
    } else {
      flattened.push(array[i]);
    }
  }
  return flattened;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual([1, 2, 3], [1, 2, 3]);
