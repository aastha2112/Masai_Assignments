// Write a program that calculates the area of a triangle given the base and the height. The area is determined using the formula: Area = (Base X Height)/2

// Requirements:
// Calculate the area using the formula provided.
// Print the result in a formatted string like: "The area of the triangle is: X" where X is the calculated area.
// Test Cases:
// Test Case 1: base = 10, height = 5. Expected output: "The area of the triangle is: 25.0"
// Test Case 2: base = 0, height = 15. Expected output: "The area of the triangle is: 0.0"
// Test Case 3: base = 8, height = 0. Expected output: "The area of the triangle is: 0.0"
// Edge Cases:
// Edge Case 1: What happens if one or both variables are zero? The output should be 0.0, as this represents a triangle with no area.
// Edge Case 2: What if negative variables are entered? The program should handle this by printing: "Invalid number, base and height must be positive numbers."

let base = 0;
let height = 15;
let areaOfTriangle = (base * height) / 2;
if (height < 0 || base < 0) {
  console.logI("Invalid number, base and height must be positive numbers.");
}
console.log(`The area of the triangle is: ${areaOfTriangle.toFixed(1)}`);
