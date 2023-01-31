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

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]));