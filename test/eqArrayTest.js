const eqArrays = require('../eqArrays')
const assertEqual = require('../assertEqual');


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
