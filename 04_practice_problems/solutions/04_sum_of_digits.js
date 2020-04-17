/*
 * Given a number beween 0 and Infinity, find the sum of its digits.
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
 * Math.floor()
 */

function sumOfDigits(num) {
  if (num < 10) {
    return num;
  }

  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

// DO NOT MODIFY UNDER THIS LINE
module.exports = sumOfDigits;