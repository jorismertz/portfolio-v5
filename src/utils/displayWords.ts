function getRandomNumber(max: number) {
  return Math.floor(Math.random() * max);
}

function generateColoredPositions(iterations: number, listLength: number) {
  const result: boolean[][] = [];
  for (let i = 0; i < iterations; i++) {
    const row: boolean[] = [];
    const randomNumberOne = getRandomNumber(2);
    if (randomNumberOne == 0) {
      for (let x = 0; x < listLength; x++) row.push(false);
    } else {
      for (let x = 0; x < listLength; x++) {
        const RandomNumberTwo = getRandomNumber(2);
        if (RandomNumberTwo == 0) row.push(false);
        if (RandomNumberTwo == 1) row.push(true);
      }
    }
    result.push(row);
  }
  return result;
}

function generateShifts(iterations: number) {
  const result: number[] = [];
  for (let i = 0; i < iterations; i++) {
    const shift = getRandomNumber(50);
    result.push(shift + 25);
  }
  return result;
}

function generateWordList(iterations: number, wordlist: string[]) {
  const result: string[][] = [];
  for (let i = 0; i < iterations; i++) {
    let wordsLeft = wordlist;
    const currentRow: string[] = [];

    wordlist.forEach(() => {
      const chosenWordIndex = getRandomNumber(wordsLeft.length);
      const chosenWord = wordsLeft[chosenWordIndex];

      wordsLeft = wordsLeft.filter((word) => word !== chosenWord);
      currentRow.push(chosenWord);
    });

    result.push(currentRow);
  }
  return result;
}

export { generateWordList, generateColoredPositions, generateShifts };
