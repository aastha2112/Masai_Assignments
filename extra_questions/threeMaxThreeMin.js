// Given an array of N integers, print the 3 distinct maximum and 3 distinct minimum elements of the array.
// Sample Input
// 8
// 12342165
// Sample Output
// 123
// 456

function threeMaxThreeMin(N, arr) {
  //write code here

  arr.sort((a, b) => a - b);
  let a = [];
  console.log(arr);
  for (let i = 0; i < N; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    } else {
      a.push(arr[i]);
    }
  }
  console.log(a);
  let cont1 = "";
  let cont2 = "";
  for (let i = 0; i < 3; i++) {
    cont1 += a[i] + " ";
  }
  for (let i = a.length - 3; i < a.length; i++) {
    cont2 += a[i] + " ";
  }
  console.log(cont1);
  console.log(cont2);
}
threeMaxThreeMin(8, [1, 2, 3, 4, 2, 1, 6, 5]);
