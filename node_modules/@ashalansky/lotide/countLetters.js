const assertEqual = function(actual, expected) {
  if (actual === expected) {
   console.log(`Assertion Passed: ${actual} === ${expected}`);
} else
   console.log(`Assertion Failed: ${actual} !== ${expected}`);

};

const countLetters = function(itemsToCount) {
  let newArray = itemsToCount.split(" ").join("");
  const resultLetter = {};
    for (const letter of newArray) {
      if (resultLetter[letter]) {
        resultLetter[letter] += 1;
      } else {
        resultLetter[letter] = 1;
      }
  }
  return resultLetter;
};


console.log(countLetters("lighthouse in the house"));
