var transformer = function (num) {
  var numS = num.toString();
  var final = '';

  const mapping = numS.map((n) => {
    console.log(n)
    return n;
  });

  for(var i = 0; i < numS.length; i++) {
    final += Math.pow(parseInt(numS[i]), 2).toString();
  }

  return parseInt(final);
};

var ninja = function (num) {
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}

console.log(ninja(345));
console.log(('' + 254).split(''));