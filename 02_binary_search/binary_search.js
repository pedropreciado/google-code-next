// Implement a function binarySearch that takes in a **sorted array** and 
// a target as arguments. The function should search the array for 
// the given target. It returns a boolean (true/false) indicating
// whether the given target exists in the array.

// The function should find the middle index, and compare the 
// value at this index to the target. If the value is 
//      equal to the target, then return true
//      less than the target, then search the left half of the array
//      greater than the target, then search the right half of the array

// binarySearch([5, 10, 12, 15, 20, 30, 70], 24) => false
// binarySearch([1, 2, 2, 3], 1) => true

function binarySearch(array, target) {

}

// TESTS - all of these should pass (i.e. equal true)
console.log("-----TESTS FOR binarySearch()-----")
console.log("Binary Search Test 1 Passed?: ", binarySearch([5, 10, 12, 15, 20, 30, 70], 12) === true);
console.log("Binary Search Test 2 Passed?: ", binarySearch([1, 2, 2, 3], 1) === true);
console.log("Binary Search Test 3 Passed?: ", binarySearch([5, 10, 12, 15, 20, 30, 70], 24) === false);
console.log("Binary Search Test 4 Passed?: ", binarySearch([], 3) === false);

// Implement a function binarySearchIndex that searches a sorted 
// array for a given target. It returns the index at which the
// target is located. If the target is not in the array, it 
// returns a value of -1.

// binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 12) => 2
// binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 24)) => -1
function binarySearchIndex(array, target) {

}

// TESTS - all of these should pass (i.e. equal true)
console.log("-----TESTS FOR binarySearchIndex()-----")
console.log("Binary Search Index Test 1 Passed?: ", binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 12) === 2);
console.log("Binary Search Index Test 2 Passed?: ", binarySearchIndex([1, 2, , 3], 1) === 0);
console.log("Binary Search Index Test 2 Passed?: ", binarySearchIndex([1, 2, , 3], 2) === 1);
console.log("Binary Search Index Test 3 Passed?: ", binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 24) === 1);
console.log("Binary Search Index Test 4 Passed?: ", binarySearchIndex([], 3) === -1);
