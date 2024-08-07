// Write a program that compares two input numbers and determines which one is larger or if they are equal.

// Requirements:
// Compare the numbers using conditional statements.
// Print which number is larger or if they are the same in a clear, formatted string.
// Test Cases:
// Test Case 1: number1 = 5, number2 = 10. Expected output: "10 is larger than 5"
// Test Case 2: number1 = 7, number2 = 7. Expected output: "Both numbers are equal"
// Test Case 3: number1 = -1, number2 = -10. Expected output: "-1 is larger than -10"
// Edge Cases:
// Edge Case 1: What if both numbers are zero? Expected output: "Both numbers are equal"
// Edge Case 2: What if the numbers are negative? The logic should still correctly identify which is larger or if they are equal.

function compareNumbers(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is larger than ${num2}`);
  } else if (num2 > num1) {
    console.log(`${num2} is larger than ${num1}`);
  } else {
    console.log(`Both numbers are equal`);
  }
}

compareNumbers(-7, -8);
