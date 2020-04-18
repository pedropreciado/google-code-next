// Write a recursive method, sumArray(array), that takes in an array of numbers.
// The method should return the total sum of the elements.
// 
//
// Examples:
// 
// sum_array([])             # => 0
// sum_array([5])            # => 5
// sum_array([5, 2])         # => 7
// sum_array([4, 10, -1, 2]) # => 15
function sumArray(array) {
  if (array.length === 0) {
    return 0;
  }
  if (array.length === 1) {
    return array[0];
  }

  return array[0] + sumArray(array.slice(1));
}

// TESTS - all of these should pass (i.e. equal true)
console.log("-----TESTS FOR sumArray()-----")
console.log("it should return the total sum of all elements in the array")
console.log("Test 1 Passed?: ", sumArray([]) === 0)
console.log("Test 2 Passed?: ", sumArray([5]) === 5)
console.log("Test 3 Passed?: ", sumArray([5, 2]) === 7)
console.log("Test 4 Passed?: ", sumArray([4, 10, -1, 2]) === 15)


// Write a method, pow(base, exponent), that takes in two numbers.
// The method should calculate the base raised to the exponent power.
// You can assume the exponent is always positive.
// 
// Solve this recursively!
// 
// Examples:
// 
// pow(2, 0) # => 1
// pow(2, 1) # => 2
// pow(2, 5) # => 32
// pow(3, 4) # => 81
// pow(4, 3) # => 64
function pow(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * pow(base, exponent - 1);
}

// TESTS - all of these should pass (i.e. equal true)
console.log("-----TESTS FOR pow()-----");
console.log("it should correctly calculate any base raised to the 0-th power");
console.log("Test 1 Passed?: ", pow(2, 0) === 1);
console.log("Test 2 Passed?: ", pow(7, 0) === 1);
console.log("Test 3 Passed?: ", pow(10, 0) === 1);

console.log("it should calculate the base raised to the exponent power");
console.log("Test 1 Passed?: ", pow(2, 1) === 2);
console.log("Test 2 Passed?: ", pow(2, 5) === 32);
console.log("Test 3 Passed?: ", pow(3, 4) === 81);
console.log("Test 4 Passed?: ", pow(4, 3) === 64);

// Write a method `factorial(n)` which takes a number and returns the factorial of n.
// A factorial is the product of all whole numbers between 1 and n, inclusive.
// For example, `factorial(5)` is 5 * 4 * 3 * 2 * 1 = 120.
function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// TESTS - all of these should pass (i.e. equal true)
console.log("-----TESTS FOR factorial()-----");
console.log("it should calculate the correct factorial");
console.log("Test 1 Passed?: ", factorial(7) === 5040);
console.log("Test 2 Passed?: ", factorial(4) === 24);
console.log("Test 3 Passed?: ", factorial(1) === 1);
console.log("Test 4 Passed?: ", factorial(0) === 1);
