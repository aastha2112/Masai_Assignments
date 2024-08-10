// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function

function findLastIndex(arr, element) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      index = i;
    }
  }

  return index;
}

console.log(findLastIndex(["aastha", "user1", 21, true], 89));
console.log(findLastIndex(["aastha", "user1", 21, true], true));
console.log(findLastIndex(["aastha", "user1", 21, true], 21));
console.log(findLastIndex(["aastha", "user1", 21, true], "user1"));
