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

const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if(!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};
//for of

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


//Expected Output
//[ 1, 2, 5, 7, 2 ]
//
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]

// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
// returns an array


/* const takeUntil = function(array, callback) {
  let arr = [];
  for (let elem of array) {
    if (!callback(elem)) {
      arr.push(elem);  //when function is not true push
    } else {
      return arr;
    }
  }
} */
