// You are given an array A of N integers. Your task is to find the maximu |
// m number of times an odd number is continuously repeated in the arra |
// y.
// Input
// 12
// 111122222111
// Output
// 4

// Hint
// Sample 1 Explanation
// 1is repeated 4 times from index 0 to index 3 => 4 times
// 2s repeated 5 times from index 4 to index 8 => 5 times
// 1is repeated 3 times from index 9 to index 11 => 3 times
// So, the output is 4 since 1 is odd.

function longestOdd(N, arr) {
  let count = 1;
  let maxStreak = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i] % 2 !== 0) {
      if (arr[i] === arr[i + 1]) {
        count++;
      } else {
        count = 1;
      }
      if (maxStreak < count) {
        maxStreak = count;
      }
    }
  }
  console.log(maxStreak);
}

longestOdd(12, [1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1]);
