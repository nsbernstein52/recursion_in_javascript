// Given an array of integers, write a recursive function 
// that returns the sum of all itegers in the array.

// This type of problem is often solved using looping/iteration,
// but can also be solved recursively. If you want, you can
// first solve the problem using a loop and then refactor
// to use recursion.

// Remember to create a base case/exit condition to prevent 
// a stack overflow.

// Examples:

// sumArray([10, 20]) => 30
// sumArray([2, 4, 6, 8]) => 20
// sumArray([1, 2, 3, 4, 5]) => 15


var sumArray = function(arr) {
  // Your code here
  // I: array of numbers
  // O: sum of the numbers
  // Assumptions/constraints
  //   a) Data is good
  //   b) Must be solved recursively

  // test for not an array: return "Not an array"
  if (!Array.isArray(arr)) {
    return "Not an array"
  } else if (arr.length === 0) {
  // test for empty array: return "Empty array"
    return "Empty array"
  } else if (arr.length === 1) {
  // base case: length of array === 1, return that number
    return arr[0];
  } else {
    // recursive case: length of array > 1, call recursively
    return arr.pop() + sumArray(arr)   
  }
};

// sumArray: data and tests

let numArr = "string";
console.log("string=>Not an array: ", sumArray(numArr));

numArr = [];
console.log("[]=>Empty array: ", sumArray(numArr));

numArr = [10, 20];
console.log("[10, 20]:30 ", sumArray(numArr));

numArr = [2, 4, 6, 8];
console.log("[2,4,6,8]:20 ", sumArray(numArr));

numArr = [1, 2, 3, 4, 5];
console.log("[1 ... 5]:15 ", sumArray(numArr));

numArr = [1, -2, 3, -4, 5, -6];
console.log("[1,-2,...-6]:-3 ", sumArray(numArr));
