// ## Problem 9: Hollow Right Triangle Pattern

// **Objective:** Develop a program to create a hollow right triangle pattern with asterisks (\*) and spaces. The triangle's size is based on user input.

// ### Instructions:

// 1. Request the user to input the size of the triangle.
// 2. Generate a hollow right triangle pattern using asterisks (\*) and spaces, adhering to the specified size.

// ### Example:
// **Input:**
// Enter the size of the triangle: 5
// **Output:**
// *
// **
// * *
// *  *
// *****

function hollowRightTriangle(num) {
  for (let i = 0; i < num; i++) {
    let cont = "";

    for (let j = i; j >= 0; j--) {
      cont += "*";
    }
    console.log(cont);
  }
}

hollowRightTriangle(5);
