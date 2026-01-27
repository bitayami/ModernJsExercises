const { sumLargestNumbers, ErrorMessages } = require('../exercises/ex01');

test("adds 2 largest numbers from array of 2 elements", () => {
  expect(sumLargestNumbers([1, 10])).toBe(11);
});
test("adds 2 largest numbers from array of 3 elements", () => {
  expect(sumLargestNumbers([1, 2, 3])).toBe(5);
});
test("adds 2 largest numbers from array of multiple elements", () => {
  expect(sumLargestNumbers([10, 4, 34, 6, 92, 2])).toBe(126);
});

test("adds 2 largest numbers from array of multiple negative elements", () => {
  expect(sumLargestNumbers([-10, -4, -34, -6, -92, -2])).toBe(-6);
});

test("returns error message when input is missing", () => {
  expect(sumLargestNumbers()).toBe(ErrorMessages.NO_INPUT);
});

test("returns error message when input is not an array", () => {
  expect(sumLargestNumbers('')).toBe(ErrorMessages.NOT_ARRAY);
  expect(sumLargestNumbers('aaa')).toBe(ErrorMessages.NOT_ARRAY);
  expect(sumLargestNumbers(0)).toBe(ErrorMessages.NOT_ARRAY);
  expect(sumLargestNumbers(5)).toBe(ErrorMessages.NOT_ARRAY);
});

test("returns error message when input array has less than two elements", () => {
  expect(sumLargestNumbers([5])).toBe(ErrorMessages.INSUFFICIENT_ELEMENTS);
  expect(sumLargestNumbers([])).toBe(ErrorMessages.INSUFFICIENT_ELEMENTS);
})
