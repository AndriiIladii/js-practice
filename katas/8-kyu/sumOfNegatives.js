// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

function countPositivesSumNegatives(arr) {
  let count = 0;
  let sum = 0;

  let res = [];

  if (arr === null || arr.length == 0) {
    return [];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      sum += arr[i];
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > 0) {
      count += 1;
    }
  }
  res.push(count, sum);
  console.log(res);
  return res;
}

countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]);

// BETER SOLUTION

// function countPositivesSumNegatives(input) {
//   if (input === null || input.length === 0) {
//     return [];
//   }
//   let posCount = 0;
//   let negSum = 0;
//   for (let i = 0; i < input.length; i++) {
//      if (input[i] > 0) {
//       posCount++;
//     } else {
//       negSum += input[i];
//     }
//   }
//   return [posCount, negSum];
// }
