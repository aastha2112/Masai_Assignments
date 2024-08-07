// Problem 2: Right Triangle Pattern
// Write a program to print a right triangle pattern using numbers. The size of the triangle should be taken as input from the user.

// Example:
// Input:
// Enter the size of the triangle: 4

// Output:
// 1
// 12
// 123
// 1234

function rtTriangle(num) {
  for (let i = 1; i <= num; i++) {
    let cont = "";
    for (let j = 1; j <= i; j++) {
      cont += j;
    }
    console.log(cont);
  }
}
rtTriangle(4);
