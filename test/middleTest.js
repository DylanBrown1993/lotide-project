const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
const middle = require('../middle');
const assert = require('chai').assert;

// assertEqual(middle([1, 2]), [1, 2]); // should return [1, 2]
// assertEqual(middle([1, 2, 3]), [2]); // should return [2]
// assertEqual(middle([1, 2, 3, 4, 5]), [3]); // should return [3]
// assertEqual(middle([1, 2, 3, 4]), [2, 3]); // should return [2, 3]
// assertEqual(middle([1]), [1]); // should return [1]
// assertEqual(middle([]), []); // should return []

describe('#middle', () => {
  it('returns [1, 2] for [1, 2]', () => {
    const result = middle([1, 2]);
    assert.deepEqual(result, [1, 2]);
  });

  it('returns [2] for [1, 2, 3]', () => {
    const result = middle([1, 2, 3]);
    assert.deepEqual(result, [2]);
  });

  it('returns [3] for [1, 2, 3, 4, 5]', () => {
    const result = middle([1, 2, 3, 4, 5]);
    assert.deepEqual(result, [3]);
  });

  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    const result = middle([1, 2, 3, 4]);
    assert.deepEqual(result, [2, 3]);
  });

  it('returns [1] for [1]', () => {
    const result = middle([1]);
    assert.deepEqual(result, [1]);
  });

  it('returns [] for []', () => {
    const result = middle([]);
    assert.deepEqual(result, []);
  });
});



