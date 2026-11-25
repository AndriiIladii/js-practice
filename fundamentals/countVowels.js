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
