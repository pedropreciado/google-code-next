const assert = require('assert');
const jewelsAndStones = require('../problems/02_jewels_and_stones');

describe('02_jewels_and_stones.js', () => {
  describe('jewelsAndStones', () => {
    it('should return correct number of jewels', () => {
      assert.equal(jewelsAndStones('aA', 'aAaAbbaAbb'), 3);
    });
    it('should be case sensitive', () => {
      assert.equal(jewelsAndStones('aAb', 'AaAbaabAbbb'), 1);
    });
    it('should return zero if no jewels found', () => {
      assert.equal(jewelsAndStones('zAA', 'aaBbzzaaZAA'), 0);
    });
  });
})