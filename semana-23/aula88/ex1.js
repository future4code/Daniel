function firstRecurrChar(string) {
  const lowerString = string.toLowerCase();
  let checkArr = [];

  for (i = 0; i < lowerString.length; i++) {
    if (checkArr.indexOf(lowerString[i]) !== -1) {
      return lowerString[i];
    }
    else {
      checkArr.push(lowerString[i]);
    }
  }
  return null;
}

console.log(firstRecurrChar("avivar"));
console.log(firstRecurrChar("BCABA"));
console.log(firstRecurrChar("ABC"));
console.log(firstRecurrChar("Amanda"));