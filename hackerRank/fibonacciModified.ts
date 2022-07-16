function bigIntPow(n1: bigint) {
  return n1 * n1;
}

function fibonacciModified(t1: number, t2: number, n: number): bigint {
  let ti: bigint = BigInt(0);
  let bigT1: bigint = BigInt(t1);
  let bigT2: bigint = BigInt(t2);

  for (let i = 3; i <= n; i++) {
      ti = bigT1 + bigIntPow(bigT2);
      bigT1 = bigT2;
      bigT2 = ti;
  }
  
  return ti;  
}

console.log(fibonacciModified(0, 1, 10));