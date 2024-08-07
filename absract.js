// taking user input

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the value of n: ", (n) => {
  n = Number(n); // Convert the input to a number
  console.log("The value of n is: " + n);

  rl.close();
});
