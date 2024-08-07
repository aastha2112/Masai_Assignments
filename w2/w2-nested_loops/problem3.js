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
  for (let i = 0; i < num; i++) {
    let cont = "";
    for (let j = 0; j < num; j++) {
      if (i + j == num - 1) {
        cont += "*";
      } else {
        cont += " ";
      }
    }
    console.log(cont);
  }
}
diamond(5);
