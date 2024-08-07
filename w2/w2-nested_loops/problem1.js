// ### Problem 1: Hollow Square Pattern

// Write a program to print a hollow square pattern using asterisks (\*) and spaces. The size of the square should be taken as input from the user.

// Input:
// Enter the size of the square: 5
// Output:
// *****
// *   *
// *   *
// *   *
// *****

function squarePattern(n) {
  for (let i = 0; i < n; i++) {
    let cont = "";
    for (let j = 0; j < n; j++) {
      if (i == 0 || i == n - 1) {
        cont += "*";
      } else if (j == 0 || j == n - 1) {
        cont += "*";
      } else {
        cont += " ";
      }
    }
    console.log(cont);
  }
}
squarePattern(5);
