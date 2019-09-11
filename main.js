/* Flatten an array that could contain arbitrary nested arrays without using built in flat methods */

// Custom flatten function using reduction
const flatten = (arr) => arr.reduce((flat, next) => flat.concat(Array.isArray(next) ? flatten(next) : next), []);

/* Example Test Cases */

// Should result in [ 1, 2, 3, 4, 5 ]
var firstTest = flatten([1, [2, 3], 4, [5]]); 

// Should result in [ 1, 2, 3, 4, 5, 6, 7, 8 ]
var secondTest = flatten([[[1, 2, [3]], 4, 5], [6, 7], [8]]); 

// Should result in [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
var thirdTest = flatten([[[[1,2],3,[4,5,[6],7],8],9],10,11]); 

/* Run tests */
console.log('1st',firstTest,'2nd',secondTest,'3rd',thirdTest);