// First solution
export const longest = (s1:string, s2:string): string => {
  const splitedS1 = Array.from(new Set(s1.split("")));
  const splitedS2 = Array.from(new Set(s2.split("")));
  const final = splitedS2;

  splitedS1.forEach((letter1) => {
    if (!splitedS2.some((letter2) => letter2 === letter1)) final.push(letter1);
  });

  return final.sort().join("");
}

// Second solution
export const longest2 = (s1: string, s2: string): string => {
  return Array.from(new Set([...s1, ...s2])).sort().join('');
}

// First plance Kata solution
export const longest3 = (s1: string, s2: string): string =>
  [...new Set([...s1, ...s2])].sort().join("");


console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(longest2("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(longest3("xyaabbbccccdefww", "xxxxyyyyabklmopq"));