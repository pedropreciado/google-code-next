const assert = require('assert');
const fibs = require('../problems/05_fibs');

describe('05_fibs.js', () => {
  describe('fibs', () => {
    it('should return the 2nd fibonacci number 1', () => {
      assert.equal(fibs(2), 1);
    });
    it('should return the 4th fibonacci number 3', () => {
      assert.equal(fibs(4), 3);
    });
  });
});