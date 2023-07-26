export const isPangram = (phrase: string): boolean => {
  const alphapet = 'abcdefghijklmnopqrstuvwxyz';
  for (const letter of alphapet.split('')) {
    if (!phrase.toLocaleLowerCase().includes(letter)) {
      return false;
    }
  }

  return true;
}

console.log(isPangram('This is not a pangram.'));