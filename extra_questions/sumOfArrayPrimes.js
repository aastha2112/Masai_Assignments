// You are given two arrays A and B, of size N1 and N2. You have to find the sum of the prime number present in A and B.

function sumOfArrPrimes(N1, A, N2, B) {
  //write code here
  function checkPrime(num) {
    let count = 0;
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
    }
    //   console.log(count)
    if (count === 1) {
      return true;
    } else {
      return false;
    }
  }
  // console.log(checkPrime(10))

  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < N1; i++) {
    let number = A[i];
    if (checkPrime(number)) {
      arr1.push(number);
    }
  }
  for (let i = 0; i < N2; i++) {
    let number = B[i];
    if (checkPrime(number)) {
      arr2.push(number);
    }
  }

  // console.log(arr1)
  // console.log(arr2)

  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
  }
  console.log(sum1 + sum2);
}

sumOfArrPrimes(5, [1, 2, 3, 4, 5], 5, [6, 7, 8, 9, 10]);
// 17
