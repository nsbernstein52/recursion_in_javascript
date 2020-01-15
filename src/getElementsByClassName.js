// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className) {
  // I: className, string: search for className
  // O: list of the nodes that with class name of className
  // Assumptions/constraints:
  //   Do not use existing function of the same name
  //   Use:  `document.body`, `element.childNodes`, and `element.classList`
  //   Permitted for use:  underscore functions
  
  // return variable: nodeList
  var nodeList = [];
  // alias for document.body
  let bodyElement = document.body;

  var elementsContainingClass = function(element) {
    // I: element (node element) to be inspected for className
    // O: element(s) that contain className
    // Assumptions/constraints:
    //   This is the recursive function
    //   Used arr.forEach instead of possible _.each

    // base case: the element contains the class className
    if (element.classList && element.classList.contains(className)) {
      // add it to the result array (within scope from parent function)
      nodeList.push(element);
    }

    // recursive case: the element contains child nodes
    if (element.childNodes) {
      // loop through each child node
      element.childNodes.forEach(function(item) {
        // recursively call through all child nodes
        elementsContainingClass(item);
      });
    }
  }

  // call (initiate) the recursive function from within getElementsByClassName
  elementsContainingClass(bodyElement);

  return nodeList;
};  

// getElementsByClassName: data and test cases
let elementsByClassName = getElementsByClassName("targetClassName");
// console.log for testing
console.log("elementsByClassName: ", elementsByClassName);
