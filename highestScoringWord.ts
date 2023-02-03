let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export const high = (str: string): string => {
  const higher = str.split(" ").reduce((prev, word) => {
    const points = word.split('')
      .map((letter) => { return alphabet.findIndex((a) => a === letter) + 1 })
      .reduce((prev, cur) => { return prev + cur }, 0);
    
      if (points > prev.value) {
        return {
          value: points,
          highestScoreWord: word
        }
      }

      return prev;
  }, { value: 0, highestScoreWord: ''});

  return higher.highestScoreWord;
}

console.log(high("nessa frase qual sera a maior das pontuacoes"));