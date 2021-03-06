/*
 * Given the array nums, for each nums[i] find out how many numbers in
 * the array are smaller than it. That is, for each nums[i] you have to
 * count the number of valid j's such that j != i and nums[j] < nums[i].
 *
 * Return the answer in an array.
 * 
 * Example:
 * Input: nums = [8,1,2,2,3]
 * Output: [4,0,1,1,3]
 * Explanation: 
 * For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
 * For nums[1]=1 does not exist any smaller number than it.
 * For nums[2]=2 there exist one smaller number than it (1). 
 * For nums[3]=2 there exist one smaller number than it (1). 
 * For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
 */

function numOfSmallerNums(nums) {
  // Enter code here
}

// DO NOT MODIFY UNDER THIS LINE

console.log("-----TESTS FOR numOfSmallerNums()-----");
console.log("it should return the correct number of smaller numbers in the array");
console.log("Test 1 Passed?: ", numOfSmallerNums([8, 1, 2, 2, 3]) === [4, 0, 1, 1, 3]);
console.log("should return array of zeros if all numbers are the same");
console.log("Test 2 Passed?: ", numOfSmallerNums([7, 7, 7, 7, 7]) === [0, 0, 0, 0, 0]);

module.exports = numOfSmallerNums;