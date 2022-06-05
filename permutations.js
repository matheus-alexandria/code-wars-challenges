// My solution
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

  const noDuplicatePermutations = noDuplicate(possiblePermutations);

  return noDuplicatePermutations;
  
}

function noDuplicate(arr) {
  const uniques = arr.filter((value, index) => {
    if(arr.indexOf(value) === index) {
      return value;
    }
  });

  return uniques;
}

// Top solution on Code Wars
function permutationsBestSolution(str) {
  return (str.length <= 1) ? [str] :
          Array.from(new Set(
            str.split('')
               .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
               .reduce((r, x) => r.concat(x), [])
          ));
 }

// Testing
console.log(permutations('aaa'));
// arr = ['ab']
// l = 'c'

// const a = arr.slice(0, 1);
// const b = arr.slice(2, 3);
// a.push(b);
// console.log(l + arr[0]);