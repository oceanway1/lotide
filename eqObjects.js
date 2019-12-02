const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

if (keys1 !== keys2) {
return true



}








}
  const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false





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
