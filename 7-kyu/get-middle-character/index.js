function getMiddle(s) {
  //check for single character strings
  if (s.length === 1) {
    return s;
  }
  //check for strings with even length (using Substring since multiple characters are needed)
  else if (s.length % 2 === 0) {
    return s.substring(s.length / 2 - 1, s.length / 2 + 1);
  }
  //check for strings with odd length (using charAt since only one character is needed)
  else if (s.length % 2 !== 0) {
    return s.charAt(s.length / 2);
  }
}

//REFACTOR

function getMiddle(s) {
  //learned that slice method floors decimals by default, making this possible with one line of code
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}
