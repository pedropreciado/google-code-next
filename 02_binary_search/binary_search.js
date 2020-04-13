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

// Implement a function binarySearchIndex that searches a sorted 
// array for a given target. It returns the index at which the
// target is located. If the target is not in the array, it 
// returns a value of -1.

// binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 12) => 2
// binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 24)) => -1
function binarySearchIndex(array, target) {

}


module.exports = {
    binarySearch,
    binarySearchIndex
};