// Given two integers -- a base and an exponent -- write a 
// recursive function that computes the exponent math and 
// returns the result.

// Exponent math is performed by multiplying the base by itself
// x number of times, where x is the exponent given.

// Examples:

// power(2, 2) => 4
// power(2, 4) => 16
// power(5, 2) => 25
// power(10, 3) => 1000

var power = function(base, exponent) {
  // Your code here
  // I: base: integer
  //    exponent: integer
  // O: base to the exponent power
  // Assumptions/constraints:
  //    integers
  //    base and exponent may be positive, zero, or negative

  if (!Number.isInteger(base)) {
    // test if base not an integer (Oh yee of little faith!)
    return "Base is not an integer"

  } else if (!Number.isInteger(exponent)) {
    // exponent is not an integer (Oh yee of little faith!)
    return "Exponent is not an integer"

  } else if (base === 0) {
    // base case: exp === 0
    return 0

  } else if (exponent === 0) {
    // base case: exp === 0
    return 1

  } else if (exponent > 0) {
    // recursive case: exp > 0
    return base * power(base, exponent -1)

  } else if (exponent < 0) {
    // recursive case: exp < 0
    return 1 / power(base, exponent * (-1))  
  }  
};
  
// power: data and tests
  
  let base = "string";
  let exponent = 1;
  console.log("string,1,=>bNAI: ", power(base,exponent));
  
  base = 1;
  exponent = "string";
  console.log("0,string=>eNAI: ", power(base,exponent));
  
  base = 0;
  exponent = 0;
  console.log("0,0=>0: ", power(base,exponent));
  
  base = 2;
  exponent = 0;
  console.log("2,0=>1: ", power(base,exponent));
  
  base = 3;
  exponent = 1;
  console.log("3,1=>3: ", power(base,exponent));
  
  base = 2;
  exponent = 8;
  console.log("2,8=>256: ", power(base,exponent));
  
  base = 8;
  exponent = 2;
  console.log("8,2=>64: ", power(base,exponent));
  
  base = 10;
  exponent = -2;
  console.log("10,-2=>0.01: ", power(base,exponent));
  
  base = -3;
  exponent = 3;
  console.log("-3,3=>-27: ", power(base,exponent));
  