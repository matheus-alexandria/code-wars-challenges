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
          // if (i === 6) {
          //   console.log(packets[i] + ' - ' + packets[j] + ' = ' + Math.abs(packets[i] - packets[j]));
          // }
      }
      unfair = unfair / (k - 1);
      console.log(i + ': ' + unfair);
      
      if (Math.min(minimum, unfair) < minimum) {
          minimum = unfair;
          index = i;
      }
  }
  
  console.log(packets);
  const chosen = packets.slice(index, index + k);
  console.log(chosen);

  let unfairness = 0;
  for(let i = 0; i < chosen.length - 1; i++) {
    for(let j = i + 1; j < chosen.length; j++) {
        // console.log(chosen[i] - chosen[j]);
        unfairness += Math.abs(chosen[i] - chosen[j]);
    }
  }

  return unfairness;
}

// 2 4 7 8 9
let arr = [4504, 1520, 5857, 4094, 4157, 3902, 822, 6643, 2422, 7288, 8245, 9948, 2822, 1784, 7802, 3142, 9739, 5629];
console.log(angryChildren(5, arr));