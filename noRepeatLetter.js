function firstNonRepeatingLetter(s) {
  const lower = s.toLowerCase();
  const noRepeat = lower.split('').find((letter) => lower.split(letter).length === 2);

  if (!noRepeat) {
    return '';
  }

  const caseSentitive = s.match(noRepeat);

  return caseSentitive ? noRepeat : noRepeat.toUpperCase()
}

function firstNonRepeatingLetter2(s) {
  for(var i in s) {
    if(s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}

console.log(firstNonRepeatingLetter2('FfEmMoPPq'));
console.log(firstNonRepeatingLetter('ddffbb'));