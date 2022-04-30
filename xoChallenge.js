function XO(str) {
  const lis = str.toLowerCase().split('');

  const x = lis.filter((e) => e === 'x');

  const o = lis.filter((e) => e === 'o');

  return x.length === o.length;
}

// true
console.log(XO('xxoxooox'));
// false
console.log(XO('xxoxoooxx'));
// true
console.log(XO('xxoxooodalkshfashfha55DASKLJDKASDKSAÇasd///////XXXXOOOO4564546sklfx'));
// true
console.log(XO(''));

