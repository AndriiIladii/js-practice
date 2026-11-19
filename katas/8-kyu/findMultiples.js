// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

function findMultiples(integer, limit) {
  let res = [];
  for (let i = integer; i <= limit; i += integer) {
    res.push(i);
  }

  return res;
}

findMultiples(5, 25);
