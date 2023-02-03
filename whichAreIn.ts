export function inArray(references: string[], words: string[]): string[] {
  const result: string[] = [];
  references.forEach((reference) => {
    words.forEach((word) => {
      const replaced = word.replace(reference, '');
      if (replaced !== word) {
        result.push(reference);
      }
    })
  });

  return [...new Set(result)].sort();
}

// Solution from codewars
export function inArrayFromKata(a1: string[], a2: string[]): string[] {
  return [...new Set(a1.filter((str) => a2.some((str2) => str2.includes(str))).sort())];
}

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]));

console.log(inArrayFromKata(["tarp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));