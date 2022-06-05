var maxSequence = function (arr) {
  // Checking extreme cases
  const onlyPositive = arr.find((e) => e < 0);
  const onlyNegative = arr.find((e) => e > 0);
  const sumAll = (acc, e) => acc + e;

  if (!onlyPositive) {
    return arr.reduce(sumAll, 0);
  }

  if (!onlyNegative) {
    return 0;
  }

  // Getting last positive number index to reduce the sub array size
  let lastIndex = arr.length - 1;
  for (var i = lastIndex; i > -1; i--) {
    if(arr[i] >= 0) {
      lastIndex = i;
      break;
    }
  }

  // Get a sub array only between positives numbers (because negatives in extremities will not change the result)
  const betweenPositives = arr.slice(arr.indexOf(onlyNegative), lastIndex + 1);

  // Finding the sub array with the higher sum value
  let max = 0;
  for(var i = 0; i < betweenPositives.length; i++) {
    for(var j = i; j < betweenPositives.length; j++) {
      const sliceSum = betweenPositives.slice(i, j + 1).reduce(sumAll, 0);

      max = Math.max(sliceSum, max);
    }
  }

  return max;
}

// Uma das melhores soluções das soluções encontradas no site, muito simples e interessante, solução matemática em O(N)
var maxSequence2 = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    console.log(sum + ' + ' + arr[i]);
    sum += arr[i];
    console.log('Soma ' + (i+1) + ': ' + sum);

    console.log('Comparando mínimo ' + sum + ' com ' + min);
    min = Math.min(sum, min);
    console.log('Mínimo ' + (i+1) + ': ' + min);

    console.log('Comparando máximo ' + ans + ' com ' + (sum - min));
    ans = Math.max(ans, sum - min);
    console.log('Reposta ' + (i+1) + ': ' + ans + '\n');
  }
  return ans;
}

var maxSequence3 = function(arr) {
  let sum = 0;
  let min = 0;
  const ans = arr.reduce((acc, value) => {
      sum += value;
      
      min = Math.min(sum, min);
      
      return Math.max(acc, sum - min);
  }, 0);

  return ans;
}


// console.log(maxSequence2([-1, -2, -3]));
// console.log(maxSequence2([1, 2, 3]));
// console.log(maxSequence2([]));
// console.log(maxSequence2([-1, -5, 4, -2, 1, -6, 5, -8, -3]));

console.log(maxSequence2([-2 -3 -1 -4 -6]));
arr = [10, -20, 15, 15]
console.log(maxSequence3([-3, 40, 3, -40, -1, 2, 1, -5, 10]));
// console.log(maxSequence([-2, 1, -3, 4, -40, -1, 2, 1, -5, 4]));