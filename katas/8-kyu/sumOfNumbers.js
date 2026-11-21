function getSum(a, b) {
  let sum = 0;
  const start = Math.min(a, b);
  const finish = Math.max(a, b);

  for (let i = start; i <= finish; i++) {
    sum += i;
  }

  return sum;
}

console.log(getSum(347, 324));

// My answer Is best and more understandable than others at codewars
