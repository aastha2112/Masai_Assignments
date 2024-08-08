// Problem 6: Pyramid Pattern
// Write a program to print a pyramid pattern using asterisks (\*) and spaces. The size of the pyramid should be taken as input from the user.
// Example:
// Input:
// Enter the size of the pyramid: 6

// ​
// Output:
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

function pyramid(num) {
  for (let i = 0; i < num; i++) {
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

pyramid(6);
