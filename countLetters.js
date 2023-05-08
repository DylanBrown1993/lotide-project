
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


function countLetters(sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== ' ') {
      result[letter] = (result[letter] || 0) + 1;
    }
  }
  return result
}

console.log(countLetters("lighthouse in the house"));
