function sumAll({ higher, lower }) {
  
}

function getSum(a, b) {
  const total = a < b ? (b - a) + 1 : (a - b) + 1;
  const med = (b + a) / 2;
  const result = total * med;

  return result;
}

// Solução dentre as soluções do site
function GetSum(a, b) {
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}

console.log(getSum(10,10));
console.log(getSum(-1,2));
console.log(getSum(-5,-4));
console.log(getSum(20,21));