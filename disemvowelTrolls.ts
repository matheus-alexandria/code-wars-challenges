export class Kata {
  static disemvowel(str: string): string {
    return str.replace(/[aeiou]/gi, '');
  }
}

console.log(Kata.disemvowel('Die all trolls'));