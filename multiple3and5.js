function solution(number){
  let soma = 0;

  for(var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      soma += i;
    }
  }

  return soma;
}

console.log(solution(10));
console.log(solution(0));
console.log(solution(-10));