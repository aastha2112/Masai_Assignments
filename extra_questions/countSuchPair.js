// You are given an array A of N integers along with a target integer.
// Your task is to find out the number of pairs of integers present
// in the array whose sum is equal to the target value.

function countPairs(n, target, arr) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === target) {
        count++;
      }
    }
  }
  console.log(count);
}

countPairs(5, 9, [3, 0, 6, 2, 7]); //2
