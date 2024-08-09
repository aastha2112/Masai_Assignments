// function reverseString(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// }
// let word = reverseString("hello");
// console.log(word);

function character(str, k) {
  for (let i = 0; i < str.length; i++) {
    let char = str.fromCharCode(((str.charCodeAt(i) - 65 + k) % 26) + 65);
  }
  return char;
}
let charGiven = character("ABCD", 4);
console.log(charGiven);
