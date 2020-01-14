// A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
// subsequent number is the sum of the previous two.

// For example, the first five Fibonacci numbers are:
//   0 1 1 2 3

// If n were 4, your function should return 3; for 5, it should return 5.

// Write a function that accepts a number, n, and returns the nth Fibonacci
// number. Use a recursive solution to this problem; if you finish with time
// left over, implement an iterative solution.

// example usage:
// nthFibonacci(2); // => 1
// nthFibonacci(3); // => 2
// nthFibonacci(4); // => 3
// etc...

var nthFibonacci = function(n) {
  // I: n: number, integer
  // O: nth Fibonaicci number
  // Assumptions/constraints
  //   n: integer, but check!
  //   n: n > 1, but check

  // Your code here
  if (!Number.isInteger(n)) {
    // n is not an integer: invalid 
    return "'n' is not an integer"

  } else if (n < 0) {
    // n < 1: invalid 
    return "'n' is less than 1"

  } else if (n === 0) {
    // n < 1: invalid 
    return 0

  } else if (n < 2) {
    // base case n = 1
    return 1
  } else if (n > 1) {
    // recursive case n > 1
    return (nthFibonacci(n - 1) + nthFibonacci(n - 2))
  }
};

// nthFibonnaci: data and tests

let n = "string";
console.log("string=>nNAI: ", nthFibonacci(n));

n = 0;
console.log("0,n<1=>too small: ", nthFibonacci(n));

n = 1;
console.log("1=>1: ", nthFibonacci(n));

n = 4;
console.log("4=>3: ", nthFibonacci(n));

n = 5;
console.log("5=>5: ", nthFibonacci(n));

