// **Problem: Complex Number Operations**

// 1. Define two complex numbers `z1` and `z2` (e.g., `z1 = 2 + 3j` and `z2 = 4 - 2j`).
// 2. Perform the following operations and print the results:
//     - Addition of `z1` and `z2`
//     - Subtraction of `z2` from `z1`
//     - Multiplication of `z1` and `z2`
//     - Division of `z1` by `z2`
// 3. Print the real and imaginary parts of each result separately.

let z1 = "2 + 3i";
let z2 = "4 - 2i";

let realZ1 = z1.includes("+") ? z1.split("+")[0] : z1.split("-")[0];
console.log({ realZ1 });

let imgZ1 = z1.includes("+")
  ? z1.split("+")[1].split("i")[0]
  : z1.split("-"[1].split("i")[0]);
console.log({ imgZ1 });

let realZ2 = z2.includes("+") ? z2.split("+")[0] : z2.split("-")[0];
console.log({ realZ2 });

let imgZ2 = z2.includes("+")
  ? z2.split("+")[1].split("i")[0]
  : z2.split("-")[1].split("i")[0];
console.log({ imgZ2 });
