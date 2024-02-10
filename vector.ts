export class Vector {
  constructor(private components: number[] = []) {}

  add(vector: Vector) {
    if (this.components.length !== vector.components.length) {
      throw new Error();
    }

    const vectorSum = new Vector([]);

    for (let i = 0; i < vector.components.length; i++) {
      vectorSum.components.push(this.components[i] + vector.components[i]);
    }

    return vectorSum;
  }

  subtract(vector: Vector) {
    if (this.components.length !== vector.components.length) {
      throw new Error();
    }

    const vectorSub = new Vector([]);

    for (let i = 0; i < vector.components.length; i++) {
      vectorSub.components.push(this.components[i] - vector.components[i]);
    }

    return vectorSub;
  }

  dot(vector: Vector) {
    if (this.components.length !== vector.components.length) {
      throw new Error();
    }

    let result = 0;

    for (let i = 0; i < vector.components.length; i++) {
      result += this.components[i] * vector.components[i];
    }

    return result;
  }

  norm() {
    let normalized = 0;
    for (let i = 0; i < this.components.length; i++) {
      normalized += Math.pow(this.components[i], 2);
    }

    normalized = Math.sqrt(normalized);

    return normalized;
  }

  toString() {
    return `(${this.components.join(',')})`;
  }

  equals(vector: Vector) {
    if (this.components.length !== vector.components.length) {
      return false;
    }

    for (let i = 0; i < vector.components.length; i++) {
      if (this.components[i] !== vector.components[i]) {
        return false;
      };
    }

    return true;
  }
}

const a = new Vector([1, 2, 3])
const b = new Vector([3, 4, 5])
const c = new Vector([5, 6, 7, 8])

console.log(a.add(b).toString());
console.log(a.subtract(b).equals(new Vector([-2, -2, -2])));
console.log(a.dot(b));
console.log(a.norm());
// a.add(c);