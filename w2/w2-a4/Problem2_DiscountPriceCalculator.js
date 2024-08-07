// A store offers a 10% discount on items priced more than $20. Develop a program to calculate and display the final price after the discount if applicable.

// Requirements:
// Apply a 10% discount if the price is greater than $20.
// Print the final price formatted as: "The final price of the item is: Y" where Y is the price after any applicable discounts.
// Test Cases:
// Test Case 1: original price = $25. Expected output: "The final price of the item is: 22.5"
// Test Case 2: original price = $20. Expected output: "The final price of the item is: 20"
// Test Case 3: original price = $15. Expected output: "The final price of the item is: 15"
// Edge Cases:
// Edge Case 1: What if the price is exactly $20? The output should show no discount applied.
// Edge Case 2: What if the price is a negative number? The program should handle this by printing: "Invalid price, the price must be a non-negative number."

let priceInDollar = 20;
let discountPercentage = 10 / 100;
if (priceInDollar > 20) {
  let finalPrice = priceInDollar * (1 - discountPercentage);
  console.log("The final price of the item is: ", finalPrice);
} else if (priceInDollar <= 20 && priceInDollar > 0) {
  finalPrice = priceInDollar;
  console.log(finalPrice);
} else if (priceInDollar < 0) {
  console.log("Invalid price, the price must be a non-negative number.");
}
