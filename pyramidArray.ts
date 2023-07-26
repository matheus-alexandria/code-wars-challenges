export function pyramid(n: number) {
  const pyramid = [];

  for (let i = 1; i <= n; i++) {
    pyramid.push(new Array(i).fill(1));
  }

  return pyramid;
}

console.log(pyramid(3));