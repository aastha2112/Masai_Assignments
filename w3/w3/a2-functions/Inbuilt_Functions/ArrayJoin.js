// Write a custom function that has the same behavior of inbuilt Array Join Function

function arrJoin(arr, base) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      str += arr[i];
    } else {
      str += arr[i] + base;
    }
  }
  console.log(str);
}

arrJoin([2, 3, "aastha"], "");
