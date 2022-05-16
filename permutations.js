function permutations(string) {
  const letters = string.split('');

  if(letters.length == 0) {
    return [];
  }

  if(letters.length == 1) {
    return letters;
  }

  const possiblePermutations = [];

  for(var i = 0; i < letters.length; i++) {
    let letter = letters[i];

    let otherLetters = letters.filter((_, index) => index != i);

    const possibilities = permutations(otherLetters.join(''));

    for(var j = 0; j < possibilities.length; j++) {
      possiblePermutations.push(letter + possibilities[j]);
    }
  }

  return possiblePermutations;
  
}


console.log(permutations('aab'));
arr = ['ab']
l = 'c'

const a = arr.slice(0, 1);
const b = arr.slice(2, 3);
a.push(b);
console.log(l + arr[0]);