const head = require('../head');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['7']), '5'); 
  });
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);  
  });
});

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");