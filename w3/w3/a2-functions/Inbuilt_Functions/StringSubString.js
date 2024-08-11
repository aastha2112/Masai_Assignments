// Write a custom function that has the same behavior of inbuilt String Substring Function

function strSubstr(str, indexFrom, indexTo) {
  let newSub = "";
  if (!indexTo) {
    indexTo = str.length;
  }
  for (let i = indexFrom; i < indexTo; i++) {
    newSub += str[i];
  }
  return newSub;
}
console.log(strSubstr("Hello World!", 3));
console.log(strSubstr("Hello World!", 3, 6));
