function minMax(numbers) {
  var ni = numbers.split(' ').map((n) => Number(n));
  
  return `${Math.max(...ni)} ${Math.min(...ni)}`
}

console.log(minMax('1 2 -3'));