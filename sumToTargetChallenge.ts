function isThereASum(array: number[], target: number): number[] {
  // const t: number[] = [...new Set([1, 2, 3])];
  const unique = new Set(array);
  for (let value of unique.values()) {
    const counterpart = target - value;
    if (counterpart <= 0 || counterpart === value) {
      continue;
    }
    if (unique.has(counterpart)) {
      return [value, counterpart];
    };
  }

  return [0, 0];
}

console.log(isThereASum([5,7,8,19,23,32,1], 10));

