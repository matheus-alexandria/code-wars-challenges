function solution(list){
  let range = [];
  let rangesList = '';

  for(var i = 0; i < list.length; i++) {
    if(list[i] === list[i + 1] - 1) {
      range.push(list[i]);
    } else {
      if(i !== 0 && list[i - 1] + 1 === list[i]) {
        if(range.length > 1) {
          rangesList += `${range[0]}-${list[i]}`;
          rangesList += ',';
        } else {
          range.push(list[i]);
          range.forEach((ele) => {
            rangesList += ele;
            rangesList += ',';
          });
          range = [];
        }
        range = [];
      } else {
        rangesList += list[i];
        rangesList += ',';
      }
    }
  }

  return rangesList.slice(0, rangesList.length - 1);
 }

console.log(solution([-10, -9, -8, -6, -3, -2, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));