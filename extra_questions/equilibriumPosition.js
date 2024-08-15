// Given an array A of N positive numbers. The task is to find the position
// where equilibrium first occurs in the array. An equilibrium position in
// an array is a position such that the sum of elements before it is equal to
// the sum of elements after it. The valid index range is from [1, n-2 ]
// because there should be at least one element on both sides.

function equilibriumElement(n, arr) {
  for (let i = 1; i < n - 1; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (j = 0; j < i; j++) {
      leftSum += arr[j];
    }
    for (j = i + 1; j < n; j++) {
      rightSum += arr[j];
    }
    if (leftSum === rightSum) {
      console.log(i);
      return;
    }
  }
  console.log("-1");
}

equilibriumElement(5, [15, 1, 5, 5, 5]);
equilibriumElement(3, [1, 2, 3]);
