let a = 4;
console.log(typeof a);
a = "abc";
console.log(typeof a);

const user = { name: "Ann" };
user.name = "Bob";
console.log(user.name);

// user = {} Because it's an asigment to a constant variable

function parsePrice(price) {
  let priceToNumber = Number(price);

  if (Number.isNaN(priceToNumber)) {
    console.log("Введите число");
    return null;
  }

  console.log(priceToNumber);
}

parsePrice("hello");
parsePrice("42");
