// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false;
}

// Learned ternary operations and how to use it with logical operators

function getGrade(score) {
  return score >= 90
    ? "A"
    : score >= 70 && score <= 89
      ? "B"
      : score >= 50 && score <= 69
        ? "C"
        : "F";
}

getGrade(69);

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i <= str.length - 1; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count += 1;
    }
  }

  return count;
}

countVowels("a, e, i, o, u");

function sumRange(from, to) {
  if (from > to) {
    return 0;
  }

  return ((to - from + 1) * (to + from)) / 2;
}

sumRange(5, 10);
