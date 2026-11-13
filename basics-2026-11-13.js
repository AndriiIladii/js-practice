let a = 4;
console.log(typeof a);
a = "abc";
console.log(typeof a);

const user = { name: "Ann" };
user.name = "Bob";
console.log(user.name);

// user = {} Because it's an assigment to a constant variable

function parseText(text) {
  let textToNumber = Number(text);

  if (isNaN(textToNumber)) {
    alert("Введите число");
    return null;
  }

  return textToNumber;
}

parseText("hello");
parseText("42");
