/*
 * Given an array of integers, print a sum triangle from it such that the first level has all array elements.
 * From then, at each level number of elements is one less than the previous level and elements at the level
 * is be the Sum of consecutive two elements in the previous level.
 * 
 * Input : nums = [1, 2, 3, 4, 5]
 * Output : [48]
 *          [20, 28]
 *          [8, 12, 16]
 *          [3, 5, 7, 9]
 *          [1, 2, 3, 4, 5]
 *
 * Explanation :
 * Here,   [48]
 *         [20, 28] -->(20 + 28 = 48)
 *         [8, 12, 16] -->(8 + 12 = 20, 12 + 16 = 28)
 *         [3, 5, 7, 9] -->(3 + 5 = 8, 5 + 7 = 12, 7 + 9 = 16)
 *         [1, 2, 3, 4, 5] -->(1 + 2 = 3, 2 + 3 = 5, 3 + 4 = 7, 4 + 5 = 9)
 */
function pyramid(base) {
  // Your code here
}

// DO NOT MODIFY UNDER THIS LINE

console.log("-----TESTS FOR pyramid()-----");
console.log("it should return the correct pyramid");
console.log("Test 1 Passed?: ", (() => {
  const a = [[48], [20, 28], [8, 12, 16], [3, 5, 7, 9], [1, 2, 3, 4, 5]];
  const r = pyramid([1, 2, 3, 4, 5]) || [];
  if (r.length !== a.length) return false;
  r.forEach((row, i)=> {if (a[i] !== row) return false;});
  return true;
})());

module.exports = pyramid;