const assert = require('assert');
const numJewelsInStones = require('../practiceproblems/2_jewels_and_stones');

describe('2_jewels_and_stones.js', () => {
  describe('numJewelsInStones', () => {
    it('should return correct number of jewels', () => {
      assert.equal(numJewelsInStones('aA', 'aAAbbbb'), 3);
    });
    it('should return zero if no jewels found', () => {
      assert.equal(numJewelsInStones('zAA', 'aaBbzzaaZAA'), 0);
    });
  });
})