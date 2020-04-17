const assert = require('assert');
const numOfSmallerNums = require('../solutions/03_number_of_smaller_nums');

describe('03_num_of_smaller_nums.js', () => {
  describe('numOfSmallerNums', () => {
    it('should return the correct number of smaller numbers in the array', () => {
      assert(numOfSmallerNums([8, 1, 2, 2, 3]), [4, 0, 1, 1, 3]);
    });
    it('should return array of zeros if all numbers are the same', () => {
      assert(numOfSmallerNums([7, 7, 7, 7, 7]), [0, 0, 0, 0, 0]);
    });
  });
});