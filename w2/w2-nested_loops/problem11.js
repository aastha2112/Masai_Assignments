// Problem 11: Number Triangle Pattern
// Objective: Write a program to create a number triangle pattern. The triangle's size is determined by user input.
// Instructions:
// Ask the user to enter the triangle's size.
// Print a triangle pattern where each row contains the same number, equal to the row number.
// Example:
// Input:
// Enter the size of the triangle: 4

// ​
// Output:
// 1
// 22
// 333
// 4444

function numberTriangle(num) {
  for (let i = 0; i < num; i++) {
    let cont = "";
    let count = 0;

    for (let j = i; j >= 1; j--) {
      cont += i;
    }
    console.log(cont);
  }
}

numberTriangle(5);
