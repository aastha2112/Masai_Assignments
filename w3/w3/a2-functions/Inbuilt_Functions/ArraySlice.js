// Write a custom function that has the same behavior of inbuilt Array Slice Function

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
//
// console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]
//
// console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]
//

function sliceArray(arr, indexFrom, indexTo) {
  let newArr = [];
  for (let i = indexFrom; i < indexTo; i++) {
    if (indexTo > arr.length) {
      indexTo = arr.length;
    }
    newArr.push(arr[i]);
  }
  console.log(newArr);
}

sliceArray(["aastha", 21, true, "Himachal"], 2, 6); //[ true, 'Himachal' ]
sliceArray(["aastha", 21, true, "Himachal"], 1, 3); //[ 21, true ]
