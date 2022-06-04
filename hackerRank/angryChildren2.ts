function mergeSort(arr: number[]) {
  if (arr.length > 1) {
    const middle = Math.floor(arr.length / 2);

    const leftArray = arr.slice(0, middle);
    const rightArray = arr.slice(middle, arr.length);

    mergeSort(leftArray);
    mergeSort(rightArray);

    let li = 0;
    let ri = 0;
    let i = 0;

    while (leftArray.length > li && rightArray.length > ri) {
      if (leftArray[li] > rightArray[ri]) {
        arr[i] = rightArray[ri];
        ri++;
      } else {
        arr[i] = leftArray[li];
        li++;
      }
      i++;
    }

    while(leftArray.length > li) {
      arr[i] = leftArray[li];
      li++;
      i++;
    }

    while(rightArray.length > ri) {
      arr[i] = rightArray[ri];
      ri++;
      i++;
    }
  }
}

function angryChildren(k: number, packets: number[]): number  {
  // Write your code here
  let minimum = Infinity;
  let index = 0;
  mergeSort(packets);
  
  for(let i = 0; i <= packets.length - k; i++) {
      let group = i + k;
      let unfair = 0;
      
      for(let j = i + 1; j < group; j++) {
          unfair += Math.abs(packets[i] - packets[j]);
      }
      
      if (Math.min(minimum, unfair) < minimum) {
          minimum = Math.min(minimum, unfair);
          index = i;
      }
  }
  
  console.log(packets);
  const chosen = packets.slice(index, index + k);
  console.log(chosen);

  return index;
}

// 2 4 7 8 9
let arr = [15, 8, 9, 2, 4, 7, 43];
console.log(angryChildren(3, arr));