/*
 * Given a number 0 <= num <= Infinity, find sum of its digits.
 * Try solving recursively!
 *
 * Input : n = 687
 * Output : 21
 * Explanation 687 => 6 + 8 + 7 => 21
 * 
 * Input : n = 12
 * Output : 3
 * Explanation 12 => 1 + 2 => 3
 * 
 * Hints:
 * Anything mod 10 will be the last digit in the number:
 * Ex: 12 % 10 => 2
 * 
 * These might help:
 * 12 / 10 => 1.2
 * Math.floor(12.3) => 12
 */

function sumOfDigits(num) {
  // Enter code here.
}

// DO NOT MODIFY UNDER THIS LINE

console.log("-----TESTS FOR sumOfDigits()-----");
console.log("should return 21 if input is 687");
console.log("Test 1 Passed?: ", sumOfDigits(687) === 21);
console.log("should return 3 if input is 12");
console.log("Test 2 Passed?: ", sumOfDigits(12) === 3);
console.log("should return 5 if the input is 5");
console.log("Test 3 Passed?: ", sumOfDigits(5) === 5);

module.exports = sumOfDigits;