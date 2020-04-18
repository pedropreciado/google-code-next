// Implement the merge sort algorithm recursively. It takes an unsorted
// array as an argument and returns the sorted array.

// Here is an outline of how the algorithm works
//      1. Continue splitting the array until you get down to the smallest elements (1 element).
//      2. Compare adjacent elements and merge them into sorted arrays.
//      3. Continue to merge sorted arrays until the final array is completely sorted.
function mergeSort(array) {

}

function merge(array1, array2) {

}

// TESTS - all of these should pass (i.e. equal true)
console.log("-----TESTS FOR merge()-----")
let arr1 = merge([1, 5, 10, 15], [0, 2, 3, 7, 10]);
let arr2 = [0, 1, 2, 3, 5, 7, 10, 10, 15];
console.log("Merge Test 1 Passed?: ",  areEqual(arr1, arr2));

arr1 = merge([10, 13, 15, 25], []);
arr2 = [10, 13, 15, 25];
console.log("Merge Test 2 Passed?: ",  areEqual(arr1, arr2));

console.log("-----TESTS FOR mergeSort()-----")
arr1 = mergeSort([]);
arr2 = [];
console.log("Merge Sort Test 1 Passed?: ",  areEqual(arr1, arr2));

arr1 = mergeSort([2]);
arr2 = [2];
console.log("Merge Sort Test 2 Passed?: ",  areEqual(arr1, arr2));

arr1= mergeSort([2, -1, 4, 3, 7, 3]);
arr2 = [-1, 2, 3, 3, 4, 7];
console.log("Merge Sort Test 3 Passed?: ",  areEqual(arr1, arr2));


function areEqual(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}