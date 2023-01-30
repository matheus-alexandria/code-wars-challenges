function reverseWord(word: string): string {
  const wordLetters = word.split("");
  const reverseWord = [];
  while (wordLetters.length > 0) {
    reverseWord.push(wordLetters.pop());
  }

  return reverseWord.join("");
}

export function spinWords(words: string): string {
  return words.split(" ")
    .map((word) => {
      if (word.split("").length >= 5) {
        return reverseWord(word);
      }
      return word;
    })
    .join(" ");
}

console.log(spinWords("Stop spinning my words"));