// Problem 7: Half Diamond Pattern
// Write a program to print a half diamond pattern using asterisks (\*) and spaces. The size of the diamond should be taken as input from the user.
// Example:
// Input:
// Enter the size of the diamond: 6

// ​
// Output:
// *
// **
// ***
// ****
// *****
// ******
// *****
// ****
// ***
// **
// *

function invertedTriangle(num) {
  for (let i = 0; i <= num; i++) {
    let cont = "";

    for (let j = i - 1; j >= 0; j--) {
      cont += "*";
    }
    console.log(cont);
  }
  for (let i = num - 1; i >= 0; i--) {
    let cont = "";

    for (let j = i - 1; j >= 0; j--) {
      cont += "*";
    }
    console.log(cont);
  }
}

invertedTriangle(6);
