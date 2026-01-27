/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const ErrorMessages = {
  NO_INPUT: 'Please input an array',
  NOT_ARRAY: 'Input must be an array',
  INSUFFICIENT_ELEMENTS: 'Input array must have at least two elements',
};

const sumLargestNumbers = function (data) {
  if (data === undefined || data === null) {
    return ErrorMessages.NO_INPUT;
  }

  if (!Array.isArray(data)) {
    return ErrorMessages.NOT_ARRAY;
  }

  if (data.length < 2) {
    return ErrorMessages.INSUFFICIENT_ELEMENTS;
  }

  const sortedData = data.sort((a, b) => b - a);
  return sortedData[0] + sortedData[1];
};

console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126

module.exports.sumLargestNumbers = sumLargestNumbers;
module.exports.ErrorMessages = ErrorMessages;
