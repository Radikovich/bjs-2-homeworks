// Задание 1
"use strict";
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;
  avg = 0;

  for (let i = 0; i < arr.length; i++) {
    sum +=arr[i];
    const element = arr[i];
    if (element > max) {
      max = arr[i];
    }
    if (element < min) {
      min = arr[i];
    }
  }
  avg = parseFloat((sum / arr.length).toFixed(2));
  
  return { min: min, max: max, avg: avg };
}

// Задание 2
"use strict";
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum +=arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const arrSum = func(arrOfArr[i]);
    if (arrSum > max) {
      max = arrSum;
    }
  }
  
  return max;
}

// Задание 3
"use strict";
function worker2(arr) {
  return Math.abs(getArrayParams(arr).max - getArrayParams(arr).min);
}
