{
  //
  // Problem 03 Soluton:-

  const countWordOccurrences = (sentence: string, word: string): number => {
    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();
    const words = lowerSentence.split(" ");
    const count = words.filter((w) => w === lowerWord).length;
    return count;
  };

  const Output = countWordOccurrences("I love typescript", "typescript");
  // console.log(Output);

  //
}
