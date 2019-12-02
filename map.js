const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);






const eqArray = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let k = 0; k < array2.length; k++) {
      if (array1[i] === array2[k]) {
        console.log("array 1= array 2");
        return true;


      }

    }
  }
  return false;
}


const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(` ✅✅✅Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(` 🛑🛑🛑  Assertion Failed:  ${actual} !== ${expected}`);
  }
  // TEST CODE  
}

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
