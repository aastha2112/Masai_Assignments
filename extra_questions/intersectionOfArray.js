// You are given 2 arrays of N integers. Your task is to
// write a program that finds the one integer which is common
// in both arrays.
// Note: There is always one integer common in both arrays.

function arrayIntersection(n, arr1, arr2) {
  // write your code here

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr1[i] === arr2[j]) {
        console.log(arr1[i]);
        return;
      }
    }
  }
}

arrayIntersection(3, [4, 5, 7], [9, 2, 5]); //5
