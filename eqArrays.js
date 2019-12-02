

const eqArrays = function(arrOne, arrTwo) {
  let resultOne = '', resultTwo = '';
  if (arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++) {
      resultOne += arrOne[i];
      resultTwo += arrTwo[i];
    }
  } else {
    return false;
  }
  if (resultOne === resultTwo) {
    return true;
  } else {
    return false;
  }
};
module.exports = eqArrays;





