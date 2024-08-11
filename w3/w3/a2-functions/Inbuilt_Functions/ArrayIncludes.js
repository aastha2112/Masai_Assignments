// Write a custom function that has the same behavior of inbuilt Array Includes Function

function arrIncludes(arr, element) {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      flag = true;
      break;
    }
  }
  return flag;
}

console.log(arrIncludes(["hello", "pablo", "pineapple", "stars"], "pablo")); //true
console.log(arrIncludes(["hello", "pablo", "pineapple", "stars"], "henna")); //false
console.log(arrIncludes(["hello", "pablo", "pineapple", "stars"], 21)); //false
