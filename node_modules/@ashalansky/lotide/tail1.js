const assertEqual = require('./assertEqual');
const tail = function (array) {
  let newArray = array.slice(1);
  return newArray
};


/*  if (array.length > 1) {
    console.log(array.slice(1));
  } else {
    return [];
  }
} */

//tail(array);
//assertEqual(tail([1]));

module.exports = tail;