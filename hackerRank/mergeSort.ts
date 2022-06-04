function mergeSortTest(arr: number[]) {
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

let n: number[] = [10, 20, 5, 1, 8, 25, 9];
mergeSort(n);
console.log(n);