// const sum = (a, b) => a + b;
// const nativeNull = () => null;

// module.exports = {sum, nativeNull};

//To start testing: npm test


// Task 1 - find sum of all number in 2 arrays
// const arrayNums1 = [7,101,3,1,9,11,100,111] // 343
// const arrayNums2 = [90,101,3,1,69,11,10,111] // 396
// 343 + 396
function sumNumsInArrays(array1, array2) {
//   return  array1.concat(array2).reduce((sum, current) => sum + current, 0)
    const newArr = [...array1, ...array2];
    let sum = 0;
    for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i]
    }
    return sum;
}


// Task 2 - Using a 'for' loop print all even
// numbers up to and including n, as a comma separated string.
// Don’t include 0
// const n = 20;
// Example output:
// "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"
function printEvenNumbers(n) {
 
}

// Task 3 - Using a 'for' loop output the elements in reverse order
// const arr = [
//   43, "what", 9, true, "cannot", false, "be", 3, true
// ];
function reverseArrayItems(array) {
    let reverse = [];
  for (let i =  0; i < array.length; i++) {
    reverse[i] = array[(array.length -1) - i]
  }
   return reverse
}

// Task 4 - Add up each element in the same position and
// create a new array containing the sum of each pair.
// Assume both arrays are of the same length.
// let array1   = [4, 6, 7];
// let array2  = [8, 1, 9];
// Example output:
// [12, 7, 16]
function sumNumsSamePosition(array1, array2) {
    let sum = array1.map((a, i) => a + array2[i]);
    return sum;
}

// Task 5 - find sum of all number in array using 'while' loop
function sumNums(array) {
    let i = 0; 
    let sum = 0;
    while(i < array.length) {
        sum += + array[i]; 
        i++;
    }
    return sum
}

// Task 6 - filter array of string using 'for' or 'while' loop
// and keep only elements where length > 4 and without the word 'error'
// const strArr = ['error01', 'in a galaxy', 'start-error', far far', 'away', '0994-error']
function filterArrayWithStrings(array) {}

// Task 7 - given a number n calculate the factorial of
// the number using 'for' or 'while' loop
// n! => 1*2*3*4*5
function factorial(n) {
    let counter = 1;
    while (n >= 1) {
      counter *= n;
      n--;
    }
    return counter;
}

module.exports = {sumNumsInArrays, printEvenNumbers, reverseArrayItems, sumNumsSamePosition, sumNums, filterArrayWithStrings, factorial};