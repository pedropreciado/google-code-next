const assert = require('assert');
const pyramid = require('../solutions/06_pyramid');

describe('06_pyramid.js', () => {
  describe('pyramid', () => {
    it('should return a correct pyramid', () => {
      assert.deepEqual(
          pyramid([1, 2, 3, 4, 5]),
          [[48], [20, 28], [8, 12, 16], [3, 5, 7, 9], [1, 2, 3, 4, 5]]);
    });
  });
});