/*
 * Given an array of integers, print a sum triangle from it such that the first level has all array elements.
 * From then, at each level number of elements is one less than the previous level and elements at the level
 * is be the Sum of consecutive two elements in the previous level.
 * 
 * Input : base = [1, 2, 3, 4, 5]
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
count = 0;
function pyramid(base) {
  if (base.length <= 1) {
    return [base];
  }
  const floor = [];

  for (let i = 0; i < base.length - 1; i++) {
    const firstNum = base[i];
    const secondNum = base[i + 1];
    const sum = firstNum + secondNum;
    floor.push(sum);
  }
  
  return pyramid(floor).concat([base]);
}

// DO NOT MODIFY UNDER THIS LINE
module.exports = pyramid;