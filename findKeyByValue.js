const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
   
const findKeyByValue = (obj, val) => {
  let output = {};
  let keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] === val) {
      output = key;
    } else {
      output = undefined;
    }
  }
  return output;
};
