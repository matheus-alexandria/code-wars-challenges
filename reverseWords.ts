// My own solution
export function reverseWords(str: string): string {
  const words = str.split(" ");
  const reverse: string[] = [];

  words.forEach((word) => {
    const letters = word.split("");
    for (let i = letters.length - 1; i >= 0; i--) {
      reverse.push(letters[i]);
    }
    reverse.push(" ");
  });

  return reverse.join("").slice(0, -1);
}

// Best voted solution in codewars
const reverse = (x: string) => x.split('').reverse().join('')

export const reverseWordsMostVotedSolution = (str: string): string => str.split(' ').map(reverse).join(' ');

console.log(reverseWords('sex xes'));
console.log(reverseWordsMostVotedSolution('sex xes'));


console.log([1, 2, 3].reverse())
// [3, 2, 1]