{
  //
  // Problem 02 Soluton:-

  const removeDuplicates = (numbers: number[]): number[] => {
    return [...new Set(numbers)];
  };

  const Output = removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 6, 88, 88]);
  //   console.log(Output);

  //
}
