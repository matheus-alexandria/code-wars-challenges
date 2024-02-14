export function sumPairs(ints: number[], s: number): [number, number] | void {
  const freq: { [key: string]: number } = {};

  for (let i = 0; i < ints.length; i++) {
    if (freq[s - ints[i]]) {
      return [s - ints[i], ints[i]];
    }

    freq[ints[i]] = 1;
  }

  return;
}

export function sumPairs2(ints: number[], s: number): [number, number] | void {  
  const seen = new Set();
  for (const n of ints) {
    if (seen.has(s - n)) return [s - n, n];
    seen.add(n);
  }
}

console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
console.log(sumPairs2([10, 5, 2, 3, 7, 5], 10));