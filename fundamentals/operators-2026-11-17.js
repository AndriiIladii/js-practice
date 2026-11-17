let a = 1,
  b = 1;
let c = ++a;
let d = b++;

// a=2,b=2,c=2,d=1(потому что испльзуем его поэтому 1)

console.log("" + 1 + 0); // 10
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / "3"); // 2
console.log(4 + 5 + "px"); // 9px
console.log("$" + 4 + 5); // $45
console.log("4px" - 2); //NaN
console.log(" -9 " - 5); //Nan

let x = 5;
let y = (x = x + 2) * 2;
// 7, 14

function sum(a, b) {
  return +a + +b;
}
sum("1", "2");

console.log(null || 2 || undefined); // 2
console.log(1 && null && 2); // null
console.log(null || (2 && 3) || 4); // 3 но не понимаю почему 3, а не сразу 2 а потом 3
console.log(!!"0", !!""); // true, false

console.log(console.log(1) || 2 || console.log(3)); // 1,2,3

function checkAge(age) {
  if (age >= 14 && age <= 90) return true;

  return false;

  //  if(!(age >= 14) && age <= 90) return true;

  // return false
}

checkAge(87);

console.log(0 || 10); // 10
console.log(0 ?? 10); // 0
console.log("" ?? "default"); // ''
console.log(null ?? undefined ?? "x"); // 'x'

function getHeight(h) {
  if (h === null || h === undefined) {
    return 100;
  }
  return h;
}

console.log(getHeight(0));
