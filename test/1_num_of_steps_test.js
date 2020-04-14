const assert = require('assert');
const numOfSteps = require('../practiceproblems/1_num_of_steps');

describe('1_num_of_steps.js', () => {
  describe('numOfSteps', () => {
    it('should return correct number of steps', () => {
      assert.equal(numOfSteps(14), 6);
    });
    it('should return zero if input is zero', () => {
      assert.equal(numOfSteps(0), 0);
    });
  });
});