// Problem 8: Number Pyramid Pattern (Inverted)
// Write a program to print an inverted number pyramid pattern. The size of the pyramid should be taken as input from the user.
// Example:
// Input:
// Enter the size of the pyramid: 5

// ​
// Output:
// 54321
//  4321
//   321
//    21
//     1

function invertedPyramid(num) {
  for (let i = num; i >= 0; i--) {
    let cont = "";
    for (let j = 0; j < num - i; j++) {
      cont += " ";
    }
    for (let j = i; j >= 1; j--) {
      cont += j;
    }

    console.log(cont);
  }
}

invertedPyramid(5);
