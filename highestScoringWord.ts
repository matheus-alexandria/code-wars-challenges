let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export const high = (str: string): string => {
  let highestScoreWord = '';
  str.split(" ").forEach((word) => {
    const points = word.split('')
      .map((letter) => { return alphabet.findIndex((a) => a === letter) + 1 })
      .reduce((prev, cur) => { return prev + cur }, 0);
    
      console.log(points);
  });

  return '';
}

high("aabb aaaa x")