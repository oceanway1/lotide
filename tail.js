const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let arrReturn = [];
  if (arr.length <= 1) {
    return arrReturn;
  } else {
    arrReturn = arr.slice(1);
  } return arrReturn;
};
module.exports = tail;



