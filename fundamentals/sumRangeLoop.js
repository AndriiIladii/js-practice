function sumRange(from, to) {
  if (from > to) {
    return 0;
  }

  let sum = 0;

  for (let i = from; i <= to; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumRange(5, 10));
console.log(sumRange(10, 5));
console.log(sumRange(3, 3));
