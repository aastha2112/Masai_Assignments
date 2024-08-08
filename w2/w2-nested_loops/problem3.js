// Problem 3: Diamond Pattern
// Write a program to print a diamond pattern using asterisks (\*) and spaces. The size of the diamond should be taken as input from the user.
// Example:
// Input:
// Enter the size of the diamond: 5

// ​
// Output:
//   *
//  ***
// *****
//  ***
//   *

function diamond(num) {
  for (let i = 0; i <= num / 2; i++) {
    let cont = "";
    for (let j = 0; j < num - i; j++) {
      cont += " ";
    }
    for (let j = 0; j <= i; j++) {
      cont += "*";
    }
    for (let j = i - 1; j >= 0; j--) {
      cont += "*";
    }
    console.log(cont);
  }
  for (let i = num / 2 - 1; i >= 0; i--) {
    let cont = "";
    for (let j = 0; j < num - i; j++) {
      cont += " ";
    }
    for (let j = 0; j <= i; j++) {
      cont += "*";
    }
    for (let j = i - 1; j >= 0; j--) {
      cont += "*";
    }
    console.log(cont);
  }
}
diamond(5);
