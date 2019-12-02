const without = function (source, itemsToRemove) {
  let filteredArray = []

  if (itemsToRemove.length === 0) {
    return source;
  }

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {

      if (source[i] !== itemsToRemove[j] && filteredArray.indexOf(source[i]) === -1 && ((j + 1) === itemsToRemove.length)) {
        filteredArray.push(source[i]);
      }
    }
  }

  return filteredArray
  
}














const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true
};




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
