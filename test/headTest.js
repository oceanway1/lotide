//const head = require('../head');
//const assertEqual = require('../assertEqual');

//console.log(head([5, 6, 7]), 5);
//console.log(head(["Hello", "Lighthouse", "Labs"]), "Hello");
const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});
