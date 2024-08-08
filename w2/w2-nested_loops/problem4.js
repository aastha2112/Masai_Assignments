// Problem 4: Number Pyramid Pattern
// Write a program to print a number pyramid pattern. The size of the pyramid should be taken as input from the user.
// Example:
// Input:
// Enter the size of the pyramid: 4

// ​
// Output:
//    1
//   121
//  12321
// 1234321

function numberPyramid(num) {
  for (let i = 1; i <= num; i++) {
    let cont = "";
    for (let j = 1; j <= num - i; j++) {
      cont += " ";
    }
    for (let j = 1; j <= i; j++) {
      cont += j;
    }
    for (let j = i - 1; j >= 1; j--) {
      cont += j;
    }
    console.log(cont);
  }
}

numberPyramid(4);
