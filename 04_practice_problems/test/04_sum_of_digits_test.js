const assert = require('assert');
const sumOfDigits = require('../problems/04_sum_of_digits');

describe('04_sum_of_digits.js', () => {
  describe('sumOfDigits', () => {
    it('should return 21 if input is 687', () => {
      assert.equal(sumOfDigits(687), 21);
    });
    it('should return 3 if input is 12', () => {
      assert.equal(sumOfDigits(12), 3);
    });
    it('should return 5 if input is 5', () => {
      assert.equal(sumOfDigits(5), 5);
    });
  });
});