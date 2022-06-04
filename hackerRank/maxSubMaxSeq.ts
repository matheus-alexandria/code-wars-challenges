function maxSubarray(arr: number[]): number[] {
  // Write your code here
  const results = [];
  let lower = -Infinity;
  let sum = 0;
  let min = 0;
  const ans = arr.reduce((acc, value) => {
      sum += value;
      
      min = Math.min(sum, min);
      
      lower = Math.max(lower, value);
      
      return Math.max(acc, sum - min);
  }, 0);
  
  if (ans === 0) {
      results.push(lower);
  } else {
      results.push(ans);
  }
  
  const ans2 = arr.reduce((acc, value) => {
      if (value > 0) {
          return acc + value;
      }
      
      return acc + 0;
  }, 0); 
  
  if (ans2 === 0) {
      results.push(lower);
      return results;
  }
  
  results.push(ans2);
  
  return results;
}