// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

const sumArray = (numbers: number[]): number => {
  return numbers.reduce((acc, current) => acc + current, 0);
};

const Output = sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(Output);
