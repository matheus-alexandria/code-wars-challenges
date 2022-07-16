function fibonacciModified(t1: number, t2: number, n: number): BigInt {
  let ti = 0;
  for (let i = 3; i <= n; i++) {
      ti = t1 + Math.pow(t2, 2);
      t1 = t2;
      t2 = ti;
  }
  
  return BigInt(ti);
}

console.log(fibonacciModified(0, 1, 10));