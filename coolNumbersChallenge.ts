type Dictionary = { [index: string]: number }
function coolNumbersChallenge(coolNumbers: number[]): number {
  let maxCoolNumber = -1;
  const occurencies: Dictionary = {};

  for (let n of coolNumbers) {
    if (occurencies[n]) {
      occurencies[n] += 1;
    } else {
      occurencies[n] = 1;
    }
  }

  for (const key in occurencies) {
    if (Number(key) === occurencies[key]) {
      maxCoolNumber = Math.max(maxCoolNumber, occurencies[key]);
    }
  }

  return maxCoolNumber;
}

console.log(coolNumbersChallenge([2,4,5,4,2,5,5,3,4,5,3,5,3,3]));